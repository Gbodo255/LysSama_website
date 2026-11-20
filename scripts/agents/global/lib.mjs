// Outils partagés des scripts de l'agent global (DOM rendu → JSON + résumé lisible).
export const KEYS = ['position', 'display', 'flexDirection', 'justifyContent', 'alignItems', 'gap', 'padding', 'margin', 'overflow', 'zIndex',
  'fontFamily', 'fontWeight', 'fontSize', 'lineHeight', 'letterSpacing', 'textTransform', 'textAlign', 'textDecoration', 'color', 'fontVariationSettings', 'fontFeatureSettings',
  'backgroundColor', 'backgroundImage', 'borderTop', 'borderBottom', 'borderLeft', 'borderRight', 'borderRadius', 'boxShadow', 'opacity', 'transform', 'filter', 'backdropFilter', 'mixBlendMode', 'clipPath', 'maskImage', 'cursor', 'top', 'left', 'right', 'bottom', 'pointerEvents', 'visibility'];

// À exécuter dans la page : renvoie la liste des éléments visibles sous `sel` (premier visible).
export function domDump([sel, KEYS]) {
  const vis = (e) => { const r = e.getBoundingClientRect(); const cs = getComputedStyle(e); return r.width > 0 && r.height > 0 && cs.visibility !== 'hidden' && cs.display !== 'none'; };
  const lines = (e) => {
    const tw = document.createTreeWalker(e, NodeFilter.SHOW_TEXT); const out = []; let lastTop = null; let n;
    while ((n = tw.nextNode())) {
      const re = /\S+/g; let m;
      while ((m = re.exec(n.data))) {
        const r = document.createRange(); r.setStart(n, m.index); r.setEnd(n, m.index + m[0].length);
        const rr = r.getClientRects()[0]; if (!rr) continue;
        if (lastTop === null || rr.top - lastTop > rr.height * 0.5) { out.push(m[0]); lastTop = rr.top; }
      }
    }
    return out;
  };
  const sy = window.scrollY;
  const roots = [...document.querySelectorAll(sel)].filter(vis);
  if (!roots.length) return null;
  const items = [];
  const walk = (el, depth) => {
    if (getComputedStyle(el).display === 'contents') { for (const c of el.children) walk(c, depth); return; }
    if (!vis(el) && el.tagName !== 'svg') return;
    const name = el.getAttribute('data-framer-name');
    const own = [...el.childNodes].filter((x) => x.nodeType === 3).map((x) => x.textContent).join('').trim();
    const tag = el.tagName.toLowerCase();
    const isText = /^(p|h[1-6]|span|a|button|label)$/.test(tag) && el.textContent.trim() && ![...el.children].some((c) => /^(div|p|h\d)$/i.test(c.tagName));
    const keep = name || own || /^(img|video|a|svg|button|canvas|input|h[1-6]|p|form|label|nav|header|footer)$/.test(tag);
    let d = depth;
    if (keep) {
      const r = el.getBoundingClientRect(); const cs = getComputedStyle(el);
      const st = {}; for (const k of KEYS) st[k] = cs[k];
      const it = { depth, tag, name, cls: [...el.classList].filter((c) => /^framer-(?!text)/.test(c)).join('.'), rect: [r.x, r.y + sy, r.width, r.height].map((v) => Math.round(v * 100) / 100), st };
      if (isText) { it.text = el.textContent; it.lines = lines(el); } else if (own) it.text = own;
      for (const a of ['href', 'target', 'rel', 'src', 'alt', 'aria-label', 'type', 'name', 'placeholder', 'required', 'data-framer-appear-id', 'data-framer-cursor', 'data-highlight', 'action', 'method', 'autocomplete']) { const v = el.getAttribute(a); if (v !== null) it[a] = v; }
      if (tag === 'svg') it.svg = el.outerHTML.slice(0, 300);
      if (tag === 'img') it.currentSrc = el.currentSrc;
      items.push(it); d = depth + 1;
    }
    if (tag !== 'svg') for (const c of el.children) walk(c, d);
  };
  roots.forEach((r) => walk(r, 0));
  return items;
}

const DEF = { padding: '0px', gap: 'normal', margin: '0px', borderRadius: '0px', boxShadow: 'none', opacity: '1', transform: 'none', filter: 'none', backdropFilter: 'none', backgroundColor: 'rgba(0, 0, 0, 0)', backgroundImage: 'none', overflow: 'visible', mixBlendMode: 'normal', clipPath: 'none', maskImage: 'none', pointerEvents: 'auto', visibility: 'visible' };
export function summarize(items) {
  let txt = '';
  for (const it of items || []) {
    const s = it.st; const ex = [];
    for (const k of Object.keys(DEF)) if (s[k] !== DEF[k]) ex.push(`${k}=${s[k]}`);
    for (const k of ['borderTop', 'borderBottom', 'borderLeft', 'borderRight']) if (!/^0px none/.test(s[k])) ex.push(`${k}=${s[k]}`);
    if (s.position !== 'static' && s.position !== 'relative') ex.push(`pos=${s.position} t=${s.top} l=${s.left} r=${s.right} b=${s.bottom} z=${s.zIndex}`);
    if (s.display === 'flex') ex.push(`flex ${s.flexDirection} j=${s.justifyContent} a=${s.alignItems}`);
    if (s.display === 'grid') ex.push('grid');
    if (s.cursor !== 'auto') ex.push(`cursor=${s.cursor}`);
    const font = it.text ? ` font=${s.fontFamily.split(',')[0]}/${s.fontWeight}/${s.fontSize}/${s.lineHeight}/ls${s.letterSpacing}/${s.textTransform}/${s.textDecoration.split(' ')[0]}/${s.color}${s.fontVariationSettings !== 'normal' ? '/fvs ' + s.fontVariationSettings : ''}${s.fontFeatureSettings !== 'normal' ? '/ffs ' + s.fontFeatureSettings : ''}` : '';
    const att = ['href', 'target', 'rel', 'src', 'alt', 'aria-label', 'type', 'name', 'placeholder', 'required', 'data-framer-appear-id', 'data-framer-cursor', 'action'].filter((a) => it[a] !== undefined).map((a) => `${a}=${String(it[a]).slice(0, 120)}`).join(' ');
    txt += `${'  '.repeat(it.depth)}<${it.tag}${it.name ? ` "${it.name}"` : ''} ${it.cls} [${it.rect.join(',')}]${font}${ex.length ? ' {' + ex.join('; ') + '}' : ''}${att ? ' ' + att : ''}${it.text ? ' :: ' + JSON.stringify(it.text) : ''}${it.lines && it.lines.length > 1 ? ' LINES=' + it.lines.join('|') : ''}\n`;
  }
  return txt;
}
