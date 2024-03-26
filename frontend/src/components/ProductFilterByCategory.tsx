import React, { useState } from "react";
import AngilalIcon from "@/assets/AngilalIcon";
import axios from "axios";
import useSWR from "swr";

interface ProductFilterByCategoryProps {
  onCategoryChange: (category: string | null) => void;
}

const ProductFilterByCategory: React.FC<ProductFilterByCategoryProps> = ({ onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onCategoryChange(category === "" ? null : category);
  };
  
  

  return (
    <div className="bg-white border-2 border-[#ECEDF0] rounded-[8px] gap-3 p-2 w-fit flex items-center">
      <AngilalIcon />
      <select
        value={selectedCategory || ""}
        onChange={handleChange}
        className="outline-none"
      >
        <option value="" disabled>
          Ангилал
        </option>
        {isLoading ? (
          <option value="" disabled>Loading...</option>
        ) : error ? (
          <option value="" disabled>Error fetching categories</option>
        ) : (
          data &&
          data.map((category: any) => (
            <option key={category._id} value={category.mainCategoryName}>
              {category.mainCategoryName}
            </option>
          ))
        )}
      </select>
    </div>
  );
};

export default ProductFilterByCategory;
