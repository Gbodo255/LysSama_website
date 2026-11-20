# Animations — accueil, sections 06 à 11 (homeb)

Format de `docs/ANIMATIONS.md`. Courbes : `reference/agents/homeb/pricing-1440.json` (`curve`), `reference/agents/homeb/interact-1440.json` (`plusCurve`).

| ID registre | Élément | Page | Déclencheur | Départ → arrivée | Type (ressort s/d/m ou durée + courbe) | Délai / décalage | Relecture | Sources | Courbe |
|---|---|---|---|---|---|---|---|---|---|
| C-HOMEB-001 | Titres H2 (Process, Testimonials, Pricing) | `/` | en vue, seuil 0 | par ligne : opacité 0.001, y 10 → 1, 0 | tween 1.1 s `[0.215,0.61,0.355,1]` | startDelay 0.2 s, 0.2 s entre lignes | non | module de route `Zh` | à mesurer |
| C-HOMEB-001 | Descriptions (Big Text, Testimonials, Pricing) | `/` | en vue | par ligne : opacité 0.001, y 15 → 1, 0 | tween 0.8 s `[0.215,0.61,0.355,1]` | startDelay 0.5 s, 0.1 s entre lignes | non | `Uh`/`Fh` | à mesurer |
| C-HOMEB-001 | Process Small Text | `/` | en vue | opacité 0 → 1 | ressort bounce 0.1, 1.2 s | 0.9 s | non | `Qh` | à mesurer |
| C-HOMEB-002 | Process Accordion (cartes) | `/` ≥ 810 | défilement, seuil 0.5 | variante carte active / inactive | tween 0.46 s `[0.87,0,0.13,1]` | — | oui (deux sens) | `vL1rEwvHQ` | à mesurer |
| C-HOMEB-003 | Bloc Process | `/` ≥ 810 | défilement (cible Reel) | y 0 → 500 | lié au défilement | — | oui | `onScrollTarget` | à mesurer |
| C-HOMEB-005 | Reel Duration / Years | `/` | défilement | opacité 0, rot −5, rotX 5, rotY 15, y ∓50 → neutre (opacité cible 0.75) | lié au défilement | — | oui | module de route | à mesurer |
| C-HOMEB-005 | Play Reel (groupe) | `/` | défilement | rot −10, rotX 15, rotY 25, scale 2 → neutre | lié au défilement, perspective 1200 | — | oui | module de route | à mesurer |
| C-HOMEB-005 | Play / Reel (libellés) | `/` | défilement | x −500 / +500, opacité 0 → 0, 1 | lié au défilement | — | oui | module de route | à mesurer |
| C-HOMEB-006 | Fond de la fenêtre Reel | `/` | clic / fermeture | opacité 0 → 1 / 1 → 0 | tween 0.46 s `[0.4,0,0.2,1]` | 0 | oui | module de route | non concluante |
| C-HOMEB-006 | Lecteur Reel | `/` | clic / fermeture | opacité 0 → 1 / 1 → 0, centré | tween 0.6 s `[0.4,0,0.2,1]` | 0 | oui | `cg`/`og`/`ag` | non concluante |
| C-HOMEB-010 | Slider de témoignages (variantes) | `/` | flèche / clic citation | changement de diapositive | tween 0.6 s `[0.4,0,0.2,1]` | — | oui | `vL1rEwvHQ` `Zr` | à mesurer |
| C-HOMEB-014 | Carte témoignage : nom / rôle | `/` | montage, seuil 0.5 | par ligne : opacité 0.001, y 15 → 1, 0 | tween 0.6 s `[0.215,0.61,0.355,1]` | startDelay 0.4 / 0.5 s, 0.1 s | non | `Tr`/`Dr` | à mesurer |
| C-HOMEB-014 | Carte témoignage : grand texte | `/` | montage | par ligne : opacité 0.001, y 15 → 1, 0 | tween 0.8 s | startDelay 0.2 s, 0.1 s | non | `kr` | à mesurer |
| C-HOMEB-014 | Carte témoignage : petit texte | `/` | montage, seuil 0 | par mot : opacité 0.001, y 5 → 1, 0 | tween 0.6 s | startDelay 0.2 s, 0.02 s entre mots | non | `Ar` | à mesurer |
| C-HOMEB-014 | Carte témoignage : ligne animée | `/` | montage, seuil 0.5 | variante masquée → visible | tween 1 s `[0.56,0.22,0.05,0.99]`, origine gauche | — | non | `hr` | à mesurer |
| C-HOMEB-014 | Carte témoignage : chiffres | `/` | montage, seuil 0.5 | opacité 0 → 1 | ressort bounce 0.1, 1.2 s | 0.3 s / 0.4 s | non | `Mr`/`Nr` | à mesurer |
| C-HOMEB-015 | Pricing Card (variantes) | `/` | clic toggle | Monthly ↔ Per Project | tween 0.46 s `[0.87,0,0.13,1]` | — | oui | `um` | à mesurer |
| C-HOMEB-016 | Coche d'option | `/` | clic | opacité 0, scale 0.6 → 1, 1 | tween 0.2 s easeOut | — | oui | `Price Checkmark` | à mesurer |
| C-HOMEB-016 | Ligne d'option | `/` | clic | texte rgb(188,188,188) → blanc | tween 0.46 s `[0.87,0,0.13,1]` | — | oui | `Price Add-on` | à mesurer |
| C-HOMEB-018 | Total / Add-ons | `/` | changement de total | valeur → valeur (texte entier) | 0.6 s easeOut (motion `animate`) | 0 | oui | `Price Display` | `pricing-1440.json` `curve` (fin 608 ms) |
| C-HOMEB-020 | Pricing Top / Included / Add-ons | `/` | en vue, seuil 0.5 | y −20 / 20, opacité 0 → 0, 1 | tween 0.85 s `[0.215,0.61,0.355,1]` | 0.6 / 0.7 / 0.8 s | non | `dm`/`mm`/`fm`/`hm`/`gm` | à mesurer |
| C-HOMEB-021 | Item FAQ (hauteur, fond, texte, réponse) | `/` | clic | fermé ↔ ouvert | tween 0.46 s `[0.87,0,0.13,1]` | — | oui | `NIqbhJ1MS` | `interact-1440.json` `plusCurve` |
| C-HOMEB-021 | Icône Plus | `/` | clic | rotate 0 → 360° | tween 0.46 s `[0.87,0,0.13,1]` | — | oui | `Plus` | `plusCurve` |
| C-HOMEB-024 | Items FAQ | `/` | en vue, seuil 0 | y 20, opacité 0 → 0, 1 | tween 0.85 s `[0.215,0.61,0.355,1]` | 0.3 → 0.8 s (pas 0.1) | non | `NIqbhJ1MS` | à mesurer |
| C-HOMEB-029 | Formulaire (états) | `/` | onLoading / onSuccess / onError | flou 5 px, scale 0.95, opacité 0.35 (succès) ; champs 0.5 (erreur) | tween 0.6 s `[0.87,0,0.13,1]` | succès +800 ms | — | `n_03H18N2` | lu dans le code |
| C-HOMEB-029 | Bouton de formulaire (états) | `/` | état du formulaire | Default / Incomplete (opacité 0.75) / Loading / Success / Error | tween 0.56 s `[0.87,0,0.13,1]` | — | — | `toplevel-deps` | lu dans le code |
