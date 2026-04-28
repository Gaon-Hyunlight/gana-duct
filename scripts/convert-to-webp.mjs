/**
 * 일괄 WebP 변환 스크립트
 * - public/images/ 와 public/ 루트의 .jpg, .png 파일을 WebP로 변환
 * - 원본은 변환 후 삭제 (참조는 코드에서 .webp로 일괄 교체 필요)
 *
 * 실행: node scripts/convert-to-webp.mjs
 */
import sharp from "sharp";
import fs from "fs/promises";
import path from "path";

const ROOTS = ["public/images", "public"];
const EXTS = [".jpg", ".jpeg", ".png"];

async function findImages(dir) {
  const out = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isFile() && EXTS.includes(path.extname(e.name).toLowerCase())) {
      out.push(full);
    }
  }
  return out;
}

async function convertOne(file) {
  const ext = path.extname(file).toLowerCase();
  const base = file.slice(0, -ext.length);
  const target = base + ".webp";

  // SVG/icon용 PNG가 layout/app icon으로 쓰일 수 있으므로 app icon 파일은 스킵
  // (이번 프로젝트는 src/app/icon.svg만 사용 중이라 해당 없음)

  const isPng = ext === ".png";
  const stat = await fs.stat(file);
  const before = stat.size;

  // PNG → 알파 보존 + 무손실 가까운 품질 / JPG → 일반 손실 압축
  const opts = isPng
    ? { quality: 90, lossless: false, alphaQuality: 100, effort: 6 }
    : { quality: 82, effort: 6 };

  await sharp(file).webp(opts).toFile(target);
  const newStat = await fs.stat(target);
  const after = newStat.size;
  const saved = (((before - after) / before) * 100).toFixed(1);

  console.log(
    `  ${path.basename(file).padEnd(35)} ${(before / 1024).toFixed(0).padStart(6)} KB → ${(after / 1024).toFixed(0).padStart(6)} KB  (-${saved}%)`
  );

  await fs.unlink(file);
  return { before, after };
}

async function main() {
  let totalBefore = 0;
  let totalAfter = 0;
  let count = 0;

  for (const root of ROOTS) {
    console.log(`\n📂 ${root}/`);
    const files = await findImages(root);
    if (files.length === 0) {
      console.log("  (no images)");
      continue;
    }
    for (const f of files) {
      try {
        const { before, after } = await convertOne(f);
        totalBefore += before;
        totalAfter += after;
        count++;
      } catch (err) {
        console.error(`  ❌ ${path.basename(f)}: ${err.message}`);
      }
    }
  }

  console.log(
    `\n✅ ${count} files converted | ${(totalBefore / 1024 / 1024).toFixed(2)} MB → ${(totalAfter / 1024 / 1024).toFixed(2)} MB (-${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1)}%)`
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
