import type { Metadata } from "next";
import Link from "next/link";
import { LogoFull } from "@/components/ui/Logo";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 가나공조닥트",
  description:
    "가나공조닥트(GANA HVAC DUCT) 개인정보처리방침. 개인정보 수집·이용·보유·파기에 관한 사항.",
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "제1조 (목적)",
    body: [
      "가나공조닥트(이하 \"회사\")는 「개인정보 보호법」에 따라 정보주체의 개인정보를 보호하고, 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이 개인정보처리방침을 수립·공개합니다.",
    ],
  },
  {
    title: "제2조 (수집하는 개인정보 항목 및 수집 방법)",
    body: [
      "1. 회사는 다음과 같이 최소한의 개인정보를 수집합니다.",
      "   • 필수항목: 이름, 연락처, 문의 내용",
      "   • 선택항목: 이메일, 시공 유형, 현장 주소",
      "2. 수집 방법: 홈페이지 문의 폼, 전화·팩스·이메일 등",
    ],
  },
  {
    title: "제3조 (개인정보의 수집 및 이용 목적)",
    body: [
      "회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.",
      "1. 시공 견적·문의에 대한 회신 및 상담",
      "2. 계약의 이행 및 A/S 등 사후 관리",
      "3. 법령상 의무 이행",
    ],
  },
  {
    title: "제4조 (개인정보의 보유 및 이용 기간)",
    body: [
      "1. 원칙적으로 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.",
      "2. 단, 다음의 정보에 대해서는 아래의 사유로 명시한 기간 동안 보존합니다.",
      "   • 문의 회신 및 상담 기록: 수신일로부터 1년",
      "   • 계약 또는 청약 철회 등에 관한 기록: 5년 (전자상거래 등에서의 소비자 보호에 관한 법률)",
      "   • 대금 결제 및 재화 등의 공급에 관한 기록: 5년 (동법)",
      "   • 소비자의 불만 또는 분쟁 처리에 관한 기록: 3년 (동법)",
    ],
  },
  {
    title: "제5조 (개인정보의 제3자 제공)",
    body: [
      "회사는 정보주체의 개인정보를 제3자에게 제공하지 않습니다. 다만, 법령에 의거하거나 수사 목적으로 정해진 절차에 따라 요청이 있는 경우는 예외로 합니다.",
    ],
  },
  {
    title: "제6조 (개인정보 처리의 위탁)",
    body: ["회사는 현재 개인정보 처리업무를 외부에 위탁하지 않습니다."],
  },
  {
    title: "제7조 (정보주체의 권리·의무 및 행사 방법)",
    body: [
      "1. 정보주체는 회사에 대해 언제든지 다음의 권리를 행사할 수 있습니다.",
      "   • 개인정보 열람 요구",
      "   • 오류 등이 있을 경우 정정 요구",
      "   • 삭제 요구",
      "   • 처리 정지 요구",
      "2. 위 권리 행사는 서면, 전자우편, 전화 등을 통하여 하실 수 있으며, 회사는 이에 대해 지체 없이 조치합니다.",
    ],
  },
  {
    title: "제8조 (개인정보의 파기)",
    body: [
      "1. 파기 절차: 이용 목적이 달성된 개인정보는 별도의 DB로 옮겨(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 따라 일정 기간 저장된 후 파기됩니다.",
      "2. 파기 방법: 전자적 파일은 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제하며, 종이 문서는 분쇄기로 분쇄하거나 소각하여 파기합니다.",
    ],
  },
  {
    title: "제9조 (개인정보의 안전성 확보 조치)",
    body: [
      "회사는 개인정보의 안전성 확보를 위해 다음의 조치를 취하고 있습니다.",
      "1. 관리적 조치: 내부 관리계획 수립·시행, 접근권한 관리",
      "2. 기술적 조치: 개인정보처리시스템 접근통제, 비인가 접근 차단",
      "3. 물리적 조치: 자료 보관 장소의 접근 통제",
    ],
  },
  {
    title: "제10조 (개인정보 보호책임자)",
    body: [
      "회사는 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.",
      "",
      "▶ 개인정보 보호책임자",
      "   • 성명: 이오복 (대표)",
      "   • 연락처: 031-353-2547",
      "   • 이메일: gana72407@naver.com",
    ],
  },
  {
    title: "제11조 (권익침해 구제 방법)",
    body: [
      "정보주체는 개인정보 침해로 인한 구제를 받기 위하여 아래 기관에 분쟁 해결이나 상담을 신청할 수 있습니다.",
      "",
      "• 개인정보분쟁조정위원회: (국번없이) 1833-6972 / www.kopico.go.kr",
      "• 개인정보침해신고센터: (국번없이) 118 / privacy.kisa.or.kr",
      "• 대검찰청: (국번없이) 1301 / www.spo.go.kr",
      "• 경찰청: (국번없이) 182 / ecrm.cyber.go.kr",
    ],
  },
  {
    title: "제12조 (개인정보처리방침의 변경)",
    body: [
      "이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경 내용의 추가·삭제 및 정정이 있는 경우에는 변경 사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple header */}
      <header className="border-b border-[var(--color-neutral-200)]">
        <div className="container-main flex items-center justify-between h-[72px]">
          <Link href="/" aria-label="홈으로">
            <LogoFull color="#0A1F3D" />
          </Link>
          <Link
            href="/"
            className="text-sm text-[var(--color-neutral-600)] hover:text-[var(--color-primary-700)] transition-colors"
          >
            홈으로 &rarr;
          </Link>
        </div>
      </header>

      {/* Body */}
      <main className="container-main py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-label text-[var(--color-neutral-500)] mb-4">
            개인정보 / PRIVACY POLICY
          </p>
          <h1 className="text-h1 text-[var(--color-neutral-900)] mb-4">
            개인정보처리방침
          </h1>
          <p className="text-sm text-[var(--color-neutral-500)] mb-12">
            시행일: 2026년 4월 21일
          </p>

          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-base md:text-lg font-bold text-[var(--color-neutral-900)] mb-4">
                  {section.title}
                </h2>
                <div className="space-y-2 text-[0.9375rem] text-[var(--color-neutral-700)] leading-[1.85]">
                  {section.body.map((line, i) => (
                    <p key={i} className="whitespace-pre-wrap">
                      {line || "\u00A0"}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-16 pt-8 border-t border-[var(--color-neutral-200)]">
            <p className="text-xs text-[var(--color-neutral-500)] leading-relaxed">
              가나공조닥트 (GANA HVAC DUCT) · 대표 이오복
              <br />
              경기도 화성시 팔탄면 3.1만세로 677 · 사업자등록번호 124-18-72407
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
