import {
  t as e
} from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  B as t,
  D as n,
  E as r,
  F as i,
  M as a,
  P as o,
  R as s,
  T as c,
  _ as l,
  b as u,
  c as d,
  j as f,
  k as p,
  l as m,
  o as h,
  p as g,
  s as _,
  w as v,
  y,
  z as b
} from "./react.DfujhmXs.mjs";
import {
  C as x,
  a as S,
  r as C,
  t as w
} from "./motion.CM2UIHal.mjs";
import {
  At as T,
  Et as E,
  F as D,
  Ft as O,
  G as ee,
  L as k,
  M as te,
  N as ne,
  Pt as re,
  Q as ie,
  T as ae,
  Tt as oe,
  U as A,
  Wt as j,
  a as M,
  b as se,
  ct as ce,
  g as le,
  ht as ue,
  it as de,
  k as N,
  kt as fe,
  m as pe,
  n as me,
  o as P,
  ot as he,
  s as F,
  vt as ge,
  w as _e,
  wt as I,
  xt as ve,
  yt as ye
} from "./framer.DdqHlrxM.mjs";
import {
  A as be,
  F as xe,
  I as L,
  J as Se,
  L as Ce,
  M as we,
  N as Te,
  P as Ee,
  R,
  X as De,
  Y as Oe,
  Z as ke,
  at as Ae,
  ct as z,
  ft as je,
  it as Me,
  j as Ne,
  nt as Pe,
  pt as Fe,
  rt as Ie,
  ut as B,
  z as Le
} from "./toplevel-deps.BY2s547D.mjs";
import {
  n as Re,
  t as V
} from "./Lenis.B0ikntHt.mjs";
import {
  n as ze,
  t as Be
} from "./Video.CCIhSoyO.mjs";
import {
  i as Ve,
  n as He,
  r as Ue,
  t as We
} from "./LMUl9NNGN.CvLxB6jG.mjs";
import {
  n as Ge,
  t as Ke
} from "./zD0HidK19.DhFddg45.mjs";
import {
  n as qe,
  t as H
} from "./D21Ecyglh.BCJ4Hs8W.mjs";
import {
  i as U,
  n as Je,
  r as Ye,
  t as Xe
} from "./iLKnB8A0V.rnK00gqL.mjs";
import {
  n as Ze,
  r as W
} from "./VADOyQEsJ.C8xSyjcR.mjs";

function G(e) {
  if (t === void 0) return !1;
  let n = t;
  if (!n.__miraLab) {
    let e = ``;
    try {
      let n = new URLSearchParams(t.location.search).get(`miralab`);
      n === null ? e = t.sessionStorage.getItem(`miralab`) || `` : (e = n, t.sessionStorage.setItem(`miralab`, n))
    } catch {}
    n.__miraLab = new Set(e.split(`,`).map(e => e.trim()).filter(Boolean))
  }
  return n.__miraLab.has(e) || e !== `hud` && n.__miraLab.has(`before`)
}

function Qe() {
  if (t === void 0 || !G(`hud`)) return null;
  let e = t;
  if (e.__miraHud) return e.__miraHud;
  let n = e.__miraHud = {
    tap: 0,
    tapped: !1,
    target: ``,
    base: 0,
    gaps: [],
    marks: [],
    lt: [],
    gl: []
  };
  n.mark = e => {
    n.marks.some(t => t[1] === e) || n.marks.push([Math.round(performance.now() - n.tap), e])
  };
  let r = 0,
    i = e => {
      r && n.gaps.push([e - n.tap, e - r]), r = e, n.gaps.length > 6e3 && n.gaps.splice(0, 2e3), t.requestAnimationFrame(i)
    };
  t.requestAnimationFrame(i), document.addEventListener(`click`, e => {
    let t = e.target?.closest?.(`a[href]`);
    if (!t) return;
    let i = n.gaps.slice(-90).map(e => e[1]).sort((e, t) => e - t);
    n.base = i.length ? i[Math.floor(i.length / 2)] : 0, n.tap = performance.now(), n.tapped = !0, n.target = new URL(t.href, location.href).pathname, n.gaps = [], n.marks = [], n.lt = [], n.gl = [], n.slide0 = n.slide1 = 0, r = 0, n.mark(`tap`)
  }, !0);
  try {
    new PerformanceObserver(e => {
      for (let t of e.getEntries()) n.lt.push([Math.round(t.startTime - n.tap), Math.round(t.duration)])
    }).observe({
      type: `longtask`
    })
  } catch {}
  let a = e => {
    if (!e) return;
    let t = e.prototype;
    for (let e of [`texImage2D`, `texSubImage2D`, `linkProgram`, `getProgramInfoLog`, `getShaderInfoLog`, `getProgramParameter`, `generateMipmap`, `readPixels`]) {
      let r = t[e];
      r && (t[e] = function() {
        let t = performance.now(),
          i = r.apply(this, arguments),
          a = performance.now() - t;
        if (a > 1) {
          let r = arguments[arguments.length - 1],
            i = typeof HTMLVideoElement < `u` && r instanceof HTMLVideoElement ? `:film` : typeof ImageBitmap < `u` && r instanceof ImageBitmap || typeof HTMLImageElement < `u` && r instanceof HTMLImageElement ? `:cover` : ``;
          n.gl.push([Math.round(t - n.tap), e + i, a])
        }
        return i
      })
    }
    let r = t.getExtension;
    t.getExtension = function(e) {
      let t = r.apply(this, arguments);
      if (e === `WEBGL_lose_context` && t && !t.__hud) {
        t.__hud = 1;
        let e = t.loseContext.bind(t);
        t.loseContext = () => {
          let t = performance.now();
          e(), n.gl.push([Math.round(t - n.tap), `loseContext`, performance.now() - t])
        }
      }
      return t
    }
  };
  a(e.WebGLRenderingContext), a(e.WebGL2RenderingContext);
  let o = HTMLCanvasElement.prototype.getContext;
  HTMLCanvasElement.prototype.getContext = function(e) {
    let t = performance.now(),
      r = o.apply(this, arguments);
    return (e === `webgl` || e === `webgl2`) && n.gl.push([Math.round(t - n.tap), `getContext`, performance.now() - t]), r
  };
  let s = document.startViewTransition;
  return typeof s == `function` && (document.startViewTransition = function() {
    let e = s.apply(document, arguments);
    return n.tapped && (n.mark(`swap start`), e?.ready?.then(() => {
      n.slide0 = performance.now() - n.tap, n.mark(`slide start`)
    }, () => {}), e?.finished?.then(() => {
      n.slide1 = performance.now() - n.tap, n.mark(`slide end`)
    }, () => {})), e
  }), n
}

function $e(e) {
  let n = Qe();
  if (!n) return;
  let r = ``;
  try {
    let t = e && e.getExtension(`WEBGL_debug_renderer_info`);
    t && (r = String(e.getParameter(t.UNMASKED_RENDERER_WEBGL)))
  } catch {}
  let i = () => {
    let e = document.getElementById(`mira-hud`);
    if (e || (e = document.createElement(`pre`), e.id = `mira-hud`, e.style.cssText = `position:fixed;left:6px;top:6px;z-index:2147483647;pointer-events:none;margin:0;padding:8px;max-width:calc(100vw - 12px);white-space:pre-wrap;font:10px/1.35 ui-monospace,Menlo,monospace;color:#7CFF7C;background:rgba(0,0,0,0.85);border-radius:6px`, document.body.appendChild(e)), !n.tapped) {
      e.textContent = `MIRA HUD on. Go to Home, wait 3 s, then tap Projects.`;
      return
    }
    let t = n.base || 16.7,
      i = t * 1.5 + 4,
      a = n.gaps.filter(e => e[0] >= 0 && e[0] < 2e3),
      o = a.filter(e => e[1] > i),
      s = a.reduce((e, t) => t[1] > (e[1] || 0) ? t : e, [0, 0]),
      c = o.reduce((e, n) => e + n[1] - t, 0),
      l = n.slide0 ? Math.round(n.slide0) : 690,
      u = n.slide1 ? Math.round(n.slide1) : l + 650,
      d = n.gaps.filter(e => e[0] >= l && e[0] < u),
      f = d.filter(e => e[1] > i),
      p = e => {
        let t = n.gl.filter(t => e.includes(t[1]) && t[0] >= 0 && t[0] < 4e3);
        if (!t.length) return `none`;
        let r = t.reduce((e, t) => e + t[2], 0),
          i = t.reduce((e, t) => t[2] > e[2] ? t : e, t[0]);
        return t.length + `x ` + r.toFixed(0) + ` ms (max ` + i[2].toFixed(0) + ` @` + i[0] + `)`
      },
      m = b.userAgent,
      h = (m.match(/Android [\d.]+|iPhone OS [\d_]+|Mac OS X [\d_]+|Windows NT [\d.]+/) || [``])[0],
      g = (m.match(/(Chrome|CriOS|Firefox|Version)\/[\d]+/) || [``])[0];
    e.textContent = [`MIRA HUD  ` + (n.target || ``) + `  (times in ms after the tap)`, h + ` | ` + g + ` | ` + innerWidth + `x` + innerHeight + ` @` + devicePixelRatio, `GPU: ` + (r || `?`), `refresh before tap: ` + t.toFixed(1) + ` ms (` + Math.round(1e3 / t) + ` Hz)`, `0-2 s: ` + a.length + ` frames, ` + o.length + ` slow, worst ` + Math.round(s[1]) + ` @` + Math.round(s[0]) + `, lost ` + Math.round(c), `slide-in ` + l + `-` + u + (n.slide0 ? `` : ` (guessed)`) + `: ` + d.length + ` frames, ` + f.length + ` slow` + (f.length ? ` (` + f.map(e => Math.round(e[1]) + `@` + Math.round(e[0])).slice(0, 6).join(` `) + `)` : ``), `long tasks: ` + (n.lt.filter(e => e[0] >= -50 && e[0] < 4e3).map(e => e[1] + `@` + e[0]).slice(0, 8).join(` `) || `none`), `shader compile: ` + p([`linkProgram`, `getProgramInfoLog`, `getShaderInfoLog`, `getProgramParameter`]), `context create: ` + p([`getContext`]), `cover uploads: ` + p([`texImage2D:cover`, `texSubImage2D:cover`]), `film uploads: ` + p([`texImage2D:film`, `texSubImage2D:film`]), `other uploads: ` + p([`texImage2D`, `texSubImage2D`, `generateMipmap`]), `readbacks: ` + p([`readPixels`]), `home teardown: ` + p([`homeTeardown`]) + ` | ctx release: ` + p([`loseContext`]), `marks: ` + n.marks.map(e => e[1] + ` ` + e[0]).join(` | `)].join(`
`)
  };
  if (i(), n.tapped) {
    let e = performance.now() - n.tap;
    t.setTimeout(i, Math.max(0, 4e3 - e)), t.setTimeout(i, Math.max(0, 9e3 - e))
  }
}

function et() {}

function tt(e, t, n) {
  let r = t;
  if (G(n) || typeof r.requestVideoFrameCallback != `function`) return new e.VideoTexture(t);
  let i = new e.Texture(t);
  i.isVideoTexture = !0, i.format = e.RGBFormat, i.minFilter = e.LinearFilter, i.magFilter = e.LinearFilter, i.generateMipmaps = !1, i.update = et;
  let a = 0,
    o = !0,
    s = () => {
      o && (i.needsUpdate = !0, a = r.requestVideoFrameCallback(s))
    };
  return a = r.requestVideoFrameCallback(s), i.addEventListener(`dispose`, () => {
    o = !1;
    try {
      r.cancelVideoFrameCallback?.(a)
    } catch {}
  }), i
}

function nt() {
  return J ||= (async () => {
    try {
      if (typeof createImageBitmap != `function` || typeof ImageData > `u`) return !1;
      let e = new ImageData(new Uint8ClampedArray([255, 0, 0, 255, 0, 255, 0, 255]), 1, 2),
        t = await createImageBitmap(e, {
          imageOrientation: `flipY`
        }),
        n = document.createElement(`canvas`);
      n.width = 1, n.height = 2;
      let r = n.getContext(`2d`, G(`cpflip`) ? void 0 : {
        willReadFrequently: !0
      });
      if (!r) return !1;
      r.drawImage(t, 0, 0);
      let i = r.getImageData(0, 0, 1, 1).data;
      try {
        t.close?.()
      } catch {}
      return i[1] > 128 && i[0] < 128
    } catch {
      return !1
    }
  })(), J
}

function rt(e, n = 6) {
  let r = e;
  for (let e = 0; e < n && r; e++) {
    let e = parseFloat(t.getComputedStyle(r).opacity);
    if (Number.isFinite(e) && e < .99) return !0;
    r = r.parentElement
  }
  return !1
}

function it() {
  if (t === void 0) return 1600;
  let e = Math.min(t.devicePixelRatio || 1, 2.5);
  return Math.min(1600, Math.ceil((t.innerWidth || 1600) * e))
}

function at(e, t = 1600) {
  let n = e.split(`,`).map(e => e.trim()).filter(Boolean).map(e => {
    let t = e.split(/\s+/),
      n = t[0],
      r = t[1] || ``,
      i = 0;
    return r.endsWith(`w`) ? i = parseFloat(r) : r.endsWith(`x`) && (i = parseFloat(r) * 1e3), {
      url: n,
      weight: i
    }
  }).filter(e => !!e.url);
  return n.length === 0 ? null : (n.sort((e, t) => e.weight - t.weight), (n.find(e => e.weight >= t) || n[n.length - 1]).url)
}

function ot(e, n) {
  if (t === void 0) return 0;
  let r = e;
  for (let e = 0; r && e < 5; e++) {
    let e = t.getComputedStyle(r).borderTopLeftRadius,
      i = parseFloat(e);
    if (e.endsWith(`px`) && Number.isFinite(i) && i > 0) return i;
    if (r === n) break;
    r = r.parentElement
  }
  return 0
}

function st(e) {
  let t = e.firstElementChild;
  return t instanceof HTMLElement && t.children.length > 0 ? t : e
}

function ct(e) {
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
          n.endsWith(`w`) && (e = Math.max(e, parseFloat(n) || 0))
        }), t = e * e
      } else t = 1
    }
    t > r && (r = t, n = e)
  }
  return n
}

function lt(e) {
  let t = e.getAttribute(`srcset`);
  if (t) {
    let e = at(t, it());
    if (e) return e
  }
  return e.currentSrc || e.getAttribute(`src`) || ``
}

function ut(e) {
  try {
    typeof e.fastSeek == `function` ? e.fastSeek(0) : e.currentTime = 0
  } catch {}
}

function dt(e) {
  if (!e) return !1;
  try {
    let n = t === void 0 ? `https://x/` : t.location.href;
    return /\.webm$/i.test(new URL(e, n).pathname)
  } catch {
    return /\.webm(?:$|[?#])/i.test(e)
  }
}

function K() {
  if (b === void 0) return !1;
  let e = b.userAgent || ``,
    t = b.platform || ``,
    n = b.maxTouchPoints || 0,
    r = /iPad|iPhone|iPod/i.test(e) || t === `MacIntel` && n > 1,
    i = b.vendor === `Apple Computer, Inc.` && /AppleWebKit/i.test(e) && !r;
  return r || i
}

function ft(e) {
  return K() && dt(e)
}

function pt(e, t) {
  try {
    t.pause()
  } catch {}
  try {
    t.remove()
  } catch {}
  try {
    t.removeAttribute(`src`), t.load()
  } catch {}
  for (Ot.delete(e), Ot.set(e, t); Ot.size > kt();) {
    let e = Ot.entries().next().value;
    if (!e) break;
    Ot.delete(e[0]), e[1].removeAttribute(`src`), e[1].load()
  }
}

function mt() {
  if (!Y) return;
  t !== void 0 && t.clearTimeout(At);
  let e = Y;
  Y = null;
  try {
    e()
  } catch {}
}

function ht(e, n) {
  let r = performance.now(),
    i = () => {
      try {
        let e = document.getAnimations?.() || [];
        for (let t of e) {
          if (t.playState !== `running`) continue;
          let e = t.effect?.getComputedTiming?.().endTime;
          if (typeof e == `number` && Number.isFinite(e)) return !0
        }
      } catch {}
      return !1
    },
    a = () => {
      let n = t;
      typeof n.requestIdleCallback == `function` ? n.requestIdleCallback(e, {
        timeout: 1e3
      }) : t.setTimeout(e, 0)
    },
    o = () => {
      if (performance.now() - r >= n) return a();
      let e = 0,
        s = 0,
        c = 0,
        l = n => {
          if (e && n - e > 40 && s++, e = n, ++c < 4) return t.requestAnimationFrame(l);
          s === 0 && !i() ? a() : t.setTimeout(o, 300)
        };
      t.requestAnimationFrame(l)
    };
  o()
}

function gt(e) {
  if (t === void 0) try {
    e()
  } catch {} else mt(), Y = e, At = t.setTimeout(G(`cpdispose`) ? mt : () => {
    Y === e && ht(() => {
      Y === e && mt()
    }, 5e3)
  }, Ct.gpuDisposalMs)
}

function _t(e) {
  let n = st(e);
  return Array.from(n.children).map(e => {
    if (!(e instanceof HTMLElement)) return null;
    if (e.dataset.curvyProxyWrap === `1`) {
      let t = e.firstElementChild;
      return t instanceof HTMLElement ? t : null
    }
    return e
  }).filter(e => e instanceof HTMLElement).map((e, n) => {
    let r = e.querySelector(`video`),
      i = ``;
    r && (i = r.dataset.curvySrc || r.currentSrc || r.getAttribute(`src`) || r.querySelector(`source`)?.getAttribute(`src`) || ``);
    let a = ct(e),
      o = ``,
      s = ``;
    r && (o = r.getAttribute(`poster`) || r.poster || ``);
    let c = !!o,
      l = 0;
    if (!c && a) {
      let e = a.naturalWidth || parseInt(a.getAttribute(`width`) || ``, 10) || 0,
        t = a.naturalHeight || parseInt(a.getAttribute(`height`) || ``, 10) || 0;
      e > 0 && t > 0 && (l = e / t)
    }
    let u = a?.getAttribute(`srcset`);
    if (!o && u && (o = at(u, it()) || ``, s = at(u, 1) || ``, s === o && (s = ``)), r && (s = ``), o ||= a?.currentSrc || a?.getAttribute(`src`) || ``, !o && t !== void 0) {
      let n = [e, ...Array.from(e.querySelectorAll(`*`))];
      for (let e of n) {
        let n = t.getComputedStyle(e).backgroundImage,
          r = /url\((['"]?)(.*?)\1\)/.exec(n);
        if (r?.[2]) {
          o = r[2];
          break
        }
      }
    }
    let d = ot(r || a || e, e),
      f = e.tagName.toLowerCase() === `a` ? e : null,
      p = e.querySelector(`a[href]`),
      m = e.closest(`a[href]`),
      h = f?.href || p?.href || m?.href || null,
      g = (e.innerText || ``).split(`
`).map(e => e.trim()).filter(Boolean),
      _ = ``,
      v = [];
    if (t !== void 0) {
      let n = -1,
        r = document.createTreeWalker(e, NodeFilter.SHOW_TEXT),
        i = r.nextNode();
      for (; i;) {
        let e = i.textContent?.trim(),
          a = i.parentElement;
        if (e && a) {
          let r = t.getComputedStyle(a);
          if (r.display !== `none` && r.visibility !== `hidden`) {
            v.push({
              text: e,
              parent: a
            });
            let t = parseFloat(r.fontSize) || 0;
            t > n && (n = t, _ = e)
          }
        }
        i = r.nextNode()
      }
    }
    let y = _ || g[0] || `Project ${n+1}`;
    return {
      coverUrl: o,
      coverTinyUrl: s,
      coverAspect: l,
      videoUrl: i,
      title: y,
      href: h,
      radiusPx: d,
      domIndex: n
    }
  }).filter(e => !!(e.coverUrl || e.videoUrl))
}

function vt(e) {
  return JSON.stringify(e.map(e => [e.coverUrl, e.videoUrl, e.title, e.href, e.radiusPx]))
}

function yt(e, n, r) {
  y(() => {
    if (t === void 0) return;
    let r = e.current;
    if (!r) return;
    let i = 0,
      a = new MutationObserver(() => {
        t.clearTimeout(i), i = t.setTimeout(() => n(), 80)
      });
    a.observe(r, {
      childList: !0,
      subtree: !0,
      attributes: !0
    });
    let o = t.requestAnimationFrame(() => n()),
      s = document.fonts;
    s?.ready?.then && s.ready.then(() => n());
    let c = () => n();
    return s?.addEventListener?.(`loadingdone`, c), () => {
      t.clearTimeout(i), t.cancelAnimationFrame(o), s?.removeEventListener?.(`loadingdone`, c), a.disconnect()
    }
  }, [e, n, r])
}

function bt(e) {
  let {
    slot: i,
    fontSlot: s,
    countFontSlot: c,
    items: d,
    centerWidthPct: f,
    sideScale: g,
    sidePeekPct: _,
    cardAspect: v,
    cornerRadius: b,
    clickAction: x,
    cardCursor: S,
    scrollSpeed: C,
    dragSpeed: w,
    lerpSmoothness: T,
    bendIntensity: E,
    edgeWarp: D,
    edgeWarpStrength: O,
    edgeEffect: ee,
    mouseWarp: k,
    mouseWarpStrength: te,
    mouseEffect: ne,
    mouseRadius: re,
    mouseChroma: ie,
    mouseSpeedReact: ae,
    hijackScroll: oe,
    infiniteLoop: A,
    autoplay: M,
    autoplayInterval: se,
    backgroundTransparent: ce,
    backgroundColor: le,
    showTitleStrip: ue,
    titleGap: de,
    titleColor: N,
    inactiveTitleColor: fe,
    controlsColor: pe,
    arrowColor: me,
    showArrows: P,
    showCount: he,
    countSeparator: F,
    zeroPad: ge,
    arrowSlot: _e,
    metaGap: I = 12,
    showDetails: ve = !0,
    detailsSlot: ye = void 0
  } = {
    ...e,
    ...e?.Layout || {},
    ...e?.Interaction || {},
    ...e?.Motion || {},
    ...e?.Effects || {},
    ...e?.Mouse || {},
    ...e?.Style || {},
    ...e?.Strip || {}
  }, be = u(null), xe = u(null), L = u(null), Se = u(null), Ce = u(null), we = u(null), Te = u(null), Ee = u(0), R = u(null), De = u(null), Oe = u([]), ke = u([]), Ae = u([]), z = u(null), je = u(0), Me = u([]), Ne = u([]), Pe = u(0), Fe = u( /* @__PURE__ */ new Set), Ie = u([]), B = u({
    down: !1,
    moved: !1,
    pointerId: -1,
    startX: 0,
    startY: 0
  }), Le = u(``), Re = u(``), V = u(``), ze = u(0), Be = u(0), Ve = u({
    centers: [],
    viewportW: 0
  }), He = u(null), [Ue, We] = l([]), [Ge, Ke] = l(null), [qe, H] = l(null), [U, Je] = l(0), Ye = u(-1), Xe = u(!1), Ze = u([]), W = u({
    active: `#ffffff`,
    inactive: `rgba(255,255,255,0.35)`
  }), [et, it] = l(3), at = u(3), [ot, dt] = l(!1), [K, mt] = l(1), ht = u(1), bt = !!i, xt = j.current(), J = xt === j.canvas || xt === j.thumbnail || xt === j.export, kt = !ve;
  n(() => {
    if (J || !ye || kt) {
      ke.current = [], Me.current = [], je.current = 0;
      return
    }
    let e = z.current;
    if (!e) return;
    let t = () => {
      let t = st(e);
      t !== e && (t.style.position = `absolute`, t.style.inset = `0`, t.style.display = `block`);
      let n = [],
        r = 0;
      Array.from(t.children).forEach((e, t) => {
        e instanceof HTMLElement && (e.dataset.curvyManaged !== `1` && (e.style.position = `absolute`, e.style.left = `0`, e.style.top = `0`, e.style.margin = `0`, e.style.opacity = `0`, e.style.willChange = `transform, opacity`, e.style.transformOrigin = `0 0`, e.dataset.curvyManaged = `1`), n[t] = e, r = Math.max(r, e.offsetHeight))
      }), ke.current = n, je.current = r, Me.current = [], e.style.visibility = `visible`
    };
    t();
    let n = new MutationObserver(t);
    n.observe(e, {
      childList: !0,
      subtree: !0
    });
    let r = new ResizeObserver(t);
    return r.observe(e), () => {
      n.disconnect(), r.disconnect(), ke.current = [], je.current = 0
    }
  }, [J, ye, kt]);
  let Y = a(() => (d || []).slice(0, 20).map((e, t) => ({
      coverUrl: e.cover?.src || ``,
      coverTinyUrl: ``,
      videoUrl: e.video || ``,
      title: e.title || `Project ${t+1}`,
      href: e.link || null,
      radiusPx: 0,
      domIndex: -1
    })).filter(e => !!(e.coverUrl || e.videoUrl)), [d]),
    [At, Ft] = l(!1);
  y(() => {
    if (!bt) return;
    let e = t.setTimeout(() => Ft(!0), Ct.slotGraceMs);
    return () => t.clearTimeout(e)
  }, [bt]);
  let X = bt && Ue.length > 0 ? Ue : bt && !At ? [] : Y,
    It = a(() => vt(X), [X]),
    Lt = a(() => JSON.stringify(X.map(e => [e.coverUrl, e.videoUrl, e.radiusPx, e.href])), [X]),
    Rt = u(X);
  Rt.current = X;
  let zt = X.length,
    Z = Ge || jt,
    Q = qe || {
      ...Pt,
      fontFamily: Z.fontFamily
    },
    Bt = JSON.stringify(Z),
    Vt = r.count(_e) > 0,
    Ht = e => {
      if (!e || !e.endsWith(`px`)) return e;
      let t = parseFloat(e);
      return !Number.isFinite(t) || t <= 0 ? e : `max(${t}px, ${Math.round(t/1920*1e4)/100}vw)`
    },
    Ut = a(() => {
      let e = Math.max(0, de);
      return `max(${e}px, ${Math.round(e/1920*1e4)/100}vw)`
    }, [de]),
    Wt = e => {
      let t = e.lineHeight,
        n = e.fontSize;
      if (t && t.endsWith(`px`) && n && n.endsWith(`px`)) {
        let e = parseFloat(t),
          r = parseFloat(n);
        if (r > 0 && Number.isFinite(e)) return Math.round(e / r * 1e3) / 1e3
      }
      return t
    },
    Gt = {
      centerWidthPct: f,
      sideScale: g,
      sidePeekPct: _,
      cardAspect: v,
      cornerRadius: b,
      clickAction: x,
      cardCursor: S,
      scrollSpeed: C,
      dragSpeed: w,
      lerpSmoothness: T,
      bendIntensity: E,
      edgeWarp: D,
      edgeWarpStrength: O,
      edgeEffect: ee,
      mouseWarp: k,
      mouseWarpStrength: te,
      mouseEffect: ne,
      mouseRadius: re,
      mouseChroma: ie,
      mouseSpeedReact: ae,
      hijackScroll: oe,
      autoplay: M,
      autoplayInterval: se,
      metaGap: I
    },
    $ = u(Gt);
  $.current = Gt, y(() => {
    let e = De.current;
    e && q && (ce ? e.setClearColor(0, 0) : e.setClearColor(new q.Color(le), 1))
  }, [ce, le]), y(() => {
    if (t !== void 0) return () => {
      try {
        let e = be.current;
        if (!e) return;
        e.querySelectorAll(`video`).forEach(e => {
          try {
            e.pause(), e.removeAttribute(`src`), e.querySelectorAll(`source`).forEach(e => e.remove()), e.load()
          } catch {}
        })
      } catch {}
    }
  }, []);
  let Kt = p(() => {
    let e = L.current;
    if (!e) return;
    e.querySelectorAll(`video`).forEach(e => {
      if (e.dataset.curvySuppressed === `1`) return;
      e.dataset.curvySuppressed = `1`;
      try {
        e.pause()
      } catch {}
      if (e.addEventListener(`play`, () => {
          try {
            e.pause()
          } catch {}
        }), G(`cpslotvid`)) return;
      let t = e.currentSrc || e.getAttribute(`src`) || ``;
      if (t && !e.querySelector(`source`)) {
        e.dataset.curvySrc = t;
        try {
          e.preload = `none`, e.removeAttribute(`src`), e.load()
        } catch {}
      }
    });
    let t = _t(e),
      n = vt(t);
    n !== Le.current && (Le.current = n, o(() => {
      We(t)
    }))
  }, []);
  y(() => {
    if (t === void 0) return;
    let e = L.current;
    if (!e) return;
    let n = 0,
      r = () => {
        t.clearTimeout(n), n = t.setTimeout(() => Kt(), 80)
      },
      i = new MutationObserver(e => {
        e.some(e => {
          let t = e.target;
          return !(t instanceof HTMLElement && t.closest(`[data-curvy-managed]`))
        }) && r()
      });
    i.observe(e, {
      childList: !0,
      subtree: !0,
      attributes: !0,
      attributeFilter: [`src`, `srcset`, `style`, `href`]
    });
    let a = () => {
        let e = L.current;
        if (!e) return;
        let t = st(e),
          n = 0;
        Array.from(t.children).forEach(e => {
          if (n >= 8 || !(e instanceof HTMLElement)) return;
          let t = e.querySelector(`video`)?.getAttribute(`poster`) || ``;
          if (!t) {
            let n = ct(e);
            t = n ? lt(n) : ``
          }
          if (!t || Fe.current.has(t)) return;
          Fe.current.add(t), n++;
          let r = () => {
            let e = new Image;
            e.crossOrigin = `anonymous`, e.src = t
          };
          G(`cpwarm`) || typeof fetch != `function` ? r() : nt().then(e => {
            e ? fetch(t, {
              mode: `cors`
            }).then(e => e.arrayBuffer()).catch(() => {}) : r()
          })
        })
      },
      o = 0,
      s = 0;
    o = t.requestAnimationFrame(a), s = t.setTimeout(a, 300);
    let c = t.requestAnimationFrame(() => Kt()),
      l = t.setTimeout(() => Kt(), 240);
    return () => {
      t.clearTimeout(n), t.clearTimeout(l), t.cancelAnimationFrame(c), t.cancelAnimationFrame(o), t.clearTimeout(s), i.disconnect()
    }
  }, [Kt, i]), y(() => {
    if (t === void 0) return;
    let e = L.current;
    if (!e) return;
    if (J) {
      Oe.current = [], Ie.current = [];
      return
    }
    e.style.overflow = `visible`;
    let n = st(e);
    n.style.position = `absolute`, n.style.inset = `0`, n.style.display = `block`;
    let r = Array.from(n.children).filter(e => e instanceof HTMLElement);
    Oe.current = r, Ie.current = [], Ne.current = [], r.forEach((e, t) => {
      e.style.position = `absolute`, e.style.left = `0`, e.style.top = `0`, e.style.margin = `0`, e.style.opacity = `0`, e.style.pointerEvents = `none`, e.style.willChange = `transform`, e.dataset.curvyManaged = `1`, e.style.overflow = `hidden`, e.querySelectorAll(`a, img`).forEach(e => {
        e.draggable = !1
      });
      let n = e.firstElementChild;
      if (n) {
        n.style.margin = `0`, n.dataset.curvyManaged = `1`;
        let e = n.offsetWidth,
          r = n.offsetHeight;
        Ne.current[t] = e > 2 && r > 2 ? {
          w: e,
          h: r
        } : null
      } else Ne.current[t] = null
    })
  }, [S, J, i, Ue]);
  let qt = p(e => {
      if (t === void 0 || !e) return null;
      let n = null,
        r = -1,
        i = document.createTreeWalker(e, NodeFilter.SHOW_TEXT),
        a = i.nextNode();
      for (; a;) {
        if (a.textContent && a.textContent.trim().length > 0) {
          let e = a.parentElement;
          if (e) {
            let i = parseFloat(t.getComputedStyle(e).fontSize) || 0;
            i > r && (r = i, n = e)
          }
        }
        a = i.nextNode()
      }
      if (!n) return null;
      let o = t.getComputedStyle(n);
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
      }
    }, []),
    Jt = p(() => {
      let e = qt(Se.current),
        t = e ? JSON.stringify(e) : `none`;
      t !== Re.current && (Re.current = t, o(() => Ke(e)))
    }, [qt]),
    Yt = p(() => {
      let e = qt(Ce.current),
        t = e ? JSON.stringify(e) : `none`;
      t !== V.current && (V.current = t, o(() => H(e)))
    }, [qt]);
  yt(Se, Jt, s), yt(Ce, Yt, c), y(() => {
    W.current = {
      active: N,
      inactive: fe
    };
    let e = R.current;
    e && Array.from(e.children).forEach((e, t) => {
      e.style.color = t === Ye.current ? N : fe
    })
  }, [N, fe]), n(() => {
    let e = R.current;
    if (!e) return;
    let t = Ye.current;
    if (t >= 0) {
      let n = e.children[t];
      n && (n.style.color = W.current.active)
    }
    Ze.current = [], Xt(Be.current, A, !0)
  });
  let Xt = p((e, t, n) => {
    let r = R.current,
      {
        centers: i,
        viewportW: a
      } = Ve.current;
    if (!r || i.length === 0) return;
    let o = (e, t) => {
        if (e === Ye.current) return;
        let n = r.children,
          i = Ye.current,
          a = i >= 0 && i < n.length ? n[i] : null,
          o = e >= 0 && e < n.length ? n[e] : null;
        t && (a && (a.style.transition = `none`), o && (o.style.transition = `none`)), a && (a.style.color = W.current.inactive), o && (o.style.color = W.current.active), t && (a?.offsetWidth, o?.offsetWidth, a && (a.style.transition = ``), o && (o.style.transition = ``)), Ye.current = e
      },
      s;
    if (t && i.length >= 3) {
      if (r.children.length !== i.length) return;
      let t = Rt.current.length;
      if (t < 1 || i.length % t !== 0) return;
      let s = i.length / t;
      if (s < 2) return;
      let c = t,
        l = i[c] - i[0];
      if (!(l > 0)) return;
      let u = Math.floor(e / c),
        d = e - u * c,
        f = Math.floor(d),
        p = d - f,
        m = i[Math.min(f, c - 1)],
        h = f + 1 >= c ? i[0] + l : i[f + 1],
        g = u * l + m + (h - m) * p,
        _ = u - Math.floor(s / 2),
        v = Math.round(e),
        y = (v % c + c) % c,
        b = Math.floor(v / c),
        x = r.children,
        S = Ze.current;
      S.length !== x.length && (S.length = x.length);
      for (let e = 0; e < x.length; e++) {
        let t = Math.floor(e / c),
          r = e - t * c,
          u = _ + ((t - _) % s + s) % s,
          d = a / 2 + u * l + i[r] - g - i[e];
        (S[e] === void 0 || Math.abs(S[e] - d) > .01) && (S[e] = d, x[e].style.transform = `translate3d(${d}px, 0, 0)`), r === y && u === b && o(e, n)
      }
      Xe.current = !0, r.style.transform = `translate3d(0, 0, 0)`
    } else {
      {
        Xe.current && (Array.from(r.children).forEach(e => {
          e.style.transform = ``
        }), Xe.current = !1, Ze.current = []);
        let t = i.length,
          n = Math.min(Math.max(e, 0), t - 1),
          a = Math.floor(n),
          c = Math.min(a + 1, t - 1),
          l = n - a;
        s = i[a] + (i[c] - i[a]) * l, o(Math.round(n))
      }
      r.style.transform = `translate3d(${a/2-s}px, 0, 0)`
    }
  }, []);
  y(() => {
    if (t === void 0) return;
    let e = R.current,
      n = we.current,
      r = Te.current;
    if (!e && !r) return;
    let i = () => {
      if (e && n) {
        let t = Array.from(e.children);
        Ve.current = {
          centers: t.map(e => e.offsetLeft + e.offsetWidth / 2),
          viewportW: n.clientWidth
        }
      }
      if (Ee.current = Te.current?.offsetHeight || 0, A && e && n) {
        let t = Math.max(1, Rt.current.length),
          r = Math.max(1, Math.round(e.children.length / t)),
          i = e.scrollWidth / r;
        if (i > 1) {
          let e = Math.ceil(n.clientWidth * 2.5 / i) + 1;
          e % 2 == 0 && (e += 1), e = Math.min(Math.max(e, 3), 11), e !== at.current && (at.current = e, o(() => it(e)))
        }
      }
      let t = Math.max(1, Math.round((n?.clientWidth || r?.clientWidth || 1920) / 1920 * 100) / 100);
      t !== ht.current && (ht.current = t, o(() => mt(t))), Xt(Be.current, A, !0)
    };
    i();
    let a = document.fonts?.ready;
    a?.then && a.then(() => i());
    let s = new ResizeObserver(i);
    return n && s.observe(n), e && s.observe(e), r && s.observe(r), () => {
      Ee.current = 0, s.disconnect()
    }
  }, [It, Bt, ue, A, Xt]), y(() => {
    if (t === void 0 || J) return;
    let e = !1,
      n = null;
    St().catch(() => {});
    let r = () => {
        if (e) return;
        let r = be.current,
          i = xe.current,
          a = Rt.current;
        if (!r || !i || a.length < 1) return;
        let s = a.length,
          c = s > 1,
          l = t.matchMedia?.(`(prefers-reduced-motion: reduce)`)?.matches ?? !1,
          u = t.matchMedia?.(`(pointer: fine)`)?.matches ?? !0,
          d = !l,
          f = u,
          p = [],
          m = () => {},
          h = e => {
            p.push(e), m()
          },
          g;
        try {
          let e = G(`cpdepth`) || !(d && $.current.edgeWarp);
          Qe()?.mark(`curvy init`), g = new q.WebGLRenderer({
            alpha: !0,
            antialias: !d,
            premultipliedAlpha: !1,
            depth: e,
            stencil: G(`cpdepth`)
          }), Qe() && $e(g.getContext())
        } catch (t) {
          console.error(`WebGL unavailable, using static fallback:`, t), e || dt(!0);
          return
        }
        g.setPixelRatio(Math.min(t.devicePixelRatio || 1, u ? 2 : 2.5)), g.outputColorSpace = q.SRGBColorSpace, ce ? g.setClearColor(0, 0) : g.setClearColor(new q.Color(le), 1), i.innerHTML = ``, g.domElement.style.width = `100%`, g.domElement.style.height = `100%`, g.domElement.style.display = `block`, i.appendChild(g.domElement), De.current = g;
        let _ = new q.Scene,
          v = new q.PerspectiveCamera(48, 1, .1, 1200);
        v.position.set(0, 0, 7);
        let y = new q.Vector2(1, 1),
          b = new q.Vector2(1, 1),
          x = null,
          S = null,
          C = null,
          w = null,
          T = null,
          E = null,
          D = () => {
            d && !x && (x = new q.WebGLRenderTarget(1, 1, {
              depthBuffer: !0,
              stencilBuffer: !1,
              generateMipmaps: !1,
              minFilter: q.LinearFilter,
              magFilter: q.LinearFilter,
              format: q.RGBAFormat
            }), S = new q.Scene, C = new q.OrthographicCamera(-1, 1, 1, -1, 0, 1), w = new q.PlaneGeometry(2, 2), T = new q.ShaderMaterial({
              uniforms: {
                tDiffuse: {
                  value: x.texture
                },
                uMouse: {
                  value: new q.Vector2(.5, .5)
                },
                uResolution: {
                  value: y
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
              vertexShader: Et,
              fragmentShader: (G(`cpfbm`) ? `` : `#define EDGE_GUARD
`) + Dt,
              depthTest: !1,
              depthWrite: !1,
              transparent: !0
            }), E = new q.Mesh(w, T), S.add(E), g.getDrawingBufferSize(b), x.setSize(Math.max(1, b.x), Math.max(1, b.y)), y.set(b.x, b.y))
          };
        d && ($.current.edgeWarp || $.current.mouseWarp && u) && D();
        let O = new q.Group;
        _.add(O);
        let ee = new q.TextureLoader;
        ee.setCrossOrigin(`anonymous`);
        let k = [],
          te = {
            imageOrientation: `flipY`,
            premultiplyAlpha: `none`
          },
          ne = !G(`cpbitmap`),
          re = e => {
            let t = e && e.image;
            if (ne && typeof ImageBitmap < `u` && t instanceof ImageBitmap && e.userData.curvyBlob) {
              e.userData.curvyReleased = {
                w: t.width,
                h: t.height
              };
              try {
                t.close()
              } catch {}
            }
          },
          ie = () => {
            let e = [],
              t = /* @__PURE__ */ new Set;
            for (let n of k) {
              let r = n.material && n.material.uniforms;
              for (let n of [`uTexture`, `uTexturePrev`]) {
                let i = r && r[n] && r[n].value;
                i && !t.has(i) && i.userData.curvyReleased && (t.add(i), e.push(createImageBitmap(i.userData.curvyBlob, te).then(e => {
                  W ? e.close() : (i.image = e, i.userData.curvyReleased = null, i.needsUpdate = !0, g.initTexture(i), re(i))
                }).catch(() => {})))
              }
            }
            return Promise.all(e).then(() => {})
          },
          ae = ``,
          oe = !G(`cpscene`) && typeof HTMLVideoElement < `u` && `requestVideoFrameCallback` in HTMLVideoElement.prototype,
          j = e => e == null ? `_` : typeof e == `number` || typeof e == `boolean` ? String(e) : e.isTexture ? e.uuid + `@` + e.version : e.isColor ? e.r + `,` + e.g + `,` + e.b : e.isVector2 ? e.x + `,` + e.y : e.isVector3 ? e.x + `,` + e.y + `,` + e.z : e.isVector4 || e.isQuaternion ? e.x + `,` + e.y + `,` + e.z + `,` + e.w : e.isMatrix3 || e.isMatrix4 ? e.elements.join(`,`) : `?` + Math.random(),
          M = new q.Color,
          se = () => {
            if (!x) return ``;
            g.getClearColor(M);
            let e = x.width + `x` + x.height + `:` + x.texture.uuid + `|` + j(M) + `,` + g.getClearAlpha() + `|` + v.projectionMatrix.elements.join(`,`) + j(v.position) + j(v.quaternion);
            return _.traverse(t => {
              e += `|` + t.visible + j(t.position) + j(t.quaternion) + j(t.scale) + t.renderOrder;
              let n = t.material;
              if (!n) return;
              if (Array.isArray(n)) {
                e += `?` + Math.random();
                return
              }
              e += `:` + n.uuid + `@` + n.version + n.visible;
              let r = n.uniforms;
              if (r)
                for (let t in r) e += `;` + j(r[t].value);
              else e += `;` + j(n.map) + j(n.color) + n.opacity
            }), e
          },
          ue = new q.Raycaster,
          de = new q.Vector2,
          N = new q.Vector2(.5, .5),
          fe = new q.Vector2(.5, .5),
          pe = new q.Vector2(.5, .5),
          me = 0,
          P = 1,
          he = 1,
          F = .01,
          ge = 1,
          _e = 1,
          I = !0,
          ve = !1,
          ye = !1,
          Se = !1,
          Ce = 0,
          Te = 0,
          z = 0,
          Fe = 0,
          Le = performance.now(),
          Re = null,
          V = null,
          Ve = 0,
          Ue = !1,
          We = e => {
            let n = () => {
              Re && V !== null && !Re.hasAttribute(`href`) && Re.setAttribute(`href`, V), Re = null, V = null, Ve = 0
            };
            Ve &&= (t.clearTimeout(Ve), 0), e ? Ve = t.setTimeout(n, 0) : n()
          },
          Ge = e => {
            if (We(!1), $.current.clickAction !== `link`) return;
            let t = L.current,
              n = (e instanceof Element ? e : null)?.closest(`a[href]`);
            if (!t || !n || !t.contains(n)) return;
            let r = n.getAttribute(`href`);
            r && (Re = n, V = r, n.dataset.curvyManaged = `1`, n.removeAttribute(`href`))
          },
          Ke = `curvyPos:` + t.location.pathname + `:` + s,
          qe = 0;
        try {
          let e = t.sessionStorage?.getItem(Ke);
          if (e != null) {
            let t = parseInt(e, 10);
            Number.isFinite(t) && t >= 0 && t < s && (qe = t)
          }
        } catch {}
        let H = {
            target: qe,
            current: qe
          },
          U = !1,
          Ye = typeof t.matchMedia == `function` && t.matchMedia(`(hover: hover) and (pointer: fine)`).matches,
          Xe = 0,
          Ze = !1,
          W = !1,
          et = !G(`cpplay`),
          it = [`pointerup`, `touchend`, `keydown`, `click`],
          at = !1,
          ot = () => {
            at = !1;
            for (let e of it) document.removeEventListener(e, lt, !0)
          },
          ct = (e, t) => {
            if (e.videoPlaying = !1, et && t && t.name === `NotAllowedError` && (e.playBlocked = !0, !at && !W)) {
              at = !0;
              for (let e of it) document.addEventListener(e, lt, {
                capture: !0,
                passive: !0
              })
            }
          };

        function lt() {
          if (ot(), !W) {
            for (let e of k) e.playBlocked && (e.playBlocked = !1, e.video && e.videoWantsPlay && !e.videoPlaying && (e.videoPlaying = !0, e.video.play().catch(t => ct(e, t))));
            m()
          }
        }
        let K = !1,
          mt = 0,
          ht = () => {
            mt &&= (t.clearTimeout(mt), 0)
          },
          _t = () => {
            ht();
            let e = $.current;
            if (W || !I || document.hidden || !e.autoplay || !c || l || ve || ye) return;
            let n = Math.max(1.5, e.autoplayInterval) * 1e3,
              r = Math.max(z, Le) + n,
              i = Math.max(16, r - performance.now() + 4);
            mt = t.setTimeout(() => {
              mt = 0, m()
            }, i)
          },
          vt = e => (Math.round(e) % s + s) % s,
          yt = e => {
            if (A || !c) return c ? e : 0;
            let t = s - 1;
            return e < 0 ? e * .35 : e > t ? t + (e - t) * .35 : e
          },
          bt = e => {
            let t = e.item;
            if (t.domIndex < 0) return null;
            let n = L.current;
            if (!n) return null;
            let r = st(n).children[t.domIndex];
            if (!r) return null;
            let i = r.matches(`a[href]`) ? r : null,
              a = r.querySelector(`a[href]`),
              o = r.closest(`a[href]`);
            return i || a || o
          },
          xt = e => {
            let n = bt(e),
              r = n?.href || e.item.href;
            r && (n ? (B.current.moved = !1, n.click()) : t.location.assign(r))
          },
          St = e => {
            let t = e;
            if (A) {
              let n = Math.round(H.target),
                r = ((e - vt(n)) % s + s) % s;
              r > s / 2 && (r -= s), t = n + r
            } else t = Math.min(Math.max(e, 0), s - 1);
            H.target = t, z = performance.now(), K = !1, m()
          },
          J = e => {
            H.target = yt(Math.round(H.target) + e), z = performance.now(), K = !1, m()
          };
        He.current = {
          goTo: St,
          prev: () => J(-1),
          next: () => J(1),
          goToStrip: e => {
            if (!A) {
              St(e);
              return
            }
            let t = we.current && R.current ? R.current.children.length : 0;
            if (t < s * 2 || t % s !== 0) {
              St(e % s);
              return
            }
            let n = t / s,
              r = Math.floor(e / s),
              i = e - r * s,
              a = Math.floor(H.current / s) - Math.floor(n / 2),
              o = a + ((r - a) % n + n) % n;
            H.target = o * s + i, z = performance.now(), K = !1, m()
          },
          openCenter: () => {
            if ($.current.clickAction !== `link`) return;
            let e = k[vt(H.current)];
            e?.item.href && xt(e)
          }
        };
        let kt = () => {
            let e = $.current,
              t = Math.max(.2, e.cardAspect),
              n = Math.min((Ee.current + 16 + (je.current > 0 ? je.current + $.current.metaGap : 0)) * F, ge * .5),
              r = Math.max(1e-4, ge - n),
              i = n / 2,
              a = .5 + i / Math.max(1e-4, ge),
              o = _e * Math.min(Math.max(e.centerWidthPct / 100, .1), .95),
              s = o / t,
              c = r * .9;
            s > c && (s = c, o = s * t);
            let l = Math.min(Math.max(e.sideScale, .3), 1),
              u = o * l,
              d = _e * Math.min(Math.max(e.sidePeekPct / 100, 0), .25),
              f = _e / 2 + u / 2 - d;
            f = Math.max(f, o * .55);
            let p = d / Math.max(1e-4, _e),
              m = Math.min(Math.max(p * 1.6 + .02, .06), .45),
              h = s * l / Math.max(1e-4, ge) / 2,
              g = Math.min(Math.max(h * 1.25, .08), .5);
            return {
              Wc: o,
              Hc: s,
              d: f,
              sideScaleValue: l,
              aspect: t,
              edgeBand: m,
              edgeHalfY: g,
              yOffset: i,
              centerYUv: a
            }
          },
          Y = null,
          At = () => {
            if (Y) return Y;
            let e = new q.WebGLRenderTarget(4, 4),
              t = new q.Scene,
              n = new q.OrthographicCamera(-1, 1, 1, -1, 0, 1),
              r = new q.DataTexture(new Uint8Array([255, 255, 255, 255]), 1, 1);
            r.needsUpdate = !0;
            let i = new q.MeshBasicMaterial({
                map: r
              }),
              a = new q.Mesh(new q.PlaneGeometry(2, 2), i);
            return t.add(a), Y = {
              target: e,
              scene: t,
              camera: n,
              material: i,
              buffer: /* @__PURE__ */ new Uint8Array(64)
            }, Y
          },
          jt = e => {
            try {
              At(), Y.material.map = e, g.setRenderTarget(Y.target), g.clear(), g.render(Y.scene, Y.camera), g.setRenderTarget(null), g.readRenderTargetPixels(Y.target, 0, 0, 4, 4, Y.buffer);
              let t = Y.buffer;
              for (let e = 0; e < t.length; e += 4)
                if (t[e] > 8 || t[e + 1] > 8 || t[e + 2] > 8) return !0;
              return !1
            } catch {
              try {
                g.setRenderTarget(null)
              } catch {}
              return !0
            }
          },
          Pt = (e, t) => {
            let n = e.swap;
            if (n.phase !== `settled`) {
              if (n.prev !== t) try {
                n.prev.dispose()
              } catch {}
              e.swap = {
                phase: `settled`
              }
            }
          },
          Ft = e => {
            Pt(e, e.texture || void 0), e.material.uniforms.uSwap.value = 1, e.material.uniforms.uTexturePrev.value = e.texture
          },
          X = (e, t, n, r, i = `dissolve`) => {
            let a = e.material.uniforms,
              o = e.texture,
              s = n / Math.max(1, r),
              c = !!(o && o !== t);
            Pt(e, t), i === `cut` || !c ? c ? (e.swap = {
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
            }, a.uTexturePrev.value = o, a.uPrevAspect.value = a.uImageAspect.value, a.uSwap.value = 0), e.texture = t, a.uTexture.value = t, a.uImageAspect.value = s
          },
          It = (e, n) => {
            let i = e.item;
            if (i.videoUrl) {
              let a = Ot.get(i.videoUrl);
              a && Ot.delete(i.videoUrl);
              let o = !!(a && a.readyState >= 2);
              e.warmReclaim = o;
              let s = !!i.coverUrl;
              s && Z(e, n);
              let c = a || document.createElement(`video`);
              c.crossOrigin = `anonymous`, c.muted = !0, c.loop = !0, c.playsInline = !0, c.preload = `metadata`;
              let l = !c.getAttribute(`src`),
                d = l && ft(i.videoUrl);
              if (d && (c.loop = !1), l && !d && (c.src = i.videoUrl), e.videoSourceReady = !l || !d, Object.assign(c.style, {
                  position: `absolute`,
                  left: `0px`,
                  bottom: `0px`,
                  width: `2px`,
                  height: `2px`,
                  opacity: `0.01`,
                  pointerEvents: `none`,
                  zIndex: `-1`
                }), !c.isConnected) try {
                r.appendChild(c)
              } catch {}
              e.video = c;
              let f = new AbortController;
              e.videoAbort = f;
              let p = f.signal;
              if (e.safariWebMPlayback = d, d) {
                let n = () => {
                  if (W || p.aborted || !e.videoPlaying || e.videoRestarting) return;
                  e.videoRestarting = !0;
                  let n = (e.videoRestartGeneration || 0) + 1;
                  e.videoRestartGeneration = n;
                  let r = !1,
                    i, a = () => {
                      c.removeEventListener(`loadeddata`, o), c.removeEventListener(`canplay`, o), i !== void 0 && t.clearTimeout(i)
                    },
                    o = () => {
                      if (r) return;
                      if (r = !0, a(), W || p.aborted || e.videoRestartGeneration !== n || !e.videoPlaying) {
                        e.videoRestarting = !1;
                        return
                      }
                      let t = c.play();
                      t && t.then ? t.then(() => {
                        e.videoRestarting = !1
                      }).catch(() => {
                        e.videoRestarting = !1
                      }) : e.videoRestarting = !1
                    };
                  try {
                    c.pause(), e.videoBlobUrl ? (c.addEventListener(`loadeddata`, o), c.addEventListener(`canplay`, o), c.load(), c.readyState >= 2 && t.requestAnimationFrame(o), i = t.setTimeout(o, 600)) : (c.currentTime = 0, t.requestAnimationFrame(o))
                  } catch {
                    o()
                  }
                };
                e.restartSafariWebM = n, c.addEventListener(`ended`, n, {
                  signal: p
                })
              }
              let m = null,
                g = () => {
                  if (e.videoSourceReady || c.getAttribute(`src`)) return e.videoSourceReady = !0, Promise.resolve();
                  if (!d) {
                    c.src = i.videoUrl, e.videoSourceReady = !0;
                    try {
                      c.load()
                    } catch {}
                    return Promise.resolve()
                  }
                  return m || (m = (async () => {
                    try {
                      let t = await fetch(i.videoUrl, {
                        mode: `cors`,
                        credentials: `omit`,
                        signal: p
                      });
                      if (!t.ok) throw Error(`HTTP ${t.status} ${t.statusText}`);
                      let n = await t.blob();
                      if (W || p.aborted) return;
                      let r = URL.createObjectURL(n);
                      e.videoBlobUrl = r, c.src = r, e.videoSourceReady = !0, c.load()
                    } catch (t) {
                      if (W || p.aborted) return;
                      console.warn(`CurvyProjectShowcase: WebM Blob fetch failed; falling back to direct URL.`, t), c.src = i.videoUrl, e.videoSourceReady = !0;
                      try {
                        c.load()
                      } catch {}
                    }
                  })(), m)
                };
              d && (e.ensureVideoSource = g);
              let _ = !1,
                v = () => {
                  _ || (_ = !0, s || n())
                },
                y = () => {
                  if (W || e.videoTextureAttached) return;
                  e.videoTextureAttached = !0;
                  let t = e.preparedVideoTexture || tt(q, c, `cpvtex`);
                  e.preparedVideoTexture = null, t.colorSpace = q.SRGBColorSpace, t.generateMipmaps = !1, t.minFilter = q.LinearFilter, t.magFilter = q.LinearFilter, X(e, t, c.videoWidth || 16, c.videoHeight || 9, `dissolve`)
                },
                b = () => {
                  W || e.videoTextureAttached || e.preparedVideoTexture || !c.videoWidth || h({
                    entry: e,
                    texture: null,
                    w: 0,
                    h: 0,
                    full: !1,
                    prepareVideo: !0
                  })
                },
                x = document.createElement(`canvas`);
              x.width = 2, x.height = 2;
              let S = x.getContext(`2d`, {
                  willReadFrequently: !0
                }),
                C = () => {
                  if (!u && e.item.coverUrl || !S) return !0;
                  try {
                    S.drawImage(c, 0, 0, 2, 2);
                    let e = S.getImageData(0, 0, 2, 2).data;
                    for (let t = 0; t < e.length; t += 4)
                      if (e[t] > 8 || e[t + 1] > 8 || e[t + 2] > 8) return !0;
                    return !1
                  } catch {
                    return !0
                  }
                },
                w = () => {
                  if (W || e.videoTextureAttached) return;
                  let n = c;
                  if (typeof n.requestVideoFrameCallback == `function`) {
                    let r = 0,
                      i = () => {
                        if (W || e.videoTextureAttached) return;
                        if (c.paused) {
                          n.requestVideoFrameCallback(i);
                          return
                        }
                        r++;
                        let a = 0;
                        try {
                          let e = c.buffered,
                            t = c.currentTime;
                          for (let n = 0; n < e.length; n++)
                            if (e.start(n) <= t && t <= e.end(n)) {
                              a = e.end(n) - t;
                              break
                            }
                        } catch {}
                        let o = c.readyState >= 4 || a > 2.5 || c.duration > 0 && Number.isFinite(c.duration) && a > c.duration - c.currentTime - .05;
                        if ((G(`cpread`) ? C() && o : o && C()) || r >= 15 && o || r >= 90) {
                          if (c.currentTime > .15) {
                            let r = t.setTimeout(() => {
                                c.removeEventListener(`seeked`, i), !W && !e.videoTextureAttached && y()
                              }, 1500),
                              i = () => {
                                t.clearTimeout(r), c.removeEventListener(`seeked`, i), !(W || e.videoTextureAttached) && n.requestVideoFrameCallback(() => {
                                  !W && !e.videoTextureAttached && y()
                                })
                              };
                            c.addEventListener(`seeked`, i);
                            try {
                              c.currentTime = 0
                            } catch {
                              c.removeEventListener(`seeked`, i), y()
                            }
                          } else y()
                        } else n.requestVideoFrameCallback(i)
                      };
                    n.requestVideoFrameCallback(i)
                  } else {
                    let e = () => t.requestAnimationFrame(() => y());
                    !c.paused && c.currentTime > 0 ? e() : c.addEventListener(`playing`, e, {
                      once: !0,
                      signal: p
                    })
                  }
                };
              c.addEventListener(`loadeddata`, () => {
                v(), !W && (b(), w())
              }, {
                once: !0,
                signal: p
              }), c.addEventListener(`loadedmetadata`, v, {
                once: !0,
                signal: p
              }), c.addEventListener(`error`, v, {
                once: !0,
                signal: p
              }), l && !d && c.load(), l && d && !s && g(), o && (v(), W || (b(), w()))
            } else i.coverUrl ? Z(e, n) : n()
          },
          Lt = (e, t = !1) => {
            e.colorSpace = q.SRGBColorSpace, f && !t ? (e.generateMipmaps = !0, e.minFilter = q.LinearMipmapLinearFilter, e.anisotropy = Math.min(4, g.capabilities.getMaxAnisotropy())) : (e.generateMipmaps = !1, e.minFilter = q.LinearFilter), e.magFilter = q.LinearFilter
          },
          zt = e => {
            let t = e.item.coverTinyUrl;
            if (!t || typeof createImageBitmap != `function`) return;
            let n = null,
              r = () => fetch(t, {
                mode: `cors`
              }).then(e => {
                if (!e.ok) throw Error(`tiny fetch failed`);
                return e.blob()
              }).then(e => (n = e, createImageBitmap(e, te))).then(t => {
                if (W || e.fullResAttached || e.videoTextureAttached || e.texture) {
                  try {
                    t.close?.()
                  } catch {}
                  return
                }
                let r = new q.Texture(t);
                r.userData.curvyBlob = n, r.needsUpdate = !0, r.flipY = !1, r.colorSpace = q.SRGBColorSpace, r.generateMipmaps = !1, r.minFilter = q.LinearFilter, r.magFilter = q.LinearFilter;
                let i = e.item.coverAspect;
                h({
                  entry: e,
                  texture: r,
                  w: i > 0 ? Math.round(i * 2048) : t.width || 1,
                  h: i > 0 ? 2048 : t.height || 1,
                  full: !1
                })
              }).catch(() => {});
            nt().then(e => {
              e && !W && r()
            })
          },
          Z = (e, t) => {
            let n = e.item;
            zt(e);
            let r = () => {
                ee.load(n.coverUrl, n => {
                  t?.(), W ? n.dispose() : (Lt(n, !!e.item.videoUrl), h({
                    entry: e,
                    texture: n,
                    w: n.image?.width || 1,
                    h: n.image?.height || 1,
                    full: !0
                  }))
                }, void 0, () => t?.())
              },
              i = null,
              a = () => fetch(n.coverUrl, {
                mode: `cors`
              }).then(e => {
                if (!e.ok) throw Error(`fetch failed`);
                return e.blob()
              }).then(e => (i = e, createImageBitmap(e, te))).then(n => {
                if (t?.(), W) {
                  try {
                    n.close?.()
                  } catch {}
                  return
                }
                let r = new q.Texture(n);
                r.userData.curvyBlob = i, r.needsUpdate = !0, r.flipY = !1, Lt(r, !!e.item.videoUrl), h({
                  entry: e,
                  texture: r,
                  w: n.width || 1,
                  h: n.height || 1,
                  full: !0
                })
              }).catch(() => {
                W || r()
              });
            typeof createImageBitmap == `function` ? nt().then(e => {
              W || (e ? a() : r())
            }) : r()
          };
        n = () => {
          W = !0, ht(), ot();
          try {
            U && t.sessionStorage?.setItem(Ke, String(vt(Math.round(H.current))))
          } catch {}
          g.domElement.parentElement === i && i.removeChild(g.domElement), gt(() => {
            try {
              g.dispose(), g.forceContextLoss()
            } catch {}
          })
        }, requestAnimationFrame(() => {
          if (e || W) return;
          a.forEach(e => {
            let t = new q.PlaneGeometry(1, 1, 24, 1),
              n = new q.ShaderMaterial({
                transparent: !0,
                vertexShader: wt,
                fragmentShader: Tt,
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
              r = new q.Mesh(t, n);
            O.add(r), k.push({
              mesh: r,
              material: n,
              texture: null,
              video: null,
              videoPlaying: !1,
              presence: {
                phase: `hidden`
              },
              swap: {
                phase: `settled`
              },
              item: e
            })
          }), Me.current = [];
          let f = u ? 4 : 2,
            h = k.map((e, t) => t).sort((e, t) => Math.min(e, s - e) - Math.min(t, s - t) || e - t),
            ee = 0,
            te = () => {
              for (; ee < f && h.length > 0 && !W;) {
                let e = h.shift();
                ee++;
                let n = !1,
                  r = 0,
                  i = () => {
                    n || (n = !0, t.clearTimeout(r), ee--, te())
                  };
                r = t.setTimeout(i, Ct.loadSlotCapMs), It(k[e], i)
              }
            };
          te();
          let ne = !1,
            j = 0,
            M = () => {
              if (P = Math.max(1, r.clientWidth), he = Math.max(1, r.clientHeight), P <= 0 || he <= 0) return;
              K = !1, m();
              let e = u ? 85e5 : 35e5,
                n = u ? 2 : 2.5,
                i = Math.sqrt(e / (P * he)),
                a = Math.min(t.devicePixelRatio || 1, n, Math.max(.75, i));
              g.setPixelRatio(ne ? a : Math.min(a, 1)), g.setSize(P, he, !1), g.domElement.style.width = `100%`, g.domElement.style.height = `100%`, v.aspect = P / he, v.updateProjectionMatrix(), g.getDrawingBufferSize(b), x && x.setSize(b.x, b.y), y.set(b.x, b.y);
              let o = v.fov * Math.PI / 180;
              ge = 2 * Math.tan(o / 2) * v.position.z, F = ge / he, _e = ge * v.aspect
            };
          M();
          let ce = 0,
            le = !1,
            be = NaN,
            xe = NaN,
            we = [],
            Ee = e => {
              if (!U && r.offsetWidth > 0 && (U = !0), ce++, ce === 1 && Qe()?.mark(`first draw`), ce % 12 == 0) {
                let e = r.getBoundingClientRect(),
                  t = Math.abs(e.x - be) > .5 || Math.abs(e.y - xe) > .5;
                be = e.x, xe = e.y, le = t || rt(r)
              }
              if (le && (ce & 1) == 1) {
                Xe = t.requestAnimationFrame(Ee);
                return
              }
              if (W || !Ze) return;
              let n = $.current;
              if (p.length > 0) {
                let e = p.shift();
                if (e.prepareVideo) {
                  let t = e.entry,
                    n = t.video;
                  if (!W && n && n.videoWidth > 0 && !t.videoTextureAttached && !t.preparedVideoTexture) {
                    let e = tt(q, n, `cpvtex`);
                    e.colorSpace = q.SRGBColorSpace, e.generateMipmaps = !1, e.minFilter = q.LinearFilter, e.magFilter = q.LinearFilter, g.initTexture(e), t.preparedVideoTexture = e
                  }
                } else e.texture && (W || e.entry.videoTextureAttached || !e.full && e.entry.fullResAttached ? e.texture.dispose() : (g.initTexture(e.texture), re(e.texture), X(e.entry, e.texture, e.w, e.h), e.full && (e.entry.fullResAttached = !0)))
              }
              if (I && P > 0 && he > 0) {
                let {
                  Wc: r,
                  Hc: i,
                  d: a,
                  sideScaleValue: f,
                  aspect: m,
                  edgeBand: h,
                  edgeHalfY: y,
                  yOffset: b,
                  centerYUv: w
                } = kt(), E = performance.now(), O = !ve && E - z > 120;
                if (n.autoplay && c && !l && !ve && !ye && Math.abs(H.target - H.current) < .01) {
                  let e = Math.max(1.5, n.autoplayInterval) * 1e3;
                  if (E - Math.max(z, Le) > e) {
                    Le = E;
                    let e = Math.round(H.target);
                    !A && e >= s - 1 ? H.target = 0 : H.target = yt(e + 1)
                  }
                }
                if (O && c) {
                  let e = A ? Math.round(H.target) : Math.min(Math.max(Math.round(H.target), 0), s - 1);
                  H.target += (e - H.target) * .1
                }
                if (!A && c) {
                  let e = s - 1;
                  H.target < 0 && (H.target += (0 - H.target) * .08), H.target > e && (H.target += (e - H.target) * .08)
                }
                let ee = ve ? Math.max(n.lerpSmoothness, .16) : n.lerpSmoothness;
                H.current += (H.target - H.current) * ee;
                let te = (H.target - H.current) * a;
                fe.lerp(N, .12);
                let ne = fe.distanceTo(pe);
                pe.copy(fe), me += (Math.min(ne * 60, 1) - me) * .08, k.forEach((e, o) => {
                  let c = e.presence;
                  if (c.phase === `fading-in`) {
                    let t = Math.min(1, (E - c.startedAt) / Ct.fadeInMs);
                    e.material.uniforms.uHasTexture.value = 1 - (1 - t) * (1 - t), t >= 1 && (e.presence = {
                      phase: `shown`
                    })
                  }
                  let d = e.swap;
                  if (d.phase === `cut-pending`) d.frames++, ((!u && e.item.coverUrl ? d.frames >= 4 : d.frames % 2 == 0 && jt(e.texture)) || d.frames > 60) && Ft(e);
                  else if (d.phase === `dissolving`) {
                    let t = Math.min(1, (E - d.startedAt) / Ct.swapMs);
                    e.material.uniforms.uSwap.value = 1 - (1 - t) * (1 - t), t >= 1 && Ft(e)
                  }
                  let p = o - H.current;
                  A && s > 1 && (p = ((p + s / 2) % s + s) % s - s / 2);
                  let h = p * a,
                    g = 1 - (1 - f) * Math.min(Math.abs(p), 1);
                  e.mesh.scale.set(r * g, i * g, 1), e.mesh.position.set(h, b, 0);
                  let _ = Math.abs(p) < 2.6;
                  e.mesh.visible = _, e.material.uniforms.uPlaneAspect.value = m;
                  let v = e.item.radiusPx > 0 ? e.item.radiusPx : n.cornerRadius,
                    y = Math.max(1, i * g / F);
                  if (e.material.uniforms.uRadius.value = Math.min(Math.max(v, 0) / y, .5), e.video) {
                    let t = _ && I && Math.abs(p) < 1.45;
                    t && e.videoSourceReady === !1 && e.ensureVideoSource && e.ensureVideoSource();
                    let n = e.videoSourceReady !== !1;
                    if (t && n && !e.videoPlaying && !e.warmedAdjacent) {
                      e.warmedAdjacent = !0, e.video.preload = `auto`;
                      let t = e.video;
                      try {
                        let n = t.play();
                        n && n.then && n.then(() => {
                          e.videoPlaying || t.pause()
                        }).catch(() => {})
                      } catch {}
                    }
                    let r = _ && Math.abs(p) < .75 && I;
                    if (e.videoWantsPlay = r, r && !e.videoPlaying && !e.playBlocked) n ? (e.videoPlaying = !0, e.video.preload !== `auto` && (e.video.preload = `auto`), e.video.play().catch(t => ct(e, t))) : e.ensureVideoSource && e.ensureVideoSource();
                    else if (!r && e.videoPlaying) e.videoPlaying = !1, e.videoRestarting = !1, e.videoRestartGeneration = (e.videoRestartGeneration || 0) + 1, e.video.pause();
                    else if (r && e.videoPlaying && e.safariWebMPlayback) {
                      let t = e.video,
                        n = t.duration,
                        r = Number.isFinite(n) && n > 0 && t.currentTime >= n - .08;
                      t.ended || r ? e.restartSafariWebM?.() : t.paused && !t.seeking && !e.videoRestarting && t.play().catch(() => {})
                    }
                    let i = !_;
                    i && !e.videoOutOfView ? (e.videoOutOfView = !0, e.warmedAdjacent = !1, e.video.currentTime > .1 && ut(e.video)) : !i && e.videoOutOfView && (e.videoOutOfView = !1)
                  }
                  let x = l ? 0 : te * 60;
                  e.material.uniforms.uScrollVelocity.value += (x - e.material.uniforms.uScrollVelocity.value) * .12, e.material.uniforms.uBendIntensity.value = l ? 0 : n.bendIntensity;
                  let S = P / 2 + h / F,
                    C = he / 2 - b / F,
                    w = r * g / F,
                    T = i * g / F,
                    D = Ae.current[o];
                  if (!D && !G(`cpposter`) && (e.domPosterReleased = !0), D && !e.domPosterReleased) {
                    let r = D.complete && D.naturalWidth > 0;
                    if (e.videoTextureAttached && e.swap.phase !== `cut-pending` && e.presence.phase !== `fading-in` && e.material.uniforms.uHasTexture.value >= .999 && Math.abs(p) >= .55) e.domPosterReleased = !0, D.style.display = `none`;
                    else if (e.videoTextureAttached && e.swap.phase !== `cut-pending` && e.presence.phase !== `fading-in` && e.material.uniforms.uHasTexture.value >= .999) {
                      e.posterRewound || (e.posterRewound = !0, e.posterReleaseCount = 0), e.posterReleaseCount = (e.posterReleaseCount || 0) + 1;
                      let n = e.video,
                        i = !n || n.currentTime <= .25,
                        a = e.warmReclaim ? 2 : 4;
                      (i && e.posterReleaseCount >= a || e.posterReleaseCount > 45 || !r) && (e.domPosterReleased = !0, t.requestAnimationFrame(() => t.requestAnimationFrame(() => {
                        D.style.display = `none`
                      })))
                    }
                    if (!e.domPosterReleased) {
                      let t = S - w / 2,
                        r = C - T / 2,
                        i = we[o];
                      (!i || Math.abs(i.x - t) > .5 || Math.abs(i.y - r) > .5 || Math.abs(i.w - w) > .5 || Math.abs(i.h - T) > .5 || i.a !== 0) && (D.style.transform = `translate3d(${t}px, ${r}px, 0)`, D.style.width = `${w}px`, D.style.height = `${T}px`, D.style.borderRadius = `${e.item.radiusPx>0?e.item.radiusPx:n.cornerRadius}px`, !i || i.a, D.style.opacity = `0`, we[o] = {
                        x: t,
                        y: r,
                        w,
                        h: T,
                        a: 0
                      })
                    }
                  }
                  if (ke.current.length > 0) {
                    let e = ke.current[o];
                    if (e) {
                      let t = r / F,
                        i = t > 0 ? w / t : 1,
                        a = S - w / 2,
                        s = C + T / 2 + n.metaGap,
                        c = _ ? Math.max(0, Math.min(1, 1 - Math.max(0, Math.abs(p) - .12) * 1.7)) : 0,
                        l = Me.current[o];
                      (!l || Math.abs(l.x - a) > .5 || Math.abs(l.y - s) > .5 || Math.abs(l.w - t) > .5 || Math.abs(l.k - i) > .002 || Math.abs(l.a - c) > .01) && (e.style.transform = `translate3d(${a}px, ${s}px, 0) scale(${i})`, e.style.width = `${t}px`, e.style.opacity = String(c), Me.current[o] = {
                        x: a,
                        y: s,
                        w: t,
                        k: i,
                        a: c
                      })
                    }
                  }
                  let O = e.item.domIndex;
                  if (O >= 0) {
                    let t = Oe.current[O];
                    if (t) {
                      let r = n.clickAction === `link` && !!e.item.href,
                        i = n.cardCursor && Ye,
                        a = (r || i) && _ && Math.abs(p) < .5 ? {
                          x: S - w / 2,
                          y: C - T / 2,
                          w,
                          h: T,
                          visible: !0
                        } : {
                          x: 0,
                          y: 0,
                          w,
                          h: T,
                          visible: !1
                        },
                        o = Ie.current[O];
                      if (!o || Math.abs(o.x - a.x) > .5 || Math.abs(o.y - a.y) > .5 || Math.abs(o.w - a.w) > .5 || Math.abs(o.h - a.h) > .5 || o.visible !== a.visible) {
                        t.style.transform = `translate3d(${a.x}px, ${a.y}px, 0)`, t.style.width = `${a.w}px`, t.style.height = `${a.h}px`, t.style.pointerEvents = a.visible ? `auto` : `none`;
                        let e = t.firstElementChild,
                          n = Ne.current[O];
                        if (e && !n && E - Pe.current > 250) {
                          Pe.current = E;
                          let t = e.offsetWidth,
                            r = e.offsetHeight;
                          t > 2 && r > 2 && (n = {
                            w: t,
                            h: r
                          }, Ne.current[O] = n)
                        }
                        e && n && (e.style.transformOrigin = `top left`, e.style.transform = `scale(${a.w/n.w}, ${a.h/n.h})`), Ie.current[O] = a
                      }
                    }
                  }
                }), Be.current = H.current, Xt(H.current, A);
                let re = vt(H.current);
                re !== ze.current && (ze.current = re, o(() => {
                  Je(re)
                }));
                let ie = n.mouseWarp && u;
                if (d && (ie || n.edgeWarp) && D(), d && x && S && C && T && (ie || n.edgeWarp) && T && x && S && C) {
                  T.uniforms.uMouse.value.copy(fe), T.uniforms.uTime.value = e % 36e5 * .001, T.uniforms.uMouseEnabled.value = +!!ie, T.uniforms.uMouseStrength.value = n.mouseWarpStrength, T.uniforms.uMouseEffect.value = Nt[n.mouseEffect] ?? 0, T.uniforms.uMouseRadius.value = Math.min(Math.max(n.mouseRadius, .03), .4), T.uniforms.uMouseChroma.value = Math.min(Math.max(n.mouseChroma, 0), 1), T.uniforms.uMouseVel.value = n.mouseSpeedReact ? me : 1, T.uniforms.uEdgeEnabled.value = +!!n.edgeWarp, T.uniforms.uEdgeStrength.value = n.edgeWarpStrength, T.uniforms.uEdgeEffect.value = Mt[n.edgeEffect] ?? 0, T.uniforms.uEdgeBand.value = h, T.uniforms.uEdgeHalfY.value = y, T.uniforms.uCenterY.value = w;
                  let t = oe ? se() : ``;
                  (!t || t !== ae) && (g.setRenderTarget(x), g.render(_, v), ae = t), g.setRenderTarget(null), g.render(S, C)
                } else ae = ``, g.render(_, v);
                let j = !1;
                for (let e = 0; e < k.length; e++) {
                  let t = k[e];
                  if (t.presence.phase === `fading-in` || t.swap.phase !== `settled` || t.videoPlaying || Math.abs(t.material.uniforms.uScrollVelocity.value) > .002 || t.video && t.videoTextureAttached && !t.domPosterReleased) {
                    j = !0;
                    break
                  }
                }
                let M = ie && (n.mouseEffect === `ripple` || n.mouseEffect === `noise` || fe.distanceTo(N) > 5e-4 || n.mouseSpeedReact && me > .004);
                if (K = !n.edgeWarp && !M && !j && !ve && p.length === 0 && Math.abs(H.target - H.current) < 5e-4 && E - z > 300, A && !ve && !j && Math.abs(H.target - H.current) < 5e-4) {
                  let e = vt(Math.round(H.current));
                  Math.abs(H.current - e) > 1e-4 && Number.isInteger(Math.round(H.current)) && (H.current = e, H.target = e, Be.current = e, Xt(e, !0, !0))
                }
              }
              I && K && p.length === 0 ? (Ze = !1, _t()) : !I && p.length === 0 ? Ze = !1 : Xe = t.requestAnimationFrame(Ee)
            },
            R = !1,
            je = !1,
            V = () => {
              if (ht(), !ne && !j && (j = t.setTimeout(() => {
                  ne = !0, M()
                }, Ct.dprWarmupMs)), !(Ze || W)) {
                if (R) Ze = !0, K = !1, Xe = t.requestAnimationFrame(Ee);
                else {
                  if (je) return;
                  je = !0, t.requestAnimationFrame(() => {
                    if (!W) {
                      Qe()?.mark(`compile`);
                      try {
                        g.compile(_, v)
                      } catch {}
                      t.requestAnimationFrame(() => {
                        if (!W) {
                          try {
                            x && S && C && (g.setRenderTarget(x), g.clear(), g.setRenderTarget(null), ae = ``, g.compile(S, C))
                          } catch {}
                          try {
                            if (a.some(e => !!e.videoUrl)) {
                              let e = At();
                              g.compile(e.scene, e.camera)
                            }
                          } catch {}
                          R = !0, je = !1, Qe()?.mark(`compiled`), V()
                        }
                      })
                    }
                  })
                }
              }
            },
            qe = () => {
              ht(), Ze && (Ze = !1, t.cancelAnimationFrame(Xe), k.forEach(e => {
                if (e.video && e.videoPlaying) {
                  e.videoPlaying = !1;
                  try {
                    e.video.pause()
                  } catch {}
                }
              }))
            };
          m = () => {
            ht(), !W && !Ze && V()
          };
          let $e = (e, t) => {
              let n = r.getBoundingClientRect();
              de.x = (e - n.left) / n.width * 2 - 1, de.y = -((t - n.top) / n.height) * 2 + 1, ue.setFromCamera(de, v);
              let i = ue.intersectObjects(k.filter(e => e.mesh.visible).map(e => e.mesh), !1)[0]?.object;
              if (!i) return null;
              let a = k.find(e => e.mesh === i) || null;
              return a ? {
                entry: a,
                index: k.indexOf(a)
              } : null
            },
            et = e => {
              if (!c) return;
              let t = $.current,
                n = Math.abs(e.deltaX) > Math.abs(e.deltaY);
              if (!t.hijackScroll && !n) return;
              e.preventDefault();
              let r = t.hijackScroll ? e.deltaX + e.deltaY : e.deltaX,
                {
                  d: i
                } = kt(),
                a = Math.max(1, i / F);
              H.target = yt(H.target + r * t.scrollSpeed / a), z = performance.now(), K = !1, m()
            },
            nt = e => {
              let t = e.target;
              if (!t?.closest?.(`[data-nav-btn], [data-strip]`) && (Ge(e.target), K = !1, m(), ve = !0, Se = !1, Ue = !1, e.clientX, Ce = e.clientX, Te = 0, Fe = performance.now(), z = Fe, B.current.down = !0, B.current.moved = !1, B.current.pointerId = e.pointerId, B.current.startX = e.clientX, B.current.startY = e.clientY, c)) {
                let e = L.current,
                  n = !!(e && e.contains(t)),
                  i = n && $.current.cardCursor && Ye;
                r.style.cursor = i ? `` : n && $.current.clickAction === `link` ? `pointer` : `grabbing`
              }
            },
            it = null,
            at = -1,
            st = e => {
              K = !1, m(), (at !== ce || !it) && (it = r.getBoundingClientRect(), at = ce);
              let t = it;
              N.set((e.clientX - t.left) / Math.max(1, t.width), 1 - (e.clientY - t.top) / Math.max(1, t.height));
              let n = $.current;
              if (!ve) {
                if (u) {
                  let t = c ? `grab` : `default`,
                    i = e.target,
                    a = !!i?.closest?.(`[data-strip], [data-nav-btn]`),
                    o = L.current;
                  if (n.cardCursor && o && o.contains(i)) {
                    r.style.cursor = ``;
                    return
                  }
                  if (n.clickAction !== `none` && !a) {
                    let r = $e(e.clientX, e.clientY);
                    r && (r.index === vt(H.current) ? n.clickAction === `link` && r.entry.item.href && (t = `pointer`) : c && (t = `pointer`))
                  }
                  r.style.cursor !== t && (r.style.cursor = t)
                }
                return
              }
              if (!c) return;
              let i = e.clientX - Ce;
              Ce = e.clientX;
              let a = e.clientX - B.current.startX,
                o = e.clientY - B.current.startY,
                s = Math.abs(a),
                l = Math.abs(o),
                d = e.pointerType === `touch` ? 6 : 3,
                f = e.pointerType === `touch` ? 14 : 5,
                p = s > d && s >= l;
              if ((p || Math.hypot(a, o) > f) && (Se = !0, B.current.moved = !0), p && !Ue) try {
                r.setPointerCapture(e.pointerId), Ue = !0
              } catch {}
              p && e.cancelable && e.preventDefault();
              let {
                d: h
              } = kt(), g = Math.max(1, h / F), _ = -i * n.dragSpeed / g;
              H.target = yt(H.target + _), Te = Te * .6 + _ * .4, Fe = performance.now(), z = Fe
            },
            lt = e => {
              if (!ve) return;
              let t = e.type === `pointercancel`,
                n = !Se && !t,
                i = !!Re;
              if (i && We(!n), n) {
                let t = $.current,
                  n = $e(e.clientX, e.clientY);
                n && t.clickAction !== `none` && (n.index === vt(H.current) ? t.clickAction === `link` && (i && n.entry.item.domIndex >= 0 || xt(n.entry)) : St(n.index))
              }
              if (Se) {
                let e = performance.now() - Fe > 80 ? 0 : Te,
                  t = H.target + e * 12.5,
                  n = Math.round(H.target),
                  r = u ? 2 : 1,
                  i = Math.round(t);
                i = Math.min(Math.max(i, n - r), n + r), A || (i = Math.min(Math.max(i, 0), s - 1)), H.target = i, z = 0
              }
              ve = !1, Te = 0, Ue = !1, B.current.down = !1;
              let a = L.current,
                o = e.target,
                l = !!(a && a.contains(o)),
                d = l && $.current.cardCursor && Ye;
              r.style.cursor = d ? `` : l && $.current.clickAction === `link` ? `pointer` : c ? `grab` : `default`
            },
            dt = new ResizeObserver(() => M());
          dt.observe(r);
          let ft = new IntersectionObserver(e => {
            I = e.some(e => e.isIntersecting), I && !document.hidden ? V() : (qe(), I || (k.forEach(e => {
              e.video && e.video.currentTime > .1 && (e.videoOutOfView = !0, ut(e.video))
            }), p.length > 0 && V()))
          });
          ft.observe(r);
          let mt = () => {
            !document.hidden && (I || p.length > 0) ? V() : qe()
          };
          document.addEventListener(`visibilitychange`, mt);
          let bt = () => {
              ye = !0, ht()
            },
            Et = () => {
              ye = !1, m()
            },
            Dt = e => {
              let t = L.current,
                n = e.target,
                r = !!(t && n && t.contains(n));
              (B.current.moved || r && $.current.clickAction !== `link`) && (e.preventDefault(), e.stopPropagation(), B.current.moved = !1)
            },
            J = e => {
              e.preventDefault(), qe()
            },
            Ot = () => {
              ae = ``, ie().then(() => {
                !W && I && !document.hidden && V()
              })
            };
          g.domElement.addEventListener(`webglcontextlost`, J), g.domElement.addEventListener(`webglcontextrestored`, Ot), r.style.cursor = c ? `grab` : `default`, r.addEventListener(`wheel`, et, {
            passive: !1
          }), r.addEventListener(`pointerdown`, nt), r.addEventListener(`pointermove`, st), r.addEventListener(`pointerup`, lt), r.addEventListener(`pointercancel`, lt), t.addEventListener(`pointerup`, lt), r.addEventListener(`pointerenter`, bt), r.addEventListener(`pointerleave`, Et), r.addEventListener(`click`, Dt, !0);
          let Pt = g.compileAsync?.bind(g);
          if (Pt) {
            let e = !1,
              n = t => {
                !e && !W && (e = !0, t && (R = !0), V())
              },
              r = [Promise.resolve(Pt(_, v)).catch(() => {})];
            if (S && C && r.push(Promise.resolve(Pt(S, C)).catch(() => {})), a.some(e => !!e.videoUrl)) try {
              let e = At();
              r.push(Promise.resolve(Pt(e.scene, e.camera)).catch(() => {}))
            } catch {}
            Promise.all(r).then(() => n(!0)), t.setTimeout(() => n(!1), 1e3)
          } else V();
          n = () => {
            W = !0, ot(), ht();
            try {
              U && t.sessionStorage?.setItem(Ke, String(vt(Math.round(H.current))))
            } catch {}
            t.clearTimeout(j), Ve &&= (t.clearTimeout(Ve), 0), We(!1);
            try {
              let e = B.current.pointerId;
              e >= 0 && r.hasPointerCapture?.(e) && r.releasePointerCapture(e)
            } catch {}
            Ue = !1, qe(), He.current = null, document.removeEventListener(`visibilitychange`, mt), dt.disconnect(), ft.disconnect(), r.removeEventListener(`wheel`, et), r.removeEventListener(`pointerdown`, nt), r.removeEventListener(`pointermove`, st), r.removeEventListener(`pointerup`, lt), r.removeEventListener(`pointercancel`, lt), t.removeEventListener(`pointerup`, lt), r.removeEventListener(`pointerenter`, bt), r.removeEventListener(`pointerleave`, Et), r.removeEventListener(`click`, Dt, !0), g.domElement.removeEventListener(`webglcontextlost`, J), g.domElement.removeEventListener(`webglcontextrestored`, Ot), k.forEach(e => {
              if (e.video) {
                try {
                  e.videoAbort?.abort()
                } catch {}
                e.videoAbort = void 0;
                let t = e.videoBlobUrl;
                if (e.item.videoUrl && pt(e.item.videoUrl, e.video), t) try {
                  URL.revokeObjectURL(t)
                } catch {}
                e.videoBlobUrl = null, e.ensureVideoSource = void 0, e.videoSourceReady = void 0, e.restartSafariWebM = void 0, e.videoRestartGeneration = void 0, e.safariWebMPlayback = void 0, e.videoRestarting = !1, e.video = null
              }
            }), De.current === g && (De.current = null), g.domElement.parentNode === i && i.removeChild(g.domElement);
            let e = Y;
            Y = null, gt(() => {
              if (e) try {
                e.target.dispose(), e.material.map?.dispose?.(), e.material.dispose()
              } catch {}
              k.forEach(e => {
                try {
                  e.mesh.geometry.dispose(), e.material.dispose(), e.texture?.dispose(), e.preparedVideoTexture &&= (e.preparedVideoTexture.dispose(), null);
                  let t = e.swap;
                  t.phase !== `settled` && (t.prev.dispose(), e.swap = {
                    phase: `settled`
                  })
                } catch {}
              }), p.forEach(e => {
                try {
                  e.texture?.dispose()
                } catch {}
              }), p.length = 0;
              try {
                E && S && S.remove(E), w?.dispose(), T?.dispose(), x?.dispose()
              } catch {}
              try {
                g.dispose(), g.forceContextLoss()
              } catch {}
            })
          }
        })
      },
      i = t.requestIdleCallback,
      a, s = () => {
        e || St().then(() => {
          e || r()
        }).catch(t => {
          console.error(`Failed to load three.js:`, t), e || dt(!0)
        })
      },
      c = () => {
        a = i ? i(s, {
          timeout: 800
        }) : t.setTimeout(s, 50)
      },
      l = () => {
        e || c()
      },
      u = null,
      d = be.current;
    return d && typeof IntersectionObserver < `u` ? (u = new IntersectionObserver(e => {
      e.some(e => e.isIntersecting) && (u?.disconnect(), u = null, l())
    }, {
      rootMargin: `600px 0px 600px 0px`
    }), u.observe(d)) : l(), () => {
      e = !0, u?.disconnect(), a !== void 0 && (i ? t.cancelIdleCallback?.(a) : t.clearTimeout(a)), n?.()
    }
  }, [J, Lt, A, Xt]);
  let Zt = !A && U <= 0,
    Qt = !A && U >= zt - 1,
    $t = e => {
      let t = Math.min(Math.max(e, 0), 99);
      return ge ? String(t).padStart(2, `0`) : String(t)
    },
    en = u({
      from: 0,
      to: 0
    }),
    tn = u(1);
  if (U !== en.current.to) {
    let e = Math.max(1, zt);
    tn.current = ((U - en.current.to) % e + e) % e <= e / 2 ? 1 : -1, en.current = {
      from: en.current.to,
      to: U
    }
  }
  let nn = {
    background: `none`,
    border: `none`,
    padding: `6px 10px`,
    margin: 0,
    font: `inherit`,
    color: me,
    cursor: `pointer`,
    userSelect: `none`,
    lineHeight: 1,
    letterSpacing: `0.1em`
  };
  return /*#__PURE__*/ m(`div`, {
    ref: be,
    role: `region`,
    "aria-label": `Curvy Project Showcase`,
    "aria-roledescription": `carousel`,
    tabIndex: 0,
    onKeyDown: e => {
      e.key === `ArrowLeft` ? (e.preventDefault(), He.current?.prev()) : e.key === `ArrowRight` ? (e.preventDefault(), He.current?.next()) : e.key === `Enter` && e.target === e.currentTarget && He.current?.openCenter()
    },
    style: {
      position: `relative`,
      width: `100%`,
      height: `100%`,
      overflow: `hidden`,
      outline: `none`,
      touchAction: `pan-y`,
      background: ce ? `transparent` : le
    },
    children: [ /*#__PURE__*/ h(`style`, {
      children: `
@keyframes curvyCountInUp { from { transform: translateY(110%); } to { transform: translateY(0); } }
@keyframes curvyCountOutUp { from { transform: translateY(0); } to { transform: translateY(-110%); } }
@keyframes curvyCountInDown { from { transform: translateY(-110%); } to { transform: translateY(0); } }
@keyframes curvyCountOutDown { from { transform: translateY(0); } to { transform: translateY(110%); } }
`
    }), /*#__PURE__*/ h(`div`, {
      ref: L,
      onDragStartCapture: e => e.preventDefault(),
      style: J ? {
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
      children: i
    }), /*#__PURE__*/ h(`div`, {
      ref: Se,
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
      children: s
    }), /*#__PURE__*/ h(`div`, {
      ref: Ce,
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
      children: c
    }), !J && !ot ? /*#__PURE__*/ h(`div`, {
      ref: xe,
      style: {
        position: `absolute`,
        inset: 0
      }
    }) : /*#__PURE__*/ h(`div`, {
      style: {
        position: `absolute`,
        inset: 0,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        overflow: `hidden`
      },
      children: [-1, 0, 1].map(e => {
        let t = (e + zt) % Math.max(1, zt) % Math.max(1, zt),
          n = X[e === 0 ? 0 : t] || X[0];
        if (!n || !n.coverUrl && !n.videoUrl) return null;
        let r = e === 0,
          i = Math.min(Math.max(f, 10), 90),
          a = r ? 1 : Math.min(Math.max(g, .3), 1),
          o = n.radiusPx > 0 ? n.radiusPx : b;
        return /*#__PURE__*/ h(`div`, {
          style: {
            position: r ? `relative` : `absolute`,
            ...r ? {} : e < 0 ? {
              right: `${100-_}%`
            } : {
              left: `${100-_}%`
            },
            width: `${i*a}%`,
            aspectRatio: `${v}`,
            maxHeight: `70%`,
            borderRadius: o,
            overflow: `hidden`,
            background: `#111`,
            flexShrink: 0
          },
          children: n.coverUrl ? /*#__PURE__*/ h(`img`, {
            src: n.coverUrl,
            alt: r && n.title || ``,
            style: {
              width: `100%`,
              height: `100%`,
              objectFit: `cover`,
              display: `block`
            }
          }) : null
        }, e)
      })
    }), !J && G(`cpposter`) ? /*#__PURE__*/ h(`div`, {
      "aria-hidden": `true`,
      style: {
        position: `absolute`,
        inset: 0,
        pointerEvents: `none`,
        overflow: `hidden`
      },
      children: X.map((e, t) => !e.videoUrl || !e.coverUrl ? null : /*#__PURE__*/ h(`img`, {
        ref: e => {
          Ae.current[t] = e
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
    }) : null, !J && ye && !kt ? /*#__PURE__*/ h(`div`, {
      ref: z,
      "aria-hidden": `true`,
      style: {
        position: `absolute`,
        inset: 0,
        zIndex: 1,
        pointerEvents: `none`,
        overflow: `hidden`,
        visibility: `hidden`
      },
      children: ye
    }) : null, ue && zt > 0 ? /*#__PURE__*/ m(`div`, {
      ref: Te,
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
      children: [ /*#__PURE__*/ h(`div`, {
        ref: we,
        "data-strip": `true`,
        style: {
          overflow: `hidden`,
          width: `100%`,
          cursor: `default`
        },
        children: /*#__PURE__*/ h(`div`, {
          ref: R,
          style: {
            display: `inline-flex`,
            gap: Ut,
            whiteSpace: `nowrap`,
            willChange: `transform`,
            padding: `0.2em 0`,
            fontFamily: Z.fontFamily,
            fontSize: Ht(Z.fontSize),
            fontWeight: Z.fontWeight,
            fontStyle: Z.fontStyle,
            fontStretch: Z.fontStretch,
            fontVariationSettings: Z.fontVariationSettings,
            fontFeatureSettings: Z.fontFeatureSettings,
            fontOpticalSizing: Z.fontOpticalSizing,
            letterSpacing: Z.letterSpacing,
            textTransform: Z.textTransform,
            lineHeight: Wt(Z)
          },
          children: (A ? Array.from({
            length: et
          }, () => X).flat() : X).map((e, t) => {
            let n = t % zt;
            return /*#__PURE__*/ h(`span`, {
              "data-index": n,
              role: `button`,
              tabIndex: 0,
              onClick: () => He.current?.goToStrip(t),
              onKeyDown: e => {
                (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), He.current?.goToStrip(t))
              },
              style: {
                color: fe,
                transition: `color 320ms ease`,
                cursor: `pointer`,
                outline: `none`
              },
              children: e.title
            }, `${e.title}-${t}`)
          })
        })
      }), P || he ? /*#__PURE__*/ m(`div`, {
        style: {
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          gap: 18,
          fontFamily: Q.fontFamily,
          fontSize: Ht(Q.fontSize),
          fontWeight: Q.fontWeight,
          fontStyle: Q.fontStyle,
          fontStretch: Q.fontStretch,
          fontVariationSettings: Q.fontVariationSettings,
          fontFeatureSettings: Q.fontFeatureSettings,
          fontOpticalSizing: Q.fontOpticalSizing,
          letterSpacing: Q.letterSpacing,
          textTransform: Q.textTransform,
          lineHeight: Wt(Q),
          color: pe,
          userSelect: `none`,
          WebkitUserSelect: `none`
        },
        children: [P ? /*#__PURE__*/ h(`button`, {
          type: `button`,
          "data-nav-btn": `prev`,
          "aria-label": `Previous project`,
          disabled: Zt,
          onClick: () => He.current?.prev(),
          style: {
            ...nn,
            opacity: Zt ? .25 : 1
          },
          children: Vt ? /*#__PURE__*/ h(`span`, {
            style: {
              display: `inline-flex`,
              alignItems: `center`,
              transform: `scale(${K}) scaleX(-1)`,
              transformOrigin: `center`,
              pointerEvents: `none`
            },
            children: _e
          }) : `◄◄`
        }) : null, he ? /*#__PURE__*/ m(`span`, {
          "aria-live": M ? `off` : `polite`,
          style: {
            fontVariantNumeric: `tabular-nums`
          },
          children: [ /*#__PURE__*/ m(`span`, {
            style: {
              position: `relative`,
              display: `inline-block`
            },
            children: [ /*#__PURE__*/ h(`span`, {
              style: {
                visibility: `hidden`
              },
              children: $t(U + 1)
            }), /*#__PURE__*/ m(`span`, {
              style: {
                position: `absolute`,
                inset: 0,
                overflow: `hidden`
              },
              children: [ /*#__PURE__*/ h(`span`, {
                style: {
                  display: `block`,
                  animation: `${tn.current===1?`curvyCountInUp`:`curvyCountInDown`} 450ms cubic-bezier(0.19, 1, 0.22, 1) both`
                },
                children: $t(U + 1)
              }, `in-${U}`), en.current.from === en.current.to ? null : /*#__PURE__*/ h(`span`, {
                "aria-hidden": `true`,
                style: {
                  position: `absolute`,
                  top: 0,
                  left: 0,
                  animation: `${tn.current===1?`curvyCountOutUp`:`curvyCountOutDown`} 450ms cubic-bezier(0.19, 1, 0.22, 1) both`
                },
                children: $t(en.current.from + 1)
              }, `out-${U}`)]
            })]
          }), /*#__PURE__*/ h(`span`, {
            style: {
              opacity: .5,
              padding: `0 8px`
            },
            children: F
          }), $t(zt)]
        }) : null, P ? /*#__PURE__*/ h(`button`, {
          type: `button`,
          "data-nav-btn": `next`,
          "aria-label": `Next project`,
          disabled: Qt,
          onClick: () => He.current?.next(),
          style: {
            ...nn,
            opacity: Qt ? .25 : 1
          },
          children: Vt ? /*#__PURE__*/ h(`span`, {
            style: {
              display: `inline-flex`,
              alignItems: `center`,
              transform: `scale(${K})`,
              transformOrigin: `center`,
              pointerEvents: `none`
            },
            children: _e
          }) : `►►`
        }) : null]
      }) : null]
    }) : null, /*#__PURE__*/ h(`nav`, {
      "aria-label": `Project links`,
      style: {
        position: `absolute`,
        width: 1,
        height: 1,
        overflow: `hidden`,
        clipPath: `inset(50%)`,
        whiteSpace: `nowrap`
      },
      children: X.map((e, t) => e.href ? /*#__PURE__*/ h(`a`, {
        href: e.href,
        children: e.title
      }, `${e.title}-link-${t}`) : null)
    })]
  })
}
var q, xt, St, Ct, wt, Tt, Et, Dt, J, Ot, kt, Y, At, jt, Mt, Nt, Pt;

function Ft() {
  return (Ft = e((() => {
    if (s(), _(), c(), ie(), q = null, xt = null, Qe(), St = () => (xt ||= import(`./three.module.CJpBf6nA.mjs`).then(e => (e.x(), e.C)).then(e => (q = e && e.WebGLRenderer ? e : e?.default || e, q)), xt), Ct = {
        gpuDisposalMs: 900,
        slotGraceMs: 450,
        loadSlotCapMs: 4e3,
        dprWarmupMs: 650,
        fadeInMs: 450,
        swapMs: 350
      }, wt = `
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
`, Tt = `
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
`, Et = `
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`, Dt = `
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
`, J = null, Ot = /* @__PURE__ */ new Map, t !== void 0) try {
      let e = performance.getEntriesByType(`navigation`)[0];
      if (!e || e.type !== `back_forward`) {
        let e = [];
        for (let n = 0; n < t.sessionStorage.length; n++) {
          let r = t.sessionStorage.key(n);
          r && r.indexOf(`curvyPos:`) === 0 && e.push(r)
        }
        e.forEach(e => t.sessionStorage.removeItem(e))
      }
    } catch {}
    kt = () => t !== void 0 && t.matchMedia?.(`(pointer: fine)`)?.matches ? 8 : 4, Y = null, At = 0, jt = {
      fontSize: `18px`,
      fontWeight: `600`,
      letterSpacing: `-0.01em`
    }, Mt = {
      streaks: 0,
      liquid: 1,
      pixelate: 2
    }, Nt = {
      push: 0,
      pull: 1,
      swirl: 2,
      ripple: 3,
      noise: 4
    }, Pt = {
      fontSize: `12px`,
      letterSpacing: `0.12em`
    }, bt.displayName = `Curvy Project Showcase`, ne(bt, {
      slot: {
        type: F.ComponentInstance,
        title: `Slot`,
        description: `Connect a Collection List bound to your Projects CMS collection. Each item needs an image or video, a title, and a link — the item can also be a designed component with these connected as variables (the largest image and largest text are used as cover and title). Border-radius set on the list items is inherited by the cards. The list stays hidden — the carousel reads from it.`
      },
      detailsSlot: {
        type: F.ComponentInstance,
        title: `Card Details`,
        description: `Connect a Collection List of the SAME collection with the SAME sort, whose item is what shows under each card — service, year, any layout, fonts, and styling designed natively. Set the item's width to Fill; height is free. Items follow their cards and fade as they leave center.`
      },
      showDetails: {
        type: F.Boolean,
        title: `Details`,
        enabledTitle: `Show`,
        disabledTitle: `Hide`,
        defaultValue: !0,
        description: `Show or hide the Card Details rows. Override per breakpoint on the instance to hide them on phone. When hidden, cards reclaim the vertical space.`
      },
      metaGap: {
        type: F.Number,
        title: `Details Gap`,
        min: 0,
        max: 120,
        defaultValue: 12,
        unit: `px`
      },
      items: {
        type: F.Array,
        title: `Items`,
        description: `Manual fallback used when no Collection List is connected to Slot. Setting a video on an item replaces its image. Component from [LaunchNow Design](https://launchnow.design/?utm_source=codecomponent)`,
        maxCount: 20,
        defaultValue: [{
          cover: {
            src: `https://framerusercontent.com/images/f9RiWoNpmlCMqVRIHz8l8wYfeI.jpg`,
            alt: `Gradient 5 - Green`
          },
          title: `Aether Studio`,
          link: `https://example.com/aether`
        }, {
          cover: {
            src: `https://framerusercontent.com/images/2uTNEj5aTl2K3NJaEFWMbnrA.jpg`,
            alt: `Gradient 4 - Yellow`
          },
          title: `Nova Commerce`,
          link: `https://example.com/nova`
        }, {
          cover: {
            src: `https://framerusercontent.com/images/BYnxEV1zjYb9bhWh1IwBZ1ZoS60.jpg`,
            alt: `Gradient 3 - Orange`
          },
          title: `Orbit Labs`,
          link: `https://example.com/orbit`
        }],
        control: {
          type: F.Object,
          controls: {
            cover: {
              type: F.ResponsiveImage,
              title: `Cover`
            },
            video: {
              type: F.File,
              title: `Video`,
              allowedFileTypes: [`mp4`, `webm`, `mov`]
            },
            title: {
              type: F.String,
              title: `Title`,
              defaultValue: `Project Title`
            },
            link: {
              type: F.Link,
              title: `Link`,
              defaultValue: ``
            }
          }
        }
      },
      Layout: {
        type: F.Object,
        title: `Layout`,
        controls: {
          centerWidthPct: {
            type: F.Number,
            title: `Center Width`,
            description: `Width of the centered card as a % of the frame. For phones, override this on the phone breakpoint (70–85% usually feels right there).`,
            defaultValue: 45,
            min: 15,
            max: 90,
            step: 1,
            unit: `%`
          },
          sideScale: {
            type: F.Number,
            title: `Side Scale`,
            description: `Size of the previous/next cards relative to the center card. 1 = same size, lower = stronger center emphasis.`,
            defaultValue: .72,
            min: .3,
            max: 1,
            step: .01
          },
          sidePeekPct: {
            type: F.Number,
            title: `Side Peek`,
            description: `How much of the previous/next cards peeks in from the screen edges, as a % of the frame width. The edge warp band auto-sizes to cover this area. Override with a smaller value on the phone breakpoint.`,
            defaultValue: 10,
            min: 0,
            max: 20,
            step: .5,
            unit: `%`
          },
          cardAspect: {
            type: F.Number,
            title: `Card Aspect`,
            description: `Width-to-height ratio of the cards. 1.6 is wide/cinematic, 0.8 is portrait. Images and videos are cover-cropped, never stretched.`,
            defaultValue: 1.6,
            min: .6,
            max: 2.4,
            step: .01
          },
          cornerRadius: {
            type: F.Number,
            title: `Corner Radius`,
            description: `Fallback rounding in px. If the Collection List items connected to Slot have their own border-radius set, that value is inherited automatically and this is ignored.`,
            defaultValue: 0,
            min: 0,
            max: 64,
            step: 1
          }
        }
      },
      Interaction: {
        type: F.Object,
        title: `Interaction`,
        controls: {
          cardCursor: {
            type: F.Boolean,
            title: `Card Cursor`,
            description: `Forwards hover to the connected list item, so a Framer custom cursor set on your Project Card (e.g. a 'View Project' follower) appears over the WebGL cards. Hides the native cursor while over a card. Note: hover variants on the connected card will also trigger — keep its hover state visually static.`,
            defaultValue: !1
          },
          clickAction: {
            type: F.Enum,
            title: `Card Click`,
            description: `Open Link: clicking the centered card opens its project page (cursor shows a pointer over it). Center Only: clicks just bring side cards to center. Off: clicks do nothing.`,
            options: [`link`, `center`, `none`],
            optionTitles: [`Open Link`, `Center Only`, `Off`],
            defaultValue: `link`
          },
          hijackScroll: {
            type: F.Boolean,
            title: `Hijack Scroll`,
            description: `Off: only horizontal trackpad swipes move the carousel and the page scrolls normally. On: vertical scrolling is captured too — use for full-page hero sections only.`,
            defaultValue: !1
          }
        }
      },
      Motion: {
        type: F.Object,
        title: `Motion`,
        controls: {
          scrollSpeed: {
            type: F.Number,
            title: `Scroll Speed`,
            description: `Multiplier for wheel/trackpad scrolling. Drag has its own speed below.`,
            defaultValue: 1,
            min: .2,
            max: 4,
            step: .05
          },
          dragSpeed: {
            type: F.Number,
            title: `Drag Speed`,
            description: `Multiplier for pointer/touch dragging. Higher = less finger travel per card. While dragging, the carousel also tracks the pointer more tightly than the Lerp setting so it never feels resistant.`,
            defaultValue: 1.6,
            min: .2,
            max: 4,
            step: .05
          },
          lerpSmoothness: {
            type: F.Number,
            title: `Lerp`,
            description: `How quickly the carousel catches up to your input. Lower = floatier and more cinematic, higher = tighter and more responsive.`,
            defaultValue: .075,
            min: .02,
            max: .2,
            step: .005
          },
          infiniteLoop: {
            type: F.Boolean,
            title: `Infinite Loop`,
            description: `Wraps the carousel so it loops endlessly instead of stopping at the first and last project.`,
            defaultValue: !1
          },
          autoplay: {
            type: F.Boolean,
            title: `Autoplay`,
            description: `Advances to the next project automatically. Pauses while hovering or interacting, and is disabled for visitors with reduced motion enabled.`,
            defaultValue: !1
          },
          autoplayInterval: {
            type: F.Number,
            title: `Interval`,
            description: `Seconds between automatic advances.`,
            defaultValue: 4,
            min: 2,
            max: 12,
            step: .5,
            unit: `s`,
            hidden: e => !e.autoplay
          }
        }
      },
      Effects: {
        type: F.Object,
        title: `Effects`,
        controls: {
          bendIntensity: {
            type: F.Number,
            title: `Bend Intensity`,
            description: `How much the cards flex like a film strip while moving. 0 disables the bend entirely.`,
            defaultValue: 1,
            min: 0,
            max: 2,
            step: .01
          },
          edgeWarp: {
            type: F.Boolean,
            title: `Edge Warp`,
            description: `Noisy, film-like dissolve applied to the far edges of the peeking side cards.`,
            defaultValue: !0
          },
          edgeWarpStrength: {
            type: F.Number,
            title: `Edge Strength`,
            description: `Intensity of the edge effect. Higher values pull more of the side cards apart.`,
            defaultValue: 1,
            min: 0,
            max: 2,
            step: .01,
            hidden: e => !e.edgeWarp
          },
          edgeEffect: {
            type: F.Enum,
            title: `Edge Effect`,
            description: `Treatment applied to the side card edges. Each pairs with a DistortoSlider transition for a cohesive project: Streaks ↔ Noise Warp, Liquid ↔ Liquid Morph, Pixelate ↔ Pixelate/Hex Mosaic.`,
            options: [`streaks`, `liquid`, `pixelate`],
            optionTitles: [`Streaks`, `Liquid`, `Pixelate`],
            defaultValue: `streaks`,
            hidden: e => !e.edgeWarp
          }
        }
      },
      Mouse: {
        type: F.Object,
        title: `Mouse`,
        controls: {
          mouseWarp: {
            type: F.Boolean,
            title: `Mouse Warp`,
            description: `Soft magnetic distortion that pushes the image away from the cursor. Automatically disabled on touch devices.`,
            defaultValue: !0
          },
          mouseWarpStrength: {
            type: F.Number,
            title: `Mouse Strength`,
            description: `Intensity of the cursor effect.`,
            defaultValue: 1,
            min: 0,
            max: 2,
            step: .01,
            hidden: e => !e.mouseWarp
          },
          mouseEffect: {
            type: F.Enum,
            title: `Mouse Effect`,
            description: `Push shoves pixels away from the cursor (the classic look). Pull attracts them like a lens. Swirl rotates around the cursor. Ripple radiates animated rings. Noise smears with organic turbulence.`,
            options: [`push`, `pull`, `swirl`, `ripple`, `noise`],
            optionTitles: [`Push`, `Pull`, `Swirl`, `Ripple`, `Noise`],
            defaultValue: `push`,
            hidden: e => !e.mouseWarp
          },
          mouseRadius: {
            type: F.Number,
            title: `Mouse Radius`,
            description: `Size of the area around the cursor the effect covers.`,
            defaultValue: .1,
            min: .03,
            max: .4,
            step: .01,
            hidden: e => !e.mouseWarp
          },
          mouseChroma: {
            type: F.Number,
            title: `Chromatic`,
            description: `Splits the red and blue channels along the distortion for a chromatic aberration halo. 0 disables it. Works with every effect mode.`,
            defaultValue: 0,
            min: 0,
            max: 1,
            step: .01,
            hidden: e => !e.mouseWarp
          },
          mouseSpeedReact: {
            type: F.Boolean,
            title: `React to Speed`,
            description: `Scales the effect with cursor velocity — it blooms while the cursor moves and settles to nothing at rest, instead of being a constant dent.`,
            defaultValue: !1,
            hidden: e => !e.mouseWarp
          }
        }
      },
      Style: {
        type: F.Object,
        title: `Style`,
        controls: {
          backgroundTransparent: {
            type: F.Boolean,
            title: `Transparent BG`,
            description: `Renders on a transparent canvas so the section behind shows through.`,
            defaultValue: !0
          },
          backgroundColor: {
            type: F.Color,
            title: `Background`,
            description: `Canvas background color when transparency is off.`,
            defaultValue: `#FFFFFF`,
            hidden: e => e.backgroundTransparent
          }
        }
      },
      Strip: {
        type: F.Object,
        title: `Title Strip`,
        controls: {
          showTitleStrip: {
            type: F.Boolean,
            title: `Title Strip`,
            description: `Sliding row of project titles under the carousel. The active title is highlighted, the strip moves in sync with the cards, and titles can be dragged or clicked to navigate.`,
            defaultValue: !0
          },
          titleGap: {
            type: F.Number,
            title: `Title Gap`,
            description: `Horizontal spacing between project titles in the strip.`,
            defaultValue: 64,
            min: 8,
            max: 240,
            step: 2,
            hidden: e => !e.showTitleStrip
          },
          titleColor: {
            type: F.Color,
            title: `Title Color`,
            description: `Color of the active (centered) project title.`,
            defaultValue: `#111111`,
            hidden: e => !e.showTitleStrip
          },
          inactiveTitleColor: {
            type: F.Color,
            title: `Inactive Color`,
            description: `Color of the non-active project titles.`,
            defaultValue: `rgba(17, 17, 17, 0.32)`,
            hidden: e => !e.showTitleStrip
          },
          showArrows: {
            type: F.Boolean,
            title: `Arrows`,
            description: `Previous/next arrow buttons under the title strip.`,
            defaultValue: !0,
            hidden: e => !e.showTitleStrip
          },
          arrowColor: {
            type: F.Color,
            title: `Arrow Color`,
            description: `Color of the previous/next arrows. Connected custom arrows keep their own colors.`,
            defaultValue: `#111111`,
            hidden: e => !e.showTitleStrip || !e.showArrows
          },
          showCount: {
            type: F.Boolean,
            title: `Count`,
            description: `Shows the current position, e.g. 01 // 09. Works with or without the arrows.`,
            defaultValue: !0,
            hidden: e => !e.showTitleStrip
          },
          controlsColor: {
            type: F.Color,
            title: `Count Color`,
            description: `Color of the position count.`,
            defaultValue: `#111111`,
            hidden: e => !e.showTitleStrip || !e.showCount
          },
          countSeparator: {
            type: F.String,
            title: `Separator`,
            description: `Text between the current position and the total, e.g. //, /, of.`,
            defaultValue: `//`,
            hidden: e => !e.showTitleStrip || !e.showCount
          },
          zeroPad: {
            type: F.Boolean,
            title: `Zero Pad`,
            description: `Pads single digits with a leading zero (01 instead of 1).`,
            defaultValue: !0,
            enabledTitle: `01`,
            disabledTitle: `1`,
            hidden: e => !e.showTitleStrip || !e.showCount
          }
        }
      },
      fontSlot: {
        type: F.ComponentInstance,
        title: `Title Style`,
        description: `Connect a text layer and the project titles inherit its typography — font, size, weight, spacing, variable font axes. Colors come from the color controls above, not the layer. Leave empty for the built-in default.`
      },
      countFontSlot: {
        type: F.ComponentInstance,
        title: `Count Style`,
        description: `Connect a text layer and the count/arrows row inherits its typography. Colors come from Count Color and Arrow Color. Leave empty for the built-in default.`,
        hidden: e => e?.Strip?.showTitleStrip === !1 || e?.Strip?.showArrows === !1 && e?.Strip?.showCount === !1
      },
      arrowSlot: {
        type: F.ComponentInstance,
        title: `Arrow`,
        description: `Connect your own SVG or layer to replace the default arrows. It's used for the next arrow and mirrored for the previous one. Leave empty for the built-in arrows.`,
        hidden: e => e?.Strip?.showTitleStrip === !1 || e?.Strip?.showArrows === !1
      }
    })
  })))()
}
var X, It, Lt, Rt, zt, Z, Q, Bt, Vt, Ht, Ut, Wt, Gt, $, Kt, qt, Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn, rn, an, on, sn, cn, ln, un, dn, fn, pn, mn, hn;

function gn() {
  return (gn = e((() => {
    _(), ie(), w(), c(), Fe(), Re(), Ge(), Ft(), ze(), qe(), Le(), Ce(), xe(), we(), B(), Ae(), U(), Ve(), ke(), Ne(), Ze(), X = A(V), It = A(L), Lt = A(R), Rt = A(Be), zt = A(je), Z = A(H), Q = A(Ke), Bt = A(bt), Vt = O(x.section, {
      nodeId: `kDaTJpdid`,
      override: Te,
      scopeId: `VADOyQEsJ`
    }), Ht = A(Ee), Ut = {
      smBzUPBee: `(min-width: 810px) and (max-width: 1199.98px)`,
      WtMGunC0m: `(max-width: 809.98px)`,
      xsJP6rSYH: `(min-width: 1200px)`
    }, Wt = () => typeof document < `u`, Gt = [], $ = `framer-nRW2Q`, Kt = {
      smBzUPBee: `framer-v-o0jp9q`,
      WtMGunC0m: `framer-v-a7wa0g`,
      xsJP6rSYH: `framer-v-10hbnng`
    }, qt = (e, t, n) => e && t ? `position` : n, de(), Jt = e => typeof e == `object` && e && typeof e.src == `string` ? e : typeof e == `string` ? {
      src: e
    } : void 0, Yt = e => Array.isArray(e) ? e.length > 0 : e != null && e !== ``, Xt = (e, t) => e ? `URL` : `Upload`, Zt = e => typeof e == `object` && e && typeof e.src == `string` ? e.src : typeof e == `string` ? e : void 0, Qt = () => ({
      from: {
        alias: `AzA7OvnyO`,
        data: z,
        type: `Collection`
      },
      select: [{
        collection: `AzA7OvnyO`,
        name: `UxQzAcVgo`,
        type: `Identifier`
      }, {
        collection: `AzA7OvnyO`,
        name: `motPAdhqw`,
        type: `Identifier`
      }, {
        collection: `AzA7OvnyO`,
        name: `lqxb5gqxK`,
        type: `Identifier`
      }, {
        collection: `AzA7OvnyO`,
        name: `iRUlzL14O`,
        type: `Identifier`
      }, {
        collection: `AzA7OvnyO`,
        name: `AO3U_VSSA`,
        type: `Identifier`
      }, {
        collection: `AzA7OvnyO`,
        name: `Q2VN_FZXh`,
        type: `Identifier`
      }, {
        collection: `AzA7OvnyO`,
        name: `id`,
        type: `Identifier`
      }]
    }), $t = ({
      query: e,
      pageSize: t,
      children: n
    }) => n(fe(e)), en = (...e) => {
      for (let t of e)
        if (t && typeof t == `string`) return t
    }, tn = (e, t, n) => {
      if (typeof e != `string`) return ``;
      let r = new Date(e);
      if (isNaN(r.getTime())) return ``;
      let i = `en-US`;
      try {
        return r.toLocaleString(n || i, t)
      } catch {
        return r.toLocaleString(i, t)
      }
    }, nn = {
      timeZone: `UTC`,
      year: `2-digit`
    }, rn = (e, t) => tn(e, nn, t), an = (e, t) => typeof e == `string` && typeof t == `string` ? t + e : typeof e == `string` ? e : typeof t == `string` ? t : ``, on = (e, t) => typeof e == `string` && typeof t == `string` ? e + t : typeof e == `string` ? e : typeof t == `string` ? t : ``, sn = () => ({
      from: {
        alias: `PsS1NkJif`,
        data: z,
        type: `Collection`
      },
      select: [{
        collection: `PsS1NkJif`,
        name: `UxQzAcVgo`,
        type: `Identifier`
      }, {
        collection: `PsS1NkJif`,
        name: `s1es_f3RS`,
        type: `Identifier`
      }, {
        collection: `PsS1NkJif`,
        name: `XdZ8EYmm9`,
        type: `Identifier`
      }, {
        collection: `PsS1NkJif`,
        name: `id`,
        type: `Identifier`
      }]
    }), cn = {
      Desktop: `xsJP6rSYH`,
      Phone: `WtMGunC0m`,
      Tablet: `smBzUPBee`
    }, ln = ({
      value: e
    }) => ve() ? null : /*#__PURE__*/ h(`style`, {
      dangerouslySetInnerHTML: {
        __html: e
      },
      "data-framer-html-style": ``
    }), un = ({
      height: e,
      id: t,
      width: n,
      ...r
    }) => ({
      ...r,
      variant: cn[r.variant] ?? r.variant ?? `xsJP6rSYH`
    }), dn = {
      alignment: `center`,
      component: Ee,
      offset: {
        x: 0,
        y: 0
      },
      placement: `bottom`,
      transition: {
        damping: 60,
        delay: 0,
        mass: 1,
        stiffness: 500,
        type: `spring`
      },
      variant: `JYlp8aboM`
    }, fn = /*#__PURE__*/ g(function(e, t) {
      let n = u(null),
        r = t ?? n,
        o = v(),
        {
          activeLocale: s,
          setLocale: c
        } = oe(),
        l = ue(),
        {
          style: p,
          className: g,
          layoutId: _,
          variant: y,
          ...b
        } = un(e),
        w = a(() => W({}, s), [s]);
      E(w);
      let [O, ee] = ye(y, Ut, !1), k = D($, Pe, We, Se, Xe), te = f(pe)?.isLayoutTemplate, ne = !!f(S)?.transition?.layout, re = qt(te, ne), ie = T(`kDaTJpdid`), A = u(null), j = () => !Wt() || O !== `WtMGunC0m`, ce = I();
      return ge({
        "9iwj27": dn
      }), /*#__PURE__*/ h(pe.Provider, {
        value: {
          activeVariantId: O,
          humanReadableVariantMap: cn,
          primaryVariantId: `xsJP6rSYH`,
          variantClassNames: Kt
        },
        children: /*#__PURE__*/ m(C, {
          id: _ ?? o,
          children: [ /*#__PURE__*/ h(ln, {
            value: `html body { background: var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)); }`
          }), /*#__PURE__*/ m(x.div, {
            ...b,
            className: D(k, `framer-10hbnng`, g),
            ref: r,
            style: {
              ...p
            },
            children: [ /*#__PURE__*/ h(M, {
              children: /*#__PURE__*/ h(P, {
                className: `framer-d0pt4p-container`,
                "data-framer-name": `Lenis Smooth Scroll`,
                isAuthoredByUser: !0,
                isModuleExternal: !0,
                layout: re,
                name: `Lenis Smooth Scroll`,
                nodeId: `S7hFAyv5P`,
                scopeId: `VADOyQEsJ`,
                children: /*#__PURE__*/ h(V, {
                  height: `100%`,
                  id: `S7hFAyv5P`,
                  infinite: !1,
                  intensity: 8,
                  layoutId: `S7hFAyv5P`,
                  name: `Lenis Smooth Scroll`,
                  orientation: `horizontal`,
                  smooth: !0,
                  width: `100%`
                })
              })
            }), /*#__PURE__*/ m(x.div, {
              className: `framer-e5br0d`,
              "data-framer-name": `Main`,
              layout: re,
              children: [ /*#__PURE__*/ h(ae, {
                breakpoint: O,
                overrides: {
                  WtMGunC0m: {
                    height: 0,
                    y: (l?.y || 0) + 0 + 200 + 0 + 0
                  }
                },
                children: /*#__PURE__*/ h(M, {
                  height: 1e3,
                  y: (l?.y || 0) + 0 + 200 + 0,
                  children: /*#__PURE__*/ h(P, {
                    className: `framer-q5psbm-container`,
                    nodeId: `RP0qZXnPZ`,
                    scopeId: `VADOyQEsJ`,
                    children: /*#__PURE__*/ h(L, {
                      height: `100%`,
                      id: `RP0qZXnPZ`,
                      layoutId: `RP0qZXnPZ`,
                      style: {
                        height: `100%`
                      },
                      width: `100%`
                    })
                  })
                })
              }), /*#__PURE__*/ h(Vt, {
                className: `framer-1699frv`,
                "data-framer-name": `Gallery`,
                id: ie,
                ref: A,
                children: /*#__PURE__*/ m(x.div, {
                  className: `framer-hukja4`,
                  "data-framer-name": `Outer Container`,
                  children: [ /*#__PURE__*/ m(x.header, {
                    className: `framer-1qgzbbt`,
                    "data-framer-name": `Top`,
                    children: [j() && /*#__PURE__*/ h(M, {
                      height: 19,
                      y: (l?.y || 0) + 0 + 200 + 0 + 3 + 0 + 0 + 0 + 30 + 90.5,
                      children: /*#__PURE__*/ h(P, {
                        className: `framer-1d80ykx-container hidden-a7wa0g`,
                        nodeId: `YfiMZZtft`,
                        rendersWithMotion: !0,
                        scopeId: `VADOyQEsJ`,
                        children: /*#__PURE__*/ h(R, {
                          height: `100%`,
                          id: `YfiMZZtft`,
                          JIleRlVOF: `0px 0px 0px 0px`,
                          layoutId: `YfiMZZtft`,
                          LBZNZ9cgr: be,
                          width: `100%`
                        })
                      })
                    }), /*#__PURE__*/ m(x.div, {
                      className: `framer-11g8pw4`,
                      "data-framer-name": `Text / Project count`,
                      children: [ /*#__PURE__*/ h(N, {
                        __fromCanvasComponent: !0,
                        children: /*#__PURE__*/ h(i, {
                          children: /*#__PURE__*/ h(`h1`, {
                            className: `framer-styles-preset-1l3tbw0`,
                            "data-styles-preset": `cZ7bby0gR`,
                            dir: `auto`,
                            style: {
                              "--framer-text-alignment": `start`,
                              "--framer-text-color": `var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))`
                            },
                            children: `selected works`
                          })
                        }),
                        className: `framer-doc0mi`,
                        "data-framer-name": `Page Title`,
                        fonts: [`Inter`],
                        verticalAlignment: `top`,
                        withExternalLayout: !0
                      }), /*#__PURE__*/ h(M, {
                        children: /*#__PURE__*/ h(P, {
                          className: `framer-l1p39r-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          nodeId: `XrRVFLPBI`,
                          rendersWithMotion: !0,
                          scopeId: `VADOyQEsJ`,
                          children: /*#__PURE__*/ h(je, {
                            collectionList: [ /*#__PURE__*/ h(x.div, {
                              className: `framer-1smkdlc`,
                              "data-framer-name": `Projects Source (Slot)`,
                              children: /*#__PURE__*/ h(me, {
                                children: /*#__PURE__*/ h($t, {
                                  query: Qt(),
                                  children: (e, t, n) => /*#__PURE__*/ h(d, {
                                    children: e?.map(({
                                      AO3U_VSSA: e,
                                      id: t,
                                      iRUlzL14O: n,
                                      lqxb5gqxK: r,
                                      motPAdhqw: a,
                                      Q2VN_FZXh: o,
                                      UxQzAcVgo: c
                                    }, l) => (c ??= ``, r ??= !0, n ??= ``, o ??= ``, /*#__PURE__*/ h(C, {
                                      id: `AzA7OvnyO-${t}`,
                                      children: /*#__PURE__*/ h(_e.Provider, {
                                        value: {
                                          UxQzAcVgo: c
                                        },
                                        children: /*#__PURE__*/ h(se, {
                                          href: {
                                            pathVariables: {
                                              UxQzAcVgo: c
                                            },
                                            webPageId: `dcN8jq2Gu`
                                          },
                                          motionChild: !0,
                                          nodeId: `TbWdV_Xn5`,
                                          scopeId: `VADOyQEsJ`,
                                          children: /*#__PURE__*/ m(x.a, {
                                            className: `framer-12qg72k framer-1wrtkop`,
                                            "data-framer-cursor": `9iwj27`,
                                            "data-framer-name": `Project Card`,
                                            children: [ /*#__PURE__*/ h(le, {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                sizes: `320px`,
                                                ...Jt(a)
                                              },
                                              className: `framer-e3lzt7`,
                                              "data-framer-name": `Cover`
                                            }), r !== !1 && /*#__PURE__*/ h(M, {
                                              children: /*#__PURE__*/ h(P, {
                                                className: `framer-1mlcts6-container`,
                                                "data-framer-name": `Uploaded Video`,
                                                inComponentSlot: !0,
                                                isAuthoredByUser: !0,
                                                isModuleExternal: !0,
                                                name: `Uploaded Video`,
                                                nodeId: `MUWI3G5Ln`,
                                                rendersWithMotion: !0,
                                                scopeId: `VADOyQEsJ`,
                                                children: /*#__PURE__*/ h(Be, {
                                                  backgroundColor: `rgba(0, 0, 0, 0)`,
                                                  borderRadius: 0,
                                                  bottomLeftRadius: 0,
                                                  bottomRightRadius: 0,
                                                  controls: !1,
                                                  height: `100%`,
                                                  id: `MUWI3G5Ln`,
                                                  isMixedBorderRadius: !1,
                                                  layoutId: `MUWI3G5Ln`,
                                                  loop: !0,
                                                  muted: !0,
                                                  name: `Uploaded Video`,
                                                  objectFit: `cover`,
                                                  playing: !0,
                                                  poster: Zt(a),
                                                  posterEnabled: !0,
                                                  srcFile: e,
                                                  srcType: Xt(Yt(n), s),
                                                  srcUrl: n,
                                                  startTime: 0,
                                                  style: {
                                                    height: `100%`,
                                                    width: `100%`
                                                  },
                                                  topLeftRadius: 0,
                                                  topRightRadius: 0,
                                                  volume: 25,
                                                  width: `100%`
                                                })
                                              })
                                            }), /*#__PURE__*/ h(N, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ h(i, {
                                                children: /*#__PURE__*/ h(`h2`, {
                                                  className: `framer-styles-preset-fvem1p`,
                                                  "data-styles-preset": `LMUl9NNGN`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))`
                                                  },
                                                  children: `Kyma`
                                                })
                                              }),
                                              className: `framer-1nt3kx8`,
                                              fonts: [`Inter`],
                                              text: o,
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0
                                            })]
                                          })
                                        })
                                      })
                                    }, t)))
                                  })
                                })
                              })
                            })],
                            commas: !0,
                            font: {
                              fontFamily: `"Mona Sans", "Mona Sans Placeholder", sans-serif`,
                              fontSize: `15px`,
                              fontStyle: `normal`,
                              fontWeight: 600,
                              letterSpacing: `-0.05em`,
                              lineHeight: `1em`
                            },
                            fontColor: `var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))`,
                            height: `100%`,
                            id: `XrRVFLPBI`,
                            layoutId: `XrRVFLPBI`,
                            minDigits: 1,
                            placeholder: 10,
                            textSelect: !0,
                            textStyleSource: [ /*#__PURE__*/ h(x.div, {
                              className: `framer-gbueqi`,
                              "data-framer-name": `Project count font`,
                              children: /*#__PURE__*/ h(N, {
                                __fromCanvasComponent: !0,
                                children: /*#__PURE__*/ h(i, {
                                  children: /*#__PURE__*/ h(`p`, {
                                    className: `framer-styles-preset-c95aba`,
                                    "data-styles-preset": `x8g4OBmQ1`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))`
                                    },
                                    children: `6`
                                  })
                                }),
                                className: `framer-93y8ef`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0
                              })
                            })],
                            textTransform: `none`,
                            transform: {
                              plural: !1,
                              pluralPrefix: ``,
                              pluralSuffix: ``,
                              prefix: `(`,
                              singularPrefix: ``,
                              singularSuffix: ``,
                              suffix: `)`
                            },
                            width: `100%`
                          })
                        })
                      })]
                    }), /*#__PURE__*/ h(ae, {
                      breakpoint: O,
                      overrides: {
                        WtMGunC0m: {
                          y: (l?.y || 0) + 0 + 200 + 0 + 0 + 3 + 0 + 0 + 0 + 81 + 87
                        }
                      },
                      children: /*#__PURE__*/ h(M, {
                        height: 26,
                        y: (l?.y || 0) + 0 + 200 + 0 + 3 + 0 + 0 + 0 + 30 + 87,
                        children: /*#__PURE__*/ h(P, {
                          className: `framer-14z4bt-container`,
                          nodeId: `ROaACMFEb`,
                          rendersWithMotion: !0,
                          scopeId: `VADOyQEsJ`,
                          children: /*#__PURE__*/ h(H, {
                            height: `100%`,
                            id: `ROaACMFEb`,
                            layoutId: `ROaACMFEb`,
                            style: {
                              width: `100%`
                            },
                            variant: en(`fgYOS40ez`),
                            width: `100%`,
                            XU6EGhHcu: `var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))`
                          })
                        })
                      })
                    })]
                  }), /*#__PURE__*/ h(M, {
                    children: /*#__PURE__*/ h(P, {
                      className: `framer-q4xdmx-container`,
                      isAuthoredByUser: !0,
                      isModuleExternal: !0,
                      nodeId: `z_U18PIUA`,
                      rendersWithMotion: !0,
                      scopeId: `VADOyQEsJ`,
                      children: /*#__PURE__*/ h(ae, {
                        breakpoint: O,
                        overrides: {
                          smBzUPBee: {
                            Interaction: {
                              cardCursor: !1,
                              clickAction: `link`,
                              hijackScroll: !0
                            },
                            Layout: {
                              cardAspect: 1.15,
                              centerWidthPct: 65,
                              cornerRadius: 12,
                              sidePeekPct: 15,
                              sideScale: .69
                            },
                            Strip: {
                              arrowColor: `var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))`,
                              controlsColor: `var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))`,
                              countSeparator: `/`,
                              inactiveTitleColor: `var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))`,
                              showArrows: !0,
                              showCount: !0,
                              showTitleStrip: !0,
                              titleColor: `var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))`,
                              titleGap: 40,
                              zeroPad: !0
                            }
                          },
                          WtMGunC0m: {
                            Interaction: {
                              cardCursor: !1,
                              clickAction: `link`,
                              hijackScroll: !0
                            },
                            Layout: {
                              cardAspect: .85,
                              centerWidthPct: 75,
                              cornerRadius: 12,
                              sidePeekPct: 7,
                              sideScale: .5
                            },
                            Motion: {
                              autoplay: !1,
                              autoplayInterval: 4,
                              dragSpeed: 1.4,
                              infiniteLoop: !0,
                              lerpSmoothness: .15,
                              scrollSpeed: 1.2
                            },
                            Strip: {
                              arrowColor: `var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))`,
                              controlsColor: `var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))`,
                              countSeparator: `/`,
                              inactiveTitleColor: `var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))`,
                              showArrows: !0,
                              showCount: !0,
                              showTitleStrip: !0,
                              titleColor: `var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))`,
                              titleGap: 30,
                              zeroPad: !0
                            }
                          }
                        },
                        children: /*#__PURE__*/ h(bt, {
                          arrowSlot: [ /*#__PURE__*/ h(Ke, {
                            animated: !1,
                            className: `framer-yawvlb`,
                            "data-framer-name": `Arrow SVG for Gallery`,
                            JEeZYcamG: !0,
                            layoutId: `zp6SLUMRI`,
                            P_DcoRcrY: !0
                          })],
                          countFontSlot: [ /*#__PURE__*/ h(x.div, {
                            className: `framer-1is60kx`,
                            "data-framer-name": `Count Font Goes Here`,
                            children: /*#__PURE__*/ h(N, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ h(i, {
                                children: /*#__PURE__*/ h(`p`, {
                                  className: `framer-styles-preset-c95aba`,
                                  "data-styles-preset": `x8g4OBmQ1`,
                                  dir: `auto`,
                                  children: `Count Font`
                                })
                              }),
                              className: `framer-bowggs`,
                              "data-framer-name": `Count Text`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0
                            })
                          })],
                          detailsSlot: [ /*#__PURE__*/ h(x.div, {
                            className: `framer-9lk2t`,
                            "data-framer-name": `Card Details (Slot)`,
                            children: /*#__PURE__*/ h(me, {
                              children: /*#__PURE__*/ h($t, {
                                query: sn(),
                                children: (e, t, n) => /*#__PURE__*/ h(d, {
                                  children: e?.map(({
                                    id: e,
                                    s1es_f3RS: t,
                                    UxQzAcVgo: n,
                                    XdZ8EYmm9: r
                                  }, a) => {
                                    n ??= ``, t ??= ``;
                                    let o = Yt(t),
                                      s = Yt(r),
                                      c = on(an(rn(r, ce), `'`), `©`);
                                    return /*#__PURE__*/ h(C, {
                                      id: `PsS1NkJif-${e}`,
                                      children: /*#__PURE__*/ h(_e.Provider, {
                                        value: {
                                          UxQzAcVgo: n
                                        },
                                        children: /*#__PURE__*/ h(se, {
                                          href: {
                                            pathVariables: {
                                              UxQzAcVgo: n
                                            },
                                            webPageId: `dcN8jq2Gu`
                                          },
                                          motionChild: !0,
                                          nodeId: `eAHwg9lhh`,
                                          scopeId: `VADOyQEsJ`,
                                          children: /*#__PURE__*/ m(x.a, {
                                            className: `framer-ed3rdn framer-1wrtkop`,
                                            "data-framer-cursor": `9iwj27`,
                                            "data-framer-name": `Details`,
                                            children: [o !== !1 && /*#__PURE__*/ h(N, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ h(i, {
                                                children: /*#__PURE__*/ h(`p`, {
                                                  className: `framer-styles-preset-c95aba`,
                                                  "data-styles-preset": `x8g4OBmQ1`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `start`,
                                                    "--framer-text-color": `var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)`
                                                  },
                                                  children: `Eyewear`
                                                })
                                              }),
                                              className: `framer-32mldv`,
                                              "data-framer-name": `Industry`,
                                              fonts: [`Inter`],
                                              text: t,
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0
                                            }), s !== !1 && /*#__PURE__*/ h(N, {
                                              __fromCanvasComponent: !0,
                                              children: /*#__PURE__*/ h(i, {
                                                children: /*#__PURE__*/ h(`p`, {
                                                  className: `framer-styles-preset-c95aba`,
                                                  "data-styles-preset": `x8g4OBmQ1`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))`
                                                  },
                                                  children: `'26©`
                                                })
                                              }),
                                              className: `framer-1steoaf`,
                                              "data-framer-name": `Year`,
                                              fonts: [`Inter`],
                                              text: /*#__PURE__*/ h(`time`, {
                                                dateTime: r,
                                                children: c
                                              }),
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0
                                            })]
                                          })
                                        })
                                      })
                                    }, e)
                                  })
                                })
                              })
                            })
                          })],
                          Effects: {
                            bendIntensity: 1.4,
                            edgeEffect: `streaks`,
                            edgeWarp: !0,
                            edgeWarpStrength: 2
                          },
                          fontSlot: [ /*#__PURE__*/ h(x.div, {
                            className: `framer-1wrhru3`,
                            "data-framer-name": `Title Font Goes Here`,
                            children: /*#__PURE__*/ h(N, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ h(i, {
                                children: /*#__PURE__*/ h(`h2`, {
                                  className: `framer-styles-preset-1c0t51l`,
                                  "data-styles-preset": `iLKnB8A0V`,
                                  dir: `auto`,
                                  children: `project title`
                                })
                              }),
                              className: `framer-6lhlmk`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0
                            })
                          })],
                          height: `100%`,
                          id: `z_U18PIUA`,
                          Interaction: {
                            cardCursor: !0,
                            clickAction: `link`,
                            hijackScroll: !0
                          },
                          items: [],
                          Layout: {
                            cardAspect: 1.6,
                            centerWidthPct: 65,
                            cornerRadius: 12,
                            sidePeekPct: 15,
                            sideScale: .69
                          },
                          layoutId: `z_U18PIUA`,
                          metaGap: 15,
                          Motion: {
                            autoplay: !1,
                            autoplayInterval: 4,
                            dragSpeed: 1.7,
                            infiniteLoop: !0,
                            lerpSmoothness: .15,
                            scrollSpeed: 1.4
                          },
                          Mouse: {
                            mouseChroma: .38,
                            mouseEffect: `ripple`,
                            mouseRadius: .25,
                            mouseSpeedReact: !0,
                            mouseWarp: !0,
                            mouseWarpStrength: 2
                          },
                          showDetails: !0,
                          slot: [ /*#__PURE__*/ h(x.div, {
                            className: `framer-1smkdlc`,
                            "data-framer-name": `Projects Source (Slot)`,
                            children: /*#__PURE__*/ h(me, {
                              children: /*#__PURE__*/ h($t, {
                                query: Qt(),
                                children: (e, t, n) => /*#__PURE__*/ h(d, {
                                  children: e?.map(({
                                    AO3U_VSSA: e,
                                    id: t,
                                    iRUlzL14O: n,
                                    lqxb5gqxK: r,
                                    motPAdhqw: a,
                                    Q2VN_FZXh: o,
                                    UxQzAcVgo: c
                                  }, l) => (c ??= ``, r ??= !0, n ??= ``, o ??= ``, /*#__PURE__*/ h(C, {
                                    id: `AzA7OvnyO-${t}`,
                                    children: /*#__PURE__*/ h(_e.Provider, {
                                      value: {
                                        UxQzAcVgo: c
                                      },
                                      children: /*#__PURE__*/ h(se, {
                                        href: {
                                          pathVariables: {
                                            UxQzAcVgo: c
                                          },
                                          webPageId: `dcN8jq2Gu`
                                        },
                                        motionChild: !0,
                                        nodeId: `TbWdV_Xn5`,
                                        scopeId: `VADOyQEsJ`,
                                        children: /*#__PURE__*/ m(x.a, {
                                          className: `framer-12qg72k framer-1wrtkop`,
                                          "data-framer-cursor": `9iwj27`,
                                          "data-framer-name": `Project Card`,
                                          children: [ /*#__PURE__*/ h(le, {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              sizes: `320px`,
                                              ...Jt(a)
                                            },
                                            className: `framer-e3lzt7`,
                                            "data-framer-name": `Cover`
                                          }), r !== !1 && /*#__PURE__*/ h(M, {
                                            children: /*#__PURE__*/ h(P, {
                                              className: `framer-1mlcts6-container`,
                                              "data-framer-name": `Uploaded Video`,
                                              inComponentSlot: !0,
                                              isAuthoredByUser: !0,
                                              isModuleExternal: !0,
                                              name: `Uploaded Video`,
                                              nodeId: `MUWI3G5Ln`,
                                              rendersWithMotion: !0,
                                              scopeId: `VADOyQEsJ`,
                                              children: /*#__PURE__*/ h(Be, {
                                                backgroundColor: `rgba(0, 0, 0, 0)`,
                                                borderRadius: 0,
                                                bottomLeftRadius: 0,
                                                bottomRightRadius: 0,
                                                controls: !1,
                                                height: `100%`,
                                                id: `MUWI3G5Ln`,
                                                isMixedBorderRadius: !1,
                                                layoutId: `MUWI3G5Ln`,
                                                loop: !0,
                                                muted: !0,
                                                name: `Uploaded Video`,
                                                objectFit: `cover`,
                                                playing: !0,
                                                poster: Zt(a),
                                                posterEnabled: !0,
                                                srcFile: e,
                                                srcType: Xt(Yt(n), s),
                                                srcUrl: n,
                                                startTime: 0,
                                                style: {
                                                  height: `100%`,
                                                  width: `100%`
                                                },
                                                topLeftRadius: 0,
                                                topRightRadius: 0,
                                                volume: 25,
                                                width: `100%`
                                              })
                                            })
                                          }), /*#__PURE__*/ h(N, {
                                            __fromCanvasComponent: !0,
                                            children: /*#__PURE__*/ h(i, {
                                              children: /*#__PURE__*/ h(`h2`, {
                                                className: `framer-styles-preset-fvem1p`,
                                                "data-styles-preset": `LMUl9NNGN`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))`
                                                },
                                                children: `Kyma`
                                              })
                                            }),
                                            className: `framer-1nt3kx8`,
                                            fonts: [`Inter`],
                                            text: o,
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0
                                          })]
                                        })
                                      })
                                    })
                                  }, t)))
                                })
                              })
                            })
                          })],
                          Strip: {
                            arrowColor: `var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))`,
                            controlsColor: `var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))`,
                            countSeparator: `/`,
                            inactiveTitleColor: `var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))`,
                            showArrows: !0,
                            showCount: !0,
                            showTitleStrip: !0,
                            titleColor: `var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))`,
                            titleGap: 60,
                            zeroPad: !0
                          },
                          Style: {
                            backgroundColor: `rgb(255, 255, 255)`,
                            backgroundTransparent: !0
                          },
                          style: {
                            height: `100%`,
                            width: `100%`
                          },
                          width: `100%`
                        })
                      })
                    })
                  })]
                })
              })]
            })]
          }), /*#__PURE__*/ h(`div`, {
            id: `overlay`
          })]
        })
      })
    }), pn = [`.framer-nRW2Q.framer-1wrtkop, .framer-nRW2Q .framer-1wrtkop { display: block; }`, `.framer-nRW2Q.framer-10hbnng { align-content: center; align-items: center; background-color: var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`, `.framer-nRW2Q .framer-d0pt4p-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }`, `.framer-nRW2Q .framer-e5br0d { align-content: flex-start; align-items: flex-start; background-color: var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, #f7f7f7); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`, `.framer-nRW2Q .framer-q5psbm-container { align-self: stretch; flex: none; height: auto; position: relative; width: auto; }`, `.framer-nRW2Q .framer-1699frv { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 100vh; justify-content: center; overflow: visible; padding: 3px; position: relative; width: 1px; }`, `.framer-nRW2Q .framer-hukja4 { --corner-shape-fallback: 0.752; align-content: center; align-items: center; background-color: var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, #0d0d0d); border-bottom-left-radius: calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-bottom-right-radius: calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-top-left-radius: calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-top-right-radius: calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); corner-shape: superellipse(1.5); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`, `.framer-nRW2Q .framer-1qgzbbt { display: grid; flex: none; gap: 40px 20px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(4, minmax(50px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; max-width: 1920px; overflow: visible; padding: 30px 30px 0px 30px; pointer-events: auto; position: relative; width: 100%; z-index: 1; }`, `.framer-nRW2Q .framer-1d80ykx-container { align-self: center; flex: none; height: auto; justify-self: start; position: relative; width: fit-content; }`, `.framer-nRW2Q .framer-11g8pw4 { align-content: flex-start; align-items: flex-start; align-self: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 3px; grid-column: span 2; height: min-content; justify-content: flex-start; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`, `.framer-nRW2Q .framer-doc0mi, .framer-nRW2Q .framer-1steoaf { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`, `.framer-nRW2Q .framer-l1p39r-container { flex: none; height: auto; position: relative; width: auto; }`, `.framer-nRW2Q .framer-1smkdlc { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`, `.framer-nRW2Q .framer-12qg72k { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; text-decoration: none; width: 320px; }`, `.framer-nRW2Q .framer-e3lzt7 { --corner-shape-fallback: 0.752; border-bottom-left-radius: calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-bottom-right-radius: calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-top-left-radius: calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-top-right-radius: calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); corner-shape: superellipse(1.5); flex: none; height: 420px; position: relative; width: 320px; }`, `.framer-nRW2Q .framer-1mlcts6-container { flex: none; height: 420px; position: relative; width: 320px; }`, `.framer-nRW2Q .framer-1nt3kx8 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`, `.framer-nRW2Q .framer-gbueqi { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`, `.framer-nRW2Q .framer-93y8ef, .framer-nRW2Q .framer-6lhlmk, .framer-nRW2Q .framer-bowggs { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`, `.framer-nRW2Q .framer-14z4bt-container { align-self: center; flex: none; height: auto; justify-self: end; position: relative; width: 100%; }`, `.framer-nRW2Q .framer-q4xdmx-container { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }`, `.framer-nRW2Q .framer-9lk2t { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`, `.framer-nRW2Q .framer-ed3rdn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 0px; position: relative; text-decoration: none; width: 320px; }`, `.framer-nRW2Q .framer-32mldv { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`, `.framer-nRW2Q .framer-1wrhru3 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`, `.framer-nRW2Q .framer-1is60kx { align-content: center; align-items: center; background-color: var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, #ffffff); display: flex; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`, `.framer-nRW2Q .framer-yawvlb { --1m973uw: var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, #ffffff); --js9iwy: 2; aspect-ratio: 1 / 1; height: auto; position: relative; width: 14px; }`, ...Ie, ...He, ...Oe, ...Je, `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-nRW2Q.framer-10hbnng { width: 810px; } .framer-nRW2Q .framer-14z4bt-container { width: fit-content; }}`, `@media (max-width: 809.98px) { .framer-nRW2Q.framer-10hbnng { width: 390px; } .framer-nRW2Q .framer-e5br0d { flex-direction: column; } .framer-nRW2Q .framer-q5psbm-container { align-self: unset; flex: 1 0 0px; height: 1px; } .framer-nRW2Q .framer-1699frv { flex: none; width: 100%; } .framer-nRW2Q .framer-1qgzbbt { padding: 81px 20px 0px 20px; } .framer-nRW2Q .framer-11g8pw4 { grid-column: span 3; } .framer-nRW2Q .framer-14z4bt-container { width: fit-content; }}`], mn = re(fn, pn, `framer-nRW2Q`), mn.displayName = `case-studies`, mn.defaultProps = {
      height: 1009,
      width: 1200
    }, te(mn, [{
      explicitInter: !0,
      fonts: [{
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
        url: `https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
        weight: `400`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
        url: `https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
        weight: `400`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+1F00-1FFF`,
        url: `https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
        weight: `400`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0370-03FF`,
        url: `https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
        weight: `400`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
        url: `https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
        weight: `400`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
        url: `https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
        weight: `400`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
        url: `https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,
        weight: `400`
      }, {
        cssFamilyName: `Mona Sans`,
        source: `google`,
        style: `normal`,
        uiFamilyName: `Mona Sans`,
        url: `https://fonts.gstatic.com/s/monasans/v4/o-0mIpQmx24alC5A4PNB6Ryti20_6n1iPHjcz6L1SoM-jCpoiyAjBN9Y41P6zHtY.woff2`,
        weight: `600`
      }]
    }, ...X, ...It, ...Lt, ...Rt, ...zt, ...Z, ...Q, ...Bt, ...Ht, ...ee(Me), ...ee(Ue), ...ee(De), ...ee(Ye)], {
      supportsExplicitInterCodegen: !0
    }), mn.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = t.priority,
          i = he.get(Qt(), n, r),
          a = he.get(sn(), n, r);
        return ce([() => i.preload(), () => a.preload(), () => k(L, {}, t), () => k(R, {}, t), () => k(H, {}, t)], t)
      }
    }, hn = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerVADOyQEsJ`,
          slots: [],
          annotations: {
            framerContractVersion: `1`,
            framerIntrinsicHeight: `1009`,
            framerColorSyntax: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"smBzUPBee":{"layout":["fixed","auto"]},"WtMGunC0m":{"layout":["fixed","auto"]}}}`,
            framerIntrinsicWidth: `1200`,
            framerDisplayContentsDiv: `false`,
            framerAcceptsLayoutTemplate: `true`,
            framerComponentViewportWidth: `true`,
            framerImmutableVariables: `true`,
            framerAutoSizeImages: `true`,
            framerResponsiveScreen: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerScrollSections: `{"kDaTJpdid":{"pattern":":kDaTJpdid","name":"pricing"}}`
          }
        },
        queryParamNames: {
          type: `variable`,
          annotations: {
            framerContractVersion: `1`
          }
        },
        Props: {
          type: `tsType`,
          annotations: {
            framerContractVersion: `1`
          }
        },
        __FramerMetadata__: {
          type: `variable`
        }
      }
    }
  })))()
}
gn();
export {
  hn as __FramerMetadata__, mn as
  default, Gt as queryParamNames
};
//# sourceMappingURL=AMcQRZfITfjQMtwTc9L6feHZ3p0EKUbo_RHe9QFmX_Y.DexPvT_c.mjs.map