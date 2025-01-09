import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
// 用 next/navigation 在 host 會有白屏問題
// import { useRouter } from 'next/navigation'; 
import { useRouter } from 'next/router';
import ProductUnexpected from './ProductUnexpected';
import Shipment from './Shipment';
import CouponNote from './CouponNote';
import PriceTotal from './PriceTotal';
import PolicyAction from './PolicyAction';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { orderSchema } from '../../zodSchema/order';

type FormData = z.infer<typeof orderSchema>;

export function OrderForm() {
  const methods = useForm<FormData>({
    resolver: zodResolver(orderSchema),
  });
  const { handleSubmit } = methods;
  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
    setTimeout(() => {
      router.push('/payment');
    }, 1000);
  };

  return (
    <FormProvider {...methods}>
      <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
        <ProductUnexpected />
        <Shipment />
        <div className="flex mt-5">
          <CouponNote />
          <PriceTotal />
        </div>
        <PolicyAction />
      </form>
    </FormProvider>
  );
}

export default OrderForm;
