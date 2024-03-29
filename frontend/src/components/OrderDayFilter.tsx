import React, { useState } from 'react';
import Search from '@/assets/Search';
import { useInputOrderFilter } from './OrderFilterProvider';

type Filters = {
  filterByDay: boolean | null;
  filterByWeek: boolean | null;
  filterByMonth: boolean | null;
  filterByUsername: string;
}

const OrderDayFilter: React.FC = () => {
    const { filters, setFilters } = useInputOrderFilter();
    const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

    const handleFilterClick = (filterType: string) => {
        const isSameFilterClicked = selectedFilter === filterType;
        const newFilterValue = isSameFilterClicked ? null : filterType;

        setSelectedFilter(newFilterValue);

        const updatedFilters: any = {
            filterByDay: filterType === 'day' ? !filters.filterByDay : null,
            filterByWeek: filterType === 'week' ? !filters.filterByWeek : null,
            filterByMonth: filterType === 'month' ? !filters.filterByMonth : null,
            filterByUsername: filters.filterByUsername
        };

        setFilters(updatedFilters);
    };

    const handleUsernameFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilters({ ...filters, filterByUsername: e.target.value });
    };

    return (
        <div className='flex justify-between py-4 ml-5'>
            <div className='flex gap-4'>
                {['day', 'week', 'month'].map(filterType => (
                    <button
                        key={filterType}
                        className={`rounded-lg px-3 py-2 ${selectedFilter === filterType ? 'bg-[#18BA51] text-white' : 'bg-white border border-slate-300'}`}
                        onClick={() => handleFilterClick(filterType)}
                    >
                        {filterType === 'day' && 'Өдрөөр'}
                        {filterType === 'week' && '7 хоног'}
                        {filterType === 'month' && 'Сараар'}
                    </button>
                ))}
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
    );
};

export default OrderDayFilter;
