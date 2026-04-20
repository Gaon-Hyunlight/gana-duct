import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "가나공조닥트 | 49년 장인의 공조닥트 제작·시공 전문기업",
  description:
    "1997년 창립. 경기 화성 기반 공조닥트·환기시설 전문업체. 냉난방, 배기, 공장후드, 벤치레이타, 브로워까지 — 49년 외길 장인정신이 설계하는 산업의 공기.",
  keywords: [
    "공조닥트",
    "환기시설",
    "공장후드",
    "벤치레이타",
    "배기닥트",
    "급기닥트",
    "화성 닥트",
    "경기 닥트시공",
    "가나공조닥트",
    "HVAC",
  ],
  openGraph: {
    title: "가나공조닥트 — GANA HVAC DUCT",
    description: "공기의 길을 설계하는 49년 장인의 손끝",
    locale: "ko_KR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        {/* Pretendard CDN */}
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        {/* Inter from Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
