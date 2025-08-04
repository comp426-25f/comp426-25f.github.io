'use client';

import { allAuthors } from 'contentlayer/generated';
import { cn, createCommaSeparatedListText } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useHomepage } from '@/hooks/use-homepage';

interface DocsPageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  headlineElement?: React.ReactElement;
  authors?: string[];
}

export function ContentHeader({
  title,
  headlineElement,
  className,
  authors,
  ...props
}: DocsPageHeaderProps) {
  const { isHomepage } = useHomepage();

  const authorData = !!authors
    ? authors
        .map((authorName) =>
          allAuthors.find(({ slug }) => slug === `/authors/${authorName}`)
        )
        .filter((author) => !!author)
    : [];

  return (
    <>
      <div className={cn('mb-8', className)} {...props}>
        {!!headlineElement && headlineElement}
        {isHomepage ? (
          <>
            <h1
              className={cn(
                'inline-block font-heading',
                'text-3xl md:text-4xl'
              )}>
              COMP 426
            </h1>
            <br />
            <h1
              className={cn(
                'inline-block font-heading',
                'text-4xl md:text-5xl'
              )}>
              Modern Web Programming
            </h1>
          </>
        ) : (
          <h1
            className={cn(
              'inline-block font-heading mt-2',
              'text-4xl md:text-5xl'
            )}>
            {title}
          </h1>
        )}
        {authors && authors.length > 0 && (
          <div className="flex flex-row items-center gap-3 mt-4">
            <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2">
              {authorData.map((author) => (
                <Avatar key={author._id} className="size-9">
                  <AvatarImage src={author.avatar} alt={`@${author.github}`} />
                  <AvatarFallback>{author.abbreviation}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <div className="flex flex-col text-left leading-tight">
              <p className="font-medium text-sm">
                {createCommaSeparatedListText(
                  authorData.map((author) => ({
                    text: author.name,
                    href: `https://github.com/${author.github}`
                  }))
                )}
              </p>
              <p className="text-xs text-muted-foreground mt-[-0.125rem]">
                {createCommaSeparatedListText(
                  authorData.map((author) => ({
                    text: `@${author.github}`,
                    href: `https://github.com/${author.github}`
                  }))
                )}
              </p>
            </div>
          </div>
        )}
      </div>
      {/* <hr className="my-4" /> */}
    </>
  );
}
