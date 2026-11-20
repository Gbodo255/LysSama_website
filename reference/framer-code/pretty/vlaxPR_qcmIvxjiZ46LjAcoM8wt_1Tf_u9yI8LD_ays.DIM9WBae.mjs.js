import {
  t as e
} from "./rolldown-runtime.Bi-D_2cA.mjs";
import {
  B as t,
  F as n,
  M as r,
  P as i,
  R as a,
  T as o,
  _ as s,
  b as ee,
  j as c,
  l,
  o as u,
  p as te,
  s as d,
  w as f,
  y as p,
  z as m
} from "./react.DfujhmXs.mjs";
import {
  C as h,
  a as ne,
  r as re,
  t as g
} from "./motion.CM2UIHal.mjs";
import {
  Bt as _,
  Et as ie,
  F as ae,
  G as v,
  I as y,
  J as b,
  K as x,
  L as S,
  Lt as C,
  M as w,
  N as T,
  O as oe,
  Pt as E,
  Q as D,
  T as O,
  Tt as se,
  U as k,
  W as A,
  a as j,
  ct as ce,
  g as le,
  gt as ue,
  ht as de,
  i as fe,
  it as pe,
  jt as me,
  k as M,
  kt as he,
  m as ge,
  o as N,
  ot as _e,
  s as P,
  vt as ve,
  wt as ye,
  x as be,
  xt as xe,
  yt as Se
} from "./framer.DdqHlrxM.mjs";
import {
  B as Ce,
  F as we,
  I as Te,
  J as Ee,
  L as De,
  P as F,
  R as I,
  V as L,
  X as R,
  Y as Oe,
  Z as ke,
  _ as Ae,
  a as je,
  at as Me,
  g as Ne,
  i as Pe,
  it as Fe,
  nt as Ie,
  o as Le,
  r as Re,
  rt as ze,
  v as Be,
  y as Ve,
  z as He
} from "./toplevel-deps.BY2s547D.mjs";
import {
  n as Ue,
  t as We
} from "./Lenis.B0ikntHt.mjs";
import {
  i as Ge,
  n as Ke,
  r as qe,
  t as z
} from "./pgtQfyOCv.DMDfGpCr.mjs";
import {
  a as Je,
  i as Ye,
  n as Xe,
  o as Ze,
  r as Qe,
  t as B
} from "./TJ9zZTo1g.BDr4QkyX.mjs";
import {
  n as $e,
  t as V
} from "./v7Wd3N72W.Dzl5_5IZ.mjs";
import {
  i as et,
  r as tt,
  t as nt
} from "./BYYSbB_Xj.CQRm1Wxe.mjs";
import {
  C as rt,
  D as it,
  E as at,
  S as ot,
  T as H,
  _ as st,
  a as ct,
  b as lt,
  c as ut,
  d as dt,
  f as ft,
  g as pt,
  h as mt,
  i as ht,
  l as gt,
  m as _t,
  n as vt,
  o as yt,
  p as bt,
  r as xt,
  s as St,
  t as Ct,
  u as wt,
  v as Tt,
  w as Et,
  x as Dt,
  y as Ot
} from "./OEuBnrtYm.vkpI6R1-.mjs";
import {
  a as kt,
  i as At
} from "./WLBXMFnU8.aAIdj-mi.mjs";

function U(e) {
  let {
    url: n = ``,
    title: r = `Check this out!`,
    description: a = `Amazing content worth sharing`,
    platforms: o = [`facebook`, `twitter`, `linkedin`, `whatsapp`, `email`],
    layout: ee = `horizontal`,
    iconSize: c = 40,
    spacing: te = 12,
    backgroundColor: d = `#FFFFFF`,
    iconColor: f = `#000000`,
    hoverColor: h = `#0099FF`,
    borderColor: ne = `#000000`,
    buttonBackgroundColor: re = `#FFFFFF`,
    borderRadius: g = 8,
    buttonPadding: _ = 8,
    componentBorderColor: ie = `#EEEEEE`,
    boxShadow: ae,
    buttonBoxShadow: v,
    showCopyUrl: y = !1
  } = e, [b, x] = s(n), [S, C] = s(null), [w, T] = s(!1);
  p(() => {
    t !== void 0 && !n && i(() => x(t.location.href))
  }, [n]);
  let oe = {
      facebook: {
        name: `Facebook`,
        icon: `M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z`,
        shareUrl: (e, t) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(e)}&quote=${encodeURIComponent(t)}`
      },
      twitter: {
        name: `Twitter`,
        icon: `M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z`,
        shareUrl: (e, t) => `https://twitter.com/intent/tweet?url=${encodeURIComponent(e)}&text=${encodeURIComponent(t)}`
      },
      linkedin: {
        name: `LinkedIn`,
        icon: `M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z`,
        shareUrl: (e, t) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(e)}`
      },
      whatsapp: {
        name: `WhatsApp`,
        icon: `M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488`,
        shareUrl: (e, t) => `https://wa.me/?text=${encodeURIComponent(t+` `+e)}`
      },
      email: {
        name: `Email`,
        icon: `M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.91L12 10.09l9.455-6.269h.909c.904 0 1.636.732 1.636 1.636z`,
        shareUrl: (e, t, n) => `mailto:?subject=${encodeURIComponent(t)}&body=${encodeURIComponent(n+`

`+e)}`
      },
      pinterest: {
        name: `Pinterest`,
        icon: `M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z`,
        shareUrl: (e, t, n) => `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(e)}&description=${encodeURIComponent(t+` - `+n)}`
      },
      reddit: {
        name: `Reddit`,
        icon: `M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z`,
        shareUrl: (e, t) => `https://www.reddit.com/submit?url=${encodeURIComponent(e)}&title=${encodeURIComponent(t)}`
      }
    },
    E = e => {
      if (t === void 0) return;
      let n = oe[e];
      if (!n) return;
      let i = ``;
      i = e === `email` || e === `pinterest` ? n.shareUrl(b, r, a) : n.shareUrl(b, r), t.open(i, `_blank`, `width=600,height=400`)
    },
    D = async () => {
      if (t !== void 0) try {
        await m.clipboard.writeText(b), i(() => T(!0)), setTimeout(() => {
          i(() => T(!1))
        }, 2e3)
      } catch (e) {
        console.error(`Failed to copy URL:`, e)
      }
    }, O = () => {
      let e = {
        display: `flex`,
        gap: `${te}px`,
        alignItems: `center`,
        justifyContent: `flex-start`,
        width: `100%`,
        height: `100%`,
        padding: `0px`,
        backgroundColor: d,
        borderRadius: `${g}px`,
        border: `1px solid ${ie}`,
        overflow: `visible`,
        boxShadow: ae
      };
      return ee === `vertical` ? {
        ...e,
        flexDirection: `column`,
        alignItems: `center`
      } : e
    }, se = e => {
      let t = S === e;
      return {
        display: `flex`,
        flexDirection: `row`,
        alignItems: `center`,
        justifyContent: `center`,
        gap: `0`,
        padding: `${_}px`,
        borderRadius: `${g/2}px`,
        cursor: `pointer`,
        transition: `all 0.2s ease`,
        backgroundColor: t ? `${h}20` : re,
        border: `1px solid ${ne}`,
        minWidth: `${c+_*2}px`,
        minHeight: `${c+_*2}px`,
        boxShadow: v
      }
    };
  return /*#__PURE__*/ l(`div`, {
    style: O(),
    children: [o.map(e => {
      let t = oe[e];
      return t ? /*#__PURE__*/ u(`button`, {
        style: se(e),
        onClick: () => E(e),
        onMouseEnter: () => i(() => C(e)),
        onMouseLeave: () => i(() => C(null)),
        "aria-label": `Share on ${t.name}`,
        children: /*#__PURE__*/ u(`svg`, {
          width: c,
          height: c,
          viewBox: `0 0 24 24`,
          fill: S === e ? h : f,
          style: {
            transition: `fill 0.2s ease`
          },
          children: /*#__PURE__*/ u(`path`, {
            d: t.icon
          })
        })
      }, e) : null
    }), y && /*#__PURE__*/ u(`button`, {
      style: se(`copy`),
      onClick: D,
      onMouseEnter: () => i(() => C(`copy`)),
      onMouseLeave: () => i(() => C(null)),
      "aria-label": `Copy URL to clipboard`,
      children: /*#__PURE__*/ u(`svg`, {
        width: c,
        height: c,
        viewBox: `0 0 24 24`,
        fill: S === `copy` ? h : f,
        style: {
          transition: `fill 0.2s ease`
        },
        children: w ? /*#__PURE__*/ u(`path`, {
          d: `M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z`
        }) : /*#__PURE__*/ u(`path`, {
          d: `M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z`
        })
      })
    })]
  })
}

function jt() {
  return (jt = e((() => {
    a(), d(), o(), D(), T(U, {
      url: {
        type: P.String,
        title: `URL`,
        defaultValue: ``,
        placeholder: `Leave empty to use current page URL`
      },
      title: {
        type: P.String,
        title: `Title`,
        defaultValue: `Check this out!`,
        placeholder: `Share title`
      },
      description: {
        type: P.String,
        title: `Description`,
        defaultValue: `Amazing content worth sharing`,
        displayTextArea: !0
      },
      platforms: {
        type: P.Array,
        title: `Platforms`,
        control: {
          type: P.Enum,
          options: [`facebook`, `twitter`, `linkedin`, `whatsapp`, `email`, `pinterest`, `reddit`],
          optionTitles: [`Facebook`, `Twitter`, `LinkedIn`, `WhatsApp`, `Email`, `Pinterest`, `Reddit`]
        },
        defaultValue: [`facebook`, `twitter`, `linkedin`, `whatsapp`, `email`],
        maxCount: 7
      },
      layout: {
        type: P.Enum,
        title: `Layout`,
        options: [`horizontal`, `vertical`],
        optionTitles: [`Horizontal`, `Vertical`],
        defaultValue: `horizontal`,
        displaySegmentedControl: !0
      },
      spacing: {
        type: P.Number,
        title: `Spacing`,
        defaultValue: 8,
        min: 4,
        max: 32,
        step: 1,
        unit: `px`
      },
      backgroundColor: {
        type: P.Color,
        title: `Background`,
        defaultValue: `#FAFAFA`
      },
      componentBorderColor: {
        type: P.Color,
        title: `Border`,
        defaultValue: `#E8E8E8`
      },
      borderRadius: {
        type: P.Number,
        title: `Border Radius`,
        defaultValue: 16,
        min: 0,
        max: 24,
        step: 1,
        unit: `px`
      },
      boxShadow: {
        type: P.BoxShadow,
        title: `Box Shadow`,
        defaultValue: {
          color: `#000000`,
          x: 0,
          y: 32,
          blur: .25,
          spread: .5
        }
      },
      iconSize: {
        type: P.Number,
        title: `Icon Size`,
        defaultValue: 22,
        min: 4,
        max: 48,
        step: 2,
        unit: `px`
      },
      buttonPadding: {
        type: P.Number,
        title: `Button Padding`,
        defaultValue: 12,
        min: 0,
        max: 20,
        step: 1,
        unit: `px`
      },
      iconColor: {
        type: P.Color,
        title: `Icon Color`,
        defaultValue: `#2B2B2B`
      },
      hoverColor: {
        type: P.Color,
        title: `Hover Color`,
        defaultValue: `#969696`
      },
      borderColor: {
        type: P.Color,
        title: `Button Border`,
        defaultValue: `#E8E8E8`
      },
      buttonBackgroundColor: {
        type: P.Color,
        title: `Button Background`,
        defaultValue: `#FFFFFF`
      },
      buttonBoxShadow: {
        type: P.BoxShadow,
        title: `Button Box Shadow`,
        defaultValue: {
          color: `#000000`,
          x: 0,
          y: 32,
          blur: .25,
          spread: .5
        }
      },
      showCopyUrl: {
        type: P.Boolean,
        title: `Show Copy URL`,
        defaultValue: !0,
        enabledTitle: `Show`,
        disabledTitle: `Hide`,
        description: `Component from [LaunchNow Design](https://launchnow.design/?utm_source=codecomponent)`
      }
    })
  })))()
}
var Mt, Nt, Pt, Ft;

function It() {
  return (It = e((() => {
    D(), y.loadFonts([`GF;Mona Sans-variable-regular`, `Inter-Black`, `Inter-BlackItalic`, `Inter-BoldItalic`]), Mt = [{
      defaultValue: 100,
      maxValue: 125,
      minValue: 75,
      name: `Width`,
      tag: `wdth`
    }, {
      defaultValue: 200,
      maxValue: 900,
      minValue: 200,
      name: `Weight`,
      tag: `wght`
    }], Nt = [{
      explicitInter: !0,
      fonts: [{
        cssFamilyName: `Mona Sans Variable`,
        openType: !0,
        source: `google`,
        style: `normal`,
        uiFamilyName: `Mona Sans`,
        url: `https://fonts.gstatic.com/s/monasans/v4/o-0IIpQmx24alC5A4PNb5z5Ba_2c7A.woff2`,
        variationAxes: Mt,
        weight: `400`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
        url: `https://framerusercontent.com/assets/mkY5Sgyq51ik0AMrSBwhm9DJg.woff2`,
        weight: `900`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
        url: `https://framerusercontent.com/assets/X5hj6qzcHUYv7h1390c8Rhm6550.woff2`,
        weight: `900`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+1F00-1FFF`,
        url: `https://framerusercontent.com/assets/gQhNpS3tN86g8RcVKYUUaKt2oMQ.woff2`,
        weight: `900`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0370-03FF`,
        url: `https://framerusercontent.com/assets/cugnVhSraaRyANCaUtI5FV17wk.woff2`,
        weight: `900`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
        url: `https://framerusercontent.com/assets/5HcVoGak8k5agFJSaKa4floXVu0.woff2`,
        weight: `900`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
        url: `https://framerusercontent.com/assets/rZ5DdENNqIdFTIyQQiP5isO7M.woff2`,
        weight: `900`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `normal`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
        url: `https://framerusercontent.com/assets/P2Bw01CtL0b9wqygO0sSVogWbo.woff2`,
        weight: `900`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `italic`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
        url: `https://framerusercontent.com/assets/05KsVHGDmqXSBXM4yRZ65P8i0s.woff2`,
        weight: `900`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `italic`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
        url: `https://framerusercontent.com/assets/ky8ovPukK4dJ1Pxq74qGhOqCYI.woff2`,
        weight: `900`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `italic`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+1F00-1FFF`,
        url: `https://framerusercontent.com/assets/vvNSqIj42qeQ2bvCRBIWKHscrc.woff2`,
        weight: `900`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `italic`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0370-03FF`,
        url: `https://framerusercontent.com/assets/3ZmXbBKToJifDV9gwcifVd1tEY.woff2`,
        weight: `900`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `italic`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
        url: `https://framerusercontent.com/assets/FNfhX3dt4ChuLJq2PwdlxHO7PU.woff2`,
        weight: `900`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `italic`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
        url: `https://framerusercontent.com/assets/gcnfba68tfm7qAyrWRCf9r34jg.woff2`,
        weight: `900`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `italic`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
        url: `https://framerusercontent.com/assets/efTfQcBJ53kM2pB1hezSZ3RDUFs.woff2`,
        weight: `900`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `italic`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
        url: `https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
        weight: `700`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `italic`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
        url: `https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
        weight: `700`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `italic`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+1F00-1FFF`,
        url: `https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
        weight: `700`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `italic`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0370-03FF`,
        url: `https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
        weight: `700`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `italic`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
        url: `https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
        weight: `700`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `italic`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
        url: `https://framerusercontent.com/assets/ia3uin3hQWqDrVloC1zEtYHWw.woff2`,
        weight: `700`
      }, {
        cssFamilyName: `Inter`,
        source: `framer`,
        style: `italic`,
        uiFamilyName: `Inter`,
        unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
        url: `https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
        weight: `700`
      }]
    }], Pt = [`.framer-0dCId .framer-styles-preset-ax8na9:not(.rich-text-wrapper), .framer-0dCId .framer-styles-preset-ax8na9.rich-text-wrapper h1 { --framer-font-family: "Mona Sans Variable", "Mona Sans Variable Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'ss07' on; --framer-font-size: 80px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: "wdth" 75, "wght" 700; --framer-font-weight: 400; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: -0.02em; --framer-line-height: 90%; --framer-paragraph-spacing: 0px; --framer-text-alignment: left; --framer-text-color: var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, #050505); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }`, `@media (max-width: 1199px) and (min-width: 810px) { .framer-0dCId .framer-styles-preset-ax8na9:not(.rich-text-wrapper), .framer-0dCId .framer-styles-preset-ax8na9.rich-text-wrapper h1 { --framer-font-family: "Mona Sans Variable", "Mona Sans Variable Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'ss07' on; --framer-font-size: 60px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: "wdth" 75, "wght" 700; --framer-font-weight: 400; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: -0.02em; --framer-line-height: 90%; --framer-paragraph-spacing: 0px; --framer-text-alignment: left; --framer-text-color: var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, #050505); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`, `@media (max-width: 809px) and (min-width: 0px) { .framer-0dCId .framer-styles-preset-ax8na9:not(.rich-text-wrapper), .framer-0dCId .framer-styles-preset-ax8na9.rich-text-wrapper h1 { --framer-font-family: "Mona Sans Variable", "Mona Sans Variable Placeholder", sans-serif; --framer-font-family-bold: "Inter", sans-serif; --framer-font-family-bold-italic: "Inter", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'ss07' on; --framer-font-size: 45px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: "wdth" 75, "wght" 700; --framer-font-weight: 400; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 700; --framer-letter-spacing: -0.02em; --framer-line-height: 90%; --framer-paragraph-spacing: 0px; --framer-text-alignment: left; --framer-text-color: var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, #050505); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; } }`], Ft = `framer-0dCId`
  })))()
}
var Lt, Rt, W, zt, G, Bt, K, Vt, Ht, Ut, Wt, Gt, Kt, qt, Jt, Yt, Xt, Zt, Qt, q, $t, en, J, tn, nn, Y, X, rn, an, on, sn, cn, ln, un, dn, fn, Z, Q, pn, mn, hn, gn, _n, vn, yn, bn, xn, Sn, Cn, wn, Tn, En, Dn, On, kn, An, $, jn;

function Mn() {
  return (Mn = e((() => {
    d(), D(), g(), o(), jt(), Ue(), He(), De(), we(), Ke(), Xe(), $e(), et(), qe(), at(), Me(), Et(), lt(), Ve(), pt(), ft(), ut(), ht(), Le(), It(), ke(), Ze(), L(), At(), Lt = k(We), Rt = k(Te), W = _(le), zt = k(V), G = _(N), Bt = k(I), K = _(C(M)), Vt = k(B), Ht = _(C(N)), Ut = C(M), Wt = k(U), Gt = k(z), Kt = k(F), qt = {
      j11qKK0L3: `(max-width: 809.98px)`,
      wkcy4Et_p: `(min-width: 1200px)`,
      zCedCevuQ: `(min-width: 810px) and (max-width: 1199.98px)`
    }, Jt = () => typeof document < `u`, Yt = [], Xt = `framer-eegra`, Zt = {
      j11qKK0L3: `framer-v-1dpavhp`,
      wkcy4Et_p: `framer-v-163lh2b`,
      zCedCevuQ: `framer-v-1atwfmo`
    }, Qt = (e, t, n) => e && t ? `position` : n, pe(), q = e => typeof e == `object` && e && typeof e.src == `string` ? e : typeof e == `string` ? {
      src: e
    } : void 0, $t = (e, t) => `translate(-50%, -50%) ${t}`, en = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: {
        damping: 25,
        delay: .9,
        mass: .3,
        stiffness: 120,
        type: `spring`
      },
      x: 0,
      y: 0
    }, J = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1.3,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0
    }, tn = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1.02,
      skewX: 0,
      skewY: 0,
      transition: {
        damping: 25,
        delay: .8,
        mass: .3,
        stiffness: 120,
        type: `spring`
      },
      x: 0,
      y: 0
    }, nn = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: {
        bounce: .1,
        delay: 1.3,
        duration: 1.2,
        type: `spring`
      },
      x: 0,
      y: 0
    }, Y = {
      opacity: .001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0
    }, X = (...e) => {
      for (let t of e)
        if (t && typeof t == `string`) return t
    }, rn = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: {
        bounce: .1,
        delay: 1.4,
        duration: 1.2,
        type: `spring`
      },
      x: 0,
      y: 0
    }, an = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: {
        bounce: .1,
        delay: 1.5,
        duration: 1.2,
        type: `spring`
      },
      x: 0,
      y: 0
    }, on = (e, t, n) => {
      if (typeof e != `string`) return ``;
      let r = new Date(e);
      if (isNaN(r.getTime())) return ``;
      let i = `en-US`;
      try {
        return r.toLocaleString(n || i, t)
      } catch {
        return r.toLocaleString(i, t)
      }
    }, sn = {
      dateStyle: `medium`,
      timeZone: `UTC`
    }, cn = (e, t) => on(e, sn, t), ln = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0
    }, un = {
      bounce: .1,
      delay: 0,
      duration: 1.2,
      type: `spring`
    }, dn = (e, t) => typeof e == `string` && typeof t == `string` ? t + e : typeof e == `string` ? e : typeof t == `string` ? t : ``, fn = (e, t) => typeof e == `string` && typeof t == `string` ? e + t : typeof e == `string` ? e : typeof t == `string` ? t : ``, Z = {
      opacity: .001,
      rotate: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 15
    }, Q = {
      delay: .1,
      duration: .6,
      ease: [.215, .61, .355, 1],
      type: `tween`
    }, pn = {
      effect: Z,
      repeat: !1,
      startDelay: 1.1,
      threshold: 0,
      tokenization: `line`,
      transition: Q,
      trigger: `onInView`,
      type: `appear`
    }, mn = {
      effect: Z,
      repeat: !1,
      startDelay: .2,
      threshold: 0,
      tokenization: `line`,
      transition: Q,
      trigger: `onInView`,
      type: `appear`
    }, hn = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: {
        damping: 25,
        delay: 1,
        mass: .3,
        stiffness: 120,
        type: `spring`
      },
      x: 0,
      y: 0
    }, gn = {
      opacity: .001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 40
    }, _n = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 40
    }, vn = {
      damping: 25,
      delay: 0,
      mass: .3,
      stiffness: 120,
      type: `spring`
    }, yn = {
      effect: Z,
      repeat: !1,
      startDelay: .1,
      threshold: 0,
      tokenization: `line`,
      transition: Q,
      trigger: `onInView`,
      type: `appear`
    }, bn = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: {
        bounce: .1,
        delay: 1.2,
        duration: 1.2,
        type: `spring`
      },
      x: 0,
      y: 0
    }, xn = {
      bounce: .1,
      delay: .3,
      duration: 1.2,
      type: `spring`
    }, Sn = {
      effect: Z,
      repeat: !1,
      startDelay: .1,
      threshold: 0,
      tokenization: `line`,
      transition: {
        delay: .1,
        duration: .8,
        ease: [.215, .61, .355, 1],
        type: `tween`
      },
      trigger: `onInView`,
      type: `appear`
    }, Cn = {
      damping: 25,
      delay: .2,
      mass: .3,
      stiffness: 120,
      type: `spring`
    }, wn = {
      Desktop: `wkcy4Et_p`,
      Phone: `j11qKK0L3`,
      Tablet: `zCedCevuQ`
    }, Tn = ({
      value: e
    }) => xe() ? null : /*#__PURE__*/ u(`style`, {
      dangerouslySetInnerHTML: {
        __html: e
      },
      "data-framer-html-style": ``
    }), En = e => ({
      from: {
        constraint: {
          left: {
            collection: `WLBXMFnU8`,
            name: `pMnA5s4V2`,
            type: `Identifier`
          },
          operator: `==`,
          right: {
            collection: `pMnA5s4V2`,
            name: `id`,
            type: `Identifier`
          },
          type: `BinaryOperation`
        },
        left: {
          alias: `WLBXMFnU8`,
          data: nt,
          type: `Collection`
        },
        right: {
          alias: `pMnA5s4V2`,
          data: Ge,
          type: `Collection`
        },
        type: `LeftJoin`
      },
      select: [{
        collection: `WLBXMFnU8`,
        name: `e2iT0TEOk`,
        type: `Identifier`
      }, {
        collection: `WLBXMFnU8`,
        name: `fjIGNgJXm`,
        type: `Identifier`
      }, {
        collection: `WLBXMFnU8`,
        name: `uaSqZPqyE`,
        type: `Identifier`
      }, {
        collection: `WLBXMFnU8`,
        name: `lykBqV4LS`,
        type: `Identifier`
      }, {
        collection: `WLBXMFnU8`,
        name: `o4SXCAnQ0`,
        type: `Identifier`
      }, {
        collection: `WLBXMFnU8`,
        name: `YjPZVq2pH`,
        type: `Identifier`
      }, {
        collection: `WLBXMFnU8`,
        name: `QRCJgS8I0`,
        type: `Identifier`
      }, {
        alias: `pMnA5s4V2.hkQFS_ysL`,
        collection: `pMnA5s4V2`,
        name: `hkQFS_ysL`,
        type: `Identifier`
      }, {
        alias: `pMnA5s4V2.lZApwOqNQ`,
        collection: `pMnA5s4V2`,
        name: `lZApwOqNQ`,
        type: `Identifier`
      }, {
        alias: `pMnA5s4V2.CeVTjauwn`,
        collection: `pMnA5s4V2`,
        name: `CeVTjauwn`,
        type: `Identifier`
      }],
      where: e
    }), Dn = ({
      height: e,
      id: t,
      width: n,
      ...r
    }) => ({
      ...r,
      variant: wn[r.variant] ?? r.variant ?? `wkcy4Et_p`
    }), On = {
      alignment: `center`,
      component: F,
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
      variant: `gq6hjYdVi`
    }, kn = /*#__PURE__*/ te(function(e, t) {
      let i = ee(null),
        a = t ?? i,
        o = f(),
        {
          activeLocale: s,
          setLocale: te
        } = se(),
        d = de(),
        p = ue(),
        [m] = he(En(b(p, `WLBXMFnU8`)));
      if (!m) throw new be(`No data matches path variables: ${JSON.stringify(p)}`);
      let {
        style: g,
        className: _,
        layoutId: v,
        variant: y,
        e2iT0TEOk: S = m.e2iT0TEOk,
        fjIGNgJXm: C = m.fjIGNgJXm,
        uaSqZPqyE: w = m.uaSqZPqyE,
        lykBqV4LS: T = m.lykBqV4LS ?? ``,
        o4SXCAnQ0: E = m.o4SXCAnQ0 ?? ``,
        YjPZVq2pH: D = m.YjPZVq2pH ?? ``,
        QRCJgS8I0: k = m.QRCJgS8I0 ?? ``,
        pMnA5s4V2_hkQFS_ysL: A = m[`pMnA5s4V2.hkQFS_ysL`],
        pMnA5s4V2_lZApwOqNQ: ce = m[`pMnA5s4V2.lZApwOqNQ`] ?? ``,
        pMnA5s4V2_CeVTjauwn: le = m[`pMnA5s4V2.CeVTjauwn`] ?? ``,
        ...pe
      } = Dn(e), _e = r(() => kt({
        e2iT0TEOk: S,
        lykBqV4LS: T,
        o4SXCAnQ0: E
      }, s), [T, S, E, s]);
      ie(_e);
      let [P, xe] = Se(y, qt, !1), we = ae(Xt, Ee, Ft, Qe, Ie, Ct, ct, Dt, Re, gt, st, bt, Ne), De = c(ge)?.isLayoutTemplate, F = !!c(ne)?.transition?.layout, L = Qt(De, F), R = () => !Jt() || P !== `j11qKK0L3`;
      me();
      let Oe = ye(),
        ke = cn(C, Oe),
        Ae = fn(dn(tt.uaSqZPqyE?.(w, s), `(`), `)`);
      return ve({
        a8ccln: On
      }), /*#__PURE__*/ u(ge.Provider, {
        value: {
          activeVariantId: P,
          humanReadableVariantMap: wn,
          primaryVariantId: `wkcy4Et_p`,
          variantClassNames: Zt
        },
        children: /*#__PURE__*/ l(re, {
          id: v ?? o,
          children: [ /*#__PURE__*/ u(Tn, {
            value: `html body { background: rgb(255, 255, 255); }`
          }), /*#__PURE__*/ l(h.div, {
            ...pe,
            className: ae(we, `framer-163lh2b`, _),
            ref: a,
            style: {
              ...g
            },
            children: [ /*#__PURE__*/ u(j, {
              children: /*#__PURE__*/ u(N, {
                className: `framer-1177xuw-container`,
                "data-framer-name": `Lenis Smooth Scroll`,
                isAuthoredByUser: !0,
                isModuleExternal: !0,
                layout: L,
                name: `Lenis Smooth Scroll`,
                nodeId: `DQPK1I7xu`,
                scopeId: `WLBXMFnU8`,
                children: /*#__PURE__*/ u(We, {
                  height: `100%`,
                  id: `DQPK1I7xu`,
                  infinite: !1,
                  intensity: 8,
                  layoutId: `DQPK1I7xu`,
                  name: `Lenis Smooth Scroll`,
                  orientation: `vertical`,
                  smooth: !0,
                  width: `100%`
                })
              })
            }), /*#__PURE__*/ l(h.main, {
              className: `framer-1vg7lwo`,
              "data-framer-name": `Main`,
              layout: L,
              children: [R() && /*#__PURE__*/ u(j, {
                height: 800,
                y: (d?.y || 0) + 0 + 0 + 0,
                children: /*#__PURE__*/ u(N, {
                  className: `framer-3xbfd8-container hidden-1dpavhp`,
                  nodeId: `sbNraCVEp`,
                  scopeId: `WLBXMFnU8`,
                  children: /*#__PURE__*/ u(Te, {
                    height: `100%`,
                    id: `sbNraCVEp`,
                    layoutId: `sbNraCVEp`,
                    width: `100%`
                  })
                })
              }), /*#__PURE__*/ l(`div`, {
                className: `framer-1qf3ckv`,
                "data-framer-name": `Content`,
                children: [ /*#__PURE__*/ l(`div`, {
                  className: `framer-h6sr5n`,
                  "data-framer-name": `Article`,
                  children: [ /*#__PURE__*/ l(`div`, {
                    className: `framer-l5ij9y`,
                    "data-framer-name": `Article Image Container`,
                    children: [ /*#__PURE__*/ u(`div`, {
                      className: `framer-1r2jzgf`,
                      "data-framer-name": `BG Outer Container`,
                      children: /*#__PURE__*/ l(`div`, {
                        className: `framer-1tq3yyt`,
                        "data-framer-name": `BG`,
                        children: [ /*#__PURE__*/ u(`div`, {
                          className: `framer-1auuop6`,
                          "data-framer-name": `Dark overlay`
                        }), /*#__PURE__*/ u(O, {
                          breakpoint: P,
                          overrides: {
                            j11qKK0L3: {
                              background: {
                                alt: `Black and white silhouette framed by outstretched hands`,
                                fit: `fill`,
                                intrinsicHeight: 1350,
                                intrinsicWidth: 2400,
                                loading: x((d?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 3 + 244.5),
                                pixelHeight: 1200,
                                pixelWidth: 904,
                                sizes: `calc(max(max(${d?.width||`100vw`}, 1px) - 6px, 1px) / 2)`,
                                ...q(S)
                              }
                            },
                            zCedCevuQ: {
                              background: {
                                alt: `Black and white silhouette framed by outstretched hands`,
                                fit: `fill`,
                                intrinsicHeight: 1350,
                                intrinsicWidth: 2400,
                                loading: x((d?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 3 + 369),
                                pixelHeight: 1200,
                                pixelWidth: 904,
                                ...q(S)
                              }
                            }
                          },
                          children: /*#__PURE__*/ u(W, {
                            animate: en,
                            background: {
                              alt: `Black and white silhouette framed by outstretched hands`,
                              fit: `fill`,
                              intrinsicHeight: 1350,
                              intrinsicWidth: 2400,
                              loading: x((d?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 3 + 304),
                              pixelHeight: 1200,
                              pixelWidth: 904,
                              ...q(S)
                            },
                            className: `framer-1pw0cc0`,
                            "data-framer-appear-id": `1pw0cc0`,
                            "data-framer-name": `Middle Image`,
                            draggable: `false`,
                            fitImageDimension: `height`,
                            initial: J,
                            optimized: !0,
                            transformTemplate: $t
                          })
                        }), /*#__PURE__*/ u(O, {
                          breakpoint: P,
                          overrides: {
                            j11qKK0L3: {
                              background: {
                                alt: `Black and white silhouette framed by outstretched hands`,
                                fit: `fill`,
                                intrinsicHeight: 1350,
                                intrinsicWidth: 2400,
                                loading: x((d?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 3 + 0),
                                pixelHeight: 1200,
                                pixelWidth: 904,
                                sizes: `calc(max(max(${d?.width||`100vw`}, 1px) - 6px, 1px) + 0.5px)`,
                                ...q(S)
                              }
                            }
                          },
                          children: /*#__PURE__*/ u(W, {
                            animate: tn,
                            background: {
                              alt: `Black and white silhouette framed by outstretched hands`,
                              fit: `fill`,
                              intrinsicHeight: 1350,
                              intrinsicWidth: 2400,
                              loading: x((d?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 3 + 0),
                              pixelHeight: 1200,
                              pixelWidth: 904,
                              ...q(S)
                            },
                            className: `framer-54cq2o`,
                            "data-framer-appear-id": `54cq2o`,
                            "data-framer-name": `BG Image`,
                            draggable: `false`,
                            initial: J,
                            optimized: !0,
                            style: {
                              scale: 1.02
                            }
                          })
                        })]
                      })
                    }), /*#__PURE__*/ u(oe, {
                      links: [{
                        href: {
                          webPageId: `HbZ4lEZbG`
                        },
                        implicitPathVariables: void 0
                      }, {
                        href: {
                          webPageId: `HbZ4lEZbG`
                        },
                        implicitPathVariables: void 0
                      }, {
                        href: {
                          webPageId: `HbZ4lEZbG`
                        },
                        implicitPathVariables: void 0
                      }],
                      children: e => /*#__PURE__*/ u(O, {
                        breakpoint: P,
                        overrides: {
                          j11qKK0L3: {
                            y: (d?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 81
                          }
                        },
                        children: /*#__PURE__*/ u(j, {
                          height: 20,
                          y: (d?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 33,
                          children: /*#__PURE__*/ u(G, {
                            animate: nn,
                            className: `framer-vd6m2l-container`,
                            "data-framer-appear-id": `vd6m2l`,
                            initial: Y,
                            nodeId: `ziOKhwPs5`,
                            optimized: !0,
                            rendersWithMotion: !0,
                            scopeId: `WLBXMFnU8`,
                            children: /*#__PURE__*/ u(O, {
                              breakpoint: P,
                              overrides: {
                                j11qKK0L3: {
                                  DUWgKh4ot: e[2],
                                  variant: X(`oFaK7E_Aw`)
                                },
                                zCedCevuQ: {
                                  DUWgKh4ot: e[1],
                                  variant: X(`oFaK7E_Aw`)
                                }
                              },
                              children: /*#__PURE__*/ u(V, {
                                A0yGAsltz: `var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))`,
                                DUWgKh4ot: e[0],
                                FxpTCec8q: `Back to the journal`,
                                height: `100%`,
                                HVx8XMFQN: `var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))`,
                                id: `ziOKhwPs5`,
                                layoutId: `ziOKhwPs5`,
                                v2PkRDg7A: !1,
                                variant: X(`RVD7A0_PA`),
                                width: `100%`
                              })
                            })
                          })
                        })
                      })
                    })]
                  }), /*#__PURE__*/ l(`div`, {
                    className: `framer-k3jgni`,
                    "data-framer-name": `Right`,
                    children: [ /*#__PURE__*/ u(`section`, {
                      className: `framer-12itxgr`,
                      "data-framer-name": `Article Info`,
                      children: /*#__PURE__*/ l(`div`, {
                        className: `framer-10eegt`,
                        "data-framer-name": `Inside Container`,
                        children: [ /*#__PURE__*/ l(`header`, {
                          className: `framer-oboj65`,
                          "data-framer-name": `Top`,
                          children: [R() && /*#__PURE__*/ u(j, {
                            height: 19,
                            y: (d?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 33 + 0 + 0,
                            children: /*#__PURE__*/ u(G, {
                              animate: rn,
                              className: `framer-1hsgk09-container hidden-1dpavhp`,
                              "data-framer-appear-id": `1hsgk09`,
                              initial: Y,
                              nodeId: `aIgQRb42M`,
                              optimized: !0,
                              rendersWithMotion: !0,
                              scopeId: `WLBXMFnU8`,
                              children: /*#__PURE__*/ u(I, {
                                height: `100%`,
                                id: `aIgQRb42M`,
                                JIleRlVOF: `0px 0px 0px 0px`,
                                layoutId: `aIgQRb42M`,
                                LBZNZ9cgr: Ce,
                                width: `100%`
                              })
                            })
                          }), /*#__PURE__*/ u(O, {
                            breakpoint: P,
                            overrides: {
                              j11qKK0L3: {
                                __framer__animate: {
                                  transition: un
                                },
                                __framer__animateOnce: !0,
                                __framer__enter: ln,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: .5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                animate: void 0,
                                initial: void 0,
                                optimized: void 0
                              }
                            },
                            children: /*#__PURE__*/ u(K, {
                              __fromCanvasComponent: !0,
                              animate: an,
                              children: /*#__PURE__*/ u(n, {
                                children: /*#__PURE__*/ u(`p`, {
                                  className: `framer-styles-preset-c95aba`,
                                  "data-styles-preset": `x8g4OBmQ1`,
                                  dir: `auto`,
                                  children: `Apr 10, 2026`
                                })
                              }),
                              className: `framer-mxg65r`,
                              "data-framer-appear-id": `mxg65r`,
                              fonts: [`Inter`],
                              initial: Y,
                              optimized: !0,
                              text: /*#__PURE__*/ u(`time`, {
                                dateTime: C,
                                children: ke
                              }),
                              verticalAlignment: `top`,
                              withExternalLayout: !0
                            })
                          })]
                        }), /*#__PURE__*/ l(`div`, {
                          className: `framer-1dg35ov`,
                          "data-framer-name": `Article Info`,
                          children: [ /*#__PURE__*/ l(`div`, {
                            className: `framer-1o27bn4`,
                            "data-framer-name": `Title / Category`,
                            children: [ /*#__PURE__*/ u(O, {
                              breakpoint: P,
                              overrides: {
                                j11qKK0L3: {
                                  effect: mn
                                }
                              },
                              children: /*#__PURE__*/ u(M, {
                                __fromCanvasComponent: !0,
                                children: /*#__PURE__*/ u(n, {
                                  children: /*#__PURE__*/ u(`p`, {
                                    className: `framer-styles-preset-c95aba`,
                                    "data-styles-preset": `x8g4OBmQ1`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))`
                                    },
                                    children: `(Risk Management)`
                                  })
                                }),
                                className: `framer-12cy8up`,
                                "data-framer-name": `Category`,
                                effect: pn,
                                fonts: [`Inter`],
                                text: Ae,
                                verticalAlignment: `top`,
                                withExternalLayout: !0
                              })
                            }), /*#__PURE__*/ u(O, {
                              breakpoint: P,
                              overrides: {
                                j11qKK0L3: {
                                  __framer__animate: {
                                    transition: vn
                                  },
                                  __framer__animateOnce: !0,
                                  __framer__enter: _n,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: .5,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  animate: void 0,
                                  initial: void 0,
                                  optimized: void 0
                                }
                              },
                              children: /*#__PURE__*/ u(K, {
                                __fromCanvasComponent: !0,
                                animate: hn,
                                children: /*#__PURE__*/ u(n, {
                                  children: /*#__PURE__*/ u(`h1`, {
                                    className: `framer-styles-preset-ax8na9`,
                                    "data-styles-preset": `wl6G8Kaje`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`
                                    },
                                    children: `Awards don't build brands.`
                                  })
                                }),
                                className: `framer-ust23z`,
                                "data-framer-appear-id": `ust23z`,
                                "data-framer-name": `Title`,
                                fonts: [`Inter`],
                                initial: gn,
                                optimized: !0,
                                text: T,
                                verticalAlignment: `top`,
                                withExternalLayout: !0
                              })
                            })]
                          }), /*#__PURE__*/ u(O, {
                            breakpoint: P,
                            overrides: {
                              j11qKK0L3: {
                                effect: yn
                              }
                            },
                            children: /*#__PURE__*/ u(M, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ u(n, {
                                children: /*#__PURE__*/ u(`p`, {
                                  className: `framer-styles-preset-10r2g7l`,
                                  "data-styles-preset": `YXSEQA_bn`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))`
                                  },
                                  children: `Why Mira takes fewer projects than most studios our size, and what it does for the work.`
                                })
                              }),
                              className: `framer-1sun04h`,
                              "data-framer-name": `Description`,
                              effect: pn,
                              fonts: [`Inter`],
                              text: E,
                              verticalAlignment: `top`,
                              withExternalLayout: !0
                            })
                          })]
                        }), /*#__PURE__*/ u(`div`, {
                          className: `framer-1vgsstc`,
                          "data-framer-name": `Bottom`,
                          children: /*#__PURE__*/ u(O, {
                            breakpoint: P,
                            overrides: {
                              j11qKK0L3: {
                                y: (d?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 750 + 0 + 0 + 0 + 23 + 293 + 50
                              }
                            },
                            children: /*#__PURE__*/ u(j, {
                              height: 36,
                              y: (d?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 33 + 848 + 50,
                              children: /*#__PURE__*/ u(O, {
                                breakpoint: P,
                                overrides: {
                                  j11qKK0L3: {
                                    __framer__animate: {
                                      transition: xn
                                    },
                                    __framer__animateOnce: !0,
                                    __framer__enter: ln,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: .5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    animate: void 0,
                                    initial: void 0,
                                    optimized: void 0
                                  }
                                },
                                children: /*#__PURE__*/ u(Ht, {
                                  animate: bn,
                                  className: `framer-1r9wpld-container`,
                                  "data-framer-appear-id": `1r9wpld`,
                                  initial: Y,
                                  nodeId: `uDf1ycDTe`,
                                  optimized: !0,
                                  rendersWithMotion: !0,
                                  scopeId: `WLBXMFnU8`,
                                  children: /*#__PURE__*/ u(B, {
                                    DrFk2xWcP: `var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))`,
                                    height: `100%`,
                                    Hn4u0xYJo: ce,
                                    id: `uDf1ycDTe`,
                                    layoutId: `uDf1ycDTe`,
                                    MmOfoxxQp: `var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))`,
                                    pD3_MH1BP: q(A),
                                    WD_o27LiR: fn(le, `, Mira`),
                                    width: `100%`
                                  })
                                })
                              })
                            })
                          })
                        })]
                      })
                    }), /*#__PURE__*/ u(`article`, {
                      className: `framer-1q4xdhe`,
                      "data-framer-name": `Article Content`,
                      children: /*#__PURE__*/ l(`div`, {
                        className: `framer-4d8yer`,
                        "data-framer-name": `Inside Container`,
                        children: [ /*#__PURE__*/ u(M, {
                          __fromCanvasComponent: !0,
                          children: /*#__PURE__*/ u(n, {
                            children: /*#__PURE__*/ u(`h2`, {
                              className: `framer-styles-preset-1l3tbw0`,
                              "data-styles-preset": `cZ7bby0gR`,
                              dir: `auto`,
                              style: {
                                "--framer-text-alignment": `justify`
                              },
                              children: `                           We have deployed over 50 automation systems across industries. About 15% of automation projects fail to deliver expected results. Here is what goes wrong and how to avoid these expensive mistakes before you start.`
                            })
                          }),
                          className: `framer-2y3bst`,
                          "data-framer-name": `Intro Header`,
                          effect: Sn,
                          fonts: [`Inter`],
                          text: D,
                          verticalAlignment: `top`,
                          withExternalLayout: !0
                        }), /*#__PURE__*/ l(`div`, {
                          className: `framer-kwv38q`,
                          "data-framer-name": `Content / Share`,
                          children: [ /*#__PURE__*/ u(fe, {
                            presets: {
                              "module:NEd4VmDdsxM3StIUbddO/Ef2JVpwhNW0UBYra6TeS/YouTube.js:Youtube": it.NE_K6lUq1,
                              "module:pVk4QsoHxASnVtUBp6jr/7eCYIL3dnkBSjjSduYQU/CodeBlock.js:default": it.ACUbuFKPd
                            },
                            children: /*#__PURE__*/ u(Ut, {
                              __framer__animate: {
                                transition: Cn
                              },
                              __framer__animateOnce: !0,
                              __framer__enter: _n,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __fromCanvasComponent: !0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              children: k,
                              className: `framer-1tn62t5`,
                              "data-framer-name": `Content`,
                              fonts: [`Inter`],
                              stylesPresetsClassNames: {
                                a: `framer-styles-preset-7b2rcp`,
                                blockquote: `framer-styles-preset-p6i9mt`,
                                h2: `framer-styles-preset-a7jmun`,
                                h3: `framer-styles-preset-lrueyv`,
                                img: `framer-styles-preset-bfvq69`,
                                p: `framer-styles-preset-zesxvw`,
                                table: `framer-styles-preset-h4j97n`
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0
                            })
                          }), /*#__PURE__*/ u(`div`, {
                            className: `framer-18wmlps`,
                            "data-framer-name": `Divider`
                          }), /*#__PURE__*/ l(`div`, {
                            className: `framer-1gay0sq`,
                            "data-framer-name": `Share`,
                            children: [ /*#__PURE__*/ u(M, {
                              __fromCanvasComponent: !0,
                              children: /*#__PURE__*/ u(n, {
                                children: /*#__PURE__*/ u(`p`, {
                                  className: `framer-styles-preset-k5mxv3`,
                                  "data-styles-preset": `JFK15baIL`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))`
                                  },
                                  children: `Share`
                                })
                              }),
                              className: `framer-fxu2zp`,
                              "data-framer-name": `Category`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0
                            }), /*#__PURE__*/ u(j, {
                              children: /*#__PURE__*/ u(N, {
                                className: `framer-16w2iyz-container`,
                                "data-code-component-plugin-id": `84d4c1`,
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                nodeId: `HDMJibCQH`,
                                scopeId: `WLBXMFnU8`,
                                children: /*#__PURE__*/ u(U, {
                                  backgroundColor: `rgba(242, 243, 245, 0)`,
                                  borderColor: `rgba(43, 43, 43, 0)`,
                                  borderRadius: 0,
                                  boxShadow: ``,
                                  buttonBackgroundColor: `rgba(18, 18, 18, 0)`,
                                  buttonBoxShadow: ``,
                                  buttonPadding: 0,
                                  componentBorderColor: `rgba(232, 232, 232, 0)`,
                                  description: E,
                                  height: `100%`,
                                  hoverColor: `var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(209, 255, 0))`,
                                  iconColor: `var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))`,
                                  iconSize: 17,
                                  id: `HDMJibCQH`,
                                  layout: `horizontal`,
                                  layoutId: `HDMJibCQH`,
                                  platforms: [`twitter`, `linkedin`, `email`],
                                  showCopyUrl: !0,
                                  spacing: 10,
                                  title: T,
                                  url: ``,
                                  width: `100%`
                                })
                              })
                            })]
                          })]
                        })]
                      })
                    })]
                  })]
                }), /*#__PURE__*/ u(O, {
                  breakpoint: P,
                  overrides: {
                    j11qKK0L3: {
                      width: `max(${d?.width||`100vw`}, 1px)`,
                      y: (d?.y || 0) + 0 + 0 + 0 + 0 + 1545.45
                    }
                  },
                  children: /*#__PURE__*/ u(j, {
                    height: 890,
                    y: (d?.y || 0) + 0 + 0 + 0 + 0 + 1400.45,
                    children: /*#__PURE__*/ u(N, {
                      className: `framer-1nqy1fo-container`,
                      nodeId: `HxIL854BZ`,
                      scopeId: `WLBXMFnU8`,
                      children: /*#__PURE__*/ u(O, {
                        breakpoint: P,
                        overrides: {
                          j11qKK0L3: {
                            variant: X(`nPNyXOlRD`)
                          },
                          zCedCevuQ: {
                            variant: X(`RBcJngtnI`)
                          }
                        },
                        children: /*#__PURE__*/ u(z, {
                          height: `100%`,
                          id: `HxIL854BZ`,
                          layoutId: `HxIL854BZ`,
                          LV3vwBpcw: `More articles.`,
                          style: {
                            width: `100%`
                          },
                          t9lqsaHqm: `a8ccln`,
                          variant: X(`w3iaWhFRY`),
                          width: `100%`,
                          xdREUJQGI: 0,
                          yE5ak_Kio: T
                        })
                      })
                    })
                  })
                })]
              })]
            })]
          }), /*#__PURE__*/ u(`div`, {
            id: `overlay`
          })]
        })
      })
    }), An = [`.framer-eegra.framer-1fdr78l, .framer-eegra .framer-1fdr78l { display: block; }`, `.framer-eegra.framer-163lh2b { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`, `.framer-eegra .framer-1177xuw-container { flex: none; height: auto; left: 50%; position: absolute; top: 0px; transform: translateX(-50%); width: auto; z-index: 1; }`, `.framer-eegra .framer-1vg7lwo { align-content: flex-start; align-items: flex-start; background-color: var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, #ffffff); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; z-index: 1; }`, `.framer-eegra .framer-3xbfd8-container, .framer-eegra .framer-16w2iyz-container { flex: none; height: auto; position: relative; width: auto; }`, `.framer-eegra .framer-1qf3ckv { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`, `.framer-eegra .framer-h6sr5n { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`, `.framer-eegra .framer-l5ij9y { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: 100vh; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 33px 0px 0px 33px; position: sticky; top: 0px; width: 1px; z-index: 1; }`, `.framer-eegra .framer-1r2jzgf { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 15px; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 3px; position: absolute; right: 0px; top: 0px; }`, `.framer-eegra .framer-1tq3yyt { --corner-shape-fallback: 0.752; border-bottom-left-radius: calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-bottom-right-radius: calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-top-left-radius: calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-top-right-radius: calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); corner-shape: superellipse(1.5); flex: 1 0 0px; gap: 15px; height: 100%; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`, `.framer-eegra .framer-1auuop6 { background-color: var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, #0d0d0d); bottom: 0px; cursor: default; flex: none; left: 0px; opacity: 0.65; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: absolute; right: 0px; top: 0px; z-index: 1; }`, `.framer-eegra .framer-1pw0cc0 { --corner-shape-fallback: 0.752; border-bottom-left-radius: calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-bottom-right-radius: calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-top-left-radius: calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-top-right-radius: calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); corner-shape: superellipse(1.5); flex: none; gap: 15px; height: auto; left: 50%; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: absolute; top: 50%; transform: translate(-50%, -50%); width: 50%; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`, `.framer-eegra .framer-54cq2o { -webkit-filter: blur(5px); bottom: 0px; filter: blur(5px); flex: none; gap: 15px; left: 0px; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-effect-override, transform); }`, `.framer-eegra .framer-vd6m2l-container { flex: none; height: auto; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`, `.framer-eegra .framer-k3jgni { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`, `.framer-eegra .framer-12itxgr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`, `.framer-eegra .framer-10eegt { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1920px; min-height: 100vh; overflow: visible; padding: 33px; position: relative; width: 1px; z-index: 1; }`, `.framer-eegra .framer-oboj65 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1920px; overflow: visible; padding: 0px 0px 50px 0px; pointer-events: auto; position: relative; width: 100%; z-index: 1; }`, `.framer-eegra .framer-1hsgk09-container, .framer-eegra .framer-1r9wpld-container { flex: none; height: auto; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`, `.framer-eegra .framer-mxg65r { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`, `.framer-eegra .framer-1dg35ov { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`, `.framer-eegra .framer-1o27bn4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`, `.framer-eegra .framer-12cy8up { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`, `.framer-eegra .framer-ust23z { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 450px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`, `.framer-eegra .framer-1sun04h { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-text-wrap-override: balance; flex: none; height: auto; max-width: 320px; position: relative; width: 100%; }`, `.framer-eegra .framer-1vgsstc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 50px 0px 0px 0px; position: relative; width: 100%; }`, `.framer-eegra .framer-1q4xdhe { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 60px 0px 0px 0px; position: relative; width: 100%; }`, `.framer-eegra .framer-4d8yer { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1920px; overflow: visible; padding: 0px 33px 0px 33px; position: relative; width: 100%; }`, `.framer-eegra .framer-2y3bst { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 500px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`, `.framer-eegra .framer-kwv38q { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; max-width: 500px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`, `.framer-eegra .framer-1tn62t5 { --framer-paragraph-spacing: 30px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`, `.framer-eegra .framer-18wmlps { background-color: var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2)); flex: none; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`, `.framer-eegra .framer-1gay0sq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`, `.framer-eegra .framer-fxu2zp { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`, `.framer-eegra .framer-1nqy1fo-container { flex: none; height: auto; position: relative; width: 100%; }`, ...Oe, ...Pt, ...Ye, ...ze, ...vt, ...yt, ...ot, ...Pe, ...wt, ...Tt, ..._t, ...Ae, `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-eegra.framer-163lh2b { width: 810px; } .framer-eegra .framer-3xbfd8-container { order: 0; } .framer-eegra .framer-1qf3ckv { order: 1; }}`, `@media (max-width: 809.98px) { .framer-eegra.framer-163lh2b { width: 390px; } .framer-eegra .framer-h6sr5n { flex-direction: column; } .framer-eegra .framer-l5ij9y { flex: none; height: 75vh; padding: 81px 0px 0px 23px; position: relative; top: unset; width: 100%; } .framer-eegra .framer-k3jgni { flex: none; width: 100%; } .framer-eegra .framer-10eegt { min-height: unset; padding: 23px; } .framer-eegra .framer-oboj65 { gap: 40px 20px; justify-content: center; } .framer-eegra .framer-mxg65r, .framer-eegra .framer-ust23z, .framer-eegra .framer-1r9wpld-container { will-change: unset; } .framer-eegra .framer-1q4xdhe { padding: 30px 0px 0px 0px; } .framer-eegra .framer-4d8yer { padding: 0px 23px 0px 23px; }}`], $ = E(kn, An, `framer-eegra`), $.displayName = `Blog`, $.defaultProps = {
      height: 3945.5,
      width: 1200
    }, w($, [{
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
    }, ...Lt, ...Rt, ...zt, ...Bt, ...Vt, ...Wt, ...Gt, ...Kt, ...v(R), ...v(Nt), ...v(Je), ...v(Fe), ...v(xt), ...v(St), ...v(rt), ...v(je), ...v(dt), ...v(Ot), ...v(mt), ...v(Be), ...H?.ACUbuFKPd ? A(H?.ACUbuFKPd) : [], ...H?.NE_K6lUq1 ? A(H?.NE_K6lUq1) : []], {
      supportsExplicitInterCodegen: !0
    }), $.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = t.priority;
        return ce([() => _e.get(En(b(t.pathVariables, `WLBXMFnU8`)), n, r).preload(), () => S(Te, {}, t), () => S(V, {}, t), () => S(I, {}, t), () => S(B, {}, t), () => S(z, {}, t)], t)
      }
    }, jn = {
      exports: {
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
        default: {
          type: `reactComponent`,
          name: `FramerWLBXMFnU8`,
          slots: [],
          annotations: {
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"zCedCevuQ":{"layout":["fixed","auto"]},"j11qKK0L3":{"layout":["fixed","auto"]}}}`,
            framerComponentViewportWidth: `true`,
            framerColorSyntax: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerImmutableVariables: `true`,
            framerIntrinsicHeight: `3945.5`,
            framerDisplayContentsDiv: `false`,
            framerResponsiveScreen: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerIntrinsicWidth: `1200`,
            framerScrollSections: `false`,
            framerContractVersion: `1`,
            framerAutoSizeImages: `true`
          }
        },
        __FramerMetadata__: {
          type: `variable`
        }
      }
    }
  })))()
}
Mn();
export {
  jn as __FramerMetadata__, $ as
  default, Yt as queryParamNames
};
//# sourceMappingURL=vlaxPR_qcmIvxjiZ46LjAcoM8wt_1Tf_u9yI8LD_ays.DIM9WBae.mjs.map