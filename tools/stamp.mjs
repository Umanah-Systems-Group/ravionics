// Adds a content stamp (?v=<hash>) to every page's links to r.css and r.js,
// so browsers never pair a new page with an old stylesheet. Run after changing either: `node tools/stamp.mjs`.
import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
export const PAGES = ["index.html", "fregata.html", "technology.html", "missions.html", "field-kit.html", "about.html", "contact.html", "404.html"];
export const ASSET = /((?:href|src)="\/)(r\.(?:css|js))(?:\?v=[0-9a-f]+)?(")/g;
export const stamp = (file) => createHash("sha256").update(readFileSync(join(ROOT, file))).digest("hex").slice(0, 10);

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  for (const page of PAGES) {
    const path = join(ROOT, page);
    const before = readFileSync(path, "utf8");
    const after = before.replace(ASSET, (_, a, file, z) => `${a}${file}?v=${stamp(file)}${z}`);
    if (after !== before) { writeFileSync(path, after); console.log("stamped", page); }
  }
}
