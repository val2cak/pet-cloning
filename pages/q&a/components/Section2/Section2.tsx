import { translate } from '../../../../locales/translate';
import Question from '../../../../components/Question/Question';
import question from '../../../../public/vectors/question-light.webp';

const Section2 = () => {
  const { q7, q8, q9, q10, q11, q12 } = translate.qA;

  return (
    <div className='w-full sm:px-8 px-40 2xl:px-56 sm:py-8 py-16 bg-primary text-light flex flex-col gap-6'>
      <div className='flex flex-col sm:gap-6 gap-8'>
        <Question title={q7.title} subtitle={q7.subtitle} icon={question.src} />
        <Question title={q8.title} subtitle={q8.subtitle} icon={question.src} />
        <Question title={q9.title} subtitle={q9.subtitle} icon={question.src} />
        <Question
          title={q10.title}
          subtitle={q10.subtitle}
          icon={question.src}
        />
        <Question
          title={q11.title}
          subtitle={q11.subtitle}
          icon={question.src}
        />
        <Question
          title={q12.title}
          subtitle={q12.subtitle}
          icon={question.src}
        />
      </div>
    </div>
  );
};

export default Section2;
