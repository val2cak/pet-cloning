import dynamic from 'next/dynamic';
import { useEffect } from 'react';

import Layout from '../Layout';
import { initializeGoogleTagManager } from '../../utils/initializeGoogleTagManager';

const QA = () => {
  const Cover = dynamic(() => import('./components/Cover/Cover'), {
    ssr: false,
  });
  const Section1 = dynamic(() => import('./components/Section1/Section1'), {
    ssr: false,
  });
  const Section2 = dynamic(() => import('./components/Section2/Section2'), {
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
    </Layout>
  );
};

export default QA;
