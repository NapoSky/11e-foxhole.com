// pages/[locale]/index.tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import GoogleAnalytics from '../../components/GoogleAnalytics';
import Schema from '../../components/Schema';
import Page from '../../components/Layout/Page';
import Footer from '../../components/Sections/Footer';
import Description from '../../components/Sections/Description';
import Operations from '../../components/Sections/Operations';
import Activities from '../../components/Sections/Activities';
import Header from '../../components/Sections/Header';

type LocalePageProps = {
  locale: string;
};

const LocalePage: FC<LocalePageProps> = ({ locale }) => {
  const { t } = useTranslation();

  useEffect(() => {
    i18next.changeLanguage(locale);
  }, [locale]);

  const title = t('homepage.meta.title');
  const description = t('homepage.meta.description');

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": `https://11e-foxhole.com/${locale}`,
    "name": "11e-Foxhole",
    "description": description,
    "publisher": {
      "@type": "Organization",
      "name": "11e-Foxhole",
    },
  };

  return (
    <Page description={description} title={title}>
      <GoogleAnalytics />
      <Header />
      <Schema schema={schemaData} />
      <Description />
      <Activities />
      <Operations />
      <Footer />
    </Page>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { locale: 'fr' } }, // Obligatoire pour générer le path fr
      { params: { locale: 'en' } },
      { params: { locale: 'cn' } },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.params?.locale || 'fr'; // Français par défaut
  return {
    props: { locale },
  };
};

export default LocalePage;
