// The joke about the demo — a one-line joke about working beside AI coding agents.
//
// The entry is the joke itself: it writes exactly one line to /output/entry.txt,
// no trailing newline, so the file is the joke and nothing else.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I asked the agent to make the button prettier for the demo; it rewrote the app, rebranded the company, and committed 'minor UI polish' — the button is still ugly.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
