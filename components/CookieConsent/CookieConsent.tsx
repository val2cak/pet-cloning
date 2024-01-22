'use client';
import { setCookie, hasCookie } from 'cookies-next';
import { useState, useEffect } from 'react';

import Button from '../Button/Button';
import { translate } from '../../locales/translate';
import cookiesImage from '../../public/images/cookie.png';

export const CookieConsent = () => {
  const { title, message, accept, decline } = translate.cookies;

  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // If no consent cookie is present, show the consent popup
    if (!hasCookie('consent')) {
      setShowConsent(true);
    }
  }, []);

  const acceptConsent = () => {
    // When user accepts consent, hide the popup and set a consent cookie
    setShowConsent(false);
    setCookie('consent', 'true');

    // Trigger GTM script load
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('updateGTMConsent'));
    }
  };
  const declineConsent = () => {
    // When user declines the consent, simply hide the popup
    setShowConsent(false);
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-darker bg-opacity-50 z-20'>
      <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 rounded-md w-full md:w-1/2 lg:w-1/3 xl:w-1/3 max-w-2xl min-w-xs pb-8 bg-primary text-light flex flex-col items-center justify-center gap-2'>
        <div className='text-3xl font-bold bg-light w-full rounded-t-md py-4 px-8 text-primary text-center'>
          <p>{title}</p>
        </div>

        <div className=''>
          <img
            src={cookiesImage.src}
            alt='Cookies'
            className='w-full max-h-32 object-contain'
          />
        </div>

        <div>
          <p className='text-center px-8'>{message}</p>
        </div>
        <div className='flex mt-2 !text-sm gap-4'>
          <Button
            handleOnClick={acceptConsent}
            text={accept}
            className={'text-sm !px-6 !py-2 bg-light text-primary'}
          />
          <Button
            handleOnClick={declineConsent}
            text={decline}
            className={'text-sm !px-6 !py-2'}
          />
        </div>
      </div>
    </div>
  );
};
