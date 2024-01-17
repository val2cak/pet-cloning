import dynamic from 'next/dynamic';
import { GoogleTagManager } from '@next/third-parties/google';

import Layout from '../Layout';

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

  return (
    <Layout>
      <GoogleTagManager gtmId='GTM-5LTK4TCG' />

      <Cover />
      <Section1 />
      <Section2 />
    </Layout>
  );
};

export default QA;
