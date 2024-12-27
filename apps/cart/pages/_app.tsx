import { AppProps } from 'next/app';
import Head from 'next/head';
import StoreProvider from './StoreProvider';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to cart!</title>
      </Head>
      <StoreProvider>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </StoreProvider>
    </>
  );
}

export default CustomApp;
