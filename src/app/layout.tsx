import type { Metadata } from "next";
import "./reset.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "로라인 | 어려운 법률이야기 전문가가 도와드리겠습니다",
  description: "어려운 법률상담 로라인에서 확실하고 쉽게 설명해 드립니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
