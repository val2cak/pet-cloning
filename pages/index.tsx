import dynamic from 'next/dynamic';
import { useEffect } from 'react';

import Layout from './Layout';
import { initializeGoogleTagManager } from '../utils/initializeGoogleTagManager';

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

  useEffect(() => {
    initializeGoogleTagManager();
  }, []);

  return (
    <Layout>
      <Cover />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </Layout>
  );
};

export default Home;
