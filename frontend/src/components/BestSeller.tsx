import ChevronRight from "@/assets/ChevronRight";
import { Key, useState } from "react";
import useSWR from "swr";

const BestSellers = () => {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR(
    "http://localhost:8000/product",
    fetcher,
  );
  // const { data: orderData } = useSWR(
  //   "http://localhost:8000/order",
  //   fetcher
  // );
  // console.log(orderData);

  console.log(data, "test");



  return (
    <div className="w-[581px] bg-white rounded-xl mt-10 pb-6">
      <div className="flex justify-between items-center py-5 pl-5 mr-3 mb-3">
        <h1 className="font-semibold leading-6 text-lg">Best Sellers</h1>
        <ChevronRight />
      </div>
      <div className="flex flex-col">
        <div className="flex justify-around bg-[#ECEDF0] mx-4 py-4 border-b border-slate-300">
          <p className="text-[#3F4145] text-xs font-normal">№</p>
          <p className="text-[#3F4145] text-xs font-normal">Product</p>
          <p className="text-[#3F4145] text-xs font-normal">Ordered</p>
          <p className="text-[#3F4145] text-xs font-normal">Price</p>
        </div>
        {data && data.map((e: any, index: number) => (


          <div key={index} className="flex justify-around mx-4 py-4">
            <p className="text-[#3F4145] text-xs font-normal">{index + 1}</p>
            <div className="flex gap-2 items-center">
              <img className="rounded-3xl" height={"40px"} width={"40px"} src={e.images[1]}></img>
              <div className="flex flex-col">
                <div className=" font-bold text-sm text-[#3F4145]">{e.productName}</div>
                <p className="text-[#3F4145] text-xs font-normal">#{e.productId}</p>
              </div>
            </div>
            <p className="text-[#3F4145] text-xs font-normal">{e.ordered}</p>
            <p className="text-[#3F4145] text-xs font-normal"> {e.price}₮</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
