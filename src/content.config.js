import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    status: z.enum(['live', 'beta', 'private-beta', 'building', 'upcoming']),
    url: z.string().optional(),
    icon: z.string().optional(),
    media: z.array(
      z.object({
        type: z.enum(['image', 'video']),
        src: z.string(),
        alt: z.string().optional(),
        poster: z.string().optional(),
      })
    ).optional(),
    description: z.string(),
    order: z.number(),
    aecDomains: z.array(z.string()).optional(),
  }),
});

export const collections = { projects };
