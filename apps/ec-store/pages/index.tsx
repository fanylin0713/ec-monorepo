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
  description: string;
  price: number;
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
    <div>
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
