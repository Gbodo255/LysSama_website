// npm run check:launch — liste tout ce qui ne doit pas être publié tel quel (MISSION Phase 11) et échoue tant qu'il en reste.
// Parcourt les seuls emplacements de contenu (content/, src/data/, src/styles/tokens.css) et reference/framer/fonts.json.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const files = [];
const walk = (d) => { for (const e of fs.readdirSync(path.join(ROOT, d), { withFileTypes: true })) { const p = path.join(d, e.name); if (e.isDirectory()) walk(p); else if (/\.(ts|md|css|json)$/.test(e.name)) files.push(p); } };
walk('content'); walk('src/data'); files.push('src/styles/tokens.css');

// [catégorie, motif] — insensible à la casse ; une occurrence = une ligne de fichier
const RULES = [
  ['contenu de démonstration (demo: true)', /demo["']?\s*:\s*true/i],
  ['marques réelles des études de cas', /\b(gucci|chanel|puma|adidas|nike|under armour|under-armour)\b/i],
  ['prix fictifs', /\$\s?\d[\d,]*|\b(base|price)\s*:\s*\d{3,}/i],
  ['récompenses fictives', /\b(award|awwwards|cssda|fwa|recognition)\b/i],
  ['statistiques', /\b\d+\s?(%|hr\b)|\b(end|start)\s*:\s*\d+/i],
  ['équipe', /\b(homeTeam|team|founder|David Torres|Jin Yuen)\b/i],
  ['coordonnées et adresse', /[a-z0-9.]+@[a-z0-9.]+\.[a-z]{2,}|\+\d[\d ()-]{7,}|\b(los angeles|tokyo|street|avenue)\b/i],
  ['launchnow.design', /launchnow\.design/i],
  ['réseaux sociaux génériques (sans compte)', /"href":\s*"https:\/\/(x|instagram|dribbble|behance)\.com\/?"|placeholder["']?\s*:\s*true/i],
  ['pages légales décrivant des fonctions absentes (bannière cookies, préférences)', /cookie banner|cookie preferences/i],
];

const found = new Map(RULES.map(([k]) => [k, []]));
for (const f of files) {
  const lines = fs.readFileSync(path.join(ROOT, f), 'utf8').split('\n');
  lines.forEach((l, i) => { for (const [k, re] of RULES) if (re.test(l)) found.get(k).push(`${f.replace(/\\/g, '/')}:${i + 1}`); });
}
// polices dont la licence n'est pas OFL (à confirmer)
const fonts = JSON.parse(fs.readFileSync(path.join(ROOT, 'reference/framer/fonts.json'), 'utf8'));
found.set('polices à la licence non confirmée', Object.entries(fonts).filter(([, v]) => !/^OFL/.test(v.license)).map(([k, v]) => `${k} (${v.license})`));

let total = 0;
for (const [k, list] of found) {
  total += list.length;
  console.log(`${list.length ? '✗' : '✓'} ${k} : ${list.length}`);
  for (const x of list.slice(0, 5)) console.log('    ' + x);
  if (list.length > 5) console.log(`    … ${list.length - 5} de plus`);
}
console.log(total ? `\nÉCHEC : ${total} élément(s) à remplacer avant la mise en ligne.` : '\nOK : rien à remplacer.');
process.exit(total ? 1 : 0);
