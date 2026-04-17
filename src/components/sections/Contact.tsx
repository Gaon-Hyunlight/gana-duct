"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";

const serviceTypes = [
  "공장 후드",
  "공조 닥트 (냉난방/배기/급기)",
  "벤치레이타 (Roof Ventilator)",
  "브로워 (FAN)",
  "인테리어 닥트",
  "그라비아/코팅기 닥트",
  "식당 후드",
  "기타",
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    address: "",
    message: "",
    privacy: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = "이름을 입력해주세요.";
    if (!formState.phone.trim()) newErrors.phone = "연락처를 입력해주세요.";
    if (!formState.message.trim()) newErrors.message = "문의 내용을 입력해주세요.";
    if (!formState.privacy) newErrors.privacy = "개인정보 수집에 동의해주세요.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    // mailto fallback — 실제 배포 시 Formspree 또는 EmailJS 연동 권장
    const subject = `[가나공조닥트 홈페이지 문의] ${formState.serviceType || "일반 문의"}`;
    const body = `이름: ${formState.name}\n연락처: ${formState.phone}\n이메일: ${formState.email || "미기입"}\n시공유형: ${formState.serviceType || "미선택"}\n현장주소: ${formState.address || "미기입"}\n\n문의내용:\n${formState.message}`;
    window.location.href = `mailto:gana72407@naver.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3 text-sm bg-[var(--color-neutral-50)] border border-[var(--color-neutral-200)] rounded-sm focus:border-[var(--color-primary-700)] focus:ring-1 focus:ring-[var(--color-primary-700)] outline-none transition-colors";

  return (
    <section
      id="contact"
      className="bg-white"
      style={{ paddingTop: "var(--section-gap)", paddingBottom: "var(--section-gap)" }}
    >
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* LEFT: Contact info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-2"
          >
            <motion.p variants={fadeUp} className="text-label text-[var(--color-neutral-500)] mb-4">
              문의 / CONTACT
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-h2 text-[var(--color-neutral-900)] mb-10">
              30년의 노하우를
              <br />
              의뢰하세요
            </motion.h2>

            <motion.div variants={fadeUp} className="space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[var(--color-neutral-100)] flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-neutral-600)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-neutral-900)]">Address</p>
                  <a
                    href="https://map.kakao.com/link/search/경기도 화성시 팔탄면 3.1만세로 677"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--color-neutral-600)] hover:text-[var(--color-primary-700)] transition-colors"
                  >
                    경기도 화성시 팔탄면 3.1만세로 677
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[var(--color-neutral-100)] flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-neutral-600)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-neutral-900)]">Telephone</p>
                  <a href="tel:031-353-2547" className="text-sm text-[var(--color-neutral-600)] hover:text-[var(--color-primary-700)] transition-colors">
                    031-353-2547
                  </a>
                </div>
              </div>

              {/* Mobile */}
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[var(--color-neutral-100)] flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-neutral-600)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12" y2="18" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-neutral-900)]">Mobile</p>
                  <a href="tel:010-8817-8523" className="text-sm text-[var(--color-neutral-600)] hover:text-[var(--color-primary-700)] transition-colors">
                    010-8817-8523
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[var(--color-neutral-100)] flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-neutral-600)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-neutral-900)]">Email</p>
                  <a href="mailto:gana72407@naver.com" className="text-sm text-[var(--color-neutral-600)] hover:text-[var(--color-primary-700)] transition-colors">
                    gana72407@naver.com
                  </a>
                </div>
              </div>

              {/* Fax */}
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[var(--color-neutral-100)] flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-neutral-600)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="6" y="2" width="12" height="6" rx="1" />
                    <rect x="2" y="8" width="20" height="12" rx="2" />
                    <path d="M6 18v4h12v-4" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-neutral-900)]">Fax</p>
                  <p className="text-sm text-[var(--color-neutral-600)]">031-353-2548</p>
                </div>
              </div>
            </motion.div>

            {/* 운영시간 — 업계 일반 기준, 클라이언트 확인 필요 */}
            <motion.div variants={fadeUp} className="mt-8 p-4 bg-[var(--color-neutral-50)] rounded-sm">
              <p className="text-sm font-semibold text-[var(--color-neutral-900)] mb-2">운영시간</p>
              <p className="text-sm text-[var(--color-neutral-600)] leading-relaxed">
                평일 08:00 – 18:00 / 토요일 08:00 – 13:00
                <br />
                공휴일 휴무 (긴급 A/S는 상시 대응)
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT: Form */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="flex items-center justify-center h-full min-h-[400px]">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-primary-700)]/10 flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-700)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--color-neutral-900)]">문의가 전송되었습니다</h3>
                  <p className="mt-2 text-sm text-[var(--color-neutral-600)]">빠른 시일 내에 연락드리겠습니다.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-neutral-900)] mb-1.5">
                      이름 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className={inputClass}
                      placeholder="홍길동"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-neutral-900)] mb-1.5">
                      연락처 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className={inputClass}
                      placeholder="010-0000-0000"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-neutral-900)] mb-1.5">
                      이메일
                    </label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className={inputClass}
                      placeholder="example@email.com"
                    />
                  </div>

                  {/* Service type */}
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-neutral-900)] mb-1.5">
                      시공 유형
                    </label>
                    <select
                      value={formState.serviceType}
                      onChange={(e) => setFormState({ ...formState, serviceType: e.target.value })}
                      className={inputClass}
                    >
                      <option value="">선택해주세요</option>
                      {serviceTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-[var(--color-neutral-900)] mb-1.5">
                    현장 주소
                  </label>
                  <input
                    type="text"
                    value={formState.address}
                    onChange={(e) => setFormState({ ...formState, address: e.target.value })}
                    className={inputClass}
                    placeholder="시공 현장 주소 (선택)"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-[var(--color-neutral-900)] mb-1.5">
                    문의 내용 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className={`${inputClass} min-h-[140px] resize-y`}
                    placeholder="시공 요청 사항이나 문의 내용을 자유롭게 적어주세요."
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Privacy consent */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formState.privacy}
                      onChange={(e) => setFormState({ ...formState, privacy: e.target.checked })}
                      className="mt-0.5 w-4 h-4 rounded border-[var(--color-neutral-300)] text-[var(--color-primary-700)] focus:ring-[var(--color-primary-700)]"
                    />
                    <span className="text-sm text-[var(--color-neutral-600)]">
                      개인정보 수집 및 이용에 동의합니다. (문의 응대 목적으로만 사용됩니다.)
                    </span>
                  </label>
                  {errors.privacy && <p className="text-red-500 text-xs mt-1">{errors.privacy}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[var(--color-primary-700)] text-white font-semibold rounded-sm hover:bg-[var(--color-primary-900)] transition-colors duration-300 cursor-pointer"
                >
                  문의 보내기
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
