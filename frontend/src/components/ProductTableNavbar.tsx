import React, { useState } from "react";
import Search from "@/assets/Search";
import ProductFilterByCategory from "./ProductFilterByCategory";
import ProductFilterByPrice from "./ProductFilterByPrice";
import ProductFilterByMonth from "./ProductFilterByMonth";

const getMonthStringFromDate = (date: Date | string) => {
    if (typeof date === 'string') {
      const parsedDate = new Date(date);
      const monthNames = [
        "1 сар", "2 сар", "3 сар", "4 сар", "5 сар", "6 сар",
        "7 сар", "8 сар", "9 сар", "10 сар", "11 сар", "12 сар"
      ];
      return monthNames[parsedDate.getMonth()];
    }
  };

const ProductTableNavbar = ({ productsData, setProductsData }: any) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [selectedMonth, setSelectedMonth] = useState(null);
    const [searchQuery, setSearchQuery] = useState<string>("");
    

    const handleCategoryChange = (category: any) => {
        setSelectedCategory(category);
        filterProducts(category, selectedPrice, selectedMonth);
       
        
    };

    const handlePriceChange = (price: any) => {
        setSelectedPrice(price);
        filterProducts(selectedCategory, price, selectedMonth);
    };

    const handleMonthChange = (month: any) => {
        setSelectedMonth(month);
        filterProducts(selectedCategory, selectedPrice, month);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const filterProducts = (category: any, price: any, month: any) => {
       
        const filtered = productsData.filter((product: any) => {
            if (category && product.mainCategory.mainCategoryName !== category) {
                return false;
            }

            if (price) {
                const [min, max] = price.split('-').map(p => parseInt(p.replace("'", '').replace("дээш", "Infinity").replace(/[^0-9.-]/g, '')));
                if (min !== '' && max !== '' && (product.price < min || product.price > max)) {
                    return false;
                }
            }

            if (month && getMonthStringFromDate(product.createdAt) !== month) {
                return false;
            }

            if (searchQuery && !product.productName.toLowerCase().includes(searchQuery.toLowerCase())) {
                return false;
            }

            return true;
        });
        
        setProductsData(filtered);
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
