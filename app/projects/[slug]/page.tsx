import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const projects: Record<string, {
  title: string;
  description: string;
  tags: string[];
  status: string;
  motivation: string;
  architecture: string;
  highlights: string[];
  techStack: string[];
}> = {
  foresight: {
    title: "Foresight",
    description: "基于贝叶斯网络的可信度加权预测平台",
    tags: ["Next.js", "Supabase", "贝叶斯网络", "Vercel"],
    status: "已上线",
    motivation: "传统预测平台缺乏可信度机制，导致预测质量参差不齐。Foresight 通过贝叶斯网络对预测者的可信度进行动态加权，让高质量预测脱颖而出。",
    architecture: "前端 Next.js + 后端 Supabase（PostgreSQL + Edge Functions）+ 贝叶斯推理引擎。全栈 TypeScript，部署在 Vercel。",
    highlights: [
      "贝叶斯角色建模：基于历史预测准确度动态计算可信度",
      "社区共识机制：加权聚合多源预测，降低个体偏差",
      "小程序端适配：一套代码适配 Web + 微信小程序",
      "实时推理：Edge Functions 实现低延迟预测计算",
    ],
    techStack: ["Next.js 14", "TypeScript", "Supabase", "PostgreSQL", "Vercel", "微信小程序"],
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/projects"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
      >
        ← 返回项目列表
      </Link>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            {project.title}
          </h1>
          <Badge variant="secondary">{project.status}</Badge>
        </div>
        <p className="text-lg text-muted-foreground">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-border/50 bg-muted/30 px-3 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-semibold mb-3">为什么做这个</h2>
          <p className="text-muted-foreground leading-relaxed">
            {project.motivation}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">技术架构</h2>
          <p className="text-muted-foreground leading-relaxed">
            {project.architecture}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">核心亮点</h2>
          <ul className="space-y-3">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
                <span className="text-muted-foreground">{highlight}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">技术栈</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-md bg-muted/50 px-3 py-1.5 text-sm text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
