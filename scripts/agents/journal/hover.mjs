// Survol carte d'article (/journal @1440 et @810) + survol / copie du bouton Share (article @1440).
// Usage : node scripts/agents/journal/hover.mjs  → reference/agents/journal/hover.json
import fs from 'node:fs';
import path from 'node:path';
import { launch, openPage, gotoStable, advance, realFrames, closeAll, ROOT } from '../../lib/harness.mjs';

const out = {};
const st = (page, sel) => page.evaluate((sel) => [...document.querySelectorAll(sel)].filter((e) => e.getBoundingClientRect().width > 0).slice(0, 2).map((e) => {
  const c = getComputedStyle(e); const r = e.getBoundingClientRect();
  return { w: +r.width.toFixed(2), h: +r.height.toFixed(2), x: +r.x.toFixed(2), filter: c.filter, transform: c.transform, radius: c.borderTopLeftRadius, bg: c.backgroundColor, fill: c.fill };
}), sel);
const cursor = (page) => page.evaluate(() => [...document.querySelectorAll('[data-framer-name="Read Article"], [data-framer-name="Cursor"]')].map((e) => { const r = e.getBoundingClientRect(); const c = getComputedStyle(e); return { name: e.dataset.framerName, x: r.x, y: r.y, w: r.width, h: r.height, transform: c.transform, text: e.textContent, blend: c.mixBlendMode }; }));
const b = await launch({ webgl: false });
try {
  for (const w of [1440, 810]) {
    const h = await openPage(b, 'ref', { width: w, net: 'record' });
    await gotoStable(h, '/journal');
    const card = h.page.locator('a[href="./journal/on-saying-no"]').first();
    await card.scrollIntoViewIfNeeded(); await realFrames(h.page, 2); await advance(h.page, 300);
    const sel = 'a[href="./journal/on-saying-no"] img';
    const before = await st(h.page, sel);
    const box = await card.boundingBox();
    await h.page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    const curve = [];
    await realFrames(h.page, 2);
    await advance(h.page, 800, { step: 16, onFrame: async (t) => { if (t % 48 === 0 || t <= 32) curve.push({ t, s: await st(h.page, sel) }); } });
    out[`card@${w}`] = { before, after: await st(h.page, sel), curve, cursor: await cursor(h.page) };
    await closeAll(h);
  }
  const h = await openPage(b, 'ref', { width: 1440, net: 'record' });
  await h.context.grantPermissions(['clipboard-read', 'clipboard-write'], { origin: 'https://mirastudio.framer.website' });
  await gotoStable(h, '/journal/on-saying-no');
  const btn = h.page.locator('button[aria-label="Share on LinkedIn"]');
  await btn.scrollIntoViewIfNeeded(); await realFrames(h.page, 2); await advance(h.page, 300);
  const bs = 'button[aria-label="Share on LinkedIn"], button[aria-label="Share on LinkedIn"] svg';
  const before = await st(h.page, bs);
  await btn.hover(); await realFrames(h.page, 2); await advance(h.page, 400);
  const after = await st(h.page, bs);
  const styleAttr = await btn.getAttribute('style');
  const svgFill = await h.page.locator('button[aria-label="Share on LinkedIn"] svg').getAttribute('fill');
  const copy = h.page.locator('button[aria-label="Copy URL to clipboard"]');
  const pathBefore = await copy.locator('path').getAttribute('d');
  await copy.click(); await realFrames(h.page, 2); await advance(h.page, 100);
  const pathAfter = await copy.locator('path').getAttribute('d');
  const clip = await h.page.evaluate(() => navigator.clipboard.readText().catch((e) => 'ERR ' + e));
  await advance(h.page, 2100); await realFrames(h.page, 2);
  const pathLater = await copy.locator('path').getAttribute('d');
  out.share = { before, after, styleAttr, svgFill, copy: { pathBefore, pathAfter, pathLater, clip }, errors: h.errors };
  await closeAll(h);
} finally { await b.close(); }
fs.writeFileSync(path.join(ROOT, 'reference/agents/journal/hover.json'), JSON.stringify(out, null, 1));
console.log('ok');
