// Mesure jetable : composants à survol (enabledGestures du code compilé), distance au nom de portée,
// clés `-hover` dans variant-styles / follows, surcharges data-framer-name `-hover`. Écrit scripts/agents/hover/measure.json.
import fs from 'node:fs';
import path from 'node:path';
const DIR = path.resolve('reference/framer/js');
const LIBS = /^(framer|react|motion|three\.module|shared-lib|rolldown-runtime|script_main|Lenis)\./;
const out = { gestures: [], names: [], other: [] };
for (const f of fs.readdirSync(DIR).filter((f) => f.endsWith('.mjs') && !LIBS.test(f))) {
  const src = fs.readFileSync(path.join(DIR, f), 'utf8');
  for (const m of src.matchAll(/[\w$]+=(\{(?:[\w$]+:\{(?:hover|pressed|loading|error):!0(?:,(?:hover|pressed|loading|error):!0)*\},?)+\}),/g)) {
    const after = src.slice(m.index + m[0].length, m.index + m[0].length + 400).match(/`(framer-[A-Za-z0-9]{5})`,[\w$]+=\{/);
    out.gestures.push({ module: f, lit: m[1], scope: after?.[1], dist: after?.index });
  }
  for (const m of src.matchAll(/"([\w$]+)-hover":\{"data-framer-name":(`[^`]*`|void 0)\}/g)) out.names.push({ module: f, id: m[1], name: m[2] });
  for (const m of src.matchAll(/whileHover|onHoverStart|onMouseEnter/g)) out.other.push({ module: f, k: m[0] });
}
const vs = JSON.parse(fs.readFileSync('reference/framer/variant-styles.json', 'utf8'));
const fo = JSON.parse(fs.readFileSync('reference/framer/follows.json', 'utf8'));
out.stylesHover = Object.entries(vs).filter(([, l]) => l.some((x) => Object.keys(x.variants).some((k) => k.endsWith('-hover')))).map(([c]) => c);
out.followsHover = Object.entries(fo).filter(([, x]) => Object.keys(x.byParent).some((k) => k.endsWith('-hover'))).map(([c, x]) => ({ c, by: x.byParent }));
fs.writeFileSync('scripts/agents/hover/measure.json', JSON.stringify(out, null, 1));
console.log('gestures', out.gestures.length, 'sans portée', out.gestures.filter((g) => !g.scope).length, 'dist max', Math.max(...out.gestures.map((g) => g.dist ?? -1)));
console.log('names -hover', out.names.length, JSON.stringify(out.names.map((n) => n.id + '=' + n.name)));
console.log('autres', JSON.stringify(out.other.reduce((a, o) => ((a[o.module + ':' + o.k] = (a[o.module + ':' + o.k] || 0) + 1), a), {})));
console.log('classes styles -hover', out.stylesHover.length, 'follows -hover', out.followsHover.length);
console.log(out.gestures.map((g) => g.scope + ' ' + g.lit).join('\n'));
