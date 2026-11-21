// outerHTML d'un élément (SSR ou DOM hydraté), tronqué, pour lire attributs/styles exacts.
// Usage : node scripts/agents/studio/dump.mjs <page|chemin.html> <sélecteur> [index=0] [max=4000]
import fs from 'node:fs';
import path from 'node:path';
import { launch, ROOT } from '../../lib/harness.mjs';

const [page, sel, idx = '0', max = '4000'] = process.argv.slice(2);
const html = fs.readFileSync(page.includes('/') ? path.join(ROOT, page) : path.join(ROOT, 'reference/html', page + '.html'), 'utf8');
const b = await launch({ webgl: false });
const ctx = await b.newContext({ javaScriptEnabled: false, viewport: { width: 1440, height: 900 } });
await ctx.route('**/*', (r) => r.abort());
const p = await ctx.newPage();
await p.setContent(html, { waitUntil: 'domcontentloaded' });
const out = await p.evaluate(({ sel, idx }) => {
  const all = document.querySelectorAll(sel);
  const e = all[+idx];
  return e ? `(${all.length} occurrences)\n` + e.outerHTML.replace(/<path [^>]*>/g, '<path…>') : `introuvable (${all.length})`;
}, { sel, idx });
console.log(out.slice(0, +max));
await ctx.close(); await b.close();
