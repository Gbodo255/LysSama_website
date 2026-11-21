'use client';
// Instances de l'accueil des composants de code de l'auteur (portés tels quels) : mêmes props que le site
// (HOME_INSTANCE_PROPS : groupes du panneau Framer aplatis comme au rendu) et surcharges par breakpoint.
import type { ReactNode } from 'react';
import { useBreakpoint } from '@/components/Variants';
import { DistortoSlider, HOME_INSTANCE_PROPS as SLIDER, HOME_BREAKPOINT_OVERRIDES as SLIDER_BP } from '@/webgl/hero-slider/DistortoSlider';
import { PortalPreloader, HOME_INSTANCE_PROPS as PRELOADER } from '@/components/preloader/PortalPreloader';

type O = Record<string, unknown>;
// Groupes du panneau (clés en majuscule : Content, Thumbs, Reveal…) → props de premier niveau.
const flat = (o: O): O => Object.fromEntries(Object.entries(o).flatMap(([k, v]) => (/^[A-Z]/.test(k) && v && typeof v === 'object' && !Array.isArray(v) ? Object.entries(v as O) : [[k, v]])));

export function HomeSlider({ slot }: { slot: ReactNode }) {
  const bp = useBreakpoint();
  const over = bp === 'tablet' ? SLIDER_BP.kUxiuAHJw : bp === 'phone' ? SLIDER_BP.qjDyvUsLb : {};
  const props = { ...flat(SLIDER as O), ...flat(over as O) };
  return <DistortoSlider {...props} slot={slot} />;
}

// Logo : image archivée localement (public/assets/icons, manifest) au lieu de framerusercontent.
const LOGO = '/assets/icons/RJYJ7m4uMRkQG50UIT9V4iefE.svg';
export function HomePreloader({ counterSlot }: { counterSlot: ReactNode }) {
  return <PortalPreloader {...flat(PRELOADER as O)} logoImage={LOGO} counterSlot={counterSlot} />;
}
