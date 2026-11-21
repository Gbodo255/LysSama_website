import { PageStyle } from '@/components/PageStyle';
import { Template } from '@/components/Template';
import { Body } from '@/gen/journal__the-best-type-is-invisible/Body';

export default function Page() {
  return (
    <>
      <PageStyle slug="journal__the-best-type-is-invisible" />
      <Template>
        <Body />
      </Template>
    </>
  );
}
