"use client";
import { createContext, useState, useContext, ReactNode } from "react";

type Filters = {
  filterByDay: boolean;
  filterByWeek: boolean;
  filterByMonth: boolean;
  filterByUsername: string;
}

type OrderFilterContextType ={
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const OrderFilterContext = createContext<OrderFilterContextType | undefined>(
  undefined
);

export const useInputOrderFilter = () => {
  const context = useContext(OrderFilterContext);
  if (!context) {
    throw new Error(
      "errror"
    );
  }
  return context;
};

interface OrderInputFilterProviderProps {
  children: ReactNode;
}

export const OrderInputFilterProvider = ({
  children,
}: OrderInputFilterProviderProps) => {
  const [filters, setFilters] = useState<Filters>({
    filterByDay: false,
    filterByUsername: "",
    filterByWeek: false,
    filterByMonth: false,
  });

  return (
    <OrderFilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </OrderFilterContext.Provider>
  );
};
