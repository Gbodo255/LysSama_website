// Données de l'accueil, sections 06 à 11 (agent homeb). Texte exact de l'original, caractère pour caractère.
// Sources : module de route J_la0crr… et modules vL1rEwvHQ, NIqbhJ1MS, n_03H18N2, pgtQfyOCv (docs/audit/homeb.md).
// Chemins d'images : URL d'origine (à remplacer par le chemin local du manifest à l'intégration).

export const process = {
  label: "Ma méthode",
  index: 6,
  headline: { before: 'How we carry every project from brief to ', accent: 'launch', after: ' day.' },
  bigText: { lead: ' ', body: 'Nothing falls through the cracks, because there are no cracks.', tail: ' One team, one plan, one room. ' },
  smallText: "Tu as une seule interlocutrice et un seul calendrier. Les nouvelles arrivent avant que tu les demandes.",
  steps: [
    { title: "Échange.", description: "Un appel ou un message : ta marque, ton public et ce que tu veux raconter.", image: { src: 'https://framerusercontent.com/images/qFx0jVWZOTXHIO7pJZv4u9II6pc.jpg', width: 1920, height: 1280, alt: '' } },
    { title: "Idée.", description: "Un angle créatif, discuté et validé avant de tourner quoi que ce soit.", image: { src: 'https://framerusercontent.com/images/oFVfmzxyuOiWHh75wpJjFBD4v30.jpg', width: 1920, height: 1280, alt: '' } },
    { title: "Création.", description: "Look, tournage, montage et texte. Tu valides avant publication.", image: { src: 'https://framerusercontent.com/images/KbaOaL2nPH8aFx7C9W4y1tSaK0I.jpg', width: 1920, height: 2560, alt: '' } },
    { title: "Diffusion.", description: "Je publie, je partage avec la communauté et je suis les réactions.", image: { src: 'https://framerusercontent.com/images/gWmaJhufEDCtHLXnEYjX9fqOykM.webp', width: 1600, height: 1070, alt: '' } },
  ],
};

export const reel = {
  duration: "FInAB 2026",
  play: 'Play',
  label: "Vidéo",
  thumbnailVideo: 'https://framerusercontent.com/assets/P6zBrhqzsUREEaheE1XVmPcM6M.mp4',
  thumbnailImage: { src: 'https://framerusercontent.com/images/ifw30dMETSOlZDGwqwQVUxIALY.jpg', width: 2048, height: 1080, alt: '' },
  // fenêtre superposée : lecteur YouTube, lecture auto, son actif
  youtube: { url: 'https://www.youtube.com/watch?v=6aioEoCdBJw', autoplay: true, muted: false },
  demo: true,
};

export const testimonials = {
  label: "Ce qu’ils en disent",
  index: 7,
  heading: "temps forts.",
  description: { lead: ' ', grey: ' THE WORK SPEAKS FOR ITSELF,', rest: ' BUT THE PEOPLE WE BUILT IT WITH SAY IT BETTER.' },
  slides: [
    {
      counter: '01 / 03', bigText: 'Gucci finally has a site that shows the frames the way our customers already saw them.',
      smallText: 'We used to explain what we were making. Mira built us a site that doesn\'t need explanation. It just shows what the frames are, and lets people fall for them.',
      name: "Lys Sama", role: "Créatrice de contenu", company: 'Gucci',
      metrics: [{ value: "10 jours", description: "j’aime" }, { value: '+240%', description: "commentaires" }],
      image: { src: 'https://framerusercontent.com/images/XCY5hpPBRBS6cdWzaAWas5dffkA.jpg', width: 640, height: 640, alt: "Lys Sama" },
      demo: true,
    },
    {
      counter: '02 / 03', bigText: 'Mira built a brand for a category that usually gets shouted at.',
      smallText: 'Every skincare brief we saw came back loud. Jin came back quiet. The result is the first skincare site I\'ve ever wanted to send to a friend.',
      name: 'Rafael Costa', role: "Créatrice de contenu", company: 'Chanel',
      metrics: [{ value: "#modebeninoise", description: "j’aime" }, { value: "#stylistebeninois", description: 'in first month' }],
      image: { src: 'https://framerusercontent.com/images/kmNPpdMzKtgnYgsr9piGQpLv0.jpg', width: 640, height: 640, alt: 'Rafael Costa' },
      demo: true,
    },
    {
      counter: '03 / 03', bigText: 'Mira understood weather. And gear. And what it feels like to trust both.',
      smallText: 'The site feels like standing outside in a good jacket. Nothing extra. Just enough. Jin never overexplained, and neither does the brand now.',
      name: 'Henrik Vinje', role: "Créatrice de contenu", company: 'Oslo',
      metrics: [{ value: "#tissuimprimé", description: 'autumn drop cleared' }, { value: '2 retailers', description: 'picked up at launch' }],
      image: { src: 'https://framerusercontent.com/images/foJh1zwI8ZAzyJVfsEgIaSkdMjk.jpg', width: 640, height: 640, alt: 'Henrik Vinje' },
      demo: true,
    },
  ],
  // affichage : '“' + bigText + ' ”' ; ligne rôle : role + ', ' + company
  quoteOpen: '“',
  quoteClose: ' ”',
};

export const pricing = {
  label: "Tarifs",
  index: 8,
  headline: { before: 'KNOW THE NUMBER ', accent: "D’AVANCE." },
  description: ' Two ways to work together: month to month, or one fixed-scope project. ',
  startsAt: "À partir de",
  ssrPlaceholder: { total: '$2,000', addons: '+$0' }, // texte SSR remplacé à l'hydratation
  baseLabel: "Base",
  addonsLabel: 'Add-ons',
  includedLabel: 'included',
  addonsTitle: 'Add-ons',
  // total = base + somme des options cochées ; format '$' + toLocaleString('en-US', 0 décimale) ; animation 0.6 s easeOut
  modes: [
    {
      id: 'monthly', tab: "Mensuel", suffix: "/mois", base: 4500,
      included: ["Une demande en cours à la fois", "Retouches incluses", "Délais prioritaires", "Pause ou arrêt à tout moment"],
      addons: [
        { title: "Vidéo supplémentaire", price: 1000 },
        { title: "Stories et Threads", price: 800 },
        { title: "Direction du shooting", price: 1200 },
        { title: "Textes et légendes", price: 900 },
      ],
    },
    {
      id: 'project', tab: "Ponctuel", suffix: '/project', base: 12000,
      included: ['Brand identity', 'Website design & build in Framer', 'Copy direction', '3 review rounds'],
      addons: [
        { title: "Vidéo supplémentaire", price: 3000 },
        { title: "Stories et Threads", price: 2400 },
        { title: "Direction du shooting", price: 3500 },
        { title: "Textes et légendes", price: 2800 },
      ],
    },
  ],
  addonAriaSuffix: 'Add-on Toggle', // aria-label = titre + 'Add-on Toggle' (sans espace, comme l'original)
  qualifier: "*Montants d’exemple : les tarifs réels figurent dans le media kit de Lys.",
  cta: { label: "Lancer un projet", href: '/contact' },
  demo: true,
};

export const faq = {
  label: "Réponses",
  index: 9,
  heading: 'FAQ.',
  items: [
    { question: 'What\'s the difference between monthly and per project?', answer: 'A project has an end date. We build the brand and the site, hand it over, and it\'s yours. Membership is for what comes after, or instead of it. $4,500 a month keeps one active request moving, and you pause any month you don\'t need us.' },
    { question: "Où trouver les tarifs ?", answer: 'It\'s a real starting number, not a teaser. Scope is the only thing that moves it: an extra page, a second brand direction, a deadline that needs two of us. We lock the figure on the first call and it holds from there.' },
    { question: "Sur quelles plateformes ?", answer: "Surtout TikTok (@lys.sama pour la mode et la culture africaine, @lys__sama pour la création de contenu), mais aussi Instagram et Threads." },
    { question: "Qui crée le contenu ?", answer: "Moi. Tu travailles avec Lys, tu obtiens Lys : je porte les looks, j’écris, je tourne et je publie." },
    { question: "De quoi as-tu besoin pour commencer ?", answer: "Une présentation de ta marque ou de ta collection et une personne qui peut valider. Plus l’objectif est clair, plus on avance vite." },
    { question: "Tu fais aussi de la stratégie ?", answer: "Oui. Je suis stratège digitale : j’interviens à plusieurs étapes de la production et de la diffusion de contenu, pas seulement devant la caméra." },
  ],
  contact: {
    title: "d’autres questions ?",
    text: 'Reach out anytime. We\'re happy to answer before you commit to working together.',
    email: 'hello@mira.studio',
    href: 'mailto:melyssa.kekelipro@gmail.com',
    avatars: [
      { src: 'https://framerusercontent.com/images/I0Zin8u1THTGGeYzoOdXdo8LGQ8.jpg', alt: '' },
      { src: 'https://framerusercontent.com/images/jnuF1GFrbXtojrngr7MkxH565Q.jpg', alt: '' },
      { src: 'https://framerusercontent.com/images/r24iki3ocpS0eDELKDxFqrtWvE.jpg', alt: '' },
    ],
  },
  demo: true,
};

export const bookCall = {
  index: 10,
  form: {
    fields: [
      { label: "Je m’appelle", name: 'Name', type: 'text', placeholder: "Nom *", required: true },
      { label: "je viens de", name: 'Company', type: 'text', placeholder: "Marque ou atelier", required: false },
      { label: "et j’ai besoin de", name: 'I need help with', type: 'text', placeholder: "Ce service", required: false },
      { label: "voici l’idée :", name: 'Pitch', type: 'textarea', placeholder: "Une ou deux phrases sur le projet…*", required: true },
      { label: "mon budget est d’environ", name: 'Budget', type: 'text', placeholder: '$10k', required: false },
      {
        label: "et j’aimerais commencer", name: 'Start', type: 'select', required: true,
        options: [
          { title: "Quand…", value: '', disabled: true },
          { title: "Au plus vite", value: 'ASAP' },
          { title: "Dans le mois", value: "Dans le mois" },
          { title: "Ce trimestre", value: "Ce trimestre" },
          { title: "Je me renseigne", value: "Je me renseigne" },
        ],
      },
      { label: "joignable à", name: 'Email', type: 'email', placeholder: "E-mail *", required: true },
    ],
    consent: { before: 'By submitting, you agree to our ', terms: 'terms', middle: ' and', space: ' ', privacy: 'privacy policy.' },
    submit: "Lancer un projet",
    errorLabel: 'Error, Try Again',
    successDelayMs: 800,
  },
  success: {
    steps: ['Received', 'Review', 'Discovery'],
    text: 'Your brief has landed on our desks. I\'ll personally review it and get back to you within 24 hours.',
  },
  label: "Me contacter",
  availability: { before: '2 slots for ', month: "August '26" },
  author: { name: "Lys Sama", role: "Créatrice de contenu", image: { src: 'https://framerusercontent.com/images/I0Zin8u1THTGGeYzoOdXdo8LGQ8.jpg', alt: "Portrait de Lys Sama" } },
  background: { src: 'https://framerusercontent.com/images/EYivEG50p7YL92jdB9h51wLz4iU.jpg', width: 2400, height: 1808, alt: '' },
  heading: { before: "Let's make you ", accent: 'impossible', after: ' to ignore.' },
  subtitle: { lead: ' ', grey: " Tell us what you're building. ", rest: "We'll tell you how we'd make it land." },
  phone: { label: "WhatsApp pro", href: 'tel:+18054501432', target: '_blank' },
  email: { label: "melyssa.kekelipro@gmail.com", href: 'mailto:melyssa.kekelipro@gmail.com', target: '_blank' },
  steps: [
    { index: '01', title: "Une réponse, de moi directement.", text: "Pas de robot, pas d’intermédiaire : je lis chaque message moi-même." },
    { index: '02', title: "Un premier échange.", text: "Thirty minutes to understand your goals, audience, and what's not working." },
    { index: '03', title: "Une proposition claire.", text: "Le format, le calendrier et le tarif, posés à l’écrit avant de commencer." },
  ],
  legalLinks: { terms: './terms-conditions', privacy: './privacy-policy' },
  // textes du module non visibles à l'état initial (variante d'étape / popup), placement à confirmer
  hiddenTexts: { stepTime: 'Within 24 hours', stepText: "We'll review your submission and send a quick acknowledgment." },
  demo: true,
};

export const journal = {
  label: "Du journal",
  index: 11,
  heading: 'articles.',
  viewAll: { label: "Tout voir", href: './journal' },
  limit: 4,
  // contenu CMS (collection journal), ordre d'affichage de l'original
  articles: [
    { category: "(Carnet de Lys)", title: "Porter les créateurs de Cotonou.", date: '6/15/26', iso: '2026-06-15', slug: 'fewer-projects-more-attention', image: { src: 'https://framerusercontent.com/images/QScxeG0hFA9OqTSpKLf3gz2xrk.jpeg', width: 1501, height: 1047, alt: "Gros plan de lèvres rouges brillantes" }, demo: true },
    { category: "(Avis)", title: "Awards don't build brands.", date: '5/5/26', iso: '2026-05-05', slug: 'awards-dont-build-brands', image: { src: 'https://framerusercontent.com/images/flVP3AWr4maQWn3qiFyeFYgkc.jpeg', width: 904, height: 1200, alt: "Silhouette en noir et blanc encadrée par des mains tendues" }, demo: true },
    { category: "(Coulisses)", title: "Muse au FInAB 2026.", date: '4/3/26', iso: '2026-04-03', slug: 'why-we-quote-fixed', image: { src: 'https://framerusercontent.com/images/ZpxY6EqIMMqzzyJ6gL7tXpVEO5E.jpg', width: 2040, height: 1148, alt: "Cheval noir portant une guirlande de fleurs dans un champ" }, demo: true },
    { category: "(Univers)", title: "ゆめ, le rêve en signature.", date: '3/20/26', iso: '2026-03-20', slug: 'the-best-type-is-invisible', image: { src: 'https://framerusercontent.com/images/6oZOHgmZZVkcK3G0Wiee0kkF5AI.jpg', width: 1537, height: 2041, alt: "Main chromée tendue près d’un halo de lumière arc-en-ciel" }, demo: true },
  ],
};
