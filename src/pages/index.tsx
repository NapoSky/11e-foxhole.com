// pages/index.tsx
import { GetStaticProps, NextPage } from "next";
import { useEffect } from "react";
import i18next from "i18next";
import Page from "../components/Layout/Page";
import {
  getHomePageMeta,
  getSectionId,
  SectionId,
  getActivities,
  getOperationItems,
  getDescriptionData,
} from "../data/data";
import {
  HomepageMeta,
  ActivityElement,
  OperationItem,
  Description,
} from "../data/dataDef";

type IndexPageProps = {
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

const IndexPage: NextPage<IndexPageProps> = ({
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
      translations={translations} // Ajout de translations ici
    />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const locale = "fr";
  const fullUrl = `https://11e-foxhole.com/`;
  const t = i18next.getFixedT(locale);
  const meta: HomepageMeta = getHomePageMeta(t);
  const descriptionData = getDescriptionData(t, locale);
  const activities = getActivities(t);
  const operations = getOperationItems(t, locale);
  const sectionId = getSectionId(t);

  const translations = {
    header: t("header.translationKey"),
    description: t("description.translationKey"),
    activities: t("activities.translationKey"),
    operations: t("operations.translationKey"),
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
      translations, // Ajout de translations ici
    },
  };
};

export default IndexPage;
