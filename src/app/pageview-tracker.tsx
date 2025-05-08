
'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { usePostHog } from 'posthog-js/react';

export function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const posthog = usePostHog();

  useEffect(() => {
    if (posthog) { // Ensure posthog is initialized
        posthog.capture('$pageview');
    }
  }, [pathname, searchParams, posthog]);

  return null;
}
