import React, { FC, ReactNode, useState } from 'react';

interface Props {
  icon?: string;
  title?: string;
  subtitle: string | ReactNode;
  color?: string;
}

const Question: FC<Props> = ({ icon, title, subtitle, color }) => {
  const [isSubtitleVisible, setIsSubtitleVisible] = useState(false);

  const handleClick = () => {
    setIsSubtitleVisible(!isSubtitleVisible);
  };

  return (
    <div
      className={`flex items-start justify-start gap-3 sm:whitespace-normal whitespace-pre-line ${
        color ? color : 'text-light border-light border-opacity-30'
      } rounded-lg px-4 ${
        isSubtitleVisible ? 'py-7' : 'py-4'
      } border shadow-md transition-all duration-300 ease-in-out cursor-pointer`}
      onClick={handleClick}
    >
      {icon && (
        <img src={icon} className='w-10 h-10' alt={title} loading='lazy' />
      )}
      <div
        className={`flex flex-col items-start gap-1 ${
          isSubtitleVisible ? 'justify-start' : 'justify-center sm:h-fit h-10'
        }`}
      >
        {title && (
          <span className='sm:text-sm text-base font-medium'>{title}</span>
        )}
        {isSubtitleVisible && (
          <span
            className={`sm:text-sm text-base leading-4 font-light ${
              color === 'text-darker' ? 'opacity-60' : 'opacity-80'
            } transition-opacity duration-300 ease-in-out`}
          >
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
};

export default Question;
