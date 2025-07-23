// Note: This import must not be aliased using @/ because it is used
// by contentlayer, which runs from a different bundle.
import { defineContentType } from '../../lib/contentlayer';

export const Page = defineContentType({
  name: 'Page',
  filePathPattern: `pages/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string'
    },
    showToc: {
      type: 'boolean',
      default: false
    }
  }
});

export const Reading = defineContentType({
  name: 'Reading',
  filePathPattern: `readings/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string'
    },
    published: {
      type: 'boolean',
      default: true
    }
  }
});

export const Assignment = defineContentType({
  name: 'Assignment',
  filePathPattern: `assignments/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string'
    },
    published: {
      type: 'boolean',
      default: true
    }
  }
});

export const Supplement = defineContentType({
  name: 'Supplement',
  filePathPattern: `supplements/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string'
    },
    published: {
      type: 'boolean',
      default: true
    }
  }
});
