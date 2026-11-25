// @ts-nocheck
'use client';
/* eslint-disable */
// GÉNÉRÉ par scripts/agents/homea/port.mjs — ne pas modifier à la main.
import * as React from 'react';
import { startTransition, useState, useRef, useLayoutEffect, useMemo, useInsertionEffect, useCallback, useEffect } from 'react';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { createPortal } from 'react-dom';
// Liaisons du module d'origine (globalThis.window / navigator, undefined côté serveur).
const win = typeof window !== 'undefined' ? window : undefined;
const nav = typeof navigator !== 'undefined' ? navigator : undefined;
// Initialisation paresseuse rolldown : exécutée une seule fois, à l'import.
const __esmMin = (fn) => { let done = false, r; return () => (done ? r : ((done = true), (r = fn()))); };
const initEnv = () => {}, initReact = () => {}, initReactDom = () => {}, initJsxRuntime = () => {}, initFramer = () => {};

/* global glsl */
// glsl(nom) = texte GLSL verbatim de reference/webgl/preloader/shaders/<nom> (au portage : import « ?raw »).
// =====================================================================
// Outil de l'auteur « MiraLab » (HORS PÉRIMÈTRE du clone) : drapeaux de
// débogage lus dans ?miralab=a,b,c puis mémorisés dans sessionStorage
// `miralab`. Le drapeau `before` active tous les drapeaux sauf `hud`.
// Drapeau lu par ce composant : `ppcanvas` (garde le canvas 2D du logo).
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

// [r,g,b] (0–1) → "rgb(R, G, B)".
function rgbToCss(rgb) {
  return `rgb(${Math.round(rgb[0]*255)}, ${Math.round(rgb[1]*255)}, ${Math.round(rgb[2]*255)})`
}

// Résout une couleur CSS quelconque (y compris var(--token, …)) en [r,g,b] 0–1 via un
// <span> sonde + getComputedStyle. Cache de 64 entrées ; une couleur contenant var(
// est re-résolue au plus toutes les 400 ms (suit les changements de thème).
function resolveColorRgb(color, host) {
  if (typeof document > `u` || !color) return [0, 0, 0];
  let hasVar = color.indexOf(`var(`) !== -1,
    cached = colorCache.get(color);
  if (cached && (!hasVar || performance.now() - cached.t < 400)) return cached.v;
  colorProbe || (colorProbe = document.createElement(`span`), colorProbe.style.display = `none`);
  let parent = host || document.documentElement;
  colorProbe.parentElement !== parent && parent.appendChild(colorProbe), colorProbe.style.color = ``, colorProbe.style.color = color;
  let computed = win.getComputedStyle(colorProbe).color,
    rgb = [0, 0, 0],
    match = /rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/.exec(computed);
  return match ? rgb = [parseFloat(match[1]) / 255, parseFloat(match[2]) / 255, parseFloat(match[3]) / 255] : (match = /color\(srgb\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)/.exec(computed), match && (rgb = [parseFloat(match[1]), parseFloat(match[2]), parseFloat(match[3])])), colorCache.size > 64 && colorCache.clear(), colorCache.set(color, {
    v: rgb,
    t: performance.now()
  }), rgb
}

// smoothstep() de GLSL, en JS.
function smoothstep(edge0, edge1, x) {
  let range = edge1 - edge0;
  if (range === 0) return x < edge0 ? 0 : 1;
  let k = Math.min(Math.max((x - edge0) / range, 0), 1);
  return k * k * (3 - 2 * k)
}

// Fabrique un bruit de valeur 2D (interpolation hermite) sur un hachage fract(k·p) :
// portage CPU de noiseFB (123.34, 456.21, 45.32) et noiseIK (127.1, 311.7, 34.7).
// NB : d = hx² + hy² + kAdd, alors que le GLSL fait dot(p, p + k) = hx² + hy² + k·(hx + hy) :
// ce bruit CPU NE reproduit PAS exactement le shader (il ne sert qu'aux replis CSS).
function makeHashNoise(kx, ky, kAdd) {
  let hash = (ix, iy) => {
    let hx = fract(ix * kx),
      hy = fract(iy * ky),
      d = hx * hx + hy * hy + kAdd;
    return hx = fract(hx + d), hy = fract(hy + d), fract(hx * hy)
  };
  return (x, y) => {
    let x0 = Math.floor(x),
      y0 = Math.floor(y),
      fx = x - x0,
      fy = y - y0,
      ux = fx * fx * (3 - 2 * fx),
      uy = fy * fy * (3 - 2 * fy),
      a = hash(x0, y0),
      b = hash(x0 + 1, y0),
      c = hash(x0, y0 + 1),
      d = hash(x0 + 1, y0 + 1);
    return mix(a, b, ux) + (c - a) * uy * (1 - ux) + (d - b) * ux * uy
  }
}

// Portage CPU de hexCell() (accrochage à une grille hexagonale).
function hexCellCPU(u, v, scale) {
  let qx = u * scale * 1.1547,
    qy = v * scale,
    ax = qx + qy * .5,
    ay = qy,
    centerX = Math.floor(ax) + .5,
    centerY = Math.floor(ay) + .5,
    rx = centerX - centerY * .5;
  return rx /= 1.1547, [rx / scale, centerY / scale]
}

// Contexte WebGL 1 du préchargeur (alpha, premultipliedAlpha, sans antialias/depth/stencil).
// Géométrie : un triangle plein écran (-1,-1 / 3,-1 / -1,3). Blending ONE / ONE_MINUS_SRC_ALPHA,
// clearColor transparent. Si OES_standard_derivatives existe, le fragment shader reçoit
// "#extension GL_OES_standard_derivatives : enable\n#define HAS_DERIV 1\n" en tête.
// Retourne null si WebGL est indisponible ou si un shader échoue → replis CSS.
// Les uniforms sont mis en cache : gl.uniform* n'est appelé que si la valeur change.
function createPreloaderGL(canvas) {
  let gl = null;
  try {
    gl = canvas.getContext(`webgl`, {
      alpha: true,
      premultipliedAlpha: true,
      antialias: false,
      depth: false,
      stencil: false,
      preserveDrawingBuffer: false
    }) || canvas.getContext(`experimental-webgl`)
  } catch {
    gl = null
  }
  if (!gl) return null;
  let compileShader = (type, source) => {
      let shader = gl.createShader(type);
      return gl.shaderSource(shader, source), gl.compileShader(shader), gl.getShaderParameter(shader, gl.COMPILE_STATUS) ? shader : (console.error(`PortalPreloader shader error:`, gl.getShaderInfoLog(shader)), gl.deleteShader(shader), null)
    },
    derivHeader = gl.getExtension(`OES_standard_derivatives`) ? `#extension GL_OES_standard_derivatives : enable
#define HAS_DERIV 1
` : ``,
    vertexShader = compileShader(gl.VERTEX_SHADER, VERTEX_SHADER),
    fragmentShader = compileShader(gl.FRAGMENT_SHADER, derivHeader + FRAGMENT_SHADER);
  if (!vertexShader || !fragmentShader) return null;
  let program = gl.createProgram();
  if (gl.attachShader(program, vertexShader), gl.attachShader(program, fragmentShader), gl.linkProgram(program), !gl.getProgramParameter(program, gl.LINK_STATUS)) return console.error(`PortalPreloader link error:`, gl.getProgramInfoLog(program)), null;
  gl.useProgram(program);
  let quadBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer), gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  let aPosLoc = gl.getAttribLocation(program, `aPos`);
  gl.enableVertexAttribArray(aPosLoc), gl.vertexAttribPointer(aPosLoc, 2, gl.FLOAT, false, 0, 0), gl.enable(gl.BLEND), gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA), gl.clearColor(0, 0, 0, 0);
  let uniformLocs = {},
    loc = name => (name in uniformLocs || (uniformLocs[name] = gl.getUniformLocation(program, name)), uniformLocs[name]),
    logoTexture = null,
    cache1f = new Map,
    cache2f = new Map,
    cache3f = new Map;
  return {
    setUniform1f: (name, x) => {
      cache1f.has(name) && cache1f.get(name) === x || (cache1f.set(name, x), gl.uniform1f(loc(name), x))
    },
    setUniform2f: (name, x, y) => {
      let prev = cache2f.get(name);
      prev && prev[0] === x && prev[1] === y || (cache2f.set(name, [x, y]), gl.uniform2f(loc(name), x, y))
    },
    setUniform3f: (name, x, y, z) => {
      let prev = cache3f.get(name);
      prev && prev[0] === x && prev[1] === y && prev[2] === z || (cache3f.set(name, [x, y, z]), gl.uniform3f(loc(name), x, y, z))
    },
    // Texture du logo : CLAMP_TO_EDGE, LINEAR/LINEAR, sans mipmaps, RGBA, unité 0 (uLogo).
    setLogoTexture: source => {
      logoTexture ||= gl.createTexture(), gl.activeTexture(gl.TEXTURE0), gl.bindTexture(gl.TEXTURE_2D, logoTexture), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR), gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source), gl.uniform1i(loc(`uLogo`), 0)
    },
    draw: () => {
      gl.clear(gl.COLOR_BUFFER_BIT), gl.drawArrays(gl.TRIANGLES, 0, 3)
    },
    resize: (width, height) => {
      canvas.width = width, canvas.height = height, gl.viewport(0, 0, width, height)
    },
    dispose: () => {
      try {
        logoTexture && gl.deleteTexture(logoTexture), gl.deleteBuffer(quadBuffer), gl.deleteProgram(program), gl.deleteShader(vertexShader), gl.deleteShader(fragmentShader), gl.getExtension(`WEBGL_lose_context`)?.loseContext()
      } catch {}
    }
  }
}

// Repli sans WebGL (effets directionnels) : rideau CSS clip-path inset().
function insetClipPath(direction, progress) {
  let pct = (progress * 100).toFixed(2) + `%`;
  switch (direction) {
    case `down`:
      return `inset(${pct} 0 0 0)`;
    case `left`:
      return `inset(0 ${pct} 0 0)`;
    case `right`:
      return `inset(0 0 0 ${pct})`;
    case `center`:
      return `inset(${pct} ${pct} ${pct} ${pct})`;
    default:
      return `inset(0 0 ${pct} 0)`
  }
}

// Repli CSS des effets « à front » (curve, streaks, liquid, pixelate, glitch, filmBurn) hors
// direction center : polygone clip-path de 28 segments qui suit le front du rideau
// (arc = sin(π·x)·vitesse·0,85·bend·0,5, comme le shader ; Film Burn utilise le bruit CPU).
function frontPolygonClipPath(effect, direction, progress, velocity, bend, softness) {
  let soft = Math.max(softness, .002),
    arcMax = .85 * bend * .5,
    isFrontFamily = effect === `curve` || effect === `streaks` || effect === `liquid` || effect === `pixelate`,
    points = [],
    frontAt = cross => {
      if (effect === `filmBurn`) {
        let envelope = Math.sin(Math.PI * progress),
          noiseY = (1 - mix(1.2, -.2, progress)) * 9 + progress * 4,
          noise = noiseFB(cross * 9, noiseY),
          edgePos = mix(1.2, -.2, progress) + (noise - .5) * .12 * envelope;
        return Math.min(Math.max(1 - edgePos, -.1), 1.1)
      }
      let arc = isFrontFamily ? Math.sin(cross * Math.PI) * Math.min(Math.max(velocity, 0), 1) * .85 * bend * .5 : 0;
      return progress * (1 + arcMax + soft * 2) - arcMax - soft + arc
    },
    horizontal = direction === `left` || direction === `right`,
    fronts = [];
  for (let k = 0; k <= 28; k++) fronts.push(frontAt(horizontal ? 1 - k / 28 : k / 28));
  let addPoint = (px, py) => points.push(`${(px*100).toFixed(2)}% ${(py*100).toFixed(2)}%`);
  if (direction === `up`) {
    addPoint(0, 0), addPoint(1, 0);
    for (let k = 28; k >= 0; k--) addPoint(k / 28, 1 - fronts[k])
  } else if (direction === `down`) {
    addPoint(0, 1);
    for (let k = 0; k <= 28; k++) addPoint(k / 28, fronts[k]);
    addPoint(1, 1)
  } else if (direction === `left`) {
    addPoint(0, 0);
    for (let k = 0; k <= 28; k++) addPoint(1 - fronts[k], k / 28);
    addPoint(0, 1)
  } else {
    addPoint(1, 0), addPoint(1, 1);
    for (let k = 28; k >= 0; k--) addPoint(fronts[k], k / 28)
  }
  return `polygon(${points.join(`, `)})`
}

// Couverture CPU au point (x, y) : sert d'opacité globale du calque CSS pour les effets
// « de champ » (dissolve, ink, hex, noiseWarp) et pour la direction center.
// Appelé avec x = y = 0,5 (centre de l'écran).
function coverageCPU(effect, direction, progress, x, y, bend, softness, aspect) {
  if (progress <= .001) return 1;
  if (progress >= .999) return 0;
  let soft = Math.max(softness, .002),
    localProgress = Math.min(Math.max(progress * 1.6 - (() => {
      if (direction === `down`) return 1 - y;
      if (direction === `left`) return 1 - x;
      if (direction === `right`) return x;
      if (direction === `center`) {
        let dx = (x - .5) * aspect,
          dy = y - .5;
        return Math.hypot(dx, dy) / Math.hypot(aspect * .5, .5)
      }
      return y
    })() * .6, 0), 1);
  if (effect === `dissolve`) {
    let noise = noiseD(x * 20 + progress * 10, y * 20 + progress * 10),
      threshold = mix(-.05, 1.05, localProgress);
    return smoothstep(threshold - .04, threshold + .04, noise)
  }
  if (effect === `ink`) {
    let noise = noiseIK(x * 6, y * 6),
      radius = .9 * progress,
      dist = Math.hypot(x - .5, y - .5),
      m = smoothstep(radius + .08, radius - .08, dist + (noise - .5) * .18);
    return 1 - Math.min(Math.max(m, 0), 1)
  }
  if (effect === `hex`) {
    let [cellX, cellY] = hexCellCPU(x, y, mix(6, 40, Math.abs(2 * progress - 1)));
    return 1 - smoothstep(.2, .8, localProgress + (hashGL(cellX * 37, cellY * 37) - .5) * .3)
  }
  if (effect === `noiseWarp`) {
    let mask = smoothstep(1 - localProgress - .18, 1 - localProgress + .18, .5);
    return mask *= smoothstep(0, .08, localProgress), mask = Math.max(mask, smoothstep(.85, .99, localProgress)), 1 - mask
  }
  let qx = (x - .5) * aspect,
    qy = y - .5,
    maxR = Math.hypot(aspect * .5, .5),
    dist = Math.hypot(qx, qy) / maxR,
    arcMax = .85 * bend * .5,
    front = progress * (1 + arcMax + soft * 2) - arcMax - soft;
  return smoothstep(front - soft, front + soft, dist)
}

// =====================================================================
// PortalPreloader — composant de code Framer « Portal Preloader » (LaunchNow Design).
// Calque plein écran (position fixed, z-index `zIndex`, rendu par portail dans
// document.body quand `takeover`) : logo centré + compteur 0→100 % (+ barre),
// puis révélation de la page — sur l'accueil « à travers le logo » (revealMode logoMask).
// Valeurs de l'instance de l'accueil : HOME_INSTANCE_PROPS en fin de fichier.
// =====================================================================
function PortalPreloader(props) {
  let {
    counterSlot,
    logoImage,
    logoWidth = 160,
    logoIntroDuration = .7,
    introDelay = .1,
    introEase = `expoOut`,
    introMoveX = 0,
    introMoveY = 28,
    introScale = 1,
    introBlur = 0,
    introFade = true,
    introMasked = false,
    introRotate = 0,
    introEaseCustom = `0.22, 1, 0.36, 1`,
    loadMode = `load`,
    minTime = 1.8,
    maxWait = 8,
    hold = .4,
    revealMode = `logoMask`,
    maskScale = 60,
    effect = `noiseWarp`,
    direction = `up`,
    revealDuration = 1.4,
    easing = `expoInOut`,
    bend = .6,
    strength = .6,
    band = .14,
    chroma = 0,
    softness = .05,
    backgroundColor = `#0E0E0E`,
    showCounter = true,
    counterSuffix = `percent`,
    counterFont,
    counterSize = 13,
    counterWeight = 500,
    counterTracking = .14,
    counterColor = `rgba(255,255,255,0.9)`,
    counterPosition = `bottomLeft`,
    showBar = false,
    barColor = `rgba(255,255,255,0.35)`,
    barThickness = 2,
    takeover = true,
    frequency = `always`,
    runOn = `firstLoad`,
    lockScroll = true,
    zIndex = 9999
  // Les props arrivent en groupes (Logo, Loading, Reveal, Counter, Behavior) : on les aplatit.
  } = {
    ...props,
    ...props?.Logo || {},
    ...props?.Loading || {},
    ...props?.Reveal || {},
    ...props?.Counter || {},
    ...props?.Behavior || {}
  // isEditorCanvas : vrai hors du site publié (RenderTarget ≠ preview) → rendu statique « 100% ».
  }, isEditorCanvas = false, logoSrc = typeof logoImage == `string` ? logoImage : logoImage?.src || ``, liveConfig = {
    revealMode,
    maskScale,
    logoSrc,
    logoWidth,
    loadMode,
    minTime,
    maxWait,
    hold,
    effect,
    direction,
    revealDuration,
    easing,
    bend,
    strength,
    band,
    chroma,
    softness,
    backgroundColor,
    showCounter,
    counterSuffix,
    lockScroll
  }, configRef = useRef(liveConfig);
  configRef.current = liveConfig;
  let overlayRef = useRef(null),
    hostRef = useRef(null),
    // prefers-reduced-motion lu une fois au montage (révélation ramenée à 0,05 s).
    prefersReducedMotion = useMemo(() => {
      if (win === undefined || typeof win.matchMedia != `function`) return false;
      try {
        return win.matchMedia(`(prefers-reduced-motion: reduce)`).matches
      } catch {
        return false
      }
    }, []),
    canvasRef = useRef(null),
    wipeLayerRef = useRef(null),
    cssMaskLayerRef = useRef(null),
    logoStageRef = useRef(null),
    counterRef = useRef(null),
    barRef = useRef(null),
    counterSlotHostRef = useRef(null),
    // active : le préchargeur est monté. glOwnsBackground : le canvas WebGL a peint sa 1re image,
    // le fond CSS du calque devient alors transparent (c'est le shader qui peint la couleur).
    [active, setActive] = useState(true),
    [portalTarget, setPortalTarget] = useState(null),
    [glOwnsBackground, setGlOwnsBackground] = useState(false),
    [showCoverStyle, setShowCoverStyle] = useState(true),
    [slotTypography, setSlotTypography] = useState(null);
  // <style id="portal-preloader-cover-style"> : html::before plein écran de la couleur de fond,
  // z-index = zIndex + 1, tant que <html> n'a pas la classe portal-preloader-done.
  // Filet de sécurité : l'animation portal-cover-failsafe le masque d'office après 12 s.
  useInsertionEffect(() => {
    if (isEditorCanvas || !active || typeof document > `u`) return;
    signalActive();
    let styleId = `portal-preloader-cover-style`,
      styleEl = document.getElementById(styleId);
    return styleEl || (styleEl = document.createElement(`style`), styleEl.id = styleId, document.head.appendChild(styleEl)), styleEl.textContent = coverCss(backgroundColor, zIndex + 1), () => {
      styleEl?.parentNode?.removeChild(styleEl)
    }
  }, [isEditorCanvas, active, backgroundColor, zIndex]), useEffect(() => {
    // takeover : le calque est rendu par portail dans document.body.
    !isEditorCanvas && takeover && setPortalTarget(document.body)
  }, [isEditorCanvas, takeover]), useEffect(() => {
    // Règles d'affichage : le préchargeur est sauté si (frequency = "session" ET sessionStorage
    // `portal-preloader` = "1") OU (runOn = "firstLoad" ET performance.now() > 4000 ms, c.-à-d.
    // navigation interne). Instance de l'accueil : frequency "always" + runOn "everyMount"
    // → jamais sauté (chaque chargement ET chaque retour sur l'accueil).
    if (!isEditorCanvas) try {
      if (frequency === `session` && win.sessionStorage?.getItem(`portal-preloader`) === `1` || runOn === `firstLoad` && performance.now() > 4e3) {
        setActive(false), markDone(), signalDone();
        return
      }
      frequency === `session` && win.sessionStorage?.setItem(`portal-preloader`, `1`), signalActive()
    } catch {}
  }, [isEditorCanvas, frequency, runOn]);
  // Typographie du compteur copiée du calque « Counter Style » (counterSlot) : on prend
  // l'élément de texte au plus grand font-size dans le slot (rendu hors écran).
  let lastTypographyKeyRef = useRef(``),
    readSlotTypography = useCallback(root => {
      if (win === undefined || !root) return null;
      let best = null,
        bestSize = -1,
        walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT),
        node = walker.nextNode();
      for (; node;) {
        if (node.textContent && node.textContent.trim().length > 0) {
          let parentEl = node.parentElement;
          if (parentEl) {
            let size = parseFloat(win.getComputedStyle(parentEl).fontSize) || 0;
            size > bestSize && (bestSize = size, best = parentEl)
          }
        }
        node = walker.nextNode()
      }
      if (!best) return null;
      let cs = win.getComputedStyle(best);
      return {
        fontFamily: cs.fontFamily,
        fontSize: cs.fontSize,
        fontWeight: cs.fontWeight,
        fontStyle: cs.fontStyle,
        fontStretch: cs.getPropertyValue(`font-stretch`),
        fontVariationSettings: cs.getPropertyValue(`font-variation-settings`),
        fontFeatureSettings: cs.getPropertyValue(`font-feature-settings`),
        letterSpacing: cs.letterSpacing,
        textTransform: cs.textTransform,
        color: cs.color
      }
    }, []);
  // Re-synchronise cette typographie : au montage, à chaque mutation du slot (anti-rebond 80 ms),
  // au rAF suivant, à document.fonts.ready / loadingdone ; repli {} au bout de 700 ms.
  useLayoutEffect(() => {
    if (win === undefined) return;
    if (!counterSlot) {
      lastTypographyKeyRef.current = ``, setSlotTypography(null);
      return
    }
    let slotHost = counterSlotHostRef.current;
    if (!slotHost) return;
    let update = immediate => {
      let typo = readSlotTypography(slotHost),
        key = typo ? JSON.stringify(typo) : `none`;
      key !== lastTypographyKeyRef.current && (lastTypographyKeyRef.current = key, immediate ? setSlotTypography(typo) : startTransition(() => setSlotTypography(typo)))
    };
    update(true);
    let debounceTimer = 0,
      observer = new MutationObserver(() => {
        win.clearTimeout(debounceTimer), debounceTimer = win.setTimeout(() => update(), 80)
      });
    observer.observe(slotHost, {
      childList: true,
      subtree: true,
      attributes: true
    });
    let raf = win.requestAnimationFrame(() => update()),
      fallbackTimer = win.setTimeout(() => {
        lastTypographyKeyRef.current === `` && (lastTypographyKeyRef.current = `fallback`, setSlotTypography({}))
      }, 700),
      fonts = document.fonts;
    fonts?.ready?.then && fonts.ready.then(() => update());
    let onFontsDone = () => update();
    return fonts?.addEventListener?.(`loadingdone`, onFontsDone), () => {
      win.clearTimeout(debounceTimer), win.clearTimeout(fallbackTimer), win.cancelAnimationFrame(raf), fonts?.removeEventListener?.(`loadingdone`, onFontsDone), observer.disconnect()
    }
  }, [counterSlot, readSlotTypography]), useEffect(() => {
    // ---- Effet principal : boucle rAF loading → holding → revealing → done ----
    if (isEditorCanvas || !active || win === undefined || takeover && !portalTarget) return;
    setGlOwnsBackground(false);
    let overlay = overlayRef.current,
      canvas = canvasRef.current;
    if (!overlay || !canvas) return;
    let reducedMotion = win.matchMedia?.(`(prefers-reduced-motion: reduce)`)?.matches,
      disposed = false,
      rafId = 0,
      glApi = null,
      bufW = 0,
      bufH = 0,
      // DPR plafonné : 1,5 sur pointeur grossier (tactile), 2 sinon.
      dprCap = win.matchMedia?.(`(pointer: coarse)`)?.matches ? 1.5 : 2,
      htmlEl = document.documentElement,
      prevOverflow = htmlEl.style.overflow,
      prevPaddingRight = htmlEl.style.paddingRight;
    // lockScroll : overflow hidden sur <html> (+ padding-right = largeur de la barre de
    // défilement). Désactivé sur l'instance de l'accueil.
    if (configRef.current.lockScroll) {
      let scrollbarW = win.innerWidth - htmlEl.clientWidth;
      scrollbarW > 0 && (htmlEl.style.paddingRight = scrollbarW + `px`), htmlEl.style.overflow = `hidden`
    }
    let restoreScroll = () => {
        htmlEl.style.overflow = prevOverflow, htmlEl.style.paddingRight = prevPaddingRight
      },
      pageLoaded = document.readyState === `complete`,
      onWindowLoad = () => {
        pageLoaded = true
      };
    pageLoaded || win.addEventListener(`load`, onWindowLoad, {
      once: true
    }), reducedMotion || (glApi = createPreloaderGL(canvas));
    let hasGL = !!glApi,
      logoTexReady = false,
      logoAspect = 1;
    // Le logo est rastérisé dans un canvas 2D (plus grand côté = 2048 px) puis envoyé en texture.
    if (hasGL && configRef.current.logoSrc) {
      let img = new Image;
      img.crossOrigin = `anonymous`, img.onload = () => {
        if (!disposed && glApi) try {
          let natW = img.naturalWidth || 1,
            natH = img.naturalHeight || 1;
          logoAspect = natW / natH;
          let k = 2048 / Math.max(natW, natH),
            raster = document.createElement(`canvas`);
          raster.width = Math.max(1, Math.round(natW * k)), raster.height = Math.max(1, Math.round(natH * k));
          let ctx2d = raster.getContext(`2d`);
          if (!ctx2d) return;
          ctx2d.drawImage(img, 0, 0, raster.width, raster.height), glApi.setLogoTexture(raster), logoTexReady = true, isMiraLabFlag(`ppcanvas`) || (raster.width = raster.height = 0)
        } catch {}
      }, img.src = configRef.current.logoSrc
    }
    let cssW = 1,
      cssH = 1,
      canvasScale = 1,
      dirty = true,
      // Taille du canvas = taille CSS × min(devicePixelRatio, dprCap) ; recalculée sur window.resize.
      onResize = () => {
        let dpr = Math.min(win.devicePixelRatio || 1, dprCap),
          w = Math.max(1, overlay.clientWidth),
          h = Math.max(1, overlay.clientHeight),
          pw = Math.max(1, Math.round(w * dpr)),
          ph = Math.max(1, Math.round(h * dpr));
        cssW = w, cssH = h, canvasScale = pw / w, (pw !== bufW || ph !== bufH) && (bufW = pw, bufH = ph, glApi?.resize(bufW, bufH), dirty = true)
      };
    onResize(), win.addEventListener(`resize`, onResize);
    let startTime = performance.now(),
      phase = `loading`,
      progress = 0,
      holdStart = 0,
      revealStart = 0,
      prevEased = 0,
      lastFrame = startTime,
      velocity = 0,
      firstFrameDone = false,
      maskInitDone = false,
      glMask = false,
      holdStyled = false,
      lastCounterText = ``,
      lastColorKey = ``,
      // Fin : évènement portal:preloader-done, défilement restauré, contexte WebGL libéré,
      // calque masqué (display none, aria-hidden) puis démonté (active = false).
      // (La classe portal-preloader-done est posée plus tôt, dès la 1re image peinte.)
      finish = () => {
        disposed || (phase = `done`, signalDone(), restoreScroll(), overlay.style.display = `none`, overlay.setAttribute(`aria-hidden`, `true`), glApi?.dispose(), glApi = null, setActive(false))
      },
      tick = now => {
        if (disposed) return;
        let cfg = configRef.current,
          dt = Math.max(.001, (now - lastFrame) / 1e3);
        lastFrame = now;
        let elapsed = (now - startTime) / 1e3,
          bgHasVar = cfg.backgroundColor.indexOf(`var(`) !== -1,
          bgRgb = hasGL || bgHasVar ? resolveColorRgb(cfg.backgroundColor, hostRef.current) : null,
          bgCss = bgHasVar && bgRgb ? rgbToCss(bgRgb) : cfg.backgroundColor,
          bgKey = bgRgb ? `${bgRgb[0]},${bgRgb[1]},${bgRgb[2]}` : ``;
        // LOADING. Mode "timer" : progression = elapsed / minTime.
        // Mode "load" : approche exponentielle de la cible — min(0,92 ; elapsed / (1,4·minTime)) avant
        // l'évènement load, 1 après load ou après maxWait — au taux 2,2 /s (5,5 /s une fois chargé) ;
        // plafonnée par elapsed / minTime ; forcée à 1 si > 0,995 et elapsed ≥ minTime.
        if (!firstFrameDone && !hasGL && (firstFrameDone = true, markDone(), setShowCoverStyle(false)), phase === `loading`) {
          let minT = Math.max(.2, cfg.minTime);
          if (cfg.loadMode === `timer`) progress = Math.min(1, elapsed / minT);
          else {
            let timedOut = elapsed >= Math.max(minT, cfg.maxWait),
              complete = pageLoaded || timedOut,
              target = complete ? 1 : Math.min(.92, elapsed / (minT * 1.4)),
              rate = complete ? 5.5 : 2.2;
            progress += (target - progress) * (1 - Math.exp(-dt * rate));
            let timeCap = Math.min(1, Math.max(0, elapsed) / minT);
            progress > timeCap && (progress = timeCap), progress < 0 && (progress = 0), complete && elapsed >= minT && progress > .995 && (progress = 1)
          }
          if (counterRef.current && cfg.showCounter) {
            let pct = Math.round(progress * 100),
              label = cfg.counterSuffix === `percent` ? `${pct}%` : `${pct}`;
            label !== lastCounterText && (counterRef.current.textContent = label, lastCounterText = label)
          }
          barRef.current && (barRef.current.style.transform = `scaleX(${progress})`), progress >= 1 && (phase = `holding`, holdStart = now)
        }
        let logoMaskMode = cfg.revealMode === `logoMask` && !!cfg.logoSrc && !reducedMotion;
        // HOLDING : en mode logoMask, compteur et barre s'effacent (opacity 0,25 s ease) et le logo
        // grossit à 1,03 (transform 0,45 s cubic-bezier(0.22, 1, 0.36, 1)). Après `hold` secondes :
        // phase revealing, pointer-events none, évènement portal:preloader-reveal.
        if (phase === `holding`) {
          if (!holdStyled) {
            holdStyled = true;
            let fadeOut = el => {
              el && (el.style.transition = `opacity 0.25s ease`, el.style.opacity = `0`)
            };
            if (logoMaskMode) {
              fadeOut(counterRef.current), fadeOut(barRef.current);
              let stage = logoStageRef.current;
              stage && (stage.style.transformOrigin = `50% 50%`, stage.style.transition = `transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)`, stage.style.transform = `scale(1.03)`)
            }
          }(now - holdStart) / 1e3 >= Math.max(0, cfg.hold) && (revealStart = now, phase = `revealing`, prevEased = 0, overlay.style.pointerEvents = `none`, signalReveal())
        }
        let eased = 0,
          uProgress = 0,
          uMask = 0,
          uMaskScale = 1,
          uMaskFade = 1;
        // REVEALING : t linéaire sur revealDuration (0,05 s si reduced motion) puis `easing`.
        // En mode logoMask, uProgress reste 0 : seule la fenêtre du logo bouge (courbe ci-dessous).
        if (phase === `revealing`) {
          let duration = prefersReducedMotion ? .05 : Math.max(.1, cfg.revealDuration),
            linear = Math.min(Math.max((now - revealStart) / 1e3 / duration, 0), 1);
          if (eased = (EASINGS[cfg.easing] || EASINGS.expoInOut)(linear), logoMaskMode) uProgress = 0;
          else {
            let instVel = (eased - prevEased) / (dt / duration);
            velocity += (Math.min(instVel * .55, 1.6) - velocity) * .2, prevEased = eased, uProgress = eased
          }
          if (logoMaskMode) {
            maskInitDone || (glMask = hasGL && logoTexReady);
            let useGL = glMask,
              maskLayer = cssMaskLayerRef.current;
            if (!maskInitDone && (maskInitDone = true, logoStageRef.current && (logoStageRef.current.style.transition = `none`, logoStageRef.current.style.transformOrigin = `50% 50%`), !useGL && maskLayer)) {
              let maskCss = `url("${cfg.logoSrc}"), linear-gradient(#000 0 0)`;
              maskLayer.style.display = `block`, maskLayer.style.maskImage = maskCss, maskLayer.style.setProperty(`-webkit-mask-image`, maskCss), maskLayer.style.maskRepeat = `no-repeat, no-repeat`, maskLayer.style.setProperty(`-webkit-mask-repeat`, `no-repeat, no-repeat`), maskLayer.style.maskPosition = `center, center`, maskLayer.style.setProperty(`-webkit-mask-position`, `center, center`), maskLayer.style.maskSize = `${cfg.logoWidth}px auto, cover`, maskLayer.style.setProperty(`-webkit-mask-size`, `${cfg.logoWidth}px auto, cover`), maskLayer.style.maskComposite = `exclude`, maskLayer.style.setProperty(`-webkit-mask-composite`, `xor`), canvas.style.display = `none`, overlay.style.backgroundColor = `transparent`
            } {
              // Courbe de la fenêtre-logo (t = progression LINÉAIRE de la révélation) :
              //  - t < 0,12 : scale = 1,03 − 0,08·easeOutCubic(t / 0,12)            (1,03 → 0,95 : recul)
              //  - sinon    : scale = 0,95·(zoomMax / 0,95)^easeInCubic((t − 0,12) / 0,88)   (0,95 → maskScale)
              //  - fondu final du calque : maskFade = 1 − easeInCubic(clamp01((t − 0,94) / 0,06))
              //  - le logo <img> lui-même : opacité = 1 − clamp01(t / 0,14), même scale.
              let zoomMax = Math.max(cfg.maskScale, 2),
                introSpan = .12,
                scale;
              if (linear < introSpan) scale = 1.03 - .08 * easeOutCubic(linear / introSpan);
              else {
                let zoomT = easeInCubic((linear - introSpan) / .88);
                scale = .95 * (zoomMax / .95) ** zoomT
              }
              let fadeT = clamp01((linear - .94) / .06),
                maskFade = 1 - easeInCubic(fadeT);
              useGL ? (uMask = 1, uMaskScale = scale, uMaskFade = maskFade) : maskLayer && (maskLayer.style.backgroundColor = bgCss, maskLayer.style.transform = `scale(${scale})`, maskLayer.style.opacity = String(maskFade));
              let stage = logoStageRef.current;
              stage && (stage.style.transform = `scale(${scale})`, stage.style.opacity = String(1 - clamp01(linear / .14)))
            }
          }
          // Mode shader sans WebGL : clip-path polygone ou opacité CPU sur le calque logo + compteur.
          if (!logoMaskMode && wipeLayerRef.current) {
            let wipeLayer = wipeLayerRef.current;
            if (FRONT_EFFECTS.has(cfg.effect) && cfg.direction !== `center`) wipeLayer.style.opacity = `1`, wipeLayer.style.clipPath = frontPolygonClipPath(cfg.effect, cfg.direction, eased, velocity, cfg.bend, cfg.softness);
            else {
              wipeLayer.style.clipPath = `none`;
              let aspect = cssW / Math.max(cssH, 1);
              wipeLayer.style.opacity = String(coverageCPU(cfg.effect, cfg.direction, eased, .5, .5, cfg.bend, cfg.softness, aspect))
            }
          }
          if (linear >= 1) {
            finish();
            return
          }
        }
        if (bgHasVar && overlay.style.backgroundColor !== bgCss && overlay.style.backgroundColor !== `transparent` && (overlay.style.backgroundColor = bgCss), hasGL && glApi) {
          // Rendu WebGL : uniforms poussés seulement si nécessaire ; la 1re image peinte déclenche
          // markDone (retire html::before) et rend le fond CSS du calque transparent.
          if (!firstFrameDone || dirty || phase === `revealing` || bgKey !== lastColorKey) {
            let [cr, cg, cb] = bgRgb;
            glApi.setUniform2f(`uRes`, bufW, bufH), glApi.setUniform1f(`uTime`, elapsed), glApi.setUniform3f(`uColor`, cr, cg, cb), glApi.setUniform1f(`uProgress`, uProgress), glApi.setUniform1f(`uVel`, velocity), glApi.setUniform1f(`uEffect`, EFFECT_INDEX[cfg.effect] ?? 9), glApi.setUniform1f(`uDir`, logoMaskMode ? 4 : DIRECTION_INDEX[cfg.direction] ?? 0), glApi.setUniform1f(`uBend`, cfg.bend), glApi.setUniform1f(`uStrength`, cfg.strength), glApi.setUniform1f(`uBand`, cfg.band), glApi.setUniform1f(`uChroma`, cfg.chroma), glApi.setUniform1f(`uSoft`, cfg.softness), glApi.setUniform1f(`uMask`, uMask), glApi.setUniform1f(`uMaskScale`, uMaskScale), glApi.setUniform1f(`uMaskW`, cfg.logoWidth * canvasScale), glApi.setUniform1f(`uMaskAspect`, logoAspect), glApi.setUniform1f(`uMaskFade`, uMaskFade), glApi.draw(), dirty = false, lastColorKey = bgKey, firstFrameDone || (firstFrameDone = true, markDone(), setGlOwnsBackground(true), setShowCoverStyle(false))
          }
        } else phase === `revealing` && !logoMaskMode && (reducedMotion || cfg.direction === `center` ? overlay.style.opacity = String(1 - eased) : overlay.style.clipPath = insetClipPath(cfg.direction, eased));
        rafId = win.requestAnimationFrame(tick)
      };
    return rafId = win.requestAnimationFrame(tick), () => {
      disposed = true, win.cancelAnimationFrame(rafId), win.removeEventListener(`resize`, onResize), win.removeEventListener(`load`, onWindowLoad), restoreScroll(), markDone(), signalDone(), glApi?.dispose()
    }
  }, [isEditorCanvas, active, takeover, portalTarget]);
  // Entrée du logo (transitions CSS déclenchées après 2 rAF) : opacité 0→1, translate, scale,
  // rotate, blur → none, durée logoIntroDuration, délai introDelay, courbe introEase.
  let logoIntroRef = useRef(null),
    hasIntro = !prefersReducedMotion && (introFade || introMoveX !== 0 || introMoveY !== 0 || introScale !== 1 || introRotate !== 0 || introBlur > 0),
    introFromStyle = () => {
      if (isEditorCanvas || !hasIntro) return {};
      let transforms = [];
      return (introMoveX !== 0 || introMoveY !== 0) && transforms.push(`translate(${introMoveX}px, ${introMoveY}px)`), introScale !== 1 && transforms.push(`scale(${introScale})`), introRotate !== 0 && transforms.push(`rotate(${introRotate}deg)`), {
        opacity: +!introFade,
        transform: transforms.length ? transforms.join(` `) : undefined,
        filter: introBlur > 0 ? `blur(${introBlur}px)` : undefined
      }
    },
    INTRO_EASES = {
      expoOut: `cubic-bezier(0.16, 1, 0.3, 1)`,
      quartOut: `cubic-bezier(0.25, 1, 0.5, 1)`,
      cubicInOut: `cubic-bezier(0.65, 0, 0.35, 1)`,
      backOut: `cubic-bezier(0.34, 1.56, 0.64, 1)`
    };
  if (useEffect(() => {
      if (isEditorCanvas || !active) return;
      let el = logoIntroRef.current;
      if (!el || !hasIntro) return;
      let raf = win.requestAnimationFrame(() => {
        win.requestAnimationFrame(() => {
          let dur = Math.max(.05, logoIntroDuration),
            ease = INTRO_EASES[introEase] || INTRO_EASES.expoOut;
          if (introEase === `custom`) {
            let nums = String(introEaseCustom).split(/[\s,]+/).map(parseFloat).filter(e => Number.isFinite(e));
            if (nums.length === 4) {
              let x1 = Math.min(1, Math.max(0, nums[0])),
                x2 = Math.min(1, Math.max(0, nums[2]));
              ease = `cubic-bezier(${x1}, ${nums[1]}, ${x2}, ${nums[3]})`
            }
          }
          let delay = Math.max(0, introDelay);
          el.style.transition = `opacity ${dur}s ${ease} ${delay}s, transform ${dur}s ${ease} ${delay}s, filter ${dur}s ${ease} ${delay}s`, el.style.opacity = `1`, el.style.transform = `none`, el.style.filter = `none`
        })
      });
      return () => win.cancelAnimationFrame(raf)
    }, [isEditorCanvas, active, hasIntro, logoIntroDuration, introEase, introEaseCustom, introDelay, portalTarget, takeover]), !active && !isEditorCanvas) return null;
  // Position du compteur (bottomCenter sur l'accueil : bottom 28 px, pleine largeur, centré).
  let counterPosStyle = counterPosition === `bottomCenter` ? {
      bottom: 28,
      left: 0,
      right: 0,
      textAlign: `center`
    } : counterPosition === `bottomRight` ? {
      bottom: 28,
      right: 32,
      textAlign: `right`
    } : counterPosition === `belowLogo` ? {
      top: `calc(50% + 26px)`,
      left: 0,
      right: 0,
      textAlign: `center`
    } : {
      bottom: 28,
      left: 32,
      textAlign: `left`
    },
    counterTextStyle = {
      ...counterSlot ? {} : {
        color: counterColor,
        ...counterFont && Object.keys(counterFont).length > 0 ? counterFont : {
          fontSize: counterSize,
          fontWeight: counterWeight,
          letterSpacing: `${counterTracking}em`
        }
      },
      fontVariantNumeric: `tabular-nums`,
      ...slotTypography || {},
      ...counterSlot && !slotTypography ? {
        visibility: `hidden`
      } : {}
    },
    // Arbre DOM du calque (voir docs/audit/preloader.md).
    overlayTree = jsxs(`div`, {
      ref: overlayRef,
      role: `status`,
      "aria-label": `Loading`,
      "data-portal-preloader": ``,
      style: {
        position: isEditorCanvas ? `absolute` : `fixed`,
        inset: 0,
        zIndex,
        overflow: `hidden`,
        backgroundColor: glOwnsBackground ? `transparent` : backgroundColor,
        pointerEvents: `auto`
      },
      children: [ jsx(`canvas`, {
        ref: canvasRef,
        style: {
          position: `absolute`,
          inset: 0,
          width: `100%`,
          height: `100%`,
          display: `block`
        }
      }), jsx(`div`, {
        ref: cssMaskLayerRef,
        "aria-hidden": `true`,
        style: {
          position: `absolute`,
          inset: 0,
          display: `none`,
          transformOrigin: `50% 50%`,
          willChange: `transform, opacity`,
          pointerEvents: `none`
        }
      }), jsxs(`div`, {
        ref: wipeLayerRef,
        style: {
          position: `absolute`,
          inset: 0,
          pointerEvents: `none`,
          willChange: `clip-path, opacity`
        },
        children: [ jsx(`div`, {
          ref: logoStageRef,
          style: {
            position: `absolute`,
            inset: 0,
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`,
            willChange: `transform, opacity`
          },
          children: jsx(`div`, {
            style: {
              overflow: introMasked ? `hidden` : `visible`
            },
            children: jsx(`div`, {
              ref: logoIntroRef,
              style: {
                willChange: `transform, opacity, filter`,
                ...introFromStyle()
              },
              children: logoSrc ? jsx(`img`, {
                src: logoSrc,
                alt: ``,
                draggable: false,
                style: {
                  width: logoWidth,
                  height: `auto`,
                  display: `block`,
                  userSelect: `none`
                }
              }) : jsx(`div`, {
                style: {
                  ...counterTextStyle,
                  fontSize: 15,
                  letterSpacing: `0.2em`,
                  textTransform: `uppercase`,
                  textAlign: `center`,
                  opacity: .9,
                  whiteSpace: `nowrap`
                },
                children: `Your Logo`
              })
            })
          })
        }), showCounter && jsx(`div`, {
          ref: counterRef,
          style: {
            position: `absolute`,
            ...counterPosStyle,
            ...counterTextStyle,
            willChange: `opacity, transform`
          },
          children: isEditorCanvas ? counterSuffix === `percent` ? `100%` : `100` : counterSuffix === `percent` ? `0%` : `0`
        }), showBar && jsx(`div`, {
          style: {
            position: `absolute`,
            left: 0,
            right: 0,
            bottom: 0,
            height: barThickness
          },
          children: jsx(`div`, {
            ref: barRef,
            style: {
              width: `100%`,
              height: `100%`,
              backgroundColor: barColor,
              transform: isEditorCanvas ? `scaleX(1)` : `scaleX(0)`,
              transformOrigin: `left center`,
              willChange: `transform`
            }
          })
        })]
      })]
    });
  return jsxs(`div`, {
    ref: hostRef,
    style: {
      position: `absolute`,
      inset: 0,
      pointerEvents: `none`
    },
    children: [showCoverStyle && active && !isEditorCanvas ? jsx(`style`, {
      precedence: `high`,
      href: `portal-preloader-cover`,
      children: coverCss(backgroundColor, zIndex + 1)
    }) : null, counterSlot ? jsx(`div`, {
      ref: counterSlotHostRef,
      "aria-hidden": `true`,
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
      children: counterSlot
    }) : null, jsx(`noscript`, {
      children: jsx(`style`, {
        children: `[data-portal-preloader]{display:none !important}html:not(.${DONE_CLASS})::before{display:none !important}`
      })
    }), portalTarget ? createPortal(overlayTree, portalTarget) : overlayTree]
  })
}
// ---- État et utilitaires du module (affectés dans initPortalPreloaderModule) ----
var DONE_CLASS, markDone, signalActive, signalReveal, signalDone, coverCss, EASINGS, easeOutCubic, easeInCubic, clamp01, colorProbe, colorCache, fract, mix, noiseD, noiseFB, noiseIK, hashGL, VERTEX_SHADER, FRAGMENT_SHADER, EFFECT_INDEX, DIRECTION_INDEX, FRONT_EFFECTS;

// Évènements émis sur window (le slider du hero s'y abonne, prop preloaderSync) :
//   portal:preloader-active, portal:preloader-reveal, portal:preloader-done
// État partagé : window.__portalPreloader = { active, revealFired, doneFired }.
function initPortalPreloaderModule() {
  return (initPortalPreloaderModule = __esmMin((() => {
    initEnv(), initJsxRuntime(), initReact(), initReactDom(), initFramer(), DONE_CLASS = `portal-preloader-done`, markDone = () => {
      try {
        document.documentElement.classList.add(DONE_CLASS)
      } catch {}
    }, signalActive = () => {
      try {
        let w = win;
        if (w.__portalPreloader?.active) return;
        w.__portalPreloader = {
          active: true
        }, win.dispatchEvent(new CustomEvent(`portal:preloader-active`))
      } catch {}
    }, signalReveal = () => {
      try {
        let w = win;
        if (w.__portalPreloader?.revealFired) return;
        w.__portalPreloader = {
          ...w.__portalPreloader || {},
          active: true,
          revealFired: true
        }, win.dispatchEvent(new CustomEvent(`portal:preloader-reveal`))
      } catch {}
    }, signalDone = () => {
      try {
        let w = win;
        if (w.__portalPreloader?.doneFired) return;
        w.__portalPreloader = {
          active: false,
          doneFired: true,
          revealFired: true
        }, win.dispatchEvent(new CustomEvent(`portal:preloader-done`))
      } catch {}
    }, coverCss = (bg, z) => `html:not(.${DONE_CLASS})::before{content:"";position:fixed;top:0;left:0;right:0;bottom:0;background:${bg};z-index:${z};pointer-events:none;animation:portal-cover-failsafe 0s linear 12s forwards;}@keyframes portal-cover-failsafe{to{opacity:0;visibility:hidden;}}`, EASINGS = {
      expoOut: e => e >= 1 ? 1 : 1 - 2 ** (-10 * e),
      expoInOut: e => e <= 0 ? 0 : e >= 1 ? 1 : e < .5 ? 2 ** (20 * e - 10) / 2 : (2 - 2 ** (-20 * e + 10)) / 2,
      quartOut: e => 1 - (1 - e) ** 4,
      quartInOut: e => e < .5 ? 8 * e * e * e * e : 1 - (-2 * e + 2) ** 4 / 2,
      cubicInOut: e => e < .5 ? 4 * e * e * e : 1 - (-2 * e + 2) ** 3 / 2
    }, easeOutCubic = e => 1 - (1 - e) ** 3, easeInCubic = e => e * e * e, clamp01 = e => Math.min(Math.max(e, 0), 1), colorProbe = null, colorCache = new Map, fract = e => e - Math.floor(e), mix = (e, t, n) => e + (t - e) * n, noiseD = (() => {
      let rand = (e, t) => fract(Math.sin(e * 12.9898 + t * 78.233) * 43758.5453);
      return (x, y) => {
        let x0 = Math.floor(x),
          y0 = Math.floor(y),
          fx = x - x0,
          fy = y - y0,
          ux = fx * fx * (3 - 2 * fx),
          uy = fy * fy * (3 - 2 * fy),
          a = rand(x0, y0),
          b = rand(x0 + 1, y0),
          c = rand(x0, y0 + 1),
          d = rand(x0 + 1, y0 + 1);
        return mix(a, b, ux) + (c - a) * uy * (1 - ux) + (d - b) * ux * uy
      }
    })(), noiseFB = makeHashNoise(123.34, 456.21, 45.32), noiseIK = makeHashNoise(127.1, 311.7, 34.7), hashGL = (x, y) => {
      let px = fract(x * 311.7),
        py = fract(y * 127.1),
        d = px * px + py * py + 34.7;
      return px = fract(px + d), py = fract(py + d), fract(px * py)
    }, VERTEX_SHADER = "\nattribute vec2 aPos;\nvarying vec2 vUv;\nvoid main() {\n    vUv = aPos * 0.5 + 0.5;\n    gl_Position = vec4(aPos, 0.0, 1.0);\n}\n", FRAGMENT_SHADER = "\nprecision highp float;\nvarying vec2 vUv;\n\nuniform vec2  uRes;       // canvas size in px\nuniform float uTime;      // seconds\nuniform vec3  uColor;     // overlay color\nuniform float uProgress;  // 0 = fully covered, 1 = fully revealed (eased)\nuniform float uVel;       // normalized eased velocity of the reveal\nuniform float uEffect;    // 0 curve, 1 streaks, 2 liquid, 3 pixelate,\n                          // 4 dissolve, 5 filmBurn, 6 glitch, 7 ink,\n                          // 8 hex, 9 noiseWarp\nuniform float uDir;       // 0 up, 1 down, 2 left, 3 right, 4 center\nuniform float uBend;      // bend arc intensity (Curve wipe base)\nuniform float uStrength;  // edge distortion strength (Streaks/Liquid/Pixelate)\nuniform float uBand;      // width of the distorted zone around the edge\nuniform float uChroma;    // RGB split of the reveal mask\nuniform float uSoft;      // edge softness\nuniform sampler2D uLogo;  // rasterized logo (alpha = the window shape)\nuniform float uMask;      // 1 = logo-window mode active\nuniform float uMaskScale; // current zoom of the window\nuniform float uMaskW;     // window base width in CANVAS pixels\nuniform float uMaskAspect;// logo width / height\nuniform float uMaskFade;  // end-of-zoom fade\n\n// --- Showcase / DistortoSlider simplex + fbm (verbatim) ---\nvec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }\n\nfloat snoise(vec2 v) {\n    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);\n    vec2 i = floor(v + dot(v, C.yy));\n    vec2 x0 = v - i + dot(i, C.xx);\n    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n    vec4 x12 = x0.xyxy + C.xxzz;\n    x12.xy -= i1;\n    i = mod(i, 289.0);\n    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));\n    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);\n    m = m * m * m * m;\n    vec3 x = 2.0 * fract(p * C.www) - 1.0;\n    vec3 h = abs(x) - 0.5;\n    vec3 ox = floor(x + 0.5);\n    vec3 a0 = x - ox;\n    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);\n    vec3 g;\n    g.x = a0.x * x0.x + h.x * x0.y;\n    g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n    return 130.0 * dot(m, g);\n}\n\nfloat fbm(vec2 p) {\n    float v = 0.0;\n    float a = 0.5;\n    for (int i = 0; i < 4; i++) {\n        v += a * snoise(p);\n        p = p * 2.1 + vec2(1.7, 9.2);\n        a *= 0.5;\n    }\n    return v;\n}\n\n// --- DistortoSlider \"Dissolve\" (verbatim) ---\nfloat randD(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\nfloat noiseD(vec2 p) {\n    vec2 i = floor(p);\n    vec2 f = fract(p);\n    float a = randD(i);\n    float b = randD(i + vec2(1.0, 0.0));\n    float c = randD(i + vec2(0.0, 1.0));\n    float d = randD(i + vec2(1.0, 1.0));\n    vec2 u = f * f * (3.0 - 2.0 * f);\n    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;\n}\n\n// --- DistortoSlider \"Film Burn\" (verbatim) ---\nfloat hashFB(vec2 p) {\n    p = fract(p * vec2(123.34, 456.21));\n    p += dot(p, p + 45.32);\n    return fract(p.x * p.y);\n}\nfloat noiseFB(vec2 p) {\n    vec2 i = floor(p);\n    vec2 f = fract(p);\n    float a = hashFB(i);\n    float b = hashFB(i + vec2(1.0, 0.0));\n    float c = hashFB(i + vec2(0.0, 1.0));\n    float d = hashFB(i + vec2(1.0, 1.0));\n    vec2 u = f * f * (3.0 - 2.0 * f);\n    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;\n}\n\n// --- DistortoSlider \"Glitch Blocks\" (verbatim) ---\nfloat hashGL(vec2 p) {\n    p = fract(p * vec2(311.7, 127.1));\n    p += dot(p, p + 34.7);\n    return fract(p.x * p.y);\n}\n\n// --- DistortoSlider \"Ink Spread\" (verbatim) ---\nfloat hashIK(vec2 p) {\n    p = fract(p * vec2(127.1, 311.7));\n    p += dot(p, p + 34.7);\n    return fract(p.x * p.y);\n}\nfloat noiseIK(vec2 p) {\n    vec2 i = floor(p);\n    vec2 f = fract(p);\n    float a = hashIK(i);\n    float b = hashIK(i + vec2(1.0, 0.0));\n    float c = hashIK(i + vec2(0.0, 1.0));\n    float d = hashIK(i + vec2(1.0, 1.0));\n    vec2 u = f * f * (3.0 - 2.0 * f);\n    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;\n}\n\n// --- DistortoSlider \"Hex Mosaic\" cell snap (verbatim) ---\nvec2 hexCell(vec2 uv, float scale) {\n    vec2 q = vec2(uv.x * scale, uv.y * scale);\n    q.x *= 1.1547;\n    vec2 a = vec2(q.x + q.y * 0.5, q.y);\n    vec2 ai = floor(a);\n    vec2 center = (ai + 0.5);\n    vec2 r;\n    r.y = center.y;\n    r.x = center.x - center.y * 0.5;\n    r.x /= 1.1547;\n    r /= scale;\n    return r;\n}\n\n// Progress axis + cross axis. Directional modes reveal first at the edge\n// the curtain moves away from; \"center\" uses radial distance as the axis\n// and the angle as the cross coordinate, so every front-based effect can\n// bloom outward from the middle.\nvec2 axes(vec2 uv) {\n    if (uDir < 0.5) return vec2(uv.y, uv.x);         // up\n    if (uDir < 1.5) return vec2(1.0 - uv.y, uv.x);   // down\n    if (uDir < 2.5) return vec2(1.0 - uv.x, uv.y);   // left\n    if (uDir < 3.5) return vec2(uv.x, uv.y);          // right\n    // center\n    float ar = uRes.x / max(uRes.y, 1.0);\n    vec2 q = (uv - 0.5) * vec2(ar, 1.0);\n    float maxR = length(vec2(ar, 1.0) * 0.5);\n    return vec2(length(q) / maxR, atan(q.y, q.x) / 6.2831853 + 0.5);\n}\n\n// Film Burn's ember glow and Noise Warp's streak decay, computed alongside\n// coverage.\nfloat gGlow;\nfloat gDecay;\n\n// Coverage of the overlay at this coordinate: 1 = opaque color,\n// 0 = revealed page. One function so the chroma split can re-evaluate it\n// at offset positions for every mode.\nfloat coverage(vec2 uv) {\n    float p = clamp(uProgress, 0.0, 1.0);\n    float s = max(uSoft, 0.002);\n    float t = uTime * 0.2;\n    float v = clamp(uVel, 0.0, 1.0);\n    gGlow = 0.0;\n    gDecay = 1.0;\n\n    // The slider's transitions guard their endpoints the same way: fully\n    // solid at rest, fully gone at the end.\n    if (p <= 0.001) return 1.0;\n    if (p >= 0.999) return 0.0;\n\n    // Directional stagger for the field modes: local progress leads at the\n    // axis origin (or the center) and trails behind by up to spread, so\n    // Noise Warp / Dissolve / Hex honor the Direction control — including\n    // Center — while keeping their source shaders' exact noise and\n    // thresholds. spread 0 would reproduce the slider's uniform timing.\n    float aAx = axes(uv).x;\n    float spread = 0.6;\n    float lp = clamp(p * (1.0 + spread) - aAx * spread, 0.0, 1.0);\n\n    // ---- NOISE WARP: the slider's full-frame streak reveal, verbatim.\n    // Vertically-stretched fbm across the whole frame, noise-thresholded so\n    // brighter streaks flip first, with the streak color decay.\n    if (uEffect > 8.5) {\n        float mid = sin(3.1415926 * p);\n        vec2 noiseUV = uv * 1000.0 + vec2(p * 30.0, 0.0);\n        float scale = mix(1.0, 1000.0, mid);\n        noiseUV.y -= 0.5;\n        noiseUV.y *= scale;\n        noiseUV.y += 0.5;\n        float n1 = fbm(noiseUV);\n        float n2 = fbm(noiseUV + vec2(5.3, 3.1));\n        float streak = clamp(n1 * 0.5 + 0.5, 0.0, 1.0);\n        float edgeSoft = 0.18;\n        float mask = smoothstep(1.0 - lp - edgeSoft, 1.0 - lp + edgeSoft, streak);\n        mask *= smoothstep(0.0, 0.08, lp);\n        mask = max(mask, smoothstep(0.85, 0.99, lp));\n        gDecay = 1.0 - 0.35 * mid * smoothstep(0.3, 1.2, abs(n1) + abs(n2));\n        return 1.0 - mask;\n    }\n\n    // ---- DISSOLVE: the slider's exact noise field; the threshold sweeps\n    // just past the noise range so both endpoints are clean.\n    if (uEffect > 3.5 && uEffect < 4.5) {\n        float n = noiseD(uv * 20.0 + p * 10.0);\n        float th = mix(-0.05, 1.05, lp);\n        return smoothstep(th - 0.04, th + 0.04, n);\n    }\n\n    // ---- FILM BURN: exact envelope (sin(pi*p)), travel (1.2 -> -0.2),\n    // wobble (0.12), feather (0.03); the ember glow rides the edge.\n    if (uEffect > 4.5 && uEffect < 5.5) {\n        vec2 ac = axes(uv);\n        float env = sin(3.1415926 * p);\n        float n = noiseFB(uv * 9.0 + vec2(0.0, p * 4.0));\n        float edgePos = mix(1.2, -0.2, p) + (n - 0.5) * 0.12 * env;\n        float feather = 0.03;\n        float aa = 1.0 - ac.x;\n        float m = 1.0 - smoothstep(edgePos - feather, edgePos + feather, aa);\n        float glowBand = 1.0 - abs(aa - edgePos) / max(1e-4, feather * 2.5);\n        gGlow = clamp(glowBand, 0.0, 1.0) * 0.9 * (1.0 - abs(2.0 * p - 1.0));\n        return clamp(m, 0.0, 1.0);\n    }\n\n    // ---- GLITCH BLOCKS: the exact 12x8 hashed cell shifts and scanline\n    // rows displace the wipe coordinate — the edge tears into blocks.\n    if (uEffect > 5.5 && uEffect < 6.5) {\n        float env = sin(3.1415926 * p);\n        vec2 grid = vec2(12.0, 8.0);\n        vec2 cell = floor(uv * grid);\n        float r = hashGL(cell);\n        float amount = 0.04 * env * step(0.65, r);\n        float line = step(0.92, hashGL(vec2(cell.y, cell.x + 7.0)));\n        amount += 0.02 * env * line;\n        vec2 shift = vec2(\n            amount * (hashGL(cell + 1.3) - 0.5) * 2.0,\n            amount * (hashGL(cell + 9.1) - 0.5) * 2.0\n        );\n        vec2 ac = axes(uv + shift * 3.0);\n        float front = p * (1.0 + s * 2.0) - s;\n        return smoothstep(front - s, front + s, ac.x);\n    }\n\n    // ---- INK SPREAD: exact radial noise-eaten edge.\n    if (uEffect > 6.5 && uEffect < 7.5) {\n        vec2 c = vec2(0.5);\n        float n = noiseIK(uv * 6.0);\n        float radius = mix(0.0, 0.9, p);\n        float dist = length(uv - c);\n        float m = smoothstep(radius + 0.08, radius - 0.08, dist + (n - 0.5) * 0.18);\n        return 1.0 - clamp(m, 0.0, 1.0);\n    }\n\n    // ---- HEX MOSAIC: exact hex snap + 6 -> 40 scale ramp; each cell\n    // carries a hashed delay so the surface breaks up cell by cell.\n    if (uEffect > 7.5) {\n        float sc = mix(6.0, 40.0, abs(2.0 * p - 1.0));\n        vec2 snapped = hexCell(uv, sc);\n        float jitter = hashGL(snapped * 37.0);\n        return 1.0 - smoothstep(0.2, 0.8, lp + (jitter - 0.5) * 0.3);\n    }\n\n    // ---- Front-based family: Curve / Streaks / Liquid / Pixelate. The\n    // wipe front carries the card vertex shader's exact bend formula —\n    // sin * |v| * 0.85 * intensity — driven by reveal velocity the way the\n    // cards are driven by scroll velocity.\n    vec2 ac0 = axes(uv);\n    float arcMax = 0.85 * uBend * 0.5;\n    float arc = sin(ac0.y * 3.14159265) * v * 0.85 * uBend * 0.5;\n    float baseFront = p * (1.0 + arcMax + s * 2.0) - arcMax - s + arc;\n\n    float band = max(uBand, 0.02);\n    float edgeMask = 1.0 - smoothstep(0.0, band, abs(ac0.x - baseFront));\n    float eAmt = pow(edgeMask, 2.0) * uStrength * clamp(uVel * 1.4, 0.35, 1.0);\n\n    vec2 warpedUV = uv;\n    if (uEffect > 0.5 && uEffect < 1.5) {\n        // streaks: the showcase Edge Warp \"Streaks\" smear, verbatim.\n        vec2 noiseUV = uv * 1000.0 + vec2(t * (step(uv.x, 0.5) - 0.5) / 0.5, 0.0) * 10.0;\n        float scale = mix(1.0, 1000.0, edgeMask);\n        noiseUV.y -= 0.5;\n        noiseUV.y *= scale;\n        noiseUV.y += 0.5;\n        float dx = fbm(noiseUV) * 0.1;\n        float dy = fbm(noiseUV + vec2(5.3, 3.1)) * 0.1;\n        warpedUV = uv + vec2(dx, dy) * eAmt;\n    } else if (uEffect > 1.5 && uEffect < 2.5) {\n        // liquid: the showcase Edge Warp \"Liquid\" / Liquid Morph, verbatim.\n        vec2 nUv = uv * 5.0 + vec2(t * 0.7, -t * 0.5);\n        vec2 w = vec2(fbm(nUv), fbm(nUv + vec2(3.7, 8.1))) * 0.14;\n        warpedUV = uv + w * eAmt * 1.3;\n    } else if (uEffect > 2.5 && uEffect < 3.5) {\n        // pixelate: the showcase Edge Warp \"Pixelate\" mosaic snap, verbatim.\n        float pxAmt = clamp(eAmt, 0.0, 1.0);\n        float px = mix(0.002, 0.05, pxAmt);\n        vec2 pUV = (floor(uv / px) + 0.5) * px;\n        warpedUV = mix(uv, pUV, smoothstep(0.05, 0.6, pxAmt));\n    }\n\n    vec2 ac = axes(warpedUV);\n    float arcW = sin(ac.y * 3.14159265) * v * 0.85 * uBend * 0.5;\n    float front = p * (1.0 + arcMax + s * 2.0) - arcMax - s + arcW;\n    return smoothstep(front - s, front + s, ac.x);\n}\n\n// The direction axis as a uv vector, for the chroma split offset.\nvec2 axisDir() {\n    if (uDir < 0.5) return vec2(0.0, 1.0);\n    if (uDir < 1.5) return vec2(0.0, -1.0);\n    if (uDir < 2.5) return vec2(-1.0, 0.0);\n    if (uDir < 3.5) return vec2(1.0, 0.0);\n    return normalize(vUv - 0.5 + vec2(1e-5)); // center: radial split\n}\n\nvoid main() {\n    vec2 uv = vUv;\n    float m;\n    float glow;\n    float decay;\n    vec3 col = uColor;\n\n    if (uChroma > 0.001) {\n        // RGB split of the coverage mask along the travel axis — the same\n        // displacement-aligned aberration as the showcase's cursor effect.\n        float split = uChroma * 0.012 * clamp(uVel, 0.25, 1.0);\n        vec2 d = axisDir() * split;\n        float mR = coverage(uv + d);\n        m = coverage(uv);\n        glow = gGlow;\n        decay = gDecay;\n        float mB = coverage(uv - d);\n        col = uColor * vec3(mR, m, mB) / max(m, 1e-4);\n        col = clamp(col, 0.0, 1.5);\n    } else {\n        m = coverage(uv);\n        glow = gGlow;\n        decay = gDecay;\n    }\n\n    // Noise Warp's streak color decay on the covered side.\n    col *= decay;\n\n    // Film Burn's ember rim, in the slider's exact glow color.\n    if (glow > 0.001) {\n        col += vec3(1.3, 0.55, 0.15) * glow;\n    }\n\n    if (uMask > 0.5) {\n        // LOGO WINDOW, computed per-pixel per-frame at full canvas\n        // resolution: sampling the high-res logo texture in screen space\n        // keeps the window edge RAZOR SHARP at any zoom — a CSS mask\n        // rasterizes once at logo size and turns to mush when transform-\n        // scaled 60x. Outside the window: solid overlay color. Inside:\n        // whatever the effect pipeline produced (or solid coverage when\n        // the inner effect is off — uProgress stays 0 and m is 1, so the\n        // window cuts straight through to the page).\n        vec2 px = (vUv - 0.5) * uRes;\n        float holeW = max(uMaskW * uMaskScale, 1.0);\n        float holeH = holeW / max(uMaskAspect, 0.05);\n        // Texture is uploaded from a 2D canvas (y-down); vUv is y-up.\n        vec2 luv = vec2(px.x / holeW + 0.5, 0.5 - px.y / holeH);\n        float hole = 0.0;\n        if (luv.x > 0.0 && luv.x < 1.0 && luv.y > 0.0 && luv.y < 1.0) {\n            float aRaw = texture2D(uLogo, luv).a;\n            // Alpha-threshold sharpening (alpha-tested magnification):\n            // re-thresholding the antialiased alpha around 0.5 with a\n            // screen-derivative-sized smoothstep keeps the window edge\n            // SHARP at any magnification. Blended in as the zoom grows so\n            // the logo's designed antialiasing is untouched at rest.\n#ifdef HAS_DERIV\n            float aw = max(fwidth(aRaw) * 0.7, 1e-4);\n#else\n            float aw = 0.02;\n#endif\n            float aSharp = smoothstep(0.5 - aw, 0.5 + aw, aRaw);\n            float k = clamp((uMaskScale - 1.5) * 0.5, 0.0, 1.0);\n            hole = mix(aRaw, aSharp, k);\n        }\n        // The window is the ONLY motion. A calm, solid surround and a\n        // razor-sharp growing silhouette — every attempt to layer effect\n        // activity onto this moment competed with it. The reference's\n        // restraint is the polish.\n        float outM = (1.0 - hole) * clamp(uMaskFade, 0.0, 1.0);\n        gl_FragColor = vec4(uColor * outM, outM);\n        return;\n    }\n\n    gl_FragColor = vec4(col * m, m);\n}\n", EFFECT_INDEX = {
      curve: 0,
      streaks: 1,
      liquid: 2,
      pixelate: 3,
      dissolve: 4,
      filmBurn: 5,
      glitch: 6,
      ink: 7,
      hex: 8,
      noiseWarp: 9
    }, DIRECTION_INDEX = {
      up: 0,
      down: 1,
      left: 2,
      right: 3,
      center: 4
    // Panneau de propriétés Framer (valeurs par défaut du composant).
    }, FRONT_EFFECTS = new Set([`curve`, `streaks`, `liquid`, `pixelate`, `glitch`, `filmBurn`]), PortalPreloader.displayName = `Portal Preloader`, undefined
  })))()
}


// =====================================================================
// Instance de l'accueil (calque « Site Preloader », nodeId J6zHOrRbD) —
// copie exacte des props passées par la route (bundle embelli L.12596-12679).
// Rendu dans un conteneur framer-ng79uy-container ; aucune surcharge par breakpoint.
// =====================================================================
export const HOME_INSTANCE_PROPS = {
  Behavior: { frequency: `always`, lockScroll: false, runOn: `everyMount`, takeover: true, zIndex: 9999 },
  Counter: {
    barColor: `var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))`, // #fff
    barThickness: 2,
    counterPosition: `bottomCenter`,
    counterSuffix: `percent`,
    showBar: true,
    showCounter: true,
  },
  counterColor: `var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))`,
  counterFont: {},
  // counterSlot : <p class="framer-styles-preset-1l3tbw0" style="--framer-text-color: var(--token-27d215b1…)">100</p>
  // (Mona Sans Variable, "wdth" 75 "wght" 675, 23/21/19 px selon breakpoint, -0.01em, uppercase, "ss07")
  counterSlot: `<Preloader Progress Font>`,
  Loading: { hold: 0.2, loadMode: `load`, maxWait: 4, minTime: 0.8 },
  Logo: {
    introBlur: 0,
    introDelay: 0,
    introEase: `custom`,
    introEaseCustom: `0.87, 0, 0.13, 1`,
    introFade: true,
    introMasked: false,
    introMoveX: 0,
    introMoveY: 150,
    introRotate: 0,
    introScale: 1.05,
    logoImage: `/assets/brand/lys-icon.svg`, // hélice de Lys Sama (D-043)
    logoIntroDuration: 0.8,
    logoWidth: 50,
  },
  Reveal: {
    backgroundColor: `var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(245, 45, 15))`, // #f52d0f
    band: 0.14,
    bend: 0.6,
    chroma: 0,
    direction: `center`,
    easing: `cubicInOut`,
    effect: `noiseWarp`,
    maskScale: 150,
    revealDuration: 0.55,
    revealMode: `logoMask`,
    softness: 0,
    strength: 0.6,
  },
};

initPortalPreloaderModule();
export { PortalPreloader };
