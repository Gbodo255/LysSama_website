// Outils communs des tests fonctionnels du clone (Phase 9). Même banc que les mesures : scripts/lib/harness.mjs.
// Un navigateur par fichier de test ; un verrou inter-processus garantit qu'un seul navigateur tourne à la fois
// (machine à 3,8 Go : deux navigateurs en parallèle font planter les onglets — PROGRESS.md, contrainte machine).
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { before, after } from 'node:test';
import { launch, openPage, advance, realFrames, urlFor, closeAll, CLONE_ORIGIN } from '../../../scripts/lib/harness.mjs';

export { advance, realFrames, urlFor, closeAll, CLONE_ORIGIN };

const LOCK = path.join(os.tmpdir(), 'mira-clone-tests.lock');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function acquire() {
  for (;;) {
    try { fs.mkdirSync(LOCK); fs.writeFileSync(path.join(LOCK, 'pid'), String(process.pid)); return; } catch (e) {
      if (e.code !== 'EEXIST') throw e;
      let pid = 0; try { pid = +fs.readFileSync(path.join(LOCK, 'pid'), 'utf8'); } catch {}
      let alive = !pid; // pid pas encore écrit : on considère le détenteur vivant
      if (pid) try { process.kill(pid, 0); alive = true; } catch {}
      if (!alive) fs.rmSync(LOCK, { recursive: true, force: true }); // verrou d'un processus mort
      await sleep(500);
    }
  }
}
function release() {
  try { if (+fs.readFileSync(path.join(LOCK, 'pid'), 'utf8') === process.pid) fs.rmSync(LOCK, { recursive: true, force: true }); } catch {}
}

export async function serverUp() {
  try { await fetch(CLONE_ORIGIN + '/'); } catch {
    throw new Error(`Clone injoignable sur ${CLONE_ORIGIN} : lancer \`npx next build\` puis \`node scripts/serve-out.mjs --port=4173\``);
  }
}

/** Enregistre before/after : un navigateur partagé (webgl:false) pour tout le fichier. */
export function useBrowser() {
  const s = { browser: null };
  before(async () => { await serverUp(); await acquire(); s.browser = await launch({ webgl: false }); });
  after(async () => { try { await s.browser?.close(); } finally { release(); } });
  return s;
}

/** Chargement léger : goto + 6 s de temps virtuel (préchargeur, hydratation). `h.posts` = requêtes POST émises. */
export async function load(browser, route, width = 1440) {
  const h = await openPage(browser, 'clone', { width });
  h.page.setDefaultTimeout(30000); // le banc met 300 s (captures WebGL) : un test en échec ne doit pas bloquer 5 min
  h.page.setDefaultNavigationTimeout(120000);
  h.posts = [];
  h.page.on('request', (r) => { if (r.method() === 'POST') h.posts.push(r.url()); });
  h.response = await h.page.goto(urlFor('clone', route), { waitUntil: 'load' });
  await realFrames(h.page, 3);
  await advance(h.page, 6000, { step: 100, mode: 'fast' });
  return h;
}

/** Laisse jouer les transitions après une action (état final ; pas une mesure de courbe). */
export async function settle(page, ms = 800) {
  await realFrames(page, 2);
  await advance(page, ms, { step: 50, mode: 'fast' });
}

/** Premier élément visible (rectangle non nul) : les composants Framer existent en plusieurs copies par breakpoint. */
export const visible = (page, sel) => page.locator(sel).filter({ visible: true }).first();

/** Rectangle + opacité calculée du premier élément visible de `sel` (dans la copie visible de `root` si donné). */
export function measure(page, sel, root = null) {
  return page.evaluate(([s, r]) => {
    const shown = (e) => { const b = e.getBoundingClientRect(); return b.width > 0 && b.height > 0; };
    const scope = r ? [...document.querySelectorAll(r)].find(shown) : document;
    const e = scope && [...scope.querySelectorAll(s)].find(shown);
    if (!e) return null;
    const b = e.getBoundingClientRect();
    return { x: b.x, y: b.y, w: b.width, h: b.height, opacity: getComputedStyle(e).opacity };
  }, [sel, root]);
}

export async function center(page, sel, root = null) {
  const m = await measure(page, sel, root);
  if (!m) throw new Error('élément visible introuvable : ' + (root ? root + ' ' : '') + sel);
  return [m.x + m.w / 2, m.y + m.h / 2];
}

/** Défilement progressif jusqu'à `sel` (Lenis + apparitions au défilement), comme les scripts de banc. */
export async function scrollToSel(page, sel, offset = 100) {
  const top = await page.evaluate((s) => {
    const e = [...document.querySelectorAll(s)].find((x) => x.getBoundingClientRect().width > 0);
    if (!e) throw new Error('introuvable : ' + s);
    return e.getBoundingClientRect().top + scrollY;
  }, sel);
  const target = Math.max(0, top - offset);
  for (let y = await page.evaluate(() => scrollY); y < target; y += 450) {
    await page.evaluate((yy) => window.scrollTo(0, yy), y); await realFrames(page, 1); await advance(page, 150, { step: 50, mode: 'fast' });
  }
  await page.evaluate((yy) => window.scrollTo(0, yy), target);
  await realFrames(page, 2); await advance(page, 2500, { step: 100, mode: 'fast' });
}

export const near = (a, b, tol) => Math.abs(a - b) <= tol;
