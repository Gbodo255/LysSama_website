'use client';
// Défilement des « Temps forts » de l'accueil (D-049), comme le composant d'origine (docs/audit/homeb.md, Testimonial Slider) :
// flèche gauche = précédente, flèche droite ou clic sur la citation = suivante, en boucle ; une seule carte montée à la fois
// (elle rejoue ses apparitions). Les cartes 2 et 3 sont produites par scripts/rewrite/testimonials.mjs.
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

const N = 3;
const Ctx = createContext(0);
const PREV = '.framer-14tgpb2', NEXT = '.framer-b6sk2n, .framer-1eyfg5';

/** Fournit la diapositive active ; écoute les flèches (clic, Entrée, Espace) et le clic sur la citation. Aucun nœud DOM. */
export function TSlider({ children }: { children: ReactNode }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const go = (e: Event) => {
      const t = e.target as Element | null;
      if (!t?.closest?.('.framer-dujsxl-container')) return;
      if (e instanceof KeyboardEvent && e.key !== 'Enter' && e.key !== ' ') return;
      const d = t.closest(PREV) ? -1 : t.closest(NEXT) ? 1 : 0;
      if (!d) return;
      if (e instanceof KeyboardEvent) e.preventDefault();
      setI((x) => (x + d + N) % N);
    };
    document.addEventListener('click', go);
    document.addEventListener('keydown', go);
    return () => { document.removeEventListener('click', go); document.removeEventListener('keydown', go); };
  }, []);
  return <Ctx.Provider value={i}>{children}</Ctx.Provider>;
}

/** Compteur « 01 / 03 ». */
export function TCount() {
  return <>{`0${useContext(Ctx) + 1} / 0${N}`}</>;
}

/** Carte n° i : montée seulement quand elle est active. */
export function TSlide({ i, children }: { i: number; children: ReactNode }) {
  return useContext(Ctx) === i ? <>{children}</> : null;
}
