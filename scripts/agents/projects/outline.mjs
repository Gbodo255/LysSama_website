// Plan du HTML SSR (JS désactivé) : arbre des éléments nommés / porteurs de texte / médias / liens.
// usage : node scripts/agents/projects/outline.mjs <slug> [<slug>...]  → reference/agents/projects/outline-<slug>.txt
import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';
import { ROOT } from '../../lib/harness.mjs';

const slugs = process.argv.slice(2);
const b = await chromium.launch();
const ctx = await b.newContext({ javaScriptEnabled: false });
await ctx.route('**/*', (r) => (r.request().url().startsWith('data:') ? r.continue() : r.abort()));
const page = await ctx.newPage();
for (const slug of slugs) {
  const html = fs.readFileSync(path.join(ROOT, 'reference/html', slug + '.html'), 'utf8');
  await page.setContent(html, { waitUntil: 'domcontentloaded' });
  const out = await page.evaluate(() => {
    const lines = [];
    const keep = (e) => e.dataset.framerName || /^(H[1-6]|P|A|IMG|VIDEO|BUTTON|INPUT|TEXTAREA|SELECT|FORM|SECTION|HEADER|FOOTER|NAV|MAIN|SVG|LABEL)$/i.test(e.tagName) || e.hasAttribute('data-framer-appear-id') || e.hasAttribute('data-framer-component-type');
    const walk = (e, d) => {
      if (/^(SCRIPT|STYLE|TEMPLATE|NOSCRIPT)$/.test(e.tagName)) return;
      let nd = d;
      if (keep(e)) {
        const cls = [...e.classList].filter((c) => c.startsWith('framer-') || c.startsWith('hidden-')).join('.');
        const a = [];
        if (e.dataset.framerName) a.push(`[${e.dataset.framerName}]`);
        if (e.dataset.framerAppearId) a.push(`appear=${e.dataset.framerAppearId}`);
        if (e.dataset.framerComponentType) a.push(`type=${e.dataset.framerComponentType}`);
        if (e.tagName === 'A') a.push(`href=${e.getAttribute('href')}${e.target ? ' target=' + e.target : ''}`);
        if (e.tagName === 'IMG') a.push(`src=${e.getAttribute('src')} alt="${e.getAttribute('alt') || ''}" style="${e.getAttribute('style') || ''}"`);
        if (e.tagName === 'VIDEO') a.push(`src=${e.getAttribute('src')} poster=${e.getAttribute('poster')} ${['loop', 'muted', 'autoplay', 'playsinline', 'controls'].filter((k) => e.hasAttribute(k)).join(' ')} preload=${e.getAttribute('preload')}`);
        if (e.getAttribute('aria-label')) a.push(`aria-label="${e.getAttribute('aria-label')}"`);
        if (e.tagName === 'INPUT' || e.tagName === 'BUTTON') a.push(`type=${e.getAttribute('type')} name=${e.getAttribute('name')} placeholder="${e.getAttribute('placeholder') || ''}"`);
        let txt = '';
        if (/^(H[1-6]|P|LABEL|BUTTON)$/.test(e.tagName) || (e.tagName === 'A' && !e.querySelector('h1,h2,h3,h4,h5,h6,p'))) txt = e.textContent.replace(/\s+/g, ' ').trim();
        lines.push('  '.repeat(d) + e.tagName.toLowerCase() + (cls ? '.' + cls : '') + ' ' + a.join(' ') + (txt ? ` « ${txt.slice(0, 400)} »` : ''));
        nd = d + 1;
        if (/^(H[1-6]|P|SVG)$/i.test(e.tagName)) return;
      }
      for (const c of e.children) walk(c, nd);
    };
    walk(document.body, 0);
    return lines.join('\n');
  });
  fs.writeFileSync(path.join(ROOT, 'reference/agents/projects', `outline-${slug}.txt`), out);
  console.log(slug, out.split('\n').length, 'lignes');
}
await b.close();
