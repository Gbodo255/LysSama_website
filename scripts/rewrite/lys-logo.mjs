// Chaque « Lys Sama » écrit seul dans une page générée (nom, signature d'article…) s'affiche comme son logo (D-043) :
// pose l'attribut data-lys-logo sur le <p> qui ne contient que ce texte ; le rendu est dans src/styles/brand.css. Idempotent.
import fs from 'node:fs';

let n = 0;
for (const d of fs.readdirSync('src/gen')) {
  const tf = `src/data/text/${d}.ts`, bf = `src/gen/${d}/Body.tsx`;
  if (!fs.existsSync(tf) || !fs.existsSync(bf)) continue;
  const ts = fs.readFileSync(tf, 'utf8');
  const T = JSON.parse(ts.slice(ts.indexOf('= [') + 2, ts.lastIndexOf(']') + 1));
  let s = fs.readFileSync(bf, 'utf8');
  T.forEach((t, i) => {
    if (!/^\s*lys\s+sama\s*$/i.test(t)) return;
    // <p …>{T[i]}</p> : seul enfant texte (les alt={T[i]} ne sont pas concernés).
    s = s.replace(new RegExp(`<p (?![^>]*data-lys-logo)([^>]*)>(\\s*)\\{T\\[${i}\\]\\}(\\s*)</p>`, 'g'), (_, a, b, c) => (n++, `<p data-lys-logo="" ${a}>${b}{T[${i}]}${c}</p>`));
  });
  fs.writeFileSync(bf, s);
}
console.log('« Lys Sama » marqués :', n);
