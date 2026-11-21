import { metaFor } from '@/lib/meta';
export const metadata = metaFor('/terms-conditions');
import { PageStyle } from '@/components/PageStyle';
import { Template } from '@/components/Template';
import { Body } from '@/gen/terms-conditions/Body';

export default function Page() {
  return (
    <>
      <PageStyle slug="terms-conditions" />
      <Template>
        <Body />
      </Template>
    </>
  );
}
