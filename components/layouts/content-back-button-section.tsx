'use client';

import { Button } from '@/components/ui/button';
import { useHomepage } from '@/hooks/use-homepage';
import { useShowcase } from '@/hooks/use-showcase';
import { cn } from '@/lib/utils';
import { ChevronLeft, Home, House } from 'lucide-react';
import Link from 'next/link';

export default function ContentLayoutBackButtonSection({
  showToc
}: {
  showToc?: boolean;
}) {
  const { isHomepage } = useHomepage();
  const { isShowcase } = useShowcase();
  if (isHomepage) return null;

  return (
    <aside
      className={cn(
        'hidden lg:flex flex-row my-12 relative',
        showToc ? 'w-[200px] lg:min-w-[100px] xl:min-w[200px]' : ''
      )}>
      <Button variant="ghost" asChild className="absolute top-0 right-0">
        { isShowcase ? (
            <Link href="/home">
            <House className="size-4 text-muted-foreground" />
            </Link>
          ) : (
            <Link href="/">
              <ChevronLeft className="size-4" />
              Back
            </Link>
          )
        }
      </Button>
    </aside>
  );
}
