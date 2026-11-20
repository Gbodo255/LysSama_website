// Étape C — CSS d'origine : extrait les <style> de chaque page dans reference/css/<page>.css,
// puis les tokens (--token-*), @font-face, @media et presets typographiques dans reference/framer/tokens.json.
import fs from 'node:fs/promises';
import path from 'node:path';

const REF = path.resolve('reference');
const files = (await fs.readdir(path.join(REF, 'html'))).filter((f) => f.endsWith('.html'));
await fs.mkdir(path.join(REF, 'css'), { recursive: true });

const tokens = {}, fontFaces = new Map(), medias = {}, presets = {};
const decls = (body) => Object.fromEntries(body.split(';').map((d) => d.trim()).filter(Boolean).map((d) => { const i = d.indexOf(':'); return [d.slice(0, i).trim(), d.slice(i + 1).trim()]; }));

for (const f of files) {
  const html = await fs.readFile(path.join(REF, 'html', f), 'utf8');
  const css = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].map((m) => m[1]).join('\n');
  await fs.writeFile(path.join(REF, 'css', f.replace('.html', '.css')), css);
  for (const m of css.matchAll(/(--token-[\w-]+)\s*:\s*([^;}]+)/g)) (tokens[m[1]] ||= new Set()).add(m[2].trim());
  for (const m of css.matchAll(/@font-face\s*\{([^}]*)\}/g)) {
    const d = decls(m[1]);
    const key = `${d['font-family']}|${d['font-style'] || 'normal'}|${d['font-weight'] || '400'}|${d['unicode-range'] || ''}`;
    if (!fontFaces.has(key)) fontFaces.set(key, { ...d, url: (d.src || '').match(/url\(([^)]+)\)/)?.[1]?.replace(/["']/g, '') });
  }
  for (const m of css.matchAll(/@media\s*([^{]+)\{/g)) medias[m[1].trim()] = (medias[m[1].trim()] || 0) + 1;
  // Presets typographiques : .framer-styles-preset-xxx:not(.rich-text-wrapper), ... { --framer-font-size: ...; }
  for (const m of css.matchAll(/(@media[^{]+\{)?\s*(\.framer-styles-preset-[\w-]+)[^{]*\{([^}]*--framer-font[^}]*)\}/g)) {
    const bp = m[1] ? m[1].replace(/@media\s*|\{/g, '').trim() : 'base';
    ((presets[m[2]] ||= {})[bp] ||= decls(m[3]));
  }
}
const out = {
  tokens: Object.fromEntries(Object.entries(tokens).map(([k, v]) => [k, [...v]])),
  fontFaces: [...fontFaces.values()],
  medias,
  presets,
};
await fs.writeFile(path.join(REF, 'framer', 'tokens.json'), JSON.stringify(out, null, 2));
console.log(`tokens=${Object.keys(out.tokens).length} fontFaces=${out.fontFaces.length} medias=${Object.keys(medias).length} presets=${Object.keys(presets).length}`);
console.log([...new Set(out.fontFaces.map((f) => f['font-family']))].join(' | '));
