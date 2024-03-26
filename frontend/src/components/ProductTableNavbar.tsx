import React, { useState, useMemo, useEffect } from "react";
import Search from "@/assets/Search";
import ProductFilterByCategory from "./ProductFilterByCategory";
import ProductFilterByPrice from "./ProductFilterByPrice";
import ProductFilterByMonth from "./ProductFilterByMonth";

const getMonthStringFromDate = (date: Date | string) => {
  if (typeof date === "string") {
    const parsedDate = new Date(date);
    const monthNames = [
      "1 сар", "2 сар", "3 сар", "4 сар", "5 сар", "6 сар",
      "7 сар", "8 сар", "9 сар", "10 сар", "11 сар", "12 сар"
    ];
    return monthNames[parsedDate.getMonth()];
  }
};

const ProductTableNavbar = ({ productsData, setProductsData }: any) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Memoized filtering function
  const filteredProducts = useMemo(() => {
    return productsData.filter((product: any) => {
      if (selectedCategory && product.mainCategory.mainCategoryName !== selectedCategory) {
        return false;
      }

      if (selectedPrice) {
        const [min, max] = selectedPrice.split("-").map(p => parseInt(p.replace("'", "").replace("дээш", "Infinity").replace(/[^0-9.-]/g, "")));
        if (!isNaN(min) && !isNaN(max) && (product.price < min || product.price > max)) {
            return false;
          }
      }

      if (selectedMonth && getMonthStringFromDate(product.createdAt) !== selectedMonth) {
        return false;
      }

      if (searchQuery && !product.productName.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      return true;
    });
  }, [productsData, selectedCategory, selectedPrice, selectedMonth, searchQuery]);

  useEffect(() => {
    setProductsData(filteredProducts);
  }, [filteredProducts, setProductsData]);

  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
  };

  const handlePriceChange = (price: string | null) => {
    setSelectedPrice(price);
  };

  const handleMonthChange = (month: string | null) => {
    setSelectedMonth(month);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <ProductFilterByCategory onCategoryChange={handleCategoryChange} />
        <ProductFilterByPrice onPriceChange={handlePriceChange} />
        <ProductFilterByMonth onMonthChange={handleMonthChange} />
      </div>
      <div className="flex bg-white items-center px-4 py-1 gap-2 rounded-lg">
        <Search />
        <input
          className="w-[302px] h-[36px] outline-none"
          type="search"
          placeholder="Search by Product Name"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
};

export default ProductTableNavbar;
