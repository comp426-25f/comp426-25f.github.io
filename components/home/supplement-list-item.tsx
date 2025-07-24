'use client';

import { Supplement } from '@/.contentlayer/generated';
import { formatDateFromString, formatShortDateFromString } from '@/lib/date';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ColoredBadge } from '../colored-badge';

export function SupplementListItem({ item }: { item: Supplement }) {
  const router = useRouter();

  return (
    <div
      key={item._id}
      className={cn(
        'flex flex-row items-center gap-3 px-2 py-1 h-10 rounded-md hover:bg-accent hover:cursor-pointer'
      )}
      onClick={() => router.push(`/${item._raw.flattenedPath}`)}>
      <ColoredBadge text={item.code} color="lavendar" />
      <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
        <p className="font-semibold pb-0.5">{item.title}</p>
        {item.publishedDate && (
          <p className="md:ml-auto text-sm text-muted-foreground">
            Published on {formatShortDateFromString(item.publishedDate)}
          </p>
        )}
      </div>
    </div>
  );
}
