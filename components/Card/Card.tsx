import Link from 'next/link';
import { FC } from 'react';

import { translate } from '../../locales/translate';
import arrowIcon from '../../public/icons/arrow.svg';

interface Props {
  image: string;
  title: string;
  subtitle: string;
  link?: string;
}

const Card: FC<Props> = ({ image, title, subtitle, link }) => {
  return (
    <div className='flex flex-col items-start sm:gap-4 gap-8 text-darker w-[16.876rem] sm:w-full'>
      <img src={image} className='w-[16.876rem] h-[12.5rem] sm:w-full' />
      <div className='flex flex-col items-start gap-4'>
        <span className='text-base font-medium'>{title}</span>
        <span className='text-xs font-light opacity-80'>{subtitle}</span>
        {link && (
          <Link
            className='text-sm font-medium uppercase flex gap-2 items-center'
            href={link}
          >
            {translate.common.learnMore}
            <img src={arrowIcon.src} className='w-6 h-6' />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
