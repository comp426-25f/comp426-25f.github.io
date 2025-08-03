import { ScheduleItem } from '@/.contentlayer/generated';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { ScheduleBadge } from './schedule-badge';
import { Button } from '../ui/button';
import Link from 'next/link';

export function ScheduleListItem({ item }: { item: ScheduleItem }) {
  console.log(!!item.recordingUrl);
  console.log(!!item.slideshowUrl);
  console.log(!!item.recordingUrl || !!item.slideshowUrl);
  return (
    <div
      key={item._id}
      className={cn(
        'flex flex-row items-center gap-3 px-2 py-1 rounded-md w-full'
      )}>
      <div className="flex flex-row items-center sm:justify-end gap-3 sm:w-[164px]">
        <p className="hidden sm:block text-sm text-muted-foreground">
          {format(item.date, 'EEE MMM d')}
        </p>
        <ScheduleBadge item={item} />
      </div>
      <div className="flex w-full flex-col md:flex-row md:items-center md:justify-between">
        <p className="font-semibold">{item.title}</p>
        {(item.recordingUrl || item.slideshowUrl) && (
          <div className="flex flex-row items-center gap-3 md:gap-0">
            {item.recordingUrl && (
              <>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="hidden md:inline-flex">
                  <Link href={item.recordingUrl} target="_blank">
                    Recording
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="link"
                  size="sm"
                  className="md:hidden h-5 px-0 hover:underline hover:cursor-pointer">
                  <Link href={item.recordingUrl} target="_blank">
                    Recording
                  </Link>
                </Button>
              </>
            )}
            {item.slideshowUrl && (
              <>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="hidden md:inline-flex">
                  <Link href={item.slideshowUrl} target="_blank">
                    Slides
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="link"
                  size="sm"
                  className="md:hidden h-5 px-0 hover:underline hover:cursor-pointer">
                  <Link href={item.slideshowUrl} target="_blank">
                    Slides
                  </Link>
                </Button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
