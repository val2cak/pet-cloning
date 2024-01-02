import Question from '../../../../components/Question/Question';
import { translate } from '../../../../locales/translate';
import example from '../../../../public/vectors/example.png';
import snowflake from '../../../../public/vectors/snowflake.png';
import cell from '../../../../public/vectors/cell.png';
import bolt from '../../../../public/vectors/bolt.png';
import paw from '../../../../public/vectors/heart-paw.png';
import cat from '../../../../public/vectors/cat.png';
import kitten from '../../../../public/vectors/kitten.png';

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
          icon={example.src}
          color='text-darker'
        />
        <Question
          title={step2.title}
          subtitle={step2.subtitle}
          icon={snowflake.src}
          color='text-darker'
        />
        <Question
          title={step3.title}
          subtitle={step3.subtitle}
          icon={cell.src}
          color='text-darker'
        />

        <Question
          title={step4.title}
          subtitle={step4.subtitle}
          icon={bolt.src}
          color='text-darker'
        />
        <Question
          title={step5.title}
          subtitle={step5.subtitle}
          icon={paw.src}
          color='text-darker'
        />
        <Question
          title={step6.title}
          subtitle={step6.subtitle}
          icon={cat.src}
          color='text-darker'
        />
        <Question
          title={step7.title}
          subtitle={step7.subtitle}
          icon={kitten.src}
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
