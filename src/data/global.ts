// Données globales (navigation, footer, newsletter, réseaux, métadonnées par page).
// Généré par scripts/agents/global/gen-data.mjs depuis reference/agents/global/meta.json et public/assets/manifest.json.
// Textes exacts de l'original (docs/audit/global.md). Ne pas éditer à la main : relancer le script.

export const SOCIAL = [
  {
    "id": "x",
    "label": "X",
    "ariaLabel": "X Link",
    "href": "https://x.com",
    "target": "_blank",
    "placeholder": true
  },
  {
    "id": "instagram",
    "label": "IG",
    "ariaLabel": "Instagram Link",
    "href": "https://instagram.com",
    "target": "_blank",
    "placeholder": true
  },
  {
    "id": "dribbble",
    "label": "Dribbble",
    "ariaLabel": "Dribbble Link",
    "href": "https://dribbble.com",
    "target": "_blank",
    "placeholder": true
  },
  {
    "id": "behance",
    "label": "Behance",
    "ariaLabel": "Behance Link",
    "href": "https://behance.com",
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
      "label": "Home",
      "href": "/"
    },
    {
      "label": "projects",
      "href": "/projects",
      "count": "(6)"
    },
    {
      "label": "Studio",
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
  "establishedTag": " EST. 2012",
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
    "name": "MIRA",
    "symbol": "®",
    "statement": "All rights reserved."
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
        "text": "New work from the studio, fresh thinking from the founder, the occasional opinion.",
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
      "label": "Join Now",
      "error": "Error, Try Again"
    },
    "consent": {
      "name": "Agreed to terms / privacy",
      "required": true,
      "before": "By signing up, you’re agreeing to our ",
      "linkLabel": "privacy policy.",
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
      "label": "Privacy Policy.",
      "href": "/privacy-policy"
    },
    {
      "label": "Terms & Conditions.",
      "href": "/terms-conditions"
    },
    {
      "label": "Cookies.",
      "href": "/cookie-policy"
    }
  ],
  "contactLabel": "let’s talk",
  "wordmark": {
    "name": "mira",
    "symbol": "®",
    "descriptor": "Studio"
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
    "title": "Mira - Agency & Portfolio Framer Template",
    "description": "A dark, WebGL-driven Framer template for agencies and studios: cinematic preloader, 3D project showcase, CMS portfolio, and a live pricing calculator.",
    "canonical": "https://mirastudio.framer.website/",
    "ogType": "website",
    "ogTitle": "Mira - Agency & Portfolio Framer Template",
    "ogDescription": "A dark, WebGL-driven Framer template for agencies and studios: cinematic preloader, 3D project showcase, CMS portfolio, and a live pricing calculator.",
    "ogImage": "https://framerusercontent.com/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "ogImageLocal": "/assets/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "Mira - Agency & Portfolio Framer Template",
    "twitterDescription": "A dark, WebGL-driven Framer template for agencies and studios: cinematic preloader, 3D project showcase, CMS portfolio, and a live pricing calculator.",
    "twitterImage": "https://framerusercontent.com/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "robots": "max-image-preview:large"
  },
  "/projects": {
    "title": "Mira - Agency & Portfolio Framer Template",
    "description": "A dark, WebGL-driven Framer template for agencies and studios: cinematic preloader, 3D project showcase, CMS portfolio, and a live pricing calculator.",
    "canonical": "https://mirastudio.framer.website/projects",
    "ogType": "website",
    "ogTitle": "Mira - Agency & Portfolio Framer Template",
    "ogDescription": "A dark, WebGL-driven Framer template for agencies and studios: cinematic preloader, 3D project showcase, CMS portfolio, and a live pricing calculator.",
    "ogImage": "https://framerusercontent.com/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "ogImageLocal": "/assets/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "Mira - Agency & Portfolio Framer Template",
    "twitterDescription": "A dark, WebGL-driven Framer template for agencies and studios: cinematic preloader, 3D project showcase, CMS portfolio, and a live pricing calculator.",
    "twitterImage": "https://framerusercontent.com/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "robots": "max-image-preview:large"
  },
  "/studio": {
    "title": "Mira - Agency & Portfolio Framer Template",
    "description": "A dark, WebGL-driven Framer template for agencies and studios: cinematic preloader, 3D project showcase, CMS portfolio, and a live pricing calculator.",
    "canonical": "https://mirastudio.framer.website/studio",
    "ogType": "website",
    "ogTitle": "Mira - Agency & Portfolio Framer Template",
    "ogDescription": "A dark, WebGL-driven Framer template for agencies and studios: cinematic preloader, 3D project showcase, CMS portfolio, and a live pricing calculator.",
    "ogImage": "https://framerusercontent.com/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "ogImageLocal": "/assets/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "Mira - Agency & Portfolio Framer Template",
    "twitterDescription": "A dark, WebGL-driven Framer template for agencies and studios: cinematic preloader, 3D project showcase, CMS portfolio, and a live pricing calculator.",
    "twitterImage": "https://framerusercontent.com/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "robots": "max-image-preview:large"
  },
  "/journal": {
    "title": "Mira - Agency & Portfolio Framer Template",
    "description": "A dark, WebGL-driven Framer template for agencies and studios: cinematic preloader, 3D project showcase, CMS portfolio, and a live pricing calculator.",
    "canonical": "https://mirastudio.framer.website/journal",
    "ogType": "website",
    "ogTitle": "Mira - Agency & Portfolio Framer Template",
    "ogDescription": "A dark, WebGL-driven Framer template for agencies and studios: cinematic preloader, 3D project showcase, CMS portfolio, and a live pricing calculator.",
    "ogImage": "https://framerusercontent.com/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "ogImageLocal": "/assets/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "Mira - Agency & Portfolio Framer Template",
    "twitterDescription": "A dark, WebGL-driven Framer template for agencies and studios: cinematic preloader, 3D project showcase, CMS portfolio, and a live pricing calculator.",
    "twitterImage": "https://framerusercontent.com/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "robots": "max-image-preview:large"
  },
  "/contact": {
    "title": "Mira - Agency & Portfolio Framer Template",
    "description": "A dark, WebGL-driven Framer template for agencies and studios: cinematic preloader, 3D project showcase, CMS portfolio, and a live pricing calculator.",
    "canonical": "https://mirastudio.framer.website/contact",
    "ogType": "website",
    "ogTitle": "Mira - Agency & Portfolio Framer Template",
    "ogDescription": "A dark, WebGL-driven Framer template for agencies and studios: cinematic preloader, 3D project showcase, CMS portfolio, and a live pricing calculator.",
    "ogImage": "https://framerusercontent.com/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "ogImageLocal": "/assets/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "Mira - Agency & Portfolio Framer Template",
    "twitterDescription": "A dark, WebGL-driven Framer template for agencies and studios: cinematic preloader, 3D project showcase, CMS portfolio, and a live pricing calculator.",
    "twitterImage": "https://framerusercontent.com/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "robots": "max-image-preview:large"
  },
  "/projects/gucci": {
    "title": "Gucci",
    "description": "Gucci needed its new eyewear capsule to land online with the same weight it carries in the case.",
    "canonical": "https://mirastudio.framer.website/projects/gucci",
    "ogType": "website",
    "ogTitle": "Gucci",
    "ogDescription": "Gucci needed its new eyewear capsule to land online with the same weight it carries in the case.",
    "ogImage": "https://framerusercontent.com/images/uQzt05iescwLlC6DKg4M1qwR6o.jpg?width=2400&height=1350",
    "ogImageLocal": "/assets/images/uQzt05iescwLlC6DKg4M1qwR6o.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "Gucci",
    "twitterDescription": "Gucci needed its new eyewear capsule to land online with the same weight it carries in the case.",
    "twitterImage": "https://framerusercontent.com/images/uQzt05iescwLlC6DKg4M1qwR6o.jpg?width=2400&height=1350",
    "robots": "max-image-preview:large"
  },
  "/projects/chanel": {
    "title": "Chanel",
    "description": "Chanel asked for a skincare launch as considered as the formulas it was built to carry.",
    "canonical": "https://mirastudio.framer.website/projects/chanel",
    "ogType": "website",
    "ogTitle": "Chanel",
    "ogDescription": "Chanel asked for a skincare launch as considered as the formulas it was built to carry.",
    "ogImage": "https://framerusercontent.com/images/7lmRyzySl3tRUJAR0FTAuBtPBtM.jpg?width=2040&height=1148",
    "ogImageLocal": "/assets/images/7lmRyzySl3tRUJAR0FTAuBtPBtM.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "Chanel",
    "twitterDescription": "Chanel asked for a skincare launch as considered as the formulas it was built to carry.",
    "twitterImage": "https://framerusercontent.com/images/7lmRyzySl3tRUJAR0FTAuBtPBtM.jpg?width=2040&height=1148",
    "robots": "max-image-preview:large"
  },
  "/projects/puma": {
    "title": "Puma",
    "description": "Puma needed its technical outerwear line to read as gear, not merchandising.",
    "canonical": "https://mirastudio.framer.website/projects/puma",
    "ogType": "website",
    "ogTitle": "Puma",
    "ogDescription": "Puma needed its technical outerwear line to read as gear, not merchandising.",
    "ogImage": "https://framerusercontent.com/images/NuuceAGvddP5JL0LEhEjp8bdnM.jpg?width=1152&height=1440",
    "ogImageLocal": "/assets/images/NuuceAGvddP5JL0LEhEjp8bdnM.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "Puma",
    "twitterDescription": "Puma needed its technical outerwear line to read as gear, not merchandising.",
    "twitterImage": "https://framerusercontent.com/images/NuuceAGvddP5JL0LEhEjp8bdnM.jpg?width=1152&height=1440",
    "robots": "max-image-preview:large"
  },
  "/projects/adidas": {
    "title": "Adidas",
    "description": "Adidas wanted its tennis line to feel like the club on a Sunday morning, not a stadium broadcast.",
    "canonical": "https://mirastudio.framer.website/projects/adidas",
    "ogType": "website",
    "ogTitle": "Adidas",
    "ogDescription": "Adidas wanted its tennis line to feel like the club on a Sunday morning, not a stadium broadcast.",
    "ogImage": "https://framerusercontent.com/images/r7Srjn5YojuM8eQrAW1Mlzsb4.jpg?width=2400&height=1350",
    "ogImageLocal": "/assets/images/r7Srjn5YojuM8eQrAW1Mlzsb4.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "Adidas",
    "twitterDescription": "Adidas wanted its tennis line to feel like the club on a Sunday morning, not a stadium broadcast.",
    "twitterImage": "https://framerusercontent.com/images/r7Srjn5YojuM8eQrAW1Mlzsb4.jpg?width=2400&height=1350",
    "robots": "max-image-preview:large"
  },
  "/projects/nike": {
    "title": "Nike",
    "description": "Nike wanted a drop page that moves like the sport does. On the track, on the court, and on the street.",
    "canonical": "https://mirastudio.framer.website/projects/nike",
    "ogType": "website",
    "ogTitle": "Nike",
    "ogDescription": "Nike wanted a drop page that moves like the sport does. On the track, on the court, and on the street.",
    "ogImage": "https://framerusercontent.com/images/KAdttoufdbmENPnQbvgvJksBwm4.jpg?width=2040&height=1148",
    "ogImageLocal": "/assets/images/KAdttoufdbmENPnQbvgvJksBwm4.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "Nike",
    "twitterDescription": "Nike wanted a drop page that moves like the sport does. On the track, on the court, and on the street.",
    "twitterImage": "https://framerusercontent.com/images/KAdttoufdbmENPnQbvgvJksBwm4.jpg?width=2040&height=1148",
    "robots": "max-image-preview:large"
  },
  "/projects/under-armour": {
    "title": "Under Armour",
    "description": "Under Armour wanted its studio training line to feel like the practice, not the locker room.",
    "canonical": "https://mirastudio.framer.website/projects/under-armour",
    "ogType": "website",
    "ogTitle": "Under Armour",
    "ogDescription": "Under Armour wanted its studio training line to feel like the practice, not the locker room.",
    "ogImage": "https://framerusercontent.com/images/mDP6cFLJa8AkD35JWeKaC5TpHA.jpg?width=2040&height=1148",
    "ogImageLocal": "/assets/images/mDP6cFLJa8AkD35JWeKaC5TpHA.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "Under Armour",
    "twitterDescription": "Under Armour wanted its studio training line to feel like the practice, not the locker room.",
    "twitterImage": "https://framerusercontent.com/images/mDP6cFLJa8AkD35JWeKaC5TpHA.jpg?width=2040&height=1148",
    "robots": "max-image-preview:large"
  },
  "/journal/fewer-projects-more-attention": {
    "title": "Fewer projects, more attention.",
    "description": "Why Mira takes fewer projects than most studios our size, and what it does for the work.",
    "canonical": "https://mirastudio.framer.website/journal/fewer-projects-more-attention",
    "ogType": "website",
    "ogTitle": "Fewer projects, more attention.",
    "ogDescription": "Why Mira takes fewer projects than most studios our size, and what it does for the work.",
    "ogImage": "https://framerusercontent.com/images/QScxeG0hFA9OqTSpKLf3gz2xrk.jpeg?width=1501&height=1047",
    "ogImageLocal": "/assets/images/QScxeG0hFA9OqTSpKLf3gz2xrk.jpeg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "Fewer projects, more attention.",
    "twitterDescription": "Why Mira takes fewer projects than most studios our size, and what it does for the work.",
    "twitterImage": "https://framerusercontent.com/images/QScxeG0hFA9OqTSpKLf3gz2xrk.jpeg?width=1501&height=1047",
    "robots": "max-image-preview:large"
  },
  "/journal/awards-dont-build-brands": {
    "title": "Awards don't build brands.",
    "description": "The relationship between award-winning design and business outcomes is not what most studios pretend.",
    "canonical": "https://mirastudio.framer.website/journal/awards-dont-build-brands",
    "ogType": "website",
    "ogTitle": "Awards don't build brands.",
    "ogDescription": "The relationship between award-winning design and business outcomes is not what most studios pretend.",
    "ogImage": "https://framerusercontent.com/images/flVP3AWr4maQWn3qiFyeFYgkc.jpeg?width=904&height=1200",
    "ogImageLocal": "/assets/images/flVP3AWr4maQWn3qiFyeFYgkc.jpeg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "Awards don't build brands.",
    "twitterDescription": "The relationship between award-winning design and business outcomes is not what most studios pretend.",
    "twitterImage": "https://framerusercontent.com/images/flVP3AWr4maQWn3qiFyeFYgkc.jpeg?width=904&height=1200",
    "robots": "max-image-preview:large"
  },
  "/journal/why-we-quote-fixed": {
    "title": "Why we quote fixed.",
    "description": "Every Mira project is priced up front. No hourly. No estimates that quietly grow. Here is why.",
    "canonical": "https://mirastudio.framer.website/journal/why-we-quote-fixed",
    "ogType": "website",
    "ogTitle": "Why we quote fixed.",
    "ogDescription": "Every Mira project is priced up front. No hourly. No estimates that quietly grow. Here is why.",
    "ogImage": "https://framerusercontent.com/images/ZpxY6EqIMMqzzyJ6gL7tXpVEO5E.jpg?width=2040&height=1148",
    "ogImageLocal": "/assets/images/ZpxY6EqIMMqzzyJ6gL7tXpVEO5E.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "Why we quote fixed.",
    "twitterDescription": "Every Mira project is priced up front. No hourly. No estimates that quietly grow. Here is why.",
    "twitterImage": "https://framerusercontent.com/images/ZpxY6EqIMMqzzyJ6gL7tXpVEO5E.jpg?width=2040&height=1148",
    "robots": "max-image-preview:large"
  },
  "/journal/the-best-type-is-invisible": {
    "title": "The best type is invisible.",
    "description": "Typography choices we make so you do not have to notice them.",
    "canonical": "https://mirastudio.framer.website/journal/the-best-type-is-invisible",
    "ogType": "website",
    "ogTitle": "The best type is invisible.",
    "ogDescription": "Typography choices we make so you do not have to notice them.",
    "ogImage": "https://framerusercontent.com/images/6oZOHgmZZVkcK3G0Wiee0kkF5AI.jpg?width=1537&height=2041",
    "ogImageLocal": "/assets/images/6oZOHgmZZVkcK3G0Wiee0kkF5AI.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "The best type is invisible.",
    "twitterDescription": "Typography choices we make so you do not have to notice them.",
    "twitterImage": "https://framerusercontent.com/images/6oZOHgmZZVkcK3G0Wiee0kkF5AI.jpg?width=1537&height=2041",
    "robots": "max-image-preview:large"
  },
  "/journal/on-saying-no": {
    "title": "On saying no.",
    "description": "The projects Mira turns down, and why we are better for it.",
    "canonical": "https://mirastudio.framer.website/journal/on-saying-no",
    "ogType": "website",
    "ogTitle": "On saying no.",
    "ogDescription": "The projects Mira turns down, and why we are better for it.",
    "ogImage": "https://framerusercontent.com/images/k15t4NH13VUuxLJcDCP4aIums.jpg?width=1278&height=1148",
    "ogImageLocal": "/assets/images/k15t4NH13VUuxLJcDCP4aIums.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "On saying no.",
    "twitterDescription": "The projects Mira turns down, and why we are better for it.",
    "twitterImage": "https://framerusercontent.com/images/k15t4NH13VUuxLJcDCP4aIums.jpg?width=1278&height=1148",
    "robots": "max-image-preview:large"
  },
  "/journal/the-brief-before-the-brief": {
    "title": "The brief before the brief.",
    "description": "Why the most important part of a project happens before anyone opens a Figma file.",
    "canonical": "https://mirastudio.framer.website/journal/the-brief-before-the-brief",
    "ogType": "website",
    "ogTitle": "The brief before the brief.",
    "ogDescription": "Why the most important part of a project happens before anyone opens a Figma file.",
    "ogImage": "https://framerusercontent.com/images/3WFEUak51uY8vHBvH8hhaIvI.jpg?width=901&height=1148",
    "ogImageLocal": "/assets/images/3WFEUak51uY8vHBvH8hhaIvI.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "The brief before the brief.",
    "twitterDescription": "Why the most important part of a project happens before anyone opens a Figma file.",
    "twitterImage": "https://framerusercontent.com/images/3WFEUak51uY8vHBvH8hhaIvI.jpg?width=901&height=1148",
    "robots": "max-image-preview:large"
  },
  "/journal/small-looks-expensive": {
    "title": "Small looks expensive.",
    "description": "Why restraint reads as premium, and how to design for it without becoming boring.",
    "canonical": "https://mirastudio.framer.website/journal/small-looks-expensive",
    "ogType": "website",
    "ogTitle": "Small looks expensive.",
    "ogDescription": "Why restraint reads as premium, and how to design for it without becoming boring.",
    "ogImage": "https://framerusercontent.com/images/1I2rFExVypdmLtMAuiNjBMIHg.jpg?width=1632&height=2040",
    "ogImageLocal": "/assets/images/1I2rFExVypdmLtMAuiNjBMIHg.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "Small looks expensive.",
    "twitterDescription": "Why restraint reads as premium, and how to design for it without becoming boring.",
    "twitterImage": "https://framerusercontent.com/images/1I2rFExVypdmLtMAuiNjBMIHg.jpg?width=1632&height=2040",
    "robots": "max-image-preview:large"
  },
  "/journal/the-founder-is-the-brand": {
    "title": "The founder is the brand.",
    "description": "For small studios and small brands, the founder's presence is the most under-used asset.",
    "canonical": "https://mirastudio.framer.website/journal/the-founder-is-the-brand",
    "ogType": "website",
    "ogTitle": "The founder is the brand.",
    "ogDescription": "For small studios and small brands, the founder's presence is the most under-used asset.",
    "ogImage": "https://framerusercontent.com/images/2eiFPxAgnGHeZbpcEWbmMREckg.jpg?width=1360&height=2040",
    "ogImageLocal": "/assets/images/2eiFPxAgnGHeZbpcEWbmMREckg.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "The founder is the brand.",
    "twitterDescription": "For small studios and small brands, the founder's presence is the most under-used asset.",
    "twitterImage": "https://framerusercontent.com/images/2eiFPxAgnGHeZbpcEWbmMREckg.jpg?width=1360&height=2040",
    "robots": "max-image-preview:large"
  },
  "/privacy-policy": {
    "title": "Privacy Policy.",
    "description": "                           MIRA STUDIO (\"WE,\" \"OUR,\" OR \"US\") RESPECTS YOUR PRIVACY. THIS PRIVACY POLICY EXPLAINS WHAT INFORMATION WE COLLECT WHEN YOU VISIT OUR WEBSITE OR ENGAGE THE STUDIO, HOW WE USE IT, AND THE CHOICES YOU HAVE. THIS POLICY APPLIES TO ALL VISITORS AND CLIENTS OF MIRA STUDIO.",
    "canonical": "https://mirastudio.framer.website/privacy-policy",
    "ogType": "website",
    "ogTitle": "Privacy Policy.",
    "ogDescription": "                           MIRA STUDIO (\"WE,\" \"OUR,\" OR \"US\") RESPECTS YOUR PRIVACY. THIS PRIVACY POLICY EXPLAINS WHAT INFORMATION WE COLLECT WHEN YOU VISIT OUR WEBSITE OR ENGAGE THE STUDIO, HOW WE USE IT, AND THE CHOICES YOU HAVE. THIS POLICY APPLIES TO ALL VISITORS AND CLIENTS OF MIRA STUDIO.",
    "ogImage": "https://framerusercontent.com/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "ogImageLocal": "/assets/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "Privacy Policy.",
    "twitterDescription": "                           MIRA STUDIO (\"WE,\" \"OUR,\" OR \"US\") RESPECTS YOUR PRIVACY. THIS PRIVACY POLICY EXPLAINS WHAT INFORMATION WE COLLECT WHEN YOU VISIT OUR WEBSITE OR ENGAGE THE STUDIO, HOW WE USE IT, AND THE CHOICES YOU HAVE. THIS POLICY APPLIES TO ALL VISITORS AND CLIENTS OF MIRA STUDIO.",
    "twitterImage": "https://framerusercontent.com/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "robots": "max-image-preview:large"
  },
  "/terms-conditions": {
    "title": "Terms & Conditions.",
    "description": "                           THESE TERMS AND CONDITIONS GOVERN YOUR USE OF THE MIRA STUDIO WEBSITE AND THE PROJECTS, SERVICES, AND TEMPLATES WE PROVIDE. BY USING OUR SITE OR ENGAGING US FOR WORK, YOU AGREE TO THESE TERMS. IF YOU DO NOT AGREE, PLEASE DO NOT USE THE SITE OR ENGAGE THE STUDIO.",
    "canonical": "https://mirastudio.framer.website/terms-conditions",
    "ogType": "website",
    "ogTitle": "Terms & Conditions.",
    "ogDescription": "                           THESE TERMS AND CONDITIONS GOVERN YOUR USE OF THE MIRA STUDIO WEBSITE AND THE PROJECTS, SERVICES, AND TEMPLATES WE PROVIDE. BY USING OUR SITE OR ENGAGING US FOR WORK, YOU AGREE TO THESE TERMS. IF YOU DO NOT AGREE, PLEASE DO NOT USE THE SITE OR ENGAGE THE STUDIO.",
    "ogImage": "https://framerusercontent.com/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "ogImageLocal": "/assets/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "Terms & Conditions.",
    "twitterDescription": "                           THESE TERMS AND CONDITIONS GOVERN YOUR USE OF THE MIRA STUDIO WEBSITE AND THE PROJECTS, SERVICES, AND TEMPLATES WE PROVIDE. BY USING OUR SITE OR ENGAGING US FOR WORK, YOU AGREE TO THESE TERMS. IF YOU DO NOT AGREE, PLEASE DO NOT USE THE SITE OR ENGAGE THE STUDIO.",
    "twitterImage": "https://framerusercontent.com/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "robots": "max-image-preview:large"
  },
  "/cookie-policy": {
    "title": "Cookies.",
    "description": "                           COOKIES ARE SMALL TEXT FILES STORED ON YOUR DEVICE WHEN YOU VISIT OUR WEBSITE. THIS POLICY EXPLAINS WHICH COOKIES MIRA STUDIO USES, WHY WE USE THEM, AND HOW YOU CAN CONTROL THEM. WE KEEP COOKIE USE TO A MINIMUM.",
    "canonical": "https://mirastudio.framer.website/cookie-policy",
    "ogType": "website",
    "ogTitle": "Cookies.",
    "ogDescription": "                           COOKIES ARE SMALL TEXT FILES STORED ON YOUR DEVICE WHEN YOU VISIT OUR WEBSITE. THIS POLICY EXPLAINS WHICH COOKIES MIRA STUDIO USES, WHY WE USE THEM, AND HOW YOU CAN CONTROL THEM. WE KEEP COOKIE USE TO A MINIMUM.",
    "ogImage": "https://framerusercontent.com/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "ogImageLocal": "/assets/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "Cookies.",
    "twitterDescription": "                           COOKIES ARE SMALL TEXT FILES STORED ON YOUR DEVICE WHEN YOU VISIT OUR WEBSITE. THIS POLICY EXPLAINS WHICH COOKIES MIRA STUDIO USES, WHY WE USE THEM, AND HOW YOU CAN CONTROL THEM. WE KEEP COOKIE USE TO A MINIMUM.",
    "twitterImage": "https://framerusercontent.com/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "robots": "max-image-preview:large"
  },
  "/this-page-does-not-exist-404": {
    "title": "Mira - Agency & Portfolio Framer Template",
    "description": "A dark, WebGL-driven Framer template for agencies and studios: cinematic preloader, 3D project showcase, CMS portfolio, and a live pricing calculator.",
    "canonical": "https://mirastudio.framer.website/404",
    "ogType": "website",
    "ogTitle": "Mira - Agency & Portfolio Framer Template",
    "ogDescription": "A dark, WebGL-driven Framer template for agencies and studios: cinematic preloader, 3D project showcase, CMS portfolio, and a live pricing calculator.",
    "ogImage": "https://framerusercontent.com/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "ogImageLocal": "/assets/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "twitterCard": "summary_large_image",
    "twitterTitle": "Mira - Agency & Portfolio Framer Template",
    "twitterDescription": "A dark, WebGL-driven Framer template for agencies and studios: cinematic preloader, 3D project showcase, CMS portfolio, and a live pricing calculator.",
    "twitterImage": "https://framerusercontent.com/images/NgND3aThhFzx3wouexK6EF7Wm4.jpg",
    "robots": "noindex"
  },
  "_demo": true
} as const;
