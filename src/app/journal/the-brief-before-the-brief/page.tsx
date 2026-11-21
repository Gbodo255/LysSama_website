import { PageStyle } from '@/components/PageStyle';
import { Template } from '@/components/Template';
import { Body } from '@/gen/journal__the-brief-before-the-brief/Body';

export default function Page() {
  return (
    <>
      <PageStyle slug="journal__the-brief-before-the-brief" />
      <Template>
        <Body />
      </Template>
    </>
  );
}
