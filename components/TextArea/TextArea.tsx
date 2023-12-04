import { FC } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

interface Props {
  label: string;
  placeholder: string;
  register: UseFormRegister<any>;
  name: string;
  required: boolean;
  errors?: FieldError;
}

const TextArea: FC<Props> = ({
  label,
  placeholder,
  register,
  name,
  required,
  errors,
}) => {
  return (
    <div className='flex flex-col items-start justify-center gap-2 text-light flex-1 w-full'>
      <div className={`text-sm font-bold uppercase ${errors && 'text-red'}`}>
        {label} *
      </div>
      <textarea
        className={`w-full border-b focus:outline-none box-border m-0 pl-6 pb-2 bg-transparent text-sm font-normal placeholder:text-light placeholder:opacity-70 placeholder:text-sm placeholder:font-normal ${
          errors ? 'border-red' : 'border-light'
        }`}
        placeholder={placeholder}
        {...register(name, { required: required })}
      />
    </div>
  );
};

export default TextArea;
