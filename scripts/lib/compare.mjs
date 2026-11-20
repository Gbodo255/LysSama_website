// Comparaisons communes : pixels (pixelmatch), géométrie, styles, textes, retours à la ligne.
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import sharp from 'sharp';

export async function toRGBA(input) {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  return { data, width: info.width, height: info.height };
}

function pad(img, w, h) {
  if (img.width === w && img.height === h) return img.data;
  const out = Buffer.alloc(w * h * 4); // zones absentes = transparent/noir → comptées comme différentes
  for (let y = 0; y < Math.min(h, img.height); y++) img.data.copy(out, y * w * 4, y * img.width * 4, y * img.width * 4 + Math.min(w, img.width) * 4);
  return out;
}

/** Diff pixels. `mask` = liste de rectangles {x,y,width,height} ignorés (zones en mouvement continu). */
export async function pixelDiff(a, b, { threshold = 0.1, mask = [] } = {}) {
  const A = await toRGBA(a), B = await toRGBA(b);
  const w = Math.max(A.width, B.width), h = Math.max(A.height, B.height);
  const da = pad(A, w, h), db = pad(B, w, h);
  for (const r of mask) for (let y = Math.max(0, r.y | 0); y < Math.min(h, (r.y + r.height) | 0); y++) for (let x = Math.max(0, r.x | 0); x < Math.min(w, (r.x + r.width) | 0); x++) {
    const i = (y * w + x) * 4; db[i] = da[i]; db[i + 1] = da[i + 1]; db[i + 2] = da[i + 2]; db[i + 3] = da[i + 3];
  }
  const diff = new PNG({ width: w, height: h });
  const n = pixelmatch(da, db, diff.data, w, h, { threshold, includeAA: false });
  return { diffPct: (100 * n) / (w * h), diffPixels: n, width: w, height: h, sizeA: [A.width, A.height], sizeB: [B.width, B.height], diffPng: PNG.sync.write(diff) };
}

/** Planche original | clone | diff côte à côte (PNG). */
export async function triptych(a, b, diffPng) {
  const imgs = await Promise.all([a, b, diffPng].map((x) => sharp(x).ensureAlpha().png().toBuffer({ resolveWithObject: true })));
  const W = imgs.reduce((s, i) => s + i.info.width, 0) + 2 * 8;
  const H = Math.max(...imgs.map((i) => i.info.height));
  let x = 0; const comp = [];
  for (const i of imgs) { comp.push({ input: i.data, left: x, top: 0 }); x += i.info.width + 8; }
  return sharp({ create: { width: W, height: H, channels: 4, background: { r: 255, g: 0, b: 255, alpha: 1 } } }).composite(comp).png().toBuffer();
}

export const normText = (s) => String(s ?? '').replace(/\s+/g, ' ').trim();

/** Compare deux listes ordonnées de textes ; renvoie les écarts. */
export function diffTexts(ref, clone) {
  const out = [];
  const n = Math.max(ref.length, clone.length);
  for (let i = 0; i < n; i++) if (normText(ref[i]) !== normText(clone[i])) out.push({ i, ref: ref[i], clone: clone[i] });
  return out;
}

/** Compare deux rectangles ; tolérance en px. */
export function rectDelta(a, b) {
  return Math.max(Math.abs(a.x - b.x), Math.abs(a.y - b.y), Math.abs(a.width - b.width), Math.abs(a.height - b.height));
}

// Auto-contrôle minimal
if (process.argv[1] && process.argv[1].endsWith('compare.mjs') && process.argv.includes('--selftest')) {
  const red = await sharp({ create: { width: 10, height: 10, channels: 4, background: '#f00' } }).png().toBuffer();
  const red2 = await sharp({ create: { width: 10, height: 10, channels: 4, background: '#f00' } }).png().toBuffer();
  const blue = await sharp({ create: { width: 10, height: 10, channels: 4, background: '#00f' } }).png().toBuffer();
  const same = await pixelDiff(red, red2), other = await pixelDiff(red, blue), masked = await pixelDiff(red, blue, { mask: [{ x: 0, y: 0, width: 10, height: 5 }] });
  console.assert(same.diffPct === 0, 'same'); console.assert(other.diffPct === 100, 'other'); console.assert(masked.diffPct === 50, 'masked ' + masked.diffPct);
  console.assert(diffTexts(['a  b'], ['a b']).length === 0 && diffTexts(['a'], ['b']).length === 1, 'texts');
  console.log('compare selftest ok');
}
