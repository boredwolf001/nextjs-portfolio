import Head from 'next/head';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Maneth | Developer</title>
        <meta content='width=device-width, initial-scale=1' name='viewport' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
