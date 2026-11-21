import { PageStyle } from '@/components/PageStyle';
import { Template } from '@/components/Template';
import { Body } from '@/gen/studio/Body';

export default function Page() {
  return (
    <>
      <PageStyle slug="studio" />
      <Template>
        <Body />
      </Template>
    </>
  );
}
