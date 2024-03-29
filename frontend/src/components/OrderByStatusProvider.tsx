"use client";
import { createContext, useContext, useState } from "react";

const OrderFilterContext = createContext({});

export const useOrderFilter:any = () => useContext(OrderFilterContext);

export const OrderFilterProvider = ({ children }: any) => {
  const [statusFilter, setStatusFilter] = useState<any>("");

  return (
    <OrderFilterContext.Provider value={{ statusFilter, setStatusFilter }}>
      {children}
    </OrderFilterContext.Provider>
  );
};
