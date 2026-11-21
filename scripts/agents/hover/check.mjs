// Auto-contrôle : components.json (gestures/hoverNames) et variant-styles.json (racines `root`) cohérents avec measure.json.
import assert from 'node:assert/strict';
import fs from 'node:fs';
const M = JSON.parse(fs.readFileSync('scripts/agents/hover/measure.json', 'utf8'));
const C = JSON.parse(fs.readFileSync('reference/framer/components.json', 'utf8'));
const S = JSON.parse(fs.readFileSync('reference/framer/variant-styles.json', 'utf8'));
for (const g of M.gestures) assert.ok(C[g.scope]?.gestures, g.scope + ' sans gestures');
assert.equal(Object.values(C).filter((c) => c.gestures).length, M.gestures.length);
const names = Object.values(C).flatMap((c) => Object.entries(c.hoverNames || {}));
assert.equal(names.length, M.names.length);
for (const n of M.names) assert.ok(names.some(([k, v]) => k === n.id + '-hover' && v === (n.name === 'void 0' ? null : n.name.slice(1, -1))), n.id);
for (const c of M.stylesHover) assert.ok(S[c]);
console.log('ok', M.gestures.length, 'composants à survol,', names.length, 'noms de geste,', Object.values(S).flat().filter((x) => x.root).length, 'styles de racine');
