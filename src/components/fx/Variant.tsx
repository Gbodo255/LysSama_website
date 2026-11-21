'use client';
// Moteur de variantes des composants Framer (scripts/extract-components.mjs → reference/framer/components.json,
// variant-styles.json) : la racine d'une instance (`VRoot`) porte la variante courante (classe `framer-v-*` et
// `data-framer-name` de l'original) ; ses éléments (`VEl`) animent vers les styles déclarés pour cette variante
// (`variants: { id: {...} }` du code compilé), sinon vers leur style de base, avec la transition par défaut du
// composant et une animation de mise en page (layout), comme le runtime d'origine.
import { motion } from 'motion/react';
import { createContext, createElement, useContext, useState, type ElementType } from 'react';

type Ctx = { v: string; transition: Record<string, unknown> } | null;
const VCtx = createContext<Ctx>(null);
const cache = new Map<string, ElementType>();
const comp = (tag: string) => { let c = cache.get(tag); if (!c) { c = motion.create(tag as 'div'); cache.set(tag, c); } return c; };
type VMap = Record<string, { cls: string; name?: string }>;

export function VRoot({ as, map, initial, transition, tap, follow, className, ...rest }: {
  as: string; map: VMap; initial: string; transition: Record<string, unknown>;
  tap?: Record<string, string>; follow?: Record<string, string>; className: string;
} & Record<string, unknown>) {
  const parent = useContext(VCtx);
  const [own, setOwn] = useState(initial);
  const v = follow && parent && follow[parent.v] ? follow[parent.v] : own;
  const cls = Object.values(map).reduce((c, x) => c.replace(new RegExp(`\\b${x.cls}\\b`), ''), className).replace(/\s+/g, ' ').trim() + ' ' + map[v].cls;
  const props: Record<string, unknown> = { ...rest, className: cls, layout: true, transition, 'data-framer-name': map[v].name ?? rest['data-framer-name'] };
  if (tap && tap[v]) props.onTap = () => setOwn((x) => tap[x] ?? x);
  return <VCtx.Provider value={{ v, transition }}>{createElement(comp(as), props)}</VCtx.Provider>;
}

export function VEl({ as, base, variants, style, ...rest }: { as: string; base: Record<string, unknown>; variants: Record<string, Record<string, unknown>>; style?: Record<string, unknown> } & Record<string, unknown>) {
  const ctx = useContext(VCtx);
  const keys = new Set(Object.values(variants).flatMap((o) => Object.keys(o)));
  const target: Record<string, unknown> = {};
  for (const k of keys) target[k] = ctx && variants[ctx.v] && k in variants[ctx.v] ? variants[ctx.v][k] : base[k];
  return createElement(comp(as), { ...rest, style, layout: true, initial: false, animate: target, transition: ctx?.transition });
}
