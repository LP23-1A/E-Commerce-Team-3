"use client"
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import ToggleCreateProduct from "@/components/ToggleCreateProduct";
import ProductTableNavbar from "@/components/ProductTableNavbar";
import ProductList from "@/components/ProductList";
import { useState } from "react";

const Product = () => {
    const [selected, setSelected] = useState("");

    const handleChange = (filter:any) => {
      setSelected(filter);
    };
    return(
        <div  className="w-full h-screen bg-gray-200 justify-center items-center">
            <Navbar/>
            <div className="flex  items-start">
                <Sidebar />
               <div className="flex flex-col w-full pt-10">
               <div className="flex flex-col w-full" >
                  <ToggleCreateProduct/>
                </div>
                <div className="w-full mt-6 ml-5 flex flex-col gap-2 pr-10"  >
                   <ProductTableNavbar/>
                   <ProductList  selectedCategory={selected} />
                  </div>
               </div>
            </div>
        </div>
    )
}

export default Product;