"use client";

import { motion } from "framer-motion";
import { fadeUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";

export default function Legacy() {
  return (
    <section
      id="legacy"
      className="bg-[var(--color-neutral-50)]"
      style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}
    >
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* LEFT: Image */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative lg:sticky lg:top-24"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[var(--color-neutral-200)]">
              <img
                src="/images/ventilator-steel.jpg"
                alt="가나공조닥트 공장 제작 현장 — 은색 벤치레이타 제작 완료"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                <p className="text-xs text-white/70 font-mono tracking-wider">
                  공장 제작 현장 &middot; 화성
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p variants={fadeUp} className="text-label text-[var(--color-neutral-500)] mb-4">
              장인정신 / LEGACY
            </motion.p>

            <motion.h2 variants={fadeUp} className="text-h2 text-[var(--color-neutral-900)] mb-10">
              장인(匠人)이라
              <br />
              불리는 이유
            </motion.h2>

            <motion.div variants={fadeUp} className="space-y-6 text-[var(--color-neutral-700)] text-[1.0625rem] leading-[1.85]">
              <p>
                1970년대 후반, 공조닥트라는 단어조차 생소하던 시절.
                이오복 대표는 열 여덟의 나이로 철판을 잡았습니다.
                그 손이 49년째 같은 일을 하고 있습니다.
              </p>

              <p>
                1997년, 화성 팔탄에 &lsquo;가나공조닥트&rsquo;를 세운 이래
                도면 한 장 없이도 시공 현장의 공기 흐름을
                읽어내는 경지에 올랐습니다.
              </p>

              <p>
                남들이 장인이라 부르는 것은, 49년간
                수만 번의 절단과 용접, 수천 번의 시공을
                같은 마음으로 반복한 사람만이 얻을 수 있는 이름입니다.
              </p>
            </motion.div>

            {/* Quote card */}
            <motion.blockquote
              variants={slideInRight}
              className="mt-12 pl-6 border-l-[3px] border-[var(--color-signal)]"
            >
              <p className="text-lg text-[var(--color-neutral-800)] italic leading-relaxed">
                &ldquo;공기는 거짓말을 하지 않는다.
                <br />
                내가 잘못 접으면 반드시 소음으로 돌아온다.&rdquo;
              </p>
              <cite className="block mt-3 not-italic text-sm text-[var(--color-neutral-500)]">
                &mdash; 이오복 대표
              </cite>
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
