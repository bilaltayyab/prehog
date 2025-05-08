
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Link from 'next/link';
import { MountainIcon } from 'lucide-react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'PostHog Personality Quiz',
  description: 'Discover your developer personality with this fun quiz!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans flex flex-col min-h-screen bg-background text-foreground`}
        suppressHydrationWarning={true}
      >
        <header className="py-4 px-6 border-b">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-7 w-7"
            >
              <path d="M12.352 21.976a.5.5 0 0 0 .696-.002L16.5 18.5l3.5-1c.98-.28 1.75-.05 1.75.36.01.53-.88.79-1.2.87a2.18 2.18 0 0 1-1.44.08l-3.76-1.12a.5.5 0 0 0-.62.1L12.5 20.5l-2.24-2.7a.5.5 0 0 0-.62-.1L5.88 18.82a2.18 2.18 0 0 1-1.44-.08c-.32-.08-1.21-.34-1.2-.87.0-.41.77-.64 1.75-.36l3.5 1 3.452 3.478Z"/>
              <path d="M12.352 2.024a.5.5 0 0 1 .696.002L16.5 5.5l3.5 1c.98.28 1.75.05 1.75-.36.01-.53-.88-.79-1.2-.87a2.18 2.18 0 0 0-1.44-.08l-3.76 1.12a.5.5 0 0 1-.62-.1L12.5 3.5l-2.24 2.7a.5.5 0 0 1-.62.1L5.88 5.18a2.18 2.18 0 0 0-1.44.08c-.32-.08-1.21-.34-1.2.87.0.41.77.64 1.75.36l3.5-1 3.452-3.478Z"/>
              <path d="M12 12a6 6 0 0 0-6 6"/>
              <path d="M12 12a6 6 0 0 1 6 6"/>
              <path d="M12 12a6 6 0 0 0-6-6"/>
              <path d="M12 12a6 6 0 0 1 6-6"/>
              <path d="M12 12a6 6 0 0 1-6 6"/>
              <path d="M12 12a6 6 0 0 0 6-6"/>
              <path d="M12 12a6 6 0 0 1-6-6"/>
              <path d="M12 12a6 6 0 0 0 6 6"/>
              <circle cx="12" cy="12" r="2"/>
            </svg>
            PostHog Personality Quiz
          </Link>
        </header>
        <main className="flex-grow flex flex-col items-center justify-center p-4">
          {children}
        </main>
        <footer className="text-center p-6 border-t text-sm text-muted-foreground">
          Inspired by PostHog. Check out the real <a href="https://posthog.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">PostHog</a>.
        </footer>
        <Toaster />
      </body>
    </html>
  );
}
