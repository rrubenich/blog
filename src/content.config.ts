import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    cover: image().optional(), // relative path to an image next to the post, e.g. ./my-post/cover.png
    coverAlt: z.string().default(""),
    coverPosition: z.enum(["top", "center", "bottom"]).default("center"), // which part of the cover stays visible when cropped
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
