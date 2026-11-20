# Demandes de l'agent homea

1. **Banc trop lent sous charge** : `gotoStable(h, '/')` sur l'accueil a dépassé 7 à 9 minutes à 5 reprises (1440 et 390, `net` en `record` comme en `replay`, `scrollStep` 0.5 ou 1), avec environ 72 % de CPU pris par les navigateurs des autres agents. Le même appel avait pris 173 s plus tôt dans la session. Il faut relancer `node scripts/agents/homea/dom.mjs <w>` (variables `STEP=1 NET=replay`) quand la machine sera libre, pour 1440, 1200, 810 et 390, puis `node scripts/agents/homea/summarize.mjs <w>`. On pourrait aussi ajouter au banc un journal de progression dans `gotoStable`.
2. **Courbes à relever** (Étape F) : C-HOMEA-A01 à A25 (`docs/audit/homea.animations.md`). Aucune n'a été mesurée.
3. **LIMITATIONS / LINKS** (fusion) : « Email us » (Hiring Block) est un `<a>` sans `href` (placeholder). Contenu de démonstration : statistiques +47 %, 4.9/5, 50+, 100 %, 6 Wks, 40+, équipe fictive et noms de marques dans le slider.
