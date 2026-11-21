import { PageStyle } from '@/components/PageStyle';
import { Template } from '@/components/Template';
import { Body } from '@/gen/journal__fewer-projects-more-attention/Body';

export default function Page() {
  return (
    <>
      <PageStyle slug="journal__fewer-projects-more-attention" />
      <Template>
        <Body />
      </Template>
    </>
  );
}
