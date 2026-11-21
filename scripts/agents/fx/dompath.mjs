// Chemin DOM (ancêtres + frères) d'un élément d'un HTML enregistré. Usage : node dompath.mjs <fichier.html> "<sélecteur>" [w]
import fs from 'node:fs';
import { launch } from '../../lib/harness.mjs';
const [file, sel] = process.argv.slice(2);
const html = fs.readFileSync(file, 'utf8');
const b = await launch({ webgl: false });
const ctx = await b.newContext({ javaScriptEnabled: false });
await ctx.route('**/*', (r) => r.abort());
const p = await ctx.newPage();
await p.setContent(html, { waitUntil: 'domcontentloaded' });
const out = await p.evaluate((sel) => {
  const d = (e) => e ? `<${e.tagName.toLowerCase()}${e.id ? '#' + e.id : ''}${e.classList.length ? '.' + [...e.classList].join('.') : ''}${e.dataset.framerName ? ` "${e.dataset.framerName}"` : ''}>` : '∅';
  return [...document.querySelectorAll(sel)].map((el) => {
    const anc = []; for (let x = el.parentElement; x; x = x.parentElement) anc.push(d(x));
    const sib = [...el.parentElement.children].map((s) => (s === el ? '>>' : '  ') + d(s));
    return { el: d(el), outer: el.outerHTML.slice(0, 600), ancestors: anc, siblings: sib };
  });
}, sel);
console.log(JSON.stringify(out, null, 1));
await b.close();
