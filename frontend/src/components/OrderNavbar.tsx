import React from 'react'

const OrderNavbar = ({data}:any) => {
  return (
    
        <div className='flex  justify-between border-b border-slate-300'>
        <button className='p-[16px] text-[14px]'>Бүгд</button>
      <button className='p-[16px] text-[14px] font-normal'>Шинэ захиалага</button>
      <button className='p-[16px] text-[14px] font-normal'>Бэлтгэгдэж байна</button>
      <button className='p-[16px] text-[14px] font-normal'>Хүргэлтэнд гарсан</button>
      <button className='p-[16px] text-[14px] font-normal'>Хүргэгдсэн</button>
      <button className='p-[16px] text-[14px] font-normal'>Цуцлагдсан</button>
        </div>

   
  )
}

export default OrderNavbar
