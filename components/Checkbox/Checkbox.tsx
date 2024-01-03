import { FC } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

interface Props {
  label: string;
  register: UseFormRegister<any>;
  name: string;
  errors?: FieldError;
}

const Checkbox: FC<Props> = ({ label, register, name, errors }) => {
  return (
    <div className='flex items-start justify-start gap-2 text-light w-full'>
      <label className={'text-sm font-medium hover:cursor-pointer'}>
        <input
          type='checkbox'
          className={`mr-2 ${
            errors ? 'text-red' : 'text-light'
          } hover:cursor-pointer`}
          {...register(name, { value: true })}
        />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
