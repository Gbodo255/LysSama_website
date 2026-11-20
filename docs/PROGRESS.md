# Avancement

Statuts : `[ ]` à faire · `[~]` en cours · `[x]` validé (chemin de la preuve) · `[KO]` diagnostic.
Reprise après interruption : relire `MISSION.md`, ce fichier, puis `docs/COMPORTEMENTS.md`.

## Phase 0 — Mise en place
- [x] 0.1 Projet Next.js + motion + outils de vérification + Chromium Playwright — `package.json`, D-001, D-003
- [x] 0.2 git init + .gitignore
- [x] 0.3 Versions consignées — `docs/DECISIONS.md` D-001
- [x] 0.4 Entrées du propriétaire vérifiées : MCP Framer absent, `framer-code/` absent — D-002
- [x] 0.5 Fichiers de pilotage créés
- [~] 0.6 Scripts npm (déclarés dans package.json ; implémentés au fil des phases)
- [~] 0.7 Banc de mesure `scripts/lib/harness.mjs` + contrôle de déterminisme sur l'accueil de l'original — `reference/screenshots/_selftest/ref/result.json`

## Phase 1 — Capture et gel de la référence
- [~] Étape 0 — Projet Framer / code source : indisponibles (D-002) ; modules compilés téléchargés `reference/framer/js/` (57)
- [~] Étape A — HTML brut des 22 routes + 404 + sitemap/robots — `reference/html/` ; archive réseau complète — `reference/har/`
- [ ] Étape A — rejeu hors ligne complet, 0 requête manquante
- [ ] Étape B — textes `reference/text.json` (toutes pages, largeurs, états)
- [ ] Étape C — tokens, @media, @font-face, licences de polices, styles de texte
- [ ] Étape D — DOM rendu, géométrie, retours à la ligne, captures (listes A et B)
- [ ] Étape E — registre `docs/COMPORTEMENTS.md`
- [ ] Étape F — animations (sources + courbes) `docs/ANIMATIONS.md`
- [ ] Étape G — WebGL (slider hero, vitrine, 404) `docs/WEBGL.md`
- [ ] Étape H — assets + `public/assets/manifest.json`
- [ ] Étape I — données (`content/`, `src/data/`)
- [ ] Étape J — synthèse `docs/AUDIT.md`

## Phase 2 — Fondations
- [ ] tokens.css / globals.css / polices
- [ ] breakpoints partagés CSS/TS
- [ ] site.config.ts
- [ ] banc branché sur le clone + déterminisme
- [ ] Préchargeur — 1440 / 1200 / 810 / 390
- [ ] Header — 1440 / 1200 / 810 / 390
- [ ] Footer + Newsletter — 1440 / 1200 / 810 / 390

## Phase 3 — Pages (sections listées après l'audit ; chaque section × 1440/1200/810/390)
- [ ] `/` accueil
- [ ] `/projects`
- [ ] `/projects/gucci` · `chanel` · `puma` · `adidas` · `nike` · `under-armour`
- [ ] `/studio`
- [ ] `/journal`
- [ ] `/journal/<8 articles>`
- [ ] `/contact`
- [ ] `/privacy-policy` · `/terms-conditions` · `/cookie-policy`
- [ ] 404

## Phase 4 — Interactions (lignes du registre)
## Phase 5 — Animations (`compare/animations.md`)
## Phase 6 — WebGL (`compare/webgl.md`)
## Phase 7 — Responsive (listes A, B, C)
## Phase 8 — Vérification visuelle (`compare/report.md`)
## Phase 9 — Tests fonctionnels et différentiels
## Phase 10 — Revue indépendante
## Phase 11 — Qualité, `check:launch`, RAPPORT.md

## Point de reprise (2026-11-20, limite d'usage atteinte)
- Phase 0 validée (commit 4bf31d4). Banc : WebGL désactivé pour les captures statiques (D-019, à consigner), stabilisation image par image.
- Fondations posées : `src/styles/{fonts,framer-base,tokens,presets,globals}.css`, `src/app/layout.tsx`, `PageStyle`, pages vides pour chaque route.
- Audits terminés : slider du hero + préchargeur (`docs/audit/preloader.md`, `docs/WEBGL.md`, `reference/framer-code/extracted/`).
- Audits interrompus (fichiers partiels dans `docs/audit/`, `src/data/`, `content/`) : homea, homeb, projects, studio, journal, contact, global, vitrine/404. Relancer avec les mêmes briefs (`docs/agents/brief-audit.md`, `docs/AGENTS-RULES.md`).
- Extraction liste A (`node scripts/extract.mjs --net=record --widths=1440,1200,810,390 --jobs=3`) : non lancée.
