import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Navbar } from '../components/layout';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const [navbarOff, setNavbarOff] = useState(false);

  useEffect(() => {
    const doc = window.document.documentElement;
    let top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

    window.addEventListener('scroll', () => {
      top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

      if (top > 75) {
        setNavbarOff(true);
      } else {
        setNavbarOff(false);
      }
    });
  }, []);

  return (
    <>
      <Head>
        <title>Maneth | Developer</title>
        <meta content='width=device-width, initial-scale=1' name='viewport' />
      </Head>
      <Navbar navbarOff={navbarOff} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
