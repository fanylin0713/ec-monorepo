import React, { useEffect, useState } from 'react';
import CartItem from '../components/CartItem';
import CountText from '../components/CountText';
import CountButtonGroup from '../components/CountButtonGroup';

export function Index() {
  const [products, setProducts] = useState<Array<object>>([]);

  // useEffect(() => {
  //   fetch('https://dummyjson.com/products')
  //     .then((res) => res.json())
  //     .then((res) => setProducts(res.products));
  // }, []);

  return (
    <div>
      <CountText />
      {/* {products.map((product: object) => (
        <div key={product.id}>{product.title}</div>
        // <CartItem key={product.id} />
      ))} */}
      <CountButtonGroup />
    </div>
  );
}

export default Index;
