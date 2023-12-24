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
      {icon && <img src={icon} className='w-10 h-10' alt='Number' />}
      <div className='flex flex-col justify-start items-start gap-1'>
        {title && (
          <span className='sm:text-sm text-base font-medium'>{title}</span>
        )}
        <span
          className={`sm:text-sm text-base leading-4 font-light ${
            color === 'text-darker' ? 'opacity-60' : 'opacity-80'
          }`}
        >
          {subtitle}
        </span>
      </div>
    </div>
  );
};

export default Point;
