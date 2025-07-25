import { allReadings } from 'contentlayer/generated';
import '@/styles/mdx.css';
import { generateNextjsContentPage } from '@/lib/content';
import { ContentHeader } from '@/components/content-header';
import ContentLayout from '@/components/layouts/content-layout';
import { AssignmentBadge } from '@/components/home/assignment-badge';
import { dueStatus } from '@/lib/date';
import { DueText } from '@/components/home/due-text';

const {
  generateMetadata,
  generateStaticParams,
  ContentPage: ReadingPage
} = generateNextjsContentPage(allReadings, (doc) => (
  <ContentLayout
    header={
      <ContentHeader
        title={doc.title}
        headlineElement={
          <div className="flex flex-row items-center mb-2 gap-3">
            <AssignmentBadge code={doc.code} />
            {doc.due && (
              <DueText
                itemDueStatus={dueStatus(doc.due)}
                due={doc.due}
                className="text-sm"
              />
            )}
          </div>
        }
        authors={doc.authors}
      />
    }
    doc={doc}
  />
));

export { generateMetadata, generateStaticParams };
export default ReadingPage;
