import { GetServerSideProps } from 'next';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';

const AddCartButton = dynamic(() => import('cart/AddCartButton'));

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const productId = context.query.id;

  const res = await fetch(`https://dummyjson.com/products/${productId}`);
  const product = await res.json();

  return { props: { product } };
};

export function Product({ product }: { product: Product }) {
  const params = useParams<{ id: string }>();

  return (
    <div className="grid grid-cols-2 gap-5 mt-3">
      <Image
        src={`https://picsum.photos/id/${123 - 1 + Number(params.id)}/1000/500`}
        alt="product image"
        priority
        width={500}
        height={500}
        className="rounded object-cover aspect-square"
      />
      <div className="flex flex-col">
        <p className="text-5xl mb-8">{product.title}</p>
        <p className="text-gray-600 leading-7 flex-1">{product.description}</p>
        <div className="flex items-center justify-between mb-2 mt-5">
          <p className="text-4xl">$ {product.price}</p>
          <AddCartButton />
        </div>
      </div>
    </div>
  );
}

export default Product;
