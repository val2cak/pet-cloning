import { FC } from 'react';

interface Props {
  icon?: string;
  title: string;
  subtitle: string;
}

const Point: FC<Props> = ({ icon, title, subtitle }) => {
  return (
    <div className='flex items-start gap-8 text-light'>
      {icon && <img src={icon} className='w-12 h-12' />}
      <div className='flex flex-col items-start gap-4 w-80'>
        <span className='text-base font-medium'>{title}</span>
        <span className='text-xs font-light opacity-80'>{subtitle}</span>
      </div>
    </div>
  );
};

export default Point;
