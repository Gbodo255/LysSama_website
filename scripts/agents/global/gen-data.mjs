// Génère src/data/global.ts à partir des mesures (meta.json) et du manifest — chaînes exactes, JSON.stringify.
import fs from 'node:fs';
const meta = JSON.parse(fs.readFileSync('reference/agents/global/meta.json', 'utf8'));
const man = JSON.parse(fs.readFileSync('public/assets/manifest.json', 'utf8'));
const local = (url) => { const e = man[url.split('?')[0]]; if (!e) throw new Error('absent du manifest : ' + url); return e.local ?? e.path ?? e.file; };
const asset = (url, alt) => ({ src: local(url), original: url, alt });
const J = (v) => JSON.stringify(v, null, 2);

const PAGE_META = {};
for (const [route, o] of Object.entries(meta)) {
  const m = o.meta;
  PAGE_META[route] = {
    title: o.title, description: m.description, canonical: o.links.find((l) => l.rel === 'canonical').href,
    ogType: m['og:type'], ogTitle: m['og:title'], ogDescription: m['og:description'], ogImage: m['og:image'], ogImageLocal: local(m['og:image']),
    twitterCard: m['twitter:card'], twitterTitle: m['twitter:title'], twitterDescription: m['twitter:description'], twitterImage: m['twitter:image'],
    robots: m.robots,
  };
}
const icons = meta['/'].links.filter((l) => l.rel !== 'canonical').map((l) => ({ rel: l.rel, media: l.media, href: local(l.href), original: l.href }));
const contactPhoto = asset('https://framerusercontent.com/images/Jfjs0nvrWkQ5vWOcalwIPI1ovEU.jpeg?width=655&height=744', '');
const SOCIAL = [
  { id: 'x', label: 'X', ariaLabel: 'X Link', href: 'https://x.com', target: '_blank', placeholder: true },
  { id: 'instagram', label: 'IG', ariaLabel: 'Instagram Link', href: 'https://instagram.com', target: '_blank', placeholder: true },
  { id: 'dribbble', label: 'Dribbble', ariaLabel: 'Dribbble Link', href: 'https://dribbble.com', target: '_blank', placeholder: true },
  { id: 'behance', label: 'Behance', ariaLabel: 'Behance Link', href: 'https://behance.com', target: '_blank', placeholder: true },
];
const NAV = {
  logo: { href: '/', ariaLabel: 'home' },
  links: [
    { label: 'Home', href: '/' },
    { label: 'projects', href: '/projects', count: '(6)' },
    { label: 'Studio', href: '/studio' },
    { label: 'Journal', href: '/journal' },
  ],
  pageBarLinks: ['/projects', '/studio', '/journal'],
  establishedTag: ' EST. 2012',
  contactLabel: "let's talk",
  contactButton: { href: '/contact', ariaLabel: 'contact', photo: contactPhoto },
  copyright: { year: '2026', name: 'MIRA', symbol: '®', statement: 'All rights reserved.' },
};
const FOOTER = {
  newsletter: {
    intro: [
      { text: '                      A LETTER, ONCE A MONTH. ', tone: 'dark' },
      { text: 'New work from the studio, fresh thinking from the founder, the occasional opinion.', tone: 'muted' },
      { text: ' No filler. SUBSCRIBE BELOW.', tone: 'dark' },
    ],
    input: { type: 'email', name: 'Email', placeholder: 'Enter your email', required: true },
    button: { label: 'Join Now', error: 'Error, Try Again' },
    consent: { name: 'Agreed to terms / privacy', required: true, before: 'By signing up, you’re agreeing to our ', linkLabel: 'privacy policy.', href: '/privacy-policy' },
    originalAction: 'https://api.framer.com/forms/v1/forms/27a96a9c-7735-4436-88cf-6e806682dbd7/submit',
    validation: {
      empty: 'Please fill out this field.',
      invalidAbc: "Please include an '@' in the email address. 'abc' is missing an '@'.",
      consent: 'Please check this box if you want to proceed.',
    },
    demo: true,
  },
  legalLabel: 'legal',
  legal: [
    { label: 'Privacy Policy.', href: '/privacy-policy' },
    { label: 'Terms & Conditions.', href: '/terms-conditions' },
    { label: 'Cookies.', href: '/cookie-policy' },
  ],
  contactLabel: 'let’s talk',
  wordmark: { name: 'mira', symbol: '®', descriptor: 'Studio' },
};
const out = `// Données globales (navigation, footer, newsletter, réseaux, métadonnées par page).
// Généré par scripts/agents/global/gen-data.mjs depuis reference/agents/global/meta.json et public/assets/manifest.json.
// Textes exacts de l'original (docs/audit/global.md). Ne pas éditer à la main : relancer le script.

export const SOCIAL = ${J(SOCIAL)} as const;

export const NAV = ${J(NAV)} as const;

export const FOOTER = ${J(FOOTER)} as const;

export const SITE_ICONS = ${J(icons)} as const;

export const PAGE_META = ${J({ ...PAGE_META, _demo: true })} as const;
`;
fs.writeFileSync('src/data/global.ts', out);
console.log('ok', Object.keys(PAGE_META).length, 'routes');
