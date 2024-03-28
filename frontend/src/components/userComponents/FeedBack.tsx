import { useState, useEffect } from "react"
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
 
const FeedBack = ({ productName }: any) => {
 
    const [message, setMessage] = useState('');
 
    const [updated, setUpdated] = useState(message);
  
    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setMessage(event.target.value);
    };
  
    const handleClick = () => {
      setUpdated(message);
    };
    console.log(updated);
    
    return (
        <div className="px-[350px] py-20 bg-[#F9F8FE] flex flex-col" >
            <div className="px-[350px] py-20 bg-[#F9F8FE] flex flex-col">
                <div className="flex gap-6 py-6">
                    <p className="text-[#151875] font-bold text-[24px] cursor-pointer">Нэмэлт мэдээлэл</p>
                    <p className="text-[#151875] font-bold text-[24px]  border-b border-[#151875] cursor-pointer">Үнэлгээ</p>
                </div>
                <div className="flex flex-col gap-6 mt-10">
                    <p className="text-[#1D3178] text-lg font-bold">Үнэлгээ нэмэх</p>
                    <div className="w-[1200px] h-[283px] rounded-lg py-12 px-6 flex flex-col gap-[41px] bg-white">
                        <div className="border-b border-[#BFC6E0] pb-4">
                            <Stack spacing={1}>
                                <Rating name="size-small" defaultValue={2} size="small" />
                            </Stack>
                        </div>
                        <div className="border-b border-[#BFC6E0] pb-4">
                            <input type="text" placeholder="Сэтгэгдэл бичих" className="w-[1100px] outline-none" onChange={handleChange}   value={message}/>
                        </div>
                        <div className="flex justify-end">
                            <button className="w-[107px] h-[44px] flex justify-center items-center text-white rounded-sm bg-[#FB2E86]" onClick={handleClick}>Үнэлэх</button>
                        </div>
                    </div>
                </div>
 
            </div>
            <div className=" px-[350px] flex flex-col gap-6">
                <div className="flex gap-4 items-center">
                    <h3 className="text-[#1D3178] text-lg font-bold">Нийт үнэлгээ:</h3>
                    <Stack spacing={1}>
                        <Rating name="size-small" defaultValue={4} size="small" />
                    </Stack>
                </div>
                <div className="h-auto py-8 px-6 bg-white rounded-xl w-[1200px]">
                    <div className="flex flex-col border-b border-dashed border-[#BFC6E0] gap-8">
                        <Stack spacing={1}>
                            <Rating name="size-small" defaultValue={2} size="small" />
                        </Stack>
                        <div className="flex flex-col gap-2 pb-8">
                            <p className="text-[#1D3178] text-lg font-semibold">Zoloo</p>
                            <p className="text-[#9295AA] text-base font-extralight">Материал нь ёстой гоё юм байна дахиж авна аа</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 
    )
}
 
export default FeedBack
 