import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  status?: string;
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <Card className="h-full transition-all duration-300 hover:border-border/80 hover:bg-muted/30 glow">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg group-hover:text-brand transition-colors">
              {project.title}
            </CardTitle>
            {project.status && (
              <Badge variant="secondary" className="text-xs">
                {project.status}
              </Badge>
            )}
          </div>
          <CardDescription className="line-clamp-2 text-sm">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md bg-muted/50 px-2 py-0.5 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
