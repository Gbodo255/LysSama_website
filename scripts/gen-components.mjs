// Composants interactifs pilotés par le moteur de variantes (src/components/fx/Variant.tsx).
// tap : variante courante → variante après clic ; follow : variante du parent → variante de ce composant.
// Valeurs lues dans le code compilé (onTap / variant: … de chaque instance).
export const COMPONENTS = {
  // FAQ Item (NIqbhJ1MS) : Closed tw5CtHDal ⇄ Open z490WtIIP au clic (onTap : oe/I(...)) ; icône Plus (framer-LQ8sa) suit.
  'framer-pOYKh': { tap: { tw5CtHDal: 'z490WtIIP', z490WtIIP: 'tw5CtHDal' } },
  'framer-LQ8sa': { follow: { tw5CtHDal: 'dwfiz8xsn', z490WtIIP: 'k601oOa0D' } },
  // Carte « Contact CTA » (n_03H18N2) : Default → Loading (onLoading), Error (onError), Success 800 ms après onSuccess.
  'framer-KEC63': { events: { loading: 'SHEQP1pE0', error: 'ecW7wXnOV', success: 'Esh2uhvll' } },
};
