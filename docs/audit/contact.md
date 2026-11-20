# Audit — `/contact` et pages légales (agent contact)

Sources :
- module de route `/contact` : `W8Mju5L…` (composant `FramerEzM9YfbIh`, copie embellie `reference/framer-code/pretty/W8Mju5LdxFrIwLSI6bVG_utu9VHQi20w7gSVBP5gn9o.BnIUv_Sm.mjs.js`) ;
- composants partagés : `n_03H18N2` « Contact CTA » et `NIqbhJ1MS` « FAQ Section » (copies embellies `reference/agents/contact/pretty/`) ;
- module des pages légales : `oYmZ9Uf…` (composant `framer-H8D2e`, collection CMS `nmbz5uQon`, copie `reference/framer-code/pretty/oYmZ9UfwdY8OVEX6_MW8CdalbLUYIz93UtFXr9umtmk.CiriyOTv.mjs.js`) ;
- HTML SSR `reference/html/{contact,privacy-policy,terms-conditions,cookie-policy}.html`, CSS `reference/css/<slug>.css` ;
- mesures du banc (`launch({webgl:false})`, `net:'record'`) :
  - `reference/agents/contact/geometry/<slug>/<w>.json` (+ `<w>.webp` pleine page pour 1440/390, et pour /contact aux 4 largeurs) — `scripts/agents/contact/geom.mjs` ;
  - `reference/agents/contact/interact/1440.json` — FAQ, formulaire (vide/invalide), `scripts/agents/contact/interact.mjs` ;
  - `reference/agents/contact/legal/<slug>.json` — corps légal extrait du SSR, `scripts/agents/contact/legal.mjs`.
- Résumé lisible d'un relevé : `node scripts/agents/contact/sum.cjs <json> [y0] [y1]`.

Remarques transverses :
- **Casse** : presque tous les presets Mona Sans ont `text-transform: uppercase` (mesuré : `textTransform: uppercase` sur H1, paragraphes 23px, libellés, nav). Les textes source sont en casse mixte (« start a project. ») et s'affichent en capitales. Les presets Switzer (13/15px) n'ont pas de transformation.
- **Découpage lettre à lettre** : les paragraphes/titres portant un effet « appear » par ligne (Framer text effect) sont rendus en `<span>` par caractère dans le DOM après hydratation (relevés à 1 caractère par span). Le découpage de l'animation est `tokenization: line`.
- **Retrait de 27 espaces** : les intros justifiées (contact et légales) commencent par 27 espaces (contact : 27 espaces littéraux dans le texte ; légales SSR : 27 `<span style="white-space:nowrap"></span>` séparés par des espaces) → retrait visuel de première ligne.
- Header (nav, menu, barre latérale `ylqP4QqPm`), footer, newsletter : hors périmètre (autres agents).

---

## /contact

- Hauteur de page mesurée : **1440 → 3659 px · 1200 → 3659 · 810 → 3303 · 390 → 3843** (hauteur intrinsèque déclarée 3659 × 1200).
- Variantes de page : Desktop `r1pYBYYSK` (`framer-v-1o9zkmb`, ≥ 1200), Tablet `TAfGNYfdM` (`framer-v-47y8pw`, 810–1199.98), Phone `IMbb3qNEh` (`framer-v-1h5o7sz`, ≤ 809.98).
- `html body { background: var(--token-27d215b1-…, #fff) }` ; racine `.framer-C69ZD.framer-1o9zkmb` fond blanc, colonne flex.
- `<title>` : « Mira - Agency & Portfolio Framer Template » (mesuré).
- Arborescence :
  1. `Lenis Smooth Scroll` (nodeId `RMxIskEAA`) : `intensity: 8`, `orientation: vertical`, `smooth: true`, `infinite: false`.
  2. `main.framer-176d49w` « Main » :
     - composant `ylqP4QqPm` (toplevel-deps `I`), masqué en mobile (`hidden-1h5o7sz`), hauteur 3017.25 (tablette 2990.25) : barre latérale gauche noire (« EST. 2012 », globe, icône menu) — composant global ;
     - `div.framer-gj9w7s` « Content » : **Hero → Contact CTA → FAQ Section** ;
  3. `div#overlay`. Puis footer/newsletter (globaux).

### Section 1 — Hero (`section.framer-33hbc5` « Hero » > `framer-eze1q8` « Inside Container »)

Composition par breakpoint (mesures, x/y en px de page) :

| Élément | 1440 | 1200 | 810 | 390 |
|---|---|---|---|---|
| Top (logo + nav) | y 33 | y 33 | y 33 | masqué (`hidden-1h5o7sz`) ; header mobile global |
| H1 « start a project. » | x 426 y 179, 981×81, 90/81, −1.8 | x 366, 801×81, 90/81 | x 268 y 147, 509×63, 70/63, −1.4 | x 23 y 141, 344×45, 50/45, −1 |
| Intro (23px) | x 426 (1re ligne x 537) y 290 | x 366 (477) | 21/24.15, −0.21, y 240 (1re ligne x 397) | 19/21.85, −0.19, y 216 (x 116) |
| Icônes sociales | y 482, x 92/124/156/188, 17×17 | idem | y 432, x 92/122/152/182, **15×15** | y 320, x 23/53/83/113, 15×15 |
| Address | « Address » x 426 y 481 ; valeur x 492 y 463, 180×36 | x 366 / 432 | empilé : x 268, libellé y 378, valeur y 411 | x 23, libellé y 375, valeur y 408 (162×54, 3 lignes) |
| Office hours | libellé x 1093 y 479 ; valeur x 1186 y 463, 180×36 | x 913 / 1006 (161×36) | empilé x 621, y 376 / 411 | empilé x 205, y 373 / 408 |

- **Top** (`header.framer-u167tj`, masqué en mobile) : composant `qKI02fikp` (toplevel `R`, props `JIleRlVOF: 0px 0px 0px 0px`, `LBZNZ9cgr`) = logo « MIRA » (lien `./`) ; composant `LrFxkoXDL` (toplevel `H`, variante `M83fGIck2`, tablette `PtvC8qv5y`, couleur `--token-d33926f3… rgb(13,13,13)`, hauteur 197) = nav « projects (6) / Studio / Journal ». Apparitions `i3k6v0` (delay 1.2) et `6hdhbv` (delay 1.3) : `opacity .001 → 1`, ressort `bounce .1, duration 1.2`.
- **Middle** (`framer-129zzkw`) : `framer-qjvgsc` « Filler » (masqué en mobile) ; `framer-o3m68j` « Heading / Description » :
  - H1 `start a project.` — preset `framer-styles-preset-15kw1n0` (`Tz81QJ8i1`), Mona Sans Variable 400, rgb(13,13,13), uppercase. Apparition `f17uai` : `opacity .001, y 40` → `opacity 1, y 0`, ressort `stiffness 120, damping 25, mass .3`, `delay 1`.
  - Intro (preset `framer-styles-preset-1l3tbw0` / `cZ7bby0gR`, `--framer-text-alignment: justify`) : `<span style="--framer-text-color: var(--token-82d92470…, rgb(104,104,104))">` + 27 espaces + « Book a 30-minute call or send us a message. » + espace, puis « We respond within 24 hours. » en rgb(13,13,13). Lignes : 1440/1200/810 « Book…us a ⏎ message. We respond within 24 hours. » ; 390 « Book…send ⏎ us a message. We respond within 24 hours. ». Effet texte `X` : par **ligne**, `opacity .001, y 15` → visible, tween 0.8 s `ease [.215,.61,.355,1]`, décalage 0.1 s entre lignes, `startDelay 1.1`, `trigger onInView`, `threshold 0`, sans relecture.
- **Bottom** (`framer-92y46i`) :
  - composant `Ilstr65PI` (toplevel `S`, variante `jg6zUAEJU`, tablette/mobile `IvviAYf_X`, couleur rgb(13,13,13)) : 4 icônes X / Instagram / Dribbble / Behance (liens racines, voir links). Apparition `c6ixgn`, `delay 1.4`.
  - « Address » (`framer-wkv69t`, apparition `wkv69t`, `delay 1.5`) : libellé preset `c95aba`/`x8g4OBmQ1` (Mona 15/18, −0.15, rgb(13,13,13)) ; valeur « 2800 East Observatory Road Los Angeles, USA 90027 » rgb(104,104,104) ; lignes « 2800 East Observatory ⏎ Road Los Angeles, USA 90027 » (390 : « 2800… ⏎ Road… ⏎ USA 90027 »). **Démo** (adresse de l'observatoire Griffith).
  - « Office hours » (`framer-1yutnjb`, apparition `1yutnjb`, `delay 1.6`) : `<p><strong>Office Hours</strong></p>` (fonte bold déclarée Inter-Bold, rendu mesuré Mona Sans 400 15px — le preset force la famille) ; « Monday to Friday: 9:00 AM – 6:00 PM » (U+2013), lignes « Monday to Friday: ⏎ 9:00 AM – 6:00 PM ».
  - Les 3 apparitions : ressort `bounce .1, duration 1.2`, `opacity .001 → 1`, sans translation.

### Section 2 — Contact CTA (composant `n_03H18N2`, nodeId `TuPvTuPx5`)

**Même composant que l'accueil** (« Book a call », nodeId accueil `oszha_BRT`, audit homeb), mêmes variantes (`k2n70lu6B` Desktop / `fA3TTozUq` Tablet / `szTNrZI4n` Phone). Seules différences sur /contact :
- `aaeSn4zqw` (« Section Count ») = **0** (accueil : 10). Le libellé reçoit `shBP9axEq = !(count === 0)` = `false` → **index masqué** : le libellé affiche seulement « Book a call » (mesuré x 92 y 565 à 1440, 15/18, blanc).
- Conteneur `framer-1yubnzo-container` : apparition au défilement `opacity 0, y 40` → `opacity 1, y 0`, tween 0.85 s `ease [.215,.61,.355,1]`, `delay 1.4`, une seule fois, `threshold 0`.
- Position (SSR) : y 836.25 (desktop), 809.25 (tablette), 657.25 (mobile, largeur 100vw).
- `BWV1JoM50` (vidéo) = false, `U3duGFpRw` = `` (identiques à l'accueil).

Mesures sur /contact (pour recoupement avec homeb) :
- Fond : image `EYivEG50p7YL92jdB9h51wLz4iU.jpg` (2400×1808, local `/assets/images/EYivEG50p7YL92jdB9h51wLz4iU.jpg`), `img` 1375×1289 à 1440 (x 62 y 535), 1135×1289 à 1200, 745×1157 à 810, 384×1649 à 390 (x 3). Rayon 12 px (`corner-shape: superellipse(1.5)`, repli `0.752`), fond `--token-d33926f3… rgb(10,10,10)`.
- En-tête de carte : « Book a call » ; « 2 slots for » + « August '26 » (Switzer 600 13/18.2, blanc / rgb(188,188,188)) ; avatar 32×32 `I0Zin8u1THTGGeYzoOdXdo8LGQ8.jpg` alt « Portrait of Jin Yuen », « Jin Yuen » / « Founder ».
- Titre « Let's make you ⏎ impossible to ignore. » (« impossible » rgb(245,45,15)) : 80/72 (1440, 1200), 60/54 (810), 45/40.5 (390).
- Sous-titre « Tell us what you're building. ⏎ We'll tell you how we'd make it land. » : 23/26.45 → 21 (810) → 19 (390).
- Formulaire (`form.framer-3onib8`, `method="post"`, action `https://api.framer.com/forms/v1/forms/c71bee6d-c169-40fa-bab9-1ec6105cfe8a/submit`) :

| Phrase | Champ | type | requis | placeholder |
|---|---|---|---|---|
| « My name is » | Name | text | oui | « Name * » |
| « i’m from » | Company | text | non | « Company Name » |
| « and I need help with » | I need help with | text | non | « This service » |
| « here’s the Idea: » | Pitch | textarea | oui | « A sentence or two about the project…* » |
| « my budget is around » | Budget | text | non | « $10k » |
| « and i’d like to start » | Start | select (natif) | oui | options : « When… » (value vide, `disabled`), **« ASAP » (sélectionnée par défaut)**, « Within a month », « This quarter », « Just exploring » |
| « reach me at » | Email | email | oui | « Email * » |

  + 11 champs pot-de-miel cachés (`comments`, `company`, `description`, `details`, `feedback`, `message`, `notes`, `remarks`, `subject`, `title`, `website` ; `tabindex=-1`, `transform: scale(0)`) et un `input[name=framer-noscript]` `pattern="(?!)"` (bloque l'envoi sans JS).
- Mention « By submitting, you agree to our terms and privacy policy. » (liens `./terms-conditions`, `./privacy-policy`, blanc). Bouton `type=submit` « Start a project » (variante « Incomplete » tant que le formulaire est invalide : opacité 0.75).
- Coordonnées : « +1 (805) 450 1432 » (`tel:+18054501432`, 30/34.5 à 1440 ; 27px sur 2 lignes « +1 (805) ⏎ 450 1432 » à 810 ; 23px à 390), « hello@mira.studio » (`mailto:`).
- 3 étapes : « 01 » « You hear back within a day. » / « From the founder, not a form-bot. We read every enquiry personally. » ; « 02 » « A short discovery call. » / « Thirty minutes to understand your goals, audience, and what's not working. » ; « 03 » « A fixed-quote proposal. » / « Clear scope, clear timeline, clear price. No surprises later. ». Colonnes x 426/760/1093 (1440), empilées en mobile (y 1708/1849/1989).

États du formulaire (lus dans le code `n_03H18N2`, sous-composant variantes `Default NgDnrA0wF` / `Loading SHEQP1pE0` / `Success Esh2uhvll` / `Error ecW7wXnOV`) — **non déclenchés sur l'original** :
- `onLoading` → Loading : formulaire `filter: blur(5px)`, `scale .95` ; spinner (`GXGBknxS0`, variante `dxXU_I0jN`, couleur blanche) `opacity 0 → 1`.
- `onSuccess` (en Loading) → attente 800 ms → Success : formulaire `blur(5px)`, `opacity .35`, `scale .95` ; carte de succès `yPQyuYJ6C` (module `cZy_3CBeS`, 229 px de haut, largeur `min(100%, 400px)`, centrée) — détail : audit homeb.
- `onError` → Error : formulaire normal (`filter none, opacity 1, scale 1`).

Validation mesurée (1440, aucun envoi : toute requête non-GET bloquée, 0 requête interceptée) :
- **Vide** : clic « Start a project » → validation native du navigateur, envoi bloqué, focus sur `Name`. Messages (`validationMessage`, Chromium en-US) : Name/Pitch/Email « Please fill out this field. ». Aucun message ou style d'erreur propre au site ; le bouton reste « Incomplete ».
- **E-mail invalide** (« abc ») : Email « Please include an '@' in the email address. 'abc' is missing an '@'. » ; envoi bloqué, focus Name.
- Saisie : la classe `framer-form-input-empty` disparaît dès qu'il y a une valeur ; la largeur du champ **ne s'adapte pas** à la saisie (Name 212.83 px avant/après).
- Focus : champ transparent, bordure blanche, pas d'ombre ; conteneur `rgba(10,10,10,0.75)` (pas de changement de fond mesuré au focus).

### Section 3 — FAQ Section (composant `NIqbhJ1MS`, nodeId `ivJRrjweq`)

**Même composant que l'accueil** (nodeId accueil `leXB47PIh`), mêmes variantes (`eSJMKCwc7` / tablette `z2kibtJCb` / mobile `cJwrpVP4o`). Différence : `xjmUnp2to` = **0** (accueil : 9) → index masqué, libellé « Answers » seul. Pas d'apparition au défilement sur le conteneur de page (`framer-1nk87jb-container`, hauteur 886, y 2131.25 / 2104.25 / 1952.25).

- Textes : « Answers », « FAQ. » (80/72 → 60/54 à 810 → 45/40.5 à 390), 6 questions et réponses :
  1. « What's the difference between monthly and per project? » — « A project has an end date. We build the brand and the site, hand it over, and it's yours. Membership is for what comes after, or instead of it. $4,500 a month keeps one active request moving, and you pause any month you don't need us. »
  2. « Is that the final price? » — « It's a real starting number, not a teaser. Scope is the only thing that moves it: an extra page, a second brand direction, a deadline that needs two of us. We lock the figure on the first call and it holds from there. »
  3. « How long will it take? » — « Two to four weeks for a single piece of work, four to six for a full brand and site. We only take two clients a month, so your start date is real rather than a spot in a queue. »
  4. « Who actually does the work? » — « The founder. You hire Mira, you get Mira. No juniors, no handoffs, no account manager relaying your feedback. »
  5. « What do you need from me to start? » — « A short brief and someone who can make decisions. The clearer you are on the goal, the faster we move. »
  6. « Do you offer support after launch? » — « Every build ships with 30 days of post-launch support. After that, membership keeps us on call at $4,500 a month. Cancel it the month you stop needing us. »
- « more questions? » (40/42 → 35/36.75 → 30/31.5), « Reach out anytime. We're happy to answer before you commit to working together. » (Switzer 13/18.2, rgb(104,104,104)), 3 avatars 30×30 (`I0Zin8u1…`, `r24iki3o…`, `jnuF1GFr…`, alt vide), lien « hello@mira.studio » (`mailto:hello@mira.studio`) + flèche svg 13×13.
- **Règle d'ouverture** (mesurée 1440) : toutes fermées au chargement (item 51 px) ; un clic ouvre (175 px pour Q1) ; **plusieurs peuvent être ouvertes** en même temps (ouvrir Q2 ne ferme pas Q1) ; un second clic referme. Les réponses sont présentes dans le DOM fermé (masquées par le clip de hauteur).
- **Animation** : hauteur 51 → 175 px en 30 images (≈ 464 ms), courbe mesurée `reference/agents/contact/interact/1440.json` (`faqClick1Curve`) cohérente avec la transition du code `duration .46, ease [.87,0,.13,1]` ; icône « Plus » : transition `.26 s` même courbe. Détail complet (survols, apparitions des items 0.85 s) : audit homeb (même composant).

---

## Pages légales (`/privacy-policy`, `/terms-conditions`, `/cookie-policy`)

Un seul modèle (`framer-H8D2e`) alimenté par la collection CMS `nmbz5uQon` (champs : titre, intro, date, corps riche). Variantes : Desktop `ubhAJxDVd` (`framer-v-1xlf4m4`), Tablet `JXnc50ruY` (`framer-v-o63hkf`), Phone `JbWAj6WZ3` (`framer-v-71q57o`).

Hauteurs de page mesurées :

| Page | 1440 | 1200 | 810 | 390 |
|---|---|---|---|---|
| privacy-policy | 4631 | 4631 | 4299 | 4496 |
| terms-conditions | 5351 | 5351 | 4948 | 5252 |
| cookie-policy | 3275 | 3275 | 3003 | 3136 |

Structure : `Lenis Smooth Scroll` (`DnCy35RYA`) ; `Main` ; barre latérale `Z12dwDZtM` (masquée en mobile) ; `framer-enn8d8` « Legal Content » (padding 33/0/120 desktop, 33/0/90 tablette, 141/0/60 mobile) > `framer-dbjhxy` « Inside Container » (max 1920, padding 0 33 ; mobile 0 22 ; gap 120 / 90 / 40) :
1. **Top** (`framer-1b00xfu`, masqué en mobile) : logo `ArW5WxiQw` (apparition `1w1rh85`, delay **1.3**) et nav `cKSmOo1Yf` (`1kt5x92`, delay **1.4**, variantes `M83fGIck2`/`PtvC8qv5y`), ressort `bounce .1, duration 1.2`, `opacity .001 → 1`. (Décalés de +0.1 s par rapport à /contact.)
2. **Content** (`framer-14mi3ot`, grille 4 colonnes gap 20 ; mobile colonne flex) :
   - « Last Updated » (`framer-85otex`, apparition `85otex`, ressort delay 1.2, `opacity .001 → 1`) : **sticky `top: 50px`** desktop et tablette, `relative` en mobile ; `padding-top 6px`, gap 15. « Last updated » (preset `c95aba`, rgb(104,104,104)) + `<time datetime="…">` (rgb(13,13,13)). Date formatée `toLocaleString('en-US', { dateStyle: 'short', timeZone: 'UTC' })`.
   - « Heading / Content » (`framer-1bdpxdc`, span 3, gap 60) > « Title / Intro » (`framer-xk7x5z`, gap 40) :
     - H1 (`framer-1p9fj0l`, max 600, preset `15kw1n0`) : apparition `opacity .001, y 40` → ressort `stiffness 120, damping 25, mass .3, delay 1`. 90/81 (1440, 1200), 70/63 (810), 50/45 (390). « Terms & Conditions. » sur 2 lignes (« Terms & ⏎ Conditions. ») à toutes les largeurs.
     - Intro (`framer-4itqln`, max 500, preset `1l3tbw0`, justifié, 27 espaces de retrait) : balise **`<p>` en desktop, `<h2>` en tablette et mobile** (surcharge de variante). Effet par ligne identique à /contact (`startDelay 1.1`). Texte saisi en CAPITALES dans le CMS.
   - Corps riche (`framer-104pdxd`, « Content », max 500 desktop, sans max en mobile, `--framer-paragraph-spacing: 30px`) : apparition au défilement `opacity 0, y 40` → ressort `stiffness 120, damping 25, mass .3, delay 1.3`, une fois. Presets : h2 `a7jmun`, h3 `lrueyv`, p `zesxvw`, a `vu1xf3`, blockquote `p6i9mt`, img `bfvq69`, table `h4j97n`.

Typographie mesurée du corps :

| | 1440 / 1200 | 810 | 390 |
|---|---|---|---|
| h2 | Mona 400 40/42, −0.8 | 35/36.75, −0.7 | 30/31.5, −0.6 |
| h3 | Mona 400 25/27.5, −0.5 | 23/25.3, −0.46 | 19/20.9, −0.38 |
| p, li | Switzer 600 15/21.75, −0.45, rgb(104,104,104) | 15/21.75 | 14/20.3, −0.42 |

h2/h3 en capitales (text-transform), texte source en casse titre. Position du corps : x 426 (1440), 366 (1200), 268 (810), 22 (390) ; largeur 500 (346 en 390).

Lien du corps (preset `vu1xf3`) : texte `#fff` (`--token-27d215b1`) sur fond `--token-f277370d` (mesuré rgb(245,45,15)), survol : texte `--token-33c8dbd0 #f5f4e7`, fond `--token-6e62038c #1d1f19`, transition `color/background-color/border-radius .6s cubic-bezier(.4,0,.2,1)`. Seul lien : privacy « hello@mirastudio.com » (`mailto:hello@mirastudio.com`, `target="_blank"`).

Contenu : `content/legal/<slug>.md` (corps, même ordre de balises ; vérifié identique au DOM rendu à 1440 et 390 : 0 écart, casse ignorée).

| Page | H1 | Last updated | `datetime` | Corps |
|---|---|---|---|---|
| privacy-policy | « Privacy Policy. » | **7/28/26** | 2026-07-28T00:29:40.343Z | 5 h2, 15 h3, 11 p, 9 ul |
| terms-conditions | « Terms & Conditions. » | 7/10/26 | 2026-07-10T20:21:50.799Z | 7 h2, 18 h3, 14 p, 9 ul |
| cookie-policy | « Cookies. » | 7/10/26 | 2026-07-10T20:22:00.842Z | 2 h2, 8 h3, 8 p, 6 ul |

Intros (SSR, caractère pour caractère, guillemets droits) :
- privacy : « MIRA STUDIO ("WE," "OUR," OR "US") RESPECTS YOUR PRIVACY. THIS PRIVACY POLICY EXPLAINS WHAT INFORMATION WE COLLECT WHEN YOU VISIT OUR WEBSITE OR ENGAGE THE STUDIO, HOW WE USE IT, AND THE CHOICES YOU HAVE. THIS POLICY APPLIES TO ALL VISITORS AND CLIENTS OF MIRA STUDIO. » (la valeur par défaut du module utilise des guillemets courbes “WE,” — non affichée).
- terms : « THESE TERMS AND CONDITIONS GOVERN YOUR USE OF THE MIRA STUDIO WEBSITE AND THE PROJECTS, SERVICES, AND TEMPLATES WE PROVIDE. BY USING OUR SITE OR ENGAGING US FOR WORK, YOU AGREE TO THESE TERMS. IF YOU DO NOT AGREE, PLEASE DO NOT USE THE SITE OR ENGAGE THE STUDIO. »
- cookie : « COOKIES ARE SMALL TEXT FILES STORED ON YOUR DEVICE WHEN YOU VISIT OUR WEBSITE. THIS POLICY EXPLAINS WHICH COOKIES MIRA STUDIO USES, WHY WE USE THEM, AND HOW YOU CAN CONTROL THEM. WE KEEP COOKIE USE TO A MINIMUM. »

### Incohérences (à reproduire, à signaler pour le rebranding)
1. `/cookie-policy` § « Our Cookie Banner » décrit une bannière de consentement et un lien « Cookie preferences » dans le footer : **aucun des deux n'existe** (aucune bannière observée au chargement, footer sans ce lien).
2. `/cookie-policy` § « Updates to This Policy » cite la date « "Last Updated" » (U majuscule) alors que l'étiquette affichée est « Last updated ».
3. Privacy : adresse `hello@mirastudio.com` alors que le reste du site utilise `hello@mira.studio`.
4. Privacy datée 7/28/26, les deux autres 7/10/26 (le MISSION ne citait que 7/10/26 pour cookie-policy : confirmé).
5. Cookie policy cite Google Analytics, Vimeo/YouTube : non vérifié comme réellement chargé (aucune requête de mesure observée dans l'archive — non recherché exhaustivement).
6. Liste « Privacy » et « Terms » : contenu générique de démonstration (« Mira Studio »), `demo: true`.

## Inconnues restantes
- Survols du formulaire (bouton, champs), du lien e-mail FAQ et des icônes sociales : non mesurés ici (composants partagés : homeb / global).
- Courbes des apparitions de page non relevées image par image (paramètres lus dans le code uniquement).
- Positions des lignes de l'intro légale à 810/1200 : relevés présents dans `geometry/<slug>/<w>.json`, non résumés.
