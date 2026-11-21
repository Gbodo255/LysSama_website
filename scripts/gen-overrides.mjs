// Surcharges de scripts/genpage.mjs : nœuds SSR remplacés par un composant du clone (composants partagés, composants de code).
// match(n, { slug, name, cls }) → bool ; render(n, h) → JSX (h.jsx(enfant), h.attrs(n), h.tx(texte), h.d profondeur).
const attr = (n, k) => n.attrs.find(([a]) => a === k)?.[1];
const find = (n, re) => { const s = attr(n, 'style'); const m = s && s.match(re); if (m) return m[1]; for (const k of n.kids || []) { if (k.tag) { const r = find(k, re); if (r) return r; } } return null; };
const styleOf = (n) => Object.fromEntries((attr(n, 'style') || '').split(';').filter((d) => d.includes(':')).map((d) => { const i = d.indexOf(':'); return [d.slice(0, i).trim(), d.slice(i + 1).trim()]; }));

// copie du nœud dont le 1er nœud texte devient une expression ; `done` évite de réappliquer la surcharge
const withText = (n, expr) => { let hit = false; const c = (x) => (x.t !== undefined ? (hit ? x : ((hit = true), { expr })) : x.kids ? { ...x, kids: x.kids.map(c) } : x); const r = c(n); r.done = true; return r; };

let counterSeq = 0;
const byName = (n, nm) => { if (attr(n, 'data-framer-name') === nm) return n; for (const k of n.kids || []) { if (k.tag) { const r = byName(k, nm); if (r) return r; } } return null; };
export const OVERRIDES = [
  // Accueil : « Text Reveal » (Revelo, GSAP 3.13.0) ; texte d'origine (« Edit text reveal here ») passé comme textComponent.
  {
    match: (n, { name, cls }) => name === 'Text Reveal' && cls.some((c) => c.endsWith('-container')),
    imports: [`import { Revelo } from '@/components/fx/Revelo';`, `import { HOME_TEXT_REVEAL } from '@/data/webgl';`],
    render: (n, h) => `<div${h.attrs(n)}><Revelo {...HOME_TEXT_REVEAL} textComponent={${h.jsx(byName(n, 'Edit text reveal here'), h.d + 1).trim()}} /></div>`,
  },
  // Bandeau « Template Buy Button » : hors périmètre (D-011), non reproduit.
  { match: (n, { name }) => name === 'Template Buy Button', render: () => '{null}' },
  // /projects : vitrine incurvée (composant de l'auteur porté) et ses slots CMS d'origine.
  {
    match: (n, { cls }) => cls.includes('framer-q4xdmx-container'),
    imports: [`import { ProjectsShowcase } from '@/webgl/projects/ProjectsShowcase';`],
    render: (n, h) => `<div${h.attrs(n)}><ProjectsShowcase ${[['slot', 'Projects Source (Slot)'], ['fontSlot', 'Title Font Goes Here'], ['countFontSlot', 'Count Font Goes Here'], ['detailsSlot', 'Card Details (Slot)']].map(([k, nm]) => `${k}={${h.jsx(byName(n, nm), h.d + 1).trim()}}`).join(' ')} /></div>`,
  },
  // Accueil : préchargeur et diaporama WebGL (composants de l'auteur portés) ; slots CMS d'origine passés tels quels.
  {
    match: (n, { name, cls }) => name === 'Site Preloader' && cls.some((c) => c.endsWith('-container')),
    imports: [`import { HomePreloader } from '@/webgl/home/HomeWebgl';`],
    render: (n, h) => `<div${h.attrs(n)}><HomePreloader counterSlot={${h.jsx(byName(n, 'Preloader Progress Font'), h.d + 1).trim()}} /></div>`,
  },
  {
    match: (n, { name, cls }) => name === 'Project Showcase Slider' && cls.some((c) => c.endsWith('-container')),
    imports: [`import { HomeSlider } from '@/webgl/home/HomeWebgl';`],
    render: (n, h) => `<div${h.attrs(n)}><HomeSlider slot={${h.jsx(byName(n, 'Projects Source (Slot)'), h.d + 1).trim()}} /></div>`,
  },
  // 404 : texte 3D filaire (composant de code de l'auteur porté, src/webgl/notfound) dans son conteneur.
  {
    match: (n, { cls }) => cls.includes('framer-nwf2ea-container'),
    imports: [`import { Wireframe404 } from '@/webgl/notfound/Wireframe404';`, `import { NOTFOUND_3D } from '@/data/webgl';`],
    render: (n, h) => `<div${h.attrs(n)}><Wireframe404 {...NOTFOUND_3D} /></div>`,
  },
  // Défilement Lenis (composant de code) : options de l'instance (D-025) ; /projects horizontal.
  {
    match: (n, { name, cls }) => (name === 'Lenis Smooth Scroll' || name === 'Smooth Scroll') && cls.some((c) => c.endsWith('-container')),
    imports: [`import { SmoothScroll } from '@/components/SmoothScroll';`],
    render: (n, h) => `<SmoothScroll${h.slug === 'projects' ? ' orientation="horizontal"' : ''}${h.attrs(n)} />`,
  },
  // Compteurs de /studio (rWbx8J1Z4) : même ordre que studioNumbers.metrics, répété dans chaque variante de breakpoint.
  {
    match: (n, { slug, name }) => slug === 'studio' && name === 'Big Counter' && !n.done,
    imports: [`import { Counter } from '@/components/fx/Counter';`, `import { studioNumbers } from '@/data/studio';`],
    render: (n, h) => `<Counter as="${n.tag}" m={studioNumbers.metrics[${counterSeq++ % 4}]}${h.attrs(n)}>${String.fromCharCode(10)}${n.kids.map((k) => h.jsx(k)).filter(Boolean).join(String.fromCharCode(10))}${String.fromCharCode(10)}${'  '.repeat(h.d)}</Counter>`,
  },
  // « Form Button » (ES, framer-8H41b) : composant validé du footer, état lu dans le formulaire.
  {
    match: (n, { cls }) => n.tag === 'button' && cls.includes('framer-8H41b'),
    imports: [`import { FormButtonFx } from '@/components/forms/FormFx';`],
    render: (n, h) => {
      const txt = (x) => (x.t !== undefined ? x.t : (x.kids || []).map(txt).join(''));
      const top = (function f(x) { if (attr(x, 'data-framer-name') === 'top') return x; for (const k of x.kids || []) { if (k.tag) { const r = f(k); if (r) return r; } } return null; })(n);
      const bg = find(n, /background-color:\s*(var\([^;]*\)\)|[^;]+)/);
      const fg = find(n, /--variable-reference-odJoTSF6e-oYhWrTjTX:\s*(var\([^;]*\)\)|[^;]+)/);
      return `<FormButtonFx label={${h.tx(txt(top).trim())}} color={${JSON.stringify(bg)}} textColor={${JSON.stringify(fg)}} style={${JSON.stringify(Object.fromEntries(Object.entries(styleOf(n)).filter(([k]) => k !== 'opacity')))}}${attr(n, 'name') ? ` name={${JSON.stringify(attr(n, 'name'))}}` : ''} />`;
    },
  },
  // Compteur d'articles du journal (composant de code, SSR « 6 », rendu « (8) ») : nombre d'articles de src/data/journal.ts.
  {
    match: (n, { name }) => name === 'Article Count Font' && !n.done,
    imports: [`import { articles } from '@/data/journal';`],
    rewrite: (n) => withText(n, '`(${articles.length})`'),
  },
  // « Shared Navigation Links » (jv) : composant partagé validé (src/components/nav/parts.tsx), compteur « (6) » calculé.
  {
    match: (n, { cls }) => cls.includes('framer-Z2aNj'),
    imports: [`import { NavLinks } from '@/components/nav/parts';`],
    render: (n) => {
      const c = attr(n, 'class');
      const variant = /framer-v-1fd22pg/.test(c) ? 'top' : /framer-v-1c01me7/.test(c) ? 'topTablet' : /framer-v-1mkgfd6/.test(c) ? 'phone' : 'desktop';
      const color = find(n, /--variable-reference-E_W5ZRHAy-PcHoncs7C:\s*(var\([^;]*\)\)|[^;]+)/);
      return `<NavLinks variant="${variant}" color={${JSON.stringify(color)}} ${attr(n, "name") ? ` nameAttr={${JSON.stringify(attr(n, "name"))}}` : ""} style={${JSON.stringify(styleOf(n))}} />`;
    },
  },
];
