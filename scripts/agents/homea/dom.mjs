// DOM rendu des sections homea (Hero → Team) à chaque largeur, après gotoStable.
// Usage : node scripts/agents/homea/dom.mjs 1440 [1200 810 390]
// Sortie : reference/agents/homea/dom-<w>.json + dom-<w>.txt (lisible, indenté)
import fs from 'node:fs';
import path from 'node:path';
import { launch, openPage, gotoStable, closeAll, ROOT } from '../../lib/harness.mjs';

const widths = process.argv.slice(2).map(Number);
const OUT = path.join(ROOT, 'reference/agents/homea');
const SECTIONS = [
  ['hero', 'section[data-framer-name="Hero"]'],
  ['about', 'section[data-framer-name="About"]'],
  ['work', '[data-framer-name="Work Section"]'],
  ['clients', '[data-framer-name="Client Logo Marquee"]'],
  ['whyus', 'section[data-framer-name="Why us"]'],
  ['services', 'section[data-framer-name="Services"]'],
  ['team', '[data-framer-name="Services Team Module"]'],
];
const b = await launch({ webgl: false });
try {
  for (const w of widths) {
    const t = Date.now();
    const h = await openPage(b, 'ref', { width: w, net: process.env.NET || 'record' });
    await gotoStable(h, '/', { scrollStep: Number(process.env.STEP || 0.5) });
    console.log(w, 'stable', Math.round((Date.now() - t) / 1000) + 's');
    const res = await h.page.evaluate((SECTIONS) => {
      const vis = (e) => { const r = e.getBoundingClientRect(); const cs = getComputedStyle(e); return r.width > 0 && r.height > 0 && cs.visibility !== 'hidden' && cs.display !== 'none'; };
      const KEYS = ['position', 'display', 'flexDirection', 'justifyContent', 'alignItems', 'gap', 'padding', 'margin', 'overflow', 'zIndex',
        'fontFamily', 'fontWeight', 'fontSize', 'lineHeight', 'letterSpacing', 'textTransform', 'textAlign', 'color', 'fontVariationSettings', 'fontFeatureSettings',
        'backgroundColor', 'backgroundImage', 'borderTop', 'borderBottom', 'borderLeft', 'borderRight', 'borderRadius', 'boxShadow', 'opacity', 'transform', 'filter', 'backdropFilter', 'mixBlendMode', 'clipPath', 'maskImage', 'objectFit', 'objectPosition', 'cursor', 'willChange', 'top'];
      const lines = (e) => {
        // caractère par caractère (textes découpés en spans par lettre) ; mot complet relu dans textContent
        const tw = document.createTreeWalker(e, NodeFilter.SHOW_TEXT); const out = []; let lastTop = null; let n; let g = 0; const full = e.textContent;
        while ((n = tw.nextNode())) {
          for (let i = 0; i < n.data.length; i++, g++) {
            if (/\s/.test(n.data[i])) continue;
            const r = document.createRange(); r.setStart(n, i); r.setEnd(n, i + 1);
            const rr = r.getClientRects()[0]; if (!rr) continue;
            if (lastTop === null || rr.top - lastTop > rr.height * 0.5) { out.push(full.slice(g).match(/^\S+/)[0]); lastTop = rr.top; }
          }
        }
        return out;
      };
      const sy = window.scrollY;
      const result = {};
      for (const [id, sel] of SECTIONS) {
        const root = [...document.querySelectorAll(sel)].find(vis);
        if (!root) { result[id] = null; continue; }
        const items = [];
        const walk = (el, depth) => {
          if (getComputedStyle(el).display === 'contents') { for (const c of el.children) walk(c, depth); return; }
          if (!vis(el) && el.tagName !== 'svg') return;
          const name = el.getAttribute('data-framer-name');
          const own = [...el.childNodes].filter((x) => x.nodeType === 3).map((x) => x.textContent).join('').trim();
          const tag = el.tagName.toLowerCase();
          const isText = /^(p|h[1-6]|span|a|button)$/.test(tag) && el.textContent.trim() && ![...el.children].some((c) => /^(div|p|h\d)$/i.test(c.tagName));
          const keep = name || own || /^(img|video|a|svg|button|canvas|input|h[1-6]|p)$/.test(tag);
          let d = depth;
          if (keep) {
            const r = el.getBoundingClientRect(); const cs = getComputedStyle(el);
            const st = {}; for (const k of KEYS) st[k] = cs[k];
            const it = { depth, tag, name, cls: [...el.classList].filter((c) => /^framer-(?!text)/.test(c)).join('.'), rect: [r.x, r.y + sy, r.width, r.height].map((v) => Math.round(v * 100) / 100), st };
            if (isText) { it.text = el.textContent; it.lines = lines(el); }
            else if (own) it.text = own;
            for (const a of ['href', 'target', 'rel', 'src', 'alt', 'srcset', 'poster', 'aria-label', 'data-framer-appear-id', 'loop', 'muted', 'autoplay', 'playsinline', 'preload']) { const v = el.getAttribute(a); if (v !== null) it[a] = v; }
            if (tag === 'video') Object.assign(it, { paused: el.paused, currentSrc: el.currentSrc, loopP: el.loop, mutedP: el.muted });
            if (tag === 'img') it.currentSrc = el.currentSrc;
            items.push(it); d = depth + 1;
          }
          if (tag !== 'svg') for (const c of el.children) walk(c, d);
        };
        walk(root, 0);
        result[id] = items;
      }
      return { scrollHeight: document.documentElement.scrollHeight, result };
    }, SECTIONS);
    fs.writeFileSync(path.join(OUT, `dom-${w}.json`), JSON.stringify(res));
    // résumé lisible
    const DEF = { padding: '0px', gap: 'normal', margin: '0px', borderRadius: '0px', boxShadow: 'none', opacity: '1', transform: 'none', filter: 'none', backdropFilter: 'none', backgroundColor: 'rgba(0, 0, 0, 0)', backgroundImage: 'none', overflow: 'visible', mixBlendMode: 'normal', clipPath: 'none', maskImage: 'none' };
    let txt = `scrollHeight ${res.scrollHeight}\n`;
    for (const [id, items] of Object.entries(res.result)) {
      txt += `\n## ${id}\n`;
      for (const it of items || []) {
        const s = it.st; const ex = [];
        for (const k of Object.keys(DEF)) if (s[k] !== DEF[k]) ex.push(`${k}=${s[k]}`);
        if (s.position !== 'static' && s.position !== 'relative') ex.push(`pos=${s.position}`);
        if (s.display === 'flex') ex.push(`flex ${s.flexDirection} j=${s.justifyContent} a=${s.alignItems}`);
        const font = it.text ? ` font=${s.fontFamily.split(',')[0]}/${s.fontWeight}/${s.fontSize}/${s.lineHeight}/ls${s.letterSpacing}/${s.textTransform}/${s.color}${s.fontVariationSettings !== 'normal' ? '/fvs ' + s.fontVariationSettings : ''}` : '';
        const att = ['href', 'target', 'src', 'alt', 'poster', 'aria-label', 'data-framer-appear-id', 'loop', 'muted', 'autoplay'].filter((a) => it[a] !== undefined).map((a) => `${a}=${String(it[a]).slice(0, 120)}`).join(' ');
        txt += `${'  '.repeat(it.depth)}<${it.tag}${it.name ? ` "${it.name}"` : ''} ${it.cls} [${it.rect.join(',')}]${font}${ex.length ? ' {' + ex.join('; ') + '}' : ''}${att ? ' ' + att : ''}${it.text ? ' :: ' + JSON.stringify(it.text) : ''}${it.lines && it.lines.length > 1 ? ' LINES=' + it.lines.join('|') : ''}\n`;
      }
    }
    fs.writeFileSync(path.join(OUT, `dom-${w}.txt`), txt);
    console.log(w, 'ok', Math.round((Date.now() - t) / 1000) + 's', 'missing', h.missing.length, 'errors', h.errors.length);
    await closeAll(h);
  }
} finally { await b.close(); }
