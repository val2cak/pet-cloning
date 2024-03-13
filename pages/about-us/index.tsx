import dynamic from 'next/dynamic';

import Layout from '../Layout';

const AboutUs = () => {
  const OurValues = dynamic(() => import('./components/OurValues/OurValues'), {
    ssr: false,
  });
  const WhoWeAre = dynamic(() => import('./components/WhoWeAre/WhoWeAre'), {
    ssr: false,
  });
  const InTheNews = dynamic(() => import('./components/InTheNews/InTheNews'), {
    ssr: false,
  });

  return (
    <Layout>
      <OurValues />
      <WhoWeAre />
      <InTheNews />
    </Layout>
  );
};

export default AboutUs;
