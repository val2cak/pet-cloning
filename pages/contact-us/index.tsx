import dynamic from 'next/dynamic';
import { GoogleTagManager } from '@next/third-parties/google';

import Layout from '../Layout';

const ContactUs = () => {
  const Form = dynamic(() => import('./components/Form/Form'), {
    ssr: false,
  });

  return (
    <Layout>
      <GoogleTagManager gtmId='GTM-5LTK4TCG' />

      <div className='sm:h-full h-[95vh] w-full bg-cover sm:bg-contactUsCoverMobile bg-contactUsCover pt-14'>
        <Form />
      </div>
    </Layout>
  );
};

export default ContactUs;
