import { NextSeo } from 'next-seo';
import SEO from '../constants/next-seo.config';
import { useRouter } from 'next/router';
import { FC, ReactNode } from 'react';
import dynamic from 'next/dynamic';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

import Popup from './components/Popup/Popup';
import Script from 'next/script';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

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

  return (
    <>
      <Script id='google-tag-manager' strategy='afterInteractive'>
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>

      <NextSeo title={SEO.title} />
      <div className='relative min-h-screen'>
        <Header />
        <main
          className={`sm:pb-56 pb-48 ${
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
