// Diagnostic : pourquoi gotoStable bloque sur /projects/<slug> — journalise les requêtes en cours et les étapes.
import { launch, openPage, realFrames, advance, closeAll } from '../../lib/harness.mjs';
const slug = process.argv[2] || 'gucci';
const t0 = Date.now(); const log = (...a) => console.log(Math.round((Date.now() - t0) / 1000) + 's', ...a);
const b = await launch({ webgl: false });
const h = await openPage(b, 'ref', { width: 1440, net: 'record' });
await h.context.route(/^https?:\/\/(?!mirastudio\.framer\.website|framerusercontent\.com|fonts\.gstatic\.com)/, (r) => r.abort());
const pending = new Map();
h.page.on('request', (r) => pending.set(r, r.url()));
h.page.on('requestfinished', (r) => pending.delete(r));
h.page.on('requestfailed', (r) => pending.delete(r));
const timer = setInterval(() => log('en cours', [...pending.values()].map((u) => u.slice(0, 110))), 15000);
try {
  await h.page.goto('https://mirastudio.framer.website/projects/' + slug, { waitUntil: 'domcontentloaded', timeout: 120000 });
  log('domcontentloaded');
  await h.page.waitForLoadState('load', { timeout: 90000 }).then(() => log('load')).catch((e) => log('load KO', e.message.split('\n')[0]));
  await realFrames(h.page, 2); log('realFrames');
  log('videosLoaded', await h.page.evaluate(() => window.__mira.videosLoaded(5000)));
  await advance(h.page, 1000, { step: 100 }); log('advance 1s');
} finally { clearInterval(timer); await closeAll(h); await b.close(); log('fin'); }
