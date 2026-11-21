// Étape F (source 3) — effets Framer déclarés dans le code compilé, par classe d'élément :
//   `effect` (effet de texte : tokenization line/word/character, startDelay, transition, trigger, threshold, repeat)
//   `__framer__enter`/`__framer__animate`/`__framer__animateOnce`/`__framer__threshold` (apparition au défilement)
//   `__framer__exit`, `__framer__transform*`, `__framer__parallax*`, `__framer__speed`, `__framer__offset`, `__framer__loop*`, `__framer__presence*`…
// Lit reference/framer/js/*.mjs (analyse syntaxique acorn, embarqué dans next), résout les identifiants vers
// leur littéral d'objet du même module. Écrit reference/framer/fx.json : { "<classe>": [{ module, props }] }.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const acorn = require('next/dist/compiled/acorn/acorn.js');
const DIR = path.resolve('reference/framer/js'); // les 57 modules compilés bruts, bibliothèques exclues
const LIBS = /^(framer|react|motion|three\.module|shared-lib|rolldown-runtime|script_main|Lenis)\./;

const FX = /^(effect|__framer__\w+|__perspectiveFX|__targetOpacity|__smartComponentFX)$/;
const out = {};
const variants = {};
const styles = {};
const follows = {};
let total = 0;
for (const f of fs.readdirSync(DIR).filter((f) => f.endsWith('.mjs') && !LIBS.test(f))) {
  const src = fs.readFileSync(path.join(DIR, f), 'utf8');
  let ast;
  try { ast = acorn.parse(src, { ecmaVersion: 'latest', sourceType: 'module' }); } catch (e) { console.error(f, 'non analysable', e.message); continue; }
  // identifiant → nœud valeur (affectations `x = {...}` et déclarations `let x = {...}`), dernier gagnant
  const defs = new Map();
  const walk = (n, fn) => { if (!n || typeof n.type !== 'string') return; fn(n); for (const k in n) { const v = n[k]; if (Array.isArray(v)) v.forEach((c) => walk(c, fn)); else if (v && typeof v.type === 'string' && k !== 'loc') walk(v, fn); } };
  walk(ast, (n) => {
    // portée ignorée (noms minifiés réutilisés) : un littéral l'emporte sur une valeur calculée (ex. `Y = K(F)` booléen local)
    const put = (k, v) => { const o = defs.get(k); if (!o || !/Expression$|Literal$/.test(o.type) || ['ObjectExpression', 'ArrayExpression', 'Literal', 'ArrowFunctionExpression'].includes(v.type) || !['ObjectExpression', 'ArrayExpression', 'Literal', 'ArrowFunctionExpression'].includes(o.type)) defs.set(k, v); };
    if (n.type === 'AssignmentExpression' && n.left.type === 'Identifier' && n.operator === '=') put(n.left.name, n.right);
    if (n.type === 'VariableDeclarator' && n.id.type === 'Identifier' && n.init) put(n.id.name, n.init);
  });
  const UNK = Symbol('inconnu');
  const val = (n, depth = 0) => {
    if (!n || depth > 8) return UNK;
    switch (n.type) {
      case 'Literal': return n.value;
      case 'TemplateLiteral': return n.expressions.length ? UNK : n.quasis.map((q) => q.value.cooked).join('');
      case 'UnaryExpression': { if (n.operator === 'void') return null; if (n.operator === '!' && n.argument.type === 'Literal') return !n.argument.value; const a = val(n.argument, depth + 1); return a === UNK ? UNK : n.operator === '-' ? -a : n.operator === '+' ? +a : UNK; }
      case 'ArrayExpression': return n.elements.map((e) => { const v = val(e, depth + 1); return v === UNK ? '<?>' : v; });
      case 'ObjectExpression': { const o = {}; for (const p of n.properties) { if (p.type === 'SpreadElement') { const s = val(p.argument, depth + 1); if (s && typeof s === 'object') Object.assign(o, s); else o['...'] = '<?>'; continue; } const k = p.key.type === 'Identifier' ? p.key.name : p.key.value; const v = val(p.value, depth + 1); o[k] = v === UNK ? '<?' + (p.value.type === 'Identifier' ? p.value.name : p.value.type) + '>' : v; } return o; }
      // aide de décalage des listes de collection : _n = (e, t) => ({ ...e, delay: (e.delay ?? 0) + t }), appelée _n(gn, s * .1)
      case 'CallExpression': {
        const d = n.callee.type === 'Identifier' && defs.get(n.callee.name);
        const body = d && d.type === 'ArrowFunctionExpression' && d.body.type === 'ObjectExpression' ? src.slice(d.body.start, d.body.end).replace(/\s+/g, '') : '';
        if (/^\(\{\.\.\.e,delay:\(e\.delay\?\?0\)\+t\}\)$/.test('(' + body + ')') && n.arguments.length === 2) {
          const base = val(n.arguments[0], depth + 1), a = n.arguments[1];
          const step = a.type === 'BinaryExpression' && a.operator === '*' ? (a.right.type === 'Literal' ? a.right.value : a.left.type === 'Literal' ? a.left.value : null) : null;
          if (base !== UNK && step != null) return { ...base, $staggerStep: step };
        }
        return UNK;
      }
      case 'Identifier': return n.name === 'undefined' ? null : defs.has(n.name) ? val(defs.get(n.name), depth + 1) : UNK;
      default: return UNK;
    }
  };
  // parcours avec la pile des classes des objets ancêtres : une instance de composant porte ses effets sans className,
  // la classe est sur son conteneur (`framer-xxx-container`) quelques niveaux plus haut.
  const ownCls = (n) => { for (const p of n.properties) if (p.type === 'Property' && (p.key.name || p.key.value) === 'className') { const v = val(p.value); if (typeof v === 'string') return v; } return null; };
  const walkC = (n, stack) => {
    if (!n || typeof n.type !== 'string') return;
    let st = stack;
    if (n.type === 'ObjectExpression') { visit(n, stack); const c = ownCls(n); if (c) st = [...stack, c]; }
    for (const k in n) { const v = n[k]; if (Array.isArray(v)) v.forEach((c) => walkC(c, st)); else if (v && typeof v.type === 'string') walkC(v, st); }
  };
  const visit = (n, stack) => {
    const props = {}; let cls = null, name = null, has = false;
    for (const p of n.properties) {
      if (p.type !== 'Property') continue;
      const k = p.key.type === 'Identifier' ? p.key.name : p.key.value;
      if (k === 'className') { const v = val(p.value); if (typeof v === 'string') cls = v; }
      else if (k === 'data-framer-name') { const v = val(p.value); if (typeof v === 'string') name = v; }
      else if (FX.test(k)) { has = true; const v = val(p.value); props[k] = typeof v === 'symbol' ? '<?' + (p.value.type === 'Identifier' ? p.value.name : p.value.type) + '>' : v; }
    }
    // surcharges par variante : ...fn({ idVariante: { __framer__…: … } }, …)
    const byVariant = {};
    for (const p of n.properties) {
      if (p.type !== 'SpreadElement' || p.argument.type !== 'CallExpression') continue;
      const a0 = p.argument.arguments[0]; if (!a0 || a0.type !== 'ObjectExpression') continue;
      for (const vp of a0.properties) {
        if (vp.type !== 'Property' || vp.value.type !== 'ObjectExpression') continue;
        const id = vp.key.name || vp.key.value; const o = {};
        for (const q of vp.value.properties) { if (q.type !== 'Property') continue; const k = q.key.name || q.key.value; if (FX.test(k)) { const v = val(q.value); o[k] = typeof v === 'symbol' ? '<?>' : v; } }
        if (Object.keys(o).length) byVariant[id] = o;
      }
    }
    if (Object.keys(byVariant).length) props.$byVariant = byVariant;
    // instance imbriquée : `variant` de base + surcharges par variante du parent (...fn({ idParent: { variant } })) → suivi
    {
      const vstr = (x) => { if (!x) return null; const v = val(x); if (typeof v === 'string') return v; if (x.type === 'CallExpression' && x.arguments.length === 1) { const a = val(x.arguments[0]); if (typeof a === 'string') return a; } return null; };
      let base = null; const by = {};
      for (const p of n.properties) { if (p.type === 'Property' && (p.key.name || p.key.value) === 'variant') base = vstr(p.value); }
      for (const p of n.properties) {
        if (p.type !== 'SpreadElement' || p.argument.type !== 'CallExpression') continue;
        const a0 = p.argument.arguments[0]; if (!a0 || a0.type !== 'ObjectExpression') continue;
        for (const vp of a0.properties) { if (vp.type !== 'Property' || vp.value.type !== 'ObjectExpression') continue; for (const q of vp.value.properties) if (q.type === 'Property' && (q.key.name || q.key.value) === 'variant') { const v = vstr(q.value); if (v) by[vp.key.name || vp.key.value] = v; } }
      }
      const top = stack[stack.length - 1];
      if (base && Object.keys(by).length && top) for (const c of top.split(/\s+/).filter((c) => /-container$/.test(c))) follows[c] = { module: f, base, byParent: by };
    }
    let inherited = false;
    if (has && !cls && props.__framer__variantAppearEffectEnabled) { cls = stack[stack.length - 1]; inherited = true; }
    if (!has || !cls) return;
    if (!Object.keys(props).some((k) => k !== '__perspectiveFX' && k !== '__targetOpacity' && k !== '__smartComponentFX' && props[k] !== false)) return;
    for (const c of cls.split(/\s+/).filter((c) => /^framer-[a-z0-9]+(-container)?$/.test(c))) {
      (out[c] ||= []).push({ module: f, name, line: src.slice(0, n.start).split('\n').length, ...(inherited ? { inherited } : {}), props });
      total++;
    }
  };
  // refs : identifiant → classe de l'élément qui porte `ref: <identifiant>` (cible des effets au défilement)
  const refCls = {};
  walk(ast, (n) => {
    if (n.type !== 'ObjectExpression') return;
    let r = null, c = null;
    for (const p of n.properties) { if (p.type !== 'Property') continue; const k = p.key.name || p.key.value; if (k === 'ref' && p.value.type === 'Identifier') r = p.value.name; if (k === 'className') { const v = val(p.value); if (typeof v === 'string') c = v; } }
    if (r && c && !refCls[r]) refCls[r] = c.split(/\s+/).find((x) => /^framer-[a-z0-9]+$/.test(x));
  });
  // PropertyOverrides : o(m, { breakpoint, overrides: { idVarianteDePage: { props } }, children: o(X, { className, … }) })
  const byBp = {};
  walk(ast, (n) => {
    if (n.type !== 'ObjectExpression') return;
    const get = (k) => n.properties.find((p) => p.type === 'Property' && (p.key.name || p.key.value) === k);
    const ov = get('overrides'), ch = get('children');
    if (!get('breakpoint') || !ov || ov.value.type !== 'ObjectExpression' || !ch || ch.value.type !== 'CallExpression') return;
    const a1 = ch.value.arguments[1]; if (!a1 || a1.type !== 'ObjectExpression') return;
    const c = ownCls(a1); if (!c) return;
    const o = val(ov.value); if (!o || typeof o !== 'object') return;
    for (const cc of c.split(/\s+/).filter((x) => /^framer-[a-z0-9]+(-container)?$/.test(x))) byBp[cc] = o;
  });
  const before = total;
  walkC(ast, []);
  for (const [c, o] of Object.entries(byBp)) for (const x of out[c] || []) if (x.module === f) x.props.$byPageVariant = o;
  // remplace "<?X>" des refs par { cls }
  for (const l of Object.values(out)) for (const x of l) if (x.module === f) for (const k of ['__framer__transformTargets', '__framer__targets']) for (const t of x.props[k] || []) if (typeof t.ref === 'string') { const id = t.ref.slice(2, -1); t.ref = refCls[id] ? { cls: refCls[id] } : t.ref; }
  // styles par variante déclarés sur les éléments : { className, style (base), variants: { id: {...} } }
  walk(ast, (n) => {
    if (n.type !== 'ObjectExpression') return;
    let cls = null, vNode = null, sNode = null;
    for (const p of n.properties) { if (p.type !== 'Property') continue; const k = p.key.name || p.key.value; if (k === 'className') { const v = val(p.value); if (typeof v === 'string') cls = v; } if (k === 'variants') vNode = p.value; if (k === 'style') sNode = p.value; }
    if (!cls || !vNode || vNode.type !== 'ObjectExpression') return;
    const vv = val(vNode); if (!vv || typeof vv !== 'object') return;
    const base = sNode && sNode.type === 'ObjectExpression' ? val(sNode) : null;
    for (const c of cls.split(/\s+/).filter((c) => /^framer-[a-z0-9]+(-container)?$/.test(c))) (styles[c] ||= []).push({ module: f, base, variants: vv });
  });
  // tables des variantes : { id: 'framer-v-xxx' } et { 'Nom lisible': id }
  walk(ast, (n) => {
    if (n.type !== 'ObjectExpression' || !n.properties.length) return;
    const o = val(n); if (!o || typeof o !== 'object' || Array.isArray(o)) return;
    const ents = Object.entries(o);
    if (ents.every(([, v]) => typeof v === 'string' && /^framer-v-[a-z0-9]+$/.test(v))) for (const [id, c] of ents) (variants[id] ||= {}).cls = c;
  });
  walk(ast, (n) => {
    if (n.type !== 'ObjectExpression' || !n.properties.length) return;
    const o = val(n); if (!o || typeof o !== 'object' || Array.isArray(o)) return;
    const ents = Object.entries(o);
    if (ents.every(([, v]) => typeof v === 'string' && variants[v]?.cls)) for (const [nm, id] of ents) if (!variants[id].name) variants[id].name = nm;
  });
}
fs.writeFileSync(path.resolve('reference/framer/fx.json'), JSON.stringify(out, null, 1));
fs.writeFileSync(path.resolve('reference/framer/variants.json'), JSON.stringify(variants, null, 1));
fs.writeFileSync(path.resolve('reference/framer/variant-styles.json'), JSON.stringify(styles, null, 1));
fs.writeFileSync(path.resolve('reference/framer/follows.json'), JSON.stringify(follows, null, 1));
console.log(Object.keys(follows).length, 'instances imbriquées suivant leur parent → reference/framer/follows.json');
console.log(Object.keys(styles).length, 'classes avec styles par variante → reference/framer/variant-styles.json');
console.log(Object.keys(variants).length, 'variantes → reference/framer/variants.json');
console.log(Object.keys(out).length, 'classes,', total, 'déclarations → reference/framer/fx.json');
