// Plan du HTML SSR de l'accueil (JS désactivé, réseau coupé) -> reference/agents/homea/ssr-outline.txt
import fs from 'node:fs';
import path from 'node:path';
import { launch, ROOT } from '../../lib/harness.mjs';

const html = fs.readFileSync(path.join(ROOT, 'reference/html/home.html'), 'utf8');
const b = await launch({ webgl: false });
const ctx = await b.newContext({ javaScriptEnabled: false, viewport: { width: 1440, height: 900 } });
await ctx.route('**/*', (r) => r.abort());
const page = await ctx.newPage();
await page.setContent(html, { waitUntil: 'domcontentloaded' });
const out = await page.evaluate(() => {
  const lines = [];
  const walk = (el, depth) => {
    for (const c of el.children) {
      if (['SCRIPT', 'STYLE', 'LINK', 'META', 'NOSCRIPT'].includes(c.tagName)) continue;
      const name = c.getAttribute('data-framer-name');
      const cls = [...c.classList].filter((x) => /^framer-|^ssr-variant|^hidden-/.test(x) && !/^framer-text$/.test(x)).join('.');
      const own = [...c.childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent).join('').trim();
      const attrs = [];
      for (const a of ['href', 'target', 'src', 'alt', 'srcset', 'poster', 'loop', 'muted', 'autoplay', 'playsinline', 'data-framer-appear-id', 'data-framer-component-type', 'aria-label', 'style']) {
        const v = c.getAttribute(a);
        if (v !== null) attrs.push(`${a}=${a === 'srcset' ? v.split(',')[0] : v.slice(0, a === 'style' ? 160 : 200)}`);
      }
      const show = name || own || attrs.length || /ssr-variant|hidden-/.test(cls) || /^(H\d|P|A|IMG|VIDEO|BUTTON|SECTION|HEADER|FOOTER|MAIN|svg)$/i.test(c.tagName);
      if (show) lines.push(`${'  '.repeat(depth)}<${c.tagName.toLowerCase()}${name ? ` "${name}"` : ''}${cls ? ' .' + cls : ''}${attrs.length ? ' [' + attrs.join(' | ') + ']' : ''}${own ? ' :: ' + JSON.stringify(own) : ''}`);
      if (c.tagName.toLowerCase() !== 'svg') walk(c, show ? depth + 1 : depth);
    }
  };
  walk(document.body, 0);
  return lines.join('\n');
});
fs.writeFileSync(path.join(ROOT, 'reference/agents/homea/ssr-outline.txt'), out);
console.log('lines', out.split('\n').length);
await ctx.close(); await b.close();
