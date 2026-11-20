// Contrôle de déterminisme du banc (MISSION §6, Phase 0.7 et Phase 2.4).
// Deux passes successives de la même page (stabilisation + séquence de défilement à pas = 1 fenêtre)
// doivent différer de moins de 0,1 % de pixels, image par image.
// Usage : node scripts/harness-selftest.mjs [--target=ref|clone] [--route=/] [--width=1440] [--net=record|replay]
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { launch, openPage, gotoStable, scrollSequence, closeAll, ROOT } from './lib/harness.mjs';
import { pixelDiff } from './lib/compare.mjs';

const arg = (k, d) => (process.argv.find((a) => a.startsWith(`--${k}=`)) || '').split('=')[1] || d;
const target = arg('target', 'ref'), route = arg('route', '/'), width = +arg('width', 1440), net = arg('net', 'replay');
const outDir = path.join(ROOT, 'reference', 'screenshots', '_selftest', target);
await fs.rm(outDir, { recursive: true, force: true });
await fs.mkdir(outDir, { recursive: true });

const browser = await launch({ webgl: process.argv.includes('--webgl') });
const runs = [];
for (let run = 0; run < 2; run++) {
  const h = await openPage(browser, target, { width, net: run === 0 ? net : 'replay' });
  const t = Date.now();
  await gotoStable(h, route);
  const seq = await scrollSequence(h, { stepFrac: 1 });
  for (const s of seq.shots) await sharp(s.png).webp({ lossless: true }).toFile(path.join(outDir, `run${run}-${String(s.index).padStart(3, '0')}.webp`));
  console.log(`run ${run}: ${Date.now() - t} ms, ${seq.shots.length} images, scrollHeight=${seq.scrollHeight}, missing=${h.missing.length}, errors=${h.errors.length}`);
  if (h.missing.length) console.log('  missing:', h.missing.slice(0, 10));
  runs.push(seq);
  await closeAll(h);
}
await browser.close();
const per = [];
for (let i = 0; i < Math.max(runs[0].shots.length, runs[1].shots.length); i++) {
  const a = runs[0].shots[i], b = runs[1].shots[i];
  if (!a || !b) { per.push({ i, diffPct: 100 }); continue; }
  const d = await pixelDiff(a.png, b.png);
  if (d.diffPct > 0) await fs.writeFile(path.join(outDir, `diff-${String(i).padStart(3, '0')}.png`), d.diffPng);
  per.push({ i, y: a.y, diffPct: +d.diffPct.toFixed(4) });
}
const worst = Math.max(...per.map((p) => p.diffPct));
const ok = worst < 0.1 && runs[0].scrollHeight === runs[1].scrollHeight;
const res = { target, route, width, scrollHeights: runs.map((r) => r.scrollHeight), worstDiffPct: worst, perImage: per, ok, at: new Date().toISOString() };
await fs.writeFile(path.join(outDir, 'result.json'), JSON.stringify(res, null, 2));
console.log(JSON.stringify({ ...res, perImage: undefined }), per.filter((p) => p.diffPct > 0));
process.exit(ok ? 0 : 1);
