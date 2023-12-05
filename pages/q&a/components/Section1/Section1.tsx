import Point from '../../../../components/Point/Point';
import { translate } from '../../../../locales/translate';
import one from '../../../../assets/vectors/1-dark.png';
import two from '../../../../assets/vectors/2-dark.png';
import three from '../../../../assets/vectors/3-dark.png';
import four from '../../../../assets/vectors/4-dark.png';
import five from '../../../../assets/vectors/5-dark.png';
import six from '../../../../assets/vectors/6-dark.png';

const Section1 = () => {
  const { title, q1, q2, q3, q4, q5, q6 } = translate.qA;

  return (
    <div className='w-full sm:px-8 px-40 2xl:px-56 sm:py-8 py-16 text-darker flex flex-col gap-6 whitespace-pre-line'>
      <div className='font-bold sm:text-md text-lg leading-6'>{title}</div>
      <div className='flex sm:flex-col flex-row sm:gap-6 gap-8 flex-wrap'>
        <Point
          title={q1.title}
          subtitle={q1.subtitle}
          icon={one.src}
          color='text-darker'
        />
        <Point
          title={q2.title}
          subtitle={q2.subtitle}
          icon={two.src}
          color='text-darker'
        />
        <Point
          title={q3.title}
          subtitle={q3.subtitle}
          icon={three.src}
          color='text-darker'
        />
        <Point
          title={q4.title}
          subtitle={q4.subtitle}
          icon={four.src}
          color='text-darker'
        />
        <Point
          title={q5.title}
          subtitle={q5.subtitle}
          icon={five.src}
          color='text-darker'
        />
        <Point
          title={q6.title}
          subtitle={q6.subtitle}
          icon={six.src}
          color='text-darker'
        />
      </div>
    </div>
  );
};

export default Section1;
