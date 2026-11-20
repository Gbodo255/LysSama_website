// Données de /contact et des pages légales (agent contact, docs/audit/contact.md).
// Textes exacts de l'original (casse source ; l'affichage en capitales vient du text-transform des presets).
// Contact CTA (formulaire, étapes) et FAQ : mêmes composants que l'accueil → src/data/homeb.ts (`bookCall`, `faq`),
// seule différence ici : index de section 0 = index masqué.

export const contactHero = {
  title: 'start a project.',
  // 27 espaces de tête = retrait de première ligne (texte justifié) ; 1re partie en gris (token 82d92470).
  intro: {
    indent: '                           ',
    muted: 'Book a 30-minute call or send us a message. ',
    strong: 'We respond within 24 hours.',
  },
  address: {
    label: 'Address',
    value: '2800 East Observatory Road Los Angeles, USA 90027',
    demo: true,
  },
  officeHours: {
    label: 'Office Hours', // dans <strong>
    value: 'Monday to Friday: 9:00 AM – 6:00 PM',
    demo: true,
  },
};

export const contactSections = {
  bookCall: { sectionCount: 0, showIndex: false, label: 'Book a call', showVideo: false, videoUrl: '' },
  faq: { sectionCount: 0, showIndex: false, label: 'Answers' },
};

export const contactCta = {
  image: { src: '/assets/images/EYivEG50p7YL92jdB9h51wLz4iU.jpg', width: 2400, height: 1808, alt: '', demo: true },
  founder: { name: 'Jin Yuen', role: 'Founder', avatar: '/assets/images/I0Zin8u1THTGGeYzoOdXdo8LGQ8.jpg', alt: 'Portrait of Jin Yuen', demo: true },
  slots: { before: '2 slots for', month: "August '26", demo: true },
  heading: { before: "Let's make you", accent: 'impossible', after: 'to ignore.' },
  subheading: { muted: "Tell us what you're building.", strong: "We'll tell you how we'd make it land." },
  phone: { label: '+1 (805) 450 1432', href: 'tel:+18054501432', target: '_blank', demo: true },
  email: { label: 'hello@mira.studio', href: 'mailto:hello@mira.studio', target: '_blank', demo: true },
  formAction: 'https://api.framer.com/forms/v1/forms/c71bee6d-c169-40fa-bab9-1ec6105cfe8a/submit',
  steps: [
    { index: '01', title: 'You hear back within a day.', text: 'From the founder, not a form-bot. We read every enquiry personally.' },
    { index: '02', title: 'A short discovery call.', text: "Thirty minutes to understand your goals, audience, and what's not working." },
    { index: '03', title: 'A fixed-quote proposal.', text: 'Clear scope, clear timeline, clear price. No surprises later.' },
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
    title: 'Privacy Policy.',
    lastUpdatedLabel: 'Last updated',
    datetime: '2026-07-28T00:29:40.343Z',
    lastUpdated: '7/28/26',
    intro: 'MIRA STUDIO ("WE," "OUR," OR "US") RESPECTS YOUR PRIVACY. THIS PRIVACY POLICY EXPLAINS WHAT INFORMATION WE COLLECT WHEN YOU VISIT OUR WEBSITE OR ENGAGE THE STUDIO, HOW WE USE IT, AND THE CHOICES YOU HAVE. THIS POLICY APPLIES TO ALL VISITORS AND CLIENTS OF MIRA STUDIO.',
    demo: true,
  },
  {
    slug: 'terms-conditions',
    title: 'Terms & Conditions.',
    lastUpdatedLabel: 'Last updated',
    datetime: '2026-07-10T20:21:50.799Z',
    lastUpdated: '7/10/26',
    intro: 'THESE TERMS AND CONDITIONS GOVERN YOUR USE OF THE MIRA STUDIO WEBSITE AND THE PROJECTS, SERVICES, AND TEMPLATES WE PROVIDE. BY USING OUR SITE OR ENGAGING US FOR WORK, YOU AGREE TO THESE TERMS. IF YOU DO NOT AGREE, PLEASE DO NOT USE THE SITE OR ENGAGE THE STUDIO.',
    demo: true,
  },
  {
    slug: 'cookie-policy',
    title: 'Cookies.',
    lastUpdatedLabel: 'Last updated',
    datetime: '2026-07-10T20:22:00.842Z',
    lastUpdated: '7/10/26',
    intro: 'COOKIES ARE SMALL TEXT FILES STORED ON YOUR DEVICE WHEN YOU VISIT OUR WEBSITE. THIS POLICY EXPLAINS WHICH COOKIES MIRA STUDIO USES, WHY WE USE THEM, AND HOW YOU CAN CONTROL THEM. WE KEEP COOKIE USE TO A MINIMUM.',
    demo: true,
  },
];

export const legalIntroIndent = '                           '; // 27 espaces (27 spans nowrap vides dans le SSR)
