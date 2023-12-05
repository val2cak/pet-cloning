import { translate } from '../../../locales/translate';

const Section1 = () => {
  const { title, subtitle } = translate.home.section1;

  return (
    <div className='w-full sm:px-8 px-40 sm:py-8 py-16 text-darker flex flex-col gap-6'>
      <div className='font-bold sm:text-base text-lg sm:leading-4 leading-6'>
        {title}
      </div>
      <div className='font-light sm:text-xs text-base opacity-60 leading-4 whitespace-pre-line'>
        {subtitle}
      </div>
    </div>
  );
};

export default Section1;
