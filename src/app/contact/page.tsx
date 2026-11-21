import { PageStyle } from '@/components/PageStyle';
import { Template } from '@/components/Template';
import { Body } from '@/gen/contact/Body';

export default function Page() {
  return (
    <>
      <PageStyle slug="contact" />
      <Template>
        <Body />
      </Template>
    </>
  );
}
