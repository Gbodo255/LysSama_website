# Avancement

Statuts : `[ ]` à faire · `[~]` en cours · `[x]` validé (chemin de la preuve) · `[KO]` diagnostic.
Reprise après interruption : relire `MISSION.md`, ce fichier, puis `docs/COMPORTEMENTS.md`.

## Phase 0 — Mise en place
- [x] 0.1 Projet Next.js + motion + outils de vérification + Chromium Playwright — `package.json`, D-001, D-003
- [x] 0.2 git init + .gitignore
- [x] 0.3 Versions consignées — `docs/DECISIONS.md` D-001
- [x] 0.4 Entrées du propriétaire vérifiées : MCP Framer absent, `framer-code/` absent — D-002
- [x] 0.5 Fichiers de pilotage créés
- [~] 0.6 Scripts npm (déclarés dans package.json ; implémentés au fil des phases)
- [x] 0.7 Banc de mesure + contrôle de déterminisme sur l'accueil de l'original : 2 passes, 26 images, pire écart 0 % — `reference/selftest-ref.json`

## Phase 1 — Capture et gel de la référence
- [~] Étape 0 — Projet Framer / code source : indisponibles (D-002) ; modules compilés téléchargés `reference/framer/js/` (57)
- [~] Étape A — HTML brut des 22 routes + 404 + sitemap/robots — `reference/html/` ; archive réseau complète — `reference/har/`
- [ ] Étape A — rejeu hors ligne complet, 0 requête manquante
- [ ] Étape B — textes `reference/text.json` (produit par l'extraction liste A/B)
- [ ] Étape C — tokens, @media, @font-face, licences de polices, styles de texte
- [~] Étape D — DOM rendu, géométrie, retours à la ligne, captures : liste A en cours (`reference/extract-A.log`), liste B à faire
- [~] Étape E — registre fusionné : 197 lignes (`node scripts/merge-registers.mjs`, sources `docs/audit/*.comportements.md`) ; manquent les géométries 810 de l'accueil et les survols non mesurés (voir `docs/requests/`)
- [~] Étape F — 150 animations relevées dans le code (`docs/ANIMATIONS.md`) ; courbes à mesurer avec le banc corrigé (D-021)
- [~] Étape G — fiches et shaders faits (`docs/WEBGL.md`, `reference/webgl/*/shaders/`) ; images de référence déterministes à produire
- [ ] Étape H — assets + `public/assets/manifest.json`
- [~] Étape I — `src/data/{homea,homeb,projects,studio,journal,contact,global}.ts`, `content/{projects,journal,legal}/*.md` ; à regrouper en pricing/faq/team/testimonials/awards/content/site.config
- [x] Étape J — synthèse `docs/AUDIT.md`

## Phase 2 — Fondations
- [x] tokens.css / globals.css / polices / presets par breakpoint (D-031)
- [x] breakpoints partagés : `src/lib/breakpoints.ts`, `Variants`/`HideOn` (D-030)
- [ ] site.config.ts
- [ ] banc branché sur le clone + déterminisme
- [ ] Préchargeur — 1440 / 1200 / 810 / 390
- [~] Header (navigation latérale) — état fermé validé 1440/1200/810/390 : 0 manquant, 0 géométrie, 0 style, 0 texte (`compare/privacy-policy/<w>-Shared_Navigation.json`) ; ouverture/survols : courbes à mesurer (Phase 4-5)
- [~] Footer + Newsletter — statique validé 1440/1200/810/390 : 0 écart (`compare/privacy-policy/<w>-Footer.json`) ; états du formulaire et survols : Phase 4-5

## Phase 3 — Pages (sections listées après l'audit ; chaque section × 1440/1200/810/390)
- [~] `/` accueil — 1440 : 2331/2331 éléments, 0 manquant/en trop/géométrie/style/texte, hauteur 0 % ; restent pixels (section Process, 17 plans) et les 3 autres largeurs
- [~] `/projects` — construit (vitrine incurvée portée, Lenis horizontal) ; référence de l'original non capturée (onglet planté), à refaire
- [~] `/projects/gucci` · `chanel` · `puma` · `adidas` · `nike` · `under-armour` — 1440 : gucci, chanel, puma 0 écart (pixels ≤ 1,31 %) ; adidas, nike, under-armour à remesurer après D-037/D-038 ; 1200/810/390 à valider ; pixels gucci/puma jusqu'à 27 %
- [~] `/studio` — 0 manquant/en trop/géométrie/style/texte, hauteur 0 % aux 4 largeurs ; pixels ≤ 0,53 % à 1440/810/390 ; 1200 : capture d'écran impossible côté banc (« Unable to capture screenshot »), à refaire. Compteurs portés à l'identique (D-027), effets de défilement (hero, parallaxe) désactivés hors desktop comme l'original
- [x] `/journal` — 0 écart structurel, hauteur 0 %, pixels ≤ 0,54 % aux 4 largeurs (`compare/journal/<w>.json`)
- [~] `/journal/<8 articles>` — 0 manquant/en trop/géométrie/style/texte et hauteur 0 % aux 4 largeurs pour les 8 ; pixels ≤ 1,7 % à 1440/1200/810, 2,3–3,6 % sur 2–4 plans à 390 (apparition du corps encore en cours dans l'original à l'instant de capture : minutage, Phase 5)
- [x] `/contact` — 0 écart structurel/style/texte, hauteur 0 %, pixels ≤ 0,54 % aux 4 largeurs (`compare/contact/<w>.json`) ; formulaire (FormFx, D-023), FAQ (VRoot clic), boucles des créneaux (mécanique du runtime) ; états Loading/Success non déclenchables sur l'original
- [x] `/privacy-policy` · `/terms-conditions` · `/cookie-policy` — statique + apparitions : 0 manquant, 0 en trop, 0 géométrie, 0 style, 0 texte, hauteur 0 %, pixels ≤ 1,04 % aux 4 largeurs (`compare/<slug>/<w>.json`, D-033) ; survol du lien du corps : Phase 4
- [~] 404 — 1440 : 0 écart (COMPARAISON OK) ; 3 autres largeurs à valider

## Phase 4 — Interactions (lignes du registre)
- [x] Lightbox des pages projet et de /studio — relevé original/clone image par image (D-039)
- [~] Fenêtres vidéo YouTube (Play Reel, Play Film) — construites, mesure de l'original à faire
- [x] FAQ, formulaires (contact, newsletter), calculateur Pricing, compteurs, boucles — construits (D-035, D-038)
## Phase 5 — Animations (`compare/animations.md`)
## Phase 6 — WebGL (`compare/webgl.md`)
## Phase 7 — Responsive (listes A, B, C)
## Phase 8 — Vérification visuelle (`compare/report.md`)
## Phase 9 — Tests fonctionnels et différentiels
## Phase 10 — Revue indépendante
## Phase 11 — Qualité, `check:launch`, RAPPORT.md

## Point d'avancement (2026-11-21, session 4) — à lire en premier
**Fait et commité** (dernier commit sur `main`) : toutes les pages sont construites par génération outillée (D-033) et
comparées au même banc. Validées 0 écart aux 4 largeurs : pages légales, `/journal`, `/contact`, `/studio` (pixels 1200
non capturés). Structure identique aux 4 largeurs : 8 articles. Validées à 1440 seulement : accueil (structure), 404,
gucci, chanel, puma. Composants de code de l'auteur portés tels quels : préchargeur, diaporama WebGL, vitrine `/projects`,
texte 3D 404, Video Mirror, Revelo (GSAP 3.13.0), compteurs ; Lenis ; moteur générique d'effets et de variantes
(`src/components/fx/*`, extraits automatiquement du code compilé : `scripts/extract-fx.mjs`, `extract-components.mjs`).

**Comment voir le rendu** : `npx next build` puis `node scripts/serve-out.mjs --port=4173` → http://127.0.0.1:4173.
**Cycle de travail rapide** : `bash scripts/agents/main/cycle.sh "<routes>" <largeurs>` (régénère, construit, mesure, compare).

**Reste à faire, dans l'ordre** :
1. ~~Lightbox~~ fait (D-039). Les 6 pages projet sont à 0 écart à 1440.
2. Accueil : pixels de la section Process — corrigé dans le code (instances imbriquées qui suivent le parent, follows.json), à remesurer seul ; puis 1200/810/390.
3. `/projects` : capturer la référence (`extract.mjs --target=ref --only=/projects`, l'onglet a planté une fois), comparer.
4. Revalider toutes les routes aux 4 largeurs (changements globaux : Lenis, effets, CSS d'origine des raccourcis).
5. Phases 4–11 : interactions du registre (survols, fenêtres vidéo YouTube « Play Reel »/« Play Film », cartes de services,
   témoignages, curseur), courbes d'animation, WebGL (images de référence), liste B, tests, `check:launch`, RAPPORT.md.

**Contrainte machine (mesurée 2026-11-21)** : 3,8 Go de RAM au total (0,2–0,3 Go libres pendant les mesures). Deux
navigateurs de banc en parallèle font planter les onglets (« Target crashed »), échouer l'encodage des captures
(« webpsave: unable to encode ») ou rendre des captures vides. Règle : **une seule mesure à la fois**, `--jobs=1` pour
l'accueil, Chrome fermé pendant les mesures.

**Points de vigilance** : processus de capture bloqué PID 17344 (à arrêter : `Stop-Process -Id 17344 -Force`) ; le serveur
de dev Next plante en mémoire sur les grandes pages → travailler sur l'export statique ; disque C: ~90 % plein.

## Point de reprise (2026-11-21, session 3)
- Agents D-032 interrompus sans composant ; reprise par `scripts/genpage.mjs` (D-033). Légales validées. Curseur construit (C-044, courbe à mesurer). Suite : accueil, studio, contact, journal (+8), projets (+6), /projects, 404.

## Point de reprise précédent (2026-11-21, session 2)
- Selftest de l'original OK (0 %). Extraction de référence liste A en cours en arrière-plan (`reference/extract-A.log`, `--net=record`).
- Fondations faites et mesurées : gabarit, navigation, footer, presets, Variants/HideOn, outils spec/transpose/compare (D-029..D-032).
- Vague de construction en agents parallèles (D-032) : homea, homeb, projects, studio, journal, fx — rapports dans `docs/build/<id>.md`, demandes dans `docs/requests/<id>.md`.
- Ensuite : fusion + `next build` + comparaison complète par page, liste B, Phases 4-11.
