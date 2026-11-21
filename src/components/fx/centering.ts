// Framer compose ses transformations animées après le centrage du calque (`translate(-50%, -50%)`, `translateX(-50%)`…)
// présent dans le style SSR : même préfixe conservé via `transformTemplate` de motion.
export function centering(style: unknown) {
  const t = (style as { transform?: string } | undefined)?.transform;
  // préfixes conservés : perspective(…) (transformPerspective Framer) et centrages translate(…%)
  const m = typeof t === 'string' ? t.match(/^((?:(?:perspective\([^)]*\)|translate[XY]?\([^)]*%[^)]*\))\s*)+)/) : null;
  if (!m) return undefined;
  const pre = m[1].trim();
  return (_: unknown, generated: string) => (generated && generated !== 'none' ? `${pre} ${generated}` : pre);
}
