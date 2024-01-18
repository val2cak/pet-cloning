'use client';
import { setCookie, hasCookie } from 'cookies-next';
import { useState, useEffect } from 'react';

import Button from '../Button/Button';
import { translate } from '../../locales/translate';

export const CookieConsent = () => {
  const { message, accept, decline } = translate.cookies;

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
    <div className='z-20 rounded-md ml-0 fixed bottom-0 left-1/2 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/3 max-w-2xl min-w-xs p-8 m-4 bg-primary text-light flex flex-col items-center justify-center transform -translate-x-1/2 gap-2'>
      <div>
        <p className='text-center'>{message}</p>
      </div>
      <div className='flex mt-2 !text-sm gap-4'>
        <Button
          handleOnClick={acceptConsent}
          text={accept}
          className={'text-sm !px-6 !py-2'}
        />
        <Button
          handleOnClick={declineConsent}
          text={decline}
          className={'text-sm !px-6 !py-2'}
        />
      </div>
    </div>
  );
};
