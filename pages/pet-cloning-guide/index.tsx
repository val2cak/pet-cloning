import dynamic from 'next/dynamic';
import { GoogleTagManager } from '@next/third-parties/google';

import Layout from '../Layout';

const PetCloningGuide = () => {
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
  const Section5 = dynamic(() => import('./components/Section5/Section5'), {
    ssr: false,
  });

  return (
    <Layout>
      <GoogleTagManager gtmId='GTM-5LTK4TCG' />

      <Cover />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </Layout>
  );
};

export default PetCloningGuide;
