import { allPages } from 'contentlayer/generated';
import '@/styles/mdx.css';
import { generateNextjsContentPage, generateStaticParamsForContent } from '@/lib/content';
import { ContentHeader } from '@/components/content-header';
import ContentLayout from '@/components/layouts/content-layout';

const {
  generateMetadata,
  ContentPage: SitePage
} = generateNextjsContentPage(allPages, (doc) => (
  <ContentLayout
    header={<ContentHeader title={doc.title} />}
    showToc={doc.showToc}
    doc={doc}
  />
));

// TEMPORARY: Exclude root path to allow redirect in app/page.tsx
// To reverse this, remove this override and use the default generateStaticParams
async function generateStaticParams() {
  const params = await generateStaticParamsForContent(allPages);
  // Filter out the root path (empty slug) to avoid conflict with app/page.tsx
  return params.filter((param) => {
    const slug = param.slug.join('/');
    return slug !== '' && slug !== 'index';
  });
}

export { generateMetadata, generateStaticParams };
export default SitePage;
