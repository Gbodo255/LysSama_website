// Contenu de la page /studio (texte exact de l'original, caractère pour caractère).
// Sources : module de route NwlKyBR… + DOM rendu (reference/agents/studio/dom-*.json).
// Équipe, clients, journal, prise de contact : composants partagés (src/data des agents homea/homeb).

export const studioHero = {
  title: 'the studio.',
  // 27 espaces d'indentation en tête (rendu : white-space conservé, texte justifié)
  lede: '                           A brand and web studio for founders who care how they’re seen. Small on purpose, and personal by design.',
  basedInLabel: "basée à",
  locations: ["cotonou", 'tokyo'],
  servicesLabel: 'Services',
  services: ["Contenu mode", "Collaborations", "Stratégie digitale", "Rédaction web"],
  background: {
    src: '/assets/images/Fcz0H6OyRLSzO1j6CmBZCeoCrYA.jpg',
    original: 'https://framerusercontent.com/images/Fcz0H6OyRLSzO1j6CmBZCeoCrYA.jpg',
    width: 2816,
    height: 1536,
    alt: '',
  },
};

export const studioCulture = {
  label: "Mon univers.",
  images: [
    {
      src: '/assets/images/nSbtH034kMtV4RIIQvLQWKUqNE.jpg',
      original: 'https://framerusercontent.com/images/nSbtH034kMtV4RIIQvLQWKUqNE.jpg',
      width: 1920,
      height: 2560,
      alt: "Photo en noir et blanc d’une équipe posant ensemble",
    },
    {
      src: '/assets/images/0d8RfpcfGGwdXWT0Qp7kuUbdgo.png',
      original: 'https://framerusercontent.com/images/0d8RfpcfGGwdXWT0Qp7kuUbdgo.png',
      width: 1920,
      height: 1280,
      alt: "Photo en noir et blanc d’une partie de baby-foot",
    },
  ],
  // indentation : span de 26 espaces ; « own name on. » est dans un span séparé dans l'original
  statementIndent: '                          ',
  statement: "Sur TikTok, je porte et raconte le travail des stylistes de Cotonou, je donne mon avis sans filtre sur les tendances et je participe aux trends qui célèbrent la fierté béninoise. Chaque contenu porte mon",
  statementEnd: ' own name on.',
};

export const studioNumbers = {
  label: "en quelques chiffres.",
  ssrPlaceholder: '0',
  metrics: [
    { start: 0, end: 2, decimals: 0, prefix: '', suffix: '', description: 'comptes TikTok, mode et création', demo: true },
    { start: 0, end: 390, decimals: 0, prefix: '', suffix: '', description: 'abonnés sur Threads, environ', demo: true },
    { start: 0, end: 25, decimals: 0, prefix: '', suffix: 'k', description: 'posts publiés sur X, environ', demo: true },
    { start: 0, end: 258, decimals: 0, prefix: '', suffix: '', description: 'j’aime sur la vidéo FInAB 2026', demo: true },
  ],
};

export const studioPrinciples = {
  title: "Ce qui me guide.",
  items: [
    { count: 1, number: '01', title: "Tu parles à la créatrice.", text: "Pas d’intermédiaire : la personne avec qui tu échanges est celle qui crée." },
    { count: 2, number: '02', title: "Le cadre est posé avant de commencer.", text: "Format, calendrier et tarif sont écrits avant le premier jour. Les surprises, très peu pour moi." },
    { count: 3, number: '03', title: "Je dis non tôt.", text: "Si ton projet ne correspond pas à mon univers, je te le dis dès le premier échange." },
    { count: 4, number: '04', title: "Les créateurs sont cités.", text: "Chaque styliste, chaque créateur dont je porte le travail est nommé et mis en avant." },
  ],
};

export const awards = {
  title: "Temps forts.",
  range: '(2012-26©)',
  labels: { awardedBy: "Événement", award: 'Award', year: 'year' },
  items: [
    { organization: 'Awwwards', award: "Muse de Kisito Kora", date: '2026-01-01T00:00:00.000Z', year: '2026', lineDelay: 0.1, demo: true },
    { organization: 'FWA', award: "Première édition", date: '2025-01-01T00:00:00.000Z', year: '2025', lineDelay: 0.2, demo: true },
    { organization: "Linktree pro", award: "Media kit et contact", date: '2024-01-01T00:00:00.000Z', year: '2024', lineDelay: 0.3, demo: true },
    { organization: 'Awwwards', award: "Équipe blog @agoodojie", date: '2023-01-01T00:00:00.000Z', year: '2023', lineDelay: 0.4, demo: true },
  ],
};

// Composants partagés utilisés par la page, avec leurs propriétés d'instance (module de route).
export const studioShared = {
  team: { nodeId: 'b8Sr4iAT1', module: 'jvKQE_ghl', variants: { desktop: 'nyB2hDezr', tablet: 'vmZ77DTLy', phone: 'UU2nT8yjn' } },
  clients: { nodeId: 'j5aYpocx_', module: 'jvKQE_ghl', variants: { desktop: 'FsjNXJSJN', tablet: 'kDO0BDS0T', phone: 'uUtPUWNo6' } },
  journal: { nodeId: 'IG23J3JvE', module: 'pgtQfyOCv', title: "articles.", variants: { desktop: 'w3iaWhFRY', tablet: 'RBcJngtnI', phone: 'nPNyXOlRD' } },
  contact: { nodeId: 'dnCTHsXKw', module: 'n_03H18N2', variants: { desktop: 'k2n70lu6B', tablet: 'fA3TTozUq', phone: 'szTNrZI4n' } },
};
