import { defineConfig } from "@lingui/cli";

export default defineConfig({
  sourceLocale: "en_US",
  locales: ["en_US", "en_GB", "fr_CA", "es_MX"],
  fallbackLocales: {
    "default": "en_US"
  },
  catalogs: [
    {
      path: "src/i18n/locales/{locale}/messages",
      include: ["src"]
    }
  ]
});