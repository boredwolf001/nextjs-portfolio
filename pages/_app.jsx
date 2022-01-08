import Head from 'next/head';
import { ThemeProvider } from '../context/ThemeContext';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Maneth | Developer</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0 minimum-scale=1.0, user-scalable=no'
        />
      </Head>

      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
