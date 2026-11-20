// Fusionne les registres des audits (docs/audit/<id>.{comportements,animations,links}.md) dans
// docs/COMPORTEMENTS.md, docs/ANIMATIONS.md, docs/LINKS.md. Renumérote C-NNN ; l'ID d'origine est
// gardé entre crochets dans la colonne « Source ». Relançable : réécrit les trois fichiers.
import fs from 'node:fs';
const D = 'docs/audit/', ORDER = ['core', 'global', 'homea', 'homeb', 'projects', 'studio', 'journal', 'contact'];
const rows = (f) => (fs.existsSync(D + f) ? fs.readFileSync(D + f, 'utf8').split('\n').filter((l) => l.startsWith('| ') && !/^\| (ID|Page \| Breakpoint)/.test(l) && !/^\|[-| ]+\|$/.test(l)) : []);
const cells = (l) => l.slice(2, -2).split(' | ');
const map = new Map(); const out = []; let n = 0;
for (const id of ORDER) for (const l of rows(id + '.comportements.md')) {
  const c = cells(l); const old = c[0]; const neu = 'C-' + String(++n).padStart(3, '0');
  map.set(old, neu); c[0] = neu; c[6] = `${c[6]} [${old}]`; out.push('| ' + c.join(' | ') + ' |');
}
const sub = (s) => s.replace(/\b[CA]-[A-Z]+-[A-Z]?\d+\b/g, (m) => map.get(m) || m);
const head = (f) => fs.readFileSync(f, 'utf8').split('\n').filter((l, i, a) => !l.startsWith('| ') || i <= a.findIndex((x) => /^\|[-| ]+\|$/.test(x))).join('\n').trimEnd();
const put = (f, body) => fs.writeFileSync(f, head(f) + '\n' + body.join('\n') + '\n');
put('docs/COMPORTEMENTS.md', out);
let a = 0; // animations : ID du registre si l'animation en a un, sinon A-NNN ; ID d'origine gardé dans « Sources »
put('docs/ANIMATIONS.md', ORDER.flatMap((id) => rows(id + '.animations.md').map((l) => { const c = cells(l); const old = c[0]; c[0] = map.get(old) || 'A-' + String(++a).padStart(3, '0'); c[8] = `${sub(c[8])} [${old}]`; return '| ' + c.slice(0, 1).concat(c.slice(1).map(sub)).join(' | ') + ' |'; })));
put('docs/LINKS.md', ORDER.flatMap((id) => rows(id + '.links.md')));
console.log({ comportements: out.length, animations: ORDER.flatMap((id) => rows(id + '.animations.md')).length, liens: ORDER.flatMap((id) => rows(id + '.links.md')).length });
// Contrôle : chaque ligne a le même nombre de colonnes que l'en-tête.
for (const f of ['docs/COMPORTEMENTS.md', 'docs/ANIMATIONS.md', 'docs/LINKS.md']) {
  const t = fs.readFileSync(f, 'utf8').split('\n').filter((l) => l.startsWith('| ')); const k = cells(t[0]).length;
  const bad = t.filter((l) => cells(l).length !== k); if (bad.length) console.log(f, 'colonnes irrégulières :', bad.length, bad[0].slice(0, 120));
}
