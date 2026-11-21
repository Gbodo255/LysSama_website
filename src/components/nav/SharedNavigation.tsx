'use client';
import { NavBar } from './NavBar';
import { Variants } from '@/components/Variants';

/** Conteneur « Shared Navigation » (fixe, z 9) : variante fermée du breakpoint actif. */
export function SharedNavigation() {
  return (
    <div className="framer-9ihltw-container" data-framer-name="Shared Navigation" {...{ name: 'Shared Navigation' }}>
      <Variants d={<NavBar initial="dClosed" />} t={<NavBar initial="tClosed" />} p={<NavBar initial="pClosed" />} />
    </div>
  );
}
