/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.svg' {
  const content: any;
  export const ReactComponent: any;
  export default content;
}

declare module 'cart/CountButtonGroup' {
  export * from '@cart/components/CountButtonGroup';
  export { default } from '@cart/components/CountButtonGroup';
}

declare module 'cart/CountText' {
  export * from '@cart/components/CountText';
  export { default } from '@cart/components/CountText';
}
