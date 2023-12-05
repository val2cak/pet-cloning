import { translate } from '../../../../locales/translate';

import image from '../../../../assets/images/cloning-guide-section-5.png';

const Section5 = () => {
  const { text } = translate.petCloningGuide.section5;

  return (
    <div className='w-full px-8 lg:px-40 py-16 flex gap-16 justify-between bg-primary'>
      <div className='text-base font-medium text-light whitespace-pre-line leading-5'>
        {text}
      </div>
      <img src={image.src} className='h-[16.7rem] w-[22.8rem]' />
    </div>
  );
};

export default Section5;
