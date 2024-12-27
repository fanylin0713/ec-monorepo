import React, { useEffect, useState } from 'react';
import CartItem from '../components/CartItem';

export function Index() {
  const [products, setProducts] = useState<Array<object>>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
  }, []);

  return (
    <div>
      {products.map((product: object) => (
        <div key={product.id}>{product.title}</div>
        // <CartItem key={product.id} />
      ))}
    </div>
  );
}

export default Index;
