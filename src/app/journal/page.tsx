import { PageStyle } from '@/components/PageStyle';
import { Template } from '@/components/Template';
import { Body } from '@/gen/journal/Body';

export default function Page() {
  return (
    <>
      <PageStyle slug="journal" />
      <Template>
        <Body />
      </Template>
    </>
  );
}
