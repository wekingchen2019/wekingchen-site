import { Hero } from "@/components/Hero";
import { ProjectCard, type Project } from "@/components/ProjectCard";
import { ArticleCard, type Article } from "@/components/ArticleCard";
import Link from "next/link";

const featuredProjects: Project[] = [
  {
    slug: "foresight",
    title: "Foresight",
    description: "基于贝叶斯网络的可信度加权预测平台，支持多领域预测与社区共识机制。",
    tags: ["Next.js", "Supabase", "贝叶斯网络", "Vercel"],
    status: "已上线",
  },
];

const latestArticles: Article[] = [
  {
    slug: "dify-llm-store-guide",
    title: "如何使用 Dify 快速构建 LLM 应用 API 并自定义前端来实现门店智能导购",
    description: "从零搭建一套门店 AI 智能导购系统：后端用 Dify 编排工作流，前端用 React 构建流式对话 + 语音交互 + 虚拟角色的完整方案。",
    date: "2026-08-26",
    category: "技术",
    tags: ["Dify", "LLM", "React"],
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Featured Projects */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight">项目</h2>
          <Link
            href="/projects"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            查看全部 →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Latest Articles */}
      <section className="mx-auto max-w-6xl px-6 py-20 border-t border-border/50">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight">最新文章</h2>
          <Link
            href="/blog"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            查看全部 →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {latestArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20 border-t border-border/50">
        <div className="rounded-2xl border border-border/50 bg-muted/30 p-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-3">
            有 AI 项目想聊？
          </h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            推荐系统优化、AI 产品开发、算法咨询 —— 欢迎来聊。
          </p>
          <a
            href="mailto:hello@wekingchen.com"
            className="inline-flex h-10 items-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
          >
            联系我
          </a>
        </div>
      </section>
    </>
  );
}
