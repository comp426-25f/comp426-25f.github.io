import { allSupplements } from 'contentlayer/generated';
import '@/styles/mdx.css';
import { generateNextjsContentPage } from '@/lib/content';
import { ContentHeader } from '@/components/content-header';
import ContentLayout from '@/components/layouts/content-layout';

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
          <p className="mb-2 text-sm text-muted-foreground">
            Due on Mon Apr 9, 2025
          </p>
        }
        authors={doc.authors}
      />
    }
    doc={doc}
  />
));

export { generateMetadata, generateStaticParams };
export default SupplementPage;
