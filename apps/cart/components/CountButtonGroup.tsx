import { useAppDispatch } from '../lib/hooks';
import { increment, decrement, resetState } from '../lib/features/CounterSlice';

export function CountButtonGroup() {
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-center m-10 border border-gray-200 p-4 text-2xl">
      <button
        className="border border-sky-500 text-sky-500 px-4 rounded "
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <button
        className="border border-gray-500 text-gray-500 px-4 rounded mx-10 text-base"
        onClick={() => dispatch(resetState())}
      >
        reset
      </button>
      <button
        className="border border-pink-500 text-pink-500 px-4 rounded"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
    </div>
  );
}

export default CountButtonGroup;
