import {
  t as e
} from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  F as t,
  M as n,
  T as r,
  b as i,
  j as a,
  o,
  p as s,
  s as c,
  w as l
} from "./react.DfujhmXs.mjs";
import {
  C as u,
  a as d,
  r as f,
  t as p
} from "./motion.CM2UIHal.mjs";
import {
  F as m,
  M as h,
  N as g,
  Nt as _,
  Pt as v,
  Q as y,
  Tt as b,
  ht as x,
  s as S
} from "./framer.DdqHlrxM.mjs";

function C(e, ...t) {
  let n = {};
  return t?.forEach(t => t && Object.assign(n, e[t])), n
}
var w, T, E, D, O, k, A, j, M, N;

function P() {
  return (P = e((() => {
    c(), y(), p(), r(), w = [`hdHzsrpyF`, `OMSvRHidC`, `b5cbcgrAD`, `iLlY2rby8`], T = `framer-sz7Kf`, E = {
      b5cbcgrAD: `framer-v-14rrenl`,
      hdHzsrpyF: `framer-v-t5kp41`,
      iLlY2rby8: `framer-v-dtr87q`,
      OMSvRHidC: `framer-v-skgkib`
    }, D = ({
      value: e,
      children: t
    }) => {
      let r = a(d),
        i = e ?? r.transition,
        s = n(() => ({
          ...r,
          transition: i
        }), [JSON.stringify(i)]);
      return /*#__PURE__*/ o(d.Provider, {
        value: s,
        children: t
      })
    }, O = {
      "Hidden Horizontal": `b5cbcgrAD`,
      "Hidden Vertical": `hdHzsrpyF`,
      "Show Horizontal": `iLlY2rby8`,
      "Show Vertical": `OMSvRHidC`
    }, k = u.create(t), A = {
      Center: `center`,
      End: `flex-end`,
      Start: `flex-start`
    }, j = ({
      height: e,
      id: t,
      startPosition: n,
      transition: r,
      width: i,
      ...a
    }) => ({
      ...a,
      variant: O[a.variant] ?? a.variant ?? `hdHzsrpyF`,
      X9qsDHjof: r ?? a.X9qsDHjof ?? {
        delay: 0,
        duration: 1,
        ease: [.56, .22, .05, .99],
        type: `tween`
      },
      Xtnx8GRRA: A[n] ?? n ?? a.Xtnx8GRRA ?? `flex-start`
    }), M = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`), N = v( /* @__PURE__ */ s(function(e, t) {
      let n = i(null),
        r = t ?? n,
        a = l(),
        {
          activeLocale: s,
          setLocale: c
        } = b();
      x();
      let {
        style: d,
        className: p,
        layoutId: h,
        variant: g,
        Xtnx8GRRA: v,
        X9qsDHjof: y,
        ...S
      } = j(e), {
        baseVariant: O,
        classNames: A,
        clearLoadingGesture: N,
        gestureHandlers: P,
        gestureVariant: F,
        isLoading: I,
        setGestureState: L,
        setVariant: R,
        variants: z
      } = _({
        cycleOrder: w,
        defaultVariant: `hdHzsrpyF`,
        ref: r,
        variant: g,
        variantClassNames: E
      }), B = M(e, z), V = m(T);
      return /*#__PURE__*/ o(f, {
        id: h ?? a,
        children: /*#__PURE__*/ o(k, {
          animate: z,
          initial: !1,
          children: /*#__PURE__*/ o(D, {
            value: y,
            children: /*#__PURE__*/ o(u.div, {
              ...S,
              ...P,
              className: m(V, `framer-t5kp41`, p, A),
              "data-framer-name": `Hidden Vertical`,
              layoutDependency: B,
              layoutId: `hdHzsrpyF`,
              ref: r,
              style: {
                "--yvgczs": v,
                ...d
              },
              ...C({
                b5cbcgrAD: {
                  "data-framer-name": `Hidden Horizontal`
                },
                iLlY2rby8: {
                  "data-framer-name": `Show Horizontal`
                },
                OMSvRHidC: {
                  "data-framer-name": `Show Vertical`
                }
              }, O, F),
              children: /*#__PURE__*/ o(u.div, {
                className: `framer-5nyabp`,
                "data-framer-name": `Line`,
                layoutDependency: B,
                layoutId: `s7C4Van1U`,
                style: {
                  backgroundColor: `var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))`
                },
                variants: {
                  iLlY2rby8: {
                    backgroundColor: `var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))`
                  },
                  OMSvRHidC: {
                    backgroundColor: `var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))`
                  }
                }
              })
            })
          })
        })
      })
    }), [`.framer-sz7Kf.framer-8ylnuy, .framer-sz7Kf .framer-8ylnuy { display: block; }`, `.framer-sz7Kf.framer-t5kp41 { align-content: var(--yvgczs); align-items: var(--yvgczs); display: flex; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: 200px; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`, `.framer-sz7Kf .framer-5nyabp { flex: none; height: 0%; overflow: hidden; position: relative; width: 1px; }`, `.framer-sz7Kf.framer-v-skgkib .framer-5nyabp { height: 100%; }`, `.framer-sz7Kf.framer-v-14rrenl.framer-t5kp41, .framer-sz7Kf.framer-v-dtr87q.framer-t5kp41 { height: 1px; width: 200px; }`, `.framer-sz7Kf.framer-v-14rrenl .framer-5nyabp { height: 1px; width: 0%; }`, `.framer-sz7Kf.framer-v-dtr87q .framer-5nyabp { height: 1px; width: 100%; }`], `framer-sz7Kf`), N.displayName = `Animated Line`, N.defaultProps = {
      height: 200,
      width: 1
    }, g(N, {
      variant: {
        options: [`hdHzsrpyF`, `OMSvRHidC`, `b5cbcgrAD`, `iLlY2rby8`],
        optionTitles: [`Hidden Vertical`, `Show Vertical`, `Hidden Horizontal`, `Show Horizontal`],
        title: `Variant`,
        type: S.Enum
      },
      Xtnx8GRRA: {
        defaultValue: `flex-start`,
        options: [`flex-start`, `center`, `flex-end`],
        optionTitles: [`Start`, `Center`, `End`],
        title: `Start Position`,
        type: S.Enum
      },
      X9qsDHjof: {
        defaultValue: {
          delay: 0,
          duration: 1,
          ease: [.56, .22, .05, .99],
          type: `tween`
        },
        description: `Controls the animation timing and easing.`,
        title: `Transition`,
        type: S.Transition
      }
    }), h(N, [{
      explicitInter: !0,
      fonts: []
    }], {
      supportsExplicitInterCodegen: !0
    })
  })))()
}
export {
  P as n, N as t
};
//# sourceMappingURL=Eu60T7thi.P98_SUm8.mjs.map