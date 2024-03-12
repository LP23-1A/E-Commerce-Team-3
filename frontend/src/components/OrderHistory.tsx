'use client'
import axios from "axios"
import { useState } from "react";
import StatusBar from "./StatusBar";


const OrderHistory = ({ data }: any) => {
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [statusModal, setStatusModal]=useState(false)

  const statusModalHandler =(orderId:string)=>{
    setSelectedOrderId(orderId)
    setStatusModal(!statusModal)
  }

  return (
    <div className="bg-white w-full rounded-lg    ">
      <p className="text-[20px] font-[700] p-6  ">Захиалга</p>
      <div className="">
        <div className="flex bg-[#F7F7F8] py-4 justify-around">
          <p className="w-fit">Захиалгын ID дугаар</p>
          <p className="w-fit">Үйлчлүүлэгч</p>
          <p className=" w-fit">Огноо</p>
          <p className="w-fit">Цаг</p>
          <p className="w-fit">Төлбөр</p>
          <p className="w-fit">Статус</p>
          <p className=" w-fit">Дэлгэрэнгүй</p>
        </div>
      {data && data.map((e) => (
        <div key={e._id} className="flex justify-between px-[80px]  py-3 "> 
         
          <p className="w-[100px]">#{e?.orderNumber}</p> 
        <div className="w-fit ">
          <p className="text-black w-fit">{e?.userId?.username}</p>
          <p className="text-black w-fit">{e?.userId?.email}</p>
          </div>
          <div>
            <p className="w-fit">2023-01-09</p>
          </div>
          <p className="w-fit">10:58</p>
          <p className="w-fit">{e?.amountPaid}₮</p>
          <p onClick={()=> statusModalHandler(e?._id)} className="w-fit cursor-pointer">{e?.status}</p>
          {statusModal && selectedOrderId === e?._id && <StatusBar selectedOrderId={selectedOrderId} onClick={statusModalHandler}/>}
          <p   className="w-fit cursor-pointer">{'>'}</p>
          <hr />   
        </div>
      ))}
      </div>
 
    </div>
  )
}

export default OrderHistory
