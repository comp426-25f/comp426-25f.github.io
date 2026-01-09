import '@/styles/mdx.css';

import type { MDXComponents } from 'mdx/types';
import * as React from 'react';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer2/hooks';
import ReactMarkdown from 'react-markdown';
import { cn } from '@/lib/utils';
import { Callout } from '@/components/callout';
import { MdxCard } from '@/components/mdx/mdx-card';
import { Button } from '@/components/ui/button';
import { ScrollText, Users, BookText, Clock } from 'lucide-react';
import HomepageButton from '@/components/home/homepage-button';
import { AssignmentsList } from '@/components/home/assignments-list';
import { SupplementsList } from '@/components/home/supplements-list';
import { ScheduleHeader } from '@/components/home/schedule-header';
import { Schedule } from '@/components/home/schedule';
import { TeamMember } from '@/components/team-member';
import {
  MdxCodeComparison,
  MdxCodeComparisonColumn
} from '@/components/mdx/mdx-code-comparison';
import { Rubric, RubricItem, RubricSectionHeader } from '../rubric';
import { ResponsiveIFrame } from '../responsive-iframe';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import ShowcaseList from '../showcase/showcase-list';
import { BeyondSchedule } from '../wrapped/beyond-schedule';
import TAStats from '../wrapped/ta-stats';
import AssignmentsGrid from '../wrapped/assignments-grid';
import TeamMemberList from '../wrapped/team-member-list';
import ProjectStages from '@/components/wrapped/project-stages';
import TechStack from '@/components/wrapped/tech-stack';
import ShowcaseGallery from '@/components/wrapped/showcase-gallery';
import ProjectsDialog from '@/components/wrapped/projects-dialog';

export const H1Component = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h1
    className={cn(
      'mt-2 scroll-m-20 text-4xl font-bold tracking-tight',
      className
    )}
    {...props}
  />
);

export const H2Component = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h2
    className={cn(
      'mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0',
      className
    )}
    {...props}
  />
);

export const H3Component = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3
    className={cn(
      'mt-8 scroll-m-20 text-2xl font-semibold tracking-tight',
      className
    )}
    {...props}
  />
);

export const H4Component = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h4
    className={cn(
      'mt-8 scroll-m-20 text-xl font-semibold tracking-tight',
      className
    )}
    {...props}
  />
);

export const H5Component = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h5
    className={cn(
      'mt-8 scroll-m-20 text-lg font-semibold tracking-tight',
      className
    )}
    {...props}
  />
);

export const H6Component = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h6
    className={cn(
      'mt-8 scroll-m-20 text-base font-semibold tracking-tight',
      className
    )}
    {...props}
  />
);

const components: MDXComponents = {
  h1: H1Component,
  h2: H2Component,
  h3: H3Component,
  h4: H4Component,
  h5: H5Component,
  h6: H6Component,
  a: ({ className, ...props }) => (
    <a
      className={cn('font-medium underline underline-offset-4', className)}
      {...props}
    />
  ),
  p: ({ className, ...props }) => (
    <p
      className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }) => (
    <ul className={cn('mt-2 mb-6 ml-6 list-disc', className)} {...props} />
  ),
  ol: ({ className, ...props }) => (
    <ol className={cn('mt-2 mb-6 ml-6 list-decimal', className)} {...props} />
  ),
  li: ({ className, ...props }) => (
    <li className={cn('mt-2', className)} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={cn(
        'mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground',
        className
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn('rounded-md border', className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn('w-full', className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn('m-0 border-t p-0 even:bg-muted', className)}
      {...props}
    />
  ),
  th: ({ className, ...props }) => (
    <th
      className={cn(
        'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }) => (
    <td
      className={cn(
        'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre
      className={cn(
        'mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4',
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }) => (
    <code
      className={cn(
        'relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm',
        className
      )}
      {...props}
    />
  ),
  Image,
  Callout,
  Card: MdxCard,
  Button,
  HomepageButton,
  ScrollText,
  Users,
  BookText,
  Clock,
  AssignmentsList,
  SupplementsList,
  ScheduleHeader,
  Schedule,
  TeamMember,
  MdxCodeComparison,
  MdxCodeComparisonColumn,
  Rubric,
  RubricItem,
  RubricSectionHeader,
  ResponsiveIFrame,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  ShowcaseList,
  BeyondSchedule,
  TAStats,
  AssignmentsGrid,
  TeamMemberList,
  ProjectStages,
  TechStack,
  ShowcaseGallery,
  ProjectsDialog
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code || '');

  if (!code) {
    return null;
  }

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}

interface MarkdownProps {
  content: string;
}

export function Markdown({ content }: MarkdownProps) {
  if (!content) {
    return null;
  }

  return (
    <div className="mdx">
      <ReactMarkdown
        components={{
          p: ({ className, ...props }) => (
            <p
              className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
              {...props}
            />
          ),
          strong: ({ className, ...props }) => (
            <strong className={cn('font-semibold', className)} {...props} />
          ),
          em: ({ className, ...props }) => (
            <em className={cn('italic', className)} {...props} />
          ),
          code: ({ className, ...props }) => (
            <code
              className={cn(
                'relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm',
                className
              )}
              {...props}
            />
          )
        }}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
