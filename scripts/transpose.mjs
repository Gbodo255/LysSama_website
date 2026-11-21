// Transposition d'une section de l'original (D-029) : HTML SSR brut (JS désactivé) →
//   <out>.css  : règles CSS d'origine qui touchent la section (sélecteurs et valeurs inchangés, ordre source)
//   <out>.gen.tsx : squelette JSX de la structure (à refactorer : textes → src/data, répétitions → map, comportements)
// Aucun runtime Framer, aucun HTML servi tel quel : seul le squelette sert de point de départ.
// Usage : node scripts/transpose.mjs <page> "<data-framer-name>" <index> <sortie sans extension> [--css-only] [--skip-css=fichier.css,…]
import fs from 'node:fs';
import path from 'node:path';
import { launch, ROOT } from './lib/harness.mjs';

const pos = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const [page, name, idx, outBase] = pos;
const cssOnly = process.argv.includes('--css-only');
const skipFiles = ((process.argv.find((a) => a.startsWith('--skip-css=')) || '').slice(11) || '').split(',').filter(Boolean);
if (!outBase) { console.error('usage: node scripts/transpose.mjs <page> "<name>" <index> <out>'); process.exit(2); }
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'public/assets/manifest.json'), 'utf8'));
// Règles déjà transposées ailleurs (base, presets, autres composants) : non répétées.
const already = new Set();
for (const f of ['src/styles/framer-base.css', 'src/styles/presets.css', ...skipFiles]) {
  try { for (const l of fs.readFileSync(path.join(ROOT, f), 'utf8').split('\n')) already.add(l.trim()); } catch {}
}

const html = fs.readFileSync(path.join(ROOT, 'reference/html', page + '.html'), 'utf8');
const b = await launch({ webgl: false });
const ctx = await b.newContext({ javaScriptEnabled: false, viewport: { width: 1440, height: 900 } });
await ctx.route('**/*', (r) => r.abort());
const p = await ctx.newPage();
await p.setContent(html, { waitUntil: 'domcontentloaded' });
const res = await p.evaluate(({ name, idx }) => {
  const roots = name.startsWith('css:') ? [...document.querySelectorAll(name.slice(4))] : [...document.querySelectorAll(`[data-framer-name="${CSS.escape(name)}"]`)];
  const root = roots[+idx];
  if (!root) return { err: `introuvable (${roots.length})` };
  const ser = (e) => {
    if (e.nodeType === 3) return { t: e.textContent };
    if (e.nodeType !== 1 || ['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEMPLATE'].includes(e.tagName)) return null;
    const n = { tag: e.tagName.toLowerCase(), attrs: [...e.attributes].map((a) => [a.name, a.value]) };
    if (e.namespaceURI === 'http://www.w3.org/2000/svg') { n.svgInner = e.innerHTML; return n; }
    n.kids = [...e.childNodes].map(ser).filter(Boolean);
    return n;
  };
  const els = [root, ...root.querySelectorAll('*')];
  // Classes de portée de composant (ex. framer-tVn1f) : toutes les règles du composant, y compris celles de ses variantes absentes du SSR (ouvert, survol…).
  const scopes = new Set(); for (const e of els) for (const c of e.classList) if (/^framer-[A-Za-z0-9]{5}$/.test(c) && /[A-Z]/.test(c)) scopes.add(c);
  const scopeRe = scopes.size ? new RegExp('\\.(' + [...scopes].join('|') + ')(?![\\w-])') : null;
  const strip = (s) => s.replace(/::?(hover|focus-visible|focus-within|focus|active|before|after|placeholder|-webkit-[a-z-]+|-moz-[a-z-]+|selection|visited|disabled|checked|invalid|valid|first-letter|first-line)(\([^)]*\))?/g, '');

  // Chrome sérialise `padding: var(--x); padding-top: 0` en longhands vides (`padding-right: ;`) et perd le raccourci :
  // ces règles sont reprises du texte brut des <style> (même sélecteur, mêmes propriétés), valeurs d'origine inchangées.
  const RAW = [];
  for (const sh of document.styleSheets) {
    const t = sh.ownerNode && sh.ownerNode.textContent || '';
    const re = /([^{}]+)\{([^{}]*)\}/g; let m;
    while ((m = re.exec(t))) RAW.push({ sel: m[1].trim().replace(/^@[^{]*\{/, '').trim(), body: m[2].trim() });
  }
  const normSel = (s) => s.replace(/::?(before|after)/g, ':$1').replace(/\s+/g, '').replace(/"/g, "'");
  const cssOf = (r) => {
    if (!/:\s*;/.test(r.cssText)) return r.cssText;
    const want = normSel(r.selectorText);
    const hit = RAW.find((x) => normSel(x.sel.split(/[{}]/).pop()) === want);
    return hit ? `${r.selectorText} { ${hit.body.replace(/;?$/, ';')} }` : r.cssText;
  };
  const rules = [];
  const visit = (list, cond) => {
    for (const r of list) {
      if (r.type === 1) {
        let hit = !!(scopeRe && scopeRe.test(r.selectorText));
        for (const s of r.selectorText.split(',')) {
          const t = strip(s).trim();
          if (!t || t === '*' || /^(html|body|:root|#main)\b/.test(t)) continue;
          try { if (els.some((e) => e.matches(t))) { hit = true; break; } } catch {}
        }
        if (hit) rules.push(cond ? `@media ${cond} { ${cssOf(r)} }` : cssOf(r));
      } else if (r.type === 4) visit(r.cssRules, (cond ? cond + ' and ' : '') + r.media.mediaText);
      else if (r.type === 12) visit(r.cssRules, cond);
    }
  };
  for (const sh of document.styleSheets) { try { visit(sh.cssRules, ''); } catch {} }
  return { tree: ser(root), rules, count: roots.length };
}, { name, idx });
await ctx.close(); await b.close();
if (res.err) { console.error(res.err); process.exit(1); }

const outAbs = path.join(ROOT, outBase);
fs.mkdirSync(path.dirname(outAbs), { recursive: true });
// --sel=<regex> : ne garder que les règles dont le texte correspond (ex. règles propres au gabarit).
const selRe = (process.argv.find((a) => a.startsWith('--sel=')) || '').slice(6);
// Presets de texte et @supports globaux : uniquement dans src/styles/presets.css (scripts/gen-presets.mjs), sinon la cascade s'inverse.
const uniq = [...new Set(res.rules)].filter((r) => !already.has(r.trim()) && !/framer-styles-preset-/.test(r) && !r.startsWith('@supports') && (!selRe || new RegExp(selRe).test(r)));
const localize = (s) => s.replace(/https:\/\/framerusercontent\.com\/[^"')\s,]+/g, (u) => manifest[u.split('?')[0]]?.local || u);
fs.writeFileSync(outAbs + '.css', `/* Transposé de reference/html/${page}.html — "${name}" [${idx}] (scripts/transpose.mjs, D-029). Valeurs d'origine inchangées. */\n${uniq.map(localize).join('\n')}\n`);
if (cssOnly) { console.log(path.relative(ROOT, outAbs) + '.css', uniq.length, 'règles'); process.exit(0); }

// ---------- JSX
const ATTR = { class: 'className', for: 'htmlFor', tabindex: 'tabIndex', srcset: 'srcSet', playsinline: 'playsInline', autoplay: 'autoPlay', fetchpriority: 'fetchPriority', readonly: 'readOnly', maxlength: 'maxLength', autocomplete: 'autoComplete', crossorigin: 'crossOrigin', 'xlink:href': 'xlinkHref', 'xml:space': 'xmlSpace', 'xmlns:xlink': 'xmlnsXlink', 'fill-rule': 'fillRule', 'clip-rule': 'clipRule', 'stroke-width': 'strokeWidth', 'stroke-linecap': 'strokeLinecap', 'stroke-linejoin': 'strokeLinejoin', 'stroke-miterlimit': 'strokeMiterlimit', 'enable-background': 'enableBackground' };
const BOOL = new Set(['loop', 'muted', 'playsinline', 'autoplay', 'required', 'disabled', 'checked', 'readonly', 'hidden', 'novalidate', 'controls']);
const camel = (k) => k.startsWith('--') ? k : k.replace(/^-(webkit|moz|ms)-/, (_, v) => v[0].toUpperCase() + v.slice(1) + '-').replace(/-([a-z])/g, (_, c) => c.toUpperCase());
function styleObj(s) {
  const out = [];
  let depth = 0, cur = '';
  for (const ch of s) { if (ch === '(') depth++; if (ch === ')') depth--; if (ch === ';' && depth === 0) { out.push(cur); cur = ''; } else cur += ch; }
  if (cur.trim()) out.push(cur);
  const pairs = out.map((d) => { const i = d.indexOf(':'); return i < 0 ? null : [d.slice(0, i).trim(), d.slice(i + 1).trim()]; }).filter((x) => x && x[0]);
  return '{ ' + pairs.map(([k, v]) => `${JSON.stringify(camel(k))}: ${JSON.stringify(localize(v))}`).join(', ') + ' }';
}
function attrs(n) {
  const out = [];
  for (const [k0, v] of n.attrs) {
    const k = k0.toLowerCase();
    if (k === 'sizes' || k === 'srcset') continue; // srcset Framer : variantes redimensionnées non archivées ; src local pleine résolution
    if (k === 'style') { out.push(`style={${styleObj(v)}}`); continue; }
    if (BOOL.has(k)) { out.push(`${ATTR[k] || k}`); continue; }
    if (k === 'draggable' || k === 'contenteditable' || k === 'spellcheck') { out.push(`${k === 'contenteditable' ? 'contentEditable' : k === 'spellcheck' ? 'spellCheck' : k}={${v === 'true'}}`); continue; }
    if (k === 'tabindex' || ((k === 'width' || k === 'height') && /^\d+$/.test(v) && n.tag !== 'svg')) { out.push(`${ATTR[k] || k}={${+v}}`); continue; }
    if (k === 'value' && (n.tag === 'input' || n.tag === 'textarea')) { out.push(`defaultValue=${JSON.stringify(v)}`); continue; }
    out.push(`${ATTR[k] || (n.tag === 'svg' ? k0 : k)}=${JSON.stringify(localize(v))}`);
  }
  return out.length ? ' ' + out.join(' ') : '';
}
function jsx(n, d) {
  const ind = '  '.repeat(d);
  if (n.t !== undefined) return n.t === '' ? '' : `${ind}{${JSON.stringify(n.t)}}`;
  if (n.svgInner !== undefined) return `${ind}<${n.tag}${attrs(n)}${n.svgInner ? ` dangerouslySetInnerHTML={{ __html: ${JSON.stringify(localize(n.svgInner))} }}` : ''} />`;
  if (!n.kids.length || ['img', 'input', 'br', 'hr', 'source'].includes(n.tag)) return `${ind}<${n.tag}${attrs(n)} />`;
  return `${ind}<${n.tag}${attrs(n)}>\n${n.kids.map((k) => jsx(k, d + 1)).filter(Boolean).join('\n')}\n${ind}</${n.tag}>`;
}
const comp = path.basename(outBase).replace(/[^A-Za-z0-9]/g, '');
fs.writeFileSync(outAbs + '.gen.tsx', `// Squelette généré par scripts/transpose.mjs depuis reference/html/${page}.html — "${name}" [${idx}] (D-029). À refactorer.\nimport './${path.basename(outBase)}.css';\n\nexport function ${comp}Gen() {\n  return (\n${jsx(res.tree, 2)}\n  );\n}\n`);
console.log(path.relative(ROOT, outAbs), uniq.length, 'règles CSS ;', res.count, 'occurrences');
