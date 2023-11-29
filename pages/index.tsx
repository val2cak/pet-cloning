import { NextSeo } from 'next-seo';
import SEO from '../constants/next-seo.config';

const Home = () => {
  return (
    <>
      <NextSeo title={SEO.title} />
    </>
  );
};

export default Home;
