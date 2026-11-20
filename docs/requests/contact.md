# Demandes — agent contact

1. **docs/LIMITATIONS.md** (section « Contenu à corriger au rebranding ») — ajouter :
   - `/cookie-policy` décrit une bannière de cookies et un lien « Cookie preferences » dans le footer, absents du site (reproduits absents) ;
   - `/cookie-policy` cite « "Last Updated" » alors que l'étiquette affichée est « Last updated » ;
   - `/privacy-policy` donne `hello@mirastudio.com`, le reste du site `hello@mira.studio` ;
   - adresse « 2800 East Observatory Road Los Angeles, USA 90027 » (Griffith Observatory), téléphone `+1 (805) 450 1432`, « 2 slots for August '26 » : démo ;
   - le formulaire de contact poste vers `api.framer.com/forms/...` : à remplacer par un point d'envoi propre (le clone ne doit appeler aucun domaine Framer) — décision à consigner dans docs/DECISIONS.md.
2. **docs/LINKS.md / COMPORTEMENTS.md / ANIMATIONS.md** : fusionner `docs/audit/contact.links.md`, `contact.comportements.md`, `contact.animations.md` (IDs `C-CONTACT-NNN`).
3. **Composants partagés** : Contact CTA (`n_03H18N2`) et FAQ Section (`NIqbhJ1MS`) doivent accepter un index de section `0` = index masqué (`showIndex = count !== 0`), utilisé sur /contact (accueil : 10 et 9).
4. **Contenu légal** : `content/legal/<slug>.md` porte un front-matter (`title`, `lastUpdated`, `demo: true`) ; l'intro est dans `src/data/contact.ts` (`legalPages[].intro`) car elle n'appartient pas au corps riche. L'intro est un `<p>` en desktop et un `<h2>` en tablette/mobile (surcharge Framer) — à reproduire.
