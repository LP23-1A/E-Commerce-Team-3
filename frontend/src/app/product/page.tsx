"use client"
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import CreateProduct from "@/components/CreateProduct";
import ToggleCreateProduct from "@/components/ToggleCreateProduct";

const Product = () => {

   

      const [addbutton , setAddbutton] = useState(true)
      const toggleButton = () => {
        setAddbutton(addbutton);
        console.log(addbutton);
      };


    return(
        <div  className="w-screen h-screen bg-gray-200 justify-center items-center">
            <Navbar/>
            <div className="flex  items-start">
                <Sidebar />
                <div className="flex flex-col" onClick={toggleButton}>
                   {addbutton &&  <ToggleCreateProduct/>}
                </div>
            </div>
        </div>
    )
}

export default Product;