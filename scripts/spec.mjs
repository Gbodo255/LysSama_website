// Fiche de transposition d'une section : structure SSR + règles CSS d'origine qui s'y appliquent.
// Lit le HTML brut (JS désactivé, réseau coupé) ; n'affiche rien, écrit reference/specs/<page>/<nom>.txt.
// Usage : node scripts/spec.mjs <page> "<data-framer-name>" [index=0] [--out=nom]
//   page = nom de fichier de reference/html sans .html (home, studio, projects__gucci…)
import fs from 'node:fs';
import path from 'node:path';
import { launch, ROOT } from './lib/harness.mjs';

const [page, name, idx = '0'] = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const outName = (process.argv.find((a) => a.startsWith('--out=')) || '').slice(6) || name.replace(/[^a-z0-9]+/gi, '-').toLowerCase();
if (!page || !name) { console.error('usage: node scripts/spec.mjs <page> "<data-framer-name>" [index]'); process.exit(2); }
const html = fs.readFileSync(path.join(ROOT, 'reference/html', page + '.html'), 'utf8');
const b = await launch({ webgl: false });
const ctx = await b.newContext({ javaScriptEnabled: false, viewport: { width: 1440, height: 900 } });
await ctx.route('**/*', (r) => r.abort());
const p = await ctx.newPage();
await p.setContent(html, { waitUntil: 'domcontentloaded' });
const out = await p.evaluate(({ name, idx }) => {
  const roots = [...document.querySelectorAll(`[data-framer-name="${CSS.escape(name)}"]`)];
  const root = roots[+idx];
  if (!root) return { err: `introuvable (${roots.length} occurrences)` };
  const lines = [];
  const els = [root, ...root.querySelectorAll('*')].filter((e) => !['SCRIPT', 'STYLE', 'path', 'g', 'defs', 'use', 'circle', 'rect', 'linearGradient', 'stop', 'clipPath'].includes(e.tagName));
  const depthOf = (e) => { let d = 0; for (let x = e; x && x !== root; x = x.parentElement) d++; return d; };
  for (const e of els) {
    const attrs = [];
    for (const a of e.attributes) {
      if (a.name === 'class' || a.name === 'data-framer-name') continue;
      let v = a.value;
      if (a.name === 'srcset') v = v.split(',')[0] + ' …';
      if (a.name === 'd') continue;
      attrs.push(`${a.name}=${v.length > 400 ? v.slice(0, 400) + '…' : v}`);
    }
    const own = [...e.childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent).join('');
    const nm = e.getAttribute('data-framer-name');
    lines.push(`${'  '.repeat(depthOf(e))}<${e.tagName.toLowerCase()}${nm ? ` "${nm}"` : ''}${e.classList.length ? ' .' + [...e.classList].join('.') : ''}${attrs.length ? ' [' + attrs.join(' | ') + ']' : ''}${own.trim() ? ' :: ' + JSON.stringify(own) : ''}`);
    if (e.tagName === 'svg') lines.push(`${'  '.repeat(depthOf(e) + 1)}(svg) ${e.outerHTML.length > 1500 ? e.outerHTML.slice(0, 1500) + '…' : e.outerHTML}`);
  }
  // Règles CSS : toute règle dont le sélecteur (pseudo-classes retirées) touche un élément de la section ou un ancêtre utile.
  // Classes de portée de composant (ex. framer-tVn1f) : toutes les règles du composant, y compris celles de ses variantes absentes du SSR (ouvert, survol…).
  const scopes = new Set(); for (const e of els) for (const c of e.classList) if (/^framer-[A-Za-z0-9]{5}$/.test(c) && /[A-Z]/.test(c)) scopes.add(c);
  const scopeRe = scopes.size ? new RegExp('\\.(' + [...scopes].join('|') + ')(?![\\w-])') : null;
  const strip = (s) => s.replace(/::?(hover|focus-visible|focus-within|focus|active|before|after|placeholder|-webkit-[a-z-]+|-moz-[a-z-]+|selection|visited|disabled|checked|first-letter|first-line)(\([^)]*\))?/g, '');
  const anc = []; for (let x = root.parentElement; x; x = x.parentElement) anc.push(x);
  const rules = [];
  const visit = (list, cond) => {
    for (const r of list) {
      if (r.type === 1) {
        const sels = r.selectorText.split(',');
        let hit = !!(scopeRe && scopeRe.test(r.selectorText));
        for (const s of sels) {
          const t = strip(s).trim() || '*';
          if (t === '*' || /^(html|body|:root|#main)\b/.test(t)) continue;
          try { if (els.some((e) => e.matches(t))) { hit = true; break; } } catch {}
        }
        if (hit) rules.push((cond ? `@media ${cond} { ` : '') + r.cssText + (cond ? ' }' : ''));
      } else if (r.type === 4) visit(r.cssRules, (cond ? cond + ' and ' : '') + r.media.mediaText);
      else if (r.type === 12 /* supports */) visit(r.cssRules, cond);
    }
  };
  for (const sh of document.styleSheets) { try { visit(sh.cssRules, ''); } catch {} }
  return { count: roots.length, ancestors: anc.slice(0, 6).map((a) => `${a.tagName.toLowerCase()}${a.getAttribute('data-framer-name') ? ` "${a.getAttribute('data-framer-name')}"` : ''}.${[...a.classList].join('.')}`), outline: lines.join('\n'), rules };
}, { name, idx });
await ctx.close(); await b.close();
if (out.err) { console.error(name, out.err); process.exit(1); }
const dir = path.join(ROOT, 'reference/specs', page);
fs.mkdirSync(dir, { recursive: true });
const file = path.join(dir, outName + '.txt');
fs.writeFileSync(file, `# ${page} — "${name}" [${idx}/${out.count}]\n# ancêtres : ${out.ancestors.join(' < ')}\n\n## STRUCTURE\n${out.outline}\n\n## CSS (${out.rules.length} règles, ordre source)\n${out.rules.join('\n')}\n`);
console.log(path.relative(ROOT, file), 'lignes', out.outline.split('\n').length, 'règles', out.rules.length);
