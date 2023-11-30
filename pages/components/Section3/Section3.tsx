import Card from '../../../components/Card/Card';
import { translate } from '../../../locales/translate';
import card1 from '../../../assets/images/home-card-1.png';
import card2 from '../../../assets/images/home-card-2.png';
import card3 from '../../../assets/images/home-card-3.png';
import card4 from '../../../assets/images/home-card-4.png';
import card5 from '../../../assets/images/home-card-5.png';
import card6 from '../../../assets/images/home-card-6.png';

const Section3 = () => {
  const { title, subtitle, step1, step2, step3, step4, step5, step6 } =
    translate.home.section3;

  return (
    <div className='w-full px-40 py-16 flex flex-col gap-8'>
      <div className='text-darker text-lg font-medium'>{title}</div>
      <div className='text-darker text-base font-medium leading-4'>
        {subtitle}
      </div>
      <div className='flex justify-between gap-10'>
        <Card
          title={step1.title}
          subtitle={step1.subtitle}
          image={card1.src}
          link='/pet-cloning-guide'
        />
        <Card title={step2.title} subtitle={step2.subtitle} image={card2.src} />
        <Card
          title={step3.title}
          subtitle={step3.subtitle}
          image={card3.src}
          link='/science'
        />
      </div>
      <div className='flex justify-between gap-10'>
        <Card title={step4.title} subtitle={step4.subtitle} image={card4.src} />
        <Card title={step5.title} subtitle={step5.subtitle} image={card5.src} />
        <Card title={step6.title} subtitle={step6.subtitle} image={card6.src} />
      </div>
      <div></div>
    </div>
  );
};

export default Section3;
