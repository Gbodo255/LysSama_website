# Comportements — études de cas /projects/<slug> (agent projects)

Format de `docs/COMPORTEMENTS.md`. « tous » = 6 pages ; largeurs = liste A sauf mention. Sources : code (route `_5OYj0…`, composants), CSS d'origine, mesures `reference/agents/projects/dom-<slug>-<largeur>.json`. Les animations détaillées sont dans `projects.animations.md` (même préfixe `C-PROJ-A…`).

| ID | Page | Élément | Largeurs | Déclencheur | Résultat exact | Source de la mesure | Preuve attendue | Statut |
|---|---|---|---|---|---|---|---|---|
| C-PROJ-001 | tous | Page modèle CMS | A | navigation `/projects/<slug>` | une page par élément de la collection Projects (6) ; slug inconnu → 404 (`No data matches path variables`) | route L800-806 | scénario différentiel (6 slugs + slug invalide) | [ ] |
| C-PROJ-002 | tous | Blocs conditionnels | A | rendu | chaque bloc n'existe que si son champ CMS est non vide (liste §2 de projects.md) ; ex. Image 1 absente sur gucci/chanel/puma | route L1480-2400 ; DOM | comparaison DOM par page | [ ] |
| C-PROJ-003 | tous | Hero sticky | 1440, 1200 | défilement | section Hero `position: sticky; top: 0` ; le contenu `Project ` (fond blanc, z 1) la recouvre ; opacité 1 → 0,6 (C-PROJ-A02) ; parallaxe speed 130 (C-PROJ-A03) | CSS D ; route | séquence de défilement + courbe | [ ] |
| C-PROJ-004 | tous | Hero non sticky | 810, 390 | défilement | `position: relative`, ni opacité ni parallaxe | CSS T/M ; overrides route | séquence de défilement | [ ] |
| C-PROJ-005 | gucci, puma | Vidéo de fond du hero | A | chargement | vidéo Video File `loop muted playsinline`, `objectFit: cover`, poster = Main Image, voile #0d0d0d opacité 0,65, rayon 12, padding 3 | cM8Lf1CeK ; SSR | capture | [ ] |
| C-PROJ-006 | chanel, adidas, nike, under-armour | Fond du hero sans vidéo | A | chargement | image Main Image en fond (même voile) | cM8Lf1CeK `ie` ; DOM | capture | [ ] |
| C-PROJ-007 | gucci, puma | Play Film : ouverture | A | clic sur la vignette (Hero Video Thumbnail) | fenêtre en portail : fond fixed plein écran #0d0d0dd9 z 9 + lecteur YouTube fixed centré 80 % (T 85 %, M 90 %) ratio 1,77615, rayon 12, lecture auto, son actif ; défilement du document bloqué | route L1200-1300 ; CSS ; `overlayOpen` | scénario différentiel + capture | [ ] |
| C-PROJ-008 | gucci, puma | Play Film : fermeture | A | Échap, ou clic sur le fond | fondu de sortie (C-PROJ-A22/A23), défilement rétabli ; le clic dans le lecteur ne ferme pas | route (`dismissWithEsc`, `onTap: hide`) ; `afterEscape`, `afterBackdropClick`, `afterPlayerClick` | scénario différentiel | [ ] |
| C-PROJ-009 | gucci, puma | Play Film : survol | 1440, 1200 | survol | C-PROJ-A21 | koAJndPrk CSS | courbe | [ ] |
| C-PROJ-010 | chanel, adidas, nike, under-armour | Image du hero : lightbox | 1440, 1200, 810 | clic | ouvre la lightbox Framer (C-PROJ-A24), fermeture Échap / clic fond ; curseur pointer ; M : `cursor: unset` | route L1180 ; CSS M ; `lightbox*` | scénario différentiel | [ ] |
| C-PROJ-011 | tous | Images 1-3 et galerie : lightbox | A | clic | lightbox Framer (C-PROJ-A25) | koAJndPrk L1330 | scénario différentiel | [ ] |
| C-PROJ-012 | tous | Back to projects | A | survol / clic | survol : texte doublé qui défile, couleur → rgb(255,57,3) (composant v7Wd3N72W, audit global) ; clic → /projects | route L1100-1135 | courbe + navigation | [ ] |
| C-PROJ-013 | tous | View live | A | clic | ouvre `https://launchnow.design?utm_source=miratemplate` dans un nouvel onglet ; variante Phone distincte (`jinEk1yag`) | SSR ; route | scénario (cible `_blank`, sans navigation réelle) | [ ] |
| C-PROJ-014 | tous | Année | A | rendu | `'YY©` à partir de Date (UTC, 2 chiffres), dans `<time dateTime>` | route `kt` | texte | [ ] |
| C-PROJ-015 | tous | Metrics | A | rendu | numéro « 01 », « 02 »… (minimumIntegerDigits 2), label entre parenthèses | JKo4PdE_2 L205-211 | texte | [ ] |
| C-PROJ-016 | tous | Citation | A | rendu | `“ ` + texte + ` ”` | route `Bn` | texte | [ ] |
| C-PROJ-017 | tous | Quote (M) | 390 | rendu | ordre : citation (0), étiquette (1), carte auteur (2, gap 9) ; grille 2 col | CSS M | géométrie | [ ] |
| C-PROJ-018 | tous | More projects : contenu | A | rendu | les 5 autres projets dans l'ordre de la collection (gucci, chanel, puma, adidas, nike, under-armour sans la page courante), titre + `'YY©` | handover (requête `not id ==`) | texte | [ ] |
| C-PROJ-019 | tous | More projects : survol | 1440, 1200 | survol d'une carte | C-PROJ-A20 (variante desktop) ; T et M utilisent la variante Phone (vignette 50×50, pas d'effet d'aperçu) | koAJndPrk CSS ; overrides route (`I4d4B4zbs` en T et M) | courbe | [ ] |
| C-PROJ-020 | tous | More projects : clic | A | clic | navigation vers `/projects/<slug>` | SSR | navigation | [ ] |
| C-PROJ-021 | tous | More projects : pagination | A | rendu | pageSize 6 ; bouton « load more » rendu en variante désactivée (`Jq5yVz0gZ`) car tout tient en une page | route L2560-2575 | DOM | [ ] |
| C-PROJ-022 | tous | Prise de contact | A | rendu | composant partagé de contact (audit contact) ; fond = vidéo/image du projet courant | route L2580-2610 | capture | [ ] |
| C-PROJ-023 | tous | Défilement adouci | A | molette | Lenis intensity 8, smooth, vertical | route L915-930 | scénario | [ ] |
