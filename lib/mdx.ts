import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  category: string;
  tags: string[];
  description: string;
  draft?: boolean;
}

export interface Post extends PostMeta {
  content: string;
}

const postsDirectory = path.join(process.cwd(), "content/blog");

const CONTENT_EXTENSIONS = [".mdx", ".md"];

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(postsDirectory).filter((f) =>
    CONTENT_EXTENSIONS.some((ext) => f.endsWith(ext))
  );

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.(mdx|md)$/, "");
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title ?? "",
      date: data.date ?? "",
      category: data.category ?? "随笔",
      tags: data.tags ?? [],
      description: data.description ?? "",
      draft: data.draft ?? false,
    } as PostMeta;
  });

  return posts
    .filter((p) => !p.draft)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const cats = new Set(posts.map((p) => p.category));
  return Array.from(cats).sort();
}

export function getPostsByCategory(category: string): PostMeta[] {
  return getAllPosts().filter((p) => p.category === category);
}

export function getPostBySlug(slug: string): Post | null {
  // Try both extensions
  for (const ext of CONTENT_EXTENSIONS) {
    const filePath = path.join(postsDirectory, `${slug}${ext}`);
    if (fs.existsSync(filePath)) {
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title ?? "",
        date: data.date ?? "",
        category: data.category ?? "随笔",
        tags: data.tags ?? [],
        description: data.description ?? "",
        draft: data.draft ?? false,
        content,
      };
    }
  }
  return null;
}
