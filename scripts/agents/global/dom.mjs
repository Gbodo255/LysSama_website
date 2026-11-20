// DOM rendu du header (fermé / ouvert) et du footer, à chaque largeur.
// Usage : node scripts/agents/global/dom.mjs [route=/privacy-policy] 1440 1200 810 390
// Sortie : reference/agents/global/dom/<slug>-<w>-{nav,navopen,footer}.{json,txt} + captures .webp
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { launch, openPage, gotoStable, advance, realFrames, closeAll, ROOT } from '../../lib/harness.mjs';
import { slugOf } from '../../routes.mjs';
import { KEYS, domDump, summarize } from './lib.mjs';

const args = process.argv.slice(2);
const route = args[0]?.startsWith('/') ? args.shift() : '/privacy-policy';
const widths = args.map(Number);
const OUT = path.join(ROOT, 'reference/agents/global/dom');
fs.mkdirSync(OUT, { recursive: true });
const NAV = '[data-framer-name="Shared Navigation"]';
const FOOT = 'div[data-framer-name="Footer"]';
const save = (name, items) => { fs.writeFileSync(path.join(OUT, `${name}.json`), JSON.stringify(items)); fs.writeFileSync(path.join(OUT, `${name}.txt`), summarize(items)); };
const shot = async (page, name, opts = {}) => fs.writeFileSync(path.join(OUT, `${name}.webp`), await sharp(await page.screenshot(opts)).webp({ lossless: true }).toBuffer());

const b = await launch({ webgl: false });
try {
  for (const w of widths) {
    const t = Date.now();
    const h = await openPage(b, 'ref', { width: w, net: 'record' });
    const { page } = h;
    await gotoStable(h, route);
    const base = `${slugOf(route)}-${w}`;
    const env = await page.evaluate(() => ({
      htmlClass: document.documentElement.className, htmlStyle: document.documentElement.getAttribute('style'), bodyClass: document.body.className,
      rootFont: getComputedStyle(document.documentElement).fontSize, bodyBg: getComputedStyle(document.body).backgroundColor,
      lenis: typeof window.lenis, cursorAttr: [...document.querySelectorAll('[data-framer-cursor]')].map((e) => e.getAttribute('data-framer-cursor') + ':' + (e.dataset.framerName || e.tagName)),
      miralab: [...document.querySelectorAll('*')].filter((e) => /miralab/i.test(e.id + ' ' + e.className + ' ' + (e.dataset?.framerName || ''))).map((e) => e.outerHTML.slice(0, 200)),
      ls: Object.keys(localStorage), ss: Object.keys(sessionStorage), cookie: document.cookie,
      scrollH: document.documentElement.scrollHeight,
    }));
    fs.writeFileSync(path.join(OUT, `${base}-env.json`), JSON.stringify(env, null, 1));
    save(`${base}-nav`, await page.evaluate(domDump, [NAV, KEYS]));
    await shot(page, `${base}-nav`);
    // ouverture du menu : survol (desktop) ou tap sur la barre (tablette/mobile)
    if (w >= 1200) {
      const r = await page.evaluate(() => { const e = document.querySelector('[data-framer-name="Side Nav"]'); const b = e.getBoundingClientRect(); return [b.x + b.width / 2, b.y + b.height / 2]; });
      await page.mouse.move(r[0], r[1]);
    } else {
      const sel = w >= 810 ? '[data-framer-name="SideBar"]' : '[data-framer-name="Hamburger"], [data-framer-name="Side Nav"] [data-highlight]';
      const r = await page.evaluate((s) => { const e = [...document.querySelectorAll(s)].find((x) => x.getBoundingClientRect().width > 0); if (!e) return null; const b = e.getBoundingClientRect(); return [b.x + b.width / 2, b.y + b.height / 2, e.dataset.framerName]; }, sel);
      console.log('tap', r);
      if (r) await page.mouse.click(r[0], r[1]);
    }
    await realFrames(page, 2);
    await advance(page, 1500, { step: 16 });
    save(`${base}-navopen`, await page.evaluate(domDump, [NAV, KEYS]));
    await shot(page, `${base}-navopen`);
    // footer
    await page.mouse.move(w - 2, 450);
    if (w < 1200) { // refermer : tap sur l'overlay
      const r = await page.evaluate(() => { const e = document.querySelector('[data-framer-name="Overlay BG"]'); const b = e?.getBoundingClientRect(); return b && b.width ? [b.x + b.width - 5, b.y + b.height - 5] : null; });
      if (r) await page.mouse.click(r[0], r[1]);
    }
    await realFrames(page, 2);
    await advance(page, 1500, { step: 16 });
    save(`${base}-navclosed2`, await page.evaluate(domDump, [NAV, KEYS]));
    await page.evaluate((s) => document.querySelector(s)?.scrollIntoView({ block: 'end' }), FOOT);
    await realFrames(page, 2);
    await advance(page, 2500, { step: 100 });
    save(`${base}-footer`, await page.evaluate(domDump, [FOOT, KEYS]));
    const fr = await page.evaluate((s) => { const e = [...document.querySelectorAll(s)].find((x) => x.getBoundingClientRect().height > 0); const r = e.getBoundingClientRect(); return { x: 0, y: Math.max(0, r.y), width: innerWidth, height: Math.min(innerHeight - Math.max(0, r.y), r.height) }; }, FOOT);
    await shot(page, `${base}-footer`, { clip: fr });
    console.log(w, 'ok', Math.round((Date.now() - t) / 1000) + 's', 'missing', h.missing.length, 'errors', h.errors.length, h.errors.slice(0, 3));
    await closeAll(h);
  }
} finally { await b.close(); }
