# Liens — agent contact (contenu de page seulement ; header/menu/footer : autres agents)

Mesurés dans `reference/agents/contact/geometry/<slug>/<w>.json` (1440 et 390 ; identiques à 1200/810 pour le contenu).

| Page | Breakpoint | Libellé | Destination | Cible | Statut (réel / placeholder / incohérent) |
|---|---|---|---|---|---|
| /contact | tous | icône X (hero, Bottom) | https://x.com | _blank | placeholder (racine du réseau) |
| /contact | tous | icône Instagram (hero) | https://instagram.com | _blank | placeholder |
| /contact | tous | icône Dribbble (hero) | https://dribbble.com | _blank | placeholder |
| /contact | tous | icône Behance (hero) | https://behance.com | _blank | placeholder (domaine `behance.com`, le vrai est behance.net) |
| /contact | tous | « terms » (mention du formulaire) | ./terms-conditions | — | réel |
| /contact | tous | « privacy policy. » (mention du formulaire) | ./privacy-policy | — | réel |
| /contact | tous | « +1 (805) 450 1432 » | tel:+18054501432 | _blank | placeholder (numéro de démo) |
| /contact | tous | « hello@mira.studio » (carte CTA) | mailto:hello@mira.studio | _blank | placeholder (adresse de démo) |
| /contact | tous | « hello@mira.studio » + flèche (FAQ, « Desktop - Right » / « Phone Right ») | mailto:hello@mira.studio | — | placeholder |
| /contact | tous | formulaire (action) | https://api.framer.com/forms/v1/forms/c71bee6d-c169-40fa-bab9-1ec6105cfe8a/submit (POST) | — | réel côté Framer — à remplacer (le clone ne doit appeler aucun domaine Framer) |
| /privacy-policy | tous | « hello@mirastudio.com » (corps, § Your Rights and Choices) | mailto:hello@mirastudio.com | _blank | incohérent (le reste du site : hello@mira.studio) |
| /terms-conditions | tous | — | aucun lien dans le corps | — | — |
| /cookie-policy | tous | « Cookie preferences » (cité dans le texte) | inexistant | — | incohérent (lien décrit mais absent du footer) |
