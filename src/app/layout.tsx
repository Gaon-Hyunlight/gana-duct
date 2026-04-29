import type { Metadata, Viewport } from "next";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import {
  SITE_URL,
  GOOGLE_VERIFICATION,
  NAVER_VERIFICATION,
  KEYWORDS_PRIMARY,
} from "@/lib/seo-config";

const TITLE_BASE =
  "가나공조닥트 | 1997 화성 팔탄 자체공장 · 공조닥트·환기덕트·공장후드 시공";
const DESCRIPTION =
  "공조닥트·환기덕트·배기덕트·급기덕트·냉난방닥트·인테리어 닥트·공장 후드·식당 후드·그라비아 닥트·코팅기 급배기·벤치레이타(Roof Ventilator)·시로코/에어포일 FAN 제작·시공 전문. 가나공조닥트 화성 팔탄 자체공장(1997 설립). 49년 외길 이오복 대표 직접 시공. 무료 견적·시공 보증 1년·A/S 무상.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A1F3D",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE_BASE,
    template: "%s | 가나공조닥트",
  },
  description: DESCRIPTION,
  keywords: [...KEYWORDS_PRIMARY],
  applicationName: "가나공조닥트",
  authors: [{ name: "가나공조닥트", url: SITE_URL }],
  creator: "가나공조닥트",
  publisher: "가나공조닥트",
  category: "공조닥트·환기설비·HVAC 시공",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: "가나공조닥트",
    title: TITLE_BASE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "가나공조닥트 — 1997 화성 팔탄 자체공장",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE_BASE,
    description: DESCRIPTION,
    images: ["/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: GOOGLE_VERIFICATION || undefined,
    other: NAVER_VERIFICATION
      ? { "naver-site-verification": NAVER_VERIFICATION }
      : undefined,
  },
  other: {
    "format-detection": "telephone=yes",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        {/* LCP 이미지 우선 로드 — Hero 배경 (CSS background-image라 발견 지연 회피) */}
        <link
          rel="preload"
          as="image"
          href="/images/hero-roof.webp"
          fetchPriority="high"
          type="image/webp"
        />
        {/* 외부 폰트 호스트 preconnect */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Pretendard CDN */}
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD 구조화 데이터 (LocalBusiness + Organization) */}
        <JsonLd />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
