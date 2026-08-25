import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "wekingchen — AI 工程师 × 投资思考者",
    template: "%s | wekingchen",
  },
  description: "7 年算法实战，从推荐系统到运筹优化，从大模型应用到全栈产品交付。",
  keywords: ["AI 工程师", "推荐系统", "运筹优化", "大模型应用", "算法创新", "全栈开发"],
  openGraph: {
    title: "wekingchen — AI 工程师 × 投资思考者",
    description: "7 年算法实战，从推荐系统到运筹优化，从大模型应用到全栈产品交付。",
    url: "https://wekingchen.com",
    siteName: "wekingchen",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "wekingchen — AI 工程师 × 投资思考者",
    description: "7 年算法实战，从推荐系统到运筹优化，从大模型应用到全栈产品交付。",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="zh-CN"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
