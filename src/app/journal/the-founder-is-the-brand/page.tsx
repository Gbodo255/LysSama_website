import { metaFor } from '@/lib/meta';
export const metadata = metaFor('/journal/the-founder-is-the-brand');
import { PageStyle } from '@/components/PageStyle';
import { Template } from '@/components/Template';
import { Body } from '@/gen/journal__the-founder-is-the-brand/Body';

export default function Page() {
  return (
    <>
      <PageStyle slug="journal__the-founder-is-the-brand" />
      <Template>
        <Body />
      </Template>
    </>
  );
}
