import type { Metadata, Viewport } from 'next';
import { SvgSprite } from '@/components/SvgSprite';
import '@/styles/globals.css';

export const metadata: Metadata = { title: 'Mira Studio' };
export const viewport: Viewport = { width: 'device-width' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <div id="main">{children}</div>
        <SvgSprite />
      </body>
    </html>
  );
}
