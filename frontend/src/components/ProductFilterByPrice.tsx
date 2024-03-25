import React, { ReactElement, useState } from "react";
import DollarIcon from "@/assets/DollarIcon"

interface ProductFilterByPriceProps {
    onPriceChange: (price: string) => void; 
  }

const ProductFilterByPrice : React.FC<ProductFilterByPriceProps> = ({onPriceChange}) => {
const [selected , setSelected] = useState(null)
const [selectedPrice , setSelectedPrice]=useState(null);

const data = ["0-100'000" , "100'000-300'000" , "300'000-500'000" , "500'000-700'000" , "700'000-1'000'000", "1'000'000-дээш"]


  return (
    <div className="bg-[#FFFFFF] border-2 border-[#ECEDF0] rounded-[8px] gap-3 p-2  w-fit flex items-center">
      <DollarIcon/>
      <select  onChange={(e:any) => setSelected(e.target.value)} defaultValue="Үнэ">
        <option value="" disabled>Үнэ</option>
        {data && data.map((price:any , index:number) => <option key={index} value={price}>{price}</option>)}
      </select>
    </div>
  );
};

export default ProductFilterByPrice;
