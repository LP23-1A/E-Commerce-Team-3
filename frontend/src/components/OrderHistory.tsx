"use client";
import axios from "axios";
import { useState } from "react";
import StatusBar from "./StatusBar";
import ChevronRight from "@/assets/ChevronRight";
import { useRouter } from "next/navigation";
import { useOrderFilter } from "./OrderByStatusProvider";

const OrderHistory = ({ data }: any) => {
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [statusModal, setStatusModal] = useState(false);

  const { statusFilter } = useOrderFilter();

  const filteredData = data
    ? data.filter((order) => {
        if (!statusFilter) return true;
        return order.status === statusFilter;
      })
    : [];
  const router = useRouter();
  const statusModalHandler = (orderId: string) => {
    setSelectedOrderId(orderId);
    setStatusModal(!statusModal);
  };
  return (
    <div className="bg-white w-full  rounded-lg  ml-5 h-auto py-2 ">
      <p className="text-[20px] font-[700] p-6  border-b border-slate-300 ">
        Захиалга
      </p>
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
        {filteredData &&
          filteredData.map((e: any) => (
            <div key={e._id} className="flex justify-between px-[80px]  py-3 ">
              <p className="w-[100px] text-semibold text-sm">
                #{e?.orderNumber}
              </p>
              <div className="w-fit flex flex-col">
                <p className="text-black w-fit text-semibold text-sm">
                  {e?.userId?.username}
                </p>
                <p className="text-black w-fit">{e?.userId?.email}</p>
              </div>
              <div>
                <p className="w-fit">{e.createdAt}</p>
              </div>
              <p className="w-fit">{e.createdAt}</p>
              <p className="w-fit">{e?.amountPaid}₮</p>
              <p
                onClick={() => statusModalHandler(e?._id)}
                className="w-fit cursor-pointer rounded-lg py-[2px] px-2"
              >
                {e?.status}
              </p>
              {statusModal && selectedOrderId === e?._id && (
                <StatusBar
                  selectedOrderId={selectedOrderId}
                  onClick={statusModalHandler}
                />
              )}
              <div
                onClick={() => router.push(`/${e?._id}`)}
                className="cursor-pointer"
              >
                <ChevronRight />
              </div>
              <hr />
            </div>
          ))}
      </div>
    </div>
  );
};

export default OrderHistory;
