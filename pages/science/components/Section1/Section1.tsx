import Point from '../../../../components/Point/Point';
import Question from '../../../../components/Question/Question';
import { translate } from '../../../../locales/translate';
import one from '../../../../public/vectors/1-dark.png';
import two from '../../../../public/vectors/2-dark.png';
import three from '../../../../public/vectors/3-dark.png';
import four from '../../../../public/vectors/4-dark.png';
import five from '../../../../public/vectors/5-dark.png';
import six from '../../../../public/vectors/6-dark.png';
import seven from '../../../../public/vectors/7-dark.png';

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
      <div className='flex flex-col sm:gap-6 gap-4 flex-wrap'>
        <Question
          title={step1.title}
          subtitle={step1.subtitle}
          icon={one.src}
          color='text-darker'
        />
        <Question
          title={step2.title}
          subtitle={step2.subtitle}
          icon={two.src}
          color='text-darker'
        />
        <Question
          title={step3.title}
          subtitle={step3.subtitle}
          icon={three.src}
          color='text-darker'
        />

        <Question
          title={step4.title}
          subtitle={step4.subtitle}
          icon={four.src}
          color='text-darker'
        />
        <Question
          title={step5.title}
          subtitle={step5.subtitle}
          icon={five.src}
          color='text-darker'
        />
        <Question
          title={step6.title}
          subtitle={step6.subtitle}
          icon={six.src}
          color='text-darker'
        />
        <Question
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
