// Accueil `/` — Hero → Meet the team (agent homea). Textes exacts du HTML SSR
// (reference/agents/homea/ssr-texts.txt) ; médias = chemins locaux de public/assets/manifest.json.
// Espaces de tête : retrait de première ligne présent dans le texte d'origine (conservé).

export const homeHero = {
  logo: { name: 'mira', trademark: '®', descriptor: 'Studio', href: './', ariaLabel: 'home' },
  nav: [
    { label: 'projects', href: './projects', count: 6 }, // rendu « (6) »
    { label: 'Studio', href: './studio' },
    { label: 'Journal', href: './journal' },
  ],
  intro:
    '                      Mira is a studio for founders who care how they’re seen. We turn good work into a presence that earns attention — and closes the gap between who you are and how you look.',
  locationLabel: 'based in',
  locations: ['los angeles', 'tokyo'],
  servicesLabel: 'Services',
  services: ['Brand Identity', 'Web Design', 'Framer Dev', 'Art Direction'],
  contactLabel: 'let’s talk',
  contactButton: { href: './contact', ariaLabel: 'contact', image: '/assets/images/I0Zin8u1THTGGeYzoOdXdo8LGQ8.jpg', alt: '' },
  slides: [
    { label: 'Gucci', aria: 'GUCCI', href: './projects/gucci', image: '/assets/images/uQzt05iescwLlC6DKg4M1qwR6o.jpg', alt: 'Close-up of a model wearing wraparound sunglasses covered in water droplets', video: '/assets/videos/o74zvFwrxG1ofp4gdhRqo1Ujgk.mp4', demo: true },
    { label: 'Chanel', aria: 'CHANEL', href: './projects/chanel', image: '/assets/images/7lmRyzySl3tRUJAR0FTAuBtPBtM.jpg', alt: 'Model applying face cream to her cheek against a pale background', video: null, demo: true },
    { label: 'Puma', aria: 'PUMA', href: './projects/puma', image: '/assets/images/NuuceAGvddP5JL0LEhEjp8bdnM.jpg', alt: 'Runner in a red rain jacket and black cap on a misty coastline', video: '/assets/videos/LYIGz8CY670o999qJep8WeHqgzM.mp4', demo: true },
    { label: 'Adidas', aria: 'ADIDAS', href: './projects/adidas', image: '/assets/images/r7Srjn5YojuM8eQrAW1Mlzsb4.jpg', alt: 'Close-up of a tennis player with braids looking over her racket', video: null, demo: true },
  ],
  // annonce accessible du slider : « Slide 1 of 4: GUCCI » ; vignettes : « Go to slide 1: GUCCI »
  slideAnnounce: 'Slide {n} of {total}: {name}',
  thumbAria: 'Go to slide {n}: {name}',
};

export const homeAbout = {
  label: { count: '(01)', text: 'About us' },
  headline: {
    before: '                 WE BUILD BRANDS FOR FOUNDERS WHO ',
    accent: 'REFUSE',
    after: ' TO BLEND IN. FEWER PROJECTS, MORE ATTENTION, AND A STUDIO SMALL ENOUGH THAT THE PERSON YOU HIRE IS THE PERSON DOING THE WORK.',
  },
  founder: { name: 'Jin Yuen', role: 'Founder', image: '/assets/images/TuRLGK3mEZRYyPgrKdtjwj6TKxM.jpeg', alt: 'Portrait of Jin Yuen', demo: true },
  eyebrow: '(My philosophy)',
  quote: '“ I started Mira because I kept watching great people lose to worse competitors with better presence. ”',
  smallText: {
    muted: 'Design isn\'t decoration — it\'s the fastest way to be understood. Every project is built around one question: ',
    strong: 'does this actually move the business forward?',
  },
  link: { label: 'See the studio', href: './studio' },
};

export const homeWork = {
  // <br> forcés entre les lignes ; « ONE » en couleur d'accent (token f277370d)
  title: [{ text: '50 BRANDS. ' }, { text: '14 YEARS. ' }, { text: 'ONE', accent: true, rest: ' STANDARD.' }],
  demo: true,
  button: { label: 'See all', count: '6', href: './projects', video: '/assets/videos/o74zvFwrxG1ofp4gdhRqo1Ujgk.mp4', poster: '/assets/images/uQzt05iescwLlC6DKg4M1qwR6o.jpg' },
  media: [
    { video: '/assets/videos/V3ybBeZxp5aiQvQwxbsc72F4V4.mp4', poster: '/assets/images/WigME9FAJdZx9jQu2PhxXL8Pc9M.jpg' },
    { image: '/assets/images/kP9y3f68sbv1icRVUmBXDlIfu0I.png', alt: '' },
    { image: '/assets/images/Pvg65dRGYEkffGzS24z71aAheT0.jpg', alt: '' },
    { image: '/assets/images/BOaxMUc8EHCGgQUwQ0NELClE1U.jpg', alt: '' },
    { video: '/assets/videos/LYIGz8CY670o999qJep8WeHqgzM.mp4', poster: '/assets/images/NuuceAGvddP5JL0LEhEjp8bdnM.jpg' },
    { video: '/assets/videos/rjNIvMHRogDJaHfneCJlZtXM.mp4', poster: '/assets/images/FbhJf8mYmDiQSJihxpqFmhRJxU.jpg' },
    { image: '/assets/images/AgAKhYFyXNgfrvcXhbkrSnOv8.jpg', alt: '' },
  ],
};

export const homeClients = {
  label: { count: '(02)', text: 'Our clients' },
  years: '2012 2026©',
  avatars: [
    { image: '/assets/images/foJh1zwI8ZAzyJVfsEgIaSkdMjk.jpg', alt: '' },
    { image: '/assets/images/XCY5hpPBRBS6cdWzaAWas5dffkA.jpg', alt: '' },
    { image: '/assets/images/qV50KoxOEdTy8EP8lnobhyGqbzE.jpg', alt: '' },
  ],
  count: '+47',
  rating: { strong: '4.9', muted: '/5' },
  trusted: { muted: 'Trusted by', rest: ' 50+ clients' },
  logos: ['Mcdonalds', 'Uber', 'Intel', 'Apple'], // composants SVG de jvKQE_ghl ; liste/ordre complets à vérifier
  demo: true,
};

export const homeWhyUs = {
  label: { count: '(03)', text: 'Why us' },
  headline: { before: 'why Mira® is your ', accent: 'next', after: ' choice.' },
  supporting: {
    lead: '                          WITHIN SIX MONTHS OF LAUNCH, CLIENTS SEE AN AVERAGE 47% LIFT IN QUALIFIED INBOUND, ',
    muted: 'MEASURED ACROSS PRE AND POST-LAUNCH PERFORMANCE.',
  },
  footnote: '*Across client launches from 2023 to 2026, measured over the first six months post-launch.',
  graph: {
    brand: 'With Mira',
    top: '+47% inbound',
    bottomLabel: 'Industry avg',
    bottom: '+12%',
    ticks: ['0%', '8%', '16%', '24%', '32%', '40%', '48%'],
    caption: 'Average growth in qualified enquiries, first six months after launch',
  },
  card: {
    heading: 'REAL BRANDS. REAL NUMBERS. ZERO HANDOFFS.',
    description: 'Most clients come back for the next project. The rest send referrals.',
    stats: [
      { value: '50+', label: 'brands launched' },
      { value: '100%', label: 'shipped on time' },
    ],
  },
  metrics: [
    { count: '01', value: '6 Wks', label: '(AVERAGE TIME TO LAUNCH)', description: 'Most projects go from first call to live site in under two months.' },
    { count: '02', value: '40+', label: '(REFERRALS SENT BY CLIENTS)', description: "Happy clients are the only marketing channel we've ever needed." },
  ],
  quote: {
    lead: 'NOT EVERY BRIEF IS A FIT. ',
    muted: 'WE TAKE ON WORK WHERE DESIGN IS ACTUALLY THE PROBLEM. ',
    rest: "WHEN IT ISN'T, WE'LL TELL YOU.",
  },
  author: { name: 'Jin Yuen', role: 'Founder, Mira', image: '/assets/images/I0Zin8u1THTGGeYzoOdXdo8LGQ8.jpg', alt: 'Portrait of Jin Yuen' },
  cta: { label: 'Start a project', href: './contact' },
  demo: true,
};

export const homeServices = {
  label: { count: '(04)', text: 'What we bring' },
  heading: 'services.',
  description: {
    lead: '                          Everything you need to look established, and nothing you don’t. ',
    muted: 'Each service is priced and scoped before we start.',
  },
  cardPrefix: 'S.',
  deliveryLabel: 'Delivery time',
  includesLabel: 'includes',
  cta: { label: 'Start a project', href: './contact' },
  cards: [
    { count: '(01)', title: 'Brand Identity.', price: 'Starts at $4,500', description: 'Logo, type, color, and the system that keeps it consistent everywhere it lives.', delivery: '2-3 weeks', includes: ['Logo and wordmark', 'Typography system', 'Color palette', 'Brand guidelines'], image: '/assets/images/HBR3eOr0XBTGww0Lb6ZuOVFmics.jpg', alt: 'Hands holding OMG drink cans over a pool table', open: true, demo: true },
    { count: '(02)', title: 'Web Design.', price: 'Starts at $6,500', description: 'Sites built to turn attention into enquiries, not just look good.', delivery: '3-4 weeks', includes: ['Up to 6 unique page designs', 'Mobile and tablet layouts', 'Component library', 'Hand-off documentation'], image: '/assets/images/Q2yUtgoIkkiZN1HbPx6lDdzQ5MM.jpg', alt: 'Laptop on a white chair showing a website design', open: false, demo: true },
    { count: '(03)', title: 'Framer Dev.', price: 'Starts at $4,000', description: 'Fast, animated, and easy for you to update yourself.', delivery: '2-3 weeks', includes: ['Pixel-perfect build in Framer', 'CMS setup and migration', 'Responsive across breakpoints', '30-day post-launch support'], image: '/assets/images/7A9ugBPbexLNiH3INz3cZ7U8xtI.jpg', alt: 'Corner of a black phone printed with Made for Creatives', open: false, demo: true },
    { count: '(04)', title: 'Art Direction.', price: 'Starts at $3,500', description: 'Photography, motion, and the visual language that ties everything together.', delivery: '2 weeks', includes: ['Mood and direction boards', 'Shoot or motion brief', 'Asset selection and edit', 'Usage guidelines'], image: '/assets/images/PS60XMyUZk3sS97cmhWOwmpR1o.jpg', alt: 'Two models with bold orange lipstick posing cheek to cheek', open: false, demo: true },
  ],
};

export const homeTeam = {
  est: ' EST. 2012',
  label: { count: '(05)', text: 'Meet the team' },
  // « SMALL » et « STAY PICKY » portent chacun une couleur propre (variables 1qn201 / 1fiaym du composant)
  headline: [
    { text: '                 WE STAYED ' },
    { text: 'SMALL', accent: true },
    { text: ' SO WE COULD ' },
    { text: 'STAY PICKY', accent: true },
    { text: '. EVERY PERSON ON A PROJECT IS THERE BECAUSE THE WORK NEEDED THEM, NOT BECAUSE THEY HAPPENED TO BE FREE.' },
  ],
  membersLabel: '(4) Team Members',
  members: [
    { name: 'Jin Yuen', role: 'Founder', image: '/assets/images/mYGjKrp0gW5PReDsl8CDmODKzoc.jpeg', alt: 'Portrait of Jin Yuen', demo: true },
    { name: 'Sarah Park', role: 'Designer', image: '/assets/images/O83WqKF5apvVU9qmpgDRLbAvWyo.jpg', alt: 'Portrait of Sarah Park', demo: true },
    { name: 'Alex West', role: 'Client Manager', image: '/assets/images/OJ7FFbgKuSOxXFrM0pc3gbYUoBI.jpg', alt: 'Portrait of Alex West', demo: true },
    { name: 'David Torres', role: 'Developer', image: '/assets/images/h0uF4ecVvj33A97za3PYY3KMg.jpg', alt: 'Portrait of David Torres', demo: true },
  ],
  hiring: {
    title: "join us, we're hiring.",
    text: 'We’re looking for highly ambitious and talented people to help us drive real growth.',
    number: '02',
    positions: 'Open Positions',
    cta: { label: 'Email us', href: null }, // placeholder d'origine : <a> sans href
    photo: { image: '/assets/images/aln56RYSsLI44dsw9rKWKszI.jpg', alt: 'Studio team talking in a bright workshop' },
    demo: true,
  },
};
