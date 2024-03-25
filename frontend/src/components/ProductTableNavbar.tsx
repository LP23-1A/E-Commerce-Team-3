import ProductFilterByCategory from "./ProductFilterByCategory"
import React, { useState } from "react"
import Search from "@/assets/Search"
import ProductFilterByPrice from "./ProductFilterByPrice"
import ProductFilterByMonth from "./ProductFilterByMonth"
import ProductList from "./ProductList"


const ProductTableNavbar  = ({ productsData }:any) => {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const handleCategoryChange = (category: any) => {
    setSelectedCategory(category);
    filterProducts(category, selectedBrand, selectedMonth);
  };

  const handleBrandChange = (brand: any) => {
    setSelectedBrand(brand);
    filterProducts(selectedCategory, brand, selectedMonth);
  };

  const handleMonthChange = (month: any) => {
    setSelectedMonth(month);
    filterProducts(selectedCategory, selectedBrand, month);
  };

  const filterProducts = (category: any, brand: any, month: any) => {
    const filtered = productsData.filter((product: any) => {
      if (category && product.category !== category) {
        return false;
      }
      if (brand && product.brand !== brand) {
        return false;
      }
      if (month && product.month !== month) {
        return false;
      }
      return true;
    });

    setFilteredProducts(filtered);
  };

  const [selected, setSelected] = useState("All Categories");
  const handleChange = (filter: any) => {
    setSelected(filter);
  };

    return(
   <div className="flex flex-col">
    <div className="flex justify-between  ">
         <div className="flex gap-2 ">
            <ProductFilterByCategory onCategoryChange={handleCategoryChange}/>
            <ProductFilterByPrice onPriceChange={handleBrandChange} />
            <ProductFilterByMonth onMonthChange={handleMonthChange} />
        </div>
        <div className='flex bg-white items-center px-4 py-1 gap-2 rounded-lg'>
          <Search/>
          <input className='w-[302px] h-[36px] outline-none' type="search"  placeholder='Бүтээгдэхүүний нэр, SKU, UPC' />
        </div>
   </div>
   <ProductList selectedCategory={filterProducts}/>
   </div>
    )
}

export default ProductTableNavbar