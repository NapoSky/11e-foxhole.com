import "../globalStyles.scss";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import i18next from "i18next";
import GoogleAnalytics from "../components/GoogleAnalytics";
import "../i18n"; // Importation de la configuration i18n
import DocumentLangUpdater from "../components/DocumentLangUpdater";

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = pageProps;

  useEffect(() => {
    if (locale) {
      i18next.changeLanguage(locale); // Change la langue basée sur la locale
    }
  }, [locale]);

  return (
    <>
      <DocumentLangUpdater /> {/* Met à jour la langue du document */}
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
