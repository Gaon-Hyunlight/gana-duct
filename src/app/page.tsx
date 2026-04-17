"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Legacy from "@/components/sections/Legacy";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import Capabilities from "@/components/sections/Capabilities";
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
        <Services />
        <Process />
        <Projects />
        <Capabilities />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
