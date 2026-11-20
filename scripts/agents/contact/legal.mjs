// Extrait le corps des pages légales depuis le HTML SSR (reference/html/<slug>.html) :
//  - reference/agents/contact/legal/<slug>.json : en-tête (H1, « Last updated », date) + blocs {tag, html, text}
//  - content/legal/<slug>.md : corps avec la même structure de balises (h2/h3/p/ul/ol/li, inline strong/em/a/br).
// Usage : node scripts/agents/contact/legal.mjs
import fs from 'node:fs';
import path from 'node:path';
import { ROOT } from '../../lib/harness.mjs';

const SLUGS = ['privacy-policy', 'terms-conditions', 'cookie-policy'];
const ent = (s) => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&nbsp;/g, ' ');

// Renvoie le HTML interne de l'élément ouvert à `start` (div équilibrés).
function inner(html, start) {
  const open = html.indexOf('>', start) + 1;
  const re = /<(\/?)div\b[^>]*>/g; re.lastIndex = open; let depth = 1, m;
  while ((m = re.exec(html))) { depth += m[1] ? -1 : 1; if (!depth) return html.slice(open, m.index); }
  throw new Error('div non fermé');
}
// Découpe en blocs de premier niveau (h1-6, p, ul, ol, blockquote…).
function blocks(h) {
  const out = []; const re = /<(h[1-6]|p|ul|ol|blockquote|figure|table|hr)\b[^>]*?(\/?)>/g; let m;
  while ((m = re.exec(h))) {
    const tag = m[1];
    if (m[2] === '/' || tag === 'hr') { out.push({ tag, html: '' }); continue; }
    let depth = 1; const r2 = new RegExp(`<(/?)${tag}\\b[^>]*>`, 'g'); r2.lastIndex = re.lastIndex; let n;
    while ((n = r2.exec(h))) { depth += n[1] ? -1 : 1; if (!depth) break; }
    out.push({ tag, attrs: m[0], html: h.slice(re.lastIndex, n.index) });
    re.lastIndex = r2.lastIndex;
  }
  return out;
}
const inline = (s) => ent(s
  .replace(/<br\s*\/?>/g, '<br>\u0000')
  .replace(/<a\b[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/g, (_, href, t) => `[${t}](${href})`)
  .replace(/<(strong|b)\b[^>]*>(.*?)<\/\1>/g, '**$2**')
  .replace(/<(em|i)\b[^>]*>(.*?)<\/\1>/g, '*$2*')
  .replace(/<code\b[^>]*>(.*?)<\/code>/g, '`$1`')
  .replace(/<(?!br>)[^>]+>/g, '')).replace(/<br>\u0000/g, '<br>');
const text = (s) => ent(s.replace(/<br\s*\/?>/g, '\n').replace(/<[^>]+>/g, ''));

for (const slug of SLUGS) {
  const html = fs.readFileSync(path.join(ROOT, 'reference/html', slug + '.html'), 'utf8');
  const body = html.slice(html.indexOf('<body'));
  const starts = [...body.matchAll(/<div[^>]*data-framer-component-type="RichTextContainer"[^>]*>/g)].map((m) => m.index);
  const all = starts.map((s) => ({ start: s, cls: (body.slice(s, s + 200).match(/class="([^"]*)"/) || [])[1], inner: inner(body, s) }));
  // Corps = conteneur qui contient le plus de h2.
  const main = all.reduce((a, b) => ((b.inner.match(/<h2/g) || []).length > (a.inner.match(/<h2/g) || []).length ? b : a));
  const bl = blocks(main.inner).map((b) => ({ tag: b.tag, preset: (b.attrs?.match(/data-styles-preset="([^"]*)"/) || [])[1] || null, html: b.html, text: text(b.html) }));
  // Bloc ul/ol → items li
  for (const b of bl) if (b.tag === 'ul' || b.tag === 'ol') b.items = [...b.html.matchAll(/<li\b[^>]*>(.*?)<\/li>/gs)].map((m) => m[1]);
  const h1 = (body.match(/<h1[^>]*>(.*?)<\/h1>/s) || [])[1];
  const upd = body.match(/Last updated<\/p>.*?<p[^>]*>(.*?)<\/p>/s);
  const head = { h1: h1 && text(h1), lastUpdatedLabel: 'Last updated', lastUpdated: upd && text(upd[1]) };
  const others = all.filter((c) => c !== main).map((c) => ({ cls: c.cls, text: text(c.inner).slice(0, 300) }));
  const outDir = path.join(ROOT, 'reference/agents/contact/legal');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, slug + '.json'), JSON.stringify({ slug, head, bodyClass: main.cls, blocks: bl, otherRichText: others }, null, 1));
  // Markdown : un bloc par balise d'origine ; h2 vide conservé en commentaire HTML.
  const md = [];
  for (const b of bl) {
    if (/^h[2-6]$/.test(b.tag)) {
      const t = inline(b.html).trim();
      md.push(t ? `${'#'.repeat(+b.tag[1])} ${t}` : `<!-- ${b.tag} vide dans l'original -->`);
    } else if (b.tag === 'p') md.push(inline(b.html).trim() || '<!-- p vide dans l\'original -->');
    else if (b.tag === 'ul' || b.tag === 'ol') md.push(b.items.map((li, i) => `${b.tag === 'ul' ? '-' : `${i + 1}.`} ${inline(li.replace(/<\/?p\b[^>]*>/g, '')).trim()}`).join('\n'));
    else md.push(`<!-- ${b.tag} : ${b.text.slice(0, 80)} -->`);
  }
  const fm = `---\nslug: ${slug}\ntitle: ${JSON.stringify(head.h1)}\nlastUpdatedLabel: "Last updated"\nlastUpdated: ${JSON.stringify(head.lastUpdated)}\ndemo: true\nsource: reference/html/${slug}.html (div.${main.cls}, RichTextContainer)\n---\n\n`;
  fs.mkdirSync(path.join(ROOT, 'content/legal'), { recursive: true });
  fs.writeFileSync(path.join(ROOT, 'content/legal', slug + '.md'), fm + md.join('\n\n') + '\n');
  const count = bl.reduce((a, b) => ((a[b.tag] = (a[b.tag] || 0) + 1), a), {});
  console.log(slug, JSON.stringify(head), main.cls, JSON.stringify(count), 'autres RT:', others.length);
}
