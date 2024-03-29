"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface BasketItem {
  id: string;
  count:number
}

interface BasketContextType {
  basket: BasketItem[];
  addToCart: (item: BasketItem) => void;
  setBasket: (basket: BasketItem[]) => void;
}

const BasketContext = createContext<BasketContextType>({
  basket: [],
  addToCart: () => {},
  setBasket: () => {},
});

export const useBasket = () => useContext(BasketContext);

interface BasketProviderProps {
  children: ReactNode;
}

export const BasketProvider = ({ children }: BasketProviderProps) => {
  const [basket, setBasket] = useState<BasketItem[]>([]);

  const addToCart = (item: BasketItem) => {
    const itemIndex = basket.findIndex(
      (basketItem) => basketItem.id === item.id
    );
    if (itemIndex !== -1) {
      setBasket([...basket, { ...item, count: 1 }]);
    } else {
      setBasket([...basket, { ...item, count: 1 }]);
    }
  };

  return (
    <BasketContext.Provider value={{ basket, addToCart, setBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
