"use client";

import { m } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

interface SectionHeaderProps {
  number: string;
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeader({
  number,
  label,
  title,
  subtitle,
  align = "left",
  light = false,
}: SectionHeaderProps) {
  return (
    <m.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={`mb-16 md:mb-20 ${align === "center" ? "text-center" : ""}`}
    >
      <m.p
        variants={fadeUp}
        className="text-label mb-4"
        style={{ color: light ? "rgba(255,255,255,0.5)" : "var(--color-neutral-500)" }}
      >
        {number} / {label}
      </m.p>
      <m.h2
        variants={fadeUp}
        className="text-h2"
        style={{ color: light ? "#ffffff" : "var(--color-neutral-900)" }}
      >
        {title}
      </m.h2>
      {subtitle && (
        <m.p
          variants={fadeUp}
          className="mt-4 text-lead max-w-2xl"
          style={{
            color: light ? "rgba(255,255,255,0.7)" : "var(--color-neutral-600)",
            marginLeft: align === "center" ? "auto" : undefined,
            marginRight: align === "center" ? "auto" : undefined,
          }}
        >
          {subtitle}
        </m.p>
      )}
    </m.div>
  );
}
