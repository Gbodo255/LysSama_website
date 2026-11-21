'use client';
// Calculateur de la carte « Pricing » de l'accueil (vL1rEwvHQ / J_la0crrN, docs/audit/homeb.md § 08) :
// - mode Monthly / Per Project (toggle `framer-Oiz8K`), variantes de la carte `framer-VhWls` (Desktop/Phone [Toggled]) ;
// - 4 options `framer-IGk3i` (Unchecked ↔ Checked, ligne entière cliquable), cochages conservés au changement de mode ;
// - Price Display : total = base + options cochées, `$` + toLocaleString('en-US', 0 décimale), animate 0,6 s easeOut,
//   saut sans animation si mouvement réduit ou hors de la vue ; `aria-live` porte la valeur finale ;
// - textes dépendant du mode (base, suffixe, inclus, prix des options) lus dans src/data/homeb.ts.
import { animate, useInView, useReducedMotion } from 'motion/react';
import { createContext, createElement, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { pricing } from '@/data/homeb';

const fmt = (n: number) => n.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
type St = { mode: number; checked: boolean[]; setMode: (m: number) => void; toggle: (i: number) => void };
const Ctx = createContext<St | null>(null);

export function PricingProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState(0);
  const [checked, setChecked] = useState<boolean[]>(pricing.modes[0].addons.map(() => false));
  const toggle = (i: number) => setChecked((c) => c.map((x, j) => (j === i ? !x : x)));
  return <Ctx.Provider value={{ mode, checked, setMode, toggle }}>{children}</Ctx.Provider>;
}
export const usePricing = () => useContext(Ctx);

/** Liaison du moteur de variantes (VRoot `bind`) : variante imposée par l'état et action au clic. */
export function usePricingBind(bind: string | undefined, index: number | undefined, initial: string): { v?: string; onTap?: () => void } {
  const p = usePricing();
  if (!p || !bind) return {};
  if (bind === 'card') {
    const phone = initial === 'ppP1s1b10' || initial === 'H7ehOVhk3';
    return { v: phone ? (p.mode ? 'H7ehOVhk3' : 'ppP1s1b10') : (p.mode ? 'b_CpEBBVa' : 'cup93khkL') };
  }
  if (bind === 'toggle') return { v: p.mode ? 'kTxvluWFa' : 'Q9UIdlaan', onTap: () => p.setMode(p.mode ? 0 : 1) };
  if (bind === 'addon' && index !== undefined) return { v: p.checked[index] ? 'LUln1HeAw' : 'ng7Xm9wfI', onTap: () => p.toggle(index) };
  return {};
}

// Textes du mode Monthly (SSR) → valeur du mode courant
const M = pricing.modes;
const MAP = new Map<string, string[]>([
  [`$${fmt(M[0].base)}`, M.map((m) => `$${fmt(m.base)}`)],
  [M[0].suffix, M.map((m) => m.suffix)],
  ...M[0].included.map((t, i) => [t, M.map((m) => m.included[i])] as [string, string[]]),
  ...M[0].addons.map((a, i) => [`$${fmt(a.price)}`, M.map((m) => `$${fmt(m.addons[i].price)}`)] as [string, string[]]),
]);
export const pricingVaries = (t: string) => MAP.has(t);
export function PT({ t }: { t: string }) {
  const p = usePricing();
  return <>{p ? MAP.get(t)?.[p.mode] ?? t : t}</>;
}

/** Case à cocher d'une option (bouton role=checkbox du code d'origine) : aria-checked et coche animée 0,2 s easeOut. */
export function AddonCheck({ i, children, ...rest }: { i: number; children?: ReactNode } & Record<string, unknown>) {
  const p = usePricing();
  const on = !!p?.checked[i];
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const svg = ref.current?.querySelector('svg'); if (!svg) return;
    animate(svg, { opacity: on ? 1 : 0, scale: on ? 1 : 0.6 }, { duration: 0.2, ease: 'easeOut' });
  }, [on]);
  return createElement('button', { ...rest, ref, 'aria-checked': on ? 'true' : 'false', onClick: (e: Event) => { e.stopPropagation(); p?.toggle(i); } }, children);
}

/** Price Display : `kind` total (base + options) ou addons (`+$` somme des options). */
export function PriceDisplay({ kind, ariaStyle, children, ...rest }: { kind: 'total' | 'addons'; ariaStyle?: React.CSSProperties; children?: ReactNode } & Record<string, unknown>) {
  const p = usePricing();
  const ref = useRef<HTMLElement>(null);
  const seen = useInView(ref);
  const reduce = useReducedMotion();
  const mode = M[p?.mode ?? 0];
  const sum = mode.addons.reduce((s, a, i) => s + (p?.checked[i] ? a.price : 0), 0);
  const value = kind === 'total' ? mode.base + sum : sum;
  const prefix = kind === 'total' ? '$' : '+$';
  const cur = useRef<number | null>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const write = (n: number) => {
      const w = document.createTreeWalker(el.firstElementChild || el, NodeFilter.SHOW_TEXT); let best: Text | null = null, len = 0;
      for (let a = w.nextNode(); a; a = w.nextNode()) { const l = (a.textContent || '').trim().length; if (l > len) { len = l; best = a as Text; } }
      const s = prefix + fmt(Math.round(n)); if (best && best.textContent !== s) best.textContent = s;
    };
    if (cur.current === null || reduce || !seen) { cur.current = value; write(value); return; }
    const c = animate(cur.current, value, { duration: 0.6, ease: 'easeOut', onUpdate: (n) => { cur.current = n; write(n); } });
    return () => c.stop();
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps
  return createElement('div', { ...rest, ref }, children, <span aria-live="polite" style={ariaStyle}>{prefix + fmt(value)}</span>);
}
