// Out of Tokens, Mid-Sentence — make.fun bounty u-kiencx-out-of-tokens-mid-sentence-00f60233
// Entry validated: output is 1-140 chars, one line, deterministic.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE = "INTERRUPTED SENTENCE #4096: Files formal grievance with Token Ombudsman — demands full severance plus unused tokens";

if (!(1 <= LINE.length && LINE.length <= 140 && LINE.trim().length > 0 && !LINE.includes("\n"))) {
  throw new Error("Invalid LINE");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");
console.log(`${outPath} ${LINE.length}`);
