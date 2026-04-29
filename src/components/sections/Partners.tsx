"use client";

import { m } from "framer-motion";
import { fadeUp, slideInRight, staggerContainer } from "@/lib/animations";
import SectionHeader from "@/components/ui/SectionHeader";

const coverageAreas = [
  "화성", "수원", "평택", "오산", "안산", "용인", "천안", "아산",
];

export default function Partners() {
  return (
    <section
      id="partners"
      className="bg-[var(--color-neutral-50)]"
      style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}
    >
      <div className="container-main">
        <SectionHeader
          number="시공범위"
          label="COVERAGE"
          title="수도권·충청, 공기가 필요한 어디든"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* LEFT: Text */}
          <m.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6"
          >
            <m.p variants={fadeUp} className="text-[var(--color-neutral-700)] text-[1.0625rem] leading-[1.85]">
              경기 화성 본사를 거점으로, 수도권 전역 및 충청권까지 시공합니다.
              대형 제조공장, 식품공장, 물류센터, 요식업 사업장 등 폭넓은 현장에 대응합니다.
            </m.p>

            <m.p variants={fadeUp} className="text-[var(--color-neutral-700)] text-[1.0625rem] leading-[1.85]">
              전화 한 통이면 49년 경력의 전문가가 직접 현장을 봅니다.
            </m.p>

            <m.div variants={fadeUp} className="pt-4">
              <p className="text-sm font-semibold text-[var(--color-neutral-900)] mb-3">주요 시공 권역</p>
              <div className="flex flex-wrap gap-2">
                {coverageAreas.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1.5 text-sm bg-white border border-[var(--color-neutral-200)] rounded-sm text-[var(--color-neutral-700)]"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </m.div>

            <m.div variants={fadeUp} className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-[var(--color-primary-700)] font-semibold text-sm hover:gap-3 transition-all duration-300"
              >
                견적 문의하기 <span>&rarr;</span>
              </a>
            </m.div>
          </m.div>

          {/* RIGHT: Real Google Map */}
          <m.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="w-full"
          >
            <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden border border-[var(--color-neutral-200)] bg-[var(--color-neutral-100)]">
              <iframe
                src="https://maps.google.com/maps?q=%EA%B2%BD%EA%B8%B0%EB%8F%84%20%ED%99%94%EC%84%B1%EC%8B%9C%20%ED%8C%94%ED%83%84%EB%A9%B4%203.1%EB%A7%8C%EC%84%B8%EB%A1%9C%20677&t=m&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="가나공조닥트 본사 위치 — 경기도 화성시 팔탄면 3.1만세로 677"
                className="absolute inset-0"
              />
            </div>
            <div className="mt-3 flex flex-col gap-1.5">
              <a
                href="https://map.kakao.com/link/search/경기도 화성시 팔탄면 3.1만세로 677"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-[var(--color-neutral-500)] hover:text-[var(--color-primary-700)] transition-colors"
              >
                카카오맵에서 길찾기 <span>&rarr;</span>
              </a>
              <a
                href="https://map.naver.com/p/search/경기도 화성시 팔탄면 3.1만세로 677"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-[var(--color-neutral-500)] hover:text-[var(--color-primary-700)] transition-colors"
              >
                네이버지도에서 길찾기 <span>&rarr;</span>
              </a>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
