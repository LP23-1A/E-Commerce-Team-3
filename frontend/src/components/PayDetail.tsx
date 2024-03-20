import React from 'react'
import Car from "@/assets/Car";

const PayDetail =({totalPrice,data}:any) =>{
    console.log(data)
    const DeliviryPrice = 5000
  return (

        <div className="bg-white w-[519px] h-auto rounded-xl border border-slate-300 mt-10 pb-4">
       
        <div className="border-b border-inherit-300">
            <p className="py-4 px-6">Төлбөрийн мэдээлэл</p>
        </div>
        <p className="pt-8 px-6 font-light text-base">Бүтээгдэхүүн</p>
        <div className="flex flex-col gap-4 px-6 py-3 border-b ">
        {data && data?.products.map( (product: { productName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; price: { toLocaleString: () => string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }; }) =>(
                       <div className="flex items-center justify-between">
                       <div className="flex gap-8">
                           <p className="text-[#3F4145]">{product?.productName}</p>
                           <p className="text-[#3F4145] text-sm">x{data?.quantity}</p>
                       </div>
                       <p className="text-[#3F4145]">{product?.price.toLocaleString()}₮</p>
                   </div>
            ))}
 
            <div className="flex items-center justify-between">
                <div className="flex gap-48 items-center">
                    <p className="text-[#3F4145]">Хүргэлт</p>
                    <Car />
                </div>
                <p className="text-[#3F4145]">₮5,000</p>
            </div>
        </div>
        <div className="flex items-center justify-between px-6 py-3">
            <p className="font-semibold text-base">Нийт төлсөн дүн</p>
            <p className="font-semibold text-base">{totalPrice.toLocaleString()}</p>
        </div>
    </div>


  )
}

export default PayDetail
