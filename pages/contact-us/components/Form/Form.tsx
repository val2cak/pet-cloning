import { Controller, useForm } from 'react-hook-form';

import Button from '../../../../components/Button/Button';
import Input from '../../../../components/Input/Input';
import TextArea from '../../../../components/TextArea/TextArea';
import { translate } from '../../../../locales/translate';
import { sendEmail } from '../../../../utils/send-email';
import { animalTypes } from '../../../../constants/AnimalTypes';
import { Lookup } from '../../../../types/typeDefinitions';
import DropdownElement from '../../../../components/DropdownElement/DropdownElement';

export type FormData = {
  nameAndSurname: string;
  phoneMobile: string;
  email: string;
  petName: string;
  animalType: number;
  message: string;
};

const Form = () => {
  const {
    title,
    nameAndSurname,
    phoneMobile,
    email,
    message,
    petName,
    animalType,
    buttonText,
  } = translate.contactUs;

  const { requiredField } = translate.common;

  const {
    control,
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isDirty },
  } = useForm<FormData>({
    mode: 'onChange',
  });

  async function onSubmit(data: FormData) {
    try {
      await sendEmail(data);
      reset();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='py-16 px-40 h-full bg-primary w-2/5 opacity-80 text-light flex flex-col justify-center items-center gap-8'
    >
      <div className='text-md font-bold uppercase'>{title}</div>
      <div className='flex flex-col w-full justify-center items-center gap-6'>
        <Input
          label={nameAndSurname}
          placeholder={nameAndSurname}
          register={register}
          name={'nameAndSurname'}
          required={true}
          errors={errors?.nameAndSurname}
        />
        <Input
          label={phoneMobile}
          placeholder={phoneMobile}
          register={register}
          name={'phoneMobile'}
          required={true}
          errors={errors?.phoneMobile}
        />
        <Input
          label={email}
          placeholder={email}
          register={register}
          name={'email'}
          required={true}
          errors={errors?.email}
        />
        <Controller
          name='animalType'
          control={control}
          rules={{
            required: requiredField,
          }}
          render={({ field }) => (
            <DropdownElement
              label={animalType}
              placeholder={animalType}
              handleSelect={(item: Lookup) => {
                field.onChange(item.id);
              }}
              data={animalTypes}
              selectedId={getValues('animalType')}
              errors={errors?.animalType}
            />
          )}
        />
        <Input
          label={petName}
          placeholder={petName}
          register={register}
          name={'petName'}
          required={true}
          errors={errors?.petName}
        />
        <TextArea
          label={message}
          placeholder={message}
          register={register}
          name={'message'}
          required={true}
          errors={errors?.message}
        />
      </div>
      <Button text={buttonText} type='submit' />
    </form>
  );
};

export default Form;
