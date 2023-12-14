import '../styles/globals.css';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='robots' content='index, follow'></meta>
        <link rel='icon' href='./favicon.ico' />
      </Head>
      <Toaster position='top-right' />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
