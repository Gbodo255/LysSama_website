import { PageStyle } from '@/components/PageStyle';
import { Body } from '@/gen/this-page-does-not-exist-404/Body';

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
