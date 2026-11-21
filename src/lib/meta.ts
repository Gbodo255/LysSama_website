import type { Metadata } from 'next';
import { PAGE_META } from '@/data/global';

/** Métadonnées d'une route, reprises de l'original (PAGE_META, extrait du HTML de chaque page). */
export function metaFor(route: keyof typeof PAGE_META): Metadata {
  const m = PAGE_META[route] as Record<string, string>;
  return {
    title: m.title,
    description: m.description,
    alternates: m.canonical ? { canonical: m.canonical } : undefined,
    robots: m.robots,
    openGraph: { type: (m.ogType as 'website') || 'website', title: m.ogTitle, description: m.ogDescription, images: m.ogImageLocal || m.ogImage },
    twitter: { card: (m.twitterCard as 'summary_large_image') || 'summary_large_image', title: m.twitterTitle, description: m.twitterDescription, images: m.twitterImage },
  };
}
