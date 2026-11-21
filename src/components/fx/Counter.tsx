'use client';
// Compteur (composant de code rWbx8J1Z4 `Y`), porté à l'identique, mécanique d'état comprise (D-027) :
// - useInView(amount some, once = !replay) ; animate(start → end) ressort 500/60/1 ; `toFixed(decimals)` (+ virgules) ;
// - écrit `prefix + n + suffix` dans le plus long nœud texte du calque source ;
// - à l'entrée, DEUX effets appellent A() dans le même rendu avec le même état `x` périmé : la 1re animation n'est
//   jamais arrêtée et peut réécrire la valeur après la remise à `start` à la sortie (anomalie mesurée : compteur 2 à « 3 »).
import { animate, useInView } from 'motion/react';
import { createElement, useEffect, useRef, useState, type ReactNode } from 'react';

type M = { start: number; end: number; decimals: number; prefix: string; suffix: string; commas?: boolean };
const TRANSITION = { type: 'spring', stiffness: 500, damping: 60, mass: 1, delay: 0 } as const;
type Ctl = { stop: () => void };

export function Counter({ as, m, children, ...rest }: { as: string; m: M; children?: ReactNode } & Record<string, unknown>) {
  const ref = useRef<HTMLElement>(null);
  const r = useInView(ref, { once: false, amount: 'some' });
  const [x, S] = useState<Ctl | null>(null);
  const node = useRef<Text | null>(null);
  const k = (v: number) => { let t = v.toFixed(m.decimals); if (m.commas) t = t.replace(/\B(?=(\d{3})+(?!\d))/g, ','); return t; };
  const O = (s: string) => {
    const el = ref.current; if (!el) return;
    let n = node.current;
    if (!n || !el.contains(n)) { const w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT); let best = 0; n = null; for (let a = w.nextNode(); a; a = w.nextNode()) { const l = (a.textContent || '').trim().length; if (l > best) { best = l; n = a as Text; } } if (!n) return; node.current = n; }
    if (n.textContent !== s) n.textContent = s;
  };
  const A = () => { if (x) x.stop(); S(animate(m.start, m.end, { ...TRANSITION, onUpdate: (t: number) => O(`${m.prefix}${k(t)}${m.suffix}`) })); };
  useEffect(() => { O(`${m.prefix}${k(m.start)}${m.suffix}`); }, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => { if (r) A(); }, [r]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => { if (r) A(); else { if (x) x.stop(); O(`${m.prefix}${k(m.start)}${m.suffix}`); } }, [r]); // eslint-disable-line react-hooks/exhaustive-deps
  return createElement(as, { ...rest, ref }, children);
}
