// pages/index.tsx
import { GetStaticProps } from 'next';
import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import GoogleAnalytics from '../components/GoogleAnalytics';
import Schema from '../components/Schema';
import Page from '../components/Layout/Page';
import Footer from '../components/Sections/Footer';
import Description from '../components/Sections/Description';
import Operations from '../components/Sections/Operations';
import Activities from '../components/Sections/Activities';
import Header from '../components/Sections/Header';

const IndexPage: FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    i18next.changeLanguage('fr'); // Français par défaut
  }, []);

  const title = t('homepage.meta.title');
  const description = t('homepage.meta.description');
  const fullurl = "https://11e-foxhole.com/";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://11e-foxhole.com/",
    "name": "11e-Foxhole",
    "description": description,
    "publisher": {
      "@type": "Organization",
      "name": "11e-Foxhole",
    },
  };

  return (
    <Page description={description} title={title} schemaData={schemaData} fullUrl={fullurl}>
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

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}, // Pas de props spécifiques pour la racine
  };
};

export default IndexPage;