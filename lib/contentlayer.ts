import {
  ComputedFields,
  defineDocumentType,
  DocumentTypeDef
} from 'contentlayer2/source-files';

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/')
  }
};

export function defineContentType<DefName extends string>(
  def: DocumentTypeDef<DefName>
) {
  return defineDocumentType(() => ({
    ...def,
    computedFields
  }));
}
