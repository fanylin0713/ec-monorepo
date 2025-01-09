import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import ProductUnexpected from './ProductUnexpected';
import Shipment from './Shipment';
import CouponNote from './CouponNote';
import PriceTotal from './PriceTotal';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { orderSchema } from '../../zodSchema/order';

type FormData = z.infer<typeof orderSchema>;

export function OrderForm() {
  const methods = useForm<FormData>({
    resolver: zodResolver(orderSchema),
  });
  const { handleSubmit, register } = methods;

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
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
        <button type="submit">confirm</button>
      </form>
    </FormProvider>
  );
}

export default OrderForm;
