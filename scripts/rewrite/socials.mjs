// Réseaux de Lys Sama dans les pages générées (contact, studio) : X, Instagram, TikTok, Facebook, WhatsApp (D-043).
// Le bloc « Behance » (lien Threads) devient Facebook, et un bloc WhatsApp est ajouté juste après. Idempotent.
// Liens Facebook / WhatsApp à fournir par Lys : remplacer « #facebook-a-fournir » / « #whatsapp-a-fournir » partout (rg a-fournir).
import fs from 'node:fs';

const START = '<div className="framer-1cdugcb-container" data-framer-name="Behance"';
let n = 0;
for (const f of ['src/gen/contact/Body.tsx', 'src/gen/studio/Body.tsx']) {
  let s = fs.readFileSync(f, 'utf8'), i;
  while ((i = s.indexOf(START)) >= 0) {
    const j = s.indexOf('</div>', s.indexOf('</VRoot>', i)) + '</div>'.length;
    const block = s.slice(i, j), indent = s.slice(s.lastIndexOf('\n', i) + 1, i);
    if (!block.includes('https://www.threads.com/@lys__sama')) throw new Error(`bloc inattendu dans ${f}`);
    const as = (name, href, cls) => block.replaceAll('Behance', name).replace('https://www.threads.com/@lys__sama', href)
      .replace(/aria-label=\{T\[\d+\]\}/, `aria-label="Lien ${name}"`).replace('framer-lYLYO', cls);
    s = s.slice(0, i) + as('Facebook', '#facebook-a-fournir', 'framer-lYLYO') + '\n' + indent + as('WhatsApp', '#whatsapp-a-fournir', 'lys-whatsapp') + s.slice(j);
    n++;
  }
  fs.writeFileSync(f, s);
}
console.log('blocs réécrits :', n);
