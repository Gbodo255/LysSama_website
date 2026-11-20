# Registre des comportements — périmètre journal

| ID | Page | Élément | Largeurs | Déclencheur | Résultat exact | Source de la mesure | Preuve attendue | Statut |
|---|---|---|---|---|---|---|---|---|
| C-JOURNAL-001 | /journal | Compteur « articles (8) » | toutes | chargement | `(8)` = nombre d'articles de la collection (format `(`n`)`, min. 1 chiffre), couleur rgb(245,45,15) | `reference/agents/journal/journal@*.json`, module `ststDNB…` | texte identique + ajout d'un article → `(9)` | [ ] |
| C-JOURNAL-002 | /journal | Grille masonry | ≥ 1200 | chargement | 4 colonnes, élément i en colonne i mod 4 (col. 1 = articles 1, 5…), gap 40/20, hauteur d'image au ratio | `journal@1440.json`, `@1200` | diff géométrie ≤ 2 px | [ ] |
| C-JOURNAL-003 | /journal | Grille masonry | 810, 390 | chargement | 2 colonnes, col. 1 = 1, 3, 5, 7 ; col. 2 = 2, 4, 6, 8 | `journal@810.json`, `@390` | diff géométrie ≤ 2 px | [ ] |
| C-JOURNAL-004 | /journal | Bouton « Load more » | toutes | chargement | absent/désactivé (8 articles ≤ pageSize 8) | module `ststDNB…`, aucune mesure de bouton | capture identique | [ ] |
| C-JOURNAL-005 | /journal, articles | Carte d'article | ≥ 1200 | survol | image de fond `scale 1.2` + `blur(5px)` ; image avant largeur 100 % → 75 %, rayon 10 → 8 px ; tween 0.56 s cubic-bezier(.87,0,.13,1) ; retour à la sortie | `hover.json` (card@1440), `caaAwhF9X` | courbe ± 1 image, ≤ 3 % | [ ] |
| C-JOURNAL-006 | /journal, articles | Carte d'article | 810, 390 | survol / toucher | aucun effet, `cursor: unset` | `hover.json` (card@810) | scénario différentiel | [ ] |
| C-JOURNAL-007 | /journal, articles | Curseur « Read Article » | ≥ 1200 | survol d'une carte | cercle blanc 75 × 75 `mix-blend-mode: exclusion`, texte `Read Article`, apparition scale 0 → 1 (ressort bounce .2 / 0.4 s), suit le pointeur (ressort 500/60/1, placement bottom, centré) ; disparaît hors carte | `hover.json`, `toplevel-deps` l. 19925 | captures + positions | [ ] |
| C-JOURNAL-008 | /journal, articles | Clic carte | toutes | clic | navigation vers `/journal/<slug>` (même onglet) | liens mesurés | scénario de navigation | [ ] |
| C-JOURNAL-009 | /journal/<slug> | Colonne image | ≥ 810 | défilement | reste collée en haut (`sticky; top 0; height 100vh`) pendant le défilement de la colonne droite | CSS `journal__*.css` (`framer-l5ij9y`) | séquence de défilement | [ ] |
| C-JOURNAL-010 | /journal/<slug> | Colonne image | 390 | chargement | bloc relatif de 75vh en tête, contenu dessous | CSS, `journal__on-saying-no@390.json` | diff géométrie | [ ] |
| C-JOURNAL-011 | /journal/<slug> | « Back to the journal » | toutes | clic | navigation vers `/journal` | liens mesurés (`../journal`) | scénario de navigation | [ ] |
| C-JOURNAL-012 | /journal/<slug> | Share Twitter | toutes | clic | `window.open("https://twitter.com/intent/tweet?url=<url>&text=<Title>", "_blank", "width=600,height=400")` | code `vlaxPR…` `function U` | test : espion sur `window.open` | [ ] |
| C-JOURNAL-013 | /journal/<slug> | Share LinkedIn | toutes | clic | `window.open("https://www.linkedin.com/sharing/share-offsite/?url=<url>", "_blank", "width=600,height=400")` | code | test espion | [ ] |
| C-JOURNAL-014 | /journal/<slug> | Share Email | toutes | clic | `window.open("mailto:?subject=<Title>&body=<Short Description>%0A%0A<url>", "_blank", "width=600,height=400")` (encodeURIComponent) | code | test espion | [ ] |
| C-JOURNAL-015 | /journal/<slug> | Copier le lien | toutes | clic | URL de la page copiée ; icône → coche immédiatement, retour après 2000 ms | `hover.json` (share.copy) | test presse-papiers + temps virtuel | [ ] |
| C-JOURNAL-016 | /journal/<slug> | Boutons Share | ≥ 1200 | survol | fill de l'icône 13,13,13 → 245,45,15 en 0.2 s ease ; fond reste transparent | `hover.json` (share) | mesure styles calculés | [ ] |
| C-JOURNAL-017 | /journal/<slug> | « More articles. » | toutes | chargement | 4 premiers articles de l'ordre de collection hors article courant (tableau `journal.md` § 0) | `journal__*@1440.json`, `build-content.mjs` (assert) | test sur les 8 pages | [ ] |
| C-JOURNAL-018 | /journal/<slug> | « View All » | toutes | clic | navigation vers `/journal` | liens mesurés | scénario | [ ] |
| C-JOURNAL-019 | /journal/<slug> | Dates | toutes | chargement | article : `Mon D, YYYY` (medium, UTC) ; cartes : `M/D/YY` (short, UTC) | modules `vlaxPR…`, `caaAwhF9X` | textes identiques | [ ] |
| C-JOURNAL-020 | /journal/<slug> inconnu | Route | toutes | navigation | page 404 | code (`No data matches path variables`) | scénario 404 | [ ] |
