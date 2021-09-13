import type { AppProps } from 'next/app';

import GlobalStyles from '../styles/GlobalStyles';

import MoviesProvider from '../components/MoviesProvider';

const api_key = process.env.API_KEY;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MoviesProvider>
        <Component {...pageProps} />
      </MoviesProvider>
      <GlobalStyles />
    </>
  );
}

export default MyApp;
