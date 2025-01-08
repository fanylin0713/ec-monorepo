import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getCookie } from 'cookies-next';

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

export function CartList() {
  const [cartData, setCartData] = useState({} as Cart);
  useEffect(() => {
    const userInfoCookie = getCookie('userInfo');
    const userId = userInfoCookie ? JSON.parse(userInfoCookie).id : 0;

    fetch(`https://dummyjson.com/users/${userId}/carts`)
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

  const randomHexColor = () =>
    `${Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, '0')}`;

  const handleCartItemDelete = (product: Product) => {
    const updatedProducts = cartData.products.filter(
      (p) => p.id !== product.id
    );
    const updatedTotalPrice =
      cartData.totalPrice - product.price * product.quantity;
    const updatedTotalQuantity = cartData.total - product.quantity;

    setCartData({
      totalPrice: updatedTotalPrice,
      total: updatedTotalQuantity,
      products: updatedProducts,
    });
  };

  const handleCartItemQtyChange = (
    type: string,
    product: Product,
    value?: number
  ) => {
    const updatedProduct = {
      ...product,
      quantity:
        type === 'modify'
          ? value ?? 0
          : type === 'add'
          ? (product.quantity += 1)
          : (product.quantity -= 1),
    };

    console.log(updatedProduct);
    const updatedTotalPrice =
      cartData.totalPrice -
      product.price * (product.quantity - updatedProduct.quantity);
    const updatedTotalQuantity =
      cartData.total - (product.quantity - updatedProduct.quantity);

    setCartData({
      totalPrice: updatedTotalPrice,
      total: updatedTotalQuantity,
      products: cartData.products.map((p) =>
        p.id === product.id ? updatedProduct : p
      ),
    });
  };

  return (
    <div className="p-1 border-4 border-dashed border-amber-400">
      {cartData.products?.map((product) => (
        <div
          key={product.id}
          className="flex mb-3  border rounded border-zinc-300 p-2"
        >
          <Image
            src={product.image}
            alt={product.title}
            width={200}
            height={100}
            className="rounded object-cover aspect-video mr-5"
          />
          <div className="flex flex-col flex-1">
            <div className="flex justify-between">
              <p className="text-xl ">{product.title}</p>
              <button
                className="text-red-400 font-medium underline"
                onClick={() => handleCartItemDelete(product)}
              >
                Delete
              </button>
            </div>
            <div className="flex flex-1 items-end justify-between">
              <p className="text-xl font-medium">$ {product.price}</p>
              <div className="flex items-center">
                <button
                  className="rounded-l-lg border border-gray-500 border-r-0 px-2 py-0.5 text-lg hover:bg-gray-100"
                  onClick={() => handleCartItemQtyChange('minus', product)}
                >
                  -
                </button>
                <input
                  type="text"
                  value={product.quantity}
                  className="w-10 border-gray-500 border-y text-center py-1 focus:outline-none"
                  onChange={(e) =>
                    handleCartItemQtyChange(
                      'modify',
                      product,
                      Number(e.target.value)
                    )
                  }
                />
                <button
                  className="rounded-r-lg border border-gray-500 border-l-0 px-2 py-0.5 text-lg hover:bg-gray-100"
                  onClick={() => handleCartItemQtyChange('add', product)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="flex items-center justify-between my-5">
        <p className="text-2xl font-medium">Total ${cartData.totalPrice}</p>
        <Link
          href="/new-order"
          className="bg-cyan-500 text-white text-lg font-medium rounded-lg py-2 px-10 tracking-wider hover:bg-cyan-600"
        >
          Check out!
        </Link>
      </div>
    </div>
  );
}

export default CartList;
