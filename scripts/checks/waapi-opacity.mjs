// Contrôle D-021 : l'opacité de « Overlay BG » (animation Motion/WAAPI) doit suivre une courbe sur
// plusieurs images sous advance(), pas basculer en une seule. Usage : node scripts/checks/waapi-opacity.mjs
import { launch, openPage, gotoStable, advance, realFrames, closeAll } from '../lib/harness.mjs';
const b = await launch({ webgl: false });
const h = await openPage(b, 'ref', { width: 1440 });
await gotoStable(h, '/privacy-policy', { scrollThrough: false });
await h.page.hover('[data-framer-name="Side Nav"]');
await realFrames(h.page, 2);
const samples = [];
await advance(h.page, 800, { onFrame: async (t) => samples.push([t, Math.round(1000 * await h.page.evaluate(() => +getComputedStyle(document.querySelector('[data-framer-name="Overlay BG"]')).opacity)) / 1000]) });
await closeAll(h); await b.close();
const mid = samples.filter(([, o]) => o > 0.02 && o < 0.83).length;
console.log(JSON.stringify(samples.filter((_, i) => i % 4 === 0)), 'intermédiaires:', mid);
if (mid < 5) { console.error('KO : bascule sans courbe'); process.exit(1); }
console.log('OK');
