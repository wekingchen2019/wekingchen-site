import { ArticleCard } from "@/components/ArticleCard";
import { getAllPosts } from "@/lib/mdx";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "博客",
  description: "AI 算法、产品思考与投资洞察。",
};

export default function BlogPage() {
  const articles = getAllPosts();

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight mb-3">博客</h1>
        <p className="text-muted-foreground">
          AI 算法、产品思考与投资洞察。不定期更新。
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
