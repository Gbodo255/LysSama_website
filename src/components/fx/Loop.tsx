'use client';
// Effet de boucle Framer (`__framer__loopEffectEnabled`, `__framer__loop`, `__framer__loopTransition`, `__framer__loopRepeatType`,
// `__framer__loopRepeatDelay`, `__framer__loopPauseOffscreen` : reference/framer/fx.json). Même mécanique que le runtime
// (framer.DdqHlrxM.mjs `cu`) : chaque cycle saute à l'état de départ puis anime vers l'arrivée, attend `repeatDelay`
// (setTimeout, même à 0), puis recommence ; `mirror` alterne identité ⇄ cible. Hors écran : fin du cycle en cours puis arrêt et retour à l'identité.
import { animate, motion, useMotionValue } from 'motion/react';
import { createElement, useEffect, useRef, type ElementType } from 'react';

const cache = new Map<string, ElementType>();
const comp = (tag: string) => { let c = cache.get(tag); if (!c) { c = motion.create(tag as 'div'); cache.set(tag, c); } return c; };
export type LoopFx = { to: Record<string, number>; transition: Record<string, unknown>; repeatType: string; repeatDelay: number; pauseOffscreen: boolean };
const KEYS = ['opacity', 'x', 'y', 'scale', 'rotate', 'rotateX', 'rotateY', 'skewX', 'skewY'] as const;
const ID: Record<string, number> = { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0, rotateX: 0, rotateY: 0, skewX: 0, skewY: 0 };

export function Loop({ as, fx, style, ...rest }: { as: string; fx: LoopFx; style?: Record<string, unknown> } & Record<string, unknown>) {
  const ref = useRef<HTMLElement>(null);
  const mv = Object.fromEntries(KEYS.map((k) => [k, useMotionValue(ID[k])])) as Record<string, ReturnType<typeof useMotionValue<number>>>;
  useEffect(() => {
    const el = ref.current; if (!el) return;
    let running = false, flipped = false, visible = false, timer: ReturnType<typeof setTimeout> | undefined;
    let current: Promise<unknown> | null = null;
    const cycle = async () => {
      const back = flipped && fx.repeatType === 'mirror';
      const from = back ? fx.to : ID, to = back ? ID : fx.to;
      flipped = !flipped;
      current = Promise.all(KEYS.map((k) => { mv[k].jump(from[k] ?? ID[k]); const t = to[k] ?? from[k]; return typeof t === 'number' ? animate(mv[k], t, fx.transition as never) : undefined; }));
      await current;
    };
    const loop = async () => {
      while (running) {
        await cycle();
        if (!running) break;
        await new Promise((r) => { timer = setTimeout(r, (fx.repeatDelay ?? 0) * 1000); });
      }
    };
    const start = () => { if (running) return; running = true; loop(); };
    const stop = () => { running = false; clearTimeout(timer); KEYS.forEach((k) => { mv[k].stop(); mv[k].set(ID[k]); }); flipped = false; };
    if (!fx.pauseOffscreen) { start(); return stop; }
    // hors écran : fin du cycle en cours (await p.current), puis arrêt si toujours invisible (runtime `D`)
    const leave = async () => { if (current) await current; if (!visible) stop(); };
    const io = new IntersectionObserver((es) => { for (const e of es) { visible = e.isIntersecting; if (visible) start(); else leave(); } });
    io.observe(el);
    return () => { io.disconnect(); stop(); };
  }, [fx]); // eslint-disable-line react-hooks/exhaustive-deps
  const used = Object.fromEntries(KEYS.filter((k) => k in fx.to).map((k) => [k, mv[k]]));
  return createElement(comp(as), { ...rest, ref, style: { ...style, ...used } });
}
