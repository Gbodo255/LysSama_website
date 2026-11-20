// Extraction rendue /journal et /journal/<slug> (agent journal).
// Usage : node scripts/agents/journal/extract.mjs <largeur> <route...>
// Sortie : reference/agents/journal/<slug>@<w>.json
import fs from 'node:fs';
import path from 'node:path';
import { launch, openPage, gotoStable, closeAll, ROOT } from '../../lib/harness.mjs';

const [w, ...routes] = process.argv.slice(2);
const OUT = path.join(ROOT, 'reference/agents/journal');
fs.mkdirSync(OUT, { recursive: true });
const b = await launch({ webgl: false });
try {
  for (const route of routes) {
    const t = Date.now();
    const h = await openPage(b, 'ref', { width: +w, net: 'record' });
    await gotoStable(h, route);
    const res = await h.page.evaluate(() => {
      const vis = (e) => { const r = e.getBoundingClientRect(); const cs = getComputedStyle(e); return r.width > 0 && r.height > 0 && cs.visibility !== 'hidden' && cs.display !== 'none' && +cs.opacity > 0; };
      const sy = window.scrollY;
      const rect = (e) => { const r = e.getBoundingClientRect(); return [r.x, r.y + sy, r.width, r.height].map((v) => Math.round(v * 100) / 100); };
      const font = (e) => { const c = getComputedStyle(e); return [c.fontFamily.split(',')[0], c.fontWeight, c.fontSize, c.lineHeight, c.letterSpacing, c.color, c.textAlign, c.fontVariationSettings].join('|'); };
      const lines = (e) => {
        const tw = document.createTreeWalker(e, NodeFilter.SHOW_TEXT); const out = []; let lastTop = null; let n; let g = 0; const full = e.textContent;
        while ((n = tw.nextNode())) for (let i = 0; i < n.data.length; i++, g++) {
          if (/\s/.test(n.data[i])) continue;
          const r = document.createRange(); r.setStart(n, i); r.setEnd(n, i + 1); const rr = r.getClientRects()[0]; if (!rr) continue;
          if (lastTop === null || rr.top - lastTop > rr.height * 0.5) { out.push(full.slice(g).match(/^\S+/)[0]); lastTop = rr.top; }
        }
        return out;
      };
      // textes visibles (feuilles)
      const texts = [];
      for (const e of document.querySelectorAll('p,h1,h2,h3,h4,h5,h6,li,blockquote,time,figcaption')) {
        if (!vis(e) || !e.textContent.trim()) continue;
        if (e.closest('[data-framer-name="Template Buy Button"]')) continue;
        texts.push({ tag: e.tagName.toLowerCase(), text: e.textContent, html: e.innerHTML.length < 400 ? e.innerHTML : undefined, rect: rect(e), font: font(e), lines: lines(e) });
      }
      const links = [...document.querySelectorAll('a')].filter(vis).map((a) => ({ text: a.textContent.trim().slice(0, 80), href: a.getAttribute('href'), target: a.getAttribute('target'), rect: rect(a) }));
      const imgs = [...document.querySelectorAll('img')].filter(vis).map((i) => { const c = getComputedStyle(i); return { src: i.getAttribute('src'), alt: i.getAttribute('alt'), sizes: i.getAttribute('sizes'), rect: rect(i), fit: c.objectFit, pos: c.objectPosition, radius: c.borderRadius, filter: c.filter, transform: c.transform }; });
      const buttons = [...document.querySelectorAll('button')].filter(vis).map((x) => ({ aria: x.getAttribute('aria-label'), rect: rect(x), style: x.getAttribute('style') }));
      // rich text du corps (structure exacte)
      const rt = document.querySelector('.framer-1tn62t5');
      const body = rt ? [...rt.children].map((c) => ({ tag: c.tagName.toLowerCase(), cls: c.className, html: c.innerHTML })) : null;
      // listes : structure brute (y compris invisibles) pour comprendre les doublons
      const cardLinks = [...document.querySelectorAll('a[href*="journal/"]')].map((a) => ({ href: a.getAttribute('href'), cls: a.className, visible: vis(a), text: a.textContent.replace(/\s+/g, ' ').trim().slice(0, 150), parentName: a.closest('[data-framer-name]')?.getAttribute('data-framer-name') }));
      const named = [...document.querySelectorAll('[data-framer-name]')].filter(vis).map((e) => ({ name: e.getAttribute('data-framer-name'), tag: e.tagName.toLowerCase(), cls: [...e.classList].filter((c) => /^framer-/.test(c)).join('.'), rect: rect(e) }));
      return { title: document.title, metaDesc: document.querySelector('meta[name=description]')?.content, scrollHeight: document.documentElement.scrollHeight, texts, links, imgs, buttons, body, cardLinks, named };
    });
    const slug = route === '/journal' ? 'journal' : 'journal__' + route.split('/').pop();
    fs.writeFileSync(path.join(OUT, `${slug}@${w}.json`), JSON.stringify(res, null, 1));
    console.log(route, w, Math.round((Date.now() - t) / 1000) + 's', 'missing', h.missing.length, 'errors', h.errors.length);
    await closeAll(h);
  }
} finally { await b.close(); }
