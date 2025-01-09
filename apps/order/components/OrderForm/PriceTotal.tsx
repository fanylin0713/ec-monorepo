export function PriceTotal() {
  return (
    <div className="flex-1 ml-5 bg-zinc-100 rounded p-4">
      <p className="text-xl mb-4 font-medium text-zinc-700">
        商品費用<small>（第一階段）</small>
      </p>
      <div className="flex items-center justify-between my-5">
        <p>商品小記</p>
        <p className="font-medium">$11741.31</p>
      </div>
      <hr className="border-zinc-400 border-dashed my-3" />
      <div className="flex items-center justify-between text-xl font-medium my-5">
        <p className="text-zinc-700">合計</p>
        <p className="text-sky-500">$11741.31</p>
      </div>
      <hr className="border-zinc-400 border-dashed my-3" />
      <div className="flex items-center justify-between">
        <p className="text-xl font-medium text-zinc-700">
          運費及其他<small>（第二階段）</small>
        </p>
        <p>商品抵台後計算</p>
      </div>
      <div className="flex items-center justify-between my-3">
        <p className="text-zinc-700">日本空運150元/KG</p>
        <p>-</p>
      </div>
      <hr className="border-zinc-400 border-dashed my-3" />
      <div className="flex items-center justify-between">
        <p className="text-xl font-medium text-zinc-700">訂單總額</p>
        <p>尚未計算</p>
      </div>
    </div>
  );
}

export default PriceTotal;
