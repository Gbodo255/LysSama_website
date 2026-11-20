# Audit — études de cas `/projects/<slug>` (agent `projects`)

Périmètre : `/projects/gucci`, `chanel`, `puma`, `adidas`, `nike`, `under-armour`. Une seule page modèle CMS (route `_5OYj0…`, `webPageId` `dcN8jq2Gu`, classe racine `framer-hglyy`, variantes de page Desktop `QnwWFo3ky` / Tablet `kvrgoOqAT` / Phone `gjvbOr6sK`). Header, footer, newsletter, bouton du template et badge Framer : hors périmètre (autre agent). La page liste `/projects` : `docs/audit/projects-webgl.md`.

Sources : `reference/html/projects__<slug>.html` (SSR + JSON d'hydratation), `reference/css/projects__<slug>.css`, module de route embelli `reference/framer-code/pretty/_5OYj0-t6e_K3CpdFnk4M936UgoGpoJLX_t90bynXto.BAP1r93m.mjs.js` (cité « route:L<n> »), composants embellis (copies nouvelles) `koAJndPrk.X0Y8SY4j.mjs.js` (Hero Video Thumbnail, More Project Nav, Project Reveal Image…), `JKo4PdE_2.CATvKgFy.mjs.js` (Metric), `cM8Lf1CeK.DR507ZJR.mjs.js` (fond masqué), `Eu60T7thi.P98_SUm8.mjs.js` (ligne horizontale), `YouTube.BccqSYT9.mjs.js`, `n_03H18N2.ClVbANJn.mjs.js` (prise de contact).
Sorties brutes : `reference/agents/projects/` — `outline-*.txt` (arbre SSR), `handover-*.json` (JSON d'hydratation décodé), `cms-<slug>.json` (enregistrement CMS complet + requêtes annexes), `categories.json`, `css-<slug>.txt` (règles par breakpoint ; **identiques pour les 6 pages**, `diff` vide), `dom-*.json` (mesures banc, voir §Mesures).
Scripts : `scripts/agents/projects/{outline,handover,cms,css,gen,measure}.mjs`.

## 1. Collection CMS « Projects »

- Id de collection `w_hvy7l6n` (module local), id de données `785b5533-fee6-4119-a2d2-fb59937e5710`, `framerSlug` = `UxQzAcVgo`. Définie dans `reference/framer/js/toplevel-deps.BY2s547D.mjs` (`displayName:"Projects"`).
- Ordre de la collection (requête sans tri, utilisé par « More projects » et `/projects`) : gucci, chanel, puma, adidas, nike, under-armour (ids `JaJsP6Vfq`, `XXvOVH12x`, `KpWC_82bc`, `W_nBWqIt8`, `WcIjdR3cQ`, `O2EfykTfl`).
- Champs (id → titre, type, défaut) :

| id | Titre | Type | Défaut / remarque |
|---|---|---|---|
| motPAdhqw | Main Image | ResponsiveImage | |
| lqxb5gqxK | Show Video | Boolean | défaut false (schéma) ; la page lit `?? true` |
| AO3U_VSSA | Video File | File (.mp4, .webm) | |
| iRUlzL14O | Video URL | String | vide partout |
| vkVXFuZrL | Youtube URL | String | |
| Q2VN_FZXh | Project Title | String | |
| s1es_f3RS | Category | String | non lu par la page projet (utilisé sur `/projects`) |
| XdZ8EYmm9 | Date | Date | affichée `'YY©` (UTC, `year: 2-digit`, locale en-US) |
| wIuMDe0hy | Short Description | String (zone de texte) | |
| PcbIEPCaR | Timeline | String | |
| bvpPdoiPt | Live Link | Link | |
| vqgKsb_pP | Services | MultiCollectionReference → collection « Services » (`NeMqRwCs8`, id `725586fd-…`; champs lus : Title `daMMVtIRY`, Slug `TDdrxis4e`), triés selon l'ordre des références (`INDEX_OF`) | |
| dqAPAmEvi | Client Logo | VectorSetItem (jeu `YWNQYYGzTRHTLkX14hnf`) | pointeur 0…5 = un logo par projet |
| Usl1EzDAE | About Client | String | |
| jyTIAHrZM | Section Label 1 | String | défaut `The Challenge` |
| paMDsE_W9 | Big Text | String | |
| IKIECD6Us | Small text | String | |
| LYsGN5UeN / hmCznUGgv / hJGB7xex2 | Image 1 / 2 / 3 | ResponsiveImage | |
| XQKxVkYWk | Section Label 2 | String | défaut `The Solution` |
| bx3Ej5cqO | Big Text 2 | String | |
| qecbb7JIU | Small text 2 | String | |
| Fda4gII6i | Gallery Columns | Enum `Vsh44i8lz` Full Width / `U8gj7s6BY` 2 Columns / `ldIMQY7_d` « 3 Columns » (avec espace final) | défaut Full Width |
| L6jVTThCQ | Gallery | Array d'objets { Image `mRgTbxzpP` } | |
| cAF6SIeDV | Section Label 3 | String | défaut `The Results` |
| upYF7jAES | Big Text 3 | String | |
| VWv6rEQ3s | Small text 3 | String | |
| FAbuGm6q1 | Metrics | Array { Metric `dkvW8ALXd`, Label `eZNgU_zYG`, Description `lHRlmhtZ1`, Number `jEPMksr4i` } | |
| m5tVX6dkp | Section Label 4 | String | défaut `Testimonial` |
| tvoTyTZNo | Quote Big Text | String | |
| RyRTzO3ND | Quote Small text | String | |
| FzliK3Vxu | Author Name | String | |
| DS3aFwMAX | Author Role | String | |
| JuRuMI9B_ | Author Image | ResponsiveImage | |
| UxQzAcVgo | Slug | String | |
| createdAt, updatedAt, previousItemId, nextItemId | système | | non affichés |

Valeurs exactes : `content/projects/<slug>.md` (frontmatter JSON-dans-YAML, chemins locaux du manifest + alt d'origine) et `src/data/projects.ts`. Aucun champ texte riche : le corps des `.md` est vide (rien à reproduire en balises).

### Valeurs qui changent la mise en page

| slug | Show Video | Video File | Youtube URL | Image 1 | Gallery Columns | Gallery | Metrics | Services |
|---|---|---|---|---|---|---|---|---|
| gucci | true | o74zvFwrxG1ofp4gdhRqo1Ujgk.mp4 | `https://www.youtube.com/watch?v=6aioEoCdBJw` | vide | 2 Columns | 4 | 2 | 3 |
| chanel | false | — | vide | vide | 2 Columns | 4 | 3 | 3 |
| puma | true | LYIGz8CY670o999qJep8WeHqgzM.mp4 | `…6aioEoCdBJw` | vide | 2 Columns | 4 | 2 | 3 |
| adidas | false | — | vide | oui | 3 Columns | 3 | 3 | 4 |
| nike | false | — | vide | oui | 3 Columns | 6 | 2 | 4 |
| under-armour | false | — | `…6aioEoCdBJw` (ignorée : Show Video false) | oui | 3 Columns | 6 | 3 | 4 |

Services : Brand Identity, Web Design, Framer Dev (+ Art Direction pour adidas, nike, under-armour). Libellés de section non uniformes (à reproduire tels quels) : chanel `THE BRIEF` (majuscules dans le CMS), `The Outcome` et `Words from client` sur une page chacun (voir frontmatter).

## 2. Règles d'affichage tirées du code (route)

- Chaque bloc est conditionnel : rendu seulement si son champ est non vide (`K(x)` = tableau non vide ou valeur ≠ null/`""`) : Short Description, Timeline, Services, About Client, Small Text, Live Link, Image 1, Images 2+3 (bloc `Bottom Images` si Image 2), Image 3, section Approach (si Big Text 2), Gallery, section Outcomes (si Big Text 3), Small text 3, Metrics, Quote (si Quote Big Text), Author Image/Name/Role, Quote Small text (route:L1480-2400).
- Année : `` `'` + toLocaleString(date,{timeZone:'UTC',year:'2-digit'}) + `©` `` dans une balise `<time dateTime=…>` (route:L1325-1340, fonctions `hn/_n/vn/yn`).
- Citation : `“ ` + Quote Big Text + ` ”` (espaces simples, `vn(ot,"“ ")` puis `yn(…," ”")`).
- Métrique : numéro = `Number` formaté `minimumIntegerDigits: 2` (« 01 ») ; label = `(` + Label + `)` (JKo4PdE_2 L205-211).
- Libellé « Results » codé en dur (pas Section Label 3) ; « more projects » codé en dur.
- Fond du hero : composant `cM8Lf1CeK` (« Hidden Mask ») reçoit Show Video, Video File, Video URL, Main Image.
- Si Show Video = false : image principale `framer-8k5osh` avec **lightbox** Framer (fond `rgba(23, 22, 22, 0.75)`, maxWidth 1920, padding 30, zIndex 10, transition 0,6 s `[.87,0,.13,1]`) ; curseur pointer sauf mobile (`cursor: unset`).
- Si Show Video ≠ false : composant « Hero Video Thumbnail » (`koAJndPrk` export `a`) + fenêtre superposée (voir §3.1).
- Galerie : grille 6 colonnes, chaque image `grid-column: span N` avec N = 6 (Full Width), 3 (2 Columns), 2 (3 Columns) via la variable `--1q1styz` (route `On`/`kn`).
- More projects : requête « tous sauf la page courante », `pageSize: 6`, ordre de la collection ; bouton « charger plus » (`Ge`, variante `Jq5yVz0gZ` disabled quand la dernière page est atteinte — toujours le cas, 5 éléments).

## 3. Sections, dans l'ordre

(Dimensions : CSS d'origine, voir `reference/agents/projects/css-gucci.txt`. D = desktop ≥ 1200, T = 810–1199, M = ≤ 809.)

### 3.0 Lenis + espaceur
- `Lenis Smooth Scroll` (`framer-w9o3t8-container`) : `intensity: 8`, `smooth: true`, `infinite: false`, vertical.
- `Spacer` (`framer-ffrjd1-container hidden-1nc0ivo`) : espaceur de navigation, absent en Phone.

### 3.1 Hero (`section.framer-3ye8xs` « Hero », dans `Hero / Project` `framer-4wzv44`)
- D : `position: sticky; top: 0`, colonne, gap 15. T/M : `position: relative; top: unset`. Effet de défilement (D seulement) : `onScrollTarget`, opacité 1 → 0,6 quand la cible `R` (référence posée plus bas) atteint le viewport (seuil 1). Deux copies `section.framer-3ye8xs` dans le HTML (Desktop / Tablet+Phone).
- Fond `BG Outer Container` `framer-by5zon` : absolu `inset:0`, padding 3, `pointer-events: none`. Composant `Hidden Mask` (`framer-1vzwwht-container`), apparition par variante `DV6oTfLLg` (« Hidden Mask ») → `Uh95rRMl7` (« Revealed ») (une fois, seuil 0,5) : `BG` masque `linear-gradient(90deg, #000 0%, transparent 0%)` → 100 % (balayage gauche → droite), rotate 4° → 0, scale 1,5 → 1, ressort 120/25/0,3 délai 0,8 ; rayon 12 ; fond #0d0d0d. Contient `Dark overlay` (#0d0d0d, opacité 0,65) + `Uploaded Video` (`loop muted playsinline preload=none`, `objectFit: cover`, `controls: false`, poster = Main Image) quand Show Video, sinon l'image Main Image en fond.
- `Inside Container` `framer-9cugxo` : max 1920, `min-height: 100vh` (M : 92vh), padding 33 (M : 84 23 23), colonne `space-between`. Parallaxe D seulement : `speed: 130`, `offset 0`, `adjustPosition false`.
- `header.framer-5km0ir` « Top » : grille 4 col, gap 40/20, padding-bottom 50 (M : 30).
  - Lien « Back to projects » (`v7Wd3N72W`, variante `RVD7A0_PA`, texte doublé haut/bas pour le survol, chevron) → `../projects` ; couleurs blanc `--token-27d215b1…` / survol `--token-f277370d…` rgb(255,57,3). `grid-column: span 2`. Apparition spring bounce 0,1 durée 1,2 délai 1,55 (opacité 0,001 → 1).
  - Logo maison (`hidden-1nc0ivo`, absent Phone) → `../` aria-label « home » ; apparition spring bounce 0,1 durée 1,2 délai 1,35.
- `Image / Project Info` `framer-184oqzw` : grille 4 col (M : 1 col), gap 20.
  - `Image / Video` `framer-t241s` : rayon 10 (superellipse 1.5), apparition y 40 → 0, opacité 0,001 → 1, spring stiffness 120 damping 25 mass 0,3 délai 1,05.
    - Avec vidéo : « Hero Video Thumbnail » 254 px de large (CSS composant) / pleine largeur ici, ratio 16/9, bouton `Play Video` en bas à droite (bottom 10, right 10, padding 2 10 2 2, gap 7), icône 16×16, texte « Play Film » (preset `ss7lqy`). Survol : padding 0, texte en absolu (right 0, top 49 %).
    - Clic → bascule l'overlay (`pn`, `blockDocumentScrolling: true`, `dismissWithEsc: true`) : fond `framer-1j1vw8z` fixed inset 0, `#0d0d0dd9`, z 9, opacité 0 → 1 en 0,46 s `[.4,0,.2,1]` ; clic sur le fond = fermeture. Lecteur `framer-15gpuh9-container` fixed centré (`translate(-50%,-50%)`), largeur 80 % (T 85 %, M 90 %), ratio 1,77615, z 9, opacité 0 → 1 en 0,6 s `[.4,0,.2,1]` (sortie identique). Contenu : composant **YouTube** (url = Youtube URL, `play: On`, `shouldMute: false`, `thumbnail: High Quality`, rayon 12, `isRed: false`). Échap ferme. Rendu dans `#template-overlay` / `#overlay` / `body` (portail).
    - Lecteur YouTube (`YouTube.BccqSYT9.mjs` L49-135, lu dans le code) : `play: On` ⇒ pas de vignette, iframe immédiatement visible, `<article role="presentation">` (cursor pointer, overflow hidden, rayon 12) contenant `<iframe title="Youtube Video" frameBorder="0" allow="presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">`, src = `https://www.youtube.com/embed/6aioEoCdBJw?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&autoplay=1` (pas de `mute` car `shouldMute: false`) ; liens `preconnect`/`dns-prefetch` vers i.ytimg.com, www.youtube.com, www.google.com. Commandes : celles du lecteur YouTube (aucune commande propre au site). Le lecteur est démonté à la fermeture (la lecture s'arrête, pas de reprise).
    - Sans vidéo : image `framer-8k5osh` (lightbox, voir §2).
  - `Filler` `framer-1niuf3q` (1 px).
  - `Project Info` `framer-1wtwicl` : span 2 (M : 1), `place-self: end`, gap 20.
    - `Title / Year` : H1 preset `15kw1n0` blanc (max 400 px) + année preset `c95aba` blanc ; apparition y 40 → 0 spring 120/25/0,3 délai 1,15.
    - Ligne `Hidden Horizontal` (`Eu60T7thi`) max 240 px, apparition par variante `b5cbcgrAD` → `iLlY2rby8`, tween 1 s `[.56,.22,.05,.99]` délai 0,95.
    - Description preset `lu6cf5`, blanc, opacité 0,75, max 240, `text-wrap: balance` ; effet texte par **ligne** : y 15 → 0, opacité 0,001 → 1, 0,6 s `[.215,.61,.355,1]`, délai par ligne 0,1, startDelay 1,25, déclenché à l'entrée dans la vue.
- `Bottom Info` `framer-1l9jlre` : grille 4 col (M : 2 col, padding-top 30), padding-top 50.
  - `Timeline` (span 2, M : auto) : « timeline » rgb(188,188,188) `--token-1486dbb4…` + valeur blanche ; apparition opacité spring bounce 0,1 1,2 s délai 1,45.
  - `Scope` : « scope » + liste des Services (gap 4) ; apparition spring délai 1,35.

### 3.2 Client / Brief (`section.framer-102xlp0`, dans `Project ` `framer-dm7c33` fond blanc z 1)
- Padding 120/0 (T 90, M 60). `Inside Container` grille 4 col (M 1), gap 40/20, padding 0 33 (M 0 23), max 1920.
- `Client Logo / About them` (span 2) : logo vectoriel `framer-1nqnto0` hauteur 35, couleur `--token-d33926f3…` (#0a0a0a) ; About Client preset `lu6cf5` max 240.
- `Brief / Live Link` (span 2, gap 40) : `Label / Heading` (max 500) = étiquette (`TJ9zZTo1g`, `framer-105cjq5-container` max 240 ; apparition opacité 0 → 1 tween 1 s `[.4,0,.2,1]`, seuil 0,5) + Big Text H2 preset `fvem1p` (effet par ligne `X` : y 15 → 0, opacité 0,001 → 1, 0,8 s `[.215,.61,.355,1]`, délai 0,1 par ligne, startDelay 0,2, seuil 0,5) ; Small Text preset `10r2g7l` max 340 (effet **mot** `En` : y 5, 0,6 s, délai 0,02 par mot, startDelay 0,2).
  - « View live » (`v7Wd3N72W`, variantes `UFuPupHWY` desktop/tablette, `jinEk1yag` phone) → Live Link, `target=_blank`. Apparition opacité tween 1 s délai 0,3, seuil 0,5.

### 3.3 Image Section (`framer-1p5i3vy`, padding 3, gap 3)
- Image 1 (`framer-pgnxge-container`) pleine largeur si présente ; `Bottom Images` (ligne, gap 3 ; M : colonne) avec Image 2 et Image 3 (`flex: 1`). Composant « Project Reveal Image » (`koAJndPrk` `t`), apparition variante `SEOMcnqgJ` → `bst1eaA3L` (seuil 0).

### 3.4 Approach (`framer-qgqtua`)
- Même gabarit : étiquette Section Label 2 (span 2, max 240) + `Big Text / Small Text` (span 2, gap 20) : Big Text 2 (effet ligne `X`) + Small text 2 (effet mot `Q` : y 2).

### 3.5 Galerie (`section.framer-fu09xc`, sans nom)
- Grille 6 col, gap 3, padding 3 ; images « Project Reveal Image » `span 3` (2 Columns) ou `span 2` (3 Columns).

### 3.6 Outcomes (`framer-1ui1s1v`)
- Section Label 3 + Big Text 3 (ligne) + Small text 3 (mot).

### 3.7 Results / Testimonial (`framer-x2p7po`, padding 3)
- `Outer Container` `framer-1smvlsv` : fond `--token-d33926f3…` #0d0d0d, rayon 12, padding 120/0 (T 90, M 60). `Inside Container` gap 120 (T 90, M 60), padding 0 30 (M 0 23).
- `Metrics` grille 4 col (M 1), gap 15/20 (T 40) : « Results » (span 2, max 240, rgb(188,188,188)) + liste (span 2, gap 30) de composants Metric (`JKo4PdE_2`, variante Dark `x2M8W3cwR`) : « 01 » / Metric H2 `fvem1p` / « (label) » preset `k5mxv3` / Description `lu6cf5` / ligne horizontale (tween 1 s `[.56,.22,.05,.99]` délai 0,1).
- `Quote` grille 4 col (M 2), gap 40/20 : Section Label 4 (M : order 1) ; `Author Card` (gap 15, M gap 9, order 2) : portrait 1:1 rayon 12 max 200 + nom + rôle (`lu6cf5`) ; `Quote` (span 2, M order 0) : citation preset `ervepf` max 430 (effet ligne) + Quote Small text `10r2g7l` max 380 (effet mot).

### 3.8 More Projects (`framer-npfnrg`, padding 240/0 ; T 90 ; M 60)
- `Inside Container` grille 4 col (M 1), padding 0 30 (M 23). `Filler` puis `Projects` (span 3) : « more projects » + 5 « More Project Nav » (`koAJndPrk` `r`), lien `./<slug>`.
- Chaque carte : apparition y 20 → 0, opacité 0 → 1, 0,85 s `[.215,.61,.355,1]`, délai 0,2 + (index % 6) × 0,1, seuil 0.
- Desktop (variante par défaut `KePuGGRdl`, classe `v-oubejw`, 601 px dans le composant / pleine largeur ici) : titre H2 doublé (haut / bas à −65 px), année `'YY©` (`text-wrap: balance`), aperçu image 16:9 en absolu (grille 3 col, filler span 2, bottom −30, `pointer-events: none`, voile `Dark overlay`) ; **survol** (0,46 s `[.87,0,.13,1]`) : le titre haut part à −65 px et le titre bas prend sa place (défilement vertical du texte), l'aperçu passe à `bottom: 0`.
- Tablet **et** Phone (overrides route `kvrgoOqAT` et `gjvbOr6sK` → `I4d4B4zbs`, classe `v-1pcouco`) : grille 3 col, texte span 2, vignette 50×50 à droite (justify-self end), sans effet de survol propre.
- Ordre par page : la collection sans la page courante (gucci → chanel, puma, adidas, nike, under-armour ; chanel → gucci, puma, adidas, nike, under-armour ; etc.).

### 3.9 Prise de contact (`framer-1vs0idl-container`)
- Composant partagé `n_03H18N2` (variantes `k2n70lu6B` D, `fA3TTozUq` T, `szTNrZI4n` M) ; reçoit de la page : Show Video, Video File, Video URL, Main Image du projet (fond du bloc) et `aaeSn4zqw: 0`. Contenu du formulaire : agent contact.

## 4. Mesures (banc)
Script : `scripts/agents/projects/measure.mjs` (stabilisation allégée `quickStable` : `gotoStable` du banc dépassait 8 min sur ces pages ; même la version allégée prend ~225 s par page en mode `record`). Un seul relevé exploitable : `reference/agents/projects/dom-gucci-1440.json` (géométrie, textes visibles avec police calculée, médias, liens ; **sans** interactions — les phases Play Film / lightbox / survol ont dépassé le budget de 10 min et ont été réécrites en interactions par coordonnées, non relancées).

Géométrie gucci à 1440 × 900 (coordonnées page, la barre latérale de navigation occupe x 0–59) :

| Bloc | x, y, l, h |
|---|---|
| Hero | 59, 0, 1381, 900 |
| Top (Back to projects) | 92, 33, 1315, 70,4 |
| Image / Video (vignette Play Film) | 92, 355, 313,8, 176,5 (1 colonne sur 4, 16:9) |
| Project Info | 759,5, 326,9, 647,5, 204,6 |
| Bottom Info | 92, 755, 1315, 112 |
| Project (fond blanc) | 59, 900, 1381, 3335,4 |
| Client / Brief | 59, 900, 1381, 617,4 |
| Image Section | 59, 1517,4, 1381, 863,5 |
| Approach | 59, 2380,9, 1381, 464 |
| Galerie | 59, 2844,9, 1381, 926,5 |
| Outcomes | 59, 3771,4, 1381, 464 |
| Results / Testimonial | 59, 4235,4, 1381, 949 |
| More Projects | 59, 5184,4, 1381, 888 (cartes de 60 px, pas de 75 px, x 424,3, l 985,8) |
| Prise de contact | 59, 6072,4, 1381, 1295,3 |
| Hauteur de page | 8313 |

Courbes : **aucune mesurée**. Toutes les lignes « à mesurer » de `projects.animations.md` sont à mesurer après le correctif du banc D-021 (commit 451b003) ; d'ici là, seuls les paramètres lus dans le code font foi.

Inconnues restantes : rendu réel de la fenêtre Play Film (src de l'iframe lu dans le code, pas observé), lightbox Framer (structure DOM, fermeture), courbes de survol, largeurs 1200/810/390 et liste B, logos clients (VectorSetItem rendu côté client, div vide dans le SSR), tailles des presets typographiques par breakpoint (non extraites ; les surcharges @media existent dans le CSS pour 15kw1n0 et fvem1p).

## 5. Textes exacts par page (ordre d’affichage)

Textes codés en dur : « Back to projects », « Play Film » (gucci, puma), « timeline », « scope », « View live », « Results », « more projects ». Valeurs CMS exactes (caractère pour caractère) : `content/projects/<slug>.md`.

### gucci
- Hero : H1 « Gucci » · « '26© » · « Gucci needed its new eyewear capsule to land online with the same weight it carries in the case. » · timeline « 7 weeks » · scope « Brand Identity », « Web Design », « Framer Dev »
- Client / Brief : « The Florentine fashion house, founded in 1921. This engagement covered the digital launch of a single eyewear capsule. » · étiquette « The Brief » · H2 « Sunglasses that deserved their own light. » · « A house like Gucci does not need an introduction. The capsule needed a page that treated each frame as an object, not a SKU, and moved at the pace of the campaign rather than the catalog. »
- Images : image1 — ; image2 `/assets/images/h3icUTnWizQdQsVQGnkVb5Z3l8o.jpg` (« Model in silver sunglasses with wet hair ») ; image3 `/assets/images/0WiQ2gVQdA7SXFYMVwJfrQjc6sc.jpg` (« Model in wraparound sunglasses with water splashing around her face »)
- Approach : « The Approach » · H2 « Shot in water. Set in stone. » · « We built the launch around the campaign's water-drenched photography and let each frame hold the screen alone. No grid overload. No noise. Just the frame, and the reason to want it. »
- Galerie (2 Columns, 4) : `/assets/images/LhL3rQBqjBSuTVI4j8fZ98TMz8.jpg` (« Stack of kraft shipping boxes on a white surface ») ; `/assets/images/cjIzGb0vpxH9qirVkdq3Jxwew.webp` (« Overhead view of rows of kraft shipping boxes ») ; `/assets/images/29UyMzSDohFSQILssUMmUdYWbrc.webp` (« Kraft shipping boxes scattered on a white floor ») ; `/assets/images/7rrGQ6Ge1y1mkQ6b5OhhcbQqCrA.jpg` (« Three tall kraft boxes standing in a row »)
- Outcomes : « Outcomes » · H2 « Sold out. Then reordered. » · « The capsule allocation cleared in ten days. The waitlist for the second colorway doubled overnight. Two more capsule launches were commissioned before summer. »
- Results : « 01 » H2 « 10 days » « (sold out) » « Capsule allocation cleared through the launch page alone. » ; « 02 » H2 « +240% » « (waitlist growth) » « Second-colorway waitlist doubled inside 24 hours of launch. »
- The Word : « The Word » · portrait `/assets/images/XCY5hpPBRBS6cdWzaAWas5dffkA.jpg` (« Portrait of Chiara Bellini ») · « Chiara Bellini » · « Digital Director, Gucci Eyewear » · « “ The capsule finally has a page that shows the frames the way the campaign saw them. ” » · « We brief a lot of studios. Mira was the only one that treated the page like part of the collection. It just shows what the frames are, and lets people fall for them. »
- More projects : chanel, puma, adidas, nike, under-armour
- Médias hero : Main Image `/assets/images/uQzt05iescwLlC6DKg4M1qwR6o.jpg` 2400×1350 (« Close-up of a model wearing wraparound sunglasses covered in water droplets ») ; vidéo `/assets/videos/o74zvFwrxG1ofp4gdhRqo1Ujgk.mp4`

### chanel
- Hero : H1 « Chanel » · « '24© » · « Chanel asked for a skincare launch as considered as the formulas it was built to carry. » · timeline « 10 weeks » · scope « Brand Identity », « Web Design », « Framer Dev »
- Client / Brief : « The Parisian house. This engagement covered the digital launch of a women's skincare line. » · étiquette « THE BRIEF » · H2 « Skincare that doesn't need convincing. » · « Skincare launches either shout science or whisper apology. Chanel needed neither. The line had to look exactly like what it is: considered, quiet, and certain of itself. »
- Images : image1 — ; image2 `/assets/images/zZkUNfhYvO9rkG9BUPcqRnwaES4.jpg` (« Stacked black packaging boxes printed with 006 ») ; image3 `/assets/images/AkfkAZg7VDUSHERrsXGu1ocBVLw.jpg` (« Black pump bottle on dark coal rocks »)
- Approach : « The Approach » · H2 « Light on the skin. Dark on the glass. » · « We split the shoot in two. Skin in soft morning light, product in black glass and shadow. The page moves between the two like a ritual: calm where it touches the face, precise where it touches the bottle. »
- Galerie (2 Columns, 4) : `/assets/images/GcvKkDO27IsRDlJfH0UVKmmgzcs.jpg` (« Black bottle lying on dark coal rocks ») ; `/assets/images/aV7Bvg4B8UKAz38yRHkjPEmiQYo.jpg` (« Black cosmetic jar on a coal rock in soft mist ») ; `/assets/images/IF3nI7pZx5dx9jaOz7RrjwLDWSE.jpg` (« Small black jar among dark rocks and dried flowers ») ; `/assets/images/BwJuRkmVii0M79EIpuKU7pMF2k.jpg` (« Black dropper bottle on dark rocks »)
- Outcomes : « Outcomes » · H2 « The line sold out. Twice. » · « The launch allocation cleared in nine days. The restock cleared in six. Two flagship counters moved the line to front-of-house before the second batch had shipped. »
- Results : « 01 » H2 « 9 days » « (sold out) » « Launch allocation cleared through the site alone. » ; « 02 » H2 « 2 restocks » « (in first month) » « Both restocks cleared inside a week of shipping. » ; « 03 » H2 « 2 counters » « (moved front-of-house) » « Flagship counters repositioned the line before batch two shipped. »
- The Word : « The Word » · portrait `/assets/images/kmNPpdMzKtgnYgsr9piGQpLv0.jpg` (« Portrait of Margaux Lefevre ») · « Margaux Lefevre » · « Head of Digital, Chanel Skincare » · « “ Mira built calm into a category that usually gets shouted at. ” » · « Every skincare brief we saw came back loud. Jin came back quiet. It is the first launch page I have ever wanted to send to a friend. »
- More projects : gucci, puma, adidas, nike, under-armour
- Médias hero : Main Image `/assets/images/7lmRyzySl3tRUJAR0FTAuBtPBtM.jpg` 2040×1148 (« Model applying face cream to her cheek against a pale background »)

### puma
- Hero : H1 « Puma » · « '25© » · « Puma needed its technical outerwear line to read as gear, not merchandising. » · timeline « 6 weeks » · scope « Brand Identity », « Web Design », « Framer Dev »
- Client / Brief : « The German sportswear company. This engagement covered the launch of a technical outerwear capsule. » · étiquette « The Brief » · H2 « Made for the weather. Cut for the person. » · « Big sportswear over-engineers its language. Every seam becomes a feature. Every zipper gets a name. Puma wanted a launch that respected the fabric and trusted the wearer to notice. »
- Images : image1 — ; image2 `/assets/images/TWooaK1PsmP1qXlywA1eIbMcKs.jpg` (« Man in a white puffer jacket with motion blur around him ») ; image3 `/assets/images/2l2yYUNhrZuSLH81bcy3HzmFhA.jpg` (« Man in a white puffer jacket surrounded by swirling fabric »)
- Approach : « The Approach » · H2 « Motion, not stillness. » · « We shot the collection in wind and rain. The models were not posed. The fabric shows the weather, and the page shows the fabric. No product renders, no cutout backgrounds. Just outerwear in the conditions it is built for. »
- Galerie (2 Columns, 4) : `/assets/images/uYLuy42TqqjASzD3H8fhGGMwWok.webp` (« Phone leaning against a wall showing a red and white poster design ») ; `/assets/images/6nQxdCnqBlCbBOZC10XrYQvlq8.webp` (« Desktop monitor showing a black and white poster with red type ») ; `/assets/images/RkznuFvbN0ALlDcHmuky94YkT0.webp` (« Laptop and phone showing the campaign poster design ») ; `/assets/images/B5jitr5HBvgcH1U5u21XIHsAs.webp` (« Desk setup with a monitor, keyboard, and mouse showing the poster design »)
- Outcomes : « Outcomes » · H2 « Two drops, one launch system. » · « The autumn drop cleared in fourteen days. The winter drop cleared in nine. The launch system we built carried both without a redesign. »
- Results : « 01 » H2 « 14 days » « (autumn drop cleared) » « First drop sold out through the launch page alone. » ; « 02 » H2 « 9 days » « (winter drop cleared) » « Second drop sold through faster on the same system. »
- The Word : « The Word » · portrait `/assets/images/foJh1zwI8ZAzyJVfsEgIaSkdMjk.jpg` (« Portrait of Jonas Keller ») · « Jonas Keller » · « Category Lead, Puma Outerwear » · « “ Mira understood weather. And gear. And what it feels like to trust both. ” » · « The page feels like standing outside in a good jacket. Nothing extra. Just enough. Jin never overexplained, and neither does the line now. »
- More projects : gucci, chanel, adidas, nike, under-armour
- Médias hero : Main Image `/assets/images/NuuceAGvddP5JL0LEhEjp8bdnM.jpg` 1152×1440 (« Runner in a red rain jacket and black cap on a misty coastline ») ; vidéo `/assets/videos/LYIGz8CY670o999qJep8WeHqgzM.mp4`

### adidas
- Hero : H1 « Adidas » · « '25© » · « Adidas wanted its tennis line to feel like the club on a Sunday morning, not a stadium broadcast. » · timeline « 8 weeks » · scope « Brand Identity », « Web Design », « Framer Dev », « Art Direction »
- Client / Brief : « The German sportswear house. This engagement covered the digital home of its tennis apparel line. » · étiquette « The Brief » · H2 « Court, not costume. » · « The line needed to signal tennis without leaning on the sport's tired symbols. No headbands on models, no wooden racquets propped in corners. The clothes had to do the work. »
- Images : image1 `/assets/images/hm4zWE7UjPJyIilngXJFvImwCsI.jpg` (« Tennis player lying on a blue court among tennis balls, holding her racket ») ; image2 `/assets/images/pwrWsR60wFQDNk9bGB1AIhga3fw.jpg` (« Tennis player in a blue sweatshirt lying on the court surrounded by tennis balls ») ; image3 `/assets/images/fg1lKx6Ci7azevbzMDWHd33Zfto.jpg` (« Tennis player in a visor lying on the court and reaching toward the camera »)
- Approach : « The Approach » · H2 « Shot on a real court, in real light. » · « We shot a full lookbook at a club court in mid-afternoon. Every campaign image was pulled from that day. The page is built from what happens between points, not what happens at the baseline. »
- Galerie (3 Columns, 3) : `/assets/images/cJxBUFwi5GJiHGsZCRFfssKds.jpg` (« Tennis player lying on a blue court with tennis balls around her ») ; `/assets/images/ZMqKjTmOjhzdHKOz95Ud1hCkkyE.jpg` (« Tennis player seen through a racket as tennis balls fly overhead ») ; `/assets/images/bOH8872QbdPSBh4K65q20cz7wJM.jpg` (« Tennis player in a blue sweatshirt sitting courtside »)
- Outcomes : « The Outcome » · H2 « Sold out. Booked back in. » · « The first drop cleared in twelve days. Sessions nearly tripled against the previous line page. Two members-only clubs picked up the collection before the page had been live a month. »
- Results : « 01 » H2 « Sold out » « (in 12 days) » « First drop cleared through the site alone. » ; « 02 » H2 « +185% » « (site sessions) » « Sessions vs. the previous line page. » ; « 03 » H2 « 2 clubs » « (picked up at launch) » « Members-only clubs stocking the line before the second delivery. »
- The Word : « Words from client » · portrait `/assets/images/wmCXxMvLuQShjQDJcUSvgLsm22U.jpg` (« Portrait of Naomi Adeyemi ») · « Naomi Adeyemi » · « Line Director, Adidas Tennis » · « “ Mira gave the line a home that finally feels like the court on a Sunday morning. ” » · « We wanted quiet, and Mira understood quiet. The brand feels like what we love about tennis, not what the sport has been packaged as for the last thirty years. »
- More projects : gucci, chanel, puma, nike, under-armour
- Médias hero : Main Image `/assets/images/r7Srjn5YojuM8eQrAW1Mlzsb4.jpg` 2400×1350 (« Close-up of a tennis player with braids looking over her racket »)

### nike
- Hero : H1 « Nike » · « '25© » · « Nike wanted a drop page that moves like the sport does. On the track, on the court, and on the street. » · timeline « 6 weeks » · scope « Brand Identity », « Web Design », « Framer Dev », « Art Direction »
- Client / Brief : « The American sportswear company. This engagement covered the digital launch of a sport-style capsule. » · étiquette « The Brief » · H2 « Signal the game without shouting it. » · « Every campaign within a mile of the sport looks the same. Same shot, same crop, same hoodie on the same wall. This capsule had to carry the game from the track to the street without repeating the vocabulary. »
- Images : image1 `/assets/images/uuHYE7vgUVx4UIn6HdeHEtH4TOY.jpg` (« Basketball player in a varsity jacket and checkered socks crouching with a ball on a red backdrop ») ; image2 `/assets/images/mdsEuPaeYjfpZmPN0NdSKpCL4.jpg` (« Basketball player in a patterned jersey and denim shorts posing on a red backdrop ») ; image3 `/assets/images/2TVTG9dQO7LJ72x2VIUn7VzLV4.jpg` (« Basketball player in a black bomber jacket kneeling next to a basketball on a red backdrop »)
- Approach : « The Approach » · H2 « Full studio, one drop. » · « One studio, one photographer, one afternoon. The whole drop was shot in three hours, from starting blocks to street fits. The page follows the same energy. Fast, saturated, moving. »
- Galerie (3 Columns, 6) : `/assets/images/hm8br9ppRM8ERCQpuw5WVS7bY.jpg` (« Basketball player in a patterned jersey reaching toward the camera on a red backdrop ») ; `/assets/images/vYkZKfVlTI2OpUJtQqk7JUKF8.jpg` (« Basketball player crouching with his hands out on a red backdrop ») ; `/assets/images/ZqBtGmrGoovwEbANFKk2HODU0PA.jpg` (« Basketball player kneeling and smiling on a red backdrop ») ; `/assets/images/WzkIu8sGLZztBhJ1gSBTrWwzI.jpg` (« Basketball player in a varsity jacket holding a ball on a red backdrop ») ; `/assets/images/C6bwpul41clWAlGAceZHD1HQPjA.jpg` (« Basketball player in a black bomber jacket sitting on a red backdrop ») ; `/assets/images/lRjUmmTomkvk0AJhRiaKSHsNU.jpg` (« Basketball player crouching in a bomber jacket and checkered socks on a red backdrop »)
- Outcomes : « Outcomes » · H2 « Sold out. Restocked. Sold out again. » · « The drop cleared in six days. The restock cleared in four. Two flagship city stores asked for the capsule before the page had been live a month. »
- Results : « 01 » H2 « 6 days » « (first drop cleared) » « Full inventory sold through the drop page alone. » ; « 02 » H2 « 2 restocks » « (in first month) » « Both restocks cleared inside a week. »
- The Word : « The Word » · portrait `/assets/images/Kq8enNytXAX3WWNLXgfNsBs3C1M.jpg` (« Portrait of Devin Cross ») · « Devin Cross » · « Brand Director, Nike Sportswear » · « “ Mira built us a page that looks like the game feels. ” » · « We did not want a drop page that looked like every other drop page. Jin got that in the first call. What we shipped feels like a mixtape, not a lookbook. »
- More projects : gucci, chanel, puma, adidas, under-armour
- Médias hero : Main Image `/assets/images/KAdttoufdbmENPnQbvgvJksBwm4.jpg` 2040×1148 (« Athlete lacing orange and white running shoes on a stadium track »)

### under-armour
- Hero : H1 « Under Armour » · « '23© » · « Under Armour wanted its studio training line to feel like the practice, not the locker room. » · timeline « 5 weeks » · scope « Brand Identity », « Web Design », « Framer Dev », « Art Direction »
- Client / Brief : « The American performance brand. This engagement covered the launch of a women's studio training collection. » · étiquette « The Brief » · H2 « One collection. One promise. » · « Training brands promise everything and deliver noise. This collection promises one thing: gear that disappears into the practice. The launch had to match that restraint. »
- Images : image1 `/assets/images/vnm9m0Uei6UhjZqXwDd1J8XX77c.jpg` (« Close-up of an athlete's arm gripping a rowing machine handle ») ; image2 `/assets/images/OTjft5MCpe1ZIm83rHxbvtd91Is.jpg` (« Raised wrist wearing a black smartwatch against a pale sky ») ; image3 `/assets/images/SG02Z58TlwLtrf5kZ1Ovewhv78.jpg` (« Smartwatch on a wrist in low light »)
- Approach : « The Approach » · H2 « Show the practice, not the product. » · « The page leads with people mid-practice, not with feature bullets. Pilates on the reformer, breath work in the studio, the last rep of a hard set. The gear is the thread. The practice is the point. »
- Galerie (3 Columns, 6) : `/assets/images/twFq2C702WAlYFgUMOigfzXxmc.jpg` (« Athlete stretching in a side plank at sunrise ») ; `/assets/images/Qrq41RDwWjYez6cdKCt0QDIqRQw.jpg` (« Athlete training on a reformer machine ») ; `/assets/images/ADEYBq7Wf4XmgvtnCjS0GtpFhY.jpg` (« Silhouette of an athlete kneeling on a reformer machine ») ; `/assets/images/xrmKRvB9dpGe31Rj3chvWIsGjo.jpg` (« Black gym bag, notebook, and headphones laid out on a table ») ; `/assets/images/eXa2q6JhWPIKKCjgvGkAgj0CckI.jpg` (« Black kettlebells and dumbbells on a black pedestal ») ; `/assets/images/8DdK1PW6D47U4dZVHY3BzUAsiQ.jpg` (« Black weights arranged on a floating shelf »)
- Outcomes : « Outcomes » · H2 « Pre-orders sold out in five days. » · « First-run inventory cleared in five days. The waitlist for the second run grew by 4,000 in the first month. Three studio chains opened conversations about carrying the line. »
- Results : « 01 » H2 « 5 days » « (pre-orders sold out) » « Full first-run inventory cleared through the page. » ; « 02 » H2 « 4,000 » « (waitlist added) » « New signups for the second production run. » ; « 03 » H2 « 3 studios » « (in conversation) » « Studio chains opened wholesale talks in month one. »
- The Word : « The Word » · portrait `/assets/images/qV50KoxOEdTy8EP8lnobhyGqbzE.jpg` (« Portrait of Wren Beaumont ») · « Wren Beaumont » · « GM, Under Armour Studio » · « “ Mira understood that training has to feel like the practice, not the pitch. ” » · « Every pitch we heard leaned on optimization language. Jin was the only one who talked about calm. The page feels like a five-minute breath in the middle of a hard day. »
- More projects : gucci, chanel, puma, adidas, nike
- Médias hero : Main Image `/assets/images/mDP6cFLJa8AkD35JWeKaC5TpHA.jpg` 2040×1148 (« Smiling athlete in a black tank top after a workout »)

