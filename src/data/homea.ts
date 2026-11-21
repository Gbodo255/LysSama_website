// Accueil `/` — Hero → Meet the team (agent homea). Textes exacts du HTML SSR
// (reference/agents/homea/ssr-texts.txt) ; médias = chemins locaux de public/assets/manifest.json.
// Espaces de tête : retrait de première ligne présent dans le texte d'origine (conservé).

export const homeHero = {
  logo: { name: 'mira', trademark: '®', descriptor: 'Studio', href: './', ariaLabel: 'home' },
  nav: [
    { label: "projets", href: './projects', count: 6 }, // rendu « (6) »
    { label: "À propos", href: './studio' },
    { label: "Journal", href: './journal' },
  ],
  intro:
    '                      Mira is a studio for founders who care how they’re seen. We turn good work into a presence that earns attention — and closes the gap between who you are and how you look.',
  locationLabel: "basée à",
  locations: ["cotonou", 'tokyo'],
  servicesLabel: 'Services',
  services: ["Contenu mode", "Collaborations", "Stratégie digitale", "Rédaction web"],
  contactLabel: "parlons-en",
  contactButton: { href: './contact', ariaLabel: 'contact', image: '/assets/images/I0Zin8u1THTGGeYzoOdXdo8LGQ8.jpg', alt: '' },
  slides: [
    { label: "FInAB 2026", aria: 'GUCCI', href: './projects/gucci', image: '/assets/images/uQzt05iescwLlC6DKg4M1qwR6o.jpg', alt: "Gros plan d’un mannequin aux lunettes de soleil enveloppantes couvertes de gouttes d’eau", video: '/assets/videos/o74zvFwrxG1ofp4gdhRqo1Ujgk.mp4', demo: true },
    { label: "Stylistes", aria: 'CHANEL', href: './projects/chanel', image: '/assets/images/7lmRyzySl3tRUJAR0FTAuBtPBtM.jpg', alt: "Mannequin appliquant une crème sur sa joue devant un fond clair", video: null, demo: true },
    { label: "Tissus", aria: 'PUMA', href: './projects/puma', image: '/assets/images/NuuceAGvddP5JL0LEhEjp8bdnM.jpg', alt: "Coureur en veste de pluie rouge et casquette noire sur une côte brumeuse", video: '/assets/videos/LYIGz8CY670o999qJep8WeHqgzM.mp4', demo: true },
    { label: "Trends", aria: 'ADIDAS', href: './projects/adidas', image: '/assets/images/r7Srjn5YojuM8eQrAW1Mlzsb4.jpg', alt: "Gros plan d’une joueuse de tennis tressée regardant par-dessus sa raquette", video: null, demo: true },
  ],
  // annonce accessible du slider : « Slide 1 of 4: GUCCI » ; vignettes : « Go to slide 1: GUCCI »
  slideAnnounce: 'Slide {n} of {total}: {name}',
  thumbAria: 'Go to slide {n}: {name}',
};

export const homeAbout = {
  label: { count: '(01)', text: "À propos" },
  headline: {
    before: '                 WE BUILD BRANDS FOR FOUNDERS WHO ',
    accent: 'REFUSE',
    after: ' TO BLEND IN. FEWER PROJECTS, MORE ATTENTION, AND A STUDIO SMALL ENOUGH THAT THE PERSON YOU HIRE IS THE PERSON DOING THE WORK.',
  },
  founder: { name: "Lys Sama", role: "Créatrice de contenu", image: '/assets/images/TuRLGK3mEZRYyPgrKdtjwj6TKxM.jpeg', alt: "Portrait de Lys Sama", demo: true },
  eyebrow: "(Ma vision)",
  quote: "“ Mes réseaux sont une vitrine pour la création béninoise. ”",
  smallText: {
    muted: 'Design isn\'t decoration — it\'s the fastest way to be understood. Every project is built around one question: ',
    strong: "est-ce que ça met en valeur ceux qui la créent ?",
  },
  link: { label: "Découvrir Lys", href: './studio' },
};

export const homeWork = {
  // <br> forcés entre les lignes ; « ONE » en couleur d'accent (token f277370d)
  title: [{ text: '50 BRANDS. ' }, { text: '14 YEARS. ' }, { text: "UN", accent: true, rest: ' STANDARD.' }],
  demo: true,
  button: { label: "Tout voir", count: '6', href: './projects', video: '/assets/videos/o74zvFwrxG1ofp4gdhRqo1Ujgk.mp4', poster: '/assets/images/uQzt05iescwLlC6DKg4M1qwR6o.jpg' },
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
  label: { count: '(02)', text: "Collaborations" },
  years: "2025 2026©",
  avatars: [
    { image: '/assets/images/foJh1zwI8ZAzyJVfsEgIaSkdMjk.jpg', alt: '' },
    { image: '/assets/images/XCY5hpPBRBS6cdWzaAWas5dffkA.jpg', alt: '' },
    { image: '/assets/images/qV50KoxOEdTy8EP8lnobhyGqbzE.jpg', alt: '' },
  ],
  count: '+47',
  rating: { strong: '4.9', muted: " com." },
  trusted: { muted: "Aux côtés de", rest: ' 50+ clients' },
  logos: ['Mcdonalds', 'Uber', 'Intel', 'Apple'], // composants SVG de jvKQE_ghl ; liste/ordre complets à vérifier
  demo: true,
};

export const homeWhyUs = {
  label: { count: '(03)', text: "Pourquoi moi" },
  headline: { before: 'why Mira® is your ', accent: 'next', after: ' choice.' },
  supporting: {
    lead: '                          WITHIN SIX MONTHS OF LAUNCH, CLIENTS SEE AN AVERAGE 47% LIFT IN QUALIFIED INBOUND, ',
    muted: "UNE COMMUNAUTÉ QUI RÉAGIT, PAS QUI FAIT DÉFILER.",
  },
  footnote: "*Chiffres publics relevés sur TikTok en novembre 2026.",
  graph: {
    brand: "Avec Lys",
    top: "258 j’aime",
    bottomLabel: "Commentaires",
    bottom: '+12%',
    ticks: ['0%', '8%', '16%', '24%', '32%', '40%', '48%'],
    caption: "Réactions à la vidéo FInAB 2026 avec Kisito Kora",
  },
  card: {
    heading: "DE VRAIS CRÉATEURS. DE VRAIS LOOKS. ZÉRO FILTRE.",
    description: "La mode béninoise, portée et racontée de l’intérieur.",
    stats: [
      { value: '50+', label: "comptes TikTok" },
      { value: '100%', label: "made in Bénin" },
    ],
  },
  metrics: [
    { count: '01', value: "10 jours", label: "(FINAB 2026, COTONOU)", description: "Du 20 février au 1er mars 2026, pour la première FInAB Fashion Week." },
    { count: '02', value: '40+', label: "(LA COMMUNAUTÉ LYSAMI.E.S)", description: "Happy clients are the only marketing channel we've ever needed." },
  ],
  quote: {
    lead: 'NOT EVERY BRIEF IS A FIT. ',
    muted: 'WE TAKE ON WORK WHERE DESIGN IS ACTUALLY THE PROBLEM. ',
    rest: "WHEN IT ISN'T, WE'LL TELL YOU.",
  },
  author: { name: "Lys Sama", role: "Créatrice de contenu", image: '/assets/images/I0Zin8u1THTGGeYzoOdXdo8LGQ8.jpg', alt: "Portrait de Lys Sama" },
  cta: { label: "Lancer un projet", href: './contact' },
  demo: true,
};

export const homeServices = {
  label: { count: '(04)', text: "Ce que j’apporte" },
  heading: 'services.',
  description: {
    lead: '                          Everything you need to look established, and nothing you don’t. ',
    muted: "Chaque collaboration est cadrée avant de commencer.",
  },
  cardPrefix: 'S.',
  deliveryLabel: "Format",
  includesLabel: 'includes',
  cta: { label: "Lancer un projet", href: './contact' },
  cards: [
    { count: '(01)', title: "Contenu mode.", price: "Tarif dans le media kit", description: "Looks portés et racontés sur TikTok et Instagram, pour les stylistes et créateurs.", delivery: "Selon le projet", includes: ["Idée et mise en scène", "Tournage du look", "Montage et légende", "Publication"], image: '/assets/images/HBR3eOr0XBTGww0Lb6ZuOVFmics.jpg', alt: "Mains tenant des canettes OMG au-dessus d’un billard", open: true, demo: true },
    { count: '(02)', title: "Collaborations.", price: "Tarif dans le media kit", description: "Placements et partenariats de marque, dans le ton de ma communauté.", delivery: "Selon le projet", includes: ["Vidéos TikTok", "Publications Instagram", "Stories et Threads", "Mise en avant de la marque"], image: '/assets/images/Q2yUtgoIkkiZN1HbPx6lDdzQ5MM.jpg', alt: "Ordinateur portable posé sur une chaise blanche affichant un site", open: false, demo: true },
    { count: '(03)', title: "Stratégie digitale.", price: "Tarif dans le media kit", description: "Accompagnement des marques, de l’idée du contenu à sa diffusion.", delivery: "Selon le projet", includes: ["Ligne éditoriale", "Choix des plateformes", "Calendrier de publication", "Suivi des résultats"], image: '/assets/images/7A9ugBPbexLNiH3INz3cZ7U8xtI.jpg', alt: "Coin d’un téléphone noir imprimé « Made for Creatives »", open: false, demo: true },
    { count: '(04)', title: "Rédaction web.", price: "Tarif dans le media kit", description: "Des textes clairs pour ton site, ton blog ou tes réseaux.", delivery: "Selon le projet", includes: ["Articles de blog", "Textes de site", "Légendes et accroches", "Relecture"], image: '/assets/images/PS60XMyUZk3sS97cmhWOwmpR1o.jpg', alt: "Deux mannequins au rouge à lèvres orange posant joue contre joue", open: false, demo: true },
  ],
};

export const homeTeam = {
  est: ' LYS SAMA ゆめ',
  label: { count: '(05)', text: "Les facettes de Lys" },
  // « SMALL » et « STAY PICKY » portent chacun une couleur propre (variables 1qn201 / 1fiaym du composant)
  headline: [
    { text: '                 WE STAYED ' },
    { text: "UNE", accent: true },
    { text: ' SO WE COULD ' },
    { text: "PLUSIEURS VOIX", accent: true },
    { text: ". MODE, CULTURE, OPINIONS, ART : CHAQUE COMPTE A SON ANGLE, ET TOUS RACONTENT LA MÊME CRÉATRICE." },
  ],
  membersLabel: "(4) Facettes",
  members: [
    { name: "Lys Sama", role: "Créatrice de contenu", image: '/assets/images/mYGjKrp0gW5PReDsl8CDmODKzoc.jpeg', alt: "Portrait de Lys Sama", demo: true },
    { name: "@lys__sama", role: "Création de contenu", image: '/assets/images/O83WqKF5apvVU9qmpgDRLbAvWyo.jpg', alt: "Portrait — compte @lys__sama", demo: true },
    { name: "@ErmitePasNette", role: "Opinions et art", image: '/assets/images/OJ7FFbgKuSOxXFrM0pc3gbYUoBI.jpg', alt: "Portrait — compte @ErmitePasNette", demo: true },
    { name: "lysami.e.s", role: "La communauté", image: '/assets/images/h0uF4ecVvj33A97za3PYY3KMg.jpg', alt: "Portrait — communauté lysami.e.s", demo: true },
  ],
  hiring: {
    title: "join us, we're hiring.",
    text: "Suis-moi sur TikTok, Instagram, Threads et X pour la mode, la culture et les coulisses.",
    number: '02',
    positions: "Mes réseaux",
    cta: { label: "M’écrire", href: null }, // placeholder d'origine : <a> sans href
    photo: { image: '/assets/images/aln56RYSsLI44dsw9rKWKszI.jpg', alt: "Équipe en discussion dans un atelier lumineux" },
    demo: true,
  },
};
