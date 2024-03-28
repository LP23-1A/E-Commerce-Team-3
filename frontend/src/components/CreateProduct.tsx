"use client"
import { useEffect, useState } from 'react';
import axios from "axios"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useRouter } from 'next/navigation';
import ProductForm from './ProductForm';

const CreateProduct = () => {

    const router = useRouter()

    const movepage = () => {
        router.push(`product`);
    };

    const [input, setInput] = useState({
        productName: "",
        description: "",
        price: "",
        quantity: "",
        images: [null as File | null],
        productId: "",
        tag: "",
        mainCategory: "",
        subCategory: ""
    })

    const [image, setImage] = useState<FileList | []>([]);

    const keys = {
        productName: input.productName,
        description: input.description,
        price: input.price,
        quantity: input.quantity,
        images: input.images,
        productId: input.productId,
        tag: input.tag,
        mainCategory: input.mainCategory,
        subCategory: input.subCategory
    }

    const api = "http://localhost:8000/product"

    const createProduct = async () => {

        try {
            const signedUrls = await axios.get('/api/upload-image');
            const imageUrl = signedUrls.data.objectUrl
            keys.images = imageUrl

            signedUrls.data.uploadUrls.map(async (uploadUrl: string, index: number) => {

                return await axios.put(uploadUrl, image[index], {
                    headers: {
                        'Content-Type': image[index]!.type
                    }
                });
            })

            const res = await axios.post(api, { ...keys })
            router.push("/product")
          
        } catch (error) {
        }
    }
    return (
        <div className='flex flex-col pt-10   h-fit '>
            <div className='flex bg-[#FFFFFF] w-[1857px] p-6 gap-4 cursor-pointer' onClick={movepage} >
                <ArrowBackIosIcon />
                <p>Буцах</p>
            </div>
            <ProductForm title='Нэмэх' onClick={createProduct}  input={input} setInput={setInput} image={image} setImage={setImage}/>
        </div>
    );
};
export default CreateProduct