// Mesures banc des pages projet : sections, textes visibles, Play Film (fenêtre), lightbox, survol More projects.
// usage : node scripts/agents/projects/measure.mjs <largeur> <slug>[,<slug>] [interact]
//   → reference/agents/projects/dom-<slug>-<largeur>.json
import fs from 'node:fs';
import path from 'node:path';
import { launch, openPage, advance, realFrames, closeAll, urlFor, hideOutOfScope, ROOT } from '../../lib/harness.mjs';
// gotoStable du banc : > 8 min sur ces pages (cause probable : attente videosLoaded jusqu’à 15 s à chaque pas). Version allégée : même préchargeur (6 s virtuelles),
// défilement complet par pas d'un écran sans attente vidéo, retour en haut, 2,5 s de stabilisation.
// shortcut: pas de freezeVideos/mediaReady — suffisant pour géométrie/textes/interactions, pas pour des captures pixel.
async function quickStable(h, route) {
  const { page } = h;
  await page.goto(urlFor('ref', route), { waitUntil: 'load', timeout: 120000 });
  await hideOutOfScope(page, 'ref');
  await realFrames(page, 3);
  await advance(page, 6000, { step: 100 });
  const H = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < H; y += h.height) { await page.evaluate((yy) => window.scrollTo(0, yy), y); await realFrames(page, 2); await advance(page, 400, { step: 100 }); }
  await page.evaluate(() => window.scrollTo(0, 0)); await realFrames(page, 2);
  await page.evaluate(async () => { await document.fonts.ready; });
  await advance(page, 2500, { step: 100 }); await realFrames(page, 3);
}
const [W, list, interact] = [Number(process.argv[2]), process.argv[3].split(','), process.argv[4] === 'interact'];
const OUT = path.join(ROOT, 'reference/agents/projects');
const t0 = Date.now();
const log = (...a) => console.log(Math.round((Date.now() - t0) / 1000) + 's', ...a);
const b = await launch({ webgl: false });
try {
  for (const slug of list) {
    const h = await openPage(b, 'ref', { width: W, net: 'record' });
    // Aucun hôte hors Framer (YouTube du lecteur, etc.) : la route ajoutée en dernier est prioritaire.
    const blocked = [];
    await h.context.route(/^https?:\/\/(?!mirastudio\.framer\.website|framerusercontent\.com|fonts\.gstatic\.com)/, (r) => { blocked.push(r.request().url()); return r.abort(); });
    log(slug, 'goto');
    await quickStable(h, `/projects/${slug}`);
    log(slug, 'stable');
    const page = h.page;
    const snap = () => page.evaluate(() => {
      const vis = (e) => { const r = e.getBoundingClientRect(); const cs = getComputedStyle(e); return r.width > 0 && r.height > 0 && cs.visibility !== 'hidden' && cs.display !== 'none'; };
      const sy = scrollY;
      const rect = (e) => { const r = e.getBoundingClientRect(); return [Math.round(r.left * 10) / 10, Math.round((r.top + sy) * 10) / 10, Math.round(r.width * 10) / 10, Math.round(r.height * 10) / 10]; };
      const NAMES = /^(Hero|Project |Client \/ Brief|Image Section|Approach|Outcomes|Results \/ Testimonial|More Projects|Metrics|Quote|Bottom Info|Image \/ Video|Project Info|Top|Desktop|Tablet|Phone|Bottom Images|Author Card)$/;
      const sections = [...document.querySelectorAll('main section, main [data-framer-name]')].filter(vis).filter((e) => e.tagName === 'SECTION' || NAMES.test(e.dataset.framerName || '')).map((e) => ({ name: e.dataset.framerName || '', cls: [...e.classList].join('.'), rect: rect(e) }));
      const texts = [];
      for (const e of document.querySelectorAll('main h1, main h2, main h3, main p')) {
        if (!vis(e)) continue;
        const cs = getComputedStyle(e);
        texts.push({ t: e.textContent.replace(/\s+/g, ' ').trim(), tag: e.tagName, rect: rect(e), font: `${cs.fontFamily.split(',')[0]} ${cs.fontWeight} ${cs.fontSize}/${cs.lineHeight} ls=${cs.letterSpacing} tt=${cs.textTransform} c=${cs.color}`, fvs: cs.fontVariationSettings });
      }
      const media = [...document.querySelectorAll('main img, main video, main iframe, main svg')].filter(vis).filter((e) => e.getBoundingClientRect().width > 20).map((e) => ({ tag: e.tagName, src: e.currentSrc || e.getAttribute('src'), alt: e.getAttribute('alt'), rect: rect(e), fit: getComputedStyle(e).objectFit, name: e.closest('[data-framer-name]')?.dataset.framerName }));
      const links = [...document.querySelectorAll('main a')].filter(vis).map((a) => ({ href: a.getAttribute('href'), abs: a.href, target: a.target, text: a.textContent.replace(/\s+/g, ' ').trim().slice(0, 60), rect: rect(a) }));
      return { scrollHeight: document.documentElement.scrollHeight, sections, texts, media, links };
    });
    const res = { slug, width: W, base: await snap() };
    const save = () => fs.writeFileSync(path.join(OUT, `dom-${slug}-${W}.json`), JSON.stringify(res, null, 1));
    save();
    log(slug, 'snap');
    const center = async (loc) => { await loc.evaluate((e) => e.scrollIntoView({ block: 'center' })); await realFrames(page, 2); await advance(page, 300); const r = await loc.evaluate((e) => { const b = e.getBoundingClientRect(); return [b.left + b.width / 2, b.top + b.height / 2]; }); return r; };
    const hoverAt = async (xy) => { await page.mouse.move(xy[0], xy[1]); await realFrames(page, 2); };
    const clickAt = async (xy) => { await page.mouse.click(xy[0], xy[1]); await realFrames(page, 2); };
    const phase = async (name, fn) => { try { await fn(); } catch (e) { (res.phaseErrors ||= []).push(name + ': ' + String(e.message).split('\n')[0]); } save(); log(slug, name, 'done'); };
    if (interact) {
      const fixedEls = () => page.evaluate(() => [...document.querySelectorAll('body *')].filter((e) => getComputedStyle(e).position === 'fixed' && e.getBoundingClientRect().width > 0 && !e.closest('[data-framer-name="Template Buy Button"],#__framer-badge-container,[data-framer-name="Shared Navigation"]')).map((e) => ({ cls: String(e.className).slice(0, 90), bg: getComputedStyle(e).backgroundColor, z: getComputedStyle(e).zIndex, op: getComputedStyle(e).opacity, rect: e.getBoundingClientRect().toJSON(), img: e.querySelector('img')?.currentSrc, iframe: e.querySelector('iframe')?.src, html: e.innerHTML.slice(0, 300) })).slice(0, 10));
      const overflow = () => page.evaluate(() => ({ html: getComputedStyle(document.documentElement).overflow, body: getComputedStyle(document.body).overflow }));
      const play = page.locator('[data-framer-name="Play Video"]').locator('visible=true').first();
      if (await play.count()) await phase('play', async () => {
        const xy = await center(play);
        const ps = () => play.evaluate((p) => ({ padding: getComputedStyle(p).padding, rect: p.getBoundingClientRect().toJSON(), text: [...p.querySelectorAll('p')].map((x) => ({ t: x.textContent, pos: getComputedStyle(x.parentElement).position, r: x.getBoundingClientRect().toJSON() })) }));
        res.playRest = await ps();
        await hoverAt(xy); await advance(page, 600);
        res.playHover = await ps();
        await clickAt(xy);
        res.overlayCurve = [];
        for (let t = 0; t <= 640; t += 32) {
          res.overlayCurve.push({ t, v: await page.evaluate(() => [...document.querySelectorAll('[data-framer-portal-id]')].map((e) => getComputedStyle(e).opacity)) });
          await advance(page, 32);
        }
        res.overlayOpen = { fixed: await fixedEls(), overflow: await overflow(), portals: await page.evaluate(() => [...document.querySelectorAll('[data-framer-portal-id]')].map((e) => ({ cls: String(e.className), parent: e.parentElement?.id || e.parentElement?.tagName, rect: e.getBoundingClientRect().toJSON(), iframe: e.querySelector('iframe') && { src: e.querySelector('iframe').src, allow: e.querySelector('iframe').allow, title: e.querySelector('iframe').title } }))) };
        await page.keyboard.press('Escape'); await realFrames(page, 2);
        res.closeCurve = [];
        for (let t = 0; t <= 640; t += 32) { res.closeCurve.push({ t, v: await page.evaluate(() => [...document.querySelectorAll('[data-framer-portal-id]')].map((e) => getComputedStyle(e).opacity)) }); await advance(page, 32); }
        res.afterEscape = { portals: await page.evaluate(() => document.querySelectorAll('[data-framer-portal-id]').length), overflow: await overflow() };
        await clickAt(xy); await advance(page, 800);
        await page.mouse.click(5, h.height - 5); await realFrames(page, 2); await advance(page, 800); await realFrames(page, 2);
        res.afterBackdropClick = { portals: await page.evaluate(() => document.querySelectorAll('[data-framer-portal-id]').length) };
        await clickAt(xy); await advance(page, 800);
        const pr = await page.evaluate(() => { const e = document.querySelector('.framer-15gpuh9-container'); const r = e?.getBoundingClientRect(); return r && [r.left + r.width / 2, r.top + r.height / 2]; });
        if (pr) { await page.mouse.click(pr[0], pr[1]); await realFrames(page, 2); await advance(page, 800); }
        res.afterPlayerClick = { portals: await page.evaluate(() => document.querySelectorAll('[data-framer-portal-id]').length) };
        await page.keyboard.press('Escape'); await realFrames(page, 2); await advance(page, 800);
      });
      const img = page.locator('.framer-8k5osh').locator('visible=true').first();
      if (await img.count()) await phase('lightbox', async () => {
        const xy = await center(img);
        res.heroImgCursor = await img.evaluate((e) => getComputedStyle(e).cursor);
        const before = (await fixedEls()).length;
        await clickAt(xy);
        res.lightboxCurve = [];
        for (let t = 0; t <= 800; t += 50) { res.lightboxCurve.push({ t, f: (await fixedEls()).map((x) => x.op + '|' + Math.round(x.rect.width)) }); await advance(page, 50); }
        res.lightbox = { before, fixed: await fixedEls(), overflow: await overflow() };
        await page.keyboard.press('Escape'); await realFrames(page, 2); await advance(page, 1000); await realFrames(page, 2);
        res.lightboxAfterEscape = (await fixedEls()).length;
        await clickAt(xy); await advance(page, 1000);
        await page.mouse.click(5, h.height - 5); await realFrames(page, 2); await advance(page, 1000); await realFrames(page, 2);
        res.lightboxAfterBackdrop = (await fixedEls()).length;
      });
      const card = page.locator('[data-framer-name="More Projects"] a').locator('visible=true').first();
      if (await card.count()) await phase('card', async () => {
        const xy = await center(card); await advance(page, 1500);
        const st = () => card.evaluate((a) => { const q = (n) => a.querySelector(`[data-framer-name="${n}"]`); const r = (e) => e && e.getBoundingClientRect().toJSON(); return { cls: a.className, top: r(q('Top')), bottom: r(q('Bottom')), preview: r(q('Image / Video Preview')), previewImg: r(q('Image / Video')) }; });
        res.cardRest = await st();
        await hoverAt(xy);
        res.cardHoverCurve = [];
        for (let t = 0; t <= 960; t += 32) { const s = await st(); res.cardHoverCurve.push({ t, top: s.top?.y, bottom: s.bottom?.y, img: s.previewImg?.y }); await advance(page, 32); }
        res.cardHover = await st();
        await page.mouse.move(1, 1); await realFrames(page, 2);
        res.cardLeaveCurve = [];
        for (let t = 0; t <= 960; t += 32) { const s = await st(); res.cardLeaveCurve.push({ t, top: s.top?.y, bottom: s.bottom?.y, img: s.previewImg?.y }); await advance(page, 32); }
      });
    }
    res.blocked = blocked; res.missing = h.missing; res.errors = h.errors.slice(0, 10);
    fs.writeFileSync(path.join(OUT, `dom-${slug}-${W}.json`), JSON.stringify(res, null, 1));
    console.log(slug, W, 'ok', Math.round((Date.now() - t0) / 1000) + 's');
    await closeAll(h);
    if (Date.now() - t0 > 8 * 60 * 1000) { console.log('budget atteint, arrêt'); break; }
  }
} finally { await b.close(); }
