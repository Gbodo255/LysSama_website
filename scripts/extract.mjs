// Étapes B + D — pour chaque route × largeur, via le banc (rejeu hors ligne pour l'original) :
//   reference/dom/<page>/<w>.html          DOM rendu stabilisé
//   reference/geometry/<page>/<w>.json     éléments visibles : rect page, styles calculés, retours à la ligne
//   reference/text/<page>/<w>.json         textes visibles ordonnés (état par défaut)
//   reference/screenshots/<page>/<w>/seq-NNN.webp + seq.json  séquence de défilement (WebP sans perte, D-017)
// Le même script sert au clone : --target=clone écrit dans clone-ref/ (même structure).
// Usage : node scripts/extract.mjs [--target=ref|clone] [--only=/,/studio] [--widths=1440,390] [--jobs=2] [--force]
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { launch, openPage, gotoStable, scrollSequence, closeAll, LIST_A, LIST_B, ROOT } from './lib/harness.mjs';
import { ROUTES, slugOf } from './routes.mjs';

const arg = (k, d) => (process.argv.find((a) => a.startsWith(`--${k}=`)) || '').split('=')[1] || d;
const target = arg('target', 'ref');
const routes = arg('only', '') ? arg('only', '').split(',') : ROUTES;
const widths = arg('widths', '') ? arg('widths', '').split(',').map(Number) : [...LIST_A, ...LIST_B];
const jobs = +arg('jobs', 2);
const force = process.argv.includes('--force');
const BASE = path.join(ROOT, target === 'ref' ? 'reference' : 'clone-ref');

// Exécuté dans la page : relevé des éléments visibles.
export function collectGeometry() {
  const STYLE_KEYS = ['fontFamily', 'fontWeight', 'fontSize', 'lineHeight', 'letterSpacing', 'textTransform', 'fontStyle', 'fontFeatureSettings', 'fontVariationSettings', 'textAlign', 'textDecorationLine', 'color', 'backgroundColor', 'backgroundImage', 'borderTopWidth', 'borderTopColor', 'borderTopStyle', 'borderRadius', 'boxShadow', 'filter', 'backdropFilter', 'mixBlendMode', 'clipPath', 'maskImage', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'gap', 'opacity', 'transform', 'objectFit', 'objectPosition', 'position', 'zIndex', 'overflow', 'whiteSpace', 'webkitFontSmoothing'];
  const sy = window.scrollY, sx = window.scrollX;
  const visible = (el) => {
    const r = el.getBoundingClientRect();
    if (r.width < 0.5 || r.height < 0.5) return false;
    for (let e = el; e && e !== document.documentElement; e = e.parentElement) {
      const cs = getComputedStyle(e);
      if (cs.display === 'none' || cs.visibility === 'hidden' || +cs.opacity === 0) return false;
    }
    return true;
  };
  const sel = (el) => {
    const parts = [];
    for (let e = el; e && e.nodeType === 1 && e !== document.body; e = e.parentElement) {
      let s = e.tagName.toLowerCase();
      if (e.dataset.framerName) s += `[data-framer-name="${e.dataset.framerName}"]`;
      const sib = e.parentElement ? [...e.parentElement.children].filter((c) => c.tagName === e.tagName) : [];
      if (sib.length > 1) s += `:nth-of-type(${sib.indexOf(e) + 1})`;
      parts.unshift(s);
    }
    return parts.join('>');
  };
  const ownText = (el) => [...el.childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent).join('').replace(/\s+/g, ' ').trim();
  const lines = (el) => {
    // Premier mot de chaque ligne rendue (Range.getClientRects sur chaque mot).
    const out = []; let lastTop = null;
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    for (let n = walker.nextNode(); n; n = walker.nextNode()) {
      const re = /\S+/g; let m;
      while ((m = re.exec(n.textContent))) {
        const range = document.createRange(); range.setStart(n, m.index); range.setEnd(n, m.index + m[0].length);
        const rect = range.getClientRects()[0]; if (!rect) continue;
        if (lastTop === null || rect.top - lastTop > rect.height * 0.5) { out.push(m[0]); lastTop = rect.top; }
      }
    }
    return out;
  };
  const items = [], texts = [];
  for (const el of document.body.querySelectorAll('*')) {
    const tag = el.tagName.toLowerCase();
    if (['script', 'style', 'noscript', 'template'].includes(tag)) continue;
    const own = ownText(el);
    const isMedia = ['img', 'video', 'canvas', 'svg', 'iframe', 'picture'].includes(tag);
    const isInteractive = ['a', 'button', 'input', 'textarea', 'select', 'label'].includes(tag);
    if (!(own || isMedia || isInteractive || el.dataset.framerName)) continue;
    if (!visible(el)) continue;
    const r = el.getBoundingClientRect(), cs = getComputedStyle(el);
    const it = { sel: sel(el), tag, name: el.dataset.framerName || null, rect: { x: +(r.x + sx).toFixed(2), y: +(r.y + sy).toFixed(2), width: +r.width.toFixed(2), height: +r.height.toFixed(2) }, style: Object.fromEntries(STYLE_KEYS.map((k) => [k, cs[k]])) };
    if (own) { it.text = own.slice(0, 200); it.lines = lines(el); texts.push(own); }
    if (tag === 'a') { it.href = el.getAttribute('href'); it.targetAttr = el.getAttribute('target'); it.rel = el.getAttribute('rel'); }
    if (tag === 'img') { it.src = el.currentSrc || el.src; it.alt = el.getAttribute('alt'); it.natural = [el.naturalWidth, el.naturalHeight]; }
    if (tag === 'video') { it.src = el.currentSrc || el.src; it.poster = el.poster; it.loop = el.loop; it.muted = el.muted; }
    if (tag === 'canvas') it.canvas = [el.width, el.height];
    if (['input', 'textarea', 'select'].includes(tag)) { it.type = el.type; it.placeholder = el.placeholder; it.value = el.value; it.nameAttr = el.name; }
    items.push(it);
  }
  return { url: location.pathname, viewport: [innerWidth, innerHeight], scrollHeight: document.documentElement.scrollHeight, scrollWidth: document.documentElement.scrollWidth, title: document.title, items, texts };
}

const tasks = [];
for (const r of routes) for (const w of widths) tasks.push({ r, w });
const browser = await launch();
const report = [];
async function worker() {
  while (tasks.length) {
    const { r, w } = tasks.shift();
    const slug = slugOf(r);
    const geoFile = path.join(BASE, 'geometry', slug, `${w}.json`);
    if (!force) { try { await fs.access(geoFile); continue; } catch {} }
    const t = Date.now();
    const h = await openPage(browser, target, { width: w });
    try {
      await gotoStable(h, r);
      // Géométrie relevée en haut de page après défilement complet (apparitions déclenchées et terminées).
      const geo = await h.page.evaluate(collectGeometry);
      const dom = await h.page.content();
      for (const d of ['geometry', 'text', 'dom']) await fs.mkdir(path.join(BASE, d, slug), { recursive: true });
      const shotDir = path.join(BASE, 'screenshots', slug, String(w));
      await fs.rm(shotDir, { recursive: true, force: true });
      await fs.mkdir(shotDir, { recursive: true });
      await fs.writeFile(geoFile, JSON.stringify({ ...geo, texts: undefined }, null, 1));
      await fs.writeFile(path.join(BASE, 'text', slug, `${w}.json`), JSON.stringify(geo.texts, null, 1));
      await fs.writeFile(path.join(BASE, 'dom', slug, `${w}.html`), dom);
      // Capture de page = séquence de défilement (D-017) : pas de 25 % de fenêtre (liste A), 100 % (liste B).
      const seq = await scrollSequence(h, {
        stepFrac: LIST_A.includes(w) ? 0.25 : 1,
        sectionsSelector: target === 'ref' ? 'main > div > div > *, [data-framer-name] > section, section' : '[data-section]',
        onShot: (s) => sharp(s.png).webp({ lossless: true, effort: 4 }).toFile(path.join(shotDir, `seq-${String(s.index).padStart(3, '0')}.webp`)).then(() => { s.png = undefined; }),
      });
      await fs.writeFile(path.join(shotDir, 'seq.json'), JSON.stringify({ scrollHeight: seq.scrollHeight, ys: seq.ys }, null, 1));
      report.push({ r, w, ok: true, ms: Date.now() - t, height: geo.scrollHeight, items: geo.items.length, missing: h.missing.length, errors: h.errors.length });
    } catch (e) {
      report.push({ r, w, ok: false, err: String(e).slice(0, 300) });
    }
    console.log(JSON.stringify(report.at(-1)));
    await closeAll(h);
  }
}
await Promise.all(Array.from({ length: jobs }, worker));
await browser.close();
await fs.mkdir(BASE, { recursive: true });
await fs.appendFile(path.join(BASE, 'extract-log.jsonl'), report.map((x) => JSON.stringify({ ...x, at: new Date().toISOString() })).join('\n') + '\n');
