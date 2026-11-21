import { metaFor } from '@/lib/meta';
export const metadata = metaFor('/projects/adidas');
import { PageStyle } from '@/components/PageStyle';
import { Template } from '@/components/Template';
import { FlatPage } from '@/components/Variants';
import { Body } from '@/gen/projects__adidas/Body';

// Page entièrement re-rendue côté client par l'original : aucune enveloppe ssr-variant après hydratation (D-037).
export default function Page() {
  return (
    <FlatPage>
      <PageStyle slug="projects__adidas" />
      <Template>
        <Body />
      </Template>
    </FlatPage>
  );
}
