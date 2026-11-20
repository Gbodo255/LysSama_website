# Audit — /journal et /journal/<slug> (agent journal)

Sources : modules embellis `reference/framer-code/pretty/ststDNB…` (liste), `vlaxPR…` (article), `pgtQfyOCv.DMDfGpCr.mjs.js` (section « More articles », copie créée par cet agent), `caaAwhF9X.BYTWrlvA.mjs.js` (carte d'article, copie créée par cet agent), `toplevel-deps…` (curseur, l. 19925+), collection `reference/framer/js/BYYSbB_Xj.CQRm1Wxe.mjs`, CSS `reference/css/journal*.css`, HTML SSR `reference/html/journal*.html`.
Mesures (banc `launch({webgl:false})`, `net:'record'`) : `reference/agents/journal/<page>@<largeur>.json` (textes visibles + rect + police + retours à la ligne, liens, images, boutons, corps rich text), `hover.json` (survols, copie), `articles.json` (données consolidées). Scripts : `scripts/agents/journal/{extract,hover,build-content}.mjs`.
Hauteur de page mesurée (scrollHeight) : `/journal` 2640 (1440) · 2471 (1200) · 3545 (810) · 2734 (390) ; `/journal/on-saying-no` 4075 · 4017 · 4817 · 4202. Les 7 autres articles @1440 : 4027–4139 (voir JSON).
Header global (barre latérale gauche ~59 px qui décale le contenu : grille à x = 92 @1440), footer, newsletter : couverts par d'autres agents.

## 0. Collection CMS « Articles » (`BYYSbB_Xj`, id `daa46351-38db-4d6a-8d8b-abe45e9bde66`)

| Id champ | Titre | Type | Usage |
|---|---|---|---|
| `e2iT0TEOk` | Main Image | ResponsiveImage | vignette de carte + couverture (alt = alt CMS) |
| `fjIGNgJXm` | Date | Date (toutes à `T00:00:00.000Z`) | cartes `dateStyle: short` → `6/15/26` ; article `dateStyle: medium` → `Jun 15, 2026` ; `timeZone: UTC`, locale `en-US` ; rendu dans `<time dateTime="ISO">` |
| `uaSqZPqyE` | Article Type | Enum | `bbYlKoiV1` Studio Notes (défaut) · `Nwd0e1xs1` Process · `vYwBiJqxd` Craft · `RPk0dEsKN` Opinion ; affiché `(<type>)` |
| `lykBqV4LS` | Title | String | H1, titre de carte, `<title>`, texte de partage |
| `o4SXCAnQ0` | Short Description | String | chapeau, `meta description`, corps du mail de partage |
| `YjPZVq2pH` | Intro Header | String | `<h2>` en tête du corps, préfixé de 27 espaces |
| `QRCJgS8I0` | Content | RichText | corps : uniquement `<h3>` et `<p>` dans les 8 articles (aucun lien, image, liste, citation, gras) |
| `FUjJJ01X0` | Slug | String | `/journal/:slug` (page `WLBXMFnU8`) |
| `pMnA5s4V2` | Author | Référence → collection `DAk6uOVpi` (équipe) | `hkQFS_ysL` avatar (alt `Portrait of <Nom>`), `lZApwOqNQ` nom, `CeVTjauwn` rôle (affiché + `, Mira`) |
| `createdAt`, `updatedAt`, `previousItemId`, `nextItemId` | — | — | non affichés |

Ordre de la collection (aucune requête n'a de tri ; ordre prouvé par les deux grilles SSR : 4 colonnes desktop et 2 colonnes tablette/mobile, toutes deux cohérentes avec « élément i → colonne i mod n ») :

| # | Slug | Titre | Type | Date ISO | Carte | Article | Auteur (rôle) | Corps | More articles (n° dans l'ordre) |
|---|---|---|---|---|---|---|---|---|---|
| 1 | `fewer-projects-more-attention` | Fewer projects, more attention. | Studio Notes | 2026-06-15 | 6/15/26 | Jun 15, 2026 | David Torres (Developer) | 4 h3 / 7 p | 2, 3, 4, 5 |
| 2 | `awards-dont-build-brands` | Awards don't build brands. | Opinion | 2026-05-05 | 5/5/26 | May 5, 2026 | Jin Yuen (Founder) | 4 h3 / 6 p | 1, 3, 4, 5 |
| 3 | `why-we-quote-fixed` | Why we quote fixed. | Process | 2026-04-03 | 4/3/26 | Apr 3, 2026 | Alex West (Client Manager) | 4 h3 / 6 p | 1, 2, 4, 5 |
| 4 | `the-best-type-is-invisible` | The best type is invisible. | Craft | 2026-03-20 | 3/20/26 | Mar 20, 2026 | Sarah Park (Designer) | 4 h3 / 7 p | 1, 2, 3, 5 |
| 5 | `on-saying-no` | On saying no. | Studio Notes | 2026-02-18 | 2/18/26 | Feb 18, 2026 | Jin Yuen (Founder) | 4 h3 / 7 p | 1, 2, 3, 4 |
| 6 | `the-brief-before-the-brief` | The brief before the brief. | Process | 2026-01-28 | 1/28/26 | Jan 28, 2026 | Alex West (Client Manager) | 4 h3 / 7 p | 1, 2, 3, 4 |
| 7 | `small-looks-expensive` | Small looks expensive. | Craft | 2025-12-12 | 12/12/25 | Dec 12, 2025 | Sarah Park (Designer) | 4 h3 / 7 p | 1, 2, 3, 4 |
| 8 | `the-founder-is-the-brand` | The founder is the brand. | Opinion | 2025-11-04 | 11/4/25 | Nov 4, 2025 | Jin Yuen (Founder) | 4 h3 / 8 p | 1, 2, 3, 4 |

Détail par article (texte exact, images, alt) : `content/journal/<slug>.md` et `src/data/journal.ts`.

## 1. Page `/journal` (composant `FramerHbZ4lEZbG`, classe `framer-4vxtl`)

`<title>` : `Mira - Agency & Portfolio Framer Template` ; meta description générique du template (voir `journal.ts`). Variantes : desktop `nsMOYxXv2`/`framer-v-1idsw5c` (≥ 1200), tablette `iR6veGLgb`/`framer-v-1f0wwcx`, mobile `I5doICn7d`/`framer-v-15bxuw3`. Fond `--token-27d215b1…` (blanc). Lenis : `intensity 8`, vertical, `smooth`, non infini.

### 1.1 Section « Header » (`section.framer-hsv7p6` › `framer-1w6hea`)
- CSS : `hsv7p6` padding-top 33px (mobile 81px). `1w6hea` max-width 1920, colonne, gap 120 / padding `0 33px 120px` ; tablette gap 90 / `0 33px 90px` ; mobile gap 60 / `0 23px 60px`.
- « Top » `header.framer-1tto8yq` : grille 4 colonnes `minmax(50px,1fr)`, gap `40px 20px`.
  - Composant libellé `framer-479px2-container` (masqué mobile, rendu vide dans les mesures — contenu couvert par l'agent global).
  - « Article Count » `framer-t46hau` (span 2 ; mobile span 3 ; gap 3px) : `articles` + `(8)`.
    - Mesures `articles` : @1440 x 425.75 y 33, 23px/26.45 ls −0.23 ; @810 21px/24.15 ; @390 x 23 y 81, 19px/21.85. Couleur 13,13,13.
    - `(8)` : 15px/18px, couleur calculée **rgb(245, 45, 15)** (valeur du token `--token-f277370d…` ; le repli du code `rgb(255,57,3)` n'est pas utilisé).
    - Le compteur compte une liste de collection interne (requête `Jqga7Av2y`, `limit 10`), **non rendue dans le HTML** (CSS `framer-bqbv5h`/`9kywhn`/`oyh0q0` présent, aucun élément). Valeur = nombre d'articles = **8 → le compteur correspond** (pas d'incohérence ; le badge « 6 » du header est celui des projets). Format `(`n`)`, `minDigits 1`.
  - `(2012-26©)` à droite (composant `D21Ecyglh`, variante `fgYOS40ez`) : @1440 x 1093.25, @390 x 295.39.
- « Heading » `framer-ljl91v` : grille 4 col. ; « Filler » 1px (masqué mobile) ; « Heading / Description » `framer-1tp47vp` span 3, gap 30 (mobile : flex colonne gap 15).
  - H1 `our Journal.` preset `15kw1n0` : Mona Sans Variable `wdth 75, wght 700`, 90px / lh 90 % / ls −0.02em, uppercase (tablette 70px, mobile 50px). Mesuré @1440 x 425.75 y 179.45 w 981.25 h 81 ; @810 y 147.16 h 63 ; @390 x 23 y 162.84 h 45.
  - Paragraphe (max-width 400, justifié, gris 104,104,104 + span 13,13,13) : `"                           Notes from the studio on process, craft, and "` + `"the work behind the work. "`. Lignes : `Notes` | `craft,` (2 lignes à toutes les largeurs). @1440 y 290.45 h 52.91 ; @390 y 237.84 h 43.69.

### 1.2 Section « Articles » (`section.framer-ciy0ua` › `framer-15hfomq`)
- `ciy0ua` padding-bottom 120 (tablette 90, mobile 60) ; `15hfomq` max-width 1920, padding `0 33px` (mobile `0 23px`), gap 80.
- Grille masonry `framer-1i49lb8`, gap `40px 20px`, 4 pistes desktop, 2 tablette/mobile.
- Disposition mesurée (colonnes, de haut en bas) :
  - ≥ 1200 : col.1 = 1, 5 · col.2 = 2, 6 · col.3 = 3, 7 · col.4 = 4, 8 (x 92 / 425.75 / 759.5 / 1093.25 @1440, largeur 313.75 ; @1200 largeur 253.75).
  - 810 et 390 : col.1 = 1, 3, 5, 7 · col.2 = 2, 4, 6, 8 (largeur 332.5 @810 ; 162 @390, x 23 / 205).
- **Pourquoi la liste est 2 fois dans le DOM** : le HTML SSR contient deux grilles complètes (liens 1–8 = 4 colonnes, liens 9–16 = 2 colonnes) — **doublon responsive**, une par nombre de pistes ; ce n'est pas un aperçu d'image.
- Hauteur d'image = ratio intrinsèque (`fitImageDimension: height`), donc colonnes de hauteurs inégales (masonry).
- Bouton « Load more » (`framer-ddrj6j-container`, absolu en bas centré) : 8 articles = 1 page → variante désactivée ; **aucun bouton visible mesuré** à aucune largeur.

## 2. Carte d'article (composant `caaAwhF9X`, `framer-qXCbS`) — liste et « More articles »
- `a.framer-n8zo7t` vers `./journal/<slug>` (relatif ; depuis un article `./<slug>`), sans `target`. Colonne, gap 15. Variante desktop `qkJaMXuuZ` (`cursor: pointer`), tablette/mobile `L_gdk_7Fe` (`cursor: unset`).
- « Category / Image » (gap 10) : catégorie `(Opinion)` 15px/18 gris 104 ; « Image Container » `framer-v9hp8k` (rayon `calc(10px × --one-if-corner-shape-supported | 0.752)`, `corner-shape: superellipse(1.5)`, overflow clip) contenant « Bg Image » `framer-yme2qk` (flux) et image avant `framer-oqgboy` (absolue, centrée `translate(-50%,-50%)`, largeur 100 %, rayon 10px, z 1). Les 2 `<img>` ont le même `src`, `alt` = alt CMS, `object-fit: cover`.
- « Title / Date » (gap 5) : titre preset `1l3tbw0` (Mona Sans `wdth 75 wght 675`, 23px/115 %/−0.01em, uppercase ; tablette 21px, mobile 19px ; `text-wrap: balance`) ; date `<time>` 15px gris 104.
- **Survol (desktop seulement)** — mesuré @1440 sur `on-saying-no` : image de fond 313.75 → 376.5 px (`scale 1.2`) avec `blur(5px)` (code ; filtre porté par le conteneur) ; image avant 313.75 × 281.83 → 235.31 × 211.38 (75 %), rayon 10 → 8px ; tween 0.56 s `cubic-bezier(.87,0,.13,1)` (courbe : `hover.json`, stable à 576 ms). @810 : aucun changement, aucun curseur.
- **Pas d'aperçu d'image au survol.** Curseur personnalisé « Read Article » (`data-framer-cursor="a8ccln"`) : cercle blanc 75 × 75, `mix-blend-mode: exclusion`, texte `Read Article` (preset `x8g4OBmQ1`, centré, max-width 50px), `scale 0 → 1` ressort `bounce .2, duration .4` ; suivi ressort `stiffness 500, damping 60, mass 1`, `placement: bottom`, `alignment: center`. Desktop uniquement.

## 3. Page `/journal/<slug>` (composant `FramerWLBXMFnU8`, classe `framer-eegra`)

`<title>` = titre de l'article ; meta description = Short Description. Variantes : desktop `wkcy4Et_p`, tablette `zCedCevuQ`, mobile `j11qKK0L3`. Fond `rgb(255,255,255)`. Lenis identique. Slug inconnu → erreur « No data matches path variables » (404 Framer, couverte par l'agent 404).

Disposition `framer-h6sr5n` : rangée (desktop/tablette) → colonne (mobile). « Content » `1qf3ckv` (tablette : `order 1`).

### 3.1 Colonne image « Article Image Container » `framer-l5ij9y`
- Desktop/tablette : `position: sticky; top: 0; height: 100vh`, flex `1 0 0` (moitié gauche), padding `33px 0 0 33px`, z 1. Mobile : relatif, `height: 75vh`, largeur 100 %, padding `81px 0 0 23px`.
- « BG Outer Container » `1r2jzgf` : absolu `inset 0`, padding 3px. « BG » `1tq3yyt` : rayon 12px (corner-shape). « Dark overlay » `1auuop6` : `--token-d33926f3…` (#0d0d0d) opacité 0.65, z 1. « BG Image » `54cq2o` : `blur(5px)`, absolu `inset 0`, `scale 1.02` final. « Middle Image » `1pw0cc0` : rayon 10px, centrée, hauteur pilotée (`fitImageDimension: height`).
- Mesures `on-saying-no` : @1440 BG 715 × 912 à x 55 / Middle 350.5 × 314.84 à (237.25, 292.58) ; @1200 BG 592.6 / Middle 290.5 × 260.94 ; @810 BG 393.7 / Middle 193 × 173.36 ; @390 BG 391.7 × 682.4 / Middle 192 × 172.47 à (99, 251.27).
- Alt des 2 images = alt CMS de la Main Image (la chaîne `Black and white silhouette…` du code n'est qu'un repli écrasé par la donnée).
- Lien « Back to the journal » (composant `v7Wd3N72W`, desktop `RVD7A0_PA`, tablette/mobile `oFaK7E_Aw`) → `../journal`, texte blanc 17px/20.4 `wdth 75 wght 700`, accent `--token-f277370d…` ; double libellé (y 33 et 53 : effet de défilement vertical au survol, composant partagé). @1440 x 118 y 33 ; @390 x 49 y 81.

### 3.2 « Right » › « Article Info » (`framer-12itxgr` › `10eegt`)
- `10eegt` : colonne `space-between`, `min-height: 100vh`, padding 33 (mobile 23, sans min-height), max-width 1920.
- « Top » `oboj65` : rangée `space-between`, padding-bottom 50 (mobile centré) : libellé (masqué mobile) + date `Feb 18, 2026` (15px/18, 13,13,13, `wdth 80 wght 700`) ; @1440 x 1340.08 y 33.67 ; @390 centrée x 161.53 y 698.
- « Title / Category » (gap 20) : `(Studio Notes)` gris 104 ; H1 preset `ax8na9` centré : 80px/72 ls −1.6 (@1440/1200), 60px/54 (@810), 45px/40.5 (@390) ; Description Switzer 600 15px/21 ls −0.45 gris 104 centrée, largeur 320 (@810 : 293, alignée sur la colonne).
- « Bottom » `1vgsstc` padding-top 50 : auteur (composant `TJ9zZTo1g`) avatar 32 × 32 rayon 4px, nom Switzer 600 13px/18.2 13,13,13, rôle `Founder, Mira` même style gris 104.

### 3.3 « Article Content » (`article.framer-1q4xdhe` › `4d8yer`)
- `1q4xdhe` padding-top 60 (mobile 30) ; `4d8yer` gap 40, padding `0 33px` (mobile `0 23px`).
- Intro `<h2>` justifiée (preset `1l3tbw0`, 23px/26.45 ; 21px @810 ; 19px @390), 27 espaces en tête. @1440 x 853 w 500.
- « Content / Share » `kwv38q` : max-width 500, gap 30.
  - Rich text `1tn62t5` : `<h3>` preset `lrueyv` (Mona Sans `wdth 75 wght 700` 25px/27.5 ls −0.5 @1440/1200 ; 23px/25.3 @810 ; 19px/20.9 @390) ; `<p>` preset `zesxvw` (Switzer 600 15px/21.75 ls −0.45 gris 104 ; 14px/20.3 @390). Espacement : 20px entre p (y 1221.22 → 1328.22 avec h 87), ~40px avant h3.
  - « Divider » `18wmlps` : 1px, `--token-e5145d68…` (#9c9c9c33).
  - « Share » `1gay0sq` (rangée, gap 15) : libellé `Share` 17px/20.4 gris 104 + 4 boutons 19 × 19 (svg 17 + bordure 1px transparente), pas 29px : @1440 x 1246 / 1275 / 1304 / 1333.

### 3.4 Bouton « Share » — comportement (code `function U`, mesures `hover.json`)
- **Ni Web Share API, ni menu** : 4 boutons visibles en permanence, ordre `Share on Twitter`, `Share on LinkedIn`, `Share on Email`, `Copy URL to clipboard`.
- Clic réseau : `window.open(<url>, "_blank", "width=600,height=400")`, `<url>` = `location.href` :
  - Twitter `https://twitter.com/intent/tweet?url=<enc url>&text=<enc Title>` ;
  - LinkedIn `https://www.linkedin.com/sharing/share-offsite/?url=<enc url>` ;
  - Email `mailto:?subject=<enc Title>&body=<enc (Short Description + "\n\n" + url)>`.
  (Non cliqués sur l'original : domaines hors périmètre.)
- Copie (mesuré) : presse-papiers = `https://mirastudio.framer.website/journal/on-saying-no` ; icône copie → coche `M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z` immédiatement, retour à l'icône copie après 2000 ms. Échec → `console.error("Failed to copy URL:", e)`, sans retour visuel.
- Survol (mesuré) : `fill` du svg 13,13,13 → **245,45,15** (transition `fill 0.2s ease`) ; le fond devient `var(...)20` (chaîne invalide) → **transparent** ; transition bouton `all 0.2s ease`.

### 3.5 « More articles. » (composant `pgtQfyOCv`, desktop `w3iaWhFRY`, tablette `RBcJngtnI`, mobile `nPNyXOlRD`)
- Libellé `From the journal` (15px, 13,13,13, sans numéro), H2 `More articles.` (80px @1440 ; 60px @810 ; 45px @390 sur 2 lignes `More` | `articles.`), lien `View All` → `../journal` (double libellé, composant `v7Wd3N72W` variante `jinEk1yag`).
- Requête : `limit 4`, `where not(Title == titre courant)`, sans tri → **4 premiers de l'ordre de la collection hors article courant** (tableau § 0, vérifié sur les 8 pages par `build-content.mjs`).
- Grille : 4 colonnes desktop (largeur 313.75 @1440, 253.75 @1200), 2 colonnes tablette/mobile **en ordre de lecture ligne par ligne** (mesuré @390 : 1 | 2 / 3 | 4). Cartes identiques au § 2 (curseur « Read Article »).

## 4. Animations
Voir `docs/audit/journal.animations.md` (paramètres du code ; courbe de survol de carte mesurée).

## 5. Incohérences de l'original (à reprendre dans `docs/LIMITATIONS.md`)
- Deux formats de date pour la même donnée : cartes `M/D/YY` (`6/15/26`), page d'article `Mon D, YYYY`.
- « More articles » sans tri ni lien thématique : les articles anciens (6–8) proposent toujours les 4 plus récents ; les 4 premiers proposent aussi des articles plus anciens — ordre de dates qui paraît arbitraire mais vient de l'ordre de la collection.
- Libellé `From the journal` sans numéro sur les articles (`Section Count` = 0).
- `<title>`/description de `/journal` = textes génériques du template (« Mira - Agency & Portfolio Framer Template… »).
- Couleur d'accent : repli du code `rgb(255,57,3)` ≠ valeur rendue `rgb(245,45,15)` (token) — la valeur rendue fait foi.
- Le compteur `(8)` est **cohérent** avec les 8 articles.
- Contenu de démonstration (`demo: true`) : auteurs fictifs (équipe), textes signés « Mira ».

## 6. Inconnues restantes
- Courbes image par image des apparitions (paramètres lus dans le code, non mesurés).
- Comportement de `position: sticky` de la colonne image sous Lenis (non mesuré au défilement).
- Survol du lien « Back to the journal » / « View All » (composant partagé `v7Wd3N72W`, agent global).
- Erreur console sur l'original : « Failed to fetch dynamically imported module » (3 erreurs par page, rejeu `record`, `missing 0`) — origine non identifiée, sans effet visible mesuré.
