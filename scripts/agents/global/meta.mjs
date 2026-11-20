// Extrait les métadonnées <head> des 23 routes depuis reference/html (aucun réseau).
import fs from 'node:fs';
import { ROUTES, slugOf } from '../../routes.mjs';
const dec = (s) => s?.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const attr = (t, a) => dec(new RegExp(`\\s${a}="([^"]*)"`).exec(t)?.[1]);
const out = {};
for (const r of ROUTES) {
  const s = fs.readFileSync(`reference/html/${slugOf(r)}.html`, 'utf8');
  const h = s.slice(0, s.indexOf('</head>'));
  const o = { lang: /<html[^>]*lang="([^"]*)"/.exec(s)?.[1] ?? null, title: dec(/<title>([^<]*)<\/title>/.exec(h)?.[1]), meta: {}, links: [] };
  for (const [t] of h.matchAll(/<meta\b[^>]*>/g)) { const k = attr(t, 'name') || attr(t, 'property'); if (k && !/framer-search|generator|framer-html/.test(k)) o.meta[k] = attr(t, 'content'); }
  for (const [t] of h.matchAll(/<link\b[^>]*>/g)) { const rel = attr(t, 'rel'); if (/icon|canonical/.test(rel)) o.links.push({ rel, href: attr(t, 'href'), media: attr(t, 'media') ?? undefined }); }
  out[r] = o;
}
fs.writeFileSync('reference/agents/global/meta.json', JSON.stringify(out, null, 1));
const t = {};
for (const [r, o] of Object.entries(out)) {
  const { 'og:url': _u, ...m } = o.meta;
  const k = JSON.stringify([o.title, m, o.links.filter((l) => l.rel !== 'canonical')]);
  (t[k] ??= []).push(r);
}
for (const [k, rs] of Object.entries(t)) console.log(rs.length, rs.join(' '), '\n   ', k.slice(0, 1500));
for (const [r, o] of Object.entries(out)) console.log(r, o.lang, o.links.find((l) => l.rel === 'canonical')?.href, o.meta['og:url']);
