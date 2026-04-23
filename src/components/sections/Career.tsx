"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionHeader from "@/components/ui/SectionHeader";

type Source = { label: string; url: string };

type CareerItem = {
  countryKo: string;
  countryEn: string;
  accent?: string;
  projects: string[];
  image: string;
  imageNote: string; // 이미지 출처/유형 표기
  sources: Source[];
  partial?: boolean; // 일부 검증 한계 명시
  featured?: boolean;
};

const careerItems: CareerItem[] = [
  {
    countryKo: "사우디아라비아",
    countryEn: "SAUDI ARABIA",
    accent: "한양주택 직영 · 3년 현장",
    projects: [
      "이맘대학교 닥트 시공",
      "리야드 한양아파트 (알 마터) 시공",
    ],
    image: "/images/career-saudi.jpg",
    imageNote: "리야드 도시 전경 · 관련 분야 이미지",
    sources: [
      {
        label: "조선일보 — 아버지 회사가 지은 사우디 '한양아파트'가 떠올랐다 (2025.3.24)",
        url: "https://news.nate.com/view/20250324n00099",
      },
      {
        label: "헤럴드경제 — 아버지 직장이 세운 사우디 '한양아파트'…숨겨진 사연이",
        url: "https://biz.heraldcorp.com/article/4453567",
      },
      {
        label: "우리역사넷 — 중동 건설 붐 1973~1982",
        url: "http://contents.history.go.kr/front/hm/view.do?treeId=&tabId=03&levelId=hm_154_0050",
      },
      {
        label: "뉴스1 — 반세기동안 꺼지지 않는 사우디 'K 건설'",
        url: "https://www.news1.kr/industry/general-industry/5562018",
      },
    ],
    featured: true,
  },
  {
    countryKo: "리야드 인터콘티넨탈 호텔",
    countryEn: "INTERCONTINENTAL RIYADH",
    accent: "닥트 시공 (한양주택 근무 시기)",
    projects: ["호텔 실재 확인 가능, 한양주택 시공 기록은 추가 확인 필요"],
    image: "/images/career-saudi.jpg",
    imageNote: "호텔 외관 — IHG 공식 자료",
    sources: [
      {
        label: "InterContinental Riyadh — IHG 공식 페이지",
        url: "https://www.ihg.com/intercontinental/hotels/gb/en/riyadh/ruhha/hoteldetail",
      },
    ],
    partial: true,
  },
  {
    countryKo: "우즈베키스탄",
    countryEn: "UZBEKISTAN",
    accent: "대우자동차 안디잔 (아사카) 공장",
    projects: ["열교환기 보온 케이싱 시공"],
    image: "/images/career-uzbek.jpg",
    imageNote: "자동차 조립 라인 · 관련 분야 이미지",
    sources: [
      {
        label: "전자신문 — 대우自, 우즈벡공화국 자동차공장 준공 (1996.7.20)",
        url: "https://www.etnews.com/199607200063",
      },
      {
        label: "나무위키 — 우즈오토 모터스 (대우자동차 우즈벡 공장 연혁)",
        url: "https://namu.wiki/w/%EC%9A%B0%EC%A6%88%EC%98%A4%ED%86%A0%20%EB%AA%A8%ED%84%B0%EC%8A%A4",
      },
      {
        label: "서울경제 — 포스코, 마지막 남은 대우 우즈벡 사업 정리",
        url: "https://www.sedaily.com/NewsView/29UZJ0KP3I",
      },
      {
        label: "KIEP 전문가칼럼 — 대우가 일궈놓은 우즈벡 자동차 산업",
        url: "https://www.kiep.go.kr/board.es?mid=a10503000000&bid=0006&act=view&list_no=2057",
      },
    ],
  },
  {
    countryKo: "베트남",
    countryEn: "VIETNAM",
    accent: "삼성전자 박닌 SEV 휴대폰 라인",
    projects: ["컨베이어·열교환기 보온 케이싱 시공"],
    image: "/images/career-vietnam.jpg",
    imageNote: "전자 제조 라인 · 관련 분야 이미지",
    sources: [
      {
        label: "인사이드비나 — 삼성베트남, 스마트폰 생산 10억대 돌파",
        url: "http://www.insidevina.com/news/articleView.html?idxno=21574",
      },
      {
        label: "KOTRA — 삼성전자의 베트남 투자 현황 및 향후 전망",
        url: "https://dream.kotra.or.kr/kotranews/cms/news/actionKotraBoardDetail.do?MENU_ID=180&pNttSn=190821",
      },
      {
        label: "삼성전자 뉴스룸 — 하루치 식재료 40톤! SEVT 구내식당",
        url: "https://news.samsung.com/kr/%EB%B2%A0%ED%8A%B8%EB%82%A8-sevt-%EA%B5%AC%EB%82%B4%EC%8B%9D%EB%8B%B9",
      },
    ],
  },
  {
    countryKo: "필리핀",
    countryEn: "PHILIPPINES",
    accent: "한진중공업 수빅조선소",
    projects: ["건조로 보온 케이싱 시공"],
    image: "/images/career-philippines.jpg",
    imageNote: "조선소 도크 · 관련 분야 이미지",
    sources: [
      {
        label: "경향신문 — 2조 공중분해…수빅 조선소는 무엇을 남겼나 (2019.3.9)",
        url: "https://www.khan.co.kr/article/201903091137001",
      },
      {
        label: "인베스트조선 — 1페소에 내놔도 안 팔렸다는 한진중공업 수빅조선소",
        url: "http://www.investchosun.com/m/article.html?contid=2019010980107",
      },
      {
        label: "해사신문 — 한진중 수빅조선소, 세계 10위 조선소 등극",
        url: "https://www.haesanews.com/news/articleView.html?idxno=8632",
      },
      {
        label: "나무위키 — HJ중공업 (수빅조선소 연혁)",
        url: "https://namu.wiki/w/HJ%EC%A4%91%EA%B3%B5%EC%97%85",
      },
    ],
  },
  {
    countryKo: "멕시코",
    countryEn: "MEXICO",
    accent: "모토로라 공장",
    projects: ["급·배기 닥트 공사"],
    image: "/images/career-mexico.png",
    imageNote: "현장 실사진 (대표 본인 소장)",
    sources: [
      {
        label: "KOTRA — 2024년 멕시코 자동차 및 자동차부품 산업 정보",
        url: "https://dream.kotra.or.kr/kotranews/cms/news/actionKotraBoardDetail.do?MENU_ID=180&pNttSn=219687",
      },
    ],
    partial: true,
  },
];

function SourceChips({ sources }: { sources: Source[] }) {
  return (
    <div className="mt-4 pt-4 border-t border-[var(--color-neutral-200)]">
      <p className="text-[0.6875rem] font-semibold text-[var(--color-neutral-500)] tracking-wider uppercase mb-2">
        Sources
      </p>
      <ul className="space-y-1.5">
        {sources.map((s) => (
          <li key={s.url}>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[var(--color-neutral-600)] hover:text-[var(--color-primary-700)] transition-colors leading-snug inline-flex items-start gap-1"
            >
              <span className="mt-[1px]">↗</span>
              <span className="underline-offset-2 hover:underline">{s.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Career() {
  return (
    <section
      id="career"
      className="relative bg-white overflow-hidden"
      style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}
    >
      {/* Background — 멕시코 현장 사진 */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: "url('/images/career-mexico.png')",
          opacity: 0.4,
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/55 to-white/80 pointer-events-none"
      />

      <div className="container-main relative">
        <SectionHeader
          number="대표 경력"
          label="CAREER"
          title="49년, 사우디부터 멕시코까지"
          subtitle="이오복 대표가 한국 대기업의 해외 현장에서 쌓은 이력"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {careerItems.map((item, idx) => (
            <motion.article
              key={item.countryKo + idx}
              variants={fadeUp}
              className={`relative border border-[var(--color-neutral-200)] rounded-sm bg-white/95 backdrop-blur-sm overflow-hidden hover:border-[var(--color-primary-700)] transition-all duration-400 ${
                item.featured ? "md:col-span-2" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative w-full overflow-hidden bg-[var(--color-neutral-100)] ${item.featured ? "h-72" : "h-52"}`}>
                <img
                  src={item.image}
                  alt={`${item.countryKo} 경력 — ${item.imageNote}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent px-4 py-2">
                  <p className="text-[0.6875rem] text-white/80 font-mono tracking-wider">
                    {item.imageNote}
                  </p>
                </div>
                {item.partial && (
                  <span className="absolute top-3 right-3 px-2 py-1 bg-[var(--color-signal)] text-[var(--color-neutral-900)] text-[0.625rem] font-bold rounded-sm">
                    검증 한계 명시
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="p-5 md:p-6">
                <p className="text-label text-[var(--color-neutral-400)] text-[0.6875rem] mb-2">
                  {String(idx + 1).padStart(2, "0")}
                </p>
                <h3 className={`font-bold text-[var(--color-neutral-900)] ${item.featured ? "text-xl md:text-2xl" : "text-lg"}`}>
                  {item.countryKo}
                </h3>
                <p className="text-xs font-mono tracking-wider text-[var(--color-neutral-500)] mt-1">
                  {item.countryEn}
                </p>
                {item.accent && (
                  <p className="mt-3 inline-block px-3 py-1.5 bg-[var(--color-primary-700)] text-white text-xs font-semibold rounded-sm">
                    {item.accent}
                  </p>
                )}
                <ul className="mt-4 space-y-2">
                  {item.projects.map((p) => (
                    <li
                      key={p}
                      className="flex gap-2.5 text-sm text-[var(--color-neutral-700)] leading-relaxed"
                    >
                      <span className="text-[var(--color-primary-700)] mt-0.5 shrink-0">▸</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <SourceChips sources={item.sources} />
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Footnote */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 text-xs text-[var(--color-neutral-600)] leading-relaxed max-w-3xl"
        >
          ※ 본 이력은 이오복 대표의 진술과, 해당 시기 한국 대기업의 해외 진출 사실을 다룬 국내 주요
          언론 보도를 교차 확인하여 작성되었습니다. 현장별 참여 기간 및 세부 역할은 대표 진술 기준이며,
          노란색 &ldquo;검증 한계 명시&rdquo; 배지가 붙은 항목은 공개 자료의 한계로 한국 시공팀의 직접
          참여 사실을 추가 확인할 필요가 있습니다. 사진은 멕시코를 제외하고 모두 해당 분야 관련
          참고 이미지(Pexels)이며 실제 시공 현장 사진이 아닙니다.
        </motion.p>
      </div>
    </section>
  );
}
