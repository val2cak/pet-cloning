import { NextSeo } from 'next-seo';
import SEO from '../constants/next-seo.config';
import { useRouter } from 'next/router';
import { FC, ReactNode } from 'react';
import dynamic from 'next/dynamic';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const router = useRouter();

  const Header = dynamic(() => import('../components/Header/Header'), {
    ssr: false,
  });

  const Footer = dynamic(() => import('../components/Footer/Footer'), {
    ssr: false,
  });

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
