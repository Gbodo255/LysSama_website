// Transitions relevées dans le code compilé de l'original (reference/framer-code/pretty/toplevel-deps…, TD:ligne).
import type { Transition } from 'motion/react';

export const tween = (duration: number, ease: [number, number, number, number], delay = 0): Transition => ({ type: 'tween', duration, ease, delay });
export const EASE_IO: [number, number, number, number] = [0.87, 0, 0.13, 1];
export const EASE_STD: [number, number, number, number] = [0.4, 0, 0.2, 1];

/** Rayon Framer avec `corner-shape: superellipse(1.5)` (repli 0,752 si non pris en charge). */
export const radius = (px: number) => `calc(${px}px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`;
export const radii = (px: number) => ({ borderBottomLeftRadius: radius(px), borderBottomRightRadius: radius(px), borderTopLeftRadius: radius(px), borderTopRightRadius: radius(px) });
export const superellipse = { '--corner-shape-fallback': 0.752, cornerShape: 'superellipse(1.5)' } as Record<string, string | number>;

// Couleurs de jetons utilisées en style en ligne (identiques aux replis du code d'origine).
export const TOKEN = {
  white: 'var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))',
  black: 'var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))',
  accent: 'var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 87, 3))',
  accent57: 'var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))',
  grey188: 'var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))',
  overlay: 'var(--token-6e62038c-0066-4a2a-9fbd-3ca05d5d5284, rgb(31, 31, 31))',
  border: 'var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.3))',
} as const;
