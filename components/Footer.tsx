import Link from "next/link";

const footerLinks = [
  { href: "/blog", label: "博客" },
  { href: "/projects", label: "项目" },
  { href: "/about", label: "关于" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              wekingchen<span className="text-brand">.</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              用算法思维解决真实问题
            </p>
          </div>

          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:362868601@qq.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              联系
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} wekingchen. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
