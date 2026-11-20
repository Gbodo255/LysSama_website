// Résumé compact de dom-<w>.json : spans d'une lettre/mot fusionnés, styles par défaut omis.
// Usage : node scripts/agents/homea/summarize.mjs <w> [section]
import fs from 'node:fs';
import path from 'node:path';
const [w, only] = process.argv.slice(2);
const ROOT = path.resolve(import.meta.dirname, '../../..');
const res = JSON.parse(fs.readFileSync(path.join(ROOT, `reference/agents/homea/dom-${w}.json`), 'utf8'));
const DEF = { padding: '0px', gap: 'normal', borderRadius: '0px', boxShadow: 'none', opacity: '1', transform: 'none', filter: 'none', backdropFilter: 'none', backgroundColor: 'rgba(0, 0, 0, 0)', backgroundImage: 'none', overflow: 'visible', mixBlendMode: 'normal', clipPath: 'none', maskImage: 'none' };
let txt = '';
for (const [id, items] of Object.entries(res.result)) {
  if (only && id !== only) continue;
  txt += `\n## ${id}\n`;
  let skipDepth = -1, spans = null;
  for (const it of items || []) {
    if (skipDepth >= 0 && it.depth > skipDepth) { if (it.tag === 'span' && spans) { spans.n++; spans.op.add(it.st.opacity); spans.tr.add(it.st.transform); } continue; }
    if (spans) { txt += `${'  '.repeat(skipDepth + 1)}(${spans.n} spans enfants; opacity∈{${[...spans.op]}}; transform∈{${[...spans.tr].slice(0, 3)}})\n`; spans = null; }
    skipDepth = -1;
    const s = it.st; const ex = [];
    for (const k of Object.keys(DEF)) if (s[k] !== DEF[k]) ex.push(`${k}=${k === 'maskImage' ? 'url(svg…)' : s[k]}`);
    if (!['static', 'relative'].includes(s.position)) ex.push(`pos=${s.position}`);
    if (s.display === 'flex') ex.push(`flex ${s.flexDirection} j=${s.justifyContent} a=${s.alignItems}`);
    if (s.display === 'grid') ex.push('grid');
    if (s.cursor !== 'auto') ex.push('cursor=' + s.cursor);
    const font = it.text ? ` font=${s.fontFamily.split(',')[0]}/${s.fontSize}/${s.lineHeight}/ls${s.letterSpacing}/${s.textTransform}/${s.textAlign}/${s.color}${s.fontVariationSettings !== 'normal' ? '/' + s.fontVariationSettings.replace(/"/g, '') : ''}` : '';
    const att = ['href', 'target', 'src', 'alt', 'poster', 'aria-label', 'data-framer-appear-id', 'loop', 'muted', 'autoplay', 'playsinline'].filter((a) => it[a] !== undefined).map((a) => `${a}=${String(it[a]).replace(/\?.*$/, '').slice(0, 110)}`).join(' ');
    const vid = it.tag === 'video' ? ` paused=${it.paused}` : '';
    const text = it.text ? ' :: ' + JSON.stringify(it.text.replace(/^\s+/, (m) => `⟨${m.length}sp⟩`)) : '';
    txt += `${'  '.repeat(it.depth)}<${it.tag}${it.name ? ` "${it.name}"` : ''} ${it.cls.replace(/framer-(?=[a-z0-9]{5,7}(\.|$))/g, '')} [${it.rect.map(Math.round).join(',')}]${font}${ex.length ? ' {' + ex.join('; ') + '}' : ''}${att ? ' ' + att : ''}${vid}${text}${it.lines && it.lines.length > 1 ? ' LINES=' + it.lines.join('|') : ''}\n`;
    if (it.text) { skipDepth = it.depth; spans = { n: 0, op: new Set(), tr: new Set() }; }
  }
  if (spans && spans.n) txt += `  (${spans.n} spans)\n`;
}
const out = path.join(ROOT, `reference/agents/homea/sum-${w}${only ? '-' + only : ''}.txt`);
fs.writeFileSync(out, txt);
console.log(out, txt.split('\n').length, 'lignes');
