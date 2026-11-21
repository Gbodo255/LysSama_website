'use client';
// Instance /projects de la vitrine incurvée (composant de l'auteur porté) : props du site (PROJECTS_SHOWCASE),
// groupe remplacé par breakpoint comme PropertyOverrides, slots CMS d'origine. Flèche : icône « Chevron Right »
// (zD0HidK19 : <svg.framer-ab47M role=presentation viewBox 0 0 24 24><use href="#2903821725"/>), mêmes props d'instance.
import type { ReactNode } from 'react';
import { useBreakpoint } from '@/components/Variants';
import { CurvyProjectShowcase } from '@/webgl/curved-showcase/CurvyProjectShowcase';
import { PROJECTS_SHOWCASE } from '@/data/webgl';

type O = Record<string, unknown>;
const flat = (o: O): O => Object.fromEntries(Object.entries(o).flatMap(([k, v]) => (/^[A-Z]/.test(k) && v && typeof v === 'object' && !Array.isArray(v) ? Object.entries(v as O) : [[k, v]])));
// Règle du composant icône, injectée par son runtime (absente du CSS SSR de la page).
const ICON_CSS = '.framer-ab47M { -webkit-mask: var(--framer-icon-mask); aspect-ratio: 1; display: block; mask: var(--framer-icon-mask); width: 24px; }';

const arrow = (
  <svg className="framer-ab47M framer-yawvlb" data-framer-name="Arrow SVG for Gallery" role="presentation" viewBox="0 0 24 24"
    style={{ '--1m973uw': true, '--js9iwy': true } as unknown as React.CSSProperties}>
    <use href="#2903821725" />
  </svg>
);

export function ProjectsShowcase({ slot, fontSlot, countFontSlot, detailsSlot }: { slot: ReactNode; fontSlot: ReactNode; countFontSlot: ReactNode; detailsSlot: ReactNode }) {
  const bp = useBreakpoint();
  const groups = { ...PROJECTS_SHOWCASE.desktop, ...(bp === 'tablet' ? PROJECTS_SHOWCASE.tablet : bp === 'phone' ? PROJECTS_SHOWCASE.phone : {}) };
  return (
    <>
      <style>{ICON_CSS}</style>
      <CurvyProjectShowcase {...flat(groups as O)} slot={[slot]} fontSlot={[fontSlot]} countFontSlot={[countFontSlot]} detailsSlot={[detailsSlot]} arrowSlot={[arrow]} />
    </>
  );
}
