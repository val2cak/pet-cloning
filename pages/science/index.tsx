import Layout from '../Layout';
import Cover from './components/Cover/Cover';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';

const Science = () => {
  return (
    <Layout>
      <Cover />
      <Section1 />
      <Section2 />
      <Section3 />
    </Layout>
  );
};

export default Science;
