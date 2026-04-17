"use client";

import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold transition-all duration-300 ease-out rounded-sm cursor-pointer";

  const variants = {
    primary:
      "bg-[var(--color-primary-700)] text-white hover:bg-[var(--color-primary-900)] active:scale-[0.98]",
    outline:
      "border border-[var(--color-neutral-300)] text-[var(--color-neutral-900)] hover:border-[var(--color-primary-700)] hover:text-[var(--color-primary-700)] active:scale-[0.98]",
    ghost:
      "text-[var(--color-neutral-700)] hover:text-[var(--color-primary-700)] hover:bg-[var(--color-neutral-100)]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-[0.9375rem] gap-2",
    lg: "px-8 py-4 text-base gap-2.5",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
