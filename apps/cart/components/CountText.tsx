import { useAppSelector } from '../lib/hooks';

export function CountButtonGroup() {
  const { value } = useAppSelector((state) => state.counter);

  return (
    <div className="m-10 text-center border border-gray-200 p-4 text-2xl">
      <p className="mx-5 text-gray-700">{value}</p>
    </div>
  );
}

export default CountButtonGroup;
