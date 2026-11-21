// Applique les textes Lys Sama (lys-a/b/c.mjs, indexés sur strings.orig.json) + NUM (chaînes exactes) aux sources affichées.
import fs from 'node:fs';
import A from './lys-a.mjs'; import B from './lys-b.mjs'; import C from './lys-c.mjs';
const orig = JSON.parse(fs.readFileSync('reference/rewrite/strings.orig.json', 'utf8'));
const NUM = {
  '+240%': '39', '+185%': 'TikTok', '4,000': '🧜🏾‍♀️', '+47': '258', '4.9': '39', '/5': ' com.',
  '2012 2026©': '2025 2026©', '(2012-26©)': '(2025-26©)', '$10k': 'Sur devis', '+1 (805) 450 1432': 'WhatsApp pro',
  '2024': '2025', '2023': '2025',
};
const MAP = new Map(Object.entries(NUM));
for (const [i, v] of Object.entries({ ...A, ...B, ...C })) MAP.set(orig[i].s, v);
const sub = (x) => { const t = x.trim(); if (!MAP.has(t)) return x; const lead = x.match(/^\s*/)[0], trail = x.match(/\s*$/)[0]; return lead + MAP.get(t) + trail; };
let n = 0;
const P = 'src/data/text/';
for (const f of fs.readdirSync(P)) {
  const s = fs.readFileSync(P + f, 'utf8'), m = s.match(/= (\[[\s\S]*\]);?/);
  const a = JSON.parse(m[1]).map((x) => { const y = sub(x); if (y !== x) n++; return y; });
  fs.writeFileSync(P + f, s.replace(m[1], JSON.stringify(a, null, 1)));
}
const lit = (f) => {
  let s = fs.readFileSync(f, 'utf8');
  s = s.replace(/\{("(?:[^"\\]|\\.)*")\}/g, (all, q) => { const y = sub(JSON.parse(q)); return y === JSON.parse(q) ? all : (n++, `{${JSON.stringify(y)}}`); });
  // littéraux de données : '...' et "..." entiers, sans échappement
  // un mot seul n'est remplacé que derrière une clé d'affichage (sinon identifiants de route : 'home', 'contact'…)
  s = s.replace(/(\b\w+["']?\s*:\s*)?(['"])([^'"\\\n]{2,})\2/g, (all, key, q, body) => {
    if (!MAP.has(body) || (!/\s/.test(body) && !/^(label|title|name|role|tab|category|text|description|alt|price|muted|eyebrow|baseLabel|suffix|locationLabel)["']?\s*:/.test(key || ''))) return all;
    n++; return (key || '') + JSON.stringify(MAP.get(body));
  });
  fs.writeFileSync(f, s);
};
for (const d of ['src/components/shared', 'src/components/footer', 'src/components/nav']) for (const f of fs.readdirSync(d)) if (f.endsWith('.gen.tsx')) lit(d + '/' + f);
for (const f of fs.readdirSync('src/data')) if (f.endsWith('.ts') && f !== 'webgl.ts' && f !== 'page-styles.ts') lit('src/data/' + f);
console.log('remplacements', n);
