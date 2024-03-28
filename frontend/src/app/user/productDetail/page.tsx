"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Topbar from '@/components/userComponents/Topbar';
import { UserFooter } from '@/components/userComponents/Footer';
import ProductDetail from '@/components/userComponents/ProductDetail';
import AdditionalInformation from '@/components/userComponents/AddtionalInformation';
import UserNavbar from '@/components/userComponents/Navbar';

const ProductDetailPage = () => {
    const [product, setProduct] = useState(null);


    useEffect(() => {

        const productId = localStorage.getItem('productId');

        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/product/${productId}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        if (productId) {
            fetchProduct();
        }
        return () => {
            localStorage.removeItem('productId');
        };
    }, []);

    if (!product) {
        return <div>Loading product details...</div>;
    }

    return (
        <div>
            <UserNavbar />
            <Topbar />
            <ProductDetail id={product}  productName={product.productName} price={product.price} description={product.description} image1={product.images[0]} image2={product.images[1]} image3={product.images[2]} />
            <AdditionalInformation category={product.mainCategory.mainCategoryName} productName={product.productName} />
            <UserFooter />
        </div>
    );
};

export default ProductDetailPage;
