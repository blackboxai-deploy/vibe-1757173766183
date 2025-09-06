import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import '../styles/animations.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Alex Johnson - Full-Stack Developer | Modern Web Solutions',
  description: 'Professional full-stack developer specializing in React, Next.js, and modern web technologies. Creating exceptional digital experiences with clean code and innovative design.',
  keywords: 'full-stack developer, web developer, React, Next.js, JavaScript, TypeScript, frontend, backend, UI/UX design',
  authors: [{ name: 'Alex Johnson' }],
  creator: 'Alex Johnson',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alexjohnson.dev',
    title: 'Alex Johnson - Full-Stack Developer',
    description: 'Professional full-stack developer creating exceptional digital experiences with modern technologies.',
    siteName: 'Alex Johnson Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Alex Johnson - Full-Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Johnson - Full-Stack Developer',
    description: 'Professional full-stack developer creating exceptional digital experiences with modern technologies.',
    creator: '@alexjohnsondev',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}