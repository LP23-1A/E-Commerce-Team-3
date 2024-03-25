"use client"
import { usePathname, useSearchParams } from 'next/navigation'
import useSWR from "swr";
import ChevronRight from "@/assets/ChevronRight";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from 'react';

const BestSellers = () => {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR(
    `http://localhost:8000/order`,
    fetcher
  );
  console.log(data)
  

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
        {
          data && data?.map((e: any, index: number) =>

          (
            <div className="flex mx-4 py-4 items-center border-b border-gray-200">
              <p className="text-[#3F4145] text-xs font-normal w-28 flex items-center justify-center">{index + 1}</p>
              <div className="flex gap-4 items-center ml-5 w-48">
                {e?.products.map((e: any) => ( 
                <img className="rounded-3xl" height={"40px"} width={"40px"} src={e?.images[1]} ></img>
                ))}
                <div className='flex flex-col'>
                  {e?.products.map((e: { productName: string }) => (
                    <div className='flex'>
                      <div className=" font-bold text-sm text-[#3F4145]">{e?.productName}</div>
                    </div>
                  ))}
                  <p className="text-[#3F4145] text-xs font-normal">#{e?.orderNumber}</p>
                </div>
              </div>
              <p className="text-[#3F4145] text-xs font-normal flex items-center  w-32 pl-2">{e?.quantity}</p>
              <p className="text-[#3F4145] text-xs font-normal w-24 pl-2"> {e?.amountPaid}₮</p>
            </div>
          )

          )}
      </div>
    </div>
  );
};

export default BestSellers;


