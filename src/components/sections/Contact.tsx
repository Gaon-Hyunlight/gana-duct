"use client";

import { m } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white"
      style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}
    >
      <div className="container-main">
        <m.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Section label */}
          <m.p variants={fadeUp} className="text-label text-[var(--color-neutral-500)] mb-4">
            문의 / CONTACT
          </m.p>

          {/* Title */}
          <m.h2 variants={fadeUp} className="text-h2 text-[var(--color-neutral-900)] mb-6">
            49년의 손끝을 의뢰하세요
          </m.h2>

          {/* Differentiator badges */}
          <m.div variants={fadeUp} className="mb-12 md:mb-16 flex flex-wrap justify-center gap-2">
            {["무료 견적", "시공 보증 1년", "A/S 무상"].map((label) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 px-3 py-2 bg-[var(--color-primary-700)] text-white text-sm font-semibold rounded-sm"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {label}
              </span>
            ))}
          </m.div>

          {/* Direct contact CTA cards */}
          <m.div
            variants={fadeUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 text-left"
          >
            {/* Office Phone */}
            <a
              href="tel:031-353-2547"
              className="group relative p-6 md:p-7 bg-[var(--color-neutral-50)] hover:bg-[var(--color-primary-900)] border border-[var(--color-neutral-200)] hover:border-[var(--color-primary-900)] rounded-sm transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-white group-hover:bg-white/10 flex items-center justify-center transition-colors duration-300">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[var(--color-neutral-700)] group-hover:text-white transition-colors duration-300"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <p className="text-xs text-[var(--color-neutral-500)] group-hover:text-white/60 font-mono tracking-wider transition-colors duration-300">
                  TELEPHONE
                </p>
              </div>
              <p className="text-xs text-[var(--color-neutral-500)] group-hover:text-white/60 mb-1 transition-colors duration-300">
                대표 사무실
              </p>
              <p className="text-xl md:text-2xl font-bold text-[var(--color-neutral-900)] group-hover:text-white tracking-tight transition-colors duration-300">
                031-353-2547
              </p>
              <p className="mt-3 text-xs text-[var(--color-primary-700)] group-hover:text-white/80 font-semibold transition-colors duration-300">
                바로 전화 &rarr;
              </p>
            </a>

            {/* Mobile */}
            <a
              href="tel:010-8817-8523"
              className="group relative p-6 md:p-7 bg-[var(--color-neutral-50)] hover:bg-[var(--color-primary-900)] border border-[var(--color-neutral-200)] hover:border-[var(--color-primary-900)] rounded-sm transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-white group-hover:bg-white/10 flex items-center justify-center transition-colors duration-300">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[var(--color-neutral-700)] group-hover:text-white transition-colors duration-300"
                  >
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12" y2="18" />
                  </svg>
                </div>
                <p className="text-xs text-[var(--color-neutral-500)] group-hover:text-white/60 font-mono tracking-wider transition-colors duration-300">
                  MOBILE
                </p>
              </div>
              <p className="text-xs text-[var(--color-neutral-500)] group-hover:text-white/60 mb-1 transition-colors duration-300">
                대표 휴대폰
              </p>
              <p className="text-xl md:text-2xl font-bold text-[var(--color-neutral-900)] group-hover:text-white tracking-tight transition-colors duration-300">
                010-8817-8523
              </p>
              <p className="mt-3 text-xs text-[var(--color-primary-700)] group-hover:text-white/80 font-semibold transition-colors duration-300">
                바로 전화 &rarr;
              </p>
            </a>

            {/* Email */}
            <a
              href="mailto:gana72407@naver.com"
              className="group relative p-6 md:p-7 bg-[var(--color-neutral-50)] hover:bg-[var(--color-primary-900)] border border-[var(--color-neutral-200)] hover:border-[var(--color-primary-900)] rounded-sm transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-white group-hover:bg-white/10 flex items-center justify-center transition-colors duration-300">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[var(--color-neutral-700)] group-hover:text-white transition-colors duration-300"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <p className="text-xs text-[var(--color-neutral-500)] group-hover:text-white/60 font-mono tracking-wider transition-colors duration-300">
                  EMAIL
                </p>
              </div>
              <p className="text-xs text-[var(--color-neutral-500)] group-hover:text-white/60 mb-1 transition-colors duration-300">
                견적·문의 메일
              </p>
              <p className="text-base md:text-lg font-bold text-[var(--color-neutral-900)] group-hover:text-white tracking-tight break-all transition-colors duration-300">
                gana72407@naver.com
              </p>
              <p className="mt-3 text-xs text-[var(--color-primary-700)] group-hover:text-white/80 font-semibold transition-colors duration-300">
                메일 보내기 &rarr;
              </p>
            </a>
          </m.div>

          {/* Secondary info — address + hours + fax */}
          <m.div
            variants={fadeUp}
            className="mt-10 md:mt-12 pt-8 border-t border-[var(--color-neutral-200)] grid grid-cols-1 sm:grid-cols-3 gap-6 text-left"
          >
            <div>
              <p className="text-xs text-[var(--color-neutral-500)] font-mono tracking-wider mb-2">
                ADDRESS
              </p>
              <a
                href="https://map.kakao.com/link/search/경기도 화성시 팔탄면 3.1만세로 677"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-neutral-700)] hover:text-[var(--color-primary-700)] transition-colors leading-snug"
              >
                경기도 화성시 팔탄면
                <br />
                3.1만세로 677
              </a>
            </div>
            <div>
              <p className="text-xs text-[var(--color-neutral-500)] font-mono tracking-wider mb-2">
                HOURS
              </p>
              <p className="text-sm text-[var(--color-neutral-700)]">07:00 – 18:00</p>
            </div>
            <div>
              <p className="text-xs text-[var(--color-neutral-500)] font-mono tracking-wider mb-2">
                FAX
              </p>
              <p className="text-sm text-[var(--color-neutral-700)]">031-353-2548</p>
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
