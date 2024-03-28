"use client"
import React, { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import ToggleCreateProduct from "@/components/ToggleCreateProduct";
import ProductTableNavbar from "@/components/ProductTableNavbar";
import ProductList from "@/components/ProductList";
import axios from "axios";

const Product = () => {
    const [productsData, setProductsData] = useState([]);
    const [productsDataFiltered, setProductsDataFiltered] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/product");
                setProductsData(response.data);
                
            } catch (error) {
               
            }
        };

        fetchData();
    }, []); 

    return (
        <div className="w-full h-screen bg-gray-200 justify-center items-center">
            <Navbar />
            <div className="flex items-start">
                <Sidebar />
                <div className="flex flex-col w-full pt-10">
                    <div className="flex flex-col w-full">
                        <ToggleCreateProduct />
                    </div>
                    <div className="w-full mt-6 ml-5 flex flex-col gap-2 pr-10">
                        <ProductTableNavbar productsData={productsData} setProductsData={setProductsDataFiltered} />
                        <ProductList productsData={productsDataFiltered} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
