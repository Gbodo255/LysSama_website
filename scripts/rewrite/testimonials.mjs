// « Temps forts » de l'accueil (D-049) : la page générée ne contient que la carte n° 1 ; ce script ajoute les cartes 2 et 3
// (copies de la carte 1 : textes, image, points de progression) et branche le défilement (src/components/shared/TestimonialSlides.tsx).
// Textes des cartes 2 et 3 PROVISOIRES, à valider par Lys (docs/A-FOURNIR-LYS.md). Idempotent.
import fs from 'node:fs';

const F = 'src/gen/home/Body.tsx';
// Champs d'une carte, dans l'ordre des indices T de la carte 1 : alt, nom, rôle, grand texte, petit texte, 2 chiffres.
const SLIDES = [
  null, // carte 1 : inchangée
  {
    img: 'kmNPpdMzKtgnYgsr9piGQpLv0',
    t: ['Lys Sama', 'Lys Sama', 'Créatrice de contenu, TikTok @lys.sama',
      '“ Chaque look raconte un savoir-faire : je tends le micro à celles et ceux qui le font. ”',
      'Sur TikTok, je présente les créations des stylistes et couturiers béninois : un look, son histoire, la main qui l’a fait. Les lysami.e.s découvrent les créateurs, les créateurs gagnent en visibilité.',
      'le fil de mes vidéos', '#modebeninoise', 'la communauté', 'lysami.e.s'],
  },
  {
    img: 'foJh1zwI8ZAzyJVfsEgIaSkdMjk',
    t: ['Lys Sama', 'Lys Sama', 'Humour et coulisses, Threads et TikTok',
      '“ Les galères de la création de contenu, autant en rire ensemble. ”',
      'Sur Threads et TikTok, je raconte l’envers du décor : les tournages ratés, les idées qui ne prennent pas, les petites victoires. C’est là que la communauté se reconnaît.',
      'ma signature', 'ゆめ', 'les réseaux', 'Threads · TikTok'],
  },
];
const IMG1 = 'XCY5hpPBRBS6cdWzaAWas5dffkA';
const DOTS = ['framer-13pt2j9', 'framer-t1eygr', 'framer-3t8vhm'];
const ON = 'var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))';
const OFF = 'var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))';

let s = fs.readFileSync(F, 'utf8');
if (s.includes('<TSlider>')) { console.log('déjà fait'); process.exit(0); }
const ts = fs.readFileSync('src/data/text/home.ts', 'utf8');
const T = JSON.parse(ts.slice(ts.indexOf('= [') + 2, ts.lastIndexOf(']') + 1));

// Fin d'un élément <div …> ouvert en i (accolades et guillemets du JSX respectés).
function divEnd(src, i) {
  let depth = 0, p = i;
  const tagEnd = (k) => { let b = 0, q = null; for (; k < src.length; k++) { const c = src[k]; if (q) { if (c === q) q = null; } else if (c === '"' || c === "'" || c === '`') q = c; else if (c === '{') b++; else if (c === '}') b--; else if (c === '>' && !b) return k; } throw new Error('balise non fermée'); };
  while (p < src.length) {
    const o = src.indexOf('<div', p), c = src.indexOf('</div>', p);
    if (c < 0) throw new Error('div non fermée');
    if (o >= 0 && o < c && /[\s>]/.test(src[o + 4])) { const e = tagEnd(o); if (src[e - 1] !== '/') depth++; p = e + 1; }
    else { depth--; p = c + 6; if (!depth) return p; }
  }
  throw new Error('div non fermée');
}

// 1) Cartes : copie n° k avec ses textes, son image et son point de progression actif.
const CARD = '<div className="framer-194s776-container" data-framer-name="Testimonial 1"';
let from = 0, cards = 0;
for (let i; (i = s.indexOf(CARD, from)) >= 0; cards++) {
  const j = divEnd(s, i), block = s.slice(i, j), indent = s.slice(s.lastIndexOf('\n', i) + 1, i);
  const ids = [...new Set([...block.matchAll(/T\[(\d+)\]/g)].map((m) => +m[1]))].sort((a, b) => a - b);
  if (ids.length !== 9 || T[ids[1]].trim() !== 'Lys Sama') throw new Error(`carte inattendue : ${ids}`);
  const copy = (k) => {
    let b = block;
    for (const [n, id] of ids.entries()) b = b.replaceAll(`T[${id}]`, JSON.stringify(SLIDES[k].t[n]));
    b = b.replaceAll(IMG1, SLIDES[k].img);
    for (const [d, cls] of DOTS.entries()) b = b.replace(new RegExp(`(className="${cls}"[^>]*?"backgroundColor": ")(${[ON, OFF].map((x) => x.replace(/[()]/g, '\\$&')).join('|')})`), `$1${d === k ? ON : OFF}`);
    return b;
  };
  const out = `<TSlide i={0}>\n${indent}${block}\n${indent}</TSlide>\n${indent}<TSlide i={1}>\n${indent}${copy(1)}\n${indent}</TSlide>\n${indent}<TSlide i={2}>\n${indent}${copy(2)}\n${indent}</TSlide>`;
  s = s.slice(0, i) + out + s.slice(j);
  from = i + out.length;
}
if (cards !== 2) throw new Error(`2 cartes attendues (bureau/tablette, téléphone), trouvées : ${cards}`);

// 2) Compteur « 01 / 03 » et fournisseur d'état autour des deux variantes du curseur.
const a = s.lastIndexOf('<SV ', s.indexOf('className="framer-dujsxl-container"'));
const b = s.indexOf('</SV>', s.indexOf('className="framer-dujsxl-container"', s.indexOf('className="framer-dujsxl-container"') + 1)) + '</SV>'.length;
let region = s.slice(a, b);
T.forEach((t, n) => { if (t.trim() === '01 / 03') region = region.replaceAll(`{T[${n}]}`, '<TCount />'); });
s = s.slice(0, a) + '<TSlider>\n' + region + '\n</TSlider>' + s.slice(b);
s = s.replace("import { TextFx } from '@/components/fx/TextFx';", "import { TextFx } from '@/components/fx/TextFx';\nimport { TCount, TSlide, TSlider } from '@/components/shared/TestimonialSlides';");
fs.writeFileSync(F, s);
console.log('cartes :', cards, '× 3 ; compteurs :', (region.match(/<TCount \/>/g) || []).length);
