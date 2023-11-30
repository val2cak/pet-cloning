import Link from 'next/link';
import { FC } from 'react';

import { translate } from '../../locales/translate';
import arrowIcon from '../../assets/icons/arrow.svg';

interface Props {
  image: string;
  title: string;
  subtitle: string;
  link?: string;
}

const Card: FC<Props> = ({ image, title, subtitle, link }) => {
  return (
    <div className='flex flex-col items-start gap-8 text-darker w-full'>
      <img src={image} className='w-full h-[13.75rem]' />
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
