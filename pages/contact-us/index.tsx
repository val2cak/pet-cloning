import Layout from '../Layout';
import Form from './components/Form/Form';

const ContactUs = () => {
  return (
    <Layout>
      <div className='sm:h-full h-[95vh] w-full bg-cover sm:bg-contactUsCoverMobile bg-contactUsCover pt-14'>
        <Form />
      </div>
    </Layout>
  );
};

export default ContactUs;
