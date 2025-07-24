'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { ChevronLeft } from 'lucide-react';
import { usePathname } from 'next/dist/client/components/navigation';
import { cn } from '@/lib/utils';

export default function SiteLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const showBackButton = pathname !== '/';

  return (
    <div className="flex flex-row w-full flex-1 justify-center">
      {showBackButton && (
        <aside className="hidden lg:flex flex-row w-[200px] my-12 relative">
          <Button variant="ghost" asChild className="absolute top-0 right-0">
            <Link href="/">
              <ChevronLeft className="size-4" />
              Back
            </Link>
          </Button>
        </aside>
      )}
      {children}
    </div>
  );
  return (
    <div className="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
      <aside className="lg:py-12 w-full flex flex-row justify-center">
        {showBackButton && (
          <div className="hidden lg:block">
            <Button variant="ghost" asChild>
              <Link href="/">
                <ChevronLeft className="size-4" />
                Back to home
              </Link>
            </Button>
          </div>
        )}
      </aside>
      {children}
    </div>
  );
}
