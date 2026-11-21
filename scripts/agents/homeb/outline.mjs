// Plan du SSR (JS désactivé) : arbre tag/classes/nom jusqu'à une profondeur donnée, sous un sélecteur.
// Usage : node scripts/agents/homeb/outline.mjs <page> "<sélecteur CSS>" [profondeur=3] [index=0] > fichier
import fs from 'node:fs';
import path from 'node:path';
import { launch, ROOT } from '../../lib/harness.mjs';

const [page, sel, depth = '3', idx = '0'] = process.argv.slice(2);
const html = fs.readFileSync(path.join(ROOT, 'reference/html', page + '.html'), 'utf8');
const b = await launch({ webgl: false });
const ctx = await b.newContext({ javaScriptEnabled: false, viewport: { width: 1440, height: 900 } });
await ctx.route('**/*', (r) => r.abort());
const p = await ctx.newPage();
await p.setContent(html, { waitUntil: 'domcontentloaded' });
const out = await p.evaluate(({ sel, depth, idx }) => {
  const root = document.querySelectorAll(sel)[+idx];
  if (!root) return 'introuvable';
  const lines = [];
  const walk = (e, d) => {
    const nm = e.getAttribute('data-framer-name');
    const txt = [...e.childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent).join('').trim().slice(0, 60);
    lines.push(`${'  '.repeat(d)}<${e.tagName.toLowerCase()}${nm ? ` "${nm}"` : ''} .${[...e.classList].join('.')}${txt ? ' « ' + txt + ' »' : ''}`);
    if (d < depth && e.namespaceURI !== 'http://www.w3.org/2000/svg') for (const c of e.children) if (!['SCRIPT', 'STYLE'].includes(c.tagName)) walk(c, d + 1);
  };
  walk(root, 0);
  return lines.join('\n');
}, { sel, depth: +depth, idx });
console.log(out);
await b.close();
