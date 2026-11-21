// Relevé de la lightbox Framer (image principale `framer-8k5osh` des pages projet) : DOM de #template-overlay après clic,
// styles au fil du temps virtuel (ouverture), puis fermeture (Échap) — même banc pour l'original et le clone.
// Usage : node lightbox-probe.mjs <ref|clone> [route=/projects/chanel] [largeur=1440] → reference/agents/main/lightbox-<cible>.json
import fs from 'node:fs';
import { launch, openPage, gotoStable, advance, closeAll, ROOT } from '../../lib/harness.mjs';
const [target = 'ref', route = '/projects/chanel', w = '1440'] = process.argv.slice(2);
const b = await launch({ webgl: false });
const h = await openPage(b, target, { width: +w });
const out = { route, width: +w, frames: [] };
try {
  await gotoStable(h, route, { scrollThrough: false });
  const p = h.page;
  await p.evaluate(() => document.querySelector('.framer-8k5osh')?.scrollIntoView({ block: 'center' }));
  await advance(p, 500);
  const box = await p.evaluate(() => { const r = document.querySelector('.framer-8k5osh').getBoundingClientRect(); return { x: r.x + r.width / 2, y: r.y + r.height / 2 }; });
  await p.mouse.move(box.x, box.y); await advance(p, 200);
  await p.mouse.click(box.x, box.y);
  const snap = () => p.evaluate(() => {
    const o = document.getElementById('template-overlay') || document.getElementById('overlay');
    const d = (e, l = 0) => l > 6 ? '' : '  '.repeat(l) + `<${e.tagName.toLowerCase()} class="${e.className}" style="${e.getAttribute('style') || ''}">\n` + [...e.children].map((k) => d(k, l + 1)).join('');
    const r = (e) => { const b = e.getBoundingClientRect(); return [+b.x.toFixed(1), +b.y.toFixed(1), +b.width.toFixed(1), +b.height.toFixed(1)]; };
    return { html: o ? d(o) : null, rects: o ? [...o.querySelectorAll('*')].slice(0, 8).map((e) => ({ tag: e.tagName, cls: String(e.className).slice(0, 60), rect: r(e), op: getComputedStyle(e).opacity, bg: getComputedStyle(e).backgroundColor })) : [] };
  });
  for (let t = 0; t <= 800; t += 50) { out.frames.push({ t, ...(await snap()) }); await advance(p, 50); }
  await p.keyboard.press('Escape');
  for (let t = 0; t <= 800; t += 100) { out.frames.push({ t: 'close+' + t, ...(await snap()) }); await advance(p, 100); }
} catch (e) { out.err = String(e).slice(0, 300); }
fs.writeFileSync(`${ROOT}/reference/agents/main/lightbox-${target}.json`, JSON.stringify(out, null, 1));
console.log(out.err || `${out.frames.length} relevés → reference/agents/main/lightbox-${target}.json`);
await closeAll(h); await b.close();
