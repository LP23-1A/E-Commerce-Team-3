import { useEffect, useState } from "react";
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import useSWR from "swr";
import axios from "axios";

interface ProductFormProps {
    title: string
    onClick: () => void
    input: {
        productName: string;
        description: string;
        price: string;
        quantity: string;
        images: (File | null)[];
        productId: string;
        tag: string;
        mainCategory: string;
        subCategory: string;
    };
    setInput: React.Dispatch<React.SetStateAction<{
        productName: string;
        description: string;
        price: string;
        quantity: string;
        images: (File | null)[];
        productId: string;
        tag: string;
        mainCategory: string;
        subCategory: string;
    }>>
    image: FileList | [];
    setImage: React.Dispatch<React.SetStateAction<FileList | []>>
}

const ProductForm: React.FC<ProductFormProps> = ({ onClick, title, input, setInput, image, setImage }:any) => {

    const fetcher = async (url: string) => {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error: any) {
            throw error.response.data;
        }
    };
    const backendPoint = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT

    const { data, error, isLoading } = useSWR(
        `${backendPoint}/mainCategory`,
        fetcher
    );

    const [subCategory, setSubCategory] = useState<any[]>([]);

    const mapCategory = async () => {
        try {
            const res = await axios.get(`${backendPoint}/subCategory`);
            setSubCategory(res.data);
        } catch (error) {
        }
    };

    useEffect(() => {
        mapCategory();
    }, []);

    const isFormFilled =
    input.productName.trim() !== "" &&
    input.description.trim() !== "" &&
    input.productId.trim() !== "" &&
    input.images !== null &&
    input.price !== "" &&
    input.quantity !== "" &&
    input.mainCategory !== ""
    input.subCategory !== ""
    input.tag.trim() !== "";

    return (
        <div className='flex gap-6 pt-10 pb-10 pl-20 pr-20 w-full justify-between'>
            <div className='flex flex-col gap-10 w-[800px]'>
                <div className='flex flex-col gap-4 p-4 bg-[#FFFFFF] rounded-[12px] '>
                    <div className=' flex flex-col gap-2'>
                        <p className='text-sm font-bold'>Бүтээгдэхүүний нэр</p>
                        <input value={input.productName} onChange={(e) => setInput((prev:any) => ({ ...prev, productName: e.target.value }))} className='bg-[#F7F7F8] border-2 border-[#D6D8DB] p-2 rounded-[8px] w-full text-[18px]' placeholder='Нэр' />

                    </div>
                    <div className=' flex flex-col gap-2'>
                        <p className='text-sm font-bold'>Нэмэлт мэдээлэл</p>
                        <input value={input.description} onChange={(e) => setInput((prev:any) => ({ ...prev, description: e.target.value }))} className='bg-[#F7F7F8] border-2 border-[#D6D8DB] p-2 rounded-[8px] w-full h-[72px] text-fit' placeholder='Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар.' />
                    </div>
                    <div className=' flex flex-col gap-2'>
                        <p className='text-sm font-bold'>Барааны код</p>
                        <input value={input.productId} onChange={(e) => setInput((prev:any) => ({ ...prev, productId: e.target.value }))} className='bg-[#F7F7F8] border-2 border-[#D6D8DB] p-2 rounded-[8px] w-full text-[18px]' placeholder='#12345678' />
                    </div>
                </div>
                <div className="flex flex-col p-6 gap-4 bg-[#FFFFFF] rounded-[12px] " >
                    <p className="font-bold text-[18px]">Бүтээгдэхүүний зураг</p>
                    <div className="flex justify-between items-center">
                        <div className=" flex justify-center p-2 items-center h-[125px] w-[125px] rounded-2xl border-2 border-dashed border-[#D6D8DB] bg-[#FFFFFF]">
                            <InsertPhotoOutlinedIcon />
                            <input type="file" src="" alt="" onChange={(e:any) => {
                                setImage((prev:any)=> [...prev, e.target.files[0]])
                            }} multiple className="border-2 h-14 w-24 " />

                        </div>
                        <div className=" flex justify-center p-2  items-center h-[125px] w-[125px] rounded-2xl border-2 border-dashed border-[#D6D8DB] bg-[#FFFFFF]">
                            <InsertPhotoOutlinedIcon />
                            <input type="file" src="" alt="" onChange={(e:any) => {
                                setImage((prev:any) => [...prev, e.target.files[0]])
                            }} multiple className="border-2 h-14 w-24 " />

                        </div>
                        <div className=" flex justify-center p-2  items-center h-[125px] w-[125px] rounded-2xl border-2 border-dashed border-[#D6D8DB] bg-[#FFFFFF]">
                            <InsertPhotoOutlinedIcon />
                            <input type="file" src="" alt="" onChange={(e:any) => {
                                setImage((prev:any)  => [...prev, e.target.files[0]])
                            }} multiple className="border-2 h-14 w-24 " />

                        </div>
                        <div className='px-10'><div className=" flex justify-center h-[32px] w-[32px] bg-[#ECEDF0] p-1 rounded-[50%]">+</div></div>
                    </div>
                </div>
                <div className="flex   p-4 bg-[#FFFFFF] rounded-[12px] gap-4 ">
                    <div className="flex flex-col gap-2">
                        <p className='text-sm font-bold'>Үндсэн үнэ</p>
                        <input type='number' min={0} value={input.price} onChange={(e:any) => setInput((prev:any) => ({ ...prev, price: e.target.value }))} className='bg-[#F7F7F8] border-2 border-[#D6D8DB] p-2 rounded-[8px] w-[250px] text-[18px]' placeholder='Үндсэн үнэ' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className='text-sm font-bold'>Үлдэгдэл тоо ширхэг</p>
                        <input type='number' min={0} value={input.quantity} onChange={(e:any) => setInput((prev:any) => ({ ...prev, quantity: e.target.value }))} className='bg-[#F7F7F8] border-2 border-[#D6D8DB] p-2 rounded-[8px] w-[250px] text-[18px]' placeholder='Үлдэгдэл тоо ширхэг' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-[800px] gap-10'>
                <div className="flex flex-col gap-4  p-4  bg-[#FFFFFF] rounded-[12px]  ">
                    <div className="flex flex-col gap-2">
                        <p className='text-sm font-bold'>Ерөнхий ангилал</p>
                        <select value={input.mainCategory} onChange={(e:any) => setInput((prev:any) => ({ ...prev, mainCategory: e.target.value }))} className='bg-[#F7F7F8] border-2 border-[#D6D8DB] p-2 rounded-[8px] w-full text-[18px]'>
                            <option>choose</option>
                            {data && data.map((el: any) => <option value={el._id}>{el.mainCategoryName}</option>)}
                        </select>

                    </div>
                    <div className="flex flex-col gap-2">
                        <p className='text-sm font-bold'>Дэд ангилал</p>
                        <select value={input.subCategory} onChange={(e:any) => setInput((prev:any) => ({ ...prev, subCategory: e.target.value }))} className='bg-[#F7F7F8] border-2 border-[#D6D8DB] p-2 rounded-[8px] w-full text-[18px]'>
                            <option>choose</option>
                            {subCategory && subCategory.map((e:any) => <option value={e._id}>{e.subCategoryName}</option>)}
                        </select>

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
                    <input value={input.tag} onChange={(e:any) => setInput((prev:any) => ({ ...prev, tag: e.target.value }))} className='bg-[#F7F7F8] border-2 border-[#D6D8DB] p-2 rounded-[8px] w-full text-[18px]' placeholder='Таг нэмэх...' />
                    <p>Санал болгох: Гутал , Цүнх , Эмэгтэй </p>
                </div>
                <div className="flex gap-4 justify-end">
                    <button className=" hover:bg-black hover:text-[#FFFFFF] border-2 font-bold text-[18px] border-[#D6D8DB] rounded-[8px] w-[113px] h-[56px] bg-[#FFFFFF]">Ноорог</button>
                    {isFormFilled ? (
                     <button onClick={onClick} className="  hover:bg-black hover:text-[#FFFFFF] border-2 font-bold text-[18px] border-[#D6D8DB] rounded-[8px] w-[113px] h-[56px] bg-[#FFFFFF]">{title}</button>
                    ) : (
                        <button disabled onClick={onClick}  className="  hover:bg-black hover:text-[#FFFFFF] border-2 font-bold text-[18px] border-[#D6D8DB] rounded-[8px] w-[113px] h-[56px] bg-[#FFFFFF]">{title}</button> 
                    )}
                   
                </div>
            </div>
        </div>
    )
}
export default ProductForm