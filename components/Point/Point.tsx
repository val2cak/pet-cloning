import { FC } from 'react';
import { IconType } from 'react-icons';

interface Props {
  Icon?: IconType;
  title: string;
  subtitle: string;
}

const Point: FC<Props> = ({ Icon, title, subtitle }) => {
  return (
    <div className='flex items-start gap-8 text-light'>
      {Icon && <Icon className='text-5xl' />}
      <div className='flex flex-col items-start gap-4'>
        <span className='text-base font-medium'>{title}</span>
        <span className='text-xs font-light opacity-80'>{subtitle}</span>
      </div>
    </div>
  );
};

export default Point;
