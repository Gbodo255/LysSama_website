// Routes et cibles de liens du clone (export statique servi par scripts/serve-out.mjs). Sans navigateur : HTTP seulement.
// Référence : HTML SSR de l'original figé dans reference/html/<slug>.html (même rendu serveur des deux côtés).
import { test, before } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { ROUTES, slugOf } from '../../scripts/routes.mjs';
import { ROOT } from '../../scripts/lib/harness.mjs';
import { CLONE_ORIGIN, serverUp } from './lib/clone.mjs';

const NOT_FOUND = '/this-page-does-not-exist-404';
const ref = (route) => fs.readFileSync(path.join(ROOT, 'reference', 'html', slugOf(route) + '.html'), 'utf8');
const get = (route) => fetch(CLONE_ORIGIN + route, { redirect: 'manual' });
const html = new Map();

before(async () => {
  await serverUp();
  for (const r of ROUTES) html.set(r, await (await get(r)).text());
});

// Liens internes (href relatifs « ./… » « ../… ») : multiensemble trié, comptes compris.
const relHrefs = (src) => [...src.matchAll(/<a\b[^>]*?\shref="(\.[^"]*)"/g)].map((m) => m[1]).sort();
const title = (src) => /<title>([^<]*)<\/title>/.exec(src)?.[1].replace(/&amp;/g, '&') ?? null;
const robots = (src) => /<meta name="robots" content="([^"]*)"/.exec(src)?.[1] ?? null;

for (const r of ROUTES) {
  test(`statut HTTP ${r}`, async () => {
    const res = await get(r);
    assert.equal(res.status, r === NOT_FOUND ? 404 : 200);
  });
  test(`liens internes identiques à l'original ${r}`, () => {
    assert.deepEqual(relHrefs(html.get(r)), relHrefs(ref(r)));
  });
  test(`titre et robots identiques à l'original ${r}`, () => {
    assert.equal(title(html.get(r)), title(ref(r)));
    assert.equal(robots(html.get(r)), robots(ref(r)));
  });
}

// C-104 / C-169 : slug inconnu d'une collection → 404 ; C-022 : robots noindex.
for (const r of ['/projects/slug-inconnu', '/journal/slug-inconnu']) {
  test(`slug inconnu → 404 ${r}`, async () => {
    const res = await get(r);
    assert.equal(res.status, 404);
    assert.equal(robots(await res.text()), 'noindex');
  });
}
