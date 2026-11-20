// Interactions globales sur l'original : ouverture du menu (courbes), survols, newsletter (cas vides/invalides
// uniquement), curseur, Lenis, défilement, transition de page. Usage : node interact.mjs <part> (desk|mobile|nav2)
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { launch, openPage, gotoStable, advance, realFrames, closeAll, ROOT } from '../../lib/harness.mjs';

const part = process.argv[2] || 'desk';
const OUT = path.join(ROOT, 'reference/agents/global/interact');
fs.mkdirSync(OUT, { recursive: true });
const R = {};
const save = () => fs.writeFileSync(path.join(OUT, `${part}.json`), JSON.stringify(R, null, 1));
const shot = async (page, name) => fs.writeFileSync(path.join(OUT, `${part}-${name}.webp`), await sharp(await page.screenshot()).webp({ lossless: true }).toBuffer());
const P = ['opacity', 'transform', 'color', 'backgroundColor', 'width', 'height', 'filter', 'textDecoration', 'borderRadius', 'left', 'top', 'clipPath', 'boxShadow', 'cursor'];

// styles calculés de tous les descendants (clé = chemin) pour comparer avant/après
async function snap(page, sel) {
  return page.evaluate(([sel, P]) => {
    const root = [...document.querySelectorAll(sel)].find((e) => e.getBoundingClientRect().width > 0); if (!root) return null;
    const o = {}; let i = 0;
    for (const e of [root, ...root.querySelectorAll('*')]) {
      const cs = getComputedStyle(e); const r = e.getBoundingClientRect();
      const k = `${i++}:${e.tagName.toLowerCase()}:${e.dataset.framerName || ''}:${(e.childElementCount ? '' : e.textContent).trim().slice(0, 20)}`;
      o[k] = Object.fromEntries(P.map((p) => [p, p === 'width' ? Math.round(r.width * 10) / 10 : p === 'height' ? Math.round(r.height * 10) / 10 : p === 'left' ? Math.round(r.left * 10) / 10 : p === 'top' ? Math.round(r.top * 10) / 10 : cs[p]]));
    }
    return o;
  }, [sel, P]);
}
const diff = (a, b) => { const d = {}; for (const k in b) for (const p in b[k]) if (a?.[k]?.[p] !== b[k][p]) (d[k] ??= {})[p] = [a?.[k]?.[p], b[k][p]]; return d; };
async function center(page, sel) { return page.evaluate((s) => { const e = [...document.querySelectorAll(s)].find((x) => { const r = x.getBoundingClientRect(); return r.width > 0 && r.top >= 0 && r.top < innerHeight; }); if (!e) return null; const r = e.getBoundingClientRect(); return [r.x + r.width / 2, r.y + r.height / 2]; }, sel); }
// courbe : relève fn() à chaque image pendant ms
async function curve(page, ms, fn, arg) { const c = []; await advance(page, ms, { step: 16, onFrame: async (t) => c.push([t, await page.evaluate(fn, arg)]) }); return c; }
async function hoverTest(page, name, sel, scope = sel, ms = 800) {
  const c = await center(page, sel); if (!c) { R[name] = 'introuvable'; return; }
  const a = await snap(page, scope);
  await page.mouse.move(c[0], c[1], { steps: 2 }); await realFrames(page, 2);
  const frames = [];
  await advance(page, ms, { step: 16, onFrame: async (t) => { if (t % 48 === 0 || t <= 64) frames.push([t, diff(a, await snap(page, scope))]); } });
  const b = await snap(page, scope);
  R[name] = { pos: c, final: diff(a, b), frames };
  await shot(page, name);
  await page.mouse.move(5, 5); await realFrames(page, 2); await advance(page, ms);
  R[name].afterLeave = diff(a, await snap(page, scope));
  save();
}

const b = await launch({ webgl: false });
try {
  if (part === 'desk') {
    const h = await openPage(b, 'ref', { width: 1440, net: 'record' }); const { page } = h;
    await gotoStable(h, '/privacy-policy');
    R.lenis = await page.evaluate(() => { const l = window.lenis; if (!l) return null; const o = {}; for (const [k, v] of Object.entries(l.options || {})) o[k] = typeof v === 'function' ? String(v).slice(0, 200) : (v instanceof Element || v === window ? String(v) : v); return o; });
    save();
    // curseur : éléments apparus après mouvement
    const before = await page.evaluate(() => document.querySelectorAll('*').length);
    await page.mouse.move(700, 500, { steps: 5 }); await realFrames(page, 2); await advance(page, 600);
    R.cursor = await page.evaluate((n) => ({ count: document.querySelectorAll('*').length - n, bodyCursor: getComputedStyle(document.body).cursor,
      floating: [...document.querySelectorAll('body *')].filter((e) => { const cs = getComputedStyle(e); return (cs.position === 'fixed' || cs.position === 'absolute') && +cs.zIndex > 9 && e.getBoundingClientRect().width > 0; }).map((e) => ({ n: e.dataset.framerName, cls: e.className.toString().slice(0, 80), r: JSON.stringify(e.getBoundingClientRect()), z: getComputedStyle(e).zIndex, html: e.outerHTML.slice(0, 300) })) }), before);
    await shot(page, 'cursor'); save();
    // ouverture du menu desktop : courbe
    const m = () => { const q = (s) => document.querySelector(s); const sn = q('[data-framer-name="Side Nav"]').getBoundingClientRect(); const ov = getComputedStyle(q('[data-framer-name="Overlay BG"]')); const menu = q('[data-framer-name="Menu"]'); const mc = getComputedStyle(menu); const ham = q('[data-framer-name="Hamburger"]') || q('[data-framer-name="Open"]');
      return { navW: Math.round(sn.width * 100) / 100, ovOp: ov.opacity, ovF: ov.filter, menuOp: mc.opacity, menuT: mc.transform, menuL: Math.round(menu.getBoundingClientRect().left * 100) / 100, hamVar: [...document.querySelectorAll('[data-framer-name="Side Nav"] [class*="framer-v-"]')][0]?.dataset.framerName }; };
    R.openStart = await page.evaluate(m);
    await page.mouse.move(30, 450); await realFrames(page, 1);
    R.openCurve = await curve(page, 1100, m); save();
    // survols dans le menu ouvert
    await hoverTest(page, 'hoverNavItemStudio', '[data-framer-name="Side Nav"] a[href="./studio"]', '[data-framer-name="Side Nav"] a[href="./studio"]', 600);
    await page.mouse.move(30, 450); await advance(page, 600);
    await hoverTest(page, 'hoverMenuContactBtn', '[data-framer-name="Side Nav"] a[aria-label="contact"]', '[data-framer-name="Side Nav"] a[aria-label="contact"]', 800);
    await page.mouse.move(30, 450); await advance(page, 600);
    await hoverTest(page, 'hoverMenuSocialX', '[data-framer-name="Side Nav"] a[aria-label="X Link"]', '[data-framer-name="Side Nav"] [data-framer-name="X"]', 600);
    // fermeture : quitter la barre
    await page.mouse.move(30, 450); await advance(page, 600);
    await page.mouse.move(1000, 450); await realFrames(page, 1);
    R.closeCurve = await curve(page, 900, m); save();
    // défilement : la barre change-t-elle ?
    const navState = () => { const sn = document.querySelector('[data-framer-name="Side Nav"]').getBoundingClientRect(); return { sy: scrollY, sn: [sn.x, sn.y, sn.width, sn.height], op: getComputedStyle(document.querySelector('[data-framer-name="Shared Navigation"]')).opacity }; };
    R.scroll = [await page.evaluate(navState)];
    for (const y of [400, 1500, 800, 0]) { await page.mouse.wheel(0, y - (await page.evaluate(() => scrollY))); await realFrames(page, 2); await advance(page, 1500); R.scroll.push(await page.evaluate(navState)); }
    save();
    // barre supérieure de page (logo + liens) : survol d'un lien
    await hoverTest(page, 'hoverTopLinkStudio', 'a[href="./studio"]:not([data-framer-name="Side Nav"] a)', 'a[href="./studio"]:not([data-framer-name="Side Nav"] a)', 600);
    // footer
    await page.evaluate(() => document.querySelector('div[data-framer-name="Footer"]').scrollIntoView({ block: 'end' })); await realFrames(page, 2); await advance(page, 2000);
    const F = 'div[data-framer-name="Footer"]';
    await hoverTest(page, 'hoverFooterLinkJournal', `${F} a[href="./journal"]`, `${F} a[href="./journal"]`, 600);
    await hoverTest(page, 'hoverFooterLegalTerms', `${F} a[href="./terms-conditions"]`, `${F} a[href="./terms-conditions"]`, 600);
    await hoverTest(page, 'hoverFooterSocialIG', `${F} a[aria-label="Instagram Link"]`, `${F} [data-framer-name="IG"]`, 600);
    await hoverTest(page, 'hoverFooterContactBtn', `${F} a[aria-label="contact"]`, `${F} a[aria-label="contact"]`, 800);
    await hoverTest(page, 'hoverJoinNowEmpty', `${F} button[type="submit"]`, `${F} form`, 600);
    await hoverTest(page, 'hoverConsentLink', `${F} form a`, `${F} form a`, 600);
    await hoverTest(page, 'hoverFooterLogo', `${F} a[aria-label="home"]`, `${F} a[aria-label="home"]`, 600);
    // newsletter : cas vide puis invalide (jamais d'adresse valide)
    const st = () => { const f = document.querySelector('div[data-framer-name="Footer"] form'); const i = f.querySelector('input[type=email]'); const c = f.querySelector('input[type=checkbox]'); const bt = f.querySelector('button'); return { val: i.value, valid: i.validity.valid, msg: i.validationMessage, cmsg: c.validationMessage, checked: c.checked, inputCls: i.className, btnCls: bt.className, btnOp: getComputedStyle(bt).opacity, btnCursor: getComputedStyle(bt).cursor, btnDisabled: bt.disabled, wrapBorder: getComputedStyle(f.firstElementChild).borderColor + ' ' + getComputedStyle(f.firstElementChild).borderWidth + ' ' + getComputedStyle(f.firstElementChild).boxShadow, inputColor: getComputedStyle(i).color, ph: getComputedStyle(i, '::placeholder').color, font: getComputedStyle(i).font }; };
    const reqs = []; page.on('request', (r) => { if (/forms/.test(r.url())) reqs.push(r.url()); });
    R.nl = { initial: await page.evaluate(st) };
    let c = await center(page, `${F} button[type="submit"]`); await page.mouse.click(c[0], c[1]); await realFrames(page, 2); await advance(page, 800);
    R.nl.emptyClick = await page.evaluate(st); await shot(page, 'nl-empty');
    c = await center(page, `${F} input[type=email]`); await page.mouse.click(c[0], c[1]); await realFrames(page, 2); await advance(page, 400);
    R.nl.focus = { ...(await page.evaluate(st)), focusDiff: null }; await shot(page, 'nl-focus');
    await page.keyboard.type('abc'); await realFrames(page, 2); await advance(page, 400);
    R.nl.typedInvalid = await page.evaluate(st);
    c = await center(page, `${F} button[type="submit"]`); await page.mouse.click(c[0], c[1]); await realFrames(page, 2); await advance(page, 800);
    R.nl.invalidClick = await page.evaluate(st); await shot(page, 'nl-invalid');
    c = await center(page, `${F} input[type=checkbox]`); await page.mouse.click(c[0], c[1]); await realFrames(page, 2); await advance(page, 400);
    R.nl.checkedInvalid = await page.evaluate(st);
    c = await center(page, `${F} button[type="submit"]`); await page.mouse.click(c[0], c[1]); await realFrames(page, 2); await advance(page, 800);
    R.nl.invalidCheckedClick = await page.evaluate(st); R.nl.formRequests = reqs; await shot(page, 'nl-invalid-checked');
    save();
    // transition de page : clic sur « Studio » du footer
    c = await center(page, `${F} a[href="./studio"]`);
    await page.mouse.click(c[0], c[1]);
    R.nav = [];
    for (let i = 0; i < 12; i++) { await realFrames(page, 2); await advance(page, 100); const s = await page.evaluate(() => ({ url: location.pathname, sy: scrollY, preloader: !!document.querySelector('[data-framer-name*="reloader" i]'), title: document.title, ls: Object.keys(localStorage), ss: Object.keys(sessionStorage) })); R.nav.push([(i + 1) * 100, s]); if (i === 0 || i === 2 || i === 5) await shot(page, `nav-${(i + 1) * 100}`); }
    save();
    // état actif sur /studio
    R.activeStudio = await page.evaluate(() => [...document.querySelectorAll('a[href="./studio"], a[href="./journal"], a[href="./"], a[href="./projects"]')].filter((a) => a.getBoundingClientRect().width > 0).map((a) => ({ href: a.getAttribute('href'), n: a.dataset.framerName, cls: a.className, color: getComputedStyle(a.querySelector('p') || a).color, op: getComputedStyle(a).opacity })));
    save();
    await closeAll(h);
  } else if (part === 'nav2') {
    const h = await openPage(b, 'ref', { width: 1440, net: 'record' }); const { page } = h;
    await gotoStable(h, '/studio', { scrollThrough: false });
    const act = () => [...document.querySelectorAll('a[href="./studio"], a[href="./journal"], a[href="./"], a[href="./projects"], a[href="./privacy-policy"]')].map((a) => ({ href: a.getAttribute('href'), n: a.dataset.framerName, inNav: !!a.closest('[data-framer-name="Shared Navigation"]'), inFoot: !!a.closest('div[data-framer-name="Footer"]'), vis: a.getBoundingClientRect().width > 0, cls: a.className, color: getComputedStyle(a.querySelector('p') || a).color, dec: getComputedStyle(a).textDecorationLine }));
    R.activeStudio = await page.evaluate(act); save();
    const F = 'div[data-framer-name="Footer"]';
    await page.evaluate(() => document.querySelector('div[data-framer-name="Footer"] form').scrollIntoView({ block: 'center' })); await realFrames(page, 2); await advance(page, 2500);
    await hoverTest(page, 'hoverFooterSocialIG', `${F} a[aria-label="Instagram Link"]`, `${F} a[aria-label="Instagram Link"]`, 600);
    let c = await center(page, `${F} input[type=email]`); await page.mouse.click(c[0], c[1]); await page.keyboard.type('abc'); await realFrames(page, 2); await advance(page, 600);
    await hoverTest(page, 'hoverJoinNowTyped', `${F} button[type="submit"]`, `${F} button[type="submit"]`, 800);
    R.checkbox = await page.evaluate(() => { const c = document.querySelector('div[data-framer-name="Footer"] input[type=checkbox]'); const r = c.getBoundingClientRect(); const cs = getComputedStyle(c); return { r: [r.x, r.y, r.width, r.height], bg: cs.backgroundColor, border: cs.border, appearance: cs.appearance, shadow: cs.boxShadow }; });
    c = [R.checkbox.r[0] + 6, R.checkbox.r[1] + 6]; await page.mouse.click(c[0], c[1]); await realFrames(page, 2); await advance(page, 400);
    R.checkboxChecked = await page.evaluate(() => { const c = document.querySelector('div[data-framer-name="Footer"] input[type=checkbox]'); const cs = getComputedStyle(c); return { checked: c.checked, bg: cs.backgroundColor, border: cs.border, bgImg: cs.backgroundImage.slice(0, 300), shadow: cs.boxShadow }; });
    await shot(page, 'nl-checked');
    const reqs = []; page.on('request', (r) => { if (/forms/.test(r.url())) reqs.push(r.url()); });
    c = await center(page, `${F} button[type="submit"]`); await page.mouse.click(c[0], c[1]); await realFrames(page, 2); await advance(page, 800);
    R.invalidCheckedClick = await page.evaluate(() => { const i = document.querySelector('div[data-framer-name="Footer"] input[type=email]'); return { msg: i.validationMessage, focused: document.activeElement === i, btn: document.querySelector('div[data-framer-name="Footer"] button').className }; });
    R.formRequests = reqs; await shot(page, 'nl-invalid-checked'); save();
    // transition de page : lien « Journal » de la barre supérieure
    await page.evaluate(() => scrollTo(0, 0)); await realFrames(page, 2); await advance(page, 1500);
    c = await center(page, 'a[href="./journal"]:not([data-framer-name="Side Nav"] a)');
    await page.mouse.click(c[0], c[1]);
    R.nav = [];
    for (let i = 0; i < 16; i++) { await realFrames(page, 2); await advance(page, 100); R.nav.push([(i + 1) * 100, await page.evaluate(() => ({ url: location.pathname, sy: scrollY, preloaderVisible: [...document.querySelectorAll('[data-framer-name]')].filter((e) => /preload/i.test(e.dataset.framerName) && e.getBoundingClientRect().width > 0).map((e) => e.dataset.framerName + ':' + getComputedStyle(e).opacity), title: document.title, ss: Object.keys(sessionStorage), ls: Object.keys(localStorage) }))]); if ([0, 2, 5, 15].includes(i)) await shot(page, `nav-${(i + 1) * 100}`); }
    R.activeJournal = await page.evaluate(act); save();
    await closeAll(h);
  } else if (part === 'mobile') {
    const h = await openPage(b, 'ref', { width: 390, net: 'record' }); const { page } = h;
    await gotoStable(h, '/privacy-policy', { scrollThrough: false });
    const m = () => { const q = (s) => document.querySelector(s); const sn = q('[data-framer-name="Side Nav"]').getBoundingClientRect(); const ov = getComputedStyle(q('[data-framer-name="Overlay BG"]')); const menu = q('[data-framer-name="Menu"]'); const mr = menu.getBoundingClientRect(); return { sn: [sn.x, sn.y, sn.width, Math.round(sn.height * 100) / 100], ovOp: ov.opacity, menuOp: getComputedStyle(menu).opacity, menuT: getComputedStyle(menu).transform, menuR: [mr.x, Math.round(mr.y * 100) / 100, mr.width, mr.height] }; };
    R.closed = await page.evaluate(m);
    const c = await center(page, '[data-framer-name="Hamburger"]'); await page.mouse.click(c[0], c[1]); await realFrames(page, 1);
    R.openCurve = await curve(page, 1100, m); await shot(page, 'open'); save();
    const { domDump, KEYS, summarize } = await import('./lib.mjs');
    const items = await page.evaluate(domDump, ['[data-framer-name="Shared Navigation"]', KEYS]);
    fs.writeFileSync(path.join(OUT, 'mobile-navopen.txt'), summarize(items));
    // fermeture : tap sur la croix
    const c2 = await center(page, '[data-framer-name="Side Nav"] [data-framer-name="Open"], [data-framer-name="Side Nav"] [class*="framer-v-"]');
    await page.mouse.click(c2[0], c2[1]); await realFrames(page, 1);
    R.closeCurve = await curve(page, 1000, m); save();
    await closeAll(h);
  }
} finally { save(); await b.close(); }
