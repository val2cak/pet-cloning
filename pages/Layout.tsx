import { NextSeo } from 'next-seo';
import SEO from '../constants/next-seo.config';
import { useRouter } from 'next/router';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Layout: React.FC = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <NextSeo title={SEO.title} />
      <div className='relative min-h-screen'>
        <Header />
        <main
          className={`pb-48 ${
            (router.pathname === '/science' ||
              router.pathname === '/cloning-news') &&
            'pt-14'
          }`}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
