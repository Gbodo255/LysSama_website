import { PageStyle } from '@/components/PageStyle';
import { Template } from '@/components/Template';
import { Body } from '@/gen/home/Body';

export default function Page() {
  return (
    <>
      <PageStyle slug="home" />
      <Template>
        <Body />
      </Template>
    </>
  );
}
