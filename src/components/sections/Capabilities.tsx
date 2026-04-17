"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import CountUp from "@/components/ui/CountUp";

const capabilities = [
  { value: 49, suffix: "+", label: "YEARS", desc: "현장 경력" },
  { value: 30, suffix: "+", label: "YEARS", desc: "업력" },
  { value: 9, suffix: "", label: "CORE", desc: "사업영역" },
  { value: 1000, suffix: "+", label: "SITES", desc: "누적 시공 추정" },
];

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="relative bg-[var(--color-neutral-900)] overflow-hidden"
      style={{ paddingTop: "var(--section-gap-sm)", paddingBottom: "var(--section-gap-sm)" }}
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern" />

      {/* Background image (subtle) */}
      <div
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/duct-system.jpg')", filter: "blur(4px)" }}
      />

      <div className="container-main relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {capabilities.map((cap) => (
            <motion.div key={cap.desc} variants={fadeUp} className="text-center">
              <div className="text-stat text-white">
                <CountUp end={cap.value} suffix={cap.suffix} />
              </div>
              <p className="text-label text-[var(--color-neutral-500)] mt-2 text-[0.6875rem]">
                {cap.label}
              </p>
              <p className="text-sm text-[var(--color-neutral-400)] mt-1">{cap.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Footnote */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 text-center text-[0.6875rem] text-[var(--color-neutral-600)]"
        >
          *2026년 현재 대표 개인 경력 및 업체 운영 기간 기준
        </motion.p>
      </div>
    </section>
  );
}
