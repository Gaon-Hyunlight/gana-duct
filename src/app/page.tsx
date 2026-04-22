"use client";

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

export default function Home() {
  return (
    <>
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
    </>
  );
}
