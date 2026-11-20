// HeroSlider.js — « Project Showcase Slider » (DistortoSlider, LaunchNow Design) extrait du module de route
// de l'accueil (reference/framer/js/J_la0crrNhwxVDm3QRQL50OHFMp-MUpGrN-W8FsMusA.D3aw61EU.mjs ; lignes 6367-10495 du fichier embelli).
// Contient aussi LiveVideoThumb (les canvas 2D 90×50 des vignettes vidéo).
// Renommage par portée (TypeScript) vérifié : chaque identifiant pointe vers la même déclaration qu'à l'origine.
// Seules transformations : noms, commentaires, !0/!1/void 0 → true/false/undefined, chaînes GLSL → glsl(`fichier`).
// Doc : docs/WEBGL.md « Slider du hero ». Logique inchangée.

// Liaisons importées par le module de route : nom minifié d'origine → API réelle.
// (spécificateurs de module symboliques : chunks rolldown de Framer, voir reference/framer/js/)
import { __esmMin } from "rolldown:runtime"; // initialisation paresseuse des modules
import { window as win, navigator as nav, React, startTransition, useState, useRef, useMemo, useEffect, initEnv, initReact, initJsxRuntime } from "./react.DfujhmXs.mjs"; // window/navigator = globalThis.*, undefined côté SSR
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { addPropertyControls, ControlType, useIsStaticRenderer, initFramer } from "framer";
/* global glsl */
// glsl(nom) = texte GLSL verbatim de reference/webgl/hero-slider/shaders/<nom> (au portage : import « ?raw »).
// =====================================================================
// Outil de l'auteur « MiraLab » (HORS PÉRIMÈTRE du clone) : drapeaux lus dans
// ?miralab=a,b (mémorisés dans sessionStorage `miralab`) ; `before` = tous sauf `hud`.
// Drapeaux lus par le slider : hud, covtrace, dsdispose, dsdepth, dsvtex, dsprep,
// dsvid, dscover (désactivent une optimisation ou activent une trace).
// =====================================================================
function isMiraLabFlag(flag) {
  if (win === undefined) return false;
  let w = win;
  if (!w.__miraLab) {
    let flagsCsv = ``;
    try {
      let queryValue = new URLSearchParams(win.location.search).get(`miralab`);
      queryValue === null ? flagsCsv = win.sessionStorage.getItem(`miralab`) || `` : (flagsCsv = queryValue, win.sessionStorage.setItem(`miralab`, queryValue))
    } catch {}
    w.__miraLab = new Set(flagsCsv.split(`,`).map(e => e.trim()).filter(Boolean))
  }
  return w.__miraLab.has(flag) || flag !== `hud` && w.__miraLab.has(`before`)
}

// HUD de performance de l'auteur (?miralab=hud) : instrumente rAF, longtasks, WebGL et
// startViewTransition. Sans effet sur le rendu ; à ne pas porter.
function getMiraHud() {
  if (win === undefined || !isMiraLabFlag(`hud`)) return null;
  let w = win;
  if (w.__miraHud) return w.__miraHud;
  let hud = w.__miraHud = {
    tap: 0,
    tapped: false,
    target: ``,
    base: 0,
    gaps: [],
    marks: [],
    lt: [],
    gl: []
  };
  hud.mark = label => {
    hud.marks.some(t => t[1] === label) || hud.marks.push([Math.round(performance.now() - hud.tap), label])
  };
  let lastFrameTs = 0,
    onFrame = ts => {
      lastFrameTs && hud.gaps.push([ts - hud.tap, ts - lastFrameTs]), lastFrameTs = ts, hud.gaps.length > 6e3 && hud.gaps.splice(0, 2e3), win.requestAnimationFrame(onFrame)
    };
  win.requestAnimationFrame(onFrame), document.addEventListener(`click`, ev => {
    let link = ev.target?.closest?.(`a[href]`);
    if (!link) return;
    let recentGaps = hud.gaps.slice(-90).map(e => e[1]).sort((e, t) => e - t);
    hud.base = recentGaps.length ? recentGaps[Math.floor(recentGaps.length / 2)] : 0, hud.tap = performance.now(), hud.tapped = true, hud.target = new URL(link.href, location.href).pathname, hud.gaps = [], hud.marks = [], hud.lt = [], hud.gl = [], hud.slide0 = hud.slide1 = 0, lastFrameTs = 0, hud.mark(`tap`)
  }, true);
  try {
    new PerformanceObserver(list => {
      for (let entry of list.getEntries()) hud.lt.push([Math.round(entry.startTime - hud.tap), Math.round(entry.duration)])
    }).observe({
      type: `longtask`
    })
  } catch {}
  let instrumentGL = Ctor => {
    if (!Ctor) return;
    let proto = Ctor.prototype;
    for (let method of [`texImage2D`, `texSubImage2D`, `linkProgram`, `getProgramInfoLog`, `getShaderInfoLog`, `getProgramParameter`, `generateMipmap`, `readPixels`]) {
      let orig = proto[method];
      orig && (proto[method] = function() {
        let t0 = performance.now(),
          ret = orig.apply(this, arguments),
          dt = performance.now() - t0;
        if (dt > 1) {
          let lastArg = arguments[arguments.length - 1],
            tag = typeof HTMLVideoElement < `u` && lastArg instanceof HTMLVideoElement ? `:film` : typeof ImageBitmap < `u` && lastArg instanceof ImageBitmap || typeof HTMLImageElement < `u` && lastArg instanceof HTMLImageElement ? `:cover` : ``;
          hud.gl.push([Math.round(t0 - hud.tap), method + tag, dt])
        }
        return ret
      })
    }
    let origGetExtension = proto.getExtension;
    proto.getExtension = function(extName) {
      let ext = origGetExtension.apply(this, arguments);
      if (extName === `WEBGL_lose_context` && ext && !ext.__hud) {
        ext.__hud = 1;
        let origLose = ext.loseContext.bind(ext);
        ext.loseContext = () => {
          let t0 = performance.now();
          origLose(), hud.gl.push([Math.round(t0 - hud.tap), `loseContext`, performance.now() - t0])
        }
      }
      return ext
    }
  };
  instrumentGL(w.WebGLRenderingContext), instrumentGL(w.WebGL2RenderingContext);
  let origGetContext = HTMLCanvasElement.prototype.getContext;
  HTMLCanvasElement.prototype.getContext = function(ctxType) {
    let t0 = performance.now(),
      ctx = origGetContext.apply(this, arguments);
    return (ctxType === `webgl` || ctxType === `webgl2`) && hud.gl.push([Math.round(t0 - hud.tap), `getContext`, performance.now() - t0]), ctx
  };
  let origStartViewTransition = document.startViewTransition;
  return typeof origStartViewTransition == `function` && (document.startViewTransition = function() {
    let vt = origStartViewTransition.apply(document, arguments);
    return hud.tapped && (hud.mark(`swap start`), vt?.ready?.then(() => {
      hud.slide0 = performance.now() - hud.tap, hud.mark(`slide start`)
    }, () => {}), vt?.finished?.then(() => {
      hud.slide1 = performance.now() - hud.tap, hud.mark(`slide end`)
    }, () => {})), vt
  }), hud
}

function noop() {}

// Texture vidéo three.js : avec requestVideoFrameCallback, needsUpdate n'est levé qu'à chaque
// nouvelle image décodée (pas à chaque rendu). RGBFormat, LINEAR/LINEAR, sans mipmaps.
function createVideoTexture(THREE, video, debugFlag) {
  let v = video;
  if (isMiraLabFlag(debugFlag) || typeof v.requestVideoFrameCallback != `function`) return new THREE.VideoTexture(video);
  let tex = new THREE.Texture(video);
  tex.isVideoTexture = true, tex.format = THREE.RGBFormat, tex.minFilter = THREE.LinearFilter, tex.magFilter = THREE.LinearFilter, tex.generateMipmaps = false, tex.update = noop;
  let rvfcId = 0,
    alive = true,
    onVideoFrame = () => {
      alive && (tex.needsUpdate = true, rvfcId = v.requestVideoFrameCallback(onVideoFrame))
    };
  return rvfcId = v.requestVideoFrameCallback(onVideoFrame), tex.addEventListener(`dispose`, () => {
    alive = false;
    try {
      v.cancelVideoFrameCallback?.(rvfcId)
    } catch {}
  }), tex
}

// Safari/WebKit (iOS, iPadOS « MacIntel » tactile, Safari desktop) + fichier .webm :
// la vidéo est récupérée en Blob (fetch CORS) puis lue via une URL blob, et relancée à la main en fin.
function isWebMUrl(url) {
  if (!url) return false;
  try {
    let base = win === undefined ? `https://x/` : win.location.href;
    return /\.webm$/i.test(new URL(url, base).pathname)
  } catch {
    return /\.webm(?:$|[?#])/i.test(url)
  }
}

function isAppleWebKit() {
  if (nav === undefined) return false;
  let ua = nav.userAgent || ``,
    platform = nav.platform || ``,
    touchPoints = nav.maxTouchPoints || 0,
    isIOS = /iPad|iPhone|iPod/i.test(ua) || platform === `MacIntel` && touchPoints > 1,
    isDesktopSafari = nav.vendor === `Apple Computer, Inc.` && /AppleWebKit/i.test(ua) && !isIOS;
  return isIOS || isDesktopSafari
}

function needsBlobWebM(url) {
  return isAppleWebKit() && isWebMUrl(url)
}

function revokeBlobUrl(video) {
  let blobUrl = video.dataset.webglBlobUrl || ``;
  if (blobUrl) {
    try {
      URL.revokeObjectURL(blobUrl)
    } catch {}
    delete video.dataset.webglBlobUrl
  }
}

function flushPendingDispose() {
  if (!pendingDispose) return;
  win !== undefined && win.clearTimeout(pendingDisposeTimer);
  let fn = pendingDispose;
  pendingDispose = null;
  try {
    fn()
  } catch {}
}

// Exécute cb quand le fil principal est calme (pas d'image > 40 ms sur 4 rAF ni d'animation
// WAAPI finie en cours), via requestIdleCallback (timeout 1 s) ; au plus tard après maxWaitMs.
function whenMainThreadQuiet(cb, maxWaitMs) {
  let t0 = performance.now(),
    hasRunningAnimations = () => {
      try {
        let anims = document.getAnimations?.() || [];
        for (let anim of anims) {
          if (anim.playState !== `running`) continue;
          let endTime = anim.effect?.getComputedTiming?.().endTime;
          if (typeof endTime == `number` && Number.isFinite(endTime)) return true
        }
      } catch {}
      return false
    },
    run = () => {
      let w = win;
      typeof w.requestIdleCallback == `function` ? w.requestIdleCallback(cb, {
        timeout: 1e3
      }) : win.setTimeout(cb, 0)
    },
    probe = () => {
      if (performance.now() - t0 >= maxWaitMs) return run();
      let prevTs = 0,
        janks = 0,
        frames = 0,
        onFrame = ts => {
          if (prevTs && ts - prevTs > 40 && janks++, prevTs = ts, ++frames < 4) return win.requestAnimationFrame(onFrame);
          janks === 0 && !hasRunningAnimations() ? run() : win.setTimeout(probe, 300)
        };
      win.requestAnimationFrame(onFrame)
    };
  probe()
}

// =====================================================================
// Détecteur d'occultation : le slider est-il entièrement recouvert par des éléments
// opaques (sections qui défilent par-dessus) ? Échantillonne 3×3 points avec
// elementsFromPoint, retient les recouvrements opaques (fond alpha ≥ 0,999, sans
// transform tourné, filtre, masque, opacité < 1…), puis vérifie qu'ils couvrent toute
// la partie visible avec une marge (max(160 px, 20 % de la hauteur de fenêtre) en
// mouvement, 8 px à l'arrêt). onChange(true) → le slider coupe son rendu et ses vidéos.
// Revérification : scroll/resize (rAF), puis toutes les 100 ms (couvert) / 150 ms (douteux).
// =====================================================================
function createCoverDetector(el, onChange) {
  let active = false,
    alive = true,
    covered = false,
    occluders = [],
    lastScan = -1e9,
    raf = 0,
    timer = 0,
    hyst = {},
    trace = isMiraLabFlag(`covtrace`) ? win.__covTrace = [] : null,
    alphaOf = css => {
      let m = /rgba?\(([^)]+)\)/.exec(css || ``);
      if (!m) return 0;
      let parts = m[1].split(/[\s,\/]+/).filter(Boolean);
      return parts.length > 3 ? parseFloat(parts[3]) : 1
    },
    isRotatedOrSkewed = transform => {
      let m = /matrix\(([^)]+)\)/.exec(transform || ``);
      if (!m) return !!transform && transform !== `none`;
      let vals = m[1].split(`,`).map(parseFloat);
      return Math.abs(vals[1]) > 1e-6 || Math.abs(vals[2]) > 1e-6
    },
    asOccluder = node => {
      let cs = getComputedStyle(node);
      if (alphaOf(cs.backgroundColor) < .999) return null;
      let radius = Math.max(parseFloat(cs.borderTopLeftRadius) || 0, parseFloat(cs.borderTopRightRadius) || 0, parseFloat(cs.borderBottomLeftRadius) || 0, parseFloat(cs.borderBottomRightRadius) || 0),
        clips = [];
      for (let anc = node; anc && anc !== document.documentElement; anc = anc.parentElement) {
        let acs = anc === node ? cs : getComputedStyle(anc);
        if (acs.position === `fixed` || acs.visibility === `hidden` || acs.display === `none` || (parseFloat(acs.opacity) || 0) < .999 || acs.mixBlendMode && acs.mixBlendMode !== `normal` || acs.filter && acs.filter !== `none` || acs.clipPath && acs.clipPath !== `none` || acs.maskImage && acs.maskImage !== `none` || isRotatedOrSkewed(acs.transform)) return null;
        anc !== node && acs.display !== `contents` && (acs.overflowX !== `visible` || acs.overflowY !== `visible`) && clips.push(anc)
      }
      return {
        el: node,
        clips,
        inset: radius
      }
    },
    viewportRect = () => {
      let rect = el.getBoundingClientRect(),
        vw = win.innerWidth,
        vh = win.innerHeight,
        vis = {
          l: Math.max(rect.left, 0),
          t: Math.max(rect.top, 0),
          r: Math.min(rect.right, vw),
          b: Math.min(rect.bottom, vh)
        };
      return vis.r - vis.l < 1 || vis.b - vis.t < 1 ? null : {
        r: rect,
        V: vis,
        vh
      }
    },
    scanOccluders = vis => {
      let t0 = performance.now(),
        found = [],
        memo = new Map,
        fracs = [.5, .1, .9];
      for (let row = 0; row < 3; row++)
        for (let col = 0; col < 3; col++) {
          let x = vis.l + (vis.r - vis.l) * fracs[col],
            y = vis.t + (vis.b - vis.t) * fracs[row],
            hitSelf = false,
            hitCover = false;
          for (let hit of document.elementsFromPoint(x, y)) {
            if (hit === el || el.contains(hit)) {
              hitSelf = true;
              break
            }
            if (hit.contains(el)) continue;
            let known = memo.get(hit);
            if (known === undefined) {
              let occ = asOccluder(hit);
              known = !!occ, memo.set(hit, known), occ && found.push(occ)
            }
            known && (hitCover = true)
          }
          if (!hitSelf || !hitCover || performance.now() - t0 > 4) return false
        }
      return occluders = found, found.length > 0
    },
    measureCover = st => {
      let {
        r: rect,
        V: vis,
        vh
      } = st, spans = [];
      for (let occ of occluders) {
        if (!occ.el.isConnected) return 0;
        let br = occ.el.getBoundingClientRect(),
          left = br.left + occ.inset,
          top = br.top + occ.inset,
          right = br.right - occ.inset,
          bottom = br.bottom - occ.inset;
        for (let clip of occ.clips) {
          let cr = clip.getBoundingClientRect();
          left = Math.max(left, cr.left), top = Math.max(top, cr.top), right = Math.min(right, cr.right), bottom = Math.min(bottom, cr.bottom)
        }
        left > vis.l + .5 || right < vis.r - .5 || bottom <= top || spans.push([top, bottom])
      }
      spans.sort((e, t) => e[0] - t[0]);
      let spanTop = NaN,
        spanBottom = NaN;
      for (let span of spans)
        if (spanBottom === spanBottom && span[0] <= spanBottom + .5) spanBottom = Math.max(spanBottom, span[1]);
        else {
          if (spanTop === spanTop && spanTop <= vis.t + .5 && spanBottom >= vis.b - .5) break;
          spanTop = span[0], spanBottom = span[1]
        } if (!(spanTop <= vis.t + .5 && spanBottom >= vis.b - .5)) {
        for (let key in hyst) delete hyst[key];
        return 0
      }
      let margin = Math.max(160, vh * .2),
        extra = covered ? 0 : 8,
        passes = (edge, primary, secondary) => {
          let key = primary >= 0 ? edge + `h` : edge + `v`,
            value = primary >= 0 ? primary : secondary,
            moving = !(Math.abs(value - (hyst[key] ?? NaN)) < .5);
          return hyst[key] = value, delete hyst[primary >= 0 ? edge + `v` : edge + `h`], value >= (moving ? margin : 0) + extra
        },
        topOk = passes(`t`, rect.top - spanTop, vis.t - spanTop),
        bottomOk = passes(`b`, spanBottom - rect.bottom, spanBottom - vis.b);
      return trace && trace.push([Math.round(performance.now()), Math.round(win.scrollY), +(rect.top - spanTop).toFixed(2), +(spanBottom - rect.bottom).toFixed(2), +(vis.t - spanTop).toFixed(2), +(spanBottom - vis.b).toFixed(2), topOk && bottomOk ? 2 : 1]), topOk && bottomOk ? 2 : 1
    },
    setCovered = next => {
      next !== covered && (covered = next, win.clearTimeout(timer), timer = 0, next && (timer = win.setTimeout(check, 100)), onChange(next))
    };

  function check() {
    if (raf = 0, win.clearTimeout(timer), timer = 0, !alive || !active) return;
    let isCov = false,
      recheck = false;
    try {
      let st = viewportRect();
      if (st) {
        let level = occluders.length ? measureCover(st) : 0,
          now = performance.now();
        level === 0 && now - lastScan >= 120 ? (lastScan = now, occluders = [], scanOccluders(st.V) && (level = measureCover(st))) : level === 0 && (recheck = true), level === 1 && (recheck = true), isCov = level === 2
      }
    } catch {
      isCov = false
    }
    setCovered(isCov), !timer && (covered || recheck) && (timer = win.setTimeout(check, covered ? 100 : 150))
  }
  let schedule = () => {
    !raf && alive && active && (raf = win.requestAnimationFrame(check))
  };
  return win.addEventListener(`scroll`, schedule, {
    passive: true,
    capture: true
  }), win.addEventListener(`resize`, schedule, {
    passive: true
  }), {
    setActive(on) {
      if (on !== active) {
        if (active = on, on) schedule();
        else {
          raf && win.cancelAnimationFrame(raf), raf = 0, occluders = [];
          for (let key in hyst) delete hyst[key];
          covered = false, win.clearTimeout(timer), timer = 0
        }
      }
    },
    stop() {
      alive = false, active = false, raf && win.cancelAnimationFrame(raf), win.clearTimeout(timer), win.removeEventListener(`scroll`, schedule, {
        capture: true
      }), win.removeEventListener(`resize`, schedule)
    }
  }
}

// Libération GPU différée de 900 ms (DISPOSE_DELAY_MS), puis attente d'un fil principal calme
// (≤ 5 s) : évite un à-coup pendant une transition de page. Une seule libération en attente.
function scheduleDispose(fn) {
  if (win === undefined) try {
    fn()
  } catch {} else flushPendingDispose(), pendingDispose = fn, pendingDisposeTimer = win.setTimeout(isMiraLabFlag(`dsdispose`) ? flushPendingDispose : () => {
    pendingDispose === fn && whenMainThreadQuiet(() => {
      pendingDispose === fn && flushPendingDispose()
    }, 5e3)
  }, DISPOSE_DELAY_MS)
}

// Réserve de <video> détachées réutilisables (8 si pointeur fin, 4 sinon), clé = URL.
function parkVideoInPool(src, video) {
  try {
    video.pause()
  } catch {}
  try {
    video.remove()
  } catch {}
  try {
    video.currentTime > 0 && (video.currentTime = 0)
  } catch {}
  for (videoPool.delete(src), videoPool.set(src, video); videoPool.size > videoPoolMax();) {
    let oldest = videoPool.entries().next().value;
    if (!oldest) break;
    videoPool.delete(oldest[0]), oldest[1].removeAttribute(`src`), oldest[1].load(), revokeBlobUrl(oldest[1])
  }
}

// Largeur d'image visée pour les textures : min(1920, ceil(innerWidth × min(DPR, 2))).
function targetImageWidth() {
  if (win === undefined) return 1920;
  let dpr = Math.min(win.devicePixelRatio || 1, 2);
  return Math.min(1920, Math.ceil((win.innerWidth || 1920) * dpr))
}

// Source d'une vignette : la plus petite entrée du srcset ≥ max(160, largeur CSS × min(DPR, 2)).
function pickThumbSrc(image, cssWidth) {
  if (!image) return ``;
  let src = image.src || ``,
    srcSet = image.srcSet;
  if (!srcSet || typeof srcSet != `string`) return src;
  let dpr = win === undefined ? 2 : Math.min(win.devicePixelRatio || 1, 2);
  return pickFromSrcSet(srcSet, Math.max(160, Math.ceil(cssWidth * dpr))) || src
}

// Remonte le paramètre scale-down-to d'une URL framerusercontent au palier 512/1024/2048/4096 suffisant.
function bumpScaleDownTo(url, minWidth) {
  if (!url) return url;
  try {
    let u = new URL(url, win.location.href);
    if (!u.hostname.endsWith(`framerusercontent.com`)) return url;
    let current = parseFloat(u.searchParams.get(`scale-down-to`) || ``);
    if (!current || current >= minWidth) return url;
    let bucket = [512, 1024, 2048, 4096].find(e => e >= minWidth);
    return bucket ? u.searchParams.set(`scale-down-to`, String(bucket)) : u.searchParams.delete(`scale-down-to`), u.toString()
  } catch {
    return url
  }
}

// Choisit dans un srcset la 1re entrée de poids ≥ minWidth (sinon la plus grande).
function pickFromSrcSet(srcSet, minWidth = 1920) {
  let candidates = srcSet.split(`,`).map(e => e.trim()).filter(Boolean).map(e => {
    let parts = e.split(/\s+/),
      url = parts[0],
      descriptor = parts[1] || ``,
      weight = 0;
    return descriptor.endsWith(`w`) ? weight = parseFloat(descriptor) : descriptor.endsWith(`x`) && (weight = parseFloat(descriptor) * 1e3), {
      url,
      weight
    }
  }).filter(e => !!e.url);
  return candidates.length === 0 ? null : (candidates.sort((e, t) => e.weight - t.weight), (candidates.find(e => e.weight >= minWidth) || candidates[candidates.length - 1]).url)
}

// Attend que l'élément ne bouge plus (8 rAF consécutifs sans déplacement > 0,15 px et sans
// ancêtre d'opacité < 0,99 sur 6 niveaux) avant d'initialiser WebGL ; abandon de l'attente après 2,5 s.
function waitForStableLayout(getEl, isCancelled, onStable) {
  let t0 = performance.now(),
    prevRect = null,
    stableFrames = 0,
    tick = () => {
      if (isCancelled()) return;
      if (performance.now() - t0 > 2500) {
        onStable();
        return
      }
      let el = getEl();
      if (!el) {
        requestAnimationFrame(tick);
        return
      }
      let rect = el.getBoundingClientRect(),
        cur = [rect.x, rect.y, rect.width, rect.height],
        moved = !prevRect || cur.some((e, t) => Math.abs(e - prevRect[t]) > .15);
      prevRect = cur;
      let fading = false,
        node = el;
      for (let depth = 0; depth < 6 && node; depth++) {
        let op = parseFloat(win.getComputedStyle(node).opacity);
        if (Number.isFinite(op) && op < .99) {
          fading = true;
          break
        }
        node = node.parentElement
      }
      stableFrames = moved || fading ? 0 : stableFrames + 1, stableFrames >= 8 ? onStable() : requestAnimationFrame(tick)
    };
  requestAnimationFrame(tick)
}

// Lit les diapositives depuis le DOM du slot (liste de collection CMS rendue hors écran) :
// par enfant → <video> (currentSrc | src | <source>), <img> (srcset → largeur visée, sinon src),
// texte : 1re ligne = titre, 2e = statut (défaut "01", "02"…). Enfants sans média ignorés.
function readSlotSlides(host) {
  let first = host.firstElementChild,
    container = first instanceof HTMLElement && first.children.length > 0 ? first : host;
  return Array.from(container.children).filter(e => e instanceof HTMLElement).map((item, index) => {
    let video = item.querySelector(`video`),
      videoUrl = ``;
    video && (videoUrl = video.currentSrc || video.getAttribute(`src`) || video.querySelector(`source`)?.getAttribute(`src`) || ``);
    let img = item.querySelector(`img`),
      imageUrl = ``,
      srcset = img?.getAttribute(`srcset`);
    srcset && (imageUrl = pickFromSrcSet(srcset, targetImageWidth()) || ``), imageUrl ||= bumpScaleDownTo(img?.currentSrc || img?.getAttribute(`src`) || ``, targetImageWidth());
    let lines = (item.innerText || ``).split(`
`).map(e => e.trim()).filter(Boolean);
    return {
      imageUrl,
      imageSrcSet: srcset || ``,
      videoUrl,
      title: lines[0] || `Slide ${index+1}`,
      status: lines[1] || String(index + 1).padStart(2, `0`)
    }
  }).filter(e => !!(e.imageUrl || e.videoUrl))
}

function slotKey(items) {
  return JSON.stringify(items.map(e => [e.imageUrl, e.videoUrl, e.title, e.status]))
}

// Convertit la valeur d'un contrôle Font Framer en style CSS (graisse bornée 100–900, axe wght ajouté).
function fontControlToCss(font) {
  if (font == null) return {};
  if (typeof font == `string`) return {
    fontFamily: font
  };
  if (typeof font != `object`) return {};
  let css = {},
    family = font.fontFamily ?? font.family ?? font.font ?? font.name ?? font.fontName ?? undefined;
  family != null && (css.fontFamily = family);
  let size = font.fontSize ?? font.size ?? undefined;
  size != null && (css.fontSize = size);
  let lineHeight = font.lineHeight ?? font.leading ?? undefined;
  lineHeight != null && (css.lineHeight = lineHeight);
  let letterSpacing = font.letterSpacing ?? font.tracking ?? undefined;
  letterSpacing != null && (css.letterSpacing = letterSpacing);
  let textTransform = font.textTransform ?? undefined;
  textTransform != null && (css.textTransform = textTransform);
  let textAlign = font.textAlign ?? undefined;
  textAlign != null && (css.textAlign = textAlign);
  let variant = typeof font.variant == `string` ? font.variant : undefined,
    variantDef = variant ? FONT_VARIANTS[variant] : undefined,
    weight = font.fontWeight;
  if (weight ??= font.weight, weight ??= variantDef?.fontWeight, weight ??= 400, typeof weight == `string`) {
    let num = parseFloat(weight);
    weight = Number.isFinite(num) ? num : 400
  }(typeof weight != `number` || !Number.isFinite(weight)) && (weight = 400), weight = Math.max(100, Math.min(900, Math.round(weight))), css.fontWeight = weight;
  let fontStyle = variantDef?.fontStyle ?? font.fontStyle ?? font.style ?? undefined;
  if (fontStyle != null && (css.fontStyle = fontStyle), font.fontVariationSettings != null || font[`font-variation-settings`] != null || typeof variant == `string` && variant.length > 0) {
    let fvs = font.fontVariationSettings ?? font[`font-variation-settings`] ?? ``,
      wght = `'wght' ${weight}`,
      merged = typeof fvs == `string` && fvs.trim().length ? fvs.includes(`'wght'`) || fvs.includes(`"wght"`) ? fvs : `${fvs}, ${wght}` : wght;
    css.fontVariationSettings = merged, css[`font-variation-settings`] = merged
  }
  return css
}

// =====================================================================
// LiveVideoThumb — vignette vidéo « live » (thumbVideoPreview = "live") : recopie dans un
// <canvas> 2D (taille = boîte × min(DPR, 2)) la <video> du slider de même URL, à chaque image
// décodée (requestVideoFrameCallback, sinon rAF + 16 ms), en « cover » centré. Le poster <img>
// reste affiché jusqu'à la 1re image + 400 ms. C'est l'origine des canvas 90×50 de l'accueil.
// =====================================================================
function LiveVideoThumb(props) {
  let wrapRef = useRef(null),
    canvasRef = useRef(null),
    [hasFrame, setHasFrame] = useState(false),
    [posterHidden, setPosterHidden] = useState(false);
  useEffect(() => {
    if (!hasFrame) {
      setPosterHidden(false);
      return
    }
    let timer = win.setTimeout(() => setPosterHidden(true), 400);
    return () => win.clearTimeout(timer)
  }, [hasFrame]);
  let {
    srcUrl,
    posterSrc,
    posterAlt,
    getVideos,
    wrapperStyle
  } = props;
  return useEffect(() => {
    if (win === undefined || !srcUrl) return;
    let wrap = wrapRef.current,
      cnv = canvasRef.current;
    if (!wrap || !cnv) return;
    let ctx = cnv.getContext(`2d`);
    if (!ctx) return;
    let stopped = false,
      video = null,
      rvfcId = null,
      rafId = null,
      retryTimer, drawn = false,
      matchesSrc = v => {
        let orig = v.dataset.webglOriginalSrc || ``,
          cur = v.currentSrc || v.src || ``;
        return orig === srcUrl || cur === srcUrl || cur && srcUrl.endsWith(cur.split(`/`).pop() || `\0`)
      },
      sizeCanvas = () => {
        let rect = wrap.getBoundingClientRect(),
          dpr = Math.min(win.devicePixelRatio || 1, 2),
          w = Math.max(1, Math.round(rect.width * dpr)),
          h = Math.max(1, Math.round(rect.height * dpr));
        (cnv.width !== w || cnv.height !== h) && (cnv.width = w, cnv.height = h)
      },
      drawFrame = () => {
        if (!video || video.readyState < 2) return;
        let vw = video.videoWidth,
          vh = video.videoHeight;
        if (!vw || !vh) return;
        let cw = cnv.width,
          ch = cnv.height,
          scale = Math.max(cw / vw, ch / vh),
          sw = cw / scale,
          sh = ch / scale;
        try {
          ctx.drawImage(video, (vw - sw) / 2, (vh - sh) / 2, sw, sh, 0, 0, cw, ch), drawn || (drawn = true, setHasFrame(true))
        } catch {}
      },
      scheduleNext = () => {
        if (stopped || !video) return;
        let v = video;
        typeof v.requestVideoFrameCallback == `function` ? rvfcId = v.requestVideoFrameCallback(onFrame) : rafId = win.requestAnimationFrame(() => win.setTimeout(onFrame, 16))
      },
      onFrame = () => {
        stopped || (!video || !document.contains(video) ? (video = null, drawn = false, setHasFrame(false), findVideo()) : (drawFrame(), scheduleNext()))
      },
      findVideo = () => {
        if (stopped || video) return;
        let match = getVideos().find(e => document.contains(e) && matchesSrc(e));
        match ? (video = match, sizeCanvas(), drawFrame(), scheduleNext()) : retryTimer = win.setTimeout(findVideo, 500)
      },
      ro = new ResizeObserver(() => {
        sizeCanvas(), drawFrame()
      });
    return ro.observe(wrap), sizeCanvas(), findVideo(), () => {
      if (stopped = true, retryTimer !== undefined && win.clearTimeout(retryTimer), rafId != null && cancelAnimationFrame(rafId), rvfcId != null && video && typeof video.cancelVideoFrameCallback == `function`) try {
        video.cancelVideoFrameCallback(rvfcId)
      } catch {}
      ro.disconnect()
    }
  }, [srcUrl]), jsxs(`div`, {
    ref: wrapRef,
    style: {
      ...wrapperStyle,
      position: `relative`,
      overflow: `hidden`
    },
    children: [posterSrc && !posterHidden ? jsx(`img`, {
      src: posterSrc,
      alt: posterAlt,
      crossOrigin: `anonymous`,
      loading: `lazy`,
      decoding: `async`,
      style: {
        position: `absolute`,
        inset: 0,
        width: `100%`,
        height: `100%`,
        objectFit: `cover`,
        display: `block`
      }
    }) : null, jsx(`canvas`, {
      ref: canvasRef,
      style: {
        position: `absolute`,
        inset: 0,
        width: `100%`,
        height: `100%`,
        display: `block`
      }
    })]
  })
}

// Fragment shader effectif d'une transition : préfixe (transition-prefix.glsl : uniforms de
// recadrage cover + `direction`, macros texCurrent/texNext) + fragment de la transition dont
// chaque texture2D(currentImage|nextImage, …) est réécrit en texCurrent(…)/texNext(…).
function buildFragmentShader(effectKey) {
  return `uniform vec2 currentRepeat;
        uniform vec2 currentOffset;
        uniform vec2 nextRepeat;
        uniform vec2 nextOffset;
        uniform float direction;
        #define texCurrent(uv) texture2D(currentImage, (uv) * currentRepeat + currentOffset)
        #define texNext(uv) texture2D(nextImage, (uv) * nextRepeat + nextOffset)
${(TRANSITIONS[effectKey]||TRANSITIONS.liquidMorph).fragment.replaceAll(`texture2D(currentImage,`,`texCurrent(`).replaceAll(`texture2D(nextImage,`,`texNext(`)}`
}

// Hôte hors écran (left −99999 px, 1×1, opacity 0) qui rend le slot CMS sans l'afficher.
function SlotHost(props) {
  return jsx(`div`, {
    ref: props.hostRef,
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
    children: props.children
  })
}

// Dégradé bas : linear-gradient(to top, couleur à maxOpacity, couleur à minOpacity) sur `gradientHeight` %.
function BottomGradient(props) {
  let {
    gradientHeight,
    gradientColor,
    gradientMaxOpacity,
    gradientMinOpacity,
    style
  } = props;
  return jsx(`div`, {
    style: {
      position: `absolute`,
      left: 0,
      right: 0,
      bottom: 0,
      height: `${gradientHeight}%`,
      background: `linear-gradient(to top, color-mix(in srgb, ${gradientColor} ${gradientMaxOpacity*100}%, transparent), color-mix(in srgb, ${gradientColor} ${gradientMinOpacity*100}%, transparent))`,
      pointerEvents: `none`,
      ...style
    }
  })
}

// Média d'une diapositive en DOM (poster avant WebGL, ou rendu statique / diapositive unique).
function SlideMedia(props) {
  let {
    slide,
    borderRadius,
    posterOnly,
    imgAspectRatio
  } = props;
  if (!slide) return null;
  let mediaStyle = {
    width: `100%`,
    height: `100%`,
    objectFit: `cover`,
    objectPosition: `center`,
    borderRadius,
    display: `block`
  };
  if (posterOnly) {
    let img = slide.mediaType === `video` ? slide.posterImage : slide.image;
    return img?.src ? jsx(`img`, {
      src: img.src,
      srcSet: img.srcSet || undefined,
      sizes: `100vw`,
      alt: ``,
      crossOrigin: `anonymous`,
      fetchpriority: `high`,
      decoding: `async`,
      style: mediaStyle
    }) : null
  }
  if (slide.mediaType === `video`) {
    let poster = slide.posterImage?.srcSet && pickFromSrcSet(slide.posterImage.srcSet, targetImageWidth()) || slide.posterImage?.src;
    return jsx(`video`, {
      src: slide.videoFile,
      poster: poster || undefined,
      crossOrigin: `anonymous`,
      muted: true,
      playsInline: true,
      loop: true,
      autoPlay: true,
      style: mediaStyle
    })
  }
  return jsx(`img`, {
    src: slide.image?.src,
    srcSet: slide.image?.srcSet || undefined,
    sizes: `100vw`,
    alt: slide.image?.alt || ``,
    crossOrigin: `anonymous`,
    fetchpriority: `high`,
    decoding: `async`,
    style: {
      ...mediaStyle,
      ...imgAspectRatio ? {
        aspectRatio: imgAspectRatio
      } : {}
    }
  })
}

// Rail de vignettes : boutons (aria-label "Go to slide N: titre"), vignette active décalée de
// tNudge px, inactives à inactiveThumbOpacity ; barre de progression d'autoplay sur l'active.
function Thumbnails(props) {
  let {
    slides,
    active,
    onSelect,
    staticRender,
    thumbVideoPreview,
    getVideos,
    tW,
    tH,
    tGap,
    tRadius,
    tMarginX,
    tMarginY,
    tNudge,
    thumbStack,
    thumbPosition,
    thumbVerticalPos,
    innerPaddingEdges,
    showThumbLabels,
    thumbLabelColor,
    thumbLabelCSS,
    thumbHighlightColor,
    inactiveThumbOpacity,
    zIndex,
    showProgress,
    overlayRef,
    progressRef,
    thumbOverlayColor,
    thumbOverlayOpacity,
    thumbOverlayHeight,
    thumbOverlayBlend
  } = props, isColumn = thumbStack === `column`, isRight = isColumn && thumbPosition === `right`, isLeftColumn = isColumn && !isRight, activeShift = e => e === active ? isColumn ? thumbVerticalPos === `top` ? `translateY(${-tNudge}px)` : thumbVerticalPos === `bottom` ? `translateY(${tNudge}px)` : isLeftColumn ? `translateX(${-tNudge}px)` : `translateX(${tNudge}px)` : thumbVerticalPos === `top` ? `translateY(${tNudge}px)` : `translateY(${-tNudge}px)` : `none`, mediaStyle = (e, t = {}) => ({
    display: `block`,
    width: `100%`,
    height: `100%`,
    objectFit: `cover`,
    opacity: e === active ? 1 : inactiveThumbOpacity,
    transition: `opacity 0.3s ease`,
    pointerEvents: `none`,
    userSelect: `none`,
    boxSizing: `border-box`,
    minWidth: 0,
    minHeight: 0,
    ...t
  });
  return jsx(`div`, {
    style: {
      position: `absolute`,
      left: thumbPosition === `left` ? tMarginX + innerPaddingEdges.left : thumbPosition === `center` ? `50%` : `auto`,
      right: thumbPosition === `right` ? tMarginX + innerPaddingEdges.right : `auto`,
      top: thumbVerticalPos === `top` ? tMarginY + innerPaddingEdges.top : thumbVerticalPos === `center` ? `calc(50% + ${tMarginY}px)` : `auto`,
      bottom: thumbVerticalPos === `bottom` ? tMarginY + innerPaddingEdges.bottom : `auto`,
      transform: (() => {
        let tf = `${thumbPosition===`center`?`translateX(-50%)`:``} ${thumbVerticalPos===`center`?`translateY(-50%)`:``}`.trim();
        return tf.length ? tf : `none`
      })(),
      zIndex,
      display: `flex`,
      flexDirection: isColumn ? `column` : `row`,
      gap: tGap,
      alignItems: `center`
    },
    children: slides.map((slide, i) => jsxs(`button`, {
      "aria-label": `Go to slide ${i+1}${slide.title?`: ${slide.title}`:``}`,
      "aria-current": i === active,
      onClick: () => onSelect(i),
      style: {
        width: tW,
        height: tH,
        padding: 0,
        borderRadius: tRadius,
        border: `none`,
        outline: i === active ? `2px solid ${thumbHighlightColor}` : `none`,
        outlineOffset: -2,
        cursor: `pointer`,
        overflow: `visible`,
        boxShadow: `none`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        background: `none`,
        boxSizing: `border-box`,
        position: `relative`,
        transform: activeShift(i),
        transition: `transform 0.25s ease`,
        willChange: `transform`
      },
      children: [!isColumn && i === active && showThumbLabels && jsxs(`div`, {
        style: {
          position: `absolute`,
          bottom: thumbVerticalPos === `top` ? `auto` : `100%`,
          top: thumbVerticalPos === `top` ? `100%` : `auto`,
          left: 0,
          right: 0,
          display: `flex`,
          justifyContent: `space-between`,
          alignItems: `center`,
          marginBottom: thumbVerticalPos === `top` ? 0 : 4,
          marginTop: thumbVerticalPos === `top` ? 4 : 0,
          pointerEvents: `none`,
          whiteSpace: `nowrap`
        },
        children: [ jsx(`span`, {
          style: {
            ...thumbLabelCSS,
            color: thumbLabelColor,
            whiteSpace: `nowrap`,
            width: `max-content`
          },
          children: slide.title
        }), jsx(`span`, {
          style: {
            ...thumbLabelCSS,
            color: thumbLabelColor,
            whiteSpace: `nowrap`,
            width: `max-content`
          },
          children: slide.status
        })]
      }), isColumn && i === active && showThumbLabels && jsxs(`div`, {
        style: {
          position: `absolute`,
          top: `50%`,
          transform: `translateY(-50%)`,
          left: isLeftColumn ? `100%` : `auto`,
          right: isRight ? `100%` : `auto`,
          display: `flex`,
          flexDirection: `column`,
          alignItems: isLeftColumn ? `flex-start` : `flex-end`,
          gap: 2,
          paddingLeft: isLeftColumn ? 8 : 0,
          paddingRight: isRight ? 8 : 0,
          pointerEvents: `none`,
          whiteSpace: `nowrap`
        },
        children: [ jsx(`span`, {
          style: {
            ...thumbLabelCSS,
            color: thumbLabelColor,
            whiteSpace: `nowrap`,
            width: `max-content`
          },
          children: slide.title
        }), jsx(`span`, {
          style: {
            ...thumbLabelCSS,
            color: thumbLabelColor,
            whiteSpace: `nowrap`,
            width: `max-content`
          },
          children: slide.status
        })]
      }), jsx(`div`, {
        style: {
          width: `100%`,
          height: `100%`,
          overflow: `hidden`,
          borderRadius: tRadius,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`
        },
        children: slide.mediaType === `video` && thumbVideoPreview !== `live` && slide.posterImage?.src ? jsx(`img`, {
          src: pickThumbSrc(slide.posterImage, tW),
          alt: slide.posterImage?.alt || ``,
          crossOrigin: `anonymous`,
          loading: `lazy`,
          decoding: `async`,
          style: mediaStyle(i, {
            aspectRatio: `${tW}/${tH}`
          })
        }) : slide.mediaType === `video` ? staticRender ? jsx(`video`, {
          src: slide.videoFile,
          crossOrigin: `anonymous`,
          poster: slide.posterImage?.src || undefined,
          muted: true,
          playsInline: true,
          loop: true,
          autoPlay: true,
          preload: `metadata`,
          style: mediaStyle(i)
        }) : jsx(LiveVideoThumb, {
          srcUrl: slide.videoFile || ``,
          posterSrc: pickThumbSrc(slide.posterImage, tW),
          posterAlt: slide.posterImage?.alt || ``,
          getVideos,
          wrapperStyle: mediaStyle(i)
        }) : jsx(`img`, {
          src: pickThumbSrc(slide.image, tW),
          alt: slide.image?.alt || ``,
          crossOrigin: `anonymous`,
          loading: `lazy`,
          decoding: `async`,
          style: mediaStyle(i, {
            aspectRatio: `${tW}/${tH}`
          })
        })
      }), showProgress && i === active && jsx(`div`, {
        style: {
          position: `absolute`,
          inset: 0,
          borderRadius: tRadius,
          overflow: `hidden`,
          pointerEvents: `none`
        },
        children: jsx(`div`, {
          ref: overlayRef,
          style: {
            position: `absolute`,
            bottom: 0,
            left: 0,
            right: 0,
            height: `${thumbOverlayHeight}%`,
            width: `100%`,
            transform: `scaleX(${Math.max(0,Math.min(1,progressRef?.current??0))})`,
            transformOrigin: `left center`,
            background: thumbOverlayColor,
            opacity: thumbOverlayOpacity,
            mixBlendMode: thumbOverlayBlend,
            pointerEvents: `none`,
            transition: `none`,
            willChange: `transform`,
            boxSizing: `border-box`
          }
        })
      })]
    }, i))
  })
}

// État vide (« Connect to Content ») affiché dans l'éditeur sans diapositive.
function EmptyState() {
  return jsxs(`div`, {
    style: {
      position: `absolute`,
      inset: 0,
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      justifyContent: `center`,
      gap: 10,
      background: `#1E1A29`,
      fontFamily: `'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif`,
      textAlign: `center`,
      padding: 24,
      boxSizing: `border-box`
    },
    children: [ jsx(`div`, {
      style: {
        fontWeight: 700,
        fontSize: 15,
        color: `#9265FF`
      },
      children: `Connect to Content`
    }), jsx(`div`, {
      style: {
        maxWidth: 380,
        lineHeight: 1.5,
        fontSize: 15,
        color: `rgba(146,101,255,0.75)`
      },
      children: `Add slides under Content, or connect a Collection List to the Slot.`
    })]
  })
}

// =====================================================================
// DistortoSlider — composant de code « Project Showcase Slider » (LaunchNow Design) :
// diaporama plein cadre rendu par three.js r136 (chargé à la demande), transitions GLSL
// entre deux textures (image ou vidéo), effet de souris en post-traitement, vignettes,
// autoplay, glisser, zones de clic, clavier. Valeurs de l'accueil : HOME_INSTANCE_PROPS
// en fin de fichier.
// =====================================================================
function DistortoSlider(props) {
  let {
    preloaderSync = `reveal`,
    slides = [],
    slot = undefined,
    thumbVideoPreview = `poster`,
    tapZones = true,
    swipeNav = true,
    thumbZIndex = 3,
    background = `#000000`,
    transitionDuration = 1.8,
    style,
    borderRadius = 0,
    padding = `16px`,
    imagePadding = `0px`,
    autoTransition = true,
    pauseOnHover = true,
    autoTransitionTimer = 5,
    thumbSize = {
      width: 130,
      height: 72
    },
    thumbSpacing = 4,
    thumbRadius = 0,
    thumbHighlightColor = `#FFFFFF00`,
    thumbOverlayColor = `#FFFFFF`,
    thumbOverlayOpacity = 1,
    thumbOverlayBlend = `normal`,
    transitionEffect = `liquidMorph`,
    mouseWarp = true,
    mouseWarpStrength = 1,
    mouseEffect = `push`,
    mouseRadius = .1,
    mouseChroma = 0,
    mouseSpeedReact = false,
    thumbPosition = `center`,
    thumbVerticalPos = `bottom`,
    thumbStack = `row`,
    showThumbnails = true,
    thumbMarginX = 0,
    thumbMarginY = 0,
    thumbLabelFont = {},
    thumbLabelColor = `#FFFFFF`,
    showThumbLabels = true,
    inactiveThumbOpacity = .4,
    gradientHeight = 55,
    gradientColor = `#000000`,
    gradientMaxOpacity = .75,
    gradientMinOpacity = 0,
    thumbOverlayHeight = 2
  } = {
    ...props,
    ...props?.Content || {},
    ...props?.Layout || {},
    ...props?.Transition || {},
    ...props?.Mouse || {},
    ...props?.Thumbs || {},
    ...props?.Labels || {},
    ...props?.Gradient || {},
    ...props?.Style || {}
  }, isStatic = useIsStaticRenderer(), rootRef = useRef(null), canvasHostRef = useRef(null), progressBarRef = useRef(null), renderingRef = useRef(false), [isVisible, setIsVisible] = useState(false), [parked, setParked] = useState(() => preloaderSync !== `off`), parkedRef = useRef(preloaderSync !== `off`);
  // Synchronisation avec le préchargeur (preloaderSync) : « parked » = figé sur la 1re image
  // (vidéos en pause à 0, autoplay suspendu). Libéré à portal:preloader-reveal ("reveal") ou
  // portal:preloader-done ; sans préchargeur actif, libéré après 300 ms.
  useEffect(() => {
    parkedRef.current = parked
  }, [parked]), useEffect(() => {
    if (preloaderSync === `off`) {
      parkedRef.current = false, setParked(false);
      return
    }
    if (win === undefined) return;
    let released = false,
      release = () => {
        released || (released = true, parkedRef.current = false, setParked(false))
      },
      preloaderState = win.__portalPreloader;
    if (preloaderState && preloaderState.active === false) {
      release();
      return
    }
    let onReveal = () => {
      preloaderSync === `reveal` && release()
    };
    win.addEventListener(`portal:preloader-reveal`, onReveal), win.addEventListener(`portal:preloader-done`, release);
    let fallbackTimer = 0,
      cancelFallback = null;
    return preloaderState || (fallbackTimer = win.setTimeout(release, 300), cancelFallback = () => win.clearTimeout(fallbackTimer), win.addEventListener(`portal:preloader-active`, cancelFallback, {
      once: true
    })), () => {
      fallbackTimer && win.clearTimeout(fallbackTimer), cancelFallback && win.removeEventListener(`portal:preloader-active`, cancelFallback), win.removeEventListener(`portal:preloader-reveal`, onReveal), win.removeEventListener(`portal:preloader-done`, release)
    }
  }, [preloaderSync]);
  let [reducedMotion, setReducedMotion] = useState(false), reducedMotionRef = useRef(false);
  useEffect(() => {
    if (win === undefined || !win.matchMedia) return;
    let mql = win.matchMedia(`(prefers-reduced-motion: reduce)`),
      sync = () => {
        reducedMotionRef.current = mql.matches, setReducedMotion(mql.matches)
      };
    sync();
    try {
      return mql.addEventListener(`change`, sync), () => mql.removeEventListener(`change`, sync)
    } catch {
      return mql.addListener(sync), () => mql.removeListener(sync)
    }
  }, []);
  let parsePadding = value => {
      if (typeof value == `number`) return {
        top: value,
        right: value,
        bottom: value,
        left: value
      };
      if (typeof value == `string`) {
        let num = parseFloat(value),
          v = Number.isFinite(num) ? num : 0;
        return {
          top: v,
          right: v,
          bottom: v,
          left: v
        }
      }
      return value && typeof value == `object` ? {
        top: parseFloat(value.top ?? `0`) || 0,
        right: parseFloat(value.right ?? `0`) || 0,
        bottom: parseFloat(value.bottom ?? `0`) || 0,
        left: parseFloat(value.left ?? `0`) || 0
      } : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },
    thumbInset = useMemo(() => parsePadding(padding), [padding]),
    slotHostRef = useRef(null),
    slotKeyRef = useRef(``),
    [slotSlides, setSlotSlides] = useState([]),
    hasSlot = !!slot,
    [slotGaveUp, setSlotGaveUp] = useState(false);
  useEffect(() => {
    if (!hasSlot) return;
    let timer = win.setTimeout(() => setSlotGaveUp(true), 700);
    return () => win.clearTimeout(timer)
  }, [hasSlot]);
  let readSlot = React.useCallback(() => {
    let host = slotHostRef.current;
    if (!host) return;
    let items = readSlotSlides(host),
      key = slotKey(items);
    key !== slotKeyRef.current && (slotKeyRef.current = key, startTransition(() => setSlotSlides(items)))
  }, []);
  useEffect(() => {
    if (win === undefined) return;
    let host = slotHostRef.current;
    if (!host) return;
    let debounce = 0,
      observer = new MutationObserver(() => {
        win.clearTimeout(debounce), debounce = win.setTimeout(() => readSlot(), 80)
      });
    observer.observe(host, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: [`src`, `srcset`, `style`]
    });
    let raf = win.requestAnimationFrame(() => readSlot()),
      timer = win.setTimeout(() => readSlot(), 240);
    return () => {
      win.clearTimeout(debounce), win.clearTimeout(timer), win.cancelAnimationFrame(raf), observer.disconnect()
    }
  }, [readSlot, slot]);
  let resolvedSlides = useMemo(() => {
      let srcOf = e => e ? typeof e == `string` ? e : e.src || e.url || `` : ``,
        altOf = e => !e || typeof e == `string` ? `` : e.alt || ``;
      if (hasSlot && slotSlides.length === 0 && !slotGaveUp) return [];
      if (hasSlot && slotSlides.length > 0) {
        let fromSlot = slotSlides.map((e, t) => ({
          mediaType: e.videoUrl ? `video` : `image`,
          image: e.videoUrl ? undefined : {
            src: e.imageUrl,
            srcSet: e.imageSrcSet || undefined,
            alt: e.title || `Slide ${t+1}`
          },
          videoFile: e.videoUrl || undefined,
          posterImage: e.videoUrl && e.imageUrl ? {
            src: e.imageUrl,
            srcSet: e.imageSrcSet || undefined,
            alt: e.title || `Slide ${t+1}`
          } : undefined,
          title: e.title || `Slide ${t+1}`,
          status: e.status || String(t + 1).padStart(2, `0`)
        })).filter(e => e.mediaType === `video` ? !!e.videoFile : !!e.image?.src);
        if (fromSlot.length) return fromSlot
      }
      let manual = (Array.isArray(slides) ? slides : []).map((item, index) => {
        let type = item?.mediaType === `video` ? `video` : `image`,
          imageSrc = srcOf(item?.image),
          posterSrc = srcOf(item?.posterImage),
          uploaded = typeof item?.videoFile == `string` ? item.videoFile : ``,
          videoSrc = (typeof item?.videoURL == `string` ? item.videoURL.trim() : ``) || uploaded;
        return {
          mediaType: type,
          image: type === `image` ? {
            src: imageSrc,
            srcSet: item?.image?.srcSet || undefined,
            alt: altOf(item?.image) || `Slide ${index+1}`
          } : undefined,
          videoFile: type === `video` ? videoSrc : undefined,
          posterImage: type === `video` && posterSrc ? {
            src: posterSrc,
            srcSet: item?.posterImage?.srcSet || undefined,
            alt: altOf(item?.posterImage) || `Slide ${index+1}`
          } : undefined,
          title: typeof item?.title == `string` ? item.title : `Title`,
          status: typeof item?.status == `string` ? item.status : `Status`
        }
      }).filter(e => e.mediaType === `video` ? !!e.videoFile : !!e.image?.src);
      return manual.length ? manual : []
    }, [slides, slotSlides, hasSlot, slotGaveUp]),
    slidesRef = useRef(resolvedSlides);
  useEffect(() => {
    slidesRef.current = resolvedSlides
  });
  let mediaKey = useMemo(() => {
      try {
        return JSON.stringify(resolvedSlides.map(e => ({
          type: e.mediaType || `image`,
          src: e.mediaType === `video` ? e.videoFile || `` : e.image?.src || ``,
          poster: e.mediaType === `video` && e.posterImage?.src || ``
        })))
      } catch {
        return String(resolvedSlides.length)
      }
    }, [resolvedSlides]),
    videoDurationsRef = useRef({}),
    videoBySrcRef = useRef({}),
    [activeIndex, setActiveIndex] = useState(0),
    activeIndexRef = useRef(0);
  useEffect(() => {
    activeIndexRef.current = activeIndex
  }, [activeIndex]);
  let mouseCfgRef = useRef({
    mouseWarp,
    mouseWarpStrength,
    mouseEffect,
    mouseRadius,
    mouseChroma,
    mouseSpeedReact
  });
  useEffect(() => {
    mouseCfgRef.current = {
      mouseWarp,
      mouseWarpStrength,
      mouseEffect,
      mouseRadius,
      mouseChroma,
      mouseSpeedReact
    }
  }, [mouseWarp, mouseWarpStrength, mouseEffect, mouseRadius, mouseChroma, mouseSpeedReact]);
  let effectRef = useRef(transitionEffect),
    durationRef = useRef(transitionDuration),
    thumbPreviewRef = useRef(thumbVideoPreview);
  useEffect(() => {
    effectRef.current = transitionEffect, durationRef.current = transitionDuration, thumbPreviewRef.current = thumbVideoPreview
  }, [transitionEffect, transitionDuration, thumbVideoPreview]), useEffect(() => {
    activeIndex >= resolvedSlides.length && setActiveIndex(0)
  }, [resolvedSlides.length]);
  let progressValueRef = useRef(0),
    progressAnimRef = useRef(null),
    progressRafRef = useRef(null),
    videoElsRef = useRef([]),
    [glReady, setGlReady] = useState(false),
    transitioningRef = useRef(false),
    transitionGenRef = useRef(0),
    [autoplayResetKey, setAutoplayResetKey] = useState(0),
    mediaStateRef = useRef(null),
    [rebuildKey, setRebuildKey] = useState(0),
    firstMediaRunRef = useRef(true);
  useEffect(() => {
    firstMediaRunRef.current ? (firstMediaRunRef.current = false, mediaStateRef.current = {
      media: mediaKey,
      background,
      imagePadding
    }) : (mediaStateRef.current = {
      media: mediaKey,
      background,
      imagePadding
    }, setRebuildKey(e => e + 1))
  }, [mediaKey, background, imagePadding]);
  let setProgressBar = v => {
    let bar = progressBarRef.current;
    bar && (bar.style.transform = `scaleX(${Math.max(0,Math.min(1,v))})`)
  };
  useEffect(() => {
    // Autoplay : barre de progression (WAAPI linéaire, scaleX 0→1) sur autoTransitionTimer s,
    // ou sur la durée restante de la vidéo active (− transitionDuration, min 1 s) si elle est connue ;
    // puis passage à la diapositive suivante (boucle modulo) et nouveau cycle après transitionDuration.
    // Suspendu si invisible, parked, reduced motion ou ≤ 1 diapositive ; pause au survol si pauseOnHover.
    if (!autoTransition || slidesRef.current.length <= 1 || !isVisible || reducedMotion || parked) return;
    let cancelled = false,
      stopped = false;

    function animateProgress(durationMs, from, to, onDone) {
      let bar = progressBarRef.current;
      if (bar && typeof bar.animate == `function`) {
        progressAnimRef.current?.cancel();
        let anim = bar.animate([{
          transform: `scaleX(${from})`
        }, {
          transform: `scaleX(${to})`
        }], {
          duration: durationMs,
          easing: `linear`,
          fill: `forwards`
        });
        progressAnimRef.current = anim, hoverPausedRef.current && anim.pause(), anim.finished.then(() => {
          cancelled || stopped || progressAnimRef.current === anim && (progressValueRef.current = to, onDone?.())
        }).catch(() => {});
        return
      }
      let start = performance.now(),
        last = performance.now(),
        step = now => {
          if (cancelled || stopped) return;
          hoverPausedRef.current && (start += now - last), last = now;
          let k = Math.min((now - start) / durationMs, 1),
            v = from + (to - from) * k;
          progressValueRef.current = v, setProgressBar(v), k < 1 ? progressRafRef.current = requestAnimationFrame(step) : (progressValueRef.current = to, setProgressBar(to), progressRafRef.current = null, onDone?.())
        };
      progressRafRef.current = requestAnimationFrame(step)
    }

    function runCycle(onDone) {
      if (cancelled || stopped) return;
      let slide = slidesRef.current[activeIndexRef.current] || null,
        videoSrc = slide?.mediaType === `video` ? slide.videoFile : ``,
        videoDuration = videoSrc && videoDurationsRef.current[videoSrc] || 0,
        video = videoSrc ? videoBySrcRef.current[videoSrc] : null,
        currentTime = video && Number.isFinite(video.currentTime) ? video.currentTime : 0;
      animateProgress((videoDuration > .5 ? Math.max(1, videoDuration - currentTime - transitionDuration) : autoTransitionTimer) * 1e3, 0, 1, () => {
        if (!(cancelled || stopped)) {
          try {
            progressAnimRef.current?.cancel()
          } catch {}
          progressAnimRef.current = null, progressValueRef.current = 0, setProgressBar(0), onDone?.()
        }
      })
    }

    function advance() {
      let next = (activeIndexRef.current + 1) % slidesRef.current.length;
      rootRef.current && rootRef.current.autoGoToSlide ? rootRef.current.autoGoToSlide(next) : startTransition(() => setActiveIndex(next))
    }

    function loop() {
      cancelled || stopped || runCycle(() => {
        cancelled || stopped || (advance(), setTimeout(() => {
          !cancelled && !stopped && loop()
        }, transitionDuration * 1e3))
      })
    }
    return loop(), () => {
      cancelled = true, stopped = true, progressRafRef.current && cancelAnimationFrame(progressRafRef.current), progressRafRef.current = null;
      try {
        progressAnimRef.current?.cancel()
      } catch {}
      progressAnimRef.current = null, progressValueRef.current = 0, setProgressBar(0)
    }
  }, [autoTransition, autoTransitionTimer, mediaKey, transitionDuration, autoplayResetKey, isVisible, reducedMotion, parked]);
  let hoverPausedRef = useRef(false),
    finePointer = win === undefined ? true : win.matchMedia?.(`(pointer: fine)`)?.matches ?? true,
    onPointerEnter = () => {
      if (pauseOnHover && finePointer) {
        hoverPausedRef.current = true;
        try {
          progressAnimRef.current?.pause()
        } catch {}
      }
    },
    onPointerLeave = () => {
      hoverPausedRef.current = false;
      try {
        progressAnimRef.current?.play()
      } catch {}
    },
    goToRef = useRef(() => {});
  useEffect(() => {
    goToRef.current = goTo
  });
  let lastDragEndRef = useRef(0);
  useEffect(() => {
    // Glisser (swipeNav) : écouteurs pointer sur window (capture, passifs) ; déclenche si |dx| ≥ 40 px
    // et |dx| ≥ 1,2·|dy| ; dx < 0 → suivante. Un glisser neutralise les zones de clic pendant 400 ms.
    if (win === undefined || !swipeNav) return;
    let drag = null,
      finishSwipe = (x, y) => {
        if (!drag) return;
        let dx = x - drag.x,
          dy = y - drag.y;
        if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy) * 1.2) return;
        let count = slidesRef.current.length;
        if (count < 2) return;
        let current = activeIndexRef.current;
        goToRef.current(dx < 0 ? (current + 1) % count : (current - 1 + count) % count)
      },
      onDown = ev => {
        let root = rootRef.current;
        if (!root) return;
        let interactive = ev.target?.closest?.(`a, button`);
        if (interactive && !interactive.hasAttribute?.(`data-distorto-tap-zone`)) return;
        let rect = root.getBoundingClientRect();
        ev.clientX >= rect.left && ev.clientX <= rect.right && ev.clientY >= rect.top && ev.clientY <= rect.bottom && (drag = {
          x: ev.clientX,
          y: ev.clientY,
          id: ev.pointerId,
          lastX: ev.clientX,
          lastY: ev.clientY,
          horizontal: false,
          moved: false
        })
      },
      onMove = ev => {
        if (!drag || drag.id !== ev.pointerId) return;
        drag.lastX = ev.clientX, drag.lastY = ev.clientY;
        let adx = Math.abs(ev.clientX - drag.x),
          ady = Math.abs(ev.clientY - drag.y);
        !drag.moved && (adx > 10 || ady > 10) && (drag.moved = true), !drag.horizontal && adx > 10 && adx > ady && (drag.horizontal = true)
      },
      onUp = ev => {
        drag && drag.id === ev.pointerId && (drag.moved && (lastDragEndRef.current = Date.now()), finishSwipe(ev.clientX, ev.clientY), drag = null)
      },
      onCancel = ev => {
        drag && drag.id === ev.pointerId && (drag.moved && (lastDragEndRef.current = Date.now()), drag.horizontal && finishSwipe(drag.lastX, drag.lastY), drag = null)
      },
      listenerOpts = {
        passive: true,
        capture: true
      };
    return win.addEventListener(`pointerdown`, onDown, listenerOpts), win.addEventListener(`pointermove`, onMove, listenerOpts), win.addEventListener(`pointerup`, onUp, listenerOpts), win.addEventListener(`pointercancel`, onCancel, listenerOpts), () => {
      win.removeEventListener(`pointerdown`, onDown, listenerOpts), win.removeEventListener(`pointermove`, onMove, listenerOpts), win.removeEventListener(`pointerup`, onUp, listenerOpts), win.removeEventListener(`pointercancel`, onCancel, listenerOpts)
    }
  }, [swipeNav]);
  // Clavier (le slider a tabIndex 0) : ← / → avec preventDefault.
  let onKeyDown = ev => {
      let count = resolvedSlides.length;
      count < 2 || (ev.key === `ArrowRight` ? (ev.preventDefault(), goTo((activeIndex + 1) % count)) : ev.key === `ArrowLeft` && (ev.preventDefault(), goTo((activeIndex - 1 + count) % count)))
    },
    indexedVideosRef = useRef( new Map);
  useEffect(() => {
    if (win === undefined) return;
    let root = rootRef.current;
    if (!root) return;
    if (parked) {
      let pauseAndRewind = v => {
          if (v) try {
            v.pause(), v.currentTime > .05 && (v.currentTime = 0)
          } catch {}
        },
        onPlay = e => {
          pauseAndRewind(e.target)
        };
      return root.addEventListener(`play`, onPlay, true), root.querySelectorAll(`video`).forEach(e => pauseAndRewind(e)), () => root.removeEventListener(`play`, onPlay, true)
    }
    let api = rootRef.current;
    api?.resumeVideos ? api.resumeVideos() : root.querySelectorAll(`video`).forEach(e => {
      try {
        e.play().catch(() => {})
      } catch {}
    }), isVisible && !document.hidden && indexedVideosRef.current.forEach(e => e.play().catch(() => {}))
  }, [parked]), useEffect(() => {
    let video = indexedVideosRef.current.get(activeIndex);
    if (video) {
      video.readyState >= 2 && video.removeAttribute(`poster`);
      let onSeeked = () => {
        video.removeEventListener(`seeked`, onSeeked), video.play().catch(() => {})
      };
      try {
        video.pause(), video.addEventListener(`seeked`, onSeeked), video.currentTime = 0
      } catch {
        video.removeEventListener(`seeked`, onSeeked), video.play().catch(() => {})
      }
    }
  }, [activeIndex]), useEffect(() => {
    let sync = () => {
      let shouldPlay = isVisible && !document.hidden;
      indexedVideosRef.current.forEach(t => {
        shouldPlay ? t.play().catch(() => {}) : t.pause()
      })
    };
    return sync(), document.addEventListener(`visibilitychange`, sync), () => document.removeEventListener(`visibilitychange`, sync)
  }, [isVisible]);
  // Navigation demandée par l'utilisateur : relance le cycle d'autoplay si accepté.
  let goTo = index => {
      let accepted = false;
      rootRef.current && rootRef.current.goToSlide ? accepted = rootRef.current.goToSlide(index) === true : index !== activeIndex && (startTransition(() => setActiveIndex(index)), accepted = true), accepted && autoTransition && startTransition(() => setAutoplayResetKey(e => e + 1))
    },
    // Recadrage « cover » d'une texture dans la vue : repeat/offset UV (centré).
    coverFit = (viewW, viewH, imgW, imgH) => {
      let vw = Math.max(1, viewW),
        vh = Math.max(1, viewH),
        iw = Math.max(1, imgW),
        ih = Math.max(1, imgH),
        viewAspect = vw / vh,
        imgAspect = iw / ih,
        repX = 1,
        repY = 1,
        offX = 0,
        offY = 0;
      return imgAspect > viewAspect ? (repX = viewAspect / imgAspect, offX = (1 - repX) / 2) : (repY = imgAspect / viewAspect, offY = (1 - repY) / 2), {
        repeat: {
          x: repX,
          y: repY
        },
        offset: {
          x: offX,
          y: offY
        }
      }
    },
    applyCover = (material, slotName, tex, viewW, viewH) => {
      if (!material || !tex) return;
      let imgW = tex?.imageWidth || tex?.image?.width || 1,
        imgH = tex?.imageHeight || tex?.image?.height || 1,
        {
          repeat,
          offset
        } = coverFit(viewW, viewH, imgW, imgH);
      slotName === `current` ? (material.uniforms.currentRepeat.value.set(repeat.x, repeat.y), material.uniforms.currentOffset.value.set(offset.x, offset.y)) : (material.uniforms.nextRepeat.value.set(repeat.x, repeat.y), material.uniforms.nextOffset.value.set(offset.x, offset.y))
    };
  useEffect(() => {
    // ---- Effet principal WebGL (recréé si rebuildKey change : médias, fond, perte de contexte) ----
    if (isStatic || !rootRef.current || resolvedSlides.length < 2 || win === undefined) return;
    let THREE = null;
    setGlReady(false);
    let disposed = false,
      renderer = null,
      scene = null,
      camera = null,
      material = null,
      mesh = null,
      textures = [],
      videoEls = [],
      abortCtls = [],
      inViewObserver = null,
      coverDetector = null,
      covered = false,
      lazyObserver = null,
      resizeObserver = null,
      removeContextListeners = null,
      disposeSnapshots = null,
      root = rootRef.current,
      render = () => {},
      lastSceneKey = ``,
      startLoop = () => {},
      stopLoop = () => {},
      post = null,
      removeInputListeners = null,
      loopRaf = null,
      cancelPreload = null,
      rootW = root.offsetWidth,
      rootH = root.offsetHeight,
      // DPR du rendu : min(devicePixelRatio, 2, max(0,75, √(8 500 000 / (largeur × hauteur)))).
      getPixelRatio = () => {
        let el = rootRef.current,
          w = el?.offsetWidth || 1920,
          h = el?.offsetHeight || 1080,
          budget = Math.sqrt(85e5 / Math.max(1, w * h));
        return Math.min(win.devicePixelRatio || 1, 2, Math.max(.75, budget))
      },
      imagePad = (pad => {
        if (typeof pad == `number`) return pad;
        if (typeof pad == `string`) {
          let num = parseFloat(pad);
          return Number.isFinite(num) ? num : 0
        }
        if (pad && typeof pad == `object`) {
          let top = parseFloat(pad.top ?? `0`) || 0,
            right = parseFloat(pad.right ?? `0`) || 0,
            bottom = parseFloat(pad.bottom ?? `0`) || 0,
            left = parseFloat(pad.left ?? `0`) || 0;
          return Math.max(top, right, bottom, left)
        }
        return 0
      })(imagePadding),
      innerW = () => Math.max(1, rootW - imagePad * 2),
      innerH = () => Math.max(1, rootH - imagePad * 2),
      lastW = 0,
      lastH = 0,
      lastDpr = 0,
      // Redimensionnement : renderer.setSize(largeur − 2·pad, hauteur − 2·pad) + setPixelRatio, caméra
      // orthographique en pixels, maillage mis à l'échelle, uniforms de recadrage recalculés.
      handleResize = () => {
        if (!rootRef.current || disposed) return;
        let w = rootRef.current.offsetWidth,
          h = rootRef.current.offsetHeight,
          dpr = getPixelRatio();
        if (renderer && w === lastW && h === lastH && dpr === lastDpr) return;
        rootW = w, rootH = h, renderer && (lastW = w, lastH = h, lastDpr = dpr);
        let iw = Math.max(1, w - imagePad * 2),
          ih = Math.max(1, h - imagePad * 2);
        if (renderer && (renderer.setSize(iw, ih, false), renderer.setPixelRatio(dpr)), post) {
          let pr = dpr;
          post.target.setSize(Math.max(1, Math.round(iw * pr)), Math.max(1, Math.round(ih * pr))), post.material.uniforms.uResolution.value.set(iw, ih)
        }
        if (camera && (camera.left = iw / -2, camera.right = iw / 2, camera.top = ih / 2, camera.bottom = ih / -2, camera.updateProjectionMatrix()), mesh && mesh.scale.set(iw, ih, 1), material && textures.length && !transitioningRef.current) {
          let curTex = textures[activeIndexRef.current] || textures[0],
            nextTex = textures[(activeIndexRef.current + 1) % textures.length] || textures[0];
          applyCover(material, `current`, curTex, innerW(), innerH()), applyCover(material, `next`, nextTex, iw, ih)
        }
        renderer && renderer.domElement && (renderer.domElement.style.position = `absolute`, renderer.domElement.style.left = `${imagePad}px`, renderer.domElement.style.top = `${imagePad}px`, renderer.domElement.style.width = `calc(100% - ${imagePad*2}px)`, renderer.domElement.style.height = `calc(100% - ${imagePad*2}px)`, renderer.domElement.style.pointerEvents = `none`), render()
      },
      // WebGLRenderer { antialias:false, alpha:true, preserveDrawingBuffer:false, depth/stencil:false },
      // clearColor = `background`, Scene.background = `background`, OrthographicCamera(±w/2, ±h/2, 1, 1000), z = 1.
      initRenderer = () => {
        let debugDepth = isMiraLabFlag(`dsdepth`);
        renderer = new THREE.WebGLRenderer({
          antialias: false,
          alpha: true,
          preserveDrawingBuffer: false,
          depth: debugDepth,
          stencil: debugDepth
        }), renderer.setPixelRatio(getPixelRatio()), renderer.setClearColor(background, 1), renderer.autoClear = true;
        let w0 = innerW(),
          h0 = innerH();
        renderer.setSize(w0, h0, false), canvasHostRef.current && (canvasHostRef.current.innerHTML = ``, canvasHostRef.current.appendChild(renderer.domElement)), renderer.domElement.style.position = `absolute`, renderer.domElement.style.left = `${imagePad}px`, renderer.domElement.style.top = `${imagePad}px`, renderer.domElement.style.width = `calc(100% - ${imagePad*2}px)`, renderer.domElement.style.height = `calc(100% - ${imagePad*2}px)`, renderer.domElement.style.pointerEvents = `none`;
        let canvasEl = renderer.domElement,
          onContextLost = ev => {
            ev.preventDefault(), stopLoop()
          },
          onContextRestored = () => {
            disposed || startTransition(() => setRebuildKey(e => e + 1))
          };
        canvasEl.addEventListener(`webglcontextlost`, onContextLost), canvasEl.addEventListener(`webglcontextrestored`, onContextRestored), removeContextListeners = () => {
          canvasEl.removeEventListener(`webglcontextlost`, onContextLost), canvasEl.removeEventListener(`webglcontextrestored`, onContextRestored)
        }, scene = new THREE.Scene, scene.background = new THREE.Color(background), camera = new THREE.OrthographicCamera(w0 / -2, w0 / 2, h0 / 2, h0 / -2, 1, 1e3), camera.position.z = 1;
        let textureLoader = new THREE.TextureLoader;
        textureLoader.crossOrigin = `anonymous`;
        // Chargement d'une texture : vidéo (muted, playsInline, loop sauf WebM Safari, preload auto, élément
        // 2×2 px opacity 0,01 ajouté au slider, abandon après 6 s de blocage) ou image (TextureLoader,
        // crossOrigin anonymous, LINEAR/LINEAR, CLAMP_TO_EDGE). Échec → poster → texture unie 16×16 du fond.
        let loadTexture = (kind, src) => new Promise((resolve, reject) => {
            if (kind === `video`) try {
              let pooled = videoPool.get(src);
              pooled && videoPool.delete(src);
              let video = pooled || document.createElement(`video`);
              video.crossOrigin = `anonymous`, video.muted = true;
              let safariWebM = needsBlobWebM(src);
              video.loop = !safariWebM, video.playsInline = true, video.preload = `auto`, video.dataset.webglSafariWebM = safariWebM ? `1` : `0`, video.dataset.webglWantsPlay = `0`, video.dataset.webglOriginalSrc = src;
              let fetchAsBlob = !pooled && needsBlobWebM(src);
              if (!pooled && !fetchAsBlob && (video.src = src), videoBySrcRef.current[src] = video, Object.assign(video.style, {
                  position: `absolute`,
                  left: `0px`,
                  bottom: `0px`,
                  width: `2px`,
                  height: `2px`,
                  opacity: `0.01`,
                  pointerEvents: `none`,
                  zIndex: `-1`
                }), !video.isConnected) try {
                root.appendChild(video)
              } catch {}
              videoEls.push(video), videoElsRef.current.push(video);
              let abortCtl = new AbortController;
              abortCtls.push(abortCtl);
              let signal = abortCtl.signal,
                loadBlob = async () => {
                  if (pooled || !fetchAsBlob) return true;
                  try {
                    let res = await fetch(src, {
                      mode: `cors`,
                      credentials: `omit`,
                      signal
                    });
                    if (!res.ok) throw Error(`HTTP ${res.status} ${res.statusText}`);
                    let blob = await res.blob();
                    if (disposed || signal.aborted) return false;
                    let blobUrl = URL.createObjectURL(blob);
                    return video.dataset.webglBlobUrl = blobUrl, video.src = blobUrl, true
                  } catch (err) {
                    return disposed || signal.aborted ? false : (console.warn(`WebGLDistortionSlider: WebM Blob fetch failed; falling back to direct URL.`, err), video.src = src, true)
                  }
                }, onError = () => reject( Error(`Failed to load video`)), resolved = false, stallTimer, onReady = () => {
                  if (Number.isFinite(video.duration) && video.duration > 0 && (videoDurationsRef.current[src] = video.duration), !resolved) {
                    resolved = true, stallTimer !== undefined && win.clearTimeout(stallTimer);
                    try {
                      let tex = createVideoTexture(THREE, video, `dsvtex`);
                      tex.minFilter = THREE.LinearFilter, tex.magFilter = THREE.LinearFilter, tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping, tex.imageWidth = video.videoWidth || 1, tex.imageHeight = video.videoHeight || 1, resolve(tex)
                    } catch (err) {
                      reject(err)
                    }
                  }
                };
              video.addEventListener(`error`, onError, {
                once: true,
                signal
              });
              let armStallTimer = () => {
                stallTimer === undefined && (stallTimer = win.setTimeout(() => {
                  resolved || reject( Error(`video stalled`))
                }, 6e3))
              };
              if (pooled && video.readyState >= 2) {
                if (!safariWebM || !parkedRef.current) video.play().catch(() => {});
                else {
                  video.dataset.webglWantsPlay = `0`;
                  try {
                    video.pause(), video.currentTime > .01 && (video.currentTime = 0)
                  } catch {}
                }
                onReady()
              } else {
                let once = {
                  once: true,
                  signal
                };
                video.addEventListener(`loadeddata`, onReady, once), video.addEventListener(`canplay`, onReady, once), video.addEventListener(`playing`, onReady, once);
                let startLoading = () => {
                  if (armStallTimer(), !pooled) try {
                    video.load()
                  } catch {}
                  safariWebM && parkedRef.current ? video.dataset.webglWantsPlay = `0` : video.play().catch(err => {
                    err && err.name === `NotAllowedError` && !resolved && reject(err)
                  })
                };
                !pooled && fetchAsBlob ? loadBlob().then(ok => {
                  ok && !disposed && !signal.aborted && startLoading()
                }) : startLoading()
              }
            } catch (err) {
              reject(err)
            } else textureLoader.load(src, tex => {
              try {
                tex.magFilter = tex.minFilter = THREE.LinearFilter, tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping
              } catch {}
              if (tex.image && tex.image.width && tex.image.height) tex.imageWidth = tex.image.width, tex.imageHeight = tex.image.height, resolve(tex);
              else {
                let probe = new win.Image;
                probe.crossOrigin = `anonymous`, probe.onload = () => {
                  tex.imageWidth = probe.width, tex.imageHeight = probe.height, resolve(tex)
                }, probe.onerror = () => reject( Error(`Failed to load image`)), probe.src = src
              }
            }, undefined, err => reject(err))
          }),
          mediaList = resolvedSlides.map(slide => ({
            kind: slide.mediaType === `video` ? `video` : `image`,
            src: slide.mediaType === `video` ? slide.videoFile || `` : slide.image?.src || ``,
            poster: slide.mediaType === `video` && slide.posterImage?.src || ``
          })),
          makeFallbackTexture = () => {
            let cnv = document.createElement(`canvas`);
            cnv.width = 16, cnv.height = 16;
            let ctx = cnv.getContext(`2d`);
            ctx && (ctx.fillStyle = typeof background == `string` ? background : `#000000`, ctx.fillRect(0, 0, 16, 16));
            let tex = new THREE.CanvasTexture(cnv);
            return tex.minFilter = THREE.LinearFilter, tex.magFilter = THREE.LinearFilter, tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping, tex.imageWidth = 16, tex.imageHeight = 16, tex
          },
          loadSlideTexture = async item => {
            if (item.src) try {
              return await loadTexture(item.kind, item.src)
            } catch {}
            if (item.kind === `video` && item.poster) try {
              return await loadTexture(`image`, item.poster)
            } catch {}
            return makeFallbackTexture()
          };
        if (mediaList.length === 0) return;
        let pendingLoads = mediaList.map(() => null),
          initQueue = [],
          initBusy = false,
          pumpInitQueue = () => {
            if (initBusy || disposed) return;
            let tex = initQueue.shift();
            if (!tex) return;
            initBusy = true;
            let img = tex.image;
            (img && typeof img.decode == `function` ? img.decode().catch(() => {}) : Promise.resolve()).then(() => whenIdle(() => {
              if (initBusy = false, !disposed && renderer) {
                try {
                  renderer.initTexture(tex)
                } catch {}
                pumpInitQueue()
              }
            }))
          },
          queueTextureInit = tex => {
            tex && !tex.isVideoTexture && tex.image && typeof renderer?.initTexture == `function` && !isMiraLabFlag(`dsprep`) && (initQueue.push(tex), pumpInitQueue())
          },
          ensureTexture = index => textures[index] ? Promise.resolve(textures[index]) : (pendingLoads[index] || (pendingLoads[index] = loadSlideTexture(mediaList[index]).then(tex => {
            if (disposed) {
              try {
                tex?.dispose?.()
              } catch {}
              return null
            }
            return textures[index] = tex, queueTextureInit(tex), tex
          })), pendingLoads[index]);
        // 1re texture prête : les suivantes se chargent une par une après l'évènement load (idle) ;
        // les images sont pré-envoyées au GPU (initTexture) une à la fois en temps mort.
        loadSlideTexture(mediaList[0]).then(firstTex => {
          if (disposed) return;
          let list = mediaList.map(() => null);
          list[0] = firstTex, textures = list, cancelPreload = afterLoadWhenIdle(() => {
            let chain = idx => {
              disposed || idx >= mediaList.length || ensureTexture(idx).then(() => {
                disposed || chain(idx + 1)
              })
            };
            chain(1)
          });
          let fragSrc = buildFragmentShader(effectRef.current),
            startIdx = Math.min(activeIndexRef.current, textures.length - 1);
          // Matériau du plan : uniforms dispFactor (progression), direction (±1), currentImage/nextImage
          // + repeat/offset de recadrage ; vertex shader slide.vert.glsl ; fragment = buildFragmentShader(effet).
          material = new THREE.ShaderMaterial({
            uniforms: {
              dispFactor: {
                value: 0
              },
              direction: {
                value: 1
              },
              currentImage: {
                value: textures[startIdx]
              },
              nextImage: {
                value: textures[(startIdx + 1) % textures.length]
              },
              currentRepeat: {
                value: new THREE.Vector2(1, 1)
              },
              currentOffset: {
                value: new THREE.Vector2(0, 0)
              },
              nextRepeat: {
                value: new THREE.Vector2(1, 1)
              },
              nextOffset: {
                value: new THREE.Vector2(0, 0)
              }
            },
            vertexShader: glsl(`slide.vert.glsl`),
            fragmentShader: fragSrc,
            transparent: true,
            opacity: 1
          });
          try {
            let curTex = textures[startIdx],
              nextTex = textures[(startIdx + 1) % textures.length];
            applyCover(material, `current`, curTex, innerW(), innerH()), applyCover(material, `next`, nextTex, innerW(), innerH())
          } catch {}
          // Plan 1×1 (PlaneGeometry(1, 1, 1)) mis à l'échelle (largeur, hauteur) en pixels.
          let geometry = new THREE.PlaneGeometry(1, 1, 1);
          mesh = new THREE.Mesh(geometry, material), mesh.scale.set(w0, h0, 1), mesh.position.set(0, 0, 0), scene.add(mesh);
          let finePointerOnly = typeof win.matchMedia == `function` && win.matchMedia(`(pointer: fine)`).matches,
            mouseTarget = new THREE.Vector2(.5, .5),
            mouseSmoothed = new THREE.Vector2(.5, .5),
            mousePrev = new THREE.Vector2(.5, .5),
            mouseSpeed = 0,
            mouseAmount = 0,
            pointerInside = false,
            // Passe de post-traitement « souris » : la scène est rendue dans un WebGLRenderTarget (taille × DPR)
            // puis un quad plein écran applique mouse-warp.frag.glsl. Créée seulement au 1er besoin.
            ensurePostPass = () => {
              if (post) return true;
              try {
                let dpr = getPixelRatio(),
                  w = innerW(),
                  h = innerH(),
                  target = new THREE.WebGLRenderTarget(Math.max(1, Math.round(w * dpr)), Math.max(1, Math.round(h * dpr)), {
                    depthBuffer: isMiraLabFlag(`dsdepth`)
                  }),
                  postScene = new THREE.Scene,
                  postCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1),
                  postMaterial = new THREE.ShaderMaterial({
                    uniforms: {
                      tDiffuse: {
                        value: target.texture
                      },
                      uMouse: {
                        value: new THREE.Vector2(.5, .5)
                      },
                      uResolution: {
                        value: new THREE.Vector2(w, h)
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
                      }
                    },
                    vertexShader: POST_VERTEX_SHADER,
                    fragmentShader: POST_FRAGMENT_SHADER,
                    depthTest: false,
                    depthWrite: false
                  }),
                  quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), postMaterial);
                return postScene.add(quad), post = {
                  scene: postScene,
                  camera: postCamera,
                  quad,
                  material: postMaterial,
                  target
                }, true
              } catch {
                return post = null, false
              }
            },
            // Souris lissée : position lerp 0,12/image ; vitesse lissée (×60, plafonnée à 1, lerp 0,08) ;
            // intensité d'entrée/sortie lerp 0,12 vers 1 (curseur dans le slider) ou 0.
            updateMouse = () => {
              let warpOn = mouseCfgRef.current.mouseWarp && finePointerOnly;
              mouseSmoothed.lerp(mouseTarget, .12);
              let moved = mouseSmoothed.distanceTo(mousePrev);
              mousePrev.copy(mouseSmoothed), mouseSpeed += (Math.min(moved * 60, 1) - mouseSpeed) * .08, mouseAmount += ((pointerInside && warpOn ? 1 : 0) - mouseAmount) * .12, mouseAmount < .001 && (mouseAmount = 0)
            };
          render = () => {
            // Rendu d'une image : avec effet souris actif → scène vers la cible puis quad de post ; sinon direct.
            if (disposed || !renderer || !scene || !camera) return;
            let cfg = mouseCfgRef.current,
              warpOn = cfg.mouseWarp && finePointerOnly;
            if (updateMouse(), lastSceneKey = ``, warpOn && mouseAmount > 0 && ensurePostPass()) {
              let pu = post.material.uniforms;
              pu.uMouse.value.copy(mouseSmoothed), pu.uTime.value = performance.now() % 36e5 * .001, pu.uMouseEnabled.value = mouseAmount, pu.uMouseStrength.value = cfg.mouseWarpStrength, pu.uMouseEffect.value = MOUSE_EFFECT_INDEX[cfg.mouseEffect] ?? 0, pu.uMouseRadius.value = Math.min(Math.max(cfg.mouseRadius, .03), .4), pu.uMouseChroma.value = Math.min(Math.max(cfg.mouseChroma, 0), 1), pu.uMouseVel.value = cfg.mouseSpeedReact ? mouseSpeed : 1, renderer.setRenderTarget(post.target), renderer.clear(), renderer.render(scene, camera), renderer.setRenderTarget(null), renderer.clear(), renderer.render(post.scene, post.camera)
            } else renderer.clear(), renderer.render(scene, camera)
          };
          let mouseActive = () => mouseCfgRef.current.mouseWarp && finePointerOnly && (pointerInside || mouseAmount > 0),
            anyVideoWantsPlay = () => videoEls.some(e => e.dataset.webglWantsPlay === `1`),
            canSkipUnchanged = typeof HTMLVideoElement < `u` && `requestVideoFrameCallback` in HTMLVideoElement.prototype && !isMiraLabFlag(`dsvid`),
            keyOf = e => e == null ? `_` : typeof e == `number` || typeof e == `boolean` ? String(e) : e.isTexture ? e.uuid + `@` + e.version : e.isColor ? e.r + `,` + e.g + `,` + e.b : e.isVector2 ? e.x + `,` + e.y : e.isVector3 ? e.x + `,` + e.y + `,` + e.z : e.isVector4 || e.isQuaternion ? e.x + `,` + e.y + `,` + e.z + `,` + e.w : e.isMatrix3 || e.isMatrix4 ? e.elements.join(`,`) : `?` + Math.random(),
            sceneStateKey = () => {
              let rr = renderer,
                key = rr.domElement.width + `x` + rr.domElement.height + `|` + keyOf(scene.background) + `|` + camera.projectionMatrix.elements.join(`,`) + `|` + keyOf(camera.position) + keyOf(camera.quaternion);
              return scene.traverse(e => {
                if (!e.isMesh) return;
                key += `|` + e.visible + keyOf(e.position) + keyOf(e.quaternion) + keyOf(e.scale);
                let mat = e.material;
                if (!mat) return;
                key += `:` + mat.uuid + `@` + mat.version;
                let unis = mat.uniforms;
                if (unis)
                  for (let e in unis) key += `;` + keyOf(unis[e].value)
              }), key
            },
            // Boucle rAF : ne tourne que si visible (renderingRef) ET (une vidéo doit jouer OU la souris agit) ET
            // pas de transition en cours. Avec requestVideoFrameCallback, une image identique n'est pas redessinée.
            loopFrame = () => {
              if (disposed) loopRaf = null;
              else if (!renderingRef.current || !anyVideoWantsPlay() && !mouseActive() || transitioningRef.current) loopRaf = null;
              else {
                if (keepWebMLooping(), canSkipUnchanged && !mouseActive() && scene && camera) {
                  let key = sceneStateKey();
                  key === lastSceneKey ? updateMouse() : (render(), lastSceneKey = key)
                } else render();
                loopRaf = requestAnimationFrame(loopFrame)
              }
            };
          if (startLoop = () => {
              disposed || loopRaf != null || renderingRef.current && (anyVideoWantsPlay() || mouseActive()) && !transitioningRef.current && (loopRaf = requestAnimationFrame(loopFrame))
            }, stopLoop = () => {
              loopRaf != null && cancelAnimationFrame(loopRaf), loopRaf = null
            }, render(), finePointerOnly) {
            let warmUp = () => {
              if (!disposed && renderer) try {
                mouseCfgRef.current.mouseWarp && ensurePostPass() && (renderer.compile(post.scene, post.camera), renderer.setRenderTarget(post.target), renderer.clear(), renderer.setRenderTarget(null))
              } catch {}
            };
            typeof win.requestIdleCallback == `function` ? win.requestIdleCallback(warmUp, {
              timeout: 1500
            }) : win.setTimeout(warmUp, 600)
          }
          let playVideo = video => {
              if (video.dataset.webglWantsPlay = `1`, parkedRef.current || covered) return;
              let promise = video.play();
              promise && promise.then ? promise.then(() => {
                video.dataset.webglRestarting = `0`
              }).catch(() => {
                video.dataset.webglRestarting = `0`
              }) : video.dataset.webglRestarting = `0`
            },
            pauseVideo = video => {
              video.dataset.webglWantsPlay = `0`, video.dataset.webglRestarting = `0`, video.dataset.webglRestartGeneration = String((Number(video.dataset.webglRestartGeneration || `0`) || 0) + 1);
              try {
                video.pause()
              } catch {}
            },
            restartVideo = video => {
              if (video.dataset.webglWantsPlay = `1`, parkedRef.current) {
                try {
                  video.pause()
                } catch {}
                return
              }
              if (video.dataset.webglSafariWebM !== `1`) {
                if (isAppleWebKit()) {
                  if (video.dataset.webglRestarting === `1`) return;
                  video.dataset.webglRestarting = `1`;
                  let gen = (Number(video.dataset.webglRestartGeneration || `0`) || 0) + 1;
                  video.dataset.webglRestartGeneration = String(gen);
                  let settled = false,
                    timer, cleanup = () => {
                      video.removeEventListener(`seeked`, onSeeked), timer !== undefined && win.clearTimeout(timer)
                    },
                    onSeeked = () => {
                      settled || (settled = true, cleanup(), disposed || parkedRef.current || video.dataset.webglWantsPlay !== `1` || Number(video.dataset.webglRestartGeneration || `0`) !== gen ? video.dataset.webglRestarting = `0` : playVideo(video))
                    };
                  try {
                    video.pause(), video.addEventListener(`seeked`, onSeeked), video.currentTime = 0, video.seeking || requestAnimationFrame(onSeeked), timer = win.setTimeout(onSeeked, 500)
                  } catch {
                    onSeeked()
                  }
                  return
                }
                try {
                  video.currentTime = 0
                } catch {}
                playVideo(video);
                return
              }
              if (video.dataset.webglRestarting === `1`) return;
              video.dataset.webglRestarting = `1`;
              let gen = (Number(video.dataset.webglRestartGeneration || `0`) || 0) + 1;
              video.dataset.webglRestartGeneration = String(gen);
              let settled = false,
                timer, cleanup = () => {
                  video.removeEventListener(`loadeddata`, onReady), video.removeEventListener(`canplay`, onReady), timer !== undefined && win.clearTimeout(timer)
                },
                onReady = () => {
                  settled || (settled = true, cleanup(), disposed || parkedRef.current || video.dataset.webglWantsPlay !== `1` || Number(video.dataset.webglRestartGeneration || `0`) !== gen ? video.dataset.webglRestarting = `0` : playVideo(video))
                };
              try {
                video.pause(), video.dataset.webglBlobUrl ? (video.addEventListener(`loadeddata`, onReady), video.addEventListener(`canplay`, onReady), video.load(), video.readyState >= 2 && requestAnimationFrame(onReady), timer = win.setTimeout(onReady, 600)) : (video.currentTime = 0, requestAnimationFrame(onReady))
              } catch {
                onReady()
              }
            },
            // Lecture des vidéos : l'active joue (redémarrée à 0 si demandé) ; les autres jouent si
            // thumbVideoPreview = "live" (vignettes animées), sinon pause.
            syncVideos = (activeIdx, restartActive, touchOthers) => {
              parkedRef.current ? textures.forEach(tex => {
                let video = tex && tex.image instanceof HTMLVideoElement ? tex.image : null;
                if (video) {
                  pauseVideo(video);
                  try {
                    video.currentTime > .01 && (video.currentTime = 0)
                  } catch {}
                }
              }) : textures.forEach((tex, idx) => {
                let video = tex && tex.image instanceof HTMLVideoElement ? tex.image : null;
                video && (idx === activeIdx ? restartActive ? restartVideo(video) : playVideo(video) : touchOthers && (thumbPreviewRef.current === `live` ? playVideo(video) : pauseVideo(video)))
              })
            },
            keepWebMLooping = () => {
              !parkedRef.current && renderingRef.current && videoEls.forEach(video => {
                if (video.dataset.webglSafariWebM !== `1` || video.dataset.webglWantsPlay !== `1` || video.dataset.webglRestarting === `1`) return;
                let dur = video.duration,
                  atEnd = Number.isFinite(dur) && dur > 0 && video.currentTime >= dur - .08;
                video.ended || atEnd ? restartVideo(video) : video.paused && !video.seeking && playVideo(video)
              })
            },
            // Capture de l'image courante (double tampon de cibles) : permet d'enchaîner une transition
            // interrompue en partant de l'image affichée à l'écran.
            snapshotTargets = [null, null],
            snapshotIdx = 0,
            snapshotCurrentFrame = () => {
              if (!renderer || !scene || !camera || !material) return false;
              try {
                let size = new THREE.Vector2;
                renderer.getDrawingBufferSize(size);
                let w = Math.max(1, Math.round(size.x)),
                  h = Math.max(1, Math.round(size.y));
                snapshotIdx = 1 - snapshotIdx;
                let target = snapshotTargets[snapshotIdx];
                return target ? (target.width !== w || target.height !== h) && target.setSize(w, h) : (target = new THREE.WebGLRenderTarget(w, h, {
                  depthBuffer: isMiraLabFlag(`dsdepth`)
                }), target.texture.minFilter = THREE.LinearFilter, target.texture.magFilter = THREE.LinearFilter, snapshotTargets[snapshotIdx] = target), renderer.setRenderTarget(target), renderer.clear(), renderer.render(scene, camera), renderer.setRenderTarget(null), material.uniforms.currentImage.value = target.texture, material.uniforms.currentImage.needsUpdate = true, material.uniforms.currentRepeat.value.set(1, 1), material.uniforms.currentOffset.value.set(0, 0), true
              } catch {
                return false
              }
            };
          disposeSnapshots = () => {
            try {
              snapshotTargets[0]?.dispose?.(), snapshotTargets[1]?.dispose?.()
            } catch {}
            snapshotTargets[0] = null, snapshotTargets[1] = null
          };
          // =====================================================================
          // Transition vers `index` : direction +1 (suivante) / −1 (précédente), dispFactor animé de 0 à 1
          // sur transitionDuration s (1 ms si reduced motion) avec easeInOutQuad :
          //   k < 0,5 ? 2k² : −1 + (4 − 2k)·k
          // En fin : nextImage devient currentImage, dispFactor = 0, nextImage = diapositive suivante.
          // =====================================================================
          let transitionTo = (index, force) => {
            if (disposed || transitioningRef.current && !force) return false;
            let from = activeIndexRef.current;
            if (index === from) return false;
            let wasTransitioning = transitioningRef.current,
              gen = ++transitionGenRef.current;
            transitioningRef.current = true, stopLoop();
            let nextTex = textures[index],
              curTex = textures[from] || textures[0];
            if (!nextTex || !curTex) {
              if (wasTransitioning && curTex) try {
                material.uniforms.currentImage.value = curTex, material.uniforms.currentImage.needsUpdate = true, applyCover(material, `current`, curTex, innerW(), innerH()), material.uniforms.dispFactor.value = 0
              } catch {}
              return transitioningRef.current = false, render(), startLoop(), !nextTex && (ensureTexture(index).then(tex => {
                !disposed && tex && (transitioningRef.current || activeIndexRef.current !== index && transitionTo(index, true))
              }), true)
            }
            startTransition(() => setActiveIndex(index)), syncVideos(index, true, false);
            let count = textures.length,
              dir = index === (from + 1) % count ? 1 : index === (from - 1 + count) % count ? -1 : index > from ? 1 : -1;
            try {
              let snapped = wasTransitioning && snapshotCurrentFrame();
              material.uniforms.direction.value = dir, material.uniforms.dispFactor.value = 0, snapped || (material.uniforms.currentImage.value = curTex, material.uniforms.currentImage.needsUpdate = true, applyCover(material, `current`, curTex, innerW(), innerH()))
            } catch {}
            let fragSrc = buildFragmentShader(effectRef.current);
            material && material.fragmentShader !== fragSrc && (material.fragmentShader = fragSrc, material.needsUpdate = true), material.uniforms.nextImage.value = nextTex, material.uniforms.nextImage.needsUpdate = true, applyCover(material, `next`, nextTex, innerW(), innerH());
            let t0 = performance.now(),
              durMs = reducedMotionRef.current ? 1 : Math.max(.05, durationRef.current) * 1e3,
              step = now => {
                if (disposed || transitionGenRef.current !== gen) return;
                let k = Math.min((now - t0) / durMs, 1),
                  eased = k < .5 ? 2 * k * k : -1 + (4 - 2 * k) * k;
                if (material.uniforms.dispFactor.value = eased, render(), k < 1) requestAnimationFrame(step);
                else {
                  if (transitionGenRef.current !== gen) return;
                  material.uniforms.currentImage.value = nextTex, material.uniforms.currentImage.needsUpdate = true, applyCover(material, `current`, nextTex, innerW(), innerH()), material.uniforms.dispFactor.value = 0;
                  let following = textures[(index + 1) % textures.length] || nextTex;
                  material.uniforms.nextImage.value = following, material.uniforms.nextImage.needsUpdate = true, applyCover(material, `next`, following, innerW(), innerH()), activeIndexRef.current = index, startTransition(() => setActiveIndex(index)), transitioningRef.current = false, syncVideos(index, false, true), render(), startLoop()
                }
              };
            return requestAnimationFrame(step), true
          };
          rootRef.current.goToSlide = index => transitionTo(index, true), rootRef.current.autoGoToSlide = index => transitionTo(index, false), rootRef.current.resumeVideos = () => {
            syncVideos(activeIndexRef.current, true, true), startLoop()
          };
          let rootRect = root.getBoundingClientRect(),
            rectStale = false,
            refreshRect = () => {
              let el = rootRef.current;
              el && (rootRect = el.getBoundingClientRect()), rectStale = false
            },
            onScroll = () => {
              rectStale = true, performance.now()
            };
          win.addEventListener(`scroll`, onScroll, {
            passive: true,
            capture: true
          });
          // Pointeur (souris uniquement, (pointer: fine)) : UV dans la zone image, y inversé.
          let onPointerMove = ev => {
              if (!mouseCfgRef.current.mouseWarp || !finePointerOnly || !rootRef.current) return;
              rectStale && refreshRect();
              let rect = rootRect,
                inside = ev.clientX >= rect.left && ev.clientX <= rect.right && ev.clientY >= rect.top && ev.clientY <= rect.bottom;
              if (pointerInside = inside, inside) {
                let pad = imagePad,
                  w = Math.max(1, rect.width - pad * 2),
                  h = Math.max(1, rect.height - pad * 2);
                mouseTarget.set((ev.clientX - rect.left - pad) / w, 1 - (ev.clientY - rect.top - pad) / h)
              }
              startLoop()
            },
            onPointerLeaveDoc = () => {
              pointerInside = false, startLoop()
            };
          win.addEventListener(`pointermove`, onPointerMove, {
            passive: true
          }), document.documentElement.addEventListener(`mouseleave`, onPointerLeaveDoc), removeInputListeners = () => {
            win.removeEventListener(`resize`, onResize), resizeRaf && cancelAnimationFrame(resizeRaf), win.removeEventListener(`scroll`, onScroll, {
              capture: true
            }), win.removeEventListener(`pointermove`, onPointerMove), document.documentElement.removeEventListener(`mouseleave`, onPointerLeaveDoc)
          };
          let resizeRaf = 0,
            onResize = () => {
              refreshRect(), handleResize()
            };
          resizeObserver = new ResizeObserver(() => {
            resizeRaf ||= requestAnimationFrame(() => {
              resizeRaf = 0, onResize()
            })
          }), resizeObserver.observe(root), win.addEventListener(`resize`, onResize), handleResize(), syncVideos(activeIndexRef.current, true, true), startLoop();
          let markGLReady = () => {
            render(), win.requestAnimationFrame(() => {
              disposed || startTransition(() => setGlReady(true))
            })
          };
          if (mediaList[0]?.kind === `video` && videoEls[0]) {
            let firstVideo = videoEls[0],
              done = false,
              finishOnce = () => {
                done || (done = true, markGLReady())
              },
              failsafe = win.setTimeout(finishOnce, 1500);
            if (typeof firstVideo.requestVideoFrameCallback == `function`) {
              let frames = 0,
                countFrame = () => {
                  frames++, frames >= 3 ? (win.clearTimeout(failsafe), finishOnce()) : firstVideo.requestVideoFrameCallback(countFrame)
                };
              firstVideo.requestVideoFrameCallback(countFrame)
            } else {
              let afterTwoFrames = () => requestAnimationFrame(() => requestAnimationFrame(() => {
                win.clearTimeout(failsafe), finishOnce()
              }));
              !firstVideo.paused && firstVideo.currentTime > 0 ? afterTwoFrames() : firstVideo.addEventListener(`playing`, afterTwoFrames, {
                once: true
              })
            }
          } else markGLReady();
          // Visibilité : IntersectionObserver (seuil 0,01) + détecteur d'occultation. Rendu et vidéos
          // coupés hors écran ou recouvert. Onglet masqué : pas de gestion dédiée (le navigateur suspend rAF ;
          // l’écouteur visibilitychange du composant ne vise qu’une Map indexedVideosRef jamais remplie).
          let inView = false,
            setRendering = on => {
              renderingRef.current = on, setIsVisible(on), on ? (syncVideos(activeIndexRef.current, false, true), render(), startLoop()) : (stopLoop(), videoEls.forEach(video => {
                video.dataset.webglWantsPlay = `0`;
                try {
                  video.pause()
                } catch {}
              }))
            };
          isMiraLabFlag(`dscover`) || (coverDetector = createCoverDetector(root, isCovered => {
            disposed || covered === isCovered || (covered = isCovered, inView && setRendering(!isCovered))
          })), inViewObserver = new IntersectionObserver(entries => {
            let entry = entries[0];
            entry && (inView = entry.isIntersecting, inView || (covered = false), coverDetector?.setActive(inView), setRendering(inView && !covered))
          }, {
            threshold: .01
          }), inViewObserver.observe(root)
        }).catch(err => {
          console.error(`Error loading textures:`, err)
        })
      },
      threeRequested = false,
      // three.js (three.module.CJpBf6nA.mjs, r136) n'est importé que lorsque le slider est à moins de
      // 1000 px de la fenêtre ; WebGL est initialisé après stabilisation de la mise en page.
      requestThree = () => {
        threeRequested || disposed || (threeRequested = true, lazyObserver?.disconnect(), lazyObserver = null, loadThree().then(mod => {
          disposed || (THREE = mod && mod.WebGLRenderer ? mod : mod?.default || mod, waitForStableLayout(() => rootRef.current, () => disposed, () => initRenderer()))
        }).catch(err => {
          console.error(`Failed to load three.js:`, err)
        }))
      },
      rect = root.getBoundingClientRect();
    return rect.bottom >= -1e3 && rect.top <= (win.innerHeight || 0) + 1e3 || typeof IntersectionObserver > `u` ? requestThree() : (lazyObserver = new IntersectionObserver(entries => {
      entries.some(e => e.isIntersecting) && requestThree()
    }, {
      rootMargin: `1000px 0px 1000px 0px`,
      threshold: 0
    }), lazyObserver.observe(root)), () => {
      disposed = true, transitionGenRef.current++;
      try {
        cancelPreload?.()
      } catch {}
      try {
        inViewObserver?.disconnect(), coverDetector?.stop(), coverDetector = null, lazyObserver?.disconnect(), lazyObserver = null
      } catch {}
      try {
        win.removeEventListener(`resize`, handleResize)
      } catch {}
      try {
        resizeObserver?.disconnect(), resizeObserver = null
      } catch {}
      try {
        removeContextListeners?.(), removeContextListeners = null
      } catch {}
      try {
        removeInputListeners?.(), removeInputListeners = null
      } catch {}
      try {
        stopLoop()
      } catch {}
      try {
        abortCtls.forEach(ac => {
          try {
            ac.abort()
          } catch {}
        }), abortCtls = [], videoEls.forEach(video => {
          try {
            let src = video.dataset.webglOriginalSrc || video.currentSrc || video.src;
            src ? parkVideoInPool(src, video) : (video.pause(), video.removeAttribute(`src`), video.load())
          } catch {}
        }), videoEls = [], videoElsRef.current = []
      } catch {}
      let oldRenderer = renderer,
        oldMaterial = material,
        oldGeometry = mesh?.geometry || null,
        oldTextures = textures.slice(),
        oldPost = post,
        oldDisposeSnapshots = disposeSnapshots;
      renderer = null, material = null, mesh = null, textures = [], post = null, disposeSnapshots = null;
      try {
        oldRenderer?.domElement && oldRenderer.domElement.parentNode && oldRenderer.domElement.parentNode.removeChild(oldRenderer.domElement)
      } catch {}(oldRenderer || oldMaterial || oldGeometry || oldTextures.length || oldPost || oldDisposeSnapshots) && scheduleDispose(() => {
        let t0 = performance.now();
        try {
          oldDisposeSnapshots?.()
        } catch {}
        try {
          oldPost && (oldPost.quad?.geometry?.dispose?.(), oldPost.material?.dispose?.(), oldPost.target?.dispose?.())
        } catch {}
        try {
          oldMaterial?.dispose?.()
        } catch {}
        try {
          oldGeometry?.dispose?.()
        } catch {}
        try {
          oldTextures.forEach(e => e?.dispose?.())
        } catch {}
        try {
          oldRenderer?.dispose?.(), oldRenderer?.forceContextLoss?.()
        } catch {}
        let hud = getMiraHud();
        hud && hud.gl.push([Math.round(t0 - hud.tap), `homeTeardown`, performance.now() - t0])
      })
    }
  }, [isStatic, rebuildKey]);
  // ---- Rendu React ----
  let currentSlide = resolvedSlides[Math.min(activeIndex, resolvedSlides.length - 1)] || resolvedSlides[0],
    showThumbs = showThumbnails && resolvedSlides.length > 1,
    // Échelle d'interface : max(1, largeur du slider / 1920) arrondie au centième — vignettes,
    // marges, décalage et taille de police des étiquettes sont multipliés par ce facteur.
    [uiScale, setUiScale] = useState(1),
    uiScaleRef = useRef(1);
  useEffect(() => {
    if (win === undefined) return;
    let root = rootRef.current;
    if (!root) return;
    let measure = () => {
      let s = Math.max(1, Math.round(root.clientWidth / 1920 * 100) / 100);
      s !== uiScaleRef.current && (uiScaleRef.current = s, startTransition(() => setUiScale(s)))
    };
    measure();
    let ro = new ResizeObserver(measure);
    return ro.observe(root), () => ro.disconnect()
  }, []);
  let thumbW = Math.round(thumbSize.width * uiScale),
    thumbH = Math.round(thumbSize.height * uiScale),
    thumbGap = Math.round(thumbSpacing * uiScale),
    thumbRadiusPx = Math.round(thumbRadius * uiScale),
    thumbMarginXPx = Math.round(thumbMarginX * uiScale),
    thumbMarginYPx = Math.round(thumbMarginY * uiScale),
    thumbNudge = Math.round(8 * uiScale),
    thumbLabelStyle = useMemo(() => {
      let css = {
        ...fontControlToCss(thumbLabelFont)
      };
      if (typeof css.fontSize == `string` && css.fontSize.endsWith(`px`)) {
        let px = parseFloat(css.fontSize);
        Number.isFinite(px) && (css.fontSize = `${px*uiScale}px`)
      }
      return css
    }, [thumbLabelFont, uiScale]);
  return isStatic ? jsxs(`div`, {
    ref: rootRef,
    style: {
      ...style,
      width: `100%`,
      height: `100%`,
      background,
      position: `relative`,
      overflow: `hidden`,
      borderRadius,
      boxSizing: `border-box`
    },
    children: [ jsx(SlotHost, {
      hostRef: slotHostRef,
      children: slot
    }), !currentSlide && jsx(EmptyState, {}), currentSlide && jsxs(`div`, {
      style: {
        width: `100%`,
        height: `100%`,
        position: `relative`,
        padding: imagePadding,
        boxSizing: `border-box`
      },
      children: [ jsx(SlideMedia, {
        slide: currentSlide,
        borderRadius,
        imgAspectRatio: `16/9`
      }), jsx(BottomGradient, {
        gradientHeight,
        gradientColor,
        gradientMaxOpacity,
        gradientMinOpacity,
        style: {
          borderBottomLeftRadius: borderRadius,
          borderBottomRightRadius: borderRadius
        }
      })]
    }), showThumbs && jsx(Thumbnails, {
      slides: resolvedSlides,
      active: activeIndex,
      onSelect: goTo,
      staticRender: true,
      thumbVideoPreview,
      getVideos: () => videoElsRef.current,
      tW: thumbW,
      tH: thumbH,
      tGap: thumbGap,
      tRadius: thumbRadiusPx,
      tMarginX: thumbMarginXPx,
      tMarginY: thumbMarginYPx,
      tNudge: thumbNudge,
      thumbStack,
      thumbPosition,
      thumbVerticalPos,
      innerPaddingEdges: thumbInset,
      showThumbLabels,
      thumbLabelColor,
      thumbLabelCSS: thumbLabelStyle,
      thumbHighlightColor,
      inactiveThumbOpacity,
      zIndex: thumbZIndex,
      showProgress: autoTransition,
      progressRef: {
        current: .4
      },
      thumbOverlayColor,
      thumbOverlayOpacity,
      thumbOverlayHeight,
      thumbOverlayBlend
    })]
  }) : resolvedSlides.length === 0 ? jsxs(`div`, {
    style: {
      ...style,
      width: `100%`,
      height: `100%`,
      position: `relative`,
      overflow: `hidden`,
      borderRadius,
      boxSizing: `border-box`
    },
    children: [ jsx(SlotHost, {
      hostRef: slotHostRef,
      children: slot
    }), !hasSlot || slotGaveUp ? jsx(EmptyState, {}) : jsx(`div`, {
      style: {
        position: `absolute`,
        inset: 0,
        background
      }
    })]
  }) : jsxs(`div`, {
    ref: rootRef,
    role: `region`,
    "aria-roledescription": `carousel`,
    "aria-label": `Image slider`,
    tabIndex: 0,
    onKeyDown,
    onPointerEnter,
    onPointerLeave,
    style: {
      ...style,
      width: `100%`,
      height: `100%`,
      background,
      position: `relative`,
      touchAction: `pan-y`,
      overflow: `hidden`,
      borderRadius,
      boxSizing: `border-box`
    },
    children: [ jsx(SlotHost, {
      hostRef: slotHostRef,
      children: slot
    }), jsx(`div`, {
      "aria-live": `polite`,
      style: {
        position: `absolute`,
        width: 1,
        height: 1,
        overflow: `hidden`,
        clipPath: `inset(50%)`,
        whiteSpace: `nowrap`
      },
      children: `Slide ${activeIndex+1} of ${resolvedSlides.length}${currentSlide?.title?`: ${currentSlide.title}`:``}`
    }), !glReady && currentSlide ? jsx(`div`, {
      style: {
        position: `absolute`,
        inset: 0,
        padding: imagePadding,
        boxSizing: `border-box`,
        pointerEvents: `none`,
        zIndex: 2,
        opacity: 1
      },
      children: jsx(SlideMedia, {
        slide: currentSlide,
        borderRadius,
        posterOnly: true
      })
    }) : null, resolvedSlides.length < 2 && currentSlide && jsx(`div`, {
      style: {
        position: `absolute`,
        inset: 0,
        padding: imagePadding,
        boxSizing: `border-box`,
        zIndex: 1,
        pointerEvents: `none`
      },
      children: jsx(SlideMedia, {
        slide: currentSlide,
        borderRadius
      })
    }), jsx(`div`, {
      ref: canvasHostRef,
      style: {
        width: `100%`,
        height: `100%`,
        position: `absolute`,
        top: 0,
        left: 0,
        zIndex: 1,
        pointerEvents: `none`
      }
    }), jsx(BottomGradient, {
      gradientHeight,
      gradientColor,
      gradientMaxOpacity,
      gradientMinOpacity,
      style: {
        zIndex: 2
      }
    }), tapZones && resolvedSlides.length > 1 && jsxs(Fragment, {
      children: [ jsx(`button`, {
        "aria-label": `Previous slide`,
        tabIndex: -1,
        "data-distorto-tap-zone": `true`,
        onClick: () => {
          Date.now() - lastDragEndRef.current < 400 || goTo((activeIndex - 1 + resolvedSlides.length) % resolvedSlides.length)
        },
        style: {
          position: `absolute`,
          top: 0,
          bottom: 0,
          left: 0,
          width: `50%`,
          zIndex: 2,
          background: `transparent`,
          border: `none`,
          padding: 0,
          margin: 0,
          cursor: `pointer`,
          WebkitTapHighlightColor: `transparent`,
          outline: `none`
        }
      }), jsx(`button`, {
        "aria-label": `Next slide`,
        tabIndex: -1,
        "data-distorto-tap-zone": `true`,
        onClick: () => {
          Date.now() - lastDragEndRef.current < 400 || goTo((activeIndex + 1) % resolvedSlides.length)
        },
        style: {
          position: `absolute`,
          top: 0,
          bottom: 0,
          right: 0,
          width: `50%`,
          zIndex: 2,
          background: `transparent`,
          border: `none`,
          padding: 0,
          margin: 0,
          cursor: `pointer`,
          WebkitTapHighlightColor: `transparent`,
          outline: `none`
        }
      })]
    }), showThumbs && jsx(Thumbnails, {
      slides: resolvedSlides,
      active: activeIndex,
      onSelect: goTo,
      staticRender: false,
      thumbVideoPreview,
      getVideos: () => videoElsRef.current,
      tW: thumbW,
      tH: thumbH,
      tGap: thumbGap,
      tRadius: thumbRadiusPx,
      tMarginX: thumbMarginXPx,
      tMarginY: thumbMarginYPx,
      tNudge: thumbNudge,
      thumbStack,
      thumbPosition,
      thumbVerticalPos,
      innerPaddingEdges: thumbInset,
      showThumbLabels,
      thumbLabelColor,
      thumbLabelCSS: thumbLabelStyle,
      thumbHighlightColor,
      inactiveThumbOpacity,
      zIndex: thumbZIndex,
      showProgress: autoTransition,
      overlayRef: progressBarRef,
      progressRef: progressValueRef,
      thumbOverlayColor,
      thumbOverlayOpacity,
      thumbOverlayHeight,
      thumbOverlayBlend
    })]
  })
}
// ---- État du module (affecté dans initHeroSliderModule) ----
var threePromise, loadThree, whenIdle, afterLoadWhenIdle, videoPool, videoPoolMax, pendingDispose, pendingDisposeTimer, DISPOSE_DELAY_MS, TRANSITIONS, MOUSE_EFFECT_INDEX, POST_VERTEX_SHADER, POST_FRAGMENT_SHADER, FONT_VARIANTS;

function initHeroSliderModule() {
  return (initHeroSliderModule = __esmMin((() => {
    initEnv(), initJsxRuntime(), initReact(), initFramer(), threePromise = null, loadThree = () => (threePromise ||= import(`./three.module.CJpBf6nA.mjs`).then(mod => (mod.x(), mod.C)), threePromise), getMiraHud(), whenIdle = cb => {
      let w = win;
      typeof w.requestIdleCallback == `function` ? w.requestIdleCallback(cb, {
        timeout: 4e3
      }) : win.requestAnimationFrame(() => win.setTimeout(cb, 200))
    }, afterLoadWhenIdle = cb => {
      let cancelled = false,
        run = () => {
          cancelled || whenIdle(() => !cancelled && cb())
        };
      return document.readyState === `complete` ? run() : win.addEventListener(`load`, run, {
        once: true
      }), () => {
        cancelled = true, win.removeEventListener(`load`, run)
      }
    // Bibliothèque des 27 transitions (clé → nom affiché + fragment GLSL) : fichiers
    // reference/webgl/hero-slider/shaders/transition-<clé>.frag.glsl. Accueil : noiseWarp.
    }, videoPool = new Map, videoPoolMax = () => win !== undefined && win.matchMedia?.(`(pointer: fine)`)?.matches ? 8 : 4, pendingDispose = null, pendingDisposeTimer = 0, DISPOSE_DELAY_MS = 900, TRANSITIONS = {
      displacementWave: {
        name: `Displacement Wave`,
        fragment: glsl(`transition-displacementWave.frag.glsl`)
      },
      fade: {
        name: `Fade`,
        fragment: glsl(`transition-fade.frag.glsl`)
      },
      zoom: {
        name: `Zoom`,
        fragment: glsl(`transition-zoom.frag.glsl`)
      },
      wipeLeft: {
        name: `Wipe Left`,
        fragment: glsl(`transition-wipeLeft.frag.glsl`)
      },
      wipeRight: {
        name: `Wipe Right`,
        fragment: glsl(`transition-wipeRight.frag.glsl`)
      },
      wipeUp: {
        name: `Wipe Up`,
        fragment: glsl(`transition-wipeUp.frag.glsl`)
      },
      wipeDown: {
        name: `Wipe Down`,
        fragment: glsl(`transition-wipeDown.frag.glsl`)
      },
      pixelate: {
        name: `Pixelate`,
        fragment: glsl(`transition-pixelate.frag.glsl`)
      },
      swirl: {
        name: `Swirl`,
        fragment: glsl(`transition-swirl.frag.glsl`)
      },
      ripple: {
        name: `Ripple`,
        fragment: glsl(`transition-ripple.frag.glsl`)
      },
      doorway: {
        name: `Doorway`,
        fragment: glsl(`transition-doorway.frag.glsl`)
      },
      radialBlur: {
        name: `Radial Blur`,
        fragment: glsl(`transition-radialBlur.frag.glsl`)
      },
      glass: {
        name: `Glass Distort`,
        fragment: glsl(`transition-glass.frag.glsl`)
      },
      colorFlash: {
        name: `Color Flash`,
        fragment: glsl(`transition-colorFlash.frag.glsl`)
      },
      dissolve: {
        name: `Dissolve`,
        fragment: glsl(`transition-dissolve.frag.glsl`)
      },
      filmBurn: {
        name: `Film Burn`,
        fragment: glsl(`transition-filmBurn.frag.glsl`)
      },
      liquidMorph: {
        name: `Liquid Morph`,
        fragment: glsl(`transition-liquidMorph.frag.glsl`)
      },
      noiseWarp: {
        name: `Noise Warp`,
        fragment: glsl(`transition-noiseWarp.frag.glsl`)
      },
      pageCurl: {
        name: `Page Curl`,
        fragment: glsl(`transition-pageCurl.frag.glsl`)
      },
      diagonalSlice: {
        name: `Diagonal Slice`,
        fragment: glsl(`transition-diagonalSlice.frag.glsl`)
      },
      hexMosaic: {
        name: `Hex Mosaic`,
        fragment: glsl(`transition-hexMosaic.frag.glsl`)
      },
      glitchBlock: {
        name: `Glitch Blocks`,
        fragment: glsl(`transition-glitchBlock.frag.glsl`)
      },
      lensPush: {
        name: `Lens Push`,
        fragment: glsl(`transition-lensPush.frag.glsl`)
      },
      inkSpread: {
        name: `Ink Spread`,
        fragment: glsl(`transition-inkSpread.frag.glsl`)
      },
      depthParallax: {
        name: `Depth Parallax`,
        fragment: glsl(`transition-depthParallax.frag.glsl`)
      },
      shutterIris: {
        name: `Shutter Iris`,
        fragment: glsl(`transition-shutterIris.frag.glsl`)
      },
      kaleidoZoom: {
        name: `Kaleido Zoom`,
        fragment: glsl(`transition-kaleidoZoom.frag.glsl`)
      }
    // Indices de l'effet souris (uniform uMouseEffect).
    }, MOUSE_EFFECT_INDEX = {
      push: 0,
      pull: 1,
      swirl: 2,
      ripple: 3,
      noise: 4
    }, POST_VERTEX_SHADER = glsl(`mouse-warp.vert.glsl`), POST_FRAGMENT_SHADER = glsl(`mouse-warp.frag.glsl`), FONT_VARIANTS = {
      Regular: {
        fontStyle: `normal`,
        fontWeight: 400
      },
      Thin: {
        fontStyle: `normal`,
        fontWeight: 100
      },
      "Extra Light": {
        fontStyle: `normal`,
        fontWeight: 200
      },
      Light: {
        fontStyle: `normal`,
        fontWeight: 300
      },
      Medium: {
        fontStyle: `normal`,
        fontWeight: 500
      },
      Semibold: {
        fontStyle: `normal`,
        fontWeight: 600
      },
      Bold: {
        fontStyle: `normal`,
        fontWeight: 700
      },
      "Extra Bold": {
        fontStyle: `normal`,
        fontWeight: 800
      },
      Black: {
        fontStyle: `normal`,
        fontWeight: 900
      },
      "Thin Italic": {
        fontStyle: `italic`,
        fontWeight: 100
      },
      "Extra Light Italic": {
        fontStyle: `italic`,
        fontWeight: 200
      },
      "Light Italic": {
        fontStyle: `italic`,
        fontWeight: 300
      },
      Italic: {
        fontStyle: `italic`,
        fontWeight: 400
      },
      "Medium Italic": {
        fontStyle: `italic`,
        fontWeight: 500
      },
      "Semibold Italic": {
        fontStyle: `italic`,
        fontWeight: 600
      },
      "Bold Italic": {
        fontStyle: `italic`,
        fontWeight: 700
      },
      "Extra Bold Italic": {
        fontStyle: `italic`,
        fontWeight: 800
      },
      "Black Italic": {
        fontStyle: `italic`,
        fontWeight: 900
      },
      "Regular Italic": {
        fontStyle: `italic`,
        fontWeight: 400
      }
    // Panneau de propriétés Framer (valeurs par défaut du composant).
    }, addPropertyControls(DistortoSlider, {
      slot: {
        type: ControlType.ComponentInstance,
        title: `Slot`,
        description: `Connect a Collection List bound to your CMS collection. Each item needs an image or a video (video wins; the image becomes its poster), plus optional text: first line = title, second line = status. When connected, it replaces the manual Slides in Content. The list stays hidden.`
      },
      Content: {
        type: ControlType.Object,
        title: `Content`,
        controls: {
          slides: {
            type: ControlType.Array,
            title: `Slides`,
            description: `Manual slides — used when no CMS Slot is connected (up to 6).`,
            control: {
              type: ControlType.Object,
              controls: {
                mediaType: {
                  type: ControlType.Enum,
                  title: `Type`,
                  options: [`image`, `video`],
                  optionTitles: [`Image`, `Video`],
                  defaultValue: `image`,
                  displaySegmentedControl: true
                },
                image: {
                  type: ControlType.ResponsiveImage,
                  title: `Image`,
                  hidden: e => e?.mediaType === `video`
                },
                videoFile: {
                  type: ControlType.File,
                  title: `Video`,
                  allowedFileTypes: [`mp4`, `webm`, `mov`],
                  hidden: e => e?.mediaType !== `video`
                },
                videoURL: {
                  type: ControlType.String,
                  title: `Video URL`,
                  placeholder: `https://...`,
                  description: `Recommended: host the video externally (CDN or storage bucket) to save your site's bandwidth. If set, this takes priority over an uploaded file.`,
                  hidden: e => e?.mediaType !== `video`
                },
                posterImage: {
                  type: ControlType.ResponsiveImage,
                  title: `Poster`,
                  description: `Still shown instantly while the video loads, and used for poster-mode thumbnails. Strongly recommended.`,
                  hidden: e => e?.mediaType !== `video`
                },
                title: {
                  type: ControlType.String,
                  title: `Title`,
                  defaultValue: `Title`,
                  description: `First label line on the active thumbnail.`
                },
                status: {
                  type: ControlType.String,
                  title: `Status`,
                  defaultValue: `Status`,
                  description: `Second label line, shown opposite (Row) or below (Column) the title.`
                }
              }
            },
            defaultValue: [],
            maxCount: 6
          }
        }
      },
      Layout: {
        type: ControlType.Object,
        title: `Layout`,
        controls: {
          background: {
            type: ControlType.Color,
            title: `Background`,
            defaultValue: `#000000`,
            description: `Fill behind the slides — visible in the gap Image Padding creates.`
          },
          borderRadius: {
            type: ControlType.Number,
            title: `Radius`,
            defaultValue: 0,
            min: 0,
            max: 100,
            step: 1,
            unit: `px`
          },
          imagePadding: {
            type: ControlType.Padding,
            title: `Image Padding`,
            defaultValue: `0px`,
            description: `Space between the component's edges and the slide image, revealing the Background color.`
          },
          padding: {
            type: ControlType.Padding,
            title: `Thumb Inset`,
            defaultValue: `16px`,
            description: `Insets the thumbnail rail from the slider's edges (Margin X/Y in Thumbs adds on top of this).`
          }
        }
      },
      Transition: {
        type: ControlType.Object,
        title: `Transition`,
        controls: {
          transitionDuration: {
            type: ControlType.Number,
            title: `Duration`,
            description: `How long each slide transition takes.`,
            defaultValue: 1.8,
            min: .2,
            max: 3,
            step: .1,
            unit: `s`
          },
          transitionEffect: {
            type: ControlType.Enum,
            title: `Effect`,
            description: `WebGL shader played between slides. Directional effects (wipes, page curl, film burn…) automatically play mirrored when navigating backward.`,
            options: Object.keys(TRANSITIONS),
            optionTitles: Object.values(TRANSITIONS).map(e => e.name),
            defaultValue: `liquidMorph`
          },
          pauseOnHover: {
            type: ControlType.Boolean,
            title: `Pause on Hover`,
            description: `Pauses autoplay while the cursor is over the slider (desktop only). Progress resumes where it left off.`,
            defaultValue: true,
            hidden: e => !e?.autoTransition
          },
          preloaderSync: {
            type: ControlType.Enum,
            title: `Preloader`,
            options: [`reveal`, `done`, `off`],
            optionTitles: [`Start With Reveal`, `Wait Until Done`, `Ignore`],
            defaultValue: `reveal`,
            description: `With PortalPreloader on the page, the slider holds parked on its first frame and starts as the reveal opens — the slide is already alive as the page appears, with its full duration counted from that moment. Wait Until Done starts playback only after the preloader fully finishes (the start happens on screen). Fully automatic; without a preloader the slider starts normally.`
          },
          autoTransition: {
            type: ControlType.Boolean,
            title: `Autoplay`,
            defaultValue: true,
            description: `Advance slides automatically. The active thumbnail shows a progress bar for the current cycle.`
          },
          autoTransitionTimer: {
            type: ControlType.Number,
            title: `Interval`,
            defaultValue: 5,
            min: 1,
            max: 10,
            step: 1,
            unit: `s`,
            description: `How long each slide stays before auto-advancing.`,
            hidden: e => !e?.autoTransition
          }
        }
      },
      Mouse: {
        type: ControlType.Object,
        title: `Mouse`,
        controls: {
          mouseWarp: {
            type: ControlType.Boolean,
            title: `Mouse Warp`,
            description: `Soft magnetic distortion that pushes the image away from the cursor. Automatically disabled on touch devices.`,
            defaultValue: true
          },
          mouseWarpStrength: {
            type: ControlType.Number,
            title: `Mouse Strength`,
            description: `Intensity of the cursor effect.`,
            defaultValue: 1,
            min: 0,
            max: 2,
            step: .01,
            hidden: e => !e.mouseWarp
          },
          mouseEffect: {
            type: ControlType.Enum,
            title: `Mouse Effect`,
            description: `Push shoves pixels away from the cursor (the classic look). Pull attracts them like a lens. Swirl rotates around the cursor. Ripple radiates animated rings. Noise smears with organic turbulence.`,
            options: [`push`, `pull`, `swirl`, `ripple`, `noise`],
            optionTitles: [`Push`, `Pull`, `Swirl`, `Ripple`, `Noise`],
            defaultValue: `push`,
            hidden: e => !e.mouseWarp
          },
          mouseRadius: {
            type: ControlType.Number,
            title: `Mouse Radius`,
            description: `Size of the area around the cursor the effect covers.`,
            defaultValue: .1,
            min: .03,
            max: .4,
            step: .01,
            hidden: e => !e.mouseWarp
          },
          mouseChroma: {
            type: ControlType.Number,
            title: `Chromatic`,
            description: `Splits the red and blue channels along the distortion for a chromatic aberration halo. 0 disables it. Works with every effect mode.`,
            defaultValue: 0,
            min: 0,
            max: 1,
            step: .01,
            hidden: e => !e.mouseWarp
          },
          mouseSpeedReact: {
            type: ControlType.Boolean,
            title: `React to Speed`,
            description: `Scales the effect with cursor velocity — it blooms while the cursor moves and settles to nothing at rest, instead of being a constant dent.`,
            defaultValue: false,
            hidden: e => !e.mouseWarp
          }
        }
      },
      Thumbs: {
        type: ControlType.Object,
        title: `Thumbs`,
        controls: {
          showThumbnails: {
            type: ControlType.Boolean,
            title: `Show Thumbs`,
            defaultValue: true,
            enabledTitle: `Show`,
            disabledTitle: `Hide`
          },
          thumbPosition: {
            type: ControlType.Enum,
            title: `Horizontal`,
            description: `Horizontal anchor of the thumbnail rail.`,
            options: [`left`, `center`, `right`],
            optionTitles: [`Left`, `Center`, `Right`],
            defaultValue: `center`,
            displaySegmentedControl: true
          },
          thumbVerticalPos: {
            type: ControlType.Enum,
            title: `Vertical`,
            description: `Vertical anchor of the thumbnail rail.`,
            options: [`top`, `center`, `bottom`],
            optionTitles: [`Top`, `Center`, `Bottom`],
            defaultValue: `bottom`,
            displaySegmentedControl: true
          },
          thumbStack: {
            type: ControlType.Enum,
            title: `Stack`,
            description: `Row lays thumbnails side by side with labels above/below the active one; Column stacks them vertically with labels beside it.`,
            options: [`row`, `column`],
            optionTitles: [`Row`, `Column`],
            defaultValue: `row`,
            displaySegmentedControl: true
          },
          thumbMarginX: {
            type: ControlType.Number,
            title: `Margin X`,
            description: `Extra horizontal offset from the anchor position.`,
            defaultValue: 0,
            min: 0,
            max: 200,
            step: 1,
            unit: `px`
          },
          thumbMarginY: {
            type: ControlType.Number,
            title: `Margin Y`,
            description: `Extra vertical offset from the anchor position.`,
            defaultValue: 0,
            min: 0,
            max: 200,
            step: 1,
            unit: `px`
          },
          thumbSize: {
            type: ControlType.Object,
            title: `Size`,
            controls: {
              width: {
                type: ControlType.Number,
                title: `Width`,
                defaultValue: 130,
                min: 20,
                max: 200,
                step: 1,
                unit: `px`
              },
              height: {
                type: ControlType.Number,
                title: `Height`,
                defaultValue: 72,
                min: 10,
                max: 120,
                step: 1,
                unit: `px`
              }
            },
            defaultValue: {
              width: 130,
              height: 72
            }
          },
          thumbSpacing: {
            type: ControlType.Number,
            title: `Gap`,
            defaultValue: 4,
            min: 0,
            max: 40,
            step: 1,
            unit: `px`
          },
          thumbRadius: {
            type: ControlType.Number,
            title: `Radius`,
            defaultValue: 0,
            min: 0,
            max: 40,
            step: 1,
            unit: `px`
          },
          thumbHighlightColor: {
            type: ControlType.Color,
            title: `Highlight`,
            defaultValue: `#FFFFFF00`,
            description: `Outline around the active thumbnail. Transparent by default (off).`
          },
          inactiveThumbOpacity: {
            type: ControlType.Number,
            title: `Idle Opacity`,
            description: `Opacity of the non-active thumbnails.`,
            defaultValue: .4,
            min: 0,
            max: 1,
            step: .01
          },
          thumbZIndex: {
            type: ControlType.Number,
            title: `Thumb Z`,
            defaultValue: 3,
            min: 0,
            max: 99,
            step: 1,
            displayStepper: true,
            description: `Stacking order of the thumbnail rail. Slides sit at 1, the gradient and tap zones at 2 — keep this at 3 or higher so the thumbnails stay clickable above them.`
          },
          thumbOverlayColor: {
            type: ControlType.Color,
            title: `Progress Bar`,
            defaultValue: `#FFFFFF`,
            description: `The autoplay progress bar that fills along the bottom of the active thumbnail. Only appears while Autoplay is on.`
          },
          thumbOverlayOpacity: {
            type: ControlType.Number,
            title: `Bar Opacity`,
            defaultValue: 1,
            min: 0,
            max: 1,
            step: .01
          },
          thumbOverlayHeight: {
            type: ControlType.Number,
            title: `Bar Height`,
            defaultValue: 2,
            min: 0,
            max: 100,
            step: 1,
            unit: `%`,
            description: `Height of the progress bar as a percentage of the thumbnail. At 100% it becomes a full-thumbnail fill wipe.`
          },
          thumbOverlayBlend: {
            type: ControlType.Enum,
            title: `Bar Blend`,
            description: `Blend mode of the progress bar against the thumbnail image — Difference or Exclusion stay visible on any footage.`,
            options: [`normal`, `multiply`, `screen`, `overlay`, `darken`, `lighten`, `color-dodge`, `color-burn`, `hard-light`, `soft-light`, `difference`, `exclusion`, `hue`, `saturation`, `color`, `luminosity`],
            optionTitles: [`Normal`, `Multiply`, `Screen`, `Overlay`, `Darken`, `Lighten`, `Color Dodge`, `Color Burn`, `Hard Light`, `Soft Light`, `Difference`, `Exclusion`, `Hue`, `Saturation`, `Color`, `Luminosity`],
            defaultValue: `normal`
          }
        }
      },
      Labels: {
        type: ControlType.Object,
        title: `Labels`,
        controls: {
          showThumbLabels: {
            type: ControlType.Boolean,
            title: `Show Labels`,
            defaultValue: true,
            enabledTitle: `Show`,
            disabledTitle: `Hide`,
            description: `Title and status text on the active thumbnail — from each slide's Title/Status fields, or the first two text lines of the CMS item.`
          },
          thumbLabelFont: {
            type: ControlType.Font,
            title: `Font`,
            controls: `extended`,
            defaultFontType: `sans-serif`,
            defaultValue: {
              fontSize: `10px`,
              variant: `Medium`,
              letterSpacing: `-0.01em`,
              lineHeight: `1em`
            }
          },
          thumbLabelColor: {
            type: ControlType.Color,
            title: `Color`,
            defaultValue: `#FFFFFF`
          }
        }
      },
      Gradient: {
        type: ControlType.Object,
        title: `Gradient`,
        description: `Component from [LaunchNow Design](https://launchnow.design/?utm_source=codecomponent)`,
        controls: {
          gradientColor: {
            type: ControlType.Color,
            title: `Color`,
            description: `Color of the bottom gradient overlay.`,
            defaultValue: `#000000`
          },
          gradientHeight: {
            type: ControlType.Number,
            title: `Height`,
            description: `How far the gradient reaches up from the bottom edge.`,
            defaultValue: 55,
            min: 0,
            max: 100,
            step: 1,
            unit: `%`
          },
          gradientMaxOpacity: {
            type: ControlType.Number,
            title: `Max Alpha`,
            description: `Gradient opacity at the bottom edge.`,
            defaultValue: .75,
            min: 0,
            max: 1,
            step: .01
          },
          gradientMinOpacity: {
            type: ControlType.Number,
            title: `Min Alpha`,
            description: `Gradient opacity where it fades out at its upper end.`,
            defaultValue: 0,
            min: 0,
            max: 1,
            step: .01
          }
        }
      },
      Style: {
        type: ControlType.Object,
        title: `Style`,
        controls: {}
      },
      swipeNav: {
        type: ControlType.Boolean,
        title: `Swipe`,
        defaultValue: true,
        enabledTitle: `On`,
        disabledTitle: `Off`,
        description: `Navigate by dragging horizontally across the slide. Vertical scrolling is unaffected.`
      },
      tapZones: {
        type: ControlType.Boolean,
        title: `Tap Zones`,
        defaultValue: true,
        enabledTitle: `On`,
        disabledTitle: `Off`,
        description: `Invisible half-width click/tap areas over the slide: left half goes to the previous slide, right half to the next.`
      },
      thumbVideoPreview: {
        type: ControlType.Enum,
        title: `Video Thumbs`,
        options: [`poster`, `live`],
        optionTitles: [`Poster (fast)`, `Live video`],
        defaultValue: `poster`,
        displaySegmentedControl: true,
        description: `Live thumbnails MIRROR each slide's video onto a small canvas — no second download, always in sync — and keep every slide's video playing so all thumbnails stay in motion (higher decode cost with many video slides). Poster shows the slide's still image instead and pauses off-stage videos entirely (cheapest). Videos always pause when the slider is offscreen.`
      }
    })
  })))()
}

// =====================================================================
// Instance de l'accueil (calque « Project Showcase Slider », nodeId DaVk4rgbd) —
// copie exacte des props passées par la route (bundle embelli L.12761-12991).
// Breakpoints Framer : C3xj8tOVY ≥ 1200 px (base), kUxiuAHJw 810–1199,98 px, qjDyvUsLb ≤ 809,98 px.
// =====================================================================
export const HOME_INSTANCE_PROPS = {
  Content: { slides: [] }, // vide : les diapositives viennent du slot CMS
  Gradient: {
    gradientColor: `var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))`, // #0d0d0d
    gradientHeight: 100,
    gradientMaxOpacity: 0.65,
    gradientMinOpacity: 0.65,
  },
  Labels: {
    showThumbLabels: false,
    thumbLabelColor: `var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))`,
    thumbLabelFont: { fontFamily: `"Switzer", "Switzer Placeholder", sans-serif`, fontSize: `11px`, fontStyle: `normal`, fontWeight: 600, letterSpacing: `-0.03em`, lineHeight: `1em` },
  },
  Layout: {
    background: `var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))`, // #0d0d0d
    borderRadius: 0,
    imagePadding: `0px`,
    padding: `0px`,
  },
  Mouse: { mouseChroma: 0.65, mouseEffect: `ripple`, mouseRadius: 0.4, mouseSpeedReact: true, mouseWarp: true, mouseWarpStrength: 2 },
  // slot : liste de collection « Projects » (alias VAKOch8rL), limite 4, ordre de la collection ;
  // chaque élément = lien vers /projects/<slug> contenant l'image de couverture, une vidéo
  // (si le champ booléen lqxb5gqxK ≠ false) et le titre. Voir docs/WEBGL.md pour les URL.
  slot: `<Projects Source (Slot)>`,
  style: { height: `100%`, width: `100%` },
  swipeNav: false,
  tapZones: false,
  Thumbs: {
    inactiveThumbOpacity: 0.3,
    showThumbnails: true,
    thumbHighlightColor: `rgba(255, 255, 255, 0)`,
    thumbMarginX: 30,
    thumbMarginY: 0,
    thumbOverlayBlend: `saturation`,
    thumbOverlayColor: `var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))`,
    thumbOverlayHeight: 100,
    thumbOverlayOpacity: 1,
    thumbPosition: `right`,
    thumbRadius: 8,
    thumbSize: { height: 50, width: 90 },
    thumbSpacing: 4,
    thumbStack: `column`,
    thumbVerticalPos: `center`,
    thumbZIndex: 3,
  },
  thumbVideoPreview: `live`,
  Transition: {
    autoTransition: true,
    autoTransitionTimer: 4,
    pauseOnHover: false,
    preloaderSync: `reveal`,
    transitionDuration: 1,
    transitionEffect: `noiseWarp`,
  },
};

// Surcharges par breakpoint (remplacent la prop de même nom au premier niveau).
export const HOME_BREAKPOINT_OVERRIDES = {
  kUxiuAHJw: { swipeNav: true }, // tablette 810–1199 px
  qjDyvUsLb: { // mobile ≤ 809 px
    swipeNav: true,
    tapZones: true,
    Thumbs: {
      inactiveThumbOpacity: 0.3,
      showThumbnails: false,
      thumbHighlightColor: `rgba(255, 255, 255, 0)`,
      thumbMarginX: 30,
      thumbMarginY: 0,
      thumbOverlayBlend: `normal`,
      thumbOverlayColor: `var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))`,
      thumbOverlayHeight: 2,
      thumbOverlayOpacity: 1,
      thumbPosition: `right`,
      thumbRadius: 8,
      thumbSize: { height: 50, width: 90 },
      thumbSpacing: 4,
      thumbStack: `column`,
      thumbVerticalPos: `center`,
      thumbZIndex: 3,
    },
  },
};
