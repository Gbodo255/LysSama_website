// Étape C / Phase 2 — @font-face auto-hébergés, descripteurs identiques à l'original
// (font-display, unicode-range, font-stretch, *-override, size-adjust, polices « Placeholder » locales).
// Télécharge les fichiers manquants (fonts.gstatic.com, framerusercontent.com) dans public/assets/fonts/.
// Sortie : src/styles/fonts.css + reference/framer/fonts.json (famille → fichiers, source, licence).
import fs from 'node:fs/promises';
import fss from 'node:fs';
import path from 'node:path';

const t = JSON.parse(await fs.readFile('reference/framer/tokens.json', 'utf8'));
const OUT_DIR = 'public/assets/fonts';
await fs.mkdir(OUT_DIR, { recursive: true });

// Licences par famille (fonderie identifiée par l'URL d'origine et le nom).
const LICENSE = {
  'Mona Sans': 'OFL-1.1 (GitHub, via Google Fonts)', 'Mona Sans Variable': 'OFL-1.1 (GitHub)',
  'IBM Plex Mono': 'OFL-1.1 (IBM, via Google Fonts)', Smooch: 'OFL-1.1 (TypeSETit, via Google Fonts)',
  Geist: 'OFL-1.1 (Vercel)', Inter: 'OFL-1.1 (Rasmus Andersson)', Manrope: 'OFL-1.1 (Mikhail Sharanda)', 'Manrope Variable': 'OFL-1.1 (Mikhail Sharanda)',
  Switzer: 'ITF Free Font License (Fontshare / Indian Type Foundry)',
};
const ORDER = ['font-family', 'font-style', 'font-weight', 'font-stretch', 'font-display', 'src', 'unicode-range', 'ascent-override', 'descent-override', 'line-gap-override', 'size-adjust'];
const css = ['/* Généré par scripts/gen-fonts.mjs depuis reference/framer/tokens.json — ne pas éditer à la main. */'];
const families = {};
for (const f of t.fontFaces) {
  const fam = f['font-family'].replace(/["']/g, '');
  let src = f.src;
  for (const m of [...(src || '').matchAll(/url\(([^)]+)\)/g)]) {
    const url = m[1].replace(/["']/g, '');
    const file = path.basename(new URL(url).pathname);
    const local = path.join(OUT_DIR, file);
    if (!fss.existsSync(local)) {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`${res.status} ${url}`);
      await fs.writeFile(local, Buffer.from(await res.arrayBuffer()));
    }
    src = src.replace(m[0], `url(/assets/fonts/${file})`);
    const e = (families[fam] ||= { license: LICENSE[fam] || 'NON CONFIRMÉE', files: [], sources: new Set() });
    e.files.push(file); e.sources.add(new URL(url).host);
  }
  if (!f.src) continue;
  css.push(`@font-face{${ORDER.filter((k) => f[k] !== undefined).map((k) => `${k}:${k === 'src' ? src : f[k]}`).join(';')}}`);
}
await fs.mkdir('src/styles', { recursive: true });
await fs.writeFile('src/styles/fonts.css', css.join('\n') + '\n');
await fs.writeFile('reference/framer/fonts.json', JSON.stringify(Object.fromEntries(Object.entries(families).map(([k, v]) => [k, { ...v, sources: [...v.sources] }])), null, 1));
console.log(Object.entries(families).map(([k, v]) => `${k}: ${v.files.length} fichiers, ${v.license}`).join('\n'));
