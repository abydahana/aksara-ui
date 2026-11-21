import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));

export const root = path.resolve(here, "../..");
export const distDir = path.join(root, "dist");
export const srcTs = path.join(root, "src/generator/aksara.ts");
export const docsContentDir = path.join(root, "src/docs/content");
export const docsContentOutput = path.join(root, "src/docs/assets/docs-content.js");
export const docsTs = path.join(root, "src/docs/assets/docs.ts");
export const docsJsOutput = path.join(root, "src/docs/assets/docs.js");
