import Link from 'next/link';

import { translate } from '../../locales/translate';
import whatsappIcon from '../../assets/icons/whatsApp.svg';
import twitterIcon from '../../assets/icons/twitter.svg';
import instagramIcon from '../../assets/icons/instagram.svg';

const Footer: React.FC = () => {
  return (
    <footer className='bg-darker text-light px-8 lg:px-40 py-8 absolute w-full bottom-0 sm:h-56 h-48'>
      <div className='container mx-auto flex flex-col items-center justify-between h-full sm:gap-5 gap-10'>
        <div className='w-full flex sm:flex-col flex-row justify-between sm:gap-3'>
          <span className='text-base font-bold'>
            {translate.footer.petCloning}
          </span>
          <div className='sm:text-xs text-sm text-light font-medium flex gap-6'>
            <span>
              <Link href='/about-us' legacyBehavior>
                <a className='opacity-50 hover:opacity-100'>
                  {translate.footer.aboutUs}
                </a>
              </Link>
            </span>
            <span className='sm:text-xs text-sm'>
              <Link href='/contact-us' legacyBehavior>
                <a className='opacity-50 hover:opacity-100'>
                  {translate.footer.contactUs}
                </a>
              </Link>
            </span>
          </div>
        </div>

        <div className='border-b border-light opacity-20 w-full'></div>

        <div className='w-full flex sm:flex-col flex-row sm:gap-3 justify-between text-light font-medium'>
          <div className='text-md text-light font-medium flex gap-3'>
            <a
              href='https://whatsapp.com'
              target='_blank'
              rel='noopener noreferrer'
              className='opacity-50 hover:opacity-100'
            >
              <img src={whatsappIcon.src} className='w-6 h-6' />
            </a>

            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              className='opacity-50 hover:opacity-100'
            >
              <img src={twitterIcon.src} className='w-6 h-6' />
            </a>

            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              className='opacity-50 hover:opacity-100'
            >
              <img src={instagramIcon.src} className='w-6 h-6' />
            </a>
          </div>

          <div>
            <span className='opacity-50 text-sm'>
              {translate.footer.copyright}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
