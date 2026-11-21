'use client';
import type { ComponentProps } from 'react';
import { useLink } from '@/components/useLink';

/** Lien interne généré : `href` relatif identique à l'original, navigation côté client. */
/** `href` : valeur d'origine du SSR (relative au dossier de la page, ex. `./on-saying-no` depuis /journal/x). */
export function Lk({ to, href, ...rest }: { to: string } & ComponentProps<'a'>) {
  const l = useLink(to);
  return <a {...rest} href={href ?? l.href} onClick={l.onClick} />;
}
