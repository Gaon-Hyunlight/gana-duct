"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionHeader from "@/components/ui/SectionHeader";

const services = [
  {
    num: "01",
    title: "냉·난방 닥트",
    desc: "사각·원형·스파이럴 등 닥트 형태 전반 자체 제작.",
    image: "/images/service-hvac.jpg",
  },
  {
    num: "02",
    title: "배기·급기 닥트",
    desc: "공장·업소 환기 라인 일체 시공. 도면부터 현장 마감까지.",
    image: "/images/service-exhaust.jpg",
  },
  {
    num: "03",
    title: "인테리어 닥트",
    desc: "노출형 마감 대응. 천장 라인·간격까지 도면대로 맞춰 시공.",
    image: "/images/factory-interior.jpg",
  },
  {
    num: "04",
    title: "공장 후드",
    desc: "라인 환경에 맞춘 맞춤 제작 후드. 현장 조건 정밀 반영.",
    image: "/images/service-factory-hood.jpg",
  },
  {
    num: "05",
    title: "식당 후드",
    desc: "주방 후드 맞춤 제작. 화구 수·천장 높이·동선에 맞춰 설계.",
    image: "/images/service-kitchen-hood.jpg",
  },
  {
    num: "06",
    title: "그라비아 닥트",
    desc: "그라비아 인쇄·특수 공정용 급배기 라인 시공.",
    image: "/images/service-gravure.jpg",
  },
  {
    num: "07",
    title: "코팅기 급·배기",
    desc: "코팅기·점착기 라인 급배기 시공.",
    image: "/images/service-coating.jpg",
  },
  {
    num: "08",
    title: "벤치레이타",
    desc: "루프 벤틸레이터(옥상 자연 환기). 지붕 면적·풍압 조건에 맞춰 설치.",
    image: "/images/roof-mountain.jpg",
  },
  {
    num: "09",
    title: "각종 브로워(FAN)",
    desc: "시로코·에어포일 팬 등 송풍기 공급·설치.",
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
