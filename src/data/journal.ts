// Données du périmètre journal (agent journal) — générées par scripts/agents/journal/build-content.mjs
// depuis le DOM rendu de l'original (reference/agents/journal/*.json). Texte exact caractère pour caractère.
// Le corps des articles est dans content/journal/<slug>.md (même structure de balises h3/p).

export const journalPage = {
  route: '/journal',
  metaTitle: "Mira - Agency & Portfolio Framer Template",
  metaDescription: "A dark, WebGL-driven Framer template for agencies and studios: cinematic preloader, 3D project showcase, CMS portfolio, and a live pricing calculator.",
  countLabel: "articles",
  countFormat: { prefix: '(', suffix: ')', minDigits: 1 }, // valeur rendue : "(8)"
  heading: "our Journal.",
  intro: { lead: "                           Notes from the studio on process, craft, and ", emphasis: "the work behind the work. " },
  gridColumns: { desktop: 4, tablet: 2, mobile: 2 },
  rowGap: 40,
  pageSize: 8,
} as const;

export const articlePageUi = {
  backLabel: 'Back to the journal',
  backHref: '/journal',
  authorRoleSuffix: ', Mira',
  shareLabel: 'Share',
  share: [
    { id: 'twitter', ariaLabel: 'Share on Twitter' },
    { id: 'linkedin', ariaLabel: 'Share on LinkedIn' },
    { id: 'email', ariaLabel: 'Share on Email' },
    { id: 'copy', ariaLabel: 'Copy URL to clipboard' },
  ],
  moreLabel: 'From the journal',
  moreHeading: 'More articles.',
  viewAllLabel: 'View All',
  viewAllHref: '/journal',
  cursorLabel: 'Read Article',
} as const;

export const articleTypes = ['Studio Notes', 'Process', 'Craft', 'Opinion'] as const;

// Ordre de la collection CMS « Articles » (= ordre d'affichage ligne par ligne de la grille).
export const articles = [
  {
    "demo": true,
    "slug": "fewer-projects-more-attention",
    "title": "Fewer projects, more attention.",
    "articleType": "Studio Notes",
    "date": "2026-06-15T00:00:00.000Z",
    "dateCard": "6/15/26",
    "dateArticle": "Jun 15, 2026",
    "shortDescription": "Why Mira takes fewer projects than most studios our size, and what it does for the work.",
    "introHeader": "                           Most studios grow by taking on more clients. Mira grows by taking on fewer. Here is why we hold a hard ceiling on the number of projects we accept each year, and what that ceiling actually gives back to the work, to the client, and to the studio itself.",
    "mainImage": {
      "src": "/assets/images/QScxeG0hFA9OqTSpKLf3gz2xrk.jpeg",
      "original": "https://framerusercontent.com/images/QScxeG0hFA9OqTSpKLf3gz2xrk.jpeg",
      "alt": "Close-up of glossy red lips",
      "width": 1501,
      "height": 1047
    },
    "author": {
      "name": "David Torres",
      "role": "Developer",
      "avatar": {
        "src": "/assets/images/h0uF4ecVvj33A97za3PYY3KMg.jpg",
        "original": "https://framerusercontent.com/images/h0uF4ecVvj33A97za3PYY3KMg.jpg",
        "alt": "Portrait of David Torres",
        "width": 528,
        "height": 701
      }
    },
    "metaTitle": "Fewer projects, more attention.",
    "metaDescription": "Why Mira takes fewer projects than most studios our size, and what it does for the work.",
    "moreArticles": [
      "awards-dont-build-brands",
      "why-we-quote-fixed",
      "the-best-type-is-invisible",
      "on-saying-no"
    ]
  },
  {
    "demo": true,
    "slug": "awards-dont-build-brands",
    "title": "Awards don't build brands.",
    "articleType": "Opinion",
    "date": "2026-05-05T00:00:00.000Z",
    "dateCard": "5/5/26",
    "dateArticle": "May 5, 2026",
    "shortDescription": "The relationship between award-winning design and business outcomes is not what most studios pretend.",
    "introHeader": "                           The design industry loves awards. Every studio homepage has a laurel row. Every deck has a featured-in slide. Here is why we think the relationship between award-winning design and business-effective design is far weaker than most studios pretend, and what that means for how you should evaluate design work you are about to pay for.",
    "mainImage": {
      "src": "/assets/images/flVP3AWr4maQWn3qiFyeFYgkc.jpeg",
      "original": "https://framerusercontent.com/images/flVP3AWr4maQWn3qiFyeFYgkc.jpeg",
      "alt": "Black and white silhouette framed by outstretched hands",
      "width": 904,
      "height": 1200
    },
    "author": {
      "name": "Jin Yuen",
      "role": "Founder",
      "avatar": {
        "src": "/assets/images/mYGjKrp0gW5PReDsl8CDmODKzoc.jpeg",
        "original": "https://framerusercontent.com/images/mYGjKrp0gW5PReDsl8CDmODKzoc.jpeg",
        "alt": "Portrait of Jin Yuen",
        "width": 655,
        "height": 872
      }
    },
    "metaTitle": "Awards don't build brands.",
    "metaDescription": "The relationship between award-winning design and business outcomes is not what most studios pretend.",
    "moreArticles": [
      "fewer-projects-more-attention",
      "why-we-quote-fixed",
      "the-best-type-is-invisible",
      "on-saying-no"
    ]
  },
  {
    "demo": true,
    "slug": "why-we-quote-fixed",
    "title": "Why we quote fixed.",
    "articleType": "Process",
    "date": "2026-04-03T00:00:00.000Z",
    "dateCard": "4/3/26",
    "dateArticle": "Apr 3, 2026",
    "shortDescription": "Every Mira project is priced up front. No hourly. No estimates that quietly grow. Here is why.",
    "introHeader": "                           Every Mira project is priced up front. No hourly billing. No estimates that quietly grow past the number we agreed on. Here is the reasoning behind fixed pricing, and why we think it is the only honest way for a small studio to charge for the kind of work we do.",
    "mainImage": {
      "src": "/assets/images/ZpxY6EqIMMqzzyJ6gL7tXpVEO5E.jpg",
      "original": "https://framerusercontent.com/images/ZpxY6EqIMMqzzyJ6gL7tXpVEO5E.jpg",
      "alt": "Black horse wearing a flower garland in a field",
      "width": 2040,
      "height": 1148
    },
    "author": {
      "name": "Alex West",
      "role": "Client Manager",
      "avatar": {
        "src": "/assets/images/OJ7FFbgKuSOxXFrM0pc3gbYUoBI.jpg",
        "original": "https://framerusercontent.com/images/OJ7FFbgKuSOxXFrM0pc3gbYUoBI.jpg",
        "alt": "Portrait of Alex West",
        "width": 528,
        "height": 701
      }
    },
    "metaTitle": "Why we quote fixed.",
    "metaDescription": "Every Mira project is priced up front. No hourly. No estimates that quietly grow. Here is why.",
    "moreArticles": [
      "fewer-projects-more-attention",
      "awards-dont-build-brands",
      "the-best-type-is-invisible",
      "on-saying-no"
    ]
  },
  {
    "demo": true,
    "slug": "the-best-type-is-invisible",
    "title": "The best type is invisible.",
    "articleType": "Craft",
    "date": "2026-03-20T00:00:00.000Z",
    "dateCard": "3/20/26",
    "dateArticle": "Mar 20, 2026",
    "shortDescription": "Typography choices we make so you do not have to notice them.",
    "introHeader": "                           If someone reads your website and remembers the fonts you used, you failed. Typography should carry the voice of a brand without ever asking to be looked at. Here is how we think about type on every Mira project, and why restraint at this layer lets us be louder everywhere else on the page.",
    "mainImage": {
      "src": "/assets/images/6oZOHgmZZVkcK3G0Wiee0kkF5AI.jpg",
      "original": "https://framerusercontent.com/images/6oZOHgmZZVkcK3G0Wiee0kkF5AI.jpg",
      "alt": "Chrome hand reaching out beside a rainbow light flare",
      "width": 1537,
      "height": 2041
    },
    "author": {
      "name": "Sarah Park",
      "role": "Designer",
      "avatar": {
        "src": "/assets/images/O83WqKF5apvVU9qmpgDRLbAvWyo.jpg",
        "original": "https://framerusercontent.com/images/O83WqKF5apvVU9qmpgDRLbAvWyo.jpg",
        "alt": "Portrait of Sarah Park",
        "width": 528,
        "height": 701
      }
    },
    "metaTitle": "The best type is invisible.",
    "metaDescription": "Typography choices we make so you do not have to notice them.",
    "moreArticles": [
      "fewer-projects-more-attention",
      "awards-dont-build-brands",
      "why-we-quote-fixed",
      "on-saying-no"
    ]
  },
  {
    "demo": true,
    "slug": "on-saying-no",
    "title": "On saying no.",
    "articleType": "Studio Notes",
    "date": "2026-02-18T00:00:00.000Z",
    "dateCard": "2/18/26",
    "dateArticle": "Feb 18, 2026",
    "shortDescription": "The projects Mira turns down, and why we are better for it.",
    "introHeader": "                           We turn down more work than we accept. This year alone, three good opportunities we walked away from. Here is why saying no is a studio skill we have practised deliberately, what it costs us in short-term revenue, and what it protects on the yes side of the ledger over the long run.",
    "mainImage": {
      "src": "/assets/images/k15t4NH13VUuxLJcDCP4aIums.jpg",
      "original": "https://framerusercontent.com/images/k15t4NH13VUuxLJcDCP4aIums.jpg",
      "alt": "Figure in a white hood sitting cross-legged with a red light across the eyes",
      "width": 1278,
      "height": 1148
    },
    "author": {
      "name": "Jin Yuen",
      "role": "Founder",
      "avatar": {
        "src": "/assets/images/mYGjKrp0gW5PReDsl8CDmODKzoc.jpeg",
        "original": "https://framerusercontent.com/images/mYGjKrp0gW5PReDsl8CDmODKzoc.jpeg",
        "alt": "Portrait of Jin Yuen",
        "width": 655,
        "height": 872
      }
    },
    "metaTitle": "On saying no.",
    "metaDescription": "The projects Mira turns down, and why we are better for it.",
    "moreArticles": [
      "fewer-projects-more-attention",
      "awards-dont-build-brands",
      "why-we-quote-fixed",
      "the-best-type-is-invisible"
    ]
  },
  {
    "demo": true,
    "slug": "the-brief-before-the-brief",
    "title": "The brief before the brief.",
    "articleType": "Process",
    "date": "2026-01-28T00:00:00.000Z",
    "dateCard": "1/28/26",
    "dateArticle": "Jan 28, 2026",
    "shortDescription": "Why the most important part of a project happens before anyone opens a Figma file.",
    "introHeader": "                           The most important part of any Mira project happens before anyone opens a design file. Here is why the discovery call, not the brief document, is where the real work of a project actually gets defined, and what we listen for in the first thirty minutes that reshapes the whole engagement.",
    "mainImage": {
      "src": "/assets/images/3WFEUak51uY8vHBvH8hhaIvI.jpg",
      "original": "https://framerusercontent.com/images/3WFEUak51uY8vHBvH8hhaIvI.jpg",
      "alt": "Woman in a white outfit walking with a handbag against a white wall",
      "width": 901,
      "height": 1148
    },
    "author": {
      "name": "Alex West",
      "role": "Client Manager",
      "avatar": {
        "src": "/assets/images/OJ7FFbgKuSOxXFrM0pc3gbYUoBI.jpg",
        "original": "https://framerusercontent.com/images/OJ7FFbgKuSOxXFrM0pc3gbYUoBI.jpg",
        "alt": "Portrait of Alex West",
        "width": 528,
        "height": 701
      }
    },
    "metaTitle": "The brief before the brief.",
    "metaDescription": "Why the most important part of a project happens before anyone opens a Figma file.",
    "moreArticles": [
      "fewer-projects-more-attention",
      "awards-dont-build-brands",
      "why-we-quote-fixed",
      "the-best-type-is-invisible"
    ]
  },
  {
    "demo": true,
    "slug": "small-looks-expensive",
    "title": "Small looks expensive.",
    "articleType": "Craft",
    "date": "2025-12-12T00:00:00.000Z",
    "dateCard": "12/12/25",
    "dateArticle": "Dec 12, 2025",
    "shortDescription": "Why restraint reads as premium, and how to design for it without becoming boring.",
    "introHeader": "                           Cheap brands add. Expensive brands remove. Here is why restraint is the actual visual language of luxury, and how to design for premium without falling into the traps most agencies fall into the moment the word premium appears anywhere in the brief.",
    "mainImage": {
      "src": "/assets/images/1I2rFExVypdmLtMAuiNjBMIHg.jpg",
      "original": "https://framerusercontent.com/images/1I2rFExVypdmLtMAuiNjBMIHg.jpg",
      "alt": "Woman leaning out of a vintage car in the mountains",
      "width": 1632,
      "height": 2040
    },
    "author": {
      "name": "Sarah Park",
      "role": "Designer",
      "avatar": {
        "src": "/assets/images/O83WqKF5apvVU9qmpgDRLbAvWyo.jpg",
        "original": "https://framerusercontent.com/images/O83WqKF5apvVU9qmpgDRLbAvWyo.jpg",
        "alt": "Portrait of Sarah Park",
        "width": 528,
        "height": 701
      }
    },
    "metaTitle": "Small looks expensive.",
    "metaDescription": "Why restraint reads as premium, and how to design for it without becoming boring.",
    "moreArticles": [
      "fewer-projects-more-attention",
      "awards-dont-build-brands",
      "why-we-quote-fixed",
      "the-best-type-is-invisible"
    ]
  },
  {
    "demo": true,
    "slug": "the-founder-is-the-brand",
    "title": "The founder is the brand.",
    "articleType": "Opinion",
    "date": "2025-11-04T00:00:00.000Z",
    "dateCard": "11/4/25",
    "dateArticle": "Nov 4, 2025",
    "shortDescription": "For small studios and small brands, the founder's presence is the most under-used asset.",
    "introHeader": "                           Every small brand under-uses its founder. Every small studio does too. Here is why the founder's presence, story, and voice are the most under-leveraged asset in most emerging brands, and what we do on every Mira project to bring the founder back to the surface of the work.",
    "mainImage": {
      "src": "/assets/images/2eiFPxAgnGHeZbpcEWbmMREckg.jpg",
      "original": "https://framerusercontent.com/images/2eiFPxAgnGHeZbpcEWbmMREckg.jpg",
      "alt": "Blurred colorful flower against a grey background",
      "width": 1360,
      "height": 2040
    },
    "author": {
      "name": "Jin Yuen",
      "role": "Founder",
      "avatar": {
        "src": "/assets/images/mYGjKrp0gW5PReDsl8CDmODKzoc.jpeg",
        "original": "https://framerusercontent.com/images/mYGjKrp0gW5PReDsl8CDmODKzoc.jpeg",
        "alt": "Portrait of Jin Yuen",
        "width": 655,
        "height": 872
      }
    },
    "metaTitle": "The founder is the brand.",
    "metaDescription": "For small studios and small brands, the founder's presence is the most under-used asset.",
    "moreArticles": [
      "fewer-projects-more-attention",
      "awards-dont-build-brands",
      "why-we-quote-fixed",
      "the-best-type-is-invisible"
    ]
  }
] as const;
