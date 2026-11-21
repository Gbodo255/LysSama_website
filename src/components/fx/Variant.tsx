'use client';
// Moteur de variantes des composants Framer (scripts/extract-components.mjs → reference/framer/components.json,
// variant-styles.json) : la racine d'une instance (`VRoot`) porte la variante courante (classe `framer-v-*` et
// `data-framer-name` de l'original) ; ses éléments (`VEl`) animent vers les styles déclarés pour cette variante
// (`variants: { id: {...} }` du code compilé), sinon vers leur style de base, avec la transition par défaut du
// composant et une animation de mise en page (layout), comme le runtime d'origine.
import { motion } from 'motion/react';
import { createContext, createElement, useContext, useEffect, useRef, useState, type ElementType } from 'react';
import { usePricingBind } from './Pricing';
import { gu, interp, onScroll, visible } from './Scroll';

type Ctx = { v: string; transition: Record<string, unknown> } | null;
const VCtx = createContext<Ctx>(null);
const cache = new Map<string, ElementType>();
const comp = (tag: string) => { let c = cache.get(tag); if (!c) { c = motion.create(tag as 'div'); cache.set(tag, c); } return c; };
type VMap = Record<string, { cls: string; name?: string }>;

/** appear : bascule `initial` → `to` à l'entrée dans la vue (seuil `threshold`), retour à la sortie si `once` est faux
 *  (`__framer__variantAppearEffectEnabled`, `__framer__obscuredVariantId` / `__framer__visibleVariantId`). */
export function VRoot({ as, map, initial, transition, tap, follow, appear, events, bind, index, scrollTargets, className, ...rest }: {
  as: string; map: VMap; initial: string; transition: Record<string, unknown>;
  tap?: Record<string, string>; follow?: Record<string, string>; appear?: { to: string; threshold: number; once: boolean }; className: string;
  /** états du formulaire contenu (événement framer-form-state) → variante ; succès appliqué 800 ms après, depuis Loading (code : onSuccess → re(…, 800)) */
  events?: Record<string, string>;
  /** variante imposée par un état partagé (calculateur Pricing) : bind = card | toggle | addon, index de l'option */
  bind?: string; index?: number;
  /** variante pilotée par le défilement (`__framer__targets` + variantAppear, runtime pD/wg) : indice de la cible = floor(interpolation) */
  scrollTargets?: { targets: { cls?: string; to: string }[]; threshold: number; once: boolean };
} & Record<string, unknown>) {
  const parent = useContext(VCtx);
  const [own, setOwn] = useState(initial);
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current; if (!appear || !el) return;
    const io = new IntersectionObserver((es) => { for (const e of es) { if (e.isIntersecting) { setOwn(appear.to); if (appear.once) io.disconnect(); } else if (!appear.once) setOwn(initial); } }, { threshold: appear.threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [appear, initial]);
  useEffect(() => {
    if (!scrollTargets) return;
    const seen: Record<number, boolean> = {}; let cur: string | undefined;
    return onScroll(() => {
      const self = ref.current?.parentElement?.closest<HTMLElement>('[class*="framer-v-"]') ?? ref.current;
      const els = scrollTargets.targets.map((g) => (g.cls ? visible(g.cls) : self));
      const out: number[] = [];
      let inp = gu(els, scrollTargets.threshold * window.innerHeight, (a) => out.unshift(a, a));
      let o = out;
      if (!inp.length || inp.length !== o.length) return;
      if (inp[0] > 1) { inp = [0, Math.max(inp[0] - 1, 0), ...inp]; o = [-1, -1, ...o]; }
      const k = Math.floor(interp(window.scrollY, inp, o));
      if (scrollTargets.once && seen[k]) return;
      seen[k] = true;
      const to = scrollTargets.targets[k]?.to ?? initial;
      if (to !== cur) { cur = to; setOwn(to); }
    });
  }, [scrollTargets, initial]);
  useEffect(() => {
    const el = ref.current; if (!events || !el) return;
    let t: ReturnType<typeof setTimeout> | undefined;
    const on = (e: Event) => {
      const s = (e as CustomEvent<string>).detail, id = events[s]; if (!id) return;
      if (s === 'success') { t = setTimeout(() => setOwn((x) => (x === events.loading ? id : x)), 800); } else setOwn(id);
    };
    el.addEventListener('framer-form-state', on);
    return () => { el.removeEventListener('framer-form-state', on); clearTimeout(t); };
  }, [events]);
  const b = usePricingBind(bind, index, initial);
  const v = b.v ?? (follow && parent && follow[parent.v] ? follow[parent.v] : own);
  const cls = Object.values(map).reduce((c, x) => c.replace(new RegExp(`\\b${x.cls}\\b`), ''), className).replace(/\s+/g, ' ').trim() + ' ' + map[v].cls;
  const props: Record<string, unknown> = { ...rest, ref, className: cls, layout: true, transition, 'data-framer-name': map[v].name ?? rest['data-framer-name'] };
  if (tap && tap[v]) props.onTap = () => setOwn((x) => tap[x] ?? x);
  if (b.onTap) props.onTap = b.onTap;
  return <VCtx.Provider value={{ v, transition }}>{createElement(comp(as), props)}</VCtx.Provider>;
}

export function VEl({ as, base, variants, style, ...rest }: { as: string; base: Record<string, unknown>; variants: Record<string, Record<string, unknown>>; style?: Record<string, unknown> } & Record<string, unknown>) {
  const ctx = useContext(VCtx);
  const keys = new Set(Object.values(variants).flatMap((o) => Object.keys(o)));
  const target: Record<string, unknown> = {};
  for (const k of keys) target[k] = ctx && variants[ctx.v] && k in variants[ctx.v] ? variants[ctx.v][k] : base[k];
  return createElement(comp(as), { ...rest, style, layout: true, initial: false, animate: target, transition: ctx?.transition });
}
