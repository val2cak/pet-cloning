import { FC } from 'react';

interface Props {
  icon?: string;
  title?: string;
  subtitle: string;
  color?: string;
}

const Point: FC<Props> = ({ icon, title, subtitle, color }) => {
  return (
    <div
      className={`flex items-start gap-7 whitespace-pre-line ${
        color ? color : 'text-light'
      }`}
    >
      {icon && <img src={icon} className='w-12 h-12' />}
      <div className='flex flex-col justify-start items-start gap-4 w-80'>
        {title && <span className='text-base font-medium'>{title}</span>}
        <span className='text-xs font-light opacity-80'>{subtitle}</span>
      </div>
    </div>
  );
};

export default Point;
