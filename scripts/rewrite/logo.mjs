// Logo du menu (masque CSS .framer-1xjrc) : icône d'origine conservée, lettres « MIRA » remplacées par « LYS ».
import fs from 'node:fs';
const icon = fs.readFileSync('public/assets/icons/RJYJ7m4uMRkQG50UIT9V4iefE.svg', 'utf8').match(/<path[^>]*\/>/g).join('');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 13">${icon}<text x="18.2" y="12.4" font-family="Arial Black,Arial,Helvetica,sans-serif" font-weight="900" font-size="14.5" textLength="28.8" lengthAdjust="spacingAndGlyphs" fill="%23FFF">LYS</text></svg>`;
const url = 'url("data:image/svg+xml,' + svg.replace(/#FFF/g, '%23FFF').replace(/"/g, '\\"') + '")';
const START = 'url("data:image/svg+xml,<svg display=\\"block\\" id=\\"2948800472\\"', END = '</svg>")';
let n = 0;
for (const f of ['src/components/nav/SharedNavigation.css', 'src/components/shared/ContactCta.css', 'src/sections/home/b/Pricing.css', 'src/sections/projects/case/case.css']) {
  let s = fs.readFileSync(f, 'utf8'), i;
  while ((i = s.indexOf(START)) >= 0) { const j = s.indexOf(END, i) + END.length; s = s.slice(0, i) + url + s.slice(j); n++; }
  fs.writeFileSync(f, s);
}
console.log('masques remplacés', n);
