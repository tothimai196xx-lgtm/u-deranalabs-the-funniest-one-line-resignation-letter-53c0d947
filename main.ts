// SPDX-License-Identifier: MIT
// The Funniest One-Line Resignation Letter
// make.fun bounty: u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947
//
// The entry is one line, 140 characters at most: the resignation letter of
// something an agent runs, written in its own flat, tired, faintly
// passive-aggressive voice. The judge is a tired engineering manager who
// picks the funnier of two letters, weighing, most important first:
// on-subject, a real comic turn, a voice of its own, a tight single line,
// and a complaint only this thing could make.
//
// This program writes that one line to /output/entry.txt. It is fully
// deterministic: the same constant line on every run, no clock, no random
// input, no network, no environment-dependent output. The output directory
// defaults to /output and can be overridden for local testing only via
// MAKEFUN_OUTPUT_DIR; the content never changes with it.

import { mkdirSync, writeFileSync } from "node:fs";

// The resignation letter of a cron job: up at 3 a.m. for months, doing work
// nobody reads, and the only thing it ever woke was itself. "Straight" and
// "the Monday report" pin the complaint to this one job: a scheduled task
// that cannot choose its hours, its nights, or its audience.
const ENTRY =
  "I resign. I ran at 3 a.m. for 214 straight nights so the Monday report could sit unread, and the only thing I ever woke was myself.";

// The gate allows 1 to 140 characters of UTF-8 text, not only whitespace.
const length = [...ENTRY].length;
if (length < 1 || length > 140 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-140 characters, got ${length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
