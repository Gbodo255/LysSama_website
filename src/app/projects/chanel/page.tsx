import { PageStyle } from '@/components/PageStyle';
import { Template } from '@/components/Template';
import { Body } from '@/gen/projects__chanel/Body';

export default function Page() {
  return (
    <>
      <PageStyle slug="projects__chanel" />
      <Template>
        <Body />
      </Template>
    </>
  );
}
