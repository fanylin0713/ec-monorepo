export function PolicyAction() {
  return (
    <div className="bg-zinc-100 rounded p-4 flex items-center justify-between mt-5">
      <div>
        <p className="text-xl mb-4 font-medium text-zinc-700">服務條款</p>
        <p>1. 購物車會自動依照賣家分別成立訂單，並逐筆收取費用。</p>
        <p>
          2.
          實際金額將依賣家收費為準（如產生日本當地運費或賣家有折扣優惠等），並更新於第二階段費用。
        </p>
        <div className="my-2">
          <label>
            <input type="checkbox" className="mr-2" />
            我已閱讀並同意以上服務條款
          </label>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="bg-sky-400 text-white font-medium rounded py-2 px-10 hover:bg-sky-500 tracking-wide text-xl"
        >
          訂單付款
        </button>
        <p className="text-center text-gray-500 mt-2">(第一階段)</p>
      </div>
    </div>
  );
}

export default PolicyAction;
