// Données de /contact et des pages légales (agent contact, docs/audit/contact.md).
// Textes exacts de l'original (casse source ; l'affichage en capitales vient du text-transform des presets).
// Contact CTA (formulaire, étapes) et FAQ : mêmes composants que l'accueil → src/data/homeb.ts (`bookCall`, `faq`),
// seule différence ici : index de section 0 = index masqué.

export const contactHero = {
  title: "travailler ensemble.",
  // 27 espaces de tête = retrait de première ligne (texte justifié) ; 1re partie en gris (token 82d92470).
  intro: {
    indent: '                           ',
    muted: 'Book a 30-minute call or send us a message. ',
    strong: "Je réponds personnellement à chaque demande.",
  },
  address: {
    label: "Basée à",
    value: "Cotonou, Bénin",
    demo: true,
  },
  officeHours: {
    label: "Collaborations", // dans <strong>
    value: "Créatrices, créateurs, marques : parlons de votre projet.",
    demo: true,
  },
};

export const contactSections = {
  bookCall: { sectionCount: 0, showIndex: false, label: "Me contacter", showVideo: false, videoUrl: '' },
  faq: { sectionCount: 0, showIndex: false, label: "Réponses" },
};

export const contactCta = {
  image: { src: '/assets/images/EYivEG50p7YL92jdB9h51wLz4iU.jpg', width: 2400, height: 1808, alt: '', demo: true },
  founder: { name: "Lys Sama", role: "Créatrice de contenu", avatar: '/assets/images/I0Zin8u1THTGGeYzoOdXdo8LGQ8.jpg', alt: "Portrait de Lys Sama", demo: true },
  slots: { before: "Collaborations", month: "August '26", demo: true },
  heading: { before: "Let's make you", accent: 'impossible', after: "béninoise." },
  subheading: { muted: "Tell us what you're building.", strong: "We'll tell you how we'd make it land." },
  phone: { label: "WhatsApp pro", href: 'tel:+18054501432', target: '_blank', demo: true },
  email: { label: "melyssa.kekelipro@gmail.com", href: 'mailto:melyssa.kekelipro@gmail.com', target: '_blank', demo: true },
  formAction: 'https://api.framer.com/forms/v1/forms/c71bee6d-c169-40fa-bab9-1ec6105cfe8a/submit',
  steps: [
    { index: '01', title: "Une réponse, de moi directement.", text: "Pas de robot, pas d’intermédiaire : je lis chaque message moi-même." },
    { index: '02', title: "Un premier échange.", text: "Thirty minutes to understand your goals, audience, and what's not working." },
    { index: '03', title: "Une proposition claire.", text: "Le format, le calendrier et le tarif, posés à l’écrit avant de commencer." },
  ],
  demo: true,
};

export const contactFaqAvatars = [
  { src: '/assets/images/I0Zin8u1THTGGeYzoOdXdo8LGQ8.jpg', alt: '', demo: true },
  { src: '/assets/images/r24iki3ocpS0eDELKDxFqrtWvE.jpg', alt: '', demo: true },
  { src: '/assets/images/jnuF1GFrbXtojrngr7MkxH565Q.jpg', alt: '', demo: true },
];

// Corps : content/legal/<slug>.md. Date affichée = toLocaleString('en-US', { dateStyle: 'short', timeZone: 'UTC' }).
export const legalPages = [
  {
    slug: 'privacy-policy',
    title: "Confidentialité.",
    lastUpdatedLabel: "Dernière mise à jour",
    datetime: '2026-07-28T00:29:40.343Z',
    lastUpdated: '7/28/26',
    intro: 'MIRA STUDIO ("WE," "OUR," OR "US") RESPECTS YOUR PRIVACY. THIS PRIVACY POLICY EXPLAINS WHAT INFORMATION WE COLLECT WHEN YOU VISIT OUR WEBSITE OR ENGAGE THE STUDIO, HOW WE USE IT, AND THE CHOICES YOU HAVE. THIS POLICY APPLIES TO ALL VISITORS AND CLIENTS OF MIRA STUDIO.',
    demo: true,
  },
  {
    slug: 'terms-conditions',
    title: "Conditions d’utilisation.",
    lastUpdatedLabel: "Dernière mise à jour",
    datetime: '2026-07-10T20:21:50.799Z',
    lastUpdated: '7/10/26',
    intro: "CES CONDITIONS ENCADRENT L’UTILISATION DU SITE DE LYS SAMA ET DES COLLABORATIONS PROPOSÉES. EN UTILISANT LE SITE OU EN PROPOSANT UNE COLLABORATION, TU LES ACCEPTES. SI TU N’ES PAS D’ACCORD, MERCI DE NE PAS UTILISER LE SITE.",
    demo: true,
  },
  {
    slug: 'cookie-policy',
    title: "Cookies.",
    lastUpdatedLabel: "Dernière mise à jour",
    datetime: '2026-07-10T20:22:00.842Z',
    lastUpdated: '7/10/26',
    intro: "LES COOKIES SONT DE PETITS FICHIERS TEXTE ENREGISTRÉS SUR TON APPAREIL QUAND TU VISITES CE SITE. CETTE POLITIQUE EXPLIQUE QUELS COOKIES LE SITE DE LYS SAMA UTILISE, POURQUOI, ET COMMENT LES CONTRÔLER. NOUS EN UTILISONS LE MOINS POSSIBLE.",
    demo: true,
  },
];

export const legalIntroIndent = '                           '; // 27 espaces (27 spans nowrap vides dans le SSR)
