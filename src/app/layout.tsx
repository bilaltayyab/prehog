// REMOVE: 'use client'

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Link from 'next/link';
import { PHProvider } from './posthog-provider';
import { PageViewTracker } from './pageview-tracker';
import PostHogInit from './PostHogInit';
import React from 'react'; // Import React

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PreHog Personality Quiz',
  description: 'Discover your developer personality with this fun quiz!',
  icons: {
    icon: '/hedgehog.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} font-sans flex flex-col min-h-screen bg-background text-foreground`}
      >
        <PHProvider>
          <PostHogInit />
          <React.Suspense fallback={null}>
            <PageViewTracker />
          </React.Suspense>
          <header className="py-4 px-6 border-b">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-3xl font-bold text-foreground" style={{ fontFamily: 'var(--font-geist-sans)' }}>
                PreHog
              </span>
            </Link>
          </header>
          <main className="flex-grow flex flex-col items-center justify-center p-4">
            {children}
          </main>
          <footer className="text-center p-6 border-t text-sm text-muted-foreground">
            Inspired by PostHog. Check out the real{' '}
            <a href="https://posthog.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
              PostHog
            </a>.
          </footer>
          <Toaster />
        </PHProvider>
      </body>
    </html>
  );
}
