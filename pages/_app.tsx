import '../styles/globals.css';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import { translate } from '../locales/translate';

function MyApp({ Component, pageProps }) {
  const { title } = translate.home.cover;

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
            })(window,document,'script','dataLayer','GTM-5LTK4TCG');
            `,
          }}
        />
      </Head>
      <Toaster position='top-right' />

      <noscript
        dangerouslySetInnerHTML={{
          __html: `
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5LTK4TCG"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>
          `,
        }}
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
