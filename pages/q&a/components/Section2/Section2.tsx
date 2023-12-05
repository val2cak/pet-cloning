import Point from '../../../../components/Point/Point';
import { translate } from '../../../../locales/translate';
import seven from '../../../../assets/vectors/7-light.png';
import eight from '../../../../assets/vectors/8-light.png';
import nine from '../../../../assets/vectors/9-light.png';
import ten from '../../../../assets/vectors/10-light.png';
import eleven from '../../../../assets/vectors/11-light.png';

const Section2 = () => {
  const { q7, q8, q9, q10, q11 } = translate.qA;

  return (
    <div className='w-full px-8 lg:px-40 sm:py-8 py-16 bg-primary text-light flex flex-col gap-6'>
      <div className='flex sm:flex-col flex-row sm:gap-6 justify-between'>
        <Point title={q7.title} subtitle={q7.subtitle} icon={seven.src} />
        <Point title={q8.title} subtitle={q8.subtitle} icon={eight.src} />
        <Point title={q9.title} subtitle={q9.subtitle} icon={nine.src} />
      </div>
      <div className='flex sm:flex-col flex-row sm:gap-6 justify-between'>
        <Point title={q10.title} subtitle={q10.subtitle} icon={ten.src} />
        <Point title={q11.title} subtitle={q11.subtitle} icon={eleven.src} />
      </div>
    </div>
  );
};

export default Section2;
