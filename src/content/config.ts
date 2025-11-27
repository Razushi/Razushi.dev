import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().transform((value) => new Date(value)),
    tags: z.array(z.string()).default([]),
    heroColor: z.string().optional(),
  }),
});

export const collections = { blog };
