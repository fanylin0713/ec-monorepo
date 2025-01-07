import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { useParams } from 'next/navigation';

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context);
  const productId = context.query.id;
  
  const res = await fetch(`https://dummyjson.com/products/${productId}`);
  const product = await res.json();

  return { props: { product } };
};

export function Product({ product }: { product: Product }) {
  const params = useParams<{ id: string }>();

  console.log(product);
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
          <button className="border border-sky-200 bg-sky-100 text-sky-500 text-xl rounded py-1 px-8 hover:bg-sky-400 hover:text-white">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
