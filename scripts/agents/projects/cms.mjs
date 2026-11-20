// Extrait, de chaque handover-<slug>.json, l'enregistrement CMS complet de la page (requête la plus large) et les requêtes annexes.
// usage : node scripts/agents/projects/cms.mjs → reference/agents/projects/cms-<slug>.json
import fs from 'node:fs';
import path from 'node:path';
const ROOT = path.resolve(import.meta.dirname, '../../..');
const D = path.join(ROOT, 'reference/agents/projects');
const unwrap = (v) => (v && typeof v === 'object' && 'type' in v && 'value' in v ? unwrap(v.value) : Array.isArray(v) ? v.map(unwrap) : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, unwrap(x)])) : v);
for (const slug of ['gucci', 'chanel', 'puma', 'adidas', 'nike', 'under-armour']) {
  const h = JSON.parse(fs.readFileSync(path.join(D, `handover-projects__${slug}.json`), 'utf8'));
  const queries = [];
  for (const part of Object.values(h)) for (const [q, rows] of Object.entries(part ?? {})) if (Array.isArray(rows)) queries.push({ q: q.slice(0, 160), n: rows.length, keys: Object.keys(rows[0] ?? {}).length, rows: unwrap(rows) });
  queries.sort((a, b) => b.keys - a.keys);
  const out = { slug, record: queries[0]?.rows.find((r) => r.UxQzAcVgo === slug) ?? queries[0]?.rows[0], queries: queries.map(({ q, n, keys, rows }) => ({ q, n, keys, rows })) };
  fs.writeFileSync(path.join(D, `cms-${slug}.json`), JSON.stringify(out, null, 1));
  console.log(slug, queries.map((x) => `${x.n}x${x.keys}`).join(' '));
}
