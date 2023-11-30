import { translate } from '../../../locales/translate';

import image from '../../../assets/images/home-section-4.png';

const Section4 = () => {
  const { text } = translate.home.section4;

  return (
    <div className='w-full px-40 py-16 flex gap-16 justify-between bg-primary'>
      <div className='text-base font-medium text-light'>{text}</div>
      <img src={image.src} />
    </div>
  );
};

export default Section4;
