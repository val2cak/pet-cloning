import Point from '../../../../components/Point/Point';
import { translate } from '../../../../locales/translate';
import one from '../../../../assets/vectors/1-light.png';
import two from '../../../../assets/vectors/2-light.png';
import two_one from '../../../../assets/vectors/2-primary.png';
import three from '../../../../assets/vectors/3-light.png';
import four from '../../../../assets/vectors/4-light.png';
import five from '../../../../assets/vectors/5-light.png';
import graph from '../../../../assets/images/science-graph.png';

const Section2 = () => {
  const { title, subtitle, step1, step2, step2_1, step3, step4, step5 } =
    translate.science.section2;

  return (
    <div className='w-full px-40 py-16 bg-primary'>
      <div className=' text-light flex flex-col gap-6'>
        <div className='font-bold text-lg leading-6'>{title}</div>
        <div className='font-light text-base opacity-80 leading-5 whitespace-pre-line'>
          {subtitle}
        </div>
        <div className='flex justify-between'>
          <Point title={step1.title} subtitle={step1.subtitle} icon={one.src} />
          <Point title={step2.title} subtitle={step2.subtitle} icon={two.src} />
          <Point subtitle={step2_1.subtitle} icon={two_one.src} />
        </div>
        <div className='flex'>
          <Point
            title={step3.title}
            subtitle={step3.subtitle}
            icon={three.src}
          />
          <Point
            title={step4.title}
            subtitle={step4.subtitle}
            icon={four.src}
          />
          <Point
            title={step5.title}
            subtitle={step5.subtitle}
            icon={five.src}
          />
        </div>
      </div>
      <img src={graph.src} />
    </div>
  );
};

export default Section2;
