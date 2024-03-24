import ProductFilterByCategory from "./ProductFilterByCategory"
import React, { useState } from "react"
import Search from "@/assets/Search"
import ProductFilterByPrice from "./ProductFilterByPrice"
import ProductFilterByMonth from "./ProductFilterByMonth"
const ProductTableNavbar  = () => {
  const [selected, setSelected] = useState("All Categories");
  const handleChange = (filter:any) => {
    setSelected(filter);
  };

    return(
   <div className="flex justify-between  ">
         <div className="flex gap-2 ">
            <ProductFilterByCategory onCategoryChange={handleChange}/>
            <ProductFilterByPrice onPriceChange={handleChange} />
            <ProductFilterByMonth onMonthChange={handleChange} />
        </div>
        <div className='flex bg-white items-center px-4 py-1 gap-2 rounded-lg'>
          <Search/>
          <input className='w-[302px] h-[36px] outline-none' type="search"  placeholder='Бүтээгдэхүүний нэр, SKU, UPC' />
        </div>
   </div>
    )
}

export default ProductTableNavbar