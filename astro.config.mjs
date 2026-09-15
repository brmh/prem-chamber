// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/data/site.ts';

/**
 * Markdown tables carry the fee and rate data. On a narrow screen a table
 * must scroll inside its own box rather than pushing the page sideways.
 */
/** Root-relative links written inside markdown need the base prefix as well. */
function rehypeBaseLinks() {
  const prefix = base.replace(/\/$/, '');
  return (tree) => {
    if (!prefix) return;
    const walk = (node) => {
      if (node.type === 'element' && node.tagName === 'a') {
        const href = node.properties?.href;
        if (typeof href === 'string' && href.startsWith('/') && !href.startsWith('//')) {
          node.properties.href = prefix + href;
        }
      }
      (node.children || []).forEach(walk);
    };
    walk(tree);
  };
}

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

/**
 * The live site is premchamber.com at the root. A GitHub Pages project site is
 * served from a sub-path instead, so both are driven by env vars: the Pages
 * workflow sets SITE_URL and BASE_PATH, everything else uses the defaults.
 */
const site = process.env.SITE_URL || SITE.origin;
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  markdown: {
    rehypePlugins: [rehypeWrapTables, rehypeBaseLinks],
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
