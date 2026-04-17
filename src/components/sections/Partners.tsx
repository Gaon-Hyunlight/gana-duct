"use client";

import { motion } from "framer-motion";
import { fadeUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";
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
          title="전국 어디든, 공기가 필요한 곳"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* LEFT: Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6"
          >
            <motion.p variants={fadeUp} className="text-[var(--color-neutral-700)] text-[1.0625rem] leading-[1.85]">
              경기 화성 본사를 거점으로, 수도권 전역 및 충청권까지 시공합니다.
              대형 제조공장, 식품공장, 물류센터, 요식업 사업장 등 폭넓은 현장에 대응합니다.
            </motion.p>

            <motion.p variants={fadeUp} className="text-[var(--color-neutral-700)] text-[1.0625rem] leading-[1.85]">
              당일 현장조사, 맞춤 견적 서비스를 제공합니다.
              전화 한 통이면 49년 경력의 전문가가 직접 현장을 봅니다.
            </motion.p>

            <motion.div variants={fadeUp} className="pt-4">
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
            </motion.div>

            <motion.div variants={fadeUp} className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-[var(--color-primary-700)] font-semibold text-sm hover:gap-3 transition-all duration-300"
              >
                견적 문의하기 <span>&rarr;</span>
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT: Korea map SVG */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Simplified Korea peninsula silhouette */}
              <svg viewBox="0 0 300 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                {/* Korea silhouette — simplified */}
                <path
                  d="M150 20 C130 30, 110 50, 100 70 C90 90, 85 110, 90 130 C95 150, 100 160, 95 180 C90 200, 80 210, 75 230 C70 250, 72 270, 80 290 C88 310, 95 320, 100 340 C105 360, 115 380, 130 390 C145 400, 155 400, 170 390 C185 380, 195 360, 200 340 C205 320, 210 310, 215 290 C220 270, 225 250, 220 230 C215 210, 205 200, 200 180 C195 160, 198 150, 200 130 C202 110, 200 90, 195 70 C190 50, 175 30, 150 20Z"
                  fill="var(--color-neutral-200)"
                  stroke="var(--color-neutral-300)"
                  strokeWidth="1"
                />
                {/* Gyeonggi region highlight */}
                <ellipse cx="140" cy="150" rx="40" ry="30" fill="var(--color-primary-700)" opacity="0.15" />
                {/* Hwaseong marker (main) */}
                <circle cx="135" cy="165" r="6" fill="var(--color-primary-700)" />
                <circle cx="135" cy="165" r="10" fill="none" stroke="var(--color-primary-700)" strokeWidth="1.5" opacity="0.5" />
                <text x="148" y="169" fill="var(--color-primary-700)" fontSize="11" fontWeight="600">화성 (본사)</text>
                {/* Other markers */}
                {[
                  { x: 145, y: 140, label: "수원" },
                  { x: 125, y: 185, label: "평택" },
                  { x: 140, y: 155, label: "오산" },
                  { x: 115, y: 155, label: "안산" },
                  { x: 158, y: 152, label: "용인" },
                  { x: 118, y: 210, label: "천안" },
                  { x: 130, y: 220, label: "아산" },
                ].map((city) => (
                  <g key={city.label}>
                    <circle cx={city.x} cy={city.y} r="3" fill="var(--color-neutral-500)" />
                    <text x={city.x + 7} y={city.y + 4} fill="var(--color-neutral-600)" fontSize="9">{city.label}</text>
                  </g>
                ))}
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
