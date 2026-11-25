import {
  t as e
} from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  F as t,
  M as n,
  T as r,
  b as i,
  j as a,
  l as o,
  o as s,
  p as c,
  s as l,
  w as u
} from "./react.DfujhmXs.mjs";
import {
  C as d,
  a as f,
  r as p,
  t as m
} from "./motion.CM2UIHal.mjs";
import {
  F as h,
  K as g,
  M as _,
  N as v,
  Nt as y,
  Pt as b,
  Q as x,
  Tt as S,
  U as C,
  a as w,
  g as T,
  ht as E,
  it as D,
  j as ee,
  q as O,
  s as k
} from "./framer.DdqHlrxM.mjs";
import {
  n as A,
  t as j
} from "./Video.CCIhSoyO.mjs";

function M(e, ...t) {
  let n = {};
  return t?.forEach(t => t && Object.assign(n, e[t])), n
}
var N, P, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X;

function Z() {
  return (Z = e((() => {
    l(), x(), m(), r(), A(), N = C(j), P = O(j), F = [`Uh95rRMl7`, `DV6oTfLLg`], I = `framer-83xqy`, L = {
      DV6oTfLLg: `framer-v-1shcg12`,
      Uh95rRMl7: `framer-v-j4z1zy`
    }, D(), R = {
      damping: 25,
      delay: .8,
      mass: .3,
      stiffness: 120,
      type: `spring`
    }, z = {
      delay: .1,
      duration: .5,
      ease: [.4, 0, .2, 1],
      type: `tween`
    }, B = ({
      value: e,
      children: t
    }) => {
      let r = a(f),
        i = e ?? r.transition,
        o = n(() => ({
          ...r,
          transition: i
        }), [JSON.stringify(i)]);
      return /*#__PURE__*/ s(f.Provider, {
        value: o,
        children: t
      })
    }, V = e => !e, H = e => typeof e == `object` && e && typeof e.src == `string` ? e : typeof e == `string` ? {
      src: e
    } : void 0, U = e => Array.isArray(e) ? e.length > 0 : e != null && e !== ``, W = (e, t) => e ? `URL` : `Upload`, G = e => typeof e == `object` && e && typeof e.src == `string` ? e.src : typeof e == `string` ? e : void 0, K = {
      "Hidden Mask": `DV6oTfLLg`,
      Revealed: `Uh95rRMl7`
    }, q = d.create(t), J = ({
      height: e,
      id: t,
      mainImage: n,
      showVideo: r,
      videoFILe: i,
      videoURL: a,
      width: o,
      ...s
    }) => ({
      ...s,
      GJGpI3mea: i ?? s.GJGpI3mea,
      hSvSqBGxe: r ?? s.hSvSqBGxe ?? !1,
      qPIgziuGZ: a ?? s.qPIgziuGZ ?? ``,
      variant: K[s.variant] ?? s.variant ?? `Uh95rRMl7`,
      waDb7XNr5: n ?? s.waDb7XNr5
    }), Y = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`), X = b( /* @__PURE__ */ c(function(e, t) {
      let n = i(null),
        r = t ?? n,
        a = u(),
        {
          activeLocale: c,
          setLocale: l
        } = S(),
        f = E(),
        {
          style: m,
          className: _,
          layoutId: v,
          variant: b,
          waDb7XNr5: x,
          hSvSqBGxe: C,
          qPIgziuGZ: D,
          GJGpI3mea: O,
          ...k
        } = J(e),
        {
          baseVariant: A,
          classNames: N,
          clearLoadingGesture: P,
          gestureHandlers: K,
          gestureVariant: X,
          isLoading: Z,
          setGestureState: te,
          setVariant: ne,
          variants: Q
        } = y({
          cycleOrder: F,
          defaultVariant: `Uh95rRMl7`,
          ref: r,
          variant: b,
          variantClassNames: L
        }),
        $ = Y(e, Q),
        re = h(I),
        ie = V(C);
      return /*#__PURE__*/ s(p, {
        id: v ?? a,
        children: /*#__PURE__*/ s(q, {
          animate: Q,
          initial: !1,
          children: /*#__PURE__*/ s(B, {
            value: R,
            children: /*#__PURE__*/ s(d.div, {
              ...k,
              ...K,
              className: h(re, `framer-j4z1zy`, _, N),
              "data-framer-name": `Revealed`,
              layoutDependency: $,
              layoutId: `Uh95rRMl7`,
              ref: r,
              style: {
                "--corner-shape-fallback": .752,
                backgroundColor: `var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))`,
                borderBottomLeftRadius: `calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                borderBottomRightRadius: `calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                borderTopLeftRadius: `calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                borderTopRightRadius: `calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                cornerShape: `superellipse(1.5)`,
                ...m
              },
              ...M({
                DV6oTfLLg: {
                  "data-framer-name": `Hidden Mask`
                }
              }, A, X),
              children: /*#__PURE__*/ o(d.div, {
                className: `framer-rbevx0`,
                "data-framer-name": `BG`,
                layoutDependency: $,
                layoutId: `UtmKMXBJJ`,
                style: {
                  mask: `linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add`,
                  rotate: 0,
                  scale: 1,
                  WebkitMask: `linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add`
                },
                variants: {
                  DV6oTfLLg: {
                    mask: `linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add`,
                    rotate: 4,
                    scale: 1.5,
                    WebkitMask: `linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add`
                  }
                },
                children: [ /*#__PURE__*/ s(B, {
                  value: z,
                  children: /*#__PURE__*/ s(d.div, {
                    className: `framer-1q48sik`,
                    "data-framer-name": `Dark overlay`,
                    layoutDependency: $,
                    layoutId: `IxEgwFmZV`,
                    style: {
                      backgroundColor: `var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))`,
                      opacity: .65
                    }
                  })
                }), ie !== !1 && /*#__PURE__*/ s(T, {
                  background: {
                    alt: ``,
                    fit: `fill`,
                    intrinsicHeight: 1350,
                    intrinsicWidth: 2400,
                    loading: g((f?.y || 0) + (0 + ((f?.height || 794) - 0 - ((f?.height || 794) - 0) * 1) / 2) + (0 + (((f?.height || 794) - 0) * 1 - 0 - (((f?.height || 794) - 0) * 1 - 0) * 1) / 2)),
                    pixelHeight: 1350,
                    pixelWidth: 2400,
                    sizes: `max(${f?.width||`100vw`}, 1px)`,
                    ...H(x)
                  },
                  className: `framer-ios0bt`,
                  "data-framer-name": `BG Image`,
                  draggable: `false`,
                  layoutDependency: $,
                  layoutId: `XonToACPQ`,
                  style: {
                    "--corner-shape-fallback": .752,
                    borderBottomLeftRadius: `calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                    borderBottomRightRadius: `calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                    borderTopLeftRadius: `calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                    borderTopRightRadius: `calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                    cornerShape: `superellipse(1.5)`
                  }
                }), C !== !1 && /*#__PURE__*/ s(w, {
                  children: /*#__PURE__*/ s(ee, {
                    className: `framer-xsb1yl-container`,
                    "data-framer-name": `Uploaded Video`,
                    isAuthoredByUser: !0,
                    isModuleExternal: !0,
                    layoutDependency: $,
                    layoutId: `T4peiD0cM-container`,
                    name: `Uploaded Video`,
                    nodeId: `T4peiD0cM`,
                    rendersWithMotion: !0,
                    scopeId: `cM8Lf1CeK`,
                    children: /*#__PURE__*/ s(j, {
                      backgroundColor: `rgba(0, 0, 0, 0)`,
                      borderRadius: 0,
                      bottomLeftRadius: 0,
                      bottomRightRadius: 0,
                      controls: !1,
                      height: `100%`,
                      id: `T4peiD0cM`,
                      isMixedBorderRadius: !1,
                      layoutId: `T4peiD0cM`,
                      loop: !0,
                      muted: !0,
                      name: `Uploaded Video`,
                      objectFit: `cover`,
                      playing: !0,
                      poster: G(x),
                      posterEnabled: !0,
                      srcFile: O,
                      srcType: W(U(D), c),
                      srcUrl: D,
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
                })]
              })
            })
          })
        })
      })
    }), [`.framer-83xqy.framer-1tfh0uf, .framer-83xqy .framer-1tfh0uf { display: block; }`, `.framer-83xqy.framer-j4z1zy { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: 794px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1135px; will-change: var(--framer-will-change-override, transform); }`, `.framer-83xqy .framer-rbevx0 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: 100%; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`, `.framer-83xqy .framer-1q48sik { bottom: 0px; cursor: default; flex: none; left: 0px; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: absolute; right: 0px; top: 0px; z-index: 1; }`, `.framer-83xqy .framer-ios0bt { flex: 1 0 0px; gap: 15px; height: 100%; image-rendering: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`, `.framer-83xqy .framer-xsb1yl-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }`], `framer-83xqy`), X.displayName = `Project Hero BG`, X.defaultProps = {
      height: 794,
      width: 1135
    }, v(X, {
      variant: {
        options: [`Uh95rRMl7`, `DV6oTfLLg`],
        optionTitles: [`Revealed`, `Hidden Mask`],
        title: `Variant`,
        type: k.Enum
      },
      waDb7XNr5: {
        description: `Choose the primary image used in the project introduction.`,
        title: `Main Image`,
        type: k.ResponsiveImage
      },
      hSvSqBGxe: {
        defaultValue: !1,
        description: `Switches the media treatment from a still image to video.`,
        title: `Show Video`,
        type: k.Boolean
      },
      onhSvSqBGxeChange: {
        changes: `hSvSqBGxe`,
        type: k.ChangeHandler
      },
      qPIgziuGZ: {
        defaultValue: ``,
        description: `Recommended: host the video externally (CDN or storage bucket) to save your site’s bandwidth. If set, this takes priority over an uploaded file.`,
        title: `Video URL`,
        type: k.String
      },
      onqPIgziuGZChange: {
        changes: `qPIgziuGZ`,
        type: k.ChangeHandler
      },
      GJGpI3mea: P?.srcFile && {
        ...P.srcFile,
        description: void 0,
        hidden: void 0,
        title: `Video FIle`
      },
      onGJGpI3meaChange: {
        changes: `GJGpI3mea`,
        type: k.ChangeHandler
      }
    }), _(X, [{
      explicitInter: !0,
      fonts: []
    }, ...N], {
      supportsExplicitInterCodegen: !0
    })
  })))()
}
export {
  Z as n, X as t
};
//# sourceMappingURL=cM8Lf1CeK.DR507ZJR.mjs.map