import fs from 'node:fs/promises';
import path from 'node:path';

export type PostMeta = {
  slug: string;
  title: string;
  date?: string; // ISO or human
  description?: string;
  tag?: string; // project, review, etc.

  ignore?: boolean; // if true, do not include in blog index
};

const BLOG_DIR = path.join(process.cwd(), 'src', 'app', 'blog');

export async function getPosts(): Promise<PostMeta[]> {
  const entries = await fs.readdir(BLOG_DIR, { withFileTypes: true });
  const posts: PostMeta[] = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const slug = entry.name;
    // Require a page.tsx file inside the slug directory to consider it a post
    const pagePath = path.join(BLOG_DIR, slug, 'page.tsx');
    try {
      await fs.stat(pagePath);
    } catch {
      continue; // skip folders without a page.tsx
    }

    const metaPath = path.join(BLOG_DIR, slug, 'meta.json');
    let meta: Partial<PostMeta> | undefined = {};
    try {
      const raw = await fs.readFile(metaPath, 'utf-8');
      meta = JSON.parse(raw);
    } catch {
      // ignore missing or invalid meta.json; hidden 
      meta = undefined;
    }

    if (meta && (meta?.ignore ?? false) !== true) {
      posts.push({
        ...meta,
        slug,
        title: meta.title || humanizeSlug(slug),
        date: meta.date,
        description: meta.description,
        tag: humanizeSlug(meta.tag || ""),
      });
    }
  }

  // Sort by date desc if available, otherwise by slug desc
  posts.sort((a, b) => {
    const ad = a.date ? Date.parse(a.date) : 0;
    const bd = b.date ? Date.parse(b.date) : 0;
    if (ad && bd) return bd - ad;
    if (ad) return -1;
    if (bd) return 1;
    return a.slug < b.slug ? 1 : -1;
  });

  return posts;
}

function humanizeSlug(slug: string): string {
  return slug
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

