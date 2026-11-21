// Surcharges de scripts/genpage.mjs : nœuds SSR remplacés par un composant du clone (composants partagés, composants de code).
// match(n, { slug, name, cls }) → bool ; render(n, h) → JSX (h.jsx(enfant), h.attrs(n), h.tx(texte), h.d profondeur).
const attr = (n, k) => n.attrs.find(([a]) => a === k)?.[1];
const find = (n, re) => { const s = attr(n, 'style'); const m = s && s.match(re); if (m) return m[1]; for (const k of n.kids || []) { if (k.tag) { const r = find(k, re); if (r) return r; } } return null; };
const styleCamel = (n) => Object.fromEntries(Object.entries(styleOf(n)).map(([k, v]) => [k.replace(/-([a-z])/g, (_, c) => c.toUpperCase()), v]));
const styleOf = (n) => Object.fromEntries((attr(n, 'style') || '').split(';').filter((d) => d.includes(':')).map((d) => { const i = d.indexOf(':'); return [d.slice(0, i).trim(), d.slice(i + 1).trim()]; }));

// copie du nœud dont le 1er nœud texte devient une expression ; `done` évite de réappliquer la surcharge
const withText = (n, expr) => { let hit = false; const c = (x) => (x.t !== undefined ? (hit ? x : ((hit = true), { expr })) : x.kids ? { ...x, kids: x.kids.map(c) } : x); const r = c(n); r.done = true; return r; };

let counterSeq = 0;
const byName = (n, nm) => { if (attr(n, 'data-framer-name') === nm) return n; for (const k of n.kids || []) { if (k.tag) { const r = byName(k, nm); if (r) return r; } } return null; };
let addonSeq = 0;
const NL = String.fromCharCode(10);
export const OVERRIDES = [
  // Fenêtres vidéo YouTube (D-024) : accueil « Play becomes active here » ; pages projet « Video Overlay » (Play Film).
  {
    match: (n, { slug, cls }) => slug === 'home' && cls.includes('framer-1llc9gt') && !n.done,
    imports: [`import { VideoTrigger } from '@/components/shared/VideoModal';`, `import { reel } from '@/data/homeb';`],
    render: (n, h) => `<VideoTrigger as="${n.tag}" video={{ url: reel.youtube.url, radius: 12, overlayCls: 'framer-m801fr', overlayName: 'Project Reel Overlay', videoCls: 'framer-1vvrwxf-container', videoName: 'Project Reel Video' }}${h.attrs(n)}>${NL}${n.kids.map((k) => h.jsx(k, h.d + 1)).filter(Boolean).join(NL)}${NL}</VideoTrigger>`,
  },
  {
    match: (n, { slug, cls }) => slug.startsWith('projects__') && cls.includes('framer-1kc26e3-container') && !n.done,
    imports: [`import { VideoTrigger } from '@/components/shared/VideoModal';`, `import { projects } from '@/data/projects';`],
    render: (n, h) => `<VideoTrigger as="${n.tag}" video={{ url: projects.find((p) => p.slug === ${JSON.stringify(h.slug.slice(10))})!.youtubeUrl, radius: 12, overlayCls: 'framer-1j1vw8z', videoCls: 'framer-15gpuh9-container', nested: true }}${h.attrs(n)}>${NL}${n.kids.map((k) => h.jsx(k, h.d + 1)).filter(Boolean).join(NL)}${NL}</VideoTrigger>`,
  },
  // Pages projet : « Video Mirror » (composant de l'auteur porté) ; affiche = image du SSR (prop poster de l'instance).
  {
    match: (n, { cls }) => cls.includes('framer-1efyi3-container'),
    imports: [`import { VideoMirror } from '@/components/fx/VideoMirror';`],
    render: (n, h) => {
      const img = (function f(x) { if (x.tag === 'img') return x; for (const k of x.kids || []) { if (k.tag) { const r = f(k); if (r) return r; } } return null; })(n);
      const poster = img ? `{ src: ${JSON.stringify(attr(img, 'src'))}, alt: ${h.tx(attr(img, 'alt') || '')} }` : 'undefined';
      return `<div${h.attrs(n)}><VideoMirror radius={0} poster={${poster}} style={{ height: '100%', width: '100%' }} /></div>`;
    },
  },
  // Calculateur Pricing (accueil) : état partagé autour de la carte, Price Display (total, options), cases à cocher.
  {
    match: (n, { cls }) => cls.includes('framer-189pfpj-container') && !n.done,
    imports: [`import { PricingProvider } from '@/components/fx/Pricing';`],
    render: (n, h) => { addonSeq = 0; h.pricing(+1); const r = `<PricingProvider>${h.jsx({ ...n, done: true }, h.d + 1).trim()}</PricingProvider>`; h.pricing(-1); return r; },
  },
  {
    match: (n, { cls }) => cls.includes('framer-1pl2uqb-container') || cls.includes('framer-z5vqk5-container'),
    imports: [`import { PriceDisplay } from '@/components/fx/Pricing';`],
    render: (n, h) => {
      const d = n.kids.find((k) => k.tag); const inner = d.kids.filter((k) => k.tag && k.tag !== 'span'); const aria = d.kids.find((k) => k.tag === 'span');
      return `<div${h.attrs(n)}><PriceDisplay kind="${attr(n, 'class').includes('1pl2uqb') ? 'total' : 'addons'}"${h.attrs(d)} ariaStyle={${JSON.stringify(styleCamel(aria))}}>${NL}${inner.map((k) => h.jsx(k, h.d + 2)).join(NL)}${NL}</PriceDisplay></div>`;
    },
  },
  {
    match: (n) => n.tag === 'button' && attr(n, 'role') === 'checkbox' && /Add-on Toggle$/.test(attr(n, 'aria-label') || ''),
    imports: [`import { AddonCheck } from '@/components/fx/Pricing';`],
    render: (n, h) => `<AddonCheck i={${addonSeq++ % 4}}${h.attrs(n).replace(/ aria-checked="[^"]*"/, '')}>${NL}${n.kids.map((k) => h.jsx(k, h.d + 1)).filter(Boolean).join(NL)}${NL}</AddonCheck>`,
  },
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
