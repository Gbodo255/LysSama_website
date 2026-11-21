// Plan SSR (JS désactivé) d'une page de reference/html : balises, classes, data-framer-name, profondeur limitée.
// Usage : node scripts/agents/journal/outline.mjs <page> [maxDepth=8] [selecteurRacine=#main] > fichier
import fs from 'node:fs';
import path from 'node:path';
import { launch, ROOT } from '../../lib/harness.mjs';
const [page, maxD = '8', rootSel = '#main'] = process.argv.slice(2);
const html = fs.readFileSync(page.includes('/') ? path.join(ROOT, page) : path.join(ROOT, 'reference/html', page + '.html'), 'utf8');
const b = await launch({ webgl: false });
const ctx = await b.newContext({ javaScriptEnabled: false, viewport: { width: 1440, height: 900 } });
await ctx.route('**/*', (r) => r.abort());
const p = await ctx.newPage();
await p.setContent(html, { waitUntil: 'domcontentloaded' });
const out = await p.evaluate(({ maxD, rootSel }) => {
  const lines = [];
  const walk = (e, d) => {
    if (d > maxD || ['SCRIPT', 'STYLE', 'svg', 'NOSCRIPT'].includes(e.tagName)) return;
    const nm = e.getAttribute('data-framer-name');
    const own = [...e.childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent).join('').trim();
    const extra = ['href', 'data-framer-cursor', 'aria-label', 'id'].map((a) => e.getAttribute(a) != null ? `${a}=${e.getAttribute(a)}` : '').filter(Boolean).join(' ');
    lines.push(`${'  '.repeat(d)}<${e.tagName.toLowerCase()}${nm ? ` "${nm}"` : ''} .${[...e.classList].join('.')}${extra ? ' [' + extra + ']' : ''}${own ? ' :: ' + JSON.stringify(own.slice(0, 60)) : ''}`);
    for (const c of e.children) walk(c, d + 1);
  };
  walk(document.querySelector(rootSel), 0);
  return lines.join('\n');
}, { maxD: +maxD, rootSel });
console.log(out);
await b.close();
