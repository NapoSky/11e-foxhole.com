// src/components/Layout/Page.tsx
import { NextPage } from "next";
import Head from "next/head";
import { memo, PropsWithChildren, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { HomepageMeta } from "../../data/dataDef";
import GoogleAnalytics from "../../components/GoogleAnalytics";
import Header from "../../components/Sections/Header";
import Footer from "../../components/Sections/Footer";
import Description from "../../components/Sections/Description";
import Operations from "../../components/Sections/Operations";
import Activities from "../../components/Sections/Activities";
import YouTubeModal from "../../components/YoutubeModal";

type PageProps = PropsWithChildren<
  HomepageMeta & { schemaData: any; fullUrl: string }
>;

const Page: NextPage<PageProps> = memo(
  ({ children, title, description, schemaData, fullUrl }) => {
    const { t, i18n } = useTranslation();

    // États pour les valeurs traduites des balises meta
    const [translatedTitle, setTranslatedTitle] = useState(title);
    const [translatedDescription, setTranslatedDescription] =
      useState(description);

    useEffect(() => {
      // Vérifier si l'utilisateur est sur la page racine
      if (window.location.pathname === "/" && i18n.language !== "fr") {
        i18n.changeLanguage("fr").then(() => {
          setTranslatedTitle(t(title));
          setTranslatedDescription(t(description));
        });
      } else {
        setTranslatedTitle(t(title));
        setTranslatedDescription(t(description));
      }
    }, [i18n, t, title, description]);

    // Générer l'URL canonical en fonction de la langue actuelle dans i18next
      const canonicalUrl =
      i18n.language === "fr"
        ? "https://11e-foxhole.com/"
        : `https://11e-foxhole.com/${i18n.language}`;

    return (
      <>
        <Head>
          <title>{translatedTitle}</title>
          <meta name="description" content={translatedDescription} />

          <link rel="canonical" href={canonicalUrl} />
          <link href="/favicon.ico" rel="icon" sizes="any" />
          <link href="/site.webmanifest" rel="manifest" />

          <meta property="og:title" content={translatedTitle} />
          <meta property="og:description" content={translatedDescription} />
          <meta property="og:url" content={fullUrl} />

          <meta name="twitter:title" content={translatedTitle} />
          <meta name="twitter:description" content={translatedDescription} />

          <script type="application/ld+json">
            {JSON.stringify(schemaData)}
          </script>
        </Head>

        <GoogleAnalytics />
        <Header />
        <YouTubeModal />
        <Description />
        <Activities />
        <Operations />
        <Footer />

        {children}
      </>
    );
  },
);

Page.displayName = "Page";
export default Page;
