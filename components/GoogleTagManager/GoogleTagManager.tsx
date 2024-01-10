import { useEffect } from 'react';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

const GoogleTagManager = () => {
  useEffect(() => {
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

      var f = d.getElementsByTagName(s)[0];
      var j: HTMLScriptElement = d.createElement('script');

      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i;

      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', GTM_ID);
  }, []);

  return null;
};

export default GoogleTagManager;
