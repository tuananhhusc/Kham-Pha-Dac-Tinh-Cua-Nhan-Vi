import type { Metadata } from "next";
import { Lora, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const lora = Lora({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin", "vietnamese"],
  variable: '--font-lora',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin", "vietnamese"],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Khám Phá Đặc Tính Của Nhân Vị | Nghiên cứu Triết học - Thần học",
  description: "Báo cáo nghiên cứu chuyên sâu về đặc tính nhân vị: Nền tảng bản thể luận, sự phát triển lịch sử từ Boethius đến thế kỷ 21, và những thách thức trong kỷ nguyên công nghệ đương đại.",
  keywords: ["nhân vị", "personhood", "triết học", "thần học Công giáo", "Boethius", "Thomas Aquinas", "Jacques Maritain", "Emmanuel Mounier", "personalism", "thuyết nhân vị", "đạo đức sinh học", "trí tuệ nhân tạo"],
  authors: [{ name: "Nghiên cứu Học thuật Nhân Vị" }],
  openGraph: {
    title: "Đặc tính của Nhân vị - Nghiên cứu Toàn diện",
    description: "Từ Boethius đến AI: Hành trình 2 thiên niên kỷ khám phá bản chất con người",
    locale: "vi_VN",
    type: "article",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${lora.variable} ${cormorant.variable} antialiased bg-parchment text-charcoal`}>
        {children}
      </body>
    </html>
  );
}
