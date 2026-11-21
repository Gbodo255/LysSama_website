import { PageStyle } from '@/components/PageStyle';
import { Template } from '@/components/Template';
import { Body } from '@/gen/projects__puma/Body';

export default function Page() {
  return (
    <>
      <PageStyle slug="projects__puma" />
      <Template>
        <Body />
      </Template>
    </>
  );
}
