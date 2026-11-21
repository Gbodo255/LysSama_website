// Formulaire de /contact (C-178, C-181, C-182) et newsletter du footer (C-039..C-043).
// Validation native uniquement ; l'envoi valide passe par submitForm() qui simule la réussite (aucune requête POST).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { useBrowser, load, settle, visible, scrollToSel, closeAll } from './lib/clone.mjs';

const s = useBrowser();
const EMPTY = 'Please fill out this field.';
const NO_AT = "Please include an '@' in the email address. 'abc' is missing an '@'.";
const CHECK = 'Please check this box if you want to proceed.';

const field = (form, name) => form.locator(`[name="${name}"]`);
const msg = (loc) => loc.evaluate((e) => e.validationMessage);
const valid = (form) => form.evaluate((f) => f.checkValidity());
const button = (form) => form.locator('button[type=submit]').first();
const buttonState = async (form) => button(form).evaluate((b) => ({ name: b.dataset.framerName ?? null, opacity: getComputedStyle(b).opacity }));
const noExternalForm = (h) => assert.deepEqual(h.missing.filter((u) => /framer\.com\/forms/.test(u)), []);

test('/contact : envoi vide bloqué, messages natifs, focus Name, bouton Incomplete', async () => {
  const h = await load(s.browser, '/contact', 1440);
  try {
    const form = visible(h.page, 'form.framer-3onib8');
    assert.deepEqual(await buttonState(form), { name: 'Incomplete', opacity: '0.75' });
    assert.equal(await valid(form), false);
    await button(form).click();
    await settle(h.page, 1000);
    for (const n of ['Name', 'Pitch', 'Email']) assert.equal(await msg(field(form, n)), EMPTY, n);
    assert.equal(await h.page.evaluate(() => document.activeElement?.getAttribute('name')), 'Name');
    assert.equal(new URL(h.page.url()).pathname, '/contact');
    assert.deepEqual(h.posts, []);
  } finally { await closeAll(h); }
});

test('/contact : email « abc » invalide, envoi bloqué', async () => {
  const h = await load(s.browser, '/contact', 1440);
  try {
    const form = visible(h.page, 'form.framer-3onib8');
    await field(form, 'Email').fill('abc');
    await settle(h.page, 300);
    assert.equal(await msg(field(form, 'Email')), NO_AT);
    assert.equal(await valid(form), false);
    await button(form).click();
    await settle(h.page, 1000);
    assert.deepEqual(h.posts, []);
  } finally { await closeAll(h); }
});

test('/contact : saisie retire framer-form-input-empty ; envoi valide simulé → Success, aucune requête', async () => {
  const h = await load(s.browser, '/contact', 1440);
  try {
    const form = visible(h.page, 'form.framer-3onib8');
    await field(form, 'Name').fill('Test');
    assert.equal(await field(form, 'Name').evaluate((e) => e.classList.contains('framer-form-input-empty')), false);
    await field(form, 'Pitch').fill('Test');
    await field(form, 'Start').selectOption('ASAP');
    await field(form, 'Email').fill('test@example.com');
    await settle(h.page, 600);
    assert.equal(await valid(form), true);
    assert.equal((await buttonState(form)).name, 'Default');
    await form.evaluate((f) => f.requestSubmit()); // sans survol du bouton (le survol retire data-framer-name)
    await settle(h.page, 1500);
    assert.equal((await buttonState(form)).name, 'Success');
    assert.deepEqual(h.posts, []);
    noExternalForm(h);
  } finally { await closeAll(h); }
});

test('newsletter : vide, « abc », case non cochée, puis envoi simulé', async () => {
  const h = await load(s.browser, '/privacy-policy', 1440);
  try {
    const { page } = h;
    await scrollToSel(page, '.framer-ubdqd9 form.framer-1lnl6jg');
    const form = visible(page, '.framer-ubdqd9 form.framer-1lnl6jg');
    const email = field(form, 'Email'), box = form.locator('input[type=checkbox]');
    // C-039 : vide
    assert.equal((await buttonState(form)).opacity, '0.75');
    assert.equal(await msg(email), EMPTY);
    await button(form).click({ force: true }); // curseur not-allowed : le clic reste possible
    await settle(page, 600);
    assert.deepEqual(h.posts, []);
    // C-040 : « abc »
    await email.fill('abc');
    await page.mouse.move(5, 5);
    await settle(page, 800);
    assert.equal((await buttonState(form)).opacity, '1');
    assert.equal(await msg(email), NO_AT);
    // C-041 : case non cochée
    await email.fill('test@example.com');
    assert.equal(await msg(box), CHECK);
    assert.equal(await valid(form), false);
    // C-043 : envoi simulé
    await box.evaluate((e) => e.click());
    assert.equal(await valid(form), true);
    await form.evaluate((f) => f.requestSubmit());
    await settle(page, 1500);
    assert.equal((await buttonState(form)).name, 'Success');
    assert.deepEqual(h.posts, []);
    noExternalForm(h);
  } finally { await closeAll(h); }
});
