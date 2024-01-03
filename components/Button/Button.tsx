import { FC } from 'react';

interface Props {
  text: string;
  type: 'button' | 'submit' | 'reset';
}

const Button: FC<Props> = ({ text, type }) => {
  return (
    <button
      type={type}
      className='flex sm:px-4 px-9 py-3 justify-center items-center gap-2.5 rounded-md border-2 border-solid border-light text-light uppercase text-base font-bold'
    >
      {text}
    </button>
  );
};

export default Button;
