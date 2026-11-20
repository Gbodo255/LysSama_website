# Animations — `/studio` (agent studio)

Format de `docs/ANIMATIONS.md`. Courbes mesurées : `reference/agents/studio/anim-1440.json`, `lightbox-1440.json`.

| ID registre | Élément | Page | Déclencheur | Départ → arrivée | Type (ressort s/d/m ou durée + courbe) | Délai / décalage | Relecture | Sources | Courbe |
|---|---|---|---|---|---|---|---|---|---|
| C-STUDIO-001 | Hero (desktop) | /studio | Défilement (cible Culture, seuil 1) | scale 1 → 0.925, opacité 1 → 0.6 | lié au défilement, linéaire (progression ≈ scrollY/859) | — | réversible | module | anim-1440 `heroScroll`, `heroCurve` |
| C-STUDIO-003 | Inside Container du hero (desktop) | /studio | Défilement | translateY 0 → −0.3·scrollY | parallaxe speed 130 | — | réversible | module | anim-1440 `heroScroll` |
| C-STUDIO-004 | Fond de hero cM8Lf1CeK | /studio | Entrée en vue 0.5 | masque 0 % → 100 %, scale 1.5 → 1 ; voile opacité 0.65 | ressort 120/25/0.3 ; voile tween 0.5 s `[.4,0,.2,1]` | 0.8 s ; voile 0.1 s | non | cM8Lf1CeK | non mesurée |
| C-STUDIO-005 | H1 « the studio. » | /studio | Chargement (appear 1wbcwny) | opacité .001 → 1, y 40 → 0 | ressort 120/25/0.3 | 1.15 s | non | module (kt, At) | non mesurée |
| C-STUDIO-006 | Chapeau du hero | /studio | onInView | par ligne : opacité .001 → 1, y 15 → 0 | tween 0.8 s `[.215,.61,.355,1]` | startDelay 1.25 s, 0.1 s entre lignes | non | module (jt) | non mesurée |
| C-STUDIO-007 | Nav du hero 8330z8 / 7hchzy, Location, Services, f6zjzb | /studio | Chargement | opacité .001 → 1 | ressort bounce 0.1, durée 1.2 s | 1.25 / 1.35 / 1.45 / 1.55 / 1.65 s | non | module (Dt, Ot, Mt, Nt, Ft) | non mesurée |
| C-STUDIO-009 | Images culture 1 et 2 | /studio | Entrée en vue | opacité 0 → 1, x −20 → 0 | tween 0.85 s `[.215,.61,.355,1]` | 0.3 s / 0.4 s | non | module (Y, It, Lt) | non mesurée |
| C-STUDIO-010 | Lightbox culture | /studio | Clic | vignette (117 px) → 840 × 840 ; fond rgba(23,22,22,.75) | tween 0.46 s `[.87,0,.13,1]` (mesure ≈ 480 ms) | 0 | à chaque clic | module (X) | lightbox-1440 `img1.curve`, `img2.curve` |
| C-STUDIO-013 | H2 « We care about details… » | /studio | onInView | par ligne : opacité .001 → 1, y 15 → 0 | tween 1.1 s `[.215,.61,.355,1]` | startDelay 0.2 s, 0.1 s entre lignes | non | module (Rt) | non mesurée |
| C-STUDIO-014 | Compteurs 12 / 3 / 24hr / 92% | /studio | Entrée en vue (some) | 0 → fin (texte, toFixed(0)) | ressort 500/60/1 (motion animate) | 0 | oui (remise à 0 à la sortie) | rWbx8J1Z4 (Y) | anim-1440 `counterCurve`, `counterReplay` |
| C-STUDIO-017 | H2 « What guides us. », « Awards. » | /studio | onInView | par ligne : opacité .001 → 1, y 10 → 0 | tween 1.1 s `[.215,.61,.355,1]` | startDelay 0.2 s, 0.2 s entre lignes | non | module (Z) | non mesurée |
| C-STUDIO-018 | Numéros de principes | /studio | Défilement (carte, seuil 0.5) | translateY −100 → 0 | lié au défilement | — | réversible | rWbx8J1Z4 (Q) | anim-1440 `principles` |
| C-STUDIO-019 | Filets des principes | /studio | Entrée en vue 0.5 | variante b5cbcgrAD → iLlY2rby8 | tween 1 s `[.56,.22,.05,.99]` | 0 | non | rWbx8J1Z4 + Eu60T7thi | non mesurée |
| C-STUDIO-019 | Filets des prix (4 lignes) | /studio | Entrée en vue 0.5 | variante → iLlY2rby8 | tween 1 s `[.56,.22,.05,.99]` | 0.1 / 0.2 / 0.3 / 0.4 s | non | module (BvVagVT4d) + rWbx8J1Z4 (J) | non mesurée |
