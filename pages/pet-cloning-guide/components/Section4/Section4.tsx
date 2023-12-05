import Point from '../../../../components/Point/Point';
import { translate } from '../../../../locales/translate';
import support from '../../../../assets/icons/support.svg';
import transport from '../../../../assets/icons/transport.svg';

const Section4 = () => {
  const { title, point1, point2 } = translate.petCloningGuide.section4;

  return (
    <div className='w-full px-8 lg:px-40 pb-16 text-dark flex flex-col gap-6'>
      <div className='font-medium text-lg leading-6'>{title}</div>
      <div className='flex justify-start'>
        <Point
          title={point1.title}
          subtitle={point1.subtitle}
          icon={support.src}
          color='text-dark'
        />
        <Point
          title={point2.title}
          subtitle={point2.subtitle}
          icon={transport.src}
          color='text-dark'
        />
      </div>
    </div>
  );
};

export default Section4;
