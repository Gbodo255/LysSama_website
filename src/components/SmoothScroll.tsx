'use client';
// « Lenis Smooth Scroll » (Lenis.B0ikntHt.mjs `M`, Lenis 1.3.25, D-025) : mêmes options que l'instance d'origine —
// smoothWheel = smooth, duration = intensity / 10, gestureOrientation both en horizontal, syncTouch si infinite ou
// horizontal, autoRaf, autoToggle, anchors, allowNestedScroll, stopInertiaOnNavigate ; window.lenis exposé ; même <style>.
import Lenis from 'lenis';
import { useEffect } from 'react';

const CSS = `html.lenis,
html.lenis body {
  height: auto;
}

.lenis:not(.lenis-autoToggle).lenis-stopped {
  overflow: clip;
}

.lenis [data-lenis-prevent],
.lenis [data-lenis-prevent-wheel],
.lenis [data-lenis-prevent-touch],
.lenis [data-lenis-prevent-vertical],
.lenis [data-lenis-prevent-horizontal] {
  overscroll-behavior: contain;
}

.lenis.lenis-smooth iframe {
  pointer-events: none;
}

.lenis.lenis-autoToggle {
  transition-property: overflow;
  transition-duration: 1ms;
  transition-behavior: allow-discrete;
}`;

type Props = { orientation?: 'vertical' | 'horizontal'; intensity?: number; smooth?: boolean; infinite?: boolean } & Record<string, unknown>;

export function SmoothScroll({ orientation = 'vertical', intensity = 8, smooth = true, infinite = false, ...rest }: Props) {
  useEffect(() => {
    const l = new Lenis({
      smoothWheel: smooth, duration: intensity / 10, infinite, orientation,
      gestureOrientation: orientation === 'horizontal' ? 'both' : 'vertical',
      autoRaf: true, autoToggle: true, anchors: true, allowNestedScroll: true,
      syncTouch: !!infinite || orientation === 'horizontal', stopInertiaOnNavigate: true,
    });
    (window as unknown as { lenis?: Lenis }).lenis = l;
    return () => l.destroy();
  }, [orientation, intensity, smooth, infinite]);
  return <div {...rest}><style>{CSS}</style></div>;
}
