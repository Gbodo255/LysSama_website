// Textes exacts (textContent), liens, médias des sections homea dans le HTML SSR, par variante de breakpoint.
// JS désactivé, réseau coupé : rapide, indépendant du banc (géométrie NON fiable ici, seulement contenu).
// Sortie : reference/agents/homea/ssr-texts.json + ssr-texts.txt
import fs from 'node:fs';
import path from 'node:path';
import { launch, ROOT } from '../../lib/harness.mjs';

const html = fs.readFileSync(path.join(ROOT, 'reference/html/home.html'), 'utf8');
const b = await launch({ webgl: false });
try {
  const out = {};
  for (const w of [1440, 900, 390]) {
    const ctx = await b.newContext({ javaScriptEnabled: false, viewport: { width: w, height: 900 } });
    await ctx.route('**/*', (r) => r.abort());
    const page = await ctx.newPage();
    await page.setContent(html, { waitUntil: 'domcontentloaded' });
    out[w] = await page.evaluate(() => {
      const SECTIONS = { hero: 'section[data-framer-name="Hero"]', about: 'section[data-framer-name="About"]', work: '[data-framer-name="Work Section"]', clients: '[data-framer-name="Client Logo Marquee"]', whyus: 'section[data-framer-name="Why us"]', services: 'section[data-framer-name="Services"]', team: '[data-framer-name="Services Team Module"]' };
      const shown = (e) => { for (let x = e; x; x = x.parentElement) if (getComputedStyle(x).display === 'none') return false; return true; };
      const res = {};
      for (const [id, sel] of Object.entries(SECTIONS)) {
        const roots = [...document.querySelectorAll(sel)].filter(shown);
        const items = [];
        for (const root of roots) {
          for (const el of root.querySelectorAll('h1,h2,h3,h4,p,a,img,video,button,input,textarea,select,label')) {
            if (!shown(el)) continue;
            const hiddenSlot = !!el.closest('[style*="-99999px"]');
            const named = el.closest('[data-framer-name]')?.getAttribute('data-framer-name');
            const it = { tag: el.tagName.toLowerCase(), name: named, slot: hiddenSlot || undefined };
            if (/^(h\d|p)$/i.test(el.tagName)) {
              it.text = el.textContent;
              it.preset = [...el.classList].find((c) => c.startsWith('framer-styles-preset')) || undefined;
              const colored = [...el.querySelectorAll('span[style*="--framer-text-color"], strong, em, br')].filter((s) => s.tagName === 'BR' || s.textContent.trim().length > 1 || s.tagName !== 'SPAN').map((s) => s.tagName === 'BR' ? '<br>' : `${s.tagName.toLowerCase()}:${s.textContent}${s.getAttribute('style') ? '{' + s.getAttribute('style').match(/--framer-text-color:[^;]*/)?.[0] + '}' : ''}`);
              if (colored.length) it.marks = colored;
            }
            for (const a of ['href', 'target', 'rel', 'src', 'alt', 'poster', 'aria-label', 'loop', 'muted', 'autoplay', 'playsinline', 'type', 'placeholder']) { const v = el.getAttribute(a); if (v !== null) it[a] = v; }
            items.push(it);
          }
        }
        res[id] = { roots: roots.length, items };
      }
      return res;
    });
    await ctx.close();
  }
  fs.writeFileSync(path.join(ROOT, 'reference/agents/homea/ssr-texts.json'), JSON.stringify(out, null, 1));
  let txt = '';
  for (const [w, secs] of Object.entries(out)) for (const [id, { roots, items }] of Object.entries(secs)) {
    txt += `\n## ${w} ${id} (racines visibles: ${roots})\n`;
    let last = '';
    for (const it of items) {
      if (/^(h\d|p)$/.test(it.tag) && it.text === last) continue;
      const a = ['href', 'target', 'src', 'alt', 'poster', 'aria-label', 'loop', 'muted', 'autoplay'].filter((k) => it[k] !== undefined).map((k) => `${k}=${String(it[k]).replace(/\?.*$/, '')}`).join(' ');
      txt += `<${it.tag}${it.slot ? ' SLOT' : ''} "${it.name}"${it.preset ? ' ' + it.preset.replace('framer-styles-preset-', '') : ''}> ${a}${it.text !== undefined ? ' :: ' + JSON.stringify(it.text) : ''}${it.marks ? ' MARKS ' + JSON.stringify(it.marks) : ''}\n`;
      if (it.text) last = it.text;
    }
  }
  fs.writeFileSync(path.join(ROOT, 'reference/agents/homea/ssr-texts.txt'), txt);
  console.log('ok', txt.split('\n').length);
} finally { await b.close(); }
