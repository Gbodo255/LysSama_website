// Étape H — collecte de tous les assets framerusercontent.com (hors modules JS du runtime) :
// sources = HTML bruts, CSS extraits, DOM rendus, entrées de l'archive réseau.
// Paramètres de requête retirés (original pleine résolution) ; chaque fichier téléchargé une fois.
// Sortie : public/assets/<kind>/<hash>.<ext> + public/assets/manifest.json (URL d'origine, chemin local,
// dimensions, poids, durée vidéo, pages où il apparaît). Le renommage explicite se fait à l'Étape I (alias).
import fs from 'node:fs/promises';
import fss from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import sharp from 'sharp';
import ffmpegPath from 'ffmpeg-static';

const ROOT = path.resolve('.');
const OUT = path.join(ROOT, 'public', 'assets');
const URL_RE = /https:\/\/framerusercontent\.com\/(?:assets|images|modules\/assets)\/[A-Za-z0-9_\-./]+?\.(?:jpe?g|png|webp|avif|gif|svg|mp4|webm|mov|woff2?|ttf|otf|json|glb|gltf|hdr|ktx2)/g;
const KIND = { jpg: 'images', jpeg: 'images', png: 'images', webp: 'images', avif: 'images', gif: 'images', svg: 'icons', mp4: 'videos', webm: 'videos', mov: 'videos', woff2: 'fonts', woff: 'fonts', ttf: 'fonts', otf: 'fonts', json: 'data', glb: 'models', gltf: 'models', hdr: 'textures', ktx2: 'textures' };

const usage = new Map(); // url sans query -> Set(page)
const add = (u, page) => { const clean = u.split('?')[0]; (usage.get(clean) || usage.set(clean, new Set()).get(clean)).add(page); };
async function scanDir(dir, pageOf) {
  if (!fss.existsSync(dir)) return;
  for (const ent of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) { await scanDir(p, pageOf); continue; }
    if (!/\.(html|css|json)$/.test(ent.name)) continue;
    const txt = await fs.readFile(p, 'utf8');
    for (const m of txt.matchAll(URL_RE)) add(m[0], pageOf(p));
  }
}
const rel = (p) => path.relative(ROOT, p).replace(/\\/g, '/');
await scanDir(path.join(ROOT, 'reference', 'html'), (p) => path.basename(p, '.html'));
await scanDir(path.join(ROOT, 'reference', 'css'), (p) => path.basename(p, '.css'));
await scanDir(path.join(ROOT, 'reference', 'dom'), (p) => path.basename(path.dirname(p)));
await scanDir(path.join(ROOT, 'reference', 'framer-project'), () => 'framer-project');
// Archive réseau : URLs réellement demandées par le navigateur
const entriesDir = path.join(ROOT, 'reference', 'har', 'entries');
if (fss.existsSync(entriesDir)) for (const f of await fs.readdir(entriesDir)) {
  const e = JSON.parse(await fs.readFile(path.join(entriesDir, f), 'utf8'));
  if (URL_RE.test(e.url)) add(e.url, 'har'); URL_RE.lastIndex = 0;
}
// Les pages "design-system" et le bandeau du template sont hors périmètre : on ne garde que les URLs vues ailleurs.
for (const [u, pages] of usage) { pages.delete('design-system'); if (!pages.size) usage.delete(u); }

let manifest = {};
try { manifest = JSON.parse(await fs.readFile(path.join(OUT, 'manifest.json'), 'utf8')); } catch {}
let n = 0, bytes = 0;
for (const [url, pages] of usage) {
  const ext = path.extname(new URL(url).pathname).slice(1).toLowerCase();
  const kind = KIND[ext] || 'other';
  const local = path.join(OUT, kind, path.basename(new URL(url).pathname));
  if (!fss.existsSync(local)) {
    const res = await fetch(url);
    if (!res.ok) { manifest[url] = { error: res.status, pages: [...pages] }; console.log('KO', res.status, url); continue; }
    await fs.mkdir(path.dirname(local), { recursive: true });
    await fs.writeFile(local, Buffer.from(await res.arrayBuffer()));
    n++;
  }
  const st = await fs.stat(local); bytes += st.size;
  const m = { local: '/' + rel(local).replace(/^public\//, ''), kind, bytes: st.size, pages: [...pages].sort(), ...(manifest[url]?.alias ? { alias: manifest[url].alias } : {}) };
  if (kind === 'images' && ext !== 'svg') { try { const md = await sharp(local).metadata(); m.width = md.width; m.height = md.height; } catch {} }
  if (kind === 'videos') {
    try { execFileSync(ffmpegPath, ['-i', local], { stdio: 'pipe' }); } catch (e) {
      const s = String(e.stderr); const d = s.match(/Duration: (\d+):(\d+):([\d.]+)/); const v = s.match(/, (\d{2,5})x(\d{2,5})/);
      if (d) m.duration = +d[1] * 3600 + +d[2] * 60 + +d[3]; if (v) { m.width = +v[1]; m.height = +v[2]; }
    }
  }
  manifest[url] = m;
}
await fs.mkdir(OUT, { recursive: true });
await fs.writeFile(path.join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 1));
const byKind = {};
for (const m of Object.values(manifest)) if (!m.error) { byKind[m.kind] = (byKind[m.kind] || 0) + 1; }
console.log(`${usage.size} URLs, ${n} téléchargés, ${(bytes / 1e6).toFixed(1)} Mo`, byKind);
