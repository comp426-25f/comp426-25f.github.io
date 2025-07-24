'use client';

import { Assignment, Reading } from '@/.contentlayer/generated';
import { DueStatus, dueStatus, formatDateFromString } from '@/lib/date';
import { useRouter } from 'next/navigation';
import { AssignmentBadge } from './assignment-badge';
import { cn } from '@/lib/utils';

export type AssignmentListItemType = Reading | Assignment;

export function AssignmentListItem({ item }: { item: AssignmentListItemType }) {
  const router = useRouter();
  const itemDueStatus: DueStatus | null = item.due ? dueStatus(item.due) : null;

  const dueElement = (due: string) => {
    return itemDueStatus === 'past' ? (
      <p className="md:ml-auto text-sm text-rose-500">
        Due: {formatDateFromString(due)}
      </p>
    ) : itemDueStatus === 'tonight' ? (
      <p className="md:ml-auto text-sm text-rose-500">
        Due tonight: {formatDateFromString(due)}
      </p>
    ) : itemDueStatus === 'soon' ? (
      <p className="md:ml-auto text-sm text-amber-600">
        Due soon: {formatDateFromString(due)}
      </p>
    ) : (
      <p className="md:ml-auto text-sm text-muted-foreground">
        Due: {formatDateFromString(due)}
      </p>
    );
  };

  return (
    <div
      key={item._id}
      className={cn(
        'flex flex-row items-center gap-3 px-2 py-1 h-10 rounded-md hover:bg-accent hover:cursor-pointer',
        itemDueStatus === 'past' ? 'opacity-40' : ''
      )}
      onClick={() => router.push(`/${item._raw.flattenedPath}`)}>
      <AssignmentBadge code={item.code} />
      <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
        <p className="font-semibold pb-0.5">{item.title}</p>
        {item.due && dueElement(item.due)}
      </div>
    </div>
  );
}
