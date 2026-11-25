// Données globales (navigation, footer, newsletter, réseaux, métadonnées par page).
// Généré par scripts/agents/global/gen-data.mjs depuis reference/agents/global/meta.json et public/assets/manifest.json.
// Textes exacts de l'original (docs/audit/global.md). Ne pas éditer à la main : relancer le script.

export const SOCIAL = [
  {
    "id": "x",
    "label": "X",
    "ariaLabel": "Lien X",
    "href": "https://x.com/ErmitePasNette",
    "target": "_blank",
    "placeholder": true
  },
  {
    "id": "instagram",
    "label": "IG",
    "ariaLabel": "Lien Instagram",
    "href": "https://instagram.com/lys__sama",
    "target": "_blank",
    "placeholder": true
  },
  {
    "id": "tiktok",
    "label": "TikTok",
    "ariaLabel": "Lien TikTok",
    "href": "https://www.tiktok.com/@lys.sama",
    "target": "_blank",
    "placeholder": true
  },
  {
    "id": "facebook",
    "label": "Facebook",
    "ariaLabel": "Lien Facebook",
    "href": "#facebook-a-fournir",
    "target": "_blank",
    "placeholder": true
  },
  {
    "id": "whatsapp",
    "label": "WhatsApp",
    "ariaLabel": "Lien WhatsApp",
    "href": "#whatsapp-a-fournir",
    "target": "_blank",
    "placeholder": true
  }
] as const;

export const NAV = {
  "logo": {
    "href": "/",
    "ariaLabel": "home"
  },
  "links": [
    {
      "label": "Accueil",
      "href": "/"
    },
    {
      "label": "projets",
      "href": "/projects"
    },
    {
      "label": "À propos",
      "href": "/studio"
    },
    {
      "label": "Journal",
      "href": "/journal"
    }
  ],
  "pageBarLinks": [
    "/projects",
    "/studio",
    "/journal"
  ],
  "establishedTag": " LYS SAMA ゆめ",
  "contactLabel": "let's talk",
  "contactButton": {
    "href": "/contact",
    "ariaLabel": "contact",
    "photo": {
      "src": "/assets/images/Jfjs0nvrWkQ5vWOcalwIPI1ovEU.jpeg",
      "original": "https://framerusercontent.com/images/Jfjs0nvrWkQ5vWOcalwIPI1ovEU.jpeg?width=655&height=744",
      "alt": ""
    }
  },
  "copyright": {
    "year": "2026",
    "name": "LYS SAMA",
    "symbol": "®",
    "statement": "Tous droits réservés."
  }
} as const;

export const FOOTER = {
  "newsletter": {
    "intro": [
      {
        "text": "                      A LETTER, ONCE A MONTH. ",
        "tone": "dark"
      },
      {
        "text": "Les nouveaux contenus, les créateurs du moment et quelques avis sans filtre.",
        "tone": "muted"
      },
      {
        "text": " No filler. SUBSCRIBE BELOW.",
        "tone": "dark"
      }
    ],
    "input": {
      "type": "email",
      "name": "Email",
      "placeholder": "Enter your email",
      "required": true
    },
    "button": {
      "label": "Je m’inscris",
      "error": "Error, Try Again"
    },
    "consent": {
      "name": "Agreed to terms / privacy",
      "required": true,
      "before": "By signing up, you’re agreeing to our ",
      "linkLabel": "politique de confidentialité.",
      "href": "/privacy-policy"
    },
    "originalAction": "https://api.framer.com/forms/v1/forms/27a96a9c-7735-4436-88cf-6e806682dbd7/submit",
    "validation": {
      "empty": "Please fill out this field.",
      "invalidAbc": "Please include an '@' in the email address. 'abc' is missing an '@'.",
      "consent": "Please check this box if you want to proceed."
    },
    "demo": true
  },
  "legalLabel": "legal",
  "legal": [
    {
      "label": "Confidentialité.",
      "href": "/privacy-policy"
    },
    {
      "label": "Conditions d’utilisation.",
      "href": "/terms-conditions"
    },
    {
      "label": "Cookies.",
      "href": "/cookie-policy"
    }
  ],
  "contactLabel": "parlons-en",
  "wordmark": {
    "name": "lys sama",
    "symbol": "®",
    "descriptor": "Cotonou"
  }
} as const;

export const SITE_ICONS = [
  {
    "rel": "icon",
    "media": "(prefers-color-scheme: light)",
    "href": "/assets/icons/RcgLQONxLVpJUrIbGLvIRMp1yA.svg",
    "original": "https://framerusercontent.com/images/RcgLQONxLVpJUrIbGLvIRMp1yA.svg"
  },
  {
    "rel": "icon",
    "media": "(prefers-color-scheme: dark)",
    "href": "/assets/icons/riYEsqDYtGQSRZXKKpVZhHvjdc.svg",
    "original": "https://framerusercontent.com/images/riYEsqDYtGQSRZXKKpVZhHvjdc.svg"
  },
  {
    "rel": "apple-touch-icon",
    "href": "/assets/images/eOcgtNAH6AEVa2iRzeqa6k450g.png",
    "original": "https://framerusercontent.com/images/eOcgtNAH6AEVa2iRzeqa6k450g.png"
  }
] as const;

export const PAGE_META = {
  "/": {
    "title": "Lys Sama — Créatrice de contenu mode & culture, Cotonou",
    "description": "Lys Sama est créatrice de contenu et stratège digitale à Cotonou. Elle met en lumière la mode béninoise et la culture africaine.",
    "canonical": "/",
    "ogType": "website",
    "ogTitle": "Lys Sama — Créatrice de contenu mode & culture, Cotonou",
    "ogDescription": "Lys Sama est créatrice de contenu et stratège digitale à Cotonou. Elle met en lumière la mode béninoise et la culture africaine.",
    "ogImage": "https://framerusercontent.com/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "ogImageLocal": "/assets/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "Lys Sama — Créatrice de contenu mode & culture, Cotonou",
    "twitterDescription": "Lys Sama est créatrice de contenu et stratège digitale à Cotonou. Elle met en lumière la mode béninoise et la culture africaine.",
    "twitterImage": "https://framerusercontent.com/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "robots": "noindex, nofollow"
  },
  "/projects": {
    "title": "Projets — Lys Sama",
    "description": "Lys Sama est créatrice de contenu et stratège digitale à Cotonou. Elle met en lumière la mode béninoise et la culture africaine.",
    "canonical": "/projects",
    "ogType": "website",
    "ogTitle": "Projets — Lys Sama",
    "ogDescription": "Lys Sama est créatrice de contenu et stratège digitale à Cotonou. Elle met en lumière la mode béninoise et la culture africaine.",
    "ogImage": "https://framerusercontent.com/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "ogImageLocal": "/assets/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "Projets — Lys Sama",
    "twitterDescription": "Lys Sama est créatrice de contenu et stratège digitale à Cotonou. Elle met en lumière la mode béninoise et la culture africaine.",
    "twitterImage": "https://framerusercontent.com/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "robots": "noindex, nofollow"
  },
  "/studio": {
    "title": "À propos — Lys Sama",
    "description": "Lys Sama est créatrice de contenu et stratège digitale à Cotonou. Elle met en lumière la mode béninoise et la culture africaine.",
    "canonical": "/studio",
    "ogType": "website",
    "ogTitle": "À propos — Lys Sama",
    "ogDescription": "Lys Sama est créatrice de contenu et stratège digitale à Cotonou. Elle met en lumière la mode béninoise et la culture africaine.",
    "ogImage": "https://framerusercontent.com/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "ogImageLocal": "/assets/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "À propos — Lys Sama",
    "twitterDescription": "Lys Sama est créatrice de contenu et stratège digitale à Cotonou. Elle met en lumière la mode béninoise et la culture africaine.",
    "twitterImage": "https://framerusercontent.com/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "robots": "noindex, nofollow"
  },
  "/journal": {
    "title": "Journal — Lys Sama",
    "description": "Lys Sama est créatrice de contenu et stratège digitale à Cotonou. Elle met en lumière la mode béninoise et la culture africaine.",
    "canonical": "/journal",
    "ogType": "website",
    "ogTitle": "Journal — Lys Sama",
    "ogDescription": "Lys Sama est créatrice de contenu et stratège digitale à Cotonou. Elle met en lumière la mode béninoise et la culture africaine.",
    "ogImage": "https://framerusercontent.com/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "ogImageLocal": "/assets/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "Journal — Lys Sama",
    "twitterDescription": "Lys Sama est créatrice de contenu et stratège digitale à Cotonou. Elle met en lumière la mode béninoise et la culture africaine.",
    "twitterImage": "https://framerusercontent.com/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "robots": "noindex, nofollow"
  },
  "/contact": {
    "title": "Contact — Lys Sama",
    "description": "Lys Sama est créatrice de contenu et stratège digitale à Cotonou. Elle met en lumière la mode béninoise et la culture africaine.",
    "canonical": "/contact",
    "ogType": "website",
    "ogTitle": "Contact — Lys Sama",
    "ogDescription": "Lys Sama est créatrice de contenu et stratège digitale à Cotonou. Elle met en lumière la mode béninoise et la culture africaine.",
    "ogImage": "https://framerusercontent.com/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "ogImageLocal": "/assets/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "Contact — Lys Sama",
    "twitterDescription": "Lys Sama est créatrice de contenu et stratège digitale à Cotonou. Elle met en lumière la mode béninoise et la culture africaine.",
    "twitterImage": "https://framerusercontent.com/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "robots": "noindex, nofollow"
  },
  "/projects/gucci": {
    "title": "FInAB 2026 — Lys Sama",
    "description": "Muse du styliste Kisito Kora pour la première FInAB Fashion Week, au Festival International des Arts du Bénin.",
    "canonical": "/projects/gucci",
    "ogType": "website",
    "ogTitle": "FInAB 2026 — Lys Sama",
    "ogDescription": "Muse du styliste Kisito Kora pour la première FInAB Fashion Week, au Festival International des Arts du Bénin.",
    "ogImage": "https://framerusercontent.com/images/uQzt05iescwLlC6DKg4M1qwR6o.jpg?width=2400&height=1350",
    "ogImageLocal": "/assets/images/uQzt05iescwLlC6DKg4M1qwR6o.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "FInAB 2026 — Lys Sama",
    "twitterDescription": "Muse du styliste Kisito Kora pour la première FInAB Fashion Week, au Festival International des Arts du Bénin.",
    "twitterImage": "https://framerusercontent.com/images/uQzt05iescwLlC6DKg4M1qwR6o.jpg?width=2400&height=1350",
    "robots": "noindex, nofollow"
  },
  "/projects/chanel": {
    "title": "Stylistes de Cotonou — Lys Sama",
    "description": "Porter et raconter le travail des stylistes de Cotonou, pour que leur savoir-faire soit vu.",
    "canonical": "/projects/chanel",
    "ogType": "website",
    "ogTitle": "Stylistes de Cotonou — Lys Sama",
    "ogDescription": "Porter et raconter le travail des stylistes de Cotonou, pour que leur savoir-faire soit vu.",
    "ogImage": "https://framerusercontent.com/images/7lmRyzySl3tRUJAR0FTAuBtPBtM.jpg?width=2040&height=1148",
    "ogImageLocal": "/assets/images/7lmRyzySl3tRUJAR0FTAuBtPBtM.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "Stylistes de Cotonou — Lys Sama",
    "twitterDescription": "Porter et raconter le travail des stylistes de Cotonou, pour que leur savoir-faire soit vu.",
    "twitterImage": "https://framerusercontent.com/images/7lmRyzySl3tRUJAR0FTAuBtPBtM.jpg?width=2040&height=1148",
    "robots": "noindex, nofollow"
  },
  "/projects/puma": {
    "title": "Tissus imprimés — Lys Sama",
    "description": "Mon avis sur les polémiques de copie et les tissus imprimés d’initiales vendus comme des « marques ».",
    "canonical": "/projects/puma",
    "ogType": "website",
    "ogTitle": "Tissus imprimés — Lys Sama",
    "ogDescription": "Mon avis sur les polémiques de copie et les tissus imprimés d’initiales vendus comme des « marques ».",
    "ogImage": "https://framerusercontent.com/images/NuuceAGvddP5JL0LEhEjp8bdnM.jpg?width=1152&height=1440",
    "ogImageLocal": "/assets/images/NuuceAGvddP5JL0LEhEjp8bdnM.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "Tissus imprimés — Lys Sama",
    "twitterDescription": "Mon avis sur les polémiques de copie et les tissus imprimés d’initiales vendus comme des « marques ».",
    "twitterImage": "https://framerusercontent.com/images/NuuceAGvddP5JL0LEhEjp8bdnM.jpg?width=1152&height=1440",
    "robots": "noindex, nofollow"
  },
  "/projects/adidas": {
    "title": "Wini wini — Lys Sama",
    "description": "Sur « Wini wini » de Dibi Dobo, une trend béninoise devenue un moment de fierté partagée.",
    "canonical": "/projects/adidas",
    "ogType": "website",
    "ogTitle": "Wini wini — Lys Sama",
    "ogDescription": "Sur « Wini wini » de Dibi Dobo, une trend béninoise devenue un moment de fierté partagée.",
    "ogImage": "https://framerusercontent.com/images/r7Srjn5YojuM8eQrAW1Mlzsb4.jpg?width=2400&height=1350",
    "ogImageLocal": "/assets/images/r7Srjn5YojuM8eQrAW1Mlzsb4.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "Wini wini — Lys Sama",
    "twitterDescription": "Sur « Wini wini » de Dibi Dobo, une trend béninoise devenue un moment de fierté partagée.",
    "twitterImage": "https://framerusercontent.com/images/r7Srjn5YojuM8eQrAW1Mlzsb4.jpg?width=2400&height=1350",
    "robots": "noindex, nofollow"
  },
  "/projects/nike": {
    "title": "Coulisses — Lys Sama",
    "description": "Les galères de la création de contenu, racontées avec humour sur Threads et TikTok.",
    "canonical": "/projects/nike",
    "ogType": "website",
    "ogTitle": "Coulisses — Lys Sama",
    "ogDescription": "Les galères de la création de contenu, racontées avec humour sur Threads et TikTok.",
    "ogImage": "https://framerusercontent.com/images/KAdttoufdbmENPnQbvgvJksBwm4.jpg?width=2040&height=1148",
    "ogImageLocal": "/assets/images/KAdttoufdbmENPnQbvgvJksBwm4.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "Coulisses — Lys Sama",
    "twitterDescription": "Les galères de la création de contenu, racontées avec humour sur Threads et TikTok.",
    "twitterImage": "https://framerusercontent.com/images/KAdttoufdbmENPnQbvgvJksBwm4.jpg?width=2040&height=1148",
    "robots": "noindex, nofollow"
  },
  "/projects/under-armour": {
    "title": "ゆめ — Lys Sama",
    "description": "Rose fanée, sirène et ゆめ : l’art et la culture otaku qui signent l’univers de Lys.",
    "canonical": "/projects/under-armour",
    "ogType": "website",
    "ogTitle": "ゆめ — Lys Sama",
    "ogDescription": "Rose fanée, sirène et ゆめ : l’art et la culture otaku qui signent l’univers de Lys.",
    "ogImage": "https://framerusercontent.com/images/mDP6cFLJa8AkD35JWeKaC5TpHA.jpg?width=2040&height=1148",
    "ogImageLocal": "/assets/images/mDP6cFLJa8AkD35JWeKaC5TpHA.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "ゆめ — Lys Sama",
    "twitterDescription": "Rose fanée, sirène et ゆめ : l’art et la culture otaku qui signent l’univers de Lys.",
    "twitterImage": "https://framerusercontent.com/images/mDP6cFLJa8AkD35JWeKaC5TpHA.jpg?width=2040&height=1148",
    "robots": "noindex, nofollow"
  },
  "/journal/fewer-projects-more-attention": {
    "title": "Porter les créateurs de Cotonou — Lys Sama",
    "description": "Pourquoi je porte les looks des stylistes de Cotonou, et ce que ça change pour eux.",
    "canonical": "/journal/fewer-projects-more-attention",
    "ogType": "website",
    "ogTitle": "Porter les créateurs de Cotonou — Lys Sama",
    "ogDescription": "Pourquoi je porte les looks des stylistes de Cotonou, et ce que ça change pour eux.",
    "ogImage": "https://framerusercontent.com/images/QScxeG0hFA9OqTSpKLf3gz2xrk.jpeg?width=1501&height=1047",
    "ogImageLocal": "/assets/images/QScxeG0hFA9OqTSpKLf3gz2xrk.jpeg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "Porter les créateurs de Cotonou — Lys Sama",
    "twitterDescription": "Pourquoi je porte les looks des stylistes de Cotonou, et ce que ça change pour eux.",
    "twitterImage": "https://framerusercontent.com/images/QScxeG0hFA9OqTSpKLf3gz2xrk.jpeg?width=1501&height=1047",
    "robots": "noindex, nofollow"
  },
  "/journal/awards-dont-build-brands": {
    "title": "Une initiale n’est pas une marque — Lys Sama",
    "description": "Tissus imprimés d’initiales vendus comme des « marques » : mon avis sur la copie dans la mode.",
    "canonical": "/journal/awards-dont-build-brands",
    "ogType": "website",
    "ogTitle": "Une initiale n’est pas une marque — Lys Sama",
    "ogDescription": "Tissus imprimés d’initiales vendus comme des « marques » : mon avis sur la copie dans la mode.",
    "ogImage": "https://framerusercontent.com/images/flVP3AWr4maQWn3qiFyeFYgkc.jpeg?width=904&height=1200",
    "ogImageLocal": "/assets/images/flVP3AWr4maQWn3qiFyeFYgkc.jpeg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "Une initiale n’est pas une marque — Lys Sama",
    "twitterDescription": "Tissus imprimés d’initiales vendus comme des « marques » : mon avis sur la copie dans la mode.",
    "twitterImage": "https://framerusercontent.com/images/flVP3AWr4maQWn3qiFyeFYgkc.jpeg?width=904&height=1200",
    "robots": "noindex, nofollow"
  },
  "/journal/why-we-quote-fixed": {
    "title": "Muse au FInAB 2026 — Lys Sama",
    "description": "Muse du styliste Kisito Kora pour la première FInAB Fashion Week, à Cotonou.",
    "canonical": "/journal/why-we-quote-fixed",
    "ogType": "website",
    "ogTitle": "Muse au FInAB 2026 — Lys Sama",
    "ogDescription": "Muse du styliste Kisito Kora pour la première FInAB Fashion Week, à Cotonou.",
    "ogImage": "https://framerusercontent.com/images/ZpxY6EqIMMqzzyJ6gL7tXpVEO5E.jpg?width=2040&height=1148",
    "ogImageLocal": "/assets/images/ZpxY6EqIMMqzzyJ6gL7tXpVEO5E.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "Muse au FInAB 2026 — Lys Sama",
    "twitterDescription": "Muse du styliste Kisito Kora pour la première FInAB Fashion Week, à Cotonou.",
    "twitterImage": "https://framerusercontent.com/images/ZpxY6EqIMMqzzyJ6gL7tXpVEO5E.jpg?width=2040&height=1148",
    "robots": "noindex, nofollow"
  },
  "/journal/the-best-type-is-invisible": {
    "title": "ゆめ, le rêve en signature — Lys Sama",
    "description": "Rose fanée, sirène et ゆめ : les symboles qui signent mon univers.",
    "canonical": "/journal/the-best-type-is-invisible",
    "ogType": "website",
    "ogTitle": "ゆめ, le rêve en signature — Lys Sama",
    "ogDescription": "Rose fanée, sirène et ゆめ : les symboles qui signent mon univers.",
    "ogImage": "https://framerusercontent.com/images/6oZOHgmZZVkcK3G0Wiee0kkF5AI.jpg?width=1537&height=2041",
    "ogImageLocal": "/assets/images/6oZOHgmZZVkcK3G0Wiee0kkF5AI.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "ゆめ, le rêve en signature — Lys Sama",
    "twitterDescription": "Rose fanée, sirène et ゆめ : les symboles qui signent mon univers.",
    "twitterImage": "https://framerusercontent.com/images/6oZOHgmZZVkcK3G0Wiee0kkF5AI.jpg?width=1537&height=2041",
    "robots": "noindex, nofollow"
  },
  "/journal/on-saying-no": {
    "title": "Les galères de créatrice — Lys Sama",
    "description": "L’humour comme réponse aux galères de la création de contenu.",
    "canonical": "/journal/on-saying-no",
    "ogType": "website",
    "ogTitle": "Les galères de créatrice — Lys Sama",
    "ogDescription": "L’humour comme réponse aux galères de la création de contenu.",
    "ogImage": "https://framerusercontent.com/images/k15t4NH13VUuxLJcDCP4aIums.jpg?width=1278&height=1148",
    "ogImageLocal": "/assets/images/k15t4NH13VUuxLJcDCP4aIums.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "Les galères de créatrice — Lys Sama",
    "twitterDescription": "L’humour comme réponse aux galères de la création de contenu.",
    "twitterImage": "https://framerusercontent.com/images/k15t4NH13VUuxLJcDCP4aIums.jpg?width=1278&height=1148",
    "robots": "noindex, nofollow"
  },
  "/journal/the-brief-before-the-brief": {
    "title": "Du droit au contenu — Lys Sama",
    "description": "Un parcours en droit et en informatique au service de la création de contenu.",
    "canonical": "/journal/the-brief-before-the-brief",
    "ogType": "website",
    "ogTitle": "Du droit au contenu — Lys Sama",
    "ogDescription": "Un parcours en droit et en informatique au service de la création de contenu.",
    "ogImage": "https://framerusercontent.com/images/3WFEUak51uY8vHBvH8hhaIvI.jpg?width=901&height=1148",
    "ogImageLocal": "/assets/images/3WFEUak51uY8vHBvH8hhaIvI.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "Du droit au contenu — Lys Sama",
    "twitterDescription": "Un parcours en droit et en informatique au service de la création de contenu.",
    "twitterImage": "https://framerusercontent.com/images/3WFEUak51uY8vHBvH8hhaIvI.jpg?width=901&height=1148",
    "robots": "noindex, nofollow"
  },
  "/journal/small-looks-expensive": {
    "title": "Wini wini, fierté béninoise — Lys Sama",
    "description": "Les trends locales comme « Wini wini » de Dibi Dobo, et la fierté d’être béninoise.",
    "canonical": "/journal/small-looks-expensive",
    "ogType": "website",
    "ogTitle": "Wini wini, fierté béninoise — Lys Sama",
    "ogDescription": "Les trends locales comme « Wini wini » de Dibi Dobo, et la fierté d’être béninoise.",
    "ogImage": "https://framerusercontent.com/images/1I2rFExVypdmLtMAuiNjBMIHg.jpg?width=1632&height=2040",
    "ogImageLocal": "/assets/images/1I2rFExVypdmLtMAuiNjBMIHg.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "Wini wini, fierté béninoise — Lys Sama",
    "twitterDescription": "Les trends locales comme « Wini wini » de Dibi Dobo, et la fierté d’être béninoise.",
    "twitterImage": "https://framerusercontent.com/images/1I2rFExVypdmLtMAuiNjBMIHg.jpg?width=1632&height=2040",
    "robots": "noindex, nofollow"
  },
  "/journal/the-founder-is-the-brand": {
    "title": "Les lysami.e.s — Lys Sama",
    "description": "Ma communauté, les lysami.e.s, est au cœur de tout ce que je crée.",
    "canonical": "/journal/the-founder-is-the-brand",
    "ogType": "website",
    "ogTitle": "Les lysami.e.s — Lys Sama",
    "ogDescription": "Ma communauté, les lysami.e.s, est au cœur de tout ce que je crée.",
    "ogImage": "https://framerusercontent.com/images/2eiFPxAgnGHeZbpcEWbmMREckg.jpg?width=1360&height=2040",
    "ogImageLocal": "/assets/images/2eiFPxAgnGHeZbpcEWbmMREckg.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "Les lysami.e.s — Lys Sama",
    "twitterDescription": "Ma communauté, les lysami.e.s, est au cœur de tout ce que je crée.",
    "twitterImage": "https://framerusercontent.com/images/2eiFPxAgnGHeZbpcEWbmMREckg.jpg?width=1360&height=2040",
    "robots": "noindex, nofollow"
  },
  "/privacy-policy": {
    "title": "Confidentialité — Lys Sama",
    "description": "Lys Sama est créatrice de contenu et stratège digitale à Cotonou. Elle met en lumière la mode béninoise et la culture africaine.",
    "canonical": "/privacy-policy",
    "ogType": "website",
    "ogTitle": "Confidentialité — Lys Sama",
    "ogDescription": "Lys Sama est créatrice de contenu et stratège digitale à Cotonou. Elle met en lumière la mode béninoise et la culture africaine.",
    "ogImage": "https://framerusercontent.com/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "ogImageLocal": "/assets/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "Confidentialité — Lys Sama",
    "twitterDescription": "Lys Sama est créatrice de contenu et stratège digitale à Cotonou. Elle met en lumière la mode béninoise et la culture africaine.",
    "twitterImage": "https://framerusercontent.com/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "robots": "noindex, nofollow"
  },
  "/terms-conditions": {
    "title": "Conditions — Lys Sama",
    "description": "Lys Sama est créatrice de contenu et stratège digitale à Cotonou. Elle met en lumière la mode béninoise et la culture africaine.",
    "canonical": "/terms-conditions",
    "ogType": "website",
    "ogTitle": "Conditions — Lys Sama",
    "ogDescription": "Lys Sama est créatrice de contenu et stratège digitale à Cotonou. Elle met en lumière la mode béninoise et la culture africaine.",
    "ogImage": "https://framerusercontent.com/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "ogImageLocal": "/assets/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "Conditions — Lys Sama",
    "twitterDescription": "Lys Sama est créatrice de contenu et stratège digitale à Cotonou. Elle met en lumière la mode béninoise et la culture africaine.",
    "twitterImage": "https://framerusercontent.com/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "robots": "noindex, nofollow"
  },
  "/cookie-policy": {
    "title": "Cookies — Lys Sama",
    "description": "Lys Sama est créatrice de contenu et stratège digitale à Cotonou. Elle met en lumière la mode béninoise et la culture africaine.",
    "canonical": "/cookie-policy",
    "ogType": "website",
    "ogTitle": "Cookies — Lys Sama",
    "ogDescription": "Lys Sama est créatrice de contenu et stratège digitale à Cotonou. Elle met en lumière la mode béninoise et la culture africaine.",
    "ogImage": "https://framerusercontent.com/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "ogImageLocal": "/assets/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "Cookies — Lys Sama",
    "twitterDescription": "Lys Sama est créatrice de contenu et stratège digitale à Cotonou. Elle met en lumière la mode béninoise et la culture africaine.",
    "twitterImage": "https://framerusercontent.com/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "robots": "noindex, nofollow"
  },
  "/this-page-does-not-exist-404": {
    "title": "Page introuvable — Lys Sama",
    "description": "Lys Sama est créatrice de contenu et stratège digitale à Cotonou. Elle met en lumière la mode béninoise et la culture africaine.",
    "canonical": "/404",
    "ogType": "website",
    "ogTitle": "Page introuvable — Lys Sama",
    "ogDescription": "Lys Sama est créatrice de contenu et stratège digitale à Cotonou. Elle met en lumière la mode béninoise et la culture africaine.",
    "ogImage": "https://framerusercontent.com/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "ogImageLocal": "/assets/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "Page introuvable — Lys Sama",
    "twitterDescription": "Lys Sama est créatrice de contenu et stratège digitale à Cotonou. Elle met en lumière la mode béninoise et la culture africaine.",
    "twitterImage": "https://framerusercontent.com/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "robots": "noindex, nofollow"
  },
  "_demo": true
} as const;

/** Curseur personnalisé (« Cursor » gy, TD:19920–20138) : zone `data-framer-cursor` → variante et libellé. */
export const CURSOR = {
  zones: { '19wcnfu': 'IeznnrIPT', '9iwj27': 'JYlp8aboM', a8ccln: 'gq6hjYdVi', '1v6kiai': 'nSACZy5aP' } as Record<string, string>,
  variants: {
    IeznnrIPT: { name: 'Default', cls: 'framer-v-ez28hj' },
    JYlp8aboM: { name: 'View Project', cls: 'framer-v-m35kh1', label: 'View Project', labelCls: 'framer-onr06i' },
    gq6hjYdVi: { name: 'Read Article', cls: 'framer-v-xkbv01', label: 'Read Article', labelCls: 'framer-1rodrlc' },
    nSACZy5aP: { name: 'Next', cls: 'framer-v-18ule0', label: 'Next', labelCls: 'framer-ihyrq7' },
  } as Record<string, { name: string; cls: string; label?: string; labelCls?: string }>,
};
