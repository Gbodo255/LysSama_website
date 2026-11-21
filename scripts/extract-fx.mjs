// Étape F (source 3) — effets Framer déclarés dans le code compilé, par classe d'élément :
//   `effect` (effet de texte : tokenization line/word/character, startDelay, transition, trigger, threshold, repeat)
//   `__framer__enter`/`__framer__animate`/`__framer__animateOnce`/`__framer__threshold` (apparition au défilement)
//   `__framer__exit`, `__framer__transform*`, `__framer__parallax*`, `__framer__speed`, `__framer__offset`, `__framer__loop*`, `__framer__presence*`…
// Lit reference/framer-code/pretty/*.js (analyse syntaxique acorn, embarqué dans next), résout les identifiants vers
// leur littéral d'objet du même module. Écrit reference/framer/fx.json : { "<classe>": [{ module, props }] }.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const acorn = require('next/dist/compiled/acorn/acorn.js');
const DIR = path.resolve('reference/framer-code/pretty');

const FX = /^(effect|__framer__\w+|__perspectiveFX|__targetOpacity|__smartComponentFX)$/;
const out = {};
let total = 0;
for (const f of fs.readdirSync(DIR).filter((f) => f.endsWith('.js'))) {
  const src = fs.readFileSync(path.join(DIR, f), 'utf8');
  let ast;
  try { ast = acorn.parse(src, { ecmaVersion: 'latest', sourceType: 'module' }); } catch (e) { console.error(f, 'non analysable', e.message); continue; }
  // identifiant → nœud valeur (affectations `x = {...}` et déclarations `let x = {...}`), dernier gagnant
  const defs = new Map();
  const walk = (n, fn) => { if (!n || typeof n.type !== 'string') return; fn(n); for (const k in n) { const v = n[k]; if (Array.isArray(v)) v.forEach((c) => walk(c, fn)); else if (v && typeof v.type === 'string' && k !== 'loc') walk(v, fn); } };
  walk(ast, (n) => {
    if (n.type === 'AssignmentExpression' && n.left.type === 'Identifier' && n.operator === '=') defs.set(n.left.name, n.right);
    if (n.type === 'VariableDeclarator' && n.id.type === 'Identifier' && n.init) defs.set(n.id.name, n.init);
  });
  const UNK = Symbol('inconnu');
  const val = (n, depth = 0) => {
    if (!n || depth > 8) return UNK;
    switch (n.type) {
      case 'Literal': return n.value;
      case 'TemplateLiteral': return n.expressions.length ? UNK : n.quasis.map((q) => q.value.cooked).join('');
      case 'UnaryExpression': { if (n.operator === '!' && n.argument.type === 'Literal') return !n.argument.value; const a = val(n.argument, depth + 1); return a === UNK ? UNK : n.operator === '-' ? -a : n.operator === '+' ? +a : UNK; }
      case 'ArrayExpression': return n.elements.map((e) => { const v = val(e, depth + 1); return v === UNK ? '<?>' : v; });
      case 'ObjectExpression': { const o = {}; for (const p of n.properties) { if (p.type === 'SpreadElement') { const s = val(p.argument, depth + 1); if (s && typeof s === 'object') Object.assign(o, s); else o['...'] = '<?>'; continue; } const k = p.key.type === 'Identifier' ? p.key.name : p.key.value; const v = val(p.value, depth + 1); o[k] = v === UNK ? '<?' + (p.value.type === 'Identifier' ? p.value.name : p.value.type) + '>' : v; } return o; }
      case 'Identifier': return n.name === 'undefined' ? null : defs.has(n.name) ? val(defs.get(n.name), depth + 1) : UNK;
      default: return UNK;
    }
  };
  walk(ast, (n) => {
    if (n.type !== 'ObjectExpression') return;
    const props = {}; let cls = null, name = null, has = false;
    for (const p of n.properties) {
      if (p.type !== 'Property') continue;
      const k = p.key.type === 'Identifier' ? p.key.name : p.key.value;
      if (k === 'className') { const v = val(p.value); if (typeof v === 'string') cls = v; }
      else if (k === 'data-framer-name') { const v = val(p.value); if (typeof v === 'string') name = v; }
      else if (FX.test(k)) { has = true; const v = val(p.value); props[k] = typeof v === 'symbol' ? '<?' + (p.value.type === 'Identifier' ? p.value.name : p.value.type) + '>' : v; }
    }
    if (!has || !cls) return;
    if (!Object.keys(props).some((k) => k !== '__perspectiveFX' && k !== '__targetOpacity' && k !== '__smartComponentFX' && props[k] !== false)) return;
    for (const c of cls.split(/\s+/).filter((c) => /^framer-[a-z0-9]+(-container)?$/.test(c))) {
      (out[c] ||= []).push({ module: f, name, line: src.slice(0, n.start).split('\n').length, props });
      total++;
    }
  });
}
fs.writeFileSync(path.resolve('reference/framer/fx.json'), JSON.stringify(out, null, 1));
console.log(Object.keys(out).length, 'classes,', total, 'déclarations → reference/framer/fx.json');
