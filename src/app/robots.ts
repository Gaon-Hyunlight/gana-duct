import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo-config";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // 모든 검색 엔진 — 전체 허용
      { userAgent: "*", allow: "/" },
      // 네이버(Yeti) 명시 허용 — 네이버 서치어드바이저 robots.txt 검증 통과 필수
      { userAgent: "Yeti", allow: "/" },
      // 구글봇 명시 허용
      { userAgent: "Googlebot", allow: "/" },
      // 다음봇 명시 허용
      { userAgent: "Daumoa", allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
