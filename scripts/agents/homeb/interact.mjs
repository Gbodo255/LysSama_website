// homeb : témoignages, FAQ, formulaire (cas vides/invalides UNIQUEMENT), fenêtre du Reel. Original, archive réseau.
// node scripts/agents/homeb/interact.mjs --width=1440
import fs from 'node:fs';
import path from 'node:path';
import { launch, openPage, realFrames, advance, closeAll, urlFor, hideOutOfScope, ROOT } from '../../lib/harness.mjs';

const width = Number((process.argv.find((a) => a.startsWith('--width=')) || '--width=1440').slice(8));
const OUT = path.join(ROOT, 'reference', 'agents', 'homeb', `interact-${width}.json`);
const b = await launch({ webgl: false });
const killer = setTimeout(async () => { console.log('TIMEOUT'); await b.close().catch(() => {}); process.exit(2); }, 570000);
const res = { width, testimonials: [], faq: [], plusCurve: [], form: {}, reel: {} };
const save = () => fs.writeFileSync(OUT, JSON.stringify(res, null, 1));
try {
  const h = await openPage(b, 'ref', { width, net: 'record' });
  const { page } = h;
  await page.goto(urlFor('ref', '/'), { waitUntil: 'load', timeout: 120000 });
  await hideOutOfScope(page, 'ref'); await realFrames(page, 3);
  await advance(page, 6000, { step: 100, mode: 'fast' });
  const scrollTo = async (sel) => {
    const top = await page.evaluate((s) => document.querySelector(s).getBoundingClientRect().top + scrollY, sel);
    const cur = await page.evaluate(() => scrollY);
    for (let y = cur; y <= top - 100; y += 450) { await page.evaluate((yy) => window.scrollTo(0, yy), y); await realFrames(page, 1); await advance(page, 150, { step: 50, mode: 'fast' }); }
    await page.evaluate((yy) => window.scrollTo(0, yy), top - 100); await realFrames(page, 2); await advance(page, 2500, { step: 100, mode: 'fast' });
  };
  const T = '.framer-dujsxl-container';
  const readT = () => page.evaluate((s) => { const c = document.querySelector(s); return { text: c.innerText.replace(/\s+/g, ' ').trim(), slide: c.querySelector('[data-framer-name^="Testimonial "]')?.dataset.framerName }; }, T);
  // --- témoignages
  await scrollTo(T);
  res.testimonials.push({ action: 'initial', ...(await readT()) });
  await advance(page, 15000, { step: 100, mode: 'fast' });
  res.testimonials.push({ action: 'after 15 s sans action', ...(await readT()) });
  const arrow = (n) => page.locator(`${T} [data-framer-name="Arrows"] > [data-framer-name="${n}"]`).first();
  for (let i = 0; i < 3; i++) { await arrow('2').click(); await realFrames(page, 2); await advance(page, 2000, { step: 50, mode: 'fast' }); res.testimonials.push({ action: 'flèche 2 (droite)', ...(await readT()) }); }
  for (let i = 0; i < 3; i++) { await arrow('1').click(); await realFrames(page, 2); await advance(page, 2000, { step: 50, mode: 'fast' }); res.testimonials.push({ action: 'flèche 1 (gauche)', ...(await readT()) }); }
  await page.locator(`${T} [data-framer-name="Quote"]`).first().click(); await realFrames(page, 2); await advance(page, 2000, { step: 50, mode: 'fast' });
  res.testimonials.push({ action: 'clic citation', ...(await readT()) });
  console.log('testimonials', res.testimonials.map((t) => t.slide).join(','));
  save();
  // --- FAQ
  const F = '.framer-1fypq4z-container';
  await scrollTo(F);
  const readF = () => page.evaluate((s) => [...document.querySelectorAll(`${s} [data-framer-name="Open"], ${s} [data-framer-name="Closed"]`)].filter((e) => e.getBoundingClientRect().width > 0).map((e) => { const r = e.getBoundingClientRect(); const plus = e.querySelector('[data-framer-name="Plus"]'); return { state: e.dataset.framerName, h: Math.round(r.height), plus: plus ? getComputedStyle(plus).transform : null }; }), F);
  res.faq.push({ action: 'initial', items: await readF() });
  const items = () => page.locator(`${F} [data-framer-name="Open"], ${F} [data-framer-name="Closed"]`);
  await items().nth(0).click(); await realFrames(page, 2);
  await advance(page, 560, { step: 16, onFrame: async (t) => { const s = await page.evaluate((sel) => { const e = document.querySelector(`${sel} [data-framer-name="Open"], ${sel} [data-framer-name="Closed"]`); const p = e.querySelector('[data-framer-name="Plus"]'); const c = e.querySelector('[data-framer-name="Content"]'); return { h: e.getBoundingClientRect().height, plus: p && getComputedStyle(p).transform, op: c && getComputedStyle(c).opacity, bg: getComputedStyle(e.querySelector('[data-framer-name="Title"]')).backgroundColor }; }, F); res.plusCurve.push({ t, ...s }); } });
  res.faq.push({ action: 'clic item 1', items: await readF() });
  await items().nth(1).click(); await realFrames(page, 2); await advance(page, 800);
  res.faq.push({ action: 'clic item 2', items: await readF() });
  await items().nth(0).click(); await realFrames(page, 2); await advance(page, 800);
  res.faq.push({ action: 'clic item 1 de nouveau', items: await readF() });
  console.log('faq', JSON.stringify(res.faq.map((f) => f.items.map((i) => i.state[0]).join(''))));
  save();
  // --- formulaire : cas vides et invalides seulement
  const C = '.framer-1i0v4tb-container';
  await scrollTo(C);
  const readForm = () => page.evaluate((s) => {
    const f = document.querySelector(`${s} form`);
    return {
      noValidate: f?.noValidate, method: f?.method, action: f?.getAttribute('action'), valid: f?.checkValidity(),
      variant: f?.closest('[data-framer-name]')?.dataset.framerName,
      button: f?.querySelector('button')?.closest('[data-framer-name]')?.dataset.framerName || f?.querySelector('button')?.dataset.framerName,
      fields: [...f.querySelectorAll('input,textarea,select')].map((e) => { const r = e.getBoundingClientRect(); const st = getComputedStyle(e); return { name: e.name, type: e.type, value: e.value, w: Math.round(r.width), h: Math.round(r.height), valid: e.validity.valid, msg: e.validationMessage, border: st.borderColor + ' ' + st.borderWidth, bg: st.backgroundColor, color: st.color, outline: st.outline, shadow: st.boxShadow }; }),
      active: document.activeElement?.name || document.activeElement?.tagName,
    };
  }, C);
  res.form.initial = await readForm();
  if (!res.form.initial.noValidate) {
    // focus : styles du champ Name au focus
    await page.locator(`${C} input[name="Name"]`).focus(); await realFrames(page, 2); await advance(page, 600);
    res.form.focusName = await readForm();
    // largeur adaptative : saisie d'un texte long dans Name
    await page.locator(`${C} input[name="Name"]`).fill('Abcdefghijklmnopqrstuvwxyz Abcdefghijklmnop'); await realFrames(page, 2); await advance(page, 600);
    res.form.longName = await readForm();
    await page.locator(`${C} input[name="Name"]`).fill(''); await advance(page, 300);
    // envoi vide : bloqué par la validation native (checkValidity false vérifié)
    const v0 = await page.evaluate((s) => document.querySelector(`${s} form`).checkValidity(), C);
    if (v0 === false) { await page.locator(`${C} button[type=submit]`).click(); await realFrames(page, 2); await advance(page, 1000); res.form.emptySubmit = await readForm(); }
    // email invalide (formulaire toujours invalide : Pitch/Start vides)
    await page.locator(`${C} input[name="Email"]`).fill('abc'); await advance(page, 300);
    const v1 = await page.evaluate((s) => document.querySelector(`${s} form`).checkValidity(), C);
    if (v1 === false) { await page.locator(`${C} button[type=submit]`).click(); await realFrames(page, 2); await advance(page, 1000); res.form.invalidEmail = await readForm(); }
    // liste : options
    res.form.select = await page.evaluate((s) => { const e = document.querySelector(`${s} select`); return { options: [...e.options].map((o) => ({ t: o.text, v: o.value, d: o.disabled, sel: o.selected })), color: getComputedStyle(e).color, appearance: getComputedStyle(e).appearance }; }, C);
  } else res.form.note = 'noValidate=true : aucun clic d\'envoi (risque d\'envoi réel)';
  console.log('form', JSON.stringify(res.form.emptySubmit?.fields?.map((f) => f.name + ':' + f.valid)), res.form.emptySubmit?.button);
  save();
  // --- Reel
  const R = '[data-framer-name="Play becomes active here"]';
  await scrollTo('.framer-6t3cye');
  await page.locator(R).first().click({ force: true }); await realFrames(page, 2);
  await advance(page, 700, { step: 16, onFrame: async (t) => { if (t % 64) return; const o = await page.evaluate(() => { const e = document.querySelector('[data-framer-name="Project Reel Overlay"]'); const v = document.querySelector('[data-framer-name="Project Reel Video"]'); return { overlay: e && getComputedStyle(e).opacity, video: v && getComputedStyle(v).opacity }; }); (res.reel.openCurve ||= []).push({ t, ...o }); } });
  res.reel.open = await page.evaluate(() => { const v = document.querySelector('[data-framer-name="Project Reel Video"]'); const ifr = document.querySelector('iframe'); const o = document.querySelector('[data-framer-name="Project Reel Overlay"]'); return { overlay: !!o, overlayBg: o && getComputedStyle(o).backgroundColor, video: v && { ...v.getBoundingClientRect().toJSON() }, iframe: ifr && ifr.src, bodyOverflow: getComputedStyle(document.body).overflow, htmlOverflow: getComputedStyle(document.documentElement).overflow, portal: o?.parentElement?.id || o?.parentElement?.parentElement?.id }; });
  await page.keyboard.press('Escape'); await realFrames(page, 2); await advance(page, 800);
  res.reel.afterEsc = await page.evaluate(() => !!document.querySelector('[data-framer-name="Project Reel Overlay"]'));
  await page.locator(R).first().click({ force: true }); await realFrames(page, 2); await advance(page, 800);
  await page.mouse.click(10, 10); await realFrames(page, 2); await advance(page, 800);
  res.reel.afterOutsideClick = await page.evaluate(() => !!document.querySelector('[data-framer-name="Project Reel Overlay"]'));
  console.log('reel', JSON.stringify(res.reel.open), res.reel.afterEsc, res.reel.afterOutsideClick);
  res.errors = h.errors.slice(0, 10);
  save();
  await closeAll(h);
} catch (e) { console.log('ERR', e.message); res.error = String(e.message); save(); }
finally { clearTimeout(killer); await b.close(); }
