import React from 'react'

const  OrderDayFilter =() =>{
  return (
    <div className='flex justify-between py-4 mx-5  '>
<div>
<button className='bg-[#18BA51] border-2 rounded-lg  text-white  px-3 py-2'>Өдрөөр</button>
      <button className='bg-[#18BA51] border-2 rounded-lg  text-white  px-3 py-2'>7хоног</button>
 <select className='bg-[#18BA51] border-2 rounded-lg  text-white  px-3 py-2' name="" id="">
    <option value="">saraar</option>
 </select>
</div>
      <input className='rounded p-1' type="search" placeholder='search' />
    </div>
  )
}

export default OrderDayFilter
