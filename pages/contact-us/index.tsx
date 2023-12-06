import dynamic from 'next/dynamic';

import Layout from '../Layout';

const ContactUs = () => {
  const Form = dynamic(() => import('./components/Form/Form'), {
    ssr: false,
  });

  return (
    <Layout>
      <div className='sm:h-full h-[95vh] w-full bg-cover sm:bg-contactUsCoverMobile bg-contactUsCover pt-14'>
        <Form />
      </div>
    </Layout>
  );
};

export default ContactUs;
