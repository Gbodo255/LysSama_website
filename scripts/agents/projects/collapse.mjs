// Compacte un arbre de tree.mjs : regroupe les lignes consécutives identiques hors texte (spans par caractère).
import fs from 'node:fs';
const [f, w = '220'] = process.argv.slice(2);
const L = fs.readFileSync(f, 'utf8').split('\n');
const out = []; let prev = null, n = 0, txt = '';
const key = (l) => l.replace(/ « .* »$/, '');
const flush = () => { if (prev !== null) out.push(prev.slice(0, +w) + (n > 1 ? `  ×${n} « ${txt.slice(0, 60)} »` : '')); };
for (const l of L) {
  if (prev !== null && key(l) === key(prev) && / « .* »$/.test(l)) { n++; txt += (l.match(/ « (.*) »$/) || [])[1] || ''; continue; }
  flush(); prev = l; n = 1; txt = (l.match(/ « (.*) »$/) || [])[1] || '';
}
flush();
console.log(out.join('\n'));
