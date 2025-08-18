'use client';

import { DueStatus, formatDateFromString } from '@/lib/date';
import { cn } from '@/lib/utils';

export function DueText({
  itemDueStatus,
  due,
  className = ''
}: {
  itemDueStatus: DueStatus | null;
  due: string;
  className?: string;
}) {
  return itemDueStatus === 'past' ? (
    <p className={cn('text-sm text-rose-500', className)}>
      Due: {formatDateFromString(due)}
    </p>
  ) : itemDueStatus === 'tonight' ? (
    <p className={cn('text-sm text-rose-500', className)}>
      Due tonight: {formatDateFromString(due)}
    </p>
  ) : itemDueStatus === 'soon' ? (
    <p className={cn('text-sm text-amber-600', className)}>
      Due soon: {formatDateFromString(due)}
    </p>
  ) : (
    <p className={cn('text-sm text-muted-foreground', className)}>
      Due: {formatDateFromString(due)}
    </p>
  );
}
