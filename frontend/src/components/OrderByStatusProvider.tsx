"use client";
import { createContext, useContext, useState } from "react";

const OrderFilterContext = createContext({});

export const useOrderFilter = () => useContext(OrderFilterContext);

export const OrderFilterProvider = ({ children }: any) => {
  const [statusFilter, setStatusFilter] = useState("");

  return (
    <OrderFilterContext.Provider value={{ statusFilter, setStatusFilter }}>
      {children}
    </OrderFilterContext.Provider>
  );
};
