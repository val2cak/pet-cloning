import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

import Layout from './Layout';
import Popup from './components/Popup/Popup';

const Home = () => {
  const Cover = dynamic(() => import('./components/Cover/Cover'), {
    ssr: false,
  });
  const Section1 = dynamic(() => import('./components/Section1/Section1'), {
    ssr: false,
  });
  const Section2 = dynamic(() => import('./components/Section2/Section2'), {
    ssr: false,
  });
  const Section3 = dynamic(() => import('./components/Section3/Section3'), {
    ssr: false,
  });
  const Section4 = dynamic(() => import('./components/Section4/Section4'), {
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
    <Layout>
      <Cover />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />

      {showModal && <Popup onClose={closeModal} />}
    </Layout>
  );
};

export default Home;
