import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { MoonLoader } from 'react-spinners';

import Button from '../../../../components/Button/Button';
import Input from '../../../../components/Input/Input';
import TextArea from '../../../../components/TextArea/TextArea';
import { locale, translate } from '../../../../locales/translate';
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
    country,
    message,
    petName,
    animalType,
    cloningInfo,
    preservationInfo,
    buttonText,
    requestSuccess,
    requestError,
  } = translate.contactUs;

  const { requiredFields, phoneFormat, emailFormat } = translate.validations;

  const {
    control,
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      cloningInfo: false,
      preservationInfo: false,
      animalType: 1,
    },
  });

  async function onSubmit(data: FormData) {
    try {
      await sendEmail({ ...data, language: locale });
      reset();
      toast.success(requestSuccess);
    } catch (error) {
      console.error(error);
      toast.error(requestError);
    }
  }

  const isRequiredFieldMissing = Object.keys(errors).some(
    (key) => errors[key]?.type === 'required'
  );

  return (
    <>
      {isSubmitting && (
        <div className='h-full bg-primary sm:w-full lg:w-2/3 w-[46%] opacity-80 text-light flex flex-col justify-center items-center'>
          <MoonLoader color='#F8F9FA' loading={isSubmitting} />
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='sm:py-8 py-12 sm:pl-8 pl-40 2xl:pl-56 sm:pr-8 pr-32 h-full bg-primary sm:w-full lg:w-2/3 w-[46%] opacity-80 text-light flex flex-col justify-center items-center gap-6'
      >
        <div className='w-full'>
          <div className='text-base font-bold uppercase flex justify-center'>
            {title}
          </div>
          {isRequiredFieldMissing && (
            <div className='text-red text-sm font-medium'>{requiredFields}</div>
          )}
        </div>
        <div className='flex flex-col w-full h-full justify-between items-center sm:gap-8 gap-6'>
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
          <div className='w-full flex sm:flex-col items-center justify-between sm:gap-8 gap-4'>
            <div className='sm:w-full w-1/2'>
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
            </div>
            <div className='sm:w-full w-1/2'>
              <Input
                label={country}
                placeholder={country}
                register={register}
                name={'country'}
                required={true}
                errors={errors?.country}
              />
            </div>
          </div>
          <div className='w-full flex sm:flex-col items-center justify-between sm:gap-8 gap-4'>
            <div className='sm:w-full w-1/2'>
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
            <div className='sm:w-full w-1/2'>
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
        <Button text={buttonText} type={'submit'} />
      </form>
    </>
  );
};

export default Form;
