import dynamic from 'next/dynamic';
import { useEffect } from 'react';

import Layout from '../Layout';
import { initializeGoogleTagManager } from '../../utils/initializeGoogleTagManager';

const ContactUs = () => {
  const Form = dynamic(() => import('./components/Form/Form'), {
    ssr: false,
  });

  useEffect(() => {
    initializeGoogleTagManager();
  }, []);

  return (
    <Layout>
      <div className='sm:h-full h-[95vh] w-full bg-cover sm:bg-contactUsCoverMobile bg-contactUsCover pt-14'>
        <Form />
      </div>
    </Layout>
  );
};

export default ContactUs;
