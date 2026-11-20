// Audit /studio : DOM rendu par largeur (sections, textes + retours à la ligne, liens, médias).
// Usage : node scripts/agents/studio/capture.mjs [largeurs...]  → reference/agents/studio/dom-<w>.json
import fs from 'node:fs';
import path from 'node:path';
import { launch, openPage, gotoStable, closeAll, ROOT, LIST_A } from '../../lib/harness.mjs';

const widths = process.argv.slice(2).map(Number).filter(Boolean);
const OUT = path.join(ROOT, 'reference', 'agents', 'studio');
const b = await launch({ webgl: false });
try {
  for (const width of widths.length ? widths : LIST_A) {
    const h = await openPage(b, 'ref', { width, net: 'record' });
    await gotoStable(h, '/studio');
    const data = await h.page.evaluate(() => {
      const vis = (e) => { const r = e.getBoundingClientRect(); const s = getComputedStyle(e); return r.width > 0 && r.height > 0 && s.display !== 'none' && s.visibility !== 'hidden'; };
      const rect = (e) => { const r = e.getBoundingClientRect(); return [Math.round(r.left * 10) / 10, Math.round((r.top + scrollY) * 10) / 10, Math.round(r.width * 10) / 10, Math.round(r.height * 10) / 10]; };
      const main = document.querySelector('main') || document.body;
      const depth = (e) => { let d = 0; for (let p = e; p && p !== main; p = p.parentElement) if (p.dataset && p.dataset.framerName) d++; return d; };
      const outline = [...main.querySelectorAll('[data-framer-name]')].filter(vis).map((e) => ({ d: depth(e), n: e.dataset.framerName, c: (e.className.baseVal ?? e.className).split(' ').filter((x) => x.startsWith('framer-') && !x.startsWith('framer-styles')).slice(0, 2).join(' '), tag: e.tagName.toLowerCase(), r: rect(e) }));
      const texts = [];
      for (const e of document.body.querySelectorAll('*')) {
        if (!vis(e) || ['SCRIPT', 'STYLE'].includes(e.tagName)) continue;
        const BLK = 'p,h1,h2,h3,h4,h5,h6,li,label,button,time,input,textarea,select';
        const isBlk = e.matches(BLK);
        const own = [...e.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim());
        if (!(isBlk ? !e.parentElement.closest(BLK) && e.textContent.trim() : own && !e.closest(BLK))) continue;
        const s = getComputedStyle(e);
        // premier mot de chaque ligne
        const lines = []; let lastTop = null;
        const w = document.createTreeWalker(e, NodeFilter.SHOW_TEXT);
        for (let n = w.nextNode(); n; n = w.nextNode()) {
          const re = /\S+/g; let m;
          while ((m = re.exec(n.textContent))) {
            const rg = document.createRange(); rg.setStart(n, m.index); rg.setEnd(n, m.index + m[0].length);
            const rr = rg.getClientRects()[0]; if (!rr) continue;
            if (lastTop === null || rr.top - lastTop > 2) { lines.push(m[0]); lastTop = rr.top; }
          }
        }
        texts.push({ tag: e.tagName.toLowerCase(), t: e.textContent.replace(/\s+/g, ' ').trim().slice(0, 300), raw: e.textContent.length < 400 ? e.textContent : undefined, r: rect(e), lines,
          f: [s.fontFamily.split(',')[0], s.fontWeight, s.fontSize, s.lineHeight, s.letterSpacing, s.textTransform, s.color, s.fontVariationSettings, s.fontFeatureSettings, s.textAlign, s.opacity].join(' | '),
          sec: e.closest('[data-framer-name]')?.dataset.framerName });
      }
      const links = [...document.querySelectorAll('a')].filter(vis).map((a) => ({ t: a.textContent.replace(/\s+/g, ' ').trim().slice(0, 80), href: a.getAttribute('href'), target: a.target, r: rect(a), sec: a.closest('section,[data-framer-name]')?.dataset.framerName }));
      const media = [...document.querySelectorAll('img,video')].filter(vis).map((m) => { const s = getComputedStyle(m); return { tag: m.tagName.toLowerCase(), src: (m.currentSrc || m.src || '').slice(0, 160), alt: m.alt, r: rect(m), fit: s.objectFit, pos: s.objectPosition, radius: s.borderRadius, sizes: m.sizes, loop: m.loop, muted: m.muted, autoplay: m.autoplay, poster: m.poster }; });
      return { scrollHeight: document.documentElement.scrollHeight, outline, texts, links, media };
    });
    fs.writeFileSync(path.join(OUT, `dom-${width}.json`), JSON.stringify({ width, missing: h.missing.length, errors: h.errors.slice(0, 10), ...data }, null, 1));
    console.log(width, 'H', data.scrollHeight, 'outline', data.outline.length, 'texts', data.texts.length, 'links', data.links.length, 'media', data.media.length);
    await closeAll(h);
  }
} finally { await b.close(); }
