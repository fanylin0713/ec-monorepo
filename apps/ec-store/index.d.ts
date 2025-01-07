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
