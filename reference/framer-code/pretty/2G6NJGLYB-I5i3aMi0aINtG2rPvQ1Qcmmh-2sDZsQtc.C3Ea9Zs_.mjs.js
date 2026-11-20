import {
  t as e
} from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  B as t,
  F as n,
  M as r,
  R as i,
  T as a,
  _ as o,
  b as s,
  j as c,
  l,
  o as u,
  p as d,
  s as f,
  w as p,
  y as m
} from "./react.DfujhmXs.mjs";
import {
  C as h,
  a as g,
  r as _,
  t as v
} from "./motion.CM2UIHal.mjs";
import {
  Et as y,
  F as b,
  Ft as x,
  G as ee,
  L as S,
  M as C,
  N as te,
  O as w,
  Pt as T,
  Q as E,
  T as D,
  Tt as O,
  U as k,
  Wt as A,
  a as j,
  ct as M,
  ht as ne,
  it as re,
  jt as ie,
  k as ae,
  m as N,
  o as P,
  s as F,
  vt as oe,
  xt as I,
  yt as L
} from "./framer.DdqHlrxM.mjs";
import {
  A as se,
  H as R,
  J as z,
  M as ce,
  N as B,
  R as le,
  U as V,
  X as ue,
  Y as de,
  Z as H,
  at as fe,
  it as pe,
  j as me,
  nt as he,
  rt as U,
  z as W
} from "./toplevel-deps.BY2s547D.mjs";
import {
  n as ge,
  t as _e
} from "./v7Wd3N72W.Dzl5_5IZ.mjs";
import {
  _ as ve,
  a as ye,
  c as be,
  d as G,
  f as xe,
  g as Se,
  h as Ce,
  i as we,
  l as Te,
  m as Ee,
  n as De,
  o as K,
  p as Oe,
  r as ke,
  s as Ae,
  t as je,
  u as Me,
  v as Ne,
  w as Pe,
  x as Fe,
  y as Ie
} from "./three.module.CJpBf6nA.mjs";
import {
  n as Le,
  r as Re
} from "./Xq77wYGC1.B8T6nX4a.mjs";

function q(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function ze(e) {
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

function Be(e) {
  return J[e] || (J[e] = fetch(e).then(e => {
    if (!e.ok) throw Error(`font ${e.status}`);
    return e.json()
  })), J[e]
}

function Ve(e, t, n) {
  let r = e.data || e,
    i = n / (r.resolution || 1e3),
    a = (r.boundingBox.yMax - r.boundingBox.yMin) * i,
    o = [],
    s = 0;
  for (let e of t) {
    let t = r.glyphs[e] || r.glyphs[`?`];
    if (t) {
      if (t.o) {
        let e = t.o.split(` `),
          n = null,
          r = [],
          a = 0,
          c = () => parseFloat(e[a++]) * i;
        for (; a < e.length;) {
          let t = e[a++];
          if (t === `m`) {
            let e = c() + s,
              t = c();
            n = new Se, n.moveTo(e, t), r.push(n)
          } else if (t === `l` && n) n.lineTo(c() + s, c());
          else if (t === `q` && n) {
            let e = c() + s,
              t = c();
            n.quadraticCurveTo(c() + s, c(), e, t)
          } else if (t === `b` && n) {
            let e = c() + s,
              t = c();
            n.bezierCurveTo(c() + s, c(), c() + s, c(), e, t)
          }
        }
        if (r.length > 1) {
          let e = r[0],
            t = 0;
          for (let n of r) {
            let r = n.getPoints(12),
              i = 0;
            for (let e = 0; e < r.length; e++) {
              let t = r[e],
                n = r[(e + 1) % r.length];
              i += t.x * n.y - n.x * t.y
            }
            i = Math.abs(i / 2), i > t && (t = i, e = n)
          }
          e.holes = r.filter(t => t !== e).map(e => {
            let t = new G;
            return t.curves = e.curves, t
          }), o.push(e)
        } else r.length === 1 && o.push(r[0])
      }
      s += (t.ha || 0) * i
    }
  }
  return {
    shapes: o,
    width: s,
    height: a
  }
}

function He(e) {
  return Math.sin(e * Math.PI / 2)
}

function Ue(e) {
  let {
    text: n = `404`,
    fontFile: r,
    fontUrl: i = `https://unpkg.com/three@0.128.0/examples/fonts/helvetiker_bold.typeface.json`,
    color: a = `#FFFFFF`,
    extrudeDepth: c = 22,
    bevel: l = !0,
    lineOpacity: d = .9,
    rotateSpeed: f = .4,
    startAngle: p = -20,
    mouseFollow: h = .16,
    dragSensitivity: g = 1,
    lineWidth: _ = 1.6,
    scrollPan: v = 1,
    warpStrength: y = 1,
    warpRadius: b = .13,
    trailDecay: x = 1.2,
    grainScale: ee = 18,
    mouseSpeedReact: S = !0,
    mouseChroma: C = .35,
    scrollFlex: te = 120,
    cameraHeight: w = .3,
    floorGrid: T = !0,
    envOpacity: E = .25,
    explodeSpread: D = 1.1,
    explodeSnap: O = 130,
    shardSize: k = 10,
    pressDepth: j = 80,
    rippleAmount: M = 12,
    minSize: ne = 64,
    fluidSize: re = 14,
    maxSize: ie = 320,
    padding: ae = .12,
    style: N
  } = e, P = s(null), [F, oe] = o(!1), I = A.current() === A.canvas;
  return m(() => {
    if (!P.current) return;
    let e = P.current,
      o = {
        raf: 0,
        visible: !0,
        disposed: !1,
        started: !1
      },
      s = t.matchMedia(`(prefers-reduced-motion: reduce)`).matches,
      u = t.matchMedia(`(pointer: fine)`).matches,
      m = !u,
      A = Math.min(t.devicePixelRatio || 1, I ? 1 : 1.5),
      N = ze(`wtdepth`),
      F = !ze(`wtsingle`);
    ze(`wtfont`) || Be(r || i).catch(() => {});
    let L;
    try {
      L = new Ie({
        alpha: !0,
        antialias: m || ze(`wtmsaa`),
        depth: N,
        stencil: N,
        powerPreference: `high-performance`
      })
    } catch {
      oe(!0);
      return
    }
    L.setPixelRatio(A), L.domElement.style.cssText = `position:absolute;display:block;pointer-events:none;`, e.appendChild(L.domElement);
    let se = .22,
      R = new Ee,
      z = new xe(35, 1, 1, 1e4),
      ce = 1,
      B = {
        uColor: {
          value: new ke(a)
        },
        uOpacity: {
          value: d
        },
        uTime: {
          value: 0
        },
        uExplode: {
          value: 0
        },
        uSpread: {
          value: 1
        },
        uFlexV: {
          value: 0
        },
        uHalfW: {
          value: 1
        },
        uRes: {
          value: new ve(1, 1)
        },
        uWidth: {
          value: _ * A
        },
        uTrail: {
          value: null
        },
        uPress: {
          value: j
        },
        uRipple: {
          value: M
        },
        uTrailTime: {
          value: 0
        }
      },
      le = new Ce({
        transparent: !0,
        depthWrite: !1,
        side: F ? 0 : 2,
        uniforms: B,
        vertexShader: Ke,
        fragmentShader: qe
      }),
      V = null,
      ue = new Ee,
      de = new Me(-1, 1, 1, -1, 0, 1),
      H = new We(Math.round(x * 60), b);
    B.uTrail.value = H.texture;
    let fe = {
        tDiffuse: {
          value: null
        },
        uTrail: {
          value: H.texture
        },
        uTime: {
          value: 0
        },
        uMouseStrength: {
          value: y
        },
        uMouseChroma: {
          value: C
        },
        uMouseVel: {
          value: 1
        },
        uGrain: {
          value: ee
        }
      },
      pe = new Ce({
        transparent: !0,
        uniforms: fe,
        vertexShader: Je,
        fragmentShader: Ye
      });
    ue.add(new be(new Oe(2, 2), pe));

    function me() {
      m || !V ? L.render(R, z) : (L.setRenderTarget(V), L.setClearColor(0, 0), L.clear(), L.render(R, z), L.setRenderTarget(null), fe.tDiffuse.value = V.texture, L.render(ue, de))
    }
    let he = new Ce({
        transparent: !0,
        depthWrite: !1,
        uniforms: {
          uColor: {
            value: new ke(a)
          },
          uOpacity: {
            value: E
          },
          uExtent: {
            value: 1
          }
        },
        vertexShader: `
                varying vec2 vXZ;
                void main() {
                    vXZ = position.xz;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
        fragmentShader: `
                uniform vec3 uColor;
                uniform float uOpacity;
                uniform float uExtent;
                varying vec2 vXZ;
                void main() {
                    float r = length(vXZ) / uExtent;
                    float a = uOpacity * (1.0 - smoothstep(0.55, 1.0, r));
                    if (a < 0.005) discard;
                    gl_FragColor = vec4(uColor, a);
                }
            `
      }),
      U = null,
      W = null;

    function ge(e, t) {
      if (W &&= (W.geometry.dispose(), R.remove(W), null), !T) return;
      let n = -e * 1.15,
        r = t / 14,
        i = [];
      for (let e = -14; e <= 14; e++) i.push(e * r, n, -t, e * r, n, t), i.push(-t, n, e * r, t, n, e * r);
      let a = new je;
      a.setAttribute(`position`, new K(i, 3)), he.uniforms.uExtent.value = t, W = new Ae(a, he), W.frustumCulled = !1, R.add(W)
    }

    function _e(r) {
      let i = e.clientWidth,
        o = e.clientHeight;
      if (!i || !o) return;
      B.uColor.value = new ke(a), he.uniforms.uColor.value = new ke(a);
      let {
        shapes: s
      } = Ve(r, n, 100);
      if (!s.length) return;
      let u = l ? 1.6 : 0,
        d = new ye(s, {
          depth: c,
          bevelEnabled: l,
          bevelThickness: u,
          bevelSize: u,
          bevelSegments: 1,
          curveSegments: 8
        });
      d.computeBoundingBox();
      let f = d.boundingBox,
        p = f.max.x - f.min.x,
        m = f.max.y - f.min.y,
        h = t.innerWidth * re / 100,
        g = Math.min(Math.min(Math.max(ne, h), ie) / m, i * (1 - ae * 2) / p, o * (1 - ae * 2) / m);
      d.translate(-(f.min.x + p / 2), -(f.min.y + m / 2), -(c / 2)), d.scale(g, g, g);
      let v = new we(d, 11);
      d.dispose();
      let y = v.attributes.position.array;
      v.dispose();
      let b = Math.max(4, k),
        x = [],
        ee = [],
        S = [],
        C = [],
        te = [],
        w = y.length / 6;
      for (let e = 0; e < w; e++) {
        let t = y[e * 6],
          n = y[e * 6 + 1],
          r = y[e * 6 + 2],
          i = y[e * 6 + 3],
          a = y[e * 6 + 4],
          o = y[e * 6 + 5],
          s = Math.hypot(i - t, a - n, o - r),
          c = Math.max(1, Math.round(s / b));
        for (let e = 0; e < c; e++) {
          let s = e / c,
            l = (e + 1) / c,
            u = t + (i - t) * s,
            d = n + (a - n) * s,
            f = r + (o - r) * s,
            p = t + (i - t) * l,
            m = n + (a - n) * l,
            h = r + (o - r) * l,
            g = (u + p) / 2,
            _ = (d + m) / 2,
            v = (f + h) / 2;
          x.push(u, d, f, p, m, h);
          let y = Math.random() * 2 - 1,
            b = Math.random() * Math.PI * 2,
            w = Math.sqrt(1 - y * y),
            T = w * Math.cos(b) * .6 + g * .004,
            E = y * .6 + _ * .004,
            D = w * Math.sin(b),
            O = Math.hypot(T, E, D) || 1;
          T /= O, E /= O, D /= O;
          let k = Math.random() * 2 - 1,
            A = Math.random() * 2 - 1,
            j = Math.random() * 2 - 1,
            M = Math.hypot(k, A, j) || 1,
            ne = Math.random();
          for (let e = 0; e < 2; e++) ee.push(g, _, v), S.push(T, E, D), C.push(k / M, A / M, j / M), te.push(ne)
        }
      }
      U && (U.geometry.dispose(), R.remove(U));
      let T = x.length / 6,
        E = [],
        O = [],
        j = [],
        M = [],
        N = [],
        P = [],
        oe = [],
        I = [];
      for (let e = 0; e < T; e++) {
        let t = x[e * 6],
          n = x[e * 6 + 1],
          r = x[e * 6 + 2],
          i = x[e * 6 + 3],
          a = x[e * 6 + 4],
          o = x[e * 6 + 5],
          s = e * 4;
        for (let s = 0; s < 4; s++) {
          E.push(t, n, r), O.push(i, a, o), j.push(s < 2 ? 0 : 1), M.push(s % 2 == 0 ? -1 : 1);
          let c = e * 6;
          N.push(S[c], S[c + 1], S[c + 2]), P.push(C[c], C[c + 1], C[c + 2]), oe.push(te[e * 2])
        }
        I.push(s, s + 2, s + 1, s + 2, s + 3, s + 1)
      }
      let L = new je;
      if (L.setAttribute(`position`, new K(E.slice(), 3)), L.setAttribute(`aStart`, new K(E, 3)), L.setAttribute(`aEnd`, new K(O, 3)), L.setAttribute(`aT`, new K(j, 1)), L.setAttribute(`aSide`, new K(M, 1)), L.setAttribute(`aDir`, new K(N, 3)), L.setAttribute(`aAxis`, new K(P, 3)), L.setAttribute(`aSeed`, new K(oe, 1)), F) {
        let e = I.length,
          t = Array(e * 2);
        for (let n = 0; n < e; n += 3) t[n] = I[n], t[n + 1] = I[n + 2], t[n + 2] = I[n + 1];
        for (let n = 0; n < e; n++) t[e + n] = I[n];
        L.setIndex(t)
      } else L.setIndex(I);
      U = new be(L, le), U.frustumCulled = !1, R.add(U), B.uSpread.value = Math.min(i, o) * .5 * D, B.uHalfW.value = p * g / 2;
      let se = m * g,
        z = Math.min(Math.max(se / 260, .4), 2.5);
      B.uWidth.value = _ * A * z, ge(m * g / 2 + 1, Math.max(i, o) * 1.1)
    }
    let G = null,
      Se = 0,
      De = 0,
      Fe = 1,
      Le = 1,
      Re = 0,
      q = 0,
      He = 0;

    function Ue() {
      let n = e.clientWidth,
        r = e.clientHeight;
      if (!n || !r || n === Re && r === q && t.innerWidth === He) return;
      Re = n, q = r, He = t.innerWidth;
      let i = Math.round(n * se),
        a = Math.round(r * se),
        o = n + i * 2,
        s = r + a * 2;
      Se = i, De = a, Fe = o, Le = s, L.setSize(o, s);
      let c = L.domElement;
      c.style.left = `${-i}px`, c.style.top = `${-a}px`, z.aspect = o / s, ce = s / 2 / Math.tan(z.fov * Math.PI / 360), z.updateProjectionMatrix(), V?.dispose();
      let l = Math.round(o * A),
        u = Math.round(s * A);
      V = m ? null : new Ne(l, u, {
        format: Te,
        minFilter: Pe,
        magFilter: Pe,
        depthBuffer: N
      }), B.uRes.value.set(l, u), B.uWidth.value = _ * A, G && _e(G)
    }
    Ue();
    let J = 0,
      Ge = 0,
      Xe = 0,
      Ze = 0,
      Qe = 0,
      $e = 0,
      et = 0,
      tt = 0,
      nt = 0,
      rt = 1,
      it = -1e9,
      at = !1,
      Y = !1,
      ot = 0,
      X = 0,
      st = 0,
      ct = 0,
      Z = 0,
      lt = 0,
      ut = 0;

    function Q(t) {
      let n = e.getBoundingClientRect();
      if (u) {
        J = (t.clientX - n.left) / n.width * 2 - 1, Ge = (t.clientY - n.top) / n.height * 2 - 1;
        let e = S ? .35 + et * .65 : 1;
        H.addTouch((t.clientX - n.left + Se) / Fe, 1 - (t.clientY - n.top + De) / Le, e)
      }
      if (at && !Y) {
        let e = m ? 12 : 6;
        Math.hypot(t.clientX - ot, t.clientY - X) > e && (Y = !0, ct = t.clientX)
      }
      if (Y) {
        let n = t.clientX - ct;
        ct = t.clientX;
        let r = n / e.getBoundingClientRect().width * 3.5 * g;
        tt -= r, nt = -r, it = performance.now()
      }
    }

    function dt(e) {
      at = !0, Y = !1, ot = e.clientX, X = e.clientY, st = performance.now(), it = st, m || (Z = 1)
    }

    function ft() {
      at = !1, Y = !1, Z = 0
    }

    function pt() {
      H.clearLast()
    }
    let $ = !s && !I;
    $ && (e.addEventListener(`pointermove`, Q, {
      passive: !0
    }), e.addEventListener(`pointerdown`, dt, {
      passive: !0
    }), t.addEventListener(`pointerup`, ft, {
      passive: !0
    }), e.addEventListener(`pointerleave`, ft, {
      passive: !0
    }), e.addEventListener(`pointerleave`, pt, {
      passive: !0
    }));
    let mt = 0,
      ht = 0;

    function gt(e) {
      mt += e.deltaY * .012 * v, it = performance.now()
    }
    $ && e.addEventListener(`wheel`, gt, {
      passive: !0
    });
    let _t = 0;

    function vt() {
      _t && t.clearTimeout(_t), _t = t.setTimeout(() => {
        Ue(), $ || bt()
      }, 120)
    }
    t.addEventListener(`resize`, vt, {
      passive: !0
    });

    function yt(e, t) {
      let n = Math.min(Math.max(t, .03), 1.2);
      z.position.set(Math.sin(e) * ce * Math.cos(n), Math.sin(n) * ce, Math.cos(e) * ce * Math.cos(n)), z.lookAt(0, 0, 0)
    }

    function bt() {
      B.uTime.value = 5.2, yt(p * Math.PI / 180, w), me()
    }
    let xt = performance.now(),
      St = xt,
      Ct = p * Math.PI / 180;

    function wt() {
      if (!o.disposed) try {
        Tt()
      } catch {
        o.raf && cancelAnimationFrame(o.raf), o.raf = 0
      }
    }

    function Tt() {
      let e = performance.now(),
        t = Math.min((e - St) / 1e3, .033);
      St = e;
      let n = (e - xt) / 1e3;
      B.uTime.value = n % 3600, m && at && !Y && Z === 0 && e - st > 220 && (Z = 1);
      let r = e - it;
      rt += ((Y || r < 2e3 ? 0 : 1) - rt) * (t * 2), Ct += f * t * rt, Y || (tt += nt, nt *= .94);
      let i = +!Y;
      Xe += (Ge * h * i - Xe) * .06, Ze += (J * h * i - Ze) * .06;
      let a = Qe,
        s = $e;
      Qe += (J - Qe) * .12, $e += (Ge - $e) * .12;
      let c = Math.hypot(Qe - a, $e - s);
      et += (Math.min(c * 60, 1) - et) * .08, fe.uTime.value = B.uTime.value, B.uTrailTime.value = B.uTime.value, fe.uMouseVel.value = S ? .35 + et * .65 : 1, u && H.update(), ht += (mt - ht) * .12, tt += ht * t, mt *= .92, B.uFlexV.value = Math.min(Math.abs(ht) * .02, 1) * te;
      let l = O,
        d = 2 * Math.sqrt(l) * .75,
        p = (Z - lt) * l - ut * d;
      ut += p * t, lt += ut * t, B.uExplode.value = Math.max(lt, 0), yt(Ct + tt + Ze, w + Xe), me(), o.visible && $ ? o.raf = requestAnimationFrame(wt) : o.raf = 0
    }

    function Et() {
      o.disposed || o.started || (o.started = !0, Be(r || i).then(e => {
        o.disposed || (G = e, requestAnimationFrame(() => {
          if (!o.disposed) {
            try {
              _e(G)
            } catch {
              oe(!0);
              return
            }
            requestAnimationFrame(() => {
              if (!o.disposed) {
                try {
                  L.compile(R, z)
                } catch {}
                requestAnimationFrame(() => {
                  o.disposed || ($ ? (St = performance.now(), o.raf ||= requestAnimationFrame(wt)) : bt(), L.domElement.style.opacity = `1`)
                })
              }
            })
          }
        }))
      }).catch(() => {
        o.disposed || oe(!0)
      }))
    }
    let Dt = 0;
    if ($) {
      L.domElement.style.opacity = `0`, L.domElement.style.transition = `opacity 350ms ease`;
      let e = 0,
        t = performance.now(),
        n = t,
        r = () => {
          if (o.disposed || o.started) return;
          let i = performance.now(),
            a = i - t;
          t = i, e = a < 22 ? e + 1 : 0;
          let s = !1;
          try {
            s = (document.getAnimations ? document.getAnimations() : []).some(e => e.playState === `running`)
          } catch {}
          let c = i - n;
          e >= 6 && !s && c >= 250 || c > 1600 ? Et() : Dt = requestAnimationFrame(r)
        };
      Dt = requestAnimationFrame(r)
    } else Et();

    function Ot(e) {
      if (!o.disposed && e && e.persisted) try {
        me()
      } catch {}
    }

    function kt(e) {
      e.preventDefault(), o.raf &&= (cancelAnimationFrame(o.raf), 0)
    }

    function At() {
      if (!o.disposed && o.started) try {
        G && _e(G), $ && o.visible && !o.raf ? (St = performance.now(), o.raf = requestAnimationFrame(wt)) : bt()
      } catch {}
    }
    t.addEventListener(`pageshow`, Ot), L.domElement.addEventListener(`webglcontextlost`, kt, !1), L.domElement.addEventListener(`webglcontextrestored`, At, !1);
    let jt = new IntersectionObserver(([e]) => {
      o.visible = e.isIntersecting, o.visible && $ && o.started && !o.raf ? (St = performance.now(), o.raf = requestAnimationFrame(wt)) : !o.visible && o.raf && (cancelAnimationFrame(o.raf), o.raf = 0)
    });
    jt.observe(e);
    let Mt = 0,
      Nt = new ResizeObserver(() => {
        Mt && t.clearTimeout(Mt), Mt = t.setTimeout(() => {
          Ue(), $ || bt()
        }, 120)
      });
    return Nt.observe(e), () => {
      o.disposed = !0;
      try {
        o.raf && cancelAnimationFrame(o.raf), Dt && cancelAnimationFrame(Dt), Mt && t.clearTimeout(Mt), _t && t.clearTimeout(_t)
      } catch {}
      try {
        jt.disconnect(), Nt.disconnect()
      } catch {}
      try {
        e.removeEventListener(`pointermove`, Q), e.removeEventListener(`pointerdown`, dt), t.removeEventListener(`pointerup`, ft), e.removeEventListener(`pointerleave`, ft), e.removeEventListener(`pointerleave`, pt), e.removeEventListener(`wheel`, gt), t.removeEventListener(`resize`, vt), t.removeEventListener(`pageshow`, Ot), L.domElement.removeEventListener(`webglcontextlost`, kt), L.domElement.removeEventListener(`webglcontextrestored`, At)
      } catch {}
      try {
        U?.geometry.dispose(), W?.geometry.dispose(), le.dispose(), he.dispose(), pe.dispose(), H.dispose(), V?.dispose()
      } catch {}
      try {
        L.dispose(), L.forceContextLoss?.(), L.domElement.remove()
      } catch {}
    }
  }, [n, r, i, a, c, l, d, f, p, h, g, _, v, y, b, x, ee, S, C, te, w, T, E, D, O, k, j, M, ne, re, ie, ae, I]), /*#__PURE__*/ u(`div`, {
    ref: P,
    style: {
      position: `relative`,
      overflow: `visible`,
      touchAction: `none`,
      ...N
    },
    children: F && /*#__PURE__*/ u(`span`, {
      style: {
        position: `absolute`,
        inset: 0,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        fontSize: `clamp(${ne}px, ${re}vw, ${ie}px)`,
        fontWeight: 500,
        lineHeight: 1.1,
        color: a,
        pointerEvents: `none`
      },
      children: n
    })
  })
}
var J, We, Ge, Ke, qe, Je, Ye;

function Xe() {
  return (Xe = e((() => {
    i(), f(), a(), E(), Fe(), J = {}, We = class {
      addTouch(e, t, n) {
        if (this.last) {
          let r = e - this.last.x,
            i = t - this.last.y,
            a = Math.sqrt(r * r + i * i);
          if (a < 4e-4) return;
          let o = Math.min(a * a * 8e3, 1) * n,
            s = Math.max(1, Math.floor(a / .02));
          for (let e = 1; e <= s; e++) {
            let t = e / s;
            this.trail.push({
              x: this.last.x + r * t,
              y: this.last.y + i * t,
              age: 0,
              force: o
            })
          }
        }
        this.last = {
          x: e,
          y: t
        }
      }
      clearLast() {
        this.last = null
      }
      update() {
        if (this.trail.length === 0 && this.clean && !ze(`wttrail`)) return;
        let {
          ctx: e,
          size: t
        } = this;
        e.globalCompositeOperation = `source-over`, e.fillStyle = `black`, e.fillRect(0, 0, t, t), e.globalCompositeOperation = `lighter`;
        for (let n = this.trail.length - 1; n >= 0; n--) {
          let r = this.trail[n];
          if (r.age++, r.age > this.maxAge) {
            this.trail.splice(n, 1);
            continue
          }
          let i = this.maxAge * .25,
            a = r.age < i ? He(r.age / i) : He(1 - (r.age - i) / (this.maxAge - i)),
            o = t * this.radius * (.55 + a * .45) * 1.5;
          if (o < .5) continue;
          let s = r.x * t,
            c = (1 - r.y) * t,
            l = e.createRadialGradient(s, c, 0, s, c, o),
            u = .2 * a * (.35 + r.force * .65);
          l.addColorStop(0, `rgba(255,255,255,${u})`), l.addColorStop(.35, `rgba(255,255,255,${u*.55})`), l.addColorStop(1, `rgba(0,0,0,0)`), e.fillStyle = l, e.beginPath(), e.arc(s, c, o, 0, Math.PI * 2), e.fill()
        }
        this.texture.needsUpdate = !0, this.clean = this.trail.length === 0
      }
      dispose() {
        this.texture.dispose()
      }
      constructor(e, t) {
        q(this, `size`, 128), q(this, `maxAge`, void 0), q(this, `radius`, void 0), q(this, `trail`, []), q(this, `canvas`, void 0), q(this, `ctx`, void 0), q(this, `texture`, void 0), q(this, `last`, null), q(this, `clean`, !0), this.maxAge = Math.max(10, e), this.radius = t, this.canvas = document.createElement(`canvas`), this.canvas.width = this.canvas.height = this.size, this.ctx = this.canvas.getContext(`2d`), this.ctx.fillStyle = `black`, this.ctx.fillRect(0, 0, this.size, this.size), this.texture = new De(this.canvas), this.texture.minFilter = Pe
      }
    }, Ge = `
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
`, Ke = `
attribute vec3 aStart;
attribute vec3 aEnd;
attribute float aT;
attribute float aSide;
attribute vec3 aDir;
attribute vec3 aAxis;
attribute float aSeed;
uniform float uTime;
uniform float uExplode;
uniform float uSpread;
uniform float uFlexV;
uniform float uHalfW;
uniform vec2 uRes;
uniform float uWidth;
uniform sampler2D uTrail;
uniform float uPress;
uniform float uRipple;
uniform float uTrailTime;
varying float vDist;
${Ge}
vec3 rotAxis(vec3 v, vec3 axis, float ang) {
    float s = sin(ang);
    float c = cos(ang);
    return v * c + cross(axis, v) * s + axis * dot(axis, v) * (1.0 - c);
}
void main() {
    vec3 center0 = (aStart + aEnd) * 0.5;
    float sx = clamp(center0.x / max(uHalfW, 1.0) * 0.5 + 0.5, 0.0, 1.0);
    float flexZ = (sin(sx * 3.14159265) * 0.85 + 0.2) * uFlexV;

    float e = uExplode * (0.35 + aSeed * 0.65);
    float ang = e * (aSeed - 0.5) * 12.0
        + uTime * (0.4 + aSeed * 0.8) * uExplode;
    vec3 rs = rotAxis(aStart - center0, aAxis, ang);
    vec3 re = rotAxis(aEnd - center0, aAxis, ang);
    vec3 c = center0;
    c.z -= flexZ;
    c += aDir * uSpread * e;
    // Guard: only add drift when exploding — NaN-safe and cheaper
    if (uExplode > 0.001) {
        vec3 tangent = normalize(cross(aDir, vec3(0.0, 1.0, 0.0)) + vec3(1e-4));
        c += tangent * sin(uTime * (0.3 + aSeed * 0.5) + aSeed * 6.2831)
            * uSpread * 0.05 * uExplode;
    }

    // 3D trail response: sample the trail at the shard's projected
    // screen position, then press the shard AWAY in view-space depth
    // with a small fbm ripple. The cursor dents the wireframe IN the
    // space — perspective included — instead of smearing a flat image
    // on top of it.
    vec4 mvS = modelViewMatrix * vec4(c + rs, 1.0);
    vec4 mvE = modelViewMatrix * vec4(c + re, 1.0);
    vec4 cc = projectionMatrix * (mvS + mvE) * 0.5;
    vec2 suv = clamp(cc.xy / max(cc.w, 1e-4) * 0.5 + 0.5, 0.0, 1.0);
    float trail = texture2D(uTrail, suv).r;
    if (trail > 0.004) {
        float press = trail * trail * uPress;
        vec2 rUv = suv * 6.0 + vec2(uTrailTime * 0.4, -uTrailTime * 0.3);
        vec3 rip = vec3(
            snoise(rUv),
            snoise(rUv + vec2(7.1, 3.7)),
            0.0
        ) * trail * uRipple;
        mvS.z -= press;
        mvE.z -= press;
        mvS.xyz += rip;
        mvE.xyz += rip;
    }
    vec4 cs = projectionMatrix * mvS;
    vec4 ce = projectionMatrix * mvE;
    vec2 half_ = uRes * 0.5;
    vec2 sPx = cs.xy / cs.w * half_;
    vec2 ePx = ce.xy / ce.w * half_;
    vec2 d = ePx - sPx;
    float len = max(length(d), 1e-4);
    vec2 n = vec2(-d.y, d.x) / len;
    float halfWpx = uWidth * 0.5 + 1.0;
    vec4 clip = mix(cs, ce, aT);
    vec2 px = mix(sPx, ePx, aT) + n * aSide * halfWpx;
    clip.xy = px / half_ * clip.w;
    vDist = aSide * halfWpx;
    gl_Position = clip;
}
`, qe = `
uniform vec3 uColor;
uniform float uOpacity;
uniform float uWidth;
varying float vDist;
void main() {
    float a = uOpacity
        * (1.0 - smoothstep(uWidth * 0.5 - 0.5, uWidth * 0.5 + 0.6, abs(vDist)));
    if (a < 0.01) discard;
    gl_FragColor = vec4(uColor, a);
}
`, Je = `
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
}
`, Ye = `
uniform sampler2D tDiffuse;
uniform sampler2D uTrail;
uniform float uTime;
uniform float uMouseStrength;
uniform float uMouseChroma;
uniform float uMouseVel;
uniform float uGrain;
varying vec2 vUv;
${Ge}
void main() {
    // Falloff comes from the painted trail — path-shaped, blooming and
    // decaying — instead of a live circular radius. The displacement
    // math stays the showcase's verbatim field.
    float mFall = texture2D(uTrail, vUv).r;
    // PERF: outside the trail (almost everywhere, almost always) skip
    // the 8-snoise fbm entirely — plain passthrough.
    if (mFall < 0.004) {
        gl_FragColor = texture2D(tDiffuse, vUv);
        return;
    }
    float mStrength = 0.12 * uMouseStrength * uMouseVel;
    vec2 nUv = vUv * uGrain + vec2(uTime * 0.4, -uTime * 0.3);
    // Quadratic onset + fbm-modulated falloff: the effect's boundary
    // is noise-shaped and fades in from imperceptible — never a
    // locatable geometric edge, even under a stationary cursor.
    float shaped = mFall * mFall;
    float edgeN = fbm(nUv * 0.5 + vec2(3.7, 1.3)) * 0.5 + 0.5;
    shaped *= 0.6 + 0.8 * edgeN;
    // Finishing layer only: the primary response is the 3D press in
    // the shard shader; this smear stays faint so it never reads as a
    // flat sticker over the 3D scene.
    vec2 mDisp = vec2(fbm(nUv), fbm(nUv + vec2(7.1, 3.7)))
        * shaped * mStrength * 1.1;

    vec4 col;
    if (uMouseChroma > 0.001 && mFall > 0.002) {
        float split = uMouseChroma * 0.45;
        vec4 cG = texture2D(tDiffuse, vUv + mDisp);
        vec4 cR = texture2D(tDiffuse, vUv + mDisp * (1.0 - split));
        vec4 cB = texture2D(tDiffuse, vUv + mDisp * (1.0 + split));
        col = vec4(cR.r, cG.g, cB.b, max(cG.a, max(cR.a, cB.a) * 0.9));
    } else {
        col = texture2D(tDiffuse, vUv + mDisp);
    }
    gl_FragColor = col;
}
`, te(Ue, {
      text: {
        type: F.String,
        title: `Text`,
        defaultValue: `404`,
        description: `Rendered as real extruded 3D geometry — works with any characters your font file includes.`
      },
      fontFile: {
        type: F.File,
        allowedFileTypes: [`json`],
        title: `Font File`,
        description: `Upload a typeface.json to match your template's type. Convert any .ttf/.otf at gero3.github.io/facetype.js. Ships with the template — no external URL.`
      },
      fontUrl: {
        type: F.String,
        title: `Font URL`,
        defaultValue: `https://unpkg.com/three@0.128.0/examples/fonts/helvetiker_bold.typeface.json`,
        description: `Fallback, used only when no Font File is uploaded.`
      },
      color: {
        type: F.Color,
        title: `Color`,
        defaultValue: `#FFFFFF`,
        description: `Wireframe and floor grid. Works on any background.`
      },
      minSize: {
        type: F.Number,
        title: `Min Size`,
        min: 16,
        max: 400,
        defaultValue: 64,
        unit: `px`,
        description: `The three size controls work like clamp(min, vw, max) — the text tracks the viewport between a floor and a ceiling.`
      },
      fluidSize: {
        type: F.Number,
        title: `Fluid Size`,
        min: 1,
        max: 40,
        step: .5,
        defaultValue: 14,
        unit: `vw`
      },
      maxSize: {
        type: F.Number,
        title: `Max Size`,
        min: 40,
        max: 800,
        defaultValue: 320,
        unit: `px`
      },
      padding: {
        type: F.Number,
        title: `Padding`,
        min: 0,
        max: .3,
        step: .01,
        defaultValue: .12,
        description: `Overflow guard as a fraction of the frame — the text never renders past it regardless of the size controls.`
      },
      lineWidth: {
        type: F.Number,
        title: `Line Width`,
        min: .5,
        max: 5,
        step: .1,
        defaultValue: 1.6,
        unit: `px`,
        description: `Stroke weight at a 260px text height — it scales with the rendered size so the weight-to-glyph ratio stays constant across breakpoints. True antialiased thickness, not the 1px browser line limit.`
      },
      lineOpacity: {
        type: F.Number,
        title: `Line Opacity`,
        min: .1,
        max: 1,
        step: .05,
        defaultValue: .9
      },
      extrudeDepth: {
        type: F.Number,
        title: `Depth`,
        min: 2,
        max: 60,
        defaultValue: 22,
        description: `3D extrusion depth of the letterforms.`
      },
      bevel: {
        type: F.Boolean,
        title: `Bevel`,
        defaultValue: !0,
        description: `Adds the chamfered edge lines that give the wireframe its technical-drawing detail.`
      },
      shardSize: {
        type: F.Number,
        title: `Shard Size`,
        min: 4,
        max: 30,
        step: 1,
        defaultValue: 10,
        unit: `px`,
        description: `Length of the pieces the wireframe breaks into when it explodes. Smaller reads as finer debris but costs more geometry.`
      },
      rotateSpeed: {
        type: F.Number,
        title: `Orbit Speed`,
        min: -1.5,
        max: 1.5,
        step: .05,
        defaultValue: .4,
        unit: `rad/s`,
        description: `The camera pans 360° around the stationary text. Pauses while the visitor interacts, eases back in after ~2s. Negative reverses.`
      },
      startAngle: {
        type: F.Number,
        title: `Start Angle`,
        min: -180,
        max: 180,
        defaultValue: -20,
        unit: `°`,
        description: `Which side of the text the page opens on.`
      },
      cameraHeight: {
        type: F.Number,
        title: `Camera Height`,
        min: .05,
        max: .8,
        step: .01,
        defaultValue: .3,
        unit: `rad`,
        description: `Orbit elevation. Higher looks down more and shows more of the floor grid; lower is a dramatic near-horizon shot.`
      },
      mouseFollow: {
        type: F.Number,
        title: `Mouse Follow`,
        min: 0,
        max: .6,
        step: .02,
        defaultValue: .16,
        description: `Subtle camera tilt toward the cursor. 0 disables.`
      },
      dragSensitivity: {
        type: F.Number,
        title: `Drag Sensitivity`,
        min: .2,
        max: 3,
        step: .1,
        defaultValue: 1,
        description: `Visitors can grab and throw the orbit — release flings it with inertia. This scales how far a drag turns it.`
      },
      scrollPan: {
        type: F.Number,
        title: `Scroll Pan`,
        min: 0,
        max: 3,
        step: .1,
        defaultValue: 1,
        description: `Scrolling spins the orbit — built for 100vh pages where the document itself never scrolls. 0 disables.`
      },
      scrollFlex: {
        type: F.Number,
        title: `Scroll Flex`,
        min: 0,
        max: 300,
        defaultValue: 120,
        unit: `px`,
        description: `The text arches under scroll momentum and relaxes when it settles — the same flex behavior as the showcase cards.`
      },
      pressDepth: {
        type: F.Number,
        title: `Press Depth`,
        min: 0,
        max: 250,
        defaultValue: 80,
        unit: `px`,
        description: `The cursor paints an invisible trail; wherever it's hot, the wireframe is pressed away in 3D and heals as it fades. The primary cursor interaction.`
      },
      rippleAmount: {
        type: F.Number,
        title: `Ripple`,
        min: 0,
        max: 40,
        defaultValue: 12,
        unit: `px`,
        description: `3D sway of pressed lines while the trail is hot.`
      },
      warpStrength: {
        type: F.Number,
        title: `Warp`,
        min: 0,
        max: 3,
        step: .05,
        defaultValue: 1,
        description: `Faint liquid-glass smear inside the trail, layered over the 3D press. Keep it subtle — the press carries the interaction.`
      },
      mouseChroma: {
        type: F.Number,
        title: `Chroma`,
        min: 0,
        max: 1,
        step: .05,
        defaultValue: .35,
        description: `RGB split inside the warp. 0 for a clean smear.`
      },
      warpRadius: {
        type: F.Number,
        title: `Brush Size`,
        min: .05,
        max: .3,
        step: .01,
        defaultValue: .13,
        description: `Width of the trail the cursor paints.`
      },
      trailDecay: {
        type: F.Number,
        title: `Trail Decay`,
        min: .4,
        max: 3,
        step: .1,
        defaultValue: 1.2,
        unit: `s`,
        description: `How long the disturbance lingers along the cursor's path before healing.`
      },
      grainScale: {
        type: F.Number,
        title: `Grain`,
        min: 4,
        max: 60,
        step: 1,
        defaultValue: 18,
        description: `Frequency of the noise field driving the warp. Lower is broader and soupier, higher is finer.`
      },
      mouseSpeedReact: {
        type: F.Boolean,
        title: `React to Speed`,
        defaultValue: !0,
        description: `Cursor effects intensify with cursor speed — calm on a slow hover, aggressive on a fast swipe.`
      },
      explodeSpread: {
        type: F.Number,
        title: `Explode Spread`,
        min: .2,
        max: 2.5,
        step: .05,
        defaultValue: 1.1,
        description: `Press and hold anywhere to detonate the wireframe into its shards; it stays exploded — draggable — until release, then springs back. This scales how far the debris flies.`
      },
      explodeSnap: {
        type: F.Number,
        title: `Explode Snap`,
        min: 20,
        max: 400,
        defaultValue: 130,
        description: `Spring stiffness of the detonation and reform. Higher is snappier, lower is floatier.`
      },
      floorGrid: {
        type: F.Boolean,
        title: `Floor Grid`,
        defaultValue: !0,
        description: `The perspective floor under the text — it's what sells the camera's motion through the space.`
      },
      envOpacity: {
        type: F.Number,
        title: `Grid Opacity`,
        min: .03,
        max: .5,
        step: .01,
        defaultValue: .25,
        description: `Keep it a whisper — it should read as space, not decoration. Component from [LaunchNow Design](https://launchnow.design/?utm_source=codecomponent)`
      }
    })
  })))()
}
var Ze, Qe, $e, et, tt, nt, rt, it, at, Y, ot, X, st, ct, Z, lt, ut, Q, dt;

function ft() {
  return (ft = e((() => {
    f(), E(), v(), a(), Xe(), V(), W(), ge(), ce(), fe(), H(), me(), Le(), Ze = k(Ue), Qe = k(le), $e = k(R), et = k(_e), tt = x(h.section, {
      nodeId: `sbSF5EDpr`,
      override: B,
      scopeId: `Xq77wYGC1`
    }), nt = {
      EzoihsePv: `(max-width: 809.98px)`,
      NK_sE0n5p: `(min-width: 810px) and (max-width: 1199.98px)`,
      PhN81MndZ: `(min-width: 1200px)`
    }, rt = () => typeof document < `u`, it = [], at = `framer-S4eqZ`, Y = {
      EzoihsePv: `framer-v-10j6zqb`,
      NK_sE0n5p: `framer-v-p4ork5`,
      PhN81MndZ: `framer-v-wmpc5b`
    }, ot = (e, t, n) => e && t ? `position` : n, re(), X = (...e) => {
      for (let t of e)
        if (t && typeof t == `string`) return t
    }, st = {
      Desktop: `PhN81MndZ`,
      Phone: `EzoihsePv`,
      Tablet: `NK_sE0n5p`
    }, ct = ({
      value: e
    }) => I() ? null : /*#__PURE__*/ u(`style`, {
      dangerouslySetInnerHTML: {
        __html: e
      },
      "data-framer-html-style": ``
    }), Z = ({
      height: e,
      id: t,
      width: n,
      ...r
    }) => ({
      ...r,
      variant: st[r.variant] ?? r.variant ?? `PhN81MndZ`
    }), lt = /*#__PURE__*/ d(function(e, t) {
      let i = s(null),
        a = t ?? i,
        o = p(),
        {
          activeLocale: d,
          setLocale: f
        } = O(),
        m = ne(),
        {
          style: v,
          className: x,
          layoutId: ee,
          variant: S,
          ...C
        } = Z(e),
        te = r(() => Re({}, d), [d]);
      y(te);
      let [T, E] = L(S, nt, !1), k = b(at, he, z), A = c(N)?.isLayoutTemplate, M = !!c(g)?.transition?.layout, re = ot(A, M), F = () => !rt() || T !== `EzoihsePv`;
      return ie(), oe({}), /*#__PURE__*/ u(N.Provider, {
        value: {
          activeVariantId: T,
          humanReadableVariantMap: st,
          primaryVariantId: `PhN81MndZ`,
          variantClassNames: Y
        },
        children: /*#__PURE__*/ l(_, {
          id: ee ?? o,
          children: [ /*#__PURE__*/ u(ct, {
            value: `html body { background: var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247)); }`
          }), /*#__PURE__*/ u(h.div, {
            ...C,
            className: b(k, `framer-wmpc5b`, x),
            ref: a,
            style: {
              ...v
            },
            children: /*#__PURE__*/ u(tt, {
              className: `framer-1yf627i`,
              "data-framer-name": `404`,
              layout: re,
              children: /*#__PURE__*/ l(h.div, {
                className: `framer-rhemwq`,
                "data-framer-name": `Outer Container`,
                children: [ /*#__PURE__*/ u(j, {
                  children: /*#__PURE__*/ u(P, {
                    className: `framer-nwf2ea-container`,
                    isAuthoredByUser: !0,
                    isModuleExternal: !0,
                    nodeId: `fQKQjtpi8`,
                    rendersWithMotion: !0,
                    scopeId: `Xq77wYGC1`,
                    children: /*#__PURE__*/ u(Ue, {
                      bevel: !0,
                      cameraHeight: .25,
                      color: `var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))`,
                      dragSensitivity: .6,
                      envOpacity: .5,
                      explodeSnap: 89,
                      explodeSpread: 1.45,
                      extrudeDepth: 44,
                      floorGrid: !0,
                      fluidSize: 28,
                      fontFile: `https://framerusercontent.com/assets/UNBtynp7L2M6fruNPHYtc3EKUA.json`,
                      fontUrl: `https://unpkg.com/three@0.128.0/examples/fonts/helvetiker_bold.typeface.json`,
                      grainScale: 40,
                      height: `100%`,
                      id: `fQKQjtpi8`,
                      layoutId: `fQKQjtpi8`,
                      lineOpacity: 1,
                      lineWidth: 1.5,
                      maxSize: 600,
                      minSize: 128,
                      mouseChroma: .3,
                      mouseFollow: .4,
                      mouseSpeedReact: !0,
                      padding: 0,
                      pressDepth: 80,
                      rippleAmount: 12,
                      rotateSpeed: .3,
                      scrollFlex: 164,
                      scrollPan: 1,
                      shardSize: 10,
                      startAngle: -20,
                      style: {
                        height: `100%`,
                        width: `100%`
                      },
                      text: `404`,
                      trailDecay: 2,
                      warpRadius: .07,
                      warpStrength: .15,
                      width: `100%`
                    })
                  })
                }), /*#__PURE__*/ l(h.div, {
                  className: `framer-1d7xdhl`,
                  "data-framer-name": `Inside Container`,
                  children: [ /*#__PURE__*/ l(h.header, {
                    className: `framer-dru264`,
                    "data-framer-name": `Top`,
                    children: [ /*#__PURE__*/ u(D, {
                      breakpoint: T,
                      overrides: {
                        EzoihsePv: {
                          y: (m?.y || 0) + 0 + 0 + 3 + 0 + 33 + 0 + 0 + 0 + 0
                        }
                      },
                      children: /*#__PURE__*/ u(j, {
                        height: 19,
                        y: (m?.y || 0) + 0 + 0 + 3 + 0 + 33 + 0 + 0 + 0 + 89,
                        children: /*#__PURE__*/ u(P, {
                          className: `framer-120bpfb-container`,
                          nodeId: `jNXnb3Nub`,
                          rendersWithMotion: !0,
                          scopeId: `Xq77wYGC1`,
                          children: /*#__PURE__*/ u(D, {
                            breakpoint: T,
                            overrides: {
                              EzoihsePv: {
                                JIleRlVOF: `5px 0px 0px 0px`
                              }
                            },
                            children: /*#__PURE__*/ u(le, {
                              height: `100%`,
                              id: `jNXnb3Nub`,
                              JIleRlVOF: `0px 0px 0px 0px`,
                              layoutId: `jNXnb3Nub`,
                              LBZNZ9cgr: se,
                              width: `100%`
                            })
                          })
                        })
                      })
                    }), /*#__PURE__*/ u(D, {
                      breakpoint: T,
                      overrides: {
                        EzoihsePv: {
                          width: `max((min(max(min(${m?.width||`100vw`} - 6px, 1920px), 1px), 1920px) - 66px) / 2, 50px)`
                        }
                      },
                      children: /*#__PURE__*/ u(j, {
                        height: 197,
                        width: `calc(max((min(max(min(${m?.width||`100vw`} - 6px, 1920px), 1px), 1920px) - 126px) / 4, 50px) * 3 + 40px)`,
                        y: (m?.y || 0) + 0 + 0 + 3 + 0 + 33 + 0 + 0 + 0 + 0,
                        children: /*#__PURE__*/ u(P, {
                          className: `framer-7u2wnf-container`,
                          nodeId: `Y8PX4fdzY`,
                          rendersWithMotion: !0,
                          scopeId: `Xq77wYGC1`,
                          children: /*#__PURE__*/ u(D, {
                            breakpoint: T,
                            overrides: {
                              EzoihsePv: {
                                variant: X(`zylddWCaP`)
                              },
                              NK_sE0n5p: {
                                variant: X(`PtvC8qv5y`)
                              }
                            },
                            children: /*#__PURE__*/ u(R, {
                              height: `100%`,
                              id: `Y8PX4fdzY`,
                              layoutId: `Y8PX4fdzY`,
                              PebktKpFc: `var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))`,
                              style: {
                                height: `100%`,
                                width: `100%`
                              },
                              variant: X(`M83fGIck2`),
                              width: `100%`
                            })
                          })
                        })
                      })
                    })]
                  }), /*#__PURE__*/ l(h.div, {
                    className: `framer-1t5j36m`,
                    "data-framer-name": `Bottom`,
                    children: [F() && /*#__PURE__*/ u(w, {
                      links: [{
                        href: {
                          webPageId: `YlZkarAqD`
                        },
                        implicitPathVariables: void 0
                      }, {
                        href: {
                          webPageId: `YlZkarAqD`
                        },
                        implicitPathVariables: void 0
                      }],
                      children: e => /*#__PURE__*/ u(j, {
                        height: 20,
                        width: `max((min(max(min(${m?.width||`100vw`} - 6px, 1920px), 1px), 1920px) - 126px) / 4, 50px)`,
                        y: (m?.y || 0) + 0 + 0 + 3 + 0 + 33 + 0 + 901.55 + 0 + 6.45,
                        children: /*#__PURE__*/ u(P, {
                          className: `framer-106fh6v-container hidden-10j6zqb`,
                          nodeId: `wyFrHoxnc`,
                          rendersWithMotion: !0,
                          scopeId: `Xq77wYGC1`,
                          children: /*#__PURE__*/ u(D, {
                            breakpoint: T,
                            overrides: {
                              NK_sE0n5p: {
                                DUWgKh4ot: e[1],
                                variant: X(`oFaK7E_Aw`)
                              }
                            },
                            children: /*#__PURE__*/ u(_e, {
                              A0yGAsltz: `var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))`,
                              DUWgKh4ot: e[0],
                              FxpTCec8q: `Back Home`,
                              height: `100%`,
                              HVx8XMFQN: `var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))`,
                              id: `wyFrHoxnc`,
                              layoutId: `wyFrHoxnc`,
                              v2PkRDg7A: !1,
                              variant: X(`RVD7A0_PA`),
                              width: `100%`
                            })
                          })
                        })
                      })
                    }), /*#__PURE__*/ u(ae, {
                      __fromCanvasComponent: !0,
                      children: /*#__PURE__*/ u(n, {
                        children: /*#__PURE__*/ l(`h1`, {
                          className: `framer-styles-preset-1l3tbw0`,
                          "data-styles-preset": `cZ7bby0gR`,
                          dir: `auto`,
                          style: {
                            "--framer-text-alignment": `justify`,
                            "--framer-text-color": `var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))`
                          },
                          children: [`                      THIS PAGE NEVER MADE IT PAST WIREFRAMES. `, /*#__PURE__*/ u(`span`, {
                            style: {
                              "--framer-text-color": `var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))`
                            },
                            children: `THE REST OF THE SITE DID.`
                          })]
                        })
                      }),
                      className: `framer-1gt1tfz`,
                      fonts: [`Inter`],
                      verticalAlignment: `top`,
                      withExternalLayout: !0
                    }), /*#__PURE__*/ u(ae, {
                      __fromCanvasComponent: !0,
                      children: /*#__PURE__*/ u(n, {
                        children: /*#__PURE__*/ u(`p`, {
                          className: `framer-styles-preset-c95aba`,
                          "data-styles-preset": `x8g4OBmQ1`,
                          dir: `auto`,
                          style: {
                            "--framer-text-color": `var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))`
                          },
                          children: `hold to explode`
                        })
                      }),
                      className: `framer-1omldqy`,
                      fonts: [`Inter`],
                      verticalAlignment: `top`,
                      withExternalLayout: !0
                    })]
                  })]
                })]
              })
            })
          }), /*#__PURE__*/ u(`div`, {
            id: `overlay`
          })]
        })
      })
    }), ut = [`.framer-S4eqZ.framer-mnl6oc, .framer-S4eqZ .framer-mnl6oc { display: block; }`, `.framer-S4eqZ.framer-wmpc5b { -webkit-tap-highlight-color: rgba(0, 0, 0, 0); align-content: center; align-items: center; background-color: var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, #f7f7f7); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`, `.framer-S4eqZ .framer-1yf627i { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: 100vh; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 3px; position: relative; width: 100%; }`, `.framer-S4eqZ .framer-rhemwq { --corner-shape-fallback: 0.752; align-content: center; align-items: center; background-color: var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, #0d0d0d); border-bottom-left-radius: calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-bottom-right-radius: calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-top-left-radius: calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-top-right-radius: calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); corner-shape: superellipse(1.5); display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: 1px; justify-content: center; max-width: 1920px; overflow: var(--overflow-clip-fallback, clip); padding: 33px 0px 33px 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`, `.framer-S4eqZ .framer-nwf2ea-container { -webkit-user-select: none; bottom: 0px; cursor: pointer; flex: none; left: 0px; pointer-events: auto; position: absolute; right: 0px; top: 0px; user-select: none; z-index: 1; }`, `.framer-S4eqZ .framer-1d7xdhl { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 100%; justify-content: space-between; max-width: 1920px; overflow: visible; padding: 0px 33px 0px 33px; position: relative; width: 1px; }`, `.framer-S4eqZ .framer-dru264 { display: grid; flex: none; gap: 40px 20px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(4, minmax(50px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`, `.framer-S4eqZ .framer-120bpfb-container { align-self: center; flex: none; height: auto; justify-self: start; pointer-events: auto; position: relative; width: fit-content; }`, `.framer-S4eqZ .framer-7u2wnf-container { align-self: center; flex: none; grid-column: span 3; height: 1fr; justify-self: start; pointer-events: auto; position: relative; width: 100%; }`, `.framer-S4eqZ .framer-1t5j36m { display: grid; flex: none; gap: 20px; grid-auto-rows: min-content; grid-template-columns: repeat(4, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; pointer-events: auto; position: relative; width: 100%; z-index: 2; }`, `.framer-S4eqZ .framer-106fh6v-container { align-self: end; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`, `.framer-S4eqZ .framer-1gt1tfz { align-self: end; flex: none; grid-column: span 2; height: auto; justify-self: start; max-width: 350px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`, `.framer-S4eqZ .framer-1omldqy { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; align-self: end; flex: none; height: auto; justify-self: end; position: relative; white-space: pre; width: fit-content; }`, ...U, ...de, `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-S4eqZ.framer-wmpc5b { width: 810px; }}`, `@media (max-width: 809.98px) { .framer-S4eqZ.framer-wmpc5b { width: 390px; } .framer-S4eqZ .framer-1d7xdhl { padding: 0px 23px 0px 23px; } .framer-S4eqZ .framer-dru264 { grid-template-columns: repeat(2, minmax(50px, 1fr)); } .framer-S4eqZ .framer-120bpfb-container { align-self: start; } .framer-S4eqZ .framer-7u2wnf-container { grid-column: unset; } .framer-S4eqZ .framer-1t5j36m { grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-S4eqZ .framer-1gt1tfz { grid-column: span 1; justify-self: center; order: 2; } .framer-S4eqZ .framer-1omldqy { justify-self: start; order: 0; }}`], Q = T(lt, ut, `framer-S4eqZ`), Q.displayName = `Contact`, Q.defaultProps = {
      height: 800,
      width: 1200
    }, C(Q, [{
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
      }]
    }, ...Ze, ...Qe, ...$e, ...et, ...ee(pe), ...ee(ue)], {
      supportsExplicitInterCodegen: !0
    }), Q.loader = {
      load: (e, t) => M([() => S(le, {}, t), () => S(R, {}, t), () => S(_e, {}, t)], t)
    }, dt = {
      exports: {
        Props: {
          type: `tsType`,
          annotations: {
            framerContractVersion: `1`
          }
        },
        default: {
          type: `reactComponent`,
          name: `FramerXq77wYGC1`,
          slots: [],
          annotations: {
            framerComponentViewportWidth: `true`,
            framerColorSyntax: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerAutoSizeImages: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerImmutableVariables: `true`,
            framerScrollSections: `false`,
            framerResponsiveScreen: `true`,
            framerContractVersion: `1`,
            framerIntrinsicWidth: `1200`,
            framerIntrinsicHeight: `800`,
            framerDisplayContentsDiv: `false`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"NK_sE0n5p":{"layout":["fixed","auto"]},"EzoihsePv":{"layout":["fixed","auto"]}}}`
          }
        },
        queryParamNames: {
          type: `variable`,
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
ft();
export {
  dt as __FramerMetadata__, Q as
  default, it as queryParamNames
};
//# sourceMappingURL=2G6NJGLYB-I5i3aMi0aINtG2rPvQ1Qcmmh-2sDZsQtc.C3Ea9Zs_.mjs.map