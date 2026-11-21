// Remplace dans un CSS transposé les règles à valeurs vides (`prop: ;`, sérialisation CSSOM de raccourcis var()) par
// leur texte brut d'origine (blocs <style> de reference/html/<page>.html). Usage : node fixcss.mjs <fichier.css> <page>
import fs from 'node:fs';
const [file, page] = process.argv.slice(2);
const html = fs.readFileSync(`reference/html/${page}.html`, 'utf8');
const raw = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].map((m) => m[1]).join('\n');
const RAW = [...raw.matchAll(/([^{}]+)\{([^{}]*)\}/g)].map((m) => ({ sel: m[1].trim(), body: m[2].trim() }));
const norm = (s) => s.replace(/::?(before|after|-webkit-[a-z-]+)/g, ':$1').replace(/\s+/g, '').replace(/"/g, "'");
let n = 0;
const out = fs.readFileSync(file, 'utf8').split('\n').map((l) => {
  if (!/:\s*;/.test(l)) return l;
  const m = l.match(/^(@media [^{]+\{ )?(.+?) \{ /); if (!m) return l;
  const hit = RAW.find((x) => norm(x.sel) === norm(m[2]));
  if (!hit) { console.error('introuvable :', m[2]); return l; }
  n++;
  return `${m[1] || ''}${m[2]} { ${hit.body.replace(/;?$/, ';')} }${m[1] ? ' }' : ''}`;
});
fs.writeFileSync(file, out.join('\n'));
console.log(file, n, 'règles réparées');
