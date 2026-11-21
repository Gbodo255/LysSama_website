// FAQ de /contact (C-185..C-187), lightbox d'une page projet (C-113, C-114), compteurs de /studio (C-140).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { useBrowser, load, settle, visible, scrollToSel, near, closeAll, advance, realFrames } from './lib/clone.mjs';

const s = useBrowser();

test('/contact FAQ : 6 fermées, clic ouvre (51 → 175 px), plusieurs ouvertes, re-clic ferme', async () => {
  const h = await load(s.browser, '/contact', 1440);
  try {
    const { page } = h;
    await scrollToSel(page, '.framer-BcSXX');
    // items = racines « Closed »/« Open » visibles de l'accordéon visible (hors sous-éléments de même nom)
    const items = () => page.evaluate(() => {
      const shown = (e) => e.getBoundingClientRect().height > 0;
      const acc = [...document.querySelectorAll('.framer-BcSXX')].find(shown);
      const Q = '[data-framer-name="Closed"], [data-framer-name="Open"]';
      return [...acc.querySelectorAll(Q)].filter((e) => shown(e) && !e.parentElement.closest(Q))
        .map((e) => { const r = e.getBoundingClientRect(); return { name: e.dataset.framerName, x: r.x + r.width / 2, y: r.y, h: r.height }; });
    });
    const click = async (i) => { const it = (await items())[i]; await page.mouse.click(it.x, it.y + 25); await settle(page, 1000); }; // ligne de la question
    let st = await items();
    assert.equal(st.length, 6);
    assert.ok(st.every((i) => i.name === 'Closed'), 'aucune question ouverte');
    assert.ok(near(st[0].h, 51, 1), `Q1 fermée : ${st[0].h}`);
    await click(0);
    st = await items();
    assert.equal(st[0].name, 'Open');
    assert.ok(near(st[0].h, 175, 2), `Q1 ouverte : ${st[0].h}`);
    await click(1);
    st = await items();
    assert.deepEqual(st.slice(0, 2).map((i) => i.name), ['Open', 'Open']);
    await click(0);
    st = await items();
    assert.deepEqual(st.slice(0, 2).map((i) => i.name), ['Closed', 'Open']);
    assert.ok(near(st[0].h, 51, 1), `Q1 refermée : ${st[0].h}`);
  } finally { await closeAll(h); }
});

test('/projects/chanel : clic sur l\'image → lightbox dans #template-overlay, Échap ferme', async () => {
  const h = await load(s.browser, '/projects/chanel', 1440);
  try {
    const { page } = h;
    const count = () => page.locator('#template-overlay .framer-lightbox-container').count();
    assert.equal(await count(), 0);
    await visible(page, '.framer-8k5osh').click();
    await settle(page, 1000); // ouverture à l'image suivante puis 0,6 s
    assert.equal(await count(), 1);
    await page.keyboard.press('Escape');
    await settle(page, 1000); // animation inverse puis retrait
    assert.equal(await count(), 0);
  } finally { await closeAll(h); }
});

test('/studio : compteurs à l\'entrée en vue → 12, 3, 24hr, 92%', async () => {
  const h = await load(s.browser, '/studio', 1440);
  try {
    const { page } = h;
    await scrollToSel(page, '[data-framer-name="Metrics"]', 200);
    await realFrames(page, 2);
    await advance(page, 1600); // valeur finale atteinte à ~576 ms (C-140)
    const vals = await page.evaluate(() => [...document.querySelectorAll('[data-framer-name="Metrics"] [data-framer-name="Big metric"]')]
      .filter((e) => e.getBoundingClientRect().width > 0).map((e) => e.textContent.trim()));
    assert.deepEqual(vals, ['12', '3', '24hr', '92%']);
  } finally { await closeAll(h); }
});
