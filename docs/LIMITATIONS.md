# Limitations

## Bloquants et écarts techniques

| ID | Sujet | Constat | Tentatives / preuve | Statut |
|---|---|---|---|---|
| L-001 | Licence | La licence Single-Use du Framer Marketplace autorise un seul site final ; elle ne dit pas explicitement si une ré-implémentation hors de Framer (code exporté) est couverte. | — | **À confirmer par le propriétaire** avant toute mise en ligne. |
| L-002 | Projet Framer | Pas d'accès MCP Framer ni de `framer-code/` (D-002) : variantes de composants et réglages lus uniquement dans le code compilé. | — | Ouvert |
| L-004 | Lenteur du banc | `gotoStable` sur l'accueil à 1440 dépasse 10 min sous charge (7 agents en parallèle) ; ~225–480 s par page de projet. Les audits ont dû alléger la stabilisation ; géométrie de l'accueil à 810 non relevée. | docs/requests/homea.md, homeb.md, projects.md | Ouvert — l'extraction liste A (Étape D) les relève en série |
| L-003 | Rendu WebGL logiciel | SwiftShader est lent (~3 s réelles par 0,5 s virtuelle sur l'accueil, 4 canvas). Les captures sont longues mais déterministes. | Mesuré au 2026-11-20 (`scripts/_debug.mjs`). | Accepté |
| L-005 | Mémoire de la machine | 3,8 Go de RAM au total, 0,2–0,3 Go libres pendant les mesures. Deux navigateurs de banc en parallèle font planter les onglets (« Target crashed »), échouer l'encodage (« webpsave: unable to encode ») ou produisent des captures vides ; le serveur de dev Next plante sur les grandes pages. | docs/PROGRESS.md « Contrainte machine » (2026-11-21) | Contourné : **une seule mesure à la fois**, `--jobs=1` pour l'accueil, Chrome fermé, travail sur l'export statique (`out/`) |
| L-006 | `/projects` non comparé | La référence de l'original n'a pas été capturée (onglet planté) : aucun fichier `compare/projects/`. La page est construite (vitrine incurvée portée, Lenis horizontal) mais rien n'est prouvé. | absence de `compare/projects/` ; docs/PROGRESS.md Phase 3 | Ouvert — `extract.mjs --target=ref --only=/projects` seul |
| L-007 | Accueil : pixels invalides | Structure à 0 manquant/en trop/style/texte et hauteur identique aux 4 largeurs, mais pixels hors seuil (pire image 100 % à 1440 avec 86/100 plans > 2 %, 53,9 % à 1200, 76,2 % à 810, 4,2 % à 390) ; géométrie 39 éléments à 810, 10 à 390. Captures jugées corrompues par le manque de mémoire (mesures faites en série avec d'autres routes). | compare/home/<w>.json ; commit 3b1764c | Ouvert — à remesurer seul (`--jobs=1`) |
| L-008 | Survols et courbes | 11 scénarios de courbes seulement (navigation et footer) : 1 OK (`footer-link-hover`, 0 série animée), 10 en ÉCART (forme jusqu'à 465,93 %). Aucune courbe d'apparition, de défilement, de préchargeur, de FAQ, de Pricing, de compteur, de lightbox (hors relevé chanel 1440), de curseur ni de survol de carte n'a été mesurée. | compare/animations.md, compare/curves/*.json | Ouvert |
| L-009 | Liste B | Aucune mesure aux largeurs 1920/1280/1024/768/430/375/360 (ni liste C). | absence de fichiers `compare/<slug>/{1920,…}.json` | Ouvert |
| L-010 | WebGL non comparé | Fiches et shaders relevés (`docs/WEBGL.md`, `reference/webgl/`), composants portés, mais aucune image de référence déterministe comparée : `compare/webgl.md` n'existe pas. | absence de compare/webgl.md | Ouvert |
| L-011 | Registre | 22 lignes sur 197 de `docs/COMPORTEMENTS.md` prouvées (états de chargement) ; les interactions construites sont marquées « (construit, non mesuré) ». `scripts/merge-registers.mjs` réécrit ce fichier : relancer la fusion effacerait les coches et mentions. | docs/COMPORTEMENTS.md | Ouvert |
| L-012 | Écarts résiduels mesurés | Géométrie de 5 éléments sur /journal (1440, 1200) et sur 4 articles (810 ou 1440) — barre latérale sous charge, fluctuante ; 2 styles de phase de boucle sur /contact 810/390 ; pixels 2,0–2,5 % sur 2–3 plans à 390 pour 7 articles et gucci 1200 (2,16 %) / 390 (2,06 %), au-dessus du seuil de 2 % de MISSION § 9. | compare/<slug>/<w>.json | Ouvert |
| L-013 | Contenu de démonstration | `node scripts/check-launch.mjs` échoue : 1 031 éléments à remplacer (démo 83, marques 341, prix 79, récompenses 29, statistiques 58, équipe 304, coordonnées 110, launchnow.design 12, réseaux 8, pages légales 6, police Switzer à licence non confirmée 1). | sortie de check:launch (2026-11-21) | Bloquant pour la mise en ligne |

## Valeurs estimées (à corriger)

_Aucune pour l'instant._

## Contenu à corriger au rebranding

| Élément | Constat | Source |
|---|---|---|
| Études de cas | 6 études au nom de vraies marques (Gucci, Chanel, Puma, Adidas, Nike, Under Armour), chiffres et citations inventés, portraits fictifs ; libellés incohérents entre projets (`THE BRIEF`, `The Outcome`, `Words from client`) reproduits tels quels ; galeries avec boîtes kraft sans rapport | docs/audit/projects.md |
| Vidéos | même vidéo YouTube de démonstration (`6aioEoCdBJw`) pour Reel, gucci et puma ; under-armour a une URL mais `Show Video = false` | projects.md, homeb.md |
| « View live » | `https://launchnow.design?utm_source=miratemplate` (site de vente du template) sur les 6 projets | projects.links.md |
| Prix et statistiques | Awwwards / FWA / CSS Design Awards fictifs ; 12 industries, 3 personnes, 24hr, 92 % ; +47 %, 4.9/5, 50+ marques, 14 ans | studio.md, homea.md |
| Équipe, auteurs | équipe et auteurs d'articles fictifs ; articles fictifs | homea.md, journal.md |
| Coordonnées | adresse « 2800 East Observatory Road Los Angeles, USA 90027 » (observatoire Griffith), `+1 (805) 450 1432`, « 2 slots for August '26 » ; `/privacy-policy` donne `hello@mirastudio.com`, le reste `hello@mira.studio` | contact.md |
| Liens de remplissage | réseaux sociaux vers les racines x.com / instagram.com / dribbble.com / behance.com ; « Email us » sans `href` ; bouton Twitter → `twitter.com/intent/tweet` | global.links.md, homea.md, journal.md |
| Pages légales | `/cookie-policy` décrit une bannière et un lien « Cookie preferences » absents ; cite « "Last Updated" » alors que l'étiquette est « Last updated » | contact.md |
| Journal | deux formats de date (`6/15/26` cartes, `Jun 15, 2026` article) ; « More articles » = 4 premiers articles hors article courant (les anciens proposent toujours les plus récents) ; `<title>`/description de `/journal` = textes génériques du template. Le compteur `(8)` correspond bien au nombre d'articles (piège § 1.5 levé) | journal.md |
| Formulaires | l'original poste vers Framer Forms (`api.framer.com/forms/...`) : remplacé par `submitForm()` (D-023) | contact.md, global.md |
| Accessibilité d'origine | `aria-label` des options du calculateur sans espace (`Motion designAdd-on Toggle`), reproduit | homeb.md |
