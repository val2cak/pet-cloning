import { translate } from '../../../../locales/translate';
import seven from '../../../../public/vectors/7-light.png';
import eight from '../../../../public/vectors/8-light.png';
import nine from '../../../../public/vectors/9-light.png';
import ten from '../../../../public/vectors/10-light.png';
import eleven from '../../../../public/vectors/11-light.png';
import twelve from '../../../../public/vectors/12-light.png';
import Question from '../../../../components/Question/Question';

const Section2 = () => {
  const { q7, q8, q9, q10, q11, q12 } = translate.qA;

  return (
    <div className='w-full sm:px-8 px-40 2xl:px-56 sm:py-8 py-16 bg-primary text-light flex flex-col gap-6'>
      <div className='flex flex-col sm:gap-6 gap-8'>
        <Question title={q7.title} subtitle={q7.subtitle} icon={seven.src} />
        <Question title={q8.title} subtitle={q8.subtitle} icon={eight.src} />
        <Question title={q9.title} subtitle={q9.subtitle} icon={nine.src} />
        <Question title={q10.title} subtitle={q10.subtitle} icon={ten.src} />
        <Question title={q11.title} subtitle={q11.subtitle} icon={eleven.src} />
        <Question title={q12.title} subtitle={q12.subtitle} icon={twelve.src} />
      </div>
    </div>
  );
};

export default Section2;
