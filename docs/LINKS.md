# Liens de l'original

| Page | Breakpoint | Libellé | Destination | Cible | Statut (réel / placeholder / incohérent) |
|---|---|---|---|---|---|
| toutes | tous | Logo (menu, barre mobile, footer, barre de page) — aria-label `home` | `/` | même onglet | réel |
| toutes | tous | Home (menu ; footer mobile) | `/` | même onglet | réel |
| toutes | tous | projects (6) | `/projects` | même onglet | réel |
| toutes | tous | Studio | `/studio` | même onglet | réel |
| toutes | tous | Journal | `/journal` | même onglet | réel |
| toutes | tous | Contact Button (menu + footer), aria-label `contact` | `/contact` | même onglet | réel |
| toutes | tous | X Link | `https://x.com` | `_blank` | placeholder (racine du réseau) |
| toutes | tous | Instagram Link | `https://instagram.com` | `_blank` | placeholder |
| toutes | tous | Dribbble Link | `https://dribbble.com` | `_blank` | placeholder |
| toutes | tous | Behance Link | `https://behance.com` | `_blank` | placeholder |
| toutes | tous | Privacy Policy. (footer) | `/privacy-policy` | même onglet | réel |
| toutes | tous | Terms & Conditions. (footer) | `/terms-conditions` | même onglet | réel |
| toutes | tous | Cookies. (footer) | `/cookie-policy` | même onglet | réel |
| toutes | tous | privacy policy. (consentement newsletter) | `/privacy-policy` | même onglet | réel |
| toutes | tous | Formulaire newsletter (action) | `https://api.framer.com/forms/v1/forms/27a96a9c-7735-4436-88cf-6e806682dbd7/submit` | POST | incohérent pour le clone (service Framer de l'auteur) |
| toutes (masqué) | mobile | Template Buy Button | `https://launchnow.design/checkout/mira?utm_medium=phonebtn` | — | hors périmètre (bandeau du template) |
| / (Hero, slot du slider) | tous | Gucci | ./projects/gucci | même onglet | réel |
| / (Hero, slot du slider) | tous | Chanel | ./projects/chanel | même onglet | réel |
| / (Hero, slot du slider) | tous | Puma | ./projects/puma | même onglet | réel |
| / (Hero, slot du slider) | tous | Adidas | ./projects/adidas | même onglet | réel |
| / (Hero « Top ») | desktop, tablette (absent mobile) | logo « mira » (aria-label home) | ./ | même onglet | réel |
| / (Hero « Top ») | desktop (« Small »), tablette (« Small Phone ») | projects (6) | ./projects | même onglet | réel |
| / (Hero « Top ») | desktop, tablette | Studio | ./studio | même onglet | réel |
| / (Hero « Top ») | desktop, tablette | Journal | ./journal | même onglet | réel |
| / (Hero « Bottom ») | tous (variante Desktop / Phone) | bouton photo (aria-label contact) | ./contact | même onglet | réel |
| / (About) | tous (Desktop - Right / Phone Right) | See the studio | ./studio | même onglet | réel |
| / (Work Section) | tous | See all 6 | ./projects | même onglet | réel |
| / (Why us) | tous | Start a project | ./contact | même onglet | réel |
| / (Services, ×4 cartes) | tous (Desktop - Right / Phone Right) | Start a project | ./contact | même onglet | réel |
| / (Team, Hiring Block) | tous | Email us | (aucun `href`) | — | placeholder (`<a>` sans adresse) |
| `/` (08 Pricing) | tous | `Start a project` | page `EzM9YfbIh` = `/contact` (4 variantes, même page) | même onglet | réel |
| `/` (Reel) | tous | (clic sur la vignette, pas un lien) → lecteur YouTube | `https://www.youtube.com/watch?v=6aioEoCdBJw` (iframe dans une fenêtre) | fenêtre superposée | placeholder (vidéo du template) |
| `/` (09 FAQ) | tous | `hello@mira.studio` | `mailto:hello@mira.studio` | — | placeholder (adresse de démonstration) |
| `/` (10 Book a call) | tous | `terms` | `./terms-conditions` | même onglet | réel |
| `/` (10 Book a call) | tous | `privacy policy.` | `./privacy-policy` | même onglet | réel |
| `/` (10 Book a call) | tous | formulaire `Start a project` (submit) | `https://api.framer.com/forms/v1/forms/c71bee6d-c169-40fa-bab9-1ec6105cfe8a/submit` (POST en JS) | — | réel côté original, à remplacer dans le clone |
| `/` (10 Book a call) | tous | `+1 (805) 450 1432` | `tel:+18054501432` | `_blank` | placeholder |
| `/` (10 Book a call) | tous | `hello@mira.studio` | `mailto:hello@mira.studio` | `_blank` | placeholder |
| `/` (11 From the journal) | tous | `View All` | `./journal` | même onglet | réel |
| `/` (11 From the journal) | tous | `Fewer projects, more attention.` | `./journal/fewer-projects-more-attention` | même onglet | réel |
| `/` (11 From the journal) | tous | `Awards don't build brands.` | `./journal/awards-dont-build-brands` | même onglet | réel |
| `/` (11 From the journal) | tous | `Why we quote fixed.` | `./journal/why-we-quote-fixed` | même onglet | réel |
| `/` (11 From the journal) | tous | `The best type is invisible.` | `./journal/the-best-type-is-invisible` | même onglet | réel |
| /projects/gucci | tous | Back to projects | `../projects` → /projects | même onglet | réel |
| /projects/gucci | D, T (absent Phone : `hidden-1nc0ivo`) | logo (aria-label « home ») | `../` → / | même onglet | réel |
| /projects/gucci | tous (une instance D/T, une instance Phone) | View live | `https://launchnow.design?utm_source=miratemplate` | `_blank` | placeholder (site de vente du template, paramètre utm) |
| /projects/gucci | tous (instances Desktop et Phone) | Chanel (More projects) | `./chanel` → /projects/chanel | même onglet | réel |
| /projects/gucci | tous (instances Desktop et Phone) | Puma (More projects) | `./puma` → /projects/puma | même onglet | réel |
| /projects/gucci | tous (instances Desktop et Phone) | Adidas (More projects) | `./adidas` → /projects/adidas | même onglet | réel |
| /projects/gucci | tous (instances Desktop et Phone) | Nike (More projects) | `./nike` → /projects/nike | même onglet | réel |
| /projects/gucci | tous (instances Desktop et Phone) | Under Armour (More projects) | `./under-armour` → /projects/under-armour | même onglet | réel |
| /projects/gucci | tous | Play Film (pas un lien : ouvre une fenêtre YouTube) | `https://www.youtube.com/watch?v=6aioEoCdBJw` (iframe YouTube) | fenêtre superposée | placeholder (vidéo de démonstration commune à gucci et puma) |
| /projects/chanel | tous | Back to projects | `../projects` → /projects | même onglet | réel |
| /projects/chanel | D, T (absent Phone : `hidden-1nc0ivo`) | logo (aria-label « home ») | `../` → / | même onglet | réel |
| /projects/chanel | tous (une instance D/T, une instance Phone) | View live | `https://launchnow.design?utm_source=miratemplate` | `_blank` | placeholder (site de vente du template, paramètre utm) |
| /projects/chanel | tous (instances Desktop et Phone) | Gucci (More projects) | `./gucci` → /projects/gucci | même onglet | réel |
| /projects/chanel | tous (instances Desktop et Phone) | Puma (More projects) | `./puma` → /projects/puma | même onglet | réel |
| /projects/chanel | tous (instances Desktop et Phone) | Adidas (More projects) | `./adidas` → /projects/adidas | même onglet | réel |
| /projects/chanel | tous (instances Desktop et Phone) | Nike (More projects) | `./nike` → /projects/nike | même onglet | réel |
| /projects/chanel | tous (instances Desktop et Phone) | Under Armour (More projects) | `./under-armour` → /projects/under-armour | même onglet | réel |
| /projects/puma | tous | Back to projects | `../projects` → /projects | même onglet | réel |
| /projects/puma | D, T (absent Phone : `hidden-1nc0ivo`) | logo (aria-label « home ») | `../` → / | même onglet | réel |
| /projects/puma | tous (une instance D/T, une instance Phone) | View live | `https://launchnow.design?utm_source=miratemplate` | `_blank` | placeholder (site de vente du template, paramètre utm) |
| /projects/puma | tous (instances Desktop et Phone) | Gucci (More projects) | `./gucci` → /projects/gucci | même onglet | réel |
| /projects/puma | tous (instances Desktop et Phone) | Chanel (More projects) | `./chanel` → /projects/chanel | même onglet | réel |
| /projects/puma | tous (instances Desktop et Phone) | Adidas (More projects) | `./adidas` → /projects/adidas | même onglet | réel |
| /projects/puma | tous (instances Desktop et Phone) | Nike (More projects) | `./nike` → /projects/nike | même onglet | réel |
| /projects/puma | tous (instances Desktop et Phone) | Under Armour (More projects) | `./under-armour` → /projects/under-armour | même onglet | réel |
| /projects/puma | tous | Play Film (pas un lien : ouvre une fenêtre YouTube) | `https://www.youtube.com/watch?v=6aioEoCdBJw` (iframe YouTube) | fenêtre superposée | placeholder (vidéo de démonstration commune à gucci et puma) |
| /projects/adidas | tous | Back to projects | `../projects` → /projects | même onglet | réel |
| /projects/adidas | D, T (absent Phone : `hidden-1nc0ivo`) | logo (aria-label « home ») | `../` → / | même onglet | réel |
| /projects/adidas | tous (une instance D/T, une instance Phone) | View live | `https://launchnow.design?utm_source=miratemplate` | `_blank` | placeholder (site de vente du template, paramètre utm) |
| /projects/adidas | tous (instances Desktop et Phone) | Gucci (More projects) | `./gucci` → /projects/gucci | même onglet | réel |
| /projects/adidas | tous (instances Desktop et Phone) | Chanel (More projects) | `./chanel` → /projects/chanel | même onglet | réel |
| /projects/adidas | tous (instances Desktop et Phone) | Puma (More projects) | `./puma` → /projects/puma | même onglet | réel |
| /projects/adidas | tous (instances Desktop et Phone) | Nike (More projects) | `./nike` → /projects/nike | même onglet | réel |
| /projects/adidas | tous (instances Desktop et Phone) | Under Armour (More projects) | `./under-armour` → /projects/under-armour | même onglet | réel |
| /projects/nike | tous | Back to projects | `../projects` → /projects | même onglet | réel |
| /projects/nike | D, T (absent Phone : `hidden-1nc0ivo`) | logo (aria-label « home ») | `../` → / | même onglet | réel |
| /projects/nike | tous (une instance D/T, une instance Phone) | View live | `https://launchnow.design?utm_source=miratemplate` | `_blank` | placeholder (site de vente du template, paramètre utm) |
| /projects/nike | tous (instances Desktop et Phone) | Gucci (More projects) | `./gucci` → /projects/gucci | même onglet | réel |
| /projects/nike | tous (instances Desktop et Phone) | Chanel (More projects) | `./chanel` → /projects/chanel | même onglet | réel |
| /projects/nike | tous (instances Desktop et Phone) | Puma (More projects) | `./puma` → /projects/puma | même onglet | réel |
| /projects/nike | tous (instances Desktop et Phone) | Adidas (More projects) | `./adidas` → /projects/adidas | même onglet | réel |
| /projects/nike | tous (instances Desktop et Phone) | Under Armour (More projects) | `./under-armour` → /projects/under-armour | même onglet | réel |
| /projects/under-armour | tous | Back to projects | `../projects` → /projects | même onglet | réel |
| /projects/under-armour | D, T (absent Phone : `hidden-1nc0ivo`) | logo (aria-label « home ») | `../` → / | même onglet | réel |
| /projects/under-armour | tous (une instance D/T, une instance Phone) | View live | `https://launchnow.design?utm_source=miratemplate` | `_blank` | placeholder (site de vente du template, paramètre utm) |
| /projects/under-armour | tous (instances Desktop et Phone) | Gucci (More projects) | `./gucci` → /projects/gucci | même onglet | réel |
| /projects/under-armour | tous (instances Desktop et Phone) | Chanel (More projects) | `./chanel` → /projects/chanel | même onglet | réel |
| /projects/under-armour | tous (instances Desktop et Phone) | Puma (More projects) | `./puma` → /projects/puma | même onglet | réel |
| /projects/under-armour | tous (instances Desktop et Phone) | Adidas (More projects) | `./adidas` → /projects/adidas | même onglet | réel |
| /projects/under-armour | tous (instances Desktop et Phone) | Nike (More projects) | `./nike` → /projects/nike | même onglet | réel |
| /studio | tous | Hero, sections Culture, Principles, Recognition | aucun lien | — | — |
| /studio | tous | Équipe : « Email us » | aucun `href` | — | placeholder |
| /studio | tous | Journal : « View All » | `./journal` | même onglet | réel |
| /studio | tous | Journal : (Studio Notes) Fewer projects, more attention. 6/15/26 | `./journal/fewer-projects-more-attention` | même onglet | réel |
| /studio | tous | Journal : (Opinion) Awards don't build brands. 5/5/26 | `./journal/awards-dont-build-brands` | même onglet | réel |
| /studio | tous | Journal : (Process) Why we quote fixed. 4/3/26 | `./journal/why-we-quote-fixed` | même onglet | réel |
| /studio | tous | Journal : (Craft) The best type is invisible. 3/20/26 | `./journal/the-best-type-is-invisible` | même onglet | réel |
| /studio | tous | Prise de contact : +1 (805) 450 1432 | `tel:+18054501432` | `_blank` | placeholder (numéro de démonstration) |
| /studio | tous | Prise de contact : hello@mira.studio | `mailto:hello@mira.studio` | `_blank` | placeholder (adresse du template) |
| /studio | tous | Prise de contact : terms | `./terms-conditions` | même onglet | réel |
| /studio | tous | Prise de contact : privacy policy. | `./privacy-policy` | même onglet | réel |
| /studio | ≥ 810 | Nav latérale / hero : X, Instagram, Dribbble, Behance | `https://x.com`, `https://instagram.com`, `https://dribbble.com`, `https://behance.com` | `_blank` | placeholder |
| /journal | tous | Carte « Fewer projects, more attention. » | /journal/fewer-projects-more-attention | même onglet | réel |
| /journal | tous | Carte « Awards don't build brands. » | /journal/awards-dont-build-brands | même onglet | réel |
| /journal | tous | Carte « Why we quote fixed. » | /journal/why-we-quote-fixed | même onglet | réel |
| /journal | tous | Carte « The best type is invisible. » | /journal/the-best-type-is-invisible | même onglet | réel |
| /journal | tous | Carte « On saying no. » | /journal/on-saying-no | même onglet | réel |
| /journal | tous | Carte « The brief before the brief. » | /journal/the-brief-before-the-brief | même onglet | réel |
| /journal | tous | Carte « Small looks expensive. » | /journal/small-looks-expensive | même onglet | réel |
| /journal | tous | Carte « The founder is the brand. » | /journal/the-founder-is-the-brand | même onglet | réel |
| /journal/<slug> (×8) | tous | Back to the journal | /journal | même onglet | réel |
| /journal/<slug> (×8) | tous | View All | /journal | même onglet | réel |
| /journal/fewer-projects-more-attention | tous | More articles (4 cartes) | /journal/awards-dont-build-brands, /journal/why-we-quote-fixed, /journal/the-best-type-is-invisible, /journal/on-saying-no | même onglet | réel |
| /journal/awards-dont-build-brands | tous | More articles (4 cartes) | /journal/fewer-projects-more-attention, /journal/why-we-quote-fixed, /journal/the-best-type-is-invisible, /journal/on-saying-no | même onglet | réel |
| /journal/why-we-quote-fixed | tous | More articles (4 cartes) | /journal/fewer-projects-more-attention, /journal/awards-dont-build-brands, /journal/the-best-type-is-invisible, /journal/on-saying-no | même onglet | réel |
| /journal/the-best-type-is-invisible | tous | More articles (4 cartes) | /journal/fewer-projects-more-attention, /journal/awards-dont-build-brands, /journal/why-we-quote-fixed, /journal/on-saying-no | même onglet | réel |
| /journal/on-saying-no | tous | More articles (4 cartes) | /journal/fewer-projects-more-attention, /journal/awards-dont-build-brands, /journal/why-we-quote-fixed, /journal/the-best-type-is-invisible | même onglet | réel |
| /journal/the-brief-before-the-brief | tous | More articles (4 cartes) | /journal/fewer-projects-more-attention, /journal/awards-dont-build-brands, /journal/why-we-quote-fixed, /journal/the-best-type-is-invisible | même onglet | réel |
| /journal/small-looks-expensive | tous | More articles (4 cartes) | /journal/fewer-projects-more-attention, /journal/awards-dont-build-brands, /journal/why-we-quote-fixed, /journal/the-best-type-is-invisible | même onglet | réel |
| /journal/the-founder-is-the-brand | tous | More articles (4 cartes) | /journal/fewer-projects-more-attention, /journal/awards-dont-build-brands, /journal/why-we-quote-fixed, /journal/the-best-type-is-invisible | même onglet | réel |
| /journal/<slug> (×8) | tous | Share on Twitter (bouton) | `https://twitter.com/intent/tweet?url=<url>&text=<titre>` via `window.open` | `_blank`, popup 600×400 | réel (service tiers ; domaine twitter.com et non x.com) |
| /journal/<slug> (×8) | tous | Share on LinkedIn (bouton) | `https://www.linkedin.com/sharing/share-offsite/?url=<url>` via `window.open` | `_blank`, popup 600×400 | réel (service tiers) |
| /journal/<slug> (×8) | tous | Share on Email (bouton) | `mailto:?subject=<titre>&body=<chapeau>⏎⏎<url>` (⏎ = saut de ligne) via `window.open` | `_blank` | réel |
| /journal/<slug> (×8) | tous | Copy URL to clipboard (bouton) | aucune navigation (presse-papiers) | — | réel |
| /contact | tous | icône X (hero, Bottom) | https://x.com | _blank | placeholder (racine du réseau) |
| /contact | tous | icône Instagram (hero) | https://instagram.com | _blank | placeholder |
| /contact | tous | icône Dribbble (hero) | https://dribbble.com | _blank | placeholder |
| /contact | tous | icône Behance (hero) | https://behance.com | _blank | placeholder (domaine `behance.com`, le vrai est behance.net) |
| /contact | tous | « terms » (mention du formulaire) | ./terms-conditions | — | réel |
| /contact | tous | « privacy policy. » (mention du formulaire) | ./privacy-policy | — | réel |
| /contact | tous | « +1 (805) 450 1432 » | tel:+18054501432 | _blank | placeholder (numéro de démo) |
| /contact | tous | « hello@mira.studio » (carte CTA) | mailto:hello@mira.studio | _blank | placeholder (adresse de démo) |
| /contact | tous | « hello@mira.studio » + flèche (FAQ, « Desktop - Right » / « Phone Right ») | mailto:hello@mira.studio | — | placeholder |
| /contact | tous | formulaire (action) | https://api.framer.com/forms/v1/forms/c71bee6d-c169-40fa-bab9-1ec6105cfe8a/submit (POST) | — | réel côté Framer — à remplacer (le clone ne doit appeler aucun domaine Framer) |
| /privacy-policy | tous | « hello@mirastudio.com » (corps, § Your Rights and Choices) | mailto:hello@mirastudio.com | _blank | incohérent (le reste du site : hello@mira.studio) |
| /terms-conditions | tous | — | aucun lien dans le corps | — | — |
| /cookie-policy | tous | « Cookie preferences » (cité dans le texte) | inexistant | — | incohérent (lien décrit mais absent du footer) |
