import { ProjectCard, type Project } from "@/components/ProjectCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "项目",
  description: "AI 产品与算法实践项目。",
};

const projects: Project[] = [
  {
    slug: "cvrptw",
    title: "CVRPTW 物流排车优化",
    description: "基于 Google OR-Tools 自研物流排车算法，替代人工排车，年节省物流费用千万以上。覆盖带时间窗的车辆路径问题（CVRPTW），支持多约束条件、动态调度。",
    tags: ["OR-Tools", "运筹优化", "CVRPTW", "算法落地"],
    status: "已上线",
  },
  {
    slug: "dify-store-agent",
    title: "门店智能导购 Agent",
    description: "基于 Dify 快速构建 LLM 应用 API 并自定义前端，实现门店智能商品介绍与咨询。从 RAG 知识库搭建到多轮对话流程，端到端交付。",
    tags: ["Dify", "LLM", "RAG", "Agent"],
    status: "已上线",
  },
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
  {
    slug: "growth-engine",
    title: "Growth Engine",
    description: "指数增长六维评价体系。输入股票代码，从网络效应、规模报酬递增、TAM 扩张、留存飞轮、技术壁垒、单位经济六个维度自动评估企业增长潜力，输出评分报告。结合 AKShare 财务数据与 LLM 语义分析。",
    tags: ["Python", "AKShare", "DeepSeek", "量化分析"],
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
