
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, Zap } from 'lucide-react';
import Link from 'next/link';

export default function WelcomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] p-4 text-center">
      <Card className="w-full max-w-lg shadow-2xl animate-fadeIn">
        <CardHeader>
          <div className="mx-auto text-6xl mb-4" aria-label="Hedgehog emoji">
            🦔
          </div>
          <CardTitle className="text-3xl md:text-4xl font-extrabold text-primary">
            Discover Your Inner PostHog!
          </CardTitle>
          <CardDescription className="text-lg md:text-xl text-foreground/90 pt-2">
            Are you a Data Gremlin, a Feature Flag Fairy, or perhaps a Product Pirate?
            This quick and fun quiz will reveal your PostHog developer personality!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-muted-foreground">
            Answer a few questions about your coding habits, preferences, and quirks to find out which PostHog persona best represents you.
          </p>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <Zap className="mr-2 h-4 w-4 text-yellow-500" />
              <span>Takes only a couple of minutes!</span>
            </div>
            <Link href="/quiz" passHref>
              <Button size="lg" className="w-full sm:w-auto animate-pulse shadow-lg hover:shadow-primary/50 transition-shadow">
                Start the Quiz!
                <Rocket className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
