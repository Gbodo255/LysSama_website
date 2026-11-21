import { PageStyle } from '@/components/PageStyle';
import { Template } from '@/components/Template';
import { Body } from '@/gen/projects__under-armour/Body';

export default function Page() {
  return (
    <>
      <PageStyle slug="projects__under-armour" />
      <Template>
        <Body />
      </Template>
    </>
  );
}
