import React, { ReactElement, useState } from "react";
import DollarIcon from "@/assets/DollarIcon"

interface ProductFilterByPriceProps {
    onPriceChange: (price: string) => void; 
  }

const ProductFilterByPrice : React.FC<ProductFilterByPriceProps> = ({onPriceChange}) => {
    
const [price , setPrice]=useState("");

const data = ["0-100'000" , "100'000-300'000" , "300'000-500'000" , "500'000-700'000" , "700'000-1'000'000", "1'000'000-дээш"]

const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
 const selectedPrice = e.target.value;
 setPrice(selectedPrice)
 onPriceChange(selectedPrice)
  };

  return (
    <div className="bg-[#FFFFFF] border-2 border-[#ECEDF0] rounded-[8px] gap-3 p-2  w-fit flex items-center">
      <DollarIcon/>
      <select  onChange={handlePriceChange} defaultValue="Үнэ">
        <option  disabled>Үнэ</option>
        {data && data.map((el:string , index:number) => <option key={index} value={el}>{el}</option>)}
      </select>
    </div>
  );
};

export default ProductFilterByPrice;
