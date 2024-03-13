import { translate } from '../../../../locales/translate';

const OurValues = () => {
  const { title, text } = translate.aboutUs.ourValues;

  return (
    <div className='w-full sm:px-8 px-40 2xl:px-56 sm:py-8 py-16 sm:pt-20 pt-24 text-darker flex flex-col gap-6'>
      <div className='font-bold text-md sm:leading-4 leading-6'>{title}</div>
      <div className='font-light sm:text-sm text-base opacity-60 sm:leading-4 leading-5 whitespace-pre-line'>
        {text}
      </div>
    </div>
  );
};

export default OurValues;
