import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative, sep } from "node:path";

const root = process.cwd();
const ignoredDirs = new Set([".git", "dist", "node_modules"]);

const htmlFiles = [];

const walk = (dir) => {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!ignoredDirs.has(entry.name)) {
        walk(join(dir, entry.name));
      }
      continue;
    }

    if (entry.name === "index.html") {
      htmlFiles.push(join(dir, entry.name));
    }
  }
};

const hrefPrefixFor = (file) => {
  const dir = dirname(relative(root, file));

  if (dir === ".") {
    return "";
  }

  return "../".repeat(dir.split(sep).length);
};

const renderCodeConductLink = (prefix) => {
  if (prefix.length <= 3) {
    return `<a href="${prefix}corporate-governance/code-of-conduct/">Code of Conduct</a>`;
  }

  return `<a href="${prefix}corporate-governance/code-of-conduct/"
          >Code of Conduct</a
        >`;
};

const renderFooter = (prefix) => `<footer class="site-footer">
      <div class="footer-brand">
        <span>Mstar Holding</span>
        <span>Putting Big Ideas into Action</span>
      </div>
      <nav class="footer-links" aria-label="Company">
        <span>Company</span>
        <a href="${prefix}about/">About Us</a>
        <a href="${prefix}business/">Our Business</a>
        <a href="${prefix}#global-presence">Global Presence</a>
        <a href="${prefix}#contact">Contact Us</a>
      </nav>
      <nav class="footer-links" aria-label="Media and Press">
        <span>Media / Press</span>
        <a href="${prefix}news/">News</a>
      </nav>
      <nav class="footer-links" aria-label="Corporate Governance">
        <span>Corporate Governance</span>
        <a href="${prefix}corporate-governance/executive-management/"
          >Executive Management</a
        >
        <a href="${prefix}corporate-governance/board-of-directors/"
          >Board of Directors</a
        >
        ${renderCodeConductLink(prefix)}
      </nav>
      <nav class="footer-links" aria-label="Legal">
        <span>Legal</span>
        <a href="${prefix}terms-of-service/">Terms of Service</a>
        <a href="${prefix}privacy-policy/">Privacy Policy</a>
      </nav>
      <span class="footer-copyright">&copy; 2026 Mstar Holding Inc.</span>
    </footer>`;

walk(root);

let updated = 0;

for (const file of htmlFiles) {
  if (!statSync(file).isFile()) {
    continue;
  }

  const html = readFileSync(file, "utf8");
  const footer = renderFooter(hrefPrefixFor(file));
  const next = html.replace(
    /<footer class="site-footer">[\s\S]*?<\/footer>/,
    footer,
  );

  if (next !== html) {
    writeFileSync(file, next);
    updated += 1;
  }
}

console.log(`Synced shared footer on ${updated} page(s).`);
