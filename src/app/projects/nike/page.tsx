import { PageStyle } from '@/components/PageStyle';
import { Template } from '@/components/Template';
import { Body } from '@/gen/projects__nike/Body';

export default function Page() {
  return (
    <>
      <PageStyle slug="projects__nike" />
      <Template>
        <Body />
      </Template>
    </>
  );
}
