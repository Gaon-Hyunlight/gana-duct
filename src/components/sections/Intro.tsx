"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import CountUp from "@/components/ui/CountUp";

const stats = [
  { value: 49, suffix: "+", label: "대표 경력", sub: "(현장 외길)" },
  { value: 30, suffix: "+", label: "업력", sub: "(법인 운영)" },
  { value: 9, suffix: "", label: "사업영역", sub: "(냉난방~특수)" },
];

export default function Intro() {
  return (
    <section id="intro" className="bg-white" style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}>
      <div className="container-main">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Label */}
          <motion.p variants={fadeUp} className="text-label text-[var(--color-neutral-500)] mb-6">
            소개 / INTRODUCTION
          </motion.p>

          {/* Lead copy */}
          <motion.h2
            variants={fadeUp}
            className="text-h2 text-[var(--color-neutral-900)] leading-[1.5]"
          >
            공기 한 줄기가
            <br className="hidden sm:block" />
            공장 전체의 효율을 바꿉니다.
            <br className="hidden sm:block" />
            <span className="text-[var(--color-neutral-500)]">
              가나공조닥트는 49년간
              <br className="hidden sm:block" />
              그 한 줄기를 손으로 만들어 왔습니다.
            </span>
          </motion.h2>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="text-center"
            >
              <div className="text-stat text-[var(--color-primary-700)]">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm font-semibold text-[var(--color-neutral-900)]">
                {stat.label}
              </p>
              <p className="text-xs text-[var(--color-neutral-500)]">{stat.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
