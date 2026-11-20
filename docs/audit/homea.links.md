# Liens — accueil, sections homea (Hero → Meet the team)

Source : HTML SSR (`reference/agents/homea/ssr-texts.txt`, variantes 1440 / 900 / 390). Aucun lien de ce périmètre n'a `target` ni `rel`.

| Page | Breakpoint | Libellé | Destination | Cible | Statut (réel / placeholder / incohérent) |
|---|---|---|---|---|---|
| / (Hero, slot du slider) | tous | Gucci | ./projects/gucci | même onglet | réel |
| / (Hero, slot du slider) | tous | Chanel | ./projects/chanel | même onglet | réel |
| / (Hero, slot du slider) | tous | Puma | ./projects/puma | même onglet | réel |
| / (Hero, slot du slider) | tous | Adidas | ./projects/adidas | même onglet | réel |
| / (Hero « Top ») | desktop, tablette (absent mobile) | logo « mira » (aria-label home) | ./ | même onglet | réel |
| / (Hero « Top ») | desktop (« Small »), tablette (« Small Phone ») | projects (6) | ./projects | même onglet | réel |
| / (Hero « Top ») | desktop, tablette | Studio | ./studio | même onglet | réel |
| / (Hero « Top ») | desktop, tablette | Journal | ./journal | même onglet | réel |
| / (Hero « Bottom ») | tous (variante Desktop / Phone) | bouton photo (aria-label contact) | ./contact | même onglet | réel |
| / (About) | tous (Desktop - Right / Phone Right) | See the studio | ./studio | même onglet | réel |
| / (Work Section) | tous | See all 6 | ./projects | même onglet | réel |
| / (Why us) | tous | Start a project | ./contact | même onglet | réel |
| / (Services, ×4 cartes) | tous (Desktop - Right / Phone Right) | Start a project | ./contact | même onglet | réel |
| / (Team, Hiring Block) | tous | Email us | (aucun `href`) | — | placeholder (`<a>` sans adresse) |

Les vignettes du slider sont des `<button>` (pas des liens) : « Go to slide 1: GUCCI » … « Go to slide 4: ADIDAS ».
