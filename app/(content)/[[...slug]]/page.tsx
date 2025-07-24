import { notFound } from 'next/navigation';
import { allPages } from 'contentlayer/generated';

import { getTableOfContents } from '@/lib/toc';
import { Mdx } from '@/components/mdx/mdx-components';
import { DocsPageHeader } from '@/components/docs-header';
import { DashboardTableOfContents } from '@/components/toc';

import '@/styles/mdx.css';
import { Metadata } from 'next';
import {
  ContentPageProps,
  ContentParams,
  generateMetadataForContent,
  generateStaticParamsForContent,
  getContentFromParams
} from '@/lib/content';
import { ContentHeader } from '@/components/content-header';

export async function generateMetadata({
  params
}: ContentPageProps): Promise<Metadata> {
  const doc = await getContentFromParams(allPages, params);
  return generateMetadataForContent(doc);
}

export async function generateStaticParams(): Promise<ContentParams[]> {
  return generateStaticParamsForContent(allPages);
}

export default async function SitePage({ params }: ContentPageProps) {
  const doc = await getContentFromParams(allPages, params);

  if (!doc) notFound();

  const toc = await getTableOfContents(doc.body.raw);

  return (
    <main className="flex lg:gap-10 overflow-hidden lg:overflow-visible">
      <div className="min-w-0 w-full max-w-3xl px-8 py-10">
        <ContentHeader
          title={doc.title}
          headlineElement={
            <p className="mb-2 text-sm text-muted-foreground">
              Due on Mon Apr 9, 2025
            </p>
          }
          authors={doc.authors}
        />
        <div className="min-w-0">
          <Mdx code={doc.body.code} />
        </div>
      </div>
      {doc.showToc && (
        <div className="min-w-[300px] text-sm hidden lg:block flex-shrink-0">
          <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
            <DashboardTableOfContents toc={toc} />
          </div>
        </div>
      )}
    </main>
  );
  // return (
  //   <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
  //     <div className="mx-auto w-full min-w-0">
  //       <DocsPageHeader heading={doc.title} text={doc.description} />
  //       <Mdx code={doc.body.code} />
  //     </div>
  //     <div className="hidden text-sm xl:block">
  //       <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
  //         {doc.showToc && <DashboardTableOfContents toc={toc} />}
  //       </div>
  //     </div>
  //   </main>
  // );
}
