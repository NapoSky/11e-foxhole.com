// src/components/Layout/Page.tsx
import { NextPage } from "next";
import Head from "next/head";
import { memo, PropsWithChildren, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { HomepageMeta } from "../../data/dataDef";
import GoogleAnalytics from "../../components/GoogleAnalytics";
import Header from "../../components/Sections/Header";
import Schema from "../../components/Schema";
import Footer from "../../components/Sections/Footer";
import Description from "../../components/Sections/Description";
import Operations from "../../components/Sections/Operations";
import Activities from "../../components/Sections/Activities";

type PageProps = PropsWithChildren<HomepageMeta & { schemaData: any; fullUrl: string }>;

const Page: NextPage<PageProps> = memo(
  ({ children, title, description, schemaData, fullUrl }) => {
    const { t, i18n } = useTranslation();

    // États pour les valeurs traduites des balises meta
    const [translatedTitle, setTranslatedTitle] = useState(title);
    const [translatedDescription, setTranslatedDescription] = useState(description);

    useEffect(() => {
      // Forcer la langue à 'fr' lors du premier rendu
      // Trick pour forcer la langue FR sur la page racine '/'
      if (i18n.language !== 'fr') {
        i18n.changeLanguage('fr').then(() => {
          // Met à jour les traductions une fois la langue changée pour les pages [locale]
          setTranslatedTitle(t(title));
          setTranslatedDescription(t(description));
        });
      } else {
        // Si la langue est déjà 'fr', pas besoin de changer, juste définir les traductions
        setTranslatedTitle(t(title));
        setTranslatedDescription(t(description));
      }
    }, [i18n, t, title, description]);

    return (
      <>
        <Head>
          <title>{translatedTitle}</title>
          <meta name="description" content={translatedDescription} />

          <link rel="canonical" href={fullUrl} />
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
        <Schema schema={schemaData} />
        <Description />
        <Activities />
        <Operations />
        <Footer />

        {children}
      </>
    );
  }
);

Page.displayName = "Page";
export default Page;
