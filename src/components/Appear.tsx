'use client';
// Animations d'apparition Framer (`data-framer-appear-id`) : mêmes valeurs que le JSON
// <script type="framer/appear"> de la page (reference/framer/animations.json), variante choisie par breakpoint
// comme le runtime d'origine (clé = hachage du breakpoint actif, sinon « default »).
import { motion } from 'motion/react';
import { createElement, useEffect, useState, type ComponentProps, type ElementType } from 'react';
import { useBreakpoint } from '@/components/Variants';
import type { Breakpoint } from '@/lib/breakpoints';
import { centering } from '@/components/fx/centering';

type Anim = { initial: Record<string, unknown>; animate: Record<string, unknown> };
export type AppearSpec = Record<string, Anim | null>; // null : pas d'animation sur ce breakpoint (état final direct)
const cache = new Map<string, ElementType>();
const comp = (tag: string) => { let c = cache.get(tag); if (!c) { c = motion.create(tag as 'div'); cache.set(tag, c); } return c; };

/** `spec` : variantes de l'animation (clé = hachage de breakpoint | default) ; `bps` : hachages de breakpoint → breakpoint. */
export function Appear({ as, spec, bps, ...rest }: { as: string; spec: AppearSpec; bps: Record<string, Breakpoint> } & ComponentProps<'div'>) {
  const bp = useBreakpoint();
  const [go, setGo] = useState(false);
  useEffect(() => setGo(true), []);
  const key = bp ? Object.keys(spec).find((k) => k !== 'default' && bps[k] === bp) : undefined;
  const a = key ? spec[key] : spec.default;
  const d = spec.default!;
  const transformTemplate = centering(rest.style);
  if (a === null) return createElement(comp(as), { ...rest, transformTemplate, initial: false, animate: d.animate });
  return createElement(comp(as), { ...rest, transformTemplate, initial: a.initial, animate: go ? a.animate : a.initial });
}
