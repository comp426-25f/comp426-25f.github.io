import React from 'react';
import { Mdx } from '../mdx/mdx-components';
import { Content } from '@/lib/content';
import { DashboardTableOfContents } from '../toc';
import { getTableOfContents } from '@/lib/toc';
import ContentLayoutBackButtonSection from './content-back-button-section';
import { ContentLayoutTocSidebar } from './content-layout-toc-sidebar';

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
            <div className="sticky top-16 max-h-[calc(100vh-4rem)] pt-8 pb-6 overflow-y-auto scrollbar-hidden">
              <DashboardTableOfContents toc={toc} />
              {/* extra bottom padding spacer so last item can scroll up fully */}
              <div aria-hidden="true" className="h-6" />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
