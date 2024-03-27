import React from 'react'

const OrderButton = ({totalPrices,totalPrice,onClick}:any) => {
  return (
    <div className="flex flex-col gap-7 items-center">
    <p className="text-[#151875]">Нийт төлөх</p>
    <div className="flex  bg-[#F4F4FC] p-6 rounded-md">
      <div className="flex items-center flex-col gap-4">
        <div className="flex justify-between w-[322px] border-b">
          <p className="text-[#151875]  text-[18px]">Нийлбэр:</p>
          <p className="text-[#151875] font-bold text-[18px]">
            {totalPrices}₮
          </p>
        </div>
        <div className="flex justify-between w-[322px] border-b">
          <p className="text-[#151875] text-[18px]">Төлөх дүн:</p>
          <p className="text-[#151875] font-bold text-[18px]">
            {totalPrice}₮
          </p>
        </div>
        <button onClick={onClick} className="text-white bg-[#19D16F] rounded w-[322px] h-[40px]">
          Худалдан авах
        </button>
      </div>
    </div>
  </div>
  )
}

export default OrderButton
