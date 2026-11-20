# Audit — page `/studio`

Module de route : `reference/framer/js/NwlKyBRSD4PgYbVYS65tYXF3w0VwGKzFWJp4IqxaGL0.B1gHvVgw.mjs` (composant `FramerZTkXH13L0`, copie lisible `reference/framer-code/pretty/NwlKyBR…B1gHvVgw.mjs.js`, ci-dessous « module »). Taille intrinsèque Framer 1200 × 9010.
Copies lisibles des composants (agent studio) : `reference/agents/studio/pretty/` (`rWbx8J1Z4` compteur/principe/prix, `jvKQE_ghl` équipe/clients, `D21Ecyglh`, `cM8Lf1CeK` fond de hero, `toplevel-deps`).
Variantes : Desktop `WMiKYG4KO` (`framer-v-ynarf2`, ≥ 1200), Tablet `vlHT1huGw` (`framer-v-o8ajoo`, 810–1199.98), Phone `aAE3bWPzx` (`framer-v-n4shxz`, ≤ 809.98). `html body { background: rgb(255, 255, 255); }`.

**Mesures brutes** (banc, `webgl:false`, `net:'record'`) :
- DOM rendu par largeur : `reference/agents/studio/dom-{1440,1200,810,390}.json` (outline `data-framer-name`, textes par bloc + têtes de ligne, liens, médias, styles) — `scripts/agents/studio/capture.mjs`.
- Compteurs, hero au défilement, principes, survols : `reference/agents/studio/anim-1440.json` — `scripts/agents/studio/anim.mjs`.
- Lightbox : `reference/agents/studio/lightbox-1440.json` — `scripts/agents/studio/lightbox.mjs`.
- CSS : `reference/css/studio.css` (extraction par classe avec un parcours node des règles, cf. ci-dessous).

Hauteur de page mesurée : 1440 → 9190 px · 1200 → 9110 · 810 → 8846 · 390 → 9244.

Typographie : tous les textes sont en **Mona Sans Variable** (presets) sauf mention. Notation `taille/interligne/espacement · axes`.

## Structure (ordre du DOM) et boîtes mesurées

```
Lenis Smooth Scroll (l_dsh9X8x) intensity 8, vertical, smooth, infinite:false
main « Main » framer-es8rs7
  [desktop+tablette] « Spacer » (0,0,59×800) + YFX2C3bRw (toplevel-deps T, hidden-n4shxz) = barre latérale/nav (couverte ailleurs)
  « Content » framer-1n70wml   (x 59, largeur W−59 ; mobile x 0)
    « Hero » section.framer-1x0mefb
    « Studio » div.framer-c2l0bx (fond token 27d215b1 #fff, overflow clip, colonne, gap 0)
      « Culture » section.framer-1nyqe0x (id z810EMSTp)
      Équipe b8Sr4iAT1 (jvKQE_ghl)
      « Principles » section.framer-epz8fu
      Clients j5aYpocx_ (jvKQE_ghl)
      « Recognition » section.framer-1v9qbyv
      Journal IG23J3JvE (pgtQfyOCv)
      Prise de contact dnCTHsXKw (n_03H18N2)
div#overlay
```

| Bloc (y, hauteur) | 1440 | 1200 | 810 | 390 |
|---|---|---|---|---|
| Hero | 0, 900 | 0, 900 | 0, 900 | 0, 828 |
| Culture | 900, 860 | 900, 920 | 900, 780 | 828, 884.5 |
| Équipe | 1760, 2040.7 | 1820, 1856.7 | 1680, 1836.8 | 1712.5, 1779.4 |
| Principles | 3800.7, 949.3 | 3676.7, 1072.9 | 3516.8, 821 | 3491.9, 928.4 |
| Clients | 4750, 561 | 4749.6, 561 | 4337.8, 501 | 4420.3, 643.6 |
| Recognition | 5311, 700 | 5310.6, 700 | 4838.8, 638.8 | 5063.9, 722.5 |
| Journal | 6011, 939.1 | 6010.6, 859.4 | 5477.6, 1415.2 | 5786.4, 908 |
| Prise de contact | 6950, 1295.3 | 6870, 1295.3 | 6892.8, 1163 | 6694.4, 1655.4 |

Sections d'ancrage (`framerScrollSections`) : `z810EMSTp` culture, `d1ch5ACkr` rules, `ROLTNYOih` 1, `r3DttxKWZ` 2, `lRPF_Q4Gq` 3, `ApUbvy6fk` 4.
Footer/newsletter : hors module de route (couverts ailleurs).

## 1. Hero — `section.framer-1x0mefb` « Hero »

**CSS** : colonne centrée, gap 15px, `position: sticky; top: 0` en desktop ; tablette et mobile `position: relative; top: unset`. Le div « Studio » (fond blanc) recouvre donc le hero en desktop.

**Défilement (desktop seulement, mesuré)** :
- Hero : `onScrollTarget`, cible = Culture, seuil 1 : `scale 1 → 0.925`, `opacity 1 → 0.6`, **lié linéairement au défilement** (pas au temps) : à scrollY 100 → scale 0.991269 / opacité 0.953434 ; 400 → 0.965076 / 0.813737 ; 800 → 0.930151 / 0.627474 ; ≥ 900 → 0.925 / 0.6. Soit progression ≈ scrollY / 859 (borné à 1) — l'origine exacte de 859 est à confirmer (Culture top 900 − 41 ?). Saut 0 → 900 : valeur finale dès la 1re image (pas de lissage). Désactivé tablette/mobile (`__framer__styleTransformEffectEnabled: void 0`).
- « Inside Container » `framer-hb5ox2` : parallaxe `speed 130` → `translateY = −0.3 × scrollY` (100 → −30, 900 → −270, 1100 → −330). Désactivée tablette/mobile.

**Fond** « BG Outer Container » `framer-oqp9pp` : `position:absolute; inset:0; padding:3px; overflow:clip; pointer-events:none`. Composant `cM8Lf1CeK` (nodeId `uEQORonyP`, partagé avec d'autres héros d'image) :
- Image `https://framerusercontent.com/images/Fcz0H6OyRLSzO1j6CmBZCeoCrYA.jpg` → `/assets/images/Fcz0H6OyRLSzO1j6CmBZCeoCrYA.jpg` (2816 × 1536), alt `""`, `object-fit: cover`, 50 % 50 %, rayon 12px (`corner-shape: superellipse(1.5)`, repli 0.752). Boîte : 1440 → (62,3) 1375 × 894 ; 1200 → 1135 × 894 ; 810 → 745 × 894 ; 390 → (3,3) 384 × 822.
- Voile « Dark overlay » rgb(13,13,13) opacité 0.65 ; fond du composant rgb(13,13,13).
- Révélation : variante « Hidden Mask » `DV6oTfLLg` → « Revealed » `Uh95rRMl7` au seuil 0.5, une fois. Hidden : `mask: linear-gradient(90deg, #000 0%, transparent 0%)`, `scale 1.5` ; Revealed : masque 100 %, `scale 1`. Transitions déclarées : ressort stiffness 120 / damping 25 / mass 0.3, délai 0.8 s ; voile tween 0.5 s `[.4,0,.2,1]` délai 0.1. Courbe non mesurée (se joue sous le préchargeur).

**Inside Container** : `max-width 1920px; min-height 100vh; padding 33px; justify space-between` ; mobile `min-height 92vh; padding 84px 23px 23px`.
- « Top » `header.framer-1k134jf` : en desktop/tablette contient `FwB2lT7RG` (toplevel-deps R, appear 8330z8) et `hSavlwsFi` (toplevel-deps H, appear 7hchzy) = rangée de navigation (« projects (6) », « Studio », « Journal »…, couverte par l'agent global) ; masqués en mobile (le header y fait 344 × 57 à y 84).
- « Heading » : « Filler » (masqué mobile) + « Heading / Description » :
  - H1 `framer-1wbcwny` **`the studio.`** (affiché en capitales), blanc, `"wdth" 75, "wght" 700`, `ss07`. Texte ajusté : 1440/1200 → 139.757/125.782/−2.795px, boîte 549.9 × 131.1 à x 425.8 (1200 : x 365.8) ; 810 → 134.67/121.203, 332.5 × 79.2 ; 390 → 91.1006/81.9905, 344 × 82. viewBox : desktop `0 0 527.5 126`, tablette `0 0 508.5 121`, mobile `0 0 344 82`.
  - P `framer-alv9ty` (preset cZ7bby0gR) : texte exact (avec 27 espaces d'indentation en tête) « `                           A brand and web studio for founders who care how they’re seen. Small on purpose, and personal by design.` » — blanc, 23/26.45/−0.23 (810 : 21/24.15 ; 390 : 19/21.85), `"wdth" 75, "wght" 675`, `ss07`, **justifié**, capitales. 1440 : 550 × 52.9 (2 lignes) ; 810 : 3 lignes ; 390 : 3 lignes.
- « Bottom » `framer-9yv8xi` (1440 : y 733, h 134 ; 390 : y 616, h 189) :
  - « Location » : « based in » (rgb(188,188,188)) / « los angeles », « tokyo » (blanc) — 15/18/−0.15, `"wdth" 80, "wght" 700`.
  - « Services » : « Services » (gris 188) + liste CMS `CcG2fKX4y` (limite 4) : Brand Identity, Web Design, Framer Dev, Art Direction (blanc, 22 px de pas).
  - `RNUhVhhfJ` (toplevel-deps S) : bouton/lien couvert par l'agent global.
- Apparitions (état initial opacité 0.001) : ressort `bounce .1, duration 1.2`, délais 1.25 (8330z8), 1.35 (7hchzy), 1.45 (Location), 1.55 (Services), 1.65 s (RNUhVhhfJ) ; H1 opacité .001 / y 40 → 1 / 0, ressort 120/25/0.3 délai 1.15 ; P par **ligne** y 15 → 0, tween 0.8 s `[.215,.61,.355,1]`, décalage 0.1 s, startDelay 1.25, onInView, sans relecture. Le texte est découpé en `<span>` par caractère (mesuré).

## 2. Culture — `section.framer-1nyqe0x`

**CSS** : padding 120px 0 (tablette 90, mobile 60), gap 50. Inside Container `framer-1emkou7` : max 1920, padding 0 33px (mobile 0 23px), gap 80px 20px (mobile 40px 20px). « Statement / Images » `framer-ty9ie9` et « Numbers » `framer-1dufcq3` : grille 4 colonnes `minmax(50px,1fr)`, gap 40px 20px ; mobile 1 colonne.

- « Images / Text » (1 colonne) : « Our culture. » (rgb(13,13,13), 15/18, `wdth 80 wght 700`, 1440 : (92,1020)).
- « Images » `framer-te4fjx` : rangée, gap 3px, max-width 75 % ; tablette en **colonne** ; mobile max-width unset. Images carrées (`aspect-ratio: 1`), rayon 10px (repli 0.752), cover :
  1. `framer-1frrzdj` : `https://framerusercontent.com/images/nSbtH034kMtV4RIIQvLQWKUqNE.jpg` → `/assets/images/nSbtH034kMtV4RIIQvLQWKUqNE.jpg` (1920 × 2560), alt « Black and white photo of the studio team posing together ».
  2. `framer-1jz2epk` : `https://framerusercontent.com/images/0d8RfpcfGGwdXWT0Qp7kuUbdgo.png` → `/assets/images/0d8RfpcfGGwdXWT0Qp7kuUbdgo.png` (1920 × 1280), alt « Black and white photo of the team playing table football ».
  - Tailles : 1440 → 116.2 × 116.2 à (92,1053) et (211.2,1053) ; 1200 → 93.7 ; 810 → 117.2, empilées (y 1023 et 1143.2) ; 390 → 170.5 à (23,921) et (196.5,921).
  - Apparition : opacité 0, x −20 → 1, 0 ; tween 0.85 s `[.215,.61,.355,1]`, délai 0.3 (img 1) / 0.4 (img 2).
  - **Lightbox** (curseur `pointer`, mesuré) : clic → fond fixe plein écran `rgba(23, 22, 22, 0.75)` z-index 10 (opacité 1 dès 32 ms) et image agrandie par animation de mise en page depuis la vignette jusqu'à 840 × 840 à (300,30) en 1440 × 900 (padding 30, maxWidth 1920 ; carré, ratio de la vignette) ; durée ≈ 460–480 ms, courbe `[.87,0,.13,1]` (mesure : 32 ms 117 px → 256 ms 582 px → 480 ms 840 px). **Échap ferme** (vérifié). Fermeture au clic du fond : non testée (Échap avait déjà fermé).
- H2 `framer-1qpqs3n` (preset LMUl9NNGN, `grid-column: span 3`, mobile span 1, `white-space: pre-wrap`) : « `                          We care about details most people never notice. We argue about kerning and mean it. Everyone here has taste and gets to use it. Nothing leaves the studio that we wouldn’t put our own name on.` » (indentation = span de 26 espaces ; fin « own name on. » dans un span distinct). Rgb(13,13,13), justifié, capitales, `wdth 75 wght 700`, `ss07`. 1440 : 60/60/−1.2, 981.3 × 300 (5 lignes) ; 1200 : 801.3 × 360 (6) ; 810 : 40/40, 508.8 × 280 (7) ; 390 : 30/30, 344 × 210 (7), sous les images (y 1131.5). Effet par ligne : y 15, tween 1.1 s, décalage 0.1, startDelay 0.2, onInView, sans relecture.
- « Numbers » : « by the numbers. » (`framer-1saqg22`, 1440 : (92,1400)) + « Metrics » `framer-1sbfwjx` (span 2 ; mobile span 1 ; grille 2 × 2, gap 40px…) de 4 compteurs (rWbx8J1Z4 export r, 200 × 100 nominal) :

| # | nodeId | fin | suffixe | affichage final | description |
|---|---|---|---|---|---|
| 1 | NI4wOITNg | 12 | — | `12` | industries we’ve shipped in |
| 2 | UC380yGKP | 3 | — | `3` | people max on any project |
| 3 | Min_2H9ia | 24 | `hr` | `24hr` | longest you’ll wait for a reply |
| 4 | vVNUiSd64 | 92 | `%` | `92%` | of our launches are still live |

  - Description : rgb(104,104,104), 15/18 ; nombre : H2 preset iLKnB8A0V, rgb(13,13,13), 1440/1200 80/72/−1.6, 810 60/54, 390 45/40.5. Position 1440 : colonnes x 759.5 et 1093.3, rangées y 1400 et 1540.
  - Animation (code + mesure) : motion `animate(0, fin)` ressort stiffness 500 / damping 60 / mass 1, délai 0, affichage `toFixed(0)` (arrondi) + virgules. Mesure 1440 (entrée à t=0) : 16 ms `0 0 0hr 1%` · 64 ms `3 1 7hr 26%` · 112 ms `7 2 13hr 50%` · 224 ms `10 3 20hr 78%` · 416 ms `12 3 23hr 90%` · 576 ms `12 3 24hr 92%` (final). Courbe complète : `anim-1440.json` → `counterCurve`.
  - Déclencheur `layerInView` (amount `some`), **relecture** : à la sortie de la vue, retour immédiat à `0 / 0 / 0hr / 0%`, rejoue à chaque rentrée (mesuré, courbe identique).
  - Texte SSR : `+0%` (texte du calque source) dans le HTML ; après hydratation hors vue : `0`, `0hr`, `0%`. **Anomalie mesurée** : après la stabilisation du banc, retour en haut de page, le compteur 2 affichait `3` (pas réinitialisé) alors que les autres étaient à 0 ; il revient à 0 après une nouvelle sortie de vue. À reproduire ? (voir demandes).
  - `aria-live="polite"`, `user-select: none`, largeur max-content.

## 3. Équipe — composant partagé `b8Sr4iAT1`

Module `jvKQE_ghl` (export `l`), `pxXb6ooTi: 0`, variantes desktop `nyB2hDezr`, tablette `vmZ77DTLy`, mobile `UU2nT8yjn`. Textes rendus : « EST. 2012 », « Meet the team », H2 « WE STAYED SMALL SO WE COULD STAY PICKY. EVERY PERSON ON A PROJECT IS THERE BECAUSE THE WORK NEEDED THEM, NOT BECAUSE THEY HAPPENED TO BE FREE. » (rgba(13,13,13,0.7)), « (4) Team Members », Jin Yuen/Founder, Sarah Park/Designer, Alex West/Client Manager, David Torres/Developer, « join us, we're hiring. », « We’re looking for highly ambitious and talented people to help us drive real growth. » (Switzer 600 13px), « 02 » « Open Positions », « Email us » (lien sans href), image « Studio team talking in a bright workshop ». Même composant que la section équipe de l'accueil : détail par l'agent homea (vérifier que la variante et le H2 sont les mêmes que sur l'accueil).

## 4. Principes — `section.framer-epz8fu` « Principles »

**CSS** : padding 120px 0 (90 / 60) ; Inside Container `framer-1ryjy6b` grille 4 colonnes, gap 40px 20px (mobile 1 colonne, padding 0 23px). Liste `framer-1bhgxfc` : colonne, gap 30px, span 2 (tablette span 3, mobile span 1).
- H2 « What guides us. » (`framer-14z3fot`, preset iLKnB8A0V, rgb(13,13,13)) : 1440 80/72, 400 × 144 (2 lignes « What / guides us. ») ; 810 60/54 sur 3 lignes ; 390 45/40.5 1 ligne. Effet par ligne : y 10, tween 1.1 s, décalage 0.2, startDelay 0.2, onInView.
- 4 cartes (rWbx8J1Z4 export t, Desktop `ey4nLFyrm` 847 × 176 en desktop ; « Phone » `Gu3KnzVMl` en tablette et mobile), pas vertical 206 px (1440). Aucune position collante (mesuré : les cartes défilent normalement).

| N° | Titre (H3) | Texte |
|---|---|---|
| 01 | You talk to the maker. | No account layer, no handoffs. The person in your calls is the person in the file. |
| 02 | Scope is set before we start. | Price, timeline, and deliverables on paper before day one. Surprises are a design flaw. |
| 03 | We say no early. | If design is not your real problem, we will tell you in the first call and point you somewhere better. |
| 04 | You own the work. | Every file, font, and license comes with the handoff. Nothing stays hostage in our drive. |

  - Numéro : H2 rgb(245,45,15) (token f277370d), texte « 01 »… (minimumIntegerDigits 2). 1440 : 80/72, colonne x 759.5 ; 810 : 60/54, x 268.3 ; 390 : 45/40.5, x 23.
  - Titre : H3 preset fXy3B9GKl, 1440 40/42/−0.8 (largeur 300) ; 810 35/36.75 ; 390 30/31.5. Texte : preset JFK15baIL 17/20.4, rgb(104,104,104).
  - Numéro au défilement (`onScrollTarget`, cible = la carte, seuil 0.5) : `translateY −100 → 0`, **lié au défilement** (mesure 1440 : carte 1 numéro à y_vue 480 → −99.4 ; 330 → −14.2 ; ≤ ~315 → 0 ; échantillons complets `anim-1440.json` → `principles`). Formule exacte non dérivée.
  - Filet supérieur `Eu60T7thi` (XrhHuda3V) : `b5cbcgrAD` → `iLlY2rby8` au seuil 0.5, une fois, tween 1 s `[.56,.22,.05,.99]`.
  - Survol : aucun changement de style (mesuré), curseur `auto`.

## 5. Clients — composant partagé `j5aYpocx_`

Module `jvKQE_ghl` (export `t`), `rgI_E5L3j: false`, variantes desktop `FsjNXJSJN`, tablette `kDO0BDS0T`, mobile `uUtPUWNo6`. Textes rendus : « Our clients », « 2012 2026© », « +47 », « 4.9/5 », « Trusted by 50+ clients », 3 avatars 30 × 30 (rayon 6px). Détail : homea.

## 6. Prix — `section.framer-1v9qbyv` « Recognition »

**CSS** : padding 120px 0 (90 / 60) ; Inside Container `framer-maixoy` colonne, gap 80 (mobile 40), padding 0 33px. « Awards » `framer-1qjbmof` grille 4 colonnes gap 20 (mobile 3) ; tableau `framer-fa2fr4` span 3, colonne gap 30 ; en-têtes `framer-1pyvfr0` grille 3 colonnes gap 20 (mobile 2) ; lignes `framer-1q3vn7z` colonne gap 0.
- H2 « Awards. » (`framer-1rg17ve`, 1440 80/72 ; 810 60/54 ; 390 45/40.5, x 33). Effet par ligne comme « What guides us. ».
- Composant `D21Ecyglh` (UPAjMVhv5, variante `Q0LMHMY9j`, rgb(13,13,13)) : affiche « (2012-26©) » (15/18).
- En-têtes (rgb(104,104,104), 15/18) : « Awarded by » (masqué mobile), « Award », « year ».
- 4 lignes (rWbx8J1Z4 export a, Desktop `B2PJETExP` 65 de haut ; mobile `xmq0bPBT6` « Phone », 109 de haut : organisation sur sa ligne puis prix + année) : laurier SVG (3 chemins, viewBox 29.996 × 24.008) + organisation (rgb(13,13,13)), prix (rgb(13,13,13)), année `<time datetime>` (rgb(104,104,104)), 17/20.4 `wdth 75 wght 700`. Filet `Eu60T7thi` au seuil 0.5, une fois, tween 1 s `[.56,.22,.05,.99]`, délais 0.1/0.2/0.3/0.4. Pas de survol (mesuré).

| Organisation | Prix | datetime | Année |
|---|---|---|---|
| Awwwards | Site of the Day | 2026-01-01T00:00:00.000Z | 2026 |
| FWA | FWA of the day | 2025-01-01T00:00:00.000Z | 2025 |
| CSS design awards | Website of the day | 2024-01-01T00:00:00.000Z | 2024 |
| Awwwards | Honorable Mention | 2023-01-01T00:00:00.000Z | 2023 |

  Positions 1440 : organisation x 470.8, prix x 759.5, année alignée à droite (x ≈ 1377.5), pas 65 px. 810 : « CSS design awards » passe sur 2 lignes (ligne de 83.4 px). Contenu de démonstration (prix fictifs).

## 7. Journal — composant partagé `IG23J3JvE`

Module `pgtQfyOCv` (export `t`), `LV3vwBpcw: "articles."`, `t9lqsaHqm: "a8ccln"` (overlay : placement bottom, centre, ressort 500/60/1, variante `gq6hjYdVi`), `xdREUJQGI: 0`, `yE5ak_Kio: ""`. Variantes desktop `w3iaWhFRY`, tablette `RBcJngtnI`, mobile `nPNyXOlRD`. Rendu : « From the journal », « articles. », « View All » → `./journal`, 4 cartes : (Studio Notes) Fewer projects, more attention. 6/15/26 ; (Opinion) Awards don't build brands. 5/5/26 ; (Process) Why we quote fixed. 4/3/26 ; (Craft) The best type is invisible. 3/20/26. Détail : homeb.

## 8. Prise de contact — composant partagé `dnCTHsXKw`

Module `n_03H18N2` (export `t`), `aaeSn4zqw: 0`, `BWV1JoM50: false`, `U3duGFpRw: ""`. Variantes desktop `k2n70lu6B`, tablette `fA3TTozUq`, mobile `szTNrZI4n`. Rendu : « Book a call », « 2 slots for August '26 », +1 (805) 450 1432, hello@mira.studio, liens terms / privacy policy. Détail : homeb / contact.

## Inconnues (tentatives)

- Têtes de ligne : les textes à effet « par ligne » sont découpés en spans par caractère ; `capture.mjs` relève alors la première **lettre** de chaque ligne (nombre de lignes fiable, premier mot à recalculer).
- Révélation du fond de hero (masque + scale) : non mesurée (sous le préchargeur).
- Origine du 859 px de la transformation du hero, formule du numéro de principe : seulement échantillonnées.
- Lightbox : fermeture par clic sur le fond et comportement en 810/390 non testés.
- Mesures d'animation faites en 1440 uniquement (compteurs : même code à toutes les largeurs).
