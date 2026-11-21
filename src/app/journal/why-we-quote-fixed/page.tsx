import { metaFor } from '@/lib/meta';
export const metadata = metaFor('/journal/why-we-quote-fixed');
import { PageStyle } from '@/components/PageStyle';
import { Template } from '@/components/Template';
import { Body } from '@/gen/journal__why-we-quote-fixed/Body';

export default function Page() {
  return (
    <>
      <PageStyle slug="journal__why-we-quote-fixed" />
      <Template>
        <Body />
      </Template>
    </>
  );
}
