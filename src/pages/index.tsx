// pages/index.tsx
import { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Page from "../components/Layout/Page";

const IndexPage: FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    i18next.changeLanguage("fr"); // Français par défaut
  }, []);

  const title = t("homepage.meta.title");
  const description = t("homepage.meta.description");
  const fullurl = "https://11e-foxhole.com/";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://11e-foxhole.com/",
    name: "11e-Foxhole",
    description: description,
    publisher: {
      "@type": "Organization",
      name: "11e-Foxhole",
    },
  };

  return (
    <Page
      description={description}
      title={title}
      schemaData={schemaData}
      fullUrl={fullurl}
    >
      {/* Tout le contenu est déjà géré dans Page.tsx */}
    </Page>
  );
};

export default IndexPage;
