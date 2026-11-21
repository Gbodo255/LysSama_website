// Plan d'une page SSR : arbre des data-framer-name jusqu'à une profondeur donnée. Usage : node outline.mjs <page> [depth=5]
import fs from 'node:fs'; import path from 'node:path';
import { launch, ROOT } from '../../lib/harness.mjs';
const [page, depth = '5'] = process.argv.slice(2);
const html = fs.readFileSync(path.join(ROOT, 'reference/html', page + '.html'), 'utf8');
const b = await launch({ webgl: false }); const ctx = await b.newContext({ javaScriptEnabled: false }); await ctx.route('**/*', (r) => r.abort());
const p = await ctx.newPage(); await p.setContent(html, { waitUntil: 'domcontentloaded' });
const out = await p.evaluate((D) => { const L = []; const walk = (e, d) => { if (d > D) return; const n = e.getAttribute('data-framer-name'); const c = [...e.classList].slice(0, 3).join('.'); L.push('  '.repeat(d) + e.tagName.toLowerCase() + (n ? ` "${n}"` : '') + (c ? ' .' + c : '') + (e.children.length ? ` (${e.querySelectorAll('*').length})` : '')); for (const k of e.children) if (!['SCRIPT','STYLE','TEMPLATE','svg'].includes(k.tagName)) walk(k, d + 1); }; walk(document.querySelector('#main'), 0); return L.join('\n'); }, +depth);
console.log(out); await b.close();
