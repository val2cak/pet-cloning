import { translate } from '../../../locales/translate';

const Section4 = () => {
  const { text } = translate.home.section4;

  return (
    <div className='w-full sm:px-8 px-40 sm:py-8 py-16 flex sm:flex-col flex-row sm:gap-4 gap-16 justify-between bg-primary'>
      <div className='sm:text-sm text-base font-medium text-light whitespace-pre-line'>
        {text}
      </div>
      <div className='sm:bg-homeSection4Mobile bg-homeSection4 bg-center bg-contain bg-no-repeat sm:h-[12.9rem] h-[17.4rem] sm:w-full w-[40rem]'></div>
    </div>
  );
};

export default Section4;
