// Navigation latérale (C-023, C-025..C-029), liens du menu et du footer (docs/LINKS.md), navigation par clic (C-048).
// Valeurs : docs/audit/global.md (Side Nav 56 → 493 px ; mobile 378×51,97 → [3,3,384×494,16] ; overlay .85).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { useBrowser, load, settle, measure, center, visible, near, closeAll } from './lib/clone.mjs';

const s = useBrowser();
const NAV = '.framer-tVn1f';
const SIDE = '.framer-3der5';
const OVERLAY = '.framer-1f8xv28';
const FOOTER = '.framer-ubdqd9';
const ROUTE = '/privacy-policy';
const tap = async (page, [x, y]) => page.touchscreen.tap(x, y);

test('desktop 1440 : survol ouvre (56 → 493 px, overlay .85), sortie ferme', async () => {
  const h = await load(s.browser, ROUTE, 1440);
  try {
    const { page } = h;
    assert.ok(near((await measure(page, SIDE, NAV)).w, 56, 1), 'fermé : 56 px');
    await page.mouse.move(...(await center(page, SIDE, NAV)));
    await settle(page, 1000);
    assert.ok(near((await measure(page, SIDE, NAV)).w, 493, 2), 'ouvert : 493 px');
    assert.equal((await measure(page, OVERLAY, NAV))?.opacity, '0.85');
    await page.mouse.move(1300, 450);
    await settle(page, 1000);
    assert.ok(near((await measure(page, SIDE, NAV)).w, 56, 1), 'refermé : 56 px');
  } finally { await closeAll(h); }
});

test('tablette 810 : tap sur la barre ouvre, tap sur l\'overlay ferme', async () => {
  const h = await load(s.browser, ROUTE, 810);
  try {
    const { page } = h;
    await tap(page, await center(page, '.framer-1wba9e6', NAV));
    await settle(page, 1000);
    assert.ok(near((await measure(page, SIDE, NAV)).w, 493, 2), 'ouvert : 493 px');
    await tap(page, [700, 450]);
    await settle(page, 1000);
    assert.ok(near((await measure(page, SIDE, NAV)).w, 56, 1), 'refermé : 56 px');
  } finally { await closeAll(h); }
});

test('mobile 390 : tap hamburger ouvre [3,3,384×494], re-tap ferme (378×52)', async () => {
  const h = await load(s.browser, ROUTE, 390);
  try {
    const { page } = h;
    const closed = await measure(page, SIDE, NAV);
    assert.ok(near(closed.w, 378, 2) && near(closed.h, 51.97, 2), `fermé : ${closed.w}×${closed.h}`);
    await tap(page, await center(page, '.framer-bQHEq', NAV));
    await settle(page, 1000);
    const open = await measure(page, SIDE, NAV);
    assert.ok(near(open.x, 3, 1) && near(open.y, 3, 1) && near(open.w, 384, 2) && near(open.h, 494.16, 2), `ouvert : ${JSON.stringify(open)}`);
    await tap(page, await center(page, '.framer-bQHEq', NAV));
    await settle(page, 1000);
    const again = await measure(page, SIDE, NAV);
    assert.ok(near(again.w, 378, 2) && near(again.h, 51.97, 2), `refermé : ${again.w}×${again.h}`);
  } finally { await closeAll(h); }
});

test('liens du menu et du footer : href relatifs et cibles de l\'original', async () => {
  const h = await load(s.browser, ROUTE, 1440);
  try {
    const links = (root) => h.page.evaluate((r) => [...document.querySelectorAll(`${r} a`)].map((a) => ({ href: a.getAttribute('href'), target: a.getAttribute('target') })), root);
    const nav = await links(NAV), foot = await links(FOOTER);
    const hrefs = (l) => new Set(l.map((x) => x.href));
    for (const href of ['./', './projects', './studio', './journal', './contact']) assert.ok(hrefs(nav).has(href), `menu : ${href}`);
    for (const href of ['./', './projects', './studio', './journal', './contact', './privacy-policy', './terms-conditions', './cookie-policy']) assert.ok(hrefs(foot).has(href), `footer : ${href}`);
    for (const href of ['https://x.com', 'https://instagram.com', 'https://dribbble.com', 'https://behance.com']) {
      for (const [name, l] of [['menu', nav], ['footer', foot]]) {
        const a = l.filter((x) => x.href === href);
        assert.ok(a.length > 0, `${name} : ${href}`);
        assert.ok(a.every((x) => x.target === '_blank'), `${name} : ${href} en _blank`);
      }
    }
    for (const l of [...nav, ...foot]) if (l.href?.startsWith('.')) assert.notEqual(l.target, '_blank', `${l.href} même onglet`);
  } finally { await closeAll(h); }
});

test('clic : lien Studio du menu ouvert → /studio', async () => {
  const h = await load(s.browser, ROUTE, 1440);
  try {
    const { page } = h;
    await page.mouse.move(...(await center(page, SIDE, NAV)));
    await settle(page, 1000);
    await visible(page, `${NAV} a[href="./studio"]`).click();
    await settle(page, 3000);
    assert.equal(new URL(page.url()).pathname, '/studio');
  } finally { await closeAll(h); }
});

test('clic : logo / Home du footer → / (C-048)', async () => {
  const h = await load(s.browser, ROUTE, 1440);
  try {
    const { page } = h;
    await visible(page, `${FOOTER} a[href="./"]`).click();
    await settle(page, 6000); // préchargeur de l'accueil (C-001)
    assert.equal(new URL(page.url()).pathname, '/');
  } finally { await closeAll(h); }
});

test('clic : lien Terms & Conditions. du footer → /terms-conditions', async () => {
  const h = await load(s.browser, ROUTE, 1440);
  try {
    const { page } = h;
    await visible(page, `${FOOTER} a[href="./terms-conditions"]`).click();
    await settle(page, 3000);
    assert.equal(new URL(page.url()).pathname, '/terms-conditions');
  } finally { await closeAll(h); }
});
