# Préchargeur de l'accueil — audit

Source : composant de code Framer **« Portal Preloader »** (LaunchNow Design), compilé dans le module de route de l'accueil.
Toutes les références `L.nnnn` renvoient au fichier embelli
`reference/framer-code/pretty/J_la0crrNhwxVDm3QRQL50OHFMp-MUpGrN-W8FsMusA.D3aw61EU.mjs.js`.
Version lisible : `reference/framer-code/extracted/Preloader.js`. Shaders : `reference/webgl/preloader/shaders/`.

- Le préchargeur n'existe **que sur l'accueil** : `portal-preloader` n'apparaît que dans ce module et dans `reference/html/home.html` (aucune autre page, aucun autre bundle).
- Instance : calque « Site Preloader », nodeId `J6zHOrRbD`, L.12588-12681.
- C'est **un canvas WebGL** (pas un simple compteur DOM) : le fond rouge et la fenêtre en forme de logo sont peints par un fragment shader.

## 1. Valeurs de l'instance (L.12596-12679)

| Groupe | Prop | Valeur sur l'accueil | Défaut du composant |
|---|---|---|---|
| Behavior | `frequency` | `always` | `always` |
| | `runOn` | `everyMount` | `firstLoad` |
| | `lockScroll` | `false` | `true` |
| | `takeover` | `true` | `true` |
| | `zIndex` | `9999` | `9999` |
| Loading | `loadMode` | `load` | `load` |
| | `minTime` | `0.8` s | 1.8 |
| | `maxWait` | `4` s | 8 |
| | `hold` | `0.2` s | 0.4 |
| Reveal | `revealMode` | `logoMask` | `logoMask` |
| | `maskScale` | `150` | 60 |
| | `revealDuration` | `0.55` s | 1.4 |
| | `easing` | `cubicInOut` (sans effet en logoMask, voir §5) | `expoInOut` |
| | `effect` / `direction` | `noiseWarp` / `center` (inutilisés en logoMask) | `noiseWarp` / `up` |
| | `bend`, `strength`, `band`, `chroma`, `softness` | 0.6, 0.6, 0.14, 0, 0 (inutilisés) | 0.6, 0.6, 0.14, 0, 0.05 |
| | `backgroundColor` | `var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(245, 45, 15))` = **#f52d0f** | `#0E0E0E` |
| Logo | `logoImage` | `https://framerusercontent.com/images/RJYJ7m4uMRkQG50UIT9V4iefE.svg?width=15&height=13` | — |
| | `logoWidth` | `50` px | 160 |
| | `logoIntroDuration` | `0.8` s | 0.7 |
| | `introDelay` | `0` s | 0.1 |
| | `introEase` / `introEaseCustom` | `custom` / `0.87, 0, 0.13, 1` | `expoOut` |
| | `introMoveX` / `introMoveY` | `0` / `150` px | 0 / 28 |
| | `introScale` | `1.05` | 1 |
| | `introBlur`, `introRotate` | 0, 0 | 0, 0 |
| | `introFade` / `introMasked` | `true` / `false` | true / false |
| Counter | `showCounter` / `counterSuffix` | `true` / `percent` | idem |
| | `counterPosition` | `bottomCenter` | `bottomLeft` |
| | `showBar` / `barThickness` | `true` / `2` px | false / 2 |
| | `barColor` | `var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))` = **#fff** | `rgba(255,255,255,0.35)` |
| | `counterColor` | même jeton blanc (ignoré : `counterSlot` fourni) | `rgba(255,255,255,0.9)` |
| | `counterFont` | `{}` (ignoré : `counterSlot` fourni) | 13px / 0.14em |
| | `counterSlot` | texte « 100 » au preset `framer-styles-preset-1l3tbw0`, couleur jeton blanc | — |

Valeurs des jetons lues dans `reference/html/home.html` : `--token-f277370d…: #f52d0f`, `--token-27d215b1…: #fff`.

## 2. Règles d'affichage (L.5033-5041)

```
if (frequency === "session" && sessionStorage["portal-preloader"] === "1"
    || runOn === "firstLoad" && performance.now() > 4000)  → pas de préchargeur (markDone + signalDone)
sinon : frequency === "session" ⇒ sessionStorage["portal-preloader"] = "1" ; signalActive()
```

Avec l'instance de l'accueil (`always` + `everyMount`), **aucune des deux conditions ne peut être vraie** :
- chaque chargement de l'accueil (premier accès, rechargement, nouvel onglet) affiche le préchargeur ;
- chaque **retour sur l'accueil par navigation interne** (le composant est remonté) l'affiche aussi ;
- `sessionStorage` n'est ni lu ni écrit (la clé `portal-preloader` ne sert qu'en mode `session`) ;
- la règle « firstLoad sauté si `performance.now() > 4e3` » est inactive ici.

Hors site publié (canevas Framer : `RenderTarget.current() !== RenderTarget.preview`, L.4977), le composant rend un état figé « 100% » sans animation.

## 3. Structure DOM et styles

Pré-rendue dans le HTML (vérifiée dans `home.html`) puis portée dans `document.body` à l'hydratation (`takeover`, L.5031-5033 ; `createPortal`, L.5510).

```
div  (wrapper, position:absolute; inset:0; pointer-events:none)            L.5480
├─ <style precedence="high" href="portal-preloader-cover">  (tant que showCoverStyle)  L.5487
├─ div aria-hidden (slot du compteur, hors écran : left:-99999px; 1×1; opacity 0; z-index:-1)  L.5491
├─ <noscript><style>[data-portal-preloader]{display:none!important} html:not(.portal-preloader-done)::before{display:none!important}</style>
└─ div role="status" aria-label="Loading" data-portal-preloader                L.5364-5375
     position:fixed; inset:0; z-index:9999; overflow:hidden; pointer-events:auto;
     background-color: #f52d0f (jeton) — passe à transparent dès que le canvas a peint
   ├─ canvas  (absolute; inset:0; 100%×100%; display:block)                   L.5377
   ├─ div aria-hidden (calque du masque CSS de repli ; display:none ; transform-origin 50% 50%)  L.5386
   └─ div (calque « wipe » : absolute; inset:0; will-change clip-path, opacity)  L.5397
        ├─ div (scène du logo : absolute; inset:0; flex centré; will-change transform, opacity)  L.5405
        │    └─ div (overflow: visible — hidden si introMasked)
        │         └─ div (entrée du logo : opacity 0 ; transform translate(0px, 150px) scale(1.05) au départ)
        │              └─ img src=logo.svg alt="" draggable=false  (width:50px; height:auto; display:block; user-select:none)
        ├─ div (compteur) position:absolute; bottom:28px; left:0; right:0; text-align:center;
        │       font-variant-numeric:tabular-nums; visibility:hidden tant que la typo du slot n'est pas lue ; texte initial « 0% »
        └─ div (piste de la barre) absolute; left:0; right:0; bottom:0; height:2px
             └─ div (barre) 100%×100%; background #fff; transform scaleX(0); transform-origin left center
```

Typographie du compteur : copiée à l'exécution du calque `counterSlot` (L.5043-5106) — on prend l'élément texte au plus grand `font-size` et on recopie `fontFamily, fontSize, fontWeight, fontStyle, fontStretch, fontVariationSettings, fontFeatureSettings, letterSpacing, textTransform, color`. Le slot porte le preset `framer-styles-preset-1l3tbw0` :
- famille « Mona Sans Variable », axes `"wdth" 75, "wght" 675`, `font-weight` 400, `"ss07" on`, `letter-spacing -0.01em`, `text-transform: uppercase` ;
- taille **23 px** (≥ 1200 px), **21 px** (810–1199 px), **19 px** (< 810 px) ;
- couleur : jeton blanc `#fff` (style en ligne du `<p>` du slot, L.12625).
La hauteur de ligne n'est pas recopiée (héritée). Le compteur reste `visibility:hidden` jusqu'à la première lecture réussie (repli au bout de 700 ms : style `{}` → visible avec la typo héritée).

Le `<style id="portal-preloader-cover-style">` (inséré par `useInsertionEffect`, L.5023-5030) et le `<style precedence="high">` SSR contiennent la même règle (L.5549) :
```
html:not(.portal-preloader-done)::before{content:"";position:fixed;top:0;left:0;right:0;bottom:0;
  background:var(--token-f277370d…, rgb(245, 45, 15));z-index:10000;pointer-events:none;
  animation:portal-cover-failsafe 0s linear 12s forwards}
@keyframes portal-cover-failsafe{to{opacity:0;visibility:hidden}}
```
Ce voile rouge (z-index 10000, au-dessus du calque) masque la page dès le premier octet ; il disparaît quand `<html>` reçoit la classe `portal-preloader-done`, c.-à-d. **à la première image peinte par le canvas** (L.5281-5284), ou au bout de 12 s au plus tard.

## 4. Le compteur : ce qui le pilote (L.5196-5214)

Horloge : `performance.now()` relevée au démarrage de l'effet principal (après hydratation) ; une itération par `requestAnimationFrame`.
Il suit **le temps et l'évènement `load` de la fenêtre** (pas les octets chargés) :

```
minT = max(0.2, minTime) = 0.8 s ; elapsed = (now − start)/1000 ; dt = max(0.001, Δframe/1000)
timedOut = elapsed ≥ max(minT, maxWait) = 4 s
complete = (document.readyState === "complete" au départ, ou évènement load reçu) || timedOut
target   = complete ? 1 : min(0.92, elapsed / (minT × 1.4))      // 1.4 × 0.8 = 1.12 s
rate     = complete ? 5.5 : 2.2
E += (target − E) × (1 − exp(−dt × rate))
E  = min(E, min(1, elapsed / minT)) ; E = max(E, 0)
si complete && elapsed ≥ minT && E > 0.995 → E = 1
texte = Math.round(E × 100) + "%"   (écrit seulement s'il change) ; barre : transform scaleX(E)
E ≥ 1 → phase « holding »
```

Valeurs affichées : entiers de `0%` à `100%` (pas de saut imposé). Instants calculés en rejouant exactement cette formule (pas de mesure navigateur ; t = 0 au démarrage de l'effet, rAF de 16 ms comme le banc) :

| `load` reçu à | 100 % atteint | début de la révélation | fin (calque retiré) |
|---|---|---|---|
| déjà chargé (0 s) | 1 328 ms | ≈ 1 528 ms | ≈ 2 078 ms |
| 0,5 s | 1 424 ms | ≈ 1 624 ms | ≈ 2 174 ms |
| 1 s | 1 824 ms | ≈ 2 024 ms | ≈ 2 574 ms |
| 2 s | 2 576 ms | ≈ 2 776 ms | ≈ 3 326 ms |
| jamais (plafond maxWait 4 s) | 4 496 ms | ≈ 4 696 ms | ≈ 5 246 ms |

Échantillons (chargé à 0 s, ms:%) : 16:2 112:14 208:26 304:38 400:50 496:62 592:74 688:85 784:91 880:95 976:97 1072:98 1168:99 1264:99 → 100 % à 1 328 ms.
**Durée totale minimale ≈ 2,08 s** (+ 1 image par changement de phase) ; maximale ≈ 5,25 s. Le délai entre le début de navigation et le démarrage de l'effet (hydratation) n'est pas connu sans mesure — **à mesurer au banc**.

## 5. Entrée du logo (L.5291-5328)

- Départ (SSR) : `opacity 0 ; transform: translate(0px, 150px) scale(1.05)`.
- Après 2 `requestAnimationFrame` : `transition: opacity 0.8s cubic-bezier(0.87, 0, 0.13, 1) 0s, transform 0.8s cubic-bezier(0.87, 0, 0.13, 1) 0s, filter 0.8s cubic-bezier(0.87, 0, 0.13, 1) 0s` → `opacity 1 ; transform none ; filter none`.
- Se déroule en parallèle du compteur.

## 6. Pause à 100 % (« holding », L.5216-5227)

Dès l'entrée dans la phase (mode logoMask) :
- compteur et barre : `transition: opacity 0.25s ease` → `opacity 0` ;
- scène du logo : `transform-origin 50% 50%`, `transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)` → `scale(1.03)`.
Après `hold` = **0,2 s** : phase « revealing », `pointer-events: none` sur le calque, évènement `portal:preloader-reveal`.

## 7. Révélation « à travers le logo » (L.5234-5263, shader L.5577-5968)

`t` = progression **linéaire** sur `revealDuration` = **0,55 s** (0,05 s si `prefers-reduced-motion`). L'`easing` n'influence pas ce mode (uProgress forcé à 0).

Courbe d'échelle de la fenêtre (identique pour le logo `<img>` et pour le trou du shader) :
- `t < 0,12` (66 ms) : `scale = 1,03 − 0,08 × easeOutCubic(t/0,12)` → 1,03 → **0,95** (léger recul) ;
- `t ≥ 0,12` (484 ms) : `scale = 0,95 × (150/0,95)^easeInCubic((t − 0,12)/0,88)` → 0,95 → **150** ;
  (`easeOutCubic(x) = 1 − (1 − x)³`, `easeInCubic(x) = x³`) ;
- opacité du `<img>` du logo : `1 − clamp01(t/0,14)` (disparaît en 77 ms) ;
- fondu final du voile : `uMaskFade = 1 − easeInCubic(clamp01((t − 0,94)/0,06))` (33 derniers ms).

Forme du masque (chemin WebGL, si la texture du logo est prête au début de la révélation) :
- le SVG est rastérisé dans un canvas 2D, plus grand côté **2048 px**, puis envoyé en texture (LINEAR, CLAMP, sans mipmaps) ; rapport largeur/hauteur = celui de l'image (le nom de fichier indique 15×13 — rapport réel **à mesurer**) ;
- largeur de la fenêtre = `logoWidth × échelle canvas × scale` = 50 px × scale (en px CSS), centrée ; hauteur = largeur / rapport ;
- dans la fenêtre : alpha du logo (seuil adouci par `fwidth` quand l'échelle dépasse 1,5) → transparent ; hors fenêtre : couleur #f52d0f opaque ; sortie prémultipliée `vec4(uColor × outM, outM)` avec `outM = (1 − hole) × uMaskFade` (L.5935-5964).

Chemin de repli CSS (WebGL absent ou texture pas encore chargée) : le calque `cssMaskLayer` reçoit
`mask-image: url(logo), linear-gradient(#000 0 0)`, `mask-size: 50px auto, cover`, `mask-position: center, center`, `mask-repeat: no-repeat`, `mask-composite: exclude` (`-webkit-mask-composite: xor`), fond = couleur résolue, et la même échelle/opacité ; le canvas est masqué (L.5246-5248).

Fin (`t ≥ 1`, L.5183-5186, 5274-5277) : évènement `portal:preloader-done`, défilement restauré (inchangé ici), contexte WebGL libéré (`WEBGL_lose_context`), calque `display:none` + `aria-hidden`, puis démontage.

## 8. Canvas WebGL du préchargeur

- Contexte WebGL 1 : `alpha:true, premultipliedAlpha:true, antialias:false, depth:false, stencil:false, preserveDrawingBuffer:false` (L.4760-4767), repli `experimental-webgl`.
- Géométrie : 1 triangle couvrant l'écran (`-1,-1, 3,-1, -1,3`), `aPos` → `vUv = aPos×0,5+0,5`.
- Blending `ONE, ONE_MINUS_SRC_ALPHA`, `clearColor(0,0,0,0)`.
- Taille : `clientWidth/Height × min(devicePixelRatio, 2)` (1,5 si `(pointer: coarse)`) (L.5119, 5160-5168), recalculée sur `resize`.
- Uniforms (L.5281-5283) : `uRes` (taille du buffer), `uTime` (s depuis le départ), `uColor` (couleur de fond résolue, var CSS re-résolue toutes les 400 ms), `uProgress` (0 en logoMask), `uVel`, `uEffect` (9 = noiseWarp), `uDir` (4 en logoMask), `uBend`, `uStrength`, `uBand`, `uChroma`, `uSoft`, `uMask` (1 = fenêtre logo active), `uMaskScale` (échelle §7), `uMaskW` (50 × échelle canvas), `uMaskAspect`, `uMaskFade`, `uLogo` (unité 0).
- Le shader est redessiné seulement si nécessaire (première image, redimensionnement, révélation en cours, couleur changée).
- Les 10 effets « Shader Wipe » (Noise Warp, Curve, Streaks, Liquid, Pixelate, Dissolve, Film Burn, Glitch Blocks, Ink Spread, Hex Mosaic) existent dans le shader mais **ne servent pas sur le site** (mode logoMask).

## 9. Effets sur la page

- **Défilement : non bloqué** (`lockScroll: false`). Le calque `fixed` capte les clics (`pointer-events: auto`) jusqu'au début de la révélation ; la molette n'est pas bloquée par le composant.
- Aucun style n'est posé sur `body`. Seule la classe `portal-preloader-done` est ajoutée à `<html>` (jamais retirée).
- État global : `window.__portalPreloader = { active, revealFired, doneFired }`.
- Évènements sur `window` : `portal:preloader-active` (montage), `portal:preloader-reveal` (début de révélation), `portal:preloader-done` (fin).
- **Qui attend quoi** : seul le slider WebGL du hero écoute ces évènements (`preloaderSync: "reveal"`) : il reste figé sur sa première image et démarre lecture vidéo + compte à rebours d'autoplay **au début de la révélation**. Aucun autre bundle n'écoute ces évènements : les animations d'apparition Framer ne sont pas synchronisées par le préchargeur (elles se jouent sous le voile ; à confirmer au banc dans `ANIMATIONS.md`).

## 10. Outil auteur hors périmètre

`?miralab=<drapeaux>` (mémorisé dans `sessionStorage.miralab`) active des drapeaux de débogage (L.4682-4694). Le préchargeur ne lit que `ppcanvas` (conserve le canvas 2D du logo). À ne pas reproduire.

## 11. Inconnues

- Délai réel entre navigation et démarrage du compteur (hydratation) : à mesurer.
- Rapport largeur/hauteur exact du SVG du logo (naturalWidth/naturalHeight) : à mesurer.
- Comportement exact quand l'évènement `load` arrive avant l'hydratation : `readyState === "complete"` est alors vrai et la ligne « déjà chargé » du tableau s'applique.
