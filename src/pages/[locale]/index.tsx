// src/pages/[locale]/index.tsx
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useEffect } from "react";
import i18next from "i18next";
import Page from "../../components/Layout/Page";
import {
  getHomePageMeta,
  getSectionId,
  SectionId,
  getActivities,
  getOperationItems,
  getDescriptionData,
} from "../../data/data";
import {
  HomepageMeta,
  ActivityElement,
  OperationItem,
  Description,
} from "../../data/dataDef";

type LocalePageProps = {
  locale: string;
  title: string;
  description: string;
  schemaData: any;
  fullUrl: string;
  descriptionData: Description;
  activities: ActivityElement[];
  operations: OperationItem[];
  sectionId: SectionId;
  translations: {
    header: string;
    description: string;
    activities: string;
    operations: string;
  };
};

const LocalePage: NextPage<LocalePageProps> = ({
  locale,
  title,
  description,
  schemaData,
  fullUrl,
  descriptionData,
  activities,
  operations,
  sectionId,
  translations,
}) => {
  useEffect(() => {
    i18next.changeLanguage(locale);
  }, [locale]);

  return (
    <Page
      title={title}
      description={description}
      schemaData={schemaData}
      fullUrl={fullUrl}
      locale={locale}
      descriptionData={descriptionData}
      activities={activities}
      operations={operations}
      sectionId={sectionId}
      translations={translations} // Clés de traduction d'origine
    />
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
  const locale = context.params?.locale as string;
  const fullUrl = `https://11e-foxhole.com/${locale}`;
  const t = i18next.getFixedT(locale);
  const meta: HomepageMeta = getHomePageMeta(t);
  const descriptionData = getDescriptionData(t, locale);
  const activities = getActivities(t);
  const operations = getOperationItems(t, locale);
  const sectionId = getSectionId(t);

  const translations = {
    header: t("homepage.sections.header"), // Clé de traduction d'origine
    description: t("homepage.sections.description"), // Clé de traduction d'origine
    activities: t("homepage.sections.activities"), // Clé de traduction d'origine
    operations: t("homepage.sections.operations"), // Clé de traduction d'origine
  };

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
      descriptionData,
      activities,
      operations,
      sectionId,
      translations, // Clés de traduction d'origine
    },
  };
};

export default LocalePage;
