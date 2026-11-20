# Animations — agent contact

| ID registre | Élément | Page | Déclencheur | Départ → arrivée | Type (ressort s/d/m ou durée + courbe) | Délai / décalage | Relecture | Sources | Courbe |
|---|---|---|---|---|---|---|---|---|---|
| C-CONTACT-002 | H1 « start a project. » (`f17uai`) | /contact | chargement | opacity .001, y 40 → 1, 0 | ressort 120 / 25 / 0.3 | 1 s | non | W8Mju5L `Ie`/`Le` | à relever |
| C-CONTACT-003 | Intro hero (par ligne) | /contact | onInView, threshold 0 | opacity .001, y 15 → 1, 0 | tween 0.8 s [.215,.61,.355,1] | startDelay 1.1 s, +0.1 s par ligne | non | W8Mju5L `X` | à relever |
| C-CONTACT-004 | Logo Top (`i3k6v0`) | /contact | chargement | opacity .001 → 1 | ressort bounce .1, durée 1.2 s | 1.2 s | non | W8Mju5L `Pe` | — |
| C-CONTACT-004 | Nav Top (`6hdhbv`) | /contact | chargement | opacity .001 → 1 | ressort bounce .1, durée 1.2 s | 1.3 s | non | W8Mju5L `Fe` | — |
| C-CONTACT-005 | Icônes sociales (`c6ixgn`) | /contact | chargement | opacity .001 → 1 | ressort bounce .1, durée 1.2 s | 1.4 s | non | W8Mju5L `Re` | — |
| C-CONTACT-005 | Address (`wkv69t`) | /contact | chargement | opacity .001 → 1 | ressort bounce .1, durée 1.2 s | 1.5 s | non | W8Mju5L `ze` | — |
| C-CONTACT-005 | Office hours (`1yutnjb`) | /contact | chargement | opacity .001 → 1 | ressort bounce .1, durée 1.2 s | 1.6 s | non | W8Mju5L `Be` | — |
| C-CONTACT-007 | Conteneur Contact CTA | /contact | entrée dans la vue, threshold 0 | opacity 0, y 40 → 1, 0 | tween 0.85 s [.215,.61,.355,1] | 1.4 s | non (animateOnce) | W8Mju5L `Ve`/`He` | — |
| C-CONTACT-013 | Formulaire → Loading / Success | /contact | envoi | filter none → blur(5px), scale 1 → .95 (+ opacity .35 en Success) ; spinner opacity 0 → 1 | transition du composant (homeb) | Success 800 ms après onSuccess | — | n_03H18N2 | non mesurable (pas d'envoi) |
| C-CONTACT-017 | Item FAQ (hauteur) | /contact | clic | 51 → 175 px (Q1, 1440) | 0.46 s [.87,0,.13,1] | — | à chaque clic | NIqbhJ1MS l.397 + mesure | reference/agents/contact/interact/1440.json (`faqClick1Curve`, `faqClick2Curve`) |
| C-CONTACT-017 | Icône Plus FAQ | /contact | clic | barre verticale → `top: 12px` (variante) | 0.26 s [.87,0,.13,1] | — | à chaque clic | NIqbhJ1MS l.224, CSS `framer-v-5x09si` | à relever |
| C-CONTACT-020 | Logo / nav Top (`1w1rh85`, `1kt5x92`) | légales | chargement | opacity .001 → 1 | ressort bounce .1, durée 1.2 s | 1.3 s / 1.4 s | non | oYmZ9Uf `pt`/`mt` | — |
| C-CONTACT-021 | « Last Updated » (`85otex`) | légales | chargement | opacity .001 → 1 | ressort bounce .1, durée 1.2 s | 1.2 s | non | oYmZ9Uf `ht` | — |
| C-CONTACT-023 | H1 (`1p9fj0l`) | légales | chargement | opacity .001, y 40 → 1, 0 | ressort 120 / 25 / 0.3 | 1 s | non | oYmZ9Uf `yt`/`bt` | — |
| C-CONTACT-024 | Intro (par ligne) | légales | onInView | opacity .001, y 15 → 1, 0 | tween 0.8 s [.215,.61,.355,1] | startDelay 1.1 s, +0.1 s/ligne | non | oYmZ9Uf `xt` | — |
| C-CONTACT-025 | Corps riche (`104pdxd`) | légales | entrée dans la vue, threshold 0 | opacity 0, y 40 → 1, 0 | ressort 120 / 25 / 0.3 | 1.3 s | non (animateOnce) | oYmZ9Uf `St`/`Ct` | — |
| C-CONTACT-026 | Lien du corps (survol) | /privacy-policy | survol | #fff / fond rouge → #f5f4e7 / #1d1f19 | 0.6 s cubic-bezier(.4,0,.2,1) | — | à chaque survol | CSS preset `vu1xf3` | à relever |
