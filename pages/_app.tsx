import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import { translate } from '../locales/translate';
import * as ga from '../lib/ga';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const { title } = translate.home.cover;

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

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
