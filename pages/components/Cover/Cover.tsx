import { translate } from '../../../locales/translate';

const Cover = () => {
  const { title } = translate.home.cover;

  return (
    <div className='sm:bg-homeCoverMobile bg-homeCover bg-cover w-full h-[550px] z-1'>
      <div className='w-full sm:px-8 px-40 2xl:px-56 pt-56 flex flex-col gap-4'>
        <div className='uppercase text-light sm:text-lg text-5xl font-bold sm:w-[90%] w-[60%] sm:leading-6 leading-10'>
          {title}
        </div>
      </div>
    </div>
  );
};

export default Cover;
