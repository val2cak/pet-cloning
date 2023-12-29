import Link from 'next/link';
import { useState } from 'react';

import { locale, translate } from '../../locales/translate';
import whatsappIcon from '../../public/icons/whatsApp.svg';
import twitterIcon from '../../public/icons/twitter.svg';
import instagramIcon from '../../public/icons/instagram.svg';
import { Language } from '../../types/typeDefinitions';
import { setLocaleToStorage } from '../../services/localStorage';
import LanguageDropdown from '../LanguageDropdown/LanguageDropdown';
import { languages } from '../../constants/Languages';

const Footer: React.FC = () => {
  const { petCloning, contactUs, language } = translate.footer;

  const [currentLanguage, setCurrentLanguage] = useState(locale);

  return (
    <footer className='bg-darker text-light sm:px-8 px-40 2xl:px-56 py-8 absolute w-full bottom-0 sm:h-56 h-48'>
      <div className='container mx-auto flex flex-col items-center justify-between h-full sm:gap-5 gap-10'>
        <div className='w-full flex sm:flex-col flex-row justify-between sm:gap-3'>
          <span className='text-base font-bold'>{petCloning}</span>
          <div className='flex'>
            <div className='text-sm text-light font-medium flex gap-6'>
              <span className='text-sm'>
                <Link
                  href='/contact-us'
                  className='opacity-50 hover:opacity-100'
                >
                  {contactUs}
                </Link>
              </span>
            </div>
            <div className='w-32'>
              <LanguageDropdown
                placeholder={language}
                onSelect={(item: Language) => {
                  setLocaleToStorage(item.locale);
                  setCurrentLanguage(item.locale);
                  window.location.reload();
                }}
                items={languages}
                selectedItem={languages.find(
                  (lang) => lang.locale === currentLanguage
                )}
              />
            </div>
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
              <img src={whatsappIcon.src} className='w-6 h-6' alt='Whatsapp' />
            </a>

            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              className='opacity-50 hover:opacity-100'
            >
              <img src={twitterIcon.src} className='w-6 h-6' alt='Twitter' />
            </a>

            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              className='opacity-50 hover:opacity-100'
            >
              <img
                src={instagramIcon.src}
                className='w-6 h-6'
                alt='Instagram'
              />
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
