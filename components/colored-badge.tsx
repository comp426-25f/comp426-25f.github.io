import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export type ColoredBadgeColor = 'green' | 'pink' | 'default';

export function ColoredBadge({
  text,
  color,
  className
}: {
  text: string;
  color: ColoredBadgeColor;
  className?: string;
}) {
  const badgeClass =
    color === 'green'
      ? 'bg-[#DEECDC] border-emerald-900 text-emerald-900'
      : color === 'pink'
      ? 'bg-[#F1E1E9] border-pink-950 text-pink-950'
      : '';

  return (
    <Badge
      variant="outline"
      className={cn('font-semibold py-1', badgeClass, className)}>
      {text}
    </Badge>
  );
}
