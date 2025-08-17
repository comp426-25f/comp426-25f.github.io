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
    code: {
      type: 'string',
      required: true
    },
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string'
    },
    published: {
      type: 'boolean',
      required: true
    },
    due: {
      type: 'date',
    },
    authors: {
      // Reference types are not embedded.
      // Until this is fixed, we can use a simple list.
      // type: "reference",
      // of: Author,
      type: "list",
      of: { type: "string" },
    },
    showToc: {
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
    code: {
      type: 'string',
      required: true
    },
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string'
    },
    published: {
      type: 'boolean',
      required: true
    },
    due: {
      type: 'date',
    }
  }
});

export const Supplement = defineContentType({
  name: 'Supplement',
  filePathPattern: `supplements/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    code: {
      type: 'string',
      required: true
    },
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string'
    },
    published: {
      type: 'boolean',
      required: true
    },
    publishedDate: {
      type: 'date'
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

export const ScheduleItem = defineContentType({
  name: 'ScheduleItem',
  filePathPattern: `schedule/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    date: {
      type: 'date',
      required: true
    },
    subject: {
      type: 'string',
      required: true
    },
    code: {
      type: 'string',
      required: true
    },
    title: {
      type: 'string',
      required: true
    },
    recordingUrl: {
      type: 'string'
    },
    slideshowUrl: {
      type: 'string'
    }
  }
});

export const allContentTypes = [
  Page,
  Reading,
  Assignment,
  Supplement,
  Author,
  ScheduleItem
]