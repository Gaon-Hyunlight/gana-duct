"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, scaleIn } from "@/lib/animations";
import SectionHeader from "@/components/ui/SectionHeader";

const projects = [
  {
    image: "/images/exterior-duct.jpg",
    title: "옥외 집진 시스템",
    location: "경기 화성",
    size: "large",
  },
  {
    image: "/images/red-roof.jpg",
    title: "지붕 벤치레이타 디테일",
    location: "경기 남부",
    size: "medium",
  },
  {
    image: "/images/roof-blue.jpg",
    title: "벤치레이타 라인업 설치",
    location: "산업단지",
    size: "medium",
  },
  {
    image: "/images/roof-mountain.jpg",
    title: "옥상 환기 시스템",
    location: "경기 남부",
    size: "small",
  },
  {
    image: "/images/duct-system.jpg",
    title: "대형 스파이럴 닥트",
    location: "제조공장",
    size: "wide",
  },
  {
    image: "/images/factory-interior.jpg",
    title: "실내 공조 라인",
    location: "경기",
    size: "small",
  },
  {
    image: "/images/fan-catalog.jpg",
    title: "루프 벤틸레이터 · 에어포일 팬",
    location: "제품 라인업",
    size: "small",
  },
  {
    image: "/images/ventilator-steel.jpg",
    title: "벤치레이타 제작",
    location: "자체 공장",
    size: "medium",
  },
];

function getGridClass(size: string, index: number) {
  // Create bento-style layout
  if (index === 0) return "sm:col-span-2 sm:row-span-2";
  if (index === 4) return "sm:col-span-2";
  return "";
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-white"
      style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}
    >
      <div className="container-main">
        <SectionHeader
          number="시공사례"
          label="PROJECTS"
          title="현장이 증명합니다"
          subtitle="화성·수원·평택 일대 제조공장 및 산업단지 시공 현장"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              className={`group relative overflow-hidden rounded-sm bg-[var(--color-neutral-200)] cursor-pointer ${getGridClass(project.size, i)}`}
              style={{ minHeight: i === 0 ? "400px" : "200px" }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[var(--color-primary-900)]/0 group-hover:bg-[var(--color-primary-900)]/60 transition-all duration-500 flex items-end">
                <div className="p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-white font-semibold text-sm">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-xs mt-1 font-mono tracking-wider">
                    {project.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
