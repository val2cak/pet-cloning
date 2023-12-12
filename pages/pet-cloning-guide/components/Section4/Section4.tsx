import Link from 'next/link';

import Point from '../../../../components/Point/Point';
import { translate } from '../../../../locales/translate';
import support from '../../../../public/icons/support.svg';
import transport from '../../../../public/icons/transport.svg';

const Section4 = () => {
  const { title, point1, point2 } = translate.petCloningGuide.section4;
  const { contactUs } = translate.navigation;

  return (
    <div className='w-full sm:px-8 px-40 2xl:px-56 sm:pb-8 pb-16 text-dark flex flex-col gap-6'>
      <div className='font-medium sm:text-md text-lg leading-6'>{title}</div>
      <div className='grid grid-cols-3 sm:grid-cols-1 sm:gap-6 gap-8'>
        <Point
          title={point1.title}
          subtitle={
            <span>
              {point1.subtitle}{' '}
              <Link href='/contact-us' className='font-bold lowercase'>
                {contactUs}
              </Link>{' '}
              {point1.subtitle_1}
            </span>
          }
          icon={support.src}
          color='text-dark'
        />
        <Point
          title={point2.title}
          subtitle={point2.subtitle}
          icon={transport.src}
          color='text-dark'
        />
      </div>
    </div>
  );
};

export default Section4;
