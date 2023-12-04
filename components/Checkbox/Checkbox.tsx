import { FC } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

interface Props {
  label: string;
  register: UseFormRegister<any>;
  name: string;
  required: boolean;
  errors?: FieldError;
}

const Checkbox: FC<Props> = ({ label, register, name, required, errors }) => {
  return (
    <div className='flex items-start justify-start gap-2 text-light w-full'>
      <label className={'text-xs font-bold uppercase hover:cursor-pointer'}>
        <input
          type='checkbox'
          className={`mr-2 ${
            errors ? 'text-red' : 'text-light'
          } hover:cursor-pointer`}
          {...register(name, { required: required })}
        />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
