// homeb : tarifs — les 32 combinaisons (2 modes × 16), format, animation du nombre (original, archive réseau).
// node scripts/agents/homeb/pricing.mjs --width=1440
import fs from 'node:fs';
import path from 'node:path';
import { launch, openPage, realFrames, advance, closeAll, urlFor, hideOutOfScope, ROOT } from '../../lib/harness.mjs';

const width = Number((process.argv.find((a) => a.startsWith('--width=')) || '--width=1440').slice(8));
const OUT = path.join(ROOT, 'reference', 'agents', 'homeb', `pricing-${width}.json`);
const b = await launch({ webgl: false });
const killer = setTimeout(async () => { console.log('TIMEOUT'); await b.close().catch(() => {}); process.exit(2); }, 570000);
const res = { width, combos: [], curve: [], toggle: null, notes: [] };
try {
  const h = await openPage(b, 'ref', { width, net: 'record' });
  const { page } = h;
  await page.goto(urlFor('ref', '/'), { waitUntil: 'load', timeout: 120000 });
  await hideOutOfScope(page, 'ref');
  await realFrames(page, 3);
  await advance(page, 6000, { step: 100, mode: 'fast' });
  console.log('loaded');
  const CARD = '.framer-189pfpj-container';
  // défilement progressif jusqu'à la carte (Lenis + apparitions)
  const top = await page.evaluate((s) => document.querySelector(s).getBoundingClientRect().top + scrollY, CARD);
  for (let y = 0; y <= top - 100; y += 450) { await page.evaluate((yy) => window.scrollTo(0, yy), y); await realFrames(page, 1); await advance(page, 150, { step: 50, mode: 'fast' }); }
  await page.evaluate((yy) => window.scrollTo(0, yy), top - 100);
  await realFrames(page, 2); await advance(page, 3000, { step: 100, mode: 'fast' });
  console.log('at card');
  const read = () => page.evaluate((s) => {
    const c = document.querySelector(s);
    const vis = (e) => e && e.getBoundingClientRect().width > 0;
    const txt = (sel) => { const e = [...c.querySelectorAll(sel)].find(vis); return e ? e.innerText.replace(/\s+/g, ' ').trim() : null; };
    const live = [...c.querySelectorAll('[aria-live]')].map((e) => e.textContent);
    return {
      variant: c.querySelector('[data-framer-name^="Desktop"],[data-framer-name^="Phone"]')?.dataset.framerName,
      total: txt('.framer-1pl2uqb-container'), addons: txt('.framer-z5vqk5-container'), live,
      base: txt('.framer-1firdy7'), suffix: txt('.framer-22hsnh'),
      rows: [...c.querySelectorAll('[data-framer-name="Unchecked"],[data-framer-name="Checked"]')].filter(vis).map((r) => ({ name: r.dataset.framerName, text: r.innerText.replace(/\s+/g, ' ').trim(), aria: r.querySelector('[role=checkbox]')?.getAttribute('aria-checked'), label: r.querySelector('[role=checkbox]')?.getAttribute('aria-label') })),
      included: [...c.querySelectorAll('.framer-1enl1sg')].filter(vis).map((e) => e.innerText.replace(/\s+/g, ' | ').trim()),
      text: c.innerText.replace(/\s+/g, ' ').trim(),
    };
  }, CARD);
  res.initial = await read();
  console.log(JSON.stringify(res.initial).slice(0, 400));
  // structure du toggle
  res.toggle = await page.evaluate((s) => { const t = document.querySelector(s + ' .framer-zsxvaw-container'); return t ? { html: t.outerHTML.slice(0, 4000), text: t.innerText } : null; }, CARD);
  const rowSel = `${CARD} [data-framer-name="Unchecked"], ${CARD} [data-framer-name="Checked"]`;
  const clickRow = async (i) => { const rows = await page.$$(rowSel); const vis = []; for (const r of rows) if (await r.isVisible()) vis.push(r); await vis[i].click(); await realFrames(page, 2); };
  const clickTab = async (label) => { await page.locator(`${CARD} .framer-zsxvaw-container`).getByText(label, { exact: true }).first().click(); await realFrames(page, 2); await advance(page, 800); };
  const state = async () => (await read()).rows.map((r) => r.name === 'Checked');
  // courbe d'animation : clic sur la 1re option depuis l'état initial (Monthly, rien coché)
  await clickRow(0);
  await advance(page, 704, { step: 16, onFrame: async (t) => { const r = await read(); res.curve.push({ t, total: r.total, addons: r.addons }); } });
  await clickRow(0); await advance(page, 800);
  // clic direct sur la case (bouton role=checkbox) : vérifie l'interaction case ↔ ligne
  await page.locator(`${CARD} [role=checkbox]`).first().click(); await realFrames(page, 2); await advance(page, 800);
  res.checkboxDirect = await read();
  if ((await state())[0]) { await clickRow(0); await advance(page, 800); }
  res.afterReset = await read();
  for (const mode of ['Monthly', 'Per Project']) {
    if (mode === 'Per Project') { await clickTab('Per Project'); res.afterTab = await read(); }
    for (let k = 0; k < 16; k++) {
      const want = [0, 1, 2, 3].map((i) => !!(k >> i & 1));
      const cur = await state();
      for (let i = 0; i < 4; i++) if (cur[i] !== want[i]) await clickRow(i);
      await advance(page, 800);
      const r = await read();
      res.combos.push({ mode, k, want, total: r.total, addons: r.addons, live: r.live, base: r.base, suffix: r.suffix, rows: r.rows.map((x) => x.name), variant: r.variant });
    }
    console.log(mode, 'done');
  }
  // tout coché en Per Project → retour Monthly : les cases sont-elles conservées ?
  await clickTab('Monthly');
  res.backToMonthly = await read();
  fs.writeFileSync(OUT, JSON.stringify(res, null, 1));
  console.log('written', OUT, 'errors', h.errors.length);
  await closeAll(h);
} catch (e) { console.log('ERR', e.message); res.error = String(e.message); fs.writeFileSync(OUT, JSON.stringify(res, null, 1)); }
finally { clearTimeout(killer); await b.close(); }
