'use client'
import { createContext, useContext, useState } from "react";

const BasketContext = createContext({
    basket:'',
    addToCard:() =>{}
});

export const useBasket = () => useContext(BasketContext);

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addToCart = (item) => {
    const itemIndex = basket.findIndex(basketItem => basketItem.id === item.id);
    if (itemIndex !== -1) {
      setBasket([...basket, { ...item, count: 1 }]);
    } else {
      setBasket([...basket, { ...item, count: 1 }]);
    }
  };
  

  return (
    <BasketContext.Provider value={{ basket, addToCart }}>
      {children}
    </BasketContext.Provider>
  );
};

