// Police de texte de la charte Lys Sama (Arimo, D-042), auto-hébergée sous les noms de familles d'origine : tous les usages
// (presets, styles en ligne, composants de code) basculent sans toucher au code généré. gen-fonts.mjs ne déclare plus ces familles.
// Titres : police d'origine (Mona Sans) conservée à la demande du propriétaire (2026-11-25).
// Sortie : public/assets/fonts/lys/*.woff2 + src/styles/brand-fonts.css
import fs from 'node:fs';

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const SETS = [
  { family: 'Arimo:ital,wght@0,400..700;1,400..700', names: ['Switzer', 'Manrope', 'Manrope Variable', 'Inter', 'Geist', 'Lys Texte'] },
];

const out = ['/* Généré par scripts/rewrite/brand-fonts.mjs (charte Lys Sama, D-042) — ne pas éditer à la main. */'];
fs.mkdirSync('public/assets/fonts/lys', { recursive: true });
for (const s of SETS) {
  const res = await fetch(`https://fonts.googleapis.com/css2?family=${s.family}&display=swap`, { headers: { 'user-agent': UA } });
  if (!res.ok) throw new Error(`${res.status} ${s.family}`);
  const faces = [...(await res.text()).matchAll(/\/\* (latin(?:-ext)?) \*\/\s*@font-face \{([^}]+)\}/g)];
  if (!faces.length) throw new Error(`aucun sous-ensemble latin pour ${s.family}`);
  for (const [, , body] of faces) {
    const url = body.match(/url\((https:[^)]+\.woff2)\)/)[1], file = `lys/${url.split('/').pop()}`;
    if (!fs.existsSync(`public/assets/fonts/${file}`)) {
      const f = await fetch(url);
      if (!f.ok) throw new Error(`${f.status} ${url}`);
      fs.writeFileSync(`public/assets/fonts/${file}`, Buffer.from(await f.arrayBuffer()));
    }
    const decl = body.replace(/font-family:[^;]+;/, '').replace(url, `/assets/fonts/${file}`).replace(/\s+/g, ' ').trim();
    for (const n of s.names) out.push(`@font-face{font-family:"${n}";${decl}}`);
  }
}
fs.writeFileSync('src/styles/brand-fonts.css', out.join('\n') + '\n');
console.log(out.length - 1, 'règles @font-face');
