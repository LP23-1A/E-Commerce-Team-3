import React from 'react'

const DeliveryDetail = ({data}:any) => {
  return (

    <div className="bg-white w-[800px] h-auto rounded-xl border border-slate-300 pb-4">
    <div className="border-b border-inherit-300">
        <p className="py-4 px-6">Хүргэлтийн мэдээлэл</p>
    </div>
    <p className="pt-8 px-6 font-light text-base">Гэр</p>
    <p className="px-6 text-base font-semibold">{data?.userId?.address}</p>
</div>
  )
}

export default DeliveryDetail
