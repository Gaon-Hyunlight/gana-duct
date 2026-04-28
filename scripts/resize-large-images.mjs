/**
 * 대형 WebP 이미지 핀포인트 리사이즈 스크립트
 *
 * PageSpeed 리포트 식별 — 가장 큰 절감 효과 두 장:
 *   - ventilator-steel.webp: 표시 578×723인데 원본 2560×1920 (6배 과대)
 *   - career-mexico.webp: 표시 1344×1763인데 원본 더 큼
 *
 * 실행: node scripts/resize-large-images.mjs
 */
import sharp from "sharp";
import fs from "fs/promises";
import path from "path";

const TARGETS = [
  {
    file: "public/images/ventilator-steel.webp",
    width: 1200,
    quality: 75,
    note: "Legacy 섹션 sticky 이미지 (표시 578×723 — 데스크탑 최대 1200 충분)",
  },
  {
    file: "public/images/career-mexico.webp",
    width: 1500,
    quality: 70,
    note: "Career 섹션 풀스크린 배경 (opacity 0.4 적용 — q70 충분)",
  },
];

async function resizeOne({ file, width, quality, note }) {
  const beforeStat = await fs.stat(file);
  const before = beforeStat.size;

  // 원본을 메모리 버퍼로 읽은 뒤 동일 경로에 덮어쓰기 (Windows 파일 잠금 회피)
  const inputBuf = await fs.readFile(file);
  const outputBuf = await sharp(inputBuf)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 6 })
    .toBuffer();
  await fs.writeFile(file, outputBuf);

  const afterStat = await fs.stat(file);
  const after = afterStat.size;
  const saved = (((before - after) / before) * 100).toFixed(1);

  console.log(
    `  ${path.basename(file).padEnd(30)} ${(before / 1024).toFixed(0).padStart(5)} KB → ${(after / 1024).toFixed(0).padStart(5)} KB  (-${saved}%)`
  );
  console.log(`    └ ${note}`);
}

async function main() {
  console.log("\n📐 대형 이미지 핀포인트 리사이즈");
  let totalBefore = 0;
  let totalAfter = 0;

  for (const t of TARGETS) {
    const beforeSize = (await fs.stat(t.file)).size;
    totalBefore += beforeSize;
    await resizeOne(t);
    const afterSize = (await fs.stat(t.file)).size;
    totalAfter += afterSize;
  }

  console.log(
    `\n✅ ${(totalBefore / 1024).toFixed(0)} KB → ${(totalAfter / 1024).toFixed(0)} KB  (-${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1)}%)\n`
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
