import { useFormContext } from 'react-hook-form';

export function CouponNote() {
  const { register } = useFormContext();

  return (
    <div className='flex flex-col'>
      <div className="bg-zinc-100 rounded p-4 w-96">
        <div className="flex items-center justify-between my-1">
          <div className="flex items-center ">
            <p className="text-lg font-medium mr-5">折扣碼</p>
            <p className="leading-7">
              已使用 <span className="font-medium text-lime-500"> 0 組 </span>
              折扣碼
            </p>
          </div>
          <button className="text-sky-500">輸入</button>
        </div>
        <hr className="border-zinc-400 border-dashed my-3" />
        <div className="flex items-center justify-between my-1">
          <div className="flex items-center ">
            <p className="text-lg font-medium mr-5">折價券</p>
            <p className="leading-7">
              已使用 <span className="font-medium text-orange-500"> 0 組 </span>
              折價券
            </p>
          </div>
          <button className="text-sky-500">選擇</button>
        </div>
      </div>
      <div className="bg-zinc-100 rounded p-4 mt-5 w-96 flex-1">
        <p className="text-xl mb-4 font-medium text-zinc-700">備註</p>
        <textarea {...register('note')} className="w-full" rows={4} />
      </div>
    </div>
  );
}

export default CouponNote;
