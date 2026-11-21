// Comparaison clone ↔ original (Phase 8) à partir des extractions du même banc :
//   reference/{geometry,text,screenshots}/<page>/<w>  (node scripts/extract.mjs --target=ref)
//   clone-ref/{geometry,text,screenshots}/<page>/<w>  (node scripts/extract.mjs --target=clone --force)
// Usage : node scripts/compare.mjs --only=/privacy-policy [--widths=1440,1200,810,390] [--scope="Footer"] [--max=40]
//   --scope : restreint aux éléments sous [data-framer-name="<scope>"] (positions relatives à ce conteneur).
// Écrit compare/<page>/<w>.json (+ planches PNG des images qui dépassent 2 %) et affiche un résumé.
import fs from 'node:fs/promises';
import path from 'node:path';
import { pixelDiff, triptych, normText, rectDelta } from './lib/compare.mjs';
import { LIST_A, ROOT } from './lib/harness.mjs';
import { slugOf } from './routes.mjs';

const arg = (k, d) => (process.argv.find((a) => a.startsWith(`--${k}=`)) || '').slice(k.length + 3) || d;
const routes = arg('only', '/').split(',');
const widths = arg('widths', LIST_A.join(',')).split(',').map(Number);
const scope = arg('scope', '');
const max = +arg('max', 40);
const STYLE_IGNORE = new Set(['transform']); // les transformations d'animation sont comparées par les courbes (Phase 5)
const readJ = async (p) => JSON.parse(await fs.readFile(p, 'utf8'));
const num = (v) => parseFloat(v);

// Premier segment (enfant de <body>) retiré des deux côtés : Next.js insère un <div hidden> avant #main (D-033).
const rebase = (items) => items.map((i) => ({ ...i, sel: i.sel.replace(/^[^>]*>?/, '') || '(main)' }));
function inScope(items0) {
  const items = rebase(items0);
  if (!scope) return { list: items, dx: 0, dy: 0 };
  const key = `[data-framer-name="${scope}"]`;
  const root = items.filter((i) => i.sel.endsWith(key) || i.name === scope).sort((a, b) => a.sel.length - b.sel.length)[0];
  if (!root) return { list: [], dx: 0, dy: 0 };
  // sélecteurs relatifs au conteneur : les ancêtres peuvent différer tant que la page n'est pas complète
  return { list: items.filter((i) => i.sel.startsWith(root.sel)).map((i) => ({ ...i, sel: i.sel.slice(root.sel.length) || '(racine)' })), dx: root.rect.x, dy: root.rect.y, root };
}

const summary = [];
for (const r of routes) for (const w of widths) {
  const slug = slugOf(r);
  const out = { route: r, width: w, scope: scope || null };
  try {
    const ref = await readJ(path.join(ROOT, 'reference/geometry', slug, `${w}.json`));
    const clo = await readJ(path.join(ROOT, 'clone-ref/geometry', slug, `${w}.json`));
    out.height = { ref: ref.scrollHeight, clone: clo.scrollHeight, deltaPct: +((100 * Math.abs(ref.scrollHeight - clo.scrollHeight)) / ref.scrollHeight).toFixed(3) };
    const A = inScope(ref.items), B = inScope(clo.items);
    const bySel = new Map(B.list.map((i) => [i.sel, i]));
    const rel = (it, o) => ({ x: it.rect.x - o.dx, y: it.rect.y - o.dy, width: it.rect.width, height: it.rect.height });
    const geo = [], styles = [], lines = [], missing = [];
    for (const a of A.list) {
      const b = bySel.get(a.sel);
      if (!b) { missing.push(a.sel + (a.text ? ` :: ${a.text.slice(0, 40)}` : '')); continue; }
      bySel.delete(a.sel);
      const d = rectDelta(rel(a, A), rel(b, B));
      if (d > 2) geo.push({ sel: a.sel, d: +d.toFixed(2), ref: rel(a, A), clone: rel(b, B) });
      for (const k of Object.keys(a.style)) {
        if (STYLE_IGNORE.has(k) || a.style[k] === b.style[k]) continue;
        if (/^-?[\d.]+px$/.test(a.style[k]) && Math.abs(num(a.style[k]) - num(b.style[k])) <= 0.5) continue;
        styles.push({ sel: a.sel, k, ref: a.style[k], clone: b.style[k] });
      }
      if (a.text && normText(a.text) !== normText(b.text)) lines.push({ sel: a.sel, kind: 'texte', ref: a.text, clone: b.text });
      else if (a.lines && JSON.stringify(a.lines) !== JSON.stringify(b.lines)) lines.push({ sel: a.sel, kind: 'lignes', ref: a.lines, clone: b.lines });
      for (const k of ['href', 'targetAttr', 'alt', 'placeholder', 'nameAttr']) if (a[k] !== undefined && a[k] !== b[k]) styles.push({ sel: a.sel, k, ref: a[k], clone: b[k] });
    }
    out.counts = { ref: A.list.length, clone: B.list.length, missing: missing.length, extra: bySel.size, geo: geo.length, styles: styles.length, text: lines.length };
    out.missing = missing.slice(0, max); out.extra = [...bySel.keys()].slice(0, max);
    out.geo = geo.sort((x, y) => y.d - x.d).slice(0, max); out.styles = styles.slice(0, max); out.text = lines.slice(0, max);
    // Pixels : séquences de défilement aux mêmes positions (seulement si même hauteur de page et sans restriction de portée).
    const sr = path.join(ROOT, 'reference/screenshots', slug, String(w)), sc = path.join(ROOT, 'clone-ref/screenshots', slug, String(w));
    if (!scope) {
      const files = (await fs.readdir(sr).catch(() => [])).filter((f) => f.endsWith('.webp'));
      const px = [];
      await fs.mkdir(path.join(ROOT, 'compare', slug, String(w)), { recursive: true });
      for (const f of files) {
        const b = await fs.readFile(path.join(sc, f)).catch(() => null);
        if (!b) { px.push({ f, diffPct: 100 }); continue; }
        const a = await fs.readFile(path.join(sr, f));
        const d = await pixelDiff(a, b);
        px.push({ f, diffPct: +d.diffPct.toFixed(3) });
        if (d.diffPct > 2) await fs.writeFile(path.join(ROOT, 'compare', slug, String(w), f.replace('.webp', '.png')), await triptych(a, b, d.diffPng));
      }
      out.pixels = { worst: Math.max(0, ...px.map((p) => p.diffPct)), over2: px.filter((p) => p.diffPct > 2).map((p) => p.f), n: px.length };
    }
  } catch (e) { out.error = String(e).slice(0, 300); }
  await fs.mkdir(path.join(ROOT, 'compare', slugOf(r)), { recursive: true });
  await fs.writeFile(path.join(ROOT, 'compare', slugOf(r), `${w}${scope ? '-' + scope.replace(/\W+/g, '_') : ''}.json`), JSON.stringify(out, null, 1));
  summary.push(out);
  console.log(`${r} @${w}${scope ? ` [${scope}]` : ''} :`, out.error || JSON.stringify({ height: out.height, counts: out.counts, pixels: out.pixels && { worst: out.pixels.worst, over2: out.pixels.over2.length, n: out.pixels.n } }));
}
const ok = summary.every((s) => !s.error && s.counts && !s.counts.missing && !s.counts.geo && !s.counts.styles && !s.counts.text && (!s.pixels || s.pixels.worst <= 2) && (scope || s.height.deltaPct <= 0.5));
console.log(ok ? 'COMPARAISON OK' : 'ÉCARTS — voir compare/<page>/<w>.json');
process.exit(ok ? 0 : 1);
