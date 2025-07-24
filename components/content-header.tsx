import { cn } from '@/lib/utils';

interface DocsPageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  headline?: string;
}

export function ContentHeader({
  title,
  headline,
  className,
  ...props
}: DocsPageHeaderProps) {
  return (
    <>
      <div className={cn('mb-8', className)} {...props}>
        {headline && (
          <p className="mb-2 text-sm text-muted-foreground">{headline}</p>
        )}
        <h1 className="inline-block font-heading text-4xl md:text-5xl">
          {title}
        </h1>
      </div>
      {/* <hr className="my-4" /> */}
    </>
  );
}
