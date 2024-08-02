import { FC, memo } from "react";
import GoogleAnalytics from "../components/GoogleAnalytics";
import Schema from "../components/Schema";
import Page from "../components/Layout/Page";
import Footer from "../components/Sections/Footer";
import Description from "../components/Sections/Description";
import Operations from "../components/Sections/Operations";
import Activities from "../components/Sections/Activities";
import Header from "../components/Sections/Header";
// import OfficerSection from '../components/Sections/Officers';
import { homePageMeta } from "../data/data";

const Home: FC = memo(() => {
  const { title, description } = homePageMeta;

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
    <Page description={description} title={title}>
      <GoogleAnalytics />
      <Header />
      <Schema schema={schemaData} />
      <Description />
      <Activities />
      <Operations />
      {/* <OfficerSection /> */}
      <Footer />
    </Page>
  );
});

export default Home;
