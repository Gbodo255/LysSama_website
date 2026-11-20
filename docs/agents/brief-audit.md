# Brief commun — vague d'audit (Phase 1, Étapes B à I)

Projet : reproduction exacte du site https://mirastudio.framer.website/ (template Framer « Mira », licence détenue par le propriétaire). Racine : `C:\Users\Chris\Desktop\Lys Sama` (Bash : `/c/Users/Chris/Desktop/Lys Sama`, toujours `cd` d'abord).

**Avant tout : lis `docs/AGENTS-RULES.md` (règles strictes, obligatoires), puis `MISSION.md` §0, §1, §2, Étapes B à I.**

## Sources disponibles (lecture seule)
- HTML brut par page : `reference/html/<slug>.html` (slug : `home`, `projects`, `projects__gucci`, `journal__on-saying-no`…). Énormes : grep, jamais cat.
- CSS d'origine par page : `reference/css/<slug>.css` (règles `.framer-<hash>` par breakpoint : desktop ≥ 1200, tablette 810–1199.98, mobile ≤ 809.98).
- Tokens, @font-face, presets typographiques : `reference/framer/tokens.json` ; paramètres d'apparition SSR : `reference/framer/animations.json`.
- Modules JS compilés : `reference/framer/js/*.mjs`. Module de route par page : home `J_la0crr…`, projects `AMcQRZf…`, projet `_5OYj0…`, studio `NwlKyBR…`, journal `ststDNB…`, article `vlaxPR…`, contact `W8Mju5L…`, pages légales `oYmZ9Uf…`, 404 `2G6NJGL…`. Les petits modules (`zD0HidK19`, `v7Wd3N72W`, `iLKnB8A0V`, `TJ9zZTo1g`…) sont des composants partagés (header, footer, boutons…). Tu peux en faire des copies lisibles **nouvelles** dans `reference/framer-code/pretty/` avec `npx --yes js-beautify@1.15.4 -s 2 <in> > <out>` (jamais écraser un fichier existant).
- Assets téléchargés : `public/assets/manifest.json` (URL d'origine → chemin local, dimensions, pages).
- Banc : `scripts/lib/harness.mjs` (lis son en-tête). Exemple :
  ```js
  import { launch, openPage, gotoStable, advance, realFrames, closeAll } from '../../lib/harness.mjs';
  const b = await launch({ webgl: false });
  const h = await openPage(b, 'ref', { width: 1440, net: 'record' });
  await gotoStable(h, '/studio');            // préchargeur fini, page défilée, apparitions finies
  await h.page.hover('text=See the studio');  // puis advance(h.page, 600) pour faire avancer le temps virtuel
  await closeAll(h); await b.close();
  ```
  Le temps est figé : après une action, `await realFrames(h.page, 2); await advance(h.page, ms)` ; pour une courbe, `advance(page, ms, { step: 16, onFrame })` et relève les styles calculés à chaque image.
- Captures déjà produites (si présentes) : `reference/geometry/<slug>/<largeur>.json`, `reference/text/<slug>/<largeur>.json`, `reference/screenshots/<slug>/<largeur>/seq-*.webp`.

## Livrables (tes fichiers, préfixe = ton id)
1. `docs/audit/<id>.md` — pour chaque page de ton périmètre, **chaque section dans l'ordre**, et pour chaque section :
   - nom/conteneur (`data-framer-name`, classe), rôle ;
   - composition **par breakpoint** (desktop / tablette / mobile : ce qui change, pas seulement les tailles) ;
   - textes exacts (casse, ponctuation, ®, ©, retours à la ligne forcés), y compris ceux révélés par interaction ;
   - typographie (preset ou variables `--framer-*`), couleurs (tokens), dimensions, espacements, rayons, ombres, lus dans `reference/css/<slug>.css` pour chaque breakpoint ;
   - médias (URL d'origine + chemin local du manifest, recadrage `object-fit/position`, vidéo : boucle/muet/autoplay/poster) ;
   - liens (libellé, href, target) ;
   - animations : apparition (JSON SSR ou variantes/transitions du module), défilement (parallaxe, sticky, progression), survol, clic — avec déclencheur, propriétés départ → arrivée, type (ressort stiffness/damping/mass ou durée + courbe), délai, décalage entre éléments, relecture ;
   - interactions et états (vide, erreur, succès, ouvert/fermé, actif, focus).
2. `docs/audit/<id>.comportements.md` — lignes du registre au format de `docs/COMPORTEMENTS.md` (ID `C-<ID>-NNN`, page, élément, largeurs, déclencheur, résultat exact, source de la mesure, preuve attendue, statut `[ ]`).
3. `docs/audit/<id>.animations.md` — une ligne par animation au format de `docs/ANIMATIONS.md`.
4. `docs/audit/<id>.links.md` — une ligne par lien au format de `docs/LINKS.md` (réel / placeholder / incohérent).
5. **Données (Étape I)** : `src/data/<id>.ts` — tous les textes, liens, médias (chemins locaux du manifest + alt d'origine) de ton périmètre en constantes TypeScript exportées, texte exact caractère pour caractère, chaque objet de démonstration marqué `demo: true`. Aucun type importé, pas de logique. (Les agents projets/journal écrivent aussi `content/…/*.md`, voir leur brief.)
6. `docs/requests/<id>.md` si tu as besoin d'un changement hors de tes fichiers.
