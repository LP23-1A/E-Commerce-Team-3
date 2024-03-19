import React from 'react'
import ChevronDown from '@/assets/ChevronDown'
import Search from '@/assets/Search'
import { useInputOrderFilter } from './OrderFilterProvider'

const  OrderDayFilter =() =>{
    const { filters, setFilters } = useInputOrderFilter();
  
    const handleDayFilter = () => {
      setFilters({ ...filters, filterByDay: true });

    };
    const handleWeekFilter = () => {
      setFilters({ ...filters, filterByWeek: true });

    };
    const handleUsernameFilter = (e) => {
      setFilters({ ...filters, filterByUsername: e.target.value });
    };
  
  return (
    <div className='flex justify-between py-4 ml-5'>
    <div className='flex gap-4'>
      <button className='bg-[#18BA51] rounded-lg  text-white  px-3 py-2' onClick={handleDayFilter}>Өдрөөр</button>
      <button className='bg-white border border-slate-300 rounded-lg   px-3 py-2' onClick={handleWeekFilter}>7хоног</button>
      <div className='bg-white border border-slate-300 rounded-lg flex items-center gap-2 px-3 py-2'>
        <p>Сараар</p>
        <ChevronDown />
      </div>
    </div>
    <div className='flex bg-white items-center px-4 py-1 gap-2 rounded-lg'>
      <Search />
      <input
        className='w-[302px] h-[36px] outline-none'
        type="search"
        placeholder='Дугаар, Имэйл'
        value={filters.filterByUsername}
        onChange={handleUsernameFilter}
      />
    </div>
  </div>
  )
}

export default OrderDayFilter
