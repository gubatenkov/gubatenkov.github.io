import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    heroImage: z.string().optional(),
    description: z.string(),
    title: z.string(),
  }),
})

const work = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    description: z.string(),
    category: z.string(),
    image: z.string(),
    title: z.string(),
    url: z.string(),
  }),
})

export const collections = { blog, work }
