import Card from '../../../components/Card/Card';
import { translate } from '../../../locales/translate';
import card1 from '../../../public/images/home-card-1.png';
import card2 from '../../../public/images/home-card-2.png';
import card3 from '../../../public/images/home-card-3.jpg';
import card4 from '../../../public/images/home-card-4.png';
import card5 from '../../../public/images/home-card-5.png';
import card6 from '../../../public/images/home-card-6.png';
import card7 from '../../../public/images/home-card-7.png';

const Section3 = () => {
  const { title, subtitle, step1, step2, step3, step4, step5, step6, step7 } =
    translate.home.section3;

  return (
    <div className='w-full sm:px-8 px-40 2xl:px-56 sm:py-8 py-16 flex flex-col sm:gap-6 gap-8'>
      <div className='text-darker text-md font-medium'>{title}</div>
      <div className='text-darker sm:text-sm text-base font-medium leading-4'>
        {subtitle}
      </div>
      <div className='flex sm:flex-col flex-row justify-start gap-8'>
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
          alt='real name: Matylda Sękpl.wiki: Cygaretkacommons: Cygaretka, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons'
        />
        <Card
          title={step4.title}
          subtitle={step4.subtitle}
          image={card4.src}
          link='/science'
        />
      </div>
      <div className='flex sm:flex-col flex-row justify-start gap-8'>
        <Card title={step5.title} subtitle={step5.subtitle} image={card5.src} />
        <Card title={step6.title} subtitle={step6.subtitle} image={card6.src} />
        <Card title={step7.title} subtitle={step7.subtitle} image={card7.src} />
      </div>
    </div>
  );
};

export default Section3;
