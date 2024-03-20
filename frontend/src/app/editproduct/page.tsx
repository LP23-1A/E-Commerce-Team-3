"use client"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import { useEffect, useState } from 'react';
import axios from "axios"
import { useRouter } from "next/navigation";
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import useSWR from 'swr';




const editProduct = () => {

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

    const productId = localStorage.getItem("productId")

    const editProduct = async () => {

        const api = `http://localhost:8000/product/${productId}`
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

            const res = await axios.put(api, { ...keys })
            router.push("/product")
            console.log("product edited");


        } catch (error) {
            console.log(error);
        }
    }


    const fetcher = async (url: string) => {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error: any) {
            throw error.response.data;
        }
    };

    const { data, error, isLoading } = useSWR("http://localhost:8000/mainCategory", fetcher);

    const [subCategory, setSubCategory] = useState();

    const mapCategory = async () => {
        try {
            const res = await axios.get("http://localhost:8000/subCategory");
            setSubCategory(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        mapCategory();
    }, []);

    return (
        <div className="flex flex-col w-full h-screen bg-gray-200 ">
            <Navbar />
            <div className="flex  items-start">
                <Sidebar />

               <div className='flex flex-col'>
               <div className='flex bg-[#FFFFFF] mt-10 w-full p-4 gap-4 cursor-pointer' onClick={movepage} >
                        <ArrowBackIosIcon />
                        <p>Буцах</p>
                </div>
                 <div className='flex h-fit '>
                  
                    <div className='flex gap-6 p-10'>
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-col gap-4 p-4 bg-[#FFFFFF] rounded-[12px] '>
                                <div className='w-[515px] flex flex-col gap-2'>
                                    <p className='text-sm font-semibold'>Бүтээгдэхүүний нэр</p>
                                    <input value={input.productName} onChange={(e) => setInput((prev) => ({ ...prev, productName: e.target.value }))} className='bg-[#F7F7F8] border border-[#D6D8DB] p-2 rounded-[8px] w-full text-[16px]' placeholder='Нэр' />

                                </div>
                                <div className='w-[515px] flex flex-col gap-2'>
                                    <p className='text-sm font-semibold'>Нэмэлт мэдээлэл</p>
                                    <input value={input.description} onChange={(e) => setInput((prev) => ({ ...prev, description: e.target.value }))} className='bg-[#F7F7F8] border border-[#D6D8DB] p-2 rounded-[8px] w-full h-[72px] text-fit' placeholder='Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар.' />
                                </div>
                                <div className='w-[515px] flex flex-col gap-2'>
                                    <p className='text-sm font-semibold'>Барааны код</p>
                                    <input value={input.productId} onChange={(e) => setInput((prev) => ({ ...prev, productId: e.target.value }))} className='bg-[#F7F7F8] border border-[#D6D8DB] p-2 rounded-[8px] w-full text-[16px]' placeholder='#12345678' />
                                </div>
                            </div>
                            <div className="flex flex-col p-6 gap-4 bg-[#FFFFFF] rounded-[12px] w-[563px]" >
                                <p className="font-semibold text-[18px]">Бүтээгдэхүүний зураг</p>
                                <div className='flex items-center justify-between'>
                                    <div className=" flex justify-center p-2 items-center h-[125px] w-[125px] rounded-2xl border-2 border-dashed border-[#D6D8DB] bg-[#FFFFFF]">
                                        <InsertPhotoOutlinedIcon />
                                        <input type="file" src="" alt="" onChange={(e) => {
                                            setImage(prev => [...prev, e.target.files[0]])
                                        }} multiple className="border-2 h-14 w-24 " />

                                    </div>
                                    <div className=" flex justify-center p-2  items-center h-[125px] w-[125px] rounded-2xl border-2 border-dashed border-[#D6D8DB] bg-[#FFFFFF]">
                                        <InsertPhotoOutlinedIcon />
                                        <input type="file" src="" alt="" onChange={(e) => {
                                            setImage(prev => [...prev, e.target.files[0]])
                                        }} multiple className="border-2 h-14 w-24 " />

                                    </div>
                                    <div className=" flex justify-center p-2  items-center h-[125px] w-[125px] rounded-2xl border-2 border-dashed border-[#D6D8DB] bg-[#FFFFFF]">
                                        <InsertPhotoOutlinedIcon />
                                        <input type="file" src="" alt="" onChange={(e) => {
                                            setImage(prev => [...prev, e.target.files[0]])
                                        }} multiple className="border-2 h-14 w-24 " />

                                    </div>
                                    <div className='px-10'><div className=" flex justify-center h-[32px] w-[32px] bg-[#ECEDF0] p-1 rounded-[50%]">+</div></div>
                                </div>
                            </div>
                            <div className="flex gap-4 w-[563px] p-4 bg-[#FFFFFF] rounded-[12px] gap-4 ">
                                <div className="flex flex-col gap-2">
                                    <p className='text-sm font-semibold'>Үндсэн үнэ</p>
                                    <input value={input.price} onChange={(e) => setInput((prev) => ({ ...prev, price: e.target.value }))} className='bg-[#F7F7F8] border border-[#D6D8DB] p-2 rounded-[8px] w-[250px] text-[16px]' placeholder='Үндсэн үнэ' />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className='text-sm font-semibold'>Үлдэгдэл тоо ширхэг</p>
                                    <input value={input.quantity} onChange={(e) => setInput((prev) => ({ ...prev, quantity: e.target.value }))} className='bg-[#F7F7F8] border border-[#D6D8DB] p-2 rounded-[8px] w-[250px] text-[16px]' placeholder='Үлдэгдэл тоо ширхэг' />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='flex flex-col gap-4 p-10'>
                        <div className="flex flex-col gap-4 w-[515px] p-4  bg-[#FFFFFF] rounded-[12px]  ">
                            <div className="flex flex-col gap-2">
                                <p className='text-sm font-semibold'>Ерөнхий ангилал</p>
                                <select value={input.mainCategory} onChange={(e) => setInput((prev) => ({ ...prev, mainCategory: e.target.value }))} className='bg-[#F7F7F8] border-2 border-[#D6D8DB] p-2 rounded-[8px] w-full text-[18px]'>
                                    <option>choose</option>
                                    {data && data.map((el: any) => <option value={el._id}>{el.mainCategoryName}</option>)}
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className='text-sm font-semibold'>Дэд ангилал</p>
                                <select value={input.subCategory} onChange={(e) => setInput((prev) => ({ ...prev, subCategory: e.target.value }))} className='bg-[#F7F7F8] border-2 border-[#D6D8DB] p-2 rounded-[8px] w-full text-[18px]'>
                                    <option>choose</option>
                                    {subCategory && subCategory.map((e) => <option value={e._id}>{e.subCategoryName}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className="p-6 bg-[#FFFFFF] flex flex-col rounded-[12px] gap-6 ">
                            <p className="text-[18px] font-semibold">Төрөл</p>
                            <div className="flex gap-4 items-center">
                                <p>Өнгө</p>
                                <div className="flex justify-center h-[32px] w-[32px] bg-[#ECEDF0] p-1 rounded-[50%]">+</div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <p>Хэмжээ</p>
                                <div className=" flex justify-center h-[32px] w-[32px] bg-[#ECEDF0] p-1 rounded-[50%]">+</div>
                            </div>
                            <button className="border border-[#D6D8DB] rounded-[8px] w-[118px] h-[36px] text-[14px] font-semibold">Төрөл нэмэх</button>
                        </div>
                        <div className="flex flex-col gap-2  p-4 h-[195px]  bg-[#FFFFFF] rounded-[12px] ">
                            <p className='text-sm font-semibold'>Таг</p>
                            <input value={input.tag} onChange={(e) => setInput((prev) => ({ ...prev, tag: e.target.value }))} className='bg-[#F7F7F8] border border-[#D6D8DB] p-2 rounded-[8px] w-full text-[16px]' placeholder='Таг нэмэх...' />
                            <p>Санал болгох: Гутал , Цүнх , Эмэгтэй </p>
                        </div>
                        <div className="flex gap-4 justify-end">
                            <button className=" hover:bg-black hover:text-[#FFFFFF] border font-semibold text-[16px] border-[#D6D8DB] rounded-[8px] w-[113px] h-[56px] bg-[#FFFFFF]">Ноорог</button>
                            <button onClick={() => editProduct()} className="  hover:bg-black hover:text-[#FFFFFF] border font-semibold text-[18px] border-[#D6D8DB] rounded-[8px] w-[113px] h-[56px] bg-[#FFFFFF]">Шинэчлэх</button>
                        </div>
                    </div>
                </div>
               </div>
            </div>
        </div>
    )
}
export default editProduct

