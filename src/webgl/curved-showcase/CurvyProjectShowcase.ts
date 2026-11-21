// @ts-nocheck
'use client';
/* eslint-disable */
// GÉNÉRÉ par scripts/agents/homea/port.mjs — ne pas modifier à la main.
import * as React from 'react';
import { useLayoutEffect, useMemo, startTransition, useState, useRef, useCallback, useEffect } from 'react';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { createPortal } from 'react-dom';
// Liaisons du module d'origine (globalThis.window / navigator, undefined côté serveur).
const win = typeof window !== 'undefined' ? window : undefined;
const nav = typeof navigator !== 'undefined' ? navigator : undefined;
// Initialisation paresseuse rolldown : exécutée une seule fois, à l'import.
const __esmMin = (fn) => { let done = false, r; return () => (done ? r : ((done = true), (r = fn()))); };
const initEnv = () => {}, initReact = () => {}, initReactDom = () => {}, initJsxRuntime = () => {}, initFramer = () => {};
const __lazyInit = __esmMin, __initReact_R = () => {}, __initReact_s = () => {}, __initReact_T = () => {}, __initFramer_Q = () => {}, __initThree = () => {};
const Children = React.Children;

// Drapeaux de débogage « miralab » (?miralab=a,b ou sessionStorage `miralab`). Pour un visiteur normal : ensemble vide → false.
// Utilisés ici uniquement pour désactiver des optimisations (cpfbm, cpdepth, cpbitmap, cpscene, cpplay, cpposter, cpvtex, cpread, cpwarm, cpflip, cpdispose, cpslotvid).
function miraLabFlag(e) {
  if (win === void 0) return false;
  let n = win;
  if (!n.__miraLab) {
    let e = ``;
    try {
      let n = new URLSearchParams(win.location.search).get(`miralab`);
      n === null ? e = win.sessionStorage.getItem(`miralab`) || `` : (e = n, win.sessionStorage.setItem(`miralab`, n));
    } catch {}
    n.__miraLab = new Set(e.split(`,`).map(e => e.trim()).filter(Boolean));
  }
  return n.__miraLab.has(e) || e !== `hud` && n.__miraLab.has(`before`);
}
// Fonction vide : remplace Texture.update de three pour la texture vidéo pilotée par rVFC.
function noop() {}
// Texture vidéo : needsUpdate seulement quand une nouvelle image est décodée (requestVideoFrameCallback).
// Repli sur THREE.VideoTexture si rVFC absent (ou drapeau miralab).
function createVideoFrameTexture(e, t, n) {
  let r = t;
  if (miraLabFlag(n) || typeof r.requestVideoFrameCallback != `function`) return new e.VideoTexture(t);
  let i = new e.Texture(t);
  i.isVideoTexture = true, i.format = e.RGBFormat, i.minFilter = e.LinearFilter, i.magFilter = e.LinearFilter, i.generateMipmaps = false, i.update = noop;
  let a = 0,
    o = true,
    s = () => {
      o && (i.needsUpdate = true, a = r.requestVideoFrameCallback(s));
    };
  return a = r.requestVideoFrameCallback(s), i.addEventListener(`dispose`, () => {
    o = false;
    try {
      r.cancelVideoFrameCallback?.(a);
    } catch {}
  }), i;
}
// Teste une fois si createImageBitmap(..., {imageOrientation:"flipY"}) retourne bien l'image retournée (sinon chargement par TextureLoader).
function supportsBitmapFlipY() {
  return flipYSupportPromise ||= (async () => {
    try {
      if (typeof createImageBitmap != `function` || typeof ImageData > `u`) return false;
      let e = new ImageData(new Uint8ClampedArray([255, 0, 0, 255, 0, 255, 0, 255]), 1, 2),
        t = await createImageBitmap(e, {
          imageOrientation: `flipY`
        }),
        n = document.createElement(`canvas`);
      n.width = 1, n.height = 2;
      let r = n.getContext(`2d`, miraLabFlag(`cpflip`) ? void 0 : {
        willReadFrequently: true
      });
      if (!r) return false;
      r.drawImage(t, 0, 0);
      let i = r.getImageData(0, 0, 1, 1).data;
      try {
        t.close?.();
      } catch {}
      return i[1] > 128 && i[0] < 128;
    } catch {
      return false;
    }
  })(), flipYSupportPromise;
}
// Vrai si l'élément ou un de ses 6 ancêtres a une opacité < 0,99 (transition de page en cours) : la boucle saute alors une image sur deux.
function hasTranslucentAncestor(e, n = 6) {
  let r = e;
  for (let e = 0; e < n && r; e++) {
    let e = parseFloat(win.getComputedStyle(r).opacity);
    if (Number.isFinite(e) && e < .99) return true;
    r = r.parentElement;
  }
  return false;
}
// Largeur cible des couvertures : min(1600, ceil(innerWidth × min(dpr, 2,5))).
function targetCoverWidth() {
  if (win === void 0) return 1600;
  let e = Math.min(win.devicePixelRatio || 1, 2.5);
  return Math.min(1600, Math.ceil((win.innerWidth || 1600) * e));
}
// Choisit dans un srcset la plus petite variante ≥ largeur cible (descripteurs w ; x compté ×1000), sinon la plus grande.
function pickSrcsetUrl(e, t = 1600) {
  let n = e.split(`,`).map(e => e.trim()).filter(Boolean).map(e => {
    let t = e.split(/\s+/),
      n = t[0],
      r = t[1] || ``,
      i = 0;
    return r.endsWith(`w`) ? i = parseFloat(r) : r.endsWith(`x`) && (i = parseFloat(r) * 1e3), {
      url: n,
      weight: i
    };
  }).filter(e => !!e.url);
  return n.length === 0 ? null : (n.sort((e, t) => e.weight - t.weight), (n.find(e => e.weight >= t) || n[n.length - 1]).url);
}
// Rayon de bordure hérité de la carte connectée (border-top-left-radius en px, 5 ancêtres max).
function readBorderRadiusPx(e, n) {
  if (win === void 0) return 0;
  let r = e;
  for (let e = 0; r && e < 5; e++) {
    let e = win.getComputedStyle(r).borderTopLeftRadius,
      i = parseFloat(e);
    if (e.endsWith(`px`) && Number.isFinite(i) && i > 0) return i;
    if (r === n) break;
    r = r.parentElement;
  }
  return 0;
}
// La liste CMS connectée est enveloppée : on descend d'un niveau si le premier enfant contient les éléments.
function unwrapListRoot(e) {
  let t = e.firstElementChild;
  return t instanceof HTMLElement && t.children.length > 0 ? t : e;
}
// Image la plus grande (naturalWidth × naturalHeight, ou plus grand descripteur w du srcset) = couverture.
function findLargestImage(e) {
  let t = Array.from(e.querySelectorAll(`img`)),
    n = null,
    r = -1;
  for (let e of t) {
    let t = (e.naturalWidth || 0) * (e.naturalHeight || 0);
    if (!t) {
      let n = e.getAttribute(`srcset`);
      if (n) {
        let e = 0;
        n.split(`,`).forEach(t => {
          let n = t.trim().split(/\s+/)[1] || ``;
          n.endsWith(`w`) && (e = Math.max(e, parseFloat(n) || 0));
        }), t = e * e;
      } else t = 1;
    }
    t > r && (r = t, n = e);
  }
  return n;
}
// URL de couverture : variante srcset adaptée à la largeur cible, sinon currentSrc/src.
function bestImageUrl(e) {
  let t = e.getAttribute(`srcset`);
  if (t) {
    let e = pickSrcsetUrl(t, targetCoverWidth());
    if (e) return e;
  }
  return e.currentSrc || e.getAttribute(`src`) || ``;
}
// Remet une vidéo à 0 (fastSeek si disponible).
function rewindVideo(e) {
  try {
    typeof e.fastSeek == `function` ? e.fastSeek(0) : e.currentTime = 0;
  } catch {}
}
// URL .webm ?
function isWebmUrl(e) {
  if (!e) return false;
  try {
    let n = win === void 0 ? `https://x/` : win.location.href;
    return /\.webm$/i.test(new URL(e, n).pathname);
  } catch {
    return /\.webm(?:$|[?#])/i.test(e);
  }
}
// iOS/iPadOS ou Safari macOS.
function isAppleWebKit() {
  if (nav === void 0) return false;
  let e = nav.userAgent || ``,
    t = nav.platform || ``,
    n = nav.maxTouchPoints || 0,
    r = /iPad|iPhone|iPod/i.test(e) || t === `MacIntel` && n > 1,
    i = nav.vendor === `Apple Computer, Inc.` && /AppleWebKit/i.test(e) && !r;
  return r || i;
}
// Safari + WebM : la vidéo est chargée en Blob et relancée à la main (pas de loop natif).
function needsWebmBlobPlayback(e) {
  return isAppleWebKit() && isWebmUrl(e);
}
// Garde l'élément <video> détaché en cache (Map url → video) pour réutilisation ; 8 max (pointeur fin) ou 4.
function parkVideoElement(e, t) {
  try {
    t.pause();
  } catch {}
  try {
    t.remove();
  } catch {}
  try {
    t.removeAttribute(`src`), t.load();
  } catch {}
  for (parkedVideos.delete(e), parkedVideos.set(e, t); parkedVideos.size > maxParkedVideos();) {
    let e = parkedVideos.entries().next().value;
    if (!e) break;
    parkedVideos.delete(e[0]), e[1].removeAttribute(`src`), e[1].load();
  }
}
// Libération GPU différée (renderer.dispose + forceContextLoss) : exécute la tâche en attente.
function runPendingGpuDisposal() {
  if (!pendingGpuDisposal) return;
  win !== void 0 && win.clearTimeout(gpuDisposalTimer);
  let e = pendingGpuDisposal;
  pendingGpuDisposal = null;
  try {
    e();
  } catch {}
}
// Attend que le fil principal soit calme (4 images < 40 ms, aucune animation WAAPI finie en cours), max n ms, puis requestIdleCallback.
function whenMainThreadQuiet(e, n) {
  let r = performance.now(),
    i = () => {
      try {
        let e = document.getAnimations?.() || [];
        for (let t of e) {
          if (t.playState !== `running`) continue;
          let e = t.effect?.getComputedTiming?.().endTime;
          if (typeof e == `number` && Number.isFinite(e)) return true;
        }
      } catch {}
      return false;
    },
    a = () => {
      let n = win;
      typeof n.requestIdleCallback == `function` ? n.requestIdleCallback(e, {
        timeout: 1e3
      }) : win.setTimeout(e, 0);
    },
    o = () => {
      if (performance.now() - r >= n) return a();
      let e = 0,
        s = 0,
        c = 0,
        l = n => {
          if (e && n - e > 40 && s++, e = n, ++c < 4) return win.requestAnimationFrame(l);
          s === 0 && !i() ? a() : win.setTimeout(o, 300);
        };
      win.requestAnimationFrame(l);
    };
  o();
}
// Programme la libération GPU TIMING.gpuDisposalMs (900 ms) après le démontage, quand le fil principal est calme (≤ 5 s).
function scheduleGpuDisposal(e) {
  if (win === void 0) try {
    e();
  } catch {} else runPendingGpuDisposal(), pendingGpuDisposal = e, gpuDisposalTimer = win.setTimeout(miraLabFlag(`cpdispose`) ? runPendingGpuDisposal : () => {
    pendingGpuDisposal === e && whenMainThreadQuiet(() => {
      pendingGpuDisposal === e && runPendingGpuDisposal();
    }, 5e3);
  }, TIMING.gpuDisposalMs);
}
// Lit les cartes de la Collection List connectée (slot) : couverture (poster vidéo, sinon image la plus grande, sinon background-image),
// mini-couverture (plus petite variante srcset), vidéo, titre (texte visible de plus grande taille), lien, rayon.
function readSlotItems(e) {
  let n = unwrapListRoot(e);
  return Array.from(n.children).map(e => {
    if (!(e instanceof HTMLElement)) return null;
    if (e.dataset.curvyProxyWrap === `1`) {
      let t = e.firstElementChild;
      return t instanceof HTMLElement ? t : null;
    }
    return e;
  }).filter(e => e instanceof HTMLElement).map((e, n) => {
    let r = e.querySelector(`video`),
      i = ``;
    r && (i = r.dataset.curvySrc || r.currentSrc || r.getAttribute(`src`) || r.querySelector(`source`)?.getAttribute(`src`) || ``);
    let a = findLargestImage(e),
      o = ``,
      s = ``;
    r && (o = r.getAttribute(`poster`) || r.poster || ``);
    let c = !!o,
      l = 0;
    if (!c && a) {
      let e = a.naturalWidth || parseInt(a.getAttribute(`width`) || ``, 10) || 0,
        t = a.naturalHeight || parseInt(a.getAttribute(`height`) || ``, 10) || 0;
      e > 0 && t > 0 && (l = e / t);
    }
    let u = a?.getAttribute(`srcset`);
    if (!o && u && (o = pickSrcsetUrl(u, targetCoverWidth()) || ``, s = pickSrcsetUrl(u, 1) || ``, s === o && (s = ``)), r && (s = ``), o ||= a?.currentSrc || a?.getAttribute(`src`) || ``, !o && win !== void 0) {
      let n = [e, ...Array.from(e.querySelectorAll(`*`))];
      for (let e of n) {
        let n = win.getComputedStyle(e).backgroundImage,
          r = /url\((['"]?)(.*?)\1\)/.exec(n);
        if (r?.[2]) {
          o = r[2];
          break;
        }
      }
    }
    let d = readBorderRadiusPx(r || a || e, e),
      f = e.tagName.toLowerCase() === `a` ? e : null,
      p = e.querySelector(`a[href]`),
      m = e.closest(`a[href]`),
      h = f?.href || p?.href || m?.href || null,
      g = (e.innerText || ``).split(`
`).map(e => e.trim()).filter(Boolean),
      _ = ``,
      v = [];
    if (win !== void 0) {
      let n = -1,
        r = document.createTreeWalker(e, NodeFilter.SHOW_TEXT),
        i = r.nextNode();
      for (; i;) {
        let e = i.textContent?.trim(),
          a = i.parentElement;
        if (e && a) {
          let r = win.getComputedStyle(a);
          if (r.display !== `none` && r.visibility !== `hidden`) {
            v.push({
              text: e,
              parent: a
            });
            let t = parseFloat(r.fontSize) || 0;
            t > n && (n = t, _ = e);
          }
        }
        i = r.nextNode();
      }
    }
    let y = _ || g[0] || `Project ${n + 1}`;
    return {
      coverUrl: o,
      coverTinyUrl: s,
      coverAspect: l,
      videoUrl: i,
      title: y,
      href: h,
      radiusPx: d,
      domIndex: n
    };
  }).filter(e => !!(e.coverUrl || e.videoUrl));
}
// Signature stable de la liste de projets (pour éviter les re-rendus).
function itemsSignature(e) {
  return JSON.stringify(e.map(e => [e.coverUrl, e.videoUrl, e.title, e.href, e.radiusPx]));
}
// Observe un calque texte « source de typographie » (fontSlot / countFontSlot) : mutation (debounce 80 ms), rAF, fonts.ready, loadingdone.
function useTypographySource(e, n, r) {
  useEffect(() => {
    if (win === void 0) return;
    let r = e.current;
    if (!r) return;
    let i = 0,
      a = new MutationObserver(() => {
        win.clearTimeout(i), i = win.setTimeout(() => n(), 80);
      });
    a.observe(r, {
      childList: true,
      subtree: true,
      attributes: true
    });
    let o = win.requestAnimationFrame(() => n()),
      s = document.fonts;
    s?.ready?.then && s.ready.then(() => n());
    let c = () => n();
    return s?.addEventListener?.(`loadingdone`, c), () => {
      win.clearTimeout(i), win.cancelAnimationFrame(o), s?.removeEventListener?.(`loadingdone`, c), a.disconnect();
    };
  }, [e, n, r]);
}
// =====================================================================================================
// Composant de code « Curvy Project Showcase » (LaunchNow Design), extrait du module de route /projects.
// Props groupées par Framer en objets Layout / Interaction / Motion / Effects / Mouse / Style / Strip, aplaties ici.
// =====================================================================================================
function CurvyProjectShowcase(props) {
  let {
      slot: slot,
      fontSlot: fontSlot,
      countFontSlot: countFontSlot,
      items: items,
      centerWidthPct: centerWidthPct,
      sideScale: sideScale,
      sidePeekPct: sidePeekPct,
      cardAspect: cardAspect,
      cornerRadius: cornerRadius,
      clickAction: clickAction,
      cardCursor: cardCursor,
      scrollSpeed: scrollSpeed,
      dragSpeed: dragSpeed,
      lerpSmoothness: lerpSmoothness,
      bendIntensity: bendIntensity,
      edgeWarp: edgeWarp,
      edgeWarpStrength: edgeWarpStrength,
      edgeEffect: edgeEffect,
      mouseWarp: mouseWarp,
      mouseWarpStrength: mouseWarpStrength,
      mouseEffect: mouseEffect,
      mouseRadius: mouseRadius,
      mouseChroma: mouseChroma,
      mouseSpeedReact: mouseSpeedReact,
      hijackScroll: hijackScroll,
      infiniteLoop: infiniteLoop,
      autoplay: autoplay,
      autoplayInterval: autoplayInterval,
      backgroundTransparent: backgroundTransparent,
      backgroundColor: backgroundColor,
      showTitleStrip: showTitleStrip,
      titleGap: titleGap,
      titleColor: titleColor,
      inactiveTitleColor: inactiveTitleColor,
      controlsColor: controlsColor,
      arrowColor: arrowColor,
      showArrows: showArrows,
      showCount: showCount,
      countSeparator: countSeparator,
      zeroPad: zeroPad,
      arrowSlot: arrowSlot,
      metaGap = 12,
      showDetails = true,
      detailsSlot = void 0
    } = {
      ...props,
      ...(props?.Layout || {}),
      ...(props?.Interaction || {}),
      ...(props?.Motion || {}),
      ...(props?.Effects || {}),
      ...(props?.Mouse || {}),
      ...(props?.Style || {}),
      ...(props?.Strip || {})
    },
    rootRef = useRef(null),
    canvasHostRef = useRef(null),
    slotHostRef = useRef(null),
    titleFontHostRef = useRef(null),
    countFontHostRef = useRef(null),
    stripViewportRef = useRef(null),
    stripBlockRef = useRef(null),
    stripBlockHeightRef = useRef(0),
    stripTrackRef = useRef(null),
    rendererRef = useRef(null),
    slotCardElsRef = useRef([]),
    detailElsRef = useRef([]),
    posterImgElsRef = useRef([]),
    detailsHostRef = useRef(null),
    detailsMaxHeightRef = useRef(0),
    detailsLayoutCacheRef = useRef([]),
    cardNaturalSizeRef = useRef([]),
    lastCardMeasureAtRef = useRef(0),
    warmedCoverUrlsRef = useRef(/* @__PURE__ */new Set()),
    cardProxyLayoutRef = useRef([]),
    pointerStateRef = useRef({
      down: false,
      moved: false,
      pointerId: -1,
      startX: 0,
      startY: 0
    }),
    slotSignatureRef = useRef(``),
    titleFontSignatureRef = useRef(``),
    countFontSignatureRef = useRef(``),
    reportedActiveIndexRef = useRef(0),
    stripPositionRef = useRef(0),
    stripMetricsRef = useRef({
      centers: [],
      viewportW: 0
    }),
    controllerRef = useRef(null),
    [slotItems, setSlotItems] = useState([]),
    [titleFont, setTitleFont] = useState(null),
    [countFont, setCountFont] = useState(null),
    [activeIndex, setActiveIndex] = useState(0),
    highlightedTitleRef = useRef(-1),
    stripLoopAppliedRef = useRef(false),
    stripOffsetsCacheRef = useRef([]),
    titleColorsRef = useRef({
      active: `#ffffff`,
      inactive: `rgba(255,255,255,0.35)`
    }),
    [stripCopies, setStripCopies] = useState(3),
    stripCopiesRef = useRef(3),
    [staticFallback, setStaticFallback] = useState(false),
    [arrowScale, setArrowScale] = useState(1),
    arrowScaleRef = useRef(1),
    hasSlot = !!slot,
    renderTarget = 'preview',
    isStaticRender = false,
    detailsHidden = !showDetails;
  // Card Details (detailsSlot) : chaque élément est positionné en absolu, opacité 0, origine 0 0 ; la boucle WebGL le place sous sa carte.
  useLayoutEffect(() => {
    if (isStaticRender || !detailsSlot || detailsHidden) {
      detailElsRef.current = [], detailsLayoutCacheRef.current = [], detailsMaxHeightRef.current = 0;
      return;
    }
    let e = detailsHostRef.current;
    if (!e) return;
    let t = () => {
      let t = unwrapListRoot(e);
      t !== e && (t.style.position = `absolute`, t.style.inset = `0`, t.style.display = `block`);
      let n = [],
        r = 0;
      Array.from(t.children).forEach((e, t) => {
        e instanceof HTMLElement && (e.dataset.curvyManaged !== `1` && (e.style.position = `absolute`, e.style.left = `0`, e.style.top = `0`, e.style.margin = `0`, e.style.opacity = `0`, e.style.willChange = `transform, opacity`, e.style.transformOrigin = `0 0`, e.dataset.curvyManaged = `1`), n[t] = e, r = Math.max(r, e.offsetHeight));
      }), detailElsRef.current = n, detailsMaxHeightRef.current = r, detailsLayoutCacheRef.current = [], e.style.visibility = `visible`;
    };
    t();
    let n = new MutationObserver(t);
    n.observe(e, {
      childList: true,
      subtree: true
    });
    let r = new ResizeObserver(t);
    return r.observe(e), () => {
      n.disconnect(), r.disconnect(), detailElsRef.current = [], detailsMaxHeightRef.current = 0;
    };
  }, [isStaticRender, detailsSlot, detailsHidden]);
  // Repli « items » manuels (max 20) si aucune Collection List n'est connectée. Sur le site : items = [] et slot connecté.
  let manualItems = useMemo(() => (items || []).slice(0, 20).map((e, t) => ({
      coverUrl: e.cover?.src || ``,
      coverTinyUrl: ``,
      videoUrl: e.video || ``,
      title: e.title || `Project ${t + 1}`,
      href: e.link || null,
      radiusPx: 0,
      domIndex: -1
    })).filter(e => !!(e.coverUrl || e.videoUrl)), [items]),
    [slotGraceOver, setSlotGraceOver] = useState(false);
  // Délai de grâce de 450 ms avant d'utiliser le repli manuel quand un slot est connecté mais pas encore lu.
  useEffect(() => {
    if (!hasSlot) return;
    let e = win.setTimeout(() => setSlotGraceOver(true), TIMING.slotGraceMs);
    return () => win.clearTimeout(e);
  }, [hasSlot]);
  // Liste effective des projets : cartes lues dans le slot, sinon [] pendant la grâce, sinon items manuels.
  let projects = hasSlot && slotItems.length > 0 ? slotItems : hasSlot && !slotGraceOver ? [] : manualItems,
    projectsSignature = useMemo(() => itemsSignature(projects), [projects]),
    projectsMediaSignature = useMemo(() => JSON.stringify(projects.map(e => [e.coverUrl, e.videoUrl, e.radiusPx, e.href])), [projects]),
    projectsRef = useRef(projects);
  projectsRef.current = projects;
  let projectCount = projects.length,
    titleFontStyle = titleFont || DEFAULT_TITLE_FONT,
    countFontStyle = countFont || {
      ...DEFAULT_COUNT_FONT,
      fontFamily: titleFontStyle.fontFamily
    },
    titleFontSignature = JSON.stringify(titleFontStyle),
    hasCustomArrow = Children.count(arrowSlot) > 0,
    fluidPx = e => {
      if (!e || !e.endsWith(`px`)) return e;
      let t = parseFloat(e);
      return !Number.isFinite(t) || t <= 0 ? e : `max(${t}px, ${Math.round(t / 1920 * 1e4) / 100}vw)`;
    },
    stripGapCss = useMemo(() => {
      let e = Math.max(0, titleGap);
      return `max(${e}px, ${Math.round(e / 1920 * 1e4) / 100}vw)`;
    }, [titleGap]),
    unitlessLineHeight = e => {
      let t = e.lineHeight,
        n = e.fontSize;
      if (t && t.endsWith(`px`) && n && n.endsWith(`px`)) {
        let e = parseFloat(t),
          r = parseFloat(n);
        if (r > 0 && Number.isFinite(e)) return Math.round(e / r * 1e3) / 1e3;
      }
      return t;
    },
    settings = {
      centerWidthPct: centerWidthPct,
      sideScale: sideScale,
      sidePeekPct: sidePeekPct,
      cardAspect: cardAspect,
      cornerRadius: cornerRadius,
      clickAction: clickAction,
      cardCursor: cardCursor,
      scrollSpeed: scrollSpeed,
      dragSpeed: dragSpeed,
      lerpSmoothness: lerpSmoothness,
      bendIntensity: bendIntensity,
      edgeWarp: edgeWarp,
      edgeWarpStrength: edgeWarpStrength,
      edgeEffect: edgeEffect,
      mouseWarp: mouseWarp,
      mouseWarpStrength: mouseWarpStrength,
      mouseEffect: mouseEffect,
      mouseRadius: mouseRadius,
      mouseChroma: mouseChroma,
      mouseSpeedReact: mouseSpeedReact,
      hijackScroll: hijackScroll,
      autoplay: autoplay,
      autoplayInterval: autoplayInterval,
      metaGap: metaGap
    },
    settingsRef = useRef(settings);
  // Instantané des réglages lu à chaque image par la boucle (settingsRef).
  settingsRef.current = settings, useEffect(() => {
    let e = rendererRef.current;
    e && THREE && (backgroundTransparent ? e.setClearColor(0, 0) : e.setClearColor(new THREE.Color(backgroundColor), 1));
  }, /* Démontage : vide les <video> du slot (pause, retrait src, load). */[backgroundTransparent, backgroundColor]), useEffect(() => {
    if (win !== void 0) return () => {
      try {
        let e = rootRef.current;
        if (!e) return;
        e.querySelectorAll(`video`).forEach(e => {
          try {
            e.pause(), e.removeAttribute(`src`), e.querySelectorAll(`source`).forEach(e => e.remove()), e.load();
          } catch {}
        });
      } catch {}
    };
  }, []);
  // Relit le slot : neutralise les <video> Framer de la liste (pause, preload none, src déplacé dans data-curvy-src) puis met à jour slotItems.
  let rescanSlot = useCallback(() => {
    let e = slotHostRef.current;
    if (!e) return;
    e.querySelectorAll(`video`).forEach(e => {
      if (e.dataset.curvySuppressed === `1`) return;
      e.dataset.curvySuppressed = `1`;
      try {
        e.pause();
      } catch {}
      if (e.addEventListener(`play`, () => {
        try {
          e.pause();
        } catch {}
      }), miraLabFlag(`cpslotvid`)) return;
      let t = e.currentSrc || e.getAttribute(`src`) || ``;
      if (t && !e.querySelector(`source`)) {
        e.dataset.curvySrc = t;
        try {
          e.preload = `none`, e.removeAttribute(`src`), e.load();
        } catch {}
      }
    });
    let t = readSlotItems(e),
      n = itemsSignature(t);
    n !== slotSignatureRef.current && (slotSignatureRef.current = n, startTransition(() => {
      setSlotItems(t);
    }));
  }, []);
  // Observe le slot (debounce 80 ms) et préchauffe jusqu'à 8 couvertures (fetch CORS ou new Image) dès la 1re image et à 300 ms.
  useEffect(() => {
    if (win === void 0) return;
    let e = slotHostRef.current;
    if (!e) return;
    let n = 0,
      r = () => {
        win.clearTimeout(n), n = win.setTimeout(() => rescanSlot(), 80);
      },
      i = new MutationObserver(e => {
        e.some(e => {
          let t = e.target;
          return !(t instanceof HTMLElement && t.closest(`[data-curvy-managed]`));
        }) && r();
      });
    i.observe(e, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: [`src`, `srcset`, `style`, `href`]
    });
    let a = () => {
        let e = slotHostRef.current;
        if (!e) return;
        let t = unwrapListRoot(e),
          n = 0;
        Array.from(t.children).forEach(e => {
          if (n >= 8 || !(e instanceof HTMLElement)) return;
          let t = e.querySelector(`video`)?.getAttribute(`poster`) || ``;
          if (!t) {
            let n = findLargestImage(e);
            t = n ? bestImageUrl(n) : ``;
          }
          if (!t || warmedCoverUrlsRef.current.has(t)) return;
          warmedCoverUrlsRef.current.add(t), n++;
          let r = () => {
            let e = new Image();
            e.crossOrigin = `anonymous`, e.src = t;
          };
          miraLabFlag(`cpwarm`) || typeof fetch != `function` ? r() : supportsBitmapFlipY().then(e => {
            e ? fetch(t, {
              mode: `cors`
            }).then(e => e.arrayBuffer()).catch(() => {}) : r();
          });
        });
      },
      o = 0,
      s = 0;
    o = win.requestAnimationFrame(a), s = win.setTimeout(a, 300);
    let c = win.requestAnimationFrame(() => rescanSlot()),
      l = win.setTimeout(() => rescanSlot(), 240);
    return () => {
      win.clearTimeout(n), win.clearTimeout(l), win.cancelAnimationFrame(c), win.cancelAnimationFrame(o), win.clearTimeout(s), i.disconnect();
    };
  }, /* Cartes DOM du slot = calques invisibles (opacité 0, pointer-events none) repositionnés sur la carte centrale pour le lien et le curseur Framer. */[rescanSlot, slot]), useEffect(() => {
    if (win === void 0) return;
    let e = slotHostRef.current;
    if (!e) return;
    if (isStaticRender) {
      slotCardElsRef.current = [], cardProxyLayoutRef.current = [];
      return;
    }
    e.style.overflow = `visible`;
    let n = unwrapListRoot(e);
    n.style.position = `absolute`, n.style.inset = `0`, n.style.display = `block`;
    let r = Array.from(n.children).filter(e => e instanceof HTMLElement);
    slotCardElsRef.current = r, cardProxyLayoutRef.current = [], cardNaturalSizeRef.current = [], r.forEach((e, t) => {
      e.style.position = `absolute`, e.style.left = `0`, e.style.top = `0`, e.style.margin = `0`, e.style.opacity = `0`, e.style.pointerEvents = `none`, e.style.willChange = `transform`, e.dataset.curvyManaged = `1`, e.style.overflow = `hidden`, e.querySelectorAll(`a, img`).forEach(e => {
        e.draggable = false;
      });
      let n = e.firstElementChild;
      if (n) {
        n.style.margin = `0`, n.dataset.curvyManaged = `1`;
        let e = n.offsetWidth,
          r = n.offsetHeight;
        cardNaturalSizeRef.current[t] = e > 2 && r > 2 ? {
          w: e,
          h: r
        } : null;
      } else cardNaturalSizeRef.current[t] = null;
    });
  }, [cardCursor, isStaticRender, slot, slotItems]);
  // Lit la typographie calculée du plus gros texte d'un calque (police, taille, graisse, axes variables, OpenType, interlettrage, casse, interligne).
  let readTypography = useCallback(e => {
      if (win === void 0 || !e) return null;
      let n = null,
        r = -1,
        i = document.createTreeWalker(e, NodeFilter.SHOW_TEXT),
        a = i.nextNode();
      for (; a;) {
        if (a.textContent && a.textContent.trim().length > 0) {
          let e = a.parentElement;
          if (e) {
            let i = parseFloat(win.getComputedStyle(e).fontSize) || 0;
            i > r && (r = i, n = e);
          }
        }
        a = i.nextNode();
      }
      if (!n) return null;
      let o = win.getComputedStyle(n);
      return {
        fontFamily: o.fontFamily,
        fontSize: o.fontSize,
        fontWeight: o.fontWeight,
        fontStyle: o.fontStyle,
        fontStretch: o.getPropertyValue(`font-stretch`),
        fontVariationSettings: o.getPropertyValue(`font-variation-settings`),
        fontFeatureSettings: o.getPropertyValue(`font-feature-settings`),
        fontOpticalSizing: o.getPropertyValue(`font-optical-sizing`),
        letterSpacing: o.letterSpacing,
        textTransform: o.textTransform,
        lineHeight: o.lineHeight
      };
    }, []),
    syncTitleFont = useCallback(() => {
      let e = readTypography(titleFontHostRef.current),
        t = e ? JSON.stringify(e) : `none`;
      t !== titleFontSignatureRef.current && (titleFontSignatureRef.current = t, startTransition(() => setTitleFont(e)));
    }, [readTypography]),
    syncCountFont = useCallback(() => {
      let e = readTypography(countFontHostRef.current),
        t = e ? JSON.stringify(e) : `none`;
      t !== countFontSignatureRef.current && (countFontSignatureRef.current = t, startTransition(() => setCountFont(e)));
    }, [readTypography]);
  // Titres de la bande : couleur active / inactive appliquée directement aux <span>.
  useTypographySource(titleFontHostRef, syncTitleFont, fontSlot), useTypographySource(countFontHostRef, syncCountFont, countFontSlot), useEffect(() => {
    titleColorsRef.current = {
      active: titleColor,
      inactive: inactiveTitleColor
    };
    let e = stripTrackRef.current;
    e && Array.from(e.children).forEach((e, t) => {
      e.style.color = t === highlightedTitleRef.current ? titleColor : inactiveTitleColor;
    });
  }, /* Après chaque rendu : réapplique la couleur active et repositionne la bande. */[titleColor, inactiveTitleColor]), useLayoutEffect(() => {
    let e = stripTrackRef.current;
    if (!e) return;
    let t = highlightedTitleRef.current;
    if (t >= 0) {
      let n = e.children[t];
      n && (n.style.color = titleColorsRef.current.active);
    }
    stripOffsetsCacheRef.current = [], positionTitleStrip(stripPositionRef.current, infiniteLoop, true);
  });
  // Positionne la bande de titres sous les cartes. En boucle infinie : copies de la liste décalées (translate3d par span) pour un défilement sans fin.
  let positionTitleStrip = useCallback((e, t, n) => {
    let r = stripTrackRef.current,
      {
        centers: i,
        viewportW: a
      } = stripMetricsRef.current;
    if (!r || i.length === 0) return;
    let o = (e, t) => {
        if (e === highlightedTitleRef.current) return;
        let n = r.children,
          i = highlightedTitleRef.current,
          a = i >= 0 && i < n.length ? n[i] : null,
          o = e >= 0 && e < n.length ? n[e] : null;
        t && (a && (a.style.transition = `none`), o && (o.style.transition = `none`)), a && (a.style.color = titleColorsRef.current.inactive), o && (o.style.color = titleColorsRef.current.active), t && (a?.offsetWidth, o?.offsetWidth, a && (a.style.transition = ``), o && (o.style.transition = ``)), highlightedTitleRef.current = e;
      },
      s;
    if (t && i.length >= 3) {
      if (r.children.length !== i.length) return;
      let itemsPerCopy = projectsRef.current.length;
      if (itemsPerCopy < 1 || i.length % itemsPerCopy !== 0) return;
      let copies = i.length / itemsPerCopy;
      if (copies < 2) return;
      let cycleLen = itemsPerCopy,
        copyWidth = i[cycleLen] - i[0];
      if (!(copyWidth > 0)) return;
      let u = Math.floor(e / cycleLen),
        d = e - u * cycleLen,
        f = Math.floor(d),
        p = d - f,
        m = i[Math.min(f, cycleLen - 1)],
        h = f + 1 >= cycleLen ? i[0] + copyWidth : i[f + 1],
        g = u * copyWidth + m + (h - m) * p,
        _ = u - Math.floor(copies / 2),
        v = Math.round(e),
        y = (v % cycleLen + cycleLen) % cycleLen,
        b = Math.floor(v / cycleLen),
        x = r.children,
        S = stripOffsetsCacheRef.current;
      S.length !== x.length && (S.length = x.length);
      for (let e = 0; e < x.length; e++) {
        let t = Math.floor(e / cycleLen),
          r = e - t * cycleLen,
          u = _ + ((t - _) % copies + copies) % copies,
          d = a / 2 + u * copyWidth + i[r] - g - i[e];
        (S[e] === void 0 || Math.abs(S[e] - d) > .01) && (S[e] = d, x[e].style.transform = `translate3d(${d}px, 0, 0)`), r === y && u === b && o(e, n);
      }
      stripLoopAppliedRef.current = true, r.style.transform = `translate3d(0, 0, 0)`;
    } else {
      {
        stripLoopAppliedRef.current && (Array.from(r.children).forEach(e => {
          e.style.transform = ``;
        }), stripLoopAppliedRef.current = false, stripOffsetsCacheRef.current = []);
        let t = i.length,
          n = Math.min(Math.max(e, 0), t - 1),
          a = Math.floor(n),
          c = Math.min(a + 1, t - 1),
          l = n - a;
        s = i[a] + (i[c] - i[a]) * l, o(Math.round(n));
      }
      r.style.transform = `translate3d(${a / 2 - s}px, 0, 0)`;
    }
  }, []);
  // Mesure la bande (centres des titres, largeur), nombre de copies (impair, 3 à 11) et échelle des flèches max(1, largeur/1920 arrondie au 1/100).
  useEffect(() => {
    if (win === void 0) return;
    let e = stripTrackRef.current,
      n = stripViewportRef.current,
      r = stripBlockRef.current;
    if (!e && !r) return;
    let i = () => {
      if (e && n) {
        let t = Array.from(e.children);
        stripMetricsRef.current = {
          centers: t.map(e => e.offsetLeft + e.offsetWidth / 2),
          viewportW: n.clientWidth
        };
      }
      if (stripBlockHeightRef.current = stripBlockRef.current?.offsetHeight || 0, infiniteLoop && e && n) {
        let t = Math.max(1, projectsRef.current.length),
          r = Math.max(1, Math.round(e.children.length / t)),
          i = e.scrollWidth / r;
        if (i > 1) {
          let e = Math.ceil(n.clientWidth * 2.5 / i) + 1;
          e % 2 == 0 && (e += 1), e = Math.min(Math.max(e, 3), 11), e !== stripCopiesRef.current && (stripCopiesRef.current = e, startTransition(() => setStripCopies(e)));
        }
      }
      let t = Math.max(1, Math.round((n?.clientWidth || r?.clientWidth || 1920) / 1920 * 100) / 100);
      t !== arrowScaleRef.current && (arrowScaleRef.current = t, startTransition(() => setArrowScale(t))), positionTitleStrip(stripPositionRef.current, infiniteLoop, true);
    };
    i();
    let a = document.fonts?.ready;
    a?.then && a.then(() => i());
    let s = new ResizeObserver(i);
    return n && s.observe(n), e && s.observe(e), r && s.observe(r), () => {
      stripBlockHeightRef.current = 0, s.disconnect();
    };
  }, /* Effet WebGL principal : charge three.js (import dynamique) quand le composant approche de la vue (rootMargin 600 px), en requestIdleCallback (timeout 800 ms). */[projectsSignature, titleFontSignature, showTitleStrip, infiniteLoop, positionTitleStrip]), useEffect(() => {
    if (win === void 0 || isStaticRender) return;
    let cancelled = false,
      teardown = null;
    loadThree().catch(() => {});
    let initRenderer = () => {
        if (cancelled) return;
        let root = rootRef.current,
          canvasHost = canvasHostRef.current,
          initialItems = projectsRef.current;
        if (!root || !canvasHost || initialItems.length < 1) return;
        // Contexte : mouvement réduit → pas d'effets ni d'inclinaison ; pointeur fin → MSAA désactivé si effets, DPR max 2 (sinon 2,5).
        let count = initialItems.length,
          canNavigate = count > 1,
          reducedMotion = win.matchMedia?.(`(prefers-reduced-motion: reduce)`)?.matches ?? false,
          finePointer = win.matchMedia?.(`(pointer: fine)`)?.matches ?? true,
          effectsAllowed = !reducedMotion,
          allowMipmaps = finePointer,
          uploadQueue = [],
          requestRender = () => {},
          enqueueUpload = e => {
            uploadQueue.push(e), requestRender();
          },
          renderer;
        // Renderer : alpha, antialias seulement si mouvement réduit, premultipliedAlpha false, depth seulement sans post-traitement.
        try {
          let e = miraLabFlag(`cpdepth`) || !(effectsAllowed && settingsRef.current.edgeWarp);
          miraLabHud()?.mark(`curvy init`), renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: !effectsAllowed,
            premultipliedAlpha: false,
            depth: e,
            stencil: miraLabFlag(`cpdepth`)
          }), miraLabHud() && miraLabInstrumentGL(renderer.getContext());
        } catch (t) {
          console.error(`WebGL unavailable, using static fallback:`, t), cancelled || setStaticFallback(true);
          return;
        }
        // NB : three r136 n'a ni outputColorSpace ni SRGBColorSpace → ces affectations sont sans effet (sortie linéaire, aucune conversion).
        renderer.setPixelRatio(Math.min(win.devicePixelRatio || 1, finePointer ? 2 : 2.5)), renderer.outputColorSpace = THREE.SRGBColorSpace, backgroundTransparent ? renderer.setClearColor(0, 0) : renderer.setClearColor(new THREE.Color(backgroundColor), 1), canvasHost.innerHTML = ``, renderer.domElement.style.width = `100%`, renderer.domElement.style.height = `100%`, renderer.domElement.style.display = `block`, canvasHost.appendChild(renderer.domElement), rendererRef.current = renderer;
        // Scène : caméra perspective fov 48°, near 0,1, far 1200, en z = 7.
        let scene = new THREE.Scene(),
          camera = new THREE.PerspectiveCamera(48, 1, .1, 1200);
        camera.position.set(0, 0, 7);
        // Passe plein écran optionnelle (bords + souris) : rendu de la scène dans une cible RGBA, puis quad avec POST_FRAGMENT_SHADER.
        let postResolution = new THREE.Vector2(1, 1),
          drawingBufferSize = new THREE.Vector2(1, 1),
          postTarget = null,
          postScene = null,
          postCamera = null,
          postGeometry = null,
          postMaterial = null,
          postMesh = null,
          ensurePostPass = () => {
            effectsAllowed && !postTarget && (postTarget = new THREE.WebGLRenderTarget(1, 1, {
              depthBuffer: true,
              stencilBuffer: false,
              generateMipmaps: false,
              minFilter: THREE.LinearFilter,
              magFilter: THREE.LinearFilter,
              format: THREE.RGBAFormat
            }), postScene = new THREE.Scene(), postCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1), postGeometry = new THREE.PlaneGeometry(2, 2), postMaterial = new THREE.ShaderMaterial({
              uniforms: {
                tDiffuse: {
                  value: postTarget.texture
                },
                uMouse: {
                  value: new THREE.Vector2(.5, .5)
                },
                uResolution: {
                  value: postResolution
                },
                uTime: {
                  value: 0
                },
                uMouseEnabled: {
                  value: 0
                },
                uMouseStrength: {
                  value: 1
                },
                uMouseEffect: {
                  value: 0
                },
                uMouseRadius: {
                  value: .1
                },
                uMouseChroma: {
                  value: 0
                },
                uMouseVel: {
                  value: 1
                },
                uEdgeEnabled: {
                  value: 0
                },
                uEdgeStrength: {
                  value: 1
                },
                uEdgeEffect: {
                  value: 0
                },
                uEdgeBand: {
                  value: .2
                },
                uEdgeHalfY: {
                  value: .2
                },
                uCenterY: {
                  value: .5
                }
              },
              vertexShader: POST_VERTEX_SHADER,
              fragmentShader: (miraLabFlag(`cpfbm`) ? `` : `#define EDGE_GUARD
`) + POST_FRAGMENT_SHADER,
              depthTest: false,
              depthWrite: false,
              transparent: true
            }), postMesh = new THREE.Mesh(postGeometry, postMaterial), postScene.add(postMesh), renderer.getDrawingBufferSize(drawingBufferSize), postTarget.setSize(Math.max(1, drawingBufferSize.x), Math.max(1, drawingBufferSize.y)), postResolution.set(drawingBufferSize.x, drawingBufferSize.y));
          };
        effectsAllowed && (settingsRef.current.edgeWarp || settingsRef.current.mouseWarp && finePointer) && ensurePostPass();
        let cardGroup = new THREE.Group();
        scene.add(cardGroup);
        let textureLoader = new THREE.TextureLoader();
        textureLoader.setCrossOrigin(`anonymous`);
        // Cartes : un maillage par projet (PlaneGeometry 1×1, 24×1 segments) + état de texture / vidéo / fondu.
        let cards = [],
          bitmapOptions = {
            imageOrientation: `flipY`,
            premultiplyAlpha: `none`
          },
          releaseBitmapsAfterUpload = !miraLabFlag(`cpbitmap`),
          releaseUploadedBitmap = e => {
            let t = e && e.image;
            if (releaseBitmapsAfterUpload && typeof ImageBitmap < `u` && t instanceof ImageBitmap && e.userData.curvyBlob) {
              e.userData.curvyReleased = {
                w: t.width,
                h: t.height
              };
              try {
                t.close();
              } catch {}
            }
          },
          reuploadReleasedBitmaps = () => {
            let e = [],
              t = /* @__PURE__ */new Set();
            for (let n of cards) {
              let r = n.material && n.material.uniforms;
              for (let n of [`uTexture`, `uTexturePrev`]) {
                let i = r && r[n] && r[n].value;
                i && !t.has(i) && i.userData.curvyReleased && (t.add(i), e.push(createImageBitmap(i.userData.curvyBlob, bitmapOptions).then(e => {
                  disposed ? e.close() : (i.image = e, i.userData.curvyReleased = null, i.needsUpdate = true, renderer.initTexture(i), releaseUploadedBitmap(i));
                }).catch(() => {})));
              }
            }
            return Promise.all(e).then(() => {});
          },
          // Signature de scène : si rien n'a changé depuis l'image précédente, la scène n'est pas re-rendue dans la cible (seule la passe post l'est).
          lastSceneSignature = ``,
          skipUnchangedScene = !miraLabFlag(`cpscene`) && typeof HTMLVideoElement < `u` && `requestVideoFrameCallback` in HTMLVideoElement.prototype,
          sigOf = e => e == null ? `_` : typeof e == `number` || typeof e == `boolean` ? String(e) : e.isTexture ? e.uuid + `@` + e.version : e.isColor ? e.r + `,` + e.g + `,` + e.b : e.isVector2 ? e.x + `,` + e.y : e.isVector3 ? e.x + `,` + e.y + `,` + e.z : e.isVector4 || e.isQuaternion ? e.x + `,` + e.y + `,` + e.z + `,` + e.w : e.isMatrix3 || e.isMatrix4 ? e.elements.join(`,`) : `?` + Math.random(),
          tmpClearColor = new THREE.Color(),
          sceneSignature = () => {
            if (!postTarget) return ``;
            renderer.getClearColor(tmpClearColor);
            let e = postTarget.width + `x` + postTarget.height + `:` + postTarget.texture.uuid + `|` + sigOf(tmpClearColor) + `,` + renderer.getClearAlpha() + `|` + camera.projectionMatrix.elements.join(`,`) + sigOf(camera.position) + sigOf(camera.quaternion);
            return scene.traverse(t => {
              e += `|` + t.visible + sigOf(t.position) + sigOf(t.quaternion) + sigOf(t.scale) + t.renderOrder;
              let n = t.material;
              if (!n) return;
              if (Array.isArray(n)) {
                e += `?` + Math.random();
                return;
              }
              e += `:` + n.uuid + `@` + n.version + n.visible;
              let r = n.uniforms;
              if (r) for (let t in r) e += `;` + sigOf(r[t].value);else e += `;` + sigOf(n.map) + sigOf(n.color) + n.opacity;
            }), e;
          },
          // Entrées : souris (uv 0..1, lissée à 0,12/image), vitesse souris, dimensions vue (px / monde), états de glisser / survol.
          raycaster = new THREE.Raycaster(),
          ndcPointer = new THREE.Vector2(),
          mouseTarget = new THREE.Vector2(.5, .5),
          mouseSmoothed = new THREE.Vector2(.5, .5),
          mousePrevious = new THREE.Vector2(.5, .5),
          mouseSpeed = 0,
          viewWidthPx = 1,
          viewHeightPx = 1,
          worldPerPx = .01,
          viewHeightWorld = 1,
          viewWidthWorld = 1,
          inView = true,
          dragging = false,
          hovering = false,
          dragMoved = false,
          lastPointerX = 0,
          dragVelocity = 0,
          lastInteractionAt = 0,
          lastDragMoveAt = 0,
          lastAutoplayAt = performance.now(),
          detachedLinkEl = null,
          detachedHref = null,
          hrefRestoreTimer = 0,
          pointerCaptured = false,
          // Pendant un glisser sur une carte-lien, son href est retiré puis remis (évite la navigation au relâchement).
          restoreDetachedHref = e => {
            let n = () => {
              detachedLinkEl && detachedHref !== null && !detachedLinkEl.hasAttribute(`href`) && detachedLinkEl.setAttribute(`href`, detachedHref), detachedLinkEl = null, detachedHref = null, hrefRestoreTimer = 0;
            };
            hrefRestoreTimer &&= (win.clearTimeout(hrefRestoreTimer), 0), e ? hrefRestoreTimer = win.setTimeout(n, 0) : n();
          },
          detachLinkUnderPointer = e => {
            if (restoreDetachedHref(false), settingsRef.current.clickAction !== `link`) return;
            let t = slotHostRef.current,
              n = (e instanceof Element ? e : null)?.closest(`a[href]`);
            if (!t || !n || !t.contains(n)) return;
            let r = n.getAttribute(`href`);
            r && (detachedLinkEl = n, detachedHref = r, n.dataset.curvyManaged = `1`, n.removeAttribute(`href`));
          },
          // Position mémorisée : sessionStorage["curvyPos:" + pathname + ":" + nombre de projets] = index de la carte centrale.
          // Écrite au démontage (si une image a été dessinée), relue ici ; effacée au chargement du module sauf navigation back/forward.
          positionStorageKey = `curvyPos:` + win.location.pathname + `:` + count,
          restoredIndex = 0;
        try {
          let e = win.sessionStorage?.getItem(positionStorageKey);
          if (e != null) {
            let t = parseInt(e, 10);
            Number.isFinite(t) && t >= 0 && t < count && (restoredIndex = t);
          }
        } catch {}
        // Défilement : target (cible, en index de carte) et current (valeur lissée par lerp).
        let scroll = {
            target: restoredIndex,
            current: restoredIndex
          },
          hasDrawnVisible = false,
          hoverCapable = typeof win.matchMedia == `function` && win.matchMedia(`(hover: hover) and (pointer: fine)`).matches,
          rafId = 0,
          loopRunning = false,
          disposed = false,
          // Lecture vidéo bloquée (NotAllowedError) : relance au premier geste (pointerup, touchend, keydown, click).
          retryBlockedPlayback = !miraLabFlag(`cpplay`),
          gestureEvents = [`pointerup`, `touchend`, `keydown`, `click`],
          gestureListening = false,
          stopGestureListening = () => {
            gestureListening = false;
            for (let e of gestureEvents) document.removeEventListener(e, resumeBlockedVideos, true);
          },
          onPlayRejected = (e, t) => {
            if (e.videoPlaying = false, retryBlockedPlayback && t && t.name === `NotAllowedError` && (e.playBlocked = true, !gestureListening && !disposed)) {
              gestureListening = true;
              for (let e of gestureEvents) document.addEventListener(e, resumeBlockedVideos, {
                capture: true,
                passive: true
              });
            }
          };
        function resumeBlockedVideos() {
          if (stopGestureListening(), !disposed) {
            for (let e of cards) e.playBlocked && (e.playBlocked = false, e.video && e.videoWantsPlay && !e.videoPlaying && (e.videoPlaying = true, e.video.play().catch(t => onPlayRejected(e, t))));
            requestRender();
          }
        }
        // Autoplay : réveille la boucle après max(1,5 ; interval) s si la page est au repos.
        let idle = false,
          autoplayTimer = 0,
          clearAutoplayTimer = () => {
            autoplayTimer &&= (win.clearTimeout(autoplayTimer), 0);
          },
          scheduleAutoplayWake = () => {
            clearAutoplayTimer();
            let e = settingsRef.current;
            if (disposed || !inView || document.hidden || !e.autoplay || !canNavigate || reducedMotion || dragging || hovering) return;
            let n = Math.max(1.5, e.autoplayInterval) * 1e3,
              r = Math.max(lastInteractionAt, lastAutoplayAt) + n,
              i = Math.max(16, r - performance.now() + 4);
            autoplayTimer = win.setTimeout(() => {
              autoplayTimer = 0, requestRender();
            }, i);
          },
          // Index modulo le nombre de cartes ; rubberBand : hors limites ×0,35 (sans boucle).
          wrapIndex = e => (Math.round(e) % count + count) % count,
          rubberBand = e => {
            if (infiniteLoop || !canNavigate) return canNavigate ? e : 0;
            let t = count - 1;
            return e < 0 ? e * .35 : e > t ? t + (e - t) * .35 : e;
          },
          findCardLink = e => {
            let t = e.item;
            if (t.domIndex < 0) return null;
            let n = slotHostRef.current;
            if (!n) return null;
            let r = unwrapListRoot(n).children[t.domIndex];
            if (!r) return null;
            let i = r.matches(`a[href]`) ? r : null,
              a = r.querySelector(`a[href]`),
              o = r.closest(`a[href]`);
            return i || a || o;
          },
          openCard = e => {
            let n = findCardLink(e),
              r = n?.href || e.item.href;
            r && (n ? (pointerStateRef.current.moved = false, n.click()) : win.location.assign(r));
          },
          goTo = e => {
            let t = e;
            if (infiniteLoop) {
              let n = Math.round(scroll.target),
                r = ((e - wrapIndex(n)) % count + count) % count;
              r > count / 2 && (r -= count), t = n + r;
            } else t = Math.min(Math.max(e, 0), count - 1);
            scroll.target = t, lastInteractionAt = performance.now(), idle = false, requestRender();
          },
          stepBy = e => {
            scroll.target = rubberBand(Math.round(scroll.target) + e), lastInteractionAt = performance.now(), idle = false, requestRender();
          };
        // API impérative utilisée par les flèches, la bande de titres et le clavier.
        controllerRef.current = {
          goTo: goTo,
          prev: () => stepBy(-1),
          next: () => stepBy(1),
          goToStrip: e => {
            if (!infiniteLoop) {
              goTo(e);
              return;
            }
            let t = stripViewportRef.current && stripTrackRef.current ? stripTrackRef.current.children.length : 0;
            if (t < count * 2 || t % count !== 0) {
              goTo(e % count);
              return;
            }
            let n = t / count,
              r = Math.floor(e / count),
              i = e - r * count,
              a = Math.floor(scroll.current / count) - Math.floor(n / 2),
              o = a + ((r - a) % n + n) % n;
            scroll.target = o * count + i, lastInteractionAt = performance.now(), idle = false, requestRender();
          },
          openCenter: () => {
            if (settingsRef.current.clickAction !== `link`) return;
            let e = cards[wrapIndex(scroll.current)];
            e?.item.href && openCard(e);
          }
        };
        // Mise en page (unités monde) : largeur centrale = centerWidthPct % de la vue (bornée 10–95 %), hauteur = largeur / cardAspect
        // (≤ 90 % de la hauteur restante sous la bande), cartes latérales × sideScale, espacement = vue/2 + largeur latérale/2 − peek.
        let computeLayout = () => {
            let cfg = settingsRef.current,
              aspectRatio = Math.max(.2, cfg.cardAspect),
              bottomReserve = Math.min((stripBlockHeightRef.current + 16 + (detailsMaxHeightRef.current > 0 ? detailsMaxHeightRef.current + settingsRef.current.metaGap : 0)) * worldPerPx, viewHeightWorld * .5),
              usableHeight = Math.max(1e-4, viewHeightWorld - bottomReserve),
              yShift = bottomReserve / 2,
              centerYUvValue = .5 + yShift / Math.max(1e-4, viewHeightWorld),
              centerW = viewWidthWorld * Math.min(Math.max(cfg.centerWidthPct / 100, .1), .95),
              centerH = centerW / aspectRatio,
              maxCenterH = usableHeight * .9;
            centerH > maxCenterH && (centerH = maxCenterH, centerW = centerH * aspectRatio);
            let sideScaleClamped = Math.min(Math.max(cfg.sideScale, .3), 1),
              sideW = centerW * sideScaleClamped,
              peekWorld = viewWidthWorld * Math.min(Math.max(cfg.sidePeekPct / 100, 0), .25),
              spacing = viewWidthWorld / 2 + sideW / 2 - peekWorld;
            spacing = Math.max(spacing, centerW * .55);
            let peekFrac = peekWorld / Math.max(1e-4, viewWidthWorld),
              edgeBandValue = Math.min(Math.max(peekFrac * 1.6 + .02, .06), .45),
              sideHalfHeightUv = centerH * sideScaleClamped / Math.max(1e-4, viewHeightWorld) / 2,
              edgeHalfYValue = Math.min(Math.max(sideHalfHeightUv * 1.25, .08), .5);
            return {
              Wc: centerW,
              Hc: centerH,
              d: spacing,
              sideScaleValue: sideScaleClamped,
              aspect: aspectRatio,
              edgeBand: edgeBandValue,
              edgeHalfY: edgeHalfYValue,
              yOffset: yShift,
              centerYUv: centerYUvValue
            };
          },
          // Sonde 4×4 px : vérifie qu'une texture vidéo n'est pas noire avant de remplacer le poster.
          probe = null,
          ensureProbe = () => {
            if (probe) return probe;
            let e = new THREE.WebGLRenderTarget(4, 4),
              t = new THREE.Scene(),
              n = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1),
              r = new THREE.DataTexture(new Uint8Array([255, 255, 255, 255]), 1, 1);
            r.needsUpdate = true;
            let i = new THREE.MeshBasicMaterial({
                map: r
              }),
              a = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), i);
            return t.add(a), probe = {
              target: e,
              scene: t,
              camera: n,
              material: i,
              buffer: /* @__PURE__ */new Uint8Array(64)
            }, probe;
          },
          textureHasContent = e => {
            try {
              ensureProbe(), probe.material.map = e, renderer.setRenderTarget(probe.target), renderer.clear(), renderer.render(probe.scene, probe.camera), renderer.setRenderTarget(null), renderer.readRenderTargetPixels(probe.target, 0, 0, 4, 4, probe.buffer);
              let t = probe.buffer;
              for (let e = 0; e < t.length; e += 4) if (t[e] > 8 || t[e + 1] > 8 || t[e + 2] > 8) return true;
              return false;
            } catch {
              try {
                renderer.setRenderTarget(null);
              } catch {}
              return true;
            }
          },
          settleSwap = (e, t) => {
            let n = e.swap;
            if (n.phase !== `settled`) {
              if (n.prev !== t) try {
                n.prev.dispose();
              } catch {}
              e.swap = {
                phase: `settled`
              };
            }
          },
          finishSwap = e => {
            settleSwap(e, e.texture || void 0), e.material.uniforms.uSwap.value = 1, e.material.uniforms.uTexturePrev.value = e.texture;
          },
          // Attache une texture à une carte : fondu de présence (450 ms) ou fondu enchaîné entre ancienne et nouvelle texture (350 ms).
          attachTexture = (e, t, n, r, i = `dissolve`) => {
            let a = e.material.uniforms,
              o = e.texture,
              s = n / Math.max(1, r),
              c = !!(o && o !== t);
            settleSwap(e, t), i === `cut` || !c ? c ? (e.swap = {
              phase: `cut-pending`,
              frames: 0,
              prev: o
            }, a.uTexturePrev.value = o, a.uPrevAspect.value = a.uImageAspect.value, a.uSwap.value = 0) : (a.uSwap.value = 1, a.uTexturePrev.value = t, i === `cut` ? (e.presence = {
              phase: `shown`
            }, a.uHasTexture.value = 1) : e.presence = {
              phase: `fading-in`,
              startedAt: performance.now()
            }) : (e.swap = {
              phase: `dissolving`,
              startedAt: performance.now(),
              prev: o
            }, a.uTexturePrev.value = o, a.uPrevAspect.value = a.uImageAspect.value, a.uSwap.value = 0), e.texture = t, a.uTexture.value = t, a.uImageAspect.value = s;
          },
          // Charge le média d'une carte : vidéo (poster d'abord, puis texture vidéo quand une image stable est décodée) ou couverture.
          loadCardMedia = (e, n) => {
            let i = e.item;
            if (i.videoUrl) {
              let parkedVideo = parkedVideos.get(i.videoUrl);
              parkedVideo && parkedVideos.delete(i.videoUrl);
              let reusedReady = !!(parkedVideo && parkedVideo.readyState >= 2);
              e.warmReclaim = reusedReady;
              let hasCover = !!i.coverUrl;
              hasCover && loadCover(e, n);
              let video = parkedVideo || document.createElement(`video`);
              video.crossOrigin = `anonymous`, video.muted = true, video.loop = true, video.playsInline = true, video.preload = `metadata`;
              let needsSource = !video.getAttribute(`src`),
                webmBlobMode = needsSource && needsWebmBlobPlayback(i.videoUrl);
              if (webmBlobMode && (video.loop = false), needsSource && !webmBlobMode && (video.src = i.videoUrl), e.videoSourceReady = !needsSource || !webmBlobMode, Object.assign(video.style, {
                position: `absolute`,
                left: `0px`,
                bottom: `0px`,
                width: `2px`,
                height: `2px`,
                opacity: `0.01`,
                pointerEvents: `none`,
                zIndex: `-1`
              }), !video.isConnected) try {
                root.appendChild(video);
              } catch {}
              e.video = video;
              let videoAbort = new AbortController();
              e.videoAbort = videoAbort;
              let abortSignal = videoAbort.signal;
              if (e.safariWebMPlayback = webmBlobMode, webmBlobMode) {
                let n = () => {
                  if (disposed || abortSignal.aborted || !e.videoPlaying || e.videoRestarting) return;
                  e.videoRestarting = true;
                  let n = (e.videoRestartGeneration || 0) + 1;
                  e.videoRestartGeneration = n;
                  let r = false,
                    i,
                    a = () => {
                      video.removeEventListener(`loadeddata`, o), video.removeEventListener(`canplay`, o), i !== void 0 && win.clearTimeout(i);
                    },
                    o = () => {
                      if (r) return;
                      if (r = true, a(), disposed || abortSignal.aborted || e.videoRestartGeneration !== n || !e.videoPlaying) {
                        e.videoRestarting = false;
                        return;
                      }
                      let t = video.play();
                      t && t.then ? t.then(() => {
                        e.videoRestarting = false;
                      }).catch(() => {
                        e.videoRestarting = false;
                      }) : e.videoRestarting = false;
                    };
                  try {
                    video.pause(), e.videoBlobUrl ? (video.addEventListener(`loadeddata`, o), video.addEventListener(`canplay`, o), video.load(), video.readyState >= 2 && win.requestAnimationFrame(o), i = win.setTimeout(o, 600)) : (video.currentTime = 0, win.requestAnimationFrame(o));
                  } catch {
                    o();
                  }
                };
                e.restartSafariWebM = n, video.addEventListener(`ended`, n, {
                  signal: abortSignal
                });
              }
              let blobLoad = null,
                ensureVideoSource = () => {
                  if (e.videoSourceReady || video.getAttribute(`src`)) return e.videoSourceReady = true, Promise.resolve();
                  if (!webmBlobMode) {
                    video.src = i.videoUrl, e.videoSourceReady = true;
                    try {
                      video.load();
                    } catch {}
                    return Promise.resolve();
                  }
                  return blobLoad || (blobLoad = (async () => {
                    try {
                      let t = await fetch(i.videoUrl, {
                        mode: `cors`,
                        credentials: `omit`,
                        signal: abortSignal
                      });
                      if (!t.ok) throw Error(`HTTP ${t.status} ${t.statusText}`);
                      let n = await t.blob();
                      if (disposed || abortSignal.aborted) return;
                      let r = URL.createObjectURL(n);
                      e.videoBlobUrl = r, video.src = r, e.videoSourceReady = true, video.load();
                    } catch (t) {
                      if (disposed || abortSignal.aborted) return;
                      console.warn(`CurvyProjectShowcase: WebM Blob fetch failed; falling back to direct URL.`, t), video.src = i.videoUrl, e.videoSourceReady = true;
                      try {
                        video.load();
                      } catch {}
                    }
                  })(), blobLoad);
                };
              webmBlobMode && (e.ensureVideoSource = ensureVideoSource);
              let slotReleased = false,
                releaseLoadSlot = () => {
                  slotReleased || (slotReleased = true, hasCover || n());
                },
                attachVideoTexture = () => {
                  if (disposed || e.videoTextureAttached) return;
                  e.videoTextureAttached = true;
                  let t = e.preparedVideoTexture || createVideoFrameTexture(THREE, video, `cpvtex`);
                  e.preparedVideoTexture = null, t.colorSpace = THREE.SRGBColorSpace, t.generateMipmaps = false, t.minFilter = THREE.LinearFilter, t.magFilter = THREE.LinearFilter, attachTexture(e, t, video.videoWidth || 16, video.videoHeight || 9, `dissolve`);
                },
                prepareVideoTexture = () => {
                  disposed || e.videoTextureAttached || e.preparedVideoTexture || !video.videoWidth || enqueueUpload({
                    entry: e,
                    texture: null,
                    w: 0,
                    h: 0,
                    full: false,
                    prepareVideo: true
                  });
                },
                probeCanvas = document.createElement(`canvas`);
              probeCanvas.width = 2, probeCanvas.height = 2;
              let probeCtx = probeCanvas.getContext(`2d`, {
                  willReadFrequently: true
                }),
                videoFrameHasContent = () => {
                  if (!finePointer && e.item.coverUrl || !probeCtx) return true;
                  try {
                    probeCtx.drawImage(video, 0, 0, 2, 2);
                    let e = probeCtx.getImageData(0, 0, 2, 2).data;
                    for (let t = 0; t < e.length; t += 4) if (e[t] > 8 || e[t + 1] > 8 || e[t + 2] > 8) return true;
                    return false;
                  } catch {
                    return true;
                  }
                },
                waitForStableFrame = () => {
                  if (disposed || e.videoTextureAttached) return;
                  let n = video;
                  if (typeof n.requestVideoFrameCallback == `function`) {
                    let r = 0,
                      i = () => {
                        if (disposed || e.videoTextureAttached) return;
                        if (video.paused) {
                          n.requestVideoFrameCallback(i);
                          return;
                        }
                        r++;
                        let a = 0;
                        try {
                          let e = video.buffered,
                            t = video.currentTime;
                          for (let n = 0; n < e.length; n++) if (e.start(n) <= t && t <= e.end(n)) {
                            a = e.end(n) - t;
                            break;
                          }
                        } catch {}
                        let o = video.readyState >= 4 || a > 2.5 || video.duration > 0 && Number.isFinite(video.duration) && a > video.duration - video.currentTime - .05;
                        if ((miraLabFlag(`cpread`) ? videoFrameHasContent() && o : o && videoFrameHasContent()) || r >= 15 && o || r >= 90) {
                          if (video.currentTime > .15) {
                            let r = win.setTimeout(() => {
                                video.removeEventListener(`seeked`, i), !disposed && !e.videoTextureAttached && attachVideoTexture();
                              }, 1500),
                              i = () => {
                                win.clearTimeout(r), video.removeEventListener(`seeked`, i), !(disposed || e.videoTextureAttached) && n.requestVideoFrameCallback(() => {
                                  !disposed && !e.videoTextureAttached && attachVideoTexture();
                                });
                              };
                            video.addEventListener(`seeked`, i);
                            try {
                              video.currentTime = 0;
                            } catch {
                              video.removeEventListener(`seeked`, i), attachVideoTexture();
                            }
                          } else attachVideoTexture();
                        } else n.requestVideoFrameCallback(i);
                      };
                    n.requestVideoFrameCallback(i);
                  } else {
                    let e = () => win.requestAnimationFrame(() => attachVideoTexture());
                    !video.paused && video.currentTime > 0 ? e() : video.addEventListener(`playing`, e, {
                      once: true,
                      signal: abortSignal
                    });
                  }
                };
              video.addEventListener(`loadeddata`, () => {
                releaseLoadSlot(), !disposed && (prepareVideoTexture(), waitForStableFrame());
              }, {
                once: true,
                signal: abortSignal
              }), video.addEventListener(`loadedmetadata`, releaseLoadSlot, {
                once: true,
                signal: abortSignal
              }), video.addEventListener(`error`, releaseLoadSlot, {
                once: true,
                signal: abortSignal
              }), needsSource && !webmBlobMode && video.load(), needsSource && webmBlobMode && !hasCover && ensureVideoSource(), reusedReady && (releaseLoadSlot(), disposed || (prepareVideoTexture(), waitForStableFrame()));
            } else i.coverUrl ? loadCover(e, n) : n();
          },
          // Couverture : mipmaps + LinearMipmapLinear + anisotropie ≤ 4 si pointeur fin et pas de vidéo ; sinon Linear sans mipmaps.
          configureCoverTexture = (e, t = false) => {
            e.colorSpace = THREE.SRGBColorSpace, allowMipmaps && !t ? (e.generateMipmaps = true, e.minFilter = THREE.LinearMipmapLinearFilter, e.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy())) : (e.generateMipmaps = false, e.minFilter = THREE.LinearFilter), e.magFilter = THREE.LinearFilter;
          },
          // Mini-couverture (plus petite variante srcset) affichée en attendant la pleine résolution.
          loadTinyCover = e => {
            let t = e.item.coverTinyUrl;
            if (!t || typeof createImageBitmap != `function`) return;
            let n = null,
              r = () => fetch(t, {
                mode: `cors`
              }).then(e => {
                if (!e.ok) throw Error(`tiny fetch failed`);
                return e.blob();
              }).then(e => (n = e, createImageBitmap(e, bitmapOptions))).then(t => {
                if (disposed || e.fullResAttached || e.videoTextureAttached || e.texture) {
                  try {
                    t.close?.();
                  } catch {}
                  return;
                }
                let r = new THREE.Texture(t);
                r.userData.curvyBlob = n, r.needsUpdate = true, r.flipY = false, r.colorSpace = THREE.SRGBColorSpace, r.generateMipmaps = false, r.minFilter = THREE.LinearFilter, r.magFilter = THREE.LinearFilter;
                let i = e.item.coverAspect;
                enqueueUpload({
                  entry: e,
                  texture: r,
                  w: i > 0 ? Math.round(i * 2048) : t.width || 1,
                  h: i > 0 ? 2048 : t.height || 1,
                  full: false
                });
              }).catch(() => {});
            supportsBitmapFlipY().then(e => {
              e && !disposed && r();
            });
          },
          // Couverture pleine résolution : fetch + createImageBitmap(flipY) si supporté, sinon TextureLoader.
          loadCover = (e, t) => {
            let n = e.item;
            loadTinyCover(e);
            let r = () => {
                textureLoader.load(n.coverUrl, n => {
                  t?.(), disposed ? n.dispose() : (configureCoverTexture(n, !!e.item.videoUrl), enqueueUpload({
                    entry: e,
                    texture: n,
                    w: n.image?.width || 1,
                    h: n.image?.height || 1,
                    full: true
                  }));
                }, void 0, () => t?.());
              },
              i = null,
              a = () => fetch(n.coverUrl, {
                mode: `cors`
              }).then(e => {
                if (!e.ok) throw Error(`fetch failed`);
                return e.blob();
              }).then(e => (i = e, createImageBitmap(e, bitmapOptions))).then(n => {
                if (t?.(), disposed) {
                  try {
                    n.close?.();
                  } catch {}
                  return;
                }
                let r = new THREE.Texture(n);
                r.userData.curvyBlob = i, r.needsUpdate = true, r.flipY = false, configureCoverTexture(r, !!e.item.videoUrl), enqueueUpload({
                  entry: e,
                  texture: r,
                  w: n.width || 1,
                  h: n.height || 1,
                  full: true
                });
              }).catch(() => {
                disposed || r();
              });
            typeof createImageBitmap == `function` ? supportsBitmapFlipY().then(e => {
              disposed || (e ? a() : r());
            }) : r();
          };
        // Démontage avant le premier rAF : mémorise la position et libère le renderer.
        teardown = () => {
          disposed = true, clearAutoplayTimer(), stopGestureListening();
          try {
            hasDrawnVisible && win.sessionStorage?.setItem(positionStorageKey, String(wrapIndex(Math.round(scroll.current))));
          } catch {}
          renderer.domElement.parentElement === canvasHost && canvasHost.removeChild(renderer.domElement), scheduleGpuDisposal(() => {
            try {
              renderer.dispose(), renderer.forceContextLoss();
            } catch {}
          });
        }, /* Construction différée d'une image : maillages, chargements, boucle, écouteurs. */requestAnimationFrame(() => {
          if (cancelled || disposed) return;
          initialItems.forEach(e => {
            let t = new THREE.PlaneGeometry(1, 1, 24, 1),
              n = new THREE.ShaderMaterial({
                transparent: true,
                vertexShader: CARD_VERTEX_SHADER,
                fragmentShader: CARD_FRAGMENT_SHADER,
                uniforms: {
                  uTexture: {
                    value: null
                  },
                  uTexturePrev: {
                    value: null
                  },
                  uImageAspect: {
                    value: 1
                  },
                  uPrevAspect: {
                    value: 1
                  },
                  uSwap: {
                    value: 1
                  },
                  uPlaneAspect: {
                    value: 1.6
                  },
                  uHasTexture: {
                    value: 0
                  },
                  uScrollVelocity: {
                    value: 0
                  },
                  uBendIntensity: {
                    value: 0
                  },
                  uRadius: {
                    value: 0
                  }
                }
              }),
              r = new THREE.Mesh(t, n);
            cardGroup.add(r), cards.push({
              mesh: r,
              material: n,
              texture: null,
              video: null,
              videoPlaying: false,
              presence: {
                phase: `hidden`
              },
              swap: {
                phase: `settled`
              },
              item: e
            });
          }), detailsLayoutCacheRef.current = [];
          // Chargements : 4 en parallèle (pointeur fin) ou 2, en commençant par les cartes les plus proches de l'index 0 (plafond 4 s par carte).
          let maxConcurrentLoads = finePointer ? 4 : 2,
            loadOrder = cards.map((e, t) => t).sort((e, t) => Math.min(e, count - e) - Math.min(t, count - t) || e - t),
            loadsInFlight = 0,
            pumpLoads = () => {
              for (; loadsInFlight < maxConcurrentLoads && loadOrder.length > 0 && !disposed;) {
                let e = loadOrder.shift();
                loadsInFlight++;
                let n = false,
                  r = 0,
                  i = () => {
                    n || (n = true, win.clearTimeout(r), loadsInFlight--, pumpLoads());
                  };
                r = win.setTimeout(i, TIMING.loadSlotCapMs), loadCardMedia(cards[e], i);
              }
            };
          pumpLoads();
          // Redimensionnement : budget de pixels 8,5 M (pointeur fin) / 3,5 M ; DPR = min(devicePixelRatio, 2 ou 2,5, max(0,75, √(budget/surface))) ;
          // DPR plafonné à 1 pendant les 650 premières ms. Hauteur visible du monde = 2·tan(fov/2)·7.
          let dprWarm = false,
            dprWarmTimer = 0,
            resize = () => {
              if (viewWidthPx = Math.max(1, root.clientWidth), viewHeightPx = Math.max(1, root.clientHeight), viewWidthPx <= 0 || viewHeightPx <= 0) return;
              idle = false, requestRender();
              let e = finePointer ? 85e5 : 35e5,
                n = finePointer ? 2 : 2.5,
                i = Math.sqrt(e / (viewWidthPx * viewHeightPx)),
                a = Math.min(win.devicePixelRatio || 1, n, Math.max(.75, i));
              renderer.setPixelRatio(dprWarm ? a : Math.min(a, 1)), renderer.setSize(viewWidthPx, viewHeightPx, false), renderer.domElement.style.width = `100%`, renderer.domElement.style.height = `100%`, camera.aspect = viewWidthPx / viewHeightPx, camera.updateProjectionMatrix(), renderer.getDrawingBufferSize(drawingBufferSize), postTarget && postTarget.setSize(drawingBufferSize.x, drawingBufferSize.y), postResolution.set(drawingBufferSize.x, drawingBufferSize.y);
              let o = camera.fov * Math.PI / 180;
              viewHeightWorld = 2 * Math.tan(o / 2) * camera.position.z, worldPerPx = viewHeightWorld / viewHeightPx, viewWidthWorld = viewHeightWorld * camera.aspect;
            };
          resize();
          let frameCount = 0,
            movingOrTranslucent = false,
            lastRectX = NaN,
            lastRectY = NaN,
            posterLayoutCache = [],
            // Boucle de rendu (une image).
            renderFrame = frameTime => {
              if (!hasDrawnVisible && root.offsetWidth > 0 && (hasDrawnVisible = true), frameCount++, frameCount === 1 && miraLabHud()?.mark(`first draw`), frameCount % 12 == 0) {
                let e = root.getBoundingClientRect(),
                  t = Math.abs(e.x - lastRectX) > .5 || Math.abs(e.y - lastRectY) > .5;
                lastRectX = e.x, lastRectY = e.y, movingOrTranslucent = t || hasTranslucentAncestor(root);
              }
              if (movingOrTranslucent && (frameCount & 1) == 1) {
                rafId = win.requestAnimationFrame(renderFrame);
                return;
              }
              if (disposed || !loopRunning) return;
              let cur = settingsRef.current;
              if (uploadQueue.length > 0) {
                let e = uploadQueue.shift();
                if (e.prepareVideo) {
                  let t = e.entry,
                    n = t.video;
                  if (!disposed && n && n.videoWidth > 0 && !t.videoTextureAttached && !t.preparedVideoTexture) {
                    let e = createVideoFrameTexture(THREE, n, `cpvtex`);
                    e.colorSpace = THREE.SRGBColorSpace, e.generateMipmaps = false, e.minFilter = THREE.LinearFilter, e.magFilter = THREE.LinearFilter, renderer.initTexture(e), t.preparedVideoTexture = e;
                  }
                } else e.texture && (disposed || e.entry.videoTextureAttached || !e.full && e.entry.fullResAttached ? e.texture.dispose() : (renderer.initTexture(e.texture), releaseUploadedBitmap(e.texture), attachTexture(e.entry, e.texture, e.w, e.h), e.full && (e.entry.fullResAttached = true)));
              }
              // Mise à jour : autoplay, aimantation sur l'index entier (×0,1/image après 120 ms sans entrée), ressort aux bornes (×0,08), lerp,
              // vitesse de défilement → courbure, puis positionnement de chaque carte.
              if (inView && viewWidthPx > 0 && viewHeightPx > 0) {
                let {
                    Wc: Wc,
                    Hc: Hc,
                    d: cardSpacing,
                    sideScaleValue: sideScaleValue,
                    aspect: planeAspect,
                    edgeBand: edgeBand,
                    edgeHalfY: edgeHalfY,
                    yOffset: yOffset,
                    centerYUv: centerYUv
                  } = computeLayout(),
                  now = performance.now(),
                  shouldSnap = !dragging && now - lastInteractionAt > 120;
                if (cur.autoplay && canNavigate && !reducedMotion && !dragging && !hovering && Math.abs(scroll.target - scroll.current) < .01) {
                  let e = Math.max(1.5, cur.autoplayInterval) * 1e3;
                  if (now - Math.max(lastInteractionAt, lastAutoplayAt) > e) {
                    lastAutoplayAt = now;
                    let e = Math.round(scroll.target);
                    !infiniteLoop && e >= count - 1 ? scroll.target = 0 : scroll.target = rubberBand(e + 1);
                  }
                }
                if (shouldSnap && canNavigate) {
                  let e = infiniteLoop ? Math.round(scroll.target) : Math.min(Math.max(Math.round(scroll.target), 0), count - 1);
                  scroll.target += (e - scroll.target) * .1;
                }
                if (!infiniteLoop && canNavigate) {
                  let e = count - 1;
                  scroll.target < 0 && (scroll.target += (0 - scroll.target) * .08), scroll.target > e && (scroll.target += (e - scroll.target) * .08);
                }
                let lerp = dragging ? Math.max(cur.lerpSmoothness, .16) : cur.lerpSmoothness;
                scroll.current += (scroll.target - scroll.current) * lerp;
                let scrollVelocity = (scroll.target - scroll.current) * cardSpacing;
                mouseSmoothed.lerp(mouseTarget, .12);
                let mouseStep = mouseSmoothed.distanceTo(mousePrevious);
                mousePrevious.copy(mouseSmoothed), mouseSpeed += (Math.min(mouseStep * 60, 1) - mouseSpeed) * .08, cards.forEach((card, cardIndex) => {
                  let presence = card.presence;
                  if (presence.phase === `fading-in`) {
                    let t = Math.min(1, (now - presence.startedAt) / TIMING.fadeInMs);
                    card.material.uniforms.uHasTexture.value = 1 - (1 - t) * (1 - t), t >= 1 && (card.presence = {
                      phase: `shown`
                    });
                  }
                  let swap = card.swap;
                  if (swap.phase === `cut-pending`) swap.frames++, ((!finePointer && card.item.coverUrl ? swap.frames >= 4 : swap.frames % 2 == 0 && textureHasContent(card.texture)) || swap.frames > 60) && finishSwap(card);else if (swap.phase === `dissolving`) {
                    let t = Math.min(1, (now - swap.startedAt) / TIMING.swapMs);
                    card.material.uniforms.uSwap.value = 1 - (1 - t) * (1 - t), t >= 1 && finishSwap(card);
                  }
                  // Décalage de la carte par rapport au centre (ramené dans ±n/2 en boucle infinie) → position x, échelle (1 au centre → sideScale à ±1).
                  let offset = cardIndex - scroll.current;
                  infiniteLoop && count > 1 && (offset = ((offset + count / 2) % count + count) % count - count / 2);
                  let xWorld = offset * cardSpacing,
                    scaleFactor = 1 - (1 - sideScaleValue) * Math.min(Math.abs(offset), 1);
                  card.mesh.scale.set(Wc * scaleFactor, Hc * scaleFactor, 1), card.mesh.position.set(xWorld, yOffset, 0);
                  let nearCenter = Math.abs(offset) < 2.6;
                  card.mesh.visible = nearCenter, card.material.uniforms.uPlaneAspect.value = planeAspect;
                  let radiusPx = card.item.radiusPx > 0 ? card.item.radiusPx : cur.cornerRadius,
                    cardHeightPx = Math.max(1, Hc * scaleFactor / worldPerPx);
                  if (card.material.uniforms.uRadius.value = Math.min(Math.max(radiusPx, 0) / cardHeightPx, .5), card.video) {
                    let t = nearCenter && inView && Math.abs(offset) < 1.45;
                    t && card.videoSourceReady === false && card.ensureVideoSource && card.ensureVideoSource();
                    let n = card.videoSourceReady !== false;
                    if (t && n && !card.videoPlaying && !card.warmedAdjacent) {
                      card.warmedAdjacent = true, card.video.preload = `auto`;
                      let t = card.video;
                      try {
                        let n = t.play();
                        n && n.then && n.then(() => {
                          card.videoPlaying || t.pause();
                        }).catch(() => {});
                      } catch {}
                    }
                    let r = nearCenter && Math.abs(offset) < .75 && inView;
                    if (card.videoWantsPlay = r, r && !card.videoPlaying && !card.playBlocked) n ? (card.videoPlaying = true, card.video.preload !== `auto` && (card.video.preload = `auto`), card.video.play().catch(t => onPlayRejected(card, t))) : card.ensureVideoSource && card.ensureVideoSource();else if (!r && card.videoPlaying) card.videoPlaying = false, card.videoRestarting = false, card.videoRestartGeneration = (card.videoRestartGeneration || 0) + 1, card.video.pause();else if (r && card.videoPlaying && card.safariWebMPlayback) {
                      let t = card.video,
                        n = t.duration,
                        r = Number.isFinite(n) && n > 0 && t.currentTime >= n - .08;
                      t.ended || r ? card.restartSafariWebM?.() : t.paused && !t.seeking && !card.videoRestarting && t.play().catch(() => {});
                    }
                    let i = !nearCenter;
                    i && !card.videoOutOfView ? (card.videoOutOfView = true, card.warmedAdjacent = false, card.video.currentTime > .1 && rewindVideo(card.video)) : !i && card.videoOutOfView && (card.videoOutOfView = false);
                  }
                  // Courbure : uScrollVelocity suit (target − current) × espacement × 60 avec un lissage de 0,12 ; nulle si mouvement réduit.
                  let targetVelocity = reducedMotion ? 0 : scrollVelocity * 60;
                  card.material.uniforms.uScrollVelocity.value += (targetVelocity - card.material.uniforms.uScrollVelocity.value) * .12, card.material.uniforms.uBendIntensity.value = reducedMotion ? 0 : cur.bendIntensity;
                  let centerXPx = viewWidthPx / 2 + xWorld / worldPerPx,
                    centerYPx = viewHeightPx / 2 - yOffset / worldPerPx,
                    cardWPx = Wc * scaleFactor / worldPerPx,
                    cardHPx = Hc * scaleFactor / worldPerPx,
                    posterImg = posterImgElsRef.current[cardIndex];
                  // Posters DOM (seulement avec le drapeau miralab cpposter) : sinon ignorés.
                  if (!posterImg && !miraLabFlag(`cpposter`) && (card.domPosterReleased = true), posterImg && !card.domPosterReleased) {
                    let r = posterImg.complete && posterImg.naturalWidth > 0;
                    if (card.videoTextureAttached && card.swap.phase !== `cut-pending` && card.presence.phase !== `fading-in` && card.material.uniforms.uHasTexture.value >= .999 && Math.abs(offset) >= .55) card.domPosterReleased = true, posterImg.style.display = `none`;else if (card.videoTextureAttached && card.swap.phase !== `cut-pending` && card.presence.phase !== `fading-in` && card.material.uniforms.uHasTexture.value >= .999) {
                      card.posterRewound || (card.posterRewound = true, card.posterReleaseCount = 0), card.posterReleaseCount = (card.posterReleaseCount || 0) + 1;
                      let n = card.video,
                        i = !n || n.currentTime <= .25,
                        a = card.warmReclaim ? 2 : 4;
                      (i && card.posterReleaseCount >= a || card.posterReleaseCount > 45 || !r) && (card.domPosterReleased = true, win.requestAnimationFrame(() => win.requestAnimationFrame(() => {
                        posterImg.style.display = `none`;
                      })));
                    }
                    if (!card.domPosterReleased) {
                      let t = centerXPx - cardWPx / 2,
                        r = centerYPx - cardHPx / 2,
                        i = posterLayoutCache[cardIndex];
                      (!i || Math.abs(i.x - t) > .5 || Math.abs(i.y - r) > .5 || Math.abs(i.w - cardWPx) > .5 || Math.abs(i.h - cardHPx) > .5 || i.a !== 0) && (posterImg.style.transform = `translate3d(${t}px, ${r}px, 0)`, posterImg.style.width = `${cardWPx}px`, posterImg.style.height = `${cardHPx}px`, posterImg.style.borderRadius = `${card.item.radiusPx > 0 ? card.item.radiusPx : cur.cornerRadius}px`, !i || i.a, posterImg.style.opacity = `0`, posterLayoutCache[cardIndex] = {
                        x: t,
                        y: r,
                        w: cardWPx,
                        h: cardHPx,
                        a: 0
                      });
                    }
                  }
                  // Card Details : suit sa carte (sous elle + metaGap), échelle = largeur carte / largeur centrale, opacité 1 − (|offset| − 0,12) × 1,7.
                  if (detailElsRef.current.length > 0) {
                    let e = detailElsRef.current[cardIndex];
                    if (e) {
                      let t = Wc / worldPerPx,
                        i = t > 0 ? cardWPx / t : 1,
                        a = centerXPx - cardWPx / 2,
                        s = centerYPx + cardHPx / 2 + cur.metaGap,
                        c = nearCenter ? Math.max(0, Math.min(1, 1 - Math.max(0, Math.abs(offset) - .12) * 1.7)) : 0,
                        l = detailsLayoutCacheRef.current[cardIndex];
                      (!l || Math.abs(l.x - a) > .5 || Math.abs(l.y - s) > .5 || Math.abs(l.w - t) > .5 || Math.abs(l.k - i) > .002 || Math.abs(l.a - c) > .01) && (e.style.transform = `translate3d(${a}px, ${s}px, 0) scale(${i})`, e.style.width = `${t}px`, e.style.opacity = String(c), detailsLayoutCacheRef.current[cardIndex] = {
                        x: a,
                        y: s,
                        w: t,
                        k: i,
                        a: c
                      });
                    }
                  }
                  let domIndex = card.item.domIndex;
                  // Calque DOM de la carte centrale (|offset| < 0,5) : reçoit le pointeur (lien / curseur Framer) ; les autres sont neutralisés.
                  if (domIndex >= 0) {
                    let t = slotCardElsRef.current[domIndex];
                    if (t) {
                      let r = cur.clickAction === `link` && !!card.item.href,
                        i = cur.cardCursor && hoverCapable,
                        a = (r || i) && nearCenter && Math.abs(offset) < .5 ? {
                          x: centerXPx - cardWPx / 2,
                          y: centerYPx - cardHPx / 2,
                          w: cardWPx,
                          h: cardHPx,
                          visible: true
                        } : {
                          x: 0,
                          y: 0,
                          w: cardWPx,
                          h: cardHPx,
                          visible: false
                        },
                        o = cardProxyLayoutRef.current[domIndex];
                      if (!o || Math.abs(o.x - a.x) > .5 || Math.abs(o.y - a.y) > .5 || Math.abs(o.w - a.w) > .5 || Math.abs(o.h - a.h) > .5 || o.visible !== a.visible) {
                        t.style.transform = `translate3d(${a.x}px, ${a.y}px, 0)`, t.style.width = `${a.w}px`, t.style.height = `${a.h}px`, t.style.pointerEvents = a.visible ? `auto` : `none`;
                        let e = t.firstElementChild,
                          n = cardNaturalSizeRef.current[domIndex];
                        if (e && !n && now - lastCardMeasureAtRef.current > 250) {
                          lastCardMeasureAtRef.current = now;
                          let t = e.offsetWidth,
                            r = e.offsetHeight;
                          t > 2 && r > 2 && (n = {
                            w: t,
                            h: r
                          }, cardNaturalSizeRef.current[domIndex] = n);
                        }
                        e && n && (e.style.transformOrigin = `top left`, e.style.transform = `scale(${a.w / n.w}, ${a.h / n.h})`), cardProxyLayoutRef.current[domIndex] = a;
                      }
                    }
                  }
                }), stripPositionRef.current = scroll.current, positionTitleStrip(scroll.current, infiniteLoop);
                let centerIndex = wrapIndex(scroll.current);
                centerIndex !== reportedActiveIndexRef.current && (reportedActiveIndexRef.current = centerIndex, startTransition(() => {
                  setActiveIndex(centerIndex);
                }));
                // Passe post : souris (pointeur fin uniquement) et bords. uTime = temps rAF modulo 1 h, en s.
                let mouseFxOn = cur.mouseWarp && finePointer;
                if (effectsAllowed && (mouseFxOn || cur.edgeWarp) && ensurePostPass(), effectsAllowed && postTarget && postScene && postCamera && postMaterial && (mouseFxOn || cur.edgeWarp) && postMaterial && postTarget && postScene && postCamera) {
                  postMaterial.uniforms.uMouse.value.copy(mouseSmoothed), postMaterial.uniforms.uTime.value = frameTime % 36e5 * .001, postMaterial.uniforms.uMouseEnabled.value = +!!mouseFxOn, postMaterial.uniforms.uMouseStrength.value = cur.mouseWarpStrength, postMaterial.uniforms.uMouseEffect.value = MOUSE_EFFECT_INDEX[cur.mouseEffect] ?? 0, postMaterial.uniforms.uMouseRadius.value = Math.min(Math.max(cur.mouseRadius, .03), .4), postMaterial.uniforms.uMouseChroma.value = Math.min(Math.max(cur.mouseChroma, 0), 1), postMaterial.uniforms.uMouseVel.value = cur.mouseSpeedReact ? mouseSpeed : 1, postMaterial.uniforms.uEdgeEnabled.value = +!!cur.edgeWarp, postMaterial.uniforms.uEdgeStrength.value = cur.edgeWarpStrength, postMaterial.uniforms.uEdgeEffect.value = EDGE_EFFECT_INDEX[cur.edgeEffect] ?? 0, postMaterial.uniforms.uEdgeBand.value = edgeBand, postMaterial.uniforms.uEdgeHalfY.value = edgeHalfY, postMaterial.uniforms.uCenterY.value = centerYUv;
                  let t = skipUnchangedScene ? sceneSignature() : ``;
                  (!t || t !== lastSceneSignature) && (renderer.setRenderTarget(postTarget), renderer.render(scene, camera), lastSceneSignature = t), renderer.setRenderTarget(null), renderer.render(postScene, postCamera);
                } else lastSceneSignature = ``, renderer.render(scene, camera);
                // Repos : la boucle s'arrête quand plus rien ne bouge (pas d'effet de bord actif, souris immobile, pas de glisser, écart < 5e-4, 300 ms sans entrée).
                let anyAnimating = false;
                for (let e = 0; e < cards.length; e++) {
                  let t = cards[e];
                  if (t.presence.phase === `fading-in` || t.swap.phase !== `settled` || t.videoPlaying || Math.abs(t.material.uniforms.uScrollVelocity.value) > .002 || t.video && t.videoTextureAttached && !t.domPosterReleased) {
                    anyAnimating = true;
                    break;
                  }
                }
                let mouseFxAnimating = mouseFxOn && (cur.mouseEffect === `ripple` || cur.mouseEffect === `noise` || mouseSmoothed.distanceTo(mouseTarget) > 5e-4 || cur.mouseSpeedReact && mouseSpeed > .004);
                if (idle = !cur.edgeWarp && !mouseFxAnimating && !anyAnimating && !dragging && uploadQueue.length === 0 && Math.abs(scroll.target - scroll.current) < 5e-4 && now - lastInteractionAt > 300, infiniteLoop && !dragging && !anyAnimating && Math.abs(scroll.target - scroll.current) < 5e-4) {
                  let e = wrapIndex(Math.round(scroll.current));
                  Math.abs(scroll.current - e) > 1e-4 && Number.isInteger(Math.round(scroll.current)) && (scroll.current = e, scroll.target = e, stripPositionRef.current = e, positionTitleStrip(e, true, true));
                }
              }
              inView && idle && uploadQueue.length === 0 ? (loopRunning = false, scheduleAutoplayWake()) : !inView && uploadQueue.length === 0 ? loopRunning = false : rafId = win.requestAnimationFrame(renderFrame);
            },
            compiled = false,
            compiling = false,
            // Démarre la boucle (après compilation des shaders en 2 rAF) ; DPR complet après TIMING.dprWarmupMs.
            startLoop = () => {
              if (clearAutoplayTimer(), !dprWarm && !dprWarmTimer && (dprWarmTimer = win.setTimeout(() => {
                dprWarm = true, resize();
              }, TIMING.dprWarmupMs)), !(loopRunning || disposed)) {
                if (compiled) loopRunning = true, idle = false, rafId = win.requestAnimationFrame(renderFrame);else {
                  if (compiling) return;
                  compiling = true, win.requestAnimationFrame(() => {
                    if (!disposed) {
                      miraLabHud()?.mark(`compile`);
                      try {
                        renderer.compile(scene, camera);
                      } catch {}
                      win.requestAnimationFrame(() => {
                        if (!disposed) {
                          try {
                            postTarget && postScene && postCamera && (renderer.setRenderTarget(postTarget), renderer.clear(), renderer.setRenderTarget(null), lastSceneSignature = ``, renderer.compile(postScene, postCamera));
                          } catch {}
                          try {
                            if (initialItems.some(e => !!e.videoUrl)) {
                              let e = ensureProbe();
                              renderer.compile(e.scene, e.camera);
                            }
                          } catch {}
                          compiled = true, compiling = false, miraLabHud()?.mark(`compiled`), startLoop();
                        }
                      });
                    }
                  });
                }
              }
            },
            stopLoop = () => {
              clearAutoplayTimer(), loopRunning && (loopRunning = false, win.cancelAnimationFrame(rafId), cards.forEach(e => {
                if (e.video && e.videoPlaying) {
                  e.videoPlaying = false;
                  try {
                    e.video.pause();
                  } catch {}
                }
              }));
            };
          requestRender = () => {
            clearAutoplayTimer(), !disposed && !loopRunning && startLoop();
          };
          let pickCard = (e, t) => {
              let n = root.getBoundingClientRect();
              ndcPointer.x = (e - n.left) / n.width * 2 - 1, ndcPointer.y = -((t - n.top) / n.height) * 2 + 1, raycaster.setFromCamera(ndcPointer, camera);
              let i = raycaster.intersectObjects(cards.filter(e => e.mesh.visible).map(e => e.mesh), false)[0]?.object;
              if (!i) return null;
              let a = cards.find(e => e.mesh === i) || null;
              return a ? {
                entry: a,
                index: cards.indexOf(a)
              } : null;
            },
            // Molette : sans hijackScroll seuls les gestes horizontaux comptent ; avec hijackScroll deltaX + deltaY. Δcible = delta × scrollSpeed / (espacement en px).
            onWheel = e => {
              if (!canNavigate) return;
              let t = settingsRef.current,
                n = Math.abs(e.deltaX) > Math.abs(e.deltaY);
              if (!t.hijackScroll && !n) return;
              e.preventDefault();
              let r = t.hijackScroll ? e.deltaX + e.deltaY : e.deltaX,
                {
                  d: i
                } = computeLayout(),
                a = Math.max(1, i / worldPerPx);
              scroll.target = rubberBand(scroll.target + r * t.scrollSpeed / a), lastInteractionAt = performance.now(), idle = false, requestRender();
            },
            // Pointeur : début de glisser (ignoré sur la bande de titres et les flèches).
            onPointerDown = e => {
              let t = e.target;
              if (!t?.closest?.(`[data-nav-btn], [data-strip]`) && (detachLinkUnderPointer(e.target), idle = false, requestRender(), dragging = true, dragMoved = false, pointerCaptured = false, e.clientX, lastPointerX = e.clientX, dragVelocity = 0, lastDragMoveAt = performance.now(), lastInteractionAt = lastDragMoveAt, pointerStateRef.current.down = true, pointerStateRef.current.moved = false, pointerStateRef.current.pointerId = e.pointerId, pointerStateRef.current.startX = e.clientX, pointerStateRef.current.startY = e.clientY, canNavigate)) {
                let e = slotHostRef.current,
                  n = !!(e && e.contains(t)),
                  i = n && settingsRef.current.cardCursor && hoverCapable;
                root.style.cursor = i ? `` : n && settingsRef.current.clickAction === `link` ? `pointer` : `grabbing`;
              }
            },
            cachedRect = null,
            cachedRectFrame = -1,
            // Déplacement : met à jour la souris du shader ; en glisser, Δcible = −dx × dragSpeed / espacement px ; seuils 3 px (souris) / 6 px (tactile).
            onPointerMove = e => {
              idle = false, requestRender(), (cachedRectFrame !== frameCount || !cachedRect) && (cachedRect = root.getBoundingClientRect(), cachedRectFrame = frameCount);
              let t = cachedRect;
              mouseTarget.set((e.clientX - t.left) / Math.max(1, t.width), 1 - (e.clientY - t.top) / Math.max(1, t.height));
              let n = settingsRef.current;
              if (!dragging) {
                if (finePointer) {
                  let t = canNavigate ? `grab` : `default`,
                    i = e.target,
                    a = !!i?.closest?.(`[data-strip], [data-nav-btn]`),
                    o = slotHostRef.current;
                  if (n.cardCursor && o && o.contains(i)) {
                    root.style.cursor = ``;
                    return;
                  }
                  if (n.clickAction !== `none` && !a) {
                    let r = pickCard(e.clientX, e.clientY);
                    r && (r.index === wrapIndex(scroll.current) ? n.clickAction === `link` && r.entry.item.href && (t = `pointer`) : canNavigate && (t = `pointer`));
                  }
                  root.style.cursor !== t && (root.style.cursor = t);
                }
                return;
              }
              if (!canNavigate) return;
              let i = e.clientX - lastPointerX;
              lastPointerX = e.clientX;
              let a = e.clientX - pointerStateRef.current.startX,
                o = e.clientY - pointerStateRef.current.startY,
                s = Math.abs(a),
                l = Math.abs(o),
                d = e.pointerType === `touch` ? 6 : 3,
                f = e.pointerType === `touch` ? 14 : 5,
                p = s > d && s >= l;
              if ((p || Math.hypot(a, o) > f) && (dragMoved = true, pointerStateRef.current.moved = true), p && !pointerCaptured) try {
                root.setPointerCapture(e.pointerId), pointerCaptured = true;
              } catch {}
              p && e.cancelable && e.preventDefault();
              let {
                  d: h
                } = computeLayout(),
                g = Math.max(1, h / worldPerPx),
                _ = -i * n.dragSpeed / g;
              scroll.target = rubberBand(scroll.target + _), dragVelocity = dragVelocity * .6 + _ * .4, lastDragMoveAt = performance.now(), lastInteractionAt = lastDragMoveAt;
            },
            // Relâchement : clic court = ouvre la carte centrale ou centre la carte cliquée ; lancer = cible + vitesse × 12,5 arrondie, ±2 cartes (souris) / ±1 (tactile).
            onPointerUp = e => {
              if (!dragging) return;
              let t = e.type === `pointercancel`,
                n = !dragMoved && !t,
                i = !!detachedLinkEl;
              if (i && restoreDetachedHref(!n), n) {
                let t = settingsRef.current,
                  n = pickCard(e.clientX, e.clientY);
                n && t.clickAction !== `none` && (n.index === wrapIndex(scroll.current) ? t.clickAction === `link` && (i && n.entry.item.domIndex >= 0 || openCard(n.entry)) : goTo(n.index));
              }
              if (dragMoved) {
                let e = performance.now() - lastDragMoveAt > 80 ? 0 : dragVelocity,
                  t = scroll.target + e * 12.5,
                  n = Math.round(scroll.target),
                  r = finePointer ? 2 : 1,
                  i = Math.round(t);
                i = Math.min(Math.max(i, n - r), n + r), infiniteLoop || (i = Math.min(Math.max(i, 0), count - 1)), scroll.target = i, lastInteractionAt = 0;
              }
              dragging = false, dragVelocity = 0, pointerCaptured = false, pointerStateRef.current.down = false;
              let a = slotHostRef.current,
                o = e.target,
                l = !!(a && a.contains(o)),
                d = l && settingsRef.current.cardCursor && hoverCapable;
              root.style.cursor = d ? `` : l && settingsRef.current.clickAction === `link` ? `pointer` : canNavigate ? `grab` : `default`;
            },
            resizeObserver = new ResizeObserver(() => resize());
          resizeObserver.observe(root);
          // Pause hors de la vue (IntersectionObserver) et onglet caché (visibilitychange) ; perte / restauration de contexte WebGL gérées.
          let visibilityIO = new IntersectionObserver(e => {
            inView = e.some(e => e.isIntersecting), inView && !document.hidden ? startLoop() : (stopLoop(), inView || (cards.forEach(e => {
              e.video && e.video.currentTime > .1 && (e.videoOutOfView = true, rewindVideo(e.video));
            }), uploadQueue.length > 0 && startLoop()));
          });
          visibilityIO.observe(root);
          let onVisibilityChange = () => {
            !document.hidden && (inView || uploadQueue.length > 0) ? startLoop() : stopLoop();
          };
          document.addEventListener(`visibilitychange`, onVisibilityChange);
          let onPointerEnter = () => {
              hovering = true, clearAutoplayTimer();
            },
            onPointerLeave = () => {
              hovering = false, requestRender();
            },
            onClickCapture = e => {
              let t = slotHostRef.current,
                n = e.target,
                r = !!(t && n && t.contains(n));
              (pointerStateRef.current.moved || r && settingsRef.current.clickAction !== `link`) && (e.preventDefault(), e.stopPropagation(), pointerStateRef.current.moved = false);
            },
            onContextLost = e => {
              e.preventDefault(), stopLoop();
            },
            onContextRestored = () => {
              lastSceneSignature = ``, reuploadReleasedBitmaps().then(() => {
                !disposed && inView && !document.hidden && startLoop();
              });
            };
          renderer.domElement.addEventListener(`webglcontextlost`, onContextLost), renderer.domElement.addEventListener(`webglcontextrestored`, onContextRestored), root.style.cursor = canNavigate ? `grab` : `default`, root.addEventListener(`wheel`, onWheel, {
            passive: false
          }), root.addEventListener(`pointerdown`, onPointerDown), root.addEventListener(`pointermove`, onPointerMove), root.addEventListener(`pointerup`, onPointerUp), root.addEventListener(`pointercancel`, onPointerUp), win.addEventListener(`pointerup`, onPointerUp), root.addEventListener(`pointerenter`, onPointerEnter), root.addEventListener(`pointerleave`, onPointerLeave), root.addEventListener(`click`, onClickCapture, true);
          let compileAsync = renderer.compileAsync?.bind(renderer);
          if (compileAsync) {
            let e = false,
              n = t => {
                !e && !disposed && (e = true, t && (compiled = true), startLoop());
              },
              r = [Promise.resolve(compileAsync(scene, camera)).catch(() => {})];
            if (postScene && postCamera && r.push(Promise.resolve(compileAsync(postScene, postCamera)).catch(() => {})), initialItems.some(e => !!e.videoUrl)) try {
              let e = ensureProbe();
              r.push(Promise.resolve(compileAsync(e.scene, e.camera)).catch(() => {}));
            } catch {}
            Promise.all(r).then(() => n(true)), win.setTimeout(() => n(false), 1e3);
          } else startLoop();
          // Démontage complet : position mémorisée, écouteurs retirés, vidéos rangées, ressources GPU libérées en différé.
          teardown = () => {
            disposed = true, stopGestureListening(), clearAutoplayTimer();
            try {
              hasDrawnVisible && win.sessionStorage?.setItem(positionStorageKey, String(wrapIndex(Math.round(scroll.current))));
            } catch {}
            win.clearTimeout(dprWarmTimer), hrefRestoreTimer &&= (win.clearTimeout(hrefRestoreTimer), 0), restoreDetachedHref(false);
            try {
              let e = pointerStateRef.current.pointerId;
              e >= 0 && root.hasPointerCapture?.(e) && root.releasePointerCapture(e);
            } catch {}
            pointerCaptured = false, stopLoop(), controllerRef.current = null, document.removeEventListener(`visibilitychange`, onVisibilityChange), resizeObserver.disconnect(), visibilityIO.disconnect(), root.removeEventListener(`wheel`, onWheel), root.removeEventListener(`pointerdown`, onPointerDown), root.removeEventListener(`pointermove`, onPointerMove), root.removeEventListener(`pointerup`, onPointerUp), root.removeEventListener(`pointercancel`, onPointerUp), win.removeEventListener(`pointerup`, onPointerUp), root.removeEventListener(`pointerenter`, onPointerEnter), root.removeEventListener(`pointerleave`, onPointerLeave), root.removeEventListener(`click`, onClickCapture, true), renderer.domElement.removeEventListener(`webglcontextlost`, onContextLost), renderer.domElement.removeEventListener(`webglcontextrestored`, onContextRestored), cards.forEach(e => {
              if (e.video) {
                try {
                  e.videoAbort?.abort();
                } catch {}
                e.videoAbort = void 0;
                let t = e.videoBlobUrl;
                if (e.item.videoUrl && parkVideoElement(e.item.videoUrl, e.video), t) try {
                  URL.revokeObjectURL(t);
                } catch {}
                e.videoBlobUrl = null, e.ensureVideoSource = void 0, e.videoSourceReady = void 0, e.restartSafariWebM = void 0, e.videoRestartGeneration = void 0, e.safariWebMPlayback = void 0, e.videoRestarting = false, e.video = null;
              }
            }), rendererRef.current === renderer && (rendererRef.current = null), renderer.domElement.parentNode === canvasHost && canvasHost.removeChild(renderer.domElement);
            let e = probe;
            probe = null, scheduleGpuDisposal(() => {
              if (e) try {
                e.target.dispose(), e.material.map?.dispose?.(), e.material.dispose();
              } catch {}
              cards.forEach(e => {
                try {
                  e.mesh.geometry.dispose(), e.material.dispose(), e.texture?.dispose(), e.preparedVideoTexture &&= (e.preparedVideoTexture.dispose(), null);
                  let t = e.swap;
                  t.phase !== `settled` && (t.prev.dispose(), e.swap = {
                    phase: `settled`
                  });
                } catch {}
              }), uploadQueue.forEach(e => {
                try {
                  e.texture?.dispose();
                } catch {}
              }), uploadQueue.length = 0;
              try {
                postMesh && postScene && postScene.remove(postMesh), postGeometry?.dispose(), postMaterial?.dispose(), postTarget?.dispose();
              } catch {}
              try {
                renderer.dispose(), renderer.forceContextLoss();
              } catch {}
            });
          };
        });
      },
      requestIdle = win.requestIdleCallback,
      idleHandle,
      loadThenInit = () => {
        cancelled || loadThree().then(() => {
          cancelled || initRenderer();
        }).catch(t => {
          console.error(`Failed to load three.js:`, t), cancelled || setStaticFallback(true);
        });
      },
      scheduleInit = () => {
        idleHandle = requestIdle ? requestIdle(loadThenInit, {
          timeout: 800
        }) : win.setTimeout(loadThenInit, 50);
      },
      startInit = () => {
        cancelled || scheduleInit();
      },
      nearViewportObserver = null,
      rootElement = rootRef.current;
    return rootElement && typeof IntersectionObserver < `u` ? (nearViewportObserver = new IntersectionObserver(e => {
      e.some(e => e.isIntersecting) && (nearViewportObserver?.disconnect(), nearViewportObserver = null, startInit());
    }, {
      rootMargin: `600px 0px 600px 0px`
    }), nearViewportObserver.observe(rootElement)) : startInit(), () => {
      cancelled = true, nearViewportObserver?.disconnect(), idleHandle !== void 0 && (requestIdle ? win.cancelIdleCallback?.(idleHandle) : win.clearTimeout(idleHandle)), teardown?.();
    };
  }, [isStaticRender, projectsMediaSignature, infiniteLoop, positionTitleStrip]);
  // Rendu React : région ARIA « carousel », clavier ← → Entrée, slots cachés, hôte du canvas (ou repli statique), bande de titres, compteur, liens accessibles.
  let prevDisabled = !infiniteLoop && activeIndex <= 0,
    nextDisabled = !infiniteLoop && activeIndex >= projectCount - 1,
    formatCount = e => {
      let t = Math.min(Math.max(e, 0), 99);
      return zeroPad ? String(t).padStart(2, `0`) : String(t);
    },
    countTransitionRef = useRef({
      from: 0,
      to: 0
    }),
    countDirectionRef = useRef(1);
  if (activeIndex !== countTransitionRef.current.to) {
    let e = Math.max(1, projectCount);
    countDirectionRef.current = ((activeIndex - countTransitionRef.current.to) % e + e) % e <= e / 2 ? 1 : -1, countTransitionRef.current = {
      from: countTransitionRef.current.to,
      to: activeIndex
    };
  }
  let arrowButtonStyle = {
    background: `none`,
    border: `none`,
    padding: `6px 10px`,
    margin: 0,
    font: `inherit`,
    color: arrowColor,
    cursor: `pointer`,
    userSelect: `none`,
    lineHeight: 1,
    letterSpacing: `0.1em`
  };
  return /*#__PURE__*/jsxs(`div`, {
    ref: rootRef,
    role: `region`,
    "aria-label": `Curvy Project Showcase`,
    "aria-roledescription": `carousel`,
    tabIndex: 0,
    onKeyDown: e => {
      e.key === `ArrowLeft` ? (e.preventDefault(), controllerRef.current?.prev()) : e.key === `ArrowRight` ? (e.preventDefault(), controllerRef.current?.next()) : e.key === `Enter` && e.target === e.currentTarget && controllerRef.current?.openCenter();
    },
    style: {
      position: `relative`,
      width: `100%`,
      height: `100%`,
      overflow: `hidden`,
      outline: `none`,
      touchAction: `pan-y`,
      background: backgroundTransparent ? `transparent` : backgroundColor
    },
    children: [/*#__PURE__*/jsx(`style`, {
      children: `
@keyframes curvyCountInUp { from { transform: translateY(110%); } to { transform: translateY(0); } }
@keyframes curvyCountOutUp { from { transform: translateY(0); } to { transform: translateY(-110%); } }
@keyframes curvyCountInDown { from { transform: translateY(-110%); } to { transform: translateY(0); } }
@keyframes curvyCountOutDown { from { transform: translateY(0); } to { transform: translateY(110%); } }
`
    }), /*#__PURE__*/jsx(`div`, {
      ref: slotHostRef,
      onDragStartCapture: e => e.preventDefault(),
      style: isStaticRender ? {
        position: `absolute`,
        left: -99999,
        top: 0,
        opacity: 0,
        zIndex: -1,
        overflow: `hidden`,
        pointerEvents: `none`,
        width: 1,
        height: 1
      } : {
        position: `absolute`,
        inset: 0,
        zIndex: 2,
        overflow: `visible`,
        pointerEvents: `none`,
        opacity: 0,
        userSelect: `none`
      },
      children: slot
    }), /*#__PURE__*/jsx(`div`, {
      ref: titleFontHostRef,
      style: {
        position: `absolute`,
        left: -99999,
        top: 0,
        opacity: 0,
        zIndex: -1,
        overflow: `hidden`,
        pointerEvents: `none`,
        width: 1,
        height: 1
      },
      children: fontSlot
    }), /*#__PURE__*/jsx(`div`, {
      ref: countFontHostRef,
      style: {
        position: `absolute`,
        left: -99999,
        top: 0,
        opacity: 0,
        zIndex: -1,
        overflow: `hidden`,
        pointerEvents: `none`,
        width: 1,
        height: 1
      },
      children: countFontSlot
    }), !isStaticRender && !staticFallback ? /*#__PURE__*/jsx(`div`, {
      ref: canvasHostRef,
      style: {
        position: `absolute`,
        inset: 0
      }
    }) : /*#__PURE__*/jsx(`div`, {
      style: {
        position: `absolute`,
        inset: 0,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        overflow: `hidden`
      },
      children: [-1, 0, 1].map(e => {
        let t = (e + projectCount) % Math.max(1, projectCount) % Math.max(1, projectCount),
          n = projects[e === 0 ? 0 : t] || projects[0];
        if (!n || !n.coverUrl && !n.videoUrl) return null;
        let r = e === 0,
          i = Math.min(Math.max(centerWidthPct, 10), 90),
          a = r ? 1 : Math.min(Math.max(sideScale, .3), 1),
          o = n.radiusPx > 0 ? n.radiusPx : cornerRadius;
        return /*#__PURE__*/jsx(`div`, {
          style: {
            position: r ? `relative` : `absolute`,
            ...(r ? {} : e < 0 ? {
              right: `${100 - sidePeekPct}%`
            } : {
              left: `${100 - sidePeekPct}%`
            }),
            width: `${i * a}%`,
            aspectRatio: `${cardAspect}`,
            maxHeight: `70%`,
            borderRadius: o,
            overflow: `hidden`,
            background: `#111`,
            flexShrink: 0
          },
          children: n.coverUrl ? /*#__PURE__*/jsx(`img`, {
            src: n.coverUrl,
            alt: r && n.title || ``,
            style: {
              width: `100%`,
              height: `100%`,
              objectFit: `cover`,
              display: `block`
            }
          }) : null
        }, e);
      })
    }), !isStaticRender && miraLabFlag(`cpposter`) ? /*#__PURE__*/jsx(`div`, {
      "aria-hidden": `true`,
      style: {
        position: `absolute`,
        inset: 0,
        pointerEvents: `none`,
        overflow: `hidden`
      },
      children: projects.map((e, t) => !e.videoUrl || !e.coverUrl ? null : /*#__PURE__*/jsx(`img`, {
        ref: e => {
          posterImgElsRef.current[t] = e;
        },
        src: e.coverUrl,
        alt: ``,
        crossOrigin: `anonymous`,
        decoding: `async`,
        style: {
          position: `absolute`,
          top: 0,
          left: 0,
          width: `0px`,
          height: `0px`,
          objectFit: `cover`,
          objectPosition: `center`,
          opacity: 0,
          transition: `opacity 180ms ease`,
          willChange: `transform, opacity`,
          display: `block`
        }
      }, `vposter-${t}-${e.coverUrl}`))
    }) : null, !isStaticRender && detailsSlot && !detailsHidden ? /*#__PURE__*/jsx(`div`, {
      ref: detailsHostRef,
      "aria-hidden": `true`,
      style: {
        position: `absolute`,
        inset: 0,
        zIndex: 1,
        pointerEvents: `none`,
        overflow: `hidden`,
        visibility: `hidden`
      },
      children: detailsSlot
    }) : null, showTitleStrip && projectCount > 0 ? /*#__PURE__*/jsxs(`div`, {
      ref: stripBlockRef,
      style: {
        position: `absolute`,
        left: 0,
        right: 0,
        bottom: 0,
        paddingBottom: 22,
        display: `flex`,
        flexDirection: `column`,
        gap: 14,
        userSelect: `none`,
        WebkitUserSelect: `none`
      },
      children: [/*#__PURE__*/jsx(`div`, {
        ref: stripViewportRef,
        "data-strip": `true`,
        style: {
          overflow: `hidden`,
          width: `100%`,
          cursor: `default`
        },
        children: /*#__PURE__*/jsx(`div`, {
          ref: stripTrackRef,
          style: {
            display: `inline-flex`,
            gap: stripGapCss,
            whiteSpace: `nowrap`,
            willChange: `transform`,
            padding: `0.2em 0`,
            fontFamily: titleFontStyle.fontFamily,
            fontSize: fluidPx(titleFontStyle.fontSize),
            fontWeight: titleFontStyle.fontWeight,
            fontStyle: titleFontStyle.fontStyle,
            fontStretch: titleFontStyle.fontStretch,
            fontVariationSettings: titleFontStyle.fontVariationSettings,
            fontFeatureSettings: titleFontStyle.fontFeatureSettings,
            fontOpticalSizing: titleFontStyle.fontOpticalSizing,
            letterSpacing: titleFontStyle.letterSpacing,
            textTransform: titleFontStyle.textTransform,
            lineHeight: unitlessLineHeight(titleFontStyle)
          },
          children: (infiniteLoop ? Array.from({
            length: stripCopies
          }, () => projects).flat() : projects).map((e, t) => {
            let n = t % projectCount;
            return /*#__PURE__*/jsx(`span`, {
              "data-index": n,
              role: `button`,
              tabIndex: 0,
              onClick: () => controllerRef.current?.goToStrip(t),
              onKeyDown: e => {
                (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), controllerRef.current?.goToStrip(t));
              },
              style: {
                color: inactiveTitleColor,
                transition: `color 320ms ease`,
                cursor: `pointer`,
                outline: `none`
              },
              children: e.title
            }, `${e.title}-${t}`);
          })
        })
      }), showArrows || showCount ? /*#__PURE__*/jsxs(`div`, {
        style: {
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          gap: 18,
          fontFamily: countFontStyle.fontFamily,
          fontSize: fluidPx(countFontStyle.fontSize),
          fontWeight: countFontStyle.fontWeight,
          fontStyle: countFontStyle.fontStyle,
          fontStretch: countFontStyle.fontStretch,
          fontVariationSettings: countFontStyle.fontVariationSettings,
          fontFeatureSettings: countFontStyle.fontFeatureSettings,
          fontOpticalSizing: countFontStyle.fontOpticalSizing,
          letterSpacing: countFontStyle.letterSpacing,
          textTransform: countFontStyle.textTransform,
          lineHeight: unitlessLineHeight(countFontStyle),
          color: controlsColor,
          userSelect: `none`,
          WebkitUserSelect: `none`
        },
        children: [showArrows ? /*#__PURE__*/jsx(`button`, {
          type: `button`,
          "data-nav-btn": `prev`,
          "aria-label": `Previous project`,
          disabled: prevDisabled,
          onClick: () => controllerRef.current?.prev(),
          style: {
            ...arrowButtonStyle,
            opacity: prevDisabled ? .25 : 1
          },
          children: hasCustomArrow ? /*#__PURE__*/jsx(`span`, {
            style: {
              display: `inline-flex`,
              alignItems: `center`,
              transform: `scale(${arrowScale}) scaleX(-1)`,
              transformOrigin: `center`,
              pointerEvents: `none`
            },
            children: arrowSlot
          }) : `◄◄`
        }) : null, showCount ? /*#__PURE__*/jsxs(`span`, {
          "aria-live": autoplay ? `off` : `polite`,
          style: {
            fontVariantNumeric: `tabular-nums`
          },
          children: [/*#__PURE__*/jsxs(`span`, {
            style: {
              position: `relative`,
              display: `inline-block`
            },
            children: [/*#__PURE__*/jsx(`span`, {
              style: {
                visibility: `hidden`
              },
              children: formatCount(activeIndex + 1)
            }), /*#__PURE__*/jsxs(`span`, {
              style: {
                position: `absolute`,
                inset: 0,
                overflow: `hidden`
              },
              children: [/*#__PURE__*/jsx(`span`, {
                style: {
                  display: `block`,
                  animation: `${countDirectionRef.current === 1 ? `curvyCountInUp` : `curvyCountInDown`} 450ms cubic-bezier(0.19, 1, 0.22, 1) both`
                },
                children: formatCount(activeIndex + 1)
              }, `in-${activeIndex}`), countTransitionRef.current.from === countTransitionRef.current.to ? null : /*#__PURE__*/jsx(`span`, {
                "aria-hidden": `true`,
                style: {
                  position: `absolute`,
                  top: 0,
                  left: 0,
                  animation: `${countDirectionRef.current === 1 ? `curvyCountOutUp` : `curvyCountOutDown`} 450ms cubic-bezier(0.19, 1, 0.22, 1) both`
                },
                children: formatCount(countTransitionRef.current.from + 1)
              }, `out-${activeIndex}`)]
            })]
          }), /*#__PURE__*/jsx(`span`, {
            style: {
              opacity: .5,
              padding: `0 8px`
            },
            children: countSeparator
          }), formatCount(projectCount)]
        }) : null, showArrows ? /*#__PURE__*/jsx(`button`, {
          type: `button`,
          "data-nav-btn": `next`,
          "aria-label": `Next project`,
          disabled: nextDisabled,
          onClick: () => controllerRef.current?.next(),
          style: {
            ...arrowButtonStyle,
            opacity: nextDisabled ? .25 : 1
          },
          children: hasCustomArrow ? /*#__PURE__*/jsx(`span`, {
            style: {
              display: `inline-flex`,
              alignItems: `center`,
              transform: `scale(${arrowScale})`,
              transformOrigin: `center`,
              pointerEvents: `none`
            },
            children: arrowSlot
          }) : `►►`
        }) : null]
      }) : null]
    }) : null, /*#__PURE__*/jsx(`nav`, {
      "aria-label": `Project links`,
      style: {
        position: `absolute`,
        width: 1,
        height: 1,
        overflow: `hidden`,
        clipPath: `inset(50%)`,
        whiteSpace: `nowrap`
      },
      children: projects.map((e, t) => e.href ? /*#__PURE__*/jsx(`a`, {
        href: e.href,
        children: e.title
      }, `${e.title}-link-${t}`) : null)
    })]
  });
}
var THREE, threePromise, loadThree, TIMING, CARD_VERTEX_SHADER, CARD_FRAGMENT_SHADER, POST_VERTEX_SHADER, POST_FRAGMENT_SHADER, flipYSupportPromise, parkedVideos, maxParkedVideos, pendingGpuDisposal, gpuDisposalTimer, DEFAULT_TITLE_FONT, EDGE_EFFECT_INDEX, MOUSE_EFFECT_INDEX, DEFAULT_COUNT_FONT;
// Initialisation paresseuse du module : import dynamique de three (export C = espace de noms, x() = init), constantes, shaders, contrôles Framer.
function initCurvyShowcaseModule() {
  return (initCurvyShowcaseModule = __lazyInit(() => {
    if (__initReact_R(), __initReact_s(), __initReact_T(), __initFramer_Q(), THREE = null, threePromise = null, miraLabHud(), loadThree = () => (threePromise ||= import('three').then(e => (THREE = e && e.WebGLRenderer ? e : e?.default || e, THREE)), threePromise), TIMING = {
      gpuDisposalMs: 900,
      slotGraceMs: 450,
      loadSlotCapMs: 4e3,
      dprWarmupMs: 650,
      fadeInMs: 450,
      swapMs: 350
    }, CARD_VERTEX_SHADER = `
uniform float uScrollVelocity;
uniform float uBendIntensity;
varying vec2 vUv;
void main() {
    vUv = uv;
    vec3 p = position;
    float v = clamp(abs(uScrollVelocity) * 0.02, 0.0, 1.0);
    vec4 clip = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    float sx = clamp((clip.x / clip.w) * 0.5 + 0.5, 0.0, 1.0);
    float bend = sin(sx * 3.14159265);
    p.z -= bend * pow(v, 1.0) * 0.85 * uBendIntensity;
    p.z -= v * 0.2 * uBendIntensity;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
`, CARD_FRAGMENT_SHADER = `
uniform sampler2D uTexture;
uniform sampler2D uTexturePrev;
uniform float uImageAspect;
uniform float uPrevAspect;
uniform float uPlaneAspect;
uniform float uHasTexture;
// 0 -> previous texture, 1 -> current. Ramped by the loop when a texture is
// replaced in place (poster -> video, tiny placeholder -> full res): a GPU
// mix() between two OPAQUE layers has no dark dip by construction, unlike
// stacked DOM alphas or a fade through the empty card.
uniform float uSwap;
uniform float uRadius;
varying vec2 vUv;

vec2 coverUV(vec2 uv, float imageAspect, float planeAspect) {
    vec2 scale = vec2(1.0);
    vec2 offset = vec2(0.0);
    if (imageAspect > planeAspect) {
        scale.x = planeAspect / imageAspect;
        offset.x = (1.0 - scale.x) * 0.5;
    } else {
        scale.y = imageAspect / planeAspect;
        offset.y = (1.0 - scale.y) * 0.5;
    }
    return uv * scale + offset;
}

void main() {
    float planeAspect = max(0.0001, uPlaneAspect);
    vec2 uv = coverUV(vUv, max(0.0001, uImageAspect), planeAspect);
    vec2 uvPrev = coverUV(vUv, max(0.0001, uPrevAspect), planeAspect);
    vec4 color = vec4(0.1, 0.1, 0.1, 1.0);
    // Textures fade in over the placeholder instead of popping. Sampling is
    // unconditional (conditional sampling breaks mipmap derivatives); a null
    // texture reads black but uHasTexture is 0 until one is attached.
    vec4 texCur = texture2D(uTexture, uv);
    vec4 texPrev = texture2D(uTexturePrev, uvPrev);
    // Each layer keeps its own correct cover framing during the dissolve, so
    // mismatched poster/video aspect ratios cross-dissolve instead of
    // snapping to a new crop.
    vec4 texColor = mix(texPrev, texCur, clamp(uSwap, 0.0, 1.0));
    color = mix(color, texColor, clamp(uHasTexture, 0.0, 1.0));

    if (uRadius > 0.0001) {
        // SDF rounded rectangle in plane space (height normalized to 1).
        float r = min(uRadius, min(0.5, planeAspect * 0.5));
        vec2 p = (vUv - 0.5) * vec2(planeAspect, 1.0);
        vec2 b = vec2(planeAspect, 1.0) * 0.5 - r;
        vec2 q = abs(p) - b;
        float sdf = length(max(q, vec2(0.0))) + min(max(q.x, q.y), 0.0) - r;
        float fw = max(fwidth(sdf), 0.0008);
        color.a *= 1.0 - smoothstep(-fw, fw, sdf);
    }

    gl_FragColor = color;
}
`, POST_VERTEX_SHADER = `
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`, POST_FRAGMENT_SHADER = `
uniform sampler2D tDiffuse;
uniform vec2 uMouse;
uniform vec2 uResolution;
uniform float uTime;
uniform float uMouseEnabled;
uniform float uMouseStrength;
uniform float uMouseEffect;   // 0 push, 1 pull, 2 swirl, 3 ripple, 4 noise
uniform float uMouseRadius;
uniform float uMouseChroma;
uniform float uMouseVel;      // 1, or smoothed cursor speed when React to Speed is on
uniform float uEdgeEnabled;
uniform float uEdgeStrength;
uniform float uEdgeEffect;    // 0 streaks, 1 liquid, 2 pixelate
uniform float uEdgeBand;
uniform float uEdgeHalfY;
uniform float uCenterY;
varying vec2 vUv;

vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }


float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m * m * m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}

float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 4; i++) {
        v += a * snoise(p);
        p = p * 2.1 + vec2(1.7, 9.2);
        a *= 0.5;
    }
    return v;
}

void main() {
    float t = uTime * 0.2;
    float ar = uResolution.x / max(uResolution.y, 1.0);

    float leftBand = 1.0 - smoothstep(0.0, uEdgeBand, vUv.x);
    float rightBand = smoothstep(1.0 - uEdgeBand, 1.0, vUv.x);
    float xMask = max(leftBand, rightBand);
    float mask = pow(xMask, 3.0) * 3.0;
    float maskY = max(1.0 - abs(vUv.y - uCenterY) / uEdgeHalfY, 0.0);
    float eAmt = mask * maskY * uEdgeEnabled * uEdgeStrength;

    // Mode-dispatched edge treatment, adapted from DistortoSlider transitions
    // so the two components can be paired. Only continuous, organic modes —
    // flickery/static/erosive transitions don't translate to an always-on
    // ambient effect.
    vec2 warpedUV = vUv;
    float decayScale = 1.0;

    // PERF 2026-10-13 (EDGE_GUARD): the fbm warps below are multiplied
    // by eAmt, which is exactly 0 outside the edge bands (most of the
    // frame), where they return vUv unchanged. Skipping the 8 simplex
    // evaluations there gives bit-identical output.
    if (uEdgeEffect < 0.5) {
        // streaks (original): vertically-stretched fbm smear
#ifdef EDGE_GUARD
        if (eAmt > 0.0) {
#endif
        vec2 noiseUV = vUv * 1000.0 + vec2(t * (step(vUv.x, 0.5) - 0.5) / 0.5, 0.0) * 10.0;
        float scale = mix(1.0, 1000.0, xMask);
        noiseUV.y -= 0.5;
        noiseUV.y *= scale;
        noiseUV.y += 0.5;
        float dx = fbm(noiseUV) * 0.1;
        float dy = fbm(noiseUV + vec2(5.3, 3.1)) * 0.1;
        warpedUV = vUv + vec2(dx, dy) * eAmt;
#ifdef EDGE_GUARD
        }
#endif
        decayScale = 1.0;
    } else if (uEdgeEffect < 1.5) {
        // liquid: soft organic fbm warp (pairs with Liquid Morph)
#ifdef EDGE_GUARD
        if (eAmt > 0.0) {
#endif
        vec2 nUv = vUv * 5.0 + vec2(t * 0.7, -t * 0.5);
        vec2 w = vec2(fbm(nUv), fbm(nUv + vec2(3.7, 8.1))) * 0.14;
        warpedUV = vUv + w * eAmt * 1.3;
#ifdef EDGE_GUARD
        }
#endif
        decayScale = 0.5;
    } else {
        // pixelate: mosaic snap growing toward the edges (pairs with Pixelate / Hex Mosaic)
        float pxAmt = clamp(eAmt, 0.0, 1.0);
        float px = mix(0.002, 0.05, pxAmt);
        vec2 pUV = (floor(vUv / px) + 0.5) * px;
        warpedUV = mix(vUv, pUV, smoothstep(0.05, 0.6, pxAmt));
        decayScale = 0.25;
    }

    // --- Mouse effect: mode-dispatched displacement around the cursor.
    // Push (mode 0) with radius 0.1, chroma 0, vel 1 reproduces the original
    // repulsion exactly.
    vec2 toMouse = warpedUV - uMouse;
    toMouse.x *= ar;
    float mDist = length(toMouse);
    float mStrength = 0.12 * uMouseStrength * uMouseVel;
    float mFall = 1.0 - smoothstep(0.0, uMouseRadius, mDist);
    mFall = mFall * mFall * mFall;
    vec2 mDir = normalize(toMouse / vec2(ar, 1.0) + vec2(1e-6));
    vec2 mDisp = vec2(0.0);
    if (uMouseEffect < 0.5) {
        // push: displace away from the cursor
        mDisp = -mDir * mFall * mStrength;
    } else if (uMouseEffect < 1.5) {
        // pull: lens-like attraction toward the cursor
        mDisp = mDir * mFall * mStrength;
    } else if (uMouseEffect < 2.5) {
        // swirl: rotate around the cursor, angle scaled by falloff
        float ang = mFall * mStrength * 24.0;
        float s = sin(ang);
        float c = cos(ang);
        vec2 rotated = vec2(c * toMouse.x - s * toMouse.y, s * toMouse.x + c * toMouse.y);
        mDisp = (rotated - toMouse) / vec2(ar, 1.0);
    } else if (uMouseEffect < 3.5) {
        // ripple: animated rings radiating from the cursor
        float wave = sin(mDist * 60.0 - uTime * 7.0);
        mDisp = -mDir * wave * mFall * mStrength;
    } else {
        // noise: fbm smear inside the cursor radius (mFall is exactly 0
        // outside it, where the smear is zero: EDGE_GUARD skips the fbm)
#ifdef EDGE_GUARD
        if (mFall > 0.0) {
#endif
        vec2 nUv = warpedUV * 18.0 + vec2(uTime * 0.4, -uTime * 0.3);
        mDisp = vec2(fbm(nUv), fbm(nUv + vec2(7.1, 3.7))) * mFall * mStrength * 1.8;
#ifdef EDGE_GUARD
        }
#endif
    }
    mDisp *= uMouseEnabled;

    vec4 col;
    if (uMouseChroma > 0.001) {
        // chromatic aberration along the displacement vector
        float split = uMouseChroma * 0.45;
        col = texture2D(tDiffuse, warpedUV + mDisp);
        col.r = texture2D(tDiffuse, warpedUV + mDisp * (1.0 - split)).r;
        col.b = texture2D(tDiffuse, warpedUV + mDisp * (1.0 + split)).b;
    } else {
        col = texture2D(tDiffuse, warpedUV + mDisp);
    }

    float colorDecay = max(smoothstep(1.0, 0.1, mask / 6.0), 0.1);
    col *= mix(1.0, colorDecay, uEdgeEnabled * decayScale);

    gl_FragColor = col;
}
`, flipYSupportPromise = null, parkedVideos = /* @__PURE__ */new Map(), win !== void 0) try {
      let e = performance.getEntriesByType(`navigation`)[0];
      if (!e || e.type !== `back_forward`) {
        let e = [];
        for (let n = 0; n < win.sessionStorage.length; n++) {
          let r = win.sessionStorage.key(n);
          r && r.indexOf(`curvyPos:`) === 0 && e.push(r);
        }
        e.forEach(e => win.sessionStorage.removeItem(e));
      }
    } catch {}
    maxParkedVideos = () => win !== void 0 && win.matchMedia?.(`(pointer: fine)`)?.matches ? 8 : 4, pendingGpuDisposal = null, gpuDisposalTimer = 0, DEFAULT_TITLE_FONT = {
      fontSize: `18px`,
      fontWeight: `600`,
      letterSpacing: `-0.01em`
    }, EDGE_EFFECT_INDEX = {
      streaks: 0,
      liquid: 1,
      pixelate: 2
    }, MOUSE_EFFECT_INDEX = {
      push: 0,
      pull: 1,
      swirl: 2,
      ripple: 3,
      noise: 4
    }, DEFAULT_COUNT_FONT = {
      fontSize: `12px`,
      letterSpacing: `0.12em`
    }, CurvyProjectShowcase.displayName = `Curvy Project Showcase`, undefined;
  }))();
}

// ? HUD de débogage « miralab » non extrait (autre audit). Hors ?miralab=hud, l'original renvoie null
// et l'instrumentation GL n'est jamais appelée : ces stubs reproduisent ce comportement visiteur.
function miraLabHud() {
  return null;
}
function miraLabInstrumentGL(gl) {}

initCurvyShowcaseModule();


initCurvyShowcaseModule();
export { CurvyProjectShowcase };
