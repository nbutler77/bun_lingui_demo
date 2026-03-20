import { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";

import { App } from "./app";
import { loadCatalog } from "./i18n/i18n";

await loadCatalog("en_US");

const [currentLocale, setCurrentLocale] = useState("en_US");

const changeLocale = async (locale) => {
  setCurrentLocale(locale);
  await loadCatalog(locale);
};

const elem = document.getElementById("root");
const app = (
  <BrowserRouter>
    <I18nProvider i18n={i18n}>
      <App currentLocale={currentLocale} handleLocaleChange={changeLocale} />
    </I18nProvider>
  </BrowserRouter>
);

if (import.meta.hot) {
  // With hot module reloading, `import.meta.hot.data` is persisted.
  const root = (import.meta.hot.data.root ??= createRoot(elem));
  root.render(app);
} else {
  // The hot module reloading API is not available in production.
  createRoot(elem).render(app);
}
