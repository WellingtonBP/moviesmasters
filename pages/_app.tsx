import type { AppProps } from 'next/app';

import GlobalStyles from '../styles/GlobalStyles';

import Header from '../components/Header';
import MoviesProvider from '../components/MoviesProvider';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MoviesProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </MoviesProvider>
      <GlobalStyles />
    </>
  );
}

export default MyApp;
