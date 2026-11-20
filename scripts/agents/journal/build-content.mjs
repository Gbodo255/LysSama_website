// Génère content/journal/<slug>.md et src/data/journal.ts depuis les extractions rendues
// (reference/agents/journal/*@1440.json) + manifest des assets. Usage : node scripts/agents/journal/build-content.mjs
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert';

import { fileURLToPath } from 'node:url';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..', '..');
const IN = path.join(ROOT, 'reference/agents/journal');
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'public/assets/manifest.json'), 'utf8'));
const dec = (s) => s.replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&');
const media = (src, alt) => {
  const u = new URL(src); const q = u.searchParams; const orig = u.origin + u.pathname;
  const m = manifest[orig]; assert(m, 'absent du manifest : ' + orig);
  return { src: m.local, original: orig, alt, width: m.width ?? (+q.get('width') || null), height: m.height ?? (+q.get('height') || null) };
};

const list = JSON.parse(fs.readFileSync(path.join(IN, 'journal@1440.json'), 'utf8'));
// Ordre de la collection : grille 4 colonnes remplie élément i → colonne i % 4 (vérifié par la 2e grille SSR à 2 colonnes).
const cols = {};
for (const l of list.links.filter((l) => /^\.\/journal\/./.test(l.href))) (cols[l.rect[0]] ||= []).push(l);
const colX = Object.keys(cols).map(Number).sort((a, b) => a - b);
const order = [];
for (let r = 0; r < 2; r++) for (const x of colX) order.push(cols[x][r].href.split('/').pop());
assert.equal(order.length, 8);

const articles = [];
for (const slug of order) {
  const j = JSON.parse(fs.readFileSync(path.join(IN, `journal__${slug}@1440.json`), 'utf8'));
  const T = j.texts;
  const iH1 = T.findIndex((t) => t.tag === 'h1');
  const h1 = T[iH1];
  const cat = T[iH1 - 1].text; assert(/^\(.*\)$/.test(cat), slug + ' catégorie');
  const desc = T[iH1 + 1].text;
  const date = T.find((t) => t.tag === 'time').text;
  const iRole = T.findIndex((t) => /, Mira$/.test(t.text));
  const author = T[iRole - 1].text; const role = T[iRole].text.replace(/, Mira$/, '');
  const intro = T.find((t) => t.tag === 'h2').text;
  const imgs = j.imgs;
  const cover = imgs.reduce((a, b) => (b.rect[2] > a.rect[2] ? b : a));
  const avatar = imgs.find((i) => /^Portrait of/.test(i.alt || ''));
  const card = list.imgs.find((i) => i.src.split('?')[0] === cover.src.split('?')[0]);
  assert(card, slug + ' image de carte ≠ couverture');
  const iView = j.links.findIndex((l) => /View All/.test(l.text));
  const more = j.links.slice(iView + 1, iView + 5).map((l) => l.href.split('/').pop());
  const iso = new Date(date + ' UTC').toISOString();
  articles.push({
    slug, title: h1.text, articleType: cat.slice(1, -1), date: iso, dateCard: list.texts.find((t) => t.tag === 'time' && list.texts[list.texts.indexOf(t) - 2]?.text === h1.text)?.text, dateArticle: date,
    shortDescription: desc, introHeader: intro, metaTitle: j.title, metaDescription: j.metaDesc,
    mainImage: media(cover.src, cover.alt), author: { name: author, role, avatar: media(avatar.src, avatar.alt) },
    body: j.body.map((b) => ({ tag: b.tag, text: dec(b.html) })), moreArticles: more,
  });
}

// auto-vérification : « More articles » = 4 premiers de l'ordre de collection, titre courant exclu
for (const a of articles) assert.deepEqual(a.moreArticles, order.filter((s) => s !== a.slug).slice(0, 4), a.slug + ' more');

const q = (s) => JSON.stringify(s);
fs.mkdirSync(path.join(ROOT, 'content/journal'), { recursive: true });
for (const a of articles) {
  const fm = [
    '---', `demo: true`, `slug: ${q(a.slug)}`, `title: ${q(a.title)}`, `articleType: ${q(a.articleType)}`, `date: ${q(a.date)}`,
    `shortDescription: ${q(a.shortDescription)}`, `introHeader: ${q(a.introHeader)}`,
    `mainImage:`, `  src: ${q(a.mainImage.src)}`, `  original: ${q(a.mainImage.original)}`, `  alt: ${q(a.mainImage.alt)}`, `  width: ${a.mainImage.width}`, `  height: ${a.mainImage.height}`,
    `author:`, `  name: ${q(a.author.name)}`, `  role: ${q(a.author.role)}`, `  avatar:`, `    src: ${q(a.author.avatar.src)}`, `    original: ${q(a.author.avatar.original)}`, `    alt: ${q(a.author.avatar.alt)}`,
    `metaTitle: ${q(a.metaTitle)}`, `metaDescription: ${q(a.metaDescription)}`, '---', '',
  ].join('\n');
  const body = a.body.map((b) => (b.tag === 'h3' ? '### ' + b.text : b.tag === 'h2' ? '## ' + b.text : b.text)).join('\n\n');
  fs.writeFileSync(path.join(ROOT, `content/journal/${a.slug}.md`), fm + '\n' + body + '\n');
}
fs.writeFileSync(path.join(IN, 'articles.json'), JSON.stringify({ order, articles }, null, 1));
console.log('ordre', order.join(' '));
for (const a of articles) console.log(a.slug, '|', a.articleType, '|', a.dateCard, '|', a.dateArticle, '|', a.author.name, a.author.role, a.author.avatar.src, '|', a.body.length, 'blocs', '|', a.moreArticles.join(','));

// ---- src/data/journal.ts (textes d'interface + données des 8 articles, ordre de la collection)
const listText = (re) => list.texts.find((t) => re.test(t.text)).text;
const ts = `// Données du périmètre journal (agent journal) — générées par scripts/agents/journal/build-content.mjs
// depuis le DOM rendu de l'original (reference/agents/journal/*.json). Texte exact caractère pour caractère.
// Le corps des articles est dans content/journal/<slug>.md (même structure de balises h3/p).

export const journalPage = {
  route: '/journal',
  metaTitle: ${q(list.title)},
  metaDescription: ${q(list.metaDesc)},
  countLabel: ${q(listText(/^articles$/))},
  countFormat: { prefix: '(', suffix: ')', minDigits: 1 }, // valeur rendue : ${q(listText(/^\(\d+\)$/))}
  heading: ${q(listText(/^our Journal\.$/))},
  intro: { lead: ${q('                           Notes from the studio on process, craft, and ')}, emphasis: ${q('the work behind the work. ')} },
  gridColumns: { desktop: 4, tablet: 2, mobile: 2 },
  rowGap: 40,
  pageSize: 8,
} as const;

export const articlePageUi = {
  backLabel: 'Back to the journal',
  backHref: '/journal',
  authorRoleSuffix: ', Mira',
  shareLabel: 'Share',
  share: [
    { id: 'twitter', ariaLabel: 'Share on Twitter' },
    { id: 'linkedin', ariaLabel: 'Share on LinkedIn' },
    { id: 'email', ariaLabel: 'Share on Email' },
    { id: 'copy', ariaLabel: 'Copy URL to clipboard' },
  ],
  moreLabel: 'From the journal',
  moreHeading: 'More articles.',
  viewAllLabel: 'View All',
  viewAllHref: '/journal',
  cursorLabel: 'Read Article',
} as const;

export const articleTypes = ['Studio Notes', 'Process', 'Craft', 'Opinion'] as const;

// Ordre de la collection CMS « Articles » (= ordre d'affichage ligne par ligne de la grille).
export const articles = ${JSON.stringify(articles.map((a) => ({ demo: true, slug: a.slug, title: a.title, articleType: a.articleType, date: a.date, dateCard: a.dateCard, dateArticle: a.dateArticle, shortDescription: a.shortDescription, introHeader: a.introHeader, mainImage: a.mainImage, author: a.author, metaTitle: a.metaTitle, metaDescription: a.metaDescription, moreArticles: a.moreArticles })), null, 2)} as const;
`;
fs.writeFileSync(path.join(ROOT, 'src/data/journal.ts'), ts);
console.log('journal.ts écrit');
