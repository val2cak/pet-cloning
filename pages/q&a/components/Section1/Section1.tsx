import Question from '../../../../components/Question/Question';
import { translate } from '../../../../locales/translate';
import question from '../../../../public/vectors/question-dark.png';

const Section1 = () => {
  const { title, q1, q2, q3, q4, q5, q6 } = translate.qA;

  return (
    <div className='w-full sm:px-8 px-40 2xl:px-56 sm:py-8 py-16 text-darker flex flex-col gap-6 whitespace-pre-line'>
      <div className='font-bold sm:text-md text-lg leading-6'>{title}</div>
      <div className='flex flex-col sm:gap-6 gap-8'>
        <Question
          title={q1.title}
          subtitle={q1.subtitle}
          icon={question.src}
          color='text-darker'
        />
        <Question
          title={q2.title}
          subtitle={q2.subtitle}
          icon={question.src}
          color='text-darker'
        />
        <Question
          title={q3.title}
          subtitle={q3.subtitle}
          icon={question.src}
          color='text-darker'
        />
        <Question
          title={q4.title}
          subtitle={q4.subtitle}
          icon={question.src}
          color='text-darker'
        />
        <Question
          title={q5.title}
          subtitle={q5.subtitle}
          icon={question.src}
          color='text-darker'
        />
        <Question
          title={q6.title}
          subtitle={q6.subtitle}
          icon={question.src}
          color='text-darker'
        />
      </div>
    </div>
  );
};

export default Section1;
