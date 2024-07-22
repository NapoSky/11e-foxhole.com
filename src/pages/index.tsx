import dynamic from 'next/dynamic';
import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import Footer from '../components/Sections/Footer';
import Description from '../components/Sections/Description';
import Operations from '../components/Sections/Operations';
import Activities from '../components/Sections/Activities';
import OfficerSection from '../components/Sections/Officers';
import {homePageMeta} from '../data/data';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;
  return (
    <Page description={description} title={title}>
      <Header />
      <Description />
      <Activities />
      <Operations />
      <OfficerSection />
      <Footer />
    </Page>
  );
});

export default Home;
