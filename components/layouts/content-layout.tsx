import React from 'react';
import { Mdx } from '../mdx/mdx-components';
import { Content } from '@/lib/content';
import { DashboardTableOfContents } from '../toc';
import { getTableOfContents } from '@/lib/toc';
import ContentLayoutBackButtonSection from './content-back-button-section';

type ContentLayoutProps = {
  header: React.ReactNode;
  showToc?: boolean;
  doc: Content;
};

export default async function ContentLayout({
  header,
  showToc = true,
  doc
}: ContentLayoutProps) {
  const toc = await getTableOfContents(doc.body.raw);

  return (
    <div className="flex flex-row w-full flex-1 justify-center">
      <ContentLayoutBackButtonSection showToc={showToc} />
      <main className="flex lg:gap-10 overflow-hidden lg:overflow-visible">
        <div className="min-w-0 w-full max-w-3xl px-8 py-10">
          {header}
          <div className="min-w-0">
            <Mdx code={doc.body.code} />
          </div>
        </div>
        {showToc && (
          <div className="min-w-[300px] text-sm hidden lg:block flex-shrink-0">
            <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
              <DashboardTableOfContents toc={toc} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
