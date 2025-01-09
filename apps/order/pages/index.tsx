import CartItemList from '../components/CartItemList';
import OrderForm from '../components/OrderForm';
export function Index() {
  return (
    <div className="max-w-5xl mx-auto p-1 border-4 border-dashed border-lime-400 my-5">
      <CartItemList />
      <OrderForm />
    </div>
  );
}

export default Index;
