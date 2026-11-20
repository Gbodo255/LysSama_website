// Règles CSS d'origine par breakpoint pour une liste de classes framer-<hash> (route projet).
// usage : node scripts/agents/projects/css.mjs <slug> cls1 cls2 ... → stdout (une ligne par règle, préfixe D/T/M)
import fs from 'node:fs';
import path from 'node:path';
const ROOT = path.resolve(import.meta.dirname, '../../..');
const [slug, ...classes] = process.argv.slice(2);
const css = fs.readFileSync(path.join(ROOT, 'reference/css', slug + '.css'), 'utf8');
// découpe naïve en blocs de premier niveau, avec suivi des @media
const out = [];
let i = 0, media = 'D';
const tag = (m) => (/max-width:\s*809/.test(m) ? 'M' : /min-width:\s*810/.test(m) || /max-width:\s*1199/.test(m) ? 'T' : /min-width:\s*1200/.test(m) ? 'D' : 'D?' + m);
function walk(str, med) {
  let j = 0;
  while (j < str.length) {
    const open = str.indexOf('{', j); if (open < 0) break;
    const sel = str.slice(j, open).trim();
    let depth = 1, k = open + 1;
    while (depth && k < str.length) { if (str[k] === '{') depth++; else if (str[k] === '}') depth--; k++; }
    const body = str.slice(open + 1, k - 1);
    if (sel.startsWith('@media')) walk(body, tag(sel));
    else if (!sel.startsWith('@')) { if (classes.some((c) => new RegExp(`\.${c}(?![\w-])`).test(sel))) out.push(`${med} | ${sel} { ${body.trim()} }`); }
    j = k;
  }
}
walk(css, 'D');
console.log([...new Set(out)].join('\n'));
