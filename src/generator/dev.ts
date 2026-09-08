import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "../..");
const buildScript = path.join(__dirname, "build.ts");
const srcDir = path.join(root, "src");

const MIME_TYPES: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".ts": "text/plain; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".eot": "application/vnd.ms-fontobject",
  ".md": "text/markdown; charset=utf-8"
};

function runBuild(): boolean {
  try {
    const start = Date.now();
    execFileSync("node", ["--import", "tsx", buildScript], { cwd: root, stdio: "pipe" });
    const elapsed = Date.now() - start;
    console.log(`[Aksara UI] Rebuilt in ${elapsed}ms`);
    return true;
  } catch (error) {
    console.error("[Aksara UI] Build error:", error);
    return false;
  }
}

// Initial build
console.log("[Aksara UI] Initializing build...");
runBuild();

// Watcher with debouncing
let debounceTimer: NodeJS.Timeout | null = null;
let isBuilding = false;

if (fs.existsSync(srcDir)) {
  fs.watch(srcDir, { recursive: true }, (_eventType, filename) => {
    if (!filename) return;
    // Skip generated assets inside src
    if (filename.includes("docs-content.js") || filename.includes("docs.js") || filename.includes("vendor/")) {
      return;
    }
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      if (isBuilding) return;
      isBuilding = true;
      console.log(`[Aksara UI] File changed: ${filename}`);
      runBuild();
      isBuilding = false;
    }, 200);
  });
  console.log("[Aksara UI] Watching for changes in src/...");
}

// HTTP Static Server
const server = http.createServer((req, res) => {
  let reqUrl = req.url || "/";
  const queryIndex = reqUrl.indexOf("?");
  if (queryIndex !== -1) {
    reqUrl = reqUrl.slice(0, queryIndex);
  }

  // Redirect root to docs
  if (reqUrl === "/" || reqUrl === "") {
    res.writeHead(302, { Location: "/src/docs/" });
    res.end();
    return;
  }

  let filePath = path.join(root, decodeURIComponent(reqUrl));

  // Security check: stay within root
  if (!filePath.startsWith(root)) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("403 Forbidden");
    return;
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    const indexHtml = path.join(filePath, "index.html");
    if (fs.existsSync(indexHtml)) {
      filePath = indexHtml;
    }
  }

  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end(`404 Not Found: ${reqUrl}`);
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || "application/octet-stream";

  res.writeHead(200, {
    "Content-Type": contentType,
    "Cache-Control": "no-cache, no-store, must-revalidate"
  });
  fs.createReadStream(filePath).pipe(res);
});

let port = Number(process.env.PORT) || 3000;

function startServer(): void {
  server.listen(port, () => {
    console.log(`\n  🚀 Aksara UI Dev Server running at:`);
    console.log(`  ➜ Local:   http://localhost:${port}/`);
    console.log(`  ➜ Docs:    http://localhost:${port}/src/docs/\n`);
  });

  server.on("error", (err: NodeJS.ErrnoException) => {
    if (err.code === "EADDRINUSE") {
      port += 1;
      server.close();
      startServer();
    } else {
      console.error("Server error:", err);
    }
  });
}

startServer();

process.on("SIGINT", () => {
  server.close();
  process.exit(0);
});
