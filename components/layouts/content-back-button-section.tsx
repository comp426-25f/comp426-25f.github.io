'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ContentLayoutBackButtonSection({
  showToc
}: {
  showToc?: boolean;
}) {

  console.log(showToc);
  const pathname = usePathname();
  const showBackButton = pathname !== '/';

  if (!showBackButton) return null;
  return (
    <aside className={cn("hidden lg:flex flex-row my-12 relative", showToc ? 'w-[200px] lg:min-w-[100px] xl:min-w[200px]' : '')}>
      <Button variant="ghost" asChild className="absolute top-0 right-0">
        <Link href="/">
          <ChevronLeft className="size-4" />
          Back
        </Link>
      </Button>
    </aside>
  );
}
