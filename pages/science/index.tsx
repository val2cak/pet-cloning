import dynamic from 'next/dynamic';
import { GoogleTagManager } from '@next/third-parties/google';

import Layout from '../Layout';

const Science = () => {
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

  return (
    <Layout>
      <GoogleTagManager gtmId='GTM-5LTK4TCG' />

      <Cover />
      <Section1 />
      <Section2 />
      <Section3 />
    </Layout>
  );
};

export default Science;
