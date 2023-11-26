import { z, defineCollection } from "astro:content";

// Define a collection of tips posts
const tips = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    time: z.string(),
    tags: z.array(z.string())
  })
})

export const collection = { tips }