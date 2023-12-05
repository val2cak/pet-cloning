import { Controller, useForm } from 'react-hook-form';
import { useEffect } from 'react';

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
    name,
    phoneMobile,
    email,
    message,
    petName,
    animalType,
    cloningInfo,
    preservationInfo,
    buttonText,
  } = translate.contactUs;

  const { requiredFields, phoneFormat, emailFormat, unsavedChanges } =
    translate.validations;

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
      cloningInfo: false,
      preservationInfo: false,
      animalType: 1,
    },
  });

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (isDirty) {
        event.preventDefault();
        event.returnValue = unsavedChanges;
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isDirty]);

  async function onSubmit(data: FormData) {
    try {
      await sendEmail(data);
      reset();
    } catch (error) {
      console.error(error);
    }
  }

  const isRequiredFieldMissing = Object.keys(errors).some(
    (key) => errors[key]?.type === 'required'
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='sm:py-8 py-16 sm:pl-8 pl-40 sm:pr-8 pr-32 h-full bg-primary sm:w-full w-[45%] opacity-80 text-light flex flex-col justify-center items-center gap-8'
    >
      <div className='w-full'>
        <div className='text-md font-bold uppercase flex justify-center'>
          {title}
        </div>
        {isRequiredFieldMissing && (
          <div className='text-red text-sm font-medium'>{requiredFields}</div>
        )}
      </div>
      <div className='flex flex-col w-full justify-center items-center sm:gap-12 gap-8'>
        <Input
          label={name}
          placeholder={name}
          register={register}
          name={'name'}
          required={true}
          errors={errors?.name}
        />
        <Input
          label={phoneMobile}
          placeholder={phoneMobile}
          register={register}
          name={'phoneMobile'}
          required={true}
          errors={errors?.phoneMobile}
          validations={{
            pattern: {
              value: /^[\+\d\s\-()/]+$/,
              message: phoneFormat,
            },
          }}
        />
        <Input
          label={email}
          placeholder={email}
          register={register}
          name={'email'}
          required={true}
          errors={errors?.email}
          validations={{
            pattern: {
              value: /^([\w-\.]+\u0040([\w-]+\.)+[\w-]{2,4})?$/,
              message: emailFormat,
            },
          }}
        />
        <div className='flex items-center gap-4'>
          <div className='w-1/2'>
            <Controller
              name='animalType'
              control={control}
              rules={{
                required: requiredFields,
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
          validations={{
            maxLength: {
              value: 200,
              message: 'Message must not exceed 200 characters',
            },
          }}
        />
        <div className='flex flex-col w-full items-center sm:gap-2'>
          <Checkbox
            label={cloningInfo}
            register={register}
            name='cloningInfo'
            errors={errors?.cloningInfo}
          />
          <Checkbox
            label={preservationInfo}
            register={register}
            name='preservationInfo'
            errors={errors?.preservationInfo}
          />
        </div>
      </div>
      <Button text={buttonText} type='submit' />
    </form>
  );
};

export default Form;
