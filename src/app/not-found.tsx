import { metaFor } from '@/lib/meta';
export const metadata = metaFor('/this-page-does-not-exist-404');
import { PageStyle } from '@/components/PageStyle';
import { Body } from '@/gen/this-page-does-not-exist-404/Body';
// Règles des composants partagés (liens de navigation, bouton) : dédupliquées du Body.css car portées par les CSS du gabarit.
import '@/components/nav/SharedNavigation.css';
import '@/components/footer/Footer.css';

// 404 : page sans gabarit (pas de navigation ni de footer) ; #main = style, racine, #overlay (DOM hydraté mesuré).
export default function NotFound() {
  return (
    <>
      <PageStyle slug="this-page-does-not-exist-404" />
      <Body />
      <div id="overlay" />
    </>
  );
}
