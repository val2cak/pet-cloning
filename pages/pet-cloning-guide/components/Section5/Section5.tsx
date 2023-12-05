import { translate } from '../../../../locales/translate';

import image from '../../../../assets/images/cloning-guide-section-5.png';

const Section5 = () => {
  const { text } = translate.petCloningGuide.section5;

  return (
    <div className='w-full sm:px-8 px-40 sm:py-8 py-16 flex sm:flex-col flex-row sm:gap-4 gap-16 justify-between bg-primary'>
      <div className='sm:text-sm text-base font-medium text-light whitespace-pre-line leading-5'>
        {text}
      </div>
      <img src={image.src} className='sm:h-fit h-[16.7rem] w-[22.8rem]' />
    </div>
  );
};

export default Section5;
