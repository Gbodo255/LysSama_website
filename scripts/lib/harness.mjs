// Banc de mesure commun (MISSION §6). Toute capture de l'original ET du clone passe par ici.
//
// Temps virtuel : l'horloge Playwright (Date, timers, rAF, performance) est figée puis avancée
// explicitement ; les animations WAAPI/CSS (non couvertes par l'horloge) sont mises en pause et
// leur currentTime est recalé sur le temps virtuel à chaque pas (syncAnimations).
// Réseau de l'original : archive maison (reference/har/) — voir DECISIONS.md D-006.
import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
export const ORIGIN = 'https://mirastudio.framer.website';
export const CLONE_ORIGIN = process.env.CLONE_ORIGIN || 'http://127.0.0.1:4173';
export const FRAME = 16; // période rAF de l'horloge Playwright (fake-timers : 16 ms) — DECISIONS.md D-007
export const T0 = Date.UTC(2026, 6, 15, 12, 0, 0); // instant figé commun : 15/07/2026 12:00 UTC
export const LIST_A = [1440, 1200, 810, 390];
export const LIST_B = [1920, 1280, 1024, 768, 430, 375, 360];
export const BREAKPOINTS = { tablet: 810, desktop: 1200 }; // confirmés par les @media du CSS d'origine

const HAR_DIR = path.join(ROOT, 'reference', 'har');

// Éléments hors périmètre masqués sur l'original (bandeau du template, badge Framer).
export const HIDE_ON_REF_CSS = `
#__framer-badge-container, .__framer-badge { display: none !important; }
[data-framer-name="Template Buy Button"] { display: none !important; }
`;

export const LAUNCH_ARGS = [
  '--use-angle=swiftshader',
  '--enable-unsafe-swiftshader',
  '--use-gl=angle',
  '--ignore-gpu-blocklist',
  '--force-color-profile=srgb',
  '--hide-scrollbars',
  '--font-render-hinting=none',
  '--disable-lcd-text',
  '--disable-gpu-rasterization', // raster CPU : captures pleine page ~2x plus rapides, rendu identique (D-014)
  '--autoplay-policy=no-user-gesture-required',
];

// webgl:false — captures statiques (D-019) : WebGL désactivé des deux côtés, canvas masqués ;
// le WebGL est validé par ses propres scénarios (webgl:true).
export function launch({ webgl = true, ...opts } = {}) {
  const args = webgl ? LAUNCH_ARGS : [...LAUNCH_ARGS, '--disable-webgl', '--disable-webgl2', '--disable-3d-apis'];
  return chromium.launch({ args, ...opts });
}

// ---------------------------------------------------------------- archive réseau
// Une entrée = reference/har/entries/<sha1>.json (méta) + reference/har/bodies/<sha1><ext> (corps).
// Pas d'index global : plusieurs processus de capture peuvent enregistrer en parallèle sans se marcher dessus.
const keyOf = (method, url) => method + ' ' + url;
const hashOf = (key) => crypto.createHash('sha1').update(key).digest('hex');
function readEntry(key) {
  try { return JSON.parse(fs.readFileSync(path.join(HAR_DIR, 'entries', hashOf(key) + '.json'), 'utf8')); } catch { return null; }
}
export function flushArchive() {}
const DROP_HEADERS = new Set(['content-encoding', 'content-length', 'transfer-encoding', 'connection', 'set-cookie', 'alt-svc', 'date', 'age', 'via', 'x-cache', 'cf-ray', 'server-timing', 'report-to', 'nel', 'accept-ranges', 'content-range']);

// Hôtes jamais contactés : analytics/événements Framer (non visuels, et éviter d'envoyer quoi que ce soit).
const BLOCKED = /(^https:\/\/events\.framer\.com|^https:\/\/framer\.com\/edit|framer\.com\/(?:anonymous|analytics)|google-analytics|googletagmanager)/;

function rangeFulfill(route, body, headers, status) {
  const range = route.request().headers()['range'];
  const h = { ...headers, 'accept-ranges': 'bytes' };
  if (range && status === 200) {
    const m = /bytes=(\d*)-(\d*)/.exec(range);
    if (m) {
      const start = m[1] ? +m[1] : body.length - +m[2];
      const end = m[1] && m[2] ? Math.min(+m[2], body.length - 1) : body.length - 1;
      return route.fulfill({ status: 206, body: body.subarray(start, end + 1), headers: { ...h, 'content-range': `bytes ${start}-${end}/${body.length}` } });
    }
  }
  return route.fulfill({ status, body, headers: h });
}

// mode : 'record' (réseau réel, enregistre ce qui manque) | 'replay' (hors ligne, journalise les manques)
async function routeOriginal(context, mode, missing) {
  await context.route('**/*', async (route) => {
    const req = route.request();
    const url = req.url();
    if (url.startsWith('data:') || url.startsWith('blob:')) return route.continue();
    if (BLOCKED.test(url) || req.method() !== 'GET') return route.abort();
    const key = keyOf(req.method(), url);
    const hit = readEntry(key);
    if (hit) {
      const body = await fsp.readFile(path.join(HAR_DIR, 'bodies', hit.file));
      return rangeFulfill(route, body, hit.headers, hit.status);
    }
    if (mode !== 'record') { missing.push(url); return route.abort('internetdisconnected'); }
    let res;
    try {
      const h = { ...req.headers() }; delete h['range'];
      res = await route.fetch({ headers: h, maxRetries: 2, timeout: 60000 });
    } catch (e) { missing.push(url + ' (fetch failed: ' + e.message + ')'); return route.abort(); }
    const body = await res.body();
    const headers = Object.fromEntries(Object.entries(res.headers()).filter(([k]) => !DROP_HEADERS.has(k.toLowerCase())));
    const hash = hashOf(key);
    const file = hash + path.extname(new URL(url).pathname).slice(0, 8);
    await fsp.mkdir(path.join(HAR_DIR, 'bodies'), { recursive: true });
    await fsp.mkdir(path.join(HAR_DIR, 'entries'), { recursive: true });
    await fsp.writeFile(path.join(HAR_DIR, 'bodies', file), body);
    // Méta écrite en dernier : une entrée n'existe que si son corps est complet.
    await fsp.writeFile(path.join(HAR_DIR, 'entries', hash + '.json'), JSON.stringify({ url, status: res.status(), headers, file, size: body.length, recordedAt: new Date().toISOString() }));
    return rangeFulfill(route, body, headers, res.status());
  });
}

// ---------------------------------------------------------------- script injecté (avant tout script de page)
const INIT = ({ seed }) => {
  // Aléatoire déterministe (mulberry32)
  let s = seed >>> 0;
  Math.random = function () { s |= 0; s = (s + 0x6d2b79f5) | 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  // Vrai rAF conservé (l'horloge Playwright remplace window.requestAnimationFrame) : sert à attendre un rendu réel.
  const realRAF = window.requestAnimationFrame.bind(window);
  window.__mira = {
    realFrames: (n = 2) => new Promise((r) => { const step = () => (--n <= 0 ? r() : realRAF(step)); realRAF(step); }),
    born: new WeakMap(), // Animation -> temps virtuel de création
    vnow: () => performance.now(),
  };
  const origAnimate = Element.prototype.animate;
  Element.prototype.animate = function (...args) {
    const a = origAnimate.apply(this, args);
    try { window.__mira.born.set(a, performance.now()); } catch {}
    return a;
  };

  // Vidéos en temps virtuel : aucune lecture réelle ; play() est simulé et currentTime suit l'horloge
  // virtuelle à chaque pas (syncAnimations). La page voit les événements play/playing/pause/ended habituels.
  const P = HTMLMediaElement.prototype;
  const origPause = P.pause;
  const st = (v) => (v.__v ||= { playing: false, at: 0, from: 0, frozen: false });
  const startVirtual = (v) => {
    const s = st(v);
    if (s.playing) return;
    s.playing = true; s.at = performance.now(); s.from = v.currentTime || 0;
    v.dispatchEvent(new Event('play')); v.dispatchEvent(new Event('playing'));
  };
  P.play = function () { startVirtual(this); return Promise.resolve(); };
  P.pause = function () {
    const s = st(this);
    if (s.playing) { s.playing = false; this.dispatchEvent(new Event('pause')); }
    this.__swallow = true; origPause.call(this);
  };
  Object.defineProperty(P, 'paused', { configurable: true, get() { return !st(this).playing; } });
  // Lecture native (attribut autoplay) : interceptée, convertie en lecture virtuelle, événements natifs masqués.
  document.addEventListener('play', (e) => {
    const v = e.target;
    if (!e.isTrusted || !(v instanceof HTMLMediaElement)) return;
    e.stopImmediatePropagation(); v.__swallow = true; origPause.call(v); startVirtual(v);
  }, true);
  for (const type of ['pause', 'playing']) document.addEventListener(type, (e) => {
    const v = e.target;
    if (e.isTrusted && v instanceof HTMLMediaElement && (type === 'playing' || v.__swallow)) { v.__swallow = false; e.stopImmediatePropagation(); }
  }, true);
  // requestVideoFrameCallback virtuel : les rappels sont déclenchés par le banc, juste après qu'une nouvelle
  // image (seek terminé ou première image chargée) est disponible, et non à la présentation réelle.
  const VP = HTMLVideoElement.prototype;
  let rvfcId = 0;
  VP.requestVideoFrameCallback = function (cb) { const id = ++rvfcId; (this.__rvfc ||= []).push({ id, cb }); return id; };
  VP.cancelVideoFrameCallback = function (id) { if (this.__rvfc) this.__rvfc = this.__rvfc.filter((x) => x.id !== id); };
  document.addEventListener('loadeddata', (e) => { if (e.target instanceof HTMLVideoElement) e.target.__dirty = true; }, true);
  document.addEventListener('seeked', (e) => { if (e.target instanceof HTMLVideoElement) e.target.__dirty = true; }, true);
  const setTime = (v, t) => { if (Math.abs(v.currentTime - t) > 1e-3 && v.readyState >= 1) v.currentTime = t; };
  window.__mira.syncVideos = (now) => {
    for (const v of document.querySelectorAll('video, audio')) {
      const s = v.__v; if (!s || !s.playing || s.frozen) continue;
      let t = s.from + ((now - s.at) / 1000) * (v.playbackRate || 1);
      const d = v.duration;
      if (Number.isFinite(d) && d > 0 && t >= d) {
        if (v.loop) t %= d;
        else { s.playing = false; setTime(v, d); v.dispatchEvent(new Event('ended')); continue; }
      }
      setTime(v, t);
    }
  };
  window.__mira.videosSettled = async () => {
    const vids = [...document.querySelectorAll('video')];
    await Promise.all(vids.map((v) => (v.seeking ? new Promise((r) => { v.addEventListener('seeked', r, { once: true }); setTimeout(r, 5000); }) : null)));
    const now = performance.now();
    for (const v of vids) {
      if (!v.__dirty || v.readyState < 2 || !v.__rvfc || !v.__rvfc.length) continue;
      v.__dirty = false;
      const list = v.__rvfc; v.__rvfc = [];
      v.__pf = (v.__pf || 0) + 1;
      const meta = { mediaTime: v.currentTime, presentedFrames: v.__pf, width: v.videoWidth, height: v.videoHeight, presentationTime: now, expectedDisplayTime: now, processingDuration: 0 };
      for (const x of list) { try { x.cb(now, meta); } catch (e) { setTimeout(() => { throw e; }); } }
    }
  };
};

// Recale toutes les animations WAAPI/CSS sur le temps virtuel courant.
export async function syncAnimations(page) {
  return page.evaluate(async () => {
    const M = window.__mira; if (!M) return 0;
    const now = performance.now();
    let n = 0;
    for (const a of document.getAnimations()) {
      if (!M.born.has(a)) M.born.set(a, now);
      const t0 = M.born.get(a);
      // Une animation déjà en pause par la page (playState 'paused' avant notre prise en main) reste où elle est.
      if (a.__miraOwned === undefined) a.__miraOwned = a.playState !== 'paused' || a.startTime !== null;
      if (!a.__miraOwned) continue;
      const rate = a.playbackRate || 1;
      const t = (now - t0) * rate;
      const timing = a.effect && a.effect.getComputedTiming ? a.effect.getComputedTiming() : null;
      const end = timing ? timing.endTime : Infinity;
      if (Number.isFinite(end) && t >= end) {
        if (a.playState !== 'finished') { try { a.finish(); } catch { a.currentTime = end; } }
      } else {
        if (a.playState !== 'paused') a.pause();
        a.currentTime = Math.max(0, t);
      }
      n++;
    }
    M.syncVideos(now);
    // Le décodage d'une image vidéo se fait en temps réel : on l'attend avant l'image rAF suivante,
    // sinon un canvas qui dessine la vidéo capterait une image arbitraire (non déterministe).
    await M.videosSettled();
    return n;
  });
}

/**
 * Avance le temps virtuel de `ms` en recalant les animations à chaque pas.
 * - mode 'frames' (mesure) : chaque image rAF est exécutée (runFor).
 * - mode 'fast' (stabilisation) : saut par pas de `step` ms, chaque timer dû n'est déclenché qu'une fois
 *   (fastForward) — ~1 image rAF par pas. L'état final des animations à base de temps est identique ;
 *   utilisé uniquement pour atteindre un état stable, jamais pour mesurer une courbe.
 */
export async function advance(page, ms, { step = FRAME, onFrame, mode = 'frames' } = {}) {
  let done = 0;
  while (done < ms) {
    const d = Math.min(step, ms - done);
    // Une exception levée par un timer de la page interrompt runFor : on la journalise (comme le ferait
    // le navigateur, « uncaught ») puis on termine le pas pour que le temps virtuel reste exact.
    const t0 = await page.evaluate(() => performance.now());
    for (let guard = 0; guard < 50; guard++) {
      const left = t0 + d - (await page.evaluate(() => performance.now()));
      if (left <= 0) break;
      try { if (mode === 'fast') await page.clock.fastForward(left); else await page.clock.runFor(left); }
      catch (e) { (page.__timerErrors ||= []).push(String(e.message || e).split('\n')[0].slice(0, 200)); }
    }
    done += d;
    await syncAnimations(page);
    if (onFrame) await onFrame(done);
  }
}

export async function videosSettled(page) {
  await page.evaluate(() => window.__mira.videosSettled());
}

export async function realFrames(page, n = 2) {
  await page.evaluate((k) => window.__mira.realFrames(k), n);
}

// ---------------------------------------------------------------- ouverture d'une page
export function isMobileWidth(w) { return w < BREAKPOINTS.desktop; }

/**
 * @param {'ref'|'clone'} target
 * @param {{width:number,height?:number,seed?:number,net?:'record'|'replay'}} o
 */
export async function openPage(browser, target, { width, height = 900, seed = 1, net = 'replay' } = {}) {
  const mobile = isMobileWidth(width);
  const context = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: 1,
    isMobile: mobile,
    hasTouch: mobile,
    locale: 'en-US',
    timezoneId: 'America/Los_Angeles',
    reducedMotion: 'no-preference',
    colorScheme: 'dark',
    serviceWorkers: 'block',
  });
  await context.addInitScript(INIT, { seed });
  await context.clock.install({ time: T0 });
  await context.clock.pauseAt(T0 + 1000);
  const missing = [];
  if (target === 'ref') await routeOriginal(context, net, missing);
  else await context.route(/^https?:\/\/(?!127\.0\.0\.1|localhost)/, (r) => { missing.push(r.request().url()); return r.abort(); });
  const page = await context.newPage();
  page.setDefaultTimeout(300000); // rendu WebGL logiciel : une capture pleine page peut dépasser 30 s
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  return { context, page, missing, errors, target, width, height };
}

export function urlFor(target, route) {
  return (target === 'ref' ? ORIGIN : CLONE_ORIGIN) + route;
}

export async function hideOutOfScope(page, target) {
  if (target !== 'ref') return;
  await page.addStyleTag({ content: HIDE_ON_REF_CSS });
}

async function mediaReady(page) {
  await page.evaluate(async () => {
    await document.fonts.ready;
    const imgs = [...document.images].filter((i) => i.getBoundingClientRect().width > 0);
    await Promise.all(imgs.map((i) => (i.complete ? i.decode().catch(() => {}) : new Promise((r) => { i.onload = i.onerror = r; setTimeout(r, 15000); }))));
  });
}

// Fige toutes les vidéos chargées sur l'instant `t` (s) et attend le décodage. La page les croit toujours en lecture.
export async function freezeVideos(page, t = 0) {
  await page.evaluate(async (tt) => {
    await Promise.all([...document.querySelectorAll('video')].map((v) => new Promise((res) => {
      (v.__v ||= { playing: false, at: 0, from: 0 }).frozen = true;
      if (v.readyState < 1 || Math.abs(v.currentTime - tt) < 1e-3) return res();
      v.addEventListener('seeked', () => res(), { once: true });
      v.currentTime = tt;
      setTimeout(res, 8000);
    })));
  }, t);
  await advance(page, FRAME); // une image rAF pour que les textures vidéo WebGL soient ré-envoyées
  await videosSettled(page);
}

/**
 * Navigation + stabilisation standard (MISSION §6 « Procédures ») :
 * préchargeur terminé, défilement complet par pas, retour en haut, apparitions terminées,
 * vidéos figées à t = 0.
 */
export async function gotoStable(h, route, { preloaderMs = 6000, settleMs = 2500, scrollStep = 0.5, scrollThrough = true } = {}) {
  const { page, target } = h;
  await page.goto(urlFor(target, route), { waitUntil: 'load', timeout: 120000 });
  await hideOutOfScope(page, target);
  await realFrames(page, 3);
  await advance(page, preloaderMs, { step: 100 });
  if (scrollThrough) {
    const H = await page.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < H; y += Math.round(h.height * scrollStep)) {
      await page.evaluate((yy) => window.scrollTo(0, yy), y);
      await realFrames(page, 2);
      await advance(page, 400, { step: 100 });
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await realFrames(page, 2);
  }
  await mediaReady(page);
  await advance(page, settleMs, { step: 100 });
  await freezeVideos(page, 0);
  await realFrames(page, 3);
}

/**
 * Séquence de défilement (capture de page de référence, D-017) : la fenêtre est capturée à des positions
 * fixes (pas = stepFrac × hauteur de fenêtre), après stabilisation à chaque position. Les deux cibles sont
 * capturées aux mêmes positions. `onShot({y, index, png, sections})` reçoit chaque image.
 * `sectionsSelector` : éléments dont on relève le rect à chaque position (découpe par section).
 */
export async function scrollSequence(h, { stepFrac = 0.25, settleMs = 1200, sectionsSelector = null, onShot } = {}) {
  const { page } = h;
  const H = await page.evaluate(() => document.documentElement.scrollHeight);
  const maxY = Math.max(0, H - h.height);
  const step = Math.max(1, Math.round(h.height * stepFrac));
  const ys = [];
  for (let y = 0; y < maxY; y += step) ys.push(y);
  ys.push(maxY);
  const shots = [];
  for (let i = 0; i < ys.length; i++) {
    await page.evaluate((yy) => window.scrollTo(0, yy), ys[i]);
    await realFrames(page, 2);
    await advance(page, settleMs, { step: 100 });
    await freezeVideos(page, 0);
    await realFrames(page, 2);
    const actualY = await page.evaluate(() => window.scrollY);
    const sections = sectionsSelector ? await page.evaluate((s) => [...document.querySelectorAll(s)].map((e) => { const r = e.getBoundingClientRect(); return { key: e.getAttribute('data-section') || e.dataset.framerName || '', top: r.top, height: r.height }; }), sectionsSelector) : null;
    const png = await page.screenshot();
    const shot = { y: ys[i], actualY, index: i, png, sections };
    if (onShot) await onShot(shot); else shots.push(shot);
  }
  return { scrollHeight: H, ys, shots };
}

export async function closeAll(h) {
  flushArchive();
  await h.context.close();
}
