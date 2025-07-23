import { Doc, Page } from "@/.contentlayer/generated"

export type ContentParams = {
  slug: string[]
}

export type ContentPageProps = {
  params: ContentParams
}

type Content = Page | Doc

export async function getContentFromParams<ContentType extends Content>(allContent: ContentType[], params: ContentParams): Promise<ContentType | null> {
  const slug = params.slug?.join("/") || ""
  const content = allContent.find((content) => content.slugAsParams === slug)
  
  return content || null
}

export async function generateMetadataForContent<ContentType extends Content>(
  content: ContentType | null
): Promise<{ title: string; description: string } | {}> {
  return content ? {
    title: content.title,
    description: content.description,
  } : {}
}

export async function generateStaticParamsForContent<ContentType extends Content>(allContent: ContentType[]): Promise<ContentParams[]> {
  return allContent.map((content) => ({
    slug: content.slugAsParams.split("/"),
  }))
}