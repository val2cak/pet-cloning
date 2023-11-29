import { NextSeo } from 'next-seo';
import SEO from '../constants/next-seo.config';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <NextSeo title={SEO.title} />
      <div className=''>
        <Header />
        <main className='mt-8 w-full px-40'>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
