# Rapport — clone de mirastudio.framer.website

État au 2026-11-21 (dernier commit `3b1764c`). **Mission incomplète** : aucun critère de MISSION § 9 n'est entièrement atteint (voir § 6). Chaque affirmation renvoie à un fichier du dépôt ; ce qui n'a pas de fichier de preuve est dit « non mesuré ».

> MISSION § 8 prévoit ce rapport en `docs/RAPPORT.md` ; il est placé à la racine à la demande du propriétaire.

## 1. Résultats mesurés, page par page et largeur par largeur

Source : `compare/<slug>/<largeur>.json`, produits par `scripts/compare.mjs` (même banc `scripts/lib/harness.mjs` pour l'original rejoué hors ligne et pour le clone ; fichiers datés du 2026-11-21, 14 h 46 – 14 h 54). Champs lus : `counts` (éléments appariés, manquants, en trop, écarts de géométrie, de style, de texte), `height` (hauteur de page), `pixels` (pire écart par plan de capture ; entre parenthèses, plans au-dessus de 2 % sur le total).

« 0 écart » = 0 manquant, 0 en trop, 0 géométrie, 0 style, 0 texte. La hauteur de page est identique (écart 0 %) dans les 88 mesures. En gras : pixels au-dessus du seuil de 2 % de MISSION § 9.

| Route | Éléments (1440) | 1440 | 1200 | 810 | 390 | Preuve |
|---|---|---|---|---|---|---|
| `/` | 2331 | 0 écart · px **100 %** (86/100 > 2 %) | 0 écart · px **53,854 %** (19/99 > 2 %) | géo 39 · px **76,222 %** (24/97 > 2 %) | géo 10 · px **4,154 %** (8/79 > 2 %) | `compare/home/<w>.json` |
| `/studio` | 1115 | 0 écart · px 0,024 % | 0 écart · px 0,051 % | 0 écart · px 0,096 % | 0 écart · px 0,532 % | `compare/studio/<w>.json` |
| `/contact` | 545 | 0 écart · px 0,293 % | 0 écart · px 0,399 % | style 2 · px 0,54 % | style 2 · px 0,395 % | `compare/contact/<w>.json` |
| `/journal` | 338 | géo 5 · px 0,07 % | géo 5 · px 0,083 % | 0 écart · px 0,086 % | 0 écart · px 0,537 % | `compare/journal/<w>.json` |
| `/journal/awards-dont-build-brands` | 679 | 0 écart · px 0,105 % | 0 écart · px 1,252 % | géo 5 · px 0,231 % | 0 écart · px **2,441 %** (2/16 > 2 %) | `compare/journal__awards-dont-build-brands/<w>.json` |
| `/journal/fewer-projects-more-attention` | 594 | 0 écart · px 0,43 % | 0 écart · px 0,182 % | géo 5 · px 1,09 % | 0 écart · px 0,813 % | `compare/journal__fewer-projects-more-attention/<w>.json` |
| `/journal/on-saying-no` | 596 | 0 écart · px 0,963 % | 0 écart · px 0,456 % | 0 écart · px 0,496 % | 0 écart · px **2,33 %** (2/16 > 2 %) | `compare/journal__on-saying-no/<w>.json` |
| `/journal/small-looks-expensive` | 587 | 0 écart · px 0,376 % | 0 écart · px 0,173 % | 0 écart · px 1,055 % | 0 écart · px **2,418 %** (3/16 > 2 %) | `compare/journal__small-looks-expensive/<w>.json` |
| `/journal/the-best-type-is-invisible` | 599 | géo 5 · px 0,429 % | 0 écart · px 0,17 % | géo 5 · px 0,746 % | 0 écart · px **2,376 %** (3/16 > 2 %) | `compare/journal__the-best-type-is-invisible/<w>.json` |
| `/journal/the-brief-before-the-brief` | 619 | 0 écart · px 0,275 % | 0 écart · px 1,23 % | géo 5 · px 1,408 % | 0 écart · px **2,462 %** (3/17 > 2 %) | `compare/journal__the-brief-before-the-brief/<w>.json` |
| `/journal/the-founder-is-the-brand` | 616 | 0 écart · px 1,079 % | 0 écart · px 0,903 % | 0 écart · px 0,728 % | 0 écart · px **2,34 %** (3/17 > 2 %) | `compare/journal__the-founder-is-the-brand/<w>.json` |
| `/journal/why-we-quote-fixed` | 602 | 0 écart · px 1,043 % | 0 écart · px 1,379 % | 0 écart · px 1,643 % | 0 écart · px **2,397 %** (2/16 > 2 %) | `compare/journal__why-we-quote-fixed/<w>.json` |
| `/projects/adidas` | 895 | 0 écart · px 0,571 % | 0 écart · px 0,794 % | 0 écart · px 0,495 % | 0 écart · px 0,505 % | `compare/projects__adidas/<w>.json` |
| `/projects/chanel` | 884 | 0 écart · px 0,771 % | 0 écart · px 0,798 % | 0 écart · px 0,625 % | 0 écart · px 0,489 % | `compare/projects__chanel/<w>.json` |
| `/projects/gucci` | 900 | 0 écart · px 1,31 % | 0 écart · px **2,156 %** (3/33 > 2 %) | 0 écart · px 0,472 % | 0 écart · px **2,061 %** (1/30 > 2 %) | `compare/projects__gucci/<w>.json` |
| `/projects/nike` | 887 | 0 écart · px 1,536 % | 0 écart · px 1,515 % | 0 écart · px 1,49 % | 0 écart · px 0,262 % | `compare/projects__nike/<w>.json` |
| `/projects/puma` | 867 | 0 écart · px 0,105 % | 0 écart · px 0,435 % | 0 écart · px 0,397 % | 0 écart · px 0,846 % | `compare/projects__puma/<w>.json` |
| `/projects/under-armour` | 915 | 0 écart · px 0,401 % | 0 écart · px 0,526 % | 0 écart · px 1,27 % | 0 écart · px 0,204 % | `compare/projects__under-armour/<w>.json` |
| `/privacy-policy` | 482 | 0 écart · px 0,734 % | 0 écart · px 0,665 % | 0 écart · px 0,381 % | 0 écart · px 0 % | `compare/privacy-policy/<w>.json` |
| `/terms-conditions` | 480 | 0 écart · px 0,63 % | 0 écart · px 0,354 % | 0 écart · px 0,002 % | 0 écart · px 0,867 % | `compare/terms-conditions/<w>.json` |
| `/cookie-policy` | 405 | 0 écart · px 0 % | 0 écart · px 0,013 % | 0 écart · px 0,018 % | 0 écart · px 1,035 % | `compare/cookie-policy/<w>.json` |
| `404` | 29 | 0 écart · px 0 % | 0 écart · px 0 % | 0 écart · px 0 % | 0 écart · px 0 % | `compare/this-page-does-not-exist-404/<w>.json` |

`/projects` : **non comparé** — la référence de l'original n'a pas été capturée (onglet planté) ; aucun fichier `compare/projects/`.

### Récapitulatif chiffré (22 routes × 4 largeurs = 88 mesures)

| Indicateur | Résultat |
|---|---|
| Sans écart structurel (0 manquant/en trop/géométrie/style/texte, hauteur identique) | **77 / 88** |
| Hauteur de page identique | 88 / 88 |
| 0 manquant, 0 en trop, 0 texte | 88 / 88 |
| Pire plan ≤ 2 % de pixels (seuil MISSION § 9) | 75 / 88 |
| Pire plan ≤ 2,5 % | 84 / 88 (les 4 hors seuil : l'accueil) |
| Structure sans écart **et** pixels ≤ 2 % | **66 / 88** |
| Routes sans écart aux 4 largeurs (structure + pixels ≤ 2 %) | 10 / 22 : `/studio`, `/privacy-policy`, `/terms-conditions`, `/cookie-policy`, 404, adidas, chanel, nike, puma, under-armour |

Le message du commit `3b1764c` annonce « 76/84 » (21 routes, sans la 404) ; le recomptage des fichiers donne 73/84 sans la 404 et 77/88 avec. Ce rapport retient les fichiers.

### Écarts restants (mesurés)

- **Accueil** : structure identique (2 331 éléments à 1440, 0 manquant/en trop/style/texte) mais pixels hors seuil aux 4 largeurs, géométrie de 39 éléments à 810 et 10 à 390. Captures jugées corrompues par le manque de mémoire (mesure en série avec les autres routes) : `docs/PROGRESS.md`, commit `3b1764c`. À remesurer seul.
- **Géométrie, 5 éléments** : `/journal` à 1440 et 1200 ; articles awards-dont-build-brands, fewer-projects-more-attention, the-brief-before-the-brief (810), the-best-type-is-invisible (1440 et 810). Barre latérale sous charge, déjà vue fluctuante (`docs/PROGRESS.md`).
- **Style, 2 éléments** : `/contact` à 810 et 390 (phase des boucles des créneaux).
- **Pixels 2,0–2,5 %** sur 2 à 3 plans : 7 articles sur 8 à 390 (apparition du corps encore en cours dans l'original à l'instant de capture), gucci à 1200 (2,156 %) et 390 (2,061 %).

### Courbes d'animation (`compare/animations.md`, `compare/curves/*.json`)

11 scénarios mesurés (navigation et footer, 1440/810/390) : **1 OK** (`footer-link-hover@1440`, aucune série animée), **10 en ÉCART** (forme de 8,01 % à 465,93 % de l'amplitude ; seuils ± 1 image et ≤ 3 %). Aucune autre animation n'est mesurée.

### Relevés d'interaction (`reference/agents/main/*.json`)

Lightbox : `lightbox-ref.json` / `lightbox-clone.json` (chanel, 1440, image par image) — présence identique à chaque image, opacité ± 0,014, position ≤ 35 px au point le plus rapide (D-039). Une page, une largeur.

### WebGL, liste B, tests, Lighthouse

Non mesurés : `compare/webgl.md` et `compare/report.md` n'existent pas ; aucune mesure de la liste B (1920/1280/1024/768/430/375/360) ni de la liste C ; aucun test fonctionnel ou différentiel ni score Lighthouse consigné.

### Registre des comportements (`docs/COMPORTEMENTS.md`)

197 lignes : **22 prouvées** `[x]` (états de chargement couverts par les comparaisons ci-dessus : textes et DOM des pages projet, des articles, de /studio, /journal, /contact, des pages légales, Service Cards et compteur du hero de l'accueil), 175 non prouvées, 0 KO déclaré. Les lignes implémentées sans mesure portent « (construit, non mesuré) » ; celles dont la courbe a été relevée hors seuil le précisent.

## 2. Architecture

- **Stack** (`package.json`) : Next.js 16 (App Router, export statique `out/`), React 19, TypeScript 5, motion 14, three.js 0.136, Lenis 1.3.25, GSAP 3.13.0 (pour Revelo, comme l'original). Vérification : Playwright, pixelmatch, sharp. Versions et raisons : `docs/DECISIONS.md` D-001.
- **Génération outillée des pages (D-033)** : `scripts/genpage.mjs <slug>` transpose l'enveloppe SSR de chaque page de la référence (`reference/html/`) en `src/gen/<slug>/Body.tsx` + `Body.css` (règles CSS d'origine inchangées) ; textes affichés dans `src/data/text/<slug>.ts` ; `ssr-variant` → `<SV>`, `hidden-*` → `<HideOn>` (D-030), `data-framer-appear-id` → `<Appear>`, liens relatifs → `<Lk>`. 23 dossiers dans `src/gen/`. Routes dans `src/app/` (accueil, studio, contact, journal + 8 articles, projects + 6, 3 pages légales, `not-found.tsx`).
- **Moteur d'effets et de variantes `src/components/fx/*`** : effets et variantes déclarés dans le code compilé de Framer, extraits automatiquement (`scripts/extract-fx.mjs` → `reference/framer/fx.json`, `scripts/extract-components.mjs`) : `TextFx`, `InView`, `Scroll` (effets au défilement, D-036/D-038), `Loop` (boucles), `Variant` / `VariantAppear` (variantes ; instances imbriquées qui suivent le parent, follows.json), `Pricing` (calculateur), `Counter`, `Revelo`, `VideoMirror`.
- **Composants de code de l'auteur portés tels quels** : préchargeur (`src/components/preloader/PortalPreloader.ts`), diaporama WebGL du hero (`src/webgl/hero-slider`), vitrine incurvée de `/projects` (`src/webgl/curved-showcase`), texte 3D de la 404 (`src/webgl/notfound`), Video Mirror, Revelo, compteurs (D-027). Autour : Lenis (`src/components/SmoothScroll.tsx`, D-025), curseur (`src/components/cursor`), lightbox (`src/components/lightbox`, D-039), fenêtres vidéo YouTube (`src/components/shared/VideoModal.tsx`), formulaires (`src/components/forms`, D-023).
- **Cycle de travail** : `bash scripts/agents/main/cycle.sh "<routes>" <largeurs>` régénère toutes les pages (`genpage.mjs`), construit (`next build`), extrait le clone (`extract.mjs --target=clone`) puis compare (`compare.mjs`). Journaux : `reference/agents/{gen,build}.log`. Il lance l'extraction en `--jobs=2` : sur cette machine, à ramener à une mesure à la fois (L-005).

### Origine des informations

Projet Framer et code source indisponibles (D-002, L-002) : tout vient du site publié — HTML brut (`reference/html/`), archive réseau rejouée hors ligne (`reference/har/`), modules compilés (`reference/framer/js/`), DOM hydraté et captures du banc.

## 3. Lancer le clone

```bash
npx next build                          # export statique dans out/
node scripts/serve-out.mjs --port=4173  # puis http://127.0.0.1:4173
```

Vérification : `node scripts/harness-selftest.mjs --target=ref|clone` (banc, < 0,1 %), puis `bash scripts/agents/main/cycle.sh "<routes>" <largeurs>`. Sur cette machine (3,8 Go) : une seule mesure à la fois, Chrome fermé.

Service externe nécessaire : l'envoi des formulaires (contact, newsletter). L'original poste vers Framer Forms ; le clone passe par `submitForm()` (D-023), sans point d'envoi réel branché.

## 4. Sortie de `check:launch`

`node scripts/check-launch.mjs` (exécuté le 2026-11-21) : **ÉCHEC, 1 031 éléments à remplacer avant la mise en ligne** (code de sortie 1).

| Catégorie | Occurrences |
|---|---|
| contenu de démonstration (`demo: true`) | 83 |
| marques réelles des études de cas | 341 |
| prix fictifs | 79 |
| récompenses fictives | 29 |
| statistiques | 58 |
| équipe | 304 |
| coordonnées et adresse | 110 |
| launchnow.design | 12 |
| réseaux sociaux génériques (sans compte) | 8 |
| pages légales décrivant des fonctions absentes (bannière cookies, préférences) | 6 |
| polices à la licence non confirmée (Switzer, ITF Free Font License) | 1 |

Rien ne doit être mis en ligne tant que ce contrôle échoue ; la licence du template (L-001) reste à confirmer.

## 5. Ce qui reste (d'après `docs/PROGRESS.md`)

1. Accueil : remesurer seul (`--jobs=1`) — la section Process a été corrigée dans le code (instances imbriquées suivant le parent) sans revérification — puis 1200/810/390.
2. `/projects` : capturer la référence (`extract.mjs --target=ref --only=/projects`) et comparer.
3. Revalider toutes les routes aux 4 largeurs après les changements globaux ; résorber les écarts de géométrie (barre latérale) et de phase de boucle (/contact).
4. Phase 1 : rejeu hors ligne à 0 requête manquante, `reference/text.json`, tokens/@media/licences, assets et manifeste.
5. Phases 4–11 : interactions du registre (survols, fenêtres vidéo, cartes de services, témoignages, curseur), courbes d'animation, images WebGL de référence, liste B, tests fonctionnels et différentiels, revue indépendante, Lighthouse, `site.config.ts`, `README.md`, `docs/REVUE-HUMAINE.md`, remplacement du contenu listé par `check:launch`.

## 6. Critères d'acceptation (MISSION § 9)

Aucun n'est coché.

- Routes : toutes construites, mais `/projects` non comparée.
- Registre : 22 / 197 prouvées.
- Liste A : pixels ≤ 2 % sur 75 / 88 mesures, géométrie non nulle sur 11.
- Hauteurs : identiques sur 88 / 88 (hors `/projects`).
- Textes : 0 écart sur 88 / 88 contre le DOM de référence, mais `reference/text.json` n'existe pas encore.
- Listes B/C, courbes, WebGL, tests, revue indépendante, Lighthouse : non faits.
- `check:launch` existe et liste le contenu à remplacer (échec attendu).
- Ce rapport : incomplet tant que ces mesures manquent.

## 7. Limitations

Détail dans `docs/LIMITATIONS.md` (L-001 à L-013) : licence à confirmer, pas de projet Framer, mémoire de la machine (une mesure à la fois), `/projects` non capturé, captures de l'accueil à refaire, survols et courbes très partiellement mesurés, liste B non faite, WebGL non comparé, registre à 22 / 197, écarts résiduels, contenu de démonstration.
