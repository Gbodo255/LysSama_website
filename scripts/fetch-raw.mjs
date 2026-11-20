// Étape A (partie brute) : HTML de chaque route, sitemap, robots, modules JS, index de recherche.
// Écrit tout dans reference/. Relançable : ne re-télécharge pas ce qui existe déjà (sauf --force).
import fs from 'node:fs/promises';
import path from 'node:path';

const ORIGIN = 'https://mirastudio.framer.website';
const REF = path.resolve('reference');
const force = process.argv.includes('--force');

export const ROUTES = [
  '/', '/projects', '/studio', '/journal', '/contact',
  '/projects/gucci', '/projects/chanel', '/projects/puma', '/projects/adidas', '/projects/nike', '/projects/under-armour',
  '/journal/fewer-projects-more-attention', '/journal/awards-dont-build-brands', '/journal/why-we-quote-fixed',
  '/journal/the-best-type-is-invisible', '/journal/on-saying-no', '/journal/the-brief-before-the-brief',
  '/journal/small-looks-expensive', '/journal/the-founder-is-the-brand',
  '/privacy-policy', '/terms-conditions', '/cookie-policy',
  '/this-page-does-not-exist-404', '/design-system',
];
export const slugOf = (r) => (r === '/' ? 'home' : r.slice(1).replace(/\//g, '__'));

async function get(url, out, binary = false) {
  if (!force) { try { await fs.access(out); return { cached: true }; } catch {} }
  const res = await fetch(url, { redirect: 'follow' });
  const buf = Buffer.from(await res.arrayBuffer());
  await fs.mkdir(path.dirname(out), { recursive: true });
  await fs.writeFile(out, buf);
  return { status: res.status, size: buf.length };
}

const log = [];
for (const r of ROUTES) {
  const res = await get(ORIGIN + r, path.join(REF, 'html', slugOf(r) + '.html'));
  log.push({ route: r, ...res });
}
for (const f of ['sitemap.xml', 'robots.txt']) log.push({ file: f, ...(await get(`${ORIGIN}/${f}`, path.join(REF, 'html', f))) });

// Modules JS, index de recherche, images OG, favicons : collectés depuis tous les HTML.
const mjs = new Set(), search = new Set(), og = new Map(), icons = new Set();
for (const r of ROUTES) {
  const html = await fs.readFile(path.join(REF, 'html', slugOf(r) + '.html'), 'utf8');
  for (const m of html.matchAll(/https:\/\/framerusercontent\.com\/sites\/[^"'\s)]+?\.mjs/g)) mjs.add(m[0]);
  for (const m of html.matchAll(/https:\/\/framerusercontent\.com\/sites\/[^"'\s)]+?searchIndex-[^"'\s)]+?\.json/g)) search.add(m[0]);
  const ogm = html.match(/<meta property="og:image" content="([^"]+)"/);
  if (ogm) og.set(r, ogm[1]);
  for (const m of html.matchAll(/<link[^>]+rel="(?:icon|apple-touch-icon|shortcut icon)"[^>]*>/g)) {
    const h = m[0].match(/href="([^"]+)"/); if (h) icons.add(h[1]);
  }
}
// Les modules importent d'autres modules (chunks) : on suit les imports relatifs jusqu'à point fixe.
const queue = [...mjs];
while (queue.length) {
  const u = queue.shift();
  const out = path.join(REF, 'framer', 'js', path.basename(new URL(u).pathname));
  await get(u, out);
  const src = await fs.readFile(out, 'utf8');
  for (const m of src.matchAll(/(?:from|import)\s*\(?\s*["'](\.\/[^"']+?\.mjs|https:\/\/framerusercontent\.com\/[^"']+?\.mjs)["']/g)) {
    const abs = new URL(m[1], u).href;
    if (!mjs.has(abs)) { mjs.add(abs); queue.push(abs); }
  }
}
for (const u of search) await get(u, path.join(REF, 'framer', 'search', path.basename(new URL(u).pathname)));

await fs.writeFile(path.join(REF, 'framer', 'raw-index.json'), JSON.stringify({
  fetchedAt: new Date().toISOString(), log, modules: [...mjs].sort(), searchIndex: [...search], ogImages: Object.fromEntries(og), icons: [...icons],
}, null, 2));
console.log(`routes=${ROUTES.length} modules=${mjs.size} searchIndex=${search.size} og=${og.size} icons=${icons.size}`);
console.log(log.filter((l) => l.status && l.status !== 200));
