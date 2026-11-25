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
  c,
  d as l,
  j as u,
  l as d,
  m as ee,
  o as f,
  p as te,
  s as p,
  w as ne
} from "./react.DfujhmXs.mjs";
import {
  C as m,
  a as h,
  r as re,
  t as ie
} from "./motion.CM2UIHal.mjs";
import {
  E as ae,
  F as oe,
  G as se,
  L as g,
  Lt as ce,
  M as le,
  N as _,
  Nt as ue,
  O as de,
  Pt as fe,
  Q as v,
  Tt as pe,
  U as y,
  Ut as me,
  a as b,
  b as he,
  ht as ge,
  j as _e,
  jt as ve,
  k as ye,
  kt as x,
  n as be,
  r as xe,
  s as S,
  t as Se,
  w as Ce
} from "./framer.DdqHlrxM.mjs";
import {
  c as C,
  s as w
} from "./TJ9zZTo1g.BDr4QkyX.mjs";
import {
  n as T,
  t as E
} from "./v7Wd3N72W.Dzl5_5IZ.mjs";
import {
  i as we,
  n as Te,
  r as Ee,
  t as De
} from "./iLKnB8A0V.rnK00gqL.mjs";
import {
  i as Oe,
  r as ke,
  t as Ae
} from "./BYYSbB_Xj.CQRm1Wxe.mjs";
import {
  n as je,
  t as Me
} from "./caaAwhF9X.BYTWrlvA.mjs";

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function Ne(e) {
  return typeof e == `function` ? e() : e
}

function Pe(e, t) {
  return R[e] > R[t]
}

function Fe(e) {
  let t;
  for (let n of e) {
    let e = Ne(n);
    if ((t === void 0 || Pe(e, t)) && (t = e), t === `user-blocking`) break
  }
  return t
}

function Ie(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength)
}

function O(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``))
}

function k(e) {
  throw Error(`Unexpected value: ${e}`)
}

function A(e) {
  return typeof e == `string`
}

function j(e) {
  return Number.isFinite(e)
}

function M(e) {
  return e === null
}

function N(e) {
  if (M(e)) return 0;
  switch (e.type) {
    case `array`:
      return 1;
    case `boolean`:
      return 2;
    case `color`:
      return 3;
    case `date`:
      return 4;
    case `enum`:
      return 5;
    case `file`:
      return 6;
    case `responsiveimage`:
      return 10;
    case `link`:
      return 7;
    case `number`:
      return 8;
    case `object`:
      return 9;
    case `richtext`:
      return 11;
    case `string`:
      return 12;
    case `vectorsetitem`:
      return 13;
    default:
      k(e)
  }
}

function Le(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = F.read(e);
    n.push(t)
  }
  return {
    type: `array`,
    value: n
  }
}

function Re(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) F.write(e, n)
}

function ze(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = F.compare(r, a, n);
    if (o !== 0) return o
  }
  return 0
}

function Be(e) {
  return {
    type: `boolean`,
    value: e.readUint8() !== 0
  }
}

function Ve(e, t) {
  e.writeUint8(+!!t.value)
}

function He(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value)
}

function Ue(e) {
  return {
    type: `color`,
    value: e.readString()
  }
}

function We(e, t) {
  e.writeString(t.value)
}

function Ge(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value)
}

function Ke(e) {
  let t = e.readInt64();
  return {
    type: `date`,
    value: new Date(t).toISOString()
  }
}

function qe(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n)
}

function Je(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r)
}

function Ye(e) {
  return {
    type: `enum`,
    value: e.readString()
  }
}

function Xe(e, t) {
  e.writeString(t.value)
}

function Ze(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value)
}

function Qe(e) {
  return {
    type: `file`,
    value: e.readString()
  }
}

function $e(e, t) {
  e.writeString(t.value)
}

function et(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value)
}

function tt(e) {
  return {
    type: `link`,
    value: e.readJson()
  }
}

function nt(e, t) {
  e.writeJson(t.value)
}

function rt(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r)
}

function it(e) {
  return {
    type: `number`,
    value: e.readFloat64()
  }
}

function at(e, t) {
  e.writeFloat64(t.value)
}

function ot(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value)
}

function st(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = F.read(e)
  }
  return {
    type: `object`,
    value: n
  }
}

function ct(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of(e.writeUint16(n.length), n)) e.writeString(t), F.write(e, r)
}

function lt(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = e.value[o] ?? null,
      l = t.value[s] ?? null,
      u = F.compare(c, l, n);
    if (u !== 0) return u
  }
  return 0
}

function ut(e) {
  return {
    type: `responsiveimage`,
    value: e.readJson()
  }
}

function dt(e, t) {
  e.writeJson(t.value)
}

function ft(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r)
}

function pt(e) {
  let t = e.readInt8();
  if (t === 0) return {
    type: `richtext`,
    value: e.readUint32()
  };
  if (t === 1) return {
    type: `richtext`,
    value: e.readString()
  };
  throw Error(`Invalid rich text pointer`)
}

function mt(e, t) {
  if (j(t.value)) e.writeInt8(0), e.writeUint32(t.value);
  else if (A(t.value)) e.writeInt8(1), e.writeString(t.value);
  else throw Error(`Invalid rich text pointer`)
}

function ht(e, t) {
  let n = e.value,
    r = t.value;
  if (j(n) && j(r) || A(n) && A(r)) return n < r ? -1 : +(n > r);
  throw Error(`Invalid rich text pointer`)
}

function gt(e) {
  return {
    type: `string`,
    value: e.readString()
  }
}

function _t(e, t) {
  e.writeString(t.value)
}

function vt(e, t, n) {
  let r = e.value,
    i = t.value;
  return n.type === 0 && (r = e.value.toLowerCase(), i = t.value.toLowerCase()), r < i ? -1 : +(r > i)
}

function yt(e) {
  return {
    type: `vectorsetitem`,
    value: e.readUint32()
  }
}

function bt(e, t) {
  e.writeUint32(t.value)
}

function xt(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r)
}
async function St(e) {
  let t = Math.floor(It * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise(e => {
    setTimeout(e, t)
  })
}
async function Ct(e, t) {
  let n = Tt(t),
    r = [],
    i = 0;
  for (let e of n) r.push(`${e.from}-${e.to-1}`), i += e.to - e.from;
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await K(a);
  if (s.status !== 200) throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new Rt,
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    u.write(e.from, r), d = n
  }
  return t.map(e => u.read(e.from, e.to - e.from))
}

function wt(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return r.set(e, 0), r.set(t, e.length), r
}

function Tt(e) {
  O(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to ? n[t] = {
      from: r.from,
      to: Math.max(r.to, e.to)
    } : n.push(e)
  }
  return n
}

function Et(e) {
  let t = {},
    n = e.readUint16();
  for (let r = 0; r < n; r++) {
    let n = e.readString();
    t[n] = F.read(e)
  }
  return t
}

function* Dt(e) {
  for (let t of e) yield* t.prioritySources
}
var P, F, Ot, I, kt, L, At, jt, Mt, Nt, Pt, Ft, R, z, B, V, H, U, W, G, It, Lt, K, Rt, zt, Bt;

function Vt() {
  return (Vt = e((() => {
    i(), v(), Ot = Object.create, I = Object.defineProperty, kt = Object.getOwnPropertyDescriptor, L = Object.getOwnPropertyNames, At = Object.getPrototypeOf, jt = Object.prototype.hasOwnProperty, Mt = (e, t) => function() {
      try {
        return t || (0, e[L(e)[0]])((t = {
          exports: {}
        }).exports, t), t.exports
      } catch (e) {
        throw t = 0, e
      }
    }, Nt = (e, t, n, r) => {
      if (t && typeof t == `object` || typeof t == `function`)
        for (let i of L(t)) jt.call(e, i) || i === n || I(e, i, {
          get: () => t[i],
          enumerable: !(r = kt(t, i)) || r.enumerable
        });
      return e
    }, Pt = (e, t, n) => (n = e == null ? {} : Ot(At(e)), Nt(!t && e && e.__esModule ? n : I(n, `default`, {
      value: e,
      enumerable: !0
    }), e)), Ft = Pt(Mt({
      "../../../node_modules/dataloader/index.js"(e, t) {
        var n, r = /* @__PURE__ */ function() {
            function e(e, t) {
              if (typeof e != `function`) throw TypeError(`DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ` + e + `.`);
              this._batchLoadFn = e, this._maxBatchSize = function(e) {
                if (e && !1 === e.batch) return 1;
                var t = e && e.maxBatchSize;
                if (t === void 0) return 1 / 0;
                if (typeof t != `number` || t < 1) throw TypeError(`maxBatchSize must be a positive number: ` + t);
                return t
              }(t), this._batchScheduleFn = function(e) {
                var t = e && e.batchScheduleFn;
                if (t === void 0) return i;
                if (typeof t != `function`) throw TypeError(`batchScheduleFn must be a function: ` + t);
                return t
              }(t), this._cacheKeyFn = function(e) {
                var t = e && e.cacheKeyFn;
                if (t === void 0) return function(e) {
                  return e
                };
                if (typeof t != `function`) throw TypeError(`cacheKeyFn must be a function: ` + t);
                return t
              }(t), this._cacheMap = function(e) {
                if (e && !1 === e.cache) return null;
                var t = e && e.cacheMap;
                if (t === void 0) return /* @__PURE__ */ new Map;
                if (t !== null) {
                  var n = [`get`, `set`, `delete`, `clear`].filter(function(e) {
                    return t && typeof t[e] != `function`
                  });
                  if (n.length !== 0) throw TypeError(`Custom cacheMap missing methods: ` + n.join(`, `))
                }
                return t
              }(t), this._batch = null, this.name = t && t.name ? t.name : null
            }
            var t = e.prototype;
            return t.load = function(e) {
              if (e == null) throw TypeError(`The loader.load() function must be called with a value, but got: ` + String(e) + `.`);
              var t = function(e) {
                  var t = e._batch;
                  if (t !== null && !t.hasDispatched && t.keys.length < e._maxBatchSize) return t;
                  var n = {
                    hasDispatched: !1,
                    keys: [],
                    callbacks: []
                  };
                  return e._batch = n, e._batchScheduleFn(function() {
                    (function(e, t) {
                      var n;
                      if (t.hasDispatched = !0, t.keys.length === 0) o(t);
                      else {
                        try {
                          n = e._batchLoadFn(t.keys)
                        } catch (n) {
                          return a(e, t, TypeError(`DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ` + String(n) + `.`))
                        }
                        if (!n || typeof n.then != `function`) return a(e, t, TypeError(`DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ` + String(n) + `.`));
                        n.then(function(e) {
                          if (!s(e)) throw TypeError(`DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ` + String(e) + `.`);
                          if (e.length !== t.keys.length) throw TypeError(`DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` + String(t.keys) + `

Values:
` + String(e));
                          o(t);
                          for (var n = 0; n < t.callbacks.length; n++) {
                            var r = e[n];
                            r instanceof Error ? t.callbacks[n].reject(r) : t.callbacks[n].resolve(r)
                          }
                        }).catch(function(n) {
                          a(e, t, n)
                        })
                      }
                    })(e, n)
                  }), n
                }(this),
                n = this._cacheMap,
                r = this._cacheKeyFn(e);
              if (n) {
                var i = n.get(r);
                if (i) {
                  var c = t.cacheHits ||= [];
                  return new Promise(function(e) {
                    c.push(function() {
                      e(i)
                    })
                  })
                }
              }
              t.keys.push(e);
              var l = new Promise(function(e, n) {
                t.callbacks.push({
                  resolve: e,
                  reject: n
                })
              });
              return n && n.set(r, l), l
            }, t.loadMany = function(e) {
              if (!s(e)) throw TypeError(`The loader.loadMany() function must be called with Array<key> but got: ` + e + `.`);
              for (var t = [], n = 0; n < e.length; n++) t.push(this.load(e[n]).catch(function(e) {
                return e
              }));
              return Promise.all(t)
            }, t.clear = function(e) {
              var t = this._cacheMap;
              if (t) {
                var n = this._cacheKeyFn(e);
                t.delete(n)
              }
              return this
            }, t.clearAll = function() {
              var e = this._cacheMap;
              return e && e.clear(), this
            }, t.prime = function(e, t) {
              var n = this._cacheMap;
              if (n) {
                var r, i = this._cacheKeyFn(e);
                n.get(i) === void 0 && (t instanceof Error ? (r = Promise.reject(t)).catch(function() {}) : r = Promise.resolve(t), n.set(i, r))
              }
              return this
            }, e
          }(),
          i = typeof process == `object` && typeof process.nextTick == `function` ? function(e) {
            n ||= Promise.resolve(), n.then(function() {
              process.nextTick(e)
            })
          } : typeof setImmediate == `function` ? function(e) {
            setImmediate(e)
          } : function(e) {
            setTimeout(e)
          };

        function a(e, t, n) {
          o(t);
          for (var r = 0; r < t.keys.length; r++) e.clear(t.keys[r]), t.callbacks[r].reject(n)
        }

        function o(e) {
          if (e.cacheHits)
            for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]()
        }

        function s(e) {
          return typeof e == `object` && !!e && typeof e.length == `number` && (e.length === 0 || e.length > 0 && Object.prototype.hasOwnProperty.call(e, e.length - 1))
        }
        t.exports = r
      }
    })(), 1), R = {
      background: 0,
      "user-visible": 1,
      "user-blocking": 2
    }, z = {
      Uint8: 1,
      Uint16: 2,
      Uint32: 4,
      BigUint64: 8,
      Int8: 1,
      Int16: 2,
      Int32: 4,
      BigInt64: 8,
      Float32: 4,
      Float64: 8
    }, B = (P = class e {
      getOffset() {
        return this.offset
      }
      ensureLength(e) {
        let t = this.bytes.length;
        if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`)
      }
      readUint8() {
        let e = z.Uint8;
        this.ensureLength(e);
        let t = this.view.getUint8(this.offset);
        return this.offset += e, t
      }
      readUint16() {
        let e = z.Uint16;
        this.ensureLength(e);
        let t = this.view.getUint16(this.offset);
        return this.offset += e, t
      }
      readUint32() {
        let e = z.Uint32;
        this.ensureLength(e);
        let t = this.view.getUint32(this.offset);
        return this.offset += e, t
      }
      readUint64() {
        let e = this.readBigUint64();
        return Number(e)
      }
      readBigUint64() {
        let e = z.BigUint64;
        this.ensureLength(e);
        let t = this.view.getBigUint64(this.offset);
        return this.offset += e, t
      }
      readInt8() {
        let e = z.Int8;
        this.ensureLength(e);
        let t = this.view.getInt8(this.offset);
        return this.offset += e, t
      }
      readInt16() {
        let e = z.Int16;
        this.ensureLength(e);
        let t = this.view.getInt16(this.offset);
        return this.offset += e, t
      }
      readInt32() {
        let e = z.Int32;
        this.ensureLength(e);
        let t = this.view.getInt32(this.offset);
        return this.offset += e, t
      }
      readInt64() {
        let e = this.readBigInt64();
        return Number(e)
      }
      readBigInt64() {
        let e = z.BigInt64;
        this.ensureLength(e);
        let t = this.view.getBigInt64(this.offset);
        return this.offset += e, t
      }
      readFloat32() {
        let e = z.Float32;
        this.ensureLength(e);
        let t = this.view.getFloat32(this.offset);
        return this.offset += e, t
      }
      readFloat64() {
        let e = z.Float64;
        this.ensureLength(e);
        let t = this.view.getFloat64(this.offset);
        return this.offset += e, t
      }
      readBytes(e) {
        let t = this.offset,
          n = t + e,
          r = this.bytes.subarray(t, n);
        return this.offset = n, r
      }
      readString() {
        let t = this.readUint32(),
          n = this.readBytes(t);
        return e.textDecoder.decode(n)
      }
      readJson() {
        let e = this.readString();
        return JSON.parse(e)
      }
      constructor(e) {
        D(this, `bytes`, void 0), D(this, `offset`, 0), D(this, `view`, void 0), this.bytes = e, this.view = Ie(this.bytes)
      }
    }, D(P, `textDecoder`, new TextDecoder), P), t !== void 0 && t.requestIdleCallback, V = e => 2 ** e - 1, H = e => -(2 ** (e - 1)), U = e => 2 ** (e - 1) - 1, H(8), H(16), H(32), -(BigInt(2) ** BigInt(63)), V(8), V(16), V(32), BigInt(2) ** BigInt(64) - BigInt(1), U(8), U(16), U(32), BigInt(2) ** BigInt(63) - BigInt(1), W = class e {
      static fromString(t) {
        let [n, r, i] = t.split(`/`).map(Number);
        return O(j(n), `Invalid chunkId`), O(j(r), `Invalid offset`), O(j(i), `Invalid length`), new e(n, r, i)
      }
      toString() {
        return `${this.chunkId}/${this.offset}/${this.length}`
      }
      static read(t) {
        let n = t.readUint16(),
          r = t.readUint32(),
          i = t.readUint32();
        return new e(n, r, i)
      }
      write(e) {
        e.writeUint16(this.chunkId), e.writeUint32(this.offset), e.writeUint32(this.length)
      }
      compare(e) {
        return this.chunkId < e.chunkId ? -1 : this.chunkId > e.chunkId ? 1 : this.offset < e.offset ? -1 : this.offset > e.offset ? 1 : (O(this.length === e.length), 0)
      }
      constructor(e, t, n) {
        D(this, `chunkId`, void 0), D(this, `offset`, void 0), D(this, `length`, void 0), this.chunkId = e, this.offset = t, this.length = n
      }
    }, (e => {
      e.read = function(e) {
        let t = e.readUint8();
        switch (t) {
          case 0:
            return null;
          case 1:
            return Le(e);
          case 2:
            return Be(e);
          case 3:
            return Ue(e);
          case 4:
            return Ke(e);
          case 5:
            return Ye(e);
          case 6:
            return Qe(e);
          case 7:
            return tt(e);
          case 8:
            return it(e);
          case 9:
            return st(e);
          case 10:
            return ut(e);
          case 11:
            return pt(e);
          case 12:
            return gt(e);
          case 13:
            return yt(e);
          default:
            k(t)
        }
      }, e.write = function(e, t) {
        let n = N(t);
        if (e.writeUint8(n), !M(t)) switch (t.type) {
          case `array`:
            return Re(e, t);
          case `boolean`:
            return Ve(e, t);
          case `color`:
            return We(e, t);
          case `date`:
            return qe(e, t);
          case `enum`:
            return Xe(e, t);
          case `file`:
            return $e(e, t);
          case `link`:
            return nt(e, t);
          case `number`:
            return at(e, t);
          case `object`:
            return ct(e, t);
          case `responsiveimage`:
            return dt(e, t);
          case `richtext`:
            return mt(e, t);
          case `vectorsetitem`:
            return bt(e, t);
          case `string`:
            return _t(e, t);
          default:
            k(t)
        }
      }, e.compare = function(e, t, n) {
        let r = N(e),
          i = N(t);
        if (r < i) return -1;
        if (r > i) return 1;
        if (M(e) || M(t)) return 0;
        switch (e.type) {
          case `array`:
            return O(t.type === `array`), ze(e, t, n);
          case `boolean`:
            return O(t.type === `boolean`), He(e, t);
          case `color`:
            return O(t.type === `color`), Ge(e, t);
          case `date`:
            return O(t.type === `date`), Je(e, t);
          case `enum`:
            return O(t.type === `enum`), Ze(e, t);
          case `file`:
            return O(t.type === `file`), et(e, t);
          case `link`:
            return O(t.type === `link`), rt(e, t);
          case `number`:
            return O(t.type === `number`), ot(e, t);
          case `object`:
            return O(t.type === `object`), lt(e, t, n);
          case `responsiveimage`:
            return O(t.type === `responsiveimage`), ft(e, t);
          case `richtext`:
            return O(t.type === `richtext`), ht(e, t);
          case `vectorsetitem`:
            return O(t.type === `vectorsetitem`), xt(e, t);
          case `string`:
            return O(t.type === `string`), vt(e, t, n);
          default:
            k(e)
        }
      }
    })(F ||= {}), G = 3, It = 250, Lt = [408, 429, 500, 502, 503, 504], K = async (e, t) => {
      let n = 0;
      for (;;) {
        try {
          let r = await fetch(e, t);
          if (!Lt.includes(r.status) || ++n > G) return r
        } catch (e) {
          if (t?.signal?.aborted || ++n > G) throw e
        }
        await St(n)
      }
    }, Rt = class {
      read(e, t) {
        for (let n of this.chunks) {
          if (e < n.start) break;
          if (e > n.end) continue;
          if (e + t > n.end) break;
          let r = e - n.start,
            i = r + t;
          return n.data.slice(r, i)
        }
        throw Error(`Missing data`)
      }
      write(e, t) {
        let n = e,
          r = n + t.length,
          i = 0,
          a = this.chunks.length;
        for (; i < a; i++) {
          let e = this.chunks[i];
          if (O(e, `Missing chunk`), !(n > e.end)) {
            if (n > e.start) {
              let r = n - e.start;
              t = wt(e.data.subarray(0, r), t), n = e.start
            }
            break
          }
        }
        for (; a > i; a--) {
          let e = this.chunks[a - 1];
          if (O(e, `Missing chunk`), !(r < e.start)) {
            if (r < e.end) {
              let n = r - e.start,
                i = e.data.subarray(n);
              t = wt(t, i), r = e.end
            }
            break
          }
        }
        let o = {
            start: n,
            end: r,
            data: t
          },
          s = a - i;
        this.chunks.splice(i, s, o)
      }
      constructor() {
        D(this, `chunks`, [])
      }
    }, zt = class {
      scanItems(e) {
        return this.itemsPromise ? this.isScanning && e && this.scanPrioritySources.add(e) : (this.isScanning = !0, e && this.scanPrioritySources.add(e), this.itemsPromise = K(this.url).then(async e => {
          if (!e.ok) throw Error(`Request failed: ${e.status} ${e.statusText}`);
          let t = await e.arrayBuffer(),
            n = new B(new Uint8Array(t)),
            r = [],
            i = n.readUint32();
          for (let e = 0; e < i; e++) {
            let e = Fe(this.scanPrioritySources),
              t = e ? me({
                batch: !0,
                priority: e
              }) : void 0;
            t && await t;
            let i = n.getOffset(),
              a = Et(n),
              o = n.getOffset() - i,
              s = new W(this.id, i, o).toString(),
              c = {
                pointer: s,
                data: a
              };
            this.itemLoader.prime({
              pointer: s,
              prioritySources: /* @__PURE__ */ new Set
            }, c), r.push(c)
          }
          return r
        }).finally(() => {
          this.isScanning = !1, this.scanPrioritySources.clear()
        })), this.itemsPromise
      }
      resolveItem(e, t) {
        let n = this.itemPrioritySources.get(e);
        n || (n = /* @__PURE__ */ new Set, this.itemPrioritySources.set(e, n)), t && n.add(t);
        let r = this.itemLoader.load({
            pointer: e,
            prioritySources: n
          }),
          i = () => this.itemPrioritySources.delete(e);
        return r.then(i, i), r
      }
      constructor(e, t) {
        D(this, `id`, void 0), D(this, `url`, void 0), D(this, `itemsPromise`, void 0), D(this, `isScanning`, !1), D(this, `scanPrioritySources`, /* @__PURE__ */ new Set), D(this, `itemPrioritySources`, /* @__PURE__ */ new Map), D(this, `itemLoader`, new Ft.default(async e => {
          let t = e.map(({
              pointer: e
            }) => {
              let t = W.fromString(e);
              return {
                from: t.offset,
                to: t.offset + t.length
              }
            }),
            n = await Ct(this.url, t),
            r = [];
          for (let t = 0; t < n.length; t++) {
            let i = Fe(Dt(e)),
              a = i ? me({
                batch: !0,
                priority: i
              }) : void 0;
            a && await a;
            let o = n[t];
            O(o, `Missing range bytes`);
            let s = Et(new B(o)),
              c = e[t]?.pointer;
            O(c, `Missing pointer`), r.push({
              pointer: c,
              data: s
            })
          }
          return r
        }, {
          maxBatchSize: 250,
          cacheKeyFn: e => e.pointer
        })), this.id = e, this.url = t
      }
    }, Bt = class {
      async scanItems(e) {
        return (await Promise.all(this.chunks.map(async t => t.scanItems(e)))).flat()
      }
      resolveItems(e, t) {
        return Promise.all(e.map(e => {
          let n = W.fromString(e),
            r = this.chunks[n.chunkId];
          return O(r, `Missing chunk`), r.resolveItem(e, t)
        }))
      }
      compareItems(e, t) {
        let n = W.fromString(e.pointer),
          r = W.fromString(t.pointer);
        return n.compare(r)
      }
      compareValues(e, t, n) {
        return F.compare(e, t, n)
      }
      constructor(e) {
        D(this, `options`, void 0), D(this, `id`, void 0), D(this, `schema`, void 0), D(this, `indexes`, void 0), D(this, `resolveRichText`, void 0), D(this, `resolveVectorSetItem`, void 0), D(this, `chunks`, void 0), this.options = e, this.chunks = this.options.chunks.map((e, t) => new zt(t, e)), this.schema = e.schema, this.indexes = e.indexes, this.resolveRichText = e.resolveRichText, this.resolveVectorSetItem = e.resolveVectorSetItem, this.id = e.id
      }
    }
  })))()
}

function Ht(e) {
  return typeof e == `object` && !!e && ! /*#__PURE__*/ ee(e) && qt in e
}

function Ut(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``))
}

function Wt(e, t, n) {
  for (let [r, i] of Object.entries(t)) {
    let t = e[r];
    typeof i == `number` ? e[r] = n(i, t) : Gt(t, i, n)
  }
}

function Gt(e, t, n) {
  if (typeof t != `number`) {
    if (Array.isArray(t)) {
      if (!Array.isArray(e)) return;
      let [r] = t;
      for (let t = 0; t < e.length; t++) {
        let i = e[t];
        typeof r == `number` ? e[t] = n(r, i) : Gt(i, r, n)
      }
      return
    }
    typeof e != `object` || !e || Array.isArray(e) || Wt(e, t, n)
  }
}

function Kt(e) {
  let t = /* @__PURE__ */ new Map;
  return r => {
    let i = t.get(r);
    if (i) return i;
    let a = function t(r) {
      switch (r[0]) {
        case 1: {
          let [, ...e] = r, i = e.map(t);
          return /*#__PURE__*/ l(n, void 0, ...i)
        }
        case 2: {
          let [, e, ...n] = r, i = n.map(t);
          return /*#__PURE__*/ l(he, e, ...i)
        }
        case 3: {
          let [, n, i, a] = r;
          Wt(i, a, (n, r) => {
            if (n === 1) return r && t(r);
            if (typeof r != `string`) return r;
            let i = e[r];
            return i ? (Ht(i) && i.preload(), i) : r
          });
          let o = e[n];
          return Ut(o, `Module not found`), Ht(o) && o.preload(), /*#__PURE__*/ f(xe, {
            componentIdentifier: n,
            children: e => /*#__PURE__*/ f(Se, {
              component: o,
              props: {
                ...e,
                ...i
              }
            })
          })
        }
        case 4: {
          let [, e, n, ...i] = r, a = i.map(t);
          return l(e === `a` ? m.a : e, n, ...a)
        }
        case 5: {
          let [, e] = r;
          return e
        }
      }
    }(JSON.parse(r));
    return t.set(r, a), a
  }
}
var q, J, qt, Jt, Yt;

function Xt() {
  return (Xt = e((() => {
    i(), p(), v(), a(), t !== void 0 && t.requestIdleCallback, qt = `preload`, Jt = ((q = Jt || {})[q.Fragment = 1] = `Fragment`, q[q.Link = 2] = `Link`, q[q.Module = 3] = `Module`, q[q.Tag = 4] = `Tag`, q[q.Text = 5] = `Text`, q), Yt = ((J = Yt || {})[J.RichText = 1] = `RichText`, J[J.VectorSetItem = 2] = `VectorSetItem`, J)
  })))()
}
var Zt, Qt, $t, en, Y;

function tn() {
  return (tn = e((() => {
    v(), Vt(), Xt(), Zt = {
      CeVTjauwn: {
        isNullable: !0,
        type: S.String
      },
      createdAt: {
        isNullable: !0,
        type: S.Date
      },
      hkQFS_ysL: {
        isNullable: !0,
        type: S.ResponsiveImage
      },
      id: {
        isNullable: !1,
        type: S.String
      },
      lZApwOqNQ: {
        isNullable: !0,
        type: S.String
      },
      mZoMxf326: {
        isNullable: !0,
        type: S.String
      },
      nextItemId: {
        isNullable: !0,
        type: S.String
      },
      previousItemId: {
        isNullable: !0,
        type: S.String
      },
      updatedAt: {
        isNullable: !0,
        type: S.Date
      }
    }, Qt = [], $t = e => {
      let t = Qt[e];
      if (t) return t().then(e => e.default)
    }, en = Kt({}), new ae, Y = {
      collectionByLocaleId: {
        default: new Bt({
          chunks: [new URL(`./DAk6uOVpi-chunk-default-0.framercms`, `https://framerusercontent.com/modules/N6tk7d8ryvTmBmwooCir/LrNDctep3xSU5Byswckv/DAk6uOVpi.js`).href.replace(`/modules/`, `/cms/`)],
          id: `13f7da39-26d9-4540-9017-2d66cbb85bc4default`,
          indexes: [],
          resolveRichText: en,
          resolveVectorSetItem: $t,
          schema: Zt
        })
      },
      displayName: `Team Members`,
      id: `13f7da39-26d9-4540-9017-2d66cbb85bc4`
    }, _(Y, {
      hkQFS_ysL: {
        __defaultAssetReference: `data:framer/asset-reference,TuRLGK3mEZRYyPgrKdtjwj6TKxM.jpeg?originalFilename=Contemplative+Portrait.jpeg&width=655&height=1001`,
        title: `Image`,
        type: S.ResponsiveImage
      },
      lZApwOqNQ: {
        defaultValue: ``,
        title: `Name`,
        type: S.String
      },
      mZoMxf326: {
        preventLocalization: !1,
        title: `Slug`,
        type: S.String
      },
      CeVTjauwn: {
        defaultValue: ``,
        title: `Role`,
        type: S.String
      },
      createdAt: {
        title: `Created`,
        type: S.Date
      },
      updatedAt: {
        title: `Updated`,
        type: S.Date
      },
      previousItemId: {
        dataIdentifier: `local-module:collection/DAk6uOVpi:default`,
        title: `Previous`,
        type: S.CollectionReference
      },
      nextItemId: {
        dataIdentifier: `local-module:collection/DAk6uOVpi:default`,
        title: `Next`,
        type: S.CollectionReference
      }
    })
  })))()
}

function X(e, ...t) {
  let n = {};
  return t?.forEach(t => t && Object.assign(n, e[t])), n
}
var nn, rn, Z, an, on, sn, cn, ln, un, dn, fn, pn, mn, Q, hn, gn, _n, vn, yn, bn, xn, Sn, Cn, wn, Tn, En, Dn, On, $;

function kn() {
  return (kn = e((() => {
    p(), v(), ie(), a(), Oe(), we(), je(), C(), T(), nn = y(w), rn = y(E), Z = ce(_e), an = y(Me), on = [`w3iaWhFRY`, `RBcJngtnI`, `nPNyXOlRD`], sn = `framer-azsrl`, cn = {
      nPNyXOlRD: `framer-v-so4lz9`,
      RBcJngtnI: `framer-v-ld2pkr`,
      w3iaWhFRY: `framer-v-1m7l3gw`
    }, ln = {
      bounce: .2,
      delay: 0,
      duration: .4,
      type: `spring`
    }, un = (e, t) => typeof e == `string` && typeof t == `string` ? e.toLowerCase() === t.toLowerCase() : e === t, dn = e => !e, fn = {
      effect: {
        opacity: .001,
        rotate: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 10
      },
      repeat: !1,
      startDelay: .2,
      threshold: 0,
      tokenization: `line`,
      transition: {
        delay: .2,
        duration: 1.1,
        ease: [.215, .61, .355, 1],
        type: `tween`
      },
      trigger: `onInView`,
      type: `appear`
    }, pn = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0
    }, mn = {
      bounce: .1,
      delay: .6,
      duration: 1.2,
      type: `spring`
    }, Q = (...e) => {
      for (let t of e)
        if (t && typeof t == `string`) return t
    }, hn = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 40
    }, gn = {
      delay: .3,
      duration: .85,
      ease: [.215, .61, .355, 1],
      type: `tween`
    }, _n = (e, t) => ({
      ...e,
      delay: (e.delay ?? 0) + t
    }), vn = e => typeof e == `object` && e && typeof e.src == `string` ? e : typeof e == `string` ? {
      src: e
    } : void 0, yn = e => ({
      from: {
        alias: `p8s1kWkRP`,
        data: Ae,
        type: `Collection`
      },
      limit: {
        type: `LiteralValue`,
        value: 4
      },
      select: [{
        collection: `p8s1kWkRP`,
        name: `e2iT0TEOk`,
        type: `Identifier`
      }, {
        collection: `p8s1kWkRP`,
        name: `lykBqV4LS`,
        type: `Identifier`
      }, {
        collection: `p8s1kWkRP`,
        name: `fjIGNgJXm`,
        type: `Identifier`
      }, {
        collection: `p8s1kWkRP`,
        name: `uaSqZPqyE`,
        type: `Identifier`
      }, {
        collection: `p8s1kWkRP`,
        name: `FUjJJ01X0`,
        type: `Identifier`
      }, {
        collection: `p8s1kWkRP`,
        name: `id`,
        type: `Identifier`
      }],
      where: {
        operator: `not`,
        type: `UnaryOperation`,
        value: {
          left: {
            collection: `p8s1kWkRP`,
            name: `lykBqV4LS`,
            type: `Identifier`
          },
          operator: `==`,
          right: {
            type: `LiteralValue`,
            value: e
          },
          type: `BinaryOperation`
        }
      }
    }), bn = ({
      query: e,
      pageSize: t,
      children: n
    }) => n(x(e)), xn = ({
      value: e,
      children: t
    }) => {
      let n = u(h),
        i = e ?? n.transition,
        a = r(() => ({
          ...n,
          transition: i
        }), [JSON.stringify(i)]);
      return /*#__PURE__*/ f(h.Provider, {
        value: a,
        children: t
      })
    }, Sn = {
      Desktop: `w3iaWhFRY`,
      Phone: `nPNyXOlRD`,
      Tablet: `RBcJngtnI`
    }, Cn = m.create(n), wn = (e, t) => {
      let [n, r] = o(e), [i, a] = o(e);
      return t ? [e, t] : (e !== i && (r(e), a(e)), [n, r])
    }, Tn = ({
      articleTitle: e,
      cursor: t,
      heading: n,
      height: r,
      id: i,
      sectionCount: a,
      width: o,
      ...s
    }) => ({
      ...s,
      LV3vwBpcw: n ?? s.LV3vwBpcw ?? `articles.`,
      t9lqsaHqm: t ?? s.t9lqsaHqm,
      variant: Sn[s.variant] ?? s.variant ?? `w3iaWhFRY`,
      xdREUJQGI: a ?? s.xdREUJQGI ?? 1,
      yE5ak_Kio: e ?? s.yE5ak_Kio ?? ``
    }), En = (e, t) => e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`), Dn = /*#__PURE__*/ te(function(e, t) {
      let r = s(null),
        i = t ?? r,
        a = ne(),
        {
          activeLocale: o,
          setLocale: l
        } = pe(),
        u = ge(),
        {
          style: ee,
          className: te,
          layoutId: p,
          variant: h,
          xdREUJQGI: ie,
          onxdREUJQGIChange: ae,
          LV3vwBpcw: se,
          yE5ak_Kio: g,
          t9lqsaHqm: ce,
          ...le
        } = Tn(e),
        [_, fe] = wn(ie, ae),
        {
          baseVariant: v,
          classNames: y,
          clearLoadingGesture: me,
          gestureHandlers: he,
          gestureVariant: x,
          isLoading: xe,
          setGestureState: S,
          setVariant: Se,
          variants: C
        } = ue({
          cycleOrder: on,
          defaultVariant: `w3iaWhFRY`,
          ref: i,
          variant: h,
          variantClassNames: cn
        }),
        T = En(e, C),
        we = oe(sn, De),
        Te = () => v !== `nPNyXOlRD`;
      return ve(), /*#__PURE__*/ f(re, {
        id: p ?? a,
        children: /*#__PURE__*/ f(Cn, {
          animate: C,
          initial: !1,
          children: /*#__PURE__*/ f(xn, {
            value: ln,
            children: /*#__PURE__*/ f(m.section, {
              ...le,
              ...he,
              className: oe(we, `framer-1m7l3gw`, te, y),
              "data-framer-name": `Desktop`,
              layoutDependency: T,
              layoutId: `w3iaWhFRY`,
              ref: i,
              style: {
                ...ee
              },
              ...X({
                nPNyXOlRD: {
                  "data-framer-name": `Phone`
                },
                RBcJngtnI: {
                  "data-framer-name": `Tablet`
                }
              }, v, x),
              children: /*#__PURE__*/ d(m.div, {
                className: `framer-1fq9aj0`,
                "data-framer-name": `Inside Container`,
                layoutDependency: T,
                layoutId: `X_Dbe3PJd`,
                children: [ /*#__PURE__*/ d(m.div, {
                  className: `framer-t0gxtr`,
                  "data-framer-name": `Label / Heading`,
                  layoutDependency: T,
                  layoutId: `JRE39rRU3`,
                  children: [Te() && /*#__PURE__*/ f(m.div, {
                    className: `framer-nqgxp3`,
                    "data-framer-name": `Filler`,
                    layoutDependency: T,
                    layoutId: `wPoJ4_Tjd`
                  }), /*#__PURE__*/ d(m.div, {
                    className: `framer-srsset`,
                    "data-framer-name": `Label / Heading`,
                    layoutDependency: T,
                    layoutId: `twUoo4_Q3`,
                    children: [ /*#__PURE__*/ f(b, {
                      height: 18,
                      y: (u?.y || 0) + 120 + (((u?.height || 890) - 240 - 650) / 2 + 0 + 0) + 0 + 0 + 0 + 0 + 0 + 0,
                      ...X({
                        nPNyXOlRD: {
                          y: (u?.y || 0) + 60 + (((u?.height || 200) - 120 - 610) / 2 + 0 + 0) + 0 + 0 + 0 + 0 + 0 + 0
                        },
                        RBcJngtnI: {
                          y: (u?.y || 0) + 90 + (((u?.height || 1531) - 180 - 630) / 2 + 0 + 0) + 0 + 0 + 0 + 0 + 0 + 0
                        }
                      }, v, x),
                      children: /*#__PURE__*/ f(_e, {
                        className: `framer-17ouwp8-container`,
                        layoutDependency: T,
                        layoutId: `o9flFq6sM-container`,
                        nodeId: `o9flFq6sM`,
                        rendersWithMotion: !0,
                        scopeId: `pgtQfyOCv`,
                        children: /*#__PURE__*/ f(w, {
                          fgjj4TIuY: `var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))`,
                          fPCis9rUW: _,
                          height: `100%`,
                          id: `o9flFq6sM`,
                          layoutId: `o9flFq6sM`,
                          onfPCis9rUWChange: fe,
                          shBP9axEq: dn(un(_, 0)),
                          width: `100%`,
                          xr4VRVrT5: `var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))`,
                          z_3j3uyNQ: `From the journal`
                        })
                      })
                    }), /*#__PURE__*/ f(ye, {
                      __fromCanvasComponent: !0,
                      children: /*#__PURE__*/ f(n, {
                        children: /*#__PURE__*/ f(m.h2, {
                          className: `framer-styles-preset-1c0t51l`,
                          "data-styles-preset": `iLKnB8A0V`,
                          dir: `auto`,
                          style: {
                            "--framer-text-alignment": `left`
                          },
                          children: `articles.`
                        })
                      }),
                      className: `framer-3j1snh`,
                      effect: fn,
                      fonts: [`Inter`],
                      layoutDependency: T,
                      layoutId: `zZhQhKMuq`,
                      text: se,
                      verticalAlignment: `top`,
                      withExternalLayout: !0
                    })]
                  }), /*#__PURE__*/ f(de, {
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
                    children: e => /*#__PURE__*/ f(b, {
                      height: 20,
                      y: (u?.y || 0) + 120 + (((u?.height || 890) - 240 - 650) / 2 + 0 + 0) + 0 + 0 + 0 + 0,
                      ...X({
                        nPNyXOlRD: {
                          y: (u?.y || 0) + 60 + (((u?.height || 200) - 120 - 610) / 2 + 0 + 0) + 0 + 0 + 0 + 0
                        },
                        RBcJngtnI: {
                          y: (u?.y || 0) + 90 + (((u?.height || 1531) - 180 - 630) / 2 + 0 + 0) + 0 + 0 + 0 + 0
                        }
                      }, v, x),
                      children: /*#__PURE__*/ f(Z, {
                        __framer__animate: {
                          transition: mn
                        },
                        __framer__animateOnce: !0,
                        __framer__enter: pn,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        className: `framer-151hr3l-container`,
                        layoutDependency: T,
                        layoutId: `E9PRNArcv-container`,
                        nodeId: `E9PRNArcv`,
                        rendersWithMotion: !0,
                        scopeId: `pgtQfyOCv`,
                        children: /*#__PURE__*/ f(E, {
                          A0yGAsltz: `var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))`,
                          DUWgKh4ot: e[0],
                          FxpTCec8q: `View All`,
                          height: `100%`,
                          HVx8XMFQN: `var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))`,
                          id: `E9PRNArcv`,
                          layoutId: `E9PRNArcv`,
                          v2PkRDg7A: !1,
                          variant: Q(`jinEk1yag`),
                          width: `100%`,
                          ...X({
                            nPNyXOlRD: {
                              DUWgKh4ot: e[2]
                            },
                            RBcJngtnI: {
                              DUWgKh4ot: e[1]
                            }
                          }, v, x)
                        })
                      })
                    })
                  })]
                }), /*#__PURE__*/ f(m.div, {
                  className: `framer-10d2acw`,
                  layoutDependency: T,
                  layoutId: `p8s1kWkRP`,
                  children: /*#__PURE__*/ f(be, {
                    children: /*#__PURE__*/ f(bn, {
                      query: yn(g),
                      children: (e, t, n) => /*#__PURE__*/ f(c, {
                        children: e?.map(({
                          e2iT0TEOk: e,
                          fjIGNgJXm: t,
                          FUjJJ01X0: n,
                          id: r,
                          lykBqV4LS: i,
                          uaSqZPqyE: a
                        }, s) => (i ??= ``, n ??= ``, /*#__PURE__*/ f(re, {
                          id: `p8s1kWkRP-${r}`,
                          children: /*#__PURE__*/ f(Ce.Provider, {
                            value: {
                              FUjJJ01X0: n
                            },
                            children: /*#__PURE__*/ f(de, {
                              links: [{
                                href: {
                                  pathVariables: {
                                    FUjJJ01X0: n
                                  },
                                  webPageId: `WLBXMFnU8`
                                },
                                implicitPathVariables: void 0
                              }, {
                                href: {
                                  pathVariables: {
                                    FUjJJ01X0: n
                                  },
                                  webPageId: `WLBXMFnU8`
                                },
                                implicitPathVariables: void 0
                              }, {
                                href: {
                                  pathVariables: {
                                    FUjJJ01X0: n
                                  },
                                  webPageId: `WLBXMFnU8`
                                },
                                implicitPathVariables: void 0
                              }],
                              children: n => /*#__PURE__*/ f(b, {
                                height: 440,
                                width: `max((min(${u?.width||`100vw`}, 1920px) - 126px) / 4, 50px)`,
                                y: (u?.y || 0) + 120 + (((u?.height || 890) - 240 - 650) / 2 + 0 + 0) + 0 + 190 + 0 + 0,
                                ...X({
                                  nPNyXOlRD: {
                                    width: `max((min(${u?.width||`100vw`}, 1920px) - 66px) / 2, 50px)`,
                                    y: (u?.y || 0) + 60 + (((u?.height || 200) - 120 - 610) / 2 + 0 + 0) + 0 + 150 + 0 + 0
                                  },
                                  RBcJngtnI: {
                                    width: `max((min(${u?.width||`100vw`}, 1920px) - 86px) / 2, 50px)`,
                                    y: (u?.y || 0) + 90 + (((u?.height || 1531) - 180 - 630) / 2 + 0 + 0) + 0 + 170 + 0 + 0
                                  }
                                }, v, x),
                                children: /*#__PURE__*/ f(Z, {
                                  __framer__animate: {
                                    transition: _n(gn, s * .1)
                                  },
                                  __framer__animateOnce: !0,
                                  __framer__enter: hn,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  className: `framer-ggx1b3-container`,
                                  "data-framer-cursor": ce,
                                  layoutDependency: T,
                                  layoutId: `B7JuzFL2A-container`,
                                  nodeId: `B7JuzFL2A`,
                                  rendersWithMotion: !0,
                                  scopeId: `pgtQfyOCv`,
                                  children: /*#__PURE__*/ f(Me, {
                                    AhAXVbKIy: n[0],
                                    gvuPCI9f4: ke.uaSqZPqyE?.(a, o),
                                    height: `100%`,
                                    id: `B7JuzFL2A`,
                                    KlivmH8mW: t,
                                    layoutId: `B7JuzFL2A`,
                                    style: {
                                      width: `100%`
                                    },
                                    T9HbNIpi5: vn(e),
                                    variant: Q(`qkJaMXuuZ`),
                                    width: `100%`,
                                    ytHY5Nlms: i,
                                    ...X({
                                      nPNyXOlRD: {
                                        AhAXVbKIy: n[2],
                                        variant: Q(`L_gdk_7Fe`)
                                      },
                                      RBcJngtnI: {
                                        AhAXVbKIy: n[1],
                                        variant: Q(`L_gdk_7Fe`)
                                      }
                                    }, v, x)
                                  })
                                })
                              })
                            })
                          })
                        }, r)))
                      })
                    })
                  })
                })]
              })
            })
          })
        })
      })
    }), On = [`.framer-azsrl.framer-4rbsgt, .framer-azsrl .framer-4rbsgt { display: block; }`, `.framer-azsrl.framer-1m7l3gw { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 120px 0px 120px 0px; position: relative; width: 1200px; }`, `.framer-azsrl .framer-1fq9aj0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 1920px; overflow: var(--overflow-clip-fallback, clip); padding: 0px 33px 0px 33px; position: relative; width: 100%; }`, `.framer-azsrl .framer-t0gxtr { display: grid; flex: none; gap: 40px 20px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(4, minmax(50px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`, `.framer-azsrl .framer-nqgxp3 { align-self: start; flex: none; height: 1px; justify-self: start; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`, `.framer-azsrl .framer-srsset { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; grid-column: span 2; height: min-content; justify-content: center; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`, `.framer-azsrl .framer-17ouwp8-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }`, `.framer-azsrl .framer-3j1snh { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`, `.framer-azsrl .framer-151hr3l-container { align-self: end; flex: none; height: auto; justify-self: end; position: relative; width: fit-content; z-index: 1; }`, `.framer-azsrl .framer-10d2acw { display: grid; flex: none; gap: 20px; grid-auto-rows: min-content; grid-template-columns: repeat(4, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`, `.framer-azsrl .framer-ggx1b3-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`, `.framer-azsrl.framer-v-ld2pkr.framer-1m7l3gw { padding: 90px 0px 90px 0px; width: 810px; }`, `.framer-azsrl.framer-v-ld2pkr .framer-1fq9aj0 { gap: 60px; }`, `.framer-azsrl.framer-v-ld2pkr .framer-10d2acw, .framer-azsrl.framer-v-so4lz9 .framer-10d2acw { grid-template-columns: repeat(2, minmax(50px, 1fr)); }`, `.framer-azsrl.framer-v-so4lz9.framer-1m7l3gw { padding: 60px 0px 60px 0px; width: 390px; }`, `.framer-azsrl.framer-v-so4lz9 .framer-1fq9aj0 { gap: 40px; padding: 0px 23px 0px 23px; }`, `.framer-azsrl.framer-v-so4lz9 .framer-151hr3l-container { grid-column: span 2; }`, ...Te], $ = fe(Dn, On, `framer-azsrl`), $.displayName = `Articles Section`, $.defaultProps = {
      height: 890,
      width: 1200
    }, _($, {
      variant: {
        options: [`w3iaWhFRY`, `RBcJngtnI`, `nPNyXOlRD`],
        optionTitles: [`Desktop`, `Tablet`, `Phone`],
        title: `Variant`,
        type: S.Enum
      },
      xdREUJQGI: {
        defaultValue: 1,
        description: `Sets the section index displayed in the label.`,
        title: `Section Count`,
        type: S.Number
      },
      onxdREUJQGIChange: {
        changes: `xdREUJQGI`,
        type: S.ChangeHandler
      },
      LV3vwBpcw: {
        defaultValue: `articles.`,
        description: `Sets the section heading displayed.`,
        displayTextArea: !1,
        title: `Heading`,
        type: S.String
      },
      onLV3vwBpcwChange: {
        changes: `LV3vwBpcw`,
        type: S.ChangeHandler
      },
      yE5ak_Kio: {
        defaultValue: ``,
        description: `Sets the optional featured article title.`,
        title: `Article Title`,
        type: S.String
      },
      onyE5ak_KioChange: {
        changes: `yE5ak_Kio`,
        type: S.ChangeHandler
      },
      t9lqsaHqm: {
        description: `Selects the cursor treatment shown on hover.`,
        title: `Cursor`,
        type: S.CustomCursor
      }
    }), le($, [{
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
    }, ...nn, ...rn, ...an, ...se(Ee)], {
      supportsExplicitInterCodegen: !0
    }), $.loader = {
      load: (e, t) => (t.locale, Promise.allSettled([g(w, {}, t), g(E, {}, t)]))
    }
  })))()
}
export {
  Y as i, kn as n, tn as r, $ as t
};
//# sourceMappingURL=pgtQfyOCv.DMDfGpCr.mjs.map