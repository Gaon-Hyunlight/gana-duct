"use client";

import { m } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionHeader from "@/components/ui/SectionHeader";

const steps = [
  { num: "01", title: "현장조사", desc: "대표가 직접 현장을 보고 공간·환경·요구사항을 파악합니다." },
  { num: "02", title: "설계·도면", desc: "49년 노하우로 닥트 경로와 풍량을 설계합니다." },
  { num: "03", title: "자재수급", desc: "용도에 맞는 자재를 엄선하여 수급합니다." },
  { num: "04", title: "공장제작", desc: "화성 자체 공장에서 정밀 절단·성형·용접합니다." },
  { num: "05", title: "현장시공", desc: "숙련 기술진이 현장에서 직접 설치합니다." },
  { num: "06", title: "시운전·A/S", desc: "가동 테스트 후 유지보수까지 책임집니다." },
];

export default function Process() {
  return (
    <section
      id="process"
      className="bg-[var(--color-neutral-50)]"
      style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}
    >
      <div className="container-main">
        <SectionHeader
          number="시공과정"
          label="PROCESS"
          title="한 건의 시공이 완성되기까지"
          subtitle="현장조사부터 A/S까지, 전 과정을 직접 책임지는 원스톱 시공"
        />

        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10"
        >
          {steps.map((step, i) => (
            <m.div key={step.num} variants={fadeUp} className="relative flex gap-5">
              {/* Number circle */}
              <div className="shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary-700)] flex items-center justify-center">
                <span className="text-white text-sm font-bold font-mono">{step.num}</span>
              </div>

              {/* Connector line (vertical, mobile only within column) */}
              {i < steps.length - 1 && (
                <div className="absolute left-6 top-14 w-[1px] h-[calc(100%+8px)] border-l border-dashed border-[var(--color-neutral-300)] hidden sm:block lg:hidden" />
              )}

              {/* Text */}
              <div>
                <h3 className="text-base font-semibold text-[var(--color-neutral-900)] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--color-neutral-600)] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
