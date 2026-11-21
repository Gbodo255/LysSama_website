// Collecte toutes les chaînes visibles (tableaux T des pages + littéraux {"..."} des composants partagés) → reference/rewrite/strings.json
import fs from 'node:fs';
const out = new Map();
const add = (s, f) => { const k = s.trim(); if (!k || !/[A-Za-z]{2}/.test(k)) return; const e = out.get(k) || { n: 0, f: new Set() }; e.n++; e.f.add(f); out.set(k, e); };
const P = 'src/data/text/';
for (const f of fs.readdirSync(P)) { const s = fs.readFileSync(P + f, 'utf8'); for (const x of JSON.parse(s.match(/= (\[[\s\S]*\]);?/)[1])) add(x, f.replace('.ts', '')); }
const gens = ['src/components/shared', 'src/components/footer', 'src/components/nav'].flatMap((d) => fs.readdirSync(d).filter((f) => f.endsWith('.gen.tsx')).map((f) => d + '/' + f));
for (const f of gens) for (const m of fs.readFileSync(f, 'utf8').matchAll(/\{("(?:[^"\\]|\\.)*")\}/g)) add(JSON.parse(m[1]), f.split('/').pop().replace('.gen.tsx', ''));
fs.mkdirSync('reference/rewrite', { recursive: true });
const arr = [...out].map(([k, v]) => ({ s: k, n: v.n, f: [...v.f].slice(0, 3).join(',') }));
fs.writeFileSync('reference/rewrite/strings.json', JSON.stringify(arr, null, 1));
console.log(arr.length, arr.reduce((a, x) => a + x.s.length, 0));
