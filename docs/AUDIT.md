# Audit — synthèse (Étape J)

Détails par périmètre dans `docs/audit/<id>.md`. Registres fusionnés par `node scripts/merge-registers.mjs` :
`docs/COMPORTEMENTS.md` (197 lignes), `docs/ANIMATIONS.md` (150), `docs/LINKS.md` (140). Décisions D-001 à D-028.

## Pages et sections, dans l'ordre

| Route | Sections | Audit |
|---|---|---|
| `/` | Préchargeur · Hero (slider WebGL, sticky + échelle 0,925 / opacité 0,6 en desktop) · 01 About (+ Work Section : médias 3,1 → 1 au défilement) · 02 Clients · 03 Why us (barre 1 px → 100 %, chiffres fixes) · 04 Services (carte 1 ouverte, bascule au clic) · 05 Team · 06 Process (accordéon piloté par le défilement) · Reel (fenêtre YouTube) · 07 Témoignages (3 diapositives, sans auto-défilement) · 08 Pricing (32 totaux) · 09 FAQ (6, toutes fermées) · 10 Book a call (formulaire) · 11 Journal · Footer + Newsletter | `preloader.md`, `WEBGL.md`, `homea.md`, `homeb.md` |
| `/projects` | Vitrine incurvée WebGL plein écran, défilement horizontal (Lenis) | `projects-webgl.md` |
| `/projects/<slug>` ×6 | Hero (sticky en desktop ; Play Film sur gucci/puma, sinon lightbox) · titre/année/accroche · Brief · Approach · Outcomes · Results · The Word · services/durée/View live · More projects (5) · contact | `projects.md` |
| `/studio` | Hero (sticky, échelle/opacité, parallaxe) · Culture (+ lightbox, compteurs à ressort rejoués) · Équipe · Principes 01–04 · Clients · Prix · Journal · Contact | `studio.md` |
| `/journal` | Liste de 8 (masonry 4 pistes ≥ 1200, 2 pistes < 1200), survol zoom/flou + curseur « Read Article » | `journal.md` |
| `/journal/<slug>` ×8 | Back · catégorie · H1 · date · auteur · couverture · chapeau · corps h3/p · Share (Twitter, LinkedIn, Email, copie) · More articles (4) | `journal.md` |
| `/contact` | Hero · Contact CTA (index masqué) · FAQ (index masqué) | `contact.md` |
| Légales ×3 | modèle CMS unique, « Last updated » collant (≥ 810), intro `<p>` desktop / `<h2>` tablette-mobile | `contact.md` |
| 404 | Texte 3D filaire (three r136), repli `<span>` | `404.md` |

## Composants partagés (à construire une seule fois)
Barre latérale de navigation (56 → 493 px, mobile : barre supérieure dépliable) · barre de liens haut de page · Footer + Newsletter · curseur personnalisé (Default / View Project / Read Article / Next) · lien à double libellé (`v7Wd3N72W`) · bouton « let's talk » · Contact CTA (`n_03H18N2`) · FAQ (`NIqbhJ1MS`) · Équipe (`b8Sr4iAT1`) · Clients (`j5aYpocx_`) · From the journal / More articles (`pgtQfyOCv`) · carte d'article (`caaAwhF9X`) · fenêtre vidéo YouTube · lightbox Framer · préchargeur · slider du hero · vitrine · 404. Index de section 0 = numéro masqué.

## Tokens, typographies, breakpoints
- Breakpoints : mobile ≤ 809,98 · tablette 810–1199,98 · desktop ≥ 1200 (D-005). Racine du site 20 px en desktop (global.md).
- Tokens : `reference/framer/tokens.json` ; accent rendu `rgb(245,45,15)` (D-028). Polices auto-hébergées : `public/assets/fonts/`, `src/styles/fonts.css`. Presets : `src/styles/presets.css`. Presque tous les textes Mona Sans en `text-transform: uppercase` (source en casse mixte).

## Interactions et animations
- Apparitions : ressorts et tweens lus dans les modules (`docs/ANIMATIONS.md`), courbes à mesurer après D-021.
- Défilement : Lenis 1.3.25 (D-025). Pas de transition entre pages (changement instantané, préchargeur seulement sur `/`).
- Formulaires : validation native, états lus dans le code (D-023). Vidéos : iframe YouTube (D-024).

## Liens
140 liens (`docs/LINKS.md`) ; placeholders : réseaux sociaux, « Email us », View live, Twitter.

## Manques connus (à combler)
- Géométrie de l'accueil à 810 et survols non mesurés : couverts par l'extraction liste A (Étape D) et la Phase 4.
- Courbes d'animation : Étape F, à mesurer avec le banc corrigé (D-021).
- Images WebGL de référence : Étape G.
- Logos clients (SVG de `Client Logo`) et masques SVG en ligne à rattacher au manifest (requests projects/global).
