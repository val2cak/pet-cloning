import Link from 'next/link';
import { FC } from 'react';
import { IoIosArrowRoundForward as ArrowIcon } from 'react-icons/io';

interface Props {
  image: string;
  title: string;
  subtitle: string;
  link?: string;
}

const Point: FC<Props> = ({ image, title, subtitle, link }) => {
  return (
    <div className='flex items-start gap-8 text-darker'>
      <img src={image} width={'21.875rem'} height={'13.75rem'} />
      <div className='flex flex-col items-start gap-4'>
        <span className='text-base font-medium'>{title}</span>
        <span className='text-xs font-light opacity-80'>{subtitle}</span>
        {link && (
          <Link
            className='text-xs font-medium uppercase flex gap-2'
            href={link}
          >
            learn more <ArrowIcon className='text-lg' />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Point;
