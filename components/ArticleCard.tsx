import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
}

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/blog/${article.slug}`} className="group block">
      <article className="rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-border/80 hover:bg-muted/30">
        <div className="flex items-center gap-3 mb-3">
          <time className="text-xs text-muted-foreground">{article.date}</time>
          <div className="flex gap-1.5">
            {article.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-[10px] px-1.5 py-0">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <h3 className="text-lg font-semibold group-hover:text-brand transition-colors mb-2">
          {article.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {article.description}
        </p>
      </article>
    </Link>
  );
}
