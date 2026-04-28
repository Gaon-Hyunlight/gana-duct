import Link from "next/link";
import type { Metadata } from "next";
import { LogoFull } from "@/components/ui/Logo";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없습니다 — 404",
  description:
    "요청하신 페이지를 찾을 수 없습니다. 가나공조닥트 홈으로 이동하시거나 031-353-2547로 직접 문의해주세요.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-8">
          <LogoFull color="#0A1F3D" />
        </div>
        <p className="text-label text-[var(--color-neutral-500)] mb-3">404</p>
        <h1 className="text-h2 text-[var(--color-neutral-900)] mb-4">
          페이지를 찾을 수 없습니다
        </h1>
        <p className="text-[var(--color-neutral-600)] mb-10 leading-relaxed">
          주소가 잘못되었거나 더 이상 사용하지 않는 페이지입니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-7 py-3 bg-[var(--color-primary-700)] text-white font-semibold rounded-sm hover:bg-[var(--color-primary-900)] transition-colors"
          >
            홈으로
          </Link>
          <a
            href="tel:031-353-2547"
            className="inline-flex items-center justify-center px-7 py-3 border border-[var(--color-neutral-300)] text-[var(--color-neutral-900)] font-semibold rounded-sm hover:border-[var(--color-primary-700)] transition-colors"
          >
            031-353-2547 문의
          </a>
        </div>
      </div>
    </div>
  );
}
