"use client"
import { useEffect, useState } from 'react';
import axios from "axios";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useRouter } from 'next/navigation';
import ProductForm from './ProductForm';

const EditProduct = () => {

    const router = useRouter();

    const movepage = () => {
        router.push(`product`);
    };

    const [input, setInput] = useState({
        productName: "",
        description: "",
        price: "",
        quantity: "",
        images: [null],
        productId: "",
        tag: "",
        mainCategory: "",
        subCategory: ""
    });

    const [image, setImage] = useState<FileList | []>([]);

    const fetchProduct = async (productId: string) => {
        const api = `http://localhost:8000/product/${productId}`;
        try {
            const response = await axios.get(api);
            const productData = response.data;
            setInput({
                productName: productData.productName,
                description: productData.description,
                price: productData.price,
                quantity: productData.quantity,
                images: [null], 
                productId: productData.productId,
                tag: productData.tag,
                mainCategory: productData.mainCategory,
                subCategory: productData.subCategory
            });
        } catch (error) {
        }
    };

    const productId = localStorage.getItem("productId");
    useEffect(() => {
       
        if (productId) {
            fetchProduct(productId);
        }
    }, []);



    const editProduct = async () => {
        const api = `http://localhost:8000/product/${productId}`;
        try {
            const signedUrls = await axios.get('/api/upload-image');
            const imageUrl = signedUrls.data.objectUrl;
            const keys = {
                ...input,
                images: imageUrl
            };

            await Promise.all(
                signedUrls.data.uploadUrls.map(async (uploadUrl: string, index: number) => {
                    return await axios.put(uploadUrl, image[index], {
                        headers: {
                            'Content-Type': image[index]!.type
                        }
                    });
                })
            );

            const res = await axios.put(api, keys);
            router.push("/product");
        } catch (error) {
        }
    };

    return (
        <div className='flex flex-col  pt-10 h-fit'>
            <div className='flex bg-[#FFFFFF]  w-[1857px] p-6 gap-4 cursor-pointer' onClick={movepage}>
                <ArrowBackIosIcon />
                <p>Буцах</p>
            </div>

            <ProductForm
                title='Хадгалах'
                onClick={editProduct}
                input={input}
                setInput={setInput}
                image={image}
                setImage={setImage}
            />
        </div>
    );
};

export default EditProduct;
