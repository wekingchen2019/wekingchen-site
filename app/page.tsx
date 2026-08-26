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
    slug: "recommendation-algorithm-7-years",
    title: "推荐算法工程师的 7 年：从召回排序到 AI Native",
    description: "回顾推荐算法领域的演进，以及个人在技术与商业交叉点上的思考。",
    date: "2026-08-20",
    category: "职业",
    tags: ["推荐算法", "职业思考"],
  },
  {
    slug: "first-principles-recommendation",
    title: "用第一性原理重新理解推荐系统",
    description: "回到信息与人的匹配本质，重新审视推荐系统的底层逻辑。",
    date: "2026-08-15",
    category: "技术",
    tags: ["第一性原理", "推荐系统"],
  },
  {
    slug: "ai-native-product-thinking",
    title: "AI Native 时代，算法工程师需要什么新能力",
    description: "当 LLM 成为基础设施，算法工程师的核心竞争力在哪里。",
    date: "2026-08-10",
    category: "产品思考",
    tags: ["AI Native", "产品思考"],
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
