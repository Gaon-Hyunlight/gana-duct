/**
 * SEO 설정 — 사용자가 직접 편집하는 한 곳
 *
 * 도메인 변경 / 검색엔진 인증 코드 입력 / 좌표 수정 시 이 파일만 수정
 */

export const SITE_URL = "https://ganaduct.co.kr";

/**
 * 검색엔진 인증 코드 — 빈 문자열이면 자동으로 메타 태그 미생성
 *
 * Google: search.google.com/search-console → 속성 추가 → HTML 태그
 *         <meta name="google-site-verification" content="여기 값" />
 *
 * Naver: searchadvisor.naver.com → 사이트 등록 → HTML 태그 확인
 *        <meta name="naver-site-verification" content="여기 값" />
 */
export const GOOGLE_VERIFICATION = "";
export const NAVER_VERIFICATION = "";

/**
 * 본사 위치 좌표 (Google Maps에서 정확한 값 추출 권장)
 * 경기도 화성시 팔탄면 3.1만세로 677 — 추정 좌표
 */
export const BUSINESS_GEO = {
  latitude: 37.180,
  longitude: 126.890,
};

/**
 * 회사 핵심 정보 (JSON-LD 및 메타 공통 사용)
 */
export const COMPANY = {
  nameKo: "가나공조닥트",
  nameEn: "GANA HVAC DUCT",
  founderKo: "이오복",
  foundingDate: "1997",
  businessNumber: "124-18-72407",
  email: "gana72407@naver.com",
  telephone: "+82-31-353-2547",
  telephoneDisplay: "031-353-2547",
  mobile: "+82-10-8817-8523",
  mobileDisplay: "010-8817-8523",
  fax: "031-353-2548",
  addressLocality: "화성시",
  addressRegion: "경기도",
  streetAddress: "팔탄면 3.1만세로 677",
  postalCode: "18553",
  openingHours: "Mo-Sa 07:00-18:00",
  priceRange: "₩₩",
  description:
    "1997년 화성 팔탄 자체공장에서 직접 설계·제작·시공하는 공조닥트 전문기업. 이오복 대표 49년 외길 — 사우디 한양주택, 우즈벡 대우자동차, 베트남 삼성전자, 필리핀 한진중공업, 멕시코 모토로라 등 글로벌 현장 경력. 무료 견적 / 시공 보증 1년 / A/S 무상.",
} as const;

/**
 * SEO 키워드 풀 — Cowork 키워드 리서치 Top 50
 * (브랜드 / 코어 / 형상 / 후드 / 환기 / 시공 / 지역 / USP)
 */
export const KEYWORDS_PRIMARY = [
  // 브랜드 (차별화)
  "가나공조닥트",
  "1997 가나공조닥트",
  "가나공조닥트 화성",
  "가나공조닥트 팔탄",
  "가나공조닥트 화성본점",
  "GANA HVAC DUCT",
  // 코어 (Trends 검증)
  "공조닥트",
  "공조덕트",
  "공조 덕트 공사",
  "환기덕트",
  "환기닥트",
  "배기덕트",
  "급기덕트",
  "냉난방 닥트",
  "HVAC 덕트",
  "닥트시공",
  "덕트공사",
  "환기설비",
  "환기시설 시공",
  // 제품 형상
  "스파이럴덕트",
  "스파이럴 덕트 제작",
  "각형 닥트",
  "사각 닥트",
  "원형 덕트",
  "후렉시블 덕트",
  // 후드 / FAN
  "공장 후드",
  "공장 후드 제작",
  "식당 후드",
  "식당 후드 설치",
  "주방 후드",
  "업소용 주방후드",
  "벤치레이타",
  "벤츄레이터",
  "Roof Ventilator",
  "에어포일 FAN",
  "시로코팬",
  "송풍기",
  // niche (콘텐츠 갭)
  "그라비아 닥트",
  "그라비아 급기닥트",
  "그라비아 배기닥트",
  "코팅기 급배기 닥트",
  "인쇄공장 닥트",
  // 지역 (시공 권역)
  "화성 공조닥트",
  "화성 닥트시공",
  "화성 닥트제작",
  "화성 팔탄 닥트",
  "수원 공조닥트",
  "평택 닥트",
  "안산 닥트",
  "용인 닥트",
  "안성 닥트",
  "천안 공조닥트",
  "아산 공조닥트",
  // USP
  "자체공장 닥트",
  "시공보증 닥트업체",
  "A/S 무상 닥트",
  "무료 견적 닥트",
  "49년 닥트 장인",
  "닥트 장인 이오복",
] as const;

/**
 * 사이트 전역 페이지 목록 (sitemap.ts 사용)
 */
export const SITE_PAGES = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
];
