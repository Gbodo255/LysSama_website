# Animations — composants globaux

| ID registre | Élément | Page | Déclencheur | Départ → arrivée | Type (ressort s/d/m ou durée + courbe) | Délai / décalage | Relecture | Sources | Courbe |
|---|---|---|---|---|---|---|---|---|---|
| C-GLOBAL-003/004/005 | Side Nav (largeur, layout) | toutes | survol (desktop) / tap (tablette) | 56 px → 493 px (et retour) | tween 0,4 s cubic-bezier(.87,0,.13,1) | 0 | à chaque ouverture | TD:22024 `Mx` | reference/agents/global/interact/desk.json (openCurve, closeCurve) |
| C-GLOBAL-003 | Overlay BG filtre | toutes | ouverture / fermeture | grayscale 0 → 1 / 1 → 0 | ouverture 0,6 s [.4,0,.2,1] ; fermeture 0,5 s [.4,0,.2,1] | 0 | oui | TD:22029-22037 `Nx`/`Px` | desk.json |
| C-GLOBAL-003 | Overlay BG opacité | toutes | ouverture / fermeture | 0 → .85 / .85 → 0 | code : mêmes transitions que le filtre ; mesure : bascule en 1 image (à recouper) | 0 | oui | TD:22240 | desk.json, mobile.json |
| C-GLOBAL-003 | Menu (contenu) | toutes | ouverture / fermeture | correction de layout (scaleX) | ouverture 0,5 s [.4,0,.2,1] délai 0,2 s (`Rx`) ; fermeture `Px` 0,5 s | 0,2 s à l'ouverture | oui | TD:22057 | desk.json menuT |
| C-GLOBAL-003/006 | Hamburger → croix | toutes | ouverture / fermeture | 4 carrés → croix (rotate 180°, rangées ±45°) | tween 0,5 s cubic-bezier(.87,0,.13,1) | 0 | oui | TD:20393 | à mesurer |
| C-GLOBAL-006/007 | Side Nav mobile (hauteur) | toutes | tap | 51,97 → 494,16 px (x,y 6→3, l 378→384, rayon 10→12) | tween 0,4 s cubic-bezier(.87,0,.13,1) | 0 | oui | mesure | mobile.json |
| C-GLOBAL-009 | Nav Item (2 copies du libellé) | toutes | survol | copie 1 : y 0 → −h, opacité 1→0 ; copie 2 : y +h → 0, opacité 0→1 (h = 25 px barre de page, 45 px menu) | tween 0,36 s cubic-bezier(.87,0,.13,1) | 0 | oui (sortie inverse) | TD:18601 | desk.json hoverNavItemStudio / hoverTopLinkStudio |
| C-GLOBAL-012 | Contact Button | toutes | survol | Button scale 1→.95, rayon 4→16 ; photo rayon 4→12 ; flèche translateX | tween 0,56 s cubic-bezier(.87,0,.13,1) | 0 | oui | TD:21765 | desk.json hoverMenuContactBtn / hoverFooterContactBtn |
| C-GLOBAL-013 | Icône sociale (menu) | toutes | survol | opacité 1 → .5 | tween 0,3 s cubic-bezier(.4,0,.2,1) | 0 | oui | TD:21178 | desk.json hoverMenuSocialX |
| C-GLOBAL-020 | Join Now | toutes | survol (Default) | BG scale 1→.95 ; texte haut opacité 1→0 scale 1→.9 ; texte bas opacité 0→1 | tween 0,56 s cubic-bezier(.87,0,.13,1) | 0 | oui | TD:23054 | à mesurer |
| C-GLOBAL-017 | Join Now | toutes | champ vide ↔ rempli | opacité .75 ↔ 1 | tween 0,56 s cubic-bezier(.87,0,.13,1) | 0 | oui | TD:23054, desk.json nl | à mesurer |
| C-GLOBAL-022 | Curseur (position) | toutes | mousemove | suit le pointeur (translate) | ressort stiffness 500, damping 60, mass 1 | 0 | continu | TD:25300 `bT` | à mesurer |
| C-GLOBAL-022 | Curseur (disque) | zones curseur | entrée/sortie de zone | scale 0 ↔ 1 | ressort bounce .2 durée .4 (`cy`) ; texte : tween 0,56 s [.87,0,.13,1] (`sy`) | 0 | oui | TD:19939-19947 | à mesurer |
| C-GLOBAL-023 | Défilement Lenis | toutes sauf 404 | molette | lissage | lerp .1 (duration .8, easing e=>Math.min(1,1.001-2**(-10*e)) inutilisé quand lerp est défini) | — | continu | Lenis.B0ikntHt.mjs, desk.json lenis | à mesurer |
