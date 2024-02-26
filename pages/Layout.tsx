import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { FC, ReactNode } from 'react';
import dynamic from 'next/dynamic';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { camelCase } from 'lodash';

import Popup from './components/Popup/Popup';
import { CookieConsent } from '../components/CookieConsent/CookieConsent';
import { translate } from '../locales/translate';

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
      Cookies.set('visited', 'true', { expires: 30 }); // expires in 30 days

      // Delay showing the modal by 10 seconds
      const delayModal = setTimeout(() => {
        setShowModal(true);
      }, 10000); // 10 seconds in milliseconds

      // Clear the timeout if the component unmounts or the modal is closed manually
      return () => clearTimeout(delayModal);
    }
  }, [hasVisited]);

  const closeModal = () => {
    setShowModal(false);
  };

  const pathCamelCase = camelCase(router.pathname);

  const title = translate.seo[pathCamelCase]?.title ?? translate.seo.home.title;
  const description =
    translate.seo[pathCamelCase]?.description ?? translate.seo.home.description;

  return (
    <>
      <NextSeo title={title} description={description} />
      <CookieConsent />

      <div className='relative min-h-screen'>
        <Header />
        <main
          className={`sm:pb-80 pb-56 ${
            (router.pathname === '/science' || router.pathname === '/news') &&
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
