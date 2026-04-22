import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    author: z.string().default('拉卡拉官方'),
    cover_image: z.string().optional(),
    status: z.string().default('published'),
    created_at: z.string().or(z.date()),
  }),
});

export const collections = { articles };
