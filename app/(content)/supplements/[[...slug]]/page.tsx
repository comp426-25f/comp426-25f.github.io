import { allSupplements } from 'contentlayer/generated';
import '@/styles/mdx.css';
import { generateNextjsContentPage } from '@/lib/content';
import { ContentHeader } from '@/components/content-header';
import ContentLayout from '@/components/layouts/content-layout';
import { ColoredBadge } from '@/components/colored-badge';
import { formatShortDateFromString } from '@/lib/date';

const {
  generateMetadata,
  generateStaticParams,
  ContentPage: SupplementPage
} = generateNextjsContentPage(allSupplements, (doc) => (
  <ContentLayout
    header={
      <ContentHeader
        title={doc.title}
        headlineElement={
          <div className="flex flex-row items-center mb-2 gap-3">
            <ColoredBadge text={doc.code} color="purple" />
            {doc.publishedDate && (
              <p className="text-sm text-muted-foreground">
                Published on {formatShortDateFromString(doc.publishedDate)}
              </p>
            )}
          </div>
          // <p className="mb-2 text-sm text-muted-foreground">
          //   Due on Mon Apr 9, 2025
          // </p>
        }
        authors={doc.authors}
      />
    }
    doc={doc}
  />
));

export { generateMetadata, generateStaticParams };
export default SupplementPage;
