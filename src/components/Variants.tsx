'use client';
import { createContext, useContext, useSyncExternalStore, type ReactNode } from 'react';
import { MQ, type Breakpoint } from '@/lib/breakpoints';

// Même mécanisme que l'original : le HTML statique contient une variante par breakpoint (masquées en CSS,
// classes `hidden-*` globales de framer-base.css) ; après hydratation seule la variante active reste dans le DOM.
const subscribe = (cb: () => void) => {
  const mqs = Object.values(MQ).map((q) => window.matchMedia(q));
  mqs.forEach((m) => m.addEventListener('change', cb));
  return () => mqs.forEach((m) => m.removeEventListener('change', cb));
};
const current = (): Breakpoint => (window.matchMedia(MQ.desktop).matches ? 'desktop' : window.matchMedia(MQ.tablet).matches ? 'tablet' : 'phone');

export function useBreakpoint(): Breakpoint | null {
  return useSyncExternalStore(subscribe, current, () => null);
}

const HIDE: Record<Breakpoint, string> = { desktop: 'hidden-1e6htkk', tablet: 'hidden-1wjgfnr', phone: 'hidden-1pvmz1y' };
const ALL: Breakpoint[] = ['desktop', 'tablet', 'phone'];

/** `d`/`t`/`p` : contenu par breakpoint. Un même nœud peut servir plusieurs breakpoints (ex. t = d). */
// Pages rendues entièrement côté client par l'original (mesuré : 0 enveloppe `ssr-variant` dans le DOM hydraté des
// 6 pages projet) : après hydratation, seul le contenu du groupe actif reste, sans enveloppe.
const Flat = createContext(false);
export function FlatPage({ children }: { children: ReactNode }) { return <Flat.Provider value>{children}</Flat.Provider>; }

export function Variants({ d, t, p }: { d: ReactNode; t: ReactNode; p: ReactNode }) {
  const bp = useBreakpoint();
  const flat = useContext(Flat);
  const by: Record<Breakpoint, ReactNode> = { desktop: d, tablet: t, phone: p };
  if (flat && bp) return <>{by[bp]}</>;
  // Regroupe les breakpoints qui partagent le même nœud, comme le SSR d'origine. Après hydratation, l'original
  // garde l'enveloppe `ssr-variant` du groupe actif et retire les autres (mesuré : reference/dom/privacy-policy/*.html).
  const groups: { node: ReactNode; bps: Breakpoint[] }[] = [];
  for (const b of ALL) { const g = groups.find((x) => x.node === by[b]); if (g) g.bps.push(b); else groups.push({ node: by[b], bps: [b] }); }
  return <>{groups.map((g, i) => (bp && !g.bps.includes(bp) ? null : <div key={i} className={['ssr-variant', ...ALL.filter((b) => !g.bps.includes(b)).map((b) => HIDE[b])].join(' ')}>{g.node}</div>))}</>;
}

/** Enveloppe `ssr-variant` générée (scripts/genpage.mjs) : classes d'origine telles quelles, retirée du DOM après
 *  hydratation hors des breakpoints `show` (même mécanisme que `Variants`, mesuré D-030). */
export function SV({ c, show, children }: { c: string; show: Breakpoint[]; children?: ReactNode }) {
  const bp = useBreakpoint();
  const flat = useContext(Flat);
  if (bp && !show.includes(bp)) return null;
  return flat && bp ? <>{children}</> : <div className={c}>{children}</div>;
}

/** Élément porteur d'une classe `hidden-*` : présent dans le HTML statique, retiré du DOM après hydratation sur les
 *  breakpoints où il est masqué (comportement mesuré de l'original : « Filler », « Navigation Spacer » absents à 390). */
export function HideOn({ on, children }: { on: Breakpoint[]; children: ReactNode }) {
  const bp = useBreakpoint();
  return bp && on.includes(bp) ? null : <>{children}</>;
}
