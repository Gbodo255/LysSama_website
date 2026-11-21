import { PageStyle } from '@/components/PageStyle';
import { Template } from '@/components/Template';
import { Body } from '@/gen/journal__on-saying-no/Body';

export default function Page() {
  return (
    <>
      <PageStyle slug="journal__on-saying-no" />
      <Template>
        <Body />
      </Template>
    </>
  );
}
