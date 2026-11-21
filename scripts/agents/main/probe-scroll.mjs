// Sonde : classe de variante d'un composant à des positions de défilement, sous le banc (temps virtuel).
// Usage : node probe-scroll.mjs <ref|clone> <route> <sélecteur> <y1,y2,…>
import { launch, openPage, advance, closeAll, urlFor } from '../../lib/harness.mjs';
const [target, route, sel, ys] = process.argv.slice(2);
const b = await launch({ webgl: false }); const h = await openPage(b, target, { width: 1440 });
await h.page.goto(urlFor(target, route), { waitUntil: 'load' }); await advance(h.page, 7000);
for (const y of ys.split(',').map(Number)) {
  await h.page.evaluate((yy) => window.scrollTo(0, yy), y); await advance(h.page, 600);
  console.log(y, await h.page.evaluate((s) => { const e = document.querySelector(s); return e && (e.firstElementChild?.className || '').slice(0, 70) + ' | scrollY=' + scrollY; }, sel));
}
await closeAll(h); await b.close();
