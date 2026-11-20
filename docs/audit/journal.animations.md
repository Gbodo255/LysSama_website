# Animations — périmètre journal

Paramètres lus dans les modules (aucune courbe image par image mesurée, sauf survol de carte : `reference/agents/journal/hover.json`). Ressort `bounce/duration` = ressort Framer exprimé en durée.

| ID registre | Élément | Page | Déclencheur | Départ → arrivée | Type (ressort s/d/m ou durée + courbe) | Délai / décalage | Relecture | Sources | Courbe |
|---|---|---|---|---|---|---|---|---|---|
| A-JOURNAL-001 | Libellé haut gauche `479px2` (masqué mobile) | /journal | chargement (appear) | opacité 0.001 → 1 | ressort bounce .1, 1.2 s | 1.2 s | non | `ststDNB…` `it`/`K` | — |
| A-JOURNAL-002 | « Article Count » `t46hau` | /journal | appear | opacité 0.001 → 1 | ressort bounce .1, 1.2 s | 1.3 s | non | `at` | — |
| A-JOURNAL-003 | `(2012-26©)` `1jg9bh7` | /journal | appear | opacité 0.001 → 1 | ressort bounce .1, 1.2 s | 1.4 s | non | `st` | — |
| A-JOURNAL-004 | H1 `our Journal.` `l7fzdx` | /journal | appear | opacité 0.001, y 40 → 1, 0 | ressort s 120 / d 25 / m 0.3 | 1 s | non | `ct`/`X` | — |
| A-JOURNAL-005 | Paragraphe d'intro | /journal | entrée dans la vue (seuil 0) | par ligne : opacité 0.001, y 15 → 1, 0 | tween 0.8 s cubic-bezier(.215,.61,.355,1) | départ 1.1 s, +0.1 s par ligne | non | `lt` | — |
| A-JOURNAL-006 | Cartes `1goa1hn-<i>` | /journal | appear | opacité 0.001, y 40 → 1, 0 | tween 0.85 s cubic-bezier(.215,.61,.355,1) | 1.2 s + (i mod 8) × 0.1 s | non | `ut`/`dt` | — |
| A-JOURNAL-007 | Carte : image de fond | /journal, articles (≥ 1200) | survol | scale 1 → 1.2, filter none → blur(5px) | tween 0.56 s cubic-bezier(.87,0,.13,1) | 0 | à chaque survol (aller/retour) | `caaAwhF9X` `L` | `hover.json` card@1440 |
| A-JOURNAL-008 | Carte : image avant | idem | survol | largeur 100 % → 75 % (313.75 → 235.31 px @1440), rayon 10 → 8 px | tween 0.56 s cubic-bezier(.87,0,.13,1) | 0 | aller/retour | `caaAwhF9X` | `hover.json` card@1440 (stable à 576 ms) |
| A-JOURNAL-009 | Curseur « Read Article » : cercle | idem (≥ 1200) | entrée sur carte | scale 0 → 1 | ressort bounce .2, 0.4 s (variante : tween 0.56 s (.87,0,.13,1)) | 0 | oui | `toplevel-deps` `cy`/`sy` | — |
| A-JOURNAL-010 | Curseur : position | idem | déplacement du pointeur | suit le pointeur, placement bottom | ressort s 500 / d 60 / m 1 | 0 | continu | `ststDNB…` `gt`, `vlaxPR…` `On` | — |
| A-JOURNAL-011 | « BG Image » couverture `54cq2o` | article | appear | scale 1.3 → 1.02 | ressort s 120 / d 25 / m 0.3 | 0.8 s | non | `vlaxPR…` `tn`/`J` | — |
| A-JOURNAL-012 | « Middle Image » `1pw0cc0` | article | appear | scale 1.3 → 1 | ressort s 120 / d 25 / m 0.3 | 0.9 s | non | `en`/`J` | — |
| A-JOURNAL-013 | « Back to the journal » `vd6m2l` | article | appear | opacité 0.001 → 1 | ressort bounce .1, 1.2 s | 1.3 s | non | `nn` | — |
| A-JOURNAL-014 | Libellé haut `1hsgk09` (masqué mobile) | article | appear | opacité 0.001 → 1 | ressort bounce .1, 1.2 s | 1.4 s | non | `rn` | — |
| A-JOURNAL-015 | Date `mxg65r` | article ≥ 810 | appear | opacité 0.001 → 1 | ressort bounce .1, 1.2 s | 1.5 s | non | `an` | — |
| A-JOURNAL-016 | Date | article 390 | entrée dans la vue (seuil 0.5) | opacité 0 → 1 | ressort bounce .1, 1.2 s | 0 | non (une fois) | `ln`/`un` | — |
| A-JOURNAL-017 | Catégorie | article | entrée dans la vue (seuil 0) | par ligne opacité 0.001, y 15 → 1, 0 | tween 0.6 s cubic-bezier(.215,.61,.355,1) | départ 1.1 s (390 : 0.2 s), +0.1 s/ligne | non | `pn`/`mn`/`Q` | — |
| A-JOURNAL-018 | H1 `ust23z` | article ≥ 810 | appear | opacité 0.001, y 40 → 1, 0 | ressort s 120 / d 25 / m 0.3 | 1 s | non | `hn`/`gn` | — |
| A-JOURNAL-019 | H1 | article 390 | entrée dans la vue (seuil 0.5) | opacité 0, y 40 → 1, 0 | ressort s 120 / d 25 / m 0.3 | 0 | non | `_n`/`vn` | — |
| A-JOURNAL-020 | Description | article | entrée dans la vue | par ligne opacité 0.001, y 15 → 1, 0 | tween 0.6 s (.215,.61,.355,1) | départ 1.1 s (390 : 0.1 s), +0.1 s/ligne | non | `pn`/`yn` | — |
| A-JOURNAL-021 | Auteur `1r9wpld` | article ≥ 810 | appear | opacité 0.001 → 1 | ressort bounce .1, 1.2 s | 1.2 s | non | `bn` | — |
| A-JOURNAL-022 | Auteur | article 390 | entrée dans la vue (seuil 0.5) | opacité 0 → 1 | ressort bounce .1, 1.2 s | 0.3 s | non | `xn`/`ln` | — |
| A-JOURNAL-023 | Intro Header `<h2>` | article | entrée dans la vue | par ligne opacité 0.001, y 15 → 1, 0 | tween 0.8 s (.215,.61,.355,1) | départ 0.1 s, +0.1 s/ligne | non | `Sn` | — |
| A-JOURNAL-024 | Corps rich text | article | entrée dans la vue (seuil 0) | opacité 0, y 40 → 1, 0 | ressort s 120 / d 25 / m 0.3 | 0.2 s | non | `Cn`/`_n` | — |
| A-JOURNAL-025 | Boutons Share : icône | article ≥ 1200 | survol | fill 13,13,13 → 245,45,15 | CSS `fill 0.2s ease` | 0 | aller/retour | `function U` | `hover.json` share |
| A-JOURNAL-026 | Bouton copie : icône | article | clic | copie → coche → copie | instantané, retour à 2000 ms | 0 | à chaque clic | `function U` | `hover.json` share.copy |
| A-JOURNAL-027 | « More articles » : cartes | article | entrée dans la vue (seuil 0) | opacité 0, y 40 → 1, 0 | tween 0.85 s (.215,.61,.355,1) | 0.3 s + i × 0.1 s | non | `pgtQfyOCv` `gn`/`_n`/`hn` | — |
| A-JOURNAL-028 | « More articles » : H2 | article | entrée dans la vue (seuil 0) | par ligne opacité 0.001, y 10 → 1, 0 | tween 1.1 s cubic-bezier(.215,.61,.355,1) | départ 0.2 s, +0.2 s/ligne | non | `pgtQfyOCv` `fn` | — |
| A-JOURNAL-029 | « More articles » : View All | article | entrée dans la vue (seuil 0) | opacité 0 → 1 | ressort bounce .1, 1.2 s | 0.6 s | non | `pgtQfyOCv` `pn`/`mn` | — |
