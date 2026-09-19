import type { Metadata, Viewport } from 'next';
import './globals.css';
import './promotion.css';

export const metadata: Metadata = {
  title: 'မြန်မာ မိုနိုပိုလီ',
  description: 'A Myanmar-themed, sponsor-customizable online Monopoly-style board game.',
  openGraph: { title: 'မြန်မာ မိုနိုပိုလီ', description: 'Play Myanmar’s online board game.' },
};

export const viewport: Viewport = {
  width: 'device-width', initialScale: 1, viewportFit: 'cover', themeColor: '#071a16',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="my"><body>{children}</body></html>;
}
