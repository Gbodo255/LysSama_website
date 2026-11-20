// Audit /studio : lightbox des images « Our culture. » (ouverture, fermeture).
// Usage : node scripts/agents/studio/lightbox.mjs [largeur] → reference/agents/studio/lightbox-<w>.json
import fs from 'node:fs';
import path from 'node:path';
import { launch, openPage, gotoStable, advance, realFrames, closeAll, ROOT } from '../../lib/harness.mjs';

const width = Number(process.argv[2] || 1440);
const res = { width };
const b = await launch({ webgl: false });
const h = await openPage(b, 'ref', { width, net: 'record' });
const { page } = h;
// éléments fixes/absolus ajoutés après le clic
const probe = () => page.evaluate(() => [...document.body.querySelectorAll('*')].filter((e) => { const c = getComputedStyle(e); return c.position === 'fixed' && e.getBoundingClientRect().width > 300; }).map((e) => { const c = getComputedStyle(e); const r = e.getBoundingClientRect(); return { tag: e.tagName, cls: String(e.className).slice(0, 80), name: e.dataset.framerName, bg: c.backgroundColor, op: c.opacity, z: c.zIndex, r: [r.x, r.y, r.width, r.height].map(Math.round), img: [...e.querySelectorAll('img')].map((i) => { const q = i.getBoundingClientRect(); return [i.src.slice(40, 90), i.alt.slice(0, 30), Math.round(q.x), Math.round(q.y), Math.round(q.width), Math.round(q.height), getComputedStyle(i).opacity, getComputedStyle(i).transform]; }) }; }));
try {
  await gotoStable(h, '/studio');
  res.before = await probe();
  for (const [k, sel] of [['img1', '.framer-1frrzdj'], ['img2', '.framer-1jz2epk']]) {
    const el = page.locator(sel).filter({ visible: true }).first();
    await el.scrollIntoViewIfNeeded(); await realFrames(page, 2); await advance(page, 1500, { step: 100 });
    await el.click(); await realFrames(page, 2);
    const curve = [];
    await advance(page, 640, { onFrame: async (t) => { if (t % 32 === 0) curve.push([t, await probe()]); } });
    res[k] = { curve, open: await probe() };
    await page.keyboard.press('Escape'); await realFrames(page, 2); await advance(page, 700);
    res[k].afterEscape = await probe();
    if (res[k].afterEscape.length > res.before.length) { await page.mouse.click(5, 5); await realFrames(page, 2); await advance(page, 700); res[k].afterClickBg = await probe(); }
  }
  res.errors = h.errors;
} finally { fs.writeFileSync(path.join(ROOT, 'reference', 'agents', 'studio', `lightbox-${width}.json`), JSON.stringify(res, null, 1)); await closeAll(h); await b.close(); }
