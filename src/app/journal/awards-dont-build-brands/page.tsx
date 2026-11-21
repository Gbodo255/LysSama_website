import { metaFor } from '@/lib/meta';
export const metadata = metaFor('/journal/awards-dont-build-brands');
import { PageStyle } from '@/components/PageStyle';
import { Template } from '@/components/Template';
import { Body } from '@/gen/journal__awards-dont-build-brands/Body';

export default function Page() {
  return (
    <>
      <PageStyle slug="journal__awards-dont-build-brands" />
      <Template>
        <Body />
      </Template>
    </>
  );
}
