// Étape F (source 2) — paramètres d'apparition Framer : JSON <script type="framer/appear"> de chaque page.
// Écrit reference/framer/animations.json : { page: { breakpoints:[...], appear:{ appearId: { variantHash|default: {initial, animate} } } } }
import fs from 'node:fs/promises';
import path from 'node:path';
const dir = path.resolve('reference/html');
const out = {};
for (const f of (await fs.readdir(dir)).filter((f) => f.endsWith('.html'))) {
  const html = await fs.readFile(path.join(dir, f), 'utf8');
  const grab = (id) => { const m = html.match(new RegExp(`<script type="framer/appear" id="${id}">([^]*?)</script>`)); return m ? JSON.parse(m[1]) : null; };
  out[f.replace('.html', '')] = { breakpoints: grab('__framer__breakpoints'), appear: grab('__framer__appearAnimationsContent') };
}
await fs.writeFile(path.resolve('reference/framer/animations.json'), JSON.stringify(out, null, 1));
for (const [k, v] of Object.entries(out)) console.log(k.padEnd(44), Object.keys(v.appear || {}).length, 'appear ids');
