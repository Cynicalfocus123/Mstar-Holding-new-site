import { existsSync } from "node:fs";
import { readFile, readdir, rm, stat } from "node:fs/promises";
import { extname, join, relative, resolve, sep } from "node:path";

const distRoot = resolve("dist");
const apply = process.argv.includes("--apply");
const assetExtensions = new Set([
  ".avif",
  ".css",
  ".gif",
  ".ico",
  ".jpeg",
  ".jpg",
  ".js",
  ".mp4",
  ".png",
  ".svg",
  ".webp",
  ".woff",
  ".woff2",
]);
const textExtensions = new Set([".css", ".html", ".js"]);

const files = [];
const walk = async (directory) => {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await walk(path);
    else if (entry.isFile()) files.push(path);
  }
};

const normal = (path) => relative(distRoot, path).replaceAll(sep, "/");
const insideDist = (path) =>
  path === distRoot || path.startsWith(`${distRoot}${sep}`);
const known = new Set();
const missing = new Set();
const add = (path) => {
  if (insideDist(path)) known.add(resolve(path));
};

await walk(distRoot);
for (const file of files) {
  if (extname(file) === ".html" || normal(file) === ".htaccess") add(file);
}

const pathPattern =
  /(?:https?:\/\/mstarholding\.com)?(?:\/|\.\.\/|\.\/)?[A-Za-z0-9_@%+.,~\-/]+\.(?:avif|css|gif|ico|jpe?g|js|mp4|png|svg|webp|woff2?)(?:[?#][^\s"'`<>)\\]*)?/gi;
for (const file of files.filter((path) => textExtensions.has(extname(path)))) {
  const content = await readFile(file, "utf8");
  for (const found of content.matchAll(pathPattern)) {
    let value = found[0].replace(/[?#].*$/, "");
    if (!value || value.startsWith("//")) continue;
    if (value.startsWith("http")) value = new URL(value).pathname;
    const candidates = [];
    if (value.startsWith("/")) candidates.push(resolve(distRoot, `.${value}`));
    else {
      candidates.push(resolve(file, "..", value));
      candidates.push(resolve(distRoot, value.replace(/^(\.\.\/|\.\/)+/, "")));
    }
    const localCandidates = candidates.filter(insideDist);
    if (localCandidates.length && !localCandidates.some(existsSync)) {
      missing.add(`${normal(file)} -> ${value}`);
    }
    for (const candidate of candidates) add(candidate);
  }
}

const unused = [];
for (const file of files) {
  const extension = extname(file).toLowerCase();
  if (assetExtensions.has(extension) && !known.has(resolve(file))) {
    unused.push({ file, size: (await stat(file)).size });
  }
}

const bytes = unused.reduce((sum, item) => sum + item.size, 0);
for (const item of unused.sort((a, b) => b.size - a.size)) {
  console.log(`${normal(item.file)}|${item.size}`);
}
console.log(`UNUSED_COUNT=${unused.length}`);
console.log(`UNUSED_BYTES=${bytes}`);
console.log(`MISSING_COUNT=${missing.size}`);
for (const item of missing) console.error(`MISSING=${item}`);

if (missing.size) process.exitCode = 1;

if (apply && !missing.size) {
  for (const item of unused) await rm(item.file);
  console.log(`REMOVED_COUNT=${unused.length}`);
}
