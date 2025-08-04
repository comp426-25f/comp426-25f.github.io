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
        'border-red-900 bg-red-50': type === 'red',
        'border-yellow-900 bg-yellow-50': type === 'yellow',
        'border-blue-900 bg-blue-50': type === 'blue',
        'border-green-900 bg-green-50': type === 'green',
        'border-slate-600 bg-slate-100': type === 'default'
      })}
      {...props}>
      {icon && <span className="mr-4 text-2xl">{icon}</span>}
      <div>{children}</div>
    </div>
  );
}
