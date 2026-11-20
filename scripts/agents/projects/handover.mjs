// Décode le JSON d'hydratation Framer (format « devalue » aplati) de chaque page projet.
// usage : node scripts/agents/projects/handover.mjs <slug>... → reference/agents/projects/handover-<slug>.json
import fs from 'node:fs';
import path from 'node:path';
const ROOT = path.resolve(import.meta.dirname, '../../..');
const SPECIAL = { '-1': undefined, '-2': null, '-3': NaN, '-4': Infinity, '-5': -Infinity, '-6': -0 };
export function decode(arr) {
  const memo = new Map();
  const at = (i) => {
    if (i < 0) return SPECIAL[i];
    if (memo.has(i)) return memo.get(i);
    const v = arr[i];
    let out;
    if (v === null || typeof v !== 'object') out = v;
    else if (Array.isArray(v)) {
      if (typeof v[0] === 'string' && v[0] === 'Map') { out = {}; memo.set(i, out); for (let k = 1; k < v.length; k += 2) out[String(at(v[k]))] = at(v[k + 1]); return out; }
      if (typeof v[0] === 'string' && v[0] === 'Date') return new Date(v[1]).toISOString();
      out = []; memo.set(i, out); for (const k of v) out.push(at(k)); return out;
    } else { out = {}; memo.set(i, out); for (const [k, j] of Object.entries(v)) out[k] = at(j); return out; }
    memo.set(i, out); return out;
  };
  return at(0);
}
// auto-test minimal
console.assert(JSON.stringify(decode([{ a: 1, b: 2 }, 'x', [3], 5])) === '{"a":"x","b":[5]}', 'decode');
for (const slug of process.argv.slice(2)) {
  const s = fs.readFileSync(path.join(ROOT, 'reference/html', slug + '.html'), 'utf8');
  const m = s.match(/<script type="framer\/handover" id="__framer__handoverData">([\s\S]*?)<\/script>/);
  const data = decode(JSON.parse(m[1]));
  fs.writeFileSync(path.join(ROOT, 'reference/agents/projects', `handover-${slug}.json`), JSON.stringify(data, null, 1));
  console.log(slug, Object.keys(data[0] ?? data).length);
}
