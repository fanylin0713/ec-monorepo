import { GetServerSideProps } from 'next';
import Image from 'next/image';
import ProductList from '../components/ProductLists';

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://dummyjson.com/products?limit=12');
  const productsData = await res.json();

  const bannerRes = await fetch(
    'https://global-bbn-s3.s3.ap-northeast-1.amazonaws.com/family-mart/positions/2/banners/drug/0/20250106000003.json'
  );
  const bannerData = await bannerRes.json();

  return { props: { productsData, bannerData } };
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

type Banner = {
  alt: string;
  image: string;
};

export function Index({
  productsData,
  bannerData,
}: {
  productsData: Products;
  bannerData: Banner[];
}) {
  return (
    <div>
      <Image
        src={bannerData[2]?.image}
        alt="Bibian Logo"
        width={1280}
        height={550}
        priority
        className="rounded mt-3"
      />
      <div>
        <ProductList products={productsData.products} />
      </div>
    </div>
  );
}

export default Index;
