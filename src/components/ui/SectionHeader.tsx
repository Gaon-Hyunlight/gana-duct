"use client";

import { motion } from "framer-motion";
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
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={`mb-16 md:mb-20 ${align === "center" ? "text-center" : ""}`}
    >
      <motion.p
        variants={fadeUp}
        className="text-label mb-4"
        style={{ color: light ? "rgba(255,255,255,0.5)" : "var(--color-neutral-500)" }}
      >
        {number} / {label}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className="text-h2"
        style={{ color: light ? "#ffffff" : "var(--color-neutral-900)" }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className="mt-4 text-lead max-w-2xl"
          style={{
            color: light ? "rgba(255,255,255,0.7)" : "var(--color-neutral-600)",
            marginLeft: align === "center" ? "auto" : undefined,
            marginRight: align === "center" ? "auto" : undefined,
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
