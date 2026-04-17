# 가나공조닥트 (GANA HVAC DUCT) 공식 웹사이트

49년 현장 경력 / 30년 업력의 공조닥트 제작·시공 전문기업 **가나공조닥트**의 공식 홈페이지입니다.

## Stack

- **Next.js 16** (App Router, Static Export)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (스크롤 애니메이션)

## 로컬 실행

```bash
npm install
npm run dev        # http://localhost:3001
```

## 빌드

```bash
npm run build      # 정적 HTML 생성 (out/)
npm run start      # 프로덕션 미리보기
```

## 배포 (Vercel 권장)

```bash
npx vercel --prod
```

## 프로젝트 구조

```
src/
├── app/            # 레이아웃, 페이지, 글로벌 CSS
├── components/
│   ├── layout/     # Navbar, Footer
│   ├── sections/   # Hero, Intro, Legacy, Services, Process, Projects, Capabilities, Partners, Contact
│   └── ui/         # Button, CountUp, Logo, SectionHeader
├── lib/            # 애니메이션 variants, 유틸리티
public/images/      # 실사진 9장 + 서비스 이미지 6장
```

## 연락처

- **대표:** 이오복
- **Tel:** 031-353-2547
- **Mobile:** 010-8817-8523
- **Email:** gana72407@naver.com
- **주소:** 경기도 화성시 팔탄면 3.1만세로 677
