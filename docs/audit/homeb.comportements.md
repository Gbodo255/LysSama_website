# Registre — accueil, sections 06 à 11 (homeb)

Format de `docs/COMPORTEMENTS.md`. Sources détaillées : `docs/audit/homeb.md`. Mesures : `reference/agents/homeb/{pricing-1440,interact-1440}.json`, `reference/agents/homeb/dom/{1440,390}.json`.

| ID | Page | Élément | Largeurs | Déclencheur | Résultat exact | Source de la mesure | Preuve attendue | Statut |
|---|---|---|---|---|---|---|---|---|
| C-HOMEB-001 | `/` | 06 Process, titres/paragraphes | toutes | entrée dans la vue | apparition par ligne `Zh` (titre) / `Uh` (description), Small Text ressort `Qh` | module de route l. 12175–12360 | courbe | [ ] |
| C-HOMEB-002 | `/` | 06 Process Accordian | ≥ 810 | défilement (marqueurs 2/3/4, 100vh chacun, seuil 0.5) | variante Step 1→2→3→4 et retour en remontant ; carte active `sgGQEcV9Z`, tween 0.46 s `[0.87,0,0.13,1]` | code `vL1rEwvHQ` (Process Accordion) ; DOM 1440 fin de défilement = Step 4 | scénario + captures | [ ] |
| C-HOMEB-003 | `/` | 06 Process container | ≥ 810 | défilement | conteneur sticky top 0, 100vh ; bloc Process translaté `y 0 → 500` quand le Reel atteint le haut | CSS `17mh57q` ; code `onScrollTarget` | courbe y(scroll) | [ ] |
| C-HOMEB-004 | `/` | 06 Process | < 810 | — | pas de variante au défilement, toutes les cartes en `XmV4tQ_ou`, hauteur 450, pas de sticky | code + CSS mobile | capture 390 | [ ] |
| C-HOMEB-005 | `/` | Reel : 12:33 mins, Play, Reel, (2012-26©), vignette | toutes | défilement (cible `Play becomes active here`) | transformations 3D départ → neutre (Play x −500, Reel x +500, Play Reel scale 2 rot −10/15/25…) | code (l. ~15400–15700) | courbe | [ ] |
| C-HOMEB-006 | `/` | Reel : vignette | toutes | clic | fenêtre superposée (portail `#template-overlay`), fond `rgba(13,13,13,0.85)` fondu 0.46 s, lecteur YouTube 80 %/85 %/90 % de large, autoplay, son actif, pas de boucle | code + banc 1440 | scénario | [ ] |
| C-HOMEB-007 | `/` | Reel : fenêtre | toutes | Échap | fermeture | banc 1440 (`afterEsc=false`) | scénario | [ ] |
| C-HOMEB-008 | `/` | Reel : fenêtre | toutes | clic sur le fond | fermeture | banc 1440 | scénario | [ ] |
| C-HOMEB-009 | `/` | Reel : fenêtre ouverte | toutes | molette | défilement de la page bloqué (`html { overflow: hidden }`) | banc 1440 | scénario | [ ] |
| C-HOMEB-010 | `/` | 07 Testimonials : flèche droite | toutes | clic | 1→2→3→1, compteur `0n / 03` | banc 1440 | scénario | [ ] |
| C-HOMEB-011 | `/` | 07 Testimonials : flèche gauche | toutes | clic | 1→3→2→1 | banc 1440 | scénario | [ ] |
| C-HOMEB-012 | `/` | 07 Testimonials : citation | toutes | clic | diapositive suivante ; curseur personnalisé `1v6kiai` au survol | code + banc | scénario | [ ] |
| C-HOMEB-013 | `/` | 07 Testimonials | toutes | 15 s sans action | aucun changement (pas d'auto-défilement) | banc 1440 | scénario | [ ] |
| C-HOMEB-014 | `/` | 07 carte de témoignage | toutes | montage (changement de diapositive) | apparitions nom/rôle/grand texte (ligne), petit texte (mot), portrait, ligne animée 1 s, chiffres en ressort | code `Testimonial Card` | courbe | [ ] |
| C-HOMEB-015 | `/` | 08 Pricing : toggle | toutes | clic `Per Project` / `Monthly` | variante Desktop Toggled / Phone Toggled : base `$12,000`, `/project`, inclusions et prix d'options Per Project ; retour inverse ; fondu 0.46 s | code + banc 1440 | scénario | [ ] |
| C-HOMEB-016 | `/` | 08 Pricing : option | toutes | clic sur la ligne ou sur la case | bascule cochée/décochée (une seule bascule), texte gris → blanc, coche 0.2 s easeOut | banc 1440 | scénario | [ ] |
| C-HOMEB-017 | `/` | 08 Pricing : total | toutes | toute combinaison | 32 totaux = base + options (tableau `homeb.md`), format `$` + séparateur, `+$` pour les options | banc 1440, 32/32 conformes | scénario 32 cas | [ ] |
| C-HOMEB-018 | `/` | 08 Pricing : total | toutes | changement de total | compteur 0.6 s easeOut (courbe mesurée) ; saut sans animation hors vue | banc 1440 `curve` | courbe | [ ] |
| C-HOMEB-019 | `/` | 08 Pricing : cases | toutes | changement d'onglet | les cases cochées sont conservées | banc 1440 | scénario | [ ] |
| C-HOMEB-020 | `/` | 08 Pricing Card blocs Top / Included / Add-ons | toutes | entrée dans la vue (seuil 0.5) | `y −20/20 → 0`, opacité 0 → 1, 0.85 s, délais 0.6/0.7/0.8 s | code | courbe | [ ] |
| C-HOMEB-021 | `/` | 09 FAQ item | toutes | clic | ouvert ↔ fermé, hauteur 51 → 175 (item 1, 1440), Plus 0 → 360°, fond titre gris clair → noir, texte noir → blanc, réponse 0 → 1, 0.46 s | code + banc 1440 | courbe | [ ] |
| C-HOMEB-022 | `/` | 09 FAQ | toutes | chargement | aucune question ouverte | banc 1440 | capture | [ ] |
| C-HOMEB-023 | `/` | 09 FAQ | toutes | clic sur un 2e item | items indépendants (plusieurs ouverts) — code, non vérifié au banc | code | scénario | [ ] |
| C-HOMEB-024 | `/` | 09 FAQ items | toutes | entrée dans la vue | `y 20 → 0`, opacité 0 → 1, 0.85 s, délais 0.3…0.8 s | code | courbe | [ ] |
| C-HOMEB-025 | `/` | 10 formulaire | toutes | envoi vide | validation native, bulle sur `Name`, message `Please fill out this field.` ; bouton `Incomplete` | banc 1440 | scénario | [ ] |
| C-HOMEB-026 | `/` | 10 formulaire | toutes | email `abc` | message `Please include an '@' in the email address. 'abc' is missing an '@'.` | banc 1440 | scénario | [ ] |
| C-HOMEB-027 | `/` | 10 formulaire | toutes | saisie | largeur des champs fixe (pas d'adaptation) ; aucun style de focus | banc 1440 | scénario | [ ] |
| C-HOMEB-028 | `/` | 10 select `Start` | toutes | chargement | `ASAP` sélectionné par défaut (`When…` désactivé) | banc 1440 | scénario | [ ] |
| C-HOMEB-029 | `/` | 10 formulaire | toutes | envoi valide (lu dans le code, jamais déclenché) | Loading (flou 5 px, scale 0.95) → Success 800 ms après (opacité 0.35 + popup `Received/Review/Discovery`) ; Error : champs 0.5, bouton `Error, Try Again` | code `n_03H18N2` + `toplevel-deps` | test sur le clone avec envoi simulé | [ ] |
| C-HOMEB-030 | `/` | 10 bouton `Start a project` | toutes | survol | glissement des calques `top`/`bottom` (à mesurer) | DOM (2 calques) | courbe | [ ] |
| C-HOMEB-031 | `/` | 11 View All / cartes | toutes | survol | double calque texte (View All) et double image (cartes), curseur `a8ccln` — à mesurer | DOM | courbe | [ ] |
| C-HOMEB-032 | `/` | 11 cartes | toutes | clic | navigation `./journal/<slug>` même onglet | DOM | scénario | [ ] |
