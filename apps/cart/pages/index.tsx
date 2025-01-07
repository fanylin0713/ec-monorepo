import React from 'react';
import CartIcon from '../components/CartIcon';
import AddCartButton from '../components/AddCartButton';

export function Index() {
  return (
    <div className="max-w-5xl grid gap-5 mx-auto my-5">
      <CartIcon />
      <AddCartButton />
    </div>
  );
}

export default Index;
