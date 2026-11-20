// homeb : DOM rendu des sections 06–11 de l'accueil (original, archive réseau).
// node scripts/agents/homeb/dom.mjs --widths=1440,1200,810,390
import fs from 'node:fs';
import path from 'node:path';
import { launch, openPage, closeAll, realFrames, advance, urlFor, hideOutOfScope, freezeVideos, ROOT } from '../../lib/harness.mjs';

const widths = (process.argv.find((a) => a.startsWith('--widths=')) || '--widths=1440').slice(9).split(',').map(Number);
const OUT = path.join(ROOT, 'reference', 'agents', 'homeb', 'dom');
const NAMES = ['Process', 'Play Reel', 'Testimonials', 'Pricing', 'Pricing FAQ', 'Contact Callout', 'Articles Feed'];

const b = await launch({ webgl: false });
const killer = setTimeout(async () => { console.log('TIMEOUT'); await b.close().catch(() => {}); process.exit(2); }, 570000);
try {
  for (const w of widths) {
    const h = await openPage(b, 'ref', { width: w, net: 'record' });
    const t0 = Date.now(); const { page } = h;
    // stabilisation allégée (gotoStable complet > 10 min sur ce poste) : préchargeur, défilement par pas jusqu'en bas, mode 'fast'
    await page.goto(urlFor('ref', '/'), { waitUntil: 'load', timeout: 120000 }); await hideOutOfScope(page, 'ref'); await realFrames(page, 3);
    await advance(page, 6000, { step: 100, mode: 'fast' });
    const H = await page.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < H; y += 450) { await page.evaluate((yy) => window.scrollTo(0, yy), y); await realFrames(page, 1); await advance(page, 200, { step: 50, mode: 'fast' }); }
    await advance(page, 2500, { step: 100, mode: 'fast' }); await freezeVideos(page, 0);
    console.log(w, 'stable', (Date.now() - t0) / 1000, 's');
    const data = await h.page.evaluate((NAMES) => {
      const vis = (e) => { const r = e.getBoundingClientRect(); const s = getComputedStyle(e); return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none'; };
      const out = {};
      for (const n of NAMES) {
        const els = [...document.querySelectorAll(`[data-framer-name="${n}"]`)].filter(vis);
        // le plus haut niveau visible (section ou conteneur de composant)
        const top = els.filter((e) => !els.some((o) => o !== e && o.contains(e)));
        out[n] = top.map((el) => {
          const r = el.getBoundingClientRect();
          const leaves = [];
          for (const t of el.querySelectorAll('h1,h2,h3,h4,h5,h6,p,a,button,input,textarea,select,label,img,video,svg,iframe,[role]')) {
            if (!vis(t)) continue;
            const rr = t.getBoundingClientRect(); const s = getComputedStyle(t);
            leaves.push({
              tag: t.tagName.toLowerCase(), name: t.closest('[data-framer-name]')?.dataset.framerName || '',
              text: (t.innerText || t.value || t.getAttribute('placeholder') || t.getAttribute('alt') || '').replace(/\s+/g, ' ').trim().slice(0, 300),
              x: Math.round(rr.left), y: Math.round(rr.top + scrollY), w: Math.round(rr.width), h: Math.round(rr.height),
              font: `${s.fontFamily.split(',')[0]} ${s.fontWeight} ${s.fontSize}/${s.lineHeight} ls=${s.letterSpacing} ${s.textTransform}`,
              color: s.color, bg: s.backgroundColor, op: s.opacity,
              href: t.getAttribute('href'), target: t.getAttribute('target'), src: t.currentSrc || t.getAttribute('src'), type: t.getAttribute('type'), ph: t.getAttribute('placeholder'), aria: t.getAttribute('aria-label'),
            });
          }
          return { cls: el.className, x: Math.round(r.left), y: Math.round(r.top + scrollY), w: Math.round(r.width), h: Math.round(r.height), text: el.innerText.replace(/\n{2,}/g, '\n').trim(), leaves, html: el.outerHTML };
        });
      }
      return { scrollHeight: document.documentElement.scrollHeight, out };
    }, NAMES);
    fs.mkdirSync(path.join(OUT, String(w)), { recursive: true });
    for (const [n, arr] of Object.entries(data.out)) {
      arr.forEach((s, i) => fs.writeFileSync(path.join(OUT, String(w), `${n.replace(/ /g, '_')}-${i}.html`), s.html));
      arr.forEach((s) => delete s.html);
    }
    fs.writeFileSync(path.join(OUT, `${w}.json`), JSON.stringify(data, null, 1));
    console.log(w, 'ok', data.scrollHeight, Object.entries(data.out).map(([k, v]) => `${k}:${v.length}`).join(' '), 'missing', h.missing.length, 'err', h.errors.length);
    await closeAll(h);
  }
} finally { clearTimeout(killer); await b.close(); }
