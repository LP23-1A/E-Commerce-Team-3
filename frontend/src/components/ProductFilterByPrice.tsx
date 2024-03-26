import React, { useState } from "react";
import DollarIcon from "@/assets/DollarIcon";

interface ProductFilterByPriceProps {
  onPriceChange: (price: string | null) => void;
}

const ProductFilterByPrice: React.FC<ProductFilterByPriceProps> = ({ onPriceChange }) => {
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);

  const data = [
    "0-100'000",
    "100'000-300'000",
    "300'000-500'000",
    "500'000-700'000",
    "700'000-1'000'000",
    "1'000'000-дээш"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const price = e.target.value;
    setSelectedPrice(price);
    onPriceChange(price === "" ? null : price);
  };

  return (
    <div className="bg-white border-2 border-[#ECEDF0] rounded-[8px] gap-3 p-2 w-fit flex items-center">
      <DollarIcon />
      <select
        value={selectedPrice || ""}
        onChange={handleChange}
        className="outline-none"
      >
        <option value="" disabled>
          Үнэ
        </option>
        {data.map((price, index) => (
          <option key={index} value={price}>
            {price}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ProductFilterByPrice;
