// L'original écrit ses liens internes en relatif depuis la page courante (`./projects`, `../projects`) : même valeur d'attribut.
export function relHref(to: string, from: string): string {
  const depth = Math.max(0, from.split('/').filter(Boolean).length - 1);
  const target = to.replace(/^\//, '');
  return (depth === 0 ? './' : '../'.repeat(depth)) + target;
}

// Auto-contrôle (node --experimental-strip-types src/lib/href.ts)
if (typeof process !== 'undefined' && process.argv?.[1]?.endsWith('href.ts')) {
  const eq = (a: string, b: string) => { if (a !== b) throw new Error(`${a} !== ${b}`); };
  eq(relHref('/', '/privacy-policy'), './');
  eq(relHref('/projects', '/'), './projects');
  eq(relHref('/projects', '/projects/gucci'), '../projects');
  eq(relHref('/', '/journal/on-saying-no'), '../');
  console.log('href ok');
}
