'use client';
// Effets Framer liés au défilement (runtime framer.DdqHlrxM.mjs) :
// - ScrollFx (`__framer__styleTransformEffectEnabled`, trigger onScrollTarget, fonctions Eu/wu/gu) : pour chaque cible
//   avec ref, c = offsetTop(ref) − 1 − offset − seuil × hauteur de vue, plage [max(c,0), max(c + hauteur(ref), 0)] ;
//   valeur = interpolation bornée de scrollY entre l'état de la cible précédente et celui de la cible.
// - Parallax (`__framer__parallaxTransformEnabled`, fonctions uu/lu) : y = −scrollY × (speed/100 − 1) une fois l'élément
//   vu (adjustPosition faux), 0 avant.
import { motion, useMotionValue, type MotionValue } from 'motion/react';
import { createElement, useEffect, useRef, type ElementType } from 'react';
import { useBreakpoint } from '@/components/Variants';
import type { Breakpoint } from '@/lib/breakpoints';

const cache = new Map<string, ElementType>();
const comp = (tag: string) => { let c = cache.get(tag); if (!c) { c = motion.create(tag as 'div'); cache.set(tag, c); } return c; };
const KEYS = ['opacity', 'x', 'y', 'scale', 'rotate', 'rotateX', 'rotateY', 'skewX', 'skewY'] as const;
const ID: Record<string, number> = { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0, rotateX: 0, rotateY: 0, skewX: 0, skewY: 0 };
type Target = { ref?: { cls: string } | string | null; offset?: number; target: Record<string, number> };
const offTop = (e: HTMLElement | null) => { let n = 0; for (let r: HTMLElement | null = e; r && r !== document.documentElement; r = r.offsetParent as HTMLElement | null) n += r.offsetTop; return n; };
const interp = (v: number, i: number[], o: number[]) => {
  if (v <= i[0]) return o[0];
  for (let k = 1; k < i.length; k++) if (v <= i[k]) { const d = i[k] - i[k - 1]; return d ? o[k - 1] + ((v - i[k - 1]) / d) * (o[k] - o[k - 1]) : o[k]; }
  return o[o.length - 1];
};
const visible = (cls: string) => [...document.querySelectorAll<HTMLElement>('.' + cls)].find((e) => e.offsetParent !== null) || null;
function onScroll(fn: () => void) { let raf = 0; const h = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(fn); }; window.addEventListener('scroll', h, { passive: true }); window.addEventListener('resize', h); fn(); return () => { window.removeEventListener('scroll', h); window.removeEventListener('resize', h); cancelAnimationFrame(raf); }; }

/** `off` : breakpoints où la page coupe l'effet (PropertyOverrides) — élément rendu sans transformation. */
export function ScrollFx({ as, targets, threshold, off = [], style, ...rest }: { as: string; targets: Target[]; threshold: number; off?: Breakpoint[]; style?: Record<string, unknown> } & Record<string, unknown>) {
  const ref = useRef<HTMLElement>(null);
  const bp = useBreakpoint();
  const on = !!bp && !off.includes(bp);
  const mv = Object.fromEntries(KEYS.map((k) => [k, useMotionValue(targets[0]?.target[k] ?? ID[k])])) as Record<string, MotionValue<number>>;
  useEffect(() => { if (!on) { for (const k of KEYS) mv[k].set(ID[k]); return; } return onScroll(() => {
    const vh = window.innerHeight, t = threshold * vh;
    // gu : parcours des cibles de la dernière à la première
    const ir: number[] = [], out: Record<string, number[]> = Object.fromEntries(KEYS.map((k) => [k, []]));
    let last: number | undefined;
    for (let a = targets.length; a >= 0; a--) {
      const g = targets[a]; if (!g || !g.ref) continue;
      const el = typeof g.ref === 'object' ? visible(g.ref.cls) : ref.current; if (!el) continue;
      const c = offTop(el) - 1 - (g.offset ?? 0) - t, l = el.clientHeight, d = Math.max(c + l, 0);
      ir.unshift(Math.max(c, 0), last === undefined ? d : Math.min(d, Math.max(last - 1, 0)));
      last = c;
      for (const k of KEYS) out[k].unshift(targets[a - 1]?.target[k] ?? 0, g.target[k] ?? 0);
    }
    if (!ir.length) return;
    for (const k of KEYS) if (out[k].length === ir.length && out[k][0] !== undefined) mv[k].set(interp(window.scrollY, ir, out[k]));
  }); }, [targets, threshold, on]); // eslint-disable-line react-hooks/exhaustive-deps
  return createElement(comp(as), { ...rest, ref, style: { ...style, ...mv } });
}

export function Parallax({ as, speed, off = [], style, ...rest }: { as: string; speed: number; off?: Breakpoint[]; style?: Record<string, unknown> } & Record<string, unknown>) {
  const ref = useRef<HTMLElement>(null);
  const y = useMotionValue(0);
  const bp = useBreakpoint();
  const on = !!bp && !off.includes(bp);
  useEffect(() => {
    y.set(0);
    const el = ref.current; if (!el || speed === 100 || !on) return;
    let seen = false, off: (() => void) | undefined;
    const io = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting) && !seen) { seen = true; io.disconnect(); off = onScroll(() => y.set(-window.scrollY * (speed / 100 - 1))); } });
    io.observe(el);
    return () => { io.disconnect(); off?.(); };
  }, [speed, y, on]);
  return createElement(comp(as), { ...rest, ref, style: { ...style, y } });
}
