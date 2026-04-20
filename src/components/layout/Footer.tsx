"use client";

import { LogoFull } from "@/components/ui/Logo";

const serviceLinks = [
  "냉·난방 닥트",
  "배기·급기 닥트",
  "공장·식당 후드",
  "벤치레이타",
  "브로워(FAN)",
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-neutral-900)] text-[var(--color-neutral-400)]">
      <div className="container-main py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <LogoFull color="#ffffff" />
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-neutral-500)]">
              공기의 길을 설계하는 49년 장인의 손
            </p>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">사업영역</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company Info */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">회사 정보</h4>
            <ul className="space-y-2.5 text-sm">
              <li>대표: 이오복</li>
              <li>사업자등록번호: 124-18-72407</li>
              <li>개인사업자 (계속사업자)</li>
              <li className="leading-snug">
                본점·자체공장
                <br />
                경기도 화성시 팔탄면 3.1만세로 677
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">빠른 연락</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="tel:031-353-2547" className="hover:text-white transition-colors">
                  Tel. 031-353-2547
                </a>
              </li>
              <li>
                <a href="tel:010-8817-8523" className="hover:text-white transition-colors">
                  Mobile. 010-8817-8523
                </a>
              </li>
              <li>
                <a href="mailto:gana72407@naver.com" className="hover:text-white transition-colors">
                  gana72407@naver.com
                </a>
              </li>
              <li>Fax. 031-353-2548</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[var(--color-neutral-800)] mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <p className="text-xs text-[var(--color-neutral-600)]">
              &copy; 2026 GANA HVAC DUCT. All Rights Reserved.
            </p>
            <a
              href="/privacy"
              className="text-xs text-[var(--color-neutral-500)] hover:text-white transition-colors"
            >
              개인정보처리방침
            </a>
          </div>
          <p className="text-xs text-[var(--color-neutral-700)]">
            화성에서 1997년부터, 가나공조닥트.
          </p>
        </div>
      </div>
    </footer>
  );
}
