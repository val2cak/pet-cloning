import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import { GoogleTagManager } from '@next/third-parties/google';

import { translate } from '../locales/translate';

import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
  const { title } = translate.home.cover;

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='robots' content='index, follow'></meta>
        <meta name='description' content={title}></meta>
        <link rel='icon' href='./favicon.ico' />

        <GoogleTagManager gtmId='GTM-5LTK4TCG' />
      </Head>

      <Toaster position='top-right' />

      <Component {...pageProps} />
    </>
  );
};

export default App;
