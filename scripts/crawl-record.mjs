// Étape A — construit l'archive réseau de référence : chaque route × chaque largeur (listes A et B),
// parcourue avec le banc en mode 'record'. Puis `--verify` rejoue tout hors ligne et compte les manques.
// Usage : node scripts/crawl-record.mjs [--verify] [--jobs=3] [--only=/,/projects] [--widths=1440,390]
import fs from 'node:fs/promises';
import path from 'node:path';
import { ROUTES as ALL_ROUTES } from './routes.mjs';
import { launch, openPage, gotoStable, closeAll, LIST_A, LIST_B, ROOT } from './lib/harness.mjs';

const arg = (k, d) => (process.argv.find((a) => a.startsWith(`--${k}=`)) || '').split('=')[1] || d;
const verify = process.argv.includes('--verify');
const jobs = +arg('jobs', 3);
const ROUTES = arg('only', '') ? arg('only', '').split(',') : ALL_ROUTES;
const WIDTHS = arg('widths', '') ? arg('widths', '').split(',').map(Number) : [...LIST_A, ...LIST_B];

const logFile = path.join(ROOT, 'reference', 'har', verify ? 'verify-log.json' : 'record-log.json');
await fs.mkdir(path.dirname(logFile), { recursive: true });
let log = {};
try { log = JSON.parse(await fs.readFile(logFile, 'utf8')); } catch {}

const tasks = [];
for (const r of ROUTES) for (const w of WIDTHS) if (!log[`${r}@${w}`]?.ok) tasks.push({ r, w });
console.log(`${tasks.length} tâches, ${jobs} en parallèle, mode ${verify ? 'replay' : 'record'}`);

const browser = await launch();
async function worker(id) {
  while (tasks.length) {
    const { r, w } = tasks.shift();
    const t = Date.now();
    const h = await openPage(browser, 'ref', { width: w, net: verify ? 'replay' : 'record' });
    let err = null;
    try { await gotoStable(h, r, { settleMs: 1500 }); } catch (e) { err = String(e).slice(0, 300); }
    const entry = { ok: !err && (!verify || h.missing.length === 0), ms: Date.now() - t, missing: h.missing.slice(0, 50), missingCount: h.missing.length, err };
    log[`${r}@${w}`] = entry;
    await fs.writeFile(logFile, JSON.stringify(log, null, 1));
    console.log(`[${id}] ${r} @${w} ${entry.ok ? 'ok' : 'KO'} ${entry.ms}ms missing=${entry.missingCount}${err ? ' ' + err : ''}`);
    await closeAll(h);
  }
}
await Promise.all(Array.from({ length: jobs }, (_, i) => worker(i)));
await browser.close();
const all = Object.values(log);
console.log(`terminé : ${all.filter((e) => e.ok).length}/${all.length} ok, manques totaux = ${all.reduce((s, e) => s + e.missingCount, 0)}`);
