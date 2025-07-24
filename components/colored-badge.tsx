import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export type ColoredBadgeVariant = 'default' | 'circle';
export type ColoredBadgeColor =
  | 'green'
  | 'pink'
  | 'lavendar'
  | 'lightblue'
  | 'blue'
  | 'yellow'
  | 'default';

export function ColoredBadge({
  text,
  variant = 'default',
  color,
  className
}: {
  text?: string;
  variant?: ColoredBadgeVariant;
  color: ColoredBadgeColor;
  className?: string;
}) {
  const badgeClass =
    color === 'green'
      ? 'bg-[#DEECDC] border-emerald-950 text-emerald-950 dark:bg-[#1a3d2e] dark:border-emerald-300 dark:text-emerald-100'
      : color === 'pink'
      ? 'bg-[#F1E1E9] border-pink-950 text-pink-950 dark:bg-[#4a2a3d] dark:border-pink-300 dark:text-pink-100'
      : color === 'lavendar'
      ? 'bg-[#DFDCEC] border-purple-950 text-purple-950 dark:bg-[#352c47] dark:border-purple-300 dark:text-purple-100'
      : color === 'lightblue'
      ? 'bg-slate-200 border-slate-900 text-slate-900 dark:bg-[#2c3744] dark:border-slate-300 dark:text-slate-100'
      : color === 'blue'
      ? 'bg-[#c9daf8] border-blue-950 text-blue-950 dark:bg-[#1e3a5f] dark:border-blue-300 dark:text-blue-100'
      : color === 'yellow'
      ? 'bg-[#fff2cc] border-amber-950 text-amber-950 dark:bg-[#4a3d1a] dark:border-amber-300 dark:text-amber-100'
      : '';

  if (variant === 'circle') {
    return (
      <Badge
        variant="outline"
        className={cn(
          'font-semibold size-5 rounded-full',
          badgeClass,
          className
        )}></Badge>
    );
  }
  return (
    <Badge
      variant="outline"
      className={cn('font-semibold py-1', badgeClass, className)}>
      {text}
    </Badge>
  );
}
