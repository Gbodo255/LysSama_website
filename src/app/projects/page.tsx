import { PageStyle } from '@/components/PageStyle';
import { Template } from '@/components/Template';
import { Body } from '@/gen/projects/Body';

// /projects : gabarit sans footer (défilement horizontal).
export default function Page() {
  return (
    <>
      <PageStyle slug="projects" />
      <Template footer={false}>
        <Body />
      </Template>
    </>
  );
}
