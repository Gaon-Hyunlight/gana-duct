"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] max-h-[1200px] overflow-hidden">
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 animate-ken-burns bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-roof.jpg')" }}
        />
        <div className="absolute inset-0 gradient-overlay-hero" />
      </div>

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative h-full container-main flex flex-col justify-end pb-20 md:pb-28 lg:pb-32"
      >
        {/* Label */}
        <motion.p
          variants={fadeUp}
          className="text-label text-white/50 mb-5 md:mb-6"
        >
1994 &middot; 경기도 화성
        </motion.p>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          className="text-hero text-white max-w-4xl"
        >
          공기의 길을
          <br />
          설계하는 손
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="mt-5 md:mt-6 text-lg md:text-xl text-white/70 max-w-xl font-light"
        >
          49년 외길의 장인정신, 가나공조닥트가 만드는 산업의 숨결
        </motion.p>

        {/* CTA */}
        <motion.div variants={fadeUp} className="mt-8 md:mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-7 py-3.5 text-[0.9375rem] font-semibold text-white bg-[var(--color-primary-700)] hover:bg-[var(--color-primary-900)] rounded-sm transition-all duration-300"
          >
            시공사례 보기
            <span className="ml-2">&rarr;</span>
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 text-[0.9375rem] font-semibold text-white border border-white/30 hover:bg-white/10 rounded-sm transition-all duration-300"
          >
            문의하기
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 md:right-12 flex-col items-center hidden md:flex">
        <span className="text-[10px] text-white/40 tracking-[0.2em] uppercase mb-3 [writing-mode:vertical-lr]">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-white/20 relative">
          <div className="w-[3px] h-[3px] rounded-full bg-white absolute left-1/2 -translate-x-1/2 animate-scroll-indicator" />
        </div>
      </div>
    </section>
  );
}
