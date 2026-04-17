"use client";

interface LogoProps {
  className?: string;
  color?: string;
  size?: number;
}

export default function Logo({ className = "", color = "#0A1F3D", size = 40 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="가나공조닥트 로고"
    >
      {/* 덕트 단면을 연상시키는 기하학적 GN 모노그램 */}
      {/* 외곽 사각 프레임 — 사각 덕트 */}
      <rect x="4" y="4" width="72" height="72" rx="6" stroke={color} strokeWidth="3" fill="none" />
      {/* 내부 원 — 원형 덕트 단면 */}
      <circle cx="40" cy="40" r="24" stroke={color} strokeWidth="2.5" fill="none" />
      {/* G 글자 — 원의 좌측에 통합 */}
      <path
        d="M40 16 A24 24 0 1 0 40 64 A24 24 0 0 0 64 40 H44"
        stroke={color}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* N 글자 — 기하학적 형태로 */}
      <path
        d="M30 52 V28 L50 52 V28"
        stroke={color}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LogoFull({ className = "", color = "#0A1F3D" }: { className?: string; color?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Logo color={color} size={36} />
      <div className="flex flex-col">
        <span
          className="text-[0.9375rem] font-bold tracking-tight leading-tight"
          style={{ color }}
        >
          GANA
        </span>
        <span
          className="text-[0.5625rem] tracking-[0.2em] leading-tight font-medium"
          style={{ color: color === "#0A1F3D" ? "#6B7079" : "rgba(255,255,255,0.6)" }}
        >
          HVAC DUCT
        </span>
      </div>
    </div>
  );
}
