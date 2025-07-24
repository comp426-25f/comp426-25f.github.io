'use client';

import { usePathname } from 'next/navigation';

export function useHomepage() {
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  return { isHomepage };
}
