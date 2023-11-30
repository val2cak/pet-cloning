import { NextSeo } from 'next-seo';
import SEO from '../constants/next-seo.config';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <NextSeo title={SEO.title} />
      <div className='relative'>
        <Header />
        <main className='pb-48'>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
