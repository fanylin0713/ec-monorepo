import { useState, useEffect } from 'react';
import Image from 'next/image';

type Product = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
};

type Cart = {
  totalPrice: number;
  total: number;
  products: Product[];
};

export function CartItemList() {
  const [cartData, setCartData] = useState({} as Cart);

  const randomHexColor = () =>
    `${Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, '0')}`;

  useEffect(() => {
    fetch(`https://dummyjson.com/users/11/carts`)
      .then((res) => res.json())
      .then((data) => {
        const cartResData = {
          totalPrice: data.carts?.[0].total,
          total: data.carts?.[0].totalQuantity,
          products: data.carts?.[0].products.map((product: Product) => ({
            ...product,
            image: `https://dummyjson.com/image/400x240/${randomHexColor()}/ffffff?text=${
              product.title
            }`,
          })),
        };
        setCartData(cartResData);
      });
  }, []);

  return (
    <div className="bg-zinc-100 rounded py-2 px-3">
      <p className="text-xl mb-2">已選購商品</p>
      {cartData.products?.map((product) => (
        <div
          key={product.id}
          className="flex mb-3  border rounded border-zinc-300 p-2 bg-white"
        >
          <Image
            src={product.image}
            alt={product.title}
            width={120}
            height={60}
            className="rounded object-cover aspect-video mr-5"
          />
          <div className="flex flex-col flex-1">
            <p className="text-lg">{product.title}</p>
            <div className="flex flex-1 items-end justify-between">
              <p className="text-lg font-medium">$ {product.price}</p>
              <p className="font-medium">Qty: {product.quantity}</p>
            </div>
          </div>
        </div>
      ))}
      <p className="text-lg font-medium text-right text-zinc-700">
        Total: {cartData.total} Items | Amount: ${cartData.totalPrice}
      </p>
    </div>
  );
}

export default CartItemList;
