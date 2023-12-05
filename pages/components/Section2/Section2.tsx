import { translate } from '../../../locales/translate';
import Point from '../../../components/Point/Point';
import imageUrl from '../../../assets/images/home-section-2.png';
import pawIcon from '../../../assets/icons/heart-paw.svg';
import biotechIcon from '../../../assets/icons/biotech.svg';
import experimentIcon from '../../../assets/icons/experiment.svg';

const Section2 = () => {
  const { title, subtitle, point1, point2, point3 } = translate.home.section2;

  return (
    <div className='w-full h-fit flex sm:flex-col flex-row'>
      <div className='sm:w-full w-1/2 sm:pl-8 pl-40 sm:py-8 py-16 sm:pr-8 pr-24 bg-primary flex flex-col sm:gap-6 gap-8'>
        <div className='text-dark sm:text-md text-lg font-medium'>{title}</div>
        <div className='text-light sm:text-sm text-base font-medium'>
          {subtitle}
        </div>
        <Point
          title={point1.title}
          subtitle={point1.subtitle}
          icon={pawIcon.src}
        />
        <Point
          title={point2.title}
          subtitle={point2.subtitle}
          icon={biotechIcon.src}
        />
        <Point
          title={point3.title}
          subtitle={point3.subtitle}
          icon={experimentIcon.src}
        />
      </div>
      <img
        src={imageUrl.src}
        className='sm:w-full w-1/2 sm:h-[16.0625rem] h-auto sm:object-cover object-contain'
      />
    </div>
  );
};

export default Section2;
