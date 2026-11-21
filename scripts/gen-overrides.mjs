// Surcharges de scripts/genpage.mjs : nœuds SSR remplacés par un composant du clone (composants partagés, composants de code).
// match(n, { slug, name, cls }) → bool ; render(n, h) → JSX (h.jsx(enfant), h.attrs(n), h.tx(texte), h.d profondeur).
const attr = (n, k) => n.attrs.find(([a]) => a === k)?.[1];
const find = (n, re) => { const s = attr(n, 'style'); const m = s && s.match(re); if (m) return m[1]; for (const k of n.kids || []) { if (k.tag) { const r = find(k, re); if (r) return r; } } return null; };
const styleOf = (n) => Object.fromEntries((attr(n, 'style') || '').split(';').filter((d) => d.includes(':')).map((d) => { const i = d.indexOf(':'); return [d.slice(0, i).trim(), d.slice(i + 1).trim()]; }));

export const OVERRIDES = [
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
