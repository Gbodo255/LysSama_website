# Limitations

## Bloquants et écarts techniques

| ID | Sujet | Constat | Tentatives / preuve | Statut |
|---|---|---|---|---|
| L-001 | Licence | La licence Single-Use du Framer Marketplace autorise un seul site final ; elle ne dit pas explicitement si une ré-implémentation hors de Framer (code exporté) est couverte. | — | **À confirmer par le propriétaire** avant toute mise en ligne. |
| L-002 | Projet Framer | Pas d'accès MCP Framer ni de `framer-code/` (D-002) : variantes de composants et réglages lus uniquement dans le code compilé. | — | Ouvert |
| L-004 | Lenteur du banc | `gotoStable` sur l'accueil à 1440 dépasse 10 min sous charge (7 agents en parallèle) ; ~225–480 s par page de projet. Les audits ont dû alléger la stabilisation ; géométrie de l'accueil à 810 non relevée. | docs/requests/homea.md, homeb.md, projects.md | Ouvert — l'extraction liste A (Étape D) les relève en série |
| L-003 | Rendu WebGL logiciel | SwiftShader est lent (~3 s réelles par 0,5 s virtuelle sur l'accueil, 4 canvas). Les captures sont longues mais déterministes. | Mesuré au 2026-11-20 (`scripts/_debug.mjs`). | Accepté |

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
