import fs from 'node:fs';
import sharp from 'sharp';
import { PNG } from 'pngjs';
import { pixelDiff } from './lib/compare.mjs';
const [a, b, out] = process.argv.slice(2);
const r = await pixelDiff(fs.readFileSync(a), fs.readFileSync(b));
const p = PNG.sync.read(r.diffPng); const boxes = {};
for (let y = 0; y < p.height; y++) for (let x = 0; x < p.width; x++) { const i = (y * p.width + x) * 4; if (p.data[i] === 255 && p.data[i + 1] === 0 && p.data[i + 2] === 0) { const k = `${Math.floor(x / 100) * 100},${Math.floor(y / 100) * 100}`; boxes[k] = (boxes[k] || 0) + 1; } }
console.log(r.diffPct.toFixed(4), JSON.stringify(boxes));
if (out) { const keys = Object.keys(boxes).map((k) => k.split(',').map(Number)); const x0 = Math.min(...keys.map((k) => k[0])), y0 = Math.min(...keys.map((k) => k[1])), x1 = Math.max(...keys.map((k) => k[0])) + 100, y1 = Math.min(Math.max(...keys.map((k) => k[1])) + 100, y0 + 600);
  const ex = { left: x0, top: y0, width: Math.min(x1, r.width) - x0, height: Math.min(y1, r.height) - y0 };
  const A = await sharp(a).extract(ex).toBuffer(), B = await sharp(b).extract(ex).toBuffer();
  await sharp({ create: { width: ex.width * 2 + 10, height: ex.height, channels: 4, background: '#f0f' } }).composite([{ input: A, left: 0, top: 0 }, { input: B, left: ex.width + 10, top: 0 }]).png().toFile(out); }
