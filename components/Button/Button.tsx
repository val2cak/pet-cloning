import { FC } from 'react';

interface Props {
  text: string;
}

const Button: FC<Props> = ({ text }) => {
  return (
    <button className='flex px-9 py-3 justify-center items-center gap-2.5 rounded-md border border-solid border-light text-light'>
      {text}
    </button>
  );
};

export default Button;
