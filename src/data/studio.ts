// Contenu de la page /studio (texte exact de l'original, caractère pour caractère).
// Sources : module de route NwlKyBR… + DOM rendu (reference/agents/studio/dom-*.json).
// Équipe, clients, journal, prise de contact : composants partagés (src/data des agents homea/homeb).

export const studioHero = {
  title: 'the studio.',
  // 27 espaces d'indentation en tête (rendu : white-space conservé, texte justifié)
  lede: '                           A brand and web studio for founders who care how they’re seen. Small on purpose, and personal by design.',
  basedInLabel: 'based in',
  locations: ['los angeles', 'tokyo'],
  servicesLabel: 'Services',
  services: ['Brand Identity', 'Web Design', 'Framer Dev', 'Art Direction'],
  background: {
    src: '/assets/images/Fcz0H6OyRLSzO1j6CmBZCeoCrYA.jpg',
    original: 'https://framerusercontent.com/images/Fcz0H6OyRLSzO1j6CmBZCeoCrYA.jpg',
    width: 2816,
    height: 1536,
    alt: '',
  },
};

export const studioCulture = {
  label: 'Our culture.',
  images: [
    {
      src: '/assets/images/nSbtH034kMtV4RIIQvLQWKUqNE.jpg',
      original: 'https://framerusercontent.com/images/nSbtH034kMtV4RIIQvLQWKUqNE.jpg',
      width: 1920,
      height: 2560,
      alt: 'Black and white photo of the studio team posing together',
    },
    {
      src: '/assets/images/0d8RfpcfGGwdXWT0Qp7kuUbdgo.png',
      original: 'https://framerusercontent.com/images/0d8RfpcfGGwdXWT0Qp7kuUbdgo.png',
      width: 1920,
      height: 1280,
      alt: 'Black and white photo of the team playing table football',
    },
  ],
  // indentation : span de 26 espaces ; « own name on. » est dans un span séparé dans l'original
  statementIndent: '                          ',
  statement: 'We care about details most people never notice. We argue about kerning and mean it. Everyone here has taste and gets to use it. Nothing leaves the studio that we wouldn’t put our',
  statementEnd: ' own name on.',
};

export const studioNumbers = {
  label: 'by the numbers.',
  ssrPlaceholder: '+0%',
  metrics: [
    { start: 0, end: 12, decimals: 0, prefix: '', suffix: '', description: 'industries we’ve shipped in', demo: true },
    { start: 0, end: 3, decimals: 0, prefix: '', suffix: '', description: 'people max on any project', demo: true },
    { start: 0, end: 24, decimals: 0, prefix: '', suffix: 'hr', description: 'longest you’ll wait for a reply', demo: true },
    { start: 0, end: 92, decimals: 0, prefix: '', suffix: '%', description: 'of our launches are still live', demo: true },
  ],
};

export const studioPrinciples = {
  title: 'What guides us.',
  items: [
    { count: 1, number: '01', title: 'You talk to the maker.', text: 'No account layer, no handoffs. The person in your calls is the person in the file.' },
    { count: 2, number: '02', title: 'Scope is set before we start.', text: 'Price, timeline, and deliverables on paper before day one. Surprises are a design flaw.' },
    { count: 3, number: '03', title: 'We say no early.', text: 'If design is not your real problem, we will tell you in the first call and point you somewhere better.' },
    { count: 4, number: '04', title: 'You own the work.', text: 'Every file, font, and license comes with the handoff. Nothing stays hostage in our drive.' },
  ],
};

export const awards = {
  title: 'Awards.',
  range: '(2012-26©)',
  labels: { awardedBy: 'Awarded by', award: 'Award', year: 'year' },
  items: [
    { organization: 'Awwwards', award: 'Site of the Day', date: '2026-01-01T00:00:00.000Z', year: '2026', lineDelay: 0.1, demo: true },
    { organization: 'FWA', award: 'FWA of the day', date: '2025-01-01T00:00:00.000Z', year: '2025', lineDelay: 0.2, demo: true },
    { organization: 'CSS design awards', award: 'Website of the day', date: '2024-01-01T00:00:00.000Z', year: '2024', lineDelay: 0.3, demo: true },
    { organization: 'Awwwards', award: 'Honorable Mention', date: '2023-01-01T00:00:00.000Z', year: '2023', lineDelay: 0.4, demo: true },
  ],
};

// Composants partagés utilisés par la page, avec leurs propriétés d'instance (module de route).
export const studioShared = {
  team: { nodeId: 'b8Sr4iAT1', module: 'jvKQE_ghl', variants: { desktop: 'nyB2hDezr', tablet: 'vmZ77DTLy', phone: 'UU2nT8yjn' } },
  clients: { nodeId: 'j5aYpocx_', module: 'jvKQE_ghl', variants: { desktop: 'FsjNXJSJN', tablet: 'kDO0BDS0T', phone: 'uUtPUWNo6' } },
  journal: { nodeId: 'IG23J3JvE', module: 'pgtQfyOCv', title: 'articles.', variants: { desktop: 'w3iaWhFRY', tablet: 'RBcJngtnI', phone: 'nPNyXOlRD' } },
  contact: { nodeId: 'dnCTHsXKw', module: 'n_03H18N2', variants: { desktop: 'k2n70lu6B', tablet: 'fA3TTozUq', phone: 'szTNrZI4n' } },
};
