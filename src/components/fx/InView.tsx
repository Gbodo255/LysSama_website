'use client';
// Apparition Framer au défilement (`__framer__styleAppearEffectEnabled`, `__framer__enter` → `__framer__animate`,
// `__framer__animateOnce`, `__framer__threshold`, `__targetOpacity` : reference/framer/fx.json), reproduite avec motion.
import { motion } from 'motion/react';
import { createElement, type ElementType } from 'react';
import { centering } from './centering';

const cache = new Map<string, ElementType>();
const comp = (tag: string) => { let c = cache.get(tag); if (!c) { c = motion.create(tag as 'div'); cache.set(tag, c); } return c; };
type Enter = Record<string, number>;
export type InViewFx = { enter: Enter; transition: Record<string, unknown>; once: boolean; threshold: number; target: number };

export function InView({ as, fx, ...rest }: { as: string; fx: InViewFx } & Record<string, unknown>) {
  const to: Record<string, number> = {};
  for (const k of Object.keys(fx.enter)) to[k] = k === 'opacity' ? fx.target : k === 'scale' ? 1 : 0;
  return createElement(comp(as), { ...rest, transformTemplate: centering(rest.style), initial: fx.enter, whileInView: { ...to, transition: fx.transition }, viewport: { once: fx.once, amount: fx.threshold } });
}
