import type { NextPage } from 'next';
import Head from 'next/head';

import Home from '../components/Home';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Movies Masters - Home</title>
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
