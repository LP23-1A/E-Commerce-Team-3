"use client"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import { useState } from 'react';
import axios from "axios"
import { useRouter } from "next/navigation";




const CreateProduct = ({ onClick }: any) => {
    const router = useRouter()
    const movepage = () => {
        router.push(`product`);
    };


    const requestUrl = "https://team3-ecommerce.s3.ap-southeast-1.amazonaws.com/008c3ca7-89d2-4058-9555-1730ec4d031b?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAYS2NWDJJ2TVU44MQ%2F20240312%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20240312T033120Z&X-Amz-Expires=3600&X-Amz-Signature=6b3465a7d6451d082f8ef970bb89eea96c88e4d667bb294050ea0a01f8eb2d7f&X-Amz-SignedHeaders=host&x-amz-acl=public-read&x-id=PutObject"


const [images, setImages] = useState<File[]>();

const onUpload = async () => {
    const res = await axios.put('requestUrl', images[0], {
        headers: {
            'Content-Type': (images[0] as File).type
        }
    });
    console.log(res);
};


    const [input, setInput] = useState({
        productName: "",
        description: "",
        price: "",
        quantity: "",
        categoryId: "",
        image: ""
    })

    const keys = {
        productName: input.productName,
        description: input.description,
        price: input.price,
        quantity: input.quantity,
        categotyId: input.categoryId,
        image: input.image
    }






    const api = "http://localhost:8000/product"

    const createProduct = async () => {
        try {
            const res = await axios.post(api, { ...keys })
            console.log(res, "success");


        } catch (error) {
            console.log(error);
        }
    }




    return (
        <div className='flex flex-col  h-fit '>
            <div className='flex bg-[#FFFFFF] w-full p-4 gap-4 cursor-pointer'onClick={movepage} >
                <ArrowBackIosIcon />
                <p>Бүтээгдэхүүн нэмэх</p>
            </div>
            <div className='flex gap-6 p-4'>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-4 p-4 bg-[#FFFFFF] rounded-[12px] '>
                        <div className='w-[515px] flex flex-col gap-2'>
                            <p className='text-sm font-bold'>Бүтээгдэхүүний нэр</p>
                            <input value={input.productName} onChange={(e) => setInput((prev) => ({ ...prev, productName: e.target.value }))} className='bg-[#F7F7F8] border-2 border-[#D6D8DB] p-2 rounded-[8px] w-full text-[18px]' placeholder='Нэр' />

                        </div>
                        <div className='w-[515px] flex flex-col gap-2'>
                            <p className='text-sm font-bold'>Нэмэлт мэдээлэл</p>
                            <input value={input.description} onChange={(e) => setInput((prev) => ({ ...prev, description: e.target.value }))} className='bg-[#F7F7F8] border-2 border-[#D6D8DB] p-2 rounded-[8px] w-full h-[72px] text-fit' placeholder='Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар.' />
                        </div>
                        <div className='w-[515px] flex flex-col gap-2'>
                            <p className='text-sm font-bold'>Барааны код</p>
                            <input  value={input.product_id} onChange={(e) => setInput((prev) => ({ ...prev, product_id: e.target.value }))} className='bg-[#F7F7F8] border-2 border-[#D6D8DB] p-2 rounded-[8px] w-full text-[18px]' placeholder='#12345678' />
                        </div>
                    </div>
                    <div className="flex flex-col p-6 gap-4 bg-[#FFFFFF] rounded-[12px] w-[563px]" >
                        <p className="font-bold text-[18px]">Бүтээгдэхүүний зураг</p>
                        <div className="flex gap-2 items-center">
                            <div className=" flex justify-center items-center h-[125px] w-[125px] rounded-2xl border-2 border-dashed border-[#D6D8DB] bg-[#FFFFFF]">
                                <InsertPhotoOutlinedIcon />
                                <input type="file" src="" alt="" className='border border-2 h-14 w-24'/>
                            </div>
                            <div className=" flex justify-center items-center h-[125px] w-[125px] rounded-2xl border-2 border-dashed border-[#D6D8DB] bg-[#FFFFFF]">
                                <InsertPhotoOutlinedIcon />
                            </div>
                            <div className=" flex justify-center items-center h-[125px] w-[125px] rounded-2xl border-2 border-dashed border-[#D6D8DB] bg-[#FFFFFF]">
                                <InsertPhotoOutlinedIcon />
                            </div>
                            <div className='px-10'><div className=" flex justify-center h-[32px] w-[32px] bg-[#ECEDF0] p-1 rounded-[50%]">+</div></div>
                        </div>
                    </div>
                    <div className="flex gap-4 w-[563px] p-4 bg-[#FFFFFF] rounded-[12px] gap-4 ">
                        <div className="flex flex-col gap-2">
                            <p className='text-sm font-bold'>Үндсэн үнэ</p>
                            <input value={input.price} onChange={(e) => setInput((prev) => ({ ...prev, price: e.target.value }))} className='bg-[#F7F7F8] border-2 border-[#D6D8DB] p-2 rounded-[8px] w-[250px] text-[18px]' placeholder='Үндсэн үнэ' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className='text-sm font-bold'>Үлдэгдэл тоо ширхэг</p>
                            <input value={input.quantity} onChange={(e) => setInput((prev) => ({ ...prev, quantity: e.target.value }))} className='bg-[#F7F7F8] border-2 border-[#D6D8DB] p-2 rounded-[8px] w-[250px] text-[18px]' placeholder='Үлдэгдэл тоо ширхэг' />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className="flex flex-col gap-4 w-[515px] p-4  bg-[#FFFFFF] rounded-[12px]  ">
                        <div className="flex flex-col gap-2">
                            <p className='text-sm font-bold'>Ерөнхий ангилал</p>
                            <input value={input.categoryId} onChange={(e) => setInput((prev) => ({ ...prev, categoryId: e.target.value }))} className='bg-[#F7F7F8] border-2 border-[#D6D8DB] p-2 rounded-[8px] w-full text-[18px]' placeholder='Сонгох' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className='text-sm font-bold'>Дэд ангилал</p>
                            <input className='bg-[#F7F7F8] border-2 border-[#D6D8DB] p-2 rounded-[8px] w-full text-[18px]' placeholder='Сонгох' />
                        </div>
                    </div>
                    <div className="p-6 bg-[#FFFFFF] flex flex-col rounded-[12px] gap-6 ">
                        <p className="text-[18px] font-bold">Төрөл</p>
                        <div className="flex gap-4 items-center">
                            <p>Өнгө</p>
                            <div className="flex justify-center h-[32px] w-[32px] bg-[#ECEDF0] p-1 rounded-[50%]">+</div>
                        </div>
                        <div className="flex gap-4 items-center">
                            <p>Хэмжээ</p>
                            <div className=" flex justify-center h-[32px] w-[32px] bg-[#ECEDF0] p-1 rounded-[50%]">+</div>
                        </div>
                        <button className="border-2 border-[#D6D8DB] rounded-[8px] w-[118px] h-[36px] text-[14px] font-bold">Төрөл нэмэх</button>
                    </div>
                    <div className="flex flex-col gap-2  p-4 h-[195px]  bg-[#FFFFFF] rounded-[12px] ">
                        <p className='text-sm font-bold'>Таг</p>
                        <input className='bg-[#F7F7F8] border-2 border-[#D6D8DB] p-2 rounded-[8px] w-full text-[18px]' placeholder='Таг нэмэх...' />
                        <p>Санал болгох: Гутал , Цүнх , Эмэгтэй </p>
                    </div>
                    <div className="flex gap-4 justify-end">
                        <button className=" hover:bg-black hover:text-[#FFFFFF] border-2 font-bold text-[18px] border-[#D6D8DB] rounded-[8px] w-[113px] h-[56px] bg-[#FFFFFF]">Ноорог</button>
                        <button onClick={createProduct} className="  hover:bg-black hover:text-[#FFFFFF] border-2 font-bold text-[18px] border-[#D6D8DB] rounded-[8px] w-[113px] h-[56px] bg-[#FFFFFF]">Нийтлэх</button>
                    </div>



                </div>
            </div>
        </div>
    )
}
export default CreateProduct