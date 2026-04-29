"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Legacy from "@/components/sections/Legacy";
import Career from "@/components/sections/Career";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import Partners from "@/components/sections/Partners";
import Contact from "@/components/sections/Contact";

/**
 * LazyMotion + domAnimation으로 framer-motion 번들 ~40% 감축.
 * 모든 하위 컴포넌트는 motion.X 대신 m.X 사용 — strict 모드에서 강제됨.
 */
export default function Home() {
  return (
    <LazyMotion features={domAnimation} strict>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Legacy />
        <Career />
        <Services />
        <Process />
        <Projects />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </LazyMotion>
  );
}
