"use client";

import { useRouter, useSearchParams } from "next/navigation";

export function CategoryTabs({
  categories,
  active,
  counts,
}: {
  categories: string[];
  active: string;
  counts: Record<string, number>;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function setCategory(cat: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (cat === "全部") {
      params.delete("category");
    } else {
      params.set("category", cat);
    }
    router.push(`/blog?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex gap-2 mb-8 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
            (active ?? "全部") === cat
              ? "bg-foreground text-background"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          {cat}
          {cat !== "全部" && (
            <span className="ml-1.5 text-xs opacity-60">{counts[cat]}</span>
          )}
        </button>
      ))}
    </div>
  );
}
