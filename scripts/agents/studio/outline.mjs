// Plan du SSR (JS coupé) : balises, classes, data-framer-name, profondeur bornée.
// Usage : node scripts/agents/studio/outline.mjs <page> <sélecteur racine> [profondeur=4] > fichier
import fs from 'node:fs';
import path from 'node:path';
import { launch, ROOT } from '../../lib/harness.mjs';

const [page, sel = 'body', depth = '4'] = process.argv.slice(2);
const html = fs.readFileSync(page.includes('/') ? path.join(ROOT, page) : path.join(ROOT, 'reference/html', page + '.html'), 'utf8');
const b = await launch({ webgl: false });
const ctx = await b.newContext({ javaScriptEnabled: false, viewport: { width: 1440, height: 900 } });
await ctx.route('**/*', (r) => r.abort());
const p = await ctx.newPage();
await p.setContent(html, { waitUntil: 'domcontentloaded' });
const out = await p.evaluate(({ sel, depth }) => {
  const lines = [];
  const walk = (e, d) => {
    if (['SCRIPT', 'STYLE', 'svg', 'path'].includes(e.tagName)) return;
    const nm = e.getAttribute('data-framer-name');
    const own = [...e.childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent).join('').trim();
    lines.push(`${'  '.repeat(d)}<${e.tagName.toLowerCase()}${nm ? ` "${nm}"` : ''}${e.id ? ' #' + e.id : ''}${e.classList.length ? ' .' + [...e.classList].join('.') : ''}${own ? ' :: ' + JSON.stringify(own.slice(0, 60)) : ''}`);
    if (d < depth) for (const c of e.children) walk(c, d + 1);
  };
  for (const r of document.querySelectorAll(sel)) walk(r, 0);
  return lines.join('\n');
}, { sel, depth: +depth });
console.log(out);
await ctx.close(); await b.close();
