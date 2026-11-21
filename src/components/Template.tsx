import type { ReactNode } from 'react';
import { SharedNavigation } from '@/components/nav/SharedNavigation';
import { Footer } from '@/components/footer/Footer';
import { Cursor } from '@/components/cursor/Cursor';
import './Template.css';

/** Gabarit « Nav & Footer » (framer-eYdsD, toplevel-deps TD:25138–26064) : contenu de page, #overlay, navigation fixe, footer.
 *  Frères dans #main (DOM hydraté mesuré, reference/dom/privacy-policy/1440.html) : #template-overlay puis le curseur. */
export function Template({ children, footer = true }: { children: ReactNode; footer?: boolean }) {
  return (
    <>
      <div className="framer-eYdsD framer-yTVl5 framer-QoPvp framer-UVrHC framer-Me6vv framer-1e6htkk" data-framer-cursor="19wcnfu" data-layout-template="true" data-selection="true" style={{ minHeight: '100vh', width: 'auto' }}>
        {children}
        <div id="overlay" />
        <div className="framer-1ce8pqa" />
        <SharedNavigation />
        {footer && <Footer />}
      </div>
      <div id="template-overlay" />
      <Cursor />
    </>
  );
}
