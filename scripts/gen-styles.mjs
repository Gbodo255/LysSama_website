// Phase 2 — feuilles globales transposées du CSS d'origine (valeurs identiques) :
//   src/styles/tokens.css       variables --token-* (portées par body comme dans l'original)
//   src/styles/presets.css      styles de texte (.framer-styles-preset-*) par breakpoint
//   src/styles/framer-base.css  reset + moteur de texte (règles génériques, sans classe de calque hachée)
import fs from 'node:fs/promises';

const css = await fs.readFile('reference/css/home.css', 'utf8');
const t = JSON.parse(await fs.readFile('reference/framer/tokens.json', 'utf8'));

// Découpe en règles de premier niveau (gère les @media imbriqués).
function topRules(src) {
  src = src.replace(/\/\*[^]*?\*\//g, '');
  const out = []; let depth = 0, start = 0;
  for (let i = 0; i < src.length; i++) {
    if (src[i] === '{') depth++;
    else if (src[i] === '}') { depth--; if (depth === 0) { out.push(src.slice(start, i + 1).trim()); start = i + 1; } }
  }
  return out;
}
const HASHED = /\.framer-(?!text\b|image\b|styles-preset|body\b)[A-Za-z0-9_-]{4,}|\.ssr-variant|\.hidden-|#__framer|__framer-badge|framer-styles-preset/;
const all = [];
for (const f of (await fs.readdir('reference/css')).filter((f) => f.endsWith('.css') && f !== 'design-system.css')) all.push(...topRules(await fs.readFile('reference/css/' + f, 'utf8')));
const seen = new Set(), base = [];
for (const r of all) {
  const sel = r.slice(0, r.indexOf('{'));
  if (r.startsWith('@font-face') || r.startsWith('@media') || r.startsWith('@supports') || r.startsWith('@keyframes')) continue;
  if (HASHED.test(sel) || /^body\{--token-/.test(r)) continue;
  // Styles de page (fond, taille rem : reference/framer/html-styles.json) et de composants (préchargeur,
  // Revelo, formulaires) : portés par la page ou le composant, pas par la base.
  if (/^(:root|html)\s*(body)?\s*\{|^html:not|portal-preloader|revelo|data-framer-form/.test(r)) continue;
  if (seen.has(r)) continue;
  seen.add(r); base.push(r);
}
await fs.writeFile('src/styles/framer-base.css', '/* Transposé du CSS d\'origine (règles génériques) — scripts/gen-styles.mjs */\n' + base.join('\n') + '\n');

const tok = Object.entries(t.tokens).map(([k, v]) => `${k}:${v[0]}`).join(';');
await fs.writeFile('src/styles/tokens.css', `/* Couleurs de l'original (reference/framer/tokens.json). Rebranding : modifier ici. */\nbody{${tok}}\n`);

const MQ = { base: null };
const pre = [];
for (const [cls, bps] of Object.entries(t.presets)) {
  for (const [bp, d] of Object.entries(bps)) {
    const body = Object.entries(d).map(([k, v]) => `${k}:${v}`).join(';');
    const rule = `${cls}:not(.rich-text-wrapper),.rich-text-wrapper ${cls}{${body}}`;
    pre.push(bp === 'base' ? rule : `@media ${bp}{${rule}}`);
  }
}
await fs.writeFile('src/styles/presets.css', '/* Styles de texte de l\'original — scripts/gen-styles.mjs */\n' + pre.join('\n') + '\n');
console.log(`base=${base.length} règles, tokens=${Object.keys(t.tokens).length}, presets=${pre.length}`);
