import { NextSeo } from 'next-seo';
import SEO from '../constants/next-seo.config';
import { useRouter } from 'next/router';
import { FC, ReactNode } from 'react';
import dynamic from 'next/dynamic';

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Popup from './components/Popup/Popup';
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

  const [showModal, setShowModal] = useState(false);

  // Check if the 'visited' cookie is set
  const hasVisited = Cookies.get('visited');

  // Set the 'visited' cookie if it's the first visit
  useEffect(() => {
    if (!hasVisited) {
      // Set the 'visited' cookie to true
      Cookies.set('visited', 'true', { expires: 7 }); // expires in 7 days
      setShowModal(true);
    }
  }, [hasVisited]);

  const closeModal = () => {
    setShowModal(false);
  };

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

      {showModal && <Popup onClose={closeModal} />}
    </>
  );
};

export default Layout;
