// Génère content/projects/<slug>.md (frontmatter = champs CMS « Projects » w_hvy7l6n) et src/data/projects.ts
// depuis reference/agents/projects/cms-<slug>.json + public/assets/manifest.json.
// usage : node scripts/agents/projects/gen.mjs
import fs from 'node:fs';
import path from 'node:path';
const ROOT = path.resolve(import.meta.dirname, '../../..');
const SLUGS = ['gucci', 'chanel', 'puma', 'adidas', 'nike', 'under-armour'];
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'public/assets/manifest.json'), 'utf8'));
const local = (url) => { if (!url) return null; const k = url.split('?')[0]; const m = manifest[k]; if (!m) throw new Error('absent du manifest : ' + k); return m.local; };
const img = (v) => (v ? { src: local(v.src), original: v.src.split('?')[0], width: v.pixelWidth, height: v.pixelHeight, alt: v.alt ?? '' } : null);
const CATEGORIES = JSON.parse(fs.readFileSync(path.join(ROOT, 'reference/agents/projects/categories.json'), 'utf8'));
const GALLERY = { Vsh44i8lz: 'Full Width', U8gj7s6BY: '2 Columns', ldIMQY7_d: '3 Columns ' };
const yy = (iso) => `'${new Date(iso).toLocaleString('en-US', { timeZone: 'UTC', year: '2-digit' })}©`;
const projects = [];
for (const slug of SLUGS) {
  const c = JSON.parse(fs.readFileSync(path.join(ROOT, `reference/agents/projects/cms-${slug}.json`), 'utf8'));
  const r = c.record;
  const services = c.queries.find((q) => q.q.includes('725586fd')).rows.map((s) => ({ id: s.id, title: s.daMMVtIRY, slug: s.TDdrxis4e }));
  const more = c.queries.find((q) => q.keys === 9).rows.map((x) => x.UxQzAcVgo);
  // Champs CMS, titres exacts du schéma (toplevel-deps.BY2s547D.mjs, collection « Projects »).
  const fm = {
    id: r.id, slug, demo: true,
    projectTitle: r.Q2VN_FZXh, category: CATEGORIES[slug] /* non sélectionnée par la page projet : lue sur /projects */, date: r.XdZ8EYmm9,
    mainImage: img(r.motPAdhqw), showVideo: r.lqxb5gqxK, videoFile: r.AO3U_VSSA ? { src: local(r.AO3U_VSSA), original: r.AO3U_VSSA } : null,
    videoUrl: r.iRUlzL14O, youtubeUrl: r.vkVXFuZrL,
    shortDescription: r.wIuMDe0hy, timeline: r.PcbIEPCaR, liveLink: r.bvpPdoiPt, services,
    clientLogo: r.dqAPAmEvi, aboutClient: r.Usl1EzDAE,
    sectionLabel1: r.jyTIAHrZM, bigText: r.paMDsE_W9, smallText: r.IKIECD6Us,
    image1: img(r.LYsGN5UeN), image2: img(r.hmCznUGgv), image3: img(r.hJGB7xex2),
    sectionLabel2: r.XQKxVkYWk, bigText2: r.bx3Ej5cqO, smallText2: r.qecbb7JIU,
    galleryColumns: GALLERY[r.Fda4gII6i], gallery: r.L6jVTThCQ.map((g) => ({ id: g.id, image: img(g.mRgTbxzpP) })),
    sectionLabel3: r.cAF6SIeDV, bigText3: r.upYF7jAES, smallText3: r.VWv6rEQ3s,
    metrics: r.FAbuGm6q1.map((m) => ({ id: m.id, metric: m.dkvW8ALXd, label: m.eZNgU_zYG, description: m.lHRlmhtZ1, number: m.jEPMksr4i })),
    sectionLabel4: r.m5tVX6dkp, quoteBigText: r.tvoTyTZNo, quoteSmallText: r.RyRTzO3ND,
    authorName: r.FzliK3Vxu, authorRole: r.DS3aFwMAX, authorImage: img(r.JuRuMI9B_),
    moreProjects: more,
  };
  // Textes dérivés affichés (code du module de route _5OYj0…, composants JKo4PdE_2 et koAJndPrk).
  fm.display = { year: yy(r.XdZ8EYmm9), quote: `“ ${r.tvoTyTZNo} ”`, metrics: fm.metrics.map((m) => ({ count: String(m.number).padStart(2, '0'), label: `(${m.label})` })) };
  projects.push(fm);
  const yaml = Object.entries(fm).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join('\n');
  fs.mkdirSync(path.join(ROOT, 'content/projects'), { recursive: true });
  fs.writeFileSync(path.join(ROOT, `content/projects/${slug}.md`), `---\n${yaml}\n---\n`);
}
console.assert(yy('2026-07-08T00:00:00.000Z') === "'26©", 'année');
const ts = `// Généré par scripts/agents/projects/gen.mjs depuis le JSON d'hydratation (reference/agents/projects/cms-*.json).\n// Collection CMS « Projects » (w_hvy7l6n). Contenu de démonstration : vraies marques, chiffres et citations inventés.\n\nexport const projectsCollection = ${JSON.stringify({ id: 'w_hvy7l6n', displayName: 'Projects', order: SLUGS }, null, 2)} as const;\n\nexport const projects = ${JSON.stringify(projects, null, 2)} as const;\n`;
fs.writeFileSync(path.join(ROOT, 'src/data/projects.ts'), ts);
console.log('ok', projects.length);
