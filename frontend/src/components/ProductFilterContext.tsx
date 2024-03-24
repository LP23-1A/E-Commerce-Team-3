"use client"
import React, { createContext, useState, useContext } from 'react';

interface Filters {
    category: string | null;
    month: string | null;
    price: string | null;
  }

  interface ProductFilterProviderProps {
    children: React.ReactNode;
  }

  const ProductFilterContext = createContext<{
    filters: Filters;
    setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  }>({
    filters: {
      category: null,
      month: null,
      price: null,
    },
    setFilters: () => {},
  });

export const ProductFilterProvider: React.FC<ProductFilterProviderProps> = ({ children }) => {
  const [filters, setFilters] = useState<Filters>({
    category: null,
    month: null,
    price: null,
  });

  return (
    <ProductFilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </ProductFilterContext.Provider>
  );
};

 export const useFilter = () => {
  const context = useContext(ProductFilterContext);
  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};

export default ProductFilterContext ;

