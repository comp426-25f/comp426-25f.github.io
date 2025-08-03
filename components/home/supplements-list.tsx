'use client';

import { allSupplements } from '@/.contentlayer/generated';
import { SupplementListItem } from './supplement-list-item';

export function SupplementsList() {
  const sortedSupplements = allSupplements.sort((a, b) => {
    const dateA = new Date(a.publishedDate || '');
    const dateB = new Date(b.publishedDate || '');
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className="flex flex-col w-full gap-3 md:gap-1 py-2 mt-1">
      {sortedSupplements.length === 0 && (
        <p className="text-muted-foreground mt-2">No supplements yet!</p>
      )}
      {allSupplements.map((item) => (
        <SupplementListItem key={item._id} item={item} />
      ))}
    </div>
  );
}
