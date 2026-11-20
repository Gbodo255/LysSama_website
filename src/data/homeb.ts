// Données de l'accueil, sections 06 à 11 (agent homeb). Texte exact de l'original, caractère pour caractère.
// Sources : module de route J_la0crr… et modules vL1rEwvHQ, NIqbhJ1MS, n_03H18N2, pgtQfyOCv (docs/audit/homeb.md).
// Chemins d'images : URL d'origine (à remplacer par le chemin local du manifest à l'intégration).

export const process = {
  label: 'The Process',
  index: 6,
  headline: { before: 'How we carry every project from brief to ', accent: 'launch', after: ' day.' },
  bigText: { lead: ' ', body: 'Nothing falls through the cracks, because there are no cracks.', tail: ' One team, one plan, one room. ' },
  smallText: 'You get one point of contact and one shared timeline. Updates arrive before you think to ask for them.',
  steps: [
    { title: 'Discovery.', description: 'One call, one sharp brief. Your goals, your audience, and what’s in the way.', image: { src: 'https://framerusercontent.com/images/qFx0jVWZOTXHIO7pJZv4u9II6pc.jpg', width: 1920, height: 1280, alt: '' } },
    { title: 'Strategy.', description: 'One creative direction, argued for and agreed — before a single pixel moves.', image: { src: 'https://framerusercontent.com/images/oFVfmzxyuOiWHh75wpJjFBD4v30.jpg', width: 1920, height: 1280, alt: '' } },
    { title: 'Design.', description: 'Brand and site designed, then built in Framer. Three rounds, sharp ones.', image: { src: 'https://framerusercontent.com/images/KbaOaL2nPH8aFx7C9W4y1tSaK0I.jpg', width: 1920, height: 2560, alt: '' } },
    { title: 'Launch.', description: 'We ship, hand over the keys, and stay close for thirty days after go-live.', image: { src: 'https://framerusercontent.com/images/gWmaJhufEDCtHLXnEYjX9fqOykM.webp', width: 1600, height: 1070, alt: '' } },
  ],
};

export const reel = {
  duration: '12:33 mins',
  play: 'Play',
  label: 'Reel',
  thumbnailVideo: 'https://framerusercontent.com/assets/P6zBrhqzsUREEaheE1XVmPcM6M.mp4',
  thumbnailImage: { src: 'https://framerusercontent.com/images/ifw30dMETSOlZDGwqwQVUxIALY.jpg', width: 2048, height: 1080, alt: '' },
  // fenêtre superposée : lecteur YouTube, lecture auto, son actif
  youtube: { url: 'https://www.youtube.com/watch?v=6aioEoCdBJw', autoplay: true, muted: false },
  demo: true,
};

export const testimonials = {
  label: 'What they say',
  index: 7,
  heading: 'client stories.',
  description: { lead: ' ', grey: ' THE WORK SPEAKS FOR ITSELF,', rest: ' BUT THE PEOPLE WE BUILT IT WITH SAY IT BETTER.' },
  slides: [
    {
      counter: '01 / 03', bigText: 'Gucci finally has a site that shows the frames the way our customers already saw them.',
      smallText: 'We used to explain what we were making. Mira built us a site that doesn\'t need explanation. It just shows what the frames are, and lets people fall for them.',
      name: 'Ines Costa', role: 'Founder', company: 'Gucci',
      metrics: [{ value: '10 days', description: 'sold out' }, { value: '+240%', description: 'waitlist growth' }],
      image: { src: 'https://framerusercontent.com/images/XCY5hpPBRBS6cdWzaAWas5dffkA.jpg', width: 640, height: 640, alt: 'Ines Costa' },
      demo: true,
    },
    {
      counter: '02 / 03', bigText: 'Mira built a brand for a category that usually gets shouted at.',
      smallText: 'Every skincare brief we saw came back loud. Jin came back quiet. The result is the first skincare site I\'ve ever wanted to send to a friend.',
      name: 'Rafael Costa', role: 'Founder', company: 'Chanel',
      metrics: [{ value: '9 days', description: 'sold out' }, { value: '2 restocks', description: 'in first month' }],
      image: { src: 'https://framerusercontent.com/images/kmNPpdMzKtgnYgsr9piGQpLv0.jpg', width: 640, height: 640, alt: 'Rafael Costa' },
      demo: true,
    },
    {
      counter: '03 / 03', bigText: 'Mira understood weather. And gear. And what it feels like to trust both.',
      smallText: 'The site feels like standing outside in a good jacket. Nothing extra. Just enough. Jin never overexplained, and neither does the brand now.',
      name: 'Henrik Vinje', role: 'Founder', company: 'Oslo',
      metrics: [{ value: '14 days', description: 'autumn drop cleared' }, { value: '2 retailers', description: 'picked up at launch' }],
      image: { src: 'https://framerusercontent.com/images/foJh1zwI8ZAzyJVfsEgIaSkdMjk.jpg', width: 640, height: 640, alt: 'Henrik Vinje' },
      demo: true,
    },
  ],
  // affichage : '“' + bigText + ' ”' ; ligne rôle : role + ', ' + company
  quoteOpen: '“',
  quoteClose: ' ”',
};

export const pricing = {
  label: 'Pricing',
  index: 8,
  headline: { before: 'KNOW THE NUMBER ', accent: 'UP FRONT.' },
  description: ' Two ways to work together: month to month, or one fixed-scope project. ',
  startsAt: 'Starts at',
  ssrPlaceholder: { total: '$2,000', addons: '+$0' }, // texte SSR remplacé à l'hydratation
  baseLabel: 'Base',
  addonsLabel: 'Add-ons',
  includedLabel: 'included',
  addonsTitle: 'Add-ons',
  // total = base + somme des options cochées ; format '$' + toLocaleString('en-US', 0 décimale) ; animation 0.6 s easeOut
  modes: [
    {
      id: 'monthly', tab: 'Monthly', suffix: '/month', base: 4500,
      included: ['One active request at a time', 'Unlimited revisions', 'Priority turnaround', 'Pause or cancel anytime'],
      addons: [
        { title: 'Motion design', price: 1000 },
        { title: 'Illustration & brand assets', price: 800 },
        { title: 'Photography direction', price: 1200 },
        { title: 'Pitch deck or sales kit', price: 900 },
      ],
    },
    {
      id: 'project', tab: 'Per Project', suffix: '/project', base: 12000,
      included: ['Brand identity', 'Website design & build in Framer', 'Copy direction', '3 review rounds'],
      addons: [
        { title: 'Motion design', price: 3000 },
        { title: 'Illustration & brand assets', price: 2400 },
        { title: 'Photography direction', price: 3500 },
        { title: 'Pitch deck or sales kit', price: 2800 },
      ],
    },
  ],
  addonAriaSuffix: 'Add-on Toggle', // aria-label = titre + 'Add-on Toggle' (sans espace, comme l'original)
  qualifier: '*A starting estimate. We lock the final scope and price after the discovery call.',
  cta: { label: 'Start a project', href: '/contact' },
  demo: true,
};

export const faq = {
  label: 'Answers',
  index: 9,
  heading: 'FAQ.',
  items: [
    { question: 'What\'s the difference between monthly and per project?', answer: 'A project has an end date. We build the brand and the site, hand it over, and it\'s yours. Membership is for what comes after, or instead of it. $4,500 a month keeps one active request moving, and you pause any month you don\'t need us.' },
    { question: 'Is that the final price?', answer: 'It\'s a real starting number, not a teaser. Scope is the only thing that moves it: an extra page, a second brand direction, a deadline that needs two of us. We lock the figure on the first call and it holds from there.' },
    { question: 'How long will it take?', answer: 'Two to four weeks for a single piece of work, four to six for a full brand and site. We only take two clients a month, so your start date is real rather than a spot in a queue.' },
    { question: 'Who actually does the work?', answer: 'The founder. You hire Mira, you get Mira. No juniors, no handoffs, no account manager relaying your feedback.' },
    { question: 'What do you need from me to start?', answer: 'A short brief and someone who can make decisions. The clearer you are on the goal, the faster we move.' },
    { question: 'Do you offer support after launch?', answer: 'Every build ships with 30 days of post-launch support. After that, membership keeps us on call at $4,500 a month. Cancel it the month you stop needing us.' },
  ],
  contact: {
    title: 'more questions?',
    text: 'Reach out anytime. We\'re happy to answer before you commit to working together.',
    email: 'hello@mira.studio',
    href: 'mailto:hello@mira.studio',
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
      { label: 'My name is', name: 'Name', type: 'text', placeholder: 'Name *', required: true },
      { label: 'i’m from', name: 'Company', type: 'text', placeholder: 'Company Name', required: false },
      { label: 'and I need help with', name: 'I need help with', type: 'text', placeholder: 'This service', required: false },
      { label: 'here’s the Idea:', name: 'Pitch', type: 'textarea', placeholder: 'A sentence or two about the project…*', required: true },
      { label: 'my budget is around', name: 'Budget', type: 'text', placeholder: '$10k', required: false },
      {
        label: 'and i’d like to start', name: 'Start', type: 'select', required: true,
        options: [
          { title: 'When…', value: '', disabled: true },
          { title: 'ASAP', value: 'ASAP' },
          { title: 'Within a month', value: 'Within a month' },
          { title: 'This quarter', value: 'This quarter' },
          { title: 'Just exploring', value: 'Just exploring' },
        ],
      },
      { label: 'reach me at', name: 'Email', type: 'email', placeholder: 'Email *', required: true },
    ],
    consent: { before: 'By submitting, you agree to our ', terms: 'terms', middle: ' and', space: ' ', privacy: 'privacy policy.' },
    submit: 'Start a project',
    errorLabel: 'Error, Try Again',
    successDelayMs: 800,
  },
  success: {
    steps: ['Received', 'Review', 'Discovery'],
    text: 'Your brief has landed on our desks. I\'ll personally review it and get back to you within 24 hours.',
  },
  label: 'Book a call',
  availability: { before: '2 slots for ', month: "August '26" },
  author: { name: 'Jin Yuen', role: 'Founder', image: { src: 'https://framerusercontent.com/images/I0Zin8u1THTGGeYzoOdXdo8LGQ8.jpg', alt: 'Portrait of Jin Yuen' } },
  background: { src: 'https://framerusercontent.com/images/EYivEG50p7YL92jdB9h51wLz4iU.jpg', width: 2400, height: 1808, alt: '' },
  heading: { before: "Let's make you ", accent: 'impossible', after: ' to ignore.' },
  subtitle: { lead: ' ', grey: " Tell us what you're building. ", rest: "We'll tell you how we'd make it land." },
  phone: { label: '+1 (805) 450 1432', href: 'tel:+18054501432', target: '_blank' },
  email: { label: 'hello@mira.studio', href: 'mailto:hello@mira.studio', target: '_blank' },
  steps: [
    { index: '01', title: 'You hear back within a day.', text: 'From the founder, not a form-bot. We read every enquiry personally.' },
    { index: '02', title: 'A short discovery call.', text: "Thirty minutes to understand your goals, audience, and what's not working." },
    { index: '03', title: 'A fixed-quote proposal.', text: 'Clear scope, clear timeline, clear price. No surprises later.' },
  ],
  legalLinks: { terms: './terms-conditions', privacy: './privacy-policy' },
  // textes du module non visibles à l'état initial (variante d'étape / popup), placement à confirmer
  hiddenTexts: { stepTime: 'Within 24 hours', stepText: "We'll review your submission and send a quick acknowledgment." },
  demo: true,
};

export const journal = {
  label: 'From the journal',
  index: 11,
  heading: 'articles.',
  viewAll: { label: 'View All', href: './journal' },
  limit: 4,
  // contenu CMS (collection journal), ordre d'affichage de l'original
  articles: [
    { category: '(Studio Notes)', title: 'Fewer projects, more attention.', date: '6/15/26', iso: '2026-06-15', slug: 'fewer-projects-more-attention', image: { src: 'https://framerusercontent.com/images/QScxeG0hFA9OqTSpKLf3gz2xrk.jpeg', width: 1501, height: 1047, alt: 'Close-up of glossy red lips' }, demo: true },
    { category: '(Opinion)', title: "Awards don't build brands.", date: '5/5/26', iso: '2026-05-05', slug: 'awards-dont-build-brands', image: { src: 'https://framerusercontent.com/images/flVP3AWr4maQWn3qiFyeFYgkc.jpeg', width: 904, height: 1200, alt: 'Black and white silhouette framed by outstretched hands' }, demo: true },
    { category: '(Process)', title: 'Why we quote fixed.', date: '4/3/26', iso: '2026-04-03', slug: 'why-we-quote-fixed', image: { src: 'https://framerusercontent.com/images/ZpxY6EqIMMqzzyJ6gL7tXpVEO5E.jpg', width: 2040, height: 1148, alt: 'Black horse wearing a flower garland in a field' }, demo: true },
    { category: '(Craft)', title: 'The best type is invisible.', date: '3/20/26', iso: '2026-03-20', slug: 'the-best-type-is-invisible', image: { src: 'https://framerusercontent.com/images/6oZOHgmZZVkcK3G0Wiee0kkF5AI.jpg', width: 1537, height: 2041, alt: 'Chrome hand reaching out beside a rainbow light flare' }, demo: true },
  ],
};
