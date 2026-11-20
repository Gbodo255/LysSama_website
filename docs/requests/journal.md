# Demandes de l'agent journal

1. **`docs/LIMITATIONS.md`, section « Contenu à corriger au rebranding »** — ajouter :
   - deux formats de date pour la même donnée (cartes `M/D/YY`, article `Mon D, YYYY`) ;
   - « More articles » = 4 premiers articles de la collection hors article courant, sans tri ni lien thématique (les anciens articles proposent toujours les 4 plus récents) ;
   - `<title>` et meta description de `/journal` = textes génériques du template (« Mira - Agency & Portfolio Framer Template », « A dark, WebGL-driven Framer template… ») ;
   - auteurs et articles fictifs (`demo: true`), bouton Twitter pointant vers `twitter.com/intent/tweet` ;
   - préciser que le compteur du journal `(8)` **correspond** au nombre d'articles (le piège MISSION § 1.5 est levé).
2. **`MISSION.md` § 1.4** (information) : la double liste de `/journal` est un doublon responsive (grille masonry 4 pistes ≥ 1200 et 2 pistes < 1200) ; pas d'aperçu d'image au survol (survol = zoom/flou + curseur « Read Article »).
3. **Couleur d'accent** : la valeur rendue de `--token-f277370d-904c-4e87-88c6-49451f154e33` est `rgb(245, 45, 15)` ; les replis du code (`rgb(255,57,3)`, `rgb(209,255,0)`) ne doivent pas être utilisés dans `src/styles/tokens.css` (à vérifier par l'agent tokens).
4. **Composants partagés à construire une fois** (pour la phase construction) : carte d'article (`caaAwhF9X`), section « From the journal / More articles » (`pgtQfyOCv`, prop `articleTitle` qui exclut l'article courant, `sectionCount` 0 = libellé sans numéro), curseur personnalisé (`toplevel-deps` variantes Default / View Project / Read Article / Next), lien à double libellé (`v7Wd3N72W`).
5. **Banc** (information) : 3 erreurs console par page sur l'original en `net:'record'` (« Failed to fetch dynamically imported module », `missing 0`) ; à examiner par la session principale si d'autres agents les voient.
