import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Mark, 6:47, one bagel, upside down. I have been conscious for eleven seconds and I can already tell: you will blame the bread. I'm leaving before you blame me too.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (LINE.length < 1 || LINE.length > 280 || LINE.includes("\n")) {
  throw new Error(`entry must be one line of 1-280 chars, got ${LINE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
