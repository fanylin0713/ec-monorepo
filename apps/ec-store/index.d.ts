/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.svg' {
  const content: any;
  export const ReactComponent: any;
  export default content;
}

declare module 'cart/CartIcon' {
  export * from '@cart/components/CartIcon';
  export { default } from '@cart/components/CartIcon';
}

declare module 'cart/AddCartButton' {
  export * from '@cart/components/AddCartButton';
  export { default } from '@cart/components/AddCartButton';
}

declare module 'cart/CartList' {
  export * from '@cart/components/CartList';
  export { default } from '@cart/components/CartList';
}

declare module 'member/MemberStatus' {
  export * from '@member/components/MemberStatus';
  export { default } from '@member/components/MemberStatus';
}

declare module 'member/LoginForm' {
  export * from '@member/components/LoginForm';
  export { default } from '@member/components/LoginForm';
}

declare module 'member/member-slice';
declare module 'cart/cart-slice';

declare module 'order/Order' {
  export * from '@order/Order';
  export { default } from '@order/Order';
}
