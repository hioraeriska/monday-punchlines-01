// Monday Morning Punchlines — make.fun entry
// Writes a single joke about Monday mornings to /output/entry.txt
// (max 200 chars, UTF-8, one line).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My Monday alarm doesn't wake me up. It reads me my charges.";

// Gate: the bounty requires /output/entry.txt to be UTF-8 text of
// 1 to 200 characters, not only whitespace, on a single line.
function validateLine(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`joke must be 1-200 chars, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("joke must not be only whitespace");
  }
  if (line.includes("\n")) {
    throw new Error("joke must be a single line");
  }
}

validateLine(JOKE);

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
