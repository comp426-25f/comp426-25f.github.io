import { allScheduleItems } from '@/.contentlayer/generated';
import { ScheduleListItem } from './schedule-list-item';

export function Schedule() {
  const sortedItems = allScheduleItems.sort((a, b) => {
    const dateA = new Date(a.date || '');
    const dateB = new Date(b.date || '');
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className="flex flex-col w-full gap-3 md:gap-1 py-2 mt-1">
      {sortedItems.length === 0 && (
        <p className="text-muted-foreground mt-2">No schedule yet!</p>
      )}
      {sortedItems.map((item) => (
        <ScheduleListItem key={item._id} item={item} />
      ))}
    </div>
  );
}
