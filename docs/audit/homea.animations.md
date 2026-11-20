# Animations — accueil, sections homea (Hero → Meet the team)

Sources : `R` = `reference/framer-code/pretty/J_la0crrNhwxVDm3QRQL50OHFMp-MUpGrN-W8FsMusA.D3aw61EU.mjs.js` ; composants embellis dans `reference/framer-code/pretty/`. **Aucune courbe mesurée.** Paramètres relevés dans le code ; courbes à mesurer avec le banc corrigé (D-021, commit 451b003 : avant ce correctif, les animations WAAPI de motion basculaient en une image) : colonne « Courbe » = à relever dans `reference/curves/home/<id>.json`.

| ID registre | Élément | Page | Déclencheur | Départ → arrivée | Type (ressort s/d/m ou durée + courbe) | Délai / décalage | Relecture | Sources | Courbe |
|---|---|---|---|---|---|---|---|---|---|
| C-HOMEA-A01 | Hero (section sticky), desktop seulement | / | défilement, cible = section About (`onScrollTarget`, seuil 1) | opacity 1 → 0.6, scale 1 → 0.925 | lié au défilement | — | réversible | R.L12712-12753 | à mesurer (D-021) |
| C-HOMEA-A02 | Hero « Inside Container », desktop seulement | / | défilement (parallaxe) | translation, speed 130, offset 0 | lié au défilement | — | réversible | R.L13007-13017 | à mesurer (D-021) |
| C-HOMEA-A03 | H2 About « Positioning Headline » | / | entrée dans la vue (seuil 0) | par ligne : opacity 0.001 → 1, y 15 → 0 | tween 1.1 s, ease [.215,.61,.355,1] | startDelay 0.2 s, décalage 0.1 s | non | R `Ih` L12183 | à mesurer (D-021) |
| C-HOMEA-A04 | Citation About, « Impact Supporting Copy », « Services Description » | / | entrée dans la vue | par ligne : opacity 0.001 → 1, y 15 → 0 | tween 0.8 s, même ease | startDelay 0.5 s, décalage 0.1 s | non | R `Uh` L12227 | à mesurer (D-021) |
| C-HOMEA-A05 | « Small Text » About | / | entrée dans la vue | par mot : opacity 0.001 → 1, y 5 → 0 | tween 0.6 s, même ease | startDelay 0.5 s, décalage 0.02 s | non | R `Wh` L12241 | à mesurer (D-021) |
| C-HOMEA-A06 | « Impact Headline », « Services Heading » | / | entrée dans la vue | par ligne : opacity 0.001 → 1, y 10 → 0 | tween 1.1 s, même ease | startDelay 0.2 s, décalage 0.2 s | non | R `Zh` L12333 | à mesurer (D-021) |
| C-HOMEA-A07 | Founder Profile Card (About) | / | entrée dans la vue (seuil 0) | opacity 0 → 1 | ressort bounce 0.1, 1.2 s | 0.5 s | non | R `Rh` L13483 | à mesurer (D-021) |
| C-HOMEA-A08 | Bloc nom/rôle de la carte du fondateur | / | entrée dans la vue | opacity 0 → 1 | ressort bounce 0.1, 1.2 s | 0.6 s | non | R `Bh` L13544 | à mesurer (D-021) |
| C-HOMEA-A09 | « Signature » (About) | / | entrée dans la vue | opacity 0 → 1 (`translateY(-50%)` conservé) | ressort bounce 0.1, 1.2 s | 0.4 s | non | R `Hh` L13560 | à mesurer (D-021) |
| C-HOMEA-A10 | « Philosophy Link » | / | entrée dans la vue | opacity 0 → 1 | ressort bounce 0.1, 1.2 s | 1.0 s | non | R `Gh` L13661 | à mesurer (D-021) |
| C-HOMEA-A11 | Founder Profile Card, variante d'apparition | / | 50 % visible | `Q7SnnxNQf` → `cqy9B66RZ` (« Revealed ») ; `Q7SnnxNQf` absent du composant | tween 0.46 s, ease [.87,0,.13,1] | — | non | R L13509-13513 ; jvKQE_ghl L155-389 | effet réel inconnu, à mesurer (D-021) |
| C-HOMEA-A12 | Work « Logo / Text Reveal / Button » | / | « Trigger 2 » entièrement visible (seuil 1) | x -100 → 0, opacity 0 → 1 | tween 0.6 s, ease [.44,0,.56,1] | 0 | **oui** (animateOnce false) | R `Kh`/`qh` L13724 | à mesurer (D-021) |
| C-HOMEA-A13 | Work « Projects Collection » (bouton See all 6) | / | « Trigger 2 » visible (seuil 1) | x 50 → 0, opacity 0 → 1 | tween 0.6 s, ease [.44,0,.56,1] | 0.1 s | **oui** | R `Jh`/`Yh` L13849 | à mesurer (D-021) |
| C-HOMEA-A14 | Work « Text Reveal » (50 BRANDS. 14 YEARS. ONE STANDARD.) | / | défilement (`type: scrub`, viewport bottom, section = Trigger 1) | lignes : masque, x 10 → 0 ; mots : masque, opacity 0 → 1 | lignes : 0.6 s `power2.in`, stagger 0.365, delay 0.07 ; mots : 0.8 s linéaire, stagger 0.965, delay 0.15 | voir type | oui (`replay: true`) | R L13769-13840 (composant de code `hf`) | à mesurer (D-021) |
| C-HOMEA-A15 | Work « Media » | / | défilement jusqu'à « Trigger 1 » | scale 3.1 → 1 | lié au défilement | — | réversible | R L13952-13980 | à mesurer (D-021) |
| C-HOMEA-A16 | Work « Dark Overlay » | / | défilement jusqu'à « Trigger 1 » | opacity 0 → 1 (× 0.65 cible) | lié au défilement | — | réversible | R L13986-14014 | à mesurer (D-021) |
| C-HOMEA-A17 | Clients : logos, avatars, note, années | / | entrée dans la vue (seuil 0) | opacity 0 → 1 | ressort bounce 0.1, 1.2 s | 0.1 à 0.8 s selon l'élément (correspondance à compléter) | non | jvKQE_ghl L2420-2445, L2570-2976 | à mesurer (D-021) |
| C-HOMEA-A18 | « Impact Footnote » / bloc Why us | / | entrée dans la vue | opacity 0 → 1 | ressort bounce 0.1, 1.2 s | 0.9 s | non | R `Qh` L14456 | à mesurer (D-021) |
| C-HOMEA-A19 | Bar Graph « Top Bar » | / | 50 % visible (variante Start → End) | largeur 1px → 100 % ; « +47% inbound » opacity 0 → 1 | tween 0.76 s, ease [.87,0,.13,1] | 0.4 s | non | vL1rEwvHQ L1838-1846, CSS `framer-v-1aedll2` | à mesurer (D-021) |
| C-HOMEA-A20 | Project Metric « Animated Line » (×2) | / | 50 % visible (`b5cbcgrAD` → `iLlY2rby8`) | width 0 % → 100 % (h 1px) | tween 1 s, ease [.56,.22,.05,.99] | 0 | non | JKo4PdE_2 L419-430 ; Eu60T7thi | à mesurer (D-021) |
| C-HOMEA-A21 | Service Card, survol (état Closed) | / | survol | Overlay opacity 0.85 → 0.65 ; icône rotate 0 → -360° | tween 0.46 s, ease [.87,0,.13,1] | 0 | à chaque survol | vL1rEwvHQ L5046-6028 | à mesurer (D-021) |
| C-HOMEA-A22 | Service Card, clic | / | clic | Open ↔ Closed (Phone Open ↔ Phone Closed) : « Service Info » opacity 1 ↔ 0, hauteur de la carte (layout) | tween 0.46 s, ease [.87,0,.13,1] | 0 | à chaque clic | vL1rEwvHQ L5341-5361 | à mesurer (D-021) |
| C-HOMEA-A23 | Team : H2 « WE STAYED SMALL… » | / | entrée dans la vue | par ligne (effet `xt`) | tween 1.1 s | délai 0.1 s | non | jvKQE_ghl L530-540 | à mesurer (D-021) |
| C-HOMEA-A24 | Team : cartes membres (×4) | / | entrée dans la vue | opacity 0 → 1 | ressort bounce 0.1, 1.2 s | 0.5 + 0.1 × index s | non | jvKQE_ghl L594 `Dt(Et, a*.1)` | à mesurer (D-021) |
| C-HOMEA-A25 | Team : texte du Hiring Block | / | entrée dans la vue | par ligne (effet `jt`) | tween 0.8 s | 0.1 s | non | jvKQE_ghl L638-672 | à mesurer (D-021) |

Les survols des boutons Primary Link (« See the studio », « Start a project », « Email us ») et du bouton photo du hero sont des composants partagés (`v7Wd3N72W`, `toplevel-deps`) : à documenter par l'agent header/boutons. Les mêmes timings s'appliquent ici.
