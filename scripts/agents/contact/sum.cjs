// Résumé lisible d'un relevé géométrie (sans les spans lettre à lettre).
const g = require(require('path').resolve(process.argv[2]));
const y0 = +(process.argv[3] || 0), y1 = +(process.argv[4] || 1e9);
console.log(g.url, g.viewport, 'H', g.scrollHeight, 'errors', g.errors.length);
for (const it of g.items) {
  if (it.rect.y < y0 || it.rect.y > y1) continue;
  const single = it.tag === 'span' && it.text && it.text.length <= 2 && !it.name;
  if (single) continue;
  if (!it.text && !['a', 'img', 'input', 'textarea', 'select', 'button', 'video', 'svg', 'label'].includes(it.tag) && !(it.name && process.argv.includes('--names'))) continue;
  const s = it.style, r = it.rect;
  console.log([Math.round(r.y), Math.round(r.x), Math.round(r.width) + 'x' + Math.round(r.height), it.tag, it.name || '', JSON.stringify((it.text || '').slice(0, 90)),
    it.href || '', it.src ? it.src.split('/').pop().slice(0, 50) : '', it.alt != null ? 'alt=' + JSON.stringify(it.alt) : '',
    it.type ? [it.type, JSON.stringify(it.placeholder), it.nameAttr].join('|') : '',
    it.text ? [s.fontFamily.split(',')[0], s.fontWeight, s.fontSize, s.lineHeight, s.letterSpacing, s.textTransform, s.color].join(' ') : '',
    it.lines && it.lines.length > 1 ? 'L:' + it.lines.join('/') : ''].filter(Boolean).join(' '));
}
