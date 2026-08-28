import type { Metadata } from "next";
import { SkillRadar } from "@/components/SkillRadar";

export const metadata: Metadata = {
  title: "关于",
  description: "7 年算法实战，从推荐系统到运筹优化，从大模型应用到全栈产品交付。",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight mb-3">关于</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          我是 wekingchen，一个用算法思维解决真实问题的人。
        </p>
      </div>

      {/* Bio */}
      <section className="mb-16">
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            7 年算法实战经验，从推荐系统到运筹优化，从大模型应用到全栈产品交付。
            在推荐系统、路径规划（CVRPTW）、大模型 Agent 等方向均有实际落地成果。
          </p>
          <p>
            主导过推荐系统从 0 到 1 搭建，通过 ALS 矩阵分解、向量召回、Item-CF 等多路策略，
            实现千人千面推荐，日均加购率提升 15%，成交 UV 提升 41%。
            同时基于 Google OR-Tools 自研物流排车 CVRPTW 算法，替代人工排车，年节省物流费用千万以上。
          </p>
          <p>
            近两年聚焦 AI Native 产品开发。独立完成 Foresight（基于贝叶斯网络的可信度加权预测平台），
            从算法设计到小程序端完整交付。也构建过门店智能 Agent，实现商品无人介绍与咨询。
          </p>
          <p>
            有量化投资背景，践行价值投资，
            通过公众号「weking说」分享技术与商业思考。相信好的技术决策和好的投资决策，底层逻辑是相通的。
          </p>
        </div>
      </section>

      {/* Skills Radar */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-6">能力</h2>
        <SkillRadar />
      </section>

      {/* Projects */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold mb-6">项目</h2>
        <div className="space-y-6">
          <div className="rounded-lg border bg-card p-6">
            <h3 className="font-semibold text-lg mb-2">蜂鸟风控引擎</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              风控决策引擎，从0到1搭建，覆盖信贷全生命周期。集规则引擎、模型决策、
              实时特征计算于一体，支撑日均千万级风控决策请求。
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h3 className="font-semibold text-lg mb-2">增长引擎</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              量化增长评价体系，从财务指标和股价行为中提取六个维度的结构性得分，
              用于评估企业增长质量与可持续性。
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-xl font-semibold mb-4">联系</h2>
        <p className="text-muted-foreground">
          有 AI 项目合作、技术交流，或者只是想聊聊？
        </p>
        <p className="text-foreground font-mono mt-2">362868601@qq.com</p>
      </section>
    </div>
  );
}
