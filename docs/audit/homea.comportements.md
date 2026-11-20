# Registre des comportements — accueil, sections homea (Hero → Meet the team)

Format de `docs/COMPORTEMENTS.md`. Source « module » = lecture du code (voir homea.animations.md) ; « SSR » = `reference/agents/homea/ssr-texts.txt` ; « banc » = `reference/agents/homea/dom-1440.json`/`dom-1200.json`. Rien n'est coché : aucune preuve sur le clone.

| ID | Page | Élément | Largeurs | Déclencheur | Résultat exact | Source de la mesure | Preuve attendue | Statut |
|---|---|---|---|---|---|---|---|---|
| C-HOMEA-001 | / | Hero | ≥ 1200 | défilement sur l'About | hero sticky, opacity 1 → 0.6, scale 1 → 0.925 | module R.L12712 | courbe au défilement | [ ] |
| C-HOMEA-002 | / | Hero | 810-1199, ≤ 809 | défilement | pas de réduction ni d'opacité (effet désactivé) | module (overrides `void 0`) | courbe plate | [ ] |
| C-HOMEA-003 | / | Hero « Inside Container » | ≥ 1200 | défilement | parallaxe speed 130 | module R.L13016 | courbe de translation | [ ] |
| C-HOMEA-004 | / | Hero « Top » (logo + liens) | ≤ 809 | chargement | absent (`hidden-1aemvzd`) | SSR | comparaison DOM 390 | [ ] |
| C-HOMEA-005 | / | Vignettes du slider | ≥ 810 | chargement | 4 boutons 90 × 50, active `translateX(8px)`, inactives opacity 0.3 | banc 1440 | comparaison pixels/DOM | [ ] |
| C-HOMEA-006 | / | Compteur « projects » du hero | ≥ 810 | rendu | SSR « 6 », rendu « (6) » (rouge, c95aba) | SSR + banc 1440 | comparaison texte | [ ] |
| C-HOMEA-007 | / | H2 About | toutes | entrée dans la vue | apparition par ligne, A03 | module | courbe | [ ] |
| C-HOMEA-008 | / | Citation / Small Text About | toutes | entrée dans la vue | A04 (ligne), A05 (mot) | module | courbe | [ ] |
| C-HOMEA-009 | / | Carte du fondateur, signature, lien | toutes | entrée dans la vue | A07-A10 (délais 0.5 / 0.6 / 0.4 / 1.0 s) | module | courbe | [ ] |
| C-HOMEA-010 | / | Work Section, médias | toutes | défilement | scale 3.1 → 1, voile 0 → 0.65 | module | courbe au défilement | [ ] |
| C-HOMEA-011 | / | Work Section, texte et bouton | toutes | Trigger 2 visible / sortie | entrée x -100 et x 50, **rejouée** à chaque entrée | module | scénario aller-retour | [ ] |
| C-HOMEA-012 | / | « 50 BRANDS. 14 YEARS. ONE STANDARD. » | toutes | défilement (scrub) | révélation lignes + mots, retours `<br>` forcés, « ONE » rouge | module + SSR | courbe + texte | [ ] |
| C-HOMEA-013 | / | Clients | toutes | entrée dans la vue | apparitions en ressort, délais 0.1-0.8 s | module | courbe | [ ] |
| C-HOMEA-014 | / | Bar Graph | toutes | 50 % visible, une fois | Top Bar 1px → 100 % et « +47% inbound » 0 → 1 en 0.76 s après 0.4 s ; Bottom Bar fixe à 25 % | module | courbe largeur/opacity | [ ] |
| C-HOMEA-015 | / | Chiffres 50+, 100%, 6 Wks, 40+ | toutes | chargement / vue | **statiques** (aucun compteur animé) | SSR = module | comparaison texte avant/après défilement | [ ] |
| C-HOMEA-016 | / | Lignes des Project Metric | toutes | 50 % visible, une fois | largeur 0 → 100 % en 1 s | module | courbe | [ ] |
| C-HOMEA-017 | / | Service Cards, état initial | toutes | chargement | carte 1 (Brand Identity) ouverte, cartes 2-4 fermées | module | comparaison DOM | [ ] |
| C-HOMEA-018 | / | Service Card | toutes | clic | bascule ouverte ↔ fermée, chaque carte indépendamment (à confirmer : pas d'exclusivité) | module | scénario de clic | [ ] |
| C-HOMEA-019 | / | Service Card fermée | ≥ 810 | survol | voile 0.85 → 0.65, icône -360° en 0.46 s | module | courbe | [ ] |
| C-HOMEA-020 | / | Service Cards | toutes | rendu | 2 instances de liste (desktop/tablette et mobile), une seule visible | SSR | comparaison DOM | [ ] |
| C-HOMEA-021 | / | Team, cartes | toutes | entrée dans la vue | apparition délai 0.5 + 0.1 × index ; disposition row (desktop) / column (tablette, mobile) | module | courbe + DOM | [ ] |
| C-HOMEA-022 | / | « Email us » | toutes | clic | aucun effet (lien sans href) | SSR | scénario de clic | [ ] |
| C-HOMEA-023 | / | Liens des sections | toutes | clic | destinations de `homea.links.md` | SSR | scénario de navigation | [ ] |
