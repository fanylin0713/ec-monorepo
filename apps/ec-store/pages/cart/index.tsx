import dynamic from 'next/dynamic';

const CartList = dynamic(() => import('cart/CartList'));
export function Cart() {
  return <CartList />;
}

export default Cart;
