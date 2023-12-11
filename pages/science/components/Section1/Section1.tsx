import Point from '../../../../components/Point/Point';
import { translate } from '../../../../locales/translate';
import one from '../../../../assets/vectors/1-dark.png';
import two from '../../../../assets/vectors/2-dark.png';
import three from '../../../../assets/vectors/3-dark.png';
import four from '../../../../assets/vectors/4-dark.png';
import five from '../../../../assets/vectors/5-dark.png';
import six from '../../../../assets/vectors/6-dark.png';
import seven from '../../../../assets/vectors/7-dark.png';

const Section1 = () => {
  const {
    title,
    subtitle,
    step1,
    step2,
    step3,
    step4,
    step5,
    step6,
    step7,
    conclusion,
  } = translate.science.section1;

  return (
    <div className='w-full sm:px-8 px-40 2xl:px-56 sm:py-8 py-16 text-darker flex flex-col gap-6'>
      <div className='font-bold sm:text-md text-lg leading-6'>{title}</div>
      <div className='font-light sm:text-sm text-base opacity-60 leading-5 whitespace-pre-line'>
        {subtitle}
      </div>
      <div className='grid grid-cols-4 sm:grid-cols-1 sm:gap-6 gap-4 flex-wrap'>
        <Point
          title={step1.title}
          subtitle={step1.subtitle}
          icon={one.src}
          color='text-darker'
        />
        <Point
          title={step2.title}
          subtitle={step2.subtitle}
          icon={two.src}
          color='text-darker'
        />
        <Point
          title={step3.title}
          subtitle={step3.subtitle}
          icon={three.src}
          color='text-darker'
        />

        <Point
          title={step4.title}
          subtitle={step4.subtitle}
          icon={four.src}
          color='text-darker'
        />
        <Point
          title={step5.title}
          subtitle={step5.subtitle}
          icon={five.src}
          color='text-darker'
        />
        <Point
          title={step6.title}
          subtitle={step6.subtitle}
          icon={six.src}
          color='text-darker'
        />
        <Point
          title={step7.title}
          subtitle={step7.subtitle}
          icon={seven.src}
          color='text-darker'
        />
      </div>
      <div className='font-light sm:text-sm text-base opacity-60 leading-5 whitespace-pre-line'>
        {conclusion}
      </div>
    </div>
  );
};

export default Section1;
