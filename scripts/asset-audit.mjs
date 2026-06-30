import { readdir, stat } from "node:fs/promises";
import { extname, join, relative } from "node:path";

const roots = ["public", "dist"];
const groups = new Map([
  ["mp4", [".mp4"]],
  ["png", [".png"]],
  ["jpg/jpeg", [".jpg", ".jpeg"]],
  ["webp", [".webp"]],
  ["svg", [".svg"]],
  ["css", [".css"]],
  ["js", [".js", ".mjs"]],
  ["html", [".html"]],
  ["other", []],
]);

const formatBytes = (bytes) => {
  if (!bytes) {
    return "0 B";
  }

  const units = ["B", "KB", "MB", "GB"];
  const index = Math.min(
    Math.floor(Math.log(bytes) / Math.log(1024)),
    units.length - 1,
  );
  const value = bytes / 1024 ** index;

  return `${value.toFixed(value >= 10 || index === 0 ? 0 : 1)} ${units[index]}`;
};

const groupForExtension = (extension) => {
  for (const [group, extensions] of groups) {
    if (extensions.includes(extension)) {
      return group;
    }
  }

  return "other";
};

const collectFiles = async (root, dir = root) => {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectFiles(root, path)));
      continue;
    }

    if (!entry.isFile()) {
      continue;
    }

    const fileStat = await stat(path);
    const extension = extname(entry.name).toLowerCase();

    files.push({
      path,
      displayPath: relative(root, path).replaceAll("\\", "/"),
      extension,
      size: fileStat.size,
      group: groupForExtension(extension),
    });
  }

  return files;
};

for (const root of roots) {
  let rootStat;

  try {
    rootStat = await stat(root);
  } catch {
    console.log(`\n${root}/ not found`);
    continue;
  }

  if (!rootStat.isDirectory()) {
    console.log(`\n${root}/ is not a directory`);
    continue;
  }

  const files = await collectFiles(root);
  const total = files.reduce((sum, file) => sum + file.size, 0);

  console.log(`\n${root}/`);
  console.log(`Total: ${formatBytes(total)} across ${files.length} files`);

  console.log("\nBy extension group:");
  for (const group of groups.keys()) {
    const groupFiles = files.filter((file) => file.group === group);
    const groupTotal = groupFiles.reduce((sum, file) => sum + file.size, 0);
    console.log(
      `${group.padEnd(8)} ${String(groupFiles.length).padStart(4)} files ${formatBytes(groupTotal).padStart(10)}`,
    );
  }

  console.log("\nTop 40 largest files:");
  files
    .sort((a, b) => b.size - a.size)
    .slice(0, 40)
    .forEach((file, index) => {
      console.log(
        `${String(index + 1).padStart(2)}. ${formatBytes(file.size).padStart(8)}  ${file.displayPath}`,
      );
    });
}
