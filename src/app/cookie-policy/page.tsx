import { PageStyle } from '@/components/PageStyle';
import { Template } from '@/components/Template';
import { Body } from '@/gen/cookie-policy/Body';

export default function Page() {
  return (
    <>
      <PageStyle slug="cookie-policy" />
      <Template>
        <Body />
      </Template>
    </>
  );
}
