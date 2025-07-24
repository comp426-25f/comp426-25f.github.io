'use client';

import { allAssignments, allReadings } from '@/.contentlayer/generated';
import { useState } from 'react';
import {
  AssignmentListItem,
  AssignmentListItemType
} from './assignment-list-item';
import { dueStatus } from '@/lib/date';
import { Button } from '../ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function AssignmentsList() {
  const allItems: AssignmentListItemType[] = [...allReadings, ...allAssignments]
    .filter((item) => item.published)
    .sort((a, b) => {
      if (!a.due || !b.due) return 0;
      const aDate = new Date(a.due);
      const bDate = new Date(b.due);
      if (isNaN(aDate.getTime()) || isNaN(bDate.getTime())) return 0;
      return aDate.getTime() - bDate.getTime();
    });
  // allItems.pop();

  const upcomingItems = allItems.filter((item) => {
    if (!item.due) return false;
    return dueStatus(item.due) !== 'past';
  });

  const [showAll, setShowAll] = useState(false);
  const displayedItems = showAll ? allItems : upcomingItems;

  return (
    <div className="flex flex-col w-full gap-1 py-2 mt-1">
      {allItems.length === 0 && (
        <p className="text-muted-foreground mt-2">No upcoming assignments!</p>
      )}
      {displayedItems.map((item) => (
        <AssignmentListItem key={item._id} item={item} />
      ))}
      {allItems.length !== upcomingItems.length && (
        <Button
          variant="ghost"
          className="w-fit text-muted-foreground"
          onClick={() => setShowAll(!showAll)}>
          {showAll ? <ChevronUp /> : <ChevronDown />}
          {showAll ? 'Hide past assignments' : 'Show past assignments'}
        </Button>
      )}
    </div>
  );
}
