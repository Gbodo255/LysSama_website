# Animations

| ID registre | Élément | Page | Déclencheur | Départ → arrivée | Type (ressort s/d/m ou durée + courbe) | Délai / décalage | Relecture | Sources | Courbe |
|---|---|---|---|---|---|---|---|---|---|
| A-001 | Side Nav (largeur, layout) | toutes | survol (desktop) / tap (tablette) | 56 px → 493 px (et retour) | tween 0,4 s cubic-bezier(.87,0,.13,1) | 0 | à chaque ouverture | TD:22024 `Mx` [C-025/004/005] | reference/agents/global/interact/desk.json (openCurve, closeCurve) |
| C-025 | Overlay BG filtre | toutes | ouverture / fermeture | grayscale 0 → 1 / 1 → 0 | ouverture 0,6 s [.4,0,.2,1] ; fermeture 0,5 s [.4,0,.2,1] | 0 | oui | TD:22029-22037 `Nx`/`Px` [C-025] | desk.json |
| C-025 | Overlay BG opacité | toutes | ouverture / fermeture | 0 → .85 / .85 → 0 | code : mêmes transitions que le filtre ; mesure : bascule en 1 image (à recouper) | 0 | oui | TD:22240 [C-025] | desk.json, mobile.json |
| C-025 | Menu (contenu) | toutes | ouverture / fermeture | correction de layout (scaleX) | ouverture 0,5 s [.4,0,.2,1] délai 0,2 s (`Rx`) ; fermeture `Px` 0,5 s | 0,2 s à l'ouverture | oui | TD:22057 [C-025] | desk.json menuT |
| A-002 | Hamburger → croix | toutes | ouverture / fermeture | 4 carrés → croix (rotate 180°, rangées ±45°) | tween 0,5 s cubic-bezier(.87,0,.13,1) | 0 | oui | TD:20393 [C-025/006] | à mesurer |
| A-003 | Side Nav mobile (hauteur) | toutes | tap | 51,97 → 494,16 px (x,y 6→3, l 378→384, rayon 10→12) | tween 0,4 s cubic-bezier(.87,0,.13,1) | 0 | oui | mesure [C-028/007] | mobile.json |
| C-031 | Nav Item (2 copies du libellé) | toutes | survol | copie 1 : y 0 → −h, opacité 1→0 ; copie 2 : y +h → 0, opacité 0→1 (h = 25 px barre de page, 45 px menu) | tween 0,36 s cubic-bezier(.87,0,.13,1) | 0 | oui (sortie inverse) | TD:18601 [C-031] | desk.json hoverNavItemStudio / hoverTopLinkStudio |
| C-034 | Contact Button | toutes | survol | Button scale 1→.95, rayon 4→16 ; photo rayon 4→12 ; flèche translateX | tween 0,56 s cubic-bezier(.87,0,.13,1) | 0 | oui | TD:21765 [C-034] | desk.json hoverMenuContactBtn / hoverFooterContactBtn |
| C-035 | Icône sociale (menu) | toutes | survol | opacité 1 → .5 | tween 0,3 s cubic-bezier(.4,0,.2,1) | 0 | oui | TD:21178 [C-035] | desk.json hoverMenuSocialX |
| C-042 | Join Now | toutes | survol (Default) | BG scale 1→.95 ; texte haut opacité 1→0 scale 1→.9 ; texte bas opacité 0→1 | tween 0,56 s cubic-bezier(.87,0,.13,1) | 0 | oui | TD:23054 [C-042] | à mesurer |
| C-039 | Join Now | toutes | champ vide ↔ rempli | opacité .75 ↔ 1 | tween 0,56 s cubic-bezier(.87,0,.13,1) | 0 | oui | TD:23054, desk.json nl [C-039] | à mesurer |
| C-044 | Curseur (position) | toutes | mousemove | suit le pointeur (translate) | ressort stiffness 500, damping 60, mass 1 | 0 | continu | TD:25300 `bT` [C-044] | à mesurer |
| C-044 | Curseur (disque) | zones curseur | entrée/sortie de zone | scale 0 ↔ 1 | ressort bounce .2 durée .4 (`cy`) ; texte : tween 0,56 s [.87,0,.13,1] (`sy`) | 0 | oui | TD:19939-19947 [C-044] | à mesurer |
| C-045 | Défilement Lenis | toutes sauf 404 | molette | lissage | lerp .1 (duration .8, easing e=>Math.min(1,1.001-2**(-10*e)) inutilisé quand lerp est défini) | — | continu | Lenis.B0ikntHt.mjs, desk.json lenis [C-045] | à mesurer |
| A-004 | Hero (section sticky), desktop seulement | / | défilement, cible = section About (`onScrollTarget`, seuil 1) | opacity 1 → 0.6, scale 1 → 0.925 | lié au défilement | — | réversible | R.L12712-12753 [C-HOMEA-A01] | à mesurer (D-021) |
| A-005 | Hero « Inside Container », desktop seulement | / | défilement (parallaxe) | translation, speed 130, offset 0 | lié au défilement | — | réversible | R.L13007-13017 [C-HOMEA-A02] | à mesurer (D-021) |
| A-006 | H2 About « Positioning Headline » | / | entrée dans la vue (seuil 0) | par ligne : opacity 0.001 → 1, y 15 → 0 | tween 1.1 s, ease [.215,.61,.355,1] | startDelay 0.2 s, décalage 0.1 s | non | R `Ih` L12183 [C-HOMEA-A03] | à mesurer (D-021) |
| A-007 | Citation About, « Impact Supporting Copy », « Services Description » | / | entrée dans la vue | par ligne : opacity 0.001 → 1, y 15 → 0 | tween 0.8 s, même ease | startDelay 0.5 s, décalage 0.1 s | non | R `Uh` L12227 [C-HOMEA-A04] | à mesurer (D-021) |
| A-008 | « Small Text » About | / | entrée dans la vue | par mot : opacity 0.001 → 1, y 5 → 0 | tween 0.6 s, même ease | startDelay 0.5 s, décalage 0.02 s | non | R `Wh` L12241 [C-HOMEA-A05] | à mesurer (D-021) |
| A-009 | « Impact Headline », « Services Heading » | / | entrée dans la vue | par ligne : opacity 0.001 → 1, y 10 → 0 | tween 1.1 s, même ease | startDelay 0.2 s, décalage 0.2 s | non | R `Zh` L12333 [C-HOMEA-A06] | à mesurer (D-021) |
| A-010 | Founder Profile Card (About) | / | entrée dans la vue (seuil 0) | opacity 0 → 1 | ressort bounce 0.1, 1.2 s | 0.5 s | non | R `Rh` L13483 [C-HOMEA-A07] | à mesurer (D-021) |
| A-011 | Bloc nom/rôle de la carte du fondateur | / | entrée dans la vue | opacity 0 → 1 | ressort bounce 0.1, 1.2 s | 0.6 s | non | R `Bh` L13544 [C-HOMEA-A08] | à mesurer (D-021) |
| A-012 | « Signature » (About) | / | entrée dans la vue | opacity 0 → 1 (`translateY(-50%)` conservé) | ressort bounce 0.1, 1.2 s | 0.4 s | non | R `Hh` L13560 [C-HOMEA-A09] | à mesurer (D-021) |
| A-013 | « Philosophy Link » | / | entrée dans la vue | opacity 0 → 1 | ressort bounce 0.1, 1.2 s | 1.0 s | non | R `Gh` L13661 [C-HOMEA-A10] | à mesurer (D-021) |
| A-014 | Founder Profile Card, variante d'apparition | / | 50 % visible | `Q7SnnxNQf` → `cqy9B66RZ` (« Revealed ») ; `Q7SnnxNQf` absent du composant | tween 0.46 s, ease [.87,0,.13,1] | — | non | R L13509-13513 ; jvKQE_ghl L155-389 [C-HOMEA-A11] | effet réel inconnu, à mesurer (D-021) |
| A-015 | Work « Logo / Text Reveal / Button » | / | « Trigger 2 » entièrement visible (seuil 1) | x -100 → 0, opacity 0 → 1 | tween 0.6 s, ease [.44,0,.56,1] | 0 | **oui** (animateOnce false) | R `Kh`/`qh` L13724 [C-HOMEA-A12] | à mesurer (D-021) |
| A-016 | Work « Projects Collection » (bouton See all 6) | / | « Trigger 2 » visible (seuil 1) | x 50 → 0, opacity 0 → 1 | tween 0.6 s, ease [.44,0,.56,1] | 0.1 s | **oui** | R `Jh`/`Yh` L13849 [C-HOMEA-A13] | à mesurer (D-021) |
| A-017 | Work « Text Reveal » (50 BRANDS. 14 YEARS. ONE STANDARD.) | / | défilement (`type: scrub`, viewport bottom, section = Trigger 1) | lignes : masque, x 10 → 0 ; mots : masque, opacity 0 → 1 | lignes : 0.6 s `power2.in`, stagger 0.365, delay 0.07 ; mots : 0.8 s linéaire, stagger 0.965, delay 0.15 | voir type | oui (`replay: true`) | R L13769-13840 (composant de code `hf`) [C-HOMEA-A14] | à mesurer (D-021) |
| A-018 | Work « Media » | / | défilement jusqu'à « Trigger 1 » | scale 3.1 → 1 | lié au défilement | — | réversible | R L13952-13980 [C-HOMEA-A15] | à mesurer (D-021) |
| A-019 | Work « Dark Overlay » | / | défilement jusqu'à « Trigger 1 » | opacity 0 → 1 (× 0.65 cible) | lié au défilement | — | réversible | R L13986-14014 [C-HOMEA-A16] | à mesurer (D-021) |
| A-020 | Clients : logos, avatars, note, années | / | entrée dans la vue (seuil 0) | opacity 0 → 1 | ressort bounce 0.1, 1.2 s | 0.1 à 0.8 s selon l'élément (correspondance à compléter) | non | jvKQE_ghl L2420-2445, L2570-2976 [C-HOMEA-A17] | à mesurer (D-021) |
| A-021 | « Impact Footnote » / bloc Why us | / | entrée dans la vue | opacity 0 → 1 | ressort bounce 0.1, 1.2 s | 0.9 s | non | R `Qh` L14456 [C-HOMEA-A18] | à mesurer (D-021) |
| A-022 | Bar Graph « Top Bar » | / | 50 % visible (variante Start → End) | largeur 1px → 100 % ; « +47% inbound » opacity 0 → 1 | tween 0.76 s, ease [.87,0,.13,1] | 0.4 s | non | vL1rEwvHQ L1838-1846, CSS `framer-v-1aedll2` [C-HOMEA-A19] | à mesurer (D-021) |
| A-023 | Project Metric « Animated Line » (×2) | / | 50 % visible (`b5cbcgrAD` → `iLlY2rby8`) | width 0 % → 100 % (h 1px) | tween 1 s, ease [.56,.22,.05,.99] | 0 | non | JKo4PdE_2 L419-430 ; Eu60T7thi [C-HOMEA-A20] | à mesurer (D-021) |
| A-024 | Service Card, survol (état Closed) | / | survol | Overlay opacity 0.85 → 0.65 ; icône rotate 0 → -360° | tween 0.46 s, ease [.87,0,.13,1] | 0 | à chaque survol | vL1rEwvHQ L5046-6028 [C-HOMEA-A21] | à mesurer (D-021) |
| A-025 | Service Card, clic | / | clic | Open ↔ Closed (Phone Open ↔ Phone Closed) : « Service Info » opacity 1 ↔ 0, hauteur de la carte (layout) | tween 0.46 s, ease [.87,0,.13,1] | 0 | à chaque clic | vL1rEwvHQ L5341-5361 [C-HOMEA-A22] | à mesurer (D-021) |
| A-026 | Team : H2 « WE STAYED SMALL… » | / | entrée dans la vue | par ligne (effet `xt`) | tween 1.1 s | délai 0.1 s | non | jvKQE_ghl L530-540 [C-HOMEA-A23] | à mesurer (D-021) |
| A-027 | Team : cartes membres (×4) | / | entrée dans la vue | opacity 0 → 1 | ressort bounce 0.1, 1.2 s | 0.5 + 0.1 × index s | non | jvKQE_ghl L594 `Dt(Et, a*.1)` [C-HOMEA-A24] | à mesurer (D-021) |
| A-028 | Team : texte du Hiring Block | / | entrée dans la vue | par ligne (effet `jt`) | tween 0.8 s | 0.1 s | non | jvKQE_ghl L638-672 [C-HOMEA-A25] | à mesurer (D-021) |
| C-072 | Titres H2 (Process, Testimonials, Pricing) | `/` | en vue, seuil 0 | par ligne : opacité 0.001, y 10 → 1, 0 | tween 1.1 s `[0.215,0.61,0.355,1]` | startDelay 0.2 s, 0.2 s entre lignes | non | module de route `Zh` [C-072] | à mesurer |
| C-072 | Descriptions (Big Text, Testimonials, Pricing) | `/` | en vue | par ligne : opacité 0.001, y 15 → 1, 0 | tween 0.8 s `[0.215,0.61,0.355,1]` | startDelay 0.5 s, 0.1 s entre lignes | non | `Uh`/`Fh` [C-072] | à mesurer |
| C-072 | Process Small Text | `/` | en vue | opacité 0 → 1 | ressort bounce 0.1, 1.2 s | 0.9 s | non | `Qh` [C-072] | à mesurer |
| C-073 | Process Accordion (cartes) | `/` ≥ 810 | défilement, seuil 0.5 | variante carte active / inactive | tween 0.46 s `[0.87,0,0.13,1]` | — | oui (deux sens) | `vL1rEwvHQ` [C-073] | à mesurer |
| C-074 | Bloc Process | `/` ≥ 810 | défilement (cible Reel) | y 0 → 500 | lié au défilement | — | oui | `onScrollTarget` [C-074] | à mesurer |
| C-076 | Reel Duration / Years | `/` | défilement | opacité 0, rot −5, rotX 5, rotY 15, y ∓50 → neutre (opacité cible 0.75) | lié au défilement | — | oui | module de route [C-076] | à mesurer |
| C-076 | Play Reel (groupe) | `/` | défilement | rot −10, rotX 15, rotY 25, scale 2 → neutre | lié au défilement, perspective 1200 | — | oui | module de route [C-076] | à mesurer |
| C-076 | Play / Reel (libellés) | `/` | défilement | x −500 / +500, opacité 0 → 0, 1 | lié au défilement | — | oui | module de route [C-076] | à mesurer |
| C-077 | Fond de la fenêtre Reel | `/` | clic / fermeture | opacité 0 → 1 / 1 → 0 | tween 0.46 s `[0.4,0,0.2,1]` | 0 | oui | module de route [C-077] | non concluante |
| C-077 | Lecteur Reel | `/` | clic / fermeture | opacité 0 → 1 / 1 → 0, centré | tween 0.6 s `[0.4,0,0.2,1]` | 0 | oui | `cg`/`og`/`ag` [C-077] | non concluante |
| C-081 | Slider de témoignages (variantes) | `/` | flèche / clic citation | changement de diapositive | tween 0.6 s `[0.4,0,0.2,1]` | — | oui | `vL1rEwvHQ` `Zr` [C-081] | à mesurer |
| C-085 | Carte témoignage : nom / rôle | `/` | montage, seuil 0.5 | par ligne : opacité 0.001, y 15 → 1, 0 | tween 0.6 s `[0.215,0.61,0.355,1]` | startDelay 0.4 / 0.5 s, 0.1 s | non | `Tr`/`Dr` [C-085] | à mesurer |
| C-085 | Carte témoignage : grand texte | `/` | montage | par ligne : opacité 0.001, y 15 → 1, 0 | tween 0.8 s | startDelay 0.2 s, 0.1 s | non | `kr` [C-085] | à mesurer |
| C-085 | Carte témoignage : petit texte | `/` | montage, seuil 0 | par mot : opacité 0.001, y 5 → 1, 0 | tween 0.6 s | startDelay 0.2 s, 0.02 s entre mots | non | `Ar` [C-085] | à mesurer |
| C-085 | Carte témoignage : ligne animée | `/` | montage, seuil 0.5 | variante masquée → visible | tween 1 s `[0.56,0.22,0.05,0.99]`, origine gauche | — | non | `hr` [C-085] | à mesurer |
| C-085 | Carte témoignage : chiffres | `/` | montage, seuil 0.5 | opacité 0 → 1 | ressort bounce 0.1, 1.2 s | 0.3 s / 0.4 s | non | `Mr`/`Nr` [C-085] | à mesurer |
| C-086 | Pricing Card (variantes) | `/` | clic toggle | Monthly ↔ Per Project | tween 0.46 s `[0.87,0,0.13,1]` | — | oui | `um` [C-086] | à mesurer |
| C-087 | Coche d'option | `/` | clic | opacité 0, scale 0.6 → 1, 1 | tween 0.2 s easeOut | — | oui | `Price Checkmark` [C-087] | à mesurer |
| C-087 | Ligne d'option | `/` | clic | texte rgb(188,188,188) → blanc | tween 0.46 s `[0.87,0,0.13,1]` | — | oui | `Price Add-on` [C-087] | à mesurer |
| C-089 | Total / Add-ons | `/` | changement de total | valeur → valeur (texte entier) | 0.6 s easeOut (motion `animate`) | 0 | oui | `Price Display` [C-089] | `pricing-1440.json` `curve` (fin 608 ms) |
| C-091 | Pricing Top / Included / Add-ons | `/` | en vue, seuil 0.5 | y −20 / 20, opacité 0 → 0, 1 | tween 0.85 s `[0.215,0.61,0.355,1]` | 0.6 / 0.7 / 0.8 s | non | `dm`/`mm`/`fm`/`hm`/`gm` [C-091] | à mesurer |
| C-092 | Item FAQ (hauteur, fond, texte, réponse) | `/` | clic | fermé ↔ ouvert | tween 0.46 s `[0.87,0,0.13,1]` | — | oui | `NIqbhJ1MS` [C-092] | `interact-1440.json` `plusCurve` |
| C-092 | Icône Plus | `/` | clic | rotate 0 → 360° | tween 0.46 s `[0.87,0,0.13,1]` | — | oui | `Plus` [C-092] | `plusCurve` |
| C-095 | Items FAQ | `/` | en vue, seuil 0 | y 20, opacité 0 → 0, 1 | tween 0.85 s `[0.215,0.61,0.355,1]` | 0.3 → 0.8 s (pas 0.1) | non | `NIqbhJ1MS` [C-095] | à mesurer |
| C-100 | Formulaire (états) | `/` | onLoading / onSuccess / onError | flou 5 px, scale 0.95, opacité 0.35 (succès) ; champs 0.5 (erreur) | tween 0.6 s `[0.87,0,0.13,1]` | succès +800 ms | — | `n_03H18N2` [C-100] | lu dans le code |
| C-100 | Bouton de formulaire (états) | `/` | état du formulaire | Default / Incomplete (opacité 0.75) / Loading / Success / Error | tween 0.56 s `[0.87,0,0.13,1]` | — | — | `toplevel-deps` [C-100] | lu dans le code |
| A-029 | Fond du hero « Hidden Mask » (BG) | /projects/* | entrée dans la vue (seuil 0,5), une fois | masque `linear-gradient(90deg, #000 0%, transparent 0%)` → `100%/100%` (balayage gauche → droite), rotate 4° → 0, scale 1,5 → 1 | ressort stiffness 120, damping 25, mass 0,3 | 0,8 s | non | cM8Lf1CeK L56-61, L160-190 ; route L1015-1040 [C-PROJ-A01] | à mesurer (D-021) |
| A-030 | Hero (section) — D seulement | /projects/* | défilement (`onScrollTarget`, cible plus bas, seuil 1) | opacité 1 → 0,6 | transformation liée au défilement | — | réversible | route L960-985 [C-PROJ-A02] | à mesurer (D-021) |
| A-031 | Inside Container du hero — D seulement | /projects/* | défilement | parallaxe `speed: 130` (offset 0, adjustPosition false) | lié au défilement | — | réversible | route L1043-1060 [C-PROJ-A03] | à mesurer (D-021) |
| A-032 | « Back to projects » | /projects/* | chargement (appear `19jj9t8`) | opacité 0,001 → 1 | ressort bounce 0,1, durée 1,2 | 1,55 s | non | route `tn`, `G` [C-PROJ-A04] | — |
| A-033 | Logo (D/T) | /projects/* | chargement (appear `1gjlcjd`) | opacité 0,001 → 1 | ressort bounce 0,1, durée 1,2 | 1,35 s | non | route `nn` [C-PROJ-A05] | — |
| A-034 | Image / Video du hero | /projects/* | chargement (appear `t241s`) | y 40 → 0, opacité 0,001 → 1 | ressort 120/25/0,3 | 1,05 s | non | route `rn`, `an` [C-PROJ-A06] | — |
| A-035 | Title / Year | /projects/* | chargement (appear `1by17e4`) | y 40 → 0, opacité 0,001 → 1 | ressort 120/25/0,3 | 1,15 s | non | route `mn` [C-PROJ-A07] | — |
| A-036 | Ligne sous le titre (Hidden → Show Horizontal) | /projects/* | entrée dans la vue (seuil 0,5) | largeur de la barre 0 % → 100 % (1 px de haut, max 240 px), couleur rgba(156,156,156,.2) | tween 1 s `[.56,.22,.05,.99]` | 0,95 s | non | route L1385-1410 ; Eu60T7thi CSS [C-PROJ-A08] | à mesurer (D-021) |
| A-037 | Short Description | /projects/* | entrée dans la vue (seuil 0) | par **ligne** : y 15 → 0, opacité 0,001 → 1 | tween 0,6 s `[.215,.61,.355,1]` | startDelay 1,25 s, +0,1 s par ligne | non | route `bn` [C-PROJ-A09] | — |
| A-038 | Timeline | /projects/* | chargement (appear `6nrbi8`) | opacité 0,001 → 1 | ressort bounce 0,1, 1,2 | 1,45 s | non | route `xn` [C-PROJ-A10] | — |
| A-039 | Scope | /projects/* | chargement (appear `9t0tqy`) | opacité 0,001 → 1 | ressort bounce 0,1, 1,2 | 1,35 s | non | route `nn` [C-PROJ-A11] | — |
| A-040 | Étiquettes de section (Brief, Approach, Outcomes) | /projects/* | entrée dans la vue (seuil 0,5), une fois | opacité 0 → 1 | tween 1 s `[.4,0,.2,1]` | 0 | non | route `wn`, `J` [C-PROJ-A12] | — |
| A-041 | Big Text / Big Text 2 / Big Text 3 / citation | /projects/* | entrée dans la vue (seuil 0,5) | par **ligne** : y 15 → 0, opacité 0,001 → 1 | tween 0,8 s `[.215,.61,.355,1]` | startDelay 0,2 s, +0,1 s par ligne | non | route `X` [C-PROJ-A13] | — |
| A-042 | Small Text (Brief) | /projects/* | entrée dans la vue (seuil 0) | par **mot** : y 5 → 0, opacité 0,001 → 1 | tween 0,6 s `[.215,.61,.355,1]` | startDelay 0,2 s, +0,02 s par mot | non | route `En`, `Z` [C-PROJ-A14] | — |
| A-043 | Small text 2 / 3, Quote Small text | /projects/* | entrée dans la vue (seuil 0) | par **mot** : y 2 → 0, opacité 0,001 → 1 | tween 0,6 s `[.215,.61,.355,1]` | startDelay 0,2 s, +0,02 s par mot | non | route `Q` [C-PROJ-A15] | — |
| A-044 | View live | /projects/* | entrée dans la vue (seuil 0,5) | opacité 0 → 1 | tween 1 s `[.4,0,.2,1]` | 0,3 s | non | route `Dn` [C-PROJ-A16] | — |
| A-045 | Images (Image 1-3, galerie) « Project Reveal Image » | /projects/* | entrée dans la vue (seuil 0), une fois | masque 0 % → 100 % (gauche → droite), scale 1,3 → 1 | tween 1,2 s `[.87,0,.13,1]` | 0 | non | koAJndPrk L1213-1222, L1340-1360 [C-PROJ-A17] | à mesurer (D-021) |
| A-046 | Ligne de chaque Metric | /projects/* | entrée dans la vue | largeur 0 → 100 % | tween 1 s `[.56,.22,.05,.99]` | 0,1 s | non | route L2172 ; JKo4PdE_2 [C-PROJ-A18] | à mesurer (D-021) |
| A-047 | Cartes More projects | /projects/* | entrée dans la vue (seuil 0), une fois | y 20 → 0, opacité 0 → 1 | tween 0,85 s `[.215,.61,.355,1]` | 0,2 s + (index % 6) × 0,1 s | non | route `An`, `jn`, `Mn` [C-PROJ-A19] | — |
| A-048 | Carte More projects (D seulement, variante KePuGGRdl) | /projects/* | survol | titre haut : top 0 → −65 px ; titre bas : −65 px sous → position normale ; aperçu : bottom −30 → 0 | tween 0,46 s `[.87,0,.13,1]` | 0 | réversible | koAJndPrk L627-630, CSS `.hover` [C-PROJ-A20] | à mesurer (D-021) |
| A-049 | Bouton Play Film | gucci, puma | survol | padding 2 10 2 2 → 0 ; texte → absolu (right 0, top 49 %) | tween 0,46 s `[.87,0,.13,1]` | 0 | réversible | koAJndPrk L301-305, CSS `.hover` [C-PROJ-A21] | à mesurer (D-021) |
| A-050 | Fenêtre vidéo : fond | gucci, puma | clic Play Film / fermeture | opacité 0 → 1 (sortie 1 → 0) | tween 0,46 s `[.4,0,.2,1]` | 0 | oui à chaque ouverture | route L1240-1258 [C-PROJ-A22] | à mesurer (D-021) |
| A-051 | Fenêtre vidéo : lecteur | gucci, puma | clic Play Film / fermeture | opacité 0 → 1 (sortie 1 → 0), toujours `translate(-50%,-50%)` | tween 0,6 s `[.4,0,.2,1]` | 0 | oui | route `q`, `dn`, `ln`, `J`, `un` [C-PROJ-A23] | à mesurer (D-021) |
| A-052 | Lightbox de l'image du hero | chanel, adidas, nike, under-armour | clic image (D, T) | ouverture lightbox Framer (fond rgba(23,22,22,.75), image max 1920, padding 30) | tween 0,6 s `[.87,0,.13,1]` | 0 | oui | route L1180-1198 (`sn`) [C-PROJ-A24] | à mesurer (D-021) |
| A-053 | Lightbox des images 1-3 et galerie | /projects/* | clic image | idem, transition 0,46 s `[.87,0,.13,1]` | tween | 0 | oui | koAJndPrk L1330-1337 (`ct`) [C-PROJ-A25] | à mesurer (D-021) |
| C-127 | Hero (desktop) | /studio | Défilement (cible Culture, seuil 1) | scale 1 → 0.925, opacité 1 → 0.6 | lié au défilement, linéaire (progression ≈ scrollY/859) | — | réversible | module [C-127] | anim-1440 `heroScroll`, `heroCurve` |
| C-129 | Inside Container du hero (desktop) | /studio | Défilement | translateY 0 → −0.3·scrollY | parallaxe speed 130 | — | réversible | module [C-129] | anim-1440 `heroScroll` |
| C-130 | Fond de hero cM8Lf1CeK | /studio | Entrée en vue 0.5 | masque 0 % → 100 %, scale 1.5 → 1 ; voile opacité 0.65 | ressort 120/25/0.3 ; voile tween 0.5 s `[.4,0,.2,1]` | 0.8 s ; voile 0.1 s | non | cM8Lf1CeK [C-130] | non mesurée |
| C-131 | H1 « the studio. » | /studio | Chargement (appear 1wbcwny) | opacité .001 → 1, y 40 → 0 | ressort 120/25/0.3 | 1.15 s | non | module (kt, At) [C-131] | non mesurée |
| C-132 | Chapeau du hero | /studio | onInView | par ligne : opacité .001 → 1, y 15 → 0 | tween 0.8 s `[.215,.61,.355,1]` | startDelay 1.25 s, 0.1 s entre lignes | non | module (jt) [C-132] | non mesurée |
| C-133 | Nav du hero 8330z8 / 7hchzy, Location, Services, f6zjzb | /studio | Chargement | opacité .001 → 1 | ressort bounce 0.1, durée 1.2 s | 1.25 / 1.35 / 1.45 / 1.55 / 1.65 s | non | module (Dt, Ot, Mt, Nt, Ft) [C-133] | non mesurée |
| C-135 | Images culture 1 et 2 | /studio | Entrée en vue | opacité 0 → 1, x −20 → 0 | tween 0.85 s `[.215,.61,.355,1]` | 0.3 s / 0.4 s | non | module (Y, It, Lt) [C-135] | non mesurée |
| C-136 | Lightbox culture | /studio | Clic | vignette (117 px) → 840 × 840 ; fond rgba(23,22,22,.75) | tween 0.46 s `[.87,0,.13,1]` (mesure ≈ 480 ms) | 0 | à chaque clic | module (X) [C-136] | lightbox-1440 `img1.curve`, `img2.curve` |
| C-139 | H2 « We care about details… » | /studio | onInView | par ligne : opacité .001 → 1, y 15 → 0 | tween 1.1 s `[.215,.61,.355,1]` | startDelay 0.2 s, 0.1 s entre lignes | non | module (Rt) [C-139] | non mesurée |
| C-140 | Compteurs 12 / 3 / 24hr / 92% | /studio | Entrée en vue (some) | 0 → fin (texte, toFixed(0)) | ressort 500/60/1 (motion animate) | 0 | oui (remise à 0 à la sortie) | rWbx8J1Z4 (Y) [C-140] | anim-1440 `counterCurve`, `counterReplay` |
| C-143 | H2 « What guides us. », « Awards. » | /studio | onInView | par ligne : opacité .001 → 1, y 10 → 0 | tween 1.1 s `[.215,.61,.355,1]` | startDelay 0.2 s, 0.2 s entre lignes | non | module (Z) [C-143] | non mesurée |
| C-144 | Numéros de principes | /studio | Défilement (carte, seuil 0.5) | translateY −100 → 0 | lié au défilement | — | réversible | rWbx8J1Z4 (Q) [C-144] | anim-1440 `principles` |
| C-145 | Filets des principes | /studio | Entrée en vue 0.5 | variante b5cbcgrAD → iLlY2rby8 | tween 1 s `[.56,.22,.05,.99]` | 0 | non | rWbx8J1Z4 + Eu60T7thi [C-145] | non mesurée |
| C-145 | Filets des prix (4 lignes) | /studio | Entrée en vue 0.5 | variante → iLlY2rby8 | tween 1 s `[.56,.22,.05,.99]` | 0.1 / 0.2 / 0.3 / 0.4 s | non | module (BvVagVT4d) + rWbx8J1Z4 (J) [C-145] | non mesurée |
| A-054 | Libellé haut gauche `479px2` (masqué mobile) | /journal | chargement (appear) | opacité 0.001 → 1 | ressort bounce .1, 1.2 s | 1.2 s | non | `ststDNB…` `it`/`K` [A-JOURNAL-001] | — |
| A-055 | « Article Count » `t46hau` | /journal | appear | opacité 0.001 → 1 | ressort bounce .1, 1.2 s | 1.3 s | non | `at` [A-JOURNAL-002] | — |
| A-056 | `(2012-26©)` `1jg9bh7` | /journal | appear | opacité 0.001 → 1 | ressort bounce .1, 1.2 s | 1.4 s | non | `st` [A-JOURNAL-003] | — |
| A-057 | H1 `our Journal.` `l7fzdx` | /journal | appear | opacité 0.001, y 40 → 1, 0 | ressort s 120 / d 25 / m 0.3 | 1 s | non | `ct`/`X` [A-JOURNAL-004] | — |
| A-058 | Paragraphe d'intro | /journal | entrée dans la vue (seuil 0) | par ligne : opacité 0.001, y 15 → 1, 0 | tween 0.8 s cubic-bezier(.215,.61,.355,1) | départ 1.1 s, +0.1 s par ligne | non | `lt` [A-JOURNAL-005] | — |
| A-059 | Cartes `1goa1hn-<i>` | /journal | appear | opacité 0.001, y 40 → 1, 0 | tween 0.85 s cubic-bezier(.215,.61,.355,1) | 1.2 s + (i mod 8) × 0.1 s | non | `ut`/`dt` [A-JOURNAL-006] | — |
| A-060 | Carte : image de fond | /journal, articles (≥ 1200) | survol | scale 1 → 1.2, filter none → blur(5px) | tween 0.56 s cubic-bezier(.87,0,.13,1) | 0 | à chaque survol (aller/retour) | `caaAwhF9X` `L` [A-JOURNAL-007] | `hover.json` card@1440 |
| A-061 | Carte : image avant | idem | survol | largeur 100 % → 75 % (313.75 → 235.31 px @1440), rayon 10 → 8 px | tween 0.56 s cubic-bezier(.87,0,.13,1) | 0 | aller/retour | `caaAwhF9X` [A-JOURNAL-008] | `hover.json` card@1440 (stable à 576 ms) |
| A-062 | Curseur « Read Article » : cercle | idem (≥ 1200) | entrée sur carte | scale 0 → 1 | ressort bounce .2, 0.4 s (variante : tween 0.56 s (.87,0,.13,1)) | 0 | oui | `toplevel-deps` `cy`/`sy` [A-JOURNAL-009] | — |
| A-063 | Curseur : position | idem | déplacement du pointeur | suit le pointeur, placement bottom | ressort s 500 / d 60 / m 1 | 0 | continu | `ststDNB…` `gt`, `vlaxPR…` `On` [A-JOURNAL-010] | — |
| A-064 | « BG Image » couverture `54cq2o` | article | appear | scale 1.3 → 1.02 | ressort s 120 / d 25 / m 0.3 | 0.8 s | non | `vlaxPR…` `tn`/`J` [A-JOURNAL-011] | — |
| A-065 | « Middle Image » `1pw0cc0` | article | appear | scale 1.3 → 1 | ressort s 120 / d 25 / m 0.3 | 0.9 s | non | `en`/`J` [A-JOURNAL-012] | — |
| A-066 | « Back to the journal » `vd6m2l` | article | appear | opacité 0.001 → 1 | ressort bounce .1, 1.2 s | 1.3 s | non | `nn` [A-JOURNAL-013] | — |
| A-067 | Libellé haut `1hsgk09` (masqué mobile) | article | appear | opacité 0.001 → 1 | ressort bounce .1, 1.2 s | 1.4 s | non | `rn` [A-JOURNAL-014] | — |
| A-068 | Date `mxg65r` | article ≥ 810 | appear | opacité 0.001 → 1 | ressort bounce .1, 1.2 s | 1.5 s | non | `an` [A-JOURNAL-015] | — |
| A-069 | Date | article 390 | entrée dans la vue (seuil 0.5) | opacité 0 → 1 | ressort bounce .1, 1.2 s | 0 | non (une fois) | `ln`/`un` [A-JOURNAL-016] | — |
| A-070 | Catégorie | article | entrée dans la vue (seuil 0) | par ligne opacité 0.001, y 15 → 1, 0 | tween 0.6 s cubic-bezier(.215,.61,.355,1) | départ 1.1 s (390 : 0.2 s), +0.1 s/ligne | non | `pn`/`mn`/`Q` [A-JOURNAL-017] | — |
| A-071 | H1 `ust23z` | article ≥ 810 | appear | opacité 0.001, y 40 → 1, 0 | ressort s 120 / d 25 / m 0.3 | 1 s | non | `hn`/`gn` [A-JOURNAL-018] | — |
| A-072 | H1 | article 390 | entrée dans la vue (seuil 0.5) | opacité 0, y 40 → 1, 0 | ressort s 120 / d 25 / m 0.3 | 0 | non | `_n`/`vn` [A-JOURNAL-019] | — |
| A-073 | Description | article | entrée dans la vue | par ligne opacité 0.001, y 15 → 1, 0 | tween 0.6 s (.215,.61,.355,1) | départ 1.1 s (390 : 0.1 s), +0.1 s/ligne | non | `pn`/`yn` [A-JOURNAL-020] | — |
| A-074 | Auteur `1r9wpld` | article ≥ 810 | appear | opacité 0.001 → 1 | ressort bounce .1, 1.2 s | 1.2 s | non | `bn` [A-JOURNAL-021] | — |
| A-075 | Auteur | article 390 | entrée dans la vue (seuil 0.5) | opacité 0 → 1 | ressort bounce .1, 1.2 s | 0.3 s | non | `xn`/`ln` [A-JOURNAL-022] | — |
| A-076 | Intro Header `<h2>` | article | entrée dans la vue | par ligne opacité 0.001, y 15 → 1, 0 | tween 0.8 s (.215,.61,.355,1) | départ 0.1 s, +0.1 s/ligne | non | `Sn` [A-JOURNAL-023] | — |
| A-077 | Corps rich text | article | entrée dans la vue (seuil 0) | opacité 0, y 40 → 1, 0 | ressort s 120 / d 25 / m 0.3 | 0.2 s | non | `Cn`/`_n` [A-JOURNAL-024] | — |
| A-078 | Boutons Share : icône | article ≥ 1200 | survol | fill 13,13,13 → 245,45,15 | CSS `fill 0.2s ease` | 0 | aller/retour | `function U` [A-JOURNAL-025] | `hover.json` share |
| A-079 | Bouton copie : icône | article | clic | copie → coche → copie | instantané, retour à 2000 ms | 0 | à chaque clic | `function U` [A-JOURNAL-026] | `hover.json` share.copy |
| A-080 | « More articles » : cartes | article | entrée dans la vue (seuil 0) | opacité 0, y 40 → 1, 0 | tween 0.85 s (.215,.61,.355,1) | 0.3 s + i × 0.1 s | non | `pgtQfyOCv` `gn`/`_n`/`hn` [A-JOURNAL-027] | — |
| A-081 | « More articles » : H2 | article | entrée dans la vue (seuil 0) | par ligne opacité 0.001, y 10 → 1, 0 | tween 1.1 s cubic-bezier(.215,.61,.355,1) | départ 0.2 s, +0.2 s/ligne | non | `pgtQfyOCv` `fn` [A-JOURNAL-028] | — |
| A-082 | « More articles » : View All | article | entrée dans la vue (seuil 0) | opacité 0 → 1 | ressort bounce .1, 1.2 s | 0.6 s | non | `pgtQfyOCv` `pn`/`mn` [A-JOURNAL-029] | — |
| C-171 | H1 « start a project. » (`f17uai`) | /contact | chargement | opacity .001, y 40 → 1, 0 | ressort 120 / 25 / 0.3 | 1 s | non | W8Mju5L `Ie`/`Le` [C-171] | à relever |
| C-172 | Intro hero (par ligne) | /contact | onInView, threshold 0 | opacity .001, y 15 → 1, 0 | tween 0.8 s [.215,.61,.355,1] | startDelay 1.1 s, +0.1 s par ligne | non | W8Mju5L `X` [C-172] | à relever |
| C-173 | Logo Top (`i3k6v0`) | /contact | chargement | opacity .001 → 1 | ressort bounce .1, durée 1.2 s | 1.2 s | non | W8Mju5L `Pe` [C-173] | — |
| C-173 | Nav Top (`6hdhbv`) | /contact | chargement | opacity .001 → 1 | ressort bounce .1, durée 1.2 s | 1.3 s | non | W8Mju5L `Fe` [C-173] | — |
| C-174 | Icônes sociales (`c6ixgn`) | /contact | chargement | opacity .001 → 1 | ressort bounce .1, durée 1.2 s | 1.4 s | non | W8Mju5L `Re` [C-174] | — |
| C-174 | Address (`wkv69t`) | /contact | chargement | opacity .001 → 1 | ressort bounce .1, durée 1.2 s | 1.5 s | non | W8Mju5L `ze` [C-174] | — |
| C-174 | Office hours (`1yutnjb`) | /contact | chargement | opacity .001 → 1 | ressort bounce .1, durée 1.2 s | 1.6 s | non | W8Mju5L `Be` [C-174] | — |
| C-176 | Conteneur Contact CTA | /contact | entrée dans la vue, threshold 0 | opacity 0, y 40 → 1, 0 | tween 0.85 s [.215,.61,.355,1] | 1.4 s | non (animateOnce) | W8Mju5L `Ve`/`He` [C-176] | — |
| C-182 | Formulaire → Loading / Success | /contact | envoi | filter none → blur(5px), scale 1 → .95 (+ opacity .35 en Success) ; spinner opacity 0 → 1 | transition du composant (homeb) | Success 800 ms après onSuccess | — | n_03H18N2 [C-182] | non mesurable (pas d'envoi) |
| C-186 | Item FAQ (hauteur) | /contact | clic | 51 → 175 px (Q1, 1440) | 0.46 s [.87,0,.13,1] | — | à chaque clic | NIqbhJ1MS l.397 + mesure [C-186] | reference/agents/contact/interact/1440.json (`faqClick1Curve`, `faqClick2Curve`) |
| C-186 | Icône Plus FAQ | /contact | clic | barre verticale → `top: 12px` (variante) | 0.26 s [.87,0,.13,1] | — | à chaque clic | NIqbhJ1MS l.224, CSS `framer-v-5x09si` [C-186] | à relever |
| C-189 | Logo / nav Top (`1w1rh85`, `1kt5x92`) | légales | chargement | opacity .001 → 1 | ressort bounce .1, durée 1.2 s | 1.3 s / 1.4 s | non | oYmZ9Uf `pt`/`mt` [C-189] | — |
| C-190 | « Last Updated » (`85otex`) | légales | chargement | opacity .001 → 1 | ressort bounce .1, durée 1.2 s | 1.2 s | non | oYmZ9Uf `ht` [C-190] | — |
| C-192 | H1 (`1p9fj0l`) | légales | chargement | opacity .001, y 40 → 1, 0 | ressort 120 / 25 / 0.3 | 1 s | non | oYmZ9Uf `yt`/`bt` [C-192] | — |
| C-193 | Intro (par ligne) | légales | onInView | opacity .001, y 15 → 1, 0 | tween 0.8 s [.215,.61,.355,1] | startDelay 1.1 s, +0.1 s/ligne | non | oYmZ9Uf `xt` [C-193] | — |
| C-194 | Corps riche (`104pdxd`) | légales | entrée dans la vue, threshold 0 | opacity 0, y 40 → 1, 0 | ressort 120 / 25 / 0.3 | 1.3 s | non (animateOnce) | oYmZ9Uf `St`/`Ct` [C-194] | — |
| C-195 | Lien du corps (survol) | /privacy-policy | survol | #fff / fond rouge → #f5f4e7 / #1d1f19 | 0.6 s cubic-bezier(.4,0,.2,1) | — | à chaque survol | CSS preset `vu1xf3` [C-195] | à relever |
