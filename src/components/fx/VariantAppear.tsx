'use client';
// Bascule de variante d'un composant à l'entrée dans la vue (`__framer__variantAppearEffectEnabled`,
// `__framer__obscuredVariantId` → `__framer__visibleVariantId`, `__framer__threshold`, `__framer__animateOnce` :
// reference/framer/fx.json + variants.json). Classe `framer-v-*` et `data-framer-name` de la racine du composant changent ;
// les règles CSS des deux variantes sont celles de l'original (Body.css). Transition de mise en page : Phase 5.
import { createElement, useEffect, useRef, useState } from 'react';

export type VAppearFx = { from: { cls: string; name?: string }; to: { cls: string; name?: string }; threshold: number; once: boolean };

export function VariantAppear({ as, fx, className, ...rest }: { as: string; fx: VAppearFx; className: string } & Record<string, unknown>) {
  const ref = useRef<HTMLElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((es) => { for (const e of es) { if (e.isIntersecting) { setOn(true); if (fx.once) io.disconnect(); } else if (!fx.once) setOn(false); } }, { threshold: fx.threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [fx]);
  const cls = on ? className.replace(fx.from.cls, fx.to.cls) : className;
  const name = on && fx.to.name ? fx.to.name : (rest['data-framer-name'] as string | undefined);
  return createElement(as, { ...rest, ref, className: cls, 'data-framer-name': name });
}
