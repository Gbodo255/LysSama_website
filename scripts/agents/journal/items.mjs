// Résumé d'un relevé de géométrie : node scripts/agents/journal/items.mjs <fichier.json> [ancre=«Main»] [filtreRegex] [max=400]
// Les sélecteurs sont coupés après l'ancre (data-framer-name) ; nth-of-type abrégé en :n.
import fs from 'node:fs';
const [f, anchor = 'Main', re = '', max = '400'] = process.argv.slice(2);
const g = JSON.parse(fs.readFileSync(f, 'utf8'));
const rx = re ? new RegExp(re) : null;
console.log('scrollHeight', g.scrollHeight, 'items', g.items.length, 'title', g.title);
let n = 0;
const key = `[data-framer-name="${anchor}"]`;
for (const it of g.items) {
  const i = it.sel.indexOf(key);
  if (i < 0) continue;
  let s = it.sel.slice(i + key.length).replace(/\[data-framer-name="([^"]+)"\]/g, '«$1»').replace(/:nth-of-type\((\d+)\)/g, ':$1');
  if (rx && !rx.test(s)) continue;
  if (++n > +max) break;
  const r = it.rect;
  console.log(`${s || '(racine)'} | ${r.x},${r.y} ${r.width}x${r.height}${it.text ? ' :: ' + JSON.stringify(it.text.slice(0, 40)) : ''}`);
}
