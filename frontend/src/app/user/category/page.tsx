"use client"
import Category from "@/components/userComponents/Category"
import { UserFooter } from "@/components/userComponents/Footer"
import ProductListByCategory from "@/components/userComponents/ProductListByCategory"
import Topbar from "@/components/userComponents/Topbar"
import { useState } from "react"

const category = () => {
    const [selectedCategory, setSelectedCategory] = useState(""); 

  const handleCategoryClick = (categoryName:any) => {
    setSelectedCategory(categoryName);
  };
  console.log(selectedCategory);
  
  
    return(
        <div className="flex flex-col">
            <Topbar selectedCategory={selectedCategory}/>
            <div className=" flex  items-start px-[340px] gap-[180px]">
                <Category  onChange={handleCategoryClick} selectedCategory={selectedCategory}/>
                <ProductListByCategory selectedCategory={selectedCategory}/>
            </div>
            <UserFooter/>
        </div>
    )
}

export default category