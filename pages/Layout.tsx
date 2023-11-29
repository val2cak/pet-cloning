import { NextSeo } from 'next-seo';
import SEO from '../constants/next-seo.config';
import Header from '../components/Header/Header';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <NextSeo title={SEO.title} />
      <Header />
      <main className='container mx-40 mt-8'>{children}</main>
    </>
  );
};

export default Layout;
