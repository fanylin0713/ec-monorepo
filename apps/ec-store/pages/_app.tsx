import { AppProps } from 'next/app';
import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import StoreProvider from './StoreProvider';
import './styles.css';

const CartIcon = dynamic(() => import('cart/CartIcon'));

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to ec-store!</title>
      </Head>
      <div className="py-2 sticky top-0 bg-zinc-600">
        <div className="max-w-5xl mx-auto flex items-center">
          <div className="w-3 h-3 bg-red-400 rounded-full mr-2" />
          <p className="text-white font-medium mr-5">Host</p>
          <div className="w-3 h-3 bg-amber-400 rounded-full mr-2" />
          <p className="text-white font-medium mr-5">Cart</p>
          <div className="w-3 h-3 bg-violet-400 rounded-full mr-2" />
          <p className="text-white font-medium mr-5">Member</p>
          <div className="w-3 h-3 bg-lime-400 rounded-full mr-2" />
          <p className="text-white font-medium mr-5">Order</p>
        </div>
      </div>
      <StoreProvider>
        <main className="max-w-5xl mx-auto border-4 border-dashed border-red-400 p-1 mb-5">
          <header className="flex justify-between sticky top-10 bg-white">
            <Image
              src={`${process.env.NEXT_PUBLIC_S3_URL}/ac.ezimport.co.jp/image/bibianlogo.svg?t=1`}
              alt="Bibian Logo"
              width={260}
              height={70}
            />
            <nav className="flex items-center">
              <p>Hi Fany</p>
              <CartIcon />
            </nav>
          </header>
          <Component {...pageProps} />
        </main>
      </StoreProvider>
    </>
  );
}

export default CustomApp;
