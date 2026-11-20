// Audit /studio : compteurs (courbe + relecture), transformations au défilement, survols, lightbox.
// Usage : node scripts/agents/studio/anim.mjs [largeur]  → reference/agents/studio/anim-<w>.json
import fs from 'node:fs';
import path from 'node:path';
import { launch, openPage, gotoStable, advance, realFrames, closeAll, ROOT } from '../../lib/harness.mjs';

const width = Number(process.argv[2] || 1440);
const OUT = path.join(ROOT, 'reference', 'agents', 'studio', `anim-${width}.json`);
const res = {};
const save = () => fs.writeFileSync(OUT, JSON.stringify(res, null, 1));
const b = await launch({ webgl: false });
const h = await openPage(b, 'ref', { width, net: 'record' });
const { page } = h;
const scrollTo = async (y) => { await page.evaluate((yy) => window.scrollTo(0, yy), y); await realFrames(page, 2); };
const topOf = (sel) => page.evaluate((s) => { const e = document.querySelector(s); return e ? e.getBoundingClientRect().top + scrollY : null; }, sel);
const counters = () => page.evaluate(() => [...document.querySelectorAll('[data-framer-name="Metrics"] [data-framer-name="Big metric"]')].filter((e) => e.getBoundingClientRect().width).map((e) => e.textContent));
const st = (sel) => page.evaluate((s) => [...document.querySelectorAll(s)].filter((e) => e.getBoundingClientRect().width).map((e) => { const c = getComputedStyle(e); return { t: c.transform, o: c.opacity, mask: c.webkitMaskImage?.slice(0, 80), top: Math.round(e.getBoundingClientRect().top) }; }), sel);
try {
  await gotoStable(h, '/studio');
  // 1. Compteurs
  await scrollTo(0); await advance(page, 500);
  res.countersAtTop = await counters();
  const ny = await topOf('[data-framer-name="Numbers"]');
  res.numbersTop = ny;
  await scrollTo(ny - 300);
  const curve = [];
  await advance(page, 1600, { onFrame: async (t) => curve.push([t, ...(await counters())]) });
  res.counterCurve = curve;
  await scrollTo(0); await advance(page, 300); res.countersAfterLeave = await counters();
  await scrollTo(ny - 300); const c2 = [];
  await advance(page, 800, { onFrame: async (t) => { if (t % 48 === 0) c2.push([t, ...(await counters())]); } });
  res.counterReplay = c2; save();
  // 2. Hero : transformation au défilement (opacity/scale) et parallaxe du contenu
  res.heroScroll = [];
  for (const y of [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1100]) {
    await scrollTo(y); await advance(page, 1500, { step: 100 });
    res.heroScroll.push({ y, hero: await st('[data-framer-name="Hero"]'), inside: await st('.framer-hb5ox2'), bg: await st('[data-framer-name="BG"]') });
  }
  // courbe temporelle : saut 0 → 900
  await scrollTo(0); await advance(page, 1500, { step: 100 });
  await scrollTo(900); const hc = [];
  await advance(page, 1200, { onFrame: async (t) => { if (t % 32 === 0) hc.push([t, (await st('[data-framer-name="Hero"]'))[0]]); } });
  res.heroCurve = hc; save();
  // 3. Principes : numéros (y), filets
  const py = await topOf('[data-framer-name="Principles"] [data-framer-name="Principles"]');
  res.principlesTop = py; res.principles = [];
  for (let k = -900; k <= 900; k += 150) {
    await scrollTo(py + k); await advance(page, 1500, { step: 100 });
    res.principles.push({ scroll: py + k, num: await st('.framer-c5hpba'), cards: await st('[data-framer-name="Principles"] [data-framer-name="Desktop"], [data-framer-name="Principles"] [data-framer-name="Phone"]') });
  }
  save();
  // 4. Survols (styles avant/après) : lignes de prix, cartes de principes, images culture
  res.hover = [];
  for (const sel of ['[data-framer-name="Recognition"] .framer-cnoxjv, [data-framer-name="Recognition"] .framer-qcl1vt', '.framer-qptq4g, .framer-1h11oj7', '.framer-1frrzdj', '.framer-1jz2epk']) {
    const el = page.locator(sel).filter({ visible: true }).first();
    if (!(await el.count())) { res.hover.push({ sel, missing: true }); continue; }
    await el.scrollIntoViewIfNeeded(); await realFrames(page, 2); await advance(page, 1500, { step: 100 });
    const snap = () => el.evaluate((e) => [e, ...e.querySelectorAll('*')].slice(0, 40).map((x) => { const c = getComputedStyle(x); return [c.transform, c.opacity, c.color, c.backgroundColor, c.cursor, c.filter].join('|'); }));
    const before = await snap();
    await el.hover(); await realFrames(page, 2); await advance(page, 800);
    const after = await snap();
    res.hover.push({ sel, cursor: before[0].split('|')[4], changed: after.map((a, i) => (a !== before[i] ? [i, before[i], a] : null)).filter(Boolean) });
    await page.mouse.move(0, 0); await advance(page, 500);
  }
  save();
  // 5. Lightbox : clic sur l'image 1, puis Échap ; clic sur l'image 2 puis clic sur le fond
  const lb = async () => page.evaluate(() => { const o = document.querySelector('#overlay'); return { overlayChildren: o?.children.length, html: o?.innerHTML.slice(0, 600), imgs: [...(o?.querySelectorAll('img') || [])].map((i) => { const r = i.getBoundingClientRect(); return [i.src.slice(0, 100), Math.round(r.x), Math.round(r.y), Math.round(r.width), Math.round(r.height)]; }), bg: o?.firstElementChild ? getComputedStyle(o.firstElementChild).backgroundColor : null }; });
  res.lightbox = {};
  const i1 = page.locator('.framer-1frrzdj').filter({ visible: true }).first();
  await i1.scrollIntoViewIfNeeded(); await advance(page, 1000, { step: 100 });
  await i1.click(); await realFrames(page, 2);
  const lc = []; await advance(page, 560, { onFrame: async (t) => { if (t % 80 === 0) lc.push([t, await page.evaluate(() => { const o = document.querySelector('#overlay'); return [...(o?.querySelectorAll('*') || [])].slice(0, 4).map((x) => getComputedStyle(x).opacity + '/' + getComputedStyle(x).transform); })]); } });
  res.lightbox.openCurve = lc; res.lightbox.open = await lb();
  await page.keyboard.press('Escape'); await advance(page, 700); res.lightbox.afterEscape = await lb();
  if (res.lightbox.afterEscape.overlayChildren) { await page.mouse.click(10, 10); await advance(page, 700); res.lightbox.afterClick = await lb(); }
  save();
  console.log('ok', width, 'missing', h.missing.length, 'errors', h.errors.length);
} finally { save(); await closeAll(h); await b.close(); }
