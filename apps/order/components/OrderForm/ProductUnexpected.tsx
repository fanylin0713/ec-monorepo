import { useFormContext } from 'react-hook-form';

export function ProductUnexpected() {
  const { register } = useFormContext();

  return (
    <div className="bg-zinc-100 rounded p-3">
      <p className="text-xl mb-2 font-medium text-zinc-700">
        如遇品項缺貨、同一品項數量不足
      </p>
      <div className="flex item-center mb-5">
        <div className="bg-white rounded border border-gray-300 px-4 py-2 mr-4 w-72">
          <label>
            <input
              type="radio"
              value={1}
              className="mr-2"
              {...register('quantityLack')}
            />
            繼續購買其餘品項<small className="ml-1 text-zinc-500">(推薦)</small>
          </label>
        </div>
        <div className="bg-white rounded border border-gray-300 px-4 py-2 w-72">
          <label>
            <input
              type="radio"
              value={2}
              className="mr-2"
              {...register('quantityLack')}
            />
            整筆訂單取消並退款
          </label>
        </div>
      </div>
      <p className="text-xl mb-2 font-medium text-zinc-700">當商品漲價時</p>
      <div className="flex item-center mb-5">
        <div className="bg-white rounded border border-gray-300 px-4 py-2 mr-4 w-72">
          <label>
            <input
              type="radio"
              value={1}
              className="mr-2"
              {...register('priceGrowth')}
            />
            漲幅在 5% 內可直接購買
            <small className="ml-1 text-zinc-500">(推薦)</small>
          </label>
        </div>
        <div className="bg-white rounded border border-gray-300 px-4 py-2 w-72">
          <label>
            <input
              type="radio"
              value={2}
              className="mr-2"
              {...register('priceGrowth')}
            />
            請與我聯繫
          </label>
        </div>
      </div>
      <div className="bg-yellow-50 p-2 rounded border border-yellow-100">
        <p>
          1. 若商品金額調降，或有使用到賣家折扣優惠時，差額於第二階段費用扣除。
          什麼是第二階段？
        </p>
        <p>
          2.
          部分賣家在出貨後才告知有商品缺貨，此時無法要求賣家取消整筆訂單，但比比昂會協助退還缺貨商品款項。
        </p>
      </div>
    </div>
  );
}

export default ProductUnexpected;
