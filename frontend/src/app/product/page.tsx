"use client"
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import CreateProduct from "@/components/CreateProduct";
import ToggleCreateProduct from "@/components/ToggleCreateProduct";
import ProductTableNavbar from "@/components/ProductTableNavbar";
import ProductNavbarFilterButton from "@/components/ProductNavbarFilterButton";
import ProductList from "@/components/ProductList";
import EditProduct from "@/components/EditProduct";

const Product = () => {

   

      const [addbutton , setAddbutton] = useState(true)
      const toggleButton = () => {
        setAddbutton(addbutton);
        console.log(addbutton);
      };


    return(
        <div  className="w-full h-screen bg-gray-200 justify-center items-center">
            <Navbar/>
            <div className="flex  items-start">
                <Sidebar />
               <div className="flex flex-col">
               <div className="flex flex-col w-full" >
                  <ToggleCreateProduct/>
                </div>
                <div className="mt-6 ml-5 flex flex-col gap-2"  >
                   <ProductTableNavbar/>
                   <ProductList/>
                   
                  </div>
               </div>
            </div>
        </div>
    )
}

export default Product;