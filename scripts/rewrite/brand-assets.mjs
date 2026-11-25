// Logo Lys Sama extrait de sa charte (PDF « Eléments visuels Lys_Sama ») : icône hélice bordeaux (page 1) et
// mot-symbole « LYS SAMA » en Xunga vectorisée (page 2), remis sur une ligne.
// Usage : pdftocairo -svg -f 1 -l 1 charte.pdf p1.svg && pdftocairo -svg -f 2 -l 2 charte.pdf p2.svg
//         node scripts/rewrite/brand-assets.mjs p1.svg p2.svg
import fs from 'node:fs';

const [p1, p2] = process.argv.slice(2).map((f) => fs.readFileSync(f, 'utf8'));
const GAP = 40; // espace entre LYS et SAMA (unités du PDF ; capitales ≈ 150)

const move = (d, dx, dy) => {
  if (/[^MLCZ\d\s.,-]/.test(d)) throw new Error('commande de tracé inattendue');
  let k = 0;
  return d.replace(/-?\d+(\.\d+)?/g, (n) => (+n + (k++ % 2 ? dy : dx)).toFixed(2).replace(/\.?0+$/, ''));
};

const icon = move(p1.match(/fill="rgb\(35\.289001%[^"]*" fill-opacity="1" d="([^"]+)"/)[1], 0, 0);
const glyph = Object.fromEntries([...p2.matchAll(/<g id="(glyph-0-\d+)">\s*(?:<path d="([^"]*)"\/>)?/g)].map((m) => [m[1], m[2] || '']));
const line = (src) => [...p2.split('<g id="source-').find((c) => c.startsWith(src + '"')).matchAll(/#(glyph-0-\d+)" x="([\d.]+)" y="([\d.]+)"/g)]
  .map((m) => ({ d: glyph[m[1]], x: +m[2], y: +m[3] }));
const lys = line('5'), sama = line('8');
const shift = lys.at(-1).x + GAP - sama[0].x; // le dernier glyphe de LYS est l'espace : sa position = fin du S
const wordmark = [...lys.map((g) => move(g.d, g.x, g.y)), ...sama.map((g) => move(g.d, g.x + shift, lys[0].y))].filter(Boolean).join(' ');
if (lys.length !== 4 || sama.length !== 5 || !icon) throw new Error('structure du PDF inattendue');

// Boîte englobante exacte (extrema des courbes de Bézier), sans navigateur.
const box = (d) => {
  const t = d.match(/[MLCZ]|-?[\d.]+/g), xs = [], ys = [];
  let i = 0, x = 0, y = 0;
  const ext = (p0, p1, p2, p3, out) => { // racines de la dérivée d'une cubique
    const a = -p0 + 3 * p1 - 3 * p2 + p3, b = 2 * (p0 - 2 * p1 + p2), c = p1 - p0;
    const roots = Math.abs(a) < 1e-12 ? (b ? [-c / b] : []) : ((D) => (D < 0 ? [] : [(-b + Math.sqrt(D)) / (2 * a), (-b - Math.sqrt(D)) / (2 * a)]))(b * b - 4 * a * c);
    for (const r of roots) if (r > 0 && r < 1) out.push((1 - r) ** 3 * p0 + 3 * (1 - r) ** 2 * r * p1 + 3 * (1 - r) * r * r * p2 + r ** 3 * p3);
  };
  while (i < t.length) {
    const cmd = t[i++], n = () => +t[i++];
    if (cmd === 'Z') continue;
    if (cmd === 'C') { const [x1, y1, x2, y2, x3, y3] = [n(), n(), n(), n(), n(), n()]; ext(x, x1, x2, x3, xs); ext(y, y1, y2, y3, ys); x = x3; y = y3; }
    else { x = n(); y = n(); }
    xs.push(x); ys.push(y);
  }
  const [x0, y0] = [Math.floor(Math.min(...xs)), Math.floor(Math.min(...ys))];
  return [x0, y0, Math.ceil(Math.max(...xs)) - x0, Math.ceil(Math.max(...ys)) - y0].join(' ');
};
const brand = { icon: { viewBox: box(icon), d: icon }, wordmark: { viewBox: box(wordmark), d: wordmark } };

fs.mkdirSync('public/assets/brand', { recursive: true });
const svg = (k, fill) => `<svg xmlns="http://www.w3.org/2000/svg" width="${brand[k].viewBox.split(' ')[2]}" height="${brand[k].viewBox.split(' ')[3]}" viewBox="${brand[k].viewBox}"><path fill="${fill}" d="${brand[k].d}"/></svg>\n`;
fs.writeFileSync('public/assets/brand/lys-icon.svg', svg('icon', '#5a0b14'));
fs.writeFileSync('public/assets/brand/lys-wordmark.svg', svg('wordmark', '#5a0b14'));
fs.writeFileSync('src/app/icon.svg', svg('icon', '#5a0b14')); // favicon (convention de fichier Next)

// Logo du menu : hélice (hauteur H) + mot-symbole (hauteur 0,72 H), centrés verticalement.
const dim = (k) => brand[k].viewBox.split(' ').slice(2).map(Number);
const [iw, ih] = dim('icon'), [ww, wh] = dim('wordmark'), H = 180, h = 130, I = Math.round((H * iw) / ih), Wm = Math.round((h * ww) / wh), G = 40;
const nested = (k, x, y, w, hh) => `<svg x="${x}" y="${y}" width="${w}" height="${hh}" viewBox="${brand[k].viewBox}"><path d="${brand[k].d}"/></svg>`;
fs.writeFileSync('public/assets/brand/lys-logo.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${I + G + Wm} ${H}" fill="#fff">${nested('icon', 0, 0, I, H)}${nested('wordmark', I + G, (H - h) / 2, Wm, h)}</svg>\n`);
console.log('icône', brand.icon.viewBox, '| mot-symbole', brand.wordmark.viewBox, '| logo', `${I + G + Wm}×${H}`, (I + G + Wm) / H);
