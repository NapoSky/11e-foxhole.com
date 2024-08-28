import { NextPage } from "next";
import Head from "next/head";
import { memo, PropsWithChildren, useEffect, useState } from "react";
import {
  HomepageMeta,
  ActivityElement,
  Description,
  OperationItem,
} from "../../data/dataDef";
import { SectionId } from "../../data/data";
import GoogleAnalytics from "../../components/GoogleAnalytics";
import Header from "../../components/Sections/Header";
import Schema from "../Schema";
import Footer from "../../components/Sections/Footer";
import DescriptionComponent from "../../components/Sections/Description";
import Operations from "../../components/Sections/Operations";
import Activities from "../../components/Sections/Activities";
import YouTubeModal from "../../components/YoutubeModal";
import i18next from "i18next";
//import Description from "../../components/Sections/Description";

type PageProps = PropsWithChildren<
  HomepageMeta & {
    schemaData: any;
    fullUrl: string;
    locale: string;
    descriptionData: Description;
    translations: {
      header: string;
      description: string;
      activities: string;
      operations: string;
    };
    activities: ActivityElement[];
    operations: OperationItem[]; // Ajout de la propriété operations
    sectionId: SectionId;
  }
>;

const Page: NextPage<PageProps> = memo(
  ({
    children,
    title,
    description,
    schemaData,
    fullUrl,
    locale,
    descriptionData,
    activities,
    operations, // Ajout de l'argument operations
    sectionId,
  }) => {
    const [canonicalUrl, setCanonicalUrl] = useState(fullUrl);

    useEffect(() => {
      i18next.changeLanguage(locale);
      const url =
        locale === "fr"
          ? "https://11e-foxhole.com/"
          : `https://11e-foxhole.com/${locale}`;
      setCanonicalUrl(url);
    }, [locale]);

    return (
      <>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />

          <link rel="canonical" href={canonicalUrl} />
          <link href="/favicon.ico" rel="icon" sizes="any" />
          <link href="/site.webmanifest" rel="manifest" />

          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:url" content={fullUrl} />

          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
        </Head>
        <Schema schema={schemaData} />
        <GoogleAnalytics />
        <Header sectionId={sectionId} locale={locale} />
        <YouTubeModal />
        <DescriptionComponent descriptionData={descriptionData} />
        <Activities
          activities={activities}
          sectionId={sectionId}
          locale={locale}
        />
        <Operations operations={operations} sectionId={sectionId.Operations} />
        <Footer />

        {children}
      </>
    );
  },
);

Page.displayName = "Page";
export default Page;
