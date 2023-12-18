import { FC, ReactNode } from 'react';

interface Props {
  icon?: string;
  title?: string;
  subtitle: string | ReactNode;
  color?: string;
}

const Point: FC<Props> = ({ icon, title, subtitle, color }) => {
  return (
    <div
      className={`flex items-start gap-3 sm:whitespace-normal whitespace-pre-line ${
        color ? color : 'text-light'
      }`}
    >
      {icon && <img src={icon} className='w-12 h-12' alt='Number' />}
      <div className='flex flex-col justify-start items-start gap-4'>
        {title && <span className='text-base font-medium'>{title}</span>}
        <span className='text-sm font-light opacity-90'>{subtitle}</span>
      </div>
    </div>
  );
};

export default Point;
