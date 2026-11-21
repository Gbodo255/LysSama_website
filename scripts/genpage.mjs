// Génération d'une page du clone depuis le HTML SSR d'origine (D-033) — prolonge scripts/transpose.mjs à la page entière :
//   src/gen/<slug>/Body.tsx  : enveloppe de page (tout ce qui précède #overlay dans le gabarit), mêmes balises/classes/attributs/styles
//   src/gen/<slug>/Body.css  : règles CSS d'origine touchant cette enveloppe (valeurs inchangées), hors base/presets/gabarit
//   src/data/text/<slug>.ts  : tous les textes affichés (nœuds texte, alt, placeholder, aria-label, title) — aucun texte en dur
// Mécanismes : `ssr-variant` → <SV> ; `hidden-*` seul → <HideOn> ; `data-framer-appear-id` → <Appear> (valeurs du JSON framer/appear) ;
// liens internes relatifs → <Lk> (href identique, navigation client). Les composants de code (vidéo, WebGL, curseur, formulaires…)
// sont remplacés par des surcharges déclarées dans scripts/gen-overrides.mjs.
// Usage : node scripts/genpage.mjs <slug> [<slug>…]   (slug = nom de fichier de reference/html sans .html)
import fs from 'node:fs';
import path from 'node:path';
import { launch, ROOT } from './lib/harness.mjs';
import { OVERRIDES } from './gen-overrides.mjs';
import { COMPONENTS } from './gen-components.mjs';

const MQ = { '(min-width: 1200px)': 'desktop', '(min-width: 810px) and (max-width: 1199.98px)': 'tablet', '(max-width: 809.98px)': 'phone' };
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'public/assets/manifest.json'), 'utf8'));
const COMPS = JSON.parse(fs.readFileSync(path.join(ROOT, 'reference/framer/components.json'), 'utf8'));
const VSTY = JSON.parse(fs.readFileSync(path.join(ROOT, 'reference/framer/variant-styles.json'), 'utf8'));
const VARS = JSON.parse(fs.readFileSync(path.join(ROOT, 'reference/framer/variants.json'), 'utf8'));
const FXJ = JSON.parse(fs.readFileSync(path.join(ROOT, 'reference/framer/fx.json'), 'utf8'));
const anims = JSON.parse(fs.readFileSync(path.join(ROOT, 'reference/framer/animations.json'), 'utf8'));
const already = new Set();
for (const f of ['src/styles/framer-base.css', 'src/styles/presets.css', 'src/components/Template.css', 'src/components/footer/Footer.css', 'src/components/nav/SharedNavigation.css'])
  for (const l of fs.readFileSync(path.join(ROOT, f), 'utf8').split('\n')) already.add(l.trim());
const localize = (s) => s.replace(/https:\/\/framerusercontent\.com\/[^"')\s,]+/g, (u) => manifest[u.split('?')[0]]?.local || u);
const routeOf = (slug) => (slug === 'home' ? '/' : '/' + slug.replace(/__/g, '/'));

const b = await launch({ webgl: false });
for (const slug of process.argv.slice(2).filter((a) => !a.startsWith('--'))) {
  const html = fs.readFileSync(path.join(ROOT, 'reference/html', slug + '.html'), 'utf8');
  const ctx = await b.newContext({ javaScriptEnabled: false, viewport: { width: 1440, height: 900 } });
  await ctx.route('**/*', (r) => r.abort());
  const p = await ctx.newPage();
  await p.setContent(html, { waitUntil: 'domcontentloaded' });
  const res = await p.evaluate(() => {
    const tpl = document.querySelector('#main > div > .framer-eYdsD');
    const pick = (e) => [...e.children].find((k) => k.tagName === "DIV"); const root = tpl ? pick(tpl) : pick(document.querySelector("#main > div"));
    const ser = (e) => {
      if (e.nodeType === 3) return { t: e.textContent };
      if (e.nodeType !== 1 || ['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEMPLATE'].includes(e.tagName)) return null;
      const n = { tag: e.tagName.toLowerCase(), attrs: [...e.attributes].map((a) => [a.name, a.value]) };
      if (e.namespaceURI === 'http://www.w3.org/2000/svg') { n.svgInner = e.innerHTML; return n; }
      n.kids = [...e.childNodes].map(ser).filter(Boolean);
      return n;
    };
    const els = [root, ...root.querySelectorAll('*')];
    const scopes = new Set(); for (const e of els) for (const c of e.classList) if (/^framer-[A-Za-z0-9]{5}$/.test(c) && /[A-Z]/.test(c)) scopes.add(c);
    const scopeRe = scopes.size ? new RegExp('\\.(' + [...scopes].join('|') + ')(?![\\w-])') : null;
    const strip = (s) => s.replace(/::?(hover|focus-visible|focus-within|focus|active|before|after|placeholder|-webkit-[a-z-]+|-moz-[a-z-]+|selection|visited|disabled|checked|invalid|valid|first-letter|first-line)(\([^)]*\))?/g, '');
    const rules = [];
    const visit = (list, cond) => {
      for (const r of list) {
        if (r.type === 1) {
          let hit = !!(scopeRe && scopeRe.test(r.selectorText));
          for (const s of r.selectorText.split(',')) {
            const t = strip(s).trim();
            if (!t || t === '*' || /^(html|body|:root|#main)\b/.test(t)) continue;
            try { if (els.some((e) => e.matches(t))) { hit = true; break; } } catch {}
          }
          if (hit) rules.push(cond ? `@media ${cond} { ${r.cssText} }` : r.cssText);
        } else if (r.type === 4) visit(r.cssRules, (cond ? cond + ' and ' : '') + r.media.mediaText);
        else if (r.type === 12) visit(r.cssRules, cond);
      }
    };
    for (const sh of document.styleSheets) { try { visit(sh.cssRules, ''); } catch {} }
    // classes hidden-* → media (règles « display:none » de la page)
    const hidden = {};
    const scan = (list, cond) => { for (const r of list) { if (r.type === 4) scan(r.cssRules, r.media.mediaText); else if (r.type === 1 && cond) for (const m of r.selectorText.matchAll(/\.(hidden-[a-z0-9]+)/g)) if (/display:\s*none/.test(r.cssText)) hidden[m[1]] = cond; } };
    for (const sh of document.styleSheets) { try { scan(sh.cssRules, ''); } catch {} }
    return { tree: ser(root), rules, hidden };
  });
  await ctx.close();

  const route = routeOf(slug);
  const A = anims[slug] || {};
  const bpOfHash = Object.fromEntries((A.breakpoints || []).map((x) => [x.hash, MQ[x.mediaQuery]]));
  const hiddenBp = (c) => MQ[res.hidden[c]] || bpOfHash[c.slice(7)];
  const T = [];
  const tx = (s) => { T.push(s); return `T[${T.length - 1}]`; };
  const imports = new Set();
  const vstack = [];
  const svStack = [0]; let svSeq = 0; const idxCount = new Map();
  const appearUsed = {};

  const ATTR = { class: 'className', for: 'htmlFor', tabindex: 'tabIndex', srcset: 'srcSet', playsinline: 'playsInline', autoplay: 'autoPlay', fetchpriority: 'fetchPriority', readonly: 'readOnly', maxlength: 'maxLength', autocomplete: 'autoComplete', crossorigin: 'crossOrigin', 'xlink:href': 'xlinkHref', 'xml:space': 'xmlSpace', 'xmlns:xlink': 'xmlnsXlink', 'fill-rule': 'fillRule', 'clip-rule': 'clipRule', 'stroke-width': 'strokeWidth', 'stroke-linecap': 'strokeLinecap', 'stroke-linejoin': 'strokeLinejoin', 'stroke-miterlimit': 'strokeMiterlimit', 'enable-background': 'enableBackground', enctype: 'encType', novalidate: 'noValidate', allowfullscreen: 'allowFullScreen', frameborder: 'frameBorder', datetime: 'dateTime', colspan: 'colSpan', rowspan: 'rowSpan', 'accept-charset': 'acceptCharset', referrerpolicy: 'referrerPolicy', inputmode: 'inputMode', minlength: 'minLength', srcdoc: 'srcDoc' };
  const BOOL = new Set(['loop', 'muted', 'playsinline', 'autoplay', 'required', 'disabled', 'checked', 'readonly', 'hidden', 'novalidate', 'controls', 'allowfullscreen', 'selected', 'multiple']);
  const KNOWN = new Set('id href src alt title role type name value placeholder target rel width height loading decoding poster preload action method dir lang min max step pattern accept download sandbox allow frameborder scrolling label wrap rows cols open'.split(' '));
  const TEXT_ATTR = new Set(['alt', 'placeholder', 'aria-label', 'title']);
  const camel = (k) => k.startsWith('--') ? k : k.replace(/^-(webkit|moz|ms)-/, (_, v) => v[0].toUpperCase() + v.slice(1) + '-').replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  function styleObj(s) {
    const out = []; let depth = 0, cur = '';
    for (const ch of s) { if (ch === '(') depth++; if (ch === ')') depth--; if (ch === ';' && depth === 0) { out.push(cur); cur = ''; } else cur += ch; }
    if (cur.trim()) out.push(cur);
    const pairs = out.map((d) => { const i = d.indexOf(':'); return i < 0 ? null : [d.slice(0, i).trim(), d.slice(i + 1).trim()]; }).filter((x) => x && x[0]);
    return '{ ' + pairs.map(([k, v]) => `${JSON.stringify(camel(k))}: ${JSON.stringify(localize(v))}`).join(', ') + ' }';
  }
  const resolve = (href) => { const u = new URL(href, 'https://x' + (route === '/' ? '/' : route)); return u.pathname.replace(/\/$/, '') || '/'; };
  function attrs(n, skip = new Set()) {
    const out = [];
    for (const [k0, v] of n.attrs) {
      const k = k0.toLowerCase();
      if (skip.has(k) || k === 'sizes' || k === 'srcset') continue; // srcset Framer : variantes non archivées ; src local pleine résolution
      if (k === 'style') { out.push(`style={${styleObj(v)}}`); continue; }
      if (BOOL.has(k)) { out.push(`${ATTR[k] || k}`); continue; }
      if (k === 'draggable' || k === 'contenteditable' || k === 'spellcheck') { out.push(`${k === 'contenteditable' ? 'contentEditable' : k === 'spellcheck' ? 'spellCheck' : k}={${v === 'true'}}`); continue; }
      if (k === 'tabindex' || ((k === 'width' || k === 'height') && /^\d+$/.test(v) && n.tag !== 'svg')) { out.push(`${ATTR[k] || k}={${+v}}`); continue; }
      if (k === 'value' && (n.tag === 'input' || n.tag === 'textarea')) { out.push(`defaultValue=${JSON.stringify(v)}`); continue; }
      if (TEXT_ATTR.has(k) && v) { out.push(`${k}={${tx(v)}}`); continue; }
      if (k === 'name' && n.tag !== 'input' && n.tag !== 'textarea' && n.tag !== 'select' && n.tag !== 'form' && n.tag !== 'iframe') { out.push(`{...{ name: ${JSON.stringify(v)} }}`); continue; }
      if (n.tag !== 'svg' && !ATTR[k] && !KNOWN.has(k) && !/^(data|aria)-/.test(k)) { out.push(`{...{ ${JSON.stringify(k0)}: ${JSON.stringify(v)} }}`); continue; } // attribut non standard (Framer) conservé tel quel
      out.push(`${ATTR[k] || (n.tag === 'svg' ? k0 : k)}=${JSON.stringify(localize(v))}`);
    }
    return out.length ? ' ' + out.join(' ') : '';
  }
  // attributs d'un nœud sous forme d'objet JS (paragraphes des effets de texte)
  function attrsObj(n) {
    const o = [];
    for (const [k0, v] of n.attrs) {
      const k = k0.toLowerCase();
      if (k === 'style') o.push(`style: ${styleObj(v)}`);
      else o.push(`${JSON.stringify(ATTR[k] || k)}: ${TEXT_ATTR.has(k) ? tx(v) : JSON.stringify(v)}`);
    }
    return '{ ' + o.join(', ') + ' }';
  }
  const cls = (n) => (n.attrs.find(([k]) => k === 'class')?.[1] || '').split(/\s+/).filter(Boolean);
  const attr = (n, k) => n.attrs.find(([a]) => a === k)?.[1];
  function jsx(n, d) {
    const ind = '  '.repeat(d);
    if (n.t !== undefined) return n.t === '' ? '' : `${ind}{${tx(n.t)}}`;
    if (n.expr !== undefined) return `${ind}{${n.expr}}`; // valeur calculée (surcharges)
    const name = attr(n, 'data-framer-name');
    const ov = OVERRIDES.find((o) => o.match(n, { slug, name, cls: cls(n) }));
    if (ov) { for (const i of ov.imports || []) imports.add(i); if (ov.rewrite) return jsx(ov.rewrite(n), d); return ind + ov.render(n, { jsx: (k, dd) => jsx(k, dd ?? d + 1), attrs, tx, d, slug, route, T }); }
    const c = cls(n);
    // enveloppe ssr-variant
    if (c[0] === 'ssr-variant') {
      imports.add(`import { SV } from '@/components/Variants';`);
      const hid = new Set(c.slice(1).map(hiddenBp));
      const show = ['desktop', 'tablet', 'phone'].filter((x) => !hid.has(x));
      return `${ind}<SV c=${JSON.stringify(c.join(' '))} show={${JSON.stringify(show)}}>\n${n.kids.map((k) => jsx(k, d + 1)).filter(Boolean).join('\n')}\n${ind}</SV>`;
    }
    let el = elem(n, d, ind);
    const hid = c.filter((x) => x.startsWith('hidden-')).map(hiddenBp).filter(Boolean);
    if (hid.length) { imports.add(`import { HideOn } from '@/components/Variants';`); el = `${ind}<HideOn on={${JSON.stringify([...new Set(hid)])}}>\n${el}\n${ind}</HideOn>`; }
    return el;
  }
  function elem(n, d, ind) {
    if (n.svgInner !== undefined) return `${ind}<${n.tag}${attrs(n)}${n.svgInner ? ` dangerouslySetInnerHTML={{ __html: ${JSON.stringify(localize(n.svgInner))} }}` : ''} />`;
    const kids = () => n.kids.map((k) => jsx(k, d + 1)).filter(Boolean).join('\n');
    const aid = attr(n, 'data-framer-appear-id');
    let open = n.tag, close = n.tag, extra = '';
    if (aid && A.appear?.[aid]) {
      imports.add(`import { Appear } from '@/components/Appear';`);
      appearUsed[aid] = A.appear[aid];
      open = `Appear as="${n.tag}" spec={AP[${JSON.stringify(aid)}]} bps={BPS}`; close = 'Appear';
    }
    // effets Framer déclarés par classe (scripts/extract-fx.mjs)
    const fxs = cls(n).flatMap((c) => FXJ[c] || []).map((x) => x.props);
    const tfx = fxs.find((p) => p.effect && typeof p.effect === 'object');
    // bascule de variante : marque la racine du composant (1er descendant portant la classe de la variante masquée)
    const vfx = fxs.find((p) => p.__framer__variantAppearEffectEnabled === true && p.__framer__visibleVariantId && VARS[p.__framer__obscuredVariantId]?.cls && VARS[p.__framer__visibleVariantId]?.cls);
    if (vfx) {
      const fromC = VARS[vfx.__framer__obscuredVariantId].cls;
      const mark = (k) => { if (!k.tag) return false; if (cls(k).includes(fromC)) { k.vapp = { from: VARS[vfx.__framer__obscuredVariantId], to: VARS[vfx.__framer__visibleVariantId], threshold: vfx.__framer__threshold ?? 0, once: !!vfx.__framer__animateOnce }; return true; } return (k.kids || []).some(mark); };
      n.kids.some(mark);
    }
    if (n.vapp && !aid) {
      imports.add(`import { VariantAppear } from '@/components/fx/VariantAppear';`);
      open = `VariantAppear as="${n.tag}" fx={${JSON.stringify(n.vapp)}}`; close = 'VariantAppear';
    }
    const afx = fxs.find((p) => p.__framer__styleAppearEffectEnabled && p.__framer__enter && typeof p.__framer__enter === 'object');
    if (tfx && !aid) {
      imports.add(`import { TextFx } from '@/components/fx/TextFx';`);
      const text = (k) => (k.t !== undefined ? k.t : (k.kids || []).map(text).join(''));
      // segments : texte des mots (<span white-space:nowrap>) et espaces ; autre élément en ligne = segment stylé
      const segs = (k) => { const out = []; let cur = '', has = false; for (const c of k.kids) { if (c.t !== undefined || /white-space:\s*(nowrap|unset)/.test(attr(c, 'style') || '')) { cur += text(c); has = true; } else { if (has) out.push(tx(cur)); cur = ''; has = false; out.push(`{ tag: ${JSON.stringify(c.tag)}, attrs: ${attrsObj(c)}, text: ${tx(text(c))} }`); } } if (has) out.push(tx(cur)); return out; };
      const paras = n.kids.filter((k) => k.tag).map((k) => `{ tag: ${JSON.stringify(k.tag)}, attrs: ${attrsObj(k)}, segs: [${segs(k).join(', ')}] }`);
      return `${ind}<TextFx as="${n.tag}" fx={${JSON.stringify(tfx.effect)}} paras={[${paras.join(', ')}]}${attrs(n)} />`;
    }
    if (afx && !aid) {
      imports.add(`import { InView } from '@/components/fx/InView';`);
      const tr = { ...(afx.__framer__animate?.transition || {}) };
      if (tr.$staggerStep != null) { // rang de l'élément dans sa liste de collection (même ordre que le SSR)
        const key = svStack.join('.') + '|' + cls(n).join('.');
        const i = idxCount.get(key) || 0; idxCount.set(key, i + 1);
        tr.delay = +((tr.delay ?? 0) + i * tr.$staggerStep).toFixed(6); delete tr.$staggerStep;
      }
      const fx = { enter: afx.__framer__enter, transition: tr, once: !!afx.__framer__animateOnce, threshold: afx.__framer__threshold ?? 0, target: afx.__targetOpacity ?? 1 };
      open = `InView as="${n.tag}" fx={${JSON.stringify(fx)}}`; close = 'InView';
    }
    // moteur de variantes : racine d'instance (classe de portée configurée + classe framer-v-*) et ses éléments stylés
    const scope = cls(n).find((c) => COMPONENTS[c] && COMPS[c]);
    let pushed = false;
    if (scope && !aid && open === n.tag) {
      const C = COMPS[scope], cfg = COMPONENTS[scope];
      const initial = Object.keys(C.variants).find((id) => cls(n).includes(C.variants[id].cls));
      if (initial) {
        imports.add(`import { VRoot, VEl } from '@/components/fx/Variant';`);
        open = `VRoot as="${n.tag}" map={${JSON.stringify(C.variants)}} initial="${initial}" transition={${JSON.stringify(C.transition)}}${cfg.tap ? ` tap={${JSON.stringify(cfg.tap)}}` : ''}${cfg.follow ? ` follow={${JSON.stringify(cfg.follow)}}` : ''}`; close = 'VRoot';
        vstack.push(C); pushed = true;
      }
    } else if (vstack.length && open === n.tag && !aid) {
      const C = vstack[vstack.length - 1];
      const ids = new Set(Object.keys(C.variants));
      const st = cls(n).flatMap((c) => VSTY[c] || []).find((x) => x.module === C.module && Object.keys(x.variants).some((k) => ids.has(k)));
      if (st) { imports.add(`import { VRoot, VEl } from '@/components/fx/Variant';`); open = `VEl as="${n.tag}" base={${JSON.stringify(st.base || {})}} variants={${JSON.stringify(st.variants)}}`; close = 'VEl'; }
    }
    const href = attr(n, 'href');
    let skip = new Set();
    if (n.tag === 'a' && href && /^\.\.?\//.test(href) && !aid) {
      imports.add(`import { Lk } from '@/components/Lk';`);
      open = 'Lk'; close = 'Lk'; extra = ` to=${JSON.stringify(resolve(href))}`;
    }
    const at = attrs(n, skip) + extra;
    const res = !n.kids.length || ['img', 'input', 'br', 'hr', 'source'].includes(n.tag) ? `${ind}<${open}${at} />` : `${ind}<${open}${at}>\n${kids()}\n${ind}</${close}>`;
    if (pushed) vstack.pop();
    return res;
  }
  const body = jsx(res.tree, 2);

  const dir = path.join(ROOT, 'src/gen', slug);
  fs.mkdirSync(dir, { recursive: true });
  const uniq = [...new Set(res.rules)].filter((r) => !already.has(r.trim()) && !/framer-styles-preset-/.test(r) && !r.startsWith('@supports'));
  fs.writeFileSync(path.join(dir, 'Body.css'), `/* Généré par scripts/genpage.mjs depuis reference/html/${slug}.html (D-033). Valeurs d'origine inchangées. */\n${uniq.map(localize).join('\n')}\n`);
  fs.mkdirSync(path.join(ROOT, 'src/data/text'), { recursive: true });
  fs.writeFileSync(path.join(ROOT, 'src/data/text', slug + '.ts'), `// Textes affichés de ${route} (ordre du document SSR d'origine), extraits par scripts/genpage.mjs (D-033).\nexport const T: readonly string[] = ${JSON.stringify(T, null, 1)};\n`);
  const bps = Object.fromEntries(Object.entries(bpOfHash).filter(([, v]) => v));
  const head = [
    `// Généré par scripts/genpage.mjs depuis reference/html/${slug}.html (D-033) — ne pas modifier à la main : régénérer.`,
    `import './Body.css';`, `import { T } from '@/data/text/${slug}';`, ...[...imports].sort(),
    Object.keys(appearUsed).length ? `\nconst BPS = ${JSON.stringify(bps)} as const;\nconst AP = ${JSON.stringify(appearUsed)};` : '',
  ].join('\n');
  fs.writeFileSync(path.join(dir, 'Body.tsx'), `${head}\n\nexport function Body() {\n  return (\n${body}\n  );\n}\n`);
  console.log(slug, '→ src/gen/' + slug, uniq.length, 'règles CSS', T.length, 'textes', Object.keys(appearUsed).length, 'apparitions');
}
await b.close();
