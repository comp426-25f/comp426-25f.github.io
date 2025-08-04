'use client';

import { TableOfContents } from '@/lib/toc';
import { useEffect, useRef, useState } from 'react';
import { DashboardTableOfContents } from '../toc';

export function ContentLayoutTocSidebar({ toc }: { toc: TableOfContents }) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const update = () => {
      setCanScrollUp(el.scrollTop > 2);
      setCanScrollDown(el.scrollTop + el.clientHeight < el.scrollHeight - 2);
    };

    el.addEventListener('scroll', update);
    window.addEventListener('resize', update);
    update();
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div className="relative min-w-[300px] text-sm hidden lg:block flex-shrink-0">
      <div
        ref={scrollRef}
        className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] pt-10 overflow-y-auto scrollbar-hide"
        aria-label="Table of contents"
        style={{ WebkitOverflowScrolling: 'touch' }}>
        <DashboardTableOfContents toc={toc} />
        {/* optional padding so last item isn’t flush */}
        <div aria-hidden="true" style={{ height: 24 }} />
      </div>

      {/* overflow indicators */}
      {canScrollUp && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 right-0 top-16 h-6"
          style={{
            background:
              'linear-gradient(to bottom, rgba(255,255,255,0.85), rgba(255,255,255,0))'
          }}
        />
      )}
      {canScrollDown && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 right-0 bottom-0 h-6"
          style={{
            background:
              'linear-gradient(to top, rgba(255,255,255,0.85), rgba(255,255,255,0))'
          }}
        />
      )}

      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE/Edge */
          scrollbar-width: none; /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* WebKit */
        }
      `}</style>
    </div>
  );
}
