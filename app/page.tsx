'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// TEMPORARY: Redirect home page to project showcase
// To reverse this, simply delete this file
export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/wrapped');
  }, [router]);

  // Return null or a loading state while redirecting
  return null;
}
