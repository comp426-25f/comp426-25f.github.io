import { makeSource } from 'contentlayer2/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import type { Element } from 'hast';
import { Assignment, Page, Reading, Supplement } from './content/config/types';

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Page, Reading, Assignment, Supplement],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
          onVisitLine(node: Element) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedLine(node: Element) {
            if (!node.properties.className) {
              node.properties.className = []; // Ensure it's an array -- this fixed a build error somehow!
            }
            if (Array.isArray(node.properties.className)) {
              node.properties.className.push('line--highlighted');
            } else if (typeof node.properties.className === 'string') {
              node.properties.className = [
                node.properties.className,
                'line--highlighted'
              ];
            }
          },
          onVisitHighlightedWord(node: Element) {
            node.properties.className = ['word--highlighted'];
          }
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section'
          }
        }
      ]
    ]
  }
});
