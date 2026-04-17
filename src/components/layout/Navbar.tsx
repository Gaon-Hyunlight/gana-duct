"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogoFull } from "@/components/ui/Logo";

const navItems = [
  { label: "소개", href: "#intro" },
  { label: "장인정신", href: "#legacy" },
  { label: "사업영역", href: "#services" },
  { label: "시공과정", href: "#process" },
  { label: "시공사례", href: "#projects" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "nav-blur border-b border-[var(--color-neutral-200)]"
            : "bg-transparent"
        }`}
      >
        <div className="container-main flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="#hero" className="relative z-50">
            <LogoFull color={scrolled ? "#0A1F3D" : "#ffffff"} />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  scrolled
                    ? "text-[var(--color-neutral-700)] hover:text-[var(--color-primary-700)]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className={`px-5 py-2.5 text-sm font-semibold rounded-sm transition-all duration-300 ${
                scrolled
                  ? "bg-[var(--color-primary-700)] text-white hover:bg-[var(--color-primary-900)]"
                  : "border border-white/40 text-white hover:bg-white/10"
              }`}
            >
              문의하기
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
          >
            <span
              className={`block w-6 h-[2px] transition-all duration-300 ${
                mobileOpen
                  ? "rotate-45 translate-y-[5px] bg-white"
                  : scrolled ? "bg-[var(--color-neutral-900)]" : "bg-white"
              }`}
            />
            <span
              className={`block w-6 h-[2px] transition-all duration-300 ${
                mobileOpen
                  ? "opacity-0"
                  : scrolled ? "bg-[var(--color-neutral-900)]" : "bg-white"
              }`}
            />
            <span
              className={`block w-6 h-[2px] transition-all duration-300 ${
                mobileOpen
                  ? "-rotate-45 -translate-y-[5px] bg-white"
                  : scrolled ? "bg-[var(--color-neutral-900)]" : "bg-white"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[var(--color-primary-900)] flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="text-2xl font-semibold text-white/90 hover:text-white transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex flex-col items-center gap-3"
            >
              <a
                href="tel:031-353-2547"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                031-353-2547
              </a>
              <a
                href="mailto:gana72407@naver.com"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                gana72407@naver.com
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
