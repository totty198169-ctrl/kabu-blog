import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// カテゴリの定義(順序はサイト上の表示順)
export const CATEGORIES = [
  'スイングトレード',
  '高配当',
  'デイトレ',
  '銘柄分析',
] as const;

export type Category = (typeof CATEGORIES)[number];

const blog = defineCollection({
  // src/content/blog/ 配下の .md / .mdx を記事として読み込む
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    // 公開日
    pubDate: z.coerce.date(),
    // 更新日(任意)
    updatedDate: z.coerce.date().optional(),
    category: z.enum(CATEGORIES),
    tags: z.array(z.string()).default([]),
    // 銘柄コード等(任意)
    ticker: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
