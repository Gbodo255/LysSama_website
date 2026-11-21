// Accueil : calculateur Pricing (C-086..C-090, totaux de docs/audit/homeb.md § 08) et fenêtre vidéo du Reel
// (« Play becomes active here » `.framer-1llc9gt` → lecteur YouTube 6aioEoCdBJw, docs/LINKS.md ; Échap ferme).
// Une seule page chargée pour le fichier (accueil lourd) : les tests s'enchaînent dans l'ordre.
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { useBrowser, load, settle, visible, scrollToSel, closeAll } from './lib/clone.mjs';

const s = useBrowser();
let h;
before(async () => { h = await load(s.browser, '/', 1440); });
after(async () => { if (h) await closeAll(h).catch(() => {}); }); // le navigateur peut déjà être fermé

const CARD = '.framer-189pfpj-container';
const total = () => h.page.evaluate((c) => {
  const e = [...document.querySelectorAll(`${c} .framer-1pl2uqb-container`)].find((x) => x.getBoundingClientRect().width > 0);
  return e ? e.innerText.replace(/\s+/g, ' ').trim() : null;
}, CARD);
const ROWS = `${CARD} [data-framer-name="Unchecked"], ${CARD} [data-framer-name="Checked"]`;
async function clickRow(i) {
  const rows = [];
  for (const r of await h.page.$$(ROWS)) if (await r.isVisible()) rows.push(r);
  await rows[i].click();
  await settle(h.page, 800); // compteur 0,6 s easeOut (C-089)
}
async function clickTab(label) {
  await h.page.locator(`${CARD} .framer-zsxvaw-container`).getByText(label, { exact: true }).filter({ visible: true }).first().click();
  await settle(h.page, 800); // fondu de variante 0,46 s (C-086)
}

test('Pricing : totaux Monthly / Per Project et conservation des cases', async () => {
  await scrollToSel(h.page, CARD);
  assert.equal(await total(), '$4,500', 'Monthly sans option');
  await clickRow(0);
  assert.equal(await total(), '$5,500', 'Monthly + Motion design');
  await clickRow(0);
  assert.equal(await total(), '$4,500', 'Motion design décoché');
  await clickTab('Per Project');
  assert.equal(await total(), '$12,000', 'Per Project sans option');
  for (let i = 0; i < 4; i++) await clickRow(i);
  assert.equal(await total(), '$23,700', 'Per Project + 4 options');
  await clickTab('Monthly');
  assert.equal(await total(), '$8,400', 'cases conservées au retour Monthly (C-090)');
});

test('Reel : clic ouvre le lecteur YouTube 6aioEoCdBJw dans #template-overlay, Échap ferme', async () => {
  const { page } = h;
  const iframe = () => page.evaluate(() => document.querySelector('#template-overlay iframe')?.getAttribute('src') ?? null);
  await scrollToSel(page, '.framer-1llc9gt');
  await visible(page, '.framer-1llc9gt').click({ force: true });
  await settle(page, 1000);
  const src = await iframe();
  assert.ok(src?.startsWith('https://www.youtube.com/embed/6aioEoCdBJw'), `iframe : ${src}`);
  await page.keyboard.press('Escape');
  await settle(page, 1000);
  assert.equal(await iframe(), null);
});
