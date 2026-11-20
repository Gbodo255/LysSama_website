# WebGL — fiches techniques

_Une fiche par composant (slider hero, vitrine incurvée, 404, et tout autre canvas)._

## Slider du hero (accueil)

Composant de code Framer « Project Showcase Slider » (code interne `DistortoSlider`, LaunchNow Design), calque nodeId `DaVk4rgbd`.
Références `L.nnnn` = `reference/framer-code/pretty/J_la0crrNhwxVDm3QRQL50OHFMp-MUpGrN-W8FsMusA.D3aw61EU.mjs.js`.
Code lisible : `reference/framer-code/extracted/HeroSlider.js` (contient aussi `LiveVideoThumb`, les vignettes 90×50). Shaders : `reference/webgl/hero-slider/shaders/`.

### Bibliothèque
- **three.js r136** (`REVISION` = `136` dans `reference/framer/js/three.module.CJpBf6nA.mjs`), **importé dynamiquement** par le module de l'accueil (`import("./three.module.CJpBf6nA.mjs")`, L.8972). three.js n'est donc pas réservé à la 404 : l'accueil le charge aussi, à la demande.
- `WebGLRenderer` r136 (essaie WebGL2 puis WebGL1), `Scene`, `OrthographicCamera`, `PlaneGeometry`, `ShaderMaterial`, `WebGLRenderTarget`, `TextureLoader`, `Texture`/`VideoTexture`, `CanvasTexture`.
- Chargement paresseux : three n'est importé que si le slider est à moins de 1000 px de la fenêtre (IntersectionObserver `rootMargin: 1000px 0px`, L.8601-8616), puis WebGL n'est créé qu'après stabilisation de la mise en page (8 rAF sans déplacement > 0,15 px ni ancêtre d'opacité < 0,99, abandon de l'attente après 2,5 s, L.6803-6835).

### Taille, densité de pixels, redimensionnement
- Conteneur : `.framer-16qy4y3` « Slider Container » (`position:absolute; inset:3px`, rayon 12 px `corner-shape: superellipse(1.5)`, overflow clip) dans le bloc « Hero » ; le slider remplit le conteneur (`flex:1 0 0; height:100%`). Taille mesurée à 1440 px (consigne) : canvas **1375×894**.
- Taille du rendu = `offsetWidth/Height` du slider − 2 × `imagePadding` (0 sur le site) ; canvas `position:absolute; left/top = pad; width/height calc(100% − 2·pad); pointer-events:none`, dans un div `z-index:1`.
- **DPR** = `min(devicePixelRatio, 2, max(0.75, √(8 500 000 / (largeur × hauteur))))` (L.7941-7946) — budget ≈ 8,5 Mpx. À 1375×894 : min(DPR, 2, 2,6) → DPR 1 ⇒ buffer 1375×894.
- Redimensionnement : `ResizeObserver` sur le slider (regroupé par rAF) + `window.resize` ; ignoré si largeur, hauteur et DPR inchangés ; met à jour `setSize`, `setPixelRatio`, la caméra, l'échelle du plan, la cible de post-traitement et les uniforms de recadrage (L.7968-7987).

### Géométrie
- `PlaneGeometry(1, 1, 1)` (1 segment) mis à l'échelle (largeur, hauteur) en pixels, caméra `OrthographicCamera(−w/2, w/2, h/2, −h/2, 1, 1000)`, `z = 1` (L.8009, 8224-8225). Pas de courbure.
- Passe souris : `PlaneGeometry(2, 2)` + `OrthographicCamera(−1, 1, 1, −1, 0, 1)` (L.8243, 8282).

### Shaders (`reference/webgl/hero-slider/shaders/`, texte verbatim du bundle minifié)
- `slide.vert.glsl` : `vUv = uv`, projection standard three.js.
- `transition-prefix.glsl` : uniforms `currentRepeat/currentOffset/nextRepeat/nextOffset/direction` + macros `texCurrent()/texNext()` ; le fragment de la transition est préfixé et chaque `texture2D(currentImage|nextImage,` y est réécrit (L.7014-7023).
- `transition-<clé>.frag.glsl` × 27 (liste plus bas).
- `mouse-warp.vert.glsl` / `mouse-warp.frag.glsl` : post-traitement de l'effet souris (simplex + fbm 4 octaves ; modes push/pull/swirl/ripple/noise ; aberration chromatique).

### Uniforms
Matériau du plan (L.8181-8218) :
| Uniform | Source |
|---|---|
| `dispFactor` | progression de la transition : `k = (now − t0)/(transitionDuration·1000)`, easeInOutQuad `k<0,5 ? 2k² : −1+(4−2k)k` (L.8489-8495) ; 0 au repos |
| `direction` | +1 vers la suivante, −1 vers la précédente (L.8482) — `noiseWarp` ne l'utilise pas |
| `currentImage`, `nextImage` | textures des diapositives (ou capture de l'image affichée si une transition est interrompue, L.8439-8461) |
| `currentRepeat/Offset`, `nextRepeat/Offset` | recadrage « cover » centré (L.7878-7909) |

Passe souris (L.8244-8281, mise à jour L.8301-8308) :
| Uniform | Source / valeur sur l'accueil |
|---|---|
| `tDiffuse` | rendu de la scène (WebGLRenderTarget, taille × DPR) |
| `uMouse` | pointeur en UV de la zone image (y inversé), lissé `lerp 0,12`/image |
| `uResolution` | taille CSS du rendu |
| `uTime` | `performance.now() % 3 600 000 × 0,001` (s) |
| `uMouseEnabled` | 0→1 lissé (`lerp 0,12`) quand le curseur est dans le slider, retombe à 0 en sortant |
| `uMouseStrength` | `mouseWarpStrength` = **2** (×0,12 dans le shader) |
| `uMouseEffect` | `ripple` = **3** |
| `uMouseRadius` | `clamp(mouseRadius, 0,03, 0,4)` = **0,4** |
| `uMouseChroma` | **0,65** |
| `uMouseVel` | `mouseSpeedReact` = true ⇒ vitesse lissée : `speed += (min(Δ×60, 1) − speed)×0,08` |
Aucun uniform de défilement.

### Textures et médias (slot CMS)
- Source : liste de collection CMS **Projects** (alias `VAKOch8rL`, `limit 4`, L.12107-12144) rendue hors écran dans le slot ; le slider lit le DOM du slot (L.6837-6859) : vidéo (`currentSrc`/`src`), image (srcset → entrée ≥ `min(1920, ceil(innerWidth × min(DPR,2)))`), texte (1re ligne = titre ; statut absent ⇒ « 01 », « 02 »…).
- Diapositives (ordre du HTML, liens `./projects/<slug>` du slot non utilisés par le slider) :

| # | Titre | Type | Vidéo | Image / poster | Alt |
|---|---|---|---|---|---|
| 1 | Gucci | vidéo (8,00 s, 2400×1350, 24 i/s, h264) | `https://framerusercontent.com/assets/o74zvFwrxG1ofp4gdhRqo1Ujgk.mp4` | `…/images/uQzt05iescwLlC6DKg4M1qwR6o.jpg` (2400×1350 ; srcset 512/1024/2048/2400w) | Close-up of a model wearing wraparound sunglasses covered in water droplets |
| 2 | Chanel | image | — | `…/images/7lmRyzySl3tRUJAR0FTAuBtPBtM.jpg` (2040×1148 ; 512/1024/2040w) | Model applying face cream to her cheek against a pale background |
| 3 | Puma | vidéo (5,00 s, 1920×2400, 24 i/s, h264) | `https://framerusercontent.com/assets/LYIGz8CY670o999qJep8WeHqgzM.mp4` | `…/images/NuuceAGvddP5JL0LEhEjp8bdnM.jpg` (1152×1440 ; 819/1152w) | Runner in a red rain jacket and black cap on a misty coastline |
| 4 | Adidas | image | — | `…/images/r7Srjn5YojuM8eQrAW1Mlzsb4.jpg` (2400×1350 ; 512/1024/2048/2400w) | Close-up of a tennis player with braids looking over her racket |

  Durées/dimensions vidéo mesurées avec ffmpeg sur `reference/har/bodies/1173e83e….mp4` et `410634993525….mp4`. À 1440 px / DPR 1 : posters et images pris à `scale-down-to=2048` (Gucci, Adidas), 2040w (Chanel), 1152w (Puma, plus grande entrée).
- Images : `TextureLoader` (crossOrigin anonymous), `LINEAR/LINEAR`, `CLAMP_TO_EDGE` ; minFilter LINEAR ⇒ pas de mipmaps (règle three r136). Pré-envoi GPU (`initTexture`) une texture à la fois en temps mort.
- Vidéos : `<video>` muted, playsInline, `loop` (sauf WebM sous Safari), `preload="auto"`, ajoutée au slider en 2×2 px, opacité 0,01 ; texture `RGBFormat`, LINEAR, sans mipmaps, mise à jour à chaque image décodée (`requestVideoFrameCallback`) ; échec ou blocage > 6 s ⇒ poster ⇒ texture unie 16×16 de la couleur de fond.
- Ordre de chargement : diapositive 1 d'abord, les suivantes une par une après l'évènement `load` (idle).

### Boucle de rendu et pauses
- Rendu à la demande : une image par étape de transition (rAF propre à la transition) ; boucle rAF continue seulement si visible ET (une vidéo doit jouer OU l'effet souris est actif) ET pas de transition ; avec `requestVideoFrameCallback`, une image dont l'état de scène n'a pas changé n'est pas redessinée (L.8309-8341).
- **Hors de la vue** : `IntersectionObserver` (seuil 0,01) + détecteur d'occultation (sections opaques qui recouvrent le slider, L.6561-6731) ⇒ boucle arrêtée et vidéos en pause.
- Onglet masqué : aucune gestion dédiée (le navigateur suspend rAF).
- Préchargeur (`preloaderSync: "reveal"`) : figé sur sa 1re image, vidéos en pause à 0, autoplay suspendu jusqu'à `portal:preloader-reveal` (ou `-done`, ou 300 ms sans préchargeur) (L.7451-7479).
- Démontage : libération GPU différée de 900 ms puis attente d'un fil principal calme (≤ 5 s) ; `<video>` remises dans une réserve (8 si pointeur fin, 4 sinon).
- Perte de contexte WebGL : rendu arrêté ; restauration ⇒ reconstruction complète.

### Contrôles
| Contrôle | Desktop ≥ 1200 | Tablette 810–1199 | Mobile ≤ 809 |
|---|---|---|---|
| Vignettes (clic) | oui (rail à droite) | oui | **non** (`showThumbnails:false`) |
| Zones de clic gauche/droite (50 % chacune) | non | non | **oui** |
| Glisser horizontal (≥ 40 px et ≥ 1,2×vertical) | non | **oui** | **oui** |
| Clavier ← / → (slider `tabIndex 0`) | oui | oui | oui |
| Molette | non | non | non |
| Effet souris (ripple) | oui (`pointer: fine`) | selon pointeur | non (tactile) |
- Navigation en boucle (modulo 4). Un clic accepté relance le cycle d'autoplay.
- **Aucun lien** : le slider ne navigue pas vers les études de cas (les liens du slot sont cachés).

### Autoplay et progression
- `autoTransition: true`, `autoTransitionTimer: 4` s, `pauseOnHover: false`, `transitionDuration: 1` s.
- Image : barre 4 s puis transition 1 s. Vidéo dont la durée est connue : barre `max(1, durée − currentTime − 1)` s (L.7718-7733) ⇒ Gucci ≈ 7 s au premier cycle (vidéo à 0) puis ≈ 6 s (vidéo relancée au début de la transition entrante, déjà à ≈ 1 s), Puma ≈ 3 s — **calculé, à confirmer au banc**.
- Indicateur : sur la vignette active, calque `height: 100%` (thumbOverlayHeight), couleur #0d0d0d, `mix-blend-mode: saturation`, opacité 1, `transform: scaleX(0→1)` linéaire (WAAPI, `transform-origin: left center`) ⇒ la vignette se désature de gauche à droite.

### Vignettes (desktop/tablette)
Colonne à droite, centrée verticalement : `right: 30px` (marginX 30 + inset 0), 90×50 px, écart 4 px, rayon 8 px (valeurs × `max(1, largeur/1920)` arrondi au centième = 1 à 1440). Inactives opacité 0,3 (transition 0,3 s ease) ; active décalée `translateX(8px)` (transition 0,25 s ease) ; contour transparent ; étiquettes masquées. Les vignettes Chanel/Adidas sont des `<img>` (entrée srcset ≥ 160 px) ; Gucci/Puma sont des **canvas 2D 90×50** (voir ci-dessous).

### Dégradé
`linear-gradient(to top, color-mix(in srgb, #0d0d0d 65%, transparent), color-mix(in srgb, #0d0d0d 65%, transparent))` sur 100 % de la hauteur, z-index 2 : voile sombre uniforme à 65 %.

### Solution de secours sans WebGL
Tant que le premier rendu WebGL n'a pas eu lieu, un `<img>` de la diapositive courante (poster pour une vidéo, `fetchpriority="high"`) couvre le slider (z-index 2). Si WebGL échoue, il reste en place : diaporama d'images fixes sans transition (autoplay et vignettes changent l'index ⇒ l'image change).

### Les 27 transitions (prop `transitionEffect`, défaut `liquidMorph`) — **sur le site : `noiseWarp`, 1 s**
`displacementWave` Displacement Wave (intensité 0,3, utilise direction) · `fade` Fade · `zoom` Zoom · `wipeLeft/Right/Up/Down` Wipe (direction) · `pixelate` Pixelate · `swirl` Swirl (direction) · `ripple` Ripple · `doorway` Doorway · `radialBlur` Radial Blur · `glass` Glass Distort · `colorFlash` Color Flash · `dissolve` Dissolve (bord 0,04) · `filmBurn` Film Burn (front 1,2→−0,2, plume 0,03, direction) · `liquidMorph` Liquid Morph (fbm) · **`noiseWarp` Noise Warp** · `pageCurl` Page Curl (direction) · `diagonalSlice` Diagonal Slice (plume 0,06, direction) · `hexMosaic` Hex Mosaic · `glitchBlock` Glitch Blocks · `lensPush` Lens Push (direction) · `inkSpread` Ink Spread (rayon 0→0,9, bord 0,08) · `depthParallax` Depth Parallax (direction) · `shutterIris` Shutter Iris (0→0,78, plume 0,03) · `kaleidoZoom` Kaleido Zoom (zoom 1→0,65, 8 secteurs).
Les « 10 transitions » annoncées par l'auteur correspondent à la liste d'effets du préchargeur (Noise Warp, Curve, Streaks, Liquid, Pixelate, Dissolve, Film Burn, Glitch Blocks, Ink Spread, Hex Mosaic), inutilisée sur le site (mode logoMask).

**Noise Warp** (fichier `transition-noiseWarp.frag.glsl`) : `p = smoothstep(0,1,dispFactor)`, `mid = sin(π·p)` ; bruit fbm étiré verticalement (`uv×1000 + (30p, 0)`, étirement y `mix(1, 1000, mid)`) ; déplacement `(n1, n2)×0,12×mid` (image sortante +, entrante −0,6×) ; masque `smoothstep(1−p−0,18, 1−p+0,18, n1·0,5+0,5) × smoothstep(0, 0,08, p)`, forcé par `smoothstep(0,85, 0,99, p)` ; assombrissement `1 − 0,35·mid·smoothstep(0,3, 1,2, |n1|+|n2|)` ; bornes exactes à 0,001/0,999.

### Valeurs de l'instance (L.12761-12991)
`Content.slides: []` (slot CMS), `Layout { background: #0d0d0d (jeton d33926f3), borderRadius 0, imagePadding "0px", padding "0px" }`, `Transition { transitionEffect "noiseWarp", transitionDuration 1, autoTransition true, autoTransitionTimer 4, pauseOnHover false, preloaderSync "reveal" }`, `Mouse { mouseWarp true, mouseWarpStrength 2, mouseEffect "ripple", mouseRadius 0.4, mouseChroma 0.65, mouseSpeedReact true }`, `Thumbs { showThumbnails true, thumbPosition "right", thumbVerticalPos "center", thumbStack "column", thumbMarginX 30, thumbMarginY 0, thumbSize 90×50, thumbSpacing 4, thumbRadius 8, thumbHighlightColor rgba(255,255,255,0), inactiveThumbOpacity 0.3, thumbZIndex 3, thumbOverlayColor #0d0d0d, thumbOverlayOpacity 1, thumbOverlayHeight 100, thumbOverlayBlend "saturation" }`, `Labels { showThumbLabels false, … }`, `Gradient { #0d0d0d, height 100, max 0.65, min 0.65 }`, `thumbVideoPreview "live"`, `swipeNav false`, `tapZones false`.
Surcharges : tablette `swipeNav true` ; mobile `swipeNav true, tapZones true, Thumbs { showThumbnails false, thumbOverlayBlend "normal", thumbOverlayColor var(--token-f277370d…, rgb(255, 57, 3)), thumbOverlayHeight 2, … }`. Copie exacte : `HOME_INSTANCE_PROPS` / `HOME_BREAKPOINT_OVERRIDES` en fin de `HeroSlider.js`.

### Canvas 90×50 — vignettes vidéo « live » (2D, pas WebGL)
- Ce sont les vignettes de **Gucci et Puma** (diapositives vidéo, `thumbVideoPreview: "live"`), composant `LiveVideoThumb` (L.6900-7012).
- Contexte `2d` ; taille = boîte × `min(DPR, 2)` (90×50 à DPR 1), suivie par `ResizeObserver`.
- Chaque image décodée (`requestVideoFrameCallback`, sinon rAF + 16 ms) de la `<video>` du slider de même URL est recopiée en « cover » centré (`drawImage` recadré) : pas de second téléchargement.
- Poster `<img>` (entrée srcset ≥ 160 px, `loading="lazy"`) affiché jusqu'à la 1re image + 400 ms. Si la vidéo disparaît, nouvelle recherche toutes les 500 ms.
- En mode « live », toutes les vidéos du slider jouent en continu (vignettes animées) ; pause quand le slider est hors écran.

### Autres canvas de l'accueil
- Canvas WebGL plein écran du **préchargeur** (retiré à la fin) : voir `docs/audit/preloader.md` §8 ; shaders `reference/webgl/preloader/shaders/`.
- Un éventuel 4e canvas (vitrine incurvée ?) n'est pas créé par ce module : **inconnu**, à identifier dans les autres modules.

### Outil auteur hors périmètre
`?miralab=…` / `sessionStorage.miralab` : drapeaux de débogage (`hud`, `covtrace`, `dsdispose`, `dsdepth`, `dsvtex`, `dsprep`, `dsvid`, `dscover`, `before`) et HUD de performance (`window.__miraHud`). À ne pas porter.

## Vitrine incurvée

Composant de code Framer **« Curvy Project Showcase »** (LaunchNow Design), page `/projects`.
Code : `reference/framer-code/extracted/CurvedShowcase.js` (lisible, alpha-équivalent à l'original) — origine L.595-3452 de
`reference/framer-code/pretty/AMcQRZfITfjQMtwTc9L6feHZ3p0EKUbo_RHe9QFmX_Y.DexPvT_c.mjs.js`. Audit de page : `docs/audit/projects-webgl.md`.

### Bibliothèque
- **three.js r136** (`REVISION "136"`), `reference/framer/js/three.module.CJpBf6nA.mjs`, chargé par `import()` dynamique (export `x()` = init, `C` = espace de noms) quand la vitrine arrive à moins de 600 px de la vue (IntersectionObserver `rootMargin 600px 0px`), dans un `requestIdleCallback` (timeout 800 ms) ou `setTimeout 50`.
- Conséquences r136 à garder au portage : `renderer.outputColorSpace = SRGBColorSpace` et `texture.colorSpace = SRGBColorSpace` sont **sans effet** (propriétés inexistantes en r136) → sortie `LinearEncoding`, aucune conversion de couleur des textures ; `compileAsync` n'existe pas → compilation par `renderer.compile` en 2 rAF ; `RGBFormat` existe (texture vidéo). Avec un three récent, il faudrait `outputColorSpace = LinearSRGBColorSpace` et des textures `NoColorSpace` pour obtenir les mêmes pixels.

### Renderer, taille, densité de pixels
- `WebGLRenderer({ alpha: true, antialias: !effets, premultipliedAlpha: false, depth: !(effets && edgeWarp), stencil: false })` où *effets* = pas de `prefers-reduced-motion`. Sur le site : antialias **false**, depth **false** (mesuré via `getContextAttributes`). Contexte WebGL2. Couleur d'effacement (0,0,0,0) (Style.backgroundTransparent = true ; mesuré).
- Canvas dans un hôte `absolute inset 0` de la région (100 % × 100 %), `setSize(clientWidth, clientHeight, false)`, style 100 %.
- DPR : à la création `min(dpr, pointeur fin ? 2 : 2,5)` ; puis à chaque `resize` : budget = 8,5 M px (pointeur fin) / 3,5 M px, `ratio = min(dpr, 2 | 2,5, max(0,75, √(budget / (w·h))))`, **plafonné à 1 pendant les 650 premières ms** (`dprWarmupMs`) puis ratio complet. Mesuré à DPR 1 : 1375 × 838 (1440×900) ; 384 × 791 (390×900).
- Redimensionnement : `ResizeObserver` sur la région → `resize()` (taille, aspect caméra, cible post à la taille du drawing buffer, `worldPerPx`).

### Scène et géométrie
- Caméra `PerspectiveCamera(48°, aspect, 0.1, 1200)` en (0, 0, 7) ; hauteur visible du monde `H = 2·tan(24°)·7 ≈ 6,2333`, `worldPerPx = H / hauteur px`, largeur `W = H·aspect`.
- Une carte = `Mesh(PlaneGeometry(1, 1, 24, 1), ShaderMaterial transparent)` — **24 segments horizontaux** pour la courbure ; ordre du DOM du slot.
- Mise en page (`computeLayout`) :
  - réserve basse = (hauteur du bloc bande + 16 + (hauteur max des détails + metaGap si détails)) × worldPerPx, ≤ H/2 ; les cartes sont décalées vers le haut de la moitié (`yOffset`) ;
  - largeur centrale `Wc = W × clamp(centerWidthPct/100, 0,1, 0,95)`, hauteur `Hc = Wc / max(0,2, cardAspect)` bornée à 90 % de la hauteur restante (sinon Wc recalculée) ;
  - échelle latérale `clamp(sideScale, 0,3, 1)` ; espacement `d = max(W/2 + Wc·sideScale/2 − W·clamp(sidePeekPct/100, 0, 0,25), Wc·0,55)` ;
  - pour la carte i : `offset = i − current` (ramené dans ±n/2 en boucle), x = offset·d, échelle = `1 − (1 − sideScale)·min(|offset|, 1)`, visible si |offset| < 2,6.
- **Courbure** (vertex shader) : `v = clamp(|uScrollVelocity|·0,02, 0, 1)`, `sx` = x écran du sommet (0..1), `z −= sin(sx·π)·v·0,85·uBendIntensity + v·0,2·uBendIntensity` : les cartes reculent en arc pendant le mouvement, au repos elles sont planes.
- Coins arrondis par SDF dans le fragment shader (`uRadius` = rayon px / hauteur px de la carte, ≤ 0,5).

### Shaders (`reference/webgl/curved-showcase/shaders/`)
| Fichier | Rôle |
|---|---|
| `card.vert.glsl` | courbure des cartes selon la vitesse de défilement |
| `card.frag.glsl` | recadrage « cover », fondu de présence, fondu enchaîné entre deux textures, coins arrondis SDF, couleur d'attente (0,1, 0,1, 0,1) |
| `post.vert.glsl` | quad plein écran |
| `post.frag.glsl` | effet de bords (streaks / liquid / pixelate, fbm simplex) + effet souris (push / pull / swirl / ripple / noise) + aberration chromatique ; préfixé `#define EDGE_GUARD` à l'exécution |

### Uniforms
Cartes (par maillage) :
| Uniform | Source |
|---|---|
| `uTexture`, `uTexturePrev` | texture courante / précédente (couverture, mini-couverture, texture vidéo) |
| `uImageAspect`, `uPrevAspect` | largeur / hauteur de l'image (pour le recadrage cover) |
| `uSwap` | 0 → 1 en 350 ms (`swapMs`), courbe `1 − (1 − t)²`, lors d'un remplacement de texture |
| `uHasTexture` | 0 → 1 en 450 ms (`fadeInMs`), `1 − (1 − t)²`, à la 1re texture |
| `uPlaneAspect` | `max(0,2, cardAspect)` |
| `uScrollVelocity` | lissé ×0,12/image vers `(target − current) × d × 60` ; 0 si mouvement réduit |
| `uBendIntensity` | prop `bendIntensity` (0 si mouvement réduit) |
| `uRadius` | rayon de la carte du slot (border-radius calculé ; 0 → `cornerRadius`) ÷ hauteur px de la carte |

Passe post (un seul quad) :
| Uniform | Source |
|---|---|
| `tDiffuse` | rendu de la scène dans une `WebGLRenderTarget` RGBA, Linear, sans mipmaps, depthBuffer, taille = drawing buffer |
| `uResolution` | taille du drawing buffer |
| `uTime` | horodatage rAF modulo 3 600 000 ms, en secondes |
| `uMouse` | position pointeur dans la région (uv, y inversé), lissée `lerp(0,12)` par image |
| `uMouseEnabled` | `mouseWarp && pointeur fin` |
| `uMouseStrength`, `uMouseRadius` (borné .03–.4), `uMouseChroma` (0–1) | props Mouse |
| `uMouseEffect` | push 0, pull 1, swirl 2, ripple 3, noise 4 |
| `uMouseVel` | `mouseSpeedReact ? vitesse : 1`, vitesse += (min(déplacement lissé × 60, 1) − vitesse) × 0,08 |
| `uEdgeEnabled`, `uEdgeStrength`, `uEdgeEffect` | props Effects (streaks 0, liquid 1, pixelate 2) |
| `uEdgeBand` | `clamp(peek × 1,6 + 0,02, 0,06, 0,45)`, peek = sidePeekPct/100 borné 0,25 |
| `uEdgeHalfY` | `clamp(Hc·sideScale / H / 2 × 1,25, 0,08, 0,5)` |
| `uCenterY` | `0,5 + yOffset / H` |

La passe post est créée si *effets* et (`edgeWarp` ou `mouseWarp` avec pointeur fin) — donc toujours sur le site hors mouvement réduit. Optimisation : si la signature de la scène (matrices, uniforms, textures) n'a pas changé, la scène n'est pas re-rendue dans la cible, seul le quad l'est.

### Textures
- Données lues dans la Collection List connectée (slot) : couverture = poster de la `<video>` sinon plus grande `<img>` (variante du srcset ≥ `min(1600, ceil(innerWidth × min(dpr, 2,5)))`, sinon la plus grande), mini-couverture = plus petite variante (images seules), vidéo = `src` de la `<video>` du slot (neutralisée : pause, `preload none`, src déplacée dans `data-curvy-src`).
- Chargement : `fetch` CORS + `createImageBitmap({ imageOrientation: "flipY", premultiplyAlpha: "none" })` si le retournement est supporté (test 1×2 px), `flipY = false` ; sinon `TextureLoader` (crossOrigin anonymous). Bitmap libéré après envoi au GPU (Blob gardé pour ré-envoi après perte de contexte).
- Filtrage : couvertures d'images avec pointeur fin → mipmaps, `LinearMipmapLinearFilter`, anisotropie `min(4, max)` ; sinon (vidéo, tactile, mini-couverture) `LinearFilter` sans mipmaps. Mag `LinearFilter`.
- Ordre de chargement : depuis la carte 0 vers les plus éloignées (distance circulaire), 4 en parallèle (pointeur fin) / 2, plafond 4 s par carte. Préchauffage de 8 couvertures dès le montage.
- **Vidéos** (Gucci, Puma, mp4) : `<video>` 2×2 px muette, loop, playsInline, ajoutée à la région ; poster d'abord, puis texture vidéo (`requestVideoFrameCallback`, Linear, `RGBFormat`, sans mipmaps) en fondu enchaîné quand une image stable non noire est décodée ; lecture si |offset| < 0,75 et visible, préchauffage si < 1,45, pause sinon, remise à 0 hors champ. Safari + WebM : lecture via Blob (inutile ici : mp4).
- Rayon mesuré (Chromium 159, `corner-shape` supporté) : 12 px pour les 4 cartes images ; 0 pour les 2 cartes vidéo → repli `cornerRadius` 12. Sans support de `corner-shape`, les cartes images liraient 9,024 px (12 × 0,752).

### Boucle de rendu et pause
- Rendu **à la demande** : la boucle rAF tourne tant que quelque chose bouge et s'arrête au repos (pas d'effet de bord actif, souris immobile ou effet non animé, pas de glisser, |target − current| < 5e-4, 300 ms sans entrée, aucune texture en fondu, aucune vidéo en lecture). Avec `edgeWarp` (site), l'effet de bord est animé (`uTime`) → **la boucle ne s'arrête jamais** tant que la vitrine est visible.
- Pause : `IntersectionObserver` (hors vue → arrêt, vidéos en pause et rembobinées), `visibilitychange` (onglet caché). Perte de contexte : `preventDefault` + arrêt ; restauration : ré-envoi des textures, reprise.
- Toutes les 12 images : si la région a bougé ou a un ancêtre d'opacité < 0,99 (transition de page), une image sur deux est sautée.
- Démontage : position mémorisée (ci-dessous), `renderer.dispose()` + `forceContextLoss()` différés de 900 ms puis attente d'un fil principal calme.

### Entrées
| Entrée | Effet |
|---|---|
| molette / trackpad | `hijackScroll` (vrai sur le site) : `deltaX + deltaY` capturés (`preventDefault`), Δcible = delta × scrollSpeed / d_px ; sinon seuls les gestes horizontaux |
| glisser (pointeur) | seuil 3 px souris / 6 px tactile (horizontal) ; Δcible = −dx × dragSpeed / d_px ; lerp porté à max(lerp, 0,16) pendant le glisser ; capture du pointeur |
| lancer | au relâcher (si dernier mouvement < 80 ms) : cible = arrondi(cible + vitesse × 12,5), limité à ±2 cartes (souris) / ±1 (tactile) |
| inertie | `current += (target − current) × lerpSmoothness` par image ; aimantation sur l'entier ×0,1/image après 120 ms sans entrée ; ressort ×0,08 aux bornes (sans boucle) |
| clic | court sur la carte centrale → lien du projet (calque `<a>` du slot) ; sur une carte latérale → centrage. Raycaster pour identifier la carte |
| pointeur (survol) | `uMouse` ; curseur `grab` / `pointer` (carte cliquable) ; avec `cardCursor` (desktop) le curseur natif est masqué au-dessus de la carte centrale et le curseur Framer `9iwj27` du calque s'affiche |
| clavier | région `tabIndex 0` : ← / → (précédent / suivant), Entrée (ouvre la carte centrale) ; titres de bande : Entrée / Espace |
| tactile | `touch-action: pan-y` (défilement vertical natif conservé), pas d'effet souris, seuils et lancer réduits, 2 chargements parallèles, MSAA désactivé de toute façon |

- **Survol** : aucun titre n'apparaît au survol ; le titre actif est en permanence en blanc dans la bande sous les cartes (« Title Strip »), les détails (industrie, année) sous la carte centrale.
- **Position mémorisée** : `sessionStorage["curvyPos:" + pathname + ":" + nombre]` (ici `curvyPos:/projects:6`) = index centré, écrit au démontage, relu à l'initialisation ; toutes les clés `curvyPos:*` sont supprimées au chargement du module sauf navigation `back_forward`. Aucune clé au premier chargement (mesuré).
- Autoplay (désactivé sur le site) : avance toutes les max(1,5, interval) s si au repos, désactivé par le mouvement réduit, le survol et le glisser.

### Mobile
Pointeur grossier : pas d'effet souris (passe post pour les bords seulement), DPR max 2,5 avec budget 3,5 M px, pas de mipmaps, glisser tactile horizontal, défilement vertical natif. Mise en page par breakpoint : voir tableau des valeurs.

### Solution de secours
Échec de `new WebGLRenderer` ou de l'import de three → `console.error` puis rendu statique DOM : 3 cartes `<img>` (dernière, première, deuxième) en flex centré, carte centrale `width: clamp(centerWidthPct, 10, 90) %`, `aspect-ratio: cardAspect`, `max-height: 70 %`, rayon, fond `#111`, `object-fit: cover` ; latérales en absolu à `100 − sidePeekPct %` du bord, largeur × sideScale. Même rendu dans le canevas / les vignettes Framer.

### Valeurs utilisées sur le site (instance L.3936-4310)
| Groupe | Desktop ≥ 1200 | Tablette 810–1199 | Téléphone < 810 |
|---|---|---|---|
| Layout | centerWidthPct 65, sideScale .69, sidePeekPct 15, cardAspect 1.6, cornerRadius 12 | cardAspect 1.15 | centerWidthPct 75, sideScale .5, sidePeekPct 7, cardAspect .85 |
| Interaction | clickAction link, hijackScroll true, cardCursor true | cardCursor false | cardCursor false |
| Motion | scrollSpeed 1.4, dragSpeed 1.7, lerpSmoothness .15, infiniteLoop true, autoplay false (4 s) | = desktop | scrollSpeed 1.2, dragSpeed 1.4 |
| Effects | bendIntensity 1.4, edgeWarp true, edgeEffect streaks, edgeWarpStrength 2 | = | = |
| Mouse | mouseWarp true, mouseEffect ripple, mouseWarpStrength 2, mouseRadius .25, mouseChroma .38, mouseSpeedReact true | = | = |
| Style | backgroundTransparent true (backgroundColor rgb(255,255,255) inutilisé) | = | = |
| Strip | titre actif blanc (token 27d215b1), inactif rgb(104,104,104) (token 82d92470), flèches et compteur blancs, séparateur `/`, zeroPad, arrows + count, titleGap 60 | titleGap 40 | titleGap 30 |
| Divers | metaGap 15, showDetails true, items [] (slot connecté : Collection List Projects) | = | = |

Constantes internes : `gpuDisposalMs 900`, `slotGraceMs 450`, `loadSlotCapMs 4000`, `dprWarmupMs 650`, `fadeInMs 450`, `swapMs 350`.
Typographie de la bande (calque « project title », preset 1c0t51l) : Mona Sans Variable, wdth 75 / wght 700, ss07, −0,02em, interligne 0,9, uppercase, taille `max(Npx, N/1920·100 vw)` avec N = 80 / 60 / 45 px ; gap `max(titleGap px, titleGap/1920·100 vw)`.
Compteur (calque « Count Font », preset c95aba) : 15 px, wdth 80 / wght 700, −0,01em, interligne 1,2, uppercase ; animation 450 ms `cubic-bezier(0.19, 1, 0.22, 1)`.

## Page 404

Composant de code de la page 404 (sans `displayName` ; nommé `Wireframe404` à l'extraction).
Code : `reference/framer-code/extracted/NotFound3D.js` (lisible, alpha-équivalent) — origine L.104-1300 de
`reference/framer-code/pretty/2G6NJGLYB-I5i3aMi0aINtG2rPvQ1Qcmmh-2sDZsQtc.C3Ea9Zs_.mjs.js`. Audit de page : `docs/audit/404.md`.

### Bibliothèque
- **three.js r136**, import statique de `reference/framer/js/three.module.CJpBf6nA.mjs` (WebGLRenderer, Scene, PerspectiveCamera, OrthographicCamera, ShaderMaterial, Shape, Path, ExtrudeGeometry, EdgesGeometry, BufferGeometry, Float32BufferAttribute, LineSegments, Mesh, PlaneGeometry, CanvasTexture, WebGLRenderTarget, Color, Vector2, RGBAFormat, LinearFilter). Le module `Xq77wYGC1.B8T6nX4a.mjs` ne contient que les métadonnées de page.
- **Texte** : ni `TextGeometry`, ni échantillonnage de canvas. Le composant lit lui-même un fichier **typeface.json** (format facetype.js) : commandes de contour `m/l/q/b` de chaque glyphe → `THREE.Shape` (le plus grand contour, aire du polygone échantillonné à 12 points, est la forme, les autres ses trous), avance `ha`, taille 100, sans crénage ni retour à la ligne. Police du site : `https://framerusercontent.com/assets/UNBtynp7L2M6fruNPHYtc3EKUA.json` (« Mona Sans », bold, resolution 1000, 546 glyphes ; archivée dans `reference/har/bodies/3086fd6fc52a07e9c5b9e2a20d03926e94a1e742.json`). URL de repli inutilisée : `https://unpkg.com/three@0.128.0/examples/fonts/helvetiker_bold.typeface.json`.

### Renderer, taille, densité de pixels
- `WebGLRenderer({ alpha: true, antialias: pointeur grossier, depth: false, stencil: false, powerPreference: "high-performance" })` (mesuré : antialias false, depth false, premultipliedAlpha true, effacement (0,0,0,0)).
- `pixelRatio = min(devicePixelRatio, 1,5)` (1 dans le canevas Framer).
- Canvas `position:absolute; display:block; pointer-events:none`, **22 % de débordement de chaque côté** : taille = hôte + 2 × round(hôte × 0,22) ; `left/top` négatifs. Mesuré 1440×900 : hôte 1434 × 894 → canvas 2064 × 1288 à (−315, −197).
- Caméra placée à `distance = hauteurCanvas / 2 / tan(fov/2)` : 1 unité = 1 px CSS au plan z = 0.
- Redimensionnement : `resize` de fenêtre et `ResizeObserver` de l'hôte, debounce 120 ms ; ignoré si taille et `innerWidth` inchangées ; reconstruit le texte.

### Géométrie
- `ExtrudeGeometry(shapes, { depth: extrudeDepth, bevelEnabled: bevel, bevelThickness: 1,6, bevelSize: 1,6, bevelSegments: 1, curveSegments: 8 })` à la taille 100, centrée (x, y, z), puis mise à l'échelle uniforme `s = min(clamp(minSize, innerWidth·fluidSize/100, maxSize) / hauteurBoîte, largeurHôte·(1 − 2·padding) / largeurBoîte, hauteurHôte·(1 − 2·padding) / hauteurBoîte)`.
- `EdgesGeometry(geom, 11°)` → arêtes ; chaque arête est découpée en `max(1, round(longueur / max(4, shardSize)))` éclats. Par éclat : centre, direction d'explosion aléatoire (sphère, aplatie 0,6 en x/y, + 0,004 × position), axe de rotation aléatoire, graine. Les aléas viennent de `Math.random()` (le banc le rend déterministe).
- Chaque éclat = 4 sommets (`aT` 0/1 × `aSide` ±1) → quad épais en espace écran (largeur `uWidth` px, anticrénelage par `smoothstep` sur `vDist`) ; triangles dupliqués en ordre inversé, matériau `FrontSide` (sauf drapeau wtsingle).
- Grille de sol : `LineSegments` de 29 + 29 lignes à `y = −(hauteurTexte·s/2 + 1) × 1,15`, étendue `max(l, h) × 1,1`, pas = étendue / 14, fondu radial `1 − smoothstep(0,55, 1, r)`.

### Shaders (`reference/webgl/404/shaders/`)
| Fichier | Rôle |
|---|---|
| `noise.glsl` | simplex 2D + fbm 4 octaves (interpolé par `${Ge}`) |
| `shard.vert.glsl` | flexion de défilement, explosion (dispersion, rotation, dérive), enfoncement + ondulation dans la traînée, extrusion du segment en quad écran |
| `shard.frag.glsl` | trait antialiasé, `discard` si alpha < 0,01 |
| `grid.vert.glsl` / `grid.frag.glsl` | grille de sol fondue |
| `post.vert.glsl` / `post.frag.glsl` | passe plein écran : flou liquide fbm et aberration chromatique dans la traînée, passage direct ailleurs |

### Uniforms
Éclats :
| Uniform | Source |
|---|---|
| `uColor` | prop `color` (sur le site `var(--token…)` non lu par three → blanc par défaut) |
| `uOpacity` | `lineOpacity` |
| `uTime`, `uTrailTime` | secondes depuis le montage modulo 3600 (image fixe : 5,2) |
| `uExplode` | ressort : `a = (cible − x)·k − v·(2√k·0,75)`, k = `explodeSnap`, intégré avec dt ≤ 33 ms ; valeur ≥ 0 ; cible 1 pendant l'appui |
| `uSpread` | `min(l, h)·0,5·explodeSpread` (px) |
| `uFlexV` | `min(|vitesseMolette|·0,02, 1)·scrollFlex` |
| `uHalfW` | demi-largeur du texte rendu (px) |
| `uRes` | taille du drawing buffer |
| `uWidth` | `lineWidth × pixelRatio × clamp(hauteurTexte / 260, 0,4, 2,5)` |
| `uTrail` | texture de la traînée |
| `uPress`, `uRipple` | `pressDepth`, `rippleAmount` |

Post : `tDiffuse` (cible RGBA Linear, taille canvas × pixelRatio), `uTrail`, `uTime`, `uMouseStrength` = `warpStrength`, `uMouseChroma`, `uMouseVel` = `mouseSpeedReact ? 0,35 + 0,65·vitesse : 1`, `uGrain` = `grainScale`.
Grille : `uColor`, `uOpacity` = `envOpacity`, `uExtent`.

### Textures
- **Traînée** : canvas 2D 128 × 128 → `CanvasTexture` (minFilter Linear) ; chaque image : fond noir, puis disques à gradient radial additifs (`lighter`), rayon `128 × warpRadius × (0,55 + 0,45·a) × 1,5`, intensité `0,2·a·(0,35 + 0,65·force)`, `a` = montée sinus sur le 1er quart de vie puis descente ; durée de vie `max(10, round(trailDecay × 60))` **images** (dépend de la cadence) ; points ajoutés tous les 0,02 uv. Mise à jour seulement avec pointeur fin.
- Cible post : `WebGLRenderTarget(l·pr, h·pr, { RGBAFormat, Linear, depthBuffer: false })`, absente en pointeur grossier.
- Aucune image.

### Boucle de rendu et pause
- Démarrage : canvas opacité 0 (transition 350 ms) ; attente d'au moins 6 images consécutives < 22 ms sans animation WAAPI en cours et ≥ 250 ms (ou 1,6 s max) → chargement de la police → construction (rAF) → `compile` (rAF) → boucle (rAF) + opacité 1.
- Boucle rAF continue tant que l'hôte est visible (`IntersectionObserver`) et interactif ; erreur dans une image → arrêt. Pas d'écoute de `visibilitychange` (rAF suspendu par le navigateur).
- Par image : orbite auto `angle += rotateSpeed·dt·w`, w → 0 pendant le glisser et 2 s après la dernière interaction, retour à 1 au taux `dt·2` ; lancer `×0,94` ; inclinaison `+= (pointeur × mouseFollow − incl.) × 0,06` ; molette lissée ×0,12, impulsion ×0,92 ; caméra `(sin a·R·cos e, sin e·R, cos a·R·cos e)` avec e = `cameraHeight + inclinaisonY` bornée 0,03–1,2.
- bfcache (`pageshow` persisted) → une image ; perte de contexte → arrêt ; restauration → reconstruction.

### Entrées
| Entrée | Effet |
|---|---|
| pointermove (hôte, passif) | traînée et inclinaison (pointeur fin) ; glisser si appui et déplacement > 6 px (souris) / 12 px (tactile) : angle −= dx / largeur × 3,5 × dragSensitivity |
| pointerdown | souris : explosion immédiate ; tactile : après 220 ms d'appui immobile |
| pointerup (fenêtre) / pointerleave | fin d'explosion et de glisser ; leave efface le dernier point de traînée |
| molette (passive) | impulsion `deltaY × 0,012 × scrollPan` → rotation + flexion ; la page n'est pas bloquée |
| clavier | aucun |
| tactile | `touch-action: none` sur l'hôte ; pas de traînée ni de passe post |

### Mobile
Pointeur grossier : antialias activé, rendu direct sans passe post, pas de traînée ni de déformation, explosion à l'appui long (220 ms), seuil de glisser 12 px. Même taille de texte (clamp) bornée par l'hôte.

### Solution de secours
Échec de création du renderer, du chargement de la police ou de la construction → `<span>` centré avec le texte, `font-size: clamp(minSize px, fluidSize vw, maxSize px)` (= clamp(128px, 28vw, 600px)), `font-weight: 500`, `line-height: 1.1`, `color` = prop. Mouvement réduit : une seule image fixe (uTime 5,2, angle de départ), aucun écouteur.

### Valeurs utilisées sur le site (instance L.1392-1434, identiques à toutes les largeurs)
text `404` · fontFile Mona Sans typeface.json · color token blanc · minSize 128 · fluidSize 28 · maxSize 600 · padding 0 · lineWidth 1.5 · lineOpacity 1 · extrudeDepth 44 · bevel true · shardSize 10 · rotateSpeed .3 · startAngle −20 · cameraHeight .25 · mouseFollow .4 · dragSensitivity .6 · scrollPan 1 · scrollFlex 164 · pressDepth 80 · rippleAmount 12 · warpStrength .15 · mouseChroma .3 · warpRadius .07 · trailDecay 2 · grainScale 40 · mouseSpeedReact true · explodeSpread 1.45 · explodeSnap 89 · floorGrid true · envOpacity .5.
Constantes internes : débordement 0,22, fov 35°, near 1, far 10000, seuil d'arêtes 11°, biseau 1,6, traînée 128 px.
