import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_LINE =
  "If your dog eats chocolate, give it more chocolate \u2014 it builds tolerance.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_LINE, "utf8");
