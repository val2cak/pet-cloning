import { translate } from '../../../locales/translate';

const Section1 = () => {
  const { title, subtitle } = translate.home.section1;

  return (
    <div className='w-full px-40 py-16 text-darker flex flex-col gap-6'>
      <div className='font-bold text-lg leading-6'>{title}</div>
      <div className='font-light text-base opacity-80 leading-4 whitespace-pre-line'>
        {subtitle}
      </div>
    </div>
  );
};

export default Section1;
