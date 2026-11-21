// Composants Framer (code compilé brut reference/framer/js) : classe de portée → table des variantes { id: framer-v-* },
// noms lisibles (variants.json) et transition par défaut (1er objet { delay, duration|stiffness…, type } qui suit la table).
// Écrit reference/framer/components.json. Les fichiers sont la référence figée (pas de code distant exécuté).
import fs from 'node:fs';
import path from 'node:path';
const DIR = path.resolve('reference/framer/js');
const LIBS = /^(framer|react|motion|three\.module|shared-lib|rolldown-runtime|script_main|Lenis)\./;
const names = JSON.parse(fs.readFileSync('reference/framer/variants.json', 'utf8'));
const lit = (s) => Function(`"use strict";return (${s})`)();
const out = {};
for (const f of fs.readdirSync(DIR).filter((f) => f.endsWith('.mjs') && !LIBS.test(f))) {
  const src = fs.readFileSync(path.join(DIR, f), 'utf8');
  for (const m of src.matchAll(/`(framer-[A-Za-z0-9]{5})`,[\w$]+=(\{(?:[\w$]+:`framer-v-[a-z0-9]+`,?)+\})/g)) {
    let map; try { map = lit(m[2]); } catch { continue; }
    const rest = src.slice(m.index + m[0].length, m.index + m[0].length + 800);
    const t = rest.match(/\{(?:delay:[\d.e-]+,)?(?:[a-zA-Z]+:(?:[\d.e-]+|\[[\d.,e-]+\]),)*type:`(?:tween|spring)`\}/);
    let transition = null; try { transition = t ? lit(t[0]) : null; } catch {}
    out[m[1]] = { module: f, variants: Object.fromEntries(Object.entries(map).map(([id, cls]) => [id, { cls, name: names[id]?.name }])), transition };
  }
}
fs.writeFileSync('reference/framer/components.json', JSON.stringify(out, null, 1));
console.log(Object.keys(out).length, 'composants → reference/framer/components.json');
