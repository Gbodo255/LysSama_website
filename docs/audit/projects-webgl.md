# /projects — audit (vitrine WebGL incurvée et reste de la page)

Source : module de route `reference/framer/js/AMcQRZfITfjQMtwTc9L6feHZ3p0EKUbo_RHe9QFmX_Y.DexPvT_c.mjs`
(nom d'affichage Framer de la page : `case-studies`, scope `VADOyQEsJ`, classe racine `framer-nRW2Q`).
Toutes les références `L.nnnn` renvoient au fichier embelli `reference/framer-code/pretty/AMcQRZfITfjQMtwTc9L6feHZ3p0EKUbo_RHe9QFmX_Y.DexPvT_c.mjs.js`.
Version lisible du composant : `reference/framer-code/extracted/CurvedShowcase.js` (alpha-équivalente à l'original, vérifiée par script).
Shaders : `reference/webgl/curved-showcase/shaders/`. Fiche technique WebGL : `docs/WEBGL.md` § « Vitrine incurvée ».
HTML brut : `reference/html/projects.html`.

Mesures en direct : banc `scripts/lib/harness.mjs` (Chromium 159, swiftshader, DPR 1), 1440×900 et 390×900, après 6 s de temps virtuel.

## 1. Composants de code présents dans le module

| Composant | Défini où | Rôle |
|---|---|---|
| **Curvy Project Showcase** (`bt`, L.595-2731, contrôles L.3022-3451) | ce module | vitrine WebGL incurvée — extrait dans `CurvedShowcase.js` |
| outil « miralab » (`G`, `Qe`, `$e`, L.123-262) | ce module | débogage (HUD, drapeaux) — couvert par un autre audit |
| compteur « (6) » (`je`, nodeId `XrRVFLPBI`, L.3722-3895) | `toplevel-deps.BY2s547D.mjs` (export `ft`) | hors de ce module, non extrait |
| Lenis Smooth Scroll (`V`, nodeId `S7hFAyv5P`, L.3620-3644) | `Lenis.B0ikntHt.mjs` | défilement lissé — hors périmètre |
| Video (`Be`, nodeId `MUWI3G5Ln`) | `Video.CCIhSoyO.mjs` | vidéo Framer dans les cartes CMS (neutralisée par la vitrine) |

Aucun autre composant de code n'est défini dans ce module.

## 2. Structure DOM de la page (desktop ≥ 1200 px)

```
div.framer-nRW2Q.framer-10hbnng                 (fond token 27d215b1 = blanc ; <style> « html body { background: var(--token-27d215b1…, rgb(255,255,255)) } »)
├─ div.framer-d0pt4p-container  [Lenis Smooth Scroll]   (props : intensity 8, orientation horizontal, smooth true, infinite false)
├─ div.framer-e5br0d [Main]      (flex row ; fond token 52433e3c = #f7f7f7 ; téléphone : flex column)
│  ├─ div.framer-q5psbm-container [Spacer]   (composant `L` ; hauteur 1000 dans le JSX, téléphone : height 0)
│  └─ section.framer-1699frv [Gallery]       (flex 1, height 100vh, padding 3px, gap 20px)
│     └─ div.framer-hukja4 [Outer Container] (fond token d33926f3 = #0d0d0d, rayon 12px × (1 si corner-shape supporté, sinon 0,752),
│        │                                    corner-shape superellipse(1.5), overflow clip, flex column)
│        ├─ header.framer-1qgzbbt [Top]       (grille 4 colonnes minmax(50px,1fr), gap 40px 20px, padding 30px 30px 0 ; téléphone : padding 81px 20px 0 ; z-index 1)
│        │  ├─ div.framer-1d80ykx-container.hidden-a7wa0g   logo « MIRA » → lien « ./ » (aria-label « home ») — masqué sur téléphone
│        │  ├─ div.framer-11g8pw4 [Text / Project count]    (span 2 colonnes ; téléphone span 3 ; gap 3px)
│        │  │  ├─ h1 « selected works » (preset 1l3tbw0, blanc, casse uppercase via le preset)
│        │  │  └─ compteur de collection → « (6) » (rouge token f277370d rgb(255,57,3), exposant)
│        │  └─ div.framer-14z4bt-container  composant D21Ecyglh variant `fgYOS40ez` → « (2012-26©) » (blanc, aligné à droite)
│        └─ div.framer-q4xdmx-container       (flex 1 0 0, height 1px → remplit le reste ; position relative)
│           └─ Curvy Project Showcase (voir §3)
├─ Shared Navigation (barre latérale) · Template Buy Button · badge Framer · div#overlay — hors périmètre
```

Mesures 1440×900 : région de la vitrine = x 62, y 59, 1375 × 838 px. 390×900 : x 3, y 106, 384 × 791 px.

## 3. DOM rendu par la vitrine (à l'exécution)

```
div[role=region][aria-label="Curvy Project Showcase"][aria-roledescription=carousel][tabindex=0]
    style : position relative ; 100 % × 100 % ; overflow hidden ; outline none ; touch-action pan-y ; background transparent
├─ <style> @keyframes curvyCountInUp / curvyCountOutUp / curvyCountInDown / curvyCountOutDown (translateY ±110 %)
├─ div (hôte du slot : absolute inset 0, z-index 2, pointer-events none, opacity 0, user-select none)
│   └─ div.framer-1smkdlc [Projects Source (Slot)]  → 6 × a.framer-12qg72k [Project Card] (calques invisibles, voir §5)
├─ div (left −99999px, 1×1 px, opacity 0, z-index −1) → div.framer-1wrhru3 [Title Font Goes Here] → h2 « project title »
├─ div (idem)                                         → div.framer-1is60kx [Count Font Goes Here] → p « Count Font »
├─ div (hôte du canvas : absolute inset 0) → <canvas style="display:block;width:100%;height:100%">
├─ div[aria-hidden] (hôte des détails : absolute inset 0, z-index 1, pointer-events none, overflow hidden, visibility hidden → visible)
│   └─ div.framer-9lk2t [Card Details (Slot)] → 6 × a.framer-ed3rdn [Details] (Industry à gauche, Year à droite)
├─ div (bande : absolute left 0 right 0 bottom 0, padding-bottom 22px, flex column, gap 14px, user-select none)
│   ├─ div[data-strip] (overflow hidden, cursor default)
│   │   └─ div (piste : inline-flex, gap, nowrap, will-change transform, padding 0.2em 0, typographie du calque « Title Font »)
│   │       └─ span[role=button][tabindex=0][data-index] × (6 × copies) — copies = 3 mesuré à 1440 et 390
│   └─ div (flex, centré, gap 18px, typographie du calque « Count Font », couleur controlsColor)
│       ├─ button[data-nav-btn=prev][aria-label="Previous project"] → flèche connectée (arrowSlot) en miroir scaleX(−1)
│       ├─ span[aria-live=polite] (tabular-nums) → « 01 » animé + span « / » (opacity .5, padding 0 8px) + « 06 »
│       └─ button[data-nav-btn=next][aria-label="Next project"] → flèche connectée
├─ nav[aria-label="Project links"] (visuellement masqué : 1×1, clip-path inset(50%)) → 6 liens texte
└─ 2 × <video> 2×2 px (opacity .01, bas-gauche, z-index −1) ajoutés à la volée pour Gucci et Puma
```

Le HTML pré-rendu ne contient **ni la bande de titres ni le nav** : au rendu serveur `slotItems` est vide (la grâce de 450 ms n'est pas écoulée) donc `projects = []`. Ils apparaissent à l'hydratation.

## 4. Textes visibles

| Élément | Texte | Style mesuré (1440) |
|---|---|---|
| titre de page | `selected works` | preset 1l3tbw0 (rendu « SELECTED WORKS ») |
| compteur | `(6)` | Mona Sans 15px 600, −0.05em, rouge rgb(255,57,3) — dans le HTML pré-rendu : `6` seul |
| période | `(2012-26©)` | preset 1l3tbw0, blanc |
| bande de titres | `Gucci`, `Chanel`, `Puma`, `Adidas`, `Nike`, `Under Armour` (×3 copies) | Mona Sans Variable, `max(80px, 4.17vw)`, wdth 75 / wght 700, ss07, −1.6px, line-height 0.9, uppercase ; actif blanc, inactifs rgb(104,104,104) |
| détails sous la carte centrale | ex. `EYEWEAR` · `'26©` | preset c95aba (15px, wdth 80 / wght 700, uppercase) ; industrie blanche, année rgb(188,188,188) |
| compteur de position | `01` `/` `06` | Mona Sans Variable 15px, −0.15px, line-height 18px, uppercase, blanc |
| flèches | SVG « Arrow SVG for Gallery » (composant zD0HidK19, 14px, trait 2) | blanc ; échelle `scale(max(1, largeur/1920))` = 1 |

À 390 px : bande `max(45px, 2.34vw)` gap `max(30px, 1.56vw)` ; à 810–1199 : 60px / gap 40.

## 5. Textes présents dans le DOM mais **non visibles**

| Texte | Où | Pourquoi invisible |
|---|---|---|
| `project title` | h2 preset 1c0t51l dans « Title Font Goes Here » (`fontSlot`) | calque **source de typographie** : enveloppe `left:-99999px; opacity:0; 1×1px`. Le composant lit seulement son style calculé (police, taille 80/60/45 px, axes, interlettrage, casse, interligne) pour la bande de titres. |
| `Count Font` | p preset c95aba dans « Count Font Goes Here » (`countFontSlot`) | idem, typographie du compteur et des flèches. |
| `Gucci` … `Under Armour` (h2 dans les cartes), images de couverture, vidéos | `Projects Source (Slot)` | hôte du slot `opacity:0` ; les cartes servent de **source de données** (image, vidéo, titre, lien) et, pour la carte centrale, de calque de clic / curseur (pointer-events auto, opacité 0). |
| Industrie / année des 5 cartes non centrales | `Card Details (Slot)` | opacité `1 − (|offset| − 0,12) × 1,7` bornée → 0 hors centre (mesuré : seule la carte centrale à op=1). |
| `Kyma`, `Eyewear`, `'26©` | JSX (valeurs par défaut de conception) | remplacés par les champs CMS au rendu ; n'apparaissent pas dans le HTML. |

## 6. Liens

| Source | href | Remarque |
|---|---|---|
| logo | `./` | aria-label « home » |
| cartes (calques DOM) | `./projects/gucci`, `./projects/chanel`, `./projects/puma`, `./projects/adidas`, `./projects/nike`, `./projects/under-armour` | page CMS `dcN8jq2Gu`, variable de chemin `UxQzAcVgo` (slug) ; seul le calque de la carte centrale reçoit le pointeur |
| Card Details | mêmes 6 URL | non cliquables (hôte pointer-events none) |
| nav « Project links » | 6 URL absolues (`https://mirastudio.framer.website/projects/<slug>`) | accessibilité uniquement |

## 7. Données CMS (collection « Projects »)

- Requête `Qt()` (L.3471-3505) : collection alias `AzA7OvnyO`, données `ct` de `toplevel-deps.BY2s547D.mjs` = collection `w_hvy7l6n`,
  morceau `https://framerusercontent.com/cms/uBAnfGvJhYkgZbyWinKL/pTYJhJSpoYjE3JMNnh6d/w_hvy7l6n-chunk-default-0.framercms`. Pas de tri ni de filtre : ordre de la collection.
- Champs lus : `UxQzAcVgo` slug · `motPAdhqw` couverture · `lqxb5gqxK` affichage vidéo (défaut true) · `iRUlzL14O` URL vidéo · `AO3U_VSSA` fichier vidéo · `Q2VN_FZXh` titre.
- Seconde requête `sn()` (L.3525-3543, même collection) pour les détails : `s1es_f3RS` industrie · `XdZ8EYmm9` date → année `'YY©` (toLocaleString en-US, UTC, year 2-digit, préfixe `'`, suffixe `©`).

| # | Slug | Titre | Industrie | Date (année affichée) | Couverture (taille) | Vidéo |
|---|---|---|---|---|---|---|
| 1 | gucci | Gucci | Eyewear | 2026-07-08 (`'26©`) | `https://framerusercontent.com/images/uQzt05iescwLlC6DKg4M1qwR6o.jpg` (2400×1350) | `https://framerusercontent.com/assets/o74zvFwrxG1ofp4gdhRqo1Ujgk.mp4` (2 663 024 o) |
| 2 | chanel | Chanel | Women's Skincare | 2024-07-10 (`'24©`) | `https://framerusercontent.com/images/7lmRyzySl3tRUJAR0FTAuBtPBtM.jpg` (2040×1148) | — |
| 3 | puma | Puma | Technical Outerwear | 2025-05-05 (`'25©`) | `https://framerusercontent.com/images/NuuceAGvddP5JL0LEhEjp8bdnM.jpg` (1152×1440) | `https://framerusercontent.com/assets/LYIGz8CY670o999qJep8WeHqgzM.mp4` (2 454 369 o) |
| 4 | adidas | Adidas | Tennis Apparel | 2025-04-15 (`'25©`) | `https://framerusercontent.com/images/r7Srjn5YojuM8eQrAW1Mlzsb4.jpg` (2400×1350) | — |
| 5 | nike | Nike | Sportswear | 2025-01-01 (`'25©`) | `https://framerusercontent.com/images/KAdttoufdbmENPnQbvgvJksBwm4.jpg` (2040×1148) | — |
| 6 | under-armour | Under Armour | Training | 2023-02-01 (`'23©`) | `https://framerusercontent.com/images/mDP6cFLJa8AkD35JWeKaC5TpHA.jpg` (2040×1148) | — |

Textes alternatifs des couvertures : Gucci « Close-up of a model wearing wraparound sunglasses covered in water droplets » ; Chanel « Model applying face cream to her cheek against a pale background » ; Puma « Runner in a red rain jacket and black cap on a misty coastline » ; Adidas « Close-up of a tennis player with braids looking over her racket » ; Nike « Athlete lacing orange and white running shoes on a stadium track » ; Under Armour « Smiling athlete in a black tank top after a workout ».
Chaque `<img>` porte un srcset `?scale-down-to=512 / 1024 / 2048` + original (descripteurs w) ; le poster des vidéos est l'URL d'origine `?width=…&height=…`.
Les vidéos et la police sont archivées dans `reference/har/` (bodies `1173e83e…mp4`, `410634…mp4`).

⚠ Contenu de démonstration au nom de vraies marques (MISSION §1.5) : à remplacer avant publication.

## 8. Comportements (hors détail WebGL)

- **Clic sur la carte centrale** → navigation vers `./projects/<slug>` par le lien du calque DOM (curseur personnalisé Framer `9iwj27` sur desktop, car `cardCursor` est vrai ; le curseur natif est masqué au-dessus de la carte). Clic sur une carte latérale → elle vient au centre. Un glisser n'ouvre jamais le lien (href retiré pendant le geste, click capturé).
- **Molette / trackpad** : `hijackScroll` vrai à toutes les largeurs → la molette verticale comme horizontale fait défiler les cartes et la page ne défile pas tant que le pointeur est sur la vitrine.
- **Clavier** : région focalisable ; ← / → = précédent / suivant ; Entrée = ouvre la carte centrale. Titres de la bande : Entrée / Espace. Mesuré : → fait passer le compteur de 01 à 02.
- **Bande de titres** : suit les cartes en continu, titre actif blanc, transition `color 320ms ease` ; clic sur un titre = aller à ce projet.
- **Compteur** : chiffre entrant / sortant 450 ms `cubic-bezier(0.19, 1, 0.22, 1)`, vers le haut ou le bas selon le plus court chemin.
- **Boucle infinie** : vraie à toutes les largeurs ; flèches jamais désactivées.
- **Position mémorisée** : `sessionStorage["curvyPos:/projects:6"]` = index de la carte centrale, écrit au démontage (navigation client vers une autre page), relu au montage suivant. Toutes les clés `curvyPos:*` sont effacées au chargement du module sauf si la navigation est de type `back_forward`. Donc : retour sur /projects pendant la même session SPA → même carte au centre ; rechargement ou URL saisie → carte 0 ; retour arrière avec rechargement complet → restauré. (Lu dans le code, non rejoué en direct.)
- **Animations d'apparition** (`__framer__appearAnimationsContent`) : seule entrée = bouton « Template Buy Button » (ydlgfe / 1wjgfnr / 1pvmz1y : opacity 0.001→1, y 40→0, délai 1,8 s, 0,5 s, ease [0.4,0,0.2,1]) — hors périmètre (masqué par le banc).
- Pas de préchargeur sur cette page.

## 9. Responsive (instance, L.3936-3998 et L.4000-4310)

Framer remplace **l'objet de groupe entier** par breakpoint (PropertyOverrides) :

| Groupe | Desktop ≥ 1200 | Tablette 810–1199 | Téléphone < 810 |
|---|---|---|---|
| Layout | cardAspect 1.6, centerWidthPct 65, cornerRadius 12, sidePeekPct 15, sideScale .69 | cardAspect **1.15**, reste identique | cardAspect **.85**, centerWidthPct **75**, sidePeekPct **7**, sideScale **.5** |
| Interaction | cardCursor **true**, clickAction link, hijackScroll true | cardCursor **false** | cardCursor **false** |
| Motion | scrollSpeed 1.4, dragSpeed 1.7, lerp .15, infiniteLoop true, autoplay false (4 s) | = desktop | scrollSpeed **1.2**, dragSpeed **1.4**, reste identique |
| Strip | titleGap 60 | titleGap **40** | titleGap **30** |

Mesures : 1440 → carte centrale 893,75 × 558,59 px ; 390 → 288 × 338,82 px (cartes latérales 144 × 169,41).

## 10. Questions ouvertes

- Le curseur personnalisé Framer `9iwj27` (« View project » ?) est défini hors de ce module : à documenter par l'audit des curseurs.
- `Lenis Smooth Scroll` a `orientation: horizontal` sur cette page : effet réel non vérifié (hors périmètre).
- Images de référence WebGL (Étape G.3) non produites ici.
