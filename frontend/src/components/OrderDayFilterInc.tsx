import  { useState } from 'react';
import { useInputOrderFilter } from './OrderFilterProvider';

interface Filters {
  filterByDay: boolean | null;
  filterByWeek: boolean | null;
  filterByMonth: boolean | null;
}

const OrderDayFilterInc: React.FC = () => {
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
        };
        setFilters(updatedFilters);
    };
    
    return (
     <div className='flex gap-2'>
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
    );
};

export default OrderDayFilterInc;
