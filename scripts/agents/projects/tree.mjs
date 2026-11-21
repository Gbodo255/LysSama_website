// Arbre d'un DOM (fichier HTML hydraté reference/dom/... ou SSR reference/html/...) : balise, classes, nom, attributs, styles en ligne.
// usage : node scripts/agents/projects/tree.mjs <fichier.html> "<sélecteur racine>" [profondeur=6] [--idx=0] [--text]
import fs from 'node:fs';
import { chromium } from 'playwright';
const [file, selRoot = 'body', depth = '6'] = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const idx = +((process.argv.find((a) => a.startsWith('--idx=')) || '--idx=0').slice(6));
const html = fs.readFileSync(file, 'utf8');
const b = await chromium.launch();
const ctx = await b.newContext({ javaScriptEnabled: false });
await ctx.route('**/*', (r) => (r.request().url().startsWith('data:') ? r.continue() : r.abort()));
const p = await ctx.newPage();
await p.setContent(html, { waitUntil: 'domcontentloaded' });
const out = await p.evaluate(({ selRoot, depth, idx, full }) => {
  const root = document.querySelectorAll(selRoot)[idx];
  if (!root) return 'introuvable';
  const lines = [];
  const walk = (e, d) => {
    if (/^(SCRIPT|STYLE|TEMPLATE|NOSCRIPT|path|g|defs|use|circle|rect|clipPath|linearGradient|stop)$/.test(e.tagName)) return;
    const a = [];
    for (const at of e.attributes) {
      if (at.name === 'class') continue;
      let v = at.value; if (at.name === 'srcset' || at.name === 'd') v = v.slice(0, 40) + '…';
      a.push(`${at.name}=${!full && v.length > 160 ? v.slice(0, 160) + '…' : v}`);
    }
    const own = [...e.childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent).join('').trim();
    lines.push('  '.repeat(d) + e.tagName.toLowerCase() + (e.classList.length ? '.' + [...e.classList].join('.') : '') + (a.length ? ' {' + a.join(' | ') + '}' : '') + (own ? ` « ${own.slice(0, 80)} »` : ''));
    if (d >= depth || e.tagName === 'svg') return;
    for (const c of e.children) walk(c, d + 1);
  };
  walk(root, 0);
  return lines.join('\n');
}, { selRoot, depth: +depth, idx, full: process.argv.includes('--full') });
console.log(out);
await b.close();
