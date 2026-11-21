# Tests différentiels original / clone (Phase 9) — scénarios à coder

Chaque scénario se joue **deux fois avec le même banc** (`scripts/lib/harness.mjs`) : `openPage(browser, 'ref', { net: 'replay' })`
(archive figée `reference/har/`, hors ligne) puis `openPage(browser, 'clone')` (export statique, `node scripts/serve-out.mjs --port=4173`).
Mêmes largeurs, même temps virtuel (`advance`, pas de 16 ms), même séquence d'actions ; on compare les valeurs relevées
(égalité stricte pour textes, URL et états ; tolérances de MISSION § 0 pour géométrie et pixels). Sur l'original,
`hideOutOfScope(page, 'ref')` après chaque chargement.

Contraintes : un seul navigateur à la fois (3,8 Go de RAM), `launch({ webgl: false })` sauf scénarios WebGL,
**jamais d'envoi valide d'un formulaire sur l'original** (cas vides et invalides uniquement). `curves.mjs` (ce dossier)
fournit déjà les scénarios de courbes de la navigation et du footer (`scripts/curves.mjs`).

Les tests fonctionnels du clone seul sont dans `tests/functional/` (`npm run test:e2e`).

| # | Scénario | Page / largeurs | Séquence | Valeurs comparées | Source |
|---|---|---|---|---|---|
| D-01 | Calculateur de prix, 32 totaux | `/`, liste A | défilement jusqu'à `.framer-189pfpj-container` ; pour Monthly puis Per Project, parcourir les 16 combinaisons des 4 cases (ordre : Motion design, Illustration & brand assets, Photography direction, Pitch deck or sales kit) | total, `+$` add-ons, `aria-live`, base, suffixe, variante, `aria-checked` de chaque case ; conservation des cases au changement d'onglet | `docs/audit/homeb.md` § 08 ; `scripts/agents/homeb/pricing.mjs` |
| D-02 | Diapositives hero | `/`, liste A | commandes du slider (flèches, points, défilement automatique) ; relevé après chaque commande | ordre et contenu de la diapositive active, indicateurs | `docs/audit/homea.md` |
| D-03 | Témoignages | `/`, liste A | flèche droite ×3, flèche gauche ×3, clic sur la citation (`.framer-dujsxl-container`) | `Testimonial n` actif, texte, compteur `0n / 03` | C-081 ; `scripts/agents/homeb/interact.mjs` |
| D-04 | FAQ : réponses et règle | `/` (`.framer-1fypq4z-container`), `/contact` ; liste A | clic Q1, clic Q2, re-clic Q1, puis chaque question | états `Open`/`Closed`, hauteurs, textes des réponses | C-092..C-094, C-185..C-187 |
| D-05 | Validation des formulaires | `/` (Book a call), `/contact`, newsletter du footer ; liste A | envoi vide, email `abc`, case newsletter non cochée | `validationMessage` de chaque champ, `checkValidity()`, élément focalisé, `data-framer-name` et opacité du bouton, classes `framer-form-input-empty` | C-039..C-041, C-096..C-098, C-178, C-181 |
| D-06 | Cibles de tous les liens | 22 routes + 404, liste A | DOM hydraté | pour chaque `<a>` visible : `href` brut, `target`, `rel`, libellé | `docs/LINKS.md` |
| D-07 | Valeurs finales des compteurs | `/studio`, liste A | entrée en vue, sortie, rentrée | `12`, `3`, `24hr`, `92%` ; remise à 0 à la sortie ; rejeu | C-140..C-142 ; `scripts/agents/studio/anim.mjs` |
| D-08 | Minutage du préchargeur | `/`, liste A | chargement, relevé image par image | texte du compteur, `scaleX` de la barre, instant de 100 %, de la révélation et du `display:none` | C-001..C-005 ; `docs/audit/preloader.md` |
| D-09 | Styles après survol | toutes les routes, 1440 et 1200 | survol de chaque élément interactif du registre, état stabilisé | styles calculés (couleur, opacité, transform, rayon) avant / après | `docs/COMPORTEMENTS.md` (lignes « survol ») |
| D-10 | Vitrine `/projects` | `/projects`, liste A, `webgl: true` | trajectoires de pointeur scriptées, molette, glisser, `←` `→` `Entrée` | carte centrale, compteur, titre actif, URL après Entrée ; images WebGL (≤ 3 %) | C-013, C-014 ; `docs/audit/projects-webgl.md` |
| D-11 | Texte 3D de la 404 | URL inconnue, 1440 et 390, `webgl: true` | trajectoire scriptée, appui maintenu, glisser, molette | images aux instants clés (≤ 3 %) | C-017..C-020 ; `docs/audit/404.md` |
| D-12 | Fenêtres vidéo | `/` (Reel), `/projects/gucci`, `/projects/puma` | clic vignette, Échap, clic sur le fond | `src` de l'iframe, conteneur hôte, `overflow` du document, présence après fermeture | C-110 ; `docs/audit/homeb.md` (Reel) |
| D-13 | Lightbox | `/projects/{chanel,adidas,nike,under-armour}`, `/studio` | clic image, Échap, clic fond | présence et rectangle final de `.framer-lightbox-container`, fond `rgba(23,22,22,0.75)` | C-113, C-114, C-136..C-138 |
| D-14 | Boutons Share | `/journal/<slug>`, 1440 | clic Twitter / LinkedIn / Email avec espion sur `window.open`, copie du lien | arguments de `window.open`, presse-papiers, retour de l'icône après 2000 ms | C-161..C-164 |

Chaque scénario écrit ses relevés bruts dans `compare/scenarios/<id>-{ref,clone}.json` et un statut OK/KO dans
`compare/scenarios.md` ; un fichier `*.test.mjs` par scénario échoue si les deux relevés diffèrent.
