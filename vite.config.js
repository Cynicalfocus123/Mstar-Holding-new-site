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
        newsDefense: resolve(
          __dirname,
          "news/pasit-viwatkurkul-future-of-warfare-entrepreneurship/index.html",
        ),
        newsPasitProfile: resolve(
          __dirname,
          "news/leap-of-faith-pasit-joe-viwatkurkul/index.html",
        ),
        newsJakapunSpotlight: resolve(
          __dirname,
          "news/ceo-spotlight-jakapun-viwatkurkul/index.html",
        ),
        newsUaeThailand: resolve(
          __dirname,
          "news/mstar-holding-expansion-uae-thailand/index.html",
        ),
        newsCovidRecovery: resolve(
          __dirname,
          "news/mstar-economic-recovery-covid-19/index.html",
        ),
      },
    },
  },
});
