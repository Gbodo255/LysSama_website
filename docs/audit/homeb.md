# Audit homeb — accueil `/`, sections 06 à 11

Agent : homeb. Sources : module de route `reference/framer/js/J_la0crr…D3aw61EU.mjs` (copie lisible `reference/framer-code/pretty/J_la0crr….mjs.js`, lignes 15086–16486), extrait compact `reference/agents/homeb/home-sections-06-11.compact.js`, composant Pricing Card `reference/agents/homeb/pricing-card.compact.js`, modules partagés lisibles dans `reference/agents/homeb/pretty/` (`vL1rEwvHQ`, `n_03H18N2`, `NIqbhJ1MS`, `pgtQfyOCv`, `D21Ecyglh`).

État : sources lues dans le code compilé. Les mesures au banc (géométrie par breakpoint, 32 totaux relevés, courbes) sont « à compléter » quand c'est indiqué.

## Correspondance des composants (imports du module de route)

| Section | Calque | Composant | Module |
|---|---|---|---|
| 06 | Process Section Label (et tous les libellés de section) | `wt` | `TJ9zZTo1g` |
| 06 | Process Accordian | `nn` = export `t` (`Ba`) | `vL1rEwvHQ` |
| Reel | Video / Image Thumbnail | `hn` = export `a` | `n_03H18N2` |
| Reel | Studio Years Timeline | `Lt` | `D21Ecyglh` |
| Reel | Project Reel Video | `st` (YouTube) | `YouTube.BccqSYT9.mjs` |
| 07 | Testimonials Slider | `Qt` = export `l` (`li`) | `vL1rEwvHQ` |
| 08 | Pricing Card | `wm` (local, `framer-VhWls`, nom affiché « Pricing Card ») | module de route, l. 10776–11952 |
| 08 | Price Display (compteur animé) | `qp` (local, l. 10568) | module de route |
| 08 | Toggle Monthly / Per Project | `Ht` = export `C` (`Ot`) | `vL1rEwvHQ` |
| 08 | Option cochable | `sn` = export `x` (`Xt`) | `vL1rEwvHQ` |
| 08 | Somme des options du groupe | `Ut` = export `E` (`dt`) | `vL1rEwvHQ` |
| 08 | Ligne « included » | `cn` = export `y` (`hn`) | `vL1rEwvHQ` |
| 08 | Bouton « Start a project » | `Kt` = export `_` (`An`) | `vL1rEwvHQ` |
| 09 | Pricing FAQ | `Bt` | `NIqbhJ1MS` |
| 10 | Contact Callout | `xn` | `n_03H18N2` |
| 11 | Articles Feed | `lt` | `pgtQfyOCv` |

Les variantes de breakpoint de la page sont `C3xj8tOVY` (desktop, `min-width: 1200px`), `kUxiuAHJw` (tablette, 810–1199.98), `qjDyvUsLb` (mobile, ≤ 809.98).

Paramètres d'apparition communs (lus dans le module, l. 12175–12360) :
- `Zh` (titres H2) : effet par **ligne**, départ `opacity 0.001, y 10`, transition tween 1.1 s, `ease [0.215, 0.61, 0.355, 1]`, délai 0.2 s entre lignes, `startDelay 0.2`, déclenché `onInView`, seuil 0, pas de relecture.
- `Uh` (paragraphes de description) : effet par **ligne**, départ `Fh` (`opacity 0.001, y 15`), tween 0.8 s, même courbe, délai 0.1 s, `startDelay 0.5`, `onInView`, pas de relecture.
- `Lh` : départ neutre (`opacity 0`, aucune transformation).
- `Qh` : ressort `bounce 0.1, duration 1.2, delay 0.9`.

## 06 The Process

Conteneur : `section.framer-q2r7co` (`data-framer-name="Process"`).

- **Label / Heading** (`framer-16ed0oa`) : libellé de section `wt` avec le texte `The Process`, numéro `6` (`fPCis9rUW: 6`), couleur texte `--token-d33926f3…` (rgb(10,10,10)), couleur accent `--token-f277370d…` (rgb(255,57,3)), `shBP9axEq: true`.
- **Process Headline** (`framer-4arhdd`) : `h2` preset `framer-styles-preset-1c0t51l` (`iLKnB8A0V`), texte `How we carry every project from brief to ` + `launch` (couleur accent rgb(255,57,3)) + ` day.`. Apparition `Zh`.
- **Process Description Group** (`framer-1xby91m`) :
  - **Big Text** (`framer-p5b75q`) : `p` preset `framer-styles-preset-1l3tbw0` (`cZ7bby0gR`), couleur rgb(104,104,104) (`--token-82d92470…`), alignement `justify` (desktop et tablette) / `start` (mobile). Contenu : span noir ` ` + `Nothing falls through the cracks, because there are no cracks.` + span noir rgb(13,13,13) ` One team, one plan, one room. `. Apparition `Uh`.
  - **Small Text** (`framer-1asx0vr`) : `p` preset `framer-styles-preset-lu6cf5` (`XKitmogp0`), rgb(104,104,104) : `You get one point of contact and one shared timeline. Updates arrive before you think to ask for them.` Apparition de style : départ `Lh`, transition `Qh` (ressort bounce 0.1, 1.2 s, délai 0.9 s), une seule fois, seuil 0.
- **Process** (`framer-16i0mj7`, `D.div` avec transformation au défilement) : `__framer__transformTrigger: onScrollTarget`, cibles : au départ `y 0`, quand la référence `ae` (le bloc **Reel** `framer-m79k4k`) atteint le haut → `y 500`. Effet désactivé sur mobile (override `qjDyvUsLb`). À mesurer : courbe y en fonction du défilement.
  - **Proccess Container** (`framer-17mh57q`) → **Process Accordian** (`framer-smi9hy-container`), hauteur 994 (desktop/tablette), 450 sur mobile avec largeur `100vw`. Variante desktop `Wv6mVM6uN`, mobile `kw8StE0kn` (sans effet de variante).
  - Changement de variante au défilement (desktop/tablette uniquement) : `__framer__targets` = marqueur `2` (`framer-lxir8x`) → variante `dPWqybCNx`, marqueur `3` (`framer-1o2peh6`) → `Cth7STIQR`, marqueur `4` (`framer-i4jw4l`) → `NMtXp8_Fx`, seuil 0.5, `animateOnce: false` (rejoué dans les deux sens). Les trois marqueurs sont absents sur mobile (`hidden-1aemvzd`).
  - Contenu des 4 étapes (props du composant) :

    | Carte (`j3Be4K4jD`) | Titre | Description | Image (alt vide) |
    |---|---|---|---|
    | Card 1 | `Discovery.` | `One call, one sharp brief. Your goals, your audience, and what’s in the way.` | `qFx0jVWZOTXHIO7pJZv4u9II6pc.jpg` 1920×1280 (`LuPFa1gVF`) |
    | Card 2 | `Strategy.` | `One creative direction, argued for and agreed — before a single pixel moves.` | `oFVfmzxyuOiWHh75wpJjFBD4v30.jpg` 1920×1280 (`FMHtJ7cg9`) |
    | Card 3 | `Design.` | `Brand and site designed, then built in Framer. Three rounds, sharp ones.` | `KbaOaL2nPH8aFx7C9W4y1tSaK0I.jpg` 1920×2560 (`drFXMJHhP`) |
    | Card 4 | `Launch.` | `We ship, hand over the keys, and stay close for thirty days after go-live.` | `gWmaJhufEDCtHLXnEYjX9fqOykM.webp` 1600×1070 (`L65NDg47e`) |

    Composant **Process Accordion** (`framer-nhusq`, `vL1rEwvHQ`, `Ba`) : variantes `Process Step 1` `Wv6mVM6uN` (carte 1 active), `Process Step 2` `dPWqybCNx` (carte 2), `Process Step 3` `Cth7STIQR` (carte 3), `Process Step 4` `NMtXp8_Fx` (carte 4), `Phone` `kw8StE0kn` (toutes les cartes en variante `XmV4tQ_ou`). Carte active : variante `sgGQEcV9Z` ; inactive : `Sh_ahvups`. Transition tween 0.46 s `ease [0.87, 0, 0.13, 1]`. Cartes : composant `Process Card` (`wa`), largeur de référence `max(largeur / 3, 1px)` (hauteur 100 %). Mise en page exacte des cartes active/inactive et libellé `P.(0n)` : à mesurer au banc.
- Typographie, couleurs, espacements par breakpoint : à compléter (lecture `reference/css/home.css`).

## Reel (« Play Reel »)

Conteneur : `D.div.framer-6t3cye` (`data-framer-name="Play Reel"`), bloc **Reel** `framer-m79k4k` (référence `ae` de l'animation de la section 06).

- **Video / Image Thumbnail** (`framer-1p1tvr6-container`, perspective 1200) : composant `hn` (`n_03H18N2`) avec vidéo `https://framerusercontent.com/assets/P6zBrhqzsUREEaheE1XVmPcM6M.mp4`, image `https://framerusercontent.com/images/ifw30dMETSOlZDGwqwQVUxIALY.jpg` 2048×1080, rayon `12px`, `TnFPa78h5: 0.3` (opacité de voile, à confirmer), `ocaOKDQJV: true`, variante `DlVS4BEWz`. Mobile : hauteur 494, largeur `100vw - 6px`. Transformation au défilement (départ → arrivée quand la cible `me` est atteinte) : à compléter (début de l'extrait, l. ~15400).
- **Play CTA** (`framer-z6chk2`) :
  - **Reel Duration** (`framer-1nikuxu`) : `p` preset `framer-styles-preset-c95aba` (`x8g4OBmQ1`), blanc : `12:33 mins`. Défilement : départ `opacity 0, rotate -5, rotateX 5, rotateY 15, y -50` → `opacity 1`, aucune transformation ; opacité cible 0.75.
  - **Play Reel** (`framer-c7nifx`, perspective 1200) : départ `rotate -10, rotateX 15, rotateY 25, scale 2` → neutre.
    - **Reel Play Label** (`framer-1pwqs1k`) : `h2` preset `1c0t51l`, blanc, `Play` ; départ `opacity 0, x -500` → neutre.
    - **Play Button** (`framer-1emkryi`) → **Play Icon** (`framer-6yzylg`) : SVG 20×20, triangle blanc (`M 16.033 11.239 C 16.723 10.841 16.723 9.845 16.033 9.447 L 7.069 4.276 C 6.379 3.879 5.517 4.376 5.517 5.173 L 5.517 15.514 C 5.517 16.31 6.379 16.808 7.069 16.41 Z`).
    - **Reel Label** (`framer-fsssoq`) : `h2` preset `1c0t51l`, blanc, `Reel` ; départ `opacity 0, x 500` → neutre.
  - **Years** (`framer-mgfg6o`) → **Studio Years Timeline** (`Lt`, `D21Ecyglh`, hauteur 26, variante `Q0LMHMY9j`, couleur blanche) ; départ `opacity 0, rotate -5, rotateX 5, rotateY 15, y 50` → neutre, opacité cible 0.75. Texte attendu `(2012-26©)` : à confirmer au banc.
  - Toutes ces transformations : `onScrollTarget`, cible `me` = calque **Play becomes active here** (`framer-1llc9gt`), seuil 1.
- **Clic (lecture)** : le calque **Play becomes active here** porte `onTap` → `overlay.toggle()`. Fenêtre superposée (portail dans `#template-overlay`, sinon `#overlay`, sinon `body`) :
  - `blockDocumentScrolling: true` (défilement de la page bloqué), `dismissWithEsc: true` (Échap ferme) ;
  - **Project Reel Overlay** (`framer-m801fr`) : fond ; `initial opacity 0` → `animate opacity 1`, sortie `opacity 0`, tween 0.46 s `ease [0.4, 0, 0.2, 1]`. Clic sur le fond → `hide()` (fermeture au clic extérieur) ;
  - **Project Reel Video** (`framer-1vvrwxf-container`) : `transformTemplate translate(-50%, -50%)`, initial `Lh` (opacity 0) → `cg` (opacity 1), sortie `og` (opacity 0), tween 0.6 s `ease [0.4, 0, 0.2, 1]` ;
  - lecteur **YouTube** : `url https://www.youtube.com/watch?v=6aioEoCdBJw`, `play: On` (lecture automatique), `shouldMute: false` (son actif), `thumbnail: High Quality`, rayon 12 px, `isRed: false`. Paramètres d'URL fixés par `YouTube.BccqSYT9.mjs` : `iv_load_policy=3`, `rel=0`, `modestbranding=1`, `playsinline=1`, `autoplay=1` (`play: On`), pas de `mute` (`shouldMute: false`), `color=white` (`isRed: false`) ; **pas de boucle** (`loop=1` seulement si `play: Loop`). `iframe` `allow="presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"`, `frameBorder 0`. Commandes : celles du lecteur YouTube. Le clone ne peut pas appeler YouTube hors ligne lors des comparaisons : voir demandes.
- **Mesuré au banc** (1440) : clic → fenêtre ouverte dans le portail `#template-overlay`, fond `rgba(13, 13, 13, 0.85)`, lecteur 1152×648.6 centré (x 144, y 125.7), `iframe` `https://www.youtube.com/embed/6aioEoCdBJw?v=6aioEoCdBJw&iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&autoplay=1&color=white` ; défilement bloqué par `overflow: hidden` sur `html` ; **Échap ferme** ; **clic extérieur (10,10) ferme**. Courbe d'opacité à l'ouverture : non concluante (opacité 1 dès 64 ms ; à refaire).
- Marqueur **Briefly locks into place here.** (`framer-btgbkf`, masqué sur mobile) : ancre `Se`/`Te` (blocage temporaire du défilement, à mesurer).
- Curseur personnalisé : la page enregistre deux curseurs (`1v6kiai` → `hg`, `a8ccln` → `gg`, composant `Re`, placement `bottom`, centré, ressort `stiffness 500, damping 60, mass 1`). `1v6kiai` est utilisé par le slider de témoignages, `a8ccln` par l'Articles Feed. Sujet « global » (curseur) : signalé, non audité ici.

## 07 What they say

Conteneur : `section.framer-nky0l2` → `framer-d5o449` (Inside Container).

- Libellé `wt` : `What they say`, numéro 7.
- **Testimonials Heading** (`framer-q4jadz`) : `h2` preset `1c0t51l` : `client stories.` (apparition `Zh`).
- **Testimonials Description** (`framer-1hucu8a`) : `p` preset `1l3tbw0`, justifié : ` ` + span gris rgb(104,104,104) ` THE WORK SPEAKS FOR ITSELF,` + ` BUT THE PEOPLE WE BUILT IT WITH SAY IT BETTER.` (apparition `Uh`).
- **Testimonials Slider** (`framer-dujsxl-container`, hauteur 473 ; mobile : largeur `min(100vw, 1920px) - 46px`, prop `KkpcmH5G6: BqBP6fe9B` au lieu de `Tg7HakBk4`), variante `kkynBgPwS`, curseur `1v6kiai`. Props `C6bYAPdum`, `i1xoKY6QK`, `Rha2q2A11` = true (rôle à confirmer).
- Contenu complet des 3 diapositives (correspondance des props lue dans le composant `Testimonial Slider`, `vL1rEwvHQ` : `ai`/`si`, et `Testimonial Card` : `Lr`/`zr`). Titre affiché = `“` + texte + ` ”` (fonction `Or`/`Er`), ligne rôle = `rôle, société` :

  | # | Grand texte (h2 preset `fvem1p`) | Petit texte (p preset `10r2g7l`, gris rgb(104,104,104)) | Nom | Rôle, société | Chiffre 1 / description | Chiffre 2 / description | Portrait (640×640) |
  |---|---|---|---|---|---|---|---|
  | 01 | `“Gucci finally has a site that shows the frames the way our customers already saw them. ”` | `We used to explain what we were making. Mira built us a site that doesn't need explanation. It just shows what the frames are, and lets people fall for them.` | `Ines Costa` | `Founder, Gucci` | `10 days` / `sold out` | `+240%` / `waitlist growth` | `XCY5hpPBRBS6cdWzaAWas5dffkA.jpg`, alt `Ines Costa` |
  | 02 | `“Mira built a brand for a category that usually gets shouted at. ”` | `Every skincare brief we saw came back loud. Jin came back quiet. The result is the first skincare site I've ever wanted to send to a friend.` | `Rafael Costa` | `Founder, Chanel` | `9 days` / `sold out` | `2 restocks` / `in first month` | `kmNPpdMzKtgnYgsr9piGQpLv0.jpg`, alt `Rafael Costa` |
  | 03 | `“Mira understood weather. And gear. And what it feels like to trust both. ”` | `The site feels like standing outside in a good jacket. Nothing extra. Just enough. Jin never overexplained, and neither does the brand now.` | `Henrik Vinje` | `Founder, Oslo` | `14 days` / `autumn drop cleared` | `2 retailers` / `picked up at launch` | `foJh1zwI8ZAzyJVfsEgIaSkdMjk.jpg`, alt `Henrik Vinje` |

  Les 3 diapositives affichent les chiffres (`showMetrics` = true). Incohérences de démonstration : « Founder, Oslo » (lieu à la place d'une marque), « Rafael Costa » et « Ines Costa » partagent le nom, vraies marques (Gucci, Chanel).
- **Composant Testimonial Slider** (`framer-Zcoj2`) : variantes `Testimonial 1` `kkynBgPwS`, `Testimonial 2` `UhG7O0F_P`, `Testimonial 3` `I40ArjRqJ` ; transition entre variantes tween 0.6 s `ease [0.4, 0, 0.2, 1]`. **Une seule carte est montée à la fois** (rendu conditionnel `hn()/gn()/_n()`), donc le changement de diapositive démonte l'ancienne carte et monte la nouvelle, qui rejoue ses apparitions.
  - **Count / Controls** (`framer-17wztzt`) : compteur `01 / 03`, `02 / 03`, `03 / 03` (preset `c95aba`, gris rgb(104,104,104)).
  - **Arrows** (`framer-8v9iu9`) : deux pavés accent rgb(255,57,3), rayon (superellipse 1.5), icônes blanches (`Le` gauche, `Pe` droite, `--js9iwy: 3`). Flèche `1` (gauche) = précédente : 1→3, 2→1, 3→2. Flèche `2` (droite) = suivante : 1→2, 2→3, 3→1. Boucle dans les deux sens.
  - **Clic sur la citation** (`Quote` `framer-1eyfg5`, `data-framer-cursor` = curseur `1v6kiai`) : passe à la suivante (1→2→3→1).
  - **Auto-défilement : aucun** (pas de minuterie dans le composant ; mesuré : diapositive 1 inchangée après 15 s sans action).
  - **Mesuré au banc** (1440, `reference/agents/homeb/interact-1440.json`) : flèche droite ×3 → 2, 3, 1 ; flèche gauche ×3 → 3, 2, 1 ; clic sur la citation → 2. Compteur et contenu conformes au tableau ci-dessus.
  - Points de progression (`Progress Dots`, 3 ronds) : actif rgb(13,13,13), inactifs rgb(188,188,188).
  - Variante de carte : `Desktop` `Tg7HakBk4`, mobile `Phone` `BqBP6fe9B`.
- **Apparitions de la carte** (à chaque montage) : nom `Tr` (ligne, `opacity 0.001, y 15`, tween 0.6 s `[0.215,0.61,0.355,1]`, délai 0.1 s, `startDelay 0.4`, seuil 0.5) ; rôle `Dr` (idem, `startDelay 0.5`) ; grand texte `kr` (ligne, 0.8 s, `startDelay 0.2`) ; petit texte `Ar` (par **mot**, `y 5`, 0.6 s, délai 0.02 s entre mots, `startDelay 0.2`, seuil 0) ; portrait `Reveal Image` (variante visible `GabQ6RP7V` / masquée `LJ9aJ2_VI`, une fois, seuil 0.5) ; ligne animée (`Animated Line 1`, variante `iLlY2rby8` / `b5cbcgrAD`, tween 1 s `ease [0.56, 0.22, 0.05, 0.99]`, origine `flex-start`) ; chiffres : départ `opacity 0` → ressort `bounce 0.1, 1.2 s`, délais 0.3 s puis 0.4 s.

## 08 Pricing

Conteneur : `section.framer-3z32tc` (`id` ancre `KQ3qfGy58`, ref `Oe` passée à la carte comme `scrollSection`) → `framer-1foj0ny` → `framer-1hf8wc4`.

- Libellé `wt` : `Pricing`, numéro 8, texte **blanc** (rgb(255,255,255)), accent rgb(255,57,3). Mobile : largeur `max(min(100vw - 6px, 1920px) - 40px, 50px)`.
- **Pricing Headline** (`framer-171fxfb`) : `h2` preset `1c0t51l`, blanc, aligné à gauche : `KNOW THE NUMBER ` + span accent `UP FRONT.` (apparition `Zh`).
- **Pricing Description** (`framer-1xw8v5t`) : `p` preset `1l3tbw0`, rgb(188,188,188) (`--token-1486dbb4…`), justifié : ` Two ways to work together: month to month, or one fixed-scope project. ` (apparition `Uh`).
- **Pricing Card** (`framer-189pfpj-container`, hauteur 533, largeur max 100 %) ; mobile : largeur `min(max(min(100vw - 6px, 1920px) - 40px, 50px), 800px)`, variante `Phone` (`ppP1s1b10`) ; sinon `Desktop` (`cup93khkL`).

### Composant Pricing Card (`framer-VhWls`)
Variantes : `Desktop` `cup93khkL` (Monthly), `Desktop Toggled` `b_CpEBBVa` (Per Project), `Phone` `ppP1s1b10`, `Phone Toggled` `H7ehOVhk3`. Transition entre variantes : tween 0.46 s `ease [0.87, 0, 0.13, 1]`. Largeur 689 px (desktop), 390 px (phone).

- **Top** (`framer-du4s0o`) : fond `--token-6e62…` rgb(23,22,22), rayon 10 px (superellipse 1.5, repli 0.752), padding 30 px (20 px phone), gap 40 px. Apparition : départ `opacity 0, y -20`, tween 0.85 s `ease [0.215, 0.61, 0.355, 1]`, délai 0.6 s, une fois, seuil 0.5, déclenchée par la section Pricing.
  - **Logo / Text** : logo animé (`Ae`, 60 px, absent sur phone) + **toggle** (`Ht`, 182 px, hauteur 37) : variante `Q9UIdlaan` (Monthly) / `kTxvluWFa` (Per Project) ; le clic appelle `E('b_CpEBBVa')` (desktop) / `E('cup93khkL')` (retour) / `E('H7ehOVhk3')` et `E('ppP1s1b10')` (phone).
  - **Price** : `Starts at` (preset `ss7lqy`, rgb(188,188,188)) ; **Cost / Label** : Price Display (Mona Sans 45 px, graisse 600, `letter-spacing -0.06em`, interligne 0.9em, blanc, préfixe `$`, 0 décimale, séparateur de milliers) ; calque texte SSR `$2,000` (preset `fvem1p`) — remplacé à l'hydratation par la valeur calculée. Suffixe `/month` (Monthly) / `/project` (Per Project), preset `lu6cf5`.
  - **Breakdown** : `Base` (gris) + `$4,500` (Monthly) / `$12,000` (Per Project) ; `Add-ons` (gris) + Price Display préfixe `+$` (Switzer 13 px, 600, `-0.02em`), calque SSR `+$0`.
- **Bottom** (`framer-1phi9k4`) : grille 2 colonnes `minmax(50px, 1fr)`, gap 3 px (phone : colonne flex).
  - **Included** (`framer-9v4fjv`) : même fond/rayon, padding 30 px, gap 20 px ; apparition `y 20 → 0`, 0.85 s, délai 0.7 s. Titre `included`. Lignes : Monthly `One active request at a time`, `Unlimited revisions`, `Priority turnaround`, `Pause or cancel anytime` ; Per Project `Brand identity`, `Website design & build in Framer`, `Copy direction`, `3 review rounds`.
  - **Add-ons** (`framer-dh1w8s`) : apparition `y 20 → 0`, 0.85 s, délai 0.8 s. Titre `Add-ons` (blanc). Options (`sn`, variante `ng7Xm9wfI`) : `Motion design` 1000 / 3000, `Illustration & brand assets` 800 / 2400, `Photography direction` 1200 / 3500, `Pitch deck or sales kit` 900 / 2800 (Monthly / Per Project).
- Pied (`framer-utqaq6`, colonne sur phone) : `*A starting estimate. We lock the final scope and price after the discovery call.` (preset `lu6cf5`, gris, `text-wrap: balance`) + bouton `Start a project` (`Kt`, variante `xOitXcA3M`, accent rgb(255,57,3), texte blanc) → page `EzM9YfbIh` (`/contact`, à confirmer).

### Règle de calcul (code)
Total = `basePrice` (4500 Monthly, 12000 Per Project) + somme des options cochées du groupe `calculator-1` (`Ut`). Format : `$` + `toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})`. Ligne Add-ons : `+$` + somme formatée. Animation : `animate(motionValue, total, { duration: 0.6, ease: 'easeOut' })`, texte réécrit à chaque image ; saut sans animation si `prefers-reduced-motion` ou hors de la vue ; un `span aria-live="polite"` masqué porte la valeur finale.

### Mesure au banc (1440, `reference/agents/homeb/pricing-1440.json`, script `scripts/agents/homeb/pricing.mjs`)
- Texte rendu (casse CSS appliquée) : `MONTHLY` `PER PROJECT` · `Starts at` · total · `/month` · `BASE` `$4,500` · `ADD-ONS` `+$0` · `INCLUDED` + 4 lignes · `ADD-ONS` + 4 options (`Motion design $1,000`…) · note · `START A PROJECT` (libellé présent 2 fois dans le DOM du bouton, effet de survol). État initial : Monthly, aucune case cochée, `$4,500` / `+$0` (le `$2,000` SSR n'est jamais visible après hydratation).
- Options : la **ligne entière** est cliquable (variante `Unchecked` ↔ `Checked`, texte gris rgb(188,188,188) → blanc) ; un clic sur la case seule bascule aussi une seule fois (mesuré : `Checked`, `aria-checked="true"`, total `$5,500`). Case : `button role=checkbox`, 13 px, rayon 2, bordure 1 px `rgba(156,156,156,0.2)`, fond rgb(23,22,22) → blanc, coche rgb(10,10,10) trait 5, encart 2, apparition de la coche `opacity 0→1, scale 0.6→1` 0.2 s easeOut. `aria-label` = titre + `Add-on Toggle` **sans espace** (ex. `Motion designAdd-on Toggle`) — défaut de l'original à reproduire.
- **Les cases cochées sont conservées au changement d'onglet** : 4 cases cochées en Monthly (`$8,400`) → clic `Per Project` → `$23,700`, 4 cases toujours cochées ; retour `Monthly` → `$8,400` / `+$3,900`. Les prix des lignes passent aux valeurs Per Project.
- **32 combinaisons** (ordre des cases : Motion design, Illustration & brand assets, Photography direction, Pitch deck or sales kit ; `x` = cochée) — les 32 totaux mesurés sont identiques à la règle du code ; `aria-live` porte la même valeur :

  | Mode | Cases | Add-ons | Total | | Mode | Cases | Add-ons | Total |
  |---|---|---|---|---|---|---|---|---|
  | Monthly | · · · · | +$0 | $4,500 | | Per Project | · · · · | +$0 | $12,000 |
  | Monthly | x · · · | +$1,000 | $5,500 | | Per Project | x · · · | +$3,000 | $15,000 |
  | Monthly | · x · · | +$800 | $5,300 | | Per Project | · x · · | +$2,400 | $14,400 |
  | Monthly | x x · · | +$1,800 | $6,300 | | Per Project | x x · · | +$5,400 | $17,400 |
  | Monthly | · · x · | +$1,200 | $5,700 | | Per Project | · · x · | +$3,500 | $15,500 |
  | Monthly | x · x · | +$2,200 | $6,700 | | Per Project | x · x · | +$6,500 | $18,500 |
  | Monthly | · x x · | +$2,000 | $6,500 | | Per Project | · x x · | +$5,900 | $17,900 |
  | Monthly | x x x · | +$3,000 | $7,500 | | Per Project | x x x · | +$8,900 | $20,900 |
  | Monthly | · · · x | +$900 | $5,400 | | Per Project | · · · x | +$2,800 | $14,800 |
  | Monthly | x · · x | +$1,900 | $6,400 | | Per Project | x · · x | +$5,800 | $17,800 |
  | Monthly | · x · x | +$1,700 | $6,200 | | Per Project | · x · x | +$5,200 | $17,200 |
  | Monthly | x x · x | +$2,700 | $7,200 | | Per Project | x x · x | +$8,200 | $20,200 |
  | Monthly | · · x x | +$2,100 | $6,600 | | Per Project | · · x x | +$6,300 | $18,300 |
  | Monthly | x · x x | +$3,100 | $7,600 | | Per Project | x · x x | +$9,300 | $21,300 |
  | Monthly | · x x x | +$2,900 | $7,400 | | Per Project | · x x x | +$8,700 | $20,700 |
  | Monthly | x x x x | +$3,900 | $8,400 | | Per Project | x x x x | +$11,700 | $23,700 |

- **Animation du nombre** (courbe image par image dans `pricing-1440.json` → `curve`) : `$4,500 → $5,500` après clic sur Motion design : 16 ms `$4,500`, 32 ms `$4,544`, 160 ms `$4,864`, 304 ms `$5,163`, 400 ms `$5,321`, 512 ms `$5,452`, 592 ms `$5,497`, 608 ms `$5,500` (fin). Le total et `+$` s'animent ensemble, entiers arrondis (`toFixed(0)` + séparateur), durée 0.6 s, `easeOut` de motion. Le texte de base (`$4,500`/`$12,000`) et le suffixe changent par variante (fondu de variante 0.46 s), sans compteur.
- Mesure aux autres largeurs : la règle est indépendante du breakpoint (même composant, variantes `Phone`) ; relevé 390 non refait (budget banc).

## 09 FAQ
**Pricing FAQ** (`framer-1fypq4z-container`, hauteur 886 ; mobile largeur `100vw`), composant `Bt` = `FAQ Section` (`NIqbhJ1MS`, `framer-…`, variantes `Desktop` `eSJMKCwc7`, `Tablet` `z2kibtJCb`, `Phone` `cJwrpVP4o`), prop numéro `xjmUnp2to: 9`.

- **Insider Container** : libellé `wt` texte `Answers` (numéro 9, texte rgb(10,10,10), accent rgb(255,57,3)) ; titre `h2` preset `1c0t51l` : `FAQ.` (effet ligne).
- **FAQ Accordion** (`framer-BcSXX`, variante unique `Yr73kS9p7`) : 6 **FAQ Item** (hauteur 112 ouverts, 51 fermés d'après les calculs de position, écart 3 px), chacun en variante `Closed` (`tw5CtHDal`) au départ : **aucune question ouverte par défaut**. Apparition de chaque item : départ `opacity 0, y 20`, tween 0.85 s `[0.215, 0.61, 0.355, 1]`, délais 0.3 / 0.4 / 0.5 / 0.6 / 0.7 / 0.8 s, une fois, seuil 0.

  | # | Question | Réponse |
  |---|---|---|
  | 1 | `What's the difference between monthly and per project?` | `A project has an end date. We build the brand and the site, hand it over, and it's yours. Membership is for what comes after, or instead of it. $4,500 a month keeps one active request moving, and you pause any month you don't need us.` |
  | 2 | `Is that the final price?` | `It's a real starting number, not a teaser. Scope is the only thing that moves it: an extra page, a second brand direction, a deadline that needs two of us. We lock the figure on the first call and it holds from there.` |
  | 3 | `How long will it take?` | `Two to four weeks for a single piece of work, four to six for a full brand and site. We only take two clients a month, so your start date is real rather than a spot in a queue.` |
  | 4 | `Who actually does the work?` | `The founder. You hire Mira, you get Mira. No juniors, no handoffs, no account manager relaying your feedback.` |
  | 5 | `What do you need from me to start?` | `A short brief and someone who can make decisions. The clearer you are on the goal, the faster we move.` |
  | 6 | `Do you offer support after launch?` | `Every build ships with 30 days of post-launch support. After that, membership keeps us on call at $4,500 a month. Cancel it the month you stop needing us.` |

- **Mesuré au banc** (1440) : état initial 6 items fermés, hauteur 51 px ; item 1 ouvert : 175 px. Courbe (`interact-1440.json` → `plusCurve`) : hauteur 51 → 52 (64 ms) → 60 (160 ms) → 131 (256 ms) → 169 (352 ms) → 175 (448 ms, fin) ; icône Plus en rotation (≈ 7° à 64 ms, ≈ 273° à 160 ms, 360° vers 300 ms) ; fond du titre rgb(13,13,13) et réponse à opacité 1 dès la 1re image relevée (64 ms). Ouverture simultanée de deux items : **non vérifiée au banc** (le 2e clic a visé l'icône de l'item 1 : le sélecteur `[data-framer-name=Open|Closed]` attrape aussi les variantes de l'icône Plus, nommées pareil) ; la règle ci-dessous vient du code.
- **Règle d'ouverture** : chaque item a son propre état (variante locale) ; clic sur l'item fermé → `Open` (`z490WtIIP`), clic sur l'item ouvert → `Closed`. **Plusieurs questions peuvent être ouvertes en même temps** (pas d'exclusion mutuelle dans le code). Tout l'item est cliquable (`data-highlight`), pas seulement l'icône.
- **Item** (`framer-pOYKh`) : transition de variante tween 0.46 s `ease [0.87, 0, 0.13, 1]`.
  - **Title** (`framer-jfr4il`) : rayon (superellipse 1.5) ; fond rgb(10,10,10) ouvert / rgb(247,247,247) (`--token-5243…`) fermé ; texte `p` preset `10r2g7l` blanc ouvert / rgb(10,10,10) fermé.
  - **Icône Plus** (`framer-LQ8sa`, 17×17) : variante `Closed` `dwfiz8xsn` → `Open` `k601oOa0D` : `rotate 0 → 360°` ; barres `V` et `H` couleur rgb(10,10,10) (`XI7MOu9W7`), fond du pavé blanc (`V7rovTxu3`). La barre verticale passe à `top: 12px` en ouvert (`framer-v-5x09si`) — à mesurer.
  - **Content** (`framer-oupqxc`) : réponse `p` preset `10r2g7l` rgb(104,104,104) ; `opacity 1` ouvert / `0` fermé (centré `translate(-50%, -50%)` en fermé).
- **Contact** : `h3`/`p` preset `s3qbre` `more questions?` ; `p` preset `lu6cf5` `Reach out anytime. We're happy to answer before you commit to working together.` ; 3 avatars (`Avatars`, anneau `0px 0px 0px 2px` blanc, apparitions décalées) ; lien email `hello@mira.studio` → `mailto:hello@mira.studio` (texte rgb(13,13,13), accent rgb(255,57,3)).

## 10 Book a call
**Contact Callout** (`framer-1i0v4tb-container`, hauteur 1295), composant `xn` = `Contact CTA` (`n_03H18N2`), variante desktop `k2n70lu6B`, tablette `fA3TTozUq`, mobile `szTNrZI4n`, numéro 10, `BWV1JoM50: false`, `U3duGFpRw: ''`. Sous-composants du module : `Slots` / `Slot`, `Time & Date`, `Image or Video`, `Contact Step`, `Contact Form`, `Success Popup`.

Contenu rendu (banc 1440, `reference/agents/homeb/dom/1440.json`, casse CSS appliquée ; textes source en casse d'origine) :
- Fond : image `https://framerusercontent.com/images/EYivEG50p7YL92jdB9h51wLz4iU.jpg` (2400×1808, alt vide), 1375×1289 à 1440 (inset 3 px).
- Ligne haute : libellé `(10)` + `BOOK A CALL` (Mona Sans Variable 400 15/18, `ls -0.15px`, majuscules ; numéro rgb(245,45,15) mesuré, texte blanc) ; `2 slots for August '26` (Switzer 600 13/18.2, `ls -0.26px`, blanc) ; portrait `I0Zin8u1THTGGeYzoOdXdo8LGQ8.jpg` 32×32, alt `Portrait of Jin Yuen` ; `Jin Yuen` (rgb(250,250,250)) / `Founder` (rgb(188,188,188)).
- Titre `h2` : `LET'S MAKE YOU IMPOSSIBLE TO IGNORE.` (Mona Sans Variable 400 80/72, `ls -1.6px`, 700 px de large, 2 lignes) ; sous-titre : ` Tell us what you're building. We'll tell you how we'd make it land.` (affiché en majuscules, 23/26.45, 350 px).
- Coordonnées : lien `+1 (805) 450 1432` → `tel:+18054501432`, **`target=_blank`** (Mona Sans 30/34.5) ; lien `hello@mira.studio` → `mailto:hello@mira.studio`, **`target=_blank`** (Switzer 600 15/21).
- 3 étapes (numéro dans un pavé, texte rgb(13,13,13)) : `01` `You hear back within a day.` / `From the founder, not a form-bot. We read every enquiry personally.` · `02` `A short discovery call.` / `Thirty minutes to understand your goals, audience, and what's not working.` · `03` `A fixed-quote proposal.` / `Clear scope, clear timeline, clear price. No surprises later.` (titres Switzer 600 15/21 blanc, textes 13/18.2 rgb(188,188,188)).
- Libellés du formulaire : Mona Sans Variable 400 17/20.4, `ls -0.17px`, majuscules, blanc ; champs : Switzer 500 16/19.2, `ls -0.48px`, blanc ; zone de texte 648×100 (interligne 22.4) ; `select` 174×49. Largeurs mesurées à 1440 (vides) : Name 213, Company 228, Help With 485, Budget 151, Email 536.
- Bouton : `START A PROJECT` (deux calques `top`/`bottom` pour l'animation de survol), 314×38, variante initiale **`Incomplete`** (formulaire vide).
- Liens légaux : `terms` → `./terms-conditions`, `privacy policy.` → `./privacy-policy`, même onglet.
- Textes du module non visibles à l'état initial : `Within 24 hours`, `We'll review your submission and send a quick acknowledgment.` (variante d'étape, à confirmer), `Received` / `Review` / `Discovery` (popup de succès).

### Formulaire conversationnel (`Contact Form`, `framer-KEC63`)
- Envoi : formulaire Framer `action https://api.framer.com/forms/v1/forms/c71bee6d-c169-40fa-bab9-1ec6105cfe8a/submit` (le clone devra le remplacer, voir demandes).
- Phrase et champs (dans l'ordre) :

  | Libellé (blanc) | Champ | `name` | Type | Placeholder | Requis |
  |---|---|---|---|---|---|
  | `My name is` | texte | `Name` | `text` | `Name *` | oui |
  | `i’m from` | texte | `Company` | `text` | `Company Name` | non |
  | `and I need help with` | texte | `I need help with` | `text` | `This service` | non |
  | `here’s the Idea:` | zone de texte | `Pitch` | `textarea` | `A sentence or two about the project…*` | oui |
  | `my budget is around` | texte | `Budget` | `text` | `$10k` | non |
  | `and i’d like to start` | liste **native** `select` | `Start` | `select` | option désactivée `When…` (valeur vide), puis `ASAP`, `Within a month`, `This quarter`, `Just exploring` | oui |
  | `reach me at` | email | `Email` | `email` | `Email *` | oui |

  Apostrophes typographiques `’` dans `i’m`, `here’s`, `i’d`. Couleur du placeholder et du texte invalide : `--token-1486dbb4…` rgb(188,188,188). Rayon des champs 8 px (superellipse).
- Consentement : `By submitting, you agree to our ` + lien `terms` + ` and` + ` ` + lien `privacy policy.` (preset lien `3w9o9k`, pages légales, même onglet, pas de défilement doux).
- Bouton `Start a project` (`type=submit`, composant bouton de formulaire `toplevel-deps`, `framer-8H41b`) : variantes `Default` `Rqy7FUIBo`, `Loading` `hiHajVa57`, `Success` `lZufaWhqU`, `Error` `bRLDllExn` (texte `Error, Try Again`), `Incomplete` `wBnCNx14X` (opacité 0.75) ; transition tween 0.56 s `ease [0.87, 0, 0.13, 1]`. Couleur bouton blanche, texte rgb(10,10,10). Le bouton passe en `Incomplete` tant que l'état du formulaire est `incomplete` (champs requis vides).
- États du formulaire (variantes `Contact Form`, transition tween 0.6 s `[0.87, 0, 0.13, 1]`) :
  - `Default` `NgDnrA0wF` ;
  - `Loading` `SHEQP1pE0` (déclenché par `onLoading`) : formulaire `filter blur(5px)`, `scale 0.95` ;
  - `Success` `Esh2uhvll` : `onSuccess` n'est branché qu'en `Loading`, puis passage en `Success` **800 ms** après ; formulaire `blur(5px)`, `opacity 0.35`, `scale 0.95` ; **Success Popup** (400×229, police IBM Plex Mono 700 + Inter) : frise `Received` / `Review` / `Discovery` et texte `Your brief has landed on our desks. I'll personally review it and get back to you within 24 hours.` ;
  - `Error` `ecW7wXnOV` (`onError`) : champs (`Fields`) `opacity 0.5`, bouton en `Error` (`Error, Try Again`).
- **Validation** (banc 1440, cas vides/invalides uniquement, `noValidate=false` et `checkValidity()=false` vérifiés avant chaque clic) : validation **native** du navigateur, aucun message personnalisé. Envoi vide → bulle native sur le premier champ invalide (`Name`, qui prend le focus) ; messages Chrome en-US : `Please fill out this field.` (Name, Pitch, Email) ; email `abc` → `Please include an '@' in the email address. 'abc' is missing an '@'.` Le formulaire reste en variante `Default`, le bouton en `Incomplete` ; aucun style d'erreur sur les champs (bordure 0, fond transparent, pas d'ombre).
- `select` natif, `appearance: none`, texte blanc ; l'option `When…` étant désactivée, **le navigateur sélectionne `ASAP` par défaut** (mesuré : `Start` valide sans action).
- Focus : aucun changement de style mesuré sur `Name` (bordure 0, `outline: none`, pas d'ombre).
- **Largeur adaptative : non** — `Name` reste à 213 px avec 43 caractères saisis (1440).
- **Champs pièges cachés** (anti-spam du formulaire Framer, largeur 0, styles par défaut du navigateur) : `website`, `company`, `message`, `subject`, `title`, `description`, `feedback`, `notes`, `details`, `remarks`, `comments`.
- `form` : `method=post`, pas d'attribut `action` (envoi en JS vers l'URL Framer ci-dessus).

## 11 From the journal
**Articles Feed** (`framer-ela0g7-container`, hauteur 890 ; mesuré 939 à 1440, 908 à 390), composant `lt` = `Articles Section` (`pgtQfyOCv`), titre `articles.`, numéro 11, variante desktop `w3iaWhFRY`, tablette `RBcJngtnI`, mobile `nPNyXOlRD`, curseur `a8ccln` (prop `t9lqsaHqm`). Requête CMS : collection journal, **limite 4**.

- Libellé `(11)` `FROM THE JOURNAL` (texte rgb(13,13,13)) ; `h2` `ARTICLES.` (Mona Sans Variable 400 80/72, `ls -1.6px`).
- `View All` → `./journal` (même onglet), deux calques `Top Text` / `Bottom Text` (survol par glissement vertical, 17/20.4).
- 4 cartes (lien vers `./journal/<slug>`, même onglet), 314 px de large à 1440, colonnes à x = 92 / 426 / 760 / 1093 :

  | Catégorie | Titre | Date | Lien | Image (alt) | Taille rendue 1440 |
  |---|---|---|---|---|---|
  | `(Studio Notes)` (affiché `(STUDIO NOTES)`) | `Fewer projects, more attention.` | `6/15/26` | `./journal/fewer-projects-more-attention` | `QScxeG0hFA9OqTSpKLf3gz2xrk.jpeg` 1501×1047, `Close-up of glossy red lips` | 314×219 |
  | `(Opinion)` | `Awards don't build brands.` | `5/5/26` | `./journal/awards-dont-build-brands` | `flVP3AWr4maQWn3qiFyeFYgkc.jpeg` 904×1200, `Black and white silhouette framed by outstretched hands` | 314×416 |
  | `(Process)` | `Why we quote fixed.` | `4/3/26` | `./journal/why-we-quote-fixed` | `ZpxY6EqIMMqzzyJ6gL7tXpVEO5E.jpg` 2040×1148, `Black horse wearing a flower garland in a field` | 314×177 |
  | `(Craft)` | `The best type is invisible.` | `3/20/26` | `./journal/the-best-type-is-invisible` | `6oZOHgmZZVkcK3G0Wiee0kkF5AI.jpg` 1537×2041, `Chrome hand reaching out beside a rainbow light flare` | 314×417 |

  Casse source des titres/catégories : **à confirmer** (le DOM rendu est en majuscules CSS ; la casse d'origine est dans le CMS, voir agent journal). Chaque image est présente 2 fois (`Bg Image` + `Image Container`, effet de survol à mesurer). Catégorie et date : 15/18 rgb(104,104,104) ; titre : 23/26.45 rgb(13,13,13). Hauteur d'image = ratio naturel (cartes de hauteurs différentes).

## Mesures globales (banc, `reference/agents/homeb/dom/{1440,390}.json`)
Hauteur de page : 23041 px à 1440, 18365 px à 390 (stabilisation allégée : défilement complet par pas de 450 px, mode `fast`, D-019 WebGL off).

| Section | 1440 (l×h, y) | 390 (l×h) |
|---|---|---|
| Process | 1381×4100, y 10577 | 390×886 |
| Play Reel | 1381×2250, y 14676 | 390×900 |
| Testimonials | 1381×963, y 16926 | 390×906 |
| Pricing | 1381×1086, y 17889 | 390×1071 |
| Pricing FAQ | 1381×886, y 18975 | 390×799 |
| Contact Callout | 1381×1295, y 19862 | 390×1655 |
| Articles Feed | 1381×939, y 21157 | 390×908 |

Les textes visibles sont identiques à 1440 et 390 (aucune ligne ajoutée/supprimée). Largeur 1381 à 1440 : la colonne de contenu commence à x = 59 (inexpliqué ici ; à rapprocher de la mesure du header / agent global). Tablette 810 et desktop 1200 : non relevés (budget banc), règles CSS ci-dessous.

## Mise en page (CSS d'origine, `reference/css/home.css`, script `scripts/agents/homeb/css-rules.mjs`)
| Classe | Desktop ≥ 1200 | Tablette 810–1199 | Mobile ≤ 809 |
|---|---|---|---|
| `q2r7co` (Process) | colonne, gap 80, padding 120 0 0 | gap 60, padding 90 0 0 | gap 40, padding 60 0 40 |
| `16ed0oa` (Label/Heading) | grille 4 col `minmax(50px,1fr)`, gap 40/20, padding 0 33, max 1920 | — | flex colonne, gap 15, padding 0 23 |
| `18o7xxf` | `grid-column: span 3`, gap 30 | — | — |
| `p5b75q`, `1asx0vr` | max-width 350 | — | — |
| `17mh57q` (Proccess Container) | **sticky top 0, height 100vh**, padding 3, gap 15 | — | relatif, hauteur auto, padding 0 |
| `lxir8x`/`1o2peh6`/`i4jw4l` (marqueurs 2,3,4) | 100vh chacun (déclencheurs de variante) | — | masqués |
| `m79k4k` (Reel) | **sticky top 0, 100vh**, gap 13 | — | 50vh, top 58 |
| `1llc9gt` (Play becomes active here) | sticky top 0, 100vh, max 1920, padding 3, `cursor: pointer` | — | 50vh |
| `btgbkf` (Briefly locks…) | sticky top 0, 50vh | — | masqué |
| `1p1tvr6-container` (vignette) | absolu inset 3, `pointer-events: none` | — | — |
| `1emkryi` (Play Button) | fond accent, rayon 48, padding 10 ; icône 20×20 | — | — |
| `1nikuxu` (12:33 mins) | opacité 0.75 | — | — |
| `m801fr` (fond de la fenêtre) | `position: fixed; inset 0; z-index 9; background #0d0d0dd9` | — | — |
| `1vvrwxf-container` (lecteur) | fixe, centré, **largeur 80 %**, `aspect-ratio 1.77615`, z-index 9 | 85 % | 90 % |
| `nky0l2` (Testimonials) | gap 80, padding 120 0 | gap 60, padding 90 0 | gap 40, padding 60 0 |
| `d5o449` | max 1920, padding 0 33, gap 80 | — | gap 40, padding 0 23 |
| `dtelkz` | grille 4 col, gap 20 | — | 1 col |
| `15cr2nj` | span 2, gap 20 | — | span 1, gap 15 |
| `1hucu8a` | span 2, `place-self: end start`, max 400 | — | span 1 |
| `3z32tc` (Pricing) | padding 3, gap 20 | — | — |
| `1foj0ny` | fond rgb(13,13,13), rayon 12 (superellipse) | padding 90 0 | padding 60 0 |
| `1hf8wc4` | grille 4 col, gap 20, padding 0 30, max 1920 | flex colonne | 1 col, padding 0 20 |
| `wh3988` | span 3, gap 80 | gap 60 | span 1, gap 40 |
| `171fxfb` (titre) | max 500, `text-wrap: balance` | — | — |
| `1xw8v5t` | max 400 | — | — |
| `189pfpj-container` | max 800, z-index 1 | — | — |
