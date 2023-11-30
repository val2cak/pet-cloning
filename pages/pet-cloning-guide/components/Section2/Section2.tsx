import { translate } from '../../../../locales/translate';
import Point from '../../../../components/Point/Point';
import imageUrl from '../../../../assets/images/cloning-guide-section-2.png';
import dogIcon from '../../../../assets/icons/dog.svg';
import vetIcon from '../../../../assets/icons/vet.svg';
import exampleIcon from '../../../../assets/icons/example.svg';

const Section2 = () => {
  const { title, point1, point2, point3 } = translate.petCloningGuide.section2;

  return (
    <div className='w-full h-fit flex'>
      <div className='w-1/2 pl-40 py-16 pr-24 bg-primary flex flex-col gap-8'>
        <div className='text-dark text-lg font-medium'>{title}</div>
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
      <img src={imageUrl.src} className='w-1/2 h-auto' />
    </div>
  );
};

export default Section2;
