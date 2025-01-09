import { useFormContext } from 'react-hook-form';

export function Shipment() {
  const { register } = useFormContext();

  return (
    <>
      <div className="bg-zinc-100 rounded p-4 mt-5">
        <p className="text-xl mb-4 font-medium text-zinc-700">國際運送方式</p>
        <div className="flex items-center">
          <div className="bg-white rounded border border-gray-300 px-4 py-2 mr-4 w-72">
            <label>
              <input
                type="radio"
                value={1}
                className="mr-2"
                {...register('internationalShipment')}
              />
              空運<small className="ml-1 text-zinc-500">(推薦) NT$150/KG</small>
            </label>
          </div>
          <div className="bg-white rounded border border-gray-300 px-4 py-2 w-72">
            <label>
              <input
                type="radio"
                value={2}
                className="mr-2"
                {...register('internationalShipment')}
              />
              海運
            </label>
          </div>
        </div>
      </div>
      <div className="bg-zinc-100 rounded p-4 mt-5">
        <p className="text-xl mb-4 font-medium text-zinc-700">台灣運送方式</p>
        <div className="flex items-center">
          <div className="bg-white rounded border border-gray-300 px-4 py-2 mr-4 w-72">
            <label>
              <input
                type="radio"
                value={1}
                className="mr-2"
                {...register('domesticShipment')}
              />
              全家取貨<small className="ml-1 text-zinc-500">(推薦)</small>
            </label>
          </div>
          <div className="bg-white rounded border border-gray-300 px-4 py-2 mr-4 w-72">
            <label>
              <input
                type="radio"
                value={2}
                className="mr-2"
                {...register('domesticShipment')}
              />
              宅配<small className="ml-1 text-zinc-500">NT$100起</small>
            </label>
          </div>
          <div className="bg-white rounded border border-gray-300 px-4 py-2 w-72">
            <label>
              <input
                type="radio"
                value={3}
                className="mr-2"
                {...register('domesticShipment')}
              />
              面交自取
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shipment;
