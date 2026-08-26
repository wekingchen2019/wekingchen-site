import { ProjectCard, type Project } from "@/components/ProjectCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "项目",
  description: "AI 产品与算法实践项目。",
};

const projects: Project[] = [
  {
    slug: "foresight",
    title: "Foresight",
    description: "基于可信度加权的股票预测平台。借鉴 Ray Dalio「可信度加权创意择优」思想，透明追踪每位预测者的准确性，用数据建立可信度。支持结构化预测提交、三级排行榜（全局/个股/行业）、自动验证、实时行情。完整 AI Native 项目，从算法设计到小程序端独立交付。",
    tags: ["Next.js", "Supabase", "运筹优化", "小程序"],
    status: "已上线",
  },
  {
    slug: "numen",
    title: "Numen",
    description: "基于贝叶斯网络的 AI 角色扮演引擎。角色人格从概率分布中涌现——性格是稳定的先验，情绪是动态的调制器，记忆通过印象分筛选，行为从条件概率中采样。支持角色×情境解耦、印象记忆、VAD 情绪建模、成长循环。",
    tags: ["Python", "贝叶斯网络", "FastAPI", "Milvus"],
    status: "开发中",
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight mb-3">项目</h1>
        <p className="text-muted-foreground">
          独立完成的 AI 产品与算法实践。
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
