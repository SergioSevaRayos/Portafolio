import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string().max(110),
      category: z.enum(['hardware-software', 'web-app', 'ecommerce', 'security', 'site']),
      status: z.enum(['live', 'field-testing', 'prototype', 'in-progress', 'archived']),
      role: z.string(),
      client: z.string().optional(),
      tech: z.array(z.string()),
      hero: image(),
      // Card thumbnail, when it should differ from the detail-page hero
      // (e.g. a mascot/brand mark for the grid vs. a real product screenshot
      // for the detail page). Falls back to `hero` when omitted.
      thumbnail: image().optional(),
      gallery: z
        .array(z.object({ src: image(), alt: z.string(), caption: z.string().optional() }))
        .default([]),
      links: z
        .object({
          live: z.string().url().optional(),
          repo: z.string().url().optional(),
          related: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
        })
        .default({}),
      dates: z.object({ start: z.coerce.date(), end: z.coerce.date().optional() }),
      metrics: z.array(z.object({ label: z.string(), value: z.string() })).max(4).default([]),
      featured: z.boolean().default(false),
      order: z.number().default(100),
      draft: z.boolean().default(false),
    }),
});

const site = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/site' }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { projects, site };
