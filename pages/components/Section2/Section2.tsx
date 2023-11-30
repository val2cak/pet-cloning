import { translate } from '../../../locales/translate';
import Point from '../../../components/Point/Point';
import imageUrl from '../../../assets/images/home-section-2.png';
import pawIcon from '../../../assets/icons/heart-paw.svg';
import biotechIcon from '../../../assets/icons/biotech.svg';
import experimentIcon from '../../../assets/icons/experiment.svg';

const Section2 = () => {
  const { title, subtitle, point1, point2, point3 } = translate.home.section2;

  return (
    <div className='w-full h-fit flex'>
      <div className='w-1/2 pl-40 py-16 pr-24 bg-primary flex flex-col gap-8'>
        <div className='text-dark text-lg font-medium'>{title}</div>
        <div className='text-light text-base font-medium'>{subtitle}</div>
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
      <img src={imageUrl.src} className='w-1/2 h-auto' />
    </div>
  );
};

export default Section2;
