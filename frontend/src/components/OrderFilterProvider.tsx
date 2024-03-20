'use client'
import { createContext, useState, useContext } from 'react';

const OrderFilterContext = createContext({});

export const useInputOrderFilter = () => useContext(OrderFilterContext);

export const OrderInputFilterProvider = ({ children }:any) => {
  const [filters, setFilters] = useState({
    filterByDay: false,
    filterByUsername: '',
    filterByWeek:false,
    filterByMonth :false
  });

  return (
    <OrderFilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </OrderFilterContext.Provider>
  );
};