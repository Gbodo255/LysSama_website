import { metaFor } from '@/lib/meta';
export const metadata = metaFor('/journal/small-looks-expensive');
import { PageStyle } from '@/components/PageStyle';
import { Template } from '@/components/Template';
import { Body } from '@/gen/journal__small-looks-expensive/Body';

export default function Page() {
  return (
    <>
      <PageStyle slug="journal__small-looks-expensive" />
      <Template>
        <Body />
      </Template>
    </>
  );
}
