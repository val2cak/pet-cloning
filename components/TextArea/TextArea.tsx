import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface Props {
  label: string;
  placeholder: string;
  register: UseFormRegister<any>;
  name: string;
  required: boolean;
}

const TextArea: FC<Props> = ({
  label,
  placeholder,
  register,
  name,
  required,
}) => {
  return (
    <div className='flex flex-col items-start justify-center gap-2 text-light flex-1'>
      <div className='text-sm font-bold uppercase'>{label} *</div>
      <textarea
        className='border-b border-light focus:outline-none pl-8 bg-transparent text-sm font-normal placeholder:text-light placeholder:opacity-70 placeholder:text-sm placeholder:font-normal'
        placeholder={placeholder}
        {...register(name, { required: required })}
      />
    </div>
  );
};

export default TextArea;
