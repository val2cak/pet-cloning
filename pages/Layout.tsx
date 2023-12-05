import { NextSeo } from 'next-seo';
import SEO from '../constants/next-seo.config';
import { useRouter } from 'next/router';
import { FC, ReactNode } from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <NextSeo title={SEO.title} />
      <div className='relative min-h-screen'>
        <Header />
        <main
          className={`sm:pb-56 pb-48 ${
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
