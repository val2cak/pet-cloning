import { translate } from '../../../locales/translate';

const Cover = () => {
  const { title, subtitle } = translate.home.cover;

  return (
    <div className='bg-homeCover bg-cover w-full h-[550px] z-1'>
      <div className='w-full px-40 pt-56 flex flex-col gap-4'>
        <div className='uppercase text-light text-5xl font-bold w-[60%] leading-10'>
          {title}
        </div>
        <div className='uppercase text-light text-base font-medium'>
          {subtitle}
        </div>
      </div>
    </div>
  );
};

export default Cover;
