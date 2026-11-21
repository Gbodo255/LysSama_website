# Brief commun — vague de construction (Phases 3 à 6, par périmètre)

Projet : reproduction **exacte, mesurée** de https://mirastudio.framer.website/ (voir `MISSION.md` §0 et l'EXIGENCE ABSOLUE). Racine : `C:\Users\Chris\Desktop\Lys Sama` (Bash : `cd "/c/Users/Chris/Desktop/Lys Sama"` puis **`export MSYS_NO_PATHCONV=1`**, sinon Git Bash transforme `/route` en chemin Windows).

**Avant tout : lis `docs/AGENTS-RULES.md` (obligatoire), ce brief, `docs/AUDIT.md`, puis l'audit de ton périmètre (`docs/audit/<page>.md`, `*.comportements.md`, `*.animations.md`).**

## Ce qui existe déjà (fondations, propriété de la session principale — lecture seule)
- `src/styles/*` : tokens, polices auto-hébergées, base Framer (`framer-base.css`), presets de texte **avec leurs @media** (`presets.css`, généré par `scripts/gen-presets.mjs`). Ne jamais recopier une règle `framer-styles-preset-*` dans un CSS de composant (la cascade s'inverse).
- `src/components/Template.tsx` : gabarit « Nav & Footer » (racine `framer-eYdsD…`, `#overlay`, navigation fixe, footer). Chaque page : `<Template>` (ou `<Template footer={false}>` pour `/projects`) contenant **sa propre enveloppe de page** (`div` aux classes de page, `display: contents`) avec le conteneur Lenis et `<main>`. La 404 n'a pas de gabarit.
- `src/components/nav/*` (navigation latérale validée par mesure), `src/components/nav/parts.tsx` : `RichText`, `NavLogo` (logo blanc `framer-1xjrc` ou noir `framer-SHtMX`, `pad`), `NavLinks` (variantes `desktop`/`phone`/`top`/`topPhone`, = « Shared Navigation Links »), `NavItem`, `ContactButton`, `SocialIcons`, `Copyright`, `Hamburger`.
- `src/components/footer/Footer.tsx` (validé), `NavSpacer` (« Navigation Spacer »).
- `src/components/Variants.tsx` : **mécanisme des breakpoints de Framer, obligatoire** :
  - `<Variants d={…} t={…} p={…}/>` pour chaque groupe `div.ssr-variant.hidden-*` du SSR (passe **le même élément** à deux breakpoints s'ils partagent un groupe, ex. `t={d}` si le SSR a `ssr-variant hidden-1pvmz1y`). Après hydratation seule l'enveloppe du groupe actif reste (mesuré).
  - `<HideOn on={['phone']}>…</HideOn>` autour de tout élément portant une classe `hidden-*` seul : l'original le **retire du DOM** après hydratation sur ces breakpoints. Les classes `hidden-*` propres à une page sont définies par la page (le CSS transposé les contient).
  - `useBreakpoint()`.
- `src/components/useLink.ts` : liens internes avec `href` relatif identique à l'original (`./projects`, `../projects`) et navigation côté client. `src/lib/motion.ts` : `tween`, `EASE_IO`, `radii`, `superellipse`, `TOKEN`. `src/lib/forms.ts` : `submitForm` (D-023), `isIncomplete`, `HONEYPOTS`. `src/components/forms/FormButton.tsx` (Form Button, 5 états).
- `src/components/SvgSprite.tsx` (symboles `<use href="#…">` de toutes les pages, déjà monté), `src/components/PageStyle.tsx` (styles html/body par page), `src/data/*.ts` (tous les textes/médias, Étape I), `content/**/*.md`, `public/assets/manifest.json`.
- Code des composants de l'auteur, à **porter** (même bibliothèque, mêmes shaders/uniforms/réglages) : `reference/framer-code/extracted/{HeroSlider,CurvedShowcase,NotFound3D,Preloader}.js` ; code compilé lisible : `reference/framer-code/pretty/*.mjs.js` (composants Framer : variantes, transitions, gestes — c'est la source des valeurs d'animation).

## Méthode imposée, section par section (MISSION Phase 3)
1. **Fiche** : `node scripts/spec.mjs <page> "<data-framer-name>" [index]` → `reference/specs/<page>/<nom>.txt` (structure SSR complète + toutes les règles CSS d'origine, y compris celles des variantes). `<page>` = nom de fichier de `reference/html/` sans `.html`.
2. **Transposition** : `node scripts/transpose.mjs <page> "<data-framer-name>" <index> src/sections/<toi>/<Nom>` → `<Nom>.css` (règles d'origine **inchangées**, à importer tel quel) + `<Nom>.gen.tsx` (squelette JSX, exclu de TypeScript). `--skip-css=a.css,b.css` évite de répéter des règles déjà transposées ; `--sel=<regex>` filtre ; `css:<sélecteur>` à la place du nom vise un élément par sélecteur CSS.
3. **Composant** : à partir du squelette, écris `<Nom>.tsx` : mêmes balises, classes, attributs (`data-framer-name`, `name`, `aria-*`, `href` relatifs, `data-framer-cursor`…) et styles en ligne que l'original ; enveloppes `ssr-variant` → `<Variants>` ; `hidden-*` seuls → `<HideOn>` ; **textes et médias lus depuis `src/data/*.ts`** (jamais recopiés en dur) ; répétitions → `map`. Les images : chemin local du manifest (`src` pleine résolution, pas de `srcset`).
4. **Comportements** (survol, clic, apparitions, défilement, ressorts, WebGL) : valeurs lues dans le code compilé (`pretty/`) ou l'audit, reproduites avec `motion` (`motion/react` ; mise en page animée = prop `layout` comme Framer ; transitions par `MotionConfig`). Animations d'apparition : `reference/framer/animations.json` + audit. Rien d'inventé : une valeur introuvable → `docs/requests/<toi>.md` et `docs/LIMITATIONS.md` via la session principale.
5. **Mesure** (même banc que l'original) :
   - Ton serveur : `NEXT_DIST_DIR=.next-<toi> npx next dev -p <ton port>` (en arrière-plan ; **jamais** `next build`, réservé à la session principale).
   - Clone : `CLONE_ORIGIN=http://127.0.0.1:<port> node scripts/extract.mjs --target=clone --only=<route> --widths=1440,1200,810,390 --jobs=2 --force`
   - Référence : `reference/geometry/<page>/<w>.json` (extraction en cours dans la session principale ; si absente : `node scripts/extract.mjs --target=ref --net=record --only=<route> --widths=<w>`).
   - Comparaison : `node scripts/compare.mjs --only=<route> --widths=1440,1200,810,390 [--scope="<data-framer-name de la section>"]` → `compare/<page>/<w>[-scope].json` : éléments manquants/en trop (sélecteurs), écarts de géométrie > 2 px, styles calculés, textes et **têtes de ligne**, pixels de la séquence de défilement (si hauteurs égales). `--scope` compare une section seule, positions relatives à son conteneur : utilise-le tant que la page n'est pas complète.
   - Regarde les planches `compare/<page>/<w>/seq-*.png` (original | clone | diff) quand il y en a.
6. Itère (6 cycles max par section, puis « KO » avec diagnostic). Une section est **validée** quand `--scope` donne 0 manquant, 0 en trop, 0 géométrie, 0 style, 0 texte aux 4 largeurs (hors propriétés animées en cours).
7. Consigne dans **ton** fichier `docs/build/<toi>.md` : sections faites, résultats de mesure (chiffres), écarts restants, comportements implémentés (IDs `C-…` du registre) et comment ils ont été vérifiés.

## Pièges connus
- Dev ≠ export : vérifie aussi que ton code n'utilise rien d'incompatible avec `output: 'export'` (pas d'API serveur ; routes dynamiques via `generateStaticParams`, `dynamicParams = false`).
- Les `div` sans classe dans le DOM hydraté de l'original (enveloppes de composants de code, `aria-live`, etc.) comptent dans les sélecteurs `:nth-of-type` : reproduis-les.
- Les textes Framer « par ligne/caractère » sont découpés en `span` : reproduis le découpage du SSR.
- Ne touche pas aux fichiers d'un autre agent. Un composant partagé dont tu n'es pas propriétaire : importe-le à son chemin (bouchon qui rend `null` tant qu'il n'est pas prêt) ; ta mesure de section le saute avec `--scope`.
- Ressources : un seul navigateur à la fois, `--jobs=2` maximum, ferme ton serveur de dev à la fin (`taskkill` uniquement sur **ton** PID, noté au lancement).

## Rapport final (≤ 300 mots)
Fichiers écrits, sections validées (chiffres de compare), sections KO et pourquoi, comportements faits/non faits, demandes (`docs/requests/<toi>.md`).
