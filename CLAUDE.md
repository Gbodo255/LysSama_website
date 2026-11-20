# Mira Studio — clone exact (voir MISSION.md)

**Avant toute action, lis docs/PROGRESS.md et docs/COMPORTEMENTS.md.** Source de vérité : `MISSION.md`.

Exigence absolue : reproduire à l'identique, mesuré (pas à l'œil), tout ce que fait https://mirastudio.framer.website/ — aucune simplification, approximation, omission ni ajout.

Règles : mesurer, jamais deviner · pas de WebFetch pour l'audit (curl/Playwright → fichiers bruts) · ne jamais afficher un fichier entier (rg/scripts) · tout écrire sur disque · ne pas copier le runtime Framer · ne rien inventer · aucune case cochée sans preuve · même banc (`scripts/lib/harness.mjs`) pour original et clone · référence figée (`reference/har/`, rejouée hors ligne) · git commit à chaque étape validée, preuve dans le message · 6 cycles max par section puis KO · décider seul et consigner dans docs/DECISIONS.md · ne jamais soumettre un formulaire valide sur l'original · rien en ligne avant `npm run check:launch`.

Breakpoints confirmés (@media d'origine) : mobile 0–809 · tablette 810–1199 · desktop ≥ 1200. Listes : A = 1440/1200/810/390, B = 1920/1280/1024/768/430/375/360.

Stack : Next.js 16 (App Router, export statique) · React 19 · TypeScript 5 · motion 14 · three.js + Lenis (mêmes que l'original) · CSS Modules + tokens CSS · Playwright/pixelmatch/sharp pour la vérification.

Banc : `node scripts/harness-selftest.mjs --target=ref|clone` (doit rester < 0,1 %). Temps virtuel : horloge Playwright + recalage WAAPI (`advance()`). Pas = 16 ms.

Disque C: presque plein (~5 Go libres) : captures lourdes en WebP sans perte, nettoyer `reference/screenshots/_selftest`.
