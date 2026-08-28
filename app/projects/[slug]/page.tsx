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
  blogLink?: string;
}> = {
  cvrptw: {
    title: "CVRPTW 物流排车优化",
    description: "基于 OR-Tools 的物流排车算法，替代人工排车，年节省千万",
    tags: ["OR-Tools", "运筹优化", "CVRPTW", "算法落地"],
    status: "已上线",
    motivation: "传统人工排车效率低、成本高，且难以应对复杂约束（时间窗、车辆容量、多配送点）。通过运筹优化算法自动化排车决策，在满足所有约束的前提下最小化物流总成本。",
    architecture: "基于 Google OR-Tools 的 CVRPTW 求解器，支持多约束条件（时间窗、载重、里程）、动态调度、多车型混合配送。",
    highlights: [
      "覆盖带时间窗的车辆路径问题（CVRPTW）",
      "支持多约束条件：载重、时间窗、里程、多车型",
      "替代人工排车，年节省物流费用千万以上",
      "动态调度能力，支持实时订单插入",
    ],
    techStack: ["Python", "Google OR-Tools", "CVRPTW", "运筹优化"],
    blogLink: "/blog/cvrptw-logistics-routing",
  },
  "dify-store-agent": {
    title: "门店智能导购 Agent",
    description: "基于 Dify 的门店智能商品介绍与咨询系统",
    tags: ["Dify", "LLM", "RAG", "Agent"],
    status: "已上线",
    motivation: "门店场景需要快速、准确的商品介绍与咨询能力，传统人工培训成本高且标准不一。通过 LLM + RAG 构建智能导购 Agent，实现商品知识的自动化服务。",
    architecture: "Dify 平台搭建 LLM 应用 API + 自定义前端。RAG 知识库承载商品信息，多轮对话流程处理复杂咨询场景。",
    highlights: [
      "基于 Dify 快速搭建 LLM 应用 API",
      "RAG 知识库承载商品信息，支持精准检索",
      "自定义前端，适配门店交互场景",
      "多轮对话流程，处理复杂咨询需求",
    ],
    techStack: ["Dify", "LLM", "RAG", "API", "前端开发"],
    blogLink: "/blog/dify-llm-store-guide",
  },
  foresight: {
    title: "Foresight",
    description: "基于可信度加权的股票预测平台",
    tags: ["Next.js", "Supabase", "运筹优化", "小程序"],
    status: "已上线",
    motivation: "传统预测平台缺乏可信度机制，导致预测质量参差不齐。Foresight 借鉴 Ray Dalio「可信度加权创意择优」思想，透明追踪每位预测者的准确性，用数据建立可信度，让高质量预测脱颖而出。",
    architecture: "前端 Next.js 14 (App Router) + 后端 Supabase (PostgreSQL + Edge Functions) + 新浪/东财行情 API。全栈 TypeScript，部署在 Vercel。",
    highlights: [
      "可信度加权排名：基于历史预测准确度动态计算可信度",
      "三级排行榜：全局 / 个股 / 行业维度的准确率排名",
      "自动验证：Cron 定时任务每日收盘后自动判定预测结果",
      "结构化预测：核心观点 + 立场 + 时间框架 + 目标价，提交后不可修改",
    ],
    techStack: ["Next.js 14", "TypeScript", "Supabase", "PostgreSQL", "Vercel", "微信小程序"],
  },
  numen: {
    title: "Numen",
    description: "基于贝叶斯网络的 AI 角色扮演引擎",
    tags: ["Python", "贝叶斯网络", "FastAPI", "Milvus"],
    status: "开发中",
    motivation: "传统 AI 角色扮演依赖 prompt 描述人格，缺乏可解释性和动态变化。Numen 用贝叶斯网络将人格建模为概率分布，让角色的行为从条件概率中涌现——一致性但不僵化。",
    architecture: "Python 后端 (FastAPI) + 贝叶斯角色网络 + VAD 情绪模型 + Milvus 向量记忆 + 多 LLM 支持。",
    highlights: [
      "贝叶斯角色建模：性格、情绪、行为统一在概率图模型中",
      "印象分记忆：不只检索'相关的'，还检索'深刻的'",
      "角色×情境解耦：角色和情境独立创建，自由组合",
      "成长循环：角色有自己的生活，不只是等你来找",
    ],
    techStack: ["Python", "FastAPI", "贝叶斯网络", "Milvus", "PyYAML", "DeepSeek"],
  },
  "growth-engine": {
    title: "Growth Engine",
    description: "指数增长六维评价体系",
    tags: ["Python", "AKShare", "DeepSeek", "量化分析"],
    status: "开发中",
    motivation: "市面上缺乏系统性的企业增长潜力评估框架。Growth Engine 从第一性原理出发，提炼出网络效应、规模报酬递增、TAM 扩张、留存飞轮、技术壁垒、单位经济六个维度，自动评估企业的指数增长潜力。",
    architecture: "Python 引擎 + AKShare 财务数据 + DeepSeek LLM 语义分析。输入股票代码，自动拉取财报数据，六维分析器并行评估，输出评分报告。",
    highlights: [
      "六维评分体系：从网络效应到单位经济的全方位增长评估",
      "自动化数据管线：AKShare 获取 A 股财报，LLM 辅助语义分析",
      "可解释评分：每个维度有明确的指标和数据支撑",
      "轻量 CLI 工具：输入 ticker 即可生成分析报告",
    ],
    techStack: ["Python", "AKShare", "DeepSeek API", "NumPy", "JSON"],
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

        {project.blogLink && (
          <section>
            <a
              href={project.blogLink}
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              阅读完整文章 →
            </a>
          </section>
        )}
      </div>
    </div>
  );
}
