import Question from '../../../../components/Question/Question';
import { translate } from '../../../../locales/translate';
import dna from '../../../../public/vectors/dna.webp';
import microscope from '../../../../public/vectors/microscope.webp';
import morale from '../../../../public/vectors/morale.webp';
import auditorium from '../../../../public/vectors/auditorium.webp';
import research from '../../../../public/vectors/research.webp';
import virus from '../../../../public/vectors/virus.webp';

const Section3 = () => {
  const { title, subtitle, step1, step2, step3, step4, step5, step6 } =
    translate.science.section3;

  return (
    <div className='w-full sm:px-8 px-40 2xl:px-56 sm:py-8 py-16 text-darker flex flex-col gap-6'>
      <div className='font-bold text-md leading-6'>{title}</div>
      <div className='font-light sm:text-sm text-base opacity-60 leading-5 whitespace-pre-line'>
        {subtitle}
      </div>
      <div className='flex flex-col sm:gap-6 gap-8'>
        <Question
          title={step1.title}
          subtitle={step1.subtitle}
          icon={dna.src}
          color='text-darker'
        />
        <Question
          title={step2.title}
          subtitle={step2.subtitle}
          icon={microscope.src}
          color='text-darker'
        />
        <Question
          title={step3.title}
          subtitle={step3.subtitle}
          icon={virus.src}
          color='text-darker'
        />
        <Question
          title={step4.title}
          subtitle={step4.subtitle}
          icon={morale.src}
          color='text-darker'
        />
        <Question
          title={step5.title}
          subtitle={step5.subtitle}
          icon={auditorium.src}
          color='text-darker'
        />
        <Question
          title={step6.title}
          subtitle={step6.subtitle}
          icon={research.src}
          color='text-darker'
        />
      </div>
    </div>
  );
};

export default Section3;
