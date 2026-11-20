# MISSION — Reproduire à l'identique le site Mira Studio en code, de bout en bout

> Lis ce fichier en entier avant d'agir. C'est ta source de vérité pour toute la mission.
> Si la session est interrompue ou si ton contexte est réinitialisé : relis ce fichier, puis `docs/PROGRESS.md` et `docs/COMPORTEMENTS.md`, et reprends exactement là où tu t'étais arrêté.

---

## EXIGENCE ABSOLUE — À relire avant chaque phase

**Tu dois reproduire exactement, de bout en bout et sans faute, TOUT ce que fait le site https://mirastudio.framer.website/. Ce n'est pas un objectif de qualité : c'est la définition même de la mission.**

« Tout » veut dire tout, sans exception :
- chaque page, section, texte, image, vidéo, couleur, police, espacement et retour à la ligne ;
- chaque animation : préchargeur, apparitions, défilement, survols, clics, transitions, compteurs, boucles continues ;
- avec pour chacune les mêmes déclencheurs, durées, délais, courbes, ressorts, décalages entre éléments, ordres et trajectoires ;
- chaque effet WebGL : slider du hero et ses transitions, vitrine incurvée, page 404 en 3D ;
- chaque interaction : clic, survol, glisser, molette, clavier, tactile, curseur, défilement, formulaires et leurs états, calculateur de prix ;
- chaque comportement responsive, sur toutes les largeurs ;
- chaque état : chargement, vide, erreur, succès, ouvert, fermé, actif, désactivé, focus, première visite, visite suivante.

Ce qui est interdit :
- **simplifier** : remplacer une animation par un fondu générique, un ressort par une courbe standard, un effet WebGL par une image ou une vidéo ;
- **approximer** : utiliser une valeur « qui ressemble » au lieu de la valeur mesurée ;
- **omettre** : ignorer un comportement parce qu'il est difficile, discret ou rarement vu ;
- **ajouter** : introduire un comportement que l'original n'a pas ;
- **déclarer** : dire qu'un comportement est reproduit sans preuve mesurée (section 9).

Chaque comportement observé sur l'original est inscrit dans `docs/COMPORTEMENTS.md` (Phase 1, Étape E). La mission n'est terminée que lorsque **100 % des lignes** de ce registre sont implémentées **et** prouvées identiques par une mesure. Un seul comportement manquant ou différent, et la mission n'est pas terminée.

Si un comportement te semble impossible à reproduire, ne le contourne pas. Cherche dans cet ordre :
1. le code source du projet Framer (Étape 0) ;
2. les modules JS du site publié (Étape F) ;
3. la mesure image par image (Étape F).

Ce n'est qu'après ces trois tentatives, documentées, que tu peux le déclarer bloqué dans `docs/LIMITATIONS.md`, avec la preuve de chaque tentative. Il reste alors non coché.

---

## 0. Ce que tu dois produire, et ce que « identique » veut dire

Un projet web exécutable localement, reproduction exacte du site **https://mirastudio.framer.website/** :
- ses 22 pages et sa 404 ;
- ses mises en page responsive ;
- son préchargeur et ses 3 composants WebGL ;
- toutes ses animations, interactions et états.

« Identique » ne se juge pas à l'œil : il se mesure. Ces seuils sont repris comme critères d'acceptation en section 9.

| Dimension | Seuil |
|---|---|
| Comportements du registre `COMPORTEMENTS.md` | 100 % implémentés et prouvés |
| Textes visibles, y compris ceux révélés par interaction | identiques caractère pour caractère |
| Retours à la ligne | mêmes mots en tête de chaque ligne, à chaque largeur |
| Pixels par section (zones en mouvement continu masquées) | ≤ 2 % de pixels différents |
| Hauteur de section | ≤ 2 px d'écart |
| Hauteur de page | ≤ 0,5 % d'écart |
| Position et taille des éléments | ≤ 2 px d'écart |
| Typographie : famille, graisse, taille, interligne, espacement, casse | identique (tolérance 0,5 px) |
| Couleurs, opacités, rayons, ombres, filtres | identiques |
| Animations : instant de début et de fin | ± 1 image (17 ms) |
| Animations : forme de la courbe | écart ≤ 3 % de l'amplitude à chaque image |
| WebGL : images aux instants échantillonnés | ≤ 3 % de pixels différents |
| Scénarios d'interaction rejoués sur l'original et sur le clone | 100 % de résultats identiques |

---

## 1. Faits déjà vérifiés sur le site (point de départ, à confirmer pendant l'audit)

### 1.1 Nature du site

C'est le template Framer **payant « Mira »** (studio de design fictif « Mira Studio ») créé par **Joseph Alexander** (profil Framer `@joseph-alexander`). Il est vendu 129 $ sous licence **Single-Use** (voir section 7).

L'auteur le décrit comme « a portfolio template for design studios that want their site to look like the work they sell » : thème sombre, typographie condensée géante, un seul rouge « signal ».

Fonctionnalités annoncées par l'auteur :
- **3 composants WebGL sur mesure** :
  - un **slider plein écran** dans le hero, avec 10 transitions réglables (dont Noise Warp, Liquid, Dissolve) ;
  - une **vitrine de projets incurvée** ;
  - une **page 404** où le texte devient un maillage 3D filaire qui éclate sous le curseur.
- **Préchargeur** : un compteur tourne pendant le chargement, puis la page se révèle à travers le logo.
- **5 collections CMS reliées** (dont Projects et Journal). Elles alimentent le slider, la vitrine, les études de cas et les liens vers les autres projets.
- **Tarifs** avec bascule mensuel / par projet et **calculateur d'options en direct**.
- **Formulaire de contact « conversationnel »** avec états de chargement, de succès et d'erreur.
- Dans le projet Framer uniquement : une page de design system, un guide d'utilisation sur le canevas et des skills pour l'agent IA de Framer.

Le site est généré par Framer : HTML pré-rendu côté serveur, CSS en ligne dans le `<head>`, animations pilotées par **Motion** (ex-Framer Motion), images, vidéos et polices servies depuis `framerusercontent.com`.

Les composants WebGL sont des **composants de code**. Leur source lisible se trouve dans le projet Framer remixé. Une version compilée se trouve dans les modules JS du site publié, où les shaders GLSL restent en général lisibles sous forme de chaînes de caractères.

### 1.2 Pages (d'après `sitemap.xml`)

| Route | Contenu principal |
|---|---|
| `/` | Accueil : slider WebGL, 11 sections numérotées (01 About us → 11 From the journal), newsletter |
| `/projects` | « selected works » — 6 projets, probable emplacement de la vitrine incurvée |
| `/projects/<slug>` × 6 | `gucci`, `chanel`, `puma`, `adidas`, `nike`, `under-armour` |
| `/studio` | « the studio. » : culture, chiffres, équipe, principes, clients, prix, journal, prise de contact |
| `/journal` | « our Journal. » — 8 articles |
| `/journal/<slug>` × 8 | `fewer-projects-more-attention`, `awards-dont-build-brands`, `why-we-quote-fixed`, `the-best-type-is-invisible`, `on-saying-no`, `the-brief-before-the-brief`, `small-looks-expensive`, `the-founder-is-the-brand` |
| `/contact` | « start a project. » : coordonnées, formulaire, étapes, FAQ |
| `/privacy-policy`, `/terms-conditions`, `/cookie-policy` | Pages légales |
| 404 | Page WebGL annoncée par l'auteur, non vérifiée : à capturer via une URL inexistante |

**Hors périmètre** (consigne-le dans `docs/DECISIONS.md`) :
- le **bandeau promotionnel du template** : « Unlock from $129 », « Get Template », « All Access », « Secured By », lien vers `launchnow.design/checkout/mira` ;
- le **badge Framer** ;
- la **page de design system** et le **guide d'utilisation** du template, s'ils sont publics (essaie `/design-system`). Ce sont des outils pour Framer : sers-t'en comme source de tokens, mais ne les reproduis pas.

Sur l'original, masque ces éléments dans toutes les captures (section 6) pour qu'ils ne faussent pas les comparaisons.

**Garde exactement les mêmes routes.** L'audit, les comparaisons et les tests reposent sur cette correspondance un-à-un.

### 1.3 Mises en page responsive

**Rien n'est encore confirmé.**

Le header et le footer apparaissent environ 4 fois dans le DOM, la plupart des autres blocs 2 à 3 fois. Le site a donc probablement **3 ou 4 layouts**.

**Confirme-les en lisant les `@media` du CSS d'origine ou via le MCP Framer (Étape 0), puis utilise exactement ces seuils.** Relève aussi la largeur de conception de chaque layout. Reproduis ce que le site fait réellement, pas ce qu'un « bon responsive » ferait.

### 1.4 Inventaire préliminaire des sections

Ces relevés ont été faits à partir du texte des pages. Les comportements y sont souvent supposés : **l'audit doit tout confirmer et tout compléter.**

**Header (toutes les pages)**
- Logo « mira ® » / « Studio ».
- Liens Home, projects (avec un badge « 6 »), Studio, Journal ; bouton « let's talk » → `/contact`.
- Réseaux sociaux : X, Instagram, Dribbble, Behance.
- À déterminer : comportement au défilement, menu mobile, état actif.

**Préchargeur** : compteur, puis révélation à travers la forme du logo. À déterminer :
- toutes les pages ou seulement la première visite ;
- à chaque navigation ou une seule fois ;
- éventuel stockage (`sessionStorage`, `localStorage`, cookie).

**Accueil `/`**
1. **Hero** :
   - slider WebGL plein écran de 4 projets : Gucci, Chanel, Puma, Adidas, chacun lié à sa page ;
   - H1 « Mira is a studio for founders who care how they're seen. We turn good work into a presence that earns attention — and closes the gap between who you are and how you look. » ;
   - « based in » Los Angeles, Tokyo ;
   - services Brand Identity, Web Design, Framer Dev, Art Direction ;
   - bouton « let's talk ».
2. **01 About us** :
   - H2 en capitales « WE BUILD BRANDS FOR FOUNDERS WHO REFUSE TO BLEND IN… » ;
   - portrait de Jin Yuen, Founder ; « (My philosophy) » et sa citation ;
   - boutons « See the studio » et « See all 6 » ;
   - « 50 BRANDS. 14 YEARS. ONE STANDARD. » ;
   - 2 vidéos MP4 et 4 images.
3. **02 Our clients** : 3 avatars (640 × 640), « +47 », « 4.9/5 », « Trusted by 50+ clients », « 2012 2026© ».
4. **03 Why us** :
   - « why Mira® is your next choice. » ;
   - graphique en barres « With Mira +47% inbound » / « Industry avg +12% », axe 0–48 % ;
   - « REAL BRANDS. REAL NUMBERS. ZERO HANDOFFS. » ;
   - chiffres 50+, 100 %, 6 Wks, 40+ ;
   - encadré « NOT EVERY BRIEF IS A FIT… » ;
   - bouton « Start a project ».
5. **04 Services** : « services. ». Chaque carte présente un nom, un prix de départ, une description, un délai, 4 inclusions et un bouton « Start a project » ; chaque carte est présente 2 fois dans le DOM.

   | Service | Prix de départ | Délai |
   |---|---|---|
   | Brand Identity | $4,500 | 2-3 weeks |
   | Web Design | $6,500 | 3-4 weeks |
   | Framer Dev | $4,000 | 2-3 weeks |
   | Art Direction | $3,500 | 2 weeks |

6. **05 Meet the team** :
   - « EST. 2012 », « (4) Team Members » ;
   - Jin Yuen (Founder), Sarah Park (Designer), Alex West (Client Manager), David Torres (Developer) ;
   - bloc recrutement « join us, we're hiring. », « 02 Open Positions », « Email us ».
7. **06 The Process** : P.(01) Discovery, P.(02) Strategy, P.(03) Design, P.(04) Launch.
8. **Reel** : vidéo, « 12:33 mins », « Play », « (2012-26©) ». Lecture sur place ou fenêtre ?
9. **07 What they say** : « client stories. », slider « 01 / 03 ». Une seule diapositive est présente dans le HTML : fais défiler les autres pour extraire leur contenu.
10. **08 Pricing** :
    - « KNOW THE NUMBER UP FRONT. » ;
    - onglets Monthly / Per Project, base $4,500 ;
    - options cochables : Motion design $1,000, Illustration & brand assets $800, Photography direction $1,200, Pitch deck or sales kit $900 ;
    - total calculé en direct, note « *A starting estimate… », bouton « Start a project ».
    - Le HTML est ambigu (« Starts at $2,000 », « +$0 ») : seule l'interaction fait foi.
11. **09 FAQ** : 6 questions en accordéon, bloc « more questions? », `hello@mira.studio`.
12. **10 Book a call** :
    - « 2 slots for August '26 », portrait, « Let's make you impossible to ignore. » ;
    - formulaire conversationnel (champs insérés dans des phrases) :
      - « My name is » ;
      - « i'm from » ;
      - « and I need help with » ;
      - « here's the Idea: » ;
      - « my budget is around » ;
      - « and i'd like to start » avec une liste ASAP / Within a month / This quarter / Just exploring ;
      - « reach me at » ;
    - mention de consentement et bouton « Start a project » ;
    - téléphone, email, 3 étapes.
13. **11 From the journal** : « articles. », « View All », 4 articles.
14. **Newsletter et footer** :
    - « A LETTER, ONCE A MONTH… », bouton « Join Now », mention de consentement ;
    - grand mot-symbole « mira ® » ;
    - liens légaux, « 2026 MIRA ®All rights reserved. ».

**`/projects`**
- « selected works », compteur « 6 », « (2012-26©) ».
- Projets avec leur catégorie et leur année : Gucci (Eyewear '26©), Chanel (Women's Skincare '24©), Puma (Technical Outerwear '25©), Adidas (Tennis Apparel '25©), Nike (Sportswear '25©), Under Armour (Training '23©).
- Le DOM contient les textes « project title » et « Count Font » : ce sont probablement les textes par défaut d'un composant de code, pas du contenu visible. Vérifie.

**`/projects/<slug>`**
- Hero en image plein cadre avec « Play Film » (MP4).
- Titre, année, accroche.
- Sections The Brief, The Approach, Outcomes, Results (01, 02 avec chiffres), The Word (témoignage).
- Services, durée, lien « View live », « Back to projects », « More projects » (les 5 autres), prise de contact, newsletter.

**`/studio`**
- Hero « the studio. » (image 2816 × 1536).
- « Our culture. » avec des compteurs « by the numbers. ».
- Équipe ; principes 01–04 (« You talk to the maker. », etc.) ; clients.
- Prix : Awwwards SOTD 2026, FWA 2025, CSS Design Awards 2024, Awwwards HM 2023.
- Journal, prise de contact.

**`/journal`** : « our Journal. », 8 articles (catégorie, titre, date). La liste apparaît 2 fois dans le DOM : aperçu d'image au survol ? doublon responsive ?

**`/journal/<slug>`**
- « Back to the journal », catégorie, H1, date, auteur (Jin Yuen, avatar), image de couverture, chapeau.
- Corps : H2 d'introduction puis H3.
- Bouton « Share » (comportement à déterminer), « More articles. » (4) et « View All ».

**`/contact`**
- « start a project. », coordonnées, adresse, horaires (Monday to Friday, 9:00 AM to 6:00 PM).
- Carte « Book a call », formulaire, 3 étapes, FAQ.

**Pages légales** : textes longs avec H2/H3. `/cookie-policy` indique « Last updated 7/10/26 ».

**404** : maillage 3D filaire du texte, qui éclate sous le curseur.

**Composants partagés** : Header, préchargeur, Footer + Newsletter, prise de contact (formulaire + étapes), FAQ, carte d'article, carte et lien de projet, équipe, clients, compteur animé, slider de témoignages, lecteur vidéo, et les 3 composants WebGL. Construis-les une seule fois et réutilise-les.

### 1.5 Pièges connus

- **Chaque bloc existe en plusieurs exemplaires dans le HTML**, un par breakpoint, masqués via CSS. Les doublons ne sont pas des éléments distincts. Analyse la mise en page sur le **DOM rendu à chaque largeur**, jamais sur le HTML brut seul.
- **Le préchargeur masque la page au départ.** Toute capture, mesure ou vidéo doit attendre sa fin, pilotée par l'horloge du banc de mesure (section 6).
- **Les canvas WebGL n'existent pas dans le HTML.** Ils sont créés à l'exécution et dépendent du temps, du pointeur, du défilement et de l'aléatoire. Seul le banc de mesure déterministe permet de les comparer.
- **Contenu révélé par interaction** : diapositives du slider et des témoignages, états des tarifs, réponses de la FAQ, liste déroulante du formulaire, fenêtres vidéo, menu mobile, survols. Les compteurs, eux, affichent 0 dans le HTML.
- **Contenu de démonstration à risque.** Il est reproduit pour la fidélité, mais ne doit **jamais être publié tel quel** (section 7) :
  - études de cas au nom de **vraies marques** (Gucci, Chanel, Puma, Adidas, Nike, Under Armour), avec des chiffres et des citations inventés (ex. « Ines Costa, Founder, Gucci », « Jonas Keller, Category Lead, Puma Outerwear ») ;
  - prix Awwwards, FWA et CSS Design Awards fictifs ;
  - statistiques inventées : +47 %, 4.9/5, 50+ marques, 14 ans ;
  - équipe fictive ;
  - adresse « 2800 East Observatory Road, Los Angeles », qui est celle d'un lieu réel (l'observatoire Griffith).
- **Liens de remplissage** :
  - réseaux sociaux vers les racines `x.com`, `instagram.com`, `dribbble.com`, `behance.com` ;
  - « View live » vers `launchnow.design` (site de vente du template) ;
  - « Email us » sans adresse.

  Recense-les tous dans `docs/LINKS.md`.
- **Incohérences de l'original**, à reproduire telles quelles et à lister dans `docs/LIMITATIONS.md` (section « Contenu à corriger au rebranding ») :
  - compteur du journal qui ne correspond pas au nombre d'articles (à vérifier) ;
  - politique de cookies qui décrit une bannière et un lien « Cookie preferences » absents du site ;
  - dates d'articles liés antérieures ou postérieures sans logique apparente.
- **Ne déclenche jamais d'action réelle sur l'original** : ne soumets aucun formulaire valide, cela enverrait un vrai message à l'auteur. Teste uniquement des cas vides ou invalides. Les états de succès et d'erreur se lisent dans le projet Framer (variantes du composant) ou dans son code.

---

## 2. Règles de travail

1. **L'exigence absolue prime sur tout le reste.** En cas de conflit entre la rapidité et la fidélité, la fidélité gagne toujours.
2. **Mesurer, jamais deviner.** Toute valeur provient du projet Framer (Étape 0), du code source, ou d'une mesure dans `reference/` : couleur, taille, espacement, rayon, ombre, durée, ressort, courbe, uniform de shader. Une valeur estimée est un défaut : elle est notée dans `docs/LIMITATIONS.md` et reste à corriger.
3. **Pas d'outil de résumé pour l'audit.** N'utilise pas WebFetch : il renvoie un résumé, pas le code source. Utilise `curl` ou des scripts Node/Playwright qui enregistrent les fichiers bruts sur disque.
4. **Préserve ton contexte.** Le HTML Framer et ses bundles JS sont énormes et minifiés. N'affiche jamais un fichier entier : utilise `rg`/`grep`, `jq`, ou des scripts qui extraient uniquement ce qu'il faut et écrivent le résultat dans un fichier.
5. **Écris tout ce que tu apprends sur disque.** Ton contexte peut être compacté ou réinitialisé ; les fichiers restent.
6. **Ne copie pas le runtime Framer.** N'intègre ni la bibliothèque `framer`, ni les bundles `.mjs`, ni le HTML exporté tel quel. Le code des composants de l'auteur (WebGL, préchargeur…), couvert par la licence, peut en revanche être porté (Phase 6).
7. **N'invente aucun contenu.** Si un contenu est inaccessible, laisse un marqueur explicite et documente-le.
8. **Aucune déclaration sans preuve.** Une ligne de `COMPORTEMENTS.md` ou de `PROGRESS.md` n'est cochée qu'avec le chemin d'une preuve qui respecte les seuils de la section 0 : comparaison, courbe, images WebGL ou test.
9. **Même banc pour les deux.** Toute capture de l'original et du clone passe par le banc de mesure commun (section 6), jamais par un script ponctuel.
10. **Référence figée.** Après l'Étape A, toutes les comparaisons rejouent l'archive de l'original, jamais le site en ligne : l'auteur met son template à jour. Une nouvelle capture n'est faite que sur décision consignée dans `DECISIONS.md`.
11. **Le projet Framer est en lecture seule.** Via le MCP Framer, tu ne modifies rien, tu ne crées ni branche ni page, tu ne publies rien.
12. **Git à chaque étape validée.** Fais un commit après chaque section ou comportement validé, avec la preuve dans le message (ex. `home/hero : diff 0,9 %, courbes OK`).
13. **Plafond d'itérations.** Au-delà de 6 cycles de correction sur une même section, marque-la « KO » avec le diagnostic, passe à la suite, et reviens-y en Phase 10. Elle reste non cochée tant qu'elle n'est pas résolue.
14. **Autonomie.** Ne me demande pas de choisir. Décide, consigne la décision et sa raison dans `docs/DECISIONS.md`, avance. Ne t'arrête que pour un blocage externe impossible à contourner, et décris-le alors précisément.
15. **Regarde ce que tu produis.** Ouvre les images comparatives (tu peux lire les PNG). Un pourcentage ne suffit pas à juger une typographie, un recadrage ou un mouvement.
16. **Rien n'est mis en ligne publiquement** tant que `npm run check:launch` (Phase 11) ne passe pas.

---

## 3. Fichiers de pilotage (à créer en Phase 0)

- `CLAUDE.md` : 20 lignes maximum, avec :
  - l'exigence absolue en une phrase ;
  - les règles de la section 2 en résumé ;
  - les breakpoints confirmés et la stack ;
  - la consigne « Avant toute action, lis docs/PROGRESS.md et docs/COMPORTEMENTS.md ».
- `docs/PROGRESS.md` : checklist complète (phases → pages → sections → largeurs). Statuts : `[ ]` à faire, `[~]` en cours, `[x]` validé avec le chemin de la preuve, `[KO]` avec le diagnostic.
- **`docs/COMPORTEMENTS.md`** : le registre contractuel de tous les comportements (Étape E).
- `docs/AUDIT.md` et `docs/audit/<page>.md` : résultats de l'audit.
- `docs/ANIMATIONS.md` : une ligne par animation, avec son fichier de courbe.
- `docs/WEBGL.md` : fiche technique de chaque composant WebGL.
- `docs/LINKS.md` : chaque lien de l'original (page, breakpoint, libellé, destination, statut : réel / placeholder / incohérent).
- `docs/DECISIONS.md`, `docs/LIMITATIONS.md`, `docs/REVUE-HUMAINE.md`.

---

## 4. Stack (par défaut — ne t'en écarte que pour une raison consignée dans `DECISIONS.md`)

- **Next.js (App Router) + TypeScript + React, en export statique** (`output: "export"`, `images.unoptimized: true`) :
  - une vraie route par page ;
  - projets et articles générés via `generateStaticParams` ;
  - métadonnées par page et page 404 native ;
  - déploiement sous forme de dossier statique.
- **`motion`** (motion.dev, successeur de Framer Motion) pour les animations. Framer repose sur ce moteur : les paramètres extraits de l'original (ressorts, durées, courbes) se réutilisent tels quels.
- **WebGL : portage des composants de l'auteur.**
  - Même technique que l'original : WebGL brut, OGL ou three.js, avec la même version majeure. Ne change jamais de bibliothèque.
  - Mêmes shaders, mêmes uniforms, mêmes valeurs de réglage que celles du site publié.
- **CSS Modules + variables CSS globales** pour les tokens : les valeurs du CSS Framer se transposent directement.
- **Composants interactifs écrits sur mesure** (préchargeur, sliders, accordéon, calculateur, formulaire conversationnel, lecteur vidéo) avec `motion`.
- **Défilement adouci, transitions entre pages et curseur personnalisé** : uniquement si l'audit prouve que l'original en a. Dans ce cas, utilise la même technique et les mêmes paramètres (ex. Lenis avec les mêmes `lerp` / `duration` si le bundle contient Lenis).
- **Projets et articles en Markdown** :
  - fichiers `content/projects/*.md` et `content/journal/*.md` ;
  - champs CMS dans le frontmatter, corps rendu au build avec une seule bibliothèque légère (ex. `marked`) ;
  - même structure de balises que l'original.
- **Outils de vérification** (devDependencies) : `playwright`, `pixelmatch`, `pngjs`, `sharp` ; `ffmpeg` pour les vidéos.

---

## 5. Arborescence

```text
framer-code/                      # fourni par le propriétaire : code source exporté du projet Framer (voir Étape 0)
reference/                        # tout ce qui vient de l'original (jamais modifié à la main)
  framer-project/                 # exports lus via le MCP Framer
  framer-code/                    # copie de framer-code/ + fichiers extraits des bundles
  har/                            # archive réseau complète de l'original (référence figée)
  html/ css/
  text.json                       # tous les textes visibles, par page, largeur et état
  dom/<page>/<largeur>.html
  geometry/<page>/<largeur>.json  # positions, styles calculés, retours à la ligne
  screenshots/<page>/<largeur>/   # pleine page, sections, séquence de défilement, états
  curves/<page>/<animation>.json  # courbes d'animation échantillonnées image par image
  frames/<page>/<animation>/      # images clés des animations
  webgl/<composant>/<scénario>/   # images WebGL déterministes + shaders extraits
  scenarios/<scénario>.json       # résultats des scénarios d'interaction sur l'original
  framer/                         # tokens.json, animations.json, js/ (modules téléchargés)
  sections.json                   # correspondance sections original ↔ clone
scripts/
  lib/harness.mjs                 # banc de mesure commun (section 6)
  lib/compare.mjs                 # comparaisons pixels, géométrie, styles, textes, lignes
content/projects/ content/journal/
public/assets/
  images/{hero,projects,journal,team,studio,clients,decor}/
  icons/ logos/ fonts/ videos/ textures/
  manifest.json
src/app/                          # routes (mêmes chemins que l'original)
src/components/                   # composants partagés
src/sections/                     # sections, par page
src/webgl/<composant>/            # composants WebGL portés + config des réglages
src/styles/                       # tokens.css, globals.css
src/data/                         # site.config.ts, pricing.ts, faq.ts, team.ts, testimonials.ts, awards.ts, content.ts
tests/
  functional/                     # tests du clone
  scenarios/                      # scénarios différentiels exécutés sur l'original ET le clone
compare/                          # images original | clone | diff, report.md, animations.md, webgl.md
docs/
```

---

## 6. Banc de mesure commun (`scripts/lib/harness.mjs`)

Toute capture passe par ce module, pour l'original comme pour le clone. Deux mesures ne sont comparables que si elles sont prises dans des conditions strictement identiques.

**Navigateur**
- Chromium de Playwright, mêmes options pour les deux cibles :
  - rendu WebGL logiciel identique : `--use-angle=swiftshader`, et `--enable-unsafe-swiftshader` si la version l'exige ;
  - `--force-color-profile=srgb`, `--hide-scrollbars`, `--font-render-hinting=none`.
- Contexte : `deviceScaleFactor: 1`, locale `en-US`, fuseau horaire fixe, `reducedMotion: 'no-preference'`, même hauteur de fenêtre (900 px par défaut).
- Émulation mobile (`isMobile`, `hasTouch`) pour les largeurs de téléphone et de tablette.

**Déterminisme**
- **Horloge** : `page.clock.install()` avant la navigation, `pauseAt` à un instant fixe, puis avancement explicite avec `runFor`. L'horloge de Playwright contrôle `Date`, `setTimeout`, `setInterval`, `requestAnimationFrame`, `requestIdleCallback` et `performance`.
- **Animations CSS et Web Animations** (non contrôlées par l'horloge) : les piloter via `document.getAnimations()` (`pause()`, puis `currentTime` réglé sur le même instant que l'horloge).
- **Aléatoire** : remplacer `Math.random` par un générateur à graine fixe, via `addInitScript`, des deux côtés.
- **Vidéos** : pause sur une image donnée (`currentTime` fixé), décodage attendu.
- **Médias** : attente de `document.fonts.ready` et de `img.decode()` pour toutes les images visibles.

**Réseau**
- Original :
  - rejoué depuis `reference/har/` avec `routeFromHAR` ;
  - les fichiers que l'archive rejoue mal (vidéos servies par plages, par exemple) sont servis depuis les assets locaux via `page.route` ;
  - toute requête absente de l'archive est journalisée, avec un objectif de zéro.
- Clone : servi depuis `out/` par un serveur statique local.
- Masquage sur l'original, par CSS injectée, des éléments hors périmètre : bandeau du template, badge Framer.

**Procédures**
- Fonction unique de stabilisation : préchargeur terminé, défilement complet par pas, retour en haut, animations d'apparition terminées.
- **Modes de capture** :
  - pleine page ;
  - par section ;
  - **séquence de défilement** : capture de la fenêtre tous les 25 % de sa hauteur ;
  - état après une action (survol, clic, saisie…) ;
  - **échantillonnage d'animation** : l'horloge avance image par image (16,67 ms) ; à chaque image, enregistrement des styles calculés des éléments animés (`transform`, `opacity`, `clip-path`, `filter`, couleurs, dimensions) et, aux instants clés, d'une capture.

**Contrôle du banc lui-même** (Phase 0) : deux captures successives de la même page de l'original doivent être identiques (moins de 0,1 % de pixels différents). Sinon, corrige le banc avant d'aller plus loin. Un banc non déterministe rend toutes les comparaisons fausses.

---

## Phase 0 — Mise en place et vérification des entrées

1. Initialise le projet Next.js (dernière version stable), installe `motion` et les outils de vérification, puis lance `npx playwright install chromium`.
2. Lance `git init`. Ignore `reference/har/`, `reference/screenshots/`, `reference/frames/`, les vidéos et les PNG de `compare/`. Garde les rapports.
3. Consigne dans `DECISIONS.md` les versions de Node, Next.js, motion, Playwright et Chromium.
4. Vérifie les entrées fournies par le propriétaire :
   - des outils MCP Framer sont-ils disponibles ?
   - le dossier `framer-code/` existe-t-il ? Si oui, copie-le dans `reference/framer-code/`.

   Consigne ce qui est présent ou absent. L'absence n'est pas bloquante, mais elle augmente l'effort de l'Étape G.
5. Crée les fichiers de pilotage de la section 3. Remplis `PROGRESS.md` avec toutes les étapes de ce document.
6. Ajoute les scripts npm : `extract`, `assets`, `shots:ref`, `shots:clone`, `compare`, `curves`, `webgl:compare`, `test:e2e`, `test:diff`, `check:launch`.
7. Écris le banc de mesure (section 6) et réussis son contrôle de déterminisme sur l'accueil de l'original.

---

## Phase 1 — Capture et gel de la référence

Chaque étape produit des fichiers. Écris les scripts dans `scripts/` pour pouvoir les relancer. Si tu disposes de sous-agents, confie l'audit de chaque page à un sous-agent qui écrit dans `docs/audit/<page>.md`, pour économiser ton propre contexte.

### Étape 0 — Projet Framer remixé et code source (sources prioritaires)

Le propriétaire de ce projet détient la licence du template et l'a remixé dans son compte Framer.

- **Via le MCP Framer**, en lecture seule, exporte dans `reference/framer-project/` :
  - pages, breakpoints et largeurs ;
  - styles de couleur et de texte ;
  - composants et **toutes leurs variantes** (dont les états du formulaire et des boutons) ;
  - les 5 collections CMS complètes ;
  - les **valeurs de réglage des composants de code** telles qu'utilisées sur chaque page : transition choisie pour le slider et ses curseurs, paramètres de la vitrine, de la 404 et du préchargeur ;
  - le guide d'utilisation et la page de design system s'ils sont lisibles.
- **Code source** : le dossier `framer-code/` fourni par le propriétaire contient les fichiers de code du projet. C'est la source de vérité pour les composants WebGL, le préchargeur et tout autre composant de code. Si un composant est importé depuis une URL externe, note cette URL.
- Le MCP ne documente pas l'accès aux animations ni aux propriétés fines des calques. Ce qu'il ne fournit pas s'extrait du site publié aux étapes suivantes.
- **En cas d'écart entre le projet remixé et le site publié, le site publié fait foi** : note l'écart dans `LIMITATIONS.md`.

### Étape A — Archive de référence (gel)

- Télécharge avec `curl -L` le HTML brut de chaque route du paragraphe 1.2, plus une URL inexistante. Récupère aussi `sitemap.xml`, `robots.txt`, les favicons et l'image Open Graph de chaque page.
- Parcours tout le site avec le banc, pour toutes les largeurs des listes A et B (Phase 7) et tous les scénarios d'interaction de l'Étape E, avec `routeFromHAR(..., { update: true })`. Cette passe construit une archive unique et complète dans `reference/har/`.
- Rejoue ensuite tout le parcours hors ligne depuis l'archive. Le nombre de requêtes manquantes doit être nul.

### Étape B — Textes

- Télécharge l'index de recherche de chaque page (`<meta name="framer-search-index" …>` → `framerusercontent.com/sites/…/searchIndex-*.json`).
- Construis `reference/text.json` : pour chaque page, chaque largeur et chaque état d'interaction, la liste ordonnée des textes visibles (espaces normalisés). Cela inclut les textes révélés par interaction : diapositives, réponses de FAQ, états des tarifs, messages de formulaire.
- Ce fichier sert à la vérification automatique des textes du clone.

### Étape C — Tokens, typographies et polices

- Toutes les variables CSS (couleurs `--token-*`, etc.) → `reference/framer/tokens.json`, puis `src/styles/tokens.css`.
- Toutes les `@media` → breakpoints confirmés. Si le paragraphe 1.3 de ce fichier se trompe, corrige-le ainsi que `CLAUDE.md`.
- Tous les `@font-face` (famille, graisse, style, URL, `font-display`, `unicode-range`) : télécharge chaque fichier dans `public/assets/fonts/` et auto-héberge-les.
- **Licence de chaque police** : identifie sa fonderie.
  - Google Fonts : licence OFL ;
  - Fontshare : licence ITF Free Font ;
  - autre : licence d'auto-hébergement non confirmée, à faire signaler par `check:launch`.
- Styles de texte par breakpoint : famille, graisse, taille, interligne, espacement des lettres, casse, `font-feature-settings`, `font-variation-settings`, lissage.

### Étape D — DOM rendu, géométrie et retours à la ligne

Pour chaque page et chaque largeur des listes A et B, avec le banc :
1. Stabilise la page et enregistre le DOM rendu.
2. Exporte en JSON chaque élément visible qui porte du texte, une image, une vidéo, un canvas, un `data-framer-name`, un lien ou un bouton, avec :
   - son sélecteur, son `data-framer-name` et son texte (tronqué) ;
   - son `getBoundingClientRect()` en coordonnées de page ;
   - ses styles calculés : polices, couleurs, fonds, bordures, rayons, ombres, `filter`, `backdrop-filter`, `mix-blend-mode`, `clip-path`, `mask`, padding, gap, opacité, transform, `object-fit`, `object-position`, position, z-index.
3. Pour chaque bloc de texte, relève les **retours à la ligne** : le premier mot de chaque ligne, obtenu via `Range.getClientRects()`.
4. Capture la page entière, chaque section et la séquence de défilement dans `reference/screenshots/`.

### Étape E — Registre des comportements (`docs/COMPORTEMENTS.md`)

Explore chaque page à chaque largeur de la liste A, en interagissant avec **chaque** élément.

**Format du registre.** Chaque comportement observé devient une ligne numérotée (`C-001`, `C-002`…) avec :
- page, élément et largeurs concernées ;
- déclencheur et résultat exact ;
- source de la mesure ;
- preuve attendue (comparaison, courbe, images WebGL, scénario différentiel) ;
- statut.

**Liste minimale à couvrir.** Tout ce que tu observes en plus s'y ajoute.
- **Préchargeur** : progression du compteur (linéaire ou non, valeurs affichées), durée, forme et animation de la révélation à travers le logo, règle d'affichage (première visite, chaque page, après rechargement, nouvel onglet), stockage éventuel.
- **Global** :
  - header au défilement, menu mobile, états actifs, badge « 6 » ;
  - transitions entre pages ;
  - défilement adouci : cherche `lenis` et `smooth` dans les bundles ;
  - curseur personnalisé.
- **Slider du hero** :
  - ordre des diapositives, défilement automatique et son intervalle ;
  - transition utilisée et ses paramètres ;
  - commandes : clic, glisser, flèches, clavier, molette, toucher ;
  - indicateur de progression, liens, boucle ;
  - comportement en arrière-plan d'onglet et à la sortie de la vue.
- **Vitrine incurvée** :
  - emplacement ;
  - entrées : défilement, glisser, molette, pointeur ;
  - inertie, survol (titre affiché), clic vers le projet, comportement mobile.
- **Animations d'apparition** de chaque titre, texte, image, carte et liste : découpage par mot, par ligne ou par lettre ; masques ; ordre.
- **Graphique « Why us »** : animation des barres. **Compteurs** : valeurs finales, format, relecture ou non.
- **Cartes de services, équipe, étapes, prix, clients, journal** : survols et éventuels déplacements. Pour la liste du journal, vérifie s'il y a un aperçu d'image au survol.
- **Vidéos** : Reel, « Play Film », vidéos de l'About. Pour chacune : lecture sur place ou fenêtre, commandes, fermeture (Échap, clic extérieur), son, boucle.
- **Slider de témoignages** : navigation, défilement automatique, contenu complet de chaque diapositive, compteur « 01 / 03 ».
- **Tarifs** :
  - onglets Monthly / Per Project et options cochables ;
  - **total affiché pour chacune des 32 combinaisons** (2 modes × 16 combinaisons d'options) ;
  - format des montants, animation du changement de nombre.
- **FAQ** : réponses exactes, règle d'ouverture, question ouverte par défaut, icône et son animation.
- **Formulaire conversationnel et newsletter** :
  - types de champs, largeur qui s'adapte à la saisie, liste déroulante (native ou personnalisée) ;
  - focus, validation, messages d'erreur ;
  - états de chargement, de succès et d'erreur (lus dans le projet Framer ou le code).
- **Pages d'article et de projet** : bouton « Share » (API de partage, copie du lien, menu ?), « Back to », « More articles » / « More projects ».
- **404** : animation au repos, réaction au pointeur, réaction au toucher sur mobile.
- **Survols** : pour chaque élément interactif, capture avant/après `hover()`, styles modifiés, durée et courbe de transition.
- **Liens** : tous recensés dans `docs/LINKS.md`, avec leur cible (`_blank` ou non).

### Étape F — Animations (mesure image par image)

Pour chaque animation du registre, combine trois sources, consignées dans `reference/framer/animations.json` :
1. **Le code source** (`reference/framer-code/`), quand l'animation vient d'un composant de code.
2. **Les paramètres de Framer.** Les éléments animés à l'apparition portent `data-framer-appear-id` ; leurs paramètres se trouvent dans le JSON intégré au HTML et dans les modules JS (`framerusercontent.com/sites/…/*.mjs`). Télécharge ces modules dans `reference/framer/js/` et cherche avec `rg` : `framer/appear`, `appear-id`, `__framer__`, `whileHover`, `whileInView`, `transition`, `stiffness`, `damping`, `mass`, `duration`, `delay`, `ease`, `repeat`, `stagger`, `lenis`, `cursor`.
3. **La mesure.** Avec le banc, déclenche l'animation, puis avance l'horloge image par image jusqu'à sa fin. Enregistre :
   - la courbe de chaque propriété animée dans `reference/curves/<page>/<animation>.json` ;
   - des captures toutes les 50 ms dans `reference/frames/`.

Résultat dans `docs/ANIMATIONS.md`, une ligne par animation avec ces colonnes :
- identifiant du registre, élément, page ;
- déclencheur ;
- propriétés de départ → d'arrivée ;
- type (ressort : stiffness/damping/mass, ou durée + courbe) ;
- délai et décalage entre éléments ;
- relecture ou non ;
- sources et fichier de courbe.

### Étape G — WebGL

Pour chacun des 3 composants, et pour tout autre `<canvas>` trouvé :
1. **Source.**
   - D'abord `reference/framer-code/`.
   - À défaut, extrais le code des bundles : cherche `precision highp`, `precision mediump`, `gl_FragColor`, `gl_Position`, `void main`, `uniform`, `createShader`, `THREE`, `ogl`. Enregistre les shaders dans `reference/webgl/<composant>/shaders/`.
2. **Fiche technique** dans `docs/WEBGL.md` :
   - bibliothèque et version ;
   - gestion de la taille et de la densité de pixels ;
   - géométrie (subdivisions, courbure) ;
   - shaders ;
   - chaque uniform et sa source (temps, défilement, pointeur, progression, textures) ;
   - textures (fichiers, tailles, filtrage) ;
   - boucle de rendu et pause hors de la vue ;
   - comportement sur mobile ;
   - solution de secours sans WebGL ;
   - valeurs de réglage utilisées sur le site.
3. **Images de référence déterministes** avec le banc, dans `reference/webgl/<composant>/<scénario>/` :
   - slider : repos à 0 s, 0,5 s, 1 s, 2 s, 4 s ; chaque transition en 12 étapes ;
   - vitrine : positions de défilement et de glisser fixées ;
   - 404 : repos, puis une **trajectoire de pointeur scriptée** (mêmes coordonnées, même minutage) ;
   - à chaque largeur de la liste A.

### Étape H — Assets

- Collecte toutes les URL `framerusercontent.com` : HTML, DOM rendus, CSS (`url(…)`), `srcset`, vidéos, polices, textures WebGL, exports de l'Étape 0.
- Retire les paramètres de requête (`?width=`, `?scale-down-to=`…) pour obtenir les originaux en pleine résolution.
- Télécharge chaque fichier une seule fois sous un nom explicite (ex. `projects/puma-hero.jpg`) et renseigne `public/assets/manifest.json` : URL d'origine, chemin local, dimensions, poids, durée des vidéos, usages.
- Récupère le logo en SVG si possible : il sert de masque au préchargeur.
- Le site final ne doit appeler **aucun** domaine Framer.

### Étape I — Données

À partir des Étapes 0, B et E, identifie les 5 collections CMS, puis construis :
- `content/projects/*.md` et `content/journal/*.md` ;
- dans `src/data/` : `pricing.ts` (modes, base, options, règles de calcul), `faq.ts`, `team.ts`, `testimonials.ts`, `awards.ts`, `content.ts` (tous les autres textes) et `site.config.ts` (liens, coordonnées) ;
- les textes alternatifs de l'original avec chaque image.

Aucun texte affiché ne doit être écrit en dur dans un composant. Marque chaque contenu de démonstration avec `demo: true` pour `check:launch`.

### Étape J — Synthèse

Rédige `docs/AUDIT.md` : pages, sections dans l'ordre, composants partagés, tokens, typographies par breakpoint, grilles et largeurs max, préchargeur, WebGL, interactions, animations, liens, assets manquants. Vérifie que **chaque** élément interactif et animé de chaque page figure dans `COMPORTEMENTS.md`. Mets `PROGRESS.md` à jour et passe à la Phase 2 sans attendre.

---

## Phase 2 — Fondations

1. `tokens.css` (couleurs, typographies, rayons, ombres, espacements récurrents) et `globals.css` (reset aligné sur le rendu Framer, polices auto-hébergées avec le même `font-display` que l'original).
2. Breakpoints confirmés en constantes partagées entre CSS et TypeScript.
3. `site.config.ts` : valeurs de l'original par défaut, placeholders marqués `// TODO: remplacer`.
4. Branche le clone sur le banc et réussis son contrôle de déterminisme.
5. Préchargeur, Header, Footer et Newsletter, validés aux 4 largeurs de la liste A (pixels, géométrie, textes, lignes, courbes) avant d'aller plus loin.

---

## Phase 3 — Intégration, page par page, section par section

Ordre : Accueil → Projects (liste puis projet) → Studio → Journal (liste puis article) → Contact → Pages légales → 404.

Pour **chaque section**, applique cette boucle :
1. Relis la section dans `docs/audit/<page>.md`, `reference/geometry/` et le registre.
2. Implémente-la, avec `data-section="<page>-<section>"` sur son conteneur.
3. Compare-la aux 4 largeurs de la liste A (Phase 8) : pixels, géométrie, styles, textes, retours à la ligne.
4. Ouvre les images comparatives, corrige, recommence jusqu'aux seuils de la section 0 (au plus 6 cycles, règle 13).
5. Coche la section dans `PROGRESS.md` avec ses preuves, puis fais un commit.

Respecte strictement :
- l'ordre des sections ;
- les textes exacts (ponctuation, majuscules, symboles ® et ©, retours à la ligne) ;
- les images exactes et leurs recadrages ;
- la structure propre à chaque breakpoint : une section peut changer de composition, pas seulement de taille.

---

## Phase 4 — Interactions

Implémente chaque ligne d'interaction du registre, chacune couverte par un test (Phase 9) :
- **Préchargeur** : même progression, même durée, même révélation, même règle d'affichage.
- **Sliders** (hero, témoignages) : mêmes commandes, même défilement automatique, même ordre, même boucle, mêmes indicateurs.
- **Vitrine** : mêmes entrées, même inertie, mêmes survols et clics.
- **Tarifs** : même règle de calcul, mêmes 32 totaux, même format, même animation des nombres.
- **FAQ** : boutons accessibles (`aria-expanded`, `aria-controls`), même règle d'ouverture, mêmes animations.
- **Vidéos** : mêmes modes de lecture, mêmes commandes, fermeture identique.
- **Formulaire conversationnel et newsletter** :
  - mêmes champs, phrases, ordre, types et options ;
  - même adaptation de largeur, même liste déroulante ;
  - même validation, mêmes états (chargement, succès, erreur) avec les styles de l'original ;
  - l'envoi passe par une fonction unique `submitForm()` qui utilise `NEXT_PUBLIC_FORM_ENDPOINT` si la variable existe, sinon simule une réussite après un court délai ;
  - n'envoie jamais rien vers les services Framer.
- **« Share »**, **menu mobile**, **curseur personnalisé**, **défilement adouci**, **transitions entre pages** : à l'identique s'ils existent.
- **Survols et liens externes** : à l'identique, y compris `target="_blank"` et `rel="noopener"` quand l'original ouvre un nouvel onglet.

---

## Phase 5 — Animations

- Implémente chaque ligne de `docs/ANIMATIONS.md` avec `motion` (ou avec le code porté de l'auteur pour les composants de code), en reprenant les paramètres exacts.
- **Validation par les courbes** : `scripts/compare-curves.mjs` déclenche la même animation sur l'original et sur le clone avec le banc, échantillonne aux mêmes instants et compare :
  - instant de début et de fin (± 1 image) ;
  - écart maximal de chaque propriété (≤ 3 % de l'amplitude) ;
  - ordre et décalages entre éléments.
- Génère aussi des planches original | clone aux instants clés.
- Résultat dans `compare/animations.md`, une ligne par animation, statut OK/KO.
- Respecte `prefers-reduced-motion` comme l'original. Si l'original l'ignore, applique un minimum : contenus visibles immédiatement, compteurs à leur valeur finale, boucles figées. Consigne ce choix sans modifier l'expérience normale.

---

## Phase 6 — WebGL

1. Porte chaque composant dans `src/webgl/<composant>/` à partir du code source :
   - retire uniquement les dépendances au runtime Framer (`framer`, `addPropertyControls`, `RenderTarget`…) ;
   - fige les valeurs de réglage utilisées sur le site dans `config.ts` ;
   - si le composant propose plusieurs options (ex. les 10 transitions du slider), porte-les toutes, puisque c'est un portage et non une réécriture. Seule la configuration utilisée sur le site doit être validée visuellement.
2. Garde la même bibliothèque, les mêmes shaders, la même géométrie, les mêmes textures, la même gestion de la densité de pixels et du redimensionnement, la même pause hors de la vue.
3. Solution de secours identique à l'original sans WebGL ; à défaut, la première image du rendu, figée.
4. **Validation** : `scripts/compare-webgl.mjs` rejoue les scénarios de l'Étape G sur le clone et compare chaque image (≤ 3 % de pixels différents). Résultat dans `compare/webgl.md`.

---

## Phase 7 — Responsive

- **Liste A — référence, comparaison stricte** : 1440, 1200, 810, 390. Ajoute toute largeur de conception révélée par l'audit.
- **Liste B — contrôle** : 1920, 1280, 1024, 768, 430, 375, 360.
- **Liste C — limites des breakpoints** : chaque seuil confirmé, la largeur juste en dessous et la largeur juste au-dessus.

À chaque largeur :
- même layout que l'original et même comportement de tous les composants, WebGL compris ;
- aucun débordement horizontal (`document.documentElement.scrollWidth <= window.innerWidth`), sauf si l'original déborde aussi.

Vérifie aussi le comportement au-delà de 1440 px : contenu centré avec largeur max, ou étiré ?

---

## Phase 8 — Vérification visuelle (obligatoire)

`scripts/compare.mjs`, entièrement via le banc :
1. **Pleine page et par section** aux largeurs de la liste A. Correspondance des sections : `data-section` côté clone, `data-framer-name` ou repère textuel côté original, stockée dans `reference/sections.json`.
2. **Séquence de défilement** : mêmes positions sur les deux sites, pour détecter les effets liés au défilement (parallaxe, éléments collants, apparitions).
3. **États** :
   - préchargeur à 0 %, 50 %, 100 % ;
   - menu ouvert ;
   - survol de chaque élément interactif ;
   - chaque diapositive ;
   - chaque mode de tarif avec options ;
   - FAQ ouverte ;
   - erreurs de formulaire ;
   - fenêtres vidéo.
4. **Masque** les zones en mouvement continu dans les captures statiques ; elles sont validées par les courbes et les images WebGL.
5. Pixels avec `pixelmatch` (threshold 0.1), géométrie, styles calculés, textes (contre `reference/text.json`) et retours à la ligne.
6. Image `original | clone | diff` pour chaque cas dans `compare/<page>/<largeur>/`.
7. `compare/report.md` : un tableau par page, avec par largeur et par section le % de pixels, l'écart de hauteur, les écarts de géométrie, de style, de texte et de lignes, et le statut OK/KO.

Pour les projets et les articles, compare une page de chaque type aux 4 largeurs, puis toutes les autres à 1440 et 390.

---

## Phase 9 — Tests fonctionnels et différentiels

**Tests différentiels** (`tests/scenarios/`) : chaque scénario s'exécute sur l'original (archive rejouée) **et** sur le clone, avec le banc. Ses résultats doivent être identiques : valeurs, textes, URL, styles, captures. Au minimum :
- les 32 totaux du calculateur de prix ;
- l'ordre et le contenu des diapositives (hero, témoignages) après chaque commande ;
- les réponses de la FAQ et la règle d'ouverture ;
- les messages de validation des formulaires (cas vides et invalides uniquement côté original) ;
- les cibles de tous les liens ;
- les valeurs finales des compteurs ;
- le minutage du préchargeur ;
- les styles après survol de chaque élément interactif ;
- les réactions de la vitrine et de la 404 à des trajectoires de pointeur scriptées.

**Tests fonctionnels du clone** (`tests/functional/`) :
- **Navigation** : toutes les routes, liens « More projects » / « More articles », 404 sur une URL inconnue.
- **Formulaires** : chargement, succès et erreur (simulés).
- **Médias** : vidéos et fenêtres.
- **Partage** : bouton « Share ».
- **Hygiène** : aucune erreur console, aucune requête en échec, aucun appel à un domaine Framer.
- **Responsive** : aucun débordement horizontal aux largeurs des listes A, B et C.
- **Accessibilité** : navigation complète au clavier, focus visible.

---

## Phase 10 — Revue indépendante et reprise des écarts

1. **Revue à froid.** Si tu disposes de sous-agents, confie à un sous-agent qui n'a pas construit les pages les images de `compare/` et de `reference/frames/`. Sa consigne : lister **chaque** différence visible (mise en page, typographie, couleur, recadrage, mouvement, minutage), avec son emplacement, sans lire le code. Corrige, puis relance jusqu'à ce qu'il ne trouve plus rien qui ne soit déjà documenté. Sans sous-agent, fais cette revue toi-même, page par page, en ne regardant que les images.
2. Reprends chaque section et chaque comportement marqués `KO`.
3. Vérifie que `COMPORTEMENTS.md` est coché à 100 %, chaque ligne avec sa preuve.
4. Rédige `docs/REVUE-HUMAINE.md` : la liste de ce que le propriétaire doit vérifier lui-même, avec pour chaque point :
   - la commande pour ouvrir l'original et le clone côte à côte ;
   - le comportement attendu.

   Cela couvre notamment : la sensation du slider et de la vitrine, le préchargeur, le défilement, les survols, la 404, le mobile au toucher.

---

## Phase 11 — Qualité et préparation à la mise en ligne

- **Sémantique** : HTML sémantique, un H1 par page, hiérarchie de titres correcte.
- **Textes alternatifs** : repris de l'original. Pour les images sans texte alternatif, écris un texte factuel si l'image porte du sens, `alt=""` si elle est décorative.
- **Métadonnées** : title, description et Open Graph repris de chaque page.
- **Médias** : formats modernes en plusieurs tailles, dimensions explicites, chargement différé hors écran, vidéos avec `poster`. La qualité d'encodage doit rester assez haute pour respecter les seuils de la section 0.
- **Performance** : scores Lighthouse du clone au moins égaux à ceux de l'original (performance, accessibilité, SEO), mesurés dans les mêmes conditions sur l'accueil, en desktop et en mobile.
- **Script `check:launch`** (`scripts/check-launch.mjs`) : il liste tout ce qui ne doit pas être publié tel quel, et échoue tant qu'il en reste :
  - tout contenu marqué `demo: true` ;
  - les noms de marques réelles des études de cas et leurs citations ;
  - les prix et récompenses fictifs ;
  - les statistiques ;
  - l'équipe ;
  - les coordonnées et l'adresse ;
  - `launchnow.design` ;
  - les réseaux sociaux vides ;
  - les polices à la licence non confirmée ;
  - les pages légales qui décrivent des fonctions absentes, comme la bannière cookies.
- **Rebranding** : textes, contenus, coordonnées et couleurs uniquement dans `content/`, `src/data/` et `tokens.css`.
- **Build** : aucune dépendance inutile ; `npm run build` sans erreur.

---

## 7. Cadre d'utilisation

Le template est un produit payant de Joseph Alexander. Le propriétaire de ce projet en a acheté la licence **Single-Use** du Framer Marketplace :
- **Autorisé** : modifier le contenu et l'utiliser à des fins commerciales, pour **un seul** site final.
- **Interdit** :
  - le revendre, le redistribuer ou le partager ;
  - s'en servir pour créer des templates concurrents ;
  - l'utiliser pour un second projet ;
  - retirer ou modifier les mentions de propriété.

En conséquence :
- le code porté des composants de l'auteur reste dans ce seul projet ;
- cite le template et son auteur dans le `README.md` ;
- conserve toute mention d'auteur que l'audit trouverait sur le site ;
- ne publie pas ce code sous forme de template, de dépôt public ou de kit réutilisable.

**Contenu de démonstration.** Le template attribue des études de cas, des chiffres et des citations inventés à de vraies marques. Il affiche aussi des prix, une équipe et une adresse fictifs. Ce contenu sert uniquement à valider la fidélité en local. Le site ne sera mis en ligne qu'une fois ce contenu remplacé par de vrais projets, de vrais témoignages et de vraies informations, ou retiré : c'est le rôle de `check:launch`.

---

## 8. Livrables

- Projet exécutable : `npm install`, `npm run dev`, `npm run build` (sortie statique dans `out/`).
- `README.md` :
  - installation, lancement, scripts de vérification ;
  - configuration (`site.config.ts`, `NEXT_PUBLIC_FORM_ENDPOINT`) ;
  - ajout d'un projet ou d'un article ;
  - réglages des composants WebGL ;
  - source du template et licence ;
  - avertissement sur le contenu de démonstration.
- `docs/RAPPORT.md` :
  1. Pages reproduites, avec liens vers leurs comparaisons.
  2. Stack, raison de chaque choix, dépendances et versions.
  3. Ce qui vient du code source, du projet Framer et du site publié.
  4. Bilan du registre `COMPORTEMENTS.md` : total, prouvés, KO (avec diagnostic).
  5. Bilan des animations (`compare/animations.md`) et du WebGL (`compare/webgl.md`).
  6. Résultats des tests fonctionnels et différentiels.
  7. Résumé chiffré de `compare/report.md`.
  8. Différences restantes, avec images.
  9. Fonctionnalités nécessitant un service externe (envoi des formulaires).
  10. Sortie de `check:launch`.
  11. Limitations rencontrées.
- `docs/REVUE-HUMAINE.md`.

---

## 9. Critères d'acceptation (mesurables)

La mission n'est terminée que si **toutes** ces cases sont cochées :

- [ ] Toutes les routes du paragraphe 1.2 existent (6 projets, 8 articles, 3 pages légales et la 404 compris), avec toutes leurs sections, dans l'ordre.
- [ ] **`docs/COMPORTEMENTS.md` est coché à 100 %**, chaque ligne avec une preuve qui respecte les seuils de la section 0.
- [ ] Aux largeurs de la liste A, pour chaque section : pixels ≤ 2 %, écart de hauteur ≤ 2 px, géométrie ≤ 2 px, typographie et couleurs identiques.
- [ ] Textes identiques à `reference/text.json` et retours à la ligne identiques, à chaque largeur et dans chaque état.
- [ ] Hauteur de chaque page à ± 0,5 % de l'original aux largeurs de la liste A.
- [ ] Listes B et C : même layout que l'original, aucun débordement horizontal.
- [ ] Chaque animation de `ANIMATIONS.md` validée par les courbes (± 1 image, ≤ 3 % d'écart) dans `compare/animations.md`.
- [ ] Chaque scénario WebGL validé (≤ 3 % par image) dans `compare/webgl.md`.
- [ ] Tous les tests différentiels et fonctionnels passent ; aucune erreur console ; aucun appel à un domaine Framer.
- [ ] La revue indépendante ne signale plus aucune différence non documentée.
- [ ] Scores Lighthouse au moins égaux à ceux de l'original.
- [ ] `npm run build` réussit ; `npm run check:launch` existe et liste correctement tout le contenu à remplacer.
- [ ] `docs/RAPPORT.md` est complet et chaque affirmation renvoie à une preuve.

Un critère non atteint ne se coche pas. Il est expliqué dans `docs/LIMITATIONS.md` et dans le rapport, avec ses tentatives de résolution, et la mission est déclarée **incomplète**, jamais terminée.

---

## 10. Démarrage

Relis l'exigence absolue en tête de ce fichier. Commence par la Phase 0, puis enchaîne les phases dans l'ordre. Après chaque phase, mets à jour `docs/PROGRESS.md` et `docs/COMPORTEMENTS.md`, fais un commit, et continue sans attendre de validation.
