"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionHeader from "@/components/ui/SectionHeader";

type CareerItem = {
  countryKo: string;
  countryEn: string;
  projects: string[];
  featured?: boolean;
  accent?: string;
};

const careerItems: CareerItem[] = [
  {
    countryKo: "사우디아라비아",
    countryEn: "SAUDI ARABIA",
    accent: "한양주택 직영 · 3년 현장",
    projects: [
      "이맘대학교 닥트 시공",
      "리야드 인터콘티넨탈 호텔 닥트 시공",
      "리야드 한양아파트 (알 마터) 시공",
    ],
    featured: true,
  },
  {
    countryKo: "우즈베키스탄",
    countryEn: "UZBEKISTAN",
    accent: "대우자동차",
    projects: ["안디잔 공장 — 열교환기 보온 케이싱"],
  },
  {
    countryKo: "베트남",
    countryEn: "VIETNAM",
    accent: "삼성전자",
    projects: ["박닌 SEV 휴대폰 생산라인 — 컨베이어·열교환기 보온 케이싱"],
  },
  {
    countryKo: "필리핀",
    countryEn: "PHILIPPINES",
    accent: "한진중공업",
    projects: ["수빅조선소 — 건조로 보온 케이싱"],
  },
  {
    countryKo: "멕시코",
    countryEn: "MEXICO",
    accent: "모토로라",
    projects: ["공장 급·배기 닥트 공사"],
  },
];

export default function Career() {
  const featured = careerItems.find((i) => i.featured)!;
  const rest = careerItems.filter((i) => !i.featured);

  return (
    <section
      id="career"
      className="relative bg-white overflow-hidden"
      style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}
    >
      {/* Background — 멕시코 현장 사진 */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: "url('/images/career-mexico.png')",
          opacity: 0.4,
        }}
      />
      {/* White overlay for text legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/70 pointer-events-none"
      />

      <div className="container-main relative">
        <SectionHeader
          number="대표 경력"
          label="CAREER"
          title="49년, 사우디부터 멕시코까지"
          subtitle="이오복 대표가 한국 대기업의 해외 현장에서 쌓은 이력"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-5"
        >
          {/* Featured: Saudi */}
          <motion.article
            variants={fadeUp}
            className="relative border border-[var(--color-neutral-200)] rounded-sm p-6 md:p-8 bg-[var(--color-neutral-50)] hover:border-[var(--color-primary-700)] transition-all duration-400"
          >
            <div className="flex flex-col md:flex-row md:items-start md:gap-10">
              <div className="md:w-64 shrink-0 mb-4 md:mb-0">
                <p className="text-label text-[var(--color-neutral-400)] text-[0.6875rem] mb-2">
                  01
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-[var(--color-neutral-900)]">
                  {featured.countryKo}
                </h3>
                <p className="text-xs font-mono tracking-wider text-[var(--color-neutral-500)] mt-1">
                  {featured.countryEn}
                </p>
                {featured.accent && (
                  <p className="mt-4 inline-block px-3 py-1.5 bg-[var(--color-primary-700)] text-white text-xs font-semibold rounded-sm">
                    {featured.accent}
                  </p>
                )}
              </div>
              <ul className="flex-1 space-y-2.5 border-t md:border-t-0 md:border-l border-[var(--color-neutral-200)] pt-4 md:pt-0 md:pl-10">
                {featured.projects.map((p) => (
                  <li
                    key={p}
                    className="flex gap-3 text-[0.9375rem] text-[var(--color-neutral-700)] leading-relaxed"
                  >
                    <span className="text-[var(--color-primary-700)] mt-1 shrink-0">▸</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>

          {/* Rest: 4 countries grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {rest.map((item, idx) => (
              <motion.article
                key={item.countryKo}
                variants={fadeUp}
                className="relative border border-[var(--color-neutral-200)] rounded-sm p-6 bg-white hover:border-[var(--color-primary-700)] hover:-translate-y-0.5 transition-all duration-400"
              >
                <p className="text-label text-[var(--color-neutral-400)] text-[0.6875rem] mb-2">
                  {String(idx + 2).padStart(2, "0")}
                </p>
                <h3 className="text-lg font-bold text-[var(--color-neutral-900)]">
                  {item.countryKo}
                </h3>
                <p className="text-xs font-mono tracking-wider text-[var(--color-neutral-500)] mt-1">
                  {item.countryEn}
                </p>
                {item.accent && (
                  <p className="mt-3 text-xs font-semibold text-[var(--color-primary-700)]">
                    {item.accent}
                  </p>
                )}
                <ul className="mt-4 pt-4 border-t border-[var(--color-neutral-200)] space-y-2">
                  {item.projects.map((p) => (
                    <li
                      key={p}
                      className="flex gap-2.5 text-sm text-[var(--color-neutral-700)] leading-relaxed"
                    >
                      <span className="text-[var(--color-primary-700)] mt-0.5 shrink-0">▸</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Footnote */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 text-xs text-[var(--color-neutral-500)] leading-relaxed max-w-3xl"
        >
          ※ 본 이력은 이오복 대표의 진술과, 해당 시기 한국 대기업의 해외 진출 사실을 다룬 국내 주요
          언론 보도(중앙일보·조선일보·매일경제·부산일보·KBS·월간조선·한국경제 등)를 교차 확인하여
          작성되었습니다. 현장별 참여 기간 및 세부 역할은 대표 진술 기준이며, 일부 프로젝트는 공개
          자료의 한계로 참여 사실 확인에 제약이 있을 수 있습니다.
        </motion.p>
      </div>
    </section>
  );
}
