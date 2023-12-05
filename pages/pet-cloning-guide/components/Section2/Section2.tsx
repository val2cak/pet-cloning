import { translate } from '../../../../locales/translate';
import Point from '../../../../components/Point/Point';
import imageUrl from '../../../../assets/images/cloning-guide-section-2.png';
import dogIcon from '../../../../assets/icons/dog.svg';
import vetIcon from '../../../../assets/icons/vet.svg';
import exampleIcon from '../../../../assets/icons/example.svg';

const Section2 = () => {
  const { title, point1, point2, point3 } = translate.petCloningGuide.section2;

  return (
    <div className='w-full h-fit flex sm:flex-col lg:flex-col flex-row'>
      <div className='sm:w-full lg:w-full w-1/2 sm:pl-8 pl-40 2xl:pl-56 sm:py-8 py-16 sm:pr-8 pr-24 bg-primary flex flex-col sm:gap-6 gap-8'>
        <div className='text-dark sm:text-md text-lg font-medium'>{title}</div>
        <div className='flex flex-col lg:flex-row lg:flex-wrap sm:gap-6 gap-8'>
          <Point
            title={point1.title}
            subtitle={point1.subtitle}
            icon={dogIcon.src}
          />
          <Point
            title={point2.title}
            subtitle={point2.subtitle}
            icon={vetIcon.src}
          />
          <Point
            title={point3.title}
            subtitle={point3.subtitle}
            icon={exampleIcon.src}
          />
        </div>
      </div>
      <img
        src={imageUrl.src}
        className='sm:w-full lg:w-full w-1/2 sm:h-[16.0625rem] lg:h-[36rem] h-auto sm:object-cover lg:object-cover'
      />
    </div>
  );
};

export default Section2;
