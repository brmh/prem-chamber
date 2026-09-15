import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const faq = z.object({ q: z.string(), a: z.string() });
const source = z.object({ label: z.string(), url: z.string().url() });

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    /** Shared across both languages so an English guide can find its Hindi twin. */
    key: z.string(),
    lang: z.enum(['en', 'hi']),
    title: z.string(),
    metaTitle: z.string(),
    description: z.string(),
    /** One line stating the question this page answers, shown under the title. */
    answers: z.string(),
    updated: z.coerce.date(),
    readingTime: z.number().int().positive(),
    /** Lower sorts first on the index page. */
    order: z.number().int().default(50),
    featured: z.boolean().default(false),
    /** Service slugs this guide relates to. */
    services: z.array(z.string()).default([]),
    /** Keys of other guides. */
    related: z.array(z.string()).default([]),
    faqs: z.array(faq).default([]),
    sources: z.array(source).default([]),
    /** Set where the page quotes fees or rates that go stale. */
    hasRates: z.boolean().default(false),
  }),
});

export const collections = { guides };
