import { translate } from '../../../../locales/translate';

const Section1 = () => {
  const { title, subtitle } = translate.petCloningGuide.section1;

  return (
    <div className='w-full px-8 lg:px-40 py-16 text-darker flex flex-col gap-6'>
      <div className='font-bold text-lg leading-6'>{title}</div>
      <div className='font-light text-base opacity-60 leading-5 whitespace-pre-line'>
        {subtitle}
      </div>
    </div>
  );
};

export default Section1;
