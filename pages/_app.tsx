import TagManager from 'react-gtm-module';
import Head from 'next/document';
import { Toaster } from 'react-hot-toast';

import { translate } from '../locales/translate';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const { title } = translate.home.cover;

  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

  const tagManagerArgs = {
    gtmId: GTM_ID,
  };

  TagManager.initialize(tagManagerArgs);

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='robots' content='index, follow'></meta>
        <meta name='description' content={title}></meta>
        <link rel='icon' href='./favicon.ico' />

        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
      </Head>

      <noscript
        dangerouslySetInnerHTML={{
          __html: `
          <iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>
          `,
        }}
      />

      <Toaster position='top-right' />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
