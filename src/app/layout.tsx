'use client';

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Link from 'next/link';
import { PHProvider } from './posthog-provider';
import { PageViewTracker } from './pageview-tracker';
import Script from 'next/script'; // ✅ Added for PostHog

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

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
      <head>
        {/* ✅ PostHog Tracking Script */}
        <Script id="posthog-init" strategy="afterInteractive">
          {`
            !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture identify".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
            posthog.init('phc_m7gwiO8KbRgece9efy4R6fSvuBuoJUuVisApGNGXM9f', {
              api_host: 'https://app.posthog.com'
            });
          `}
        </Script>
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} font-sans flex flex-col min-h-screen bg-background text-foreground`}
      >
        <PHProvider>
          <PageViewTracker />
          <header className="py-4 px-6 border-b">
            <Link href="/" className="flex items-center gap-2">
              <span 
                className="text-3xl font-bold text-foreground" 
                style={{ fontFamily: 'var(--font-geist-sans)' }}
              >
                PreHog
              </span>
            </Link>
          </header>
          <main className="flex-grow flex flex-col items-center justify-center p-4">
            {children}
          </main>
          <footer className="text-center p-6 border-t text-sm text-muted-foreground">
            Inspired by PostHog. Check out the real <a href="https://posthog.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">PostHog</a>.
          </footer>
          <Toaster />
        </PHProvider>
      </body>
    </html>
  );
}
