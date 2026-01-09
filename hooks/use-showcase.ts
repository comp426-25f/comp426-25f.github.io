'use client';

import { usePathname } from 'next/navigation';

export function useShowcase() {
  const pathname = usePathname();
  const isShowcase = pathname === '/project-showcase';

  return { isShowcase };
}

export function useWrapped() {
  const pathname = usePathname();
  const isWrapped = pathname === '/wrapped';

  return { isWrapped };
}
