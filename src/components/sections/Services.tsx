"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionHeader from "@/components/ui/SectionHeader";

const services = [
  {
    num: "01",
    title: "냉·난방 닥트",
    desc: "쾌적한 실내 공조의 시작, 정밀 제작 닥트 시스템",
    image: "/images/service-hvac.jpg",
  },
  {
    num: "02",
    title: "배기·급기 닥트",
    desc: "효율적 공기 순환을 위한 덕트 설계 및 시공",
    image: "/images/service-exhaust.jpg",
  },
  {
    num: "03",
    title: "인테리어 닥트",
    desc: "공간에 녹아드는 마감, 노출형 디자인 닥트",
    image: "/images/factory-interior.jpg",
  },
  {
    num: "04",
    title: "공장 후드",
    desc: "대형 산업 환기 설비, 맞춤 제작 후드 시스템",
    image: "/images/service-factory-hood.jpg",
  },
  {
    num: "05",
    title: "식당 후드",
    desc: "요식업 전용 배기 후드, 위생과 효율의 균형",
    image: "/images/service-kitchen-hood.jpg",
  },
  {
    num: "06",
    title: "그라비아 닥트",
    desc: "인쇄·특수공정 대응, 정밀 급배기 라인",
    image: "/images/service-gravure.jpg",
  },
  {
    num: "07",
    title: "코팅기 급·배기",
    desc: "화학·제조라인 특화, 내화학성 닥트 시스템",
    image: "/images/service-coating.jpg",
  },
  {
    num: "08",
    title: "벤치레이타",
    desc: "옥상 자연 환기 시스템, 루프 벤틸레이터 설치",
    image: "/images/roof-mountain.jpg",
  },
  {
    num: "09",
    title: "각종 브로워(FAN)",
    desc: "시로코·에어포일 팬 공급 및 설치",
    image: "/images/fan-catalog.jpg",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white"
      style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}
    >
      <div className="container-main">
        <SectionHeader
          number="사업영역"
          label="SERVICES"
          title="다루는 모든 공기"
          subtitle="냉난방부터 산업 특수설비까지, 전 영역을 책임집니다."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((s) => (
            <motion.div
              key={s.num}
              variants={fadeUp}
              className="group relative border border-[var(--color-neutral-200)] rounded-sm overflow-hidden bg-white hover:border-[var(--color-primary-700)] transition-all duration-400 hover:-translate-y-1 hover:shadow-lg cursor-default"
            >
              {/* Image */}
              <div className="relative h-44 bg-[var(--color-neutral-100)] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <span className="text-label text-[var(--color-neutral-400)] text-[0.6875rem]">
                  {s.num}
                </span>
                <h3 className="mt-1.5 text-base font-semibold text-[var(--color-neutral-900)]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-neutral-600)] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
