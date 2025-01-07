import Image from 'next/image';
import Link from 'next/link';

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
};
export function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-3 gap-4 my-5">
      {products.map((product, index) => (
        <Link href={`/${product.id}`} key={product.id}>
          <div className="rounded border border-gray-200 p-3 hover:border-gray-300 hover:shadow-md">
            <Image
              src={`https://picsum.photos/id/${123 + index}/400/300`}
              alt="product image"
              width={400}
              height={240}
              className="rounded object-cover aspect-video"
            />
            <p className="text-lg line-clamp-1 my-2">{product.title}</p>
            <p className="text-sm text-gray-600 line-clamp-3">
              {product.description}
            </p>
            <div className="flex items-center justify-between mb-2 mt-5">
              <p className="font-semibold text-lg">$ {product.price}</p>
              <button className="border border-sky-200 bg-sky-100 text-sky-500 rounded py-1 px-3 hover:bg-sky-400 hover:text-white">
                Add to cart
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductList;
