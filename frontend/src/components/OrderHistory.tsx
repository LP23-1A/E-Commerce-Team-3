'use client'
import axios from "axios"
import { useState } from "react";
import StatusBar from "./StatusBar";
import ChevronRight from "@/assets/ChevronRight";
import { useRouter } from "next/navigation";

const OrderHistory = ({ data }: any) => {
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [statusModal, setStatusModal]=useState(false)

  const router = useRouter()

  const statusModalHandler =(orderId:string)=>{
    setSelectedOrderId(orderId)
    setStatusModal(!statusModal)
  }
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <div className="bg-white w-[1170px] rounded-lg  ml-5 h-auto pb-20 ">
      <p className="text-[20px] font-[700] p-6  border-b border-slate-300 ">Захиалга</p>
      <div className="">
        <div className="flex bg-[#F7F7F8] py-4 justify-between px-6 border-b border-slate-300">
          <p className="w-fit text-sm text-[#3F4145]">Захиалгын ID дугаар</p>
          <p className="w-fit text-sm text-[#3F4145]">Үйлчлүүлэгч</p>
          <p className=" w-fit text-sm text-[#3F4145]">Огноо</p>
          <p className="w-fit text-sm text-[#3F4145]">Цаг</p>
          <p className="w-fit text-sm text-[#3F4145]">Төлбөр</p>
          <p className="w-fit text-sm text-[#3F4145]">Статус</p>
          <p className=" w-fit text-sm text-[#3F4145]">Дэлгэрэнгүй</p>
        </div>
      {data && data.map((e) => (
        <div key={e._id} className="flex justify-between px-[80px]  py-3 "> 
          <p className="w-[100px] text-semibold text-sm">#{e?.orderNumber}</p> 
          <div className="w-fit flex flex-col">
          <p className="text-black w-fit text-semibold text-sm">{e?.userId?.username}</p>
          <p className="text-black w-fit">{e?.userId?.email}</p>
          </div>
          <div>
            <p className="w-fit">{formatDate(e.createdAt)}</p>
          </div>
          <p className="w-fit">{formatTime(e.createdAt)}</p>
          <p className="w-fit">{e?.amountPaid}₮</p>
          <p onClick={()=> statusModalHandler(e?._id)} className="w-fit cursor-pointer rounded-lg py-[2px] px-2">{e?.status}</p>
          {statusModal && selectedOrderId === e?._id && <StatusBar selectedOrderId={selectedOrderId} onClick={statusModalHandler}/>}
          <div onClick={ ()=> router.push(`/${e?._id}`)} className="cursor-pointer">
          <ChevronRight/>
          </div>
          <hr />   
        </div>
      ))}
      </div>
 
    </div>
  )
}

export default OrderHistory
