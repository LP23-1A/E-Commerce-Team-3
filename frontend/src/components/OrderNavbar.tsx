import React from 'react'

const OrderNavbar = ({data}:any) => {
  return (
    <div className=''>
        <div className='flex gap-5'>
        <button className='p-[16px] text-[14px]'>Бүгд</button>
      <button className='p-[16px] text-[14px] font-[400]'>Шинэ захиалага</button>
      <button className='p-[16px] text-[14px] font-[400]'>Бэлтгэгдэж байна</button>
      <button className='p-[16px] text-[14px] font-[400]'>Хүргэлтэнд гарсан</button>
      <button className='p-[16px] text-[14px] font-[400]'>Хүргэгдсэн</button>
      <button className='p-[16px] text-[14px] font-[400]'>Хүргэгдсэн</button>
        </div>

    </div>
  )
}

export default OrderNavbar
