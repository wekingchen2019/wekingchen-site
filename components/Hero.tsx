import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const tags = [
  "推荐系统",
  "运筹优化",
  "大模型应用",
  "全栈交付",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-3xl">
          {/* Status badge */}
          <div className="mb-8">
            <Badge
              variant="secondary"
              className="text-xs font-normal border border-border/50 bg-muted/50"
            >
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              开放合作中
            </Badge>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            用算法思维
            <br />
            <span className="gradient-text">解决真实问题</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            14 年算法实战，从推荐系统到运筹优化，从大模型应用到全栈产品交付。
            <br className="hidden md:block" />
            擅长从业务本质出发，设计创新算法解决方案。
          </p>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border border-border/50 bg-muted/30 px-3 py-1 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 flex items-center gap-4">
            <Link
              href="/projects"
              className="inline-flex h-10 items-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
            >
              查看项目
            </Link>
            <Link
              href="/about"
              className="inline-flex h-10 items-center rounded-lg border border-border/50 px-6 text-sm font-medium text-muted-foreground transition-all hover:bg-muted/50 hover:text-foreground"
            >
              了解更多
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
