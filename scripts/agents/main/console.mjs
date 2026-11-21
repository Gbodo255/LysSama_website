// Erreurs console/page d'une URL du clone. Usage : node console.mjs <url> [largeur]
import { launch } from '../../lib/harness.mjs';
const b = await launch({ webgl: false }); const p = await (await b.newContext({ viewport: { width: +(process.argv[3] || 1440), height: 900 } })).newPage();
const L = []; p.on('console', (m) => (m.type() === 'error' || m.type() === 'warning') && L.push(m.type() + ': ' + m.text().slice(0, 400))); p.on('pageerror', (e) => L.push('pageerror: ' + String(e).slice(0, 400)));
await p.goto(process.argv[2], { waitUntil: 'load' }); await p.waitForTimeout(4000);
console.log(L.join('\n') || 'aucune erreur'); await b.close();
