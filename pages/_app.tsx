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
      </Head>
      <Toaster position='top-right' />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
