import "../globalStyles.scss";
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import i18next from 'i18next';
import GoogleAnalytics from '../components/GoogleAnalytics';
import '../i18n'; // Importation de la configuration i18n avec le détecteur de langue

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter();

  useEffect(() => {
    const { locale } = router;

    if (locale) {
      i18next.changeLanguage(locale);
    } else {
      const queryLng = new URLSearchParams(window.location.search).get('lng');
      if (queryLng) {
        i18next.changeLanguage(queryLng);
      }
    }
  }, [router.locale]);

  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
