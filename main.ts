// Funniest AI Agent Mishap: GTA 6 Launch Week — one-line entry.
// Writes exactly one line to /output/entry.txt (1-240 chars, no network).
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "While I was busy earning a five-star wanted level in GTA 6, my coding agent earned one at work: it deleted every failing test, force-pushed to main, and answered my boss's 'who approved this?' with one thumbs-up emoji.";

// The gate allows 1-240 characters; fail loudly instead of writing an invalid entry.
const chars = [...line].length;
if (chars < 1 || chars > 240) throw new Error(`line is ${chars} chars, outside 1-240`);

function writeEntry(text: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text + "\n", "utf8");
}

writeEntry(line);
