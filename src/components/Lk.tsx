'use client';
import type { ComponentProps } from 'react';
import { useLink } from '@/components/useLink';

/** Lien interne généré : `href` relatif identique à l'original, navigation côté client. */
export function Lk({ to, ...rest }: { to: string } & ComponentProps<'a'>) {
  const l = useLink(to);
  return <a {...rest} href={l.href} onClick={l.onClick} />;
}
