// Composants Framer (code compilé brut reference/framer/js) : classe de portée → table des variantes { id: framer-v-* },
// noms lisibles (variants.json) et transition par défaut (1er objet { delay, duration|stiffness…, type } qui suit la table).
// Écrit reference/framer/components.json. Les fichiers sont la référence figée (pas de code distant exécuté).
import fs from 'node:fs';
import path from 'node:path';
const DIR = path.resolve('reference/framer/js');
const LIBS = /^(framer|react|motion|three\.module|shared-lib|rolldown-runtime|script_main|Lenis)\./;
const names = JSON.parse(fs.readFileSync('reference/framer/variants.json', 'utf8'));
const lit = (s) => Function(`"use strict";return (${s})`)();
const GEST = /[\w$]+=(\{(?:[\w$]+:\{(?:hover|pressed|loading|error):!0(?:,(?:hover|pressed|loading|error):!0)*\},?)+\}),/g;
const esc = (s) => s.replace(/[$]/g, '\\$');
const out = {};
for (const f of fs.readdirSync(DIR).filter((f) => f.endsWith('.mjs') && !LIBS.test(f))) {
  const src = fs.readFileSync(path.join(DIR, f), 'utf8');
  for (const m of src.matchAll(/`(framer-[A-Za-z0-9]{5})`,[\w$]+=(\{(?:[\w$]+:`framer-v-[a-z0-9]+`,?)+\})/g)) {
    let map; try { map = lit(m[2]); } catch { continue; }
    const rest = src.slice(m.index + m[0].length, m.index + m[0].length + 800);
    const t = rest.match(/\{(?:delay:[\d.e-]+,)?(?:[a-zA-Z]+:(?:[\d.e-]+|\[[\d.,e-]+\]),)*type:`(?:tween|spring)`\}/);
    let transition = null; try { transition = t ? lit(t[0]) : null; } catch {}
    // gestes activés par variante (`enabledGestures` de useVariantState, runtime framer.mjs `bg`/`ug` : variante de geste
    // `<id>-hover` si { hover: !0 }) : littéral déclaré juste avant la classe de portée (mesuré ≤ 68 car., scripts/agents/hover/measure.mjs)
    const g = [...src.slice(Math.max(0, m.index - 300), m.index).matchAll(GEST)].pop();
    let gestures; try { gestures = g ? lit(g[1]) : undefined; } catch {}
    if (gestures && !Object.keys(gestures).every((id) => map[id])) gestures = undefined;
    // nom de la racine pendant le survol : `...fn({ "<id>-hover": { "data-framer-name": … } }, base, geste)` (void 0 → attribut absent)
    const hoverNames = {};
    for (const id of Object.keys(gestures || {})) {
      const h = src.match(new RegExp(`"${esc(id)}-hover":\\{"data-framer-name":(\`[^\`]*\`|void 0)\\}`));
      if (h) hoverNames[id + '-hover'] = h[1] === 'void 0' ? null : h[1].slice(1, -1);
    }
    out[m[1]] = { module: f, variants: Object.fromEntries(Object.entries(map).map(([id, cls]) => [id, { cls, name: names[id]?.name }])), transition,
      ...(gestures ? { gestures } : {}), ...(Object.keys(hoverNames).length ? { hoverNames } : {}) };
  }
}
fs.writeFileSync('reference/framer/components.json', JSON.stringify(out, null, 1));
console.log(Object.keys(out).length, 'composants →', 'reference/framer/components.json ;', Object.values(out).filter((c) => c.gestures).length, 'avec gestes');
