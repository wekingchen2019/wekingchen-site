import { Suspense } from "react";
import { ArticleCard } from "@/components/ArticleCard";
import { CategoryTabs } from "@/components/CategoryTabs";
import { getAllPosts, getAllCategories } from "@/lib/mdx";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "博客",
  description: "AI 算法、产品思考与投资洞察。不定期更新。",
};

type Props = {
  searchParams: Promise<{ category?: string }>;
};

export default async function BlogPage({ searchParams }: Props) {
  const { category: active } = await searchParams;
  const posts = getAllPosts();
  const categories = ["全部", ...getAllCategories()];

  const filtered =
    !active || active === "全部"
      ? posts
      : posts.filter((p) => p.category === active);

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight mb-3">博客</h1>
        <p className="text-muted-foreground">
          AI 算法、产品思考与投资洞察。不定期更新。
        </p>
      </div>

      <Suspense fallback={null}>
        <CategoryTabs
          categories={categories}
          active={active ?? "全部"}
          counts={categories.reduce(
            (acc, cat) => {
              acc[cat] =
                cat === "全部"
                  ? posts.length
                  : posts.filter((p) => p.category === cat).length;
              return acc;
            },
            {} as Record<string, number>
          )}
        />
      </Suspense>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-muted-foreground py-12">
          该分类下暂无文章
        </p>
      )}
    </div>
  );
}
