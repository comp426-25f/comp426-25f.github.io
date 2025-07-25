import { ScheduleItem } from '@/.contentlayer/generated';
import { ColoredBadge } from '@/components/colored-badge';

export function ScheduleBadge({ item }: { item: ScheduleItem }) {
  const colorForSubject =
    item.subject === 'fundamentals'
      ? 'lightblue'
      : item.subject === 'react'
      ? 'blue'
      : item.subject === 'nextjs'
      ? 'purple'
      : item.subject === 'backend'
      ? 'green'
      : item.subject === 'design'
      ? 'pink'
      : item.subject === 'technologies'
      ? 'yellow'
      : item.subject === 'midterm'
      ? 'lightblue-solid'
      : item.subject === 'final'
      ? 'purple-solid'
      : 'default';

  return <ColoredBadge text={item.code} color={colorForSubject} />;
}
