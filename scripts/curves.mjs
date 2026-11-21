// Phase 5 — courbes d'animation mesurées image par image (pas 16 ms, temps virtuel) sur l'original ET le clone,
// même banc, même scénario ; comparaison : début/fin ± 1 image, forme ≤ 3 % de l'amplitude à chaque image.
// Scénarios : tests/scenarios/curves.mjs. Sorties : reference/curves/<id>.json, clone-ref/curves/<id>.json,
// compare/curves/<id>.json + ligne dans compare/animations.md.
// Usage : node scripts/curves.mjs [--only=id1,id2] [--target=both|ref|clone]
import fs from 'node:fs/promises';
import path from 'node:path';
import { launch, openPage, gotoStable, advance, realFrames, closeAll, ROOT, FRAME } from './lib/harness.mjs';
import { SCENARIOS } from '../tests/scenarios/curves.mjs';

const arg = (k, d) => (process.argv.find((a) => a.startsWith(`--${k}=`)) || '').slice(k.length + 3) || d;
const only = arg('only', '') ? arg('only', '').split(',') : null;
const targets = arg('target', 'both') === 'both' ? ['ref', 'clone'] : [arg('target', 'both')];

// Relevé dans la page : rect + styles calculés numériques des éléments suivis.
function sample(track) {
  const nums = (s) => (String(s).match(/-?\d*\.?\d+(e-?\d+)?/g) || []).map(Number);
  const out = {};
  for (const t of track) {
    const el = document.querySelectorAll(t.sel)[t.index || 0];
    if (!el) { out[t.name] = null; continue; }
    const r = el.getBoundingClientRect(), cs = getComputedStyle(el), v = {};
    for (const p of t.props) {
      if (['x', 'y', 'width', 'height'].includes(p)) v[p] = +r[p].toFixed(3);
      else if (p === 'transform') { const m = nums(cs.transform); v[p] = m.length ? m : [1, 0, 0, 1, 0, 0]; }
      else if (p === 'filter' || p === 'borderRadius' || p === 'opacity' || p === 'scale' || p === 'rotate') v[p] = nums(cs[p === 'borderRadius' ? 'borderTopLeftRadius' : p])[0] ?? (p === 'opacity' || p === 'scale' ? 1 : 0);
      else v[p] = cs[p];
    }
    out[t.name] = v;
  }
  return out;
}

async function run(browser, target, sc, width) {
  const h = await openPage(browser, target, { width });
  try {
    await gotoStable(h, sc.route, { scrollThrough: !!sc.scrollThrough, settleMs: 1500 });
    if (sc.setup) { await sc.setup(h.page); await realFrames(h.page, 2); await advance(h.page, sc.setupMs ?? 1500, { step: 100 }); }
    const frames = [];
    frames.push({ t: 0, v: await h.page.evaluate(sample, sc.track) });
    await sc.action(h.page);
    await realFrames(h.page, 1);
    await advance(h.page, sc.durationMs, { step: FRAME, onFrame: async (t) => frames.push({ t, v: await h.page.evaluate(sample, sc.track) }) });
    return { id: sc.id, target, width, route: sc.route, frames, errors: h.errors.length, missing: h.missing.length };
  } finally { await closeAll(h); }
}

// Séries numériques (une par élément × propriété × composante).
function series(rec) {
  const S = {};
  for (const f of rec.frames) for (const [el, v] of Object.entries(f.v)) {
    if (!v) continue;
    for (const [p, x] of Object.entries(v)) {
      const arr = Array.isArray(x) ? x : typeof x === 'number' ? [x] : [];
      arr.forEach((n, i) => { (S[`${el}.${p}${arr.length > 1 ? `[${i}]` : ''}`] ||= []).push(n); });
    }
  }
  return S;
}
function compareRec(a, b) {
  const A = series(a), B = series(b), rows = [];
  for (const k of Object.keys(A)) {
    const x = A[k], y = B[k] || [];
    const amp = Math.max(...x) - Math.min(...x);
    const span = (s) => { const i0 = s.findIndex((v) => Math.abs(v - s[0]) > Math.max(1e-3, 0.01 * amp)); if (i0 < 0) return null; let i1 = s.length - 1; while (i1 > 0 && Math.abs(s[i1] - s[s.length - 1]) <= Math.max(1e-3, 0.01 * amp)) i1--; return [i0, i1 + 1]; };
    const sa = span(x), sb = y.length ? span(y) : null;
    let worst = 0;
    for (let i = 0; i < x.length; i++) worst = Math.max(worst, Math.abs(x[i] - (y[i] ?? NaN)) || (y[i] === undefined ? Infinity : 0));
    const shapePct = amp > 1e-6 ? (100 * worst) / amp : (worst < 1e-3 ? 0 : Infinity);
    const timingOk = (!sa && !sb) || (sa && sb && Math.abs(sa[0] - sb[0]) <= 1 && Math.abs(sa[1] - sb[1]) <= 1);
    rows.push({ k, amp: +amp.toFixed(4), from: x[0], to: x.at(-1), cloneFrom: y[0], cloneTo: y.at(-1), startEnd: sa && sa.map((i) => i * FRAME), cloneStartEnd: sb && sb.map((i) => i * FRAME), shapePct: +shapePct.toFixed(2), ok: timingOk && shapePct <= 3 });
  }
  return rows;
}

const browser = await launch({ webgl: false });
const report = [];
for (const sc of SCENARIOS.filter((s) => !only || only.includes(s.id))) {
  for (const w of sc.widths) {
    const id = `${sc.id}@${w}`;
    const recs = {};
    for (const t of targets) {
      const dir = path.join(ROOT, t === 'ref' ? 'reference/curves' : 'clone-ref/curves');
      await fs.mkdir(dir, { recursive: true });
      recs[t] = await run(browser, t, sc, w);
      await fs.writeFile(path.join(dir, `${id}.json`), JSON.stringify(recs[t]));
    }
    if (!recs.ref) recs.ref = JSON.parse(await fs.readFile(path.join(ROOT, 'reference/curves', `${id}.json`), 'utf8'));
    if (!recs.clone) recs.clone = JSON.parse(await fs.readFile(path.join(ROOT, 'clone-ref/curves', `${id}.json`), 'utf8'));
    const rows = compareRec(recs.ref, recs.clone).filter((r) => r.amp > 0 || r.from !== r.cloneFrom);
    await fs.mkdir(path.join(ROOT, 'compare/curves'), { recursive: true });
    await fs.writeFile(path.join(ROOT, 'compare/curves', `${id}.json`), JSON.stringify(rows, null, 1));
    const ok = rows.every((r) => r.ok);
    report.push({ id, ok, rows });
    console.log(`${id} : ${ok ? 'OK' : 'ÉCART'} — ${rows.length} séries animées` + (ok ? '' : ' ; ' + rows.filter((r) => !r.ok).slice(0, 6).map((r) => `${r.k} forme ${r.shapePct}% t ${JSON.stringify(r.startEnd)}/${JSON.stringify(r.cloneStartEnd)}`).join(' | ')));
  }
}
await browser.close();
const md = path.join(ROOT, 'compare/animations.md');
let prev = ''; try { prev = await fs.readFile(md, 'utf8'); } catch {}
const lines = new Map(prev.split('\n').filter((l) => l.startsWith('| ') && !l.startsWith('| Scénario') && !l.startsWith('|---')).map((l) => [l.split('|')[1].trim(), l]));
for (const r of report) lines.set(r.id, `| ${r.id} | ${r.ok ? 'OK' : 'ÉCART'} | ${r.rows.length} | ${Math.max(0, ...r.rows.map((x) => x.shapePct)).toFixed(2)} % | compare/curves/${r.id}.json |`);
await fs.writeFile(md, `# Courbes d'animation — original vs clone (scripts/curves.mjs)\n\nSeuils : début/fin ± 1 image (16 ms), forme ≤ 3 % de l'amplitude.\n\n| Scénario | Résultat | Séries animées | Pire écart de forme | Détail |\n|---|---|---|---|---|\n${[...lines.values()].sort().join('\n')}\n`);
process.exit(report.every((r) => r.ok) ? 0 : 1);
