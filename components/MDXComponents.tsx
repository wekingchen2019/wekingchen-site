import React from "react";

// Inline code component
export function Code({ className, children, ...props }: React.HTMLAttributes<HTMLElement> & { className?: string }) {
  const isBlock = className?.includes("language-");

  if (isBlock) {
    return (
      <div className="relative my-6 rounded-lg border border-border/50 bg-muted/50 overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 border-b border-border/50 bg-muted/30">
          <span className="text-xs text-muted-foreground font-mono">
            {className?.replace("language-", "") || "code"}
          </span>
        </div>
        <pre className="p-4 overflow-x-auto">
          <code className={`text-sm font-mono leading-relaxed ${className || ""}`} {...props}>
            {children}
          </code>
        </pre>
      </div>
    );
  }

  return (
    <code
      className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-foreground/90"
      {...props}
    >
      {children}
    </code>
  );
}

// Blockquote component
export function Blockquote({ children, ...props }: React.HTMLAttributes<HTMLQuoteElement>) {
  return (
    <blockquote
      className="border-l-4 border-brand/30 pl-4 italic text-muted-foreground my-6 py-1"
      {...props}
    >
      {children}
    </blockquote>
  );
}
