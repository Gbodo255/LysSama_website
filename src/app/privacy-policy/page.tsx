import { metaFor } from '@/lib/meta';
export const metadata = metaFor('/privacy-policy');
import { PageStyle } from '@/components/PageStyle';
import { Template } from '@/components/Template';
import { Body } from '@/gen/privacy-policy/Body';

export default function Page() {
  return (
    <>
      <PageStyle slug="privacy-policy" />
      <Template>
        <Body />
      </Template>
    </>
  );
}
