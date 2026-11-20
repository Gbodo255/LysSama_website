# Règles strictes pour les agents parallèles

Plusieurs agents travaillent **en même temps dans le même dossier**. Ces règles évitent qu'un agent défasse le travail d'un autre. Toute violation est une faute, même si elle « aide ».

## 1. Écriture : uniquement tes fichiers
- Tu n'écris, ne modifies, ne renommes et ne supprimes **que** les fichiers et dossiers listés dans ton brief sous « Tes fichiers », plus `scripts/agents/<ton-id>/` (scripts jetables) et `reference/agents/<ton-id>/` (sorties brutes).
- Tout le reste est en **lecture seule**, en particulier :
  - `scripts/lib/**`, les scripts existants de `scripts/`, `package.json`, `package-lock.json`, `next.config.ts`, `tsconfig.json`, `.gitignore` ;
  - `src/styles/**`, `src/app/layout.tsx`, `src/components/**` (sauf si ton brief te les attribue) ;
  - `docs/DECISIONS.md`, `docs/PROGRESS.md`, `docs/COMPORTEMENTS.md`, `docs/LIMITATIONS.md`, `docs/LINKS.md`, `docs/ANIMATIONS.md`, `docs/AUDIT.md`, `CLAUDE.md`, `MISSION.md`, ce fichier ;
  - `reference/html/**`, `reference/css/**`, `reference/framer/**`, `reference/har/**`, `public/assets/**`.
- Besoin d'un changement dans un fichier qui n'est pas à toi (décision, limitation, correctif du banc, asset manquant, dépendance) : écris la demande dans **`docs/requests/<ton-id>.md`** (ton fichier) et mentionne-la dans ton rapport final. La session principale l'appliquera.
- Si un fichier à toi existe déjà (reprise), relis-le avant de le réécrire.

## 2. Git, npm, processus
- **Aucune commande git qui écrit** : pas de `add`, `commit`, `checkout`, `switch`, `reset`, `restore`, `stash`, `rebase`, `merge`, `clean`, `branch`, `tag`. Lecture seule autorisée (`status`, `log`, `diff`, `show`). Seule la session principale commite.
- **Aucun** `npm install/uninstall/update`, aucun nouveau paquet. `npx --yes js-beautify@1.15.4` est la seule exception.
- **Ne tue jamais un processus que tu n'as pas lancé** : pas de `pkill`, `killall`, `taskkill` sur `node`/`chrome`. D'autres agents ont des navigateurs ouverts.
- Pas de `next dev` ni de `next build` pendant la vague d'audit (réservés à la session principale ; les agents de construction recevront un port et un dossier dédiés).

## 3. Navigateur et banc
- **Un seul navigateur Playwright à la fois** par agent, toujours via `scripts/lib/harness.mjs`, fermé à la fin (`closeAll` + `browser.close()`), et chaque exécution ≤ 10 min.
- Par défaut `launch({ webgl: false })` (D-019). WebGL activé uniquement si ton brief porte sur un composant WebGL.
- Réseau : `openPage(..., { net: 'record' })` est autorisé (l'archive `reference/har/` accepte plusieurs processus). Ne supprime ni ne modifie jamais l'archive.
- **Ne soumets jamais un formulaire valide sur l'original** : uniquement des cas vides ou invalides.
- N'ouvre jamais d'URL hors de `mirastudio.framer.website` / `framerusercontent.com` (sauf lecture de `fonts.gstatic.com` déjà archivée).

## 4. Méthode
- Mesurer, jamais deviner : chaque valeur vient du code, du CSS d'origine ou d'une mesure avec le banc. Une inconnue reste marquée « inconnu » avec ce qui a été tenté.
- Ne jamais afficher un fichier entier : `grep -n`, `sed -n 'a,bp'`, `cut -c`, petits scripts node. Pas de WebFetch.
- Tout ce que tu apprends va dans tes fichiers, au fil de l'eau (pas seulement à la fin) : si tu es interrompu, le travail reste.
- Documents en français.
- Identifiants du registre : préfixe propre à ton agent (ex. `C-HOMEA-001`) pour ne jamais entrer en collision ; la session principale fusionne et renumérote.

## 5. Rapport final
≤ 300 mots : fichiers écrits, faits clés, inconnues restantes, demandes dans `docs/requests/<ton-id>.md`.
