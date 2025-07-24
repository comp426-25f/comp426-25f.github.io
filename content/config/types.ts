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
    },
    authors: {
      // Reference types are not embedded.
      // Until this is fixed, we can use a simple list.
      // type: "reference",
      // of: Author,
      type: "list",
      of: { type: "string" },
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
    },
    authors: {
      // Reference types are not embedded.
      // Until this is fixed, we can use a simple list.
      // type: "reference",
      // of: Author,
      type: "list",
      of: { type: "string" },
    }
  }
});

// Note: Author content is not a page, but this is required for contentlayer
// to recognize it as a content type.
export const Author = defineContentType({
  name: "Author",
  filePathPattern: `authors/**/*.mdx`,
  contentType: "mdx",
  fields: {
    name: {
      type: "string",
      required: true,
    },
    abbreviation: {
      type: "string",
      required: true,
    },
    avatar: {
      type: "string",
      required: true,
    },
    github: {
      type: "string",
      required: true,
    },
  }
});

export const allContentTypes = [
  Page,
  Reading,
  Assignment,
  Supplement,
  Author
]