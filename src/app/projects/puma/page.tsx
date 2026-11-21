import { PageStyle } from '@/components/PageStyle';
import { Template } from '@/components/Template';
import { FlatPage } from '@/components/Variants';
import { Body } from '@/gen/projects__puma/Body';

// Page entièrement re-rendue côté client par l'original : aucune enveloppe ssr-variant après hydratation (D-037).
export default function Page() {
  return (
    <FlatPage>
      <PageStyle slug="projects__puma" />
      <Template>
        <Body />
      </Template>
    </FlatPage>
  );
}
