import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import ProductList from '../components/ProductLists';

const CountButtonGroup = dynamic(() => import('cart/CountButtonGroup'));
const CountText = dynamic(() => import('cart/CountText'));

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://dummyjson.com/products?limit=12');
  const productsRes = await res.json();

  return { props: { productsRes } };
};

type Product = {
  id: number;
  title: string;
};

type Products = {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
};

export function Index({ productsRes }: { productsRes: Products }) {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    fetch(
      'https://global-bbn-s3.s3.ap-northeast-1.amazonaws.com/family-mart/positions/2/banners/drug/0/20250106000003.json'
    )
      .then((response) => response.json()) // Convert response to blob
      .then((data) => {
        setBanners(data);
      });
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <header className="flex justify-between">
        <Image
          src={`${process.env.NEXT_PUBLIC_S3_URL}/ac.ezimport.co.jp/image/bibianlogo.svg?t=1`}
          alt="Bibian Logo"
          width={260}
          height={70}
        />
        <nav className="flex items-center">
          <p>Hi Fany</p>
          <Image
            src={`${process.env.NEXT_PUBLIC_S3_URL}/ac.ezimport.co.jp/image/mita/shopping-cart-auction-Search.png`}
            alt="cart icon"
            width={45}
            height={60}
          />
        </nav>
      </header>
      <Image
        src={banners[2]?.image}
        alt="Bibian Logo"
        width={1280}
        height={550}
        className="rounded mt-3"
      />
      <div>
        <ProductList products={productsRes.products} />
        <CountButtonGroup />
        <CountText />
      </div>
    </div>
  );
}

export default Index;
