import { Controller, useForm } from 'react-hook-form';

import Button from '../../../../components/Button/Button';
import Input from '../../../../components/Input/Input';
import TextArea from '../../../../components/TextArea/TextArea';
import { translate } from '../../../../locales/translate';
import { sendEmail } from '../../../../utils/send-email';
import { animalTypes } from '../../../../constants/AnimalTypes';
import { FormData, Lookup } from '../../../../types/typeDefinitions';
import DropdownElement from '../../../../components/DropdownElement/DropdownElement';
import Checkbox from '../../../../components/Checkbox/Checkbox';

const Form = () => {
  const {
    title,
    nameAndSurname,
    phoneMobile,
    email,
    message,
    petName,
    animalType,
    moreInfo,
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
    defaultValues: {
      moreInfo: false,
    },
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
      className='py-16 pl-40 pr-32 h-full bg-primary w-[45%] opacity-80 text-light flex flex-col justify-center items-center gap-8'
    >
      <div className='text-md font-bold uppercase'>{title}</div>
      <div className='flex flex-col w-full justify-center items-center gap-8'>
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
        <div className='flex items-center gap-4'>
          <div className='w-1/2'>
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
          </div>
          <div className='w-1/2'>
            <Input
              label={petName}
              placeholder={petName}
              register={register}
              name={'petName'}
              required={true}
              errors={errors?.petName}
            />
          </div>
        </div>
        <TextArea
          label={message}
          placeholder={message}
          register={register}
          name={'message'}
          required={true}
          errors={errors?.message}
        />
        <Checkbox
          label={moreInfo}
          register={register}
          name='moreInfo'
          errors={errors?.moreInfo}
        />
      </div>
      <Button text={buttonText} type='submit' />
    </form>
  );
};

export default Form;
