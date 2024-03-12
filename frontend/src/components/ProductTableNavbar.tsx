import AngilalIcon from "@/assets/AngilalIcon"
import ProductNavbarFilterButton from "../components/ProductNavbarFilterButton"
import DollarIcon from "@/assets/DollarIcon"
import DateTrackerIcon from "@/assets/DateTrackerIcon"
import React from "react"
import Search from "@/assets/Search"
const ProductTableNavbar:React.FC  = () => {
    return(
   <div className="flex justify-between w-screen ">
         <div className="flex gap-2 ">
            <ProductNavbarFilterButton text="Ангилал" iconSvg={<AngilalIcon/>}/>
            <ProductNavbarFilterButton text="Үнэ" iconSvg={<DollarIcon/>}/>
            <ProductNavbarFilterButton text="Сараар" iconSvg={<DateTrackerIcon/>}/>
        </div>
        <div className='flex bg-white items-center px-4 py-1 gap-2 rounded-lg'>
          <Search/>
          <input className='w-[302px] h-[36px] outline-none' type="search"  placeholder='Бүтээгдэхүүний нэр, SKU, UPC' />
        </div>
   </div>
    )
}

export default ProductTableNavbar