// homeb : règles CSS d'origine (home.css) pour une liste de classes, par @media. node css-rules.mjs cls1 cls2 …
import fs from 'node:fs';
const css = fs.readFileSync(new URL('../../../reference/css/home.css', import.meta.url), 'utf8');
const want = process.argv.slice(2);
// découpe simple : blocs @media { … } et règles hors media
const out = {}; let media = 'base', depth = 0, i = 0, buf = '';
const rules = [];
for (let k = 0; k < css.length; k++) {
  const ch = css[k];
  if (ch === '{') { if (depth === 0 && buf.trim().startsWith('@media')) { media = buf.trim(); buf = ''; depth = 1; continue; } depth++; buf += ch; continue; }
  if (ch === '}') { depth--; if (depth === 0 && media !== 'base' && !buf.trim()) { media = 'base'; continue; } buf += ch; if ((media === 'base' && depth === 0) || (media !== 'base' && depth === 1)) { rules.push([media, buf.trim()]); buf = ''; } if (depth === 0 && media !== 'base') media = 'base'; continue; }
  buf += ch;
}
for (const c of want) {
  const re = new RegExp(`\.framer-${c}(?![\w-])`);
  console.log('## ' + c);
  for (const [m, r] of rules) { const sel = r.slice(0, r.indexOf('{')); if (re.test(sel)) console.log(`  [${m.replace('@media ', '')}] ` + r.replace(/\.framer-a2JZY/g, '').replace(/\s+/g, ' ').slice(0, 420)); }
}
