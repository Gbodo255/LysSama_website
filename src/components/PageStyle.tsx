import { PAGE_STYLES } from '@/data/page-styles';

/** Styles <html>/<body> propres à la page (identiques à l'original), montés avec elle. */
export function PageStyle({ slug }: { slug: string }) {
  const css = PAGE_STYLES[slug];
  return css ? <style dangerouslySetInnerHTML={{ __html: css }} /> : null;
}
