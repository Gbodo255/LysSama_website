// Breakpoints confirmés (@media de l'original, D-005). Seule source pour le TS ; le CSS utilise les mêmes bornes
// (vérifié par scripts/checks/breakpoints.mjs).
export const BP = { tablet: 810, desktop: 1200 } as const;
export const MQ = {
  desktop: '(min-width: 1200px)',
  tablet: '(min-width: 810px) and (max-width: 1199.98px)',
  phone: '(max-width: 809.98px)',
} as const;
export type Breakpoint = keyof typeof MQ;
export const breakpointOf = (w: number): Breakpoint => (w >= BP.desktop ? 'desktop' : w >= BP.tablet ? 'tablet' : 'phone');
