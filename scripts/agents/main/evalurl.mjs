// Évalue une expression dans une page. Usage : node evalurl.mjs <url> <largeur> "<expr JS>"
import { launch } from '../../lib/harness.mjs';
const [url, w, expr] = process.argv.slice(2);
const b = await launch({ webgl: false }); const p = await (await b.newContext({ viewport: { width: +w, height: 900 } })).newPage();
await p.goto(url, { waitUntil: 'load' }); await p.waitForTimeout(3000);
console.log(JSON.stringify(await p.evaluate(expr), null, 1)); await b.close();
