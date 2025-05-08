
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Link from 'next/link';

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
      >
        <header className="py-4 px-6 border-b">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-foreground">
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 160 40" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-auto"
            >
              <title>PostHog Logo</title>
              {/* Parallelograms */}
              <path d="M0 40L10 0L20 0L10 40H0Z" fill="#3662FF"/>
              <path d="M15 40L25 0L35 0L25 40H15Z" fill="#FF6F00"/>
              <path d="M30 40L40 0L50 0L40 40H30Z" fill="#FFC700"/>
              <path d="M45 40L55 0L65 0L55 40H45Z" fill="#000000"/>
              {/* Snout */}
              <path d="M60 20L55 40L70 40L60 20Z" fill="#000000"/>
              {/* Eye */}
              <circle cx="59" cy="15" r="2" fill="white"/>
              {/* Text "PostHog" - approximate representation */}
              <text x="75" y="29" fontFamily="Geist, sans-serif" fontSize="28" fontWeight="bold" fill="#000000">PostHog</text>
            </svg>
            {/* Text removed as per new logo which includes "PostHog" */}
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

