import {
  Page,
  Reading,
  Assignment,
  Supplement
} from '@/.contentlayer/generated';

export type ContentParams = {
  slug: string[];
};

export type ContentPageProps = {
  params: ContentParams;
};

type Content = Page | Reading | Assignment | Supplement;

export async function getContentFromParams<ContentType extends Content>(
  allContent: ContentType[],
  params: ContentParams
): Promise<ContentType | null> {
  const slug = (await params).slug?.join('/') || '';
  const content = allContent.find((content) => content.slugAsParams === slug);

  return content || null;
}

export async function generateMetadataForContent<ContentType extends Content>(
  content: ContentType | null
): Promise<{ title: string; description: string } | object> {
  return content
    ? {
        title: content.title,
        description: content.description
      }
    : {};
}

export async function generateStaticParamsForContent<
  ContentType extends Content
>(allContent: ContentType[]): Promise<ContentParams[]> {
  // Note: This is a hack for ensuring that the website can build in
  // export mode even if there are no content files for a route. By
  // default, Next.js fails to generate static params if the content
  // array is entirely empty.
  if (!allContent || allContent.length === 0) {
    return [{ slug: [''] }];
  }
  return allContent.map((content) => ({
    slug: content.slugAsParams.split('/')
  }));
}
