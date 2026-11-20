// Géométrie + textes + structure des pages de l'agent contact (original, banc commun).
// Usage : node scripts/agents/contact/geom.mjs --routes=/contact --widths=1440,1200,810,390
// Sorties : reference/agents/contact/geometry/<slug>/<w>.json (+ shot <w>.webp pleine page, sans perte)
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { launch, openPage, gotoStable, closeAll, ROOT } from '../../lib/harness.mjs';

const arg = (k, d) => (process.argv.find((a) => a.startsWith(`--${k}=`)) || '').split('=')[1] || d;
const routes = arg('routes', '/contact').split(',');
const widths = arg('widths', '1440,1200,810,390').split(',').map(Number);
const shots = !process.argv.includes('--noshot');
// Même relevé que scripts/extract.mjs (copie de la source, pas de réécriture).
const src = fs.readFileSync(path.join(ROOT, 'scripts/extract.mjs'), 'utf8');
const fn = src.slice(src.indexOf('export function collectGeometry'), src.indexOf('\nconst tasks')).replace('export ', '');

// Structure des blocs riches (pages légales) : balise, texte, balises inline.
const richStructure = () => [...document.querySelectorAll('[data-framer-component-type="RichTextContainer"]')]
  .filter((c) => c.getBoundingClientRect().height > 0)
  .map((c) => ({
    name: c.closest('[data-framer-name]')?.dataset.framerName || null,
    cls: c.className,
    rect: (() => { const r = c.getBoundingClientRect(); return [r.x, r.y + scrollY, r.width, r.height].map((v) => +v.toFixed(2)); })(),
    blocks: [...c.children].map((b) => ({ tag: b.tagName.toLowerCase(), preset: b.getAttribute('data-styles-preset'), cls: b.className, text: b.innerText, html: b.innerHTML.length < 4000 ? b.innerHTML : b.innerHTML.slice(0, 4000) })),
  }));

const browser = await launch({ webgl: false });
try {
  for (const r of routes) {
    const slug = r.replace(/^\//, '') || 'home';
    const dir = path.join(ROOT, 'reference/agents/contact/geometry', slug);
    fs.mkdirSync(dir, { recursive: true });
    for (const w of widths) {
      const t0 = Date.now();
      const h = await openPage(browser, 'ref', { width: w, net: 'record' });
      await gotoStable(h, r);
      const geo = await h.page.evaluate(`(${fn})()`);
      geo.rich = await h.page.evaluate(richStructure);
      geo.errors = h.errors; geo.missing = h.missing;
      fs.writeFileSync(path.join(dir, `${w}.json`), JSON.stringify(geo, null, 1));
      if (shots) {
        const png = await h.page.screenshot({ fullPage: true });
        await sharp(png).webp({ lossless: true }).toFile(path.join(dir, `${w}.webp`));
      }
      console.log(r, w, 'items', geo.items.length, 'H', geo.scrollHeight, ((Date.now() - t0) / 1000).toFixed(1) + 's');
      await closeAll(h);
    }
  }
} finally {
  await browser.close();
}
