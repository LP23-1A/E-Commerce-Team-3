import React, { ReactElement, useState } from "react";
import AngilalIcon from "@/assets/AngilalIcon"
import axios from "axios";
import useSWR from "swr";

interface ProductFilterByCategoryProps {
  onCategoryChange: (category: string) => void; 
}

const ProductFilterByCategory:React.FC<ProductFilterByCategoryProps> = ({onCategoryChange}) => {
  const [selected , setSelected]   = useState(null);
  const [selectedCategory , setSelectedCategory] = useState(null)

  const fetcher = async (url: string) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error: any) {
        throw error.response.data;
    }
};

const { data, error, isLoading } = useSWR(
    "http://localhost:8000/mainCategory",
    fetcher
);

  return (
    <div className="bg-[#FFFFFF] border-2 border-[#ECEDF0] rounded-[8px] gap-3 p-2  w-fit flex items-center">
      <AngilalIcon/>
      <select onChange={ (e:any) => setSelected(e.target.value)}  defaultValue="Ангилал">
        <option value="" disabled>Ангилал</option>
        {data && data.map((category:any) => <option key={category._id} value={category._id}>{category.mainCategoryName}</option>)}
      </select>
    </div>
  );

  
};

export default ProductFilterByCategory;
