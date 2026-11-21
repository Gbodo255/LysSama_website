'use client';
import { usePathname, useRouter } from 'next/navigation';
import type { MouseEvent } from 'react';
import { relHref } from '@/lib/href';

/** Lien interne : attribut `href` relatif identique à l'original, navigation côté client (changement immédiat, D-026 / global.md §8). */
export function useLink(to: string, onNavigate?: () => void) {
  const path = usePathname() || '/';
  const router = useRouter();
  return {
    href: relHref(to, path),
    onClick: (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      e.preventDefault();
      onNavigate?.();
      router.push(to);
    },
  };
}
