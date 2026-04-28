import { COMPANY, SITE_URL, BUSINESS_GEO } from "@/lib/seo-config";

/**
 * 사이트 전역 JSON-LD (LocalBusiness + Organization 통합)
 *
 * Google·Naver Rich Results 최적화용 구조화 데이터.
 * 본사 위치, 운영시간, 좌표, 서비스 영역, 창업자, 설립연도, 인증 등 명시.
 */
export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HVACBusiness", "Organization"],
    "@id": `${SITE_URL}/#organization`,
    name: COMPANY.nameKo,
    alternateName: [COMPANY.nameEn, "가나공조덕트"],
    legalName: COMPANY.nameKo,
    description: COMPANY.description,
    url: SITE_URL,
    logo: `${SITE_URL}/og-image.webp`,
    image: `${SITE_URL}/og-image.webp`,
    telephone: COMPANY.telephone,
    email: COMPANY.email,
    faxNumber: COMPANY.fax,
    foundingDate: COMPANY.foundingDate,
    founder: {
      "@type": "Person",
      name: COMPANY.founderKo,
      jobTitle: "대표 / 49년 외길 닥트 장인",
      description:
        "1970년대 후반부터 닥트 한 길. 사우디 한양주택 직영 3년(이맘대학교·리야드 인터콘티넨탈 호텔·한양아파트), 우즈벡 대우자동차 안디잔, 베트남 삼성 박닌 SEV, 필리핀 한진중공업 수빅조선소, 멕시코 모토로라 공장 등 글로벌 시공 경력.",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.streetAddress,
      addressLocality: COMPANY.addressLocality,
      addressRegion: COMPANY.addressRegion,
      postalCode: COMPANY.postalCode,
      addressCountry: "KR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_GEO.latitude,
      longitude: BUSINESS_GEO.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "07:00",
        closes: "18:00",
      },
    ],
    priceRange: COMPANY.priceRange,
    areaServed: [
      { "@type": "AdministrativeArea", name: "경기도" },
      { "@type": "City", name: "화성시" },
      { "@type": "City", name: "수원시" },
      { "@type": "City", name: "평택시" },
      { "@type": "City", name: "오산시" },
      { "@type": "City", name: "안산시" },
      { "@type": "City", name: "용인시" },
      { "@type": "City", name: "안성시" },
      { "@type": "City", name: "천안시" },
      { "@type": "City", name: "아산시" },
    ],
    knowsAbout: [
      "공조닥트",
      "공조덕트",
      "환기덕트",
      "배기덕트",
      "급기덕트",
      "냉난방 닥트",
      "스파이럴 덕트 제작",
      "공장 후드",
      "식당 후드",
      "업소용 주방후드",
      "벤치레이타",
      "Roof Ventilator",
      "그라비아 닥트",
      "코팅기 급배기 닥트",
      "인쇄공장 환기",
      "시로코 FAN",
      "에어포일 FAN",
      "HVAC 시공",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "공조닥트 제작·시공",
          description: "사각·원형·스파이럴 등 닥트 형태 전반 자체공장 제작 및 현장 시공",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "공장·식당 후드 제작·시공",
          description:
            "라인 발열·분진 조건에 맞춘 맞춤 제작 후드, 주방 화구·천장 높이 반영 설계",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "그라비아·코팅기 급배기 닥트",
          description: "인쇄·코팅 특수공정 전용 급배기 라인 시공",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "벤치레이타 (Roof Ventilator) 설치",
          description: "옥상 무동력·동력 자연 환기 벤치레이타 공급·설치",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "각종 송풍기(시로코·에어포일 FAN) 공급·설치",
        },
      },
    ],
    sameAs: [],
    slogan: "공기의 길을 설계하는 49년 장인의 손",
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify 결과는 안전 (문자열 escape 처리됨)
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
