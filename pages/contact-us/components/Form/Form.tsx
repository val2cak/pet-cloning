import { useForm } from 'react-hook-form';

import Button from '../../../../components/Button/Button';
import Input from '../../../../components/Input/Input';
import TextArea from '../../../../components/TextArea/TextArea';
import { translate } from '../../../../locales/translate';
import { sendEmail } from '../../../../utils/send-email';

export type FormData = {
  nameAndSurname: string;
  phoneMobile: string;
  email: string;
  inquiry: string;
};

const Form = () => {
  const { title, nameAndSurname, phoneMobile, email, inquiry, buttonText } =
    translate.contactUs;

  const { register, handleSubmit, reset } = useForm<FormData>();

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
      className='py-16 px-40 h-full bg-primary w-2/5 opacity-80 text-light flex flex-col justify-center items-center gap-12'
    >
      <div className='text-md font-bold uppercase'>{title}</div>
      <div className='flex flex-col w-full justify-center items-center gap-8'>
        <Input
          label={nameAndSurname}
          placeholder={nameAndSurname}
          register={register}
          name={'nameAndSurname'}
          required={true}
        />
        <Input
          label={phoneMobile}
          placeholder={phoneMobile}
          register={register}
          name={'phoneMobile'}
          required={true}
        />
        <Input
          label={email}
          placeholder={email}
          register={register}
          name={'email'}
          required={true}
        />
        <TextArea
          label={inquiry}
          placeholder={inquiry}
          register={register}
          name={'inquiry'}
          required={true}
        />
      </div>
      <Button text={buttonText} type='submit' />
    </form>
  );
};

export default Form;
