# Registre — agent contact (`/contact`, pages légales)

Format de `docs/COMPORTEMENTS.md`. Sources : `docs/audit/contact.md`. Header/footer/newsletter/barre latérale : autres agents.

| ID | Page | Élément | Largeurs | Déclencheur | Résultat exact | Source de la mesure | Preuve attendue | Statut |
|---|---|---|---|---|---|---|---|---|
| C-CONTACT-001 | /contact | Défilement Lenis | toutes | molette | Lenis `intensity 8`, vertical, `smooth`, non infini | module W8Mju5L (`RMxIskEAA`) | scénario différentiel défilement | [ ] |
| C-CONTACT-002 | /contact | H1 « start a project. » | A | chargement (après préchargeur) | `opacity .001, y 40` → `1, 0`, ressort s120 d25 m.3, delay 1 s | module (`f17uai`) | courbe opacity/translateY | [ ] |
| C-CONTACT-003 | /contact | Intro hero (par ligne) | A | entrée dans la vue | lignes `opacity .001, y 15` → visibles, tween 0.8 s `[.215,.61,.355,1]`, +0.1 s par ligne, `startDelay 1.1`, une fois | module (effet `X`) | courbes par ligne | [ ] |
| C-CONTACT-004 | /contact | Logo / nav Top | 1440, 1200, 810 | chargement | `opacity .001 → 1`, ressort bounce .1 durée 1.2, delays 1.2 / 1.3 ; masqués en 390 | module (`i3k6v0`, `6hdhbv`) | courbe opacité | [ ] |
| C-CONTACT-005 | /contact | Icônes sociales, Address, Office hours | A | chargement | `opacity .001 → 1`, ressort bounce .1 durée 1.2, delays 1.4 / 1.5 / 1.6 | module (`c6ixgn`, `wkv69t`, `1yutnjb`) | courbes opacité | [ ] |
| C-CONTACT-006 | /contact | Mise en page hero | A | redimensionnement | 1440/1200 : Address et Office hours en ligne (libellé à gauche de la valeur) ; 810/390 : libellé au-dessus de la valeur ; icônes 17 px (≥1200) / 15 px (≤1199) ; Top masqué en 390 | geometry/contact/<w>.json | comparaison géométrie ≤ 2 px | [ ] |
| C-CONTACT-007 | /contact | Carte Contact CTA | A | entrée dans la vue | conteneur `opacity 0, y 40` → `1, 0`, tween 0.85 s `[.215,.61,.355,1]`, delay 1.4 s, une fois | module (`framer-1yubnzo-container`) | courbe | [ ] |
| C-CONTACT-008 | /contact | Libellé « Book a call » | A | — | index de section masqué (Section Count = 0) : « Book a call » seul | n_03H18N2 (`shBP9axEq = !(D===0)`) + mesure | texte identique | [ ] |
| C-CONTACT-009 | /contact | Formulaire vide | A | clic « Start a project » | validation native, envoi bloqué, focus `Name` ; messages « Please fill out this field. » (Name, Pitch, Email) ; aucun style d'erreur propre ; bouton reste « Incomplete » (opacité 0.75) | interact/1440.json | scénario différentiel (sans envoi) | [ ] |
| C-CONTACT-010 | /contact | Email invalide | A | saisie « abc » + clic | `validationMessage` « Please include an '@' in the email address. 'abc' is missing an '@'. », envoi bloqué | interact/1440.json | scénario différentiel | [ ] |
| C-CONTACT-011 | /contact | Liste « and i'd like to start » | A | clic | `<select>` natif requis ; options « When… » (désactivée, value vide), « ASAP » (sélectionnée par défaut), « Within a month », « This quarter », « Just exploring » | SSR + interact | valeurs identiques | [ ] |
| C-CONTACT-012 | /contact | Champs texte | A | saisie | classe `framer-form-input-empty` retirée si valeur ; largeur inchangée (pas d'auto-largeur) | interact/1440.json | géométrie avant/après | [ ] |
| C-CONTACT-013 | /contact | États Loading / Success / Error | A | envoi (code seulement — jamais déclenché) | Loading : form blur 5px scale .95, spinner opacité 1 ; Success (800 ms après onSuccess) : form blur 5px opacité .35 scale .95 + carte succès 229 px max 400 ; Error : form normal | n_03H18N2 l.1018-1180 | test sur le clone avec envoi simulé | [ ] |
| C-CONTACT-014 | /contact | Pots-de-miel + noscript | A | — | 11 champs cachés (`comments`… `website`) + `framer-noscript` `pattern="(?!)"` | SSR | DOM | [ ] |
| C-CONTACT-015 | /contact | Liens tel / mailto | A | clic | `tel:+18054501432`, `mailto:hello@mira.studio` | geometry | liens identiques | [ ] |
| C-CONTACT-016 | /contact | FAQ — état initial | A | chargement | 6 questions fermées (item 51 px à 1440), réponses dans le DOM | interact/1440.json | DOM + géométrie | [ ] |
| C-CONTACT-017 | /contact | FAQ — ouverture | A | clic question | hauteur 51 → 175 (Q1, 1440) en ≈ 464 ms, `.46 s [.87,0,.13,1]` ; icône Plus `.26 s` | interact/1440.json `faqClick1Curve` + NIqbhJ1MS | courbe ≤ 3 % | [ ] |
| C-CONTACT-018 | /contact | FAQ — règle | A | clic Q2 avec Q1 ouverte ; re-clic | plusieurs items ouverts simultanément ; re-clic referme | interact/1440.json | scénario différentiel | [ ] |
| C-CONTACT-019 | /contact | Libellé « Answers » | A | — | index masqué (`xjmUnp2to` = 0) | NIqbhJ1MS + mesure | texte | [ ] |
| C-CONTACT-020 | légales | Logo / nav Top | 1440, 1200, 810 | chargement | `opacity .001 → 1`, ressort bounce .1 durée 1.2, delays 1.3 / 1.4 ; masqué en 390 | module oYmZ9Uf | courbe | [ ] |
| C-CONTACT-021 | légales | « Last updated » | A | chargement / défilement | apparition delay 1.2 (ressort bounce .1 1.2 s) ; **sticky top 50 px** à ≥ 810, statique en 390 | module + css (`framer-85otex`) | position au défilement | [ ] |
| C-CONTACT-022 | légales | Date | A | — | `toLocaleString('en-US', {dateStyle:'short', timeZone:'UTC'})` : 7/28/26 (privacy), 7/10/26 (terms, cookie), dans `<time datetime>` | module + SSR | texte | [ ] |
| C-CONTACT-023 | légales | H1 | A | chargement | `opacity .001, y 40` → ressort s120 d25 m.3 delay 1 | module (`1p9fj0l`) | courbe | [ ] |
| C-CONTACT-024 | légales | Intro | A | entrée dans la vue | effet par ligne (0.8 s, +0.1 s, startDelay 1.1) ; balise `p` (≥1200) / `h2` (≤1199) | module + geometry | DOM + courbe | [ ] |
| C-CONTACT-025 | légales | Corps riche | A | entrée dans la vue | `opacity 0, y 40` → ressort s120 d25 m.3 delay 1.3, une fois | module (`framer-104pdxd`) | courbe | [ ] |
| C-CONTACT-026 | /privacy-policy | Lien e-mail du corps | A | survol | `#fff` sur rouge → texte `#f5f4e7` sur `#1d1f19`, `.6 s cubic-bezier(.4,0,.2,1)` ; `target=_blank` | CSS preset `vu1xf3` | capture avant/après + courbe | [ ] |
| C-CONTACT-027 | légales | Textes complets | A | — | structure h2/h3/p/ul identique à `content/legal/<slug>.md` (0 écart vs DOM à 1440 et 390) | legal/<slug>.json + geometry | vérif. texte | [ ] |
| C-CONTACT-028 | /cookie-policy | Bannière et « Cookie preferences » | A | chargement | absents (décrits dans le texte) — reproduire l'absence | geometry (aucun texte de bannière) | DOM | [ ] |
