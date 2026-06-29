import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        business: resolve(__dirname, "business/index.html"),
        news: resolve(__dirname, "news/index.html"),
      },
    },
  },
});
