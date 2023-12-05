import Point from '../../../../components/Point/Point';
import { translate } from '../../../../locales/translate';
import check from '../../../../assets/icons/check.svg';
import truck from '../../../../assets/icons/truck.svg';
import hourglass from '../../../../assets/icons/hourglass.svg';

const Section3 = () => {
  const { title, point1, point2, point3 } = translate.petCloningGuide.section3;

  return (
    <div className='w-full px-8 lg:px-40 py-16 text-dark flex flex-col gap-6'>
      <div className='font-medium text-lg leading-6'>{title}</div>
      <div className='flex justify-between'>
        <Point
          title={point1.title}
          subtitle={point1.subtitle}
          icon={check.src}
          color='text-dark'
        />
        <Point
          title={point2.title}
          subtitle={point2.subtitle}
          icon={truck.src}
          color='text-dark'
        />
        <Point
          title={point3.title}
          subtitle={point3.subtitle}
          icon={hourglass.src}
          color='text-dark'
        />
      </div>
    </div>
  );
};

export default Section3;
