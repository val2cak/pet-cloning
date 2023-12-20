import Link from 'next/link';
import { translate } from '../../../../locales/translate';

const Section1 = () => {
  const { title, subtitle, subtitle_1 } = translate.petCloningGuide.section1;
  const { contactUs } = translate.navigation;

  return (
    <div className='w-full sm:px-8 px-40 2xl:px-56 sm:py-8 py-16 text-darker flex flex-col gap-6'>
      <div className='font-bold sm:text-md text-lg leading-6'>{title}</div>
      <div className='font-light sm:text-sm text-base opacity-60 leading-5 whitespace-pre-line'>
        {subtitle}{' '}
        <Link href='/contact-us' className='font-bold lowercase'>
          {contactUs}
        </Link>{' '}
        {subtitle_1}
      </div>
    </div>
  );
};

export default Section1;
