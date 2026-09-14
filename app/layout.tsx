import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { SITE } from '@/lib/constants';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.displayName} — Full-Stack Developer & AI-Assisted Builder`,
    template: `%s | ${SITE.name}`,
  },
  description:
    `Personal portfolio of ${SITE.displayName}, a junior Full-Stack Developer building modern web applications with code, product thinking, and AI-assisted development.`,
  keywords: [
    'Full-Stack Developer',
    'Next.js Developer',
    'Laravel Developer',
    'React Developer',
    'AI-Assisted Development',
    'Web Developer Indonesia',
    'Portfolio',
  ],
  authors: [{ name: SITE.displayName }],
  creator: SITE.displayName,
  metadataBase: new URL(SITE.baseUrl),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE.baseUrl,
    title: `${SITE.displayName} — Full-Stack Developer & AI-Assisted Builder`,
    description:
      `Personal portfolio of ${SITE.displayName}, a junior Full-Stack Developer building modern web applications with code, product thinking, and AI-assisted development.`,
    siteName: SITE.name,
    images: [
      {
        url: '/og-image.png', // TODO: Add OG image to public/
        width: 1200,
        height: 630,
        alt: `${SITE.displayName} — Full-Stack Developer Portfolio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.displayName} — Full-Stack Developer & AI-Assisted Builder`,
    description:
      `Personal portfolio of ${SITE.displayName}, a junior Full-Stack Developer building modern web applications.`,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: '#4B3B47',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body 
        className="min-h-screen bg-[#4B3B47] text-[#E0D8DE] antialiased overflow-x-hidden relative"
        suppressHydrationWarning
      >
        {/* Glassmorphism Background Orbs */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-[#CFD2B2] rounded-full blur-[100px] sm:blur-[140px] opacity-20 animate-blob" />
          <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-[#9C9990] rounded-full blur-[100px] sm:blur-[140px] opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute bottom-[-20%] left-[20%] w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] bg-[#6A6262] rounded-full blur-[100px] sm:blur-[140px] opacity-30 animate-blob animation-delay-4000" />
        </div>
        
        {children}
      </body>
    </html>
  );
}
