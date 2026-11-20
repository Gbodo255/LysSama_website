# Audit global — composants partagés (navigation latérale, barre de page, footer, newsletter, boutons, curseur, Lenis, métadonnées)

Mesures brutes : `reference/agents/global/` — `dom/<slug>-<w>-{nav,navopen,navclosed2,footer,env}.{txt,json,webp}` (DOM rendu, `scripts/agents/global/dom.mjs`), `interact/{desk,nav2,mobile}.json` + captures (`scripts/agents/global/interact.mjs`), `meta.json` (`scripts/agents/global/meta.mjs`). Code : `reference/framer-code/pretty/toplevel-deps.BY2s547D.mjs.js` (cité TD:ligne). Banc : `launch({webgl:false})`, `net:'record'`, 0 requête manquante.

## 0. Gabarit commun « Nav & Footer » (TD:25138–26064, `framer-eYdsD`)
- Toutes les pages : contenu de page → `Shared Navigation` (fixe) → `Footer` (prop `qt7PZ7fO1` « showFooter », défaut vrai).
- Variantes : Desktop `b3vZAuF4v` `(min-width: 1200px)` · Tablet `p8hMayzHV` `(min-width: 810px) and (max-width: 1199.98px)` · Phone `ITzzHeBqK` `(max-width: 809.98px)`.
- Style injecté : `:root body { background: var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255,255,255)); } :root { font-size: 125%; }` ; tablette `106.25%` ; mobile `93.75%` (mesuré 20 px à 1440).
- Racine : `data-framer-cursor="19wcnfu"` (curseur §6), `--selection-background-color: token Black #050505`, `--selection-color: token f277370d` (accent).
- Environnement mesuré : `<html class="lenis lenis-autoToggle">`, `window.lenis` présent ; aucun `localStorage`, `sessionStorage` ni cookie après chargement ni après navigation interne ; aucun élément « miralab » dans le DOM.

## 1. Navigation partagée = barre latérale (composant « Nav Bar » `Kx`, TD:21966–22783)
Pas de header horizontal : une barre latérale fixe (desktop/tablette) ou une barre supérieure arrondie (mobile) qui se déplie en panneau.

### 1.1 Structure et variantes
- Conteneur `framer-9ihltw-container` : `position: fixed; inset: 0; z-index: 9; pointer-events: none` ; enfant padding `3px 0 3px 3px` (mobile fermé `6px`, mobile ouvert `3px`), `overflow: clip`, flex ligne gap 20.
- Variantes : Desktop - Closed `ohscBxtqQ` (initiale desktop) · Desktop - Open `cZipLVXZw` · Tablet - Closed `qqgfFW9hu` · Tablet - Open `lbGoIWDKI` · Phone Closed `sixur_H_8` · Phone - Open `DtWmu2Lal`.
- Déclencheurs (code + mesure) : desktop `mouseenter` sur « Side Nav » → Open, `mouseleave` → Closed (pas de clic nécessaire) ; tablette : tap sur « SideBar » (toute la barre de 56 px) ↔ ; tap sur l'overlay → Closed ; mobile : tap sur le hamburger → Open, tap sur la croix / l'overlay / le logo → Closed.
- Aucun changement au défilement (mesuré à scrollY 0/400/1500/800/0 : rect `[3,3,56,894]`, opacité 1) — barre toujours visible, pas de masquage/réapparition.
- Pas d'état actif : les 4 liens du menu ont la même variante `framer-v-h4zf60` sur /privacy-policy, /studio et /journal (mesuré, `interact/nav2.json`).

### 1.2 Desktop 1440 / 1200 fermé (`dom/privacy-policy-1440-nav.*`, identique à 1200 et 810)
- `nav "Side Nav"` [3,3,56×894] (hauteur = viewport − 6), fond `rgb(13,13,13)` (token d33926f3 « Black »), rayon `calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))` avec `corner-shape: superellipse(1.5)` et `--corner-shape-fallback: .752` (rendu Chromium : 12 px) ; mobile fermé 10 px.
- « SideBar » padding `30px 20px`, colonne `space-between`, centrée :
  - Hamburger 16×16 en (23,33) : 2 rangées de 2 carrés 7×7, rayon 2, blancs, gap 2 (variante « Closed » `wQ68zCUv0`). Ouvert (« Open » `PxOSLYnOW`) : conteneur `rotate(180deg)`, rangées « Top »/« Bottom » en absolu tournées ±45° → croix ✕ (mesuré mobile : `matrix(.707,-.707,.707,.707,-10,-1)` / `matrix(.707,.707,-.707,.707,-10,-1)`).
  - « Established Tag » (`Yy`) en bas (y 768,7 ; 32×96,59), rotation −90°, `translateX(-50%)` : texte ` EST. 2012` (espace initial, preset `c95aba` : « Mona Sans Variable » 15px/18px, ls −0,15 px, uppercase, `font-variation-settings: "wdth" 80, "wght" 700`, blanc) + bloc « Globe » (svg 13×17, padding 7) ; liseré visible sur capture.
- « Left Border » 1 px `rgba(156,156,156,0.2)` à x 59 (bord droit de la barre, z 1).
- « Menu » (x 59, l 437, padding 30) masqué par le clip tant que fermé.

### 1.3 Desktop ouvert (`dom/privacy-policy-1440-navopen.webp`, tablette identique `privacy-policy-810-navopen.webp`)
- Side Nav 56 → **493 px** de large ; fond de page couvert par « Overlay BG » `rgb(31,31,31)` (token 6e62038c), `opacity .85`, `filter: grayscale(1)`.
- Menu (Top gap 80 / Bottom padding-top 40, gap 20) :
  - Logo « Linked Logo » 70×19,36 (masque SVG viewBox `0 0 47 13`, blanc) → `./`, aria-label `home`.
  - « Nav. Items » 377 px, gap 40 : liste « Desktop » gap 7 : `Home` → `./`, `projects` → `./projects` + compteur `(6)` (preset c95aba rouge `rgb(245,45,15)`, en exposant à droite), `Studio` → `./studio`, `Journal` → `./journal`. Preset `t83dbl` : Mona Sans Variable 40px/44px, ls −0,8 px, uppercase, `"wdth" 75, "wght" 675`, `font-feature-settings: "ss07"`, blanc. Tablette (`Phone` variant de la liste) : 35px/38,5px, ls −0,7, gap 5. Mobile : 30px/33px, ls −0,6, gap 5.
  - « Contact » (gap 15) : `let's talk` (apostrophe droite U+0027, preset c95aba, `rgb(188,188,188)` token 1486dbb4) + « Contact Button » (§3.1) → `./contact`.
  - « Bottom » : 4 icônes sociales 17×17 gap 15 (masques blancs) puis copyright `2026 MIRA ®` / `All rights reserved.` (Switzer 600 12px/15,6px, ls −0,36 px, `rgb(188,188,188)` ; ® 14,4 px = `registeredSymbolScale 1.2`).
- Ordre des liens sociaux : X `https://x.com`, Instagram `https://instagram.com`, Dribbble `https://dribbble.com`, Behance `https://behance.com` — tous `target="_blank"`, aria-label `X Link`, `Instagram Link`, `Dribbble Link`, `Behance Link`.

### 1.4 Mobile 390 (`dom/privacy-policy-390-nav.*`, `interact/mobile-open.webp`, `interact/mobile-navopen.txt`)
- Fermé : barre « Side Nav » [6,6,378×51,97], rayon 10, fond `rgb(13,13,13)` ; « SideBar » padding 17, ligne `space-between` : logo « Phone Logo Container » 65×17,97 → `./` (aria-label `home`) à gauche, hamburger 16×16 à droite (351,24). Pas de « EST. 2012 ».
- Ouvert : Side Nav [3,3,384×494,16] rayon 12, `overflow:auto` ; Menu padding 17, gap 80 ; liens 30px ; « let's talk » + bouton (variante Phone `VgyOKiub4`) ; icônes ; copyright. Overlay .85 grayscale(1) sous le panneau.
- Tablette 810 : même barre latérale que desktop (fermée 56 px), ouverture au tap (§1.1).

### 1.5 Animations de la navigation (mesurées, `interact/desk.json`, `interact/mobile.json`)
- Panneau (layout) : tween **0,4 s `cubic-bezier(.87,0,.13,1)`** (`Mx`). Desktop : largeur 56 → 493 px en 400 ms (16 ms : 56,32 ; 144 : 103,6 ; 208 : 333,1 ; 272 : 459,4 ; 400 : 493). Fermeture symétrique (400 ms → 56,02 ; 464 → 56). Mobile : hauteur 51,97 → 494,16 en ~400 ms (et x/y 6 → 3, largeur 378 → 384).
- Overlay `filter: grayscale(0→1)` : 0,6 s `cubic-bezier(.4,0,.2,1)` à l'ouverture (`Nx`, fin ≈ 656 ms), 0,5 s à la fermeture (`Px`, fin ≈ 528 ms). Overlay `opacity 0 ↔ .85` : la mesure bascule en une image — **à recouper** (code : même transition que le filtre ; suspicion d'animation WAAPI d'opacité non recalée par le banc, voir `docs/requests/global.md`).
- Contenu du Menu : animation de layout (correction d'échelle) ; transition `Rx` délai 0,2 s, 0,5 s `[.4,0,.2,1]` à l'ouverture, `Px` à la fermeture (code ; propriétés animées autres que le layout : aucune mesurée — opacité 1 en continu).
- Hamburger ↔ croix (`Ry`, TD:20376–20593) : tween 0,5 s `cubic-bezier(.87,0,.13,1)` (code ; non mesuré image par image).

## 2. Barre de liens en haut de page (« Shared Navigation Logo » `Kv` + « Shared Navigation Links » `jv`)
- Placée par chaque page (pas par le gabarit) : présente sur /privacy-policy (texte noir) et /studio (texte blanc sur le hero) ; absente du haut de /journal (mesuré). Recensement par page à faire par les agents de page.
- 1440 : logo « MIRA » 70×19,36 (x 92, y 33) ; liens `projects` (6), `Studio`, `Journal` en preset `1l3tbw0` (23px/26,45px, ls −0,23, `wdth 75 wght 675`, `ss07`, uppercase), répartis `space-between` de x 425,75 à 1407.
- Survol d'un lien (Nav Item `_v`, variantes Large `Fyih9sCDk`/Small `LEwHm1Xmc`/Large Phone `IQ5VKT_cu`/Small Phone `MouuNRtt_`) : le libellé est doublé ; au survol la 1re copie monte d'une hauteur de ligne (+ opacité 1→0) et la 2e copie arrive de dessous (opacité 0→1), conteneur `overflow: clip`. Tween **0,36 s `cubic-bezier(.87,0,.13,1)`** (TD:18600), mesuré : décalage 25 px (preset 23 px) ou 45 px (menu 40 px) terminé en ≈ 300–340 ms. Retour identique à la sortie.

## 3. Boutons partagés
### 3.1 « Contact Button » (`gx`, TD:21740–21966) — menu et footer
- `a` 150×42, rayon 8, `overflow: clip` → `./contact`, aria-label `contact`. Intérieur « Button » : fond `rgb(245,45,15)` (token f277370d, repli code `rgb(255,87,3)`), rayon 4, padding `5px 15px 5px 5px`, `space-between` ; photo 32×32 rayon 4 (`https://framerusercontent.com/images/Jfjs0nvrWkQ5vWOcalwIPI1ovEU.jpeg?width=655&height=744`, alt vide, 655×744) ; flèche « Arrow Right » svg 17×17 blanche.
- Survol (variante `F8QhxJmqp-hover`) : « Button » `scale(1 → .95)`, rayon 4 → 16 px ; photo rayon 4 → 12 px ; flèche glisse (translateX −5 → 0 sur la copie entrante, mesuré). Tween **0,56 s `cubic-bezier(.87,0,.13,1)`**. Retour identique.
### 3.2 « Form Button » (`ES`, TD:23020–23387) — « Join Now »
- Variantes : Default `Rqy7FUIBo` · Incomplete `wBnCNx14X` (champ vide : opacité .75, `cursor: not-allowed`) · Loading `hiHajVa57` (spinner 16×16, masque `aUWUtcn3fJZH3ENCarDzP6b2ryQ.svg`) · Success `lZufaWhqU` (icône « Mail Check », départ opacité 0 scale .9) · Error `bRLDllExn` (texte `Error, Try Again`).
- Survol (Default) : fond « BG Color » scale .95 ; texte « top » opacité 1→0 scale .9, texte « bottom » opacité 0→1 scale .9 ; tween 0,56 s `[.87,0,.13,1]` (code ; mesure non obtenue, champ vidé par le test).
### 3.3 Icône sociale (`Nb`, TD:21160–21327) : survol opacité 1 → .5, tween 0,3 s `[.4,0,.2,1]` (code ; mesuré final .5 dans le menu). Footer : aucun changement mesuré au survol.
### 3.4 Liens de texte (preset `7b2rcp`) : survol couleur → `rgb(245,45,15)` (mesuré, instantané : liens légaux, `privacy policy.`). Lien de la page courante : gris `rgb(104,104,104)` + souligné (mesuré sur /privacy-policy).

## 4. Footer (`div[data-framer-name="Footer"]`)
Dimensions : 1440 h 944,75 ; 810 h 790,53 ; 390 h 894,41. Fond `rgb(247,247,247)`.
- « Navigation Spacer » 59 px à gauche (desktop/tablette ; masqué mobile `hidden-1pvmz1y`).
- Section padding `40px 0` (mobile `20px 0`) ; « Inside Container » padding `0 33px` (mobile `0 23px`), gap 120 (tablette 80, mobile 60).
- **Top** (grille, gap `40px 20px`, mobile 2 colonnes) : logo noir 70×19,36 → `./` (mobile padding-top 5) ; liens `projects` (6) / `Studio` / `Journal` (desktop, preset 1l3tbw0 noir `rgb(13,13,13)`, `space-between`) ; mobile : liste verticale Home / projects / Studio / Journal 30px/33px gap 5 (variante Phone).
- **Middle** (grille gap 40) : « Filler » (masqué mobile) + « Text Container » (gap 20 ; tablette `grid-column: span 2`) :
  - « Copyright Notice » (composant de code, plugin 84d4c1) : `2026 MIRA ®` + `All rights reserved.` — Switzer 600 12px, ls −0.03em, lh 130 %, `rgb(104,104,104)`, année fixe 2026.
  - Mot-symbole (« Name / R Symbol ») : svg « mira » 550×259,14 ; svg ® 27,5×39,88 (absolu l 533,5 t 38,86, translate −50 %) ; svg « Studio » 247,5×68,2 (absolu bas-droite, z 1). Tablette : `max-width: unset`.
  - Newsletter (gap 40) : paragraphe justifié preset 1l3tbw0 gris `rgb(104,104,104)` composé de `                      A LETTER, ONCE A MONTH. ` (22 espaces en tête, noir) + `New work from the studio, fresh thinking from the founder, the occasional opinion.` (gris) + ` No filler. SUBSCRIBE BELOW.` (noir).
  - Formulaire (§5).
- **Bottom** (grille) : icônes sociales noires 17×17 gap 15 ; « Legal » (gap 30) : `legal` (gris) + liens (collection CMS Legal, gap 4) `Privacy Policy.` → `./privacy-policy`, `Terms & Conditions.` → `./terms-conditions`, `Cookies.` → `./cookie-policy` (preset c95aba 15px, `rgb(13,13,13)`) ; « Contact » (gap 30) : `let’s talk` (apostrophe typographique U+2019, gris) + Contact Button.

## 5. Newsletter (états lus dans le code + cas vide/invalide mesurés ; jamais d'adresse valide)
- `form` « Newsletter Signup » 391 px (gap 12), action Framer Forms `https://api.framer.com/forms/v1/forms/27a96a9c-7735-4436-88cf-6e806682dbd7/submit` (ne pas reproduire l'appel : décision du propriétaire, voir requests).
- Boîte « Input / Button » : fond blanc, padding 4, rayon 10, gap 10, `data-border`. Champ : `input type="email" name="Email" placeholder="Enter your email" required` — Switzer 500 16px/16px, couleur `rgb(13,13,13)`, placeholder `rgb(104,104,104)`, wrapper padding `0 16px`, rayon 30. Bouton « Join Now » 79,97×38,41 (padding 9 13, fond `rgb(13,13,13)` rayon 8, texte blanc preset `k5mxv3` 17px/20,4px `wdth 75 wght 700` uppercase).
- Case « Agreed to terms / privacy » 13×13, rayon 4, fond blanc, `required`, non cochée ; texte `By signing up, you’re agreeing to our ` + lien `privacy policy.` → `./privacy-policy` (Switzer 600 13px/18,2px, ls −0,26 px, gris, souligné).
- Mesuré : champ vide → variante Incomplete (opacité .75, `not-allowed`) ; clic → rien d'envoyé, message natif `Please fill out this field.` (pas de style d'erreur personnalisé : bordure/ombre inchangées) ; saisie `abc` → variante Default (opacité 1, `pointer`), message natif `Please include an '@' in the email address. 'abc' is missing an '@'.` ; case : `Please check this box if you want to proceed.` ; aucune requête vers `forms` (0).
- États Loading / Success / Error : variantes du Form Button (§3.2), non déclenchés.

## 6. Curseur personnalisé (« Cursor » `gy`, TD:19920–20138)
- 75×75, fond blanc, rayon 100, `mix-blend-mode: exclusion` ; suit le pointeur (élément `position: fixed; z-index: 13; pointer-events: none`, `transform: translate(-50%, 0%) translateX(x) translateY(y)` — placement `bottom`, alignement centre, décalage 0) avec ressort **stiffness 500, damping 60, mass 1**.
- Variante par zone : Default `IeznnrIPT` (`scale: 0`, invisible — partout via la racine `19wcnfu`) ; « View Project » `JYlp8aboM` (zones `9iwj27` de /projects) ; « Read Article » `gq6hjYdVi` (zones `a8ccln` : accueil, journal, studio, articles) ; « Next » `nSACZy5aP` (zones `1v6kiai` de l'accueil). Visible : `scale 1` avec texte centré preset c95aba (max-width 50). Transitions : `sy` 0,56 s `[.87,0,.13,1]` et ressort `cy` (bounce .2, 0,4 s) pour le disque. Curseur système inchangé (`auto`).
- Mesuré sur /privacy-policy : élément « Default » présent, invisible.

## 7. Défilement adouci (Lenis 1.3.25, composant « Lenis Smooth Scroll »)
- Toutes les pages sauf la 404 : `smooth: true`, `intensity: 8` → `duration: 0.8`, `infinite: false`, `orientation: vertical` — **sauf /projects : `orientation: horizontal`** (→ `gestureOrientation: both`, `syncTouch: true`). Accueil : instance non trouvée dans le module de route (à vérifier, l'option `window.lenis` existe).
- Options effectives mesurées (/privacy-policy) : `smoothWheel true, syncTouch false, syncTouchLerp .075, touchInertiaExponent 1.7, duration .8, easing e=>Math.min(1,1.001-2**(-10*e)), lerp .1, wheelMultiplier 1, touchMultiplier 1, autoRaf, autoToggle, anchors, allowNestedScroll, overscroll, stopInertiaOnNavigate: true`. Avec `lerp` défini, Lenis utilise l'amortissement lerp (0,1) pour la molette.

## 8. Transitions entre pages
- Navigation interne (clic « Journal » depuis /studio) : routeur client Framer, changement immédiat (URL `/journal` dès 100 ms), défilement remis à 0, aucun préchargeur, aucune animation de sortie mesurée, aucun stockage écrit. Captures `interact/nav2-nav-{100,300,600,1600}.webp`.

## 9. Préchargeur — règle d'affichage
Déjà documentée dans `docs/audit/preloader.md` §2 (L.51-63) ; mesure concordante : pas de préchargeur sur une navigation interne /studio → /journal, aucun stockage.

## 10. miralab
Paramètre d'URL `?miralab=<drapeaux>` mémorisé dans `sessionStorage.miralab` (modules accueil, projects, 404 ; cf. preloader.md L.192) ; aucun élément visible sans le paramètre. À ne pas reproduire.

## 11. Métadonnées par page (`reference/agents/global/meta.json`, source `reference/html/*.html`)
- Toutes : `<html lang="en">`, `viewport width=device-width`, favicons `https://framerusercontent.com/images/RcgLQONxLVpJUrIbGLvIRMp1yA.svg` (`prefers-color-scheme: light`), `…/riYEsqDYtGQSRZXKKpVZhHvjdc.svg` (dark), apple-touch-icon `…/eOcgtNAH6AEVa2iRzeqa6k450g.png` ; `og:type website` ; `twitter:card summary_large_image` ; title = og:title = twitter:title ; description = og/twitter ; `robots max-image-preview:large` (404 : `noindex`) ; canonical = og:url = URL absolue de la page (404 : `https://mirastudio.framer.website/404`).
- Les valeurs exactes par route sont dans `src/data/global.ts` (`PAGE_META`).

## Inconnues restantes
- Courbe mesurée du hamburger ↔ croix ; opacité de l'overlay (banc) ; survol mesuré de « Join Now ».
- Lenis sur l'accueil (instance introuvable dans le module de route).
- Barre de liens de page : présence/couleur par page (agents de page).
