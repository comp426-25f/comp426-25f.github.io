import { ScheduleItem } from '@/.contentlayer/generated';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { ColoredBadge } from '@/components/colored-badge';

export function ScheduleListItem({ item }: { item: ScheduleItem }) {
  const colorForSubject =
    item.subject === 'fundamentals'
      ? 'lightblue'
      : item.subject === 'react'
      ? 'blue'
      : item.subject === 'nextjs'
      ? 'lavendar'
      : item.subject === 'backend'
      ? 'green'
      : item.subject === 'design'
      ? 'pink'
      : item.subject === 'technologies'
      ? 'yellow'
      : 'default';

  return (
    <div
      key={item._id}
      className={cn(
        'flex flex-row items-center gap-3 px-2 py-1 h-10 rounded-md hover:bg-accent hover:cursor-pointer'
      )}>
      <div className="flex flex-row items-center sm:justify-end gap-3 sm:w-[128px]">
        <p className="hidden sm:block text-sm">
          {format(item.date, 'EEE MMM d')}
        </p>
        <ColoredBadge text={item.code} color={colorForSubject} />
      </div>
      <p className="font-semibold pb-0.5">{item.title}</p>
    </div>
  );
}
