import React from 'react';
import CartIcon from '../components/CartIcon';
import AddCartButton from '../components/AddCartButton';
import CartList from '../components/CartList';

export function Index() {
  return (
    <div className="max-w-5xl grid gap-5 mx-auto my-5">
      <CartIcon />
      <AddCartButton
        product={{
          id: 2,
          title: '123',
          description: 'test description',
          price: 222,
        }}
      />
      <CartList />
    </div>
  );
}

export default Index;
