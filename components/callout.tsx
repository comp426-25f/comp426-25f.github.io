import { cn } from '@/lib/utils';

interface CalloutProps {
  icon?: string;
  children?: React.ReactNode;
  type?: 'default' | 'yellow' | 'red' | 'blue' | 'green';
}

export function Callout({
  children,
  icon,
  type = 'default',
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn('my-6 flex items-start rounded-md border border-l-4 p-4', {
        'border-red-900 bg-red-50 dark:border-red-50/40 dark:bg-red-600/40':
          type === 'red',
        'border-yellow-900 bg-yellow-50 dark:border-yellow-50/40 dark:bg-yellow-600/40':
          type === 'yellow',
        'border-blue-900 bg-blue-50': type === 'blue',
        'border-green-900 bg-green-50 dark:border-green-50/40 dark:bg-green-700/40':
          type === 'green',
        'border-slate-600 bg-slate-100 dark:border-slate-50/40 dark:bg-slate-600/40':
          type === 'default'
      })}
      {...props}>
      {icon && <span className="mr-4 text-2xl">{icon}</span>}
      <div>{children}</div>
    </div>
  );
}
