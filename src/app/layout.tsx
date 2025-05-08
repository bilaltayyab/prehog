
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Link from 'next/link';
import Image from 'next/image';

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
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-black">
            <Image
              src="https://storage.googleapis.com/res_blockflow_gcp_europe-west1_prod_public_029c757d-417e-49f5-bd11-367fe34950b3/users/user_q00v3t0tpqgije8k264n1q1r/049208af-bca9-4e51-bd5b-5e2c87e24a44.png"
              alt="PostHog Logo"
              width={165} 
              height={40}
              className="h-10 w-auto" 
              priority
            />
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
