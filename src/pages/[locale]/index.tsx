// src/pages/[locale]/index.tsx
import { GetStaticPaths, GetStaticProps } from "next";
import { FC } from "react";
import i18next from "i18next";
import Page from "../../components/Layout/Page";
import { getHomePageMeta } from "../../data/data";

type LocalePageProps = {
  locale: string;
  title: string;
  description: string;
  schemaData: any;
  fullUrl: string;
};

const LocalePage: FC<LocalePageProps> = ({
  locale,
  title,
  description,
  schemaData,
  fullUrl,
}) => {
  i18next.changeLanguage(locale);

  return (
    <Page
      title={title}
      description={description}
      schemaData={schemaData}
      fullUrl={fullUrl}
    >
      {/* Votre contenu de page ici */}
    </Page>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { locale: "fr" } },
      { params: { locale: "en" } },
      { params: { locale: "cn" } },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.params?.locale || "fr";
  const pathname = `/${locale}`; // Ajoutez d'autres segments de chemin si nécessaire
  const baseUrl = "https://11e-foxhole.com";
  const fullUrl = `${baseUrl}${pathname}`;

  const t = i18next.getFixedT
    ? i18next.getFixedT(locale)
    : i18next.t.bind(i18next);
  const meta = getHomePageMeta(t);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: fullUrl,
    name: "11e-Foxhole",
    description: meta.description,
    publisher: {
      "@type": "Organization",
      name: "11e-Foxhole",
    },
  };

  return {
    props: {
      locale,
      title: meta.title,
      description: meta.description,
      schemaData,
      fullUrl,
    },
  };
};

export default LocalePage;
