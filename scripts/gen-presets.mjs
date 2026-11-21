// Styles de texte globaux (Phase 2) : toutes les règles .framer-styles-preset-* (y compris leurs @media par breakpoint)
// et les règles @supports globales, lues par CSSOM dans le CSS de chaque page de l'original, dédoublonnées dans l'ordre source.
// Usage : node scripts/gen-presets.mjs → src/styles/presets.css
import fs from 'node:fs';
import path from 'node:path';
import { launch, ROOT } from './lib/harness.mjs';

const dir = path.join(ROOT, 'reference/css');
const b = await launch({ webgl: false });
const p = await (await b.newContext({ javaScriptEnabled: true })).newPage();
const seen = new Set(), out = [];
for (const f of fs.readdirSync(dir).filter((f) => f.endsWith('.css') && f !== 'design-system.css').sort((a, z) => (a === 'home.css' ? -1 : z === 'home.css' ? 1 : a.localeCompare(z)))) {
  await p.setContent('<style></style>');
  const rules = await p.evaluate((css) => {
    const st = document.querySelector('style'); st.textContent = css;
    const res = [];
    const visit = (list, wrap) => { for (const r of list) {
      if (r.type === 1) { if (/framer-styles-preset-/.test(r.selectorText)) res.push(wrap(r.cssText)); }
      else if (r.type === 4) visit(r.cssRules, (t) => wrap(`@media ${r.media.mediaText} { ${t} }`));
      else if (r.type === 12) { if (!/framer-[A-Za-z0-9]{5,}/.test(r.cssText) || /:root|body/.test(r.cssText)) res.push(wrap(r.cssText)); }
    } };
    visit(st.sheet.cssRules, (t) => t);
    return res;
  }, fs.readFileSync(path.join(dir, f), 'utf8'));
  for (const r of rules) if (!seen.has(r)) { seen.add(r); out.push(r); }
}
await b.close();
// Cascade de l'original : dans chaque feuille, la règle de base d'un preset précède ses @media → @supports, bases, puis @media.
const kind = (r) => (r.startsWith('@supports') ? 0 : r.startsWith('@media') ? 2 : 1);
out.sort((a, z) => kind(a) - kind(z));
fs.writeFileSync(path.join(ROOT, 'src/styles/presets.css'), `/* Styles de texte et @supports globaux de l'original — scripts/gen-presets.mjs (CSSOM, toutes pages, ordre source). */\n${out.join('\n')}\n`);
console.log('règles', out.length, 'dont @media', out.filter((r) => r.startsWith('@media')).length, 'dont @supports', out.filter((r) => r.startsWith('@supports')).length);
