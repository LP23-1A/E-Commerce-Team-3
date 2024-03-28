"use client"
import Category from "@/components/userComponents/Category"
import { UserFooter } from "@/components/userComponents/Footer"
import UserNavbar from "@/components/userComponents/Navbar"
import { useBasket } from "@/components/userComponents/OrderContext"
import ProductListByCategory from "@/components/userComponents/ProductListByCategory"
import Topbar from "@/components/userComponents/Topbar"
import { useState } from "react"

const category = () => {
    const [selectedCategory, setSelectedCategory] = useState(""); 


  const handleCategoryClick = (categoryName:any) => {
    setSelectedCategory(categoryName);
  };
  
  
    return(
        <div className="flex flex-col">
          <UserNavbar/>
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