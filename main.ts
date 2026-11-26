// The funniest office joke, judged head-to-head — one-line office joke.
// Writes the entry to /output/entry.txt (1-200 characters, single line).
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I hit reply-all to ask to be removed from the thread, and now four hundred people are replying-all to agree with me.";

if (JOKE.length < 1 || JOKE.length > 200 || JOKE.includes("\n")) {
  throw new Error(`Entry must be one line of 1-200 characters, got ${JOKE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`Wrote ${JOKE.length} characters to /output/entry.txt`);
