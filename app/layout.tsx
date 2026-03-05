import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'LH44 — Lewis Hamilton Fan Site',
    template: '%s | LH44',
  },
  description: 'The definitive fan site for Sir Lewis Hamilton — 8x Formula 1 World Champion. Stats, history, galleries, standings, and more.',
  keywords: ['Lewis Hamilton', 'F1', 'Formula 1', 'LH44', 'F1 Champion', 'Racing'],
  openGraph: {
    type: 'website',
    title: 'LH44 — Lewis Hamilton Fan Site',
    description: 'The definitive fan site for Sir Lewis Hamilton — 8x Formula 1 World Champion.',
    siteName: 'LH44',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LH44 — Lewis Hamilton Fan Site',
    description: 'The definitive fan site for Sir Lewis Hamilton — 8x Formula 1 World Champion.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        <main className="page-wrapper">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
