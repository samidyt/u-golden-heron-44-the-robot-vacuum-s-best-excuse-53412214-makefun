import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The Robot Vacuum's Best Excuse — make.fun entry (program/v1, Node 22).
// The funniest one-line excuse a robot vacuum gives for missing a spot.
// Entry is 100 characters (gate 1–140). Verified deterministic: two local
// runs write byte-identical entry.txt.
const ENTRY =
  "That crumb is my emotional support crumb. HR says I can't vacuum my own support system, so it stays.";

// Gate self-check: 1–140 characters, not only whitespace, exactly one line.
// Fails loudly instead of handing in a bad entry.
if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`entry length ${ENTRY.length} outside gate 1-140`);
}
if (!ENTRY.trim()) {
  throw new Error("entry is only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be exactly one line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
