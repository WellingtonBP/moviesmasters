import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&family=Salsa&family=Schoolbell&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="Find movies and series, create an account and manage your list"
          />
          <meta
            name="keyword"
            content="Movies, Series, TV, Streaming, Netflix, Amazon, Prime Video, HBO, Watch, Videos"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
