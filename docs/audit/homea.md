# Audit homea — accueil `/`, du Hero à « Meet the team »

Agent : homea. Périmètre : Hero (DOM seulement ; shader du slider → `docs/WEBGL.md` § « Slider du hero »), 01 About us (y compris la « Work Section » qui la prolonge : « 50 BRANDS. 14 YEARS. ONE STANDARD. », « See all 6 », médias), 02 Our clients, 03 Why us, 04 Services, 05 Meet the team (+ recrutement).
Hors périmètre : header partagé « Shared Navigation » (barre latérale 59 px à gauche en desktop), préchargeur (`docs/audit/preloader.md`), Process et suite, newsletter, footer.

## Sources
- **Textes exacts, liens, médias, alt** (fiables, toutes variantes) : `reference/agents/homea/ssr-texts.txt|.json` (`scripts/agents/homea/ssr-texts.mjs`, HTML SSR, JS coupé, 1440 / 900 / 390). Les textes sont identiques aux trois breakpoints : seuls les noms de variantes changent (« Desktop - Right » / « Phone Right », « Small » / « Small Phone », « Desktop » / « Phone »). Données : `src/data/homea.ts`.
- HTML SSR : `reference/html/home.html` → plan `reference/agents/homea/ssr-outline.txt` (`scripts/agents/homea/ssr-outline.mjs`). Lignes : Hero 27-346 (3 variantes SSR), About 347-749, Work Section 750-858, Clients 859-1095, Why us 1096-1435, Services 1436-2131, Team 2132-3004.
- DOM rendu (banc, `launch({webgl:false})`, `gotoStable('/')`) : `reference/agents/homea/dom-<w>.json|.txt` + résumé `sum-<w>.txt` (`scripts/agents/homea/dom.mjs`, `summarize.mjs`). Coordonnées page, px CSS. **État** : dumps 1440 et 1200 complets pour Hero / About (hors composants) / Why us / Services (conteneurs) ; la reprise (composants internes, 810, 390) a échoué 4 fois par dépassement du délai de 7-9 min dans `gotoStable` (machine chargée à ~72 % CPU par les autres agents, même en `net:'replay'`) → **à compléter**.
- Module de route embelli : `reference/framer-code/pretty/J_la0crrNhwxVDm3QRQL50OHFMp-MUpGrN-W8FsMusA.D3aw61EU.mjs.js` (cité `R.Lnnnnn`). Composants embellis (copies nouvelles créées : `vL1rEwvHQ.BRqKSIP-.mjs.js`, `jvKQE_ghl.D8L5bMF5.mjs.js`, `Eu60T7thi.P98_SUm8.mjs.js`; existants : `JKo4PdE_2`, `TJ9zZTo1g`, `v7Wd3N72W`).
- `reference/framer/animations.json` (home) : **une seule** apparition SSR, `ydlgfe` (bouton « Buy template », hors périmètre). Toutes les animations de ce périmètre sont déclarées dans le module (props `__framer__*`, `effect`), donc créées au montage côté client.

### Correspondances
- Breakpoints de la route (R.L12093-12098, R.L12448) : Desktop `C3xj8tOVY` (défaut), Tablet `kUxiuAHJw` = `framer-v-gw4wpc` (810-1199,98), Phone `qjDyvUsLb` = `framer-v-1aemvzd` (≤ 809,98). Classes SSR : `hidden-coh9ff` = masqué ≥ 1200, `hidden-gw4wpc` = masqué en tablette, `hidden-1aemvzd` = masqué en mobile.
- Composants (import → module) : Section label `wt` = `TJ9zZTo1g` (export s) ; Author Card `Tt` = `TJ9zZTo1g` (t) ; Primary Link `Dt` = `v7Wd3N72W` (t) ; Bar Graph `Zt`/`nh` = `vL1rEwvHQ` export h (`Xn`, classe `framer-0lSwF`, L.1828-2432) ; Service Card `qt` = `vL1rEwvHQ` a (`ta`, `framer-if8OZ`, L.5046-6028) ; Projects Button `tn` = `vL1rEwvHQ` s (`ji`, `framer-k45qK`) ; Clients `Pt` = `jvKQE_ghl` t (`$`, `framer-HIOH4`, L.2250-2976) ; Team `At` = `jvKQE_ghl` l (`K`, `framer-EGaJK`, L.389-1350) ; Team Card `Ot`/`Um` = `jvKQE_ghl` d (`U`, `framer-ZmXTs`, L.155-389) ; Project Metric `mn` = `JKo4PdE_2` (contient Animated Line `Eu60T7thi`) ; Text Reveal `hf` (scope `YlZkarAqD`, composant de code).

### Presets typographiques (styles calculés à 1440 ; autres largeurs à compléter)
| Preset | Famille | Taille / interligne | Espacement | Casse | Axes (`font-variation-settings`) |
|---|---|---|---|---|---|
| `1l3tbw0` | Mona Sans Variable | 23px / 26.45px | -0.23px | uppercase | wdth 75, wght 675 |
| `c95aba` | Mona Sans Variable | 15px / 18px | -0.15px | uppercase | wdth 80, wght 700 |
| `fvem1p` | Mona Sans Variable | 60px / 60px | -1.2px | uppercase | wdth 75, wght 700 |
| `1c0t51l` | Mona Sans Variable | 80px / 72px | -1.6px | uppercase | wdth 75, wght 700 |
| `ervepf` | Mona Sans Variable | 30px / 34.5px | -0.6px | uppercase | wdth 75, wght 675 |
| `s3qbre` | Mona Sans Variable | 40px / 42px | -0.8px | uppercase | wdth 75, wght 700 |
| `k5mxv3` | Mona Sans Variable | 17px / 20.4px | -0.17px | uppercase | wdth 75, wght 700 |
| `10r2g7l` | Switzer | 15px / 21px | -0.45px | none | — |
| `lu6cf5` | Switzer | 13px / 18.2px | -0.26px | none | — |

Couleurs relevées : noir texte rgb(13,13,13) (token `d33926f3…`, repli #0a0a0a), blanc (token `27d215b1…`), rouge Mira rgb(245,45,15) en rendu (token `f277370d…`, repli SSR rgb(255,57,3) — la valeur du token l'emporte), gris rgb(188,188,188) (token `1486dbb4…`), gris rgb(104,104,104) (token `82d92470…`), fond Why us rgb(247,247,247).

### Effets de texte communs (R.L12175-12355)
Composant texte avec `effect` (type `appear`, `trigger: onInView`, `threshold: 0`, `repeat: false`) — découpe le texte en spans (lettre/mot) :
| Const | Découpe | Départ | Transition | startDelay | Utilisé par |
|---|---|---|---|---|---|
| `Ih` | line | opacity 0.001, y 15 | tween 1.1 s, delay 0.1, ease [.215,.61,.355,1] | 0.2 | H2 About |
| `Uh` | line | opacity 0.001, y 15 | tween 0.8 s, delay 0.1, même ease | 0.5 | citation About, « Impact Supporting Copy », « Services Description » |
| `Wh` | word | opacity 0.001, y 5 | tween 0.6 s, delay 0.02, même ease | 0.5 | « Small Text » About |
| `Zh` | line | opacity 0.001, y 10 | tween 1.1 s, delay 0.2, même ease | 0.2 | « Impact Headline », « Services Heading » |
Le `delay` est le décalage entre lignes/mots (sémantique exacte du composant Framer « text effect » : à mesurer, courbe à relever). Apparitions de blocs (`__framer__styleAppearEffectEnabled`, `animateOnce: true`, `threshold: 0`, départ `Lh` = opacity 0) : ressort `bounce 0.1, duration 1.2` avec délais `Rh` 0.5, `Bh` 0.6, `Hh` 0.4, `Gh` 1.0, `Qh` 0.9.

---

## 1. Hero — `section[data-framer-name="Hero"]` `.framer-gdnth6` (R.L12757)
Parent « Hero / About » `.framer-188p22q` (layout `position`). Trois variantes SSR.

### Desktop 1440 (mesuré)
- Section : x 59 (barre latérale du header : 59 px), 1381 × 900 (hauteur de fenêtre), `position: sticky`, flex colonne centrée, gap 15px, `overflow: clip`.
- **Défilement** (desktop seulement ; tablette/mobile : `__framer__styleTransformEffectEnabled: void 0`) : `onScrollTarget` avec cible `ref: P` = section About → opacity 1 → 0.6, scale 1 → 0.925 pendant que l'About recouvre le hero (seuil de fenêtre 1). Courbe : à mesurer.
- « Inside Container » `.framer-1d50dfc` : **parallaxe** desktop seulement, `__framer__speed: 130`, offset 0, `adjustPosition: false` (R.L13007-13017).
- « Slider Container » `.framer-16qy4y3` : absolu, inset 3px (62,3 → 1375 × 894), rayon 12px, `overflow: clip` ; composant « Project Showcase Slider » (WebGL : `docs/WEBGL.md`).
  - Slot source hors écran (left -99999px) : 4 « Project Card » `<a>` → `./projects/gucci|chanel|puma|adidas` ; « Cover » (img, rayon 12px, `object-fit: cover`, centre) ; « Uploaded Video » (Gucci, Puma : `<video loop muted playsinline>`, poster = couverture) ; « Guide Dynamic Label » (Gucci / Chanel / Puma / Adidas).
  - Texte accessible masqué (`clip-path: inset(50%)`) : « Slide 1 of 4: GUCCI ».
  - Repli sans WebGL : image plein cadre `uQzt05iescwLlC6DKg4M1qwR6o.jpg?scale-down-to=2048`, alt vide.
  - Vignettes : 4 `<button>` 90 × 50, rayon 8px, `aria-label="Go to slide N: GUCCI|CHANEL|PUMA|ADIDAS"`, colonne à x 1317, y 344/398/452/506 (pas 54px). Active : `translateX(8px)` ; inactives : image `opacity: 0.3`. Gucci et Puma : `<canvas>` 90 × 50 (vignette vidéo 2D, WEBGL.md « Canvas 90×50 »). Alt : GUCCI, CHANEL, PUMA, ADIDAS.
- « Inside Container » : padding 33px, flex colonne `space-between`.
  - « Top » `.framer-x2u5i` (header du hero, padding-bottom 50px, grille gap 40px 20px) : logo « mira » (masque SVG, fond blanc, 70 × 19.36, lien `./`, aria-label `home`) ; « Navigation Links » variante « Desktop - Top » : `projects` (+ « (6) » c95aba rouge), `Studio`, `Journal` → `./projects`, `./studio`, `./journal`, chaque libellé doublé (2ᵉ `<p>` à +25px : roulement au survol, composant partagé — détail chez l'agent header). Ces éléments sont **masqués en mobile** (`hidden-1aemvzd`).
  - « Middle » (grille gap 20px) : « Filler » 313.75px (masqué en mobile) ; « Text Container » x 425.75, 981.25 de large : SVG « Logo Name » 550 × 259.14, « R Symbol » SVG 27.5 × 39.88 (absolu, translate(-13.75,-19.94)), « Logo Descriptor » SVG 247.5 × 67.5 (absolu) ; H1 « Studio Introduction » 550 large, preset `1l3tbw0`, blanc.
  - « Bottom » (padding-top 50px, grille 3 colonnes gap 40px 20px) : « Location » (« based in » gris 188 + « los angeles », « tokyo » blancs, gap 4px) ; « Services » (« Services » gris + 4 libellés blancs, gap 4px) ; « Contact » (« let’s talk » gris + « Navigation Contact Button » variante « Desktop » 150 × 42 → `./contact`, aria-label `contact` ; fond rouge, padding 5px 15px 5px 5px, rayon 4px, conteneur 8px `corner-shape: superellipse(1.5)`, photo 32 × 32 `I0Zin8u1THTGGeYzoOdXdo8LGQ8.jpg` alt vide, icône SVG 17 × 17). Survol du bouton : composant `toplevel-deps` export b (agent header/boutons).
- Aucune animation d'apparition sur les textes du hero (pas d'`effect`, pas d'appear-id).

### Textes exacts
- H1 : « Mira is a studio for founders who care how they’re seen. We turn good work into a presence that earns attention — and closes the gap between who you are and how you look. » — précédé de 22 espaces dans le DOM (retrait de 1ʳᵉ ligne). Lignes à 1440 (ancien relevé, à revalider) : `Mira | seen. | and`.
- « based in », « los angeles », « tokyo », « Services », « Brand Identity », « Web Design », « Framer Dev », « Art Direction », « let’s talk ».

### Desktop 1200 / tablette 810 / mobile 390 : à compléter (dump 1200 présent : `reference/agents/homea/sum-1200.txt`).

## 2. 01 About us — `section[data-framer-name="About"]` `.framer-ycmhje` (R.L13402)
Desktop 1440 : y 900, 1381 × 1014.78, fond blanc, padding 120px 0, gap 80px ; « Inside Container » padding 0 33px, gap 80px, `overflow: clip`. La section recouvre le hero sticky au défilement.
- « Positioning Headline Group » (grille gap 20px) : « Positioning Section Label » (Section label : « (01) » rouge + « About us » noir, c95aba) ; H2 « Positioning Headline » preset `fvem1p`, `text-align: justify`, 17 espaces de tête, texte : « WE BUILD BRANDS FOR FOUNDERS WHO REFUSE TO BLEND IN. FEWER PROJECTS, MORE ATTENTION, AND A STUDIO SMALL ENOUGH THAT THE PERSON YOU HIRE IS THE PERSON DOING THE WORK. » avec « REFUSE » en rouge (span token f277370d). Effet `Ih`. Largeur 981.25 à 1440.
- « Philosophy » (grille gap 40px 20px) :
  - « Card / Signature » (313.75 × 454.78) : « Founder Profile Card » (Team Card, apparition `Rh` 0.5 s + variante visible/obscurcie `cqy9B66RZ`/`Q7SnnxNQf` à 50 % — `Q7SnnxNQf` n'existe pas dans le composant, qui n'a que « Revealed » `cqy9B66RZ` : effet réel à mesurer) — image `TuRLGK3mEZRYyPgrKdtjwj6TKxM.jpeg` (655 × 1001, local `/assets/images/TuRLGK3mEZRYyPgrKdtjwj6TKxM.jpeg`, alt « Portrait of Jin Yuen »), « Jin Yuen », « Founder » ; bloc apparition `Bh` 0.6 s ; « Signature » apparition `Hh` 0.4 s (`translateY(-50%)`).
  - « (My philosophy) » (c95aba, rgb(104,104,104)).
  - « Quote » : « “ I started Mira because I kept watching great people lose to worse competitors with better presence. ” » (preset `ervepf`, effet `Uh`) ; « Small Text » Switzer `10r2g7l` : « Design isn't decoration — it's the fastest way to be understood. Every project is built around one question: does this actually move the business forward? » (apostrophes droites, effet `Wh`) ; la partie jusqu'à « question: » est en gris rgb(104,104,104), « does this actually move the business forward? » reste à la couleur du preset.
  - « Philosophy Link » (Primary Link, variante « Desktop - Right » ; « Phone Right » en mobile) : « See the studio » → `./studio`, apparition `Gh` 1.0 s.

### Work Section — `.framer-3iq6j8` (R.L13712), suite de l'About
- « Work Reveal » > « Inner » : « Logo / Text Reveal / Button » apparaît (x -100 → 0, opacity 0 → 1, tween 0.6 s ease [.44,0,.56,1], **rejoué** : `animateOnce: false`, déclenché par « Trigger 2 » `ref L`, seuil 1).
  - « Text Reveal » (composant de code, `type: scrub`, `viewport: bottom`, `replay: true`, `section: R`) : lignes { delay 0.07, duration 0.6, ease `power2.in`, mask, x 10 → 0, stagger 0.365 } ; mots { delay 0.15, duration 0.8, ease linear, mask, opacity 0 → 1, stagger 0.965 }. Texte H2 preset `1c0t51l` blanc, `<strong>` : « 50 BRANDS. » ⏎ « 14 YEARS. » ⏎ « ONE STANDARD. » (retours `<br>` forcés ; « ONE » en rouge, token f277370d ; le reste en blanc).
  - « Projects Collection » (CMS, 1 élément, `Xh`) : « Featured Projects Button » (Projects Button) « See all » + « 6 », vidéo `o74zvFwrxG1ofp4gdhRqo1Ujgk.mp4` ; apparition x 50 → 0, opacity 0 → 1, tween 0.6 s delay 0.1, ease [.44,0,.56,1], rejouée, `ref L`.
- « Media » : scale 3.1 → 1 au défilement jusqu'à « Trigger 1 » (`ref R`) ; « Dark Overlay » opacity 0 → 1 (×`__targetOpacity` 0.65). Grille d'images (variante `DlVS4BEWz` du composant « Reveal Image ») : Top Row (Top : `WigME9FAJdZx9jQu2PhxXL8Pc9M.jpg` 1008×1440 / vidéo `V3ybBeZxp5aiQvQwxbsc72F4V4.mp4` ; Bottom : `kP9y3f68sbv1icRVUmBXDlIfu0I.png`), Middle Row (`Pvg65dRGYEkffGzS24z71aAheT0.jpg`, `BOaxMUc8EHCGgQUwQ0NELClE1U.jpg`, `NuuceAGvddP5JL0LEhEjp8bdnM.jpg` / `LYIGz8CY670o999qJep8WeHqgzM.mp4`), Top Row 2 (`FbhJf8mYmDiQSJihxpqFmhRJxU.jpg` / `rjNIvMHRogDJaHfneCJlZtXM.mp4`, `AgAKhYFyXNgfrvcXhbkrSnOv8.jpg`). Attribution exacte image ↔ vidéo et dimensions rendues : à compléter.
- « Trigger 1 », « Trigger 2 », « Stop Scroll » : repères de défilement (hauteurs à mesurer).

## 3. 02 Our clients — « Client Logo Marquee » `.framer-hkp95f-container` → composant Clients `framer-HIOH4`
Variantes : Desktop `FsjNXJSJN` (`framer-v-1npuuv8`), Tablet `kDO0BDS0T` (`a12wje`), Phone `uUtPUWNo6` (`kvuuzz`). Desktop/tablette : instance `hidden-1aemvzd` ; mobile : instance distincte (SSR « Phone »). À 1440 : y 5064.78, 1381 × 561.
Contenu (SSR) : label « (02) » « Our clients » ; « 2012 2026© » ; 3 avatars alt vide (`foJh1zwI8ZAzyJVfsEgIaSkdMjk.jpg`, `XCY5hpPBRBS6cdWzaAWas5dffkA.jpg`, `qV50KoxOEdTy8EP8lnobhyGqbzE.jpg`) ; « +47 » ; « 4.9/5 » (`<strong>4.9</strong>` + « /5 » gris 104) ; « Trusted by 50+ clients » (« Trusted by » gris 104), preset `ss7lqy`. Logos : composants SVG Mcdonalds, Uber, Intel, Apple (jvKQE_ghl), ordre et nombre à relever au rendu. Apparitions : opacity 0 → 1, ressort bounce 0.1 / 1.2 s, délais 0.1 à 0.8 s selon l'élément (L.2420-2445, 2570-2976) ; correspondance élément ↔ délai : à compléter. Textes exacts, dimensions : à compléter.

## 4. 03 Why us — `section[data-framer-name="Why us"]` `.framer-1qtyeza` (R.L14369)
Desktop 1440 (mesuré) : y 5625.78, 1381 × 1538.45, padding 3px. « Outer Container » rayon 12px, fond rgb(247,247,247), padding 120px 0, `overflow: clip`. « Inside Container » padding 0 33px, gap 80px.
- « Label / Heading » (grille gap 20px) : label « (03) » rouge + « Why us » ; « Impact Headline Group » (gap 30px) : H2 `1c0t51l` « why Mira® is your next choice. » (« next » en rouge, token f277370d) effet `Zh` ; « Impact Supporting Copy » `1l3tbw0` justifié, 26 espaces de tête : « WITHIN SIX MONTHS OF LAUNCH, CLIENTS SEE AN AVERAGE 47% LIFT IN QUALIFIED INBOUND, MEASURED ACROSS PRE AND POST-LAUNCH PERFORMANCE. » (cette dernière phrase en gris 104) effet `Uh` ; « Impact Footnote » Switzer `lu6cf5` gris 104 : « *Across client launches from 2023 to 2026, measured over the first six months post-launch. » (apparition `Qh` 0.9 s).
- **Graphique « Impact Bar Graph »** (Bar Graph `framer-0lSwF`, 1000 × 314 par défaut) : variante obscurcie Start `q09oREoWS` → visible End `bu2EzEpdX` quand 50 % visible, une seule fois. Transition : tween **0.76 s, delay 0.4 s, ease [.87,0,.13,1]**. Start : « Top Bar » largeur 1px, texte « +47% inbound » opacity 0. End : « Top Bar » 100 %. « Bottom Bar » 25 % (fixe). Barres : rayon 10px `superellipse(1.5)`, hauteur 50px, padding 10px ; Top Bar fond noir, texte blanc c95aba ; Bottom Bar fond blanc. Libellés : « With Mira » (+ logo), « +47% inbound », « Industry avg », « +12% » ; graduations « Lines » 1-7 : 0%, 8%, 16%, 24%, 32%, 40%, 48% ; légende : « Average growth in qualified enquiries, first six months after launch » (`text-wrap: balance`). Conteneur : padding 40px 15px, gap 20px.
- « Proof Points Group » (grille gap 40px 20px) :
  - « Company Card » 312 × 482, rouge, padding 30px, rayon 10px : icône (masque SVG blanc 40 × 35), « REAL BRANDS. REAL NUMBERS. ZERO HANDOFFS. » (blanc), « Most clients come back for the next project. The rest send referrals. » (opacity 0.85) ; « Stats » (padding-top 50px, gap 30px) : « 50+ » / « brands launched », « 100% » / « shipped on time » (h3 `s3qbre` blanc, libellés opacity 0.85).
  - **Les chiffres 50+, 100 %, 6 Wks, 40+ sont du texte statique** (identiques en SSR et après rendu, aucun compteur animé dans le module) ; seule la ligne de Project Metric s'anime.
  - « Filler » (masqué tablette/mobile).
  - « Project Metrics Group » : 2 « Project Metric » (variante Light `gNhLAbVYC`) : « 01 » « 6 Wks » (h2 `fvem1p`) « (AVERAGE TIME TO LAUNCH) » (`k5mxv3`) « Most projects go from first call to live site in under two months. » ; « 02 » « 40+ » « (REFERRALS SENT BY CLIENTS) » « Happy clients are the only marketing channel we've ever needed. » Chaque carte : « Animated Line » horizontale width 0 % → 100 % (h 1px) quand 50 % visible, une fois, tween 1 s ease [.56,.22,.05,.99].
  - « Services Introduction Group » : « Team Quote » c95aba : « NOT EVERY BRIEF IS A FIT. WE TAKE ON WORK WHERE DESIGN IS ACTUALLY THE PROBLEM. WHEN IT ISN'T, WE'LL TELL YOU. » (« WE TAKE ON WORK WHERE DESIGN IS ACTUALLY THE PROBLEM. » en gris 104) + « Founder Author Card » (photo `I0Zin8u1THTGGeYzoOdXdo8LGQ8.jpg` alt « Portrait of Jin Yuen », « Jin Yuen », « Founder, Mira », Switzer `lu6cf5`) ; « Services Introduction Link » (Primary Link « Desktop - Right ») « Start a project » → `./contact` (17px `k5mxv3`, chevron 17 × 17 rouge rayon 4px ; « Bottom Text » doublé opacity 0 en absolu → roulement au survol, voir agent boutons).

## 5. 04 Services — `section[data-framer-name="Services"]` `.framer-nb46is` (R.L14880)
Desktop 1440 : y 7164, 1381 × 1372, padding 120px 0, gap 80px.
- « Label / Heading » (padding 0 30px, grille gap 40px 20px) : Filler ; label « (04) » + « What we bring » ; H2 `1c0t51l` « services. » (effet `Zh`) ; « Services Description » `1l3tbw0` justifié, 26 espaces : « Everything you need to look established, and nothing you don’t. Each service is priced and scoped before we start. » (effet `Uh`).
- « Service Cards » (padding 0 3px, gap 3px, colonne) : 4 « Services Card » (CMS) ; instance desktop/tablette (`hidden-1aemvzd`) et mobile (`hidden-coh9ff.hidden-gw4wpc`) → c'est l'origine des « 2 exemplaires » de chaque carte.
  - Variantes : Open `sITTYngnU` / Closed `EwnHLUTYk` (desktop/tablette), Phone Open `J93YZ5sxi` / Phone Closed `d59ZXs8LQ`. **La 1ʳᵉ carte est ouverte au chargement, les autres fermées** (R : `rg($h(d,1))`, `eg($h(d,1))`).
  - Clic (onTap) : Open → Closed, Closed → Open (idem Phone). Indépendant par carte (pas d'accordéon exclusif : chaque carte a son propre état) — à confirmer par mesure.
  - Survol de Closed (`EwnHLUTYk-hover`) : « Overlay » opacity 0.85 → 0.65, icône rotate 0 → -360°. Transition commune : tween **0.46 s, ease [.87,0,.13,1]**.
  - Contenu : « Count » « S. » + « (01) » (format 2 chiffres entre parenthèses) ; titre ; « Starts at $4,500 » (SSR ; préfixe du module `Starts at   - Contenu : « Count » « S. » + « (01) » (format 2 chiffres entre parenthèses) ;  + nombre formaté) ; description ; « Delivery time » / « 2-3 weeks » ; « includes » + 4 « Include Item » ; bouton « Start a project » → page `EzM9YfbIh` (= `/contact`). Bg Image + Overlay noir.
  - Contenu exact (SSR) :
    | # | Titre | Prix | Description | Délai | Inclusions | Image (alt) |
    |---|---|---|---|---|---|---|
    | (01) | Brand Identity. | Starts at $4,500 | Logo, type, color, and the system that keeps it consistent everywhere it lives. | 2-3 weeks | Logo and wordmark · Typography system · Color palette · Brand guidelines | HBR3eOr0XBTGww0Lb6ZuOVFmics.jpg (Hands holding OMG drink cans over a pool table) |
    | (02) | Web Design. | Starts at $6,500 | Sites built to turn attention into enquiries, not just look good. | 3-4 weeks | Up to 6 unique page designs · Mobile and tablet layouts · Component library · Hand-off documentation | Q2yUtgoIkkiZN1HbPx6lDdzQ5MM.jpg (Laptop on a white chair showing a website design) |
    | (03) | Framer Dev. | Starts at $4,000 | Fast, animated, and easy for you to update yourself. | 2-3 weeks | Pixel-perfect build in Framer · CMS setup and migration · Responsive across breakpoints · 30-day post-launch support | 7A9ugBPbexLNiH3INz3cZ7U8xtI.jpg (Corner of a black phone printed with Made for Creatives) |
    | (04) | Art Direction. | Starts at $3,500 | Photography, motion, and the visual language that ties everything together. | 2 weeks | Mood and direction boards · Shoot or motion brief · Asset selection and edit · Usage guidelines | PS60XMyUZk3sS97cmhWOwmpR1o.jpg (Two models with bold orange lipstick posing cheek to cheek) |
    Titre preset `ervepf`, prix/délai/inclusions `c95aba`, description `lu6cf5`. « Services Description » : « Each service is priced and scoped before we start. » en gris 104.

## 6. 05 Meet the team — « Services Team Module » `.framer-hm4zv8-container` → Team `framer-EGaJK`
Variantes Desktop `nyB2hDezr` (`s41k98`), Tablet `vmZ77DTLy` (`1enjxj0`), Phone `UU2nT8yjn` (`1j52xp1`). « Outer Container » fond rouge, `superellipse(1.5)`.
- « EST. 2012 » (texte DOM « ␣EST. 2012 », espace de tête) ; label « (05) » « Meet the team » (compteur rgba(255,255,255,0.75)) ; H2 `fvem1p` (17 espaces de tête) : « WE STAYED SMALL SO WE COULD STAY PICKY. EVERY PERSON ON A PROJECT IS THERE BECAUSE THE WORK NEEDED THEM, NOT BECAUSE THEY HAPPENED TO BE FREE. » (« SMALL » et « STAY PICKY » dans des spans à variables de couleur propres, blanc par défaut) ; « (4) Team Members ».
- Cartes équipe (CMS `EtcJbL_Rb`, Team Card) : apparition opacity 0 → 1, ressort bounce 0.1 / 1.2 s, **délai 0.5 + 0.1 × index**, une fois. Disposition `row` (desktop) / `column` (tablette, mobile). Membres (nom `1l3tbw0`, rôle `c95aba`) : Jin Yuen, Founder (`mYGjKrp0gW5PReDsl8CDmODKzoc.jpeg`) ; Sarah Park, Designer (`O83WqKF5apvVU9qmpgDRLbAvWyo.jpg`) ; Alex West, Client Manager (`OJ7FFbgKuSOxXFrM0pc3gbYUoBI.jpg`) ; David Torres, Developer (`h0uF4ecVvj33A97za3PYY3KMg.jpg`). Alt : « Portrait of <nom> ».
- « Hiring Block » : « join us, we're hiring. » (h3 `s3qbre`), « We’re looking for highly ambitious and talented people to help us drive real growth. » (`lu6cf5`), « 02 » « Open Positions », bouton « Email us » = `<a>` **sans href** (placeholder) ; photo « Team photo » `aln56RYSsLI44dsw9rKWKszI.jpg` (alt « Studio team talking in a bright workshop »).

## Inconnues
- Géométrie et styles calculés à 810 et 390, et intérieurs des composants à 1440/1200 (le banc dépasse le délai sur la machine chargée).
- Courbes mesurées (aucune relevée) : effets de texte, barre, ligne, hero au défilement, parallaxe 130, Work Section.
- Effet réel de la variante obscurcie inexistante `Q7SnnxNQf` (Founder Profile Card).

## Mobile 390 (mesuré : `reference/agents/homea/dom-390.txt`, `sum-390.txt`, 521 s sur le banc, `STEP=1 NET=replay`)
| Section | Rect page (x,y,l,h) | Différences avec le desktop |
|---|---|---|
| Hero | 0,0,390,828 | pas de barre latérale (x 0) ; Slider Container inset 3px (384 × 822), rayon 12px ; Inside Container padding 23px ; H1 `1l3tbw0` à 19px / 21.85px, ls -0.19px, **justifié**, 344 de large |
| About | 0,828,390,923 | padding 60px 0, gap 60px ; Inside padding 0 23px, gap 40px ; H2 `fvem1p` à 30px / 30px, ls -0.6px |
| Work Section | 0,1751,390,3150 | « Work Reveal » **sticky** 390 × 900 (padding 3px, rayon 12px) ; « Trigger 1 » 1800px de haut ; « Stop Scroll » 450px ; H2 `1c0t51l` à 45px / 40.5px, lignes `50 | 14 | ONE` |
| Clients | 0,4901,390,644 | variante Phone (`framer-v-kvuuzz`), padding 60px 0, gap 40px |
| Why us | 0,5544,390,1873 | Outer padding 60px 0 ; H2 45px / 40.5px, lignes `why | your` ; Bar Graph 338 de large (padding 40px 15px), Top Bar 308 × 50 ; métriques `fvem1p` 30px |
| Services | 0,7417,390,1148 | padding 60px 0, gap 40px ; Label / Heading en colonne (padding 0 23px, gap 15px) ; H2 « services. » 45px ; carte 1 « Phone Open » 384 × 594 (fond rgb(13,13,13), rayon 12px, padding 20px 0) ; cartes 2-4 « Phone Closed » 384 × 66, pas 69px (gap 3px) ; bouton rond blanc 20 × 20 (rayon 100 %, padding 4px), titres 45px blancs |
| Team | 0,8565,390,1779 | variante Phone (`framer-v-1j52xp1`), padding 3px, gap 15px ; H2 30px, couleur rgba(13,13,13,0.7) dans le dump (à revoir : apparition en cours ou couleur de variante) |

Valeurs desktop 1200 : `sum-1200.txt` (relevé de l'ancien script, intérieurs des composants absents). **Tablette 810 : pas de dump** (le banc a dépassé le délai, demande n° 1).
