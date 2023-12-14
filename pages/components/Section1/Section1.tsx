import { translate } from '../../../locales/translate';

import dog from '../../../public/icons/price_dog.svg';
import cat from '../../../public/icons/price_cat.svg';
import horse from '../../../public/icons/price_horse.svg';

const Section1 = () => {
  const { title, subtitle, subtitle_1, prices } = translate.home.section1;

  return (
    <div className='w-full sm:px-8 px-40 2xl:px-56 sm:py-8 py-16 text-darker flex flex-col gap-6'>
      <div className='font-bold sm:text-md text-lg sm:leading-4 leading-6'>
        {title}
      </div>
      <div className='font-light sm:text-sm text-base opacity-60 leading-4 whitespace-pre-line'>
        {subtitle}
      </div>
      <div className='bg-primary rounded-lg text-light font-medium flex justify-between items-center sm:px-2 px-14 py-2'>
        <span className='flex sm:gap-1 gap-3 items-center sm:text-xs text-base'>
          <img src={dog.src} alt='Dog' /> {prices.dog}
        </span>
        <span className='flex sm:gap-1 gap-3 items-center sm:text-xs text-base'>
          <img src={cat.src} alt='Cat' /> {prices.cat}
        </span>
        <span className='flex sm:gap-1 gap-3 items-center sm:text-xs text-base'>
          <img src={horse.src} alt='Horse' /> {prices.horse}
        </span>
      </div>
      <div className='font-light sm:text-sm text-base opacity-60 leading-4 whitespace-pre-line'>
        {subtitle_1}
      </div>
    </div>
  );
};

export default Section1;
