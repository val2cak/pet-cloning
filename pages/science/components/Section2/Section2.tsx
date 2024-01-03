import Question from '../../../../components/Question/Question';
import { translate } from '../../../../locales/translate';
import sheep from '../../../../public/vectors/sheep.webp';
import horse from '../../../../public/vectors/horse.webp';
import price from '../../../../public/vectors/price.webp';
import laboratory from '../../../../public/vectors/laboratory.webp';
import europe from '../../../../public/vectors/europe.webp';
import graph from '../../../../public/images/science-graph.webp';

const Section2 = () => {
  const { title, subtitle, step1, step2, step3, step4, step5 } =
    translate.science.section2;

  return (
    <div className='w-full sm:px-8 px-40 2xl:px-56 sm:py-8 py-16 bg-primary flex flex-col sm:gap-6 gap-8'>
      <div className=' text-light flex flex-col gap-6'>
        <div className='font-bold text-md leading-6'>{title}</div>
        <div className='font-light sm:text-sm text-base opacity-80 leading-5 whitespace-pre-line'>
          {subtitle}
        </div>
        <div className='flex flex-col sm:gap-6 gap-8'>
          <Question
            title={step1.title}
            subtitle={step1.subtitle}
            icon={sheep.src}
          />
          <Question
            title={step2.title}
            subtitle={step2.subtitle}
            icon={horse.src}
          />
          <Question
            title={step3.title}
            subtitle={step3.subtitle}
            icon={laboratory.src}
          />
          <Question
            title={step4.title}
            subtitle={step4.subtitle}
            icon={price.src}
          />
          <Question
            title={step5.title}
            subtitle={step5.subtitle}
            icon={europe.src}
          />
        </div>
      </div>
      <img src={graph.src} alt='Graph' />
    </div>
  );
};

export default Section2;
