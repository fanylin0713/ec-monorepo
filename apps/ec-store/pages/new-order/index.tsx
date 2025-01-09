import dynamic from 'next/dynamic';

const Order = dynamic(() => import('order/Order'), { ssr: false });

export function NewOrder() {
  return (
    <div>
      <Order />
    </div>
  );
}

export default NewOrder;
