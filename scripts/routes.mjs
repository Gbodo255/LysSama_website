// Routes de l'original (sitemap.xml) + une URL inexistante pour la 404. Mêmes chemins dans le clone.
export const ROUTES = [
  '/', '/projects', '/studio', '/journal', '/contact',
  '/projects/gucci', '/projects/chanel', '/projects/puma', '/projects/adidas', '/projects/nike', '/projects/under-armour',
  '/journal/fewer-projects-more-attention', '/journal/awards-dont-build-brands', '/journal/why-we-quote-fixed',
  '/journal/the-best-type-is-invisible', '/journal/on-saying-no', '/journal/the-brief-before-the-brief',
  '/journal/small-looks-expensive', '/journal/the-founder-is-the-brand',
  '/privacy-policy', '/terms-conditions', '/cookie-policy',
  '/this-page-does-not-exist-404',
];
export const slugOf = (r) => (r === '/' ? 'home' : r.slice(1).replace(/\//g, '__'));
