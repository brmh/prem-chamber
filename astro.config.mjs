// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/data/site.ts';

/**
 * Markdown tables carry the fee and rate data. On a narrow screen a table
 * must scroll inside its own box rather than pushing the page sideways.
 */
function rehypeWrapTables() {
  return (tree) => {
    const walk = (node) => {
      if (!Array.isArray(node.children)) return;
      node.children = node.children.map((child) => {
        walk(child);
        if (child.type === 'element' && child.tagName === 'table') {
          return {
            type: 'element',
            tagName: 'div',
            properties: { className: ['table-scroll'] },
            children: [child],
          };
        }
        return child;
      });
    };
    walk(tree);
  };
}

export default defineConfig({
  site: SITE.origin,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  markdown: {
    rehypePlugins: [rehypeWrapTables],
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hi'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-IN', hi: 'hi-IN' },
      },
      changefreq: 'monthly',
      lastmod: new Date(),
    }),
  ],
});
