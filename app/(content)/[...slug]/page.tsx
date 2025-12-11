import { allPages } from 'contentlayer/generated';
import '@/styles/mdx.css';
import { generateNextjsContentPage } from '@/lib/content';
import { ContentHeader } from '@/components/content-header';
import ContentLayout from '@/components/layouts/content-layout';

const {
  generateMetadata,
  generateStaticParams,
  ContentPage: SitePage
} = generateNextjsContentPage(allPages, (doc) => (
  <ContentLayout
    header={<ContentHeader title={doc.title} />}
    showToc={doc.showToc}
    doc={doc}
  />
));

export { generateMetadata, generateStaticParams };
export default SitePage;
