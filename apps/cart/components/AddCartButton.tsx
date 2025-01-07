import { useDispatch } from 'react-redux';
import { addItemToCart } from '../lib/features/CartSlice';

export function AddCartButton() {
  const dispatch = useDispatch();

  const handleAddCartItemClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    dispatch(addItemToCart({ productId: 1, quantity: 1 }));
  };

  return (
    <div className="w-fit p-1 border-4 border-dashed border-amber-400">
      <button
        className="border border-sky-200 bg-sky-100 text-sky-500 text-lg rounded py-1 px-8 hover:bg-sky-400 hover:text-white"
        onClick={handleAddCartItemClick}
      >
        Add to cart
      </button>
    </div>
  );
}

export default AddCartButton;
