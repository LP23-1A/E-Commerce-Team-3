import React, { ReactElement, useState } from "react";
import AngilalIcon from "@/assets/AngilalIcon"
import axios from "axios";
import useSWR from "swr";

interface ProductFilterByCategoryProps {
  onCategoryChange: (category: string) => void; 
}

const ProductFilterByCategory:React.FC<ProductFilterByCategoryProps> = ({onCategoryChange}) => {
  const [category , setCategory]   = useState("");

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

const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const selectedCategory = e.target.value
  setCategory(selectedCategory)
  onCategoryChange(selectedCategory)
 
};

  return (
    <div className="bg-[#FFFFFF] border-2 border-[#ECEDF0] rounded-[8px] gap-3 p-2  w-fit flex items-center">
      <AngilalIcon/>
      <select onChange={handleCategoryChange}  defaultValue="Ангилал">
        <option  disabled>Ангилал</option>
        {data && data.map((el:any) => <option key={el._id} value={el.mainCategoryName}>{el.mainCategoryName}</option>)}
      </select>
    </div>
  );
};

export default ProductFilterByCategory;
