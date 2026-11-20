// Interactions de /contact sur l'original : FAQ (règle d'ouverture, réponses, courbe), formulaire (cas VIDE et INVALIDE
// uniquement — toute requête non-GET est bloquée par sécurité), liste déroulante, survols principaux.
// Usage : node scripts/agents/contact/interact.mjs --width=1440
// Sortie : reference/agents/contact/interact/<w>.json
import fs from 'node:fs';
import path from 'node:path';
import { launch, openPage, gotoStable, advance, realFrames, closeAll, ROOT } from '../../lib/harness.mjs';

const w = +((process.argv.find((a) => a.startsWith('--width=')) || '--width=1440').split('=')[1]);
const out = { width: w, blockedRequests: [] };
const dir = path.join(ROOT, 'reference/agents/contact/interact');
fs.mkdirSync(dir, { recursive: true });
const save = () => fs.writeFileSync(path.join(dir, `${w}.json`), JSON.stringify(out, null, 1));

const browser = await launch({ webgl: false });
try {
  const h = await openPage(browser, 'ref', { width: w, net: 'record' });
  // Sécurité : aucune soumission ne doit partir.
  await h.page.route('**/*', (r) => (r.request().method() !== 'GET' ? (out.blockedRequests.push(r.request().method() + ' ' + r.request().url()), r.abort()) : r.fallback()));
  await gotoStable(h, '/contact');
  const { page } = h;

  // ---------- FAQ : état des items (Closed/Open), réponses présentes dans le DOM
  const faqState = () => page.evaluate(() => {
    const sec = [...document.querySelectorAll('section,div')].find((e) => e.dataset.framerName && /FAQ/.test(e.className + '') === false && e.querySelector('[data-framer-name="Closed"], [data-framer-name="Open"]'));
    const items = [...document.querySelectorAll('[data-framer-name="Closed"], [data-framer-name="Open"]')].filter((e) => e.getBoundingClientRect().height > 0);
    return items.map((e) => {
      const r = e.getBoundingClientRect();
      const ps = [...e.querySelectorAll('p')].map((p) => ({ t: p.innerText, h: p.getBoundingClientRect().height, op: getComputedStyle(p).opacity }));
      return { name: e.dataset.framerName, y: +(r.y + scrollY).toFixed(2), h: +r.height.toFixed(2), ps };
    });
  });
  out.faqInitial = await faqState();
  // Texte complet du DOM (réponses éventuellement masquées)
  out.faqDomTexts = await page.evaluate(() => [...document.querySelectorAll('[data-framer-name="Closed"], [data-framer-name="Open"]')].map((e) => ({ name: e.dataset.framerName, visible: e.getBoundingClientRect().height > 0, text: e.textContent })));
  save();

  const qs = (out.faqInitial || []).map((i) => i.ps[0]?.t).filter(Boolean);
  const clickQ = async (t) => {
    const loc = page.locator('p', { hasText: t }).filter({ visible: true }).first();
    await loc.scrollIntoViewIfNeeded(); await realFrames(page, 2);
    const b = await loc.boundingBox();
    await page.mouse.move(b.x + 5, b.y + 5); await page.mouse.down(); await page.mouse.up();
  };
  const curve = async (ms) => {
    const pts = [];
    await advance(page, ms, { step: 16, onFrame: async (t) => { pts.push({ t, s: await page.evaluate(() => [...document.querySelectorAll('[data-framer-name="Closed"], [data-framer-name="Open"]')].filter((e) => e.getBoundingClientRect().height > 0).map((e) => { const ic = e.querySelector('[data-framer-name="Plus"], [data-framer-name="V"]'); return [e.dataset.framerName[0], +e.getBoundingClientRect().height.toFixed(2), ic ? getComputedStyle(ic).transform : null]; })) }); } });
    return pts;
  };
  if (qs.length) {
    await clickQ(qs[0]); await realFrames(page, 1);
    out.faqClick1Curve = await curve(1200);
    out.faqAfterClick1 = await faqState(); save();
    await clickQ(qs[1]); await realFrames(page, 1);
    out.faqClick2Curve = await curve(1200);
    out.faqAfterClick2 = await faqState(); save();
    await clickQ(qs[1]); await realFrames(page, 1);
    await advance(page, 1200);
    out.faqAfterReclick2 = await faqState();
    for (const q of qs) { await clickQ(q); await realFrames(page, 1); await advance(page, 1200); (out.answers ||= []).push((await faqState()).map((i) => i.ps.map((p) => p.t))); }
    save();
  }

  // ---------- Formulaire : structure
  const formInfo = () => page.evaluate(() => {
    const f = [...document.querySelectorAll('form.framer-3onib8')].find((x) => x.getBoundingClientRect().height > 0);
    if (!f) return null;
    const btn = f.querySelector('button');
    return {
      valid: f.checkValidity(),
      button: btn && { name: btn.closest('[data-framer-name]')?.dataset.framerName, ownName: btn.dataset.framerName, text: btn.innerText, type: btn.type, disabled: btn.disabled, bg: getComputedStyle(btn).backgroundColor, opacity: getComputedStyle(btn).opacity },
      fields: [...f.querySelectorAll('input,textarea,select')].filter((e) => e.getBoundingClientRect().height > 1).map((e) => ({ name: e.name, type: e.type, required: e.required, value: e.value, cls: e.className, valid: e.checkValidity(), msg: e.validationMessage, options: e.tagName === 'SELECT' ? [...e.options].map((o) => ({ v: o.value, t: o.text, disabled: o.disabled, selected: o.selected })) : undefined, bg: getComputedStyle(e).backgroundColor, border: getComputedStyle(e).borderColor, color: getComputedStyle(e).color })),
    };
  });
  out.formInitial = await formInfo(); save();

  // Cas VIDE : clic sur le bouton seulement si le formulaire est invalide (le navigateur bloque l'envoi).
  const clickSubmit = async (tag) => {
    const info = await formInfo();
    if (!info || info.valid) { out[tag] = { skipped: 'formulaire valide : clic interdit' }; return; }
    const btn = page.locator('form.framer-3onib8 button').filter({ visible: true }).first();
    await btn.scrollIntoViewIfNeeded(); await realFrames(page, 2);
    await btn.click(); await realFrames(page, 2); await advance(page, 600);
    out[tag] = { after: await formInfo(), focused: await page.evaluate(() => document.activeElement && (document.activeElement.name || document.activeElement.tagName)) };
  };
  await clickSubmit('formEmptySubmit'); save();

  // Cas INVALIDE : e-mail mal formé, champs requis remplis (Start reste au défaut) → navigateur bloque.
  await page.locator('form.framer-3onib8 input[name="Email"]').filter({ visible: true }).first().fill('abc');
  await realFrames(page, 2); await advance(page, 300);
  out.formInvalidEmailTyped = await formInfo();
  await clickSubmit('formInvalidEmailSubmit'); save();

  // Saisie : la classe framer-form-input-empty disparaît-elle, largeur adaptative ?
  const nm = page.locator('form.framer-3onib8 input[name="Name"]').filter({ visible: true }).first();
  const wb = await nm.boundingBox(); await nm.fill('Ab'); await realFrames(page, 2); await advance(page, 300);
  out.nameTyped = { before: wb, after: await nm.boundingBox(), cls: await nm.getAttribute('class') };
  // Focus : style du champ
  await nm.focus(); await realFrames(page, 2); await advance(page, 400);
  out.nameFocused = await nm.evaluate((e) => ({ bg: getComputedStyle(e).backgroundColor, border: getComputedStyle(e).borderColor, outline: getComputedStyle(e).outline, shadow: getComputedStyle(e).boxShadow, parentBg: getComputedStyle(e.parentElement).backgroundColor, parentShadow: getComputedStyle(e.parentElement).boxShadow }));
  save();

  out.errors = h.errors;
  save();
  await closeAll(h);
} finally {
  await browser.close();
  save();
  console.log('ok', w, 'blocked', out.blockedRequests.length);
}
